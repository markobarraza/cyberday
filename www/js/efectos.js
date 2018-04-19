// Side Nav

$(".button-collapse").sideNav({
    menuWidth: 270
});

// Paralax
$('.parallax').parallax();

// Carrusel
$('.carousel.carousel-slider').carousel({ fullWidth: false });

// Slider 

$('.slider').slider({
    height: 313
});

$('.carousel').carousel();

// Top Menu Fixed
var altura = $('.efecto-menu').offset().top;
$(window).on('scroll', function() {
    if ($(window).scrollTop() > altura) {
        $('.efecto-menu').addClass('menu-fixed');
    } else {
        $('.efecto-menu').removeClass('menu-fixed');
    }
});
// Scroll Nav Fixed
$(function() {
    $('a[href*=#]').click(function() {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

            if ($target.length) {

                var targetOffset = $target.offset().top;

                $('html,body').animate({
                    scrollTop: targetOffset
                }, 500);

                return false;
            }
        }
    });

});

// Scroll Top 
// Comprobar si estamos, al menos, 100 px por debajo de la posición top
// para mostrar o esconder el botón
$(window).scroll(function() {

    if ($(this).scrollTop() > 100) {

        $('.scroll-to-top').fadeIn();

    } else {

        $('.scroll-to-top').fadeOut();

    }

});

// al hacer click, animar el scroll hacia arriba
$('.scroll-to-top').click(function(e) {

    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 800);

});

//Cargador
$(window).load(function() {
    $('#preloader').fadeOut('slow');
    $('body').css({ 'overflow': 'visible' });
})

// Swiper
var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    centeredSlides: true,
    // Autoplay
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// Tooltips
$(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
  });