// Initialize Application
function init() {
    loadState();
    setupEventListeners();
    renderFeaturedSitters();
    renderSittersResults();
    const allShelters = getAllShelters();
    const allPets = getAllPets();
    renderPets(allPets.filter(p => p.featured || p.shelterId.startsWith('shelter_')));
    renderShelters(allShelters);
    renderAffiliates();
    updateAuthUI();
}

// State Management
function loadState() {
    try {
        const savedUser = localStorage.getItem('pawnamics_user');
        if (savedUser) {
            state.currentUser = JSON.parse(savedUser);
        }
        
        // Don't overwrite admin user with regular user lookup
        if (state.currentUser?.type !== 'admin') {
            const savedUsers = localStorage.getItem('pawnamics_users');
            if (savedUsers) {
                const allUsers = JSON.parse(savedUsers);
                const currentUserEmail = state.currentUser?.email;
                if (currentUserEmail) {
                    const matchedUser = allUsers.find(u => u.email === currentUserEmail);
                    if (matchedUser) {
                        state.currentUser = matchedUser;
                    }
                }
            }
        }

        // Load shelter profile if user is a shelter
        if (state.currentUser?.type === 'shelter') {
            const shelter = getShelterProfile();
            if (shelter) {
                state.currentUser.profile = 'shelter';
                state.currentUser.shelterProfile = shelter;
            }
        }
    } catch (e) {
        console.warn('Error loading state:', e);
        state.currentUser = null;
    }
}

function saveState() {
    try {
        if (state.currentUser) {
            const userData = { ...state.currentUser };
            if (userData.profile?.photo && userData.profile.photo.length > 50000) {
                delete userData.profile.photo;
            }
            // Strip shelter profile from user save (stored separately in pawnamics_shelters)
            if (userData.shelterProfile) {
                userData.shelterProfile = { id: userData.shelterProfile.id, name: userData.shelterProfile.name, status: userData.shelterProfile.status };
            }
            localStorage.setItem('pawnamics_user', JSON.stringify(userData));
        } else {
            localStorage.removeItem('pawnamics_user');
        }
    } catch (e) {
        console.warn('Error saving state:', e);
    }
}

// Navigation
function navigateTo(page) {
    state.currentPage = page;
    
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.mobile-nav-link').forEach(l => l.classList.remove('active'));
    
    const targetPage = document.getElementById(`${page}Page`);
    if (targetPage) targetPage.classList.add('active');
    
    const navLink = document.querySelector(`.nav-link[data-page="${page}"]`);
    if (navLink) navLink.classList.add('active');
    
    const mobileLink = document.querySelector(`.mobile-nav-link[data-page="${page}"]`);
    if (mobileLink) mobileLink.classList.add('active');
    
    if (page === 'profile') {
        renderProfilePage();
    }
    
    window.scrollTo(0, 0);
    closeMobileMenu();
}

