(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    const burgerClosed = document.querySelector('.burger_close');
    const menuLinks = document.querySelector('.nav-menu_link');
    burgerItem.addEventListener('click', function () {
        menu.classList.add('nav-active');        
    });
    burgerClosed.addEventListener('click', function () {
        menu.classList.remove('nav-active');
    });
    menuLinks.addEventListener('click', function () {
        menu.classList.remove('nav-active');
    });
}());