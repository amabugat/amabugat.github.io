//$(window).scroll(function() {
//    parallax();
//})
//
//function parallax() {
//    var wScroll = $(window).scrollTop();
//    
//    $('.parallax--bg').css('background-position', 'center ' + (wScroll * .2) + 'px ');
//    console.log(wScroll);
//}

$(window).scroll(function(e) {
  parallax();
})


function parallax() {
  var scroll = $(window).scrollTop();
  var screenHeight = $(window).height();

  $('.parallax--bg').each(function() {
    var offset = $(this).offset().top;
    var distanceFromBottom = offset - scroll - screenHeight
    
    if (offset > screenHeight && offset) {
      $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * 0.5) +'px');
    } else {
      $(this).css('background-position', 'center ' + (( -scroll ) * 0.5) + 'px');
    }
  })
}