// Event Listeners
function setupEventListeners() {
    // Navigation clicks
    document.querySelectorAll('[data-page]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const page = el.dataset.page;
            if (page === state.currentPage) return;
            navigateTo(page);
        });
    });
    
    // Hero Find a Sitter button
    document.getElementById('findSitterBtn')?.addEventListener('click', () => navigateTo('sitters'));
    
    // Auth buttons
    elements.loginBtn?.addEventListener('click', () => openAuthModal('login'));
    elements.signupBtn?.addEventListener('click', () => openAuthModal('signup'));
    elements.authModalClose?.addEventListener('click', closeAuthModal);
    elements.authModal?.querySelector('.modal-backdrop')?.addEventListener('click', closeAuthModal);
    
    // Auth tabs
    elements.authTabs.forEach(tab => {
        tab.addEventListener('click', () => switchAuthTab(tab.dataset.tab));
    });
    
    // Auth forms
    elements.loginForm?.addEventListener('submit', handleLogin);
    document.getElementById('showRecoveryBtn')?.addEventListener('click', showAccountRecovery);
    document.getElementById('backToLoginBtn')?.addEventListener('click', returnToLogin);
    document.getElementById('recoveryForm')?.addEventListener('submit', handlePasswordRecovery);
    elements.signupForm?.addEventListener('submit', handleSignup);
    
    // User menu
    elements.userBtn?.addEventListener('click', toggleUserMenu);
    document.addEventListener('click', (e) => {
        if (!elements.userMenu?.contains(e.target)) {
            elements.userMenu?.classList.remove('open');
        }
    });
    
    // Logout
    elements.logoutBtn?.addEventListener('click', handleLogout);
    
    // Sitter signup
    elements.heroBecomeSitter?.addEventListener('click', openSitterSignup);
    elements.ctaBecomeSitter?.addEventListener('click', openSitterSignup);
    elements.footerBecomeSitter?.addEventListener('click', openSitterSignup);
    elements.sitterSignupClose?.addEventListener('click', closeSitterSignup);
    elements.sitterSignupModal?.querySelector('.modal-backdrop')?.addEventListener('click', closeSitterSignup);

    // Shelter signup
    const shelterSignupModal = document.getElementById('shelterSignupModal');
    const shelterSignupClose = document.getElementById('shelterSignupClose');
    shelterSignupClose?.addEventListener('click', () => shelterSignupModal?.classList.add('hidden'));
    shelterSignupModal?.querySelector('.modal-backdrop')?.addEventListener('click', () => shelterSignupModal?.classList.add('hidden'));
    document.getElementById('shelterProfileForm')?.addEventListener('submit', handleShelterSubmit);
    
    // Sitter form steps
    setupSitterFormSteps();
    
    // Photo upload
    const photoUploadArea = document.getElementById('photoUploadArea');
    const photoInput = document.getElementById('sitterPhoto');
    const photoPreview = document.getElementById('photoPreview');
    
    photoUploadArea?.addEventListener('click', () => photoInput?.click());
    
    photoInput?.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const maxSize = 150;
                let width = img.width;
                let height = img.height;
                
                if (width > height) {
                    if (width > maxSize) {
                        height *= maxSize / width;
                        width = maxSize;
                    }
                } else {
                    if (height > maxSize) {
                        width *= maxSize / height;
                        height = maxSize;
                    }
                }
                
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                
                const compressedData = canvas.toDataURL('image/jpeg', 0.7);
                state.sitterFormData.photo = compressedData;
                photoPreview.classList.add('has-image');
                photoPreview.style.backgroundImage = `url(${compressedData})`;
            };
            img.src = event.target?.result;
        };
        reader.readAsDataURL(file);
    });
    
    // Profile submit button
    document.getElementById('submitProfileBtn')?.addEventListener('click', () => {
        submitSitterProfile();
    });
    
    // Search and filters
    elements.searchSitters?.addEventListener('click', handleSearch);
    elements.searchLocation?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    
    // Sitters Near Me button
    document.getElementById('sittersNearMe')?.addEventListener('click', () => {
        // Check localStorage for user with location
        let userLocation = null;
        
        if (state.currentUser?.profile?.location) {
            userLocation = state.currentUser.profile.location;
        } else {
            try {
                const savedUsers = localStorage.getItem('pawnamics_users');
                if (savedUsers) {
                    const allUsers = JSON.parse(savedUsers);
                    const found = allUsers.find(u => u.profile?.location);
                    if (found?.profile?.location) {
                        userLocation = found.profile.location;
                    }
                }
            } catch (e) {
                console.warn('Error finding user location:', e);
            }
        }
        
        if (!userLocation) {
            showToast('No location found. Create a profile first.', 'error');
            return;
        }
        
        let searchTerm = userLocation.city?.toLowerCase() || '';
        if (userLocation.zip) searchTerm += ' ' + userLocation.zip;
        
        elements.searchLocation.value = userLocation.city + ', ' + userLocation.state;
        
        // Trigger search
        const minRate = parseInt(elements.minRate?.value) || 0;
        const maxRate = parseInt(elements.maxRate?.value) || 100;
        const services = Array.from(document.querySelectorAll('input[name="service"]:checked')).map(s => s.value);
        const minRating = parseFloat(document.querySelector('.rating-btn.active')?.dataset.rating) || 0;
        
        let userProfiles = [];
        try {
            const savedUsers = localStorage.getItem('pawnamics_users');
            if (savedUsers) {
                const allUsers = JSON.parse(savedUsers);
                userProfiles = allUsers.filter(u => u.type === 'sitter' && u.profile).map(u => ({
                    id: u.id,
                    name: u.name,
                    photo: u.profile.photo,
                    bio: u.profile.bio,
                    location: u.profile.location,
                    rate: u.profile.rate,
                    services: u.profile.services,
                    experience: u.profile.experience,
                    rating: u.profile.rating || 0,
                    reviewCount: u.profile.reviewCount || 0,
                    subscription: u.subscription || 'free',
                    paymentMethods: u.profile.paymentMethods
                }));
            }
        } catch (e) {
            console.warn('Error loading user profiles:', e);
        }
        
        let filtered = [...sampleSitters, ...userProfiles];
        const location = userLocation.city.toLowerCase();
        
        filtered = filtered.filter(s => 
            s.location.city.toLowerCase().includes(location) || 
            s.location.state.toLowerCase().includes(location) ||
            (s.location.zip && s.location.zip === userLocation.zip)
        );
        
        filtered = filtered.filter(s => s.rate >= minRate && s.rate <= maxRate);
        
        if (services.length > 0) {
            filtered = filtered.filter(s => 
                services.some(service => s.services.includes(service))
            );
        }
        
        if (minRating > 0) {
            filtered = filtered.filter(s => s.rating >= minRating);
        }
        
        renderSittersResults(filtered);
    });
    
    elements.filterToggle?.addEventListener('click', toggleFilters);
    elements.applyFilters?.addEventListener('click', handleSearch);
    elements.clearFilters?.addEventListener('click', clearFilters);
    
    // Rating filter buttons
    elements.ratingBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.ratingBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Sitter modal
    elements.sitterModalClose?.addEventListener('click', closeSitterModal);
    elements.sitterModal?.querySelector('.modal-backdrop')?.addEventListener('click', closeSitterModal);
    
    // Video meet modal
    document.getElementById('videoMeetModal')?.querySelector('.modal-backdrop')?.addEventListener('click', closeVideoMeet);
    
    // Delegated sitter card clicks (works for dynamically rendered cards & user profiles)
    document.addEventListener('click', function(e) {
        const card = e.target.closest('.sitter-card');
        if (!card) return;
        const id = card.dataset.sitterId;
        if (!id) return;
        const sitter = findSitterById(id);
        if (sitter) openSitterModal(sitter);
    });
    
    // Delegated message toggle clicks (works for innerHTML-rendered content)
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('[data-toggle-messages]');
        if (!btn) return;
        e.preventDefault();
        e.stopPropagation();
        const id = btn.dataset.toggleMessages;
        if (!id) return;
        toggleMessages(id);
    });
    
    // Shelter card click
    document.addEventListener('click', function(e) {
        const card = e.target.closest('.shelter-card[data-shelter-id]');
        if (!card) return;
        const id = card.dataset.shelterId;
        if (!id) return;
        showShelterDetail(id);
    });
    
    // Pet card click
    document.addEventListener('click', function(e) {
        const card = e.target.closest('.pet-card[data-pet-id]');
        if (!card) return;
        const id = card.dataset.petId;
        if (!id) return;
        const allPets = getAllPets();
        const pet = allPets.find(p => p.id === id);
        if (pet && pet.shelterId) {
            showShelterDetail(pet.shelterId);
        }
    });
    
    // Shelter search
    document.getElementById('shelterSearchBtn')?.addEventListener('click', handleShelterSearch);
    document.getElementById('shelterSearchInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleShelterSearch();
    });
    document.getElementById('shelterSearchClear')?.addEventListener('click', () => {
        const input = document.getElementById('shelterSearchInput');
        if (input) { input.value = ''; input.focus(); }
        handleShelterSearch();
    });
    
    // Register Shelter
    document.getElementById('registerShelterBtn')?.addEventListener('click', () => {
        document.getElementById('shelterModal')?.classList.remove('hidden');
    });
    document.getElementById('shelterModalClose')?.addEventListener('click', () => {
        document.getElementById('shelterModal')?.classList.add('hidden');
    });
    document.getElementById('shelterModal')?.querySelector('.modal-backdrop')?.addEventListener('click', () => {
        document.getElementById('shelterModal')?.classList.add('hidden');
    });
    document.getElementById('shelterRegisterForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        handleShelterRegistration();
    });
    
    // Mobile menu
    elements.mobileMenuBtn?.addEventListener('click', toggleMobileMenu);
    elements.mobileMenu?.addEventListener('click', (e) => {
        if (e.target === elements.mobileMenu) closeMobileMenu();
    });
    elements.mobileLoginBtn?.addEventListener('click', () => openAuthModal('login'));
    elements.mobileSignupBtn?.addEventListener('click', () => openAuthModal('signup'));
    elements.mobileLogoutBtn?.addEventListener('click', handleLogout);
    elements.mobileProfileBtn?.addEventListener('click', () => navigateTo('profile'));
    
    // Dashboard sidebar clicks (document-level so it catches dynamically created buttons)
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('.sidebar-link');
        if (!btn) return;
        const profilePage = document.getElementById('profilePage');
        if (!profilePage || !profilePage.classList.contains('active')) return;
        
        const tab = btn.dataset.dashboard;
        const view = btn.dataset.view;
        const shelterTab = btn.dataset.shelter;
        const adminTab = btn.dataset.admin;
        
        document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
        btn.classList.add('active');
        
        if (tab) {
            if (tab === 'profile-edit') {
                openSitterSignup(true);
                return;
            }
            currentDashboardTab = tab;
            document.getElementById('dashboardContent').innerHTML = getDashboardContent(tab, window._sitterDash || {});
        } else if (shelterTab) {
            if (shelterTab === 'profile-edit') {
                const editContent = document.getElementById('shelterDashboardContent');
                if (editContent) editContent.innerHTML = getShelterContent('profile-edit', window._shelterDash || {});
                return;
            }
            _shelterTab(shelterTab);
        } else if (adminTab) {
            _adminTab(adminTab);
        } else if (view) {
            if (view === 'find-sitter') {
                navigateTo('sitters');
                return;
            }
            document.getElementById('dashboardContent').innerHTML = getOwnerContent(view);
        }
    });
}
