// PawNamics - Pet Sitting Platform Application

// Sample Data
const sampleSitters = [
    {
        id: 's1',
        name: 'Sarah Mitchell',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        bio: 'Certified dog trainer with 5 years of experience. I treat every pet like my own family member. Specializing in puppy care and senior dogs.',
        location: { city: 'Brooklyn', state: 'NY', zip: '11201' },
        rate: 35,
        services: ['sitting', 'walking', 'training'],
        experience: 5,
        rating: 4.9,
        reviewCount: 127,
        subscription: 'premium',
        paymentMethods: { cashapp: '@sarahm', venmo: '@sarah-mitchell', paypal: 'sarah@email.com' },
        phone: '(347) 555-0182',
        email: 'sarah.mitchell@petsitter.com'
    },
    {
        id: 's2',
        name: 'Marcus Johnson',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        bio: 'Former veterinary technician. Expert in medication administration and special needs pets. Cat specialist!',
        location: { city: 'Manhattan', state: 'NY', zip: '10001' },
        rate: 45,
        services: ['sitting', 'boarding', 'grooming'],
        experience: 7,
        rating: 4.8,
        reviewCount: 89,
        subscription: 'pro',
        paymentMethods: { cashapp: '@marcusj', venmo: '@marcus-j', bitcoin: '1Marcu5J9...' },
        phone: '(212) 555-0193',
        email: 'marcus.johnson@petsitter.com'
    },
    {
        id: 's3',
        name: 'Emma Rodriguez',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
        bio: 'Dog walker by day, pet photographer by evening. Your pups will get the exercise and photo updates they deserve!',
        location: { city: 'Queens', state: 'NY', zip: '11375' },
        rate: 25,
        services: ['walking', 'sitting'],
        experience: 3,
        rating: 4.7,
        reviewCount: 56,
        subscription: 'pro',
        paymentMethods: { venmo: '@emma-rod', paypal: 'emma.r@email.com' },
        phone: '(718) 555-0147',
        email: 'emma.rodriguez@petsitter.com'
    },
    {
        id: 's4',
        name: 'David Chen',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        bio: 'Former military veteran with a big heart for animals. Available for overnight stays and extended boarding. Home with a fenced yard.',
        location: { city: 'Jersey City', state: 'NJ', zip: '07302' },
        rate: 40,
        services: ['sitting', 'boarding', 'walking'],
        experience: 4,
        rating: 5.0,
        reviewCount: 34,
        subscription: 'premium',
        paymentMethods: { cashapp: '@davidc', venmo: '@david-chen', bank: 'Chase ****4521' },
        phone: '(201) 555-0168',
        email: 'david.chen@petsitter.com'
    },
    {
        id: 's5',
        name: 'Olivia Thompson',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
        bio: 'Professional pet groomer and certified massage therapist for pets. Give your furry friends the spa treatment they deserve!',
        location: { city: 'Hoboken', state: 'NJ', zip: '07030' },
        rate: 55,
        services: ['grooming', 'sitting', 'training'],
        experience: 6,
        rating: 4.9,
        reviewCount: 201,
        subscription: 'pro',
        paymentMethods: { paypal: 'olivia@petspa.com', venmo: '@olivia-t', bitcoin: '1Olivia7Th...' },
        phone: '(201) 555-0209',
        email: 'olivia.thompson@petsitter.com'
    },
    {
        id: 's6',
        name: 'James Wilson',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
        bio: 'College student studying animal science. Part-time pet sitter with a passion for animals. Great with reptiles and small mammals too!',
        location: { city: 'Bronx', state: 'NY', zip: '10467' },
        rate: 20,
        services: ['sitting', 'walking'],
        experience: 2,
        rating: 4.6,
        reviewCount: 28,
        subscription: 'free',
        paymentMethods: { cashapp: '@jamesw20' },
        phone: '(646) 555-0124',
        email: 'james.wilson@petsitter.com'
    }
];

