function updateSchema(ele) {
  var metaTitle = $('meta#meta-title'),
      metaDescription = $('meta#meta-description'),
      metaImage = $('meta#meta-image'),
      schemaTitle = $('#schema-name'),
      schemaDesc = $('#schema-desc'),
      schemaImage = $('#schema-img');
  
  metaTitle.attr("content",$(ele).attr("data-title"));
  metaDescription.attr("content",$(ele).attr("data-description"));
  metaImage.attr("content",$(ele).attr("data-img-src"));
  schemaTitle.html($(ele).attr("data-title"));
  schemaDesc.html($(ele).attr("data-description"));
  schemaImage.html($(ele).attr("data-img-src"));
  
}

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

  function resizeVaporizer() {
    var vapeImg = $("#vape-toggle img");

    if ( $(window).width() < 768) {
      vapeImg.attr('src',window.vapeMobileURL);
    } else {
      vapeImg.attr('src',window.vapeWideURL);
    }
  }
  
  $(window).resize(function() {
    if(this.resizeTO) {
      clearTimeout(this.resizeTO);
    }
    this.resizeTO = setTimeout(function() {
      $(this).trigger('resizeEnd');
    }, 500);
  });

  $(window).bind('resizeEnd', resizeVaporizer);

  setTimeout( function() {
      console.log('hiding dev stuff');
      $('.poptart').fadeOut();
      $('#cj_test_banner').fadeOut();

      resizeVaporizer();
  }, 500);
  
  setTimeout( function() { 
  }, 2000);
  
  
});
