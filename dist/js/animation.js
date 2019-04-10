// ************************** BS1 ANIMATION **************************
var bs1timeline = new TimelineMax();

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
bs1timeline.from(".title-text", 0.4, { ease: Power1.easeInOut, opacity: 0, x: -20 });
// ************************** BS2 ANIMATION **************************
var bs2timeline = new TimelineMax();

bs2timeline.from(".bs2roads", 1, { ease: Power1.easeOut, y: -1000, delay: 1 });
bs2timeline.from(".kingsdown", 0.4, { ease: Power1.easeOut, opacity: 0 });
bs2timeline.from(".stpauls", 0.4, { ease: Power1.easeOut, opacity: 0 });
bs2timeline.from(".stphillips", 0.4, { ease: Power1.easeOut, opacity: 0 });
bs2timeline.staggerFrom(
  ".bs2circles",
  0.5,
  { ease: Bounce.easeInOut, scale: 0 },
  0.2
);

// ************************** BS3 ANIMATION **************************
var bs3timeline = new TimelineMax();

bs3timeline.from(".bs3roads", 1, {
  ease: Power1.easeInOut,
  y: -1000,
  delay: 1
});
bs3timeline.from(".southville", 0.4, {
  ease: Power1.easeInOut,
  opacity: 0,
  scale: 0.9
});
bs3timeline.from(".bedminster", 0.4, {
  ease: Power1.easeInOut,
  opacity: 0,
  x: 50
});
bs3timeline.from(".parks", 0.4, { ease: Power1.easeInOut, y: 10, opacity: 0 });
bs3timeline.staggerFrom(
  ".bs3circles",
  0.5,
  { ease: Bounce.easeInOut, scale: 0 },
  0.2
);

// ************************** INDEX.HTML ANIMATION  **************************
var timeline = new TimelineMax();
timeline.to("#mute", 0.5, { opacity: 1, y: 0});
timeline.from(".st0", 0.5, { scale: 0.9, opacity: 0, delay: 2 });
timeline.from(".st1", 0.5, { scale: 0.9, opacity: 0 });
timeline.from(".st2", 0.5, { scale: 0.9, opacity: 0 });

TweenMax.from(".button-container", 1, { opacity: 0, y: 10, delay: 1.5 });



timeline.from("#text1", 0.3, { x: -75, opacity: 0 });
timeline.from("#text2", 0.3, { x: 75, opacity: 0 });

// ************************** INDEX2.HTML ANIMATION  **************************

TweenMax.from("#map2", 1, { opacity: 0, y: 10, delay: 2 });
TweenMax.from("#text-style1",  1, { opacity: 0, y: -10, delay: 2 });
TweenMax.from("#text-style2",  1, { opacity: 0, y: 10, delay: 2 });
