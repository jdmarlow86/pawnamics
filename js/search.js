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
