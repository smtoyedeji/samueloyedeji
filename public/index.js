$(document).ready(function () {
    $(".nav-toggler").each(function(_, navToggler) {
        var target = $(navToggler).data("target");
        $(navToggler).on("click", function () {
            $(target).animate({
                height:"toggle",
            })
        });
    })
})

$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed').css({backgroundColor: '#4a5568'});
    else sticky.removeClass('fixed').css({backgroundColor: 'inherit'});
});




  













