const scrollBtn = document.querySelector('.scroll-button');
scrollBtn && scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
})