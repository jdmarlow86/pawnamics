function getBookingsContent() {
    const allBookings = getBookings();
    const myBookings = allBookings.filter(b => b.sitterId === state.currentUser?.id);
    const pendingB = myBookings.filter(b => b.status === 'pending');
    const confirmedB = myBookings.filter(b => b.status === 'confirmed');
    const otherB = myBookings.filter(b => b.status !== 'pending' && b.status !== 'confirmed');
    return `
        <div class="dashboard-header">
            <h2>Booking Requests</h2>
            <p>${myBookings.length} total booking${myBookings.length !== 1 ? 's' : ''}</p>
        </div>
        ${pendingB.length > 0 ? `
        <div class="dashboard-section">
            <h3>Pending <span class="status-badge pending" style="margin-left:8px;">${pendingB.length}</span></h3>
            ${pendingB.map(b => renderBookingCard(b)).join('')}
        </div>` : ''}
        ${confirmedB.length > 0 ? `
        <div class="dashboard-section">
            <h3>Confirmed</h3>
            ${confirmedB.map(b => renderBookingCard(b)).join('')}
        </div>` : ''}
        ${otherB.length > 0 ? `
        <div class="dashboard-section">
            <h3>Past</h3>
            ${otherB.map(b => renderBookingCard(b)).join('')}
        </div>` : ''}
        ${myBookings.length === 0 ? '<p style="color: var(--text-secondary);">No booking requests yet. When pet parents contact you, their requests will appear here.</p>' : ''}
    `;
}

