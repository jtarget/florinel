$("a.submenu").click(function() {
  if ($("ul > li > ul").hasClass("visible")) {
    //$("ul > li > ul").removeClass("visible");
    $("ul > li > ul").slideToggle();
  } else {
    $("ul > li > ul").slideDown();
    $("ul > li > ul").addClass("visible");
  }
});


$(function(){
      count = 1;
      total = 2;
      $(".img-swap").on('click', function() {

        $(this).fadeOut(200, function() {
            $(this).attr('src', 'photos/home/photo_' + count + '.jpeg');
        }).fadeIn(200);

        count ++;

        if(count > total) {
            count = 1;
        }

      });
    });

/* var currentPicture = 1;
var numberOfPictures = 2;

$(".right-container").click(function() {
  currentPicture++;
  if (currentPicture > $("img").length) {
    currentPicture = 1;
  }
  $("img").css("display", "none");
  $(`#photo${currentPicture}`).css('display', 'inherit');
});
*/
