const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
const portfolioItem = document.querySelector('.portfolio-item');
const portfolioLink = document.querySelector('.portbg');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');
});

// Portfolio dropdown toggle (mobile and desktop)
portfolioLink.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const dropdown = portfolioItem.querySelector('.dropdown');
    dropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!portfolioItem.contains(e.target)) {
        portfolioItem.querySelector('.dropdown').classList.remove('active');
    }
});

// Close menu when a dropdown item is clicked
document.querySelectorAll('.dropdown a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        portfolioItem.querySelector('.dropdown').classList.remove('active');
    });
});

// Close menu when non-portfolio links are clicked
document.querySelectorAll('#navMenu > ul > li > a:not(.portbg)').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburgerBtn.classList.remove('active');
    });
});