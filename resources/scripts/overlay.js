var slidingDown = false;
jQuery(function($)
{
  window.isHovering = function (selector) {
    return $(selector).data('hover') ? true : false; //check element for hover property
  }

  $("#ts-control-hover").hover(
    function () {
      slidingDown = true;
      $('#ts-control-drop').stop(true,true).slideDown(500, function() { slidingDown = false; });
      $(".inactive-app").show();
    }, 
    function () {
      hideTSControl();
    }
  );

  $("#ts-control-hover").on({
    mouseleave: function(evt) {
      //alert("unhover");
      //hideTSControl(true);
    }
  });

  function hideTSControl(force) {
    var controlActive = window.isHovering("#ts-control-drop");
    console.log("Control: "+controlActive+", SlidingDown: "+slidingDown+", force: "+force);

    if(!controlActive && !slidingDown || (typeof force !== 'undefined' && force === true)) {
      $('#ts-control-drop').stop(true,true).slideUp(500);
      $(".inactive-app").hide();
    }
  }
});