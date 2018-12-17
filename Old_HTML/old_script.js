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

//Skills 
$("#hoverLinks").find("a").hover(function () {
    $("#PortfolioInfo>*").hide()
        .filter($(this).data("filter")).show()
})

//Fadein Transitions

window.sr = ScrollReveal();

sr.reveal('#Nametitle', {
    duration: 3000,
    origin:'top',
    reset: true
})

sr.reveal('#Titlesubtext', {
    duration: 3000,
    origin:'bottom',
    reset: true
})

sr.reveal('.home-about-textbox', {
    duration: 2000,
    origin:'top',
    viewFactor: .2,
    reset: true
})