const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeIcon = document.querySelector('.close-icon');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');  // Add this line to toggle the 'active' class on the hamburger button
});

// Close menu when clicking a link
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active'); // Remove active class when a link is clicked
    }
});