const samplePets = [
    {
        id: 'p1',
        name: 'Buddy',
        species: 'dog',
        breed: 'Labrador Mix',
        age: '2 years',
        description: 'Friendly, energetic lab mix who loves everyone he meets. Great with kids and other dogs. Fully vaccinated and neutered.',
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=500&fit=crop',
        shelterId: 'sh1',
        featured: true
    },
    {
        id: 'p2',
        name: 'Whiskers',
        species: 'cat',
        breed: 'Domestic Shorthair',
        age: '4 years',
        description: 'Sweet and affectionate cat who loves to cuddle. Great for apartments. Declawed and litter-trained.',
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&h=500&fit=crop',
        shelterId: 'sh1',
        featured: true
    },
    {
        id: 'p3',
        name: 'Max',
        species: 'dog',
        breed: 'German Shepherd',
        age: '3 years',
        description: 'Loyal and intelligent GSD looking for an active family. Knows basic commands and loves to play fetch.',
        image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=500&h=500&fit=crop',
        shelterId: 'sh2',
        featured: false
    },
    {
        id: 'p4',
        name: 'Luna',
        species: 'cat',
        breed: 'Siamese',
        age: '1 year',
        description: 'Playful Siamese kitten with stunning blue eyes. Very vocal and loves attention. Needs a patient home.',
        image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&h=500&fit=crop',
        shelterId: 'sh2',
        featured: true
    },
    {
        id: 'p5',
        name: 'Rocky',
        species: 'dog',
        breed: 'Bulldog Mix',
        age: '5 years',
        description: 'Chill bulldog mix who just wants to lounge and get belly rubs. Great for first-time dog owners.',
        image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=500&h=500&fit=crop',
        shelterId: 'sh3',
        featured: false
    },
    {
        id: 'p6',
        name: 'Shadow',
        species: 'cat',
        breed: 'Black Domestic',
        age: '6 years',
        description: 'Elegant black cat looking for a quiet home. Independent but affectionate once she trusts you.',
        image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=500&h=500&fit=crop',
        shelterId: 'sh3',
        featured: false
    },
    {
        id: 'p7',
        name: 'Charlie',
        species: 'dog',
        breed: 'Beagle',
        age: '4 years',
        description: 'Adventurous beagle with an amazing nose! Loves hiking and sniffing new places. Needs a secure yard.',
        image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=500&h=500&fit=crop',
        shelterId: 'sh1',
        featured: true
    },
    {
        id: 'p8',
        name: 'Mochi',
        species: 'cat',
        breed: 'Scottish Fold',
        age: '2 years',
        description: 'adorable folded ears and the sweetest personality. Loves to be held and makes the perfect lap cat.',
        image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=500&h=500&fit=crop',
        shelterId: 'sh2',
        featured: false
    }
];

const sampleShelters = [
    {
        id: 'sh1',
        name: 'NYC Paws Rescue',
        address: '123 Pet Haven Lane, Brooklyn, NY 11201',
        phone: '(718) 555-0123',
        hours: 'Mon-Sat 10AM-6PM, Sun 12PM-5PM',
        image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop'
    },
    {
        id: 'sh2',
        name: 'Manhattan Animal Care',
        address: '456 Central Park West, New York, NY 10024',
        phone: '(212) 555-0456',
        hours: 'Daily 9AM-7PM',
        image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop'
    },
    {
        id: 'sh3',
        name: 'Forever Home Shelter',
        address: '789 Hope Street, Jersey City, NJ 07302',
        phone: '(201) 555-0789',
        hours: 'Tue-Sun 11AM-6PM',
        image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=400&fit=crop'
    }
];

