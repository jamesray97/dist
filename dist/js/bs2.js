
//******************************** JAMAICA STREET ************************************** */
$("#JamaicaStreet").click(function() {
  //Hide other image containers (if open)
  $(".slides-container").each(function() {
    $(this).hide();
  });
  // Unselect all circles
  $(".bs2circles").each(function() {
    $(this).removeClass("selected-circle");
  });
  //Select the current circle
  $(this).addClass("selected-circle");
  //Show the target image container
  $("#jamaicaStreetImgs").fadeIn();
  //animaiton complete

  $(".page-container").addClass("gallery-open");
  $(".title-text").text("Jamaica Street");
});

//******************************** ASHLEY ROAD ************************************** */

$("#AshleyRoad").click(function() {
  //Hide other image containers (if open)
  $(".slides-container").each(function() {
    $(this).hide();
  });
  // Unselect all circles
  $(".bs2circles").each(function() {
    $(this).removeClass("selected-circle");
  });
  //Select the current circle
  $(this).addClass("selected-circle");
  //Show the target image container
  $("#ashleyRoadImgs").fadeIn();
  //animaiton complete

  $(".page-container").addClass("gallery-open");
  $(".title-text").text("Ashley Road");
});

//******************************** UPPER YORK STREET ************************************** */
$("#UpperYorkStreet").click(function() {
  //Hide other image containers (if open)
  $(".slides-container").each(function() {
    $(this).hide();
  });
  // Unselect all circles
  $(".bs2circles").each(function() {
    $(this).removeClass("selected-circle");
  });
  //Select the current circle
  $(this).addClass("selected-circle");
  //Show the target image container
  $("#upperYorkStreetImgs").fadeIn();
  //animaiton complete

  $(".page-container").addClass("gallery-open");
  $(".title-text").text("Upper York Street");
});

//******************************** NEW FOUNDLAND ROAD ************************************** */
$("#NewFoundlandRoad").click(function() {
  //Hide other image containers (if open)
  $(".slides-container").each(function() {
    $(this).hide();
  });
  // Unselect all circles
  $(".bs2circles").each(function() {
    $(this).removeClass("selected-circle");
  });
  //Select the current circle
  $(this).addClass("selected-circle");
  //Show the target image container
  $("#foundlandRoadImgs").fadeIn();
  //animaiton complete

  $(".page-container").addClass("gallery-open");
  $(".title-text").text("New Foundland Road");
});

//******************************** WILDER STREET ************************************** */

$("#WilderStreet").click(function() {
  //Hide other image containers (if open)
  $(".slides-container").each(function() {
    $(this).hide();
  });
  // Unselect all circles
  $(".bs2circles").each(function() {
    $(this).removeClass("selected-circle");
  });
  //Select the current circle
  $(this).addClass("selected-circle");
  //Show the target image container
  $("#wilderStreetImgs").fadeIn();
  //animaiton complete

  $(".page-container").addClass("gallery-open");
  $(".title-text").text("Wilder Street");
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
  $(".title-text").text("Click on the dots to explore the BS2 area locations");
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

 //******************************** BS2 TOOLTIPS ************************************** */

$("#AshleyRoad").tooltipster({
  theme: "tooltipster-shadow"
});
$("#UpperYorkStreet").tooltipster({
  theme: "tooltipster-shadow"
});
$("#NewFoundlandRoad").tooltipster({
  theme: "tooltipster-shadow"
});
$("#WilderStreet").tooltipster({
  theme: "tooltipster-shadow"
});
$("#JamaicaStreet").tooltipster({
  theme: "tooltipster-shadow"
});

$(window).on("load", function() {
  $(".preloader").fadeOut("slow", function() {
    $(".preloader-top").addClass("slide-top");
  });
});
