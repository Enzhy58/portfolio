$(function(){
  $('.skills__list').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    slidesToShow: 7,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  $('.header__link').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body, html').animate({ scrollTop: top }, 1500);
  });
});