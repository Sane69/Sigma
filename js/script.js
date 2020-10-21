$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1
    })
    $('#catalog').click(function() {
        $('.sub-main__nav--menu').toggleClass('open')
    })
    $('.main__nav--search').click(function() {
        $('.main__nav--menu').addClass('active')
        $('.main__nav--other').addClass('active')
        $('.main__search').addClass('active')
    })
    $('.main__search--blockClose').click(function() {
        $('.main__nav--menu').removeClass('active')
        $('.main__nav--other').removeClass('active')
        $('.main__search').removeClass('active')
    })
    $('.popular__item--img').hover(function() {
        $(this).find('.popular__item--buy').stop(true, true).fadeIn()
    }, function() {
        $(this).find('.popular__item--buy').stop(true, true).fadeOut()
    })
    $('.main__burger').click(function() {
        $('.main__burger, .header__mobile').toggleClass('active')
    })
    $('.footer__nav--titleSpan').click(function() {
        $(this).next().toggleClass('active')
        $(this).closest('.footer__nav--titleSpan').toggleClass('active')
    })
    $('.main__burger').click(function() {
        $('.main__mobile').toggleClass('active')
        $('body').toggleClass('lock')
    })
    $('.mobile__arrow').click(function() {
        $(this).closest('.mobile__arrow').toggleClass('active')
        $(this).prev('.main__mobile--mainLink').toggleClass('active')
        $(this).next().slideToggle()
    })
})

var isMobile = {
    Android: function () {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function () {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function () {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function () {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function () {return navigator.userAgent.match(/IEMobile/i);},
    any: function () {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

if (isMobile.any()) {
    $('body').addClass('touch')
    $('.arrow').click(function() {
        $('.sub-sub-main__nav--menu').toggleClass('open')
    })
} else {
    $('body').addClass('mouse')
}