// JavaScript til scroll-up knappen
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');

    // Åbn og luk menuen ved klik på burger-menuen
    burgerMenu.addEventListener('click', (event) => {
        navLinks.classList.toggle('visible');
        event.stopPropagation(); // Forhindrer klik-eventet i at sprede sig til document
    });

    // Luk menuen, hvis der klikkes uden for den
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickOnBurger = burgerMenu.contains(event.target);

        if (!isClickInsideMenu && !isClickOnBurger) {
            navLinks.classList.remove('visible');
        }
    });
});

