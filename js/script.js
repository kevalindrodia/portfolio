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

    // Reveal each section
    sr.reveal('.hero-section', { interval: 100 });
    sr.reveal('.intro', { interval: 100 });
    sr.reveal('.projects', { interval: 100 });
    sr.reveal('.contact', { interval: 100 });

