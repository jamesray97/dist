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
