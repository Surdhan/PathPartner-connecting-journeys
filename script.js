const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const carpoolForm = document.getElementById('carpool-form');
const getLocationBtn = document.getElementById('get-location-btn');
const pickupLocation = document.getElementById('pickup-location');
const dropoffLocation = document.getElementById('dropoff-location');

// Show/hide forms
loginBtn.addEventListener('click', () => {
    loginForm.classList.add('show');
    registerForm.classList.remove('show');
    carpoolForm.classList.remove('show');
});

registerBtn.addEventListener('click', () => {
    registerForm.classList.add('show');
    loginForm.classList.remove('show');
    carpoolForm.classList.remove('show');
});

carpoolForm.addEventListener('click', () => {
    carpoolForm.classList.add('show');
    loginForm.classList.remove('show');
    registerForm.classList.remove('show');
});

// Get location
getLocationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    const address = data.address;
                    pickupLocation.value = `${address.road}, ${address.city}`;
                    dropoffLocation.value = `${address.road}, ${address.city}`;
                })
                .catch((error) => console.error(error));
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});

// Register functionality
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password === confirmPassword) {
        // Register user and redirect to login page
        window.location.href = 'login.html';
    } else {
        alert('Passwords do not match');
    }
});

// Login functionality
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if user exists in database
    // If user exists, redirect to carpool form
    // If user does not exist, display error message
});

// Carpool functionality
carpoolForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pickupLocationValue = pickupLocation.value;
    const dropoffLocationValue = dropoffLocation.value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Check if carpool exists in database
    // If carpool exists, display carpool details
    // If carpool does not exist, display error message
});