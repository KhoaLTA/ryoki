// Scrolling
$(window).bind('load', function () {
    "use strict";
    // anchor in page
    $(function () {
        $('a[href^="#"]').click(function () {
            if ($($(this).attr('href')).length) {
                var p = $($(this).attr('href')).offset();
                if ($(window).width() > 750) {
                    $('html,body').animate({ scrollTop: p.top - 170 }, 400);
                } else {
                    $('html,body').animate({ scrollTop: p.top - 100 }, 400);
                }
            }
            return false;
        });
    });

    // anchor top page #
    var hash = location.hash;
    if (hash) {
        var p1 = $(hash).offset();
        if ($(window).width() > 750) {
            $('html,body').animate({ scrollTop: p1.top - 100 }, 400);
        } else {
            $('html,body').animate({ scrollTop: p1.top - 100 }, 400);
        }
    }
});


// Change class active button language
window.addEventListener('load', function(e) {
    var list_language = document.querySelectorAll('.h__info--social .language');
    list_language.forEach(item => {
        item.addEventListener('click', function() {
            list_language.forEach(item => {
                item.classList.remove('active');
            });
            item.classList.add('active');
        });
    });
});


// Slide MV
$('.mv__slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    centerMode: false,
    centerPadding: 0,
    fade: true,
    variableWidth: false,
});


// Show to top
$(window).bind('load scroll', function () {
    "use strict";
    if ($(this).scrollTop() >= 300) {
        $('.to_top').addClass('show');
    } else {
        $('.to_top').removeClass('show');
    }
});

// Click button gnavi sp
$(document).ready(function () {
    $('.icon_menu').click(function () {
        $(this).toggleClass('active');
        $('.header .header__nav').toggleClass('show');
        // $('#top').toggleClass('overfl');
    });
});

$(document).ready(function (e) {
    if ($(window).width() < 769) {
        $('.header .sub__menu--list').slideUp(0);
        $('.header .header__nav--list .header__nav--item.sub__menu span').click(function () {
            if ($(this).hasClass('close')) {
                $(this).next().slideDown(400);
                $(this).removeClass('close').addClass('open');
            }
            else {
                $(this).next().slideUp(400);
                $(this).removeClass('open').addClass('close');
            }
        });
    }
});