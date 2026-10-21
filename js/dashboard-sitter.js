// Sample dashboard data
var dashboardData = {
    bookings: [
        { id: 'b1', client: 'Emily R.', pet: 'Max', service: 'Walking', date: '2024-11-15', status: 'Completed', amount: 120 },
        { id: 'b2', client: 'David K.', pet: 'Whiskers', service: 'Sitting', date: '2024-11-20', status: 'Completed', amount: 250 },
        { id: 'b3', client: 'Jessica M.', pet: 'Luna', service: 'Boarding', date: '2024-11-25', status: 'Completed', amount: 400 },
        { id: 'b4', client: 'Sarah T.', pet: 'Buddy', service: 'Walking', date: '2024-12-05', status: 'Upcoming', amount: 80 },
        { id: 'b5', client: 'Mike R.', pet: 'Rocky', service: 'Grooming', date: '2024-12-12', status: 'Upcoming', amount: 150 }
    ],
    payments: [
        { id: 'p1', from: 'Emily R.', amount: 120, method: 'Venmo', date: '2024-11-15', status: 'Completed' },
        { id: 'p2', from: 'David K.', amount: 250, method: 'PayPal', date: '2024-11-20', status: 'Completed' },
        { id: 'p3', from: 'Jessica M.', amount: 400, method: 'CashApp', date: '2024-11-25', status: 'Completed' },
        { id: 'p4', from: 'Sarah T.', amount: 80, method: 'Venmo', date: '2024-12-05', status: 'Pending' }
    ]
};

var currentDashboardTab = 'overview';

// Global sidebar tab handlers (used by inline onclick in rendered HTML)
function _sitterTab(tab) {
    document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
    const btn = document.querySelector(`.sidebar-link[onclick*="${tab}"]`);
    if (btn) btn.classList.add('active');
    if (tab === 'profile-edit') {
        openSitterSignup(true);
        return;
    }
    currentDashboardTab = tab;
    document.getElementById('dashboardContent').innerHTML = getDashboardContent(tab, window._sitterDash || {});
}

function _ownerTab(view) {
    document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
    const btn = document.querySelector(`.sidebar-link[onclick*="${view}"]`);
    if (btn) btn.classList.add('active');
    if (view === 'find-sitter') {
        navigateTo('sitters');
        return;
    }
    document.getElementById('dashboardContent').innerHTML = getOwnerContent(view);
}

function renderProfilePage() {
    if (!elements.profileContent) return;
    
    if (!state.currentUser) {
        elements.profileContent.innerHTML = `
            <div class="profile-form">
                <p style="text-align: center; color: var(--text-secondary); padding: 48px;">Please log in to view your profile.</p>
            </div>
        `;
        return;
    }
    
    const isSitter = state.currentUser.type === 'sitter';
    const isShelter = state.currentUser.type === 'shelter';
    const isAdmin = state.currentUser.type === 'admin';
    
    if ((isSitter || isShelter) && !state.currentUser.profile) {
        const typeLabel = isShelter ? 'shelter' : 'sitter';
        const action = isShelter ? 'openShelterSignup()' : 'openSitterSignup()';
        elements.profileContent.innerHTML = `
            <div class="profile-form">
                <h2 style="margin-bottom: 16px;">Welcome, ${state.currentUser.name}!</h2>
                <p style="color: var(--text-secondary); margin-bottom: 24px;">Complete your ${typeLabel} profile to get started.</p>
                <button class="btn btn-primary" onclick="${action}">Complete Profile</button>
            </div>
        `;
        return;
    }
    
    if (isAdmin) {
        renderAdminDashboard();
    } else if (isSitter) {
        renderSitterDashboard();
    } else if (isShelter) {
        renderShelterDashboard();
    } else {
        renderOwnerView();
    }
}

function renderSitterDashboard() {
    const user = state.currentUser;
    const profile = user.profile;
    
    const paymentIcons = [];
    if (profile.paymentMethods?.cashapp) paymentIcons.push('CashApp');
    if (profile.paymentMethods?.venmo) paymentIcons.push('Venmo');
    if (profile.paymentMethods?.paypal) paymentIcons.push('PayPal');
    if (profile.paymentMethods?.bitcoin) paymentIcons.push('Bitcoin');
    if (profile.paymentMethods?.bank) paymentIcons.push('Bank');
    
    const allBookings = getBookings();
    const myBookings = allBookings.filter(b => b.sitterId === state.currentUser?.id);
    const totalIncome = dashboardData.payments.reduce((sum, p) => sum + p.amount, 0);
    const totalBookings = myBookings.length;
    const completedBookings = myBookings.filter(b => b.status === 'confirmed' || b.status === 'completed').length;
    const upcomingBookings = myBookings.filter(b => b.status === 'pending').length;
    const totalWithholding = Math.round(totalIncome * 0.153 * 100) / 100;
    
    window._sitterDash = { profile, paymentIcons, totalIncome, totalBookings, completedBookings, upcomingBookings, totalWithholding };
    
    elements.profileContent.innerHTML = `
        <div class="dashboard-layout">
            <aside class="dashboard-sidebar">
                <div class="sidebar-profile-summary">
                    <div class="sidebar-avatar" style="background-image: url(${profile.photo});"></div>
                    <h4>${user.name}</h4>
                    <p>${profile.location.city}, ${profile.location.state}</p>
                    <span class="sidebar-rate">$${profile.rate}/hr</span>
                </div>
                <nav class="sidebar-nav">
                    <button class="sidebar-link active" data-dashboard="overview" onclick="_sitterTab('overview')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                        Overview
                    </button>
                    <button class="sidebar-link" data-dashboard="bookings" onclick="_sitterTab('bookings')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        Bookings
                    </button>
                    <button class="sidebar-link" data-dashboard="payments" onclick="_sitterTab('payments')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                        Payments
                    </button>
                    <button class="sidebar-link" data-dashboard="income" onclick="_sitterTab('income')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        Income & Tax
                    </button>
                    <button class="sidebar-link" data-dashboard="profile-edit" onclick="_sitterTab('profile-edit')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        Profile
                    </button>
                </nav>
            </aside>
            <main class="dashboard-content" id="dashboardContent">
                ${getDashboardContent('overview', window._sitterDash)}
            </main>
        </div>
    `;
}
