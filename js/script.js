(function($) {

  "use strict";

  // Get viewport
  var viewport;
  var getViewport = function() {
    viewport = {
      width  : $(window).width(),
      height : $(window).height()
    };
  }
  getViewport();

  // Document ready
  $(document).ready(function() {

  });

  // Window load
  $(window).load(function() {

  });

  var resizeTimer;
  var windowResize = function() {
    console.log("window resize");
    getHeaderOffset();
  };

  // Window resize
  $(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(windowResize, 250);
  });

  // Window scroll
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
  });

})(jQuery);