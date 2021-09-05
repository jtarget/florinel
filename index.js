$("a.submenu").click(function() {
  if ($("ul > li > ul").hasClass("visible")) {
    //$("ul > li > ul").removeClass("visible");
    $("ul > li > ul").slideToggle();
  } else {
    $("ul > li > ul").slideDown();
    $("ul > li > ul").addClass("visible");
  }
});

$(function() {
  var numberOfPictures = 3;
  var currentPicture = 1;
  $("#photo-home").on('click', function() {
    $(this).addClass('transitioning-src');
    if (currentPicture < numberOfPictures) {
      currentPicture++;
      $(this).attr("src", "photos/home/photo_" + currentPicture + ".jpeg");
    } else {
      currentPicture = 1;
      $(this).attr("src", "photos/home/photo_" + currentPicture + ".jpeg");
    }
  });
});
