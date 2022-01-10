const header = document.querySelector('.header');
const navButton = document.querySelector('.hamburger');
const menuClass = 'show-menu';

// Anchor links click events
const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
anchorLinks && [...anchorLinks].forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetEl = document.querySelector(link.hash);
        if (header.classList.contains(menuClass)) {
            navButton.click();
        }
        smoothScroll(targetEl);
    })
});

// Window loading when url has hash
window.addEventListener('DOMContentLoaded', () => {
    if (location.hash){
        smoothScroll(location.hash);
    }
});

// Smooth scroll function
function smoothScroll(targetEl){
    window.scrollTo({
        top: targetEl.offsetTop,
        behavior: 'smooth'
    });
}