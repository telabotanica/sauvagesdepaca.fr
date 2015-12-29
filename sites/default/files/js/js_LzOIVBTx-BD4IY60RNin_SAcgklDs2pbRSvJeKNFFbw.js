(function($) {

/**
 * jQuery debugging helper.
 *
 * Invented for Dreditor.
 *
 * @usage
 *   $.debug(var [, name]);
 *   $variable.debug( [name] );
 */
jQuery.extend({
  debug: function () {
    // Setup debug storage in global window. We want to look into it.
    window.debug = window.debug || [];

    args = jQuery.makeArray(arguments);
    // Determine data source; this is an object for $variable.debug().
    // Also determine the identifier to store data with.
    if (typeof this == 'object') {
      var name = (args.length ? args[0] : window.debug.length);
      var data = this;
    }
    else {
      var name = (args.length > 1 ? args.pop() : window.debug.length);
      var data = args[0];
    }
    // Store data.
    window.debug[name] = data;
    // Dump data into Firebug console.
    if (typeof console != 'undefined') {
      console.log(name, data);
    }
    return this;
  }
});
// @todo Is this the right way?
jQuery.fn.debug = jQuery.debug;

})(jQuery);
;
jQuery(document).ready(function($) {
  $("#console").hide(); 
  $(".preview h3").hide();
  $(".preview").before("<h2>Aperçu de votre actualité</h2>");
  $(".preview .node-teaser").hide();
  $(".preview .user-picture").hide();
  $(".preview .field-name-field-image").css({'display': 'inline-block','margin-left':'10px'});
  $(".preview .field-name-field-image img").css({width:'274px',height:'auto','margin-top': '16px'});
  $(".preview .field-name-body").css({'display': 'inline-block','vertical-align':'top', width:'571px'});
  $(".preview .field-name-field-galerie-image .field-item,.preview .field-name-field-mots-cles .field-item").css({'display': 'inline','margin-right':'10px'});
  $(".preview .field-label").css({'display': 'inline','float':'left'});
  $(".preview").css({'margin-bottom':'30px'});
});;
(function(d,b){function j(){f();setTimeout(f,25)}function k(){l=!0;f();setTimeout(f,25)}function g(a){var c=0;return function(){var b=+new Date;20>b-c||(c=b,a.apply(this,arguments))}}function e(a,c,b){a.attachEvent?a.attachEvent&&a.attachEvent("on"+c,b):a.addEventListener(c,b,!1)}function h(a,b,d){a.detachEvent?a.detachEvent&&a.detachEvent("on"+b,d):a.removeEventListener(b,d,!1)}function m(a,c){return(b.documentElement.contains?b.documentElement!=a&&b.documentElement.contains(a):b.documentElement.compareDocumentPosition(a)&
16)&&a.getBoundingClientRect().top<q+r?(a.src=a.getAttribute(n),a.removeAttribute(n),i[c]=null,!0):!1}function o(){return 0<=b.documentElement.clientHeight?b.documentElement.clientHeight:b.body&&0<=b.body.clientHeight?b.body.clientHeight:0<=d.innerHeight?d.innerHeight:0}var r=200,n="data-src",q=o(),i=[],l,p=g(o),f=g(function(){var a=i.length,c,e=!0;for(c=0;c<a;c++){var g=i[c];null!==g&&!m(g,c)&&(e=!1)}e&&l&&(h(d,"resize",p),h(d,"scroll",f),h(d,"load",k),h(b,"DOMContentLoaded",j))});d.lzld=function(a){a.onload=
null;a.onerror=null;m(a,i.push(a)-1)};e(d,"resize",p);e(d,"scroll",f);e(b,"DOMContentLoaded",j);e(d,"load",k)})(this,document);
;
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
})(jQuery);;
