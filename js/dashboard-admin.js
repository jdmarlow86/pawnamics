/* ── Admin Dashboard ──────────────────────────────────────────── */

function renderAdminDashboard() {
    const users = JSON.parse(localStorage.getItem('pawnamics_users') || '[]');
    const shelters = JSON.parse(localStorage.getItem('pawnamics_shelters') || '[]');
    const totalUsers = users.length;
    const pendingShelters = shelters.filter(s => s.status === 'unconfirmed');
    const allShelters = shelters.length;

    elements.profileContent.innerHTML = `
        <div class="dashboard-layout">
            <aside class="dashboard-sidebar">
                <div class="sidebar-profile-summary">
                    <div class="sidebar-avatar" style="background:var(--accent-secondary);display:flex;align-items:center;justify-content:center;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" style="width:32px;height:32px;"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                    </div>
                    <h4>Admin</h4>
                    <p>PawNamics</p>
                    <span class="sidebar-rate" style="font-size:0.8125rem;text-transform:uppercase;color:var(--accent-primary);">Administrator</span>
                </div>
                <nav class="sidebar-nav">
                    <button class="sidebar-link active" data-admin="overview" onclick="_adminTab('overview')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                        Overview
                    </button>
                    <button class="sidebar-link" data-admin="shelters" onclick="_adminTab('shelters')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l9 4.5v7.5a8 8 0 0 1-9 7.5 8 8 0 0 1-9-7.5V6.5L12 2z"/></svg>
                        Shelter Requests ${pendingShelters.length > 0 ? `<span class="status-badge pending" style="margin-left:6px;font-size:0.6875rem;">${pendingShelters.length}</span>` : ''}
                    </button>
                </nav>
            </aside>
            <main class="dashboard-content" id="adminDashboardContent">
                ${getAdminContent('overview', { totalUsers, allShelters, pendingShelters })}
            </main>
        </div>
    `;
}

function getAdminContent(tab, data) {
    switch (tab) {
        case 'overview': return getAdminOverview(data);
        case 'shelters': return getAdminShelters(data);
        default: return getAdminOverview(data);
    }
}

function getAdminOverview(data) {
    const { totalUsers, allShelters, pendingShelters } = data;
    return `
        <div class="dashboard-header">
            <h2>Admin Dashboard</h2>
            <p>PawNamics platform overview</p>
        </div>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-card-icon" style="background:rgba(108,92,231,0.15);color:var(--accent-secondary);">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div class="stat-card-info">
                    <span class="stat-card-value">${totalUsers}</span>
                    <span class="stat-card-label">Total Users</span>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-card-icon" style="background:rgba(52,211,153,0.15);color:var(--success);">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l9 4.5v7.5a8 8 0 0 1-9 7.5 8 8 0 0 1-9-7.5V6.5L12 2z"/></svg>
                </div>
                <div class="stat-card-info">
                    <span class="stat-card-value">${allShelters}</span>
                    <span class="stat-card-label">Shelters Registered</span>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-card-icon" style="background:rgba(245,166,35,0.15);color:var(--warning);">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <div class="stat-card-info">
                    <span class="stat-card-value">${pendingShelters.length}</span>
                    <span class="stat-card-label">Pending Approvals</span>
                </div>
            </div>
        </div>
        ${pendingShelters.length > 0 ? `
        <div class="dashboard-section">
            <h3>Pending Shelter Registrations</h3>
            ${pendingShelters.slice(0, 5).map(s => `
                <div class="booking-card" style="margin-top:12px;">
                    <div class="booking-card-header">
                        <div class="booking-client">
                            <div class="booking-avatar" ${s.photo ? `style="background-image:url(${s.photo});background-size:cover;background-position:center;"` : ''}>${!s.photo ? s.name.split(' ').map(n => n[0]).join('').toUpperCase() : ''}</div>
                            <div>
                                <strong>${s.name}</strong>
                                <p style="font-size:0.8125rem;color:var(--text-secondary)">${s.email} &middot; ${s.phone}</p>
                            </div>
                        </div>
                        <span class="status-badge pending">Unconfirmed</span>
                    </div>
                    <div class="booking-card-details">
                        <div class="booking-detail"><span>Address</span><span>${s.address}</span></div>
                        <div class="booking-detail"><span>Submitted</span><span>${new Date(s.createdAt).toLocaleDateString()}</span></div>
                    </div>
                    <div class="booking-actions">
                        <button class="btn btn-primary btn-sm" onclick="approveShelter('${s.id}')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><polyline points="20 6 9 17 4 12"/></svg>
                            Approve
                        </button>
                        <button class="btn btn-ghost btn-sm" style="color:var(--error)" onclick="denyShelter('${s.id}')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                            Deny
                        </button>
                    </div>
                </div>
            `).join('')}
            ${pendingShelters.length > 5 ? `<p style="color:var(--text-muted);font-size:0.875rem;margin-top:12px;">+ ${pendingShelters.length - 5} more pending. View all in Shelter Requests tab.</p>` : ''}
        </div>` : '<p style="color:var(--text-secondary);margin-top:24px;">No pending shelter registrations.</p>'}
    `;
}

