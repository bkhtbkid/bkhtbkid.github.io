$(function () {

   $('.slider').slick({
      arrows: false,
      fade: true,
      autoplay: 3000
   });


   $('.our-work__slider').slick({
      prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/arrow-left.svg" alt="" /></button>',
      nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/arrow-right.svg" alt="" /></button>',
      fade: true,
      autoplay: 3000,
   });


   $('.our-work__slider-mobile').slick({
      prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/arrow-left.svg" alt="" /></button>',
      nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/arrow-right.svg" alt="" /></button>',
      fade: true,
      autoplay: 3000,
      responsive: [
         {
            breakpoint: 961,
            settings: {
               arrows: false,
               dots: true
            }
         },
      ]
   });

});