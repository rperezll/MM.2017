$(document).ready(function(){    

    var num = 100; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.header_btm').addClass('fixed');
    } else {
        $('.header_btm').removeClass('fixed');
    }
});
    
});