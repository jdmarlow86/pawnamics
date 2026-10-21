/* ── Shelter Dashboard ────────────────────────────────────────── */

function renderShelterDashboard() {
    const user = state.currentUser;
    let shelter = getShelterProfile();
    if (!shelter) {
        elements.profileContent.innerHTML = `
            <div class="profile-form">
                <h2>Welcome, ${user.name}!</h2>
                <p style="color:var(--text-secondary);margin-bottom:24px;">Complete your shelter registration to get started.</p>
                <button class="btn btn-primary" onclick="openShelterSignup()">Register Shelter</button>
            </div>
        `;
        return;
    }

    const adoptionsCount = (shelter.featuredAdoptions || []).length;

    window._shelterDash = { shelter, adoptionsCount };

    const statusColor = shelter.status === 'confirmed' ? 'var(--success)' : shelter.status === 'denied' ? 'var(--error)' : 'var(--warning)';

    elements.profileContent.innerHTML = `
        <div class="dashboard-layout">
            <aside class="dashboard-sidebar">
                <div class="sidebar-profile-summary">
                    <div class="sidebar-avatar" style="background-image: url(${shelter.photo || ''}); background-size:cover;background-position:center;"></div>
                    <h4>${shelter.name}</h4>
                    <p>${shelter.city || (shelter.address ? shelter.address.split(',').slice(0,2).join(',') : '')}</p>
                    <span class="sidebar-rate" style="color:${statusColor};font-size:0.8125rem;text-transform:uppercase;">${shelter.status}</span>
                </div>
                <nav class="sidebar-nav">
                    <button class="sidebar-link active" data-shelter="overview" onclick="_shelterTab('overview')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                        Overview
                    </button>
                    <button class="sidebar-link" data-shelter="adoptions" onclick="_shelterTab('adoptions')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l9 4.5v7.5a8 8 0 0 1-9 7.5 8 8 0 0 1-9-7.5V6.5L12 2z"/></svg>
                        Featured Adoptions
                    </button>
                    <button class="sidebar-link" data-shelter="profile-edit" onclick="_shelterTab('profile-edit')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        Profile
                    </button>
                </nav>
            </aside>
            <main class="dashboard-content" id="shelterDashboardContent">
                ${getShelterContent('overview', window._shelterDash)}
            </main>
        </div>
    `;
}

function getShelterContent(tab, data) {
    switch (tab) {
        case 'overview': return getShelterOverview(data);
        case 'adoptions': return getShelterAdoptions(data);
        case 'profile-edit': return getShelterProfileEdit(data);
        default: return getShelterOverview(data);
    }
}

