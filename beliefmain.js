$(document).ready(function(){
  
  var indicatorIntervalID = setInterval(function(){ doBounce() }, 2000);

  $(document).scroll(function() {
    var scrollIndicator = $(".scroll-indicator");
    if ($(".splash-indicator-wrapper").offset().top < ($(this).scrollTop()) ) {
      runOnceScroll(function() {
        if ($(".scroll-indicator").is(':visible')) {
          $(".scroll-indicator").fadeOut(); 
        }
      });
    } else {
      runOnceScroll(function() {
        if (indicatorIntervalID) {
          clearInterval(indicatorIntervalID);
          indicatorIntervalID = setInterval(function(){ doBounce() }, 2000);
        }
        $(".scroll-indicator").fadeIn(); 
      });
      
    }

  });
  
  function runOnceScroll(callback) {
    if (this.scrollHandler) {
      clearTimeout(this.scrollHandler); 
    }
    this.scrollHandler = setTimeout(function() {
      callback();
    }, 200);
  }

  function doBounce() {
    var element = $( "#indicator" ),
        distance = '15px';
    
    element.animate(
      { marginTop: '+='+distance},
      "slow"
    )
    .animate(
      { marginTop: '-='+distance },
      "slow"
    )
  }
  
  $(window).resize(function() {
    if(this.resizeTO) {
      clearTimeout(this.resizeTO);
    }
    this.resizeTO = setTimeout(function() {
      $(this).trigger('resizeEnd');
    }, 500);
  });

  setTimeout( function() {
      console.log('hiding dev stuff');
      $('.poptart').fadeOut();
      $('#cj_test_banner').fadeOut();
  }, 500);
  
  setTimeout( function() { 
  }, 2000);
  
  
});
