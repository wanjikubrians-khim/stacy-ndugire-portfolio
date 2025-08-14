// Mobile navigation menu toggle
const hamburger = document.querySelector('#hamburger');
const cancelIcon = document.querySelector('#cancel-icon');
const navMenu = document.querySelector('#nav-links');

if (hamburger && cancelIcon && navMenu) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.add('show');
    });

    cancelIcon.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('show');
        }
    });

    // Close menu when scrolling
    window.addEventListener('scroll', () => {
        navMenu.classList.remove('show');
    });
}

// Optional smooth scroll for nav links
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: 'smooth'
            });
        }
        // Close menu on mobile after clicking link
        navMenu.classList.remove('show');
    });
});
