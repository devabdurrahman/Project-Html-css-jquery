$(document).ready(function(){
    //one page active
    $('#nav').onePageNav({
        currentClass: 'current',
    });

    //image popup active
    $('.project-popup').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
          }
    });

    //video popup active
    $('.video-popup').magnificPopup({
        type:'iframe',
    });
    
    // mobile menu active
    $('#nav').slicknav();

    //counter active
    $('.counter-inc').counterUp({
        delay: 10,
        time: 1000
    });

    // testimonials slider active
    $('.testimonials').slick({
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-right"></i></button>',
        dots: true,
        infinite: true,
        loop: true,
        autoplay: true,
        responsive:[{
            breakpoint: 768,
            settings:{
                slidesToShow: 1,
                arrows: false,
                dots: false
            },
        }]
    });

});

// sticky header js
$(window).on('scroll', function(){
    if($(this).scrollTop() > 25) { 
        $('.header-area').addClass('sticky');
    } else{
        $('.header-area').removeClass('sticky');
    }
})