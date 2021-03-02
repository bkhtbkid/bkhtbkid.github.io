$(function() {
   
   $('.menu-btn').on('click', function(){
      $('.menu-btn, .menu__list').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.slider__items').slick({
      arrows: false,
      dots: true,
      autoplay: 3000,
      fade: true
   });

   $('.products__btn-favorite').on('click', function(){
      $(this).toggleClass('products__btn-favorite--active');
   });

   $('.products__inner').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:'<button class="slick-prev" type="button"><img src="images/icons/arrow-left.svg" alt=""></button>',
      nextArrow:'<button class="slick-next" type="button"><img src="images/icons/arrow-right.svg" alt=""></button>',
      responsive: [
         {
           breakpoint: 993,
           settings: {
             arrows: false,
             slidesToShow: 3
            }
         },
         {
            breakpoint: 801,
            settings: {
               arrows: false,
               slidesToShow: 2
           }
         },
         {
            breakpoint: 551,
            settings: {
               arrows: false,
               slidesToShow: 1
           }
         },
       ]
   });

   $('.style-filter').styler();

   $('.drop-down__icon').on('click', function(){
      $(this).toggleClass('drop-down__icon--active');
      $(this).next('.aside-filter__item-list, .aside-filter__item-price').slideToggle(500)
   });

   $(".js-range-slider").ionRangeSlider();

   $('.catalog__top-grid').on('click', function(){
      $(this).addClass('catalog__top-btn--active');
      $('.catalog__top-line').removeClass('catalog__top-btn--active');
      $('.products__item').removeClass('products__item--line');
   });

   $('.catalog__top-line').on('click', function(){
      $(this).addClass('catalog__top-btn--active');
      $('.catalog__top-grid').removeClass('catalog__top-btn--active');
      $('.products__item').addClass('products__item--line');
   });

   $("#rateYo").rateYo({
      starWidth: "20px",
      rating: 4.3,
      spacing: "5px",
      multiColor: {
         "startColor": "#FF0000",
         "endColor"  : "#f1c40f",
       },
    });

})