function getAdminShelters(data) {
    const allShelters = JSON.parse(localStorage.getItem('pawnamics_shelters') || '[]');
    if (allShelters.length === 0) return '<div class="dashboard-header"><h2>Shelter Requests</h2><p>No shelter registrations yet.</p></div>';

    return `
        <div class="dashboard-header">
            <h2>Shelter Requests</h2>
            <p>${allShelters.length} total registration${allShelters.length !== 1 ? 's' : ''}</p>
        </div>
        ${['unconfirmed', 'confirmed', 'denied'].map(status => {
            const filtered = allShelters.filter(s => s.status === status);
            if (filtered.length === 0) return '';
            const label = status === 'unconfirmed' ? 'Pending' : status === 'confirmed' ? 'Approved' : 'Denied';
            const badgeClass = status === 'unconfirmed' ? 'pending' : status === 'confirmed' ? 'confirmed' : 'removed';
            return `
                <div class="dashboard-section">
                    <h3>${label} <span class="status-badge ${badgeClass}" style="margin-left:8px;">${filtered.length}</span></h3>
                    ${filtered.map(s => `
                        <div class="booking-card" style="margin-top:12px;">
                            <div class="booking-card-header">
                                <div class="booking-client">
                                    <div class="booking-avatar" ${s.photo ? `style="background-image:url(${s.photo});background-size:cover;background-position:center;"` : ''}>${!s.photo ? s.name.split(' ').map(n => n[0]).join('').toUpperCase() : ''}</div>
                                    <div>
                                        <strong>${s.name}</strong>
                                        <p style="font-size:0.8125rem;color:var(--text-secondary)">${s.email} &middot; ${s.phone}</p>
                                    </div>
                                </div>
                                <span class="status-badge ${badgeClass}">${label}</span>
                            </div>
                            <div class="booking-card-details">
                                <div class="booking-detail"><span>Address</span><span>${s.address}</span></div>
                                <div class="booking-detail"><span>Website</span><span>${s.website || 'N/A'}</span></div>
                                <div class="booking-detail"><span>Submitted</span><span>${new Date(s.createdAt).toLocaleDateString()}</span></div>
                                <div class="booking-detail"><span>Description</span><span>${s.description || 'N/A'}</span></div>
                            </div>
                            ${status === 'unconfirmed' ? `
                            <div class="booking-actions">
                                <button class="btn btn-primary btn-sm" onclick="approveShelter('${s.id}')">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><polyline points="20 6 9 17 4 12"/></svg>
                                    Approve
                                </button>
                                <button class="btn btn-ghost btn-sm" style="color:var(--error)" onclick="denyShelter('${s.id}')">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                                    Deny
                                </button>
                            </div>` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        }).join('')}
    `;
}

function approveShelter(shelterId) {
    if (updateShelterStatus(shelterId, 'confirmed')) {
        showToast('Shelter approved!');
        // Notify the shelter owner if they exist
        const shelters = JSON.parse(localStorage.getItem('pawnamics_shelters') || '[]');
        const shelter = shelters.find(s => s.id === shelterId);
        if (shelter) {
            const users = JSON.parse(localStorage.getItem('pawnamics_users') || '[]');
            const owner = users.find(u => u.id === shelter.userId);
            if (owner) {
                showToast(owner.name + '\'s shelter "' + shelter.name + '" has been approved.');
            }
        }
        _adminTab('shelters');
    }
}

function denyShelter(shelterId) {
    if (updateShelterStatus(shelterId, 'denied')) {
        showToast('Shelter registration denied.');
        _adminTab('shelters');
    }
}

function _adminTab(tab) {
    const content = document.getElementById('adminDashboardContent');
    if (!content) return;
    document.querySelectorAll('.sidebar-link[data-admin]').forEach(b => b.classList.toggle('active', b.dataset.admin === tab));
    const users = JSON.parse(localStorage.getItem('pawnamics_users') || '[]');
    const shelters = JSON.parse(localStorage.getItem('pawnamics_shelters') || '[]');
    const pendingShelters = shelters.filter(s => s.status === 'unconfirmed');
    content.innerHTML = getAdminContent(tab, { totalUsers: users.length, allShelters: shelters.length, pendingShelters });
}

/* ── Shelter tab switcher ─────────────────────────────────────── */

function _shelterTab(tab) {
    const content = document.getElementById('shelterDashboardContent');
    if (!content) return;
    const shelter = getShelterProfile();
    const adoptionsCount = (shelter?.featuredAdoptions || []).length;
    window._shelterDash = { shelter, adoptionsCount };
    document.querySelectorAll('.sidebar-link[data-shelter]').forEach(b => b.classList.toggle('active', b.dataset.shelter === tab));
    content.innerHTML = getShelterContent(tab, window._shelterDash);
}


function getDashboardContent(tab, data) {
    switch (tab) {
        case 'overview': return getOverviewContent(data);
        case 'bookings': return getBookingsContent();
        case 'payments': return getPaymentsContent();
        case 'income': return getIncomeContent(data);
        default: return '';
    }
}

function getOverviewContent(data) {
    const { profile, paymentIcons, totalIncome, totalBookings, completedBookings, upcomingBookings, totalWithholding } = data;
    const allBookings = getBookings();
    const myBookings = allBookings.filter(b => b.sitterId === state.currentUser?.id);
    const recentBookings = myBookings.slice(-3).reverse();
    return `
        <div class="dashboard-header">
            <h2>Dashboard</h2>
            <p>Welcome back, ${state.currentUser.name}!</p>
        </div>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-card-icon income">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div class="stat-card-info">
                    <span class="stat-card-value">$${totalIncome}</span>
                    <span class="stat-card-label">Total Income</span>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-card-icon bookings">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <div class="stat-card-info">
                    <span class="stat-card-value">${totalBookings}</span>
                    <span class="stat-card-label">Total Bookings</span>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-card-icon completed">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div class="stat-card-info">
                    <span class="stat-card-value">${completedBookings}</span>
                    <span class="stat-card-label">Confirmed</span>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-card-icon upcoming">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div class="stat-card-info">
                    <span class="stat-card-value">${upcomingBookings}</span>
                    <span class="stat-card-label">Pending</span>
                </div>
            </div>
        </div>
        <div class="dashboard-section">
            <h3>Recent Booking Requests</h3>
            ${recentBookings.length === 0 ? '<p style="color: var(--text-secondary);">No bookings yet.</p>' : `
            <div class="dashboard-table-wrap">
                <table class="dashboard-table">
                    <thead><tr><th>Client</th><th>Pet</th><th>Service</th><th>Date</th><th>Status</th></tr></thead>
                    <tbody>
                        ${recentBookings.map(b => `
                            <tr>
                                <td>${b.userName}</td>
                                <td>${b.petName}</td>
                                <td>${b.service}</td>
                                <td>${new Date(b.date).toLocaleDateString()}</td>
                                <td><span class="status-badge ${b.status}">${b.status}</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            `}
        </div>
        <div class="dashboard-section">
            <h3>Quick Actions</h3>
            <div class="quick-actions">
                <button class="btn btn-secondary" onclick="_sitterTab('bookings')">View All Bookings</button>
                <button class="btn btn-secondary" onclick="_sitterTab('income')">Tax Documents</button>
                <button class="btn btn-secondary" onclick="openSitterSignup(true)">Edit Profile</button>
            </div>
        </div>
    `;
}
