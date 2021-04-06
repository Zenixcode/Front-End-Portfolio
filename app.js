(function navSlide(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-ul');
    const navLinks = document.querySelector('.nav-ul li');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    
    
})();
