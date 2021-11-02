(function ($) {
    'use strict';
    //==========preloder===========//
    $(window).on('load',function(){
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
    });
    //==========fixed header & scroll to top button===========//
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
        //===========scroll to top function===========//
        $(".scroll-to-top").on('click', function(){
            $('html, body').animate({scrollTop : 0},100);
        })
        
        //===========language selection menu===========//
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
        
        //===========header search box show===========//
        $("#search-box, #sm-search-box").on('click', function(){
            $('.search-box').addClass("active");
            $('body').addClass("hidden");
            $(".search-box .close").on('click', function(){
                $('.search-box').removeClass("active");
                $('body').removeClass("hidden");
            })
        })

        //===========header wish list show===========//
        $("#w-list, #sm-w-list").on('click', function(){
            $('.wish-list').addClass("active");
            $('body').addClass("hidden");
            $(".wish-list .close").on('click', function(){
                $('.wish-list').removeClass("active");
                $('body').removeClass("hidden");
            })
        })

        //==========header cart list show===========//
        $("#c-list, #sm-c-list").on('click', function(){
            $('.cart-list').addClass("active");
            $('body').addClass("hidden");
            $(".cart-list .close").on('click', function(){
                $('.cart-list').removeClass("active");
                $('body').removeClass("hidden");
            })
        })

        //==========new arrival slider===========//
        $('.sidebar-slider').owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 1000,
            margin: 30,
            dots: false,
            nav: true,
            navText: ['<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8 fa-fw fa-2x"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" class=""></path></svg>','<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-fw fa-2x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" class=""></path></svg>'],
        });

        //==========recent product slider===========//
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

        //==========brands slider===========//
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

        //==========instagram slider===========//
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

        //==========best seller slider on home page 1===========//
        $('.tab-slider').owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 1500,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: false,
        });

        //==========testimonial slider==========//
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

        //==========price range===========//
        if($("#slider-range").length){
            $("#slider-range").slider({
            range: true,
            min: 0,
            max: 1000,
            values: [ 0.00, 500.00 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
            });
            $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
            " - $" + $( "#slider-range" ).slider( "values", 1 ) );
        }

        //==========product details slider===========//
        var productCarousel = $('.product-slider');
        productCarousel.owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            margin: 0,
            autoplay: false,
            startPosition: 0,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            thumbs: true,
            thumbsPrerendered: true,
            animateOut: 'fadeOut',
               animateIn: 'fadeIn',
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                960: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        }); 
        var productSliderWidth = $('.single-product-slider').width();
        $('.single-product-slider').css('height', productSliderWidth);
        console.log(productSliderWidth);
        
        //==========product quantity===========//
        $('.quantity').each(function () {
            var spinner = jQuery(this),
                input = spinner.find('input[type="number"]'),
                btnUp = spinner.find('.quantity-up'),
                btnDown = spinner.find('.quantity-down'),
                min = input.attr('min'),
                max = input.attr('max');

            btnUp.on('click', function () {
                var oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });

            btnDown.on('click', function () {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });

        });

        //==========product rating===========//
        $('.rating').rating();

        //==========releted product slider===========//
        $('.releted-slider').owlCarousel({
            items: 4,
            loop: true,
            smartSpeed: 1500,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: false,
            dots: false,
            nav: true,
            navText: ['<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8 fa-fw fa-2x"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" class=""></path></svg>','<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-fw fa-2x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" class=""></path></svg>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1.7,
                    center: true
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                960: {
                    items: 3.5,
                    center: true
                },
                1200: {
                    items: 4
                },
                1920: {
                    items: 4
                }
            }
        });
        
        //==========modal video popup===========//
        $(".vdo-btn").modalVideo();
            
        //==========odometer===========//
        $('.odometer').appear(function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    });
}(jQuery));