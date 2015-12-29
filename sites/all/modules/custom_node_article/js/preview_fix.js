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
});