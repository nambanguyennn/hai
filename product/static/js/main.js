(function ($) {
    'use strict';
    //==========preloder===========
    $(window).on('load',function(){
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
    });
    //==========fixed header & scroll to top button===========
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 300) {
            $('.header .bottom-header').addClass('animated fadeInDown fixed-header');
            $('.scroll-to-top').fadeIn();
            $('.scroll-to-top button').addClass('active');
        } else {
            $('.header .bottom-header').removeClass('animated fadeInDown fixed-header');
            $('.scroll-to-top').fadeOut();
            $('.scroll-to-top button').removeClass('active');
        }
    });
    $(document).ready(function(){
        // scroll to top function
        $(".scroll-to-top").on('click', function(){
            $('html, body').animate({scrollTop : 0},100);
        })
        
        // language selection menu
        $('#demo').flagStrap({
            countries: {
                "AU": "AUS",
                "BD": "BAN",
                "US": "USA"
            },
            buttonSize: "",
            buttonType: "",
            labelMargin: "10px",
            scrollable: false,
            scrollableHeight: "350px"
        });
        
        // header search box show
        $("#search-box, #sm-search-box").on('click', function(){
            $('.search-box').addClass("active");
            $('body').addClass("hidden");
            $(".search-box .close").on('click', function(){
                $('.search-box').removeClass("active");
                $('body').removeClass("hidden");
            })
        })
        // header wish list show
        $("#w-list, #sm-w-list").on('click', function(){
            $('.wish-list').addClass("active");
            $('body').addClass("hidden");
            $(".wish-list .close").on('click', function(){
                $('.wish-list').removeClass("active");
                $('body').removeClass("hidden");
            })
        })
        // header cart list show
        $("#c-list, #sm-c-list").on('click', function(){
            $('.cart-list').addClass("active");
            $('body').addClass("hidden");
            $(".cart-list .close").on('click', function(){
                $('.cart-list').removeClass("active");
                $('body').removeClass("hidden");
            })
        })
        //==========banner slider===========
        $('.banner').owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 1000,
            margin: 300,
            autoplay: true,
            autoplayTimeout: 7000,
            autoplayHoverPause: false,
            mouseDrag: false,
            touchDrag: false,
            animateIn: 'animate__slideInDown',
            animateOut: 'animate__fadeOut',
        });


        /*---------------------------
        Countdown
        ---------------------------*/

        const hoursEl = document.getElementById('hours');
        const minsEL = document.getElementById('mins');
        const secondsEL = document.getElementById('seconds');

        const newYears = '20 June 2021';

        function countdown() {
            const newYearsDate = new Date(newYears);
            const currentDate = new Date();

            const totalSeconds = (newYearsDate - currentDate) /1000;
            const minutes = Math.floor(totalSeconds/ 60) % 60;
            const hours = Math.floor(totalSeconds /3600) % 24;
            const seconds = Math.floor(totalSeconds) % 60; 

            hoursEl.innerText = hours;
            minsEL.innerText = minutes;
            secondsEL.innerText = seconds; 
        }
        setInterval(countdown, 1000);

        



        $('.timer').syotimer({
            layout: 'hms',
            periodUnit: 'h',
            periodic: true,
            periodInterval: 12
        });





        //==========new arrival slider===========
        $('.sidebar-slider').owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 1000,
            margin: 30,
            dots: false,
            nav: true,
            navText: ['<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8 fa-fw fa-2x"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" class=""></path></svg>','<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-fw fa-2x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" class=""></path></svg>'],
        });
        //==========deal slider===========
        $('.deal-slider').owlCarousel({
            items: 2,
            loop: true,
            smartSpeed: 1000,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                960: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });

        //==========recent product slider===========
        $('.slider-box').owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 1000,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            nav: true,
            navText: ['<i><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8 fa-fw fa-2x"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" class=""></path></svg></i>','<i><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-fw fa-2x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" class=""></path></svg></i>'],
        });

        //==========brands slider===========
        $('.all-brand').owlCarousel({
            loop: true,
            smartSpeed: 1000,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            dots: false,
            nav: true,
            navText: ['<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8 fa-fw fa-2x"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" class=""></path></svg>','<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-fw fa-2x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" class=""></path></svg>'],
            responsive: {
                0: {
                    items: 3
                },
                768: {
                    items: 4
                },
                960: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        });
        //==========instagram slider===========
        $('.posts').owlCarousel({
            items: 6,
            loop: true,
            smartSpeed: 1000,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            dots: false,
            responsive: {
                0: {
                    items: 3
                },
                768: {
                    items: 4
                },
                960: {
                    items: 5
                },
                1200: {
                    items: 6
                },
                1920: {
                    items: 6
                }
            }
        });
        //==========image slider on about page===========
        $('.tab-slider').owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 1500,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: false,
        });

        // testimonial slider
        $('.comments').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay : true,
            prevArrow : '<button type="button" class="slick-prev"><i><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8 fa-fw fa-2x"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" class=""></path></svg></i></button>',
            nextArrow : '<button type="button" class="slick-next"><i><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-fw fa-2x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" class=""></path></svg></i></button>',
            fade: true,
            asNavFor: '.clients',
        });
        $('.clients').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.comments',
            autoplay : true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        arrows : false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows : false
                    }
                }
            ]
        });
    });
}(jQuery));