const sampleAffiliates = [
    {
        id: 'a1',
        company: 'PetSmart',
        logo: 'PS',
        description: 'Everything your pet needs, from food to toys to grooming services. One-stop shop for all pet supplies.',
        deal: {
            headline: '20% Off Your First Order',
            code: 'PAWNAMICS20',
            discount: '20% Off',
            expires: '2024-12-31'
        }
    },
    {
        id: 'a2',
        company: 'Chewy',
        logo: 'CH',
        description: 'Premium pet food and supplies delivered to your door. Auto-ship and save on your monthly essentials.',
        deal: {
            headline: 'Free Shipping + 30% Off First Order',
            code: 'FREESHIP30',
            discount: '30% Off',
            expires: '2024-12-31'
        }
    },
    {
        id: 'a3',
        company: 'Banfield Pet Hospital',
        logo: 'BH',
        description: 'Comprehensive veterinary care with over 1,000 hospitals nationwide. Wellness plans for every life stage.',
        deal: {
            headline: '$50 Off First Exam',
            code: 'WELCOME50',
            discount: '$50 Off',
            expires: '2024-06-30'
        }
    },
    {
        id: 'a4',
        company: 'Rover',
        logo: 'RV',
        description: 'Dog walking, boarding, and sitting services. Connect with verified pet sitters in your area.',
        deal: {
            headline: '$20 Off First Booking',
            code: 'PAWNNOW',
            discount: '$20 Off',
            expires: '2024-12-31'
        }
    },
    {
        id: 'a5',
        company: 'Petco',
        logo: 'PC',
        description: 'Quality pet supplies, grooming, and training services. Bring your pet in for a spa day!',
        deal: {
            headline: 'BOGO 50% Off Toys',
            code: 'PLAY50',
            discount: 'BOGO 50%',
            expires: '2024-05-31'
        }
    },
    {
        id: 'a6',
        company: 'Nationwide Pet Insurance',
        logo: 'NW',
        description: 'Comprehensive pet insurance coverage. Protect your furry friend from unexpected veterinary costs.',
        deal: {
            headline: '30 Days Free Coverage',
            code: 'FREEMONTH',
            discount: '30 Days Free',
            expires: '2024-12-31'
        }
    }
];

// Application State
let state = {
    currentUser: null,
    currentPage: 'home',
    filters: {
        location: '',
        minRate: 0,
        maxRate: 100,
        services: [],
        minRating: 0
    },
    sitterFormData: {}
};

// DOM Elements
const elements = {
    navbar: document.getElementById('navbar'),
    navLinks: document.getElementById('navLinks'),
    navAuth: document.getElementById('navAuth'),
    navUser: document.getElementById('navUser'),
    userMenu: document.getElementById('userMenu'),
    userBtn: document.getElementById('userBtn'),
    userAvatar: document.getElementById('userAvatar'),
    userName: document.getElementById('userName'),
    mobileMenu: document.getElementById('mobileMenu'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileAuth: document.getElementById('mobileAuth'),
    mobileUserMenu: document.getElementById('mobileUserMenu'),
    authModal: document.getElementById('authModal'),
    loginBtn: document.getElementById('loginBtn'),
    signupBtn: document.getElementById('signupBtn'),
    authModalClose: document.getElementById('authModalClose'),
    authTabs: document.querySelectorAll('.auth-tab'),
    loginForm: document.getElementById('loginForm'),
    signupForm: document.getElementById('signupForm'),
    sitterModal: document.getElementById('sitterModal'),
    sitterModalClose: document.getElementById('sitterModalClose'),
    sitterModalBody: document.getElementById('sitterModalBody'),
    sitterSignupModal: document.getElementById('sitterSignupModal'),
    sitterSignupClose: document.getElementById('sitterSignupClose'),
    sitterProfileForm: document.getElementById('sitterProfileForm'),
    featuredSitters: document.getElementById('featuredSitters'),
    sittersResults: document.getElementById('sittersResults'),
    searchLocation: document.getElementById('searchLocation'),
    searchSitters: document.getElementById('searchSitters'),
    filterToggle: document.getElementById('filterToggle'),
    filtersPanel: document.getElementById('filtersPanel'),
    applyFilters: document.getElementById('applyFilters'),
    clearFilters: document.getElementById('clearFilters'),
    minRate: document.getElementById('minRate'),
    maxRate: document.getElementById('maxRate'),
    ratingBtns: document.querySelectorAll('.rating-btn'),
    petsGrid: document.getElementById('petsGrid'),
    sheltersGrid: document.getElementById('sheltersGrid'),
    partnersGrid: document.getElementById('partnersGrid'),
    dealsGrid: document.getElementById('dealsGrid'),
    profilePage: document.getElementById('profilePage'),
    profileContent: document.getElementById('profileContent'),
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toastMessage'),
    heroBecomeSitter: document.getElementById('heroBecomeSitter'),
    ctaBecomeSitter: document.getElementById('ctaBecomeSitter'),
    footerBecomeSitter: document.getElementById('footerBecomeSitter'),
    myProfileBtn: document.getElementById('myProfileBtn'),
    logoutBtn: document.getElementById('logoutBtn'),
    mobileLoginBtn: document.getElementById('mobileLoginBtn'),
    mobileSignupBtn: document.getElementById('mobileSignupBtn'),
    mobileProfileBtn: document.getElementById('mobileProfileBtn'),
    mobileLogoutBtn: document.getElementById('mobileLogoutBtn')
};

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
    } else {
        elements.loginForm?.classList.add('hidden');
        elements.signupForm?.classList.remove('hidden');
    }
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

