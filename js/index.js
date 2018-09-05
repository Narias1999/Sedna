
$(document).ready(function(){
    AOS.init({
        once: true
    })
    $('.flexslider').flexslider({
        animation: "slide"
    });
})

const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    const cont = nav.querySelector('.container')
    if (window.scrollY > 20) nav.classList.add('is-down')
    else nav.classList.remove('is-down')
})