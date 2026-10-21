// Auth Functions
function openAuthModal(tab = 'login') {
    elements.authModal?.classList.remove('hidden');
    switchAuthTab(tab);
}

function closeAuthModal() {
    elements.authModal?.classList.add('hidden');
}

function switchAuthTab(tab) {
    elements.authTabs.forEach(t => t.classList.remove('active'));
    document.querySelector(`.auth-tab[data-tab="${tab}"]`)?.classList.add('active');
    
    if (tab === 'login') {
        elements.loginForm?.classList.remove('hidden');
        elements.signupForm?.classList.add('hidden');
    } else if (tab === 'recovery') {
        elements.loginForm?.classList.add('hidden');
        elements.signupForm?.classList.add('hidden');
        document.getElementById('recoveryForm')?.classList.remove('hidden');
    } else {
        elements.loginForm?.classList.add('hidden');
        elements.signupForm?.classList.remove('hidden');
        document.getElementById('recoveryForm')?.classList.add('hidden');
    }
}

function showAccountRecovery() {
    elements.authModal?.classList.remove('hidden');
    elements.authTabs.forEach(t => t.classList.remove('active'));
    elements.loginForm?.classList.add('hidden');
    elements.signupForm?.classList.add('hidden');
    document.getElementById('recoveryForm')?.classList.remove('hidden');
    document.getElementById('recoveryEmail')?.focus();
}

function returnToLogin() {
    document.getElementById('recoveryForm')?.classList.add('hidden');
    switchAuthTab('login');
}

