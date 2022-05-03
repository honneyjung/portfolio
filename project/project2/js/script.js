$(window).scroll(function() {
    var wScroll=$(this).scrollTop();
    console.log(wScroll);
    $('.box').css({
        'transform-origin': '50%',
        'transform': 'rotate('+wScroll/3+'deg)',
        'top': wScroll/20+'px'
    });
})

$(document).ready(function ($) {
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      $(".slide_tit").css("transform", "translateX(-" + scroll + "px)");
    });
});