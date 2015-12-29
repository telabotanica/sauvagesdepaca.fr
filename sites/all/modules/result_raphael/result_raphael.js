(function ($) {
  Drupal.behaviors.result_raphael = {
    attach: function (context, settings) {
    $('#result_raphael', context).once('result_raphael', function () {
       // Apply the myCustomBehaviour effect to the elements only once.
        Drupal.result_raphael();
     });
    }
  };

  Drupal.result_raphael = function() {
    $('#result_raphael .graphael-graph').css({'width':'100%','height':'100%'});
  };
})(jQuery);