function handlePasswordRecovery(e) {
    e.preventDefault();
    const email = document.getElementById('recoveryEmail')?.value.trim().toLowerCase();
    const password = document.getElementById('recoveryPassword')?.value || '';
    const confirm = document.getElementById('recoveryPasswordConfirm')?.value || '';

    if (password.length < 6) {
        showToast('Choose a password with at least 6 characters', 'error');
        return;
    }
    if (password !== confirm) {
        showToast('The passwords do not match', 'error');
        return;
    }

    // This is deliberately a local-only prototype flow, not secure account recovery.
    const users = JSON.parse(localStorage.getItem('pawnamics_users') || '[]');
    const user = users.find(u => String(u.email || '').toLowerCase() === email);
    if (!user) {
        showToast('No matching demo account was found in this browser', 'error');
        return;
    }
    user.password = password;
    localStorage.setItem('pawnamics_users', JSON.stringify(users));
    document.getElementById('recoveryForm')?.reset();
    returnToLogin();
    const loginEmail = document.getElementById('loginEmail');
    if (loginEmail) loginEmail.value = email;
    showToast('Demo password updated on this device');
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    
    // Admin login
    if (email === 'pawnamics.contact@gmail.com' && password === 'admin') {
        state.currentUser = {
            id: 'admin',
            email: 'pawnamics.contact@gmail.com',
            password: 'admin',
            name: 'Admin',
            type: 'admin',
            profile: 'admin',
            createdAt: new Date().toISOString()
        };
        saveState();
        updateAuthUI();
        closeAuthModal();
        showToast('Welcome, Admin!');
        navigateTo('profile');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('pawnamics_users') || '[]');
    const user = users.find(u => u.email === email);
    
    if (user && user.password === password) {
        state.currentUser = user;
        
        // Restore shelter profile from pawnamics_shelters
        if (state.currentUser.type === 'shelter') {
            const shelter = getShelterProfile();
            if (shelter) {
                state.currentUser.profile = 'shelter';
                state.currentUser.shelterProfile = shelter;
            }
        }
        
        saveState();
        updateAuthUI();
        closeAuthModal();
        showToast('Welcome back, ' + user.name.split(' ')[0] + '!');
        
        if (user.type === 'sitter' && user.profile) {
            navigateTo('profile');
        }
    } else {
        showToast('Invalid email or password', 'error');
    }
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const type = document.getElementById('signupType').value;
    
    if (email === 'pawnamics.contact@gmail.com') {
        showToast('This email is reserved for the admin account', 'error');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('pawnamics_users') || '[]');
    
    if (users.find(u => u.email === email)) {
        showToast('Email already registered', 'error');
        return;
    }
    
    const newUser = {
        id: 'u' + Date.now(),
        email,
        password,
        name,
        type,
        profile: null,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('pawnamics_users', JSON.stringify(users));
    
    state.currentUser = newUser;
    saveState();
    updateAuthUI();
    closeAuthModal();
    
    if (type === 'sitter') {
        openSitterSignup();
    } else if (type === 'shelter') {
        openShelterSignup();
    } else {
        showToast('Welcome to PawNamics, ' + name.split(' ')[0] + '!');
    }
}

function handleLogout() {
    state.currentUser = null;
    saveState();
    updateAuthUI();
    navigateTo('home');
    showToast('Logged out successfully');
}

function updateAuthUI() {
    const isLoggedIn = !!state.currentUser;
    
    elements.navAuth?.classList.toggle('hidden', isLoggedIn);
    elements.navUser?.classList.toggle('hidden', !isLoggedIn);
    elements.mobileAuth?.classList.toggle('hidden', isLoggedIn);
    elements.mobileUserMenu?.classList.toggle('hidden', !isLoggedIn);
    
    if (isLoggedIn && state.currentUser) {
        const isAdmin = state.currentUser.type === 'admin';
        const initials = isAdmin ? 'AD' : state.currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase();
        
        const userAvatar = elements.userAvatar;
        userAvatar.textContent = '';
        userAvatar.style.backgroundImage = '';
        userAvatar.classList.remove('has-image');
        
        if (state.currentUser.profile?.photo) {
            userAvatar.style.backgroundImage = `url(${state.currentUser.profile.photo})`;
            userAvatar.classList.add('has-image');
        } else {
            userAvatar.textContent = initials;
        }
        
        elements.userName.textContent = state.currentUser.name.split(' ')[0];
    }
}

// User Menu
function toggleUserMenu() {
    elements.userMenu?.classList.toggle('open');
}

// Sitter Signup
function openSitterSignup(editMode) {
    if (!state.currentUser) {
        openAuthModal('signup');
        showToast('Please create an account first', 'error');
        return;
    }
    
    if (state.currentUser.type !== 'sitter') {
        showToast('This feature is for pet sitters only', 'error');
        return;
    }
    
    elements.sitterSignupModal?.classList.remove('hidden');
    
    if (editMode && state.currentUser.profile) {
        populateSitterForm(state.currentUser);
    }
}

function openShelterSignup() {
    if (!state.currentUser) {
        openAuthModal('signup');
        showToast('Please create an account first', 'error');
        return;
    }
    if (state.currentUser.type !== 'shelter') {
        showToast('This feature is for shelters only', 'error');
        return;
    }
    document.getElementById('shelterSignupModal')?.classList.remove('hidden');
    setupShelterPhotoUpload();
}

function compressImage(file, maxSize, quality, callback) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            let w = img.width, h = img.height;
            if (w > h) {
                if (w > maxSize) { h *= maxSize / w; w = maxSize; }
            } else {
                if (h > maxSize) { w *= maxSize / h; h = maxSize; }
            }
            canvas.width = w; canvas.height = h;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, w, h);
            callback(canvas.toDataURL('image/jpeg', quality));
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function setupShelterPhotoUpload() {
    const area = document.getElementById('shelterPhotoUploadArea');
    const input = document.getElementById('shelterPhoto');
    const preview = document.getElementById('shelterPhotoPreview');
    if (!area || !input || !preview) return;
    area.onclick = () => input.click();
    input.onchange = function() {
        const file = this.files[0];
        if (!file) return;
        compressImage(file, 400, 0.7, function(dataUrl) {
            const img = document.createElement('img');
            img.src = dataUrl;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '8px';
            preview.innerHTML = '';
            preview.appendChild(img);
            preview.dataset.photo = dataUrl;
        });
    };
}

