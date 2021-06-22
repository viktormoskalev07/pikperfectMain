 

$(document).ready(function(){

    // Sticky Header
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 100) {
                $('.header').addClass('fixed');
                $('body').addClass('fixed-header');
            }
            else {
                $('.header').removeClass('fixed');
                $('body').removeClass('fixed-header');
            }
        }
    );
    // Mobile Menu
    $('.header .menu-btn').on('click', function(e){
        $('.header').toggleClass('menu-open');
        $('body').toggleClass('overflow')
        e.preventDefault();
    })
    $('.header .menu > .has-sub-menu').on('click', function(){
        $(this).siblings('.has-sub-menu').removeClass('active');
        $(this).toggleClass('active')
    })
        

    // Testimonials Owl Carousel


    $('.video-wrap').on('click', function(){
        if($(this).find('.video')[0].paused){        
            $(this).find('.video')[0].play();   
            $(this).addClass('fade-btn');
            console.log('playing');
        }
        else{       
            $(this).find('.video')[0].pause();
            $(this).removeClass('fade-btn');
            console.log('paused');
        }
    })

    // IMAGE CONTENT SLIDERS
})