// Search and Filters
function toggleFilters() {
    elements.filtersPanel?.classList.toggle('hidden');
}

function handleSearch() {
    const location = elements.searchLocation?.value.toLowerCase() || '';
    const minRate = parseInt(elements.minRate?.value) || 0;
    const maxRate = parseInt(elements.maxRate?.value) || 100;
    const services = Array.from(document.querySelectorAll('input[name="service"]:checked')).map(s => s.value);
    const minRating = parseFloat(document.querySelector('.rating-btn.active')?.dataset.rating) || 0;
    
    state.filters = { location, minRate, maxRate, services, minRating };
    
    // Get user profiles from localStorage
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
    
    // Combine sample sitters with user profiles
    let filtered = [...sampleSitters, ...userProfiles];
    
    if (location) {
        filtered = filtered.filter(s => 
            s.location.city.toLowerCase().includes(location) || 
            s.location.state.toLowerCase().includes(location) ||
            (s.location.zip && s.location.zip.toLowerCase().includes(location))
        );
    }
    
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
    elements.filtersPanel?.classList.add('hidden');
}

function clearFilters() {
    elements.searchLocation.value = '';
    elements.minRate.value = '';
    elements.maxRate.value = '';
    document.querySelectorAll('input[name="service"]').forEach(cb => cb.checked = false);
    elements.ratingBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('.rating-btn[data-rating="0"]')?.classList.add('active');
    state.filters = { location: '', minRate: 0, maxRate: 100, services: [], minRating: 0 };
    renderSittersResults();
    elements.filtersPanel?.classList.add('hidden');
}

// Mobile Menu
function toggleMobileMenu() {
    elements.mobileMenu?.classList.toggle('hidden');
}

function closeMobileMenu() {
    elements.mobileMenu?.classList.add('hidden');
}

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

// Sample dashboard data
const dashboardData = {
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

let currentDashboardTab = 'overview';

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

// Toast Notifications
function showToast(message, type = 'success') {
    const toast = elements.toast;
    const messageEl = elements.toastMessage;
    
    if (!toast || !messageEl) return;
    
    messageEl.textContent = message;
    toast.classList.remove('hidden');
    toast.querySelector('.toast-icon').style.fill = type === 'error' ? 'var(--error)' : 'var(--bg-primary)';
    toast.querySelector('.toast-content').style.background = type === 'error' ? 'var(--error)' : 'var(--success)';
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', init);