function handleShelterSubmit(e) {
    e.preventDefault();
    if (!state.currentUser || state.currentUser.type !== 'shelter') return;

    const name = document.getElementById('shelterRegName').value;
    const phone = document.getElementById('shelterRegPhone').value;
    const email = document.getElementById('shelterRegEmail').value;
    const website = document.getElementById('shelterRegWebsite').value;
    const address = document.getElementById('shelterRegAddress').value;
    const city = document.getElementById('shelterRegCity').value;
    const zip = document.getElementById('shelterRegZip').value;
    const description = document.getElementById('shelterRegDescription').value;
    const photoPreview = document.getElementById('shelterPhotoPreview');
    const photo = photoPreview?.dataset?.photo || '';

    const shelterId = 'shelter_' + state.currentUser.id;
    const approvalToken = 'tok_' + Date.now();

    const shelterProfile = {
        id: shelterId,
        userId: state.currentUser.id,
        name,
        phone,
        email,
        website,
        address,
        city,
        zip,
        description,
        photo,
        status: 'unconfirmed',
        approvalToken,
        createdAt: new Date().toISOString(),
        featuredAdoptions: []
    };

    const shelters = JSON.parse(localStorage.getItem('pawnamics_shelters') || '[]');
    const existingIdx = shelters.findIndex(s => s.userId === state.currentUser.id);
    if (existingIdx >= 0) {
        shelters[existingIdx] = shelterProfile;
    } else {
        shelters.push(shelterProfile);
    }
    try {
        localStorage.setItem('pawnamics_shelters', JSON.stringify(shelters));
    } catch (e) {
        // If still too large, drop the photo and retry
        shelterProfile.photo = '';
        if (photoPreview) delete photoPreview.dataset.photo;
        shelters[existingIdx >= 0 ? existingIdx : shelters.length - 1] = shelterProfile;
        localStorage.setItem('pawnamics_shelters', JSON.stringify(shelters));
        showToast('Photo was too large and has been removed. Try a smaller image.', 'warning');
    }

    state.currentUser.profile = 'shelter';
    state.currentUser.shelterProfile = shelterProfile;
    saveState();

    document.getElementById('shelterSignupModal')?.classList.add('hidden');

    document.getElementById('shelterApprovalModal')?.classList.remove('hidden');
    document.getElementById('shelterProfileForm')?.reset();
    if (photoPreview) {
        photoPreview.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>Click to upload</span>';
        delete photoPreview.dataset.photo;
    }
}

function getShelterProfile() {
    const shelters = JSON.parse(localStorage.getItem('pawnamics_shelters') || '[]');
    return shelters.find(s => s.userId === state.currentUser?.id) || null;
}

function updateShelterStatus(shelterId, newStatus) {
    const shelters = JSON.parse(localStorage.getItem('pawnamics_shelters') || '[]');
    const idx = shelters.findIndex(s => s.id === shelterId);
    if (idx >= 0) {
        shelters[idx].status = newStatus;
        localStorage.setItem('pawnamics_shelters', JSON.stringify(shelters));
        if (state.currentUser?.shelterProfile?.id === shelterId) {
            state.currentUser.shelterProfile = shelters[idx];
            saveState();
        }
        return true;
    }
    return false;
}

function populateShelterForm() {
    const profile = getShelterProfile();
    if (!profile) return;
    document.getElementById('shelterRegName').value = profile.name || '';
    document.getElementById('shelterRegPhone').value = profile.phone || '';
    document.getElementById('shelterRegEmail').value = profile.email || '';
    document.getElementById('shelterRegWebsite').value = profile.website || '';
    document.getElementById('shelterRegAddress').value = profile.address || '';
    document.getElementById('shelterRegDescription').value = profile.description || '';
    if (profile.photo) {
        const preview = document.getElementById('shelterPhotoPreview');
        if (preview) {
            const img = document.createElement('img');
            img.src = profile.photo;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '8px';
            preview.innerHTML = '';
            preview.appendChild(img);
            preview.dataset.photo = profile.photo;
        }
    }
}

