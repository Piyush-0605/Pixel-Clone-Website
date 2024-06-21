$(document).ready(function() {
    $('.menu-icon').click(function(e) {
        $('body').addClass('menu-open');
    });
    $('.close-menu, .overlay').click(function(e) {
        $('body').removeClass('menu-open');
    });
    
    $(window).scroll(function() {
        var sticky = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 150) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
});