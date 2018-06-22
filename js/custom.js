/*global $, console */

$(function () {

    'use strict';

    /* Adjut Header height */


    var myHeader = $('.header'),

        mySlider = $('.bxslider');


    myHeader.height($(window).height());


    $(window).resize(function () {

        myHeader.height($(window).height());

        mySlider.each(function () {

            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);


        });

    });


    /* Links Add Active Class */

    $('.links li a').click(function () {

        $(this).parent().addClass('active').siblings().removeClass('active');

    });


    /* Adjust BXslider List Item Center*/

    mySlider.each(function () {

        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });


    /* Trigger The Bx slider  */

    mySlider.bxSlider({

        pager: false

    });

    /*Smooth Scroll To Div */

    $('.links li a').click(function () {

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('madrid')).offset().top

        }, 1000);


    });


    /* Our Auto Slider Code */

    (function autoSlider() {

        $('.slider .active').each(function () {

            if (!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000, function () {

                    $(this).removeClass('active').next().addClass('active').fadeIn(1000);

                    autoSlider();

                });

            } else {

                $(this).delay(3000).fadeOut(1000, function () {

                    $(this).removeClass('active');

                    $('.slider div').eq(0).addClass('active').fadeIn(1000);

                    autoSlider();
                });
            }

        });

    }());

    /* Trigger Mixitup */


    $('#Container').mixItUp();

    /* Adjust shuffle Links */

    $('.shuffle li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');

    });


    /* Trigger Nice Scroll */

    $(function() {
    $("html").niceScroll({

        cursorcolor: '#1abc9c',
        cursorborder: '1px slid #1abc9c'
    });
});


});
