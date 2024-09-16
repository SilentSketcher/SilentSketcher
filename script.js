// script.js
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    themeToggleBtn.addEventListener('click', function() {
        body.classList.toggle('dark');

        if (body.classList.contains('dark')) {
            themeIcon.src = 'moon-icon.png'; // Change to moon icon for dark theme
        } else {
            themeIcon.src = 'sun-icon.png'; // Change to sun icon for light theme
        }
    });

    // Smooth scrolling for game list
    const links = document.querySelectorAll('.game-list a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 20, // Adjust offset if needed
                behavior: 'smooth'
            });
        });
    });

    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
