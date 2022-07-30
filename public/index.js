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


//show elements on scroll
const scrollElements = document.querySelectorAll(".scroll");

//element in view
const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))
    );
};

//scroll function
const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});


  













