$(function() {
   $('.slider__item').slick({
      dots: true,
      autoplay: true,
      fade: true,
      nextArrow: '<button class="btn-next"><img src="images/icons/arrow-right.svg" alt=""></button>',
      prevArrow: '<button class="btn-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
      responsive: [
         {
           breakpoint: 801,
           settings: {
             arrows: false,
             dots: false,
           }
         },
       ]

   });

   $('.menu-btn').on('click', function(){
      $('.menu-btn, .menu').toggleClass('active')
   });
})