function populateSitterForm(user) {
    const p = user.profile;
    if (!p) return;
    
    document.getElementById('sitterName').value = user.name || '';
    document.getElementById('sitterLocation').value = (p.location?.city || '') + ', ' + (p.location?.state || '');
    document.getElementById('sitterZip').value = p.location?.zip || '';
    document.getElementById('sitterBio').value = p.bio || '';
    document.getElementById('sitterExperience').value = p.experience?.toString() || '0';
    document.getElementById('sitterRate').value = p.rate?.toString() || '';
    document.getElementById('sitterAvailability').value = p.availability || 'flexible';
    document.getElementById('cashapp').value = p.paymentMethods?.cashapp || '';
    document.getElementById('venmo').value = p.paymentMethods?.venmo || '';
    document.getElementById('paypal').value = p.paymentMethods?.paypal || '';
    document.getElementById('bitcoin').value = p.paymentMethods?.bitcoin || '';
    document.getElementById('bank').value = p.paymentMethods?.bank || '';
    
    document.querySelectorAll('input[name="sitterService"]').forEach(cb => {
        cb.checked = p.services?.includes(cb.value);
    });
    
    document.querySelectorAll('input[name="subscription"]').forEach(rb => {
        rb.checked = rb.value === (user.subscription || 'free');
    });
    
    const preview = document.getElementById('photoPreview');
    if (preview && p.photo) {
        preview.classList.add('has-image');
        preview.style.backgroundImage = `url(${p.photo})`;
    }
    
    goToStep(1);
}

function closeSitterSignup() {
    elements.sitterSignupModal?.classList.add('hidden');
    resetSitterForm();
}

function setupSitterFormSteps() {
    const form = elements.sitterProfileForm;
    if (!form) return;
    
    const steps = form.querySelectorAll('.signup-step');
    const stepDots = document.querySelectorAll('.step-dot');
    
    form.addEventListener('click', (e) => {
        if (e.target.classList.contains('step-next')) {
            if (validateCurrentStep()) {
                const currentStep = form.dataset.step;
                const nextStep = parseInt(currentStep) + 1;
                if (nextStep <= 4) {
                    goToStep(nextStep);
                }
            }
        }
        
        if (e.target.classList.contains('step-prev')) {
            const currentStep = form.dataset.step;
            const prevStep = parseInt(currentStep) - 1;
            if (prevStep >= 1) {
                goToStep(prevStep);
            }
        }
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        submitSitterProfile();
    });
    
    // Also handle submit button click directly
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        submitSitterProfile();
    });
}

function goToStep(step) {
    const form = elements.sitterProfileForm;
    const steps = form.querySelectorAll('.signup-step');
    const stepDots = document.querySelectorAll('.step-dot');
    
    steps.forEach(s => s.classList.remove('active'));
    stepDots.forEach(d => d.classList.remove('active'));
    
    form.querySelector(`.signup-step[data-step="${step}"]`)?.classList.add('active');
    document.querySelector(`.step-dot[data-step="${step}"]`)?.classList.add('active');
    
    form.dataset.step = step;
    
    if (parseInt(step) === 4) {
        updateReviewSummary();
    }
}

function validateCurrentStep() {
    const step = elements.sitterProfileForm.dataset.step;
    
    if (step === '1') {
        const name = document.getElementById('sitterName')?.value;
        const location = document.getElementById('sitterLocation')?.value;
        const zip = document.getElementById('sitterZip')?.value;
        const services = document.querySelectorAll('input[name="sitterService"]:checked');
        
        if (!name) {
            showToast('Please enter your name', 'error');
            return false;
        }
        
        if (!location) {
            showToast('Please enter your city and state', 'error');
            return false;
        }
        
        if (!zip) {
            showToast('Please enter your zip code', 'error');
            return false;
        }
        
        if (services.length === 0) {
            showToast('Please select at least one service', 'error');
            return false;
        }
    }
    
    if (step === '2') {
        const rate = document.getElementById('sitterRate')?.value;
        if (!rate || parseFloat(rate) < 1) {
            showToast('Please enter a valid hourly rate', 'error');
            return false;
        }
        
        const hasPayment = ['cashapp', 'venmo', 'paypal', 'bitcoin', 'bank'].some(id => {
            const val = document.getElementById(id)?.value;
            return val && val.trim().length > 0;
        });
        
        if (!hasPayment) {
            showToast('Please enter at least one payment method', 'error');
            return false;
        }
    }
    
    if (step === '3') {
        const subscription = document.querySelector('input[name="subscription"]:checked');
        if (!subscription) {
            showToast('Please select a subscription plan', 'error');
            return false;
        }
    }
    
    return true;
}

