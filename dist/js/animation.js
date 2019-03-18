var bs1timeline = new TimelineMax();

//BS1 ANIMATION
bs1timeline.from(".water", 1, { ease: Power1.easeOut, y: 1000, delay: 1 });
TweenMax.from(".roads", 1, { ease: Power1.easeOut, y: -1000, delay: 1 });
bs1timeline.from(".stokes_bearpit", 0.4, {
  ease: Power1.easeInOut,
  opacity: 0
});
bs1timeline.from(".nelson_st", 0.4, { ease: Power1.easeInOut, opacity: 0 });
bs1timeline.from(".park_st", 0.4, { ease: Power1.easeInOut, opacity: 0 });
bs1timeline.staggerFrom(
  ".circles",
  0.5,
  { ease: Bounce.easeInOut, scale: 0 },
  0.2
);

//BS3 ANIMATION
var bs3timeline = new TimelineMax();
bs3timeline.from(".bs3roads", 1, {
  ease: Power1.easeInOut,
  y: -1000,
  delay: 1
});
bs3timeline.from(".area1", 0.4, { ease: Power1.easeInOut, opacity: 0 });
bs3timeline.from(".area2", 0.4, { ease: Power1.easeInOut, opacity: 0 });
bs3timeline.from(".area3", 0.4, { ease: Power1.easeInOut, opacity: 0 });
bs3timeline.staggerFrom(
  ".parks",
  0.4,
  { ease: Power1.easeInOut, opacity: 0 },
  0.2
);

//INDEX.HTML ANIMATION
var timeline = new TimelineMax();
timeline.from(".st0", 0.5, { scale: 0.9, opacity: 0, delay: 2 });
timeline.from(".st1", 0.5, { scale: 0.9, opacity: 0 });
timeline.from(".st2", 0.5, { scale: 0.9, opacity: 0 });
// timeline.from("h1", 0.3, { x: -75, opacity: 0 });
// timeline.from("h2", 0.3, { x: 75, opacity: 0 });
// TweenMax.from("h3", 2, { y: 25, opacity: 0, delay: 2 });

//navbar
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//set initial state of menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //set menu state
    showMenu = false;
  }
}
