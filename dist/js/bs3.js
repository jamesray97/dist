//******************************** NORTH STREET ************************************** */

$("#NorthStreet").click(function() {
  //Hide other image containers (if open)
  $(".slides-container").each(function() {
    $(this).hide();
  });
  // Unselect all circles
  $(".bs3circles").each(function() {
    $(this).removeClass("selected-circle");
  });
  //Select the current circle
  $(this).addClass("selected-circle");
  //Show the target image container
  $("#northStreetImgs").fadeIn();
  //animaiton complete

  $(".page-container").addClass("gallery-open");
  $(".title-text").text("North Street");
});

//******************************** DEANLANE SKATEPARK ************************************** */
$("#DeanLaneSkatepark").click(function() {
  //Hide other image containers (if open)
  $(".slides-container").each(function() {
    $(this).hide();
  });
  // Unselect all circles
  $(".bs3circles").each(function() {
    $(this).removeClass("selected-circle");
  });
  //Select the current circle
  $(this).addClass("selected-circle");
  //Show the target image container
  $("#deanlaneImgs").fadeIn();
  //animaiton complete

  $(".page-container").addClass("gallery-open");
  $(".title-text").text("Deanlane Skatepark");
});

//******************************** EAST STREET ************************************** */
$("#EastStreet").click(function() {
  //Hide other image containers (if open)
  $(".slides-container").each(function() {
    $(this).hide();
  });
  // Unselect all circles
  $(".bs3circles").each(function() {
    $(this).removeClass("selected-circle");
  });
  //Select the current circle
  $(this).addClass("selected-circle");
  //Show the target image container
  $("#eastStreetImgs").fadeIn();
  //animaiton complete

  $(".page-container").addClass("gallery-open");
  $(".title-text").text("East Street");
});

//******************************** MALAGO ROAD ************************************** */

$("#MalagoRoad").click(function() {
  //Hide other image containers (if open)
  $(".slides-container").each(function() {
    $(this).hide();
  });
  // Unselect all circles
  $(".bs3circles").each(function() {
    $(this).removeClass("selected-circle");
  });
  //Select the current circle
  $(this).addClass("selected-circle");
  //Show the target image container
  $("#malagoRoadImgs").fadeIn();
  //animaiton complete

  $(".page-container").addClass("gallery-open");
  $(".title-text").text("Malago Road");
});
//******************************** CLOSE BUTTON AND ORGINAL TEXT ************************************** */

$(".close-button").click(function() {
  $(".page-container").removeClass("gallery-open");
  $(this)
    .closest(".slides-container")
    .fadeToggle();
  $(".circles").each(function() {
    $(this).removeClass("selected-circle");
  });
  $(".title-text").text("Click on the dots to explore the BS3 area locations");
});

 //******************************** BIG IMAGE AND TEXT ************************************** */


$(".flexbox-slide").on("click", function() {
  var clickedImage = $(this).children("img")[0];
  console.log(clickedImage);
  var imgSrc = clickedImage.src;
  console.log("you clicked on ", imgSrc);
  $(".big-image img")[0].src = imgSrc;

  var title = $(clickedImage).data("slide-title");
  var subTitle = $(clickedImage).data("slide-subtitle");
  if (title || subTitle) {
    if (title) {
      $(".big-image .big-image-caption h2").text(title);
      $(".big-image .big-image-caption h2").show();
    } else {
      $(".big-image .big-image-caption h2").hide();
    }
    if (subTitle) {
      $(".big-image .big-image-caption p").text(subTitle);
      $(".big-image .big-image-caption p").show();
    } else {
      $(".big-image .big-image-caption p").hide();
    }
    $(".big-image .big-image-caption").show();
  } else {
    $(".big-image .big-image-caption").hide();
  }
  $(".big-image").fadeIn("slow");
});

$(".big-image .close-big-image").on("click", function() {
  $(this)
    .closest(".big-image")
    .fadeOut("slow");
});

// BS3 TOOLTIP
$("#NorthStreet").tooltipster({
  theme: "tooltipster-shadow"
});
$("#DeanLaneSkatepark").tooltipster({
  theme: "tooltipster-shadow"
});
$("#EastStreet").tooltipster({
  theme: "tooltipster-shadow"
});
$("#MalagoRoad").tooltipster({
  theme: "tooltipster-shadow"
});

$(window).on("load", function() {
  $(".preloader").fadeOut("slow", function() {
    $(".preloader-top").addClass("slide-top");
  });
});