function getShelterOverview(data) {
    const { shelter, adoptionsCount } = data;
    const statusColor = shelter.status === 'confirmed' ? 'var(--success)' : shelter.status === 'denied' ? 'var(--error)' : 'var(--warning)';
    const statusLabel = shelter.status === 'confirmed' ? 'Confirmed' : shelter.status === 'denied' ? 'Denied' : 'Unconfirmed';

    return `
        <div class="dashboard-header">
            <h2>Shelter Overview</h2>
            <p>${shelter.name}</p>
        </div>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-card-icon" style="background:rgba(245,166,35,0.15);color:var(--warning);">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <div class="stat-card-info">
                    <span class="stat-card-value" style="color:${statusColor}">${statusLabel}</span>
                    <span class="stat-card-label">Status</span>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-card-icon" style="background:rgba(108,92,231,0.15);color:var(--accent-secondary);">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l9 4.5v7.5a8 8 0 0 1-9 7.5 8 8 0 0 1-9-7.5V6.5L12 2z"/></svg>
                </div>
                <div class="stat-card-info">
                    <span class="stat-card-value">${adoptionsCount}</span>
                    <span class="stat-card-label">Featured Adoptions</span>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-card-icon" style="background:rgba(52,211,153,0.15);color:var(--success);">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div class="stat-card-info">
                    <span class="stat-card-value">${new Date(shelter.createdAt).toLocaleDateString()}</span>
                    <span class="stat-card-label">Registered</span>
                </div>
            </div>
        </div>
        <div class="dashboard-section">
            <h3>About</h3>
            <p style="color:var(--text-secondary);line-height:1.6;">${shelter.description || 'No description provided.'}</p>
        </div>
        <div class="dashboard-section">
            <h3>Contact Information</h3>
            <div class="shelter-contact-grid">
                <div class="shelter-contact-item"><strong>Email:</strong> ${shelter.email}</div>
                <div class="shelter-contact-item"><strong>Phone:</strong> ${shelter.phone}</div>
                <div class="shelter-contact-item"><strong>Address:</strong> ${shelter.city ? `${shelter.address}, ${shelter.city}${shelter.zip ? ` ${shelter.zip}` : ''}` : shelter.address}</div>
                ${shelter.website ? `<div class="shelter-contact-item"><strong>Website:</strong> <a href="${shelter.website}" target="_blank" style="color:var(--accent-primary)">${shelter.website}</a></div>` : ''}
            </div>
        </div>
        ${shelter.status === 'unconfirmed' ? `
        <div class="dashboard-section" style="background:rgba(245,166,35,0.08);border:1px solid rgba(245,166,35,0.2);border-radius:var(--radius-sm);padding:20px;">
            <p style="color:var(--text-secondary);font-size:0.875rem;">
                <strong style="color:var(--warning);">Pending Approval</strong> — Your shelter is currently awaiting review.
                Once confirmed, your shelter will be visible on the Shelters page and you can manage featured adoptions.
            </p>
        </div>` : ''}
        ${shelter.status === 'denied' ? `
        <div class="dashboard-section" style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);border-radius:var(--radius-sm);padding:20px;">
            <p style="color:var(--text-secondary);font-size:0.875rem;">
                <strong style="color:var(--error);">Registration Denied</strong> — Unfortunately, your shelter registration was not approved.
                Please contact <a href="mailto:pawnamics.contact@gmail.com" style="color:var(--accent-primary)">pawnamics.contact@gmail.com</a> for more information.
            </p>
        </div>` : ''}
    `;
}

