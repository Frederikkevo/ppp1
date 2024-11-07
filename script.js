// JavaScript til scroll-up knappen
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');

    // Åbn menuen, når der hover over burger-menuen
    burgerMenu.addEventListener('mouseenter', () => {
        navLinks.classList.add('visible');
    });

    // Luk menuen, når musen forlader både burger-menuen og nav-links
    burgerMenu.addEventListener('mouseleave', () => {
        // Tjek, om musen også er uden for navLinks
        navLinks.addEventListener('mouseleave', () => {
            navLinks.classList.remove('visible');
        });
    });
});

