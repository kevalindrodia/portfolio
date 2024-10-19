const menuIcon = document.querySelector('.menu-icon ion-icon');
const overlayNav = document.querySelector('.overlay-nav');

menuIcon.addEventListener('click', () => {
    overlayNav.classList.toggle('active'); // Toggle the 'active' class
    // Check if the overlay is active, and switch the icon accordingly
    if (overlayNav.classList.contains('active')) {
        menuIcon.setAttribute('name', 'close'); // Change to 'close' icon when menu is open
    } else {
        menuIcon.setAttribute('name', 'reorder-two'); // Change back to 'reorder-two' when menu is closed
    }
});



// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom', // Animation direction
    distance: '30px', // Distance of the reveal
    duration: 600, // Animation duration in milliseconds
    delay: 200, // Delay before animation starts
    reset: false // Reset the animation when scrolling back up
});

const srConfigs = {
    interval: 100,
    viewFactor: 0.4, // 10% of the element must be in view
    viewOffset: {
        top: window.innerHeight * 0.1, // 10% of the viewport height
        right: 0,
        bottom: 0,
        left: 0
    }
}
// Reveal each section
sr.reveal('.hero-section', { interval: 100 });
// Reveal the .intro element with a 10% scroll offset
sr.reveal('.intro', {
    interval: 100,
    viewFactor: 0.4,
});
sr.reveal('.projects', {
    interval: 100,
    viewFactor: 0.1,
});
sr.reveal('.contact', {
    interval: 100,
    viewFactor: 0.2,
});

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();