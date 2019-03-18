//********************************************************************** */
//SVG ON CLICK

$(document).ready(function() {
  $("#Quay-NelsonStreet").click(function() {
    $("#nelsonStModal").modal("show");
    //animaiton complete
  });

  $("#LeonardLane").click(function() {
    console.log($(this));
    $("#leonardLaneModal").modal("show");
    //animaiton complete
  });
});
//********************************************************************** */
// BS1 TOOLTIP

$("#ParkStreet").tooltipster({
  theme: "tooltipster-shadow"
});
$("#FrogmoreStreet").tooltipster({
  theme: "tooltipster-shadow"
});
$("#LeonardLane").tooltipster({
  theme: "tooltipster-shadow"
});
$("#SmallStreet").tooltipster({
  theme: "tooltipster-shadow"
});
$("#BellLane").tooltipster({
  theme: "tooltipster-shadow"
});
$("#Quay-NelsonStreet").tooltipster({
  theme: "tooltipster-shadow"
});
$("#Bearpit").tooltipster({
  theme: "tooltipster-shadow"
});
$("#StokesCroft").tooltipster({
  theme: "tooltipster-shadow"
});

//********************************************************************** */
//IMAGE SLIDeR

const makeSlider = imageArea => {
  images = imageArea.getElementsByClassName("image");

  if (images.length > 1) {
    for (var i = 0; i < images.length; i++) {
      let topEdge = (100 / images.length) * i + 1,
        bottomEdge = topEdge + 100 / images.length - 1;
      images[
        i
      ].style.clipPath = `polygon(0% ${topEdge}%, 100% ${topEdge}%, 100% ${bottomEdge}%, 0% ${bottomEdge}%)`;
    }
    imageArea.classList.add("slideAnimation");

    function slideAnimation(imgTarget, direction) {
      let slidy = imgTarget.animate(
        [
          { transform: "translateX(0%)", clipPath: imgTarget.style.clipPath },
          { transform: "translateX(101%)", clipPath: imgTarget.style.clipPath },
          { transform: "translateX(101%)", clipPath: imgTarget.style.clipPath },
          {
            transform: "translateX(101%)",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          }
        ],
        {
          duration: 666,
          easing: "linear",
          fill: "forwards",
          direction: direction
        }
      );
      imgTarget.classList.toggle("full");
    }
    imageArea.addEventListener("click", function(e) {
      let fullImage = document.querySelector(".full");
      if (fullImage == null) {
        slideAnimation(e.target, "normal");
      } else {
        slideAnimation(fullImage, "reverse");
        if (e.target !== fullImage) {
          setTimeout(function() {
            slideAnimation(e.target, "normal");
          }, 200);
        }
      }
    });
  }
};

makeSlider(document.getElementById("nelsonStImgs"));
makeSlider(document.getElementById("leonardLaneImgs"));
