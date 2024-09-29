document.addEventListener("DOMContentLoaded", () => {
    const profilePic = document.getElementById('profile-pic');
    
    profilePic.addEventListener('click', () => {
        alert("Hi, I am Andrew Chu. I am a proactive student eager to make a difference!");
    });
    
    const infoCards = document.querySelectorAll('.card');
    infoCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('active');
            setTimeout(() => card.classList.remove('active'), 2000);
        });
    });
});
