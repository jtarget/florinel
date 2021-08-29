$("a.submenu").click(function() {
  if ($("ul > li > ul").hasClass("visible")) {
    //$("ul > li > ul").removeClass("visible");
    $("ul > li > ul").slideToggle();
  } else {
    $("ul > li > ul").slideDown();
    $("ul > li > ul").addClass("visible");
  }
});


/*$(function(){
      count = 1;
      total = 2;
      $(".img-swap").on('click', function() {

        for (i = 1; i < total; i++) {
          $(this).load("photos/home/photo_" + i + ".jpeg");
        }
        $(this).fadeOut(200, function() {
            $(this).attr('src', 'photos/home/photo_' + count + '.jpeg');
        }).fadeIn(200);

        count ++;

        if(count > total) {
            count = 1;
        }

      });
    });
*/
$(function() {
  var currentPicture = 1;
  var numberOfPictures = 2;
  for (i = 1; i <= numberOfPictures; i++) {
  $(`#photo_${i}`).on('click', function() {
    i++;
    if (i > numberOfPictures) {
    i = 1;
    }
    $("img").removeClass("current");
    console.log(i);
    $(`#photo_${i}`).addClass("current");
  });
}
});
