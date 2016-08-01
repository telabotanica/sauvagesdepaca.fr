(function ($) {
   Drupal.behaviors.flexsliderFrontPage = {
      attach: function(context, settings) {
         $('.front-espece').once('flexHome', function() {
            jQuery('.front-espece').flexslider({
               animation: "slide",
               slideshow: false,
               itemWidth: 300,
               itemMargin: 5,
               minItems: 2,
               maxItems: 8,
               controlsContainer: ".flexslider-container",
             });
			jQuery('.front #fold5 .iFrame').append("<iframe class='img-rounded' frameborder='0' height='350px' width='100%' marginheight='0' marginwidth='0' scrolling='no' src='https://calendar.google.com/calendar/embed?src=sauvagespaca%40gmail.com&ctz=Europe/Paris' width='425'></iframe>");
         });
      }
   };
   Drupal.behaviors.flexsliderSpeciesPage = {
      attach: function(context, settings) {
         $('.node-type-fiche-espece').once('flexEspece', function() {
            jQuery(window).load(function() {
               jQuery('.slider-carousel-thumb').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 210,
                itemMargin: 5,
                asNavFor: '.slider-with-carousel-thumb'
              });
               
              jQuery('.slider-with-carousel-thumb').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: ".slider-carousel-thumb"
              });
               var nbTaxon = jQuery('.node-type-fiche-espece .result ').attr("id");
               jQuery('.node-type-fiche-espece .iFrame ').append("<iframe frameborder='0' scrolling='no' src='http://www.tela-botanica.org/widget:cel:cartoPoint?projet=sauvages&amp;dept=13,84,83,06,04,05&amp;titre=Observations%20en%20PACA&amp;num_taxon= "+ nbTaxon +"' style='width:100%;height:600px;'></iframe>");
            
            });
         });
      }
   };

})(jQuery);
