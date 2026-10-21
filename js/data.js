// PawNamics - Pet Sitting Platform Application

// Sample Data
var sampleSitters = [
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

var samplePets = [
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

var sampleShelters = [
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

var sampleAffiliates = [
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
var state = {
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
var elements = {
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
