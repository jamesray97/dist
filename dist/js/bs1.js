//********************************************************************** */
//SVG ON CLICK

$(document).ready(function() {
  $("#Quay-NelsonStreet").click(function() {
    //Hide other image containers (if open)
    $(".slides-container").each(function() {
      $(this).hide();
    });
    // Unselect all circles
    $(".circles").each(function() {
      $(this).removeClass("selected-circle");
    });
    //Select the current circle
    $(this).addClass("selected-circle");
    //Show the target image container
    $("#nelsonStImgs").fadeIn();
    //animaiton complete
  });

  $("#LeonardLane").click(function() {
    //Hide other image containers (if open)
    $(".slides-container").each(function() {
      $(this).hide();
    });
    // Unselect all circles
    $(".circles").each(function() {
      $(this).removeClass("selected-circle");
    });
    //Select the current circle
    $(this).addClass("selected-circle");
    //Show the target image container
    $("#leonardLaneImgs").fadeIn();
    //animaiton complete
  });

  $(".close-button").click(function() {
    $(this)
      .closest(".slides-container")
      .fadeToggle();
    $(".circles").each(function() {
      $(this).removeClass("selected-circle");
    });
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