function getShelterAdoptions(data) {
    const { shelter } = data;
    const pets = shelter.featuredAdoptions || [];

    return `
        <div class="dashboard-header">
            <h2>Featured Adoptions</h2>
            <p>Showcase pets available for adoption</p>
        </div>
        <button class="btn btn-primary" onclick="openAddPetModal()" style="margin-bottom:24px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add Pet
        </button>
        ${pets.length === 0 ? '<p style="color:var(--text-secondary);">No featured adoptions yet. Add a pet to showcase on your shelter profile.</p>' : `
        <div class="pets-grid">
            ${pets.map((pet, idx) => `
                <div class="pet-card">
                    <div class="pet-card-image">
                        <img src="${pet.photo || 'https://placehold.co/400x400?text=No+Photo'}" alt="${pet.name}">
                        ${pet.urgent ? '<span class="pet-card-badge">Urgent</span>' : ''}
                    </div>
                    <div class="pet-card-content">
                        <div class="pet-card-name">${pet.name}</div>
                        <div class="pet-card-info">${pet.breed} &middot; ${pet.age} &middot; ${pet.gender}</div>
                        <p class="pet-card-description">${pet.description || ''}</p>
                        <div style="display:flex;gap:8px;">
                            <button class="btn btn-secondary btn-sm" onclick="editPet(${idx})">Edit</button>
                            <button class="btn btn-ghost btn-sm" style="color:var(--error)" onclick="removePet(${idx})">Remove</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>`}
        ${pets.length > 0 ? `<p style="color:var(--text-muted);font-size:0.8125rem;margin-top:16px;">${pets.length} pet${pets.length !== 1 ? 's' : ''} listed</p>` : ''}
    `;
}

function getShelterProfileEdit() {
    const shelter = getShelterProfile();
    if (!shelter) return '<p>No shelter profile found.</p>';
    return `
        <div class="dashboard-header">
            <h2>Edit Shelter Profile</h2>
            <p>Update your shelter information</p>
        </div>
        <div class="dashboard-section">
            <form id="shelterEditForm" style="max-width:500px;">
                <div class="form-group profile-photo-upload">
                    <label>Shelter Logo / Photo</label>
                    <div class="photo-upload-area" id="shelterEditPhotoArea">
                        <div class="photo-preview" id="shelterEditPhotoPreview" ${shelter.photo ? `style="background-image:url(${shelter.photo});background-size:cover;background-position:center;"` : ''}>
                            ${!shelter.photo ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>Click to upload</span>' : ''}
                        </div>
                        <input type="file" id="shelterEditPhoto" accept="image/*" hidden>
                    </div>
                </div>
                <div class="form-group">
                    <label for="shelterEditName">Shelter Name</label>
                    <input type="text" id="shelterEditName" value="${shelter.name}" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="shelterEditPhone">Phone</label>
                        <input type="tel" id="shelterEditPhone" value="${shelter.phone}" required>
                    </div>
                    <div class="form-group">
                        <label for="shelterEditEmail">Email</label>
                        <input type="email" id="shelterEditEmail" value="${shelter.email}" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="shelterEditWebsite">Website</label>
                    <input type="url" id="shelterEditWebsite" value="${shelter.website || ''}">
                </div>
                <div class="form-group">
                    <label for="shelterEditAddress">Address</label>
                    <input type="text" id="shelterEditAddress" value="${shelter.address}" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="shelterEditCity">City</label>
                        <input type="text" id="shelterEditCity" value="${shelter.city || ''}" required>
                    </div>
                    <div class="form-group">
                        <label for="shelterEditZip">ZIP Code</label>
                        <input type="text" id="shelterEditZip" value="${shelter.zip || ''}" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="shelterEditDescription">About</label>
                    <textarea id="shelterEditDescription" rows="4" required>${shelter.description || ''}</textarea>
                </div>
                <button type="submit" class="btn btn-primary" onclick="handleShelterEditSubmit(event)">Save Changes</button>
            </form>
        </div>
    `;
}

function handleShelterEditSubmit(e) {
    e.preventDefault();
    const shelter = getShelterProfile();
    if (!shelter) return;

    const editPreview = document.getElementById('shelterEditPhotoPreview');
    const newPhoto = editPreview?.dataset?.photo || shelter.photo;

    const updated = {
        ...shelter,
        name: document.getElementById('shelterEditName').value,
        phone: document.getElementById('shelterEditPhone').value,
        email: document.getElementById('shelterEditEmail').value,
        website: document.getElementById('shelterEditWebsite').value,
        address: document.getElementById('shelterEditAddress').value,
        city: document.getElementById('shelterEditCity').value,
        zip: document.getElementById('shelterEditZip').value,
        description: document.getElementById('shelterEditDescription').value,
        photo: newPhoto
    };

    const shelters = JSON.parse(localStorage.getItem('pawnamics_shelters') || '[]');
    const idx = shelters.findIndex(s => s.id === shelter.id);
    if (idx >= 0) {
        shelters[idx] = updated;
        localStorage.setItem('pawnamics_shelters', JSON.stringify(shelters));
        state.currentUser.shelterProfile = updated;
        saveState();
        showToast('Shelter profile updated!');
        _shelterTab('overview');
    }
}

/* ── Featured Adoptions CRUD ──────────────────────────────────── */

function openAddPetModal() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'addPetModal';
    overlay.innerHTML = `
        <div class="modal-backdrop" onclick="this.parentElement.remove()"></div>
        <div class="modal-content" style="max-width:500px;padding:40px;">
            <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <h3 style="font-size:1.5rem;margin-bottom:24px;">Add Pet for Adoption</h3>
            <form id="addPetForm">
                <div class="form-group profile-photo-upload">
                    <label>Pet Photo</label>
                    <div class="photo-upload-area" id="addPetPhotoArea">
                        <div class="photo-preview" id="addPetPhotoPreview">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            <span>Click to upload</span>
                        </div>
                        <input type="file" id="addPetPhoto" accept="image/*" hidden>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="addPetName">Pet Name</label>
                        <input type="text" id="addPetName" required placeholder="e.g. Buddy">
                    </div>
                    <div class="form-group">
                        <label for="addPetBreed">Breed</label>
                        <input type="text" id="addPetBreed" required placeholder="e.g. Labrador Retriever">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="addPetAge">Age</label>
                        <input type="text" id="addPetAge" required placeholder="e.g. 2 years">
                    </div>
                    <div class="form-group">
                        <label for="addPetGender">Gender</label>
                        <select id="addPetGender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="addPetDescription">Description</label>
                    <textarea id="addPetDescription" rows="3" placeholder="Tell potential adopters about this pet..."></textarea>
                </div>
                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" id="addPetUrgent">
                        <span class="checkmark"></span>
                        Mark as urgent
                    </label>
                </div>
                <button type="submit" class="btn btn-primary btn-full">Add Pet</button>
            </form>
        </div>
    `;
    document.body.appendChild(overlay);

    const area = document.getElementById('addPetPhotoArea');
    const input = document.getElementById('addPetPhoto');
    const preview = document.getElementById('addPetPhotoPreview');
    if (area && input && preview) {
        area.onclick = () => input.click();
        input.onchange = function() {
            const file = this.files[0];
            if (!file) return;
            compressImage(file, 300, 0.7, function(dataUrl) {
                preview.innerHTML = '';
                const img = document.createElement('img');
                img.src = dataUrl;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                img.style.borderRadius = '8px';
                preview.appendChild(img);
                preview.dataset.photo = dataUrl;
            });
        };
    }

    document.getElementById('addPetForm').onsubmit = function(e) {
        e.preventDefault();
        const shelter = getShelterProfile();
        if (!shelter) return;

        const pet = {
            id: 'pet_' + Date.now(),
            name: document.getElementById('addPetName').value,
            breed: document.getElementById('addPetBreed').value,
            age: document.getElementById('addPetAge').value,
            gender: document.getElementById('addPetGender').value,
            description: document.getElementById('addPetDescription').value,
            photo: document.getElementById('addPetPhotoPreview')?.dataset?.photo || '',
            urgent: document.getElementById('addPetUrgent').checked,
            createdAt: new Date().toISOString()
        };

        shelter.featuredAdoptions = shelter.featuredAdoptions || [];
        shelter.featuredAdoptions.push(pet);

        const shelters = JSON.parse(localStorage.getItem('pawnamics_shelters') || '[]');
        const idx = shelters.findIndex(s => s.id === shelter.id);
        if (idx >= 0) {
            shelters[idx] = shelter;
            localStorage.setItem('pawnamics_shelters', JSON.stringify(shelters));
            state.currentUser.shelterProfile = shelter;
            saveState();
        }

        document.getElementById('addPetModal')?.remove();
        showToast(pet.name + ' added to featured adoptions!');
        _shelterTab('adoptions');
    };
}

function editPet(index) {
    const shelter = getShelterProfile();
    if (!shelter || !shelter.featuredAdoptions || !shelter.featuredAdoptions[index]) return;
    const pet = shelter.featuredAdoptions[index];

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'editPetModal';
    overlay.innerHTML = `
        <div class="modal-backdrop" onclick="this.parentElement.remove()"></div>
        <div class="modal-content" style="max-width:500px;padding:40px;">
            <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <h3 style="font-size:1.5rem;margin-bottom:24px;">Edit Pet</h3>
            <form id="editPetForm">
                <div class="form-group profile-photo-upload">
                    <label>Pet Photo</label>
                    <div class="photo-upload-area" id="editPetPhotoArea">
                        <div class="photo-preview" id="editPetPhotoPreview" style="${pet.photo ? `background-image:url(${pet.photo});background-size:cover;background-position:center;` : ''}">
                            ${!pet.photo ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>Click to upload</span>' : ''}
                        </div>
                        <input type="file" id="editPetPhoto" accept="image/*" hidden>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="editPetName">Pet Name</label>
                        <input type="text" id="editPetName" value="${pet.name}" required>
                    </div>
                    <div class="form-group">
                        <label for="editPetBreed">Breed</label>
                        <input type="text" id="editPetBreed" value="${pet.breed}" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="editPetAge">Age</label>
                        <input type="text" id="editPetAge" value="${pet.age}" required>
                    </div>
                    <div class="form-group">
                        <label for="editPetGender">Gender</label>
                        <select id="editPetGender">
                            <option value="Male" ${pet.gender === 'Male' ? 'selected' : ''}>Male</option>
                            <option value="Female" ${pet.gender === 'Female' ? 'selected' : ''}>Female</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="editPetDescription">Description</label>
                    <textarea id="editPetDescription" rows="3">${pet.description || ''}</textarea>
                </div>
                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" id="editPetUrgent" ${pet.urgent ? 'checked' : ''}>
                        <span class="checkmark"></span>
                        Mark as urgent
                    </label>
                </div>
                <button type="submit" class="btn btn-primary btn-full">Save Changes</button>
            </form>
        </div>
    `;
    document.body.appendChild(overlay);

    const area = document.getElementById('editPetPhotoArea');
    const input = document.getElementById('editPetPhoto');
    const preview = document.getElementById('editPetPhotoPreview');
    if (area && input && preview) {
        area.onclick = () => input.click();
        input.onchange = function() {
            const file = this.files[0];
            if (!file) return;
            compressImage(file, 300, 0.7, function(dataUrl) {
                preview.innerHTML = '';
                const img = document.createElement('img');
                img.src = dataUrl;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                img.style.borderRadius = '8px';
                preview.appendChild(img);
                preview.dataset.photo = dataUrl;
            });
        };
    }

    document.getElementById('editPetForm').onsubmit = function(e) {
        e.preventDefault();
        const editPreview = document.getElementById('editPetPhotoPreview');
        const newPhoto = editPreview?.dataset?.photo || pet.photo;

        const updatedPet = {
            ...pet,
            name: document.getElementById('editPetName').value,
            breed: document.getElementById('editPetBreed').value,
            age: document.getElementById('editPetAge').value,
            gender: document.getElementById('editPetGender').value,
            description: document.getElementById('editPetDescription').value,
            photo: newPhoto,
            urgent: document.getElementById('editPetUrgent').checked
        };

        shelter.featuredAdoptions[index] = updatedPet;

        const shelters = JSON.parse(localStorage.getItem('pawnamics_shelters') || '[]');
        const idx = shelters.findIndex(s => s.id === shelter.id);
        if (idx >= 0) {
            shelters[idx] = shelter;
            localStorage.setItem('pawnamics_shelters', JSON.stringify(shelters));
            state.currentUser.shelterProfile = shelter;
            saveState();
        }

        document.getElementById('editPetModal')?.remove();
        showToast(updatedPet.name + ' updated!');
        _shelterTab('adoptions');
    };
}

function removePet(index) {
    if (!confirm('Remove this pet from featured adoptions?')) return;
    const shelter = getShelterProfile();
    if (!shelter || !shelter.featuredAdoptions) return;
    shelter.featuredAdoptions.splice(index, 1);
    const shelters = JSON.parse(localStorage.getItem('pawnamics_shelters') || '[]');
    const idx = shelters.findIndex(s => s.id === shelter.id);
    if (idx >= 0) {
        shelters[idx] = shelter;
        localStorage.setItem('pawnamics_shelters', JSON.stringify(shelters));
        state.currentUser.shelterProfile = shelter;
        saveState();
    }
    showToast('Pet removed from adoptions');
    _shelterTab('adoptions');
}
