$(document).ready(function () {
    $(".nav-toggler").each(function(_, navToggler) {
        let target = $(navToggler).data("target");
        $(navToggler).on("click", function () {
            $(target).animate({
                height:"toggle",
            })
        });
    })
})

$(window).scroll(function(){
    let sticky = $('header'),
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

//Auto typing effect
const stringArray = ["I have good problem solving skills", "I pay attention to details", "I'm a strong team player", "Excellent communication skills", "Resourceful and Personable", "Great multitasking skills"];

let arrayIndex = 0;
let data;
const pause = 200;
const addTime = 150;
const removeTime = 25;
let letterIndex = 0;
let currentInterval

const autotype = document.querySelector("#autotype");

function textRotation() {
  if(arrayIndex == stringArray.length) {
    arrayIndex = 0;
  };
  
  data = stringArray[arrayIndex];
  letterIndex = 0;
  currentInterval = window.setInterval(addLetter, addTime);
};

function addLetter() {
  autotype.innerHTML += data.charAt(letterIndex);
  letterIndex += 1;
  
  if(letterIndex > data.length) {
    window.clearInterval(currentInterval);
    window.setTimeout(startRemove, pause);
  };
};

function startRemove() {
  currentInterval = window.setInterval(removeLetter, removeTime);
}

function removeLetter() {
  let currentString = autotype.innerHTML;
  autotype.innerHTML = currentString.slice(0, -1);
 
  if(currentString.length < 1) {
    window.clearInterval(currentInterval);
    arrayIndex += 1;
    textRotation();
  };
};

window.onload = window.setTimeout(textRotation, 500);