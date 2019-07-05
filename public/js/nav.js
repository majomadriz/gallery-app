(function() {
    let menuToggle = document.querySelector('#menu-toggle');
    let mainNavigation = document.querySelector('.navigation');
    let isMenuOpen = false;
    menuToggle.addEventListener('click', function() {
        this.childNodes[0].classList.toggle('fa-bars');
        this.childNodes[0].classList.toggle('fa-times');
        // this.innerText = isMenuOpen ? "Menu" : "X";
        isMenuOpen = !isMenuOpen;
        mainNavigation.classList.toggle('nav-hidden')
    })
}())