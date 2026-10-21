// Render Functions
function renderSitterCard(sitter, isFeatured = false) {
    const badge = sitter.subscription === 'premium' ? 'Premium' : sitter.subscription === 'pro' ? 'Pro' : '';
    
    return `
        <div class="sitter-card animate-fade-up" data-sitter-id="${sitter.id}">
            <div class="sitter-card-image">
                <img src="${sitter.photo}" alt="${sitter.name}" loading="lazy">
                ${badge ? `<span class="sitter-card-badge">${badge}</span>` : ''}
            </div>
            <div class="sitter-card-content">
                <div class="sitter-card-header">
                    <h3 class="sitter-card-name">${sitter.name}</h3>
                    <div class="sitter-card-rating">
                        <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        <span>${sitter.rating} (${sitter.reviewCount})</span>
                    </div>
                </div>
                <div class="sitter-card-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    ${sitter.location.city}, ${sitter.location.state}
                </div>
                <div class="sitter-card-rate">$${sitter.rate}<span>/hr</span></div>
                <div class="sitter-card-services">
                    ${sitter.services.map(s => `<span class="service-badge">${s}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderFeaturedSitters() {
    if (!elements.featuredSitters) return;
    const featured = sampleSitters.filter(s => s.subscription === 'premium' || s.rating >= 4.8).slice(0, 3);
    elements.featuredSitters.innerHTML = featured.map(s => renderSitterCard(s, true)).join('');
}

function renderSittersResults(sitters = sampleSitters) {
    if (!elements.sittersResults) return;
    elements.sittersResults.innerHTML = sitters.map(s => renderSitterCard(s)).join('');
}

// Lookup sitter by ID from sampleSitters and localStorage user profiles
function findSitterById(id) {
    const fromSample = sampleSitters.find(s => s.id === id);
    if (fromSample) return fromSample;
    try {
        const savedUsers = localStorage.getItem('pawnamics_users');
        if (!savedUsers) return null;
        const users = JSON.parse(savedUsers);
        const match = users.find(u => u.id === id && u.type === 'sitter' && u.profile);
        if (!match) return null;
        return {
            id: match.id,
            name: match.name,
            photo: match.profile.photo,
            bio: match.profile.bio,
            location: match.profile.location,
            rate: match.profile.rate,
            services: match.profile.services,
            experience: match.profile.experience || 0,
            rating: match.profile.rating || 0,
            reviewCount: match.profile.reviewCount || 0,
            subscription: match.subscription || 'free',
            paymentMethods: match.profile.paymentMethods,
            phone: match.phone || match.profile.phone || '',
            email: match.email || ''
        };
    } catch (e) {
        return null;
    }
}

// Booking Storage
function getBookings() {
    try { return JSON.parse(localStorage.getItem('pawnamics_bookings') || '[]'); } catch { return []; }
}
function saveBookings(bookings) {
    localStorage.setItem('pawnamics_bookings', JSON.stringify(bookings));
}

function openSitterModal(sitter) {
    if (!sitter || !elements.sitterModalBody) return;
    
    const paymentIcons = [];
    if (sitter.paymentMethods?.cashapp) paymentIcons.push('CashApp');
    if (sitter.paymentMethods?.venmo) paymentIcons.push('Venmo');
    if (sitter.paymentMethods?.paypal) paymentIcons.push('PayPal');
    if (sitter.paymentMethods?.bitcoin) paymentIcons.push('Bitcoin');
    if (sitter.paymentMethods?.bank) paymentIcons.push('Bank');
    
    const showContactInfo = !state.currentUser;
    const showForm = !!state.currentUser;
    
    elements.sitterModalBody.innerHTML = `
        <div class="sitter-modal-header">
            <div class="sitter-modal-photo">
                <img src="${sitter.photo}" alt="${sitter.name}">
            </div>
            <div class="sitter-modal-info">
                <h2>${sitter.name}</h2>
                <div class="sitter-modal-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    ${sitter.location.city}, ${sitter.location.state}
                </div>
                <div class="sitter-modal-rating">
                    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <span>${sitter.rating}</span>
                    <span style="color: var(--text-secondary); font-weight: 400">(${sitter.reviewCount} reviews)</span>
                </div>
            </div>
        </div>
        <div class="sitter-modal-section">
            <h3>About</h3>
            <p class="sitter-modal-bio">${sitter.bio}</p>
        </div>
        <div class="sitter-modal-section">
            <h3>Rate</h3>
            <div class="sitter-modal-rate">$${sitter.rate}<span>/hour</span></div>
        </div>
        <div class="sitter-modal-section">
            <h3>Services</h3>
            <div class="sitter-modal-services">
                ${sitter.services.map(s => `<span class="service-badge">${s}</span>`).join('')}
            </div>
        </div>
        ${paymentIcons.length > 0 ? `
            <div class="sitter-modal-section">
                <h3>Payment Methods</h3>
                <div class="payment-icons">
                    ${paymentIcons.map(p => `<span class="payment-icon">${p}</span>`).join('')}
                </div>
            </div>
        ` : ''}
        
        <div class="contact-section">
            ${showContactInfo ? `
                <div class="sitter-contact-info">
                    <h3>Contact Information</h3>
                    <div class="contact-detail">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        <span>${sitter.phone}</span>
                    </div>
                    <div class="contact-detail">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        <span>${sitter.email}</span>
                    </div>
                </div>
            ` : ''}
            ${showForm ? `
                <div class="contact-form">
                    <h3>Book ${sitter.name.split(' ')[0]}</h3>
                    <p style="color: var(--text-secondary); margin-bottom: 16px; font-size: 0.875rem;">Send a booking request — ${sitter.name.split(' ')[0]} will confirm shortly!</p>
                    <form id="bookingForm" onsubmit="return submitBookingRequest(event, '${sitter.id}')">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="bkPetName">Pet's Name</label>
                                <input type="text" id="bkPetName" required placeholder="e.g. Max">
                            </div>
                            <div class="form-group">
                                <label for="bkPetType">Pet Type</label>
                                <select id="bkPetType" required>
                                    <option value="">Select...</option>
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                    <option value="bird">Bird</option>
                                    <option value="reptile">Reptile</option>
                                    <option value="small-mammal">Small Mammal</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="bkService">Service Needed</label>
                                <select id="bkService" required>
                                    <option value="">Select...</option>
                                    ${sitter.services.map(s => `<option value="${s}">${s.charAt(0).toUpperCase() + s.slice(1)}</option>`).join('')}
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="bkDate">When?</label>
                                <input type="date" id="bkDate" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="bkNotes">Notes (optional)</label>
                            <textarea id="bkNotes" rows="3" placeholder="Tell ${sitter.name.split(' ')[0]} about your pet's needs..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-full" style="margin-top: 8px;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                            Send Booking Request
                        </button>
                    </form>
                </div>
            ` : ''}
        </div>
    `;
    
    if (showForm) {
        const today = new Date();
        document.getElementById('bkDate').min = today.toISOString().split('T')[0];
        document.getElementById('bkDate').value = today.toISOString().split('T')[0];
    }
    
    elements.sitterModal?.classList.remove('hidden');
}

function submitBookingRequest(e, sitterId) {
    e.preventDefault();
    
    const sitter = findSitterById(sitterId);
    if (!sitter || !state.currentUser) {
        showToast('Please log in first', 'error');
        return false;
    }
    
    const bookings = getBookings();
    const booking = {
        id: 'bk_' + Date.now(),
        sitterId: sitter.id,
        sitterName: sitter.name,
        sitterPhoto: sitter.photo,
        sitterPhone: sitter.phone,
        sitterEmail: sitter.email,
        sitterRate: sitter.rate,
        userId: state.currentUser.email,
        userName: state.currentUser.name,
        petName: document.getElementById('bkPetName').value,
        petType: document.getElementById('bkPetType').value,
        service: document.getElementById('bkService').value,
        date: document.getElementById('bkDate').value,
        notes: document.getElementById('bkNotes').value,
        status: 'pending',
        createdAt: new Date().toISOString(),
        messages: []
    };
    
    bookings.push(booking);
    saveBookings(bookings);
    
    elements.sitterModalBody.innerHTML = `
        <div style="text-align: center; padding: 48px 24px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2" style="width:64px;height:64px;margin-bottom:24px;">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <h2 style="margin-bottom: 12px; color: var(--text-primary);">Booking Request Sent! 🎉</h2>
            <p style="color: var(--text-secondary); margin-bottom: 8px;">Your request to book <strong>${sitter.name}</strong> has been sent!</p>
            <p style="color: var(--text-secondary); margin-bottom: 24px;">${sitter.name.split(' ')[0]} will review your request and confirm soon. Check your dashboard for updates!</p>
            <div style="background: var(--bg-card); border-radius: var(--radius-md); padding: 16px; text-align: left; margin-bottom: 24px; border: 1px solid var(--border);">
                <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 12px;">
                    <div style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;">
                        <img src="${sitter.photo}" alt="${sitter.name}" style="width:100%;height:100%;object-fit:cover;">
                    </div>
                    <div>
                        <strong style="color: var(--text-primary);">${sitter.name}</strong>
                        <p style="color: var(--text-secondary); font-size: 0.8125rem;">${sitter.location.city}, ${sitter.location.state}</p>
                    </div>
                </div>
                <div class="tax-row"><span>Pet</span><span>${booking.petName} (${booking.petType})</span></div>
                <div class="tax-row"><span>Service</span><span>${booking.service}</span></div>
                <div class="tax-row"><span>Date</span><span>${new Date(booking.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span></div>
                <div class="tax-row"><span>Rate</span><span>$${sitter.rate}/hr</span></div>
                <div class="tax-row" style="border-bottom: none;"><span>Status</span><span class="status-badge pending" style="margin:0;">Pending</span></div>
            </div>
            <button class="btn btn-primary" onclick="closeSitterModal(); navigateTo('profile');">Go to My Dashboard</button>
        </div>
    `;
    
    return false;
}

function closeSitterModal() {
    elements.sitterModal?.classList.add('hidden');
}

// Merge sample + registered shelters
function getAllShelters() {
    let registered = [];
    try {
        registered = JSON.parse(localStorage.getItem('pawnamics_shelters') || '[]');
    } catch (e) {}
    return [...sampleShelters, ...registered];
}

// Merge sample pets + featured adoptions from registered shelters
function getAllPets() {
    let registeredPets = [];
    try {
        const shelters = JSON.parse(localStorage.getItem('pawnamics_shelters') || '[]');
        shelters.forEach(s => {
            (s.featuredAdoptions || []).forEach((pet, i) => {
                registeredPets.push({
                    id: s.id + '_pet_' + i,
                    name: pet.name,
                    species: '',
                    breed: pet.breed || '',
                    age: pet.age || '',
                    description: pet.description || '',
                    image: pet.photo || 'https://placehold.co/400x400?text=No+Photo',
                    shelterId: s.id,
                    featured: false
                });
            });
        });
    } catch (e) { console.warn('[getAllPets] Error:', e); }
    console.log('[getAllPets] returned:', samplePets.length + registeredPets.length, 'pets (sample:', samplePets.length, 'registered:', registeredPets.length, ')', registeredPets.map(p => p.name));
    return [...samplePets, ...registeredPets];
}

// Shelter search
function handleShelterSearch() {
    const query = document.getElementById('shelterSearchInput')?.value?.toLowerCase().trim() || '';
    
    const allShelters = getAllShelters();
    const allPets = getAllPets();
    
    console.log('[ShelterSearch] query:', query, 'totalPets:', allPets.length, 'totalShelters:', allShelters.length);
    
    const filteredPets = allPets.filter(pet => {
        if (!query) return false;
        return (pet.name && pet.name.toLowerCase().includes(query)) ||
               (pet.breed && pet.breed.toLowerCase().includes(query)) ||
               (pet.species && pet.species.toLowerCase().includes(query)) ||
               (pet.description && pet.description.toLowerCase().includes(query));
    });
    
    console.log('[ShelterSearch] filteredPets:', filteredPets.length, filteredPets.map(p => p.name));
    
    const filteredShelters = allShelters.filter(shelter => {
        if (!query) return false;
        return (shelter.name && shelter.name.toLowerCase().includes(query)) ||
               (shelter.address && shelter.address.toLowerCase().includes(query)) ||
               (shelter.city && shelter.city.toLowerCase().includes(query)) ||
               (shelter.zip && shelter.zip.toLowerCase().includes(query));
    });
    
    if (!query) {
        renderPets(allPets.filter(p => p.featured || p.shelterId.startsWith('shelter_')));
        renderShelters(allShelters);
        return;
    }
    
    renderPets(filteredPets);
    
    if (elements.sheltersGrid) {
        if (filteredShelters.length === 0) {
            elements.sheltersGrid.innerHTML = '<p style="color: var(--text-secondary); grid-column: 1/-1; text-align: center; padding: 32px;">No shelters found matching your search.</p>';
        } else {
            renderShelters(filteredShelters);
        }
    }
}

function showShelterDetail(shelterId) {
    const allShelters = getAllShelters();
    const shelter = allShelters.find(s => s.id === shelterId);
    if (!shelter) return;
    
    const allPets = getAllPets();
    const shelterPets = allPets.filter(p => p.shelterId === shelterId);
    
    const existing = document.getElementById('shelterDetailModal');
    if (existing) existing.remove();
    
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'shelterDetailModal';
    overlay.innerHTML = `
        <div class="modal-backdrop" onclick="this.parentElement.remove()"></div>
        <div class="modal-content" style="max-width:600px;padding:40px;">
            <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div style="display:flex;align-items:center;gap:20px;margin-bottom:24px;">
                <img src="${shelter.image || shelter.photo || 'https://placehold.co/400x400?text=No+Logo'}" 
                     alt="${shelter.name}" 
                     style="width:100px;height:100px;border-radius:12px;object-fit:cover;">
                <div>
                    <h3 style="font-size:1.5rem;margin:0 0 4px;">${shelter.name}</h3>
                    <p style="color:var(--text-secondary);margin:0;">${shelter.address || ''}${shelter.city ? ', ' + shelter.city : ''}${shelter.zip ? ' ' + shelter.zip : ''}</p>
                    ${shelter.phone ? `<p style="color:var(--text-secondary);margin:4px 0 0;">${shelter.phone}</p>` : ''}
                    ${shelter.email ? `<p style="color:var(--text-secondary);margin:4px 0 0;">${shelter.email}</p>` : ''}
                </div>
            </div>
            ${shelter.description ? `<p style="color:var(--text-secondary);margin-bottom:24px;">${shelter.description}</p>` : ''}
            ${shelter.website ? `<p style="margin-bottom:24px;"><a href="${shelter.website}" target="_blank" style="color:var(--accent-primary);">Visit Website</a></p>` : ''}
            ${shelter.hours ? `<p style="color:var(--text-secondary);margin-bottom:24px;">Hours: ${shelter.hours}</p>` : ''}
            <h4 style="font-size:1.1rem;margin-bottom:16px;">Pets for Adoption (${shelterPets.length})</h4>
            ${shelterPets.length > 0 ? `
                <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;">
                    ${shelterPets.map(pet => `
                        <div style="background:var(--surface);border-radius:12px;overflow:hidden;">
                            <img src="${pet.image}" alt="${pet.name}" style="width:100%;height:150px;object-fit:cover;">
                            <div style="padding:12px;">
                                <h5 style="margin:0 0 4px;">${pet.name}</h5>
                                <p style="color:var(--text-secondary);margin:0;font-size:0.85rem;">${pet.breed || ''}${pet.age ? ' • ' + pet.age : ''}</p>
                                ${pet.description ? `<p style="color:var(--text-secondary);margin:8px 0 0;font-size:0.85rem;">${pet.description.substring(0,100)}${pet.description.length > 100 ? '...' : ''}</p>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : '<p style="color:var(--text-secondary);">No pets currently listed for adoption at this shelter.</p>'}
        </div>
    `;
    document.body.appendChild(overlay);
}

// Shelter registration
function handleShelterRegistration() {
    const name = document.getElementById('shelterName')?.value;
    const email = document.getElementById('shelterEmail')?.value;
    const phone = document.getElementById('shelterPhone')?.value;
    const address = document.getElementById('shelterAddress')?.value;
    const website = document.getElementById('shelterWebsite')?.value;
    const message = document.getElementById('shelterMessage')?.value;
    
    const mailtoLink = `mailto:pawnamics.contact@gmail.com?subject=Shelter Registration: ${encodeURIComponent(name)}&body=${encodeURIComponent(
        `Shelter Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nWebsite: ${website || 'N/A'}\n\nAdditional Message:\n${message || 'N/A'}`
    )}`;
    
    window.location.href = mailtoLink;
    
    document.getElementById('shelterModal')?.classList.add('hidden');
    document.getElementById('shelterRegisterForm')?.reset();
    showToast('Registration submitted! Opening email client to send details to pawnamics.contact@gmail.com');
}

function renderPets(pets) {
    if (!elements.petsGrid) return;
    
    const petsList = pets || samplePets.filter(p => p.featured);
    
    if (petsList.length === 0) {
        elements.petsGrid.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 32px; grid-column: 1/-1;">No pets found matching your search.</p>';
        return;
    }
    
    elements.petsGrid.innerHTML = petsList.map(pet => `
        <div class="pet-card animate-fade-up" data-pet-id="${pet.id}">
            <div class="pet-card-image">
                <img src="${pet.image}" alt="${pet.name}" loading="lazy">
                ${!pets && pet.featured ? '<span class="pet-card-badge">Adopt Me!</span>' : ''}
            </div>
            <div class="pet-card-content">
                <h3 class="pet-card-name">${pet.name}</h3>
                <p class="pet-card-info">${pet.breed} • ${pet.age}</p>
                <p class="pet-card-description">${pet.description}</p>
                <button class="btn btn-secondary pet-learn-more" data-pet-id="${pet.id}">Learn More</button>
            </div>
        </div>
    `).join('');
}

function renderShelters(shelters) {
    if (!elements.sheltersGrid) return;
    
    const sheltersList = shelters || sampleShelters;
    
    if (sheltersList.length === 0) {
        elements.sheltersGrid.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 32px; grid-column: 1/-1;">No shelters found matching your search.</p>';
        return;
    }
    
    elements.sheltersGrid.innerHTML = sheltersList.map(shelter => `
        <div class="shelter-card animate-fade-up" data-shelter-id="${shelter.id}">
            <div class="shelter-card-image">
                <img src="${shelter.image || shelter.photo || 'https://placehold.co/600x400?text=No+Photo'}" alt="${shelter.name}" loading="lazy">
            </div>
            <div class="shelter-card-content">
                <h3 class="shelter-card-name">${shelter.name}</h3>
                <div class="shelter-card-info">
                    <span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        ${shelter.city ? `${shelter.address}, ${shelter.city}${shelter.zip ? ` ${shelter.zip}` : ''}` : shelter.address}
                    </span>
                    <span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        ${shelter.phone}
                    </span>
                    ${shelter.hours ? `<span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        ${shelter.hours}
                    </span>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function renderAffiliates() {
    if (!elements.partnersGrid || !elements.dealsGrid) return;
    
    elements.partnersGrid.innerHTML = sampleAffiliates.map(aff => `
        <div class="partner-card animate-fade-up">
            <div class="partner-logo">${aff.logo}</div>
            <h3 class="partner-name">${aff.company}</h3>
            <p class="partner-description">${aff.description}</p>
        </div>
    `).join('');
    
    elements.dealsGrid.innerHTML = sampleAffiliates.map(aff => {
        const expiresDate = new Date(aff.deal.expires);
        const now = new Date();
        const daysLeft = Math.ceil((expiresDate - now) / (1000 * 60 * 60 * 24));
        
        return `
            <div class="deal-card animate-fade-up">
                <div class="deal-card-header">
                    <div class="deal-card-company">${aff.company}</div>
                    <div class="deal-card-headline">${aff.deal.headline}</div>
                </div>
                <div class="deal-card-body">
                    <div class="deal-card-code">
                        <span>${aff.deal.code}</span>
                        <button class="copy-btn" onclick="copyCode('${aff.deal.code}')">Copy</button>
                    </div>
                    <div class="deal-card-expires">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        ${daysLeft > 0 ? `${daysLeft} days left` : 'Expired'}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        showToast('Code copied to clipboard!');
    });
}
