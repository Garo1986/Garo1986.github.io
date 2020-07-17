$('.header__btn').on('click', function(e) {
    e.preventDefault();
    $('.header').toggleClass('header__active');
    $('.header__menu').toggleClass('menu__active');
    $('.main').toggleClass('main__active');
  })
$('.main').on('click', function(e) {
    e.preventDefault();
    $('.header').toggleClass('header__active');
    $('.header__menu').toggleClass('menu__active');
    $('.main').toggleClass('main__active');
  })
//   $('.card__link-favorites').on('click', function (e) {
//     e.preventDefault();
//     $('.card__link-fill').toggleClass('card__link-active');
    
// })
