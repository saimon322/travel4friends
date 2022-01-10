let scrollEls = document.querySelectorAll('.wow');

const elementInView = (el) => {
    let elTop = el.getBoundingClientRect().top;
    return elTop <= window.innerHeight;
}

const displayElement = (el) => {
    let delay = el.hasAttribute('data-wow-delay') ? 
                el.getAttribute('data-wow-delay') : 0;
    setTimeout(() => {
        el.classList.add("wow-init");
    }, delay);
};

const handleScroll = () => {
    if (!scrollEls.length) {
        window.removeEventListener("scroll", handleScroll);
        return;
    }
    
    [...scrollEls].forEach((el) => {
        if (elementInView(el)) {
            displayElement(el);
        }
    })
    
    scrollEls = document.querySelectorAll('.wow');
}

if (scrollEls) {
    window.addEventListener('DOMContentLoaded', handleScroll);
    window.addEventListener("scroll", handleScroll);
}
