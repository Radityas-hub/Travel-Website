$(document).ready(function () {
    $(window).scroll(function () {
        // scroll-up button show/hide script
        if (this.scrollY > 10) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });
})

var FullTour1 = document.querySelector(".full-tour1");
var FullTour2 = document.querySelector(".full-tour2");
var FullTour3 = document.querySelector(".full-tour3");
var FullTour4 = document.querySelector(".full-tour4");
var RouteList = document.querySelector('.route-list')

document.getElementById("tbtn1").addEventListener("click", function () {
    FullTour1.innerHTML = "Lempuyang Temple.";
    FullTour2.innerHTML = "Tirtha Gangga.";
    FullTour3.innerHTML = "Bat Cave Temple.";
    FullTour4.innerHTML = "";
});
document.getElementById("tbtn2").addEventListener("click", function () {
    FullTour1.innerHTML = "Kanto Lampo Waterfall.";
    FullTour2.innerHTML = "Kintamani's View Of Batur Volcano And The Lake.";
    FullTour3.innerHTML = "Besakih Mother Temple.";
    FullTour4.innerHTML = "";
});
document.getElementById("tbtn3").addEventListener("click", function () {
    FullTour1.innerHTML = "Ubud Area";
    FullTour2.innerHTML = "And Swings.";
    FullTour3.innerHTML = "";
    FullTour4.innerHTML = "";
});
document.getElementById("tbtn4").addEventListener("click", function () {
    FullTour1.innerHTML = "Taman Ayun (Temple).";
    FullTour2.innerHTML = "Jatiluwih Terracing Ricefields.";
    FullTour3.innerHTML = "Bedugul ( Lake and Temple ).";
    FullTour4.innerHTML = "Wanagiri hidden waterfals and garden.";
});
document.getElementById("tbtn5").addEventListener("click", function () {
    FullTour1.innerHTML = "Sekumpul or Sambangan Waterfall.";
    FullTour2.innerHTML = "Buddhis Temple.";
    FullTour3.innerHTML = "Natural Hotspring Banjar.";
    FullTour4.innerHTML = "";
});

var HalfTour1 = document.querySelector(".half-tour1");
var HalfTour2 = document.querySelector(".half-tour2");

document.getElementById("fbtn1").addEventListener("click", function () {
    HalfTour1.innerHTML = "Pandawa Beach.";
    HalfTour2.innerHTML = "Uluwatu Temple, Kecak Dance.";
});
document.getElementById("fbtn2").addEventListener("click", function () {
    HalfTour1.innerHTML = "Taman Ayun, The Royal Family Temple.";
    HalfTour2.innerHTML = "Tanah Lot Temple.";
});
document.getElementById("fbtn3").addEventListener("click", function () {
    HalfTour1.innerHTML = "Ubud Market";
    HalfTour2.innerHTML = "Monkey Forest.";
});

var NusaTour1 = document.querySelector(".nusa-tour1");
var NusaTour2 = document.querySelector(".nusa-tour2");
var NusaTour3 = document.querySelector(".nusa-tour3");
var NusaTour4 = document.querySelector(".nusa-tour4");

document.getElementById("nbtn1").addEventListener("click", function () {
    NusaTour1.innerHTML = "Angel Billabong Beach.";
    NusaTour2.innerHTML = "Broken Beach.";
    NusaTour3.innerHTML = "Kelingking Beach.";
    NusaTour4.innerHTML = "Crystal Bay.";
});
document.getElementById("nbtn2").addEventListener("click", function () {
    NusaTour1.innerHTML = "Atuh Beach.";
    NusaTour2.innerHTML = "Diamond Beach.";
    NusaTour3.innerHTML = "Teletubies Hill.";
    NusaTour4.innerHTML = "Tree House.";
});


const buttons = document.querySelectorAll('.tBtn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');
    });
});
const fbuttons = document.querySelectorAll('.fBtn');

fbuttons.forEach(button => {
    button.addEventListener('click', () => {
        fbuttons.forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');
    });
});
const nbuttons = document.querySelectorAll('.nBtn');

nbuttons.forEach(button => {
    button.addEventListener('click', () => {
        nbuttons.forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');
    });
});