function renderBookingCard(b) {
    const isPending = b.status === 'pending';
    const isConfirmed = b.status === 'confirmed';
    return `
        <div class="booking-card" data-booking-id="${b.id}">
            <div class="booking-card-header">
                <div class="booking-client">
                    <div class="booking-avatar">${b.userName.split(' ').map(n => n[0]).join('').toUpperCase()}</div>
                    <div>
                        <strong>${b.userName}</strong>
                        <p style="font-size:0.8125rem;color:var(--text-secondary)">${b.petName} (${b.petType}) — ${b.service}</p>
                    </div>
                </div>
                <span class="status-badge ${b.status}">${b.status}</span>
            </div>
            <div class="booking-card-details">
                <div class="booking-detail"><span>Date</span><span>${new Date(b.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span></div>
                ${b.notes ? `<div class="booking-detail"><span>Notes</span><span>${b.notes}</span></div>` : ''}
                <div class="booking-detail"><span>Requested</span><span>${new Date(b.createdAt).toLocaleDateString()}</span></div>
            </div>
            ${isPending ? `
            <div class="booking-actions">
                <button class="btn btn-primary btn-sm" onclick="updateBooking('${b.id}','confirmed')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><polyline points="20 6 9 17 4 12"/></svg>
                    Confirm
                </button>
                <button class="btn btn-ghost btn-sm" style="color:var(--error)" onclick="updateBooking('${b.id}','removed')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    Remove
                </button>
            </div>` : ''}
            ${isConfirmed ? `
            <div class="booking-actions">
                <button class="btn btn-accent btn-sm" onclick="openVideoMeet('${b.id}','${b.userName}')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                    Video Meet
                </button>
            </div>
            <div class="message-thread" id="msg-${b.id}">
                <div class="messages-list">
                    ${b.messages.length === 0 ? '<p style="color:var(--text-muted);text-align:center;padding:16px;font-size:0.875rem;">No messages yet. Start the conversation!</p>' : b.messages.map(m => `
                        <div class="message ${m.from === 'sitter' ? 'outgoing' : 'incoming'}">
                            <div class="message-bubble">${m.text}</div>
                            <div class="message-time">${new Date(m.timestamp).toLocaleString()}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="message-input-row">
                    <input type="text" class="message-input" placeholder="Type a message..." onkeydown="if(event.key==='Enter')sendMessage('${b.id}',this)">
                    <button type="button" class="btn btn-primary btn-sm" onclick="sendMessage('${b.id}',this.previousElementSibling)">Send</button>
                </div>
            </div>` : ''}
        </div>
    `;
}

function updateBooking(id, status) {
    let bookings = getBookings();
    const idx = bookings.findIndex(b => b.id === id);
    if (idx === -1) return;
    bookings[idx].status = status;
    if (status === 'confirmed') {
        showToast('Booking confirmed! Messaging is now available.');
    } else if (status === 'removed') {
        showToast('Booking removed.');
    }
    saveBookings(bookings);
    document.getElementById('dashboardContent').innerHTML = getBookingsContent();
}

function toggleMessages(id) {
    const el = document.getElementById('msg-' + id);
    if (el) el.classList.toggle('hidden');
}

function sendMessage(bookingId, input) {
    const text = input.value?.trim();
    if (!text) return;
    let bookings = getBookings();
    const idx = bookings.findIndex(b => b.id === bookingId);
    if (idx === -1 || bookings[idx].status !== 'confirmed') return;
    bookings[idx].messages.push({ from: 'sitter', text, timestamp: new Date().toISOString() });
    saveBookings(bookings);
    input.value = '';
    const el = document.getElementById('msg-' + bookingId);
    if (el) {
        el.querySelector('.messages-list').innerHTML = bookings[idx].messages.map(m => `
            <div class="message ${m.from === 'sitter' ? 'outgoing' : 'incoming'}">
                <div class="message-bubble">${m.text}</div>
                <div class="message-time">${new Date(m.timestamp).toLocaleString()}</div>
            </div>
        `).join('');
        el.querySelector('.messages-list').scrollTop = el.querySelector('.messages-list').scrollHeight;
    }
    showToast('Message sent!');
}

function sendOwnerMessage(bookingId, input) {
    const text = input.value?.trim();
    if (!text) return;
    let bookings = getBookings();
    const idx = bookings.findIndex(b => b.id === bookingId);
    if (idx === -1 || bookings[idx].status !== 'confirmed') return;
    bookings[idx].messages.push({ from: 'owner', text, timestamp: new Date().toISOString() });
    saveBookings(bookings);
    input.value = '';
    const el = document.getElementById('msg-' + bookingId);
    if (el) {
        el.querySelector('.messages-list').innerHTML = bookings[idx].messages.map(m => `
            <div class="message ${m.from === 'sitter' ? 'incoming' : 'outgoing'}">
                <div class="message-bubble">${m.text}</div>
                <div class="message-time">${new Date(m.timestamp).toLocaleString()}</div>
            </div>
        `).join('');
        el.querySelector('.messages-list').scrollTop = el.querySelector('.messages-list').scrollHeight;
    }
    showToast('Message sent!');
}

function openVideoMeet(bookingId, otherName) {
    const modal = document.getElementById('videoMeetModal');
    if (!modal) return;
    modal.querySelectorAll('.video-other-name').forEach(el => el.textContent = otherName || 'Participant');
    modal.classList.remove('hidden');
    const booking = getBookings().find(b => b.id === bookingId);
    document.getElementById('videoMeetEnd').onclick = function() { closeVideoMeet(); };

    const keyHandler = function(e) { if (e.key === 'Escape') { closeVideoMeet(); document.removeEventListener('keydown', keyHandler); } };
    document.addEventListener('keydown', keyHandler);

    const muteBtn = document.getElementById('videoMuteBtn');
    const camBtn = document.getElementById('videoCamBtn');
    const chatBtn = document.getElementById('videoChatBtn');
    const shareBtn = document.getElementById('videoShareBtn');

    muteBtn.onclick = function() {
        const isMuted = this.classList.toggle('active');
        this.querySelector('.mic-on').style.display = isMuted ? 'none' : '';
        this.querySelector('.mic-off').style.display = isMuted ? '' : 'none';
        let badge = this.closest('.video-meet-container').querySelector('.video-local .video-placeholder-indicator');
        if (isMuted) {
            if (!badge) {
                badge = document.createElement('div');
                badge.className = 'video-placeholder-indicator';
                badge.textContent = 'Muted';
                const local = this.closest('.video-meet-container').querySelector('.video-local');
                if (local) local.appendChild(badge);
            }
        } else {
            if (badge) badge.remove();
        }
    };

    camBtn.onclick = function() {
        const isOff = this.classList.toggle('active-cam');
        this.querySelector('.cam-on').style.display = isOff ? 'none' : '';
        this.querySelector('.cam-off').style.display = isOff ? '' : 'none';
        const local = this.closest('.video-meet-container').querySelector('.video-local');
        const placeholder = local ? local.querySelector('.video-placeholder') : null;
        if (placeholder) {
            placeholder.style.display = isOff ? 'none' : '';
        }
        if (isOff) {
            let badge = local ? local.querySelector('.video-placeholder-indicator') : null;
            if (!badge) {
                badge = document.createElement('div');
                badge.className = 'video-placeholder-indicator';
                badge.textContent = 'Video Off';
                if (local) local.appendChild(badge);
            }
        } else {
            const existing = local ? local.querySelector('.video-placeholder-indicator') : null;
            if (existing && !muteBtn.classList.contains('active')) existing.remove();
        }
    };

    chatBtn.onclick = function() {
        const isOpen = this.classList.toggle('active-chat');
        const panel = document.getElementById('videoChatPanel');
        if (panel) panel.classList.toggle('hidden', !isOpen);
    };

    shareBtn.onclick = function() {
        const isSharing = this.classList.toggle('active-share');
        const remote = this.closest('.video-meet-container').querySelector('.video-remote');
        if (!remote) return;
        let overlay = remote.querySelector('.video-share-overlay');
        if (isSharing) {
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'video-share-overlay';
                overlay.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:36px;height:36px"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg><span style="font-size:0.9375rem;font-weight:600;">Screen Sharing</span><span style="font-size:0.75rem;color:var(--text-muted)">Your screen is being shared</span>';
                remote.appendChild(overlay);
            }
            overlay.style.display = '';
        } else {
            if (overlay) overlay.style.display = 'none';
        }
    };
}

function closeVideoMeet() {
    const modal = document.getElementById('videoMeetModal');
    if (modal) {
        modal.classList.add('hidden');
        document.getElementById('videoChatPanel')?.classList.add('hidden');
        document.querySelectorAll('.video-control-btn.active, .video-control-btn.active-cam, .video-control-btn.active-chat, .video-control-btn.active-share').forEach(b => {
            b.classList.remove('active', 'active-cam', 'active-chat', 'active-share');
        });
        document.querySelectorAll('.video-local .video-placeholder-indicator, .video-remote .video-share-overlay').forEach(el => el.remove());
        document.getElementById('videoMuteBtn')?.querySelector('.mic-on')?.style?.removeProperty('display');
        document.getElementById('videoMuteBtn')?.querySelector('.mic-off')?.style?.removeProperty('display');
        document.getElementById('videoCamBtn')?.querySelector('.cam-on')?.style?.removeProperty('display');
        document.getElementById('videoCamBtn')?.querySelector('.cam-off')?.style?.removeProperty('display');
        const localPlaceholder = modal.querySelector('.video-local .video-placeholder');
        if (localPlaceholder) localPlaceholder.style.display = '';
    }
}

function sendVideoChatMsg(input) {
    if (!input || !input.value.trim()) return;
    const container = document.getElementById('videoChatMessages');
    const msg = document.createElement('div');
    msg.className = 'video-chat-msg';
    const name = state.currentUser?.name || 'You';
    msg.innerHTML = `<span class="video-chat-author">${name}</span> ${input.value.trim()}`;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
    input.value = '';
}

function getPaymentsContent() {
    return `
        <div class="dashboard-header">
            <h2>Payment History</h2>
            <p>All transactions</p>
        </div>
        <div class="dashboard-section">
            <div class="dashboard-table-wrap">
                <table class="dashboard-table">
                    <thead><tr><th>From</th><th>Method</th><th>Date</th><th>Status</th><th>Amount</th></tr></thead>
                    <tbody>
                        ${dashboardData.payments.map(p => `
                            <tr>
                                <td>${p.from}</td>
                                <td><span class="payment-method-badge">${p.method}</span></td>
                                <td>${p.date}</td>
                                <td><span class="status-badge ${p.status.toLowerCase()}">${p.status}</span></td>
                                <td>$${p.amount}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function getIncomeContent(data) {
    const { totalIncome, totalWithholding } = data;
    return `
        <div class="dashboard-header">
            <h2>Income & Tax Information</h2>
            <p>1099 contractor summary</p>
        </div>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-card-icon income">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div class="stat-card-info">
                    <span class="stat-card-value">$${totalIncome}</span>
                    <span class="stat-card-label">Gross Income</span>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-card-icon tax">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                </div>
                <div class="stat-card-info">
                    <span class="stat-card-value">$${totalWithholding.toFixed(2)}</span>
                    <span class="stat-card-label">Self-Employment Tax (15.3%)</span>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-card-icon net">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>
                <div class="stat-card-info">
                    <span class="stat-card-value">$${(totalIncome - totalWithholding).toFixed(2)}</span>
                    <span class="stat-card-label">Estimated Net Income</span>
                </div>
            </div>
        </div>
        <div class="dashboard-section">
            <h3>1099 Tax Forms</h3>
            <div class="tax-links">
                <a href="#" class="tax-link" onclick="showToast('1099-NEC for ${new Date().getFullYear()-1} will be available by Jan 31, ${new Date().getFullYear()}'); return false;">
                    <div class="tax-link-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                    </div>
                    <div>
                        <strong>1099-NEC (${new Date().getFullYear()-1})</strong>
                        <p>Nonemployee Compensation</p>
                    </div>
                    <span class="tax-status">Pending</span>
                </a>
                <a href="#" class="tax-link" onclick="showToast('1099-MISC for ${new Date().getFullYear()-1} will be available by Jan 31, ${new Date().getFullYear()}'); return false;">
                    <div class="tax-link-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                    </div>
                    <div>
                        <strong>1099-MISC (${new Date().getFullYear()-1})</strong>
                        <p>Miscellaneous Income</p>
                    </div>
                    <span class="tax-status">Pending</span>
                </a>
            </div>
        </div>
        <div class="dashboard-section">
            <h3>Estimated Tax Withholdings</h3>
            <div class="tax-breakdown">
                <div class="tax-row">
                    <span>Gross Income</span>
                    <span>$${totalIncome.toFixed(2)}</span>
                </div>
                <div class="tax-row">
                    <span>Self-Employment Tax (15.3%)</span>
                    <span>-$${totalWithholding.toFixed(2)}</span>
                </div>
                <div class="tax-row">
                    <span>Estimated Federal (12%)</span>
                    <span>-$${(totalIncome * 0.12).toFixed(2)}</span>
                </div>
                <div class="tax-row">
                    <span>Estimated State (4%)</span>
                    <span>-$${(totalIncome * 0.04).toFixed(2)}</span>
                </div>
                <div class="tax-row total">
                    <span>Estimated Net Income</span>
                    <span>$${(totalIncome - totalWithholding - totalIncome * 0.16).toFixed(2)}</span>
                </div>
            </div>
            <p style="color: var(--text-muted); font-size: 0.875rem; margin-top: 16px;">These are estimated calculations. Consult a tax professional for accurate filing.</p>
        </div>
    `;
}

function renderOwnerView() {
    const user = state.currentUser;
    elements.profileContent.innerHTML = `
        <div class="dashboard-layout">
            <aside class="dashboard-sidebar">
                <div class="sidebar-profile-summary">
                    <div class="sidebar-avatar" style="background: var(--accent-primary); display: flex; align-items: center; justify-content: center; color: var(--bg-primary); font-weight: 700; font-size: 1.5rem;">
                        ${user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                    <h4>${user.name}</h4>
                    <p>Pet Parent</p>
                </div>
                <nav class="sidebar-nav">
                    <button class="sidebar-link active" data-view="my-sitter" onclick="_ownerTab('my-sitter')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        My Sitter
                    </button>
                    <button class="sidebar-link" data-view="history" onclick="_ownerTab('history')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        History
                    </button>
                    <button class="sidebar-link" data-view="find-sitter" onclick="_ownerTab('find-sitter')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                        Find Sitters
                    </button>
                </nav>
            </aside>
            <main class="dashboard-content" id="dashboardContent">
                ${getOwnerContent('my-sitter')}
            </main>
        </div>
    `;
}

function getOwnerContent(view) {
    if (view === 'my-sitter') {
        const sitter = sampleSitters[0];
        const allBookings = getBookings();
        const myBookings = allBookings.filter(b => b.userId === state.currentUser?.email && (b.status === 'confirmed' || b.status === 'pending'));
        const activeBooking = myBookings[myBookings.length - 1];
        return `
            <div class="dashboard-header">
                <h2>My Sitter</h2>
                <p>${activeBooking ? 'You have an active booking with ' + activeBooking.sitterName : 'Your preferred pet care professional'}</p>
            </div>
            ${activeBooking ? `
            <div class="my-sitter-card">
                <div class="my-sitter-photo">
                    <img src="${activeBooking.sitterPhoto}" alt="${activeBooking.sitterName}">
                </div>
                <div class="my-sitter-info">
                    <h3>${activeBooking.sitterName}</h3>
                    <div class="booking-detail"><span>Service</span><span>${activeBooking.service}</span></div>
                    <div class="booking-detail"><span>Pet</span><span>${activeBooking.petName} (${activeBooking.petType})</span></div>
                    <div class="booking-detail"><span>Date</span><span>${new Date(activeBooking.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span></div>
                    <div class="booking-detail"><span>Status</span><span class="status-badge ${activeBooking.status}" style="margin:0;">${activeBooking.status}</span></div>
                    <p style="color: var(--accent-primary); font-weight: 700; font-size: 1.25rem; margin-top: 12px;">$${activeBooking.sitterRate}/hr</p>
                    ${activeBooking.status === 'confirmed' ? `
                    <div style="margin-top:16px;">
                        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
                            <button class="btn btn-accent" onclick="openVideoMeet('${activeBooking.id}','${activeBooking.sitterName}')">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                                Video Meet
                            </button>
                        </div>
                        <div class="message-thread" id="msg-${activeBooking.id}" style="margin-top:0;">
                            <div class="messages-list">
                                ${activeBooking.messages.length === 0 ? '<p style="color:var(--text-muted);text-align:center;padding:16px;font-size:0.875rem;">No messages yet.</p>' : activeBooking.messages.map(m => `
                                    <div class="message ${m.from === 'sitter' ? 'incoming' : 'outgoing'}">
                                        <div class="message-bubble">${m.text}</div>
                                        <div class="message-time">${new Date(m.timestamp).toLocaleString()}</div>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="message-input-row">
                                <input type="text" class="message-input" placeholder="Type a message..." onkeydown="if(event.key==='Enter')sendOwnerMessage('${activeBooking.id}',this)">
                                <button type="button" class="btn btn-primary btn-sm" onclick="sendOwnerMessage('${activeBooking.id}',this.previousElementSibling)">Send</button>
                            </div>
                        </div>
                    </div>` : `
                    <p style="color: var(--text-secondary); font-size: 0.875rem; margin-top: 12px;">Waiting for ${activeBooking.sitterName.split(' ')[0]} to confirm your booking...</p>
                    `}
                </div>
            </div>
            ` : `
            <div class="my-sitter-card">
                <div class="my-sitter-photo">
                    <img src="${sitter.photo}" alt="${sitter.name}">
                </div>
                <div class="my-sitter-info">
                    <h3>${sitter.name}</h3>
                    <div class="sitter-card-rating" style="margin-bottom: 8px;">
                        <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        <span>${sitter.rating} (${sitter.reviewCount} reviews)</span>
                    </div>
                    <p style="color: var(--text-secondary); margin-bottom: 12px;">${sitter.location.city}, ${sitter.location.state}</p>
                    <div class="sitter-card-services">
                        ${sitter.services.map(s => `<span class="service-badge">${s}</span>`).join('')}
                    </div>
                    <p style="color: var(--accent-primary); font-weight: 700; font-size: 1.25rem; margin-top: 12px;">$${sitter.rate}/hr</p>
                    <button class="btn btn-primary" style="margin-top: 16px;" onclick="navigateTo('sitters')">Find a Sitter</button>
                </div>
            </div>
            `}
        `;
    }
    
    if (view === 'history') {
        const allBookings = getBookings();
        const myBookings = allBookings.filter(b => b.userId === state.currentUser?.email).reverse();
        return `
            <div class="dashboard-header">
                <h2>Booking History</h2>
                <p>${myBookings.length} past booking${myBookings.length !== 1 ? 's' : ''}</p>
            </div>
            ${myBookings.length === 0 ? '<p style="color: var(--text-secondary);">No bookings yet. Head to Find Sitters to book your first pet sitter!</p>' : `
            <div class="dashboard-section">
                ${myBookings.map(b => `
                    <div class="booking-card" data-booking-id="${b.id}">
                        <div class="booking-card-header">
                            <div class="booking-client">
                                <div class="booking-avatar" style="background-image:url(${b.sitterPhoto})">${!b.sitterPhoto ? b.sitterName.split(' ').map(n=>n[0]).join('').toUpperCase() : ''}</div>
                                <div>
                                    <strong>${b.sitterName}</strong>
                                    <p style="font-size:0.8125rem;color:var(--text-secondary)">${b.petName} (${b.petType}) — ${b.service}</p>
                                </div>
                            </div>
                            <span class="status-badge ${b.status}">${b.status}</span>
                        </div>
                        <div class="booking-card-details">
                            <div class="booking-detail"><span>Date</span><span>${new Date(b.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span></div>
                            ${b.notes ? `<div class="booking-detail"><span>Notes</span><span>${b.notes}</span></div>` : ''}
                        </div>
                        ${b.status === 'confirmed' ? `
                        <div class="booking-actions">
                            <button class="btn btn-accent btn-sm" onclick="openVideoMeet('${b.id}','${b.sitterName}')">Video Meet</button>
                        </div>
                        <div class="message-thread" id="msg-${b.id}">
                                <div class="messages-list">
                                    ${b.messages.length === 0 ? '<p style="color:var(--text-muted);text-align:center;padding:16px;">No messages yet.</p>' : b.messages.map(m => `
                                        <div class="message ${m.from === 'sitter' ? 'incoming' : 'outgoing'}">
                                            <div class="message-bubble">${m.text}</div>
                                            <div class="message-time">${new Date(m.timestamp).toLocaleString()}</div>
                                        </div>
                                    `).join('')}
                                </div>
                                <div class="message-input-row">
                                    <input type="text" class="message-input" placeholder="Type a message..." onkeydown="if(event.key==='Enter')sendOwnerMessage('${b.id}',this)">
                                    <button type="button" class="btn btn-primary btn-sm" onclick="sendOwnerMessage('${b.id}',this.previousElementSibling)">Send</button>
                            </div>
                        </div>` : ''}
                    </div>
                `).join('')}
            </div>`}
        `;
    }
    
    return '';
}