function updateReviewSummary() {
    const summary = document.getElementById('reviewSummary');
    if (!summary) return;
    
    const name = document.getElementById('sitterName')?.value;
    const location = document.getElementById('sitterLocation')?.value;
    const bio = document.getElementById('sitterBio')?.value;
    const experience = document.getElementById('sitterExperience')?.value;
    const services = Array.from(document.querySelectorAll('input[name="sitterService"]:checked')).map(s => s.value);
    const rate = document.getElementById('sitterRate')?.value;
    const availability = document.getElementById('sitterAvailability')?.value;
    const subscription = document.querySelector('input[name="subscription"]:checked')?.value;
    
    summary.innerHTML = `
        <div class="review-item">
            <span class="review-label">Name</span>
            <span class="review-value">${name}</span>
        </div>
        <div class="review-item">
            <span class="review-label">Location</span>
            <span class="review-value">${location}</span>
        </div>
        <div class="review-item">
            <span class="review-label">Experience</span>
            <span class="review-value">${experience === '0' ? 'Just starting' : experience + '+ years'}</span>
        </div>
        <div class="review-item">
            <span class="review-label">Services</span>
            <span class="review-value">${services.join(', ')}</span>
        </div>
        <div class="review-item">
            <span class="review-label">Hourly Rate</span>
            <span class="review-value">$${rate}/hr</span>
        </div>
        <div class="review-item">
            <span class="review-label">Availability</span>
            <span class="review-value" style="text-transform: capitalize">${availability}</span>
        </div>
        <div class="review-item">
            <span class="review-label">Plan</span>
            <span class="review-value" style="text-transform: capitalize">${subscription}</span>
        </div>
    `;
}

function submitSitterProfile() {
    const users = JSON.parse(localStorage.getItem('pawnamics_users') || '[]');
    const userIndex = users.findIndex(u => u.id === state.currentUser.id);
    
    if (userIndex === -1) return;
    
    const services = Array.from(document.querySelectorAll('input[name="sitterService"]:checked')).map(s => s.value);
    const subscription = document.querySelector('input[name="subscription"]:checked')?.value;
    
    const profile = {
        photo: state.sitterFormData.photo || users[userIndex].profile?.photo || `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop`,
        bio: document.getElementById('sitterBio')?.value,
        location: { city: document.getElementById('sitterLocation')?.value.split(',')[0]?.trim(), state: document.getElementById('sitterLocation')?.value.split(',')[1]?.trim() || '', zip: document.getElementById('sitterZip')?.value || '' },
        rate: parseFloat(document.getElementById('sitterRate')?.value),
        services: services,
        experience: parseInt(document.getElementById('sitterExperience')?.value),
        availability: document.getElementById('sitterAvailability')?.value,
        rating: users[userIndex].profile?.rating || 0,
        reviewCount: users[userIndex].profile?.reviewCount || 0,
        paymentMethods: {
            cashapp: document.getElementById('cashapp')?.value,
            venmo: document.getElementById('venmo')?.value,
            paypal: document.getElementById('paypal')?.value,
            bitcoin: document.getElementById('bitcoin')?.value,
            bank: document.getElementById('bank')?.value
        }
    };
    
    users[userIndex].profile = profile;
    users[userIndex].name = document.getElementById('sitterName')?.value;
    users[userIndex].subscription = subscription;
    
    localStorage.setItem('pawnamics_users', JSON.stringify(users));
    state.currentUser = users[userIndex];
    saveState();
    
    state.sitterFormData = {};
    closeSitterSignup();
    updateAuthUI();
    navigateTo('profile');
    showToast('Profile created successfully!');
}

function resetSitterForm() {
    elements.sitterProfileForm?.reset();
    const photoPreview = document.getElementById('photoPreview');
    if (photoPreview) {
        photoPreview.classList.remove('has-image');
        photoPreview.style.backgroundImage = '';
    }
    state.sitterFormData = {};
    goToStep(1);
}
