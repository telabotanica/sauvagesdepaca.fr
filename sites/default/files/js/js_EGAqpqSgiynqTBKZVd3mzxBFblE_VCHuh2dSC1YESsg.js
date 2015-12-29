Drupal.locale = { 'pluralFormula': function ($n) { return Number(($n>1)); }, 'strings': {"":{"An AJAX HTTP error occurred.":"Une erreur HTTP AJAX s\u0027est produite.","HTTP Result Code: !status":"Code de statut HTTP : !status","An AJAX HTTP request terminated abnormally.":"Une requ\u00eate HTTP AJAX s\u0027est termin\u00e9e anormalement.","Debugging information follows.":"Informations de d\u00e9bogage ci-dessous.","Path: !uri":"Chemin : !uri","StatusText: !statusText":"StatusText: !statusText","ResponseText: !responseText":"ResponseText : !responseText","ReadyState: !readyState":"ReadyState : !readyState","Disabled":"D\u00e9sactiv\u00e9","Enabled":"Activ\u00e9","Edit":"Modifier","Add":"Ajouter","Upload":"Transf\u00e9rer","Configure":"Configurer","Done":"Termin\u00e9","Show":"Afficher","Select all rows in this table":"S\u00e9lectionner toutes les lignes du tableau","Deselect all rows in this table":"D\u00e9s\u00e9lectionner toutes les lignes du tableau","Not published":"Non publi\u00e9","Please wait...":"Veuillez patienter...","Hide":"Masquer","Loading":"En cours de chargement","Only files with the following extensions are allowed: %files-allowed.":"Seuls les fichiers se terminant par les extensions suivantes sont autoris\u00e9s\u00a0: %files-allowed.","Not in book":"Pas dans le livre","New book":"Nouveau livre","By @name on @date":"Par @name le @date","By @name":"Par @name","Not in menu":"Pas dans le menu","Alias: @alias":"Alias : @alias","No alias":"Aucun alias","New revision":"Nouvelle r\u00e9vision","Drag to re-order":"Cliquer-d\u00e9poser pour r\u00e9-organiser","Changes made in this table will not be saved until the form is submitted.":"Les changements effectu\u00e9s dans ce tableau ne seront pris en compte que lorsque la configuration aura \u00e9t\u00e9 enregistr\u00e9e.","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"N\u0027oubliez pas de cliquer sur \u003Cem\u003EEnregistrer les blocs\u003C\/em\u003E pour confirmer les modifications apport\u00e9es ici.","Show shortcuts":"Afficher les raccourcis","This permission is inherited from the authenticated user role.":"Ce droit est h\u00e9rit\u00e9e du r\u00f4le de l\u0027utilisateur authentifi\u00e9.","No revision":"Aucune r\u00e9vision","@number comments per page":"@number commentaires par page","Requires a title":"Titre obligatoire","Not restricted":"Non restreint","(active tab)":"(onglet actif)","Not customizable":"Non personnalisable","Restricted to certain pages":"R\u00e9serv\u00e9 \u00e0 certaines pages","The block cannot be placed in this region.":"Le bloc ne peut pas \u00eatre plac\u00e9 dans cette r\u00e9gion.","Customize dashboard":"Personnaliser le tableau de bord","Hide summary":"Masquer le r\u00e9sum\u00e9","Edit summary":"Modifier le r\u00e9sum\u00e9","Don\u0027t display post information":"Ne pas afficher les informations de la contribution","@title dialog":"dialogue de @title","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"Le fichier s\u00e9lectionn\u00e9 %filename ne peut pas \u00eatre transf\u00e9r\u00e9. Seulement les fichiers avec les extensions suivantes sont permis : %extensions.","Re-order rows by numerical weight instead of dragging.":"R\u00e9-ordonner les lignes avec des poids num\u00e9riques plut\u00f4t qu\u0027en les d\u00e9pla\u00e7ant.","Show row weights":"Afficher le poids des lignes","Hide row weights":"Cacher le poids des lignes","Autocomplete popup":"Popup d\u0027auto-compl\u00e9tion","Searching for matches...":"Recherche de correspondances...","Hide shortcuts":"Cacher les raccourcis","Not promoted":"Non promu"}} };;
/*!
	Colorbox v1.4.33 - 2013-10-31
	jQuery lightbox and modal window plugin
	(c) 2013 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e,t,i){function o(i,o,n){var r=t.createElement(i);return o&&(r.id=Z+o),n&&(r.style.cssText=n),e(r)}function n(){return i.innerHeight?i.innerHeight:e(i).height()}function r(e){var t=k.length,i=(z+e)%t;return 0>i?t+i:i}function h(e,t){return Math.round((/%/.test(e)?("x"===t?E.width():n())/100:1)*parseInt(e,10))}function l(e,t){return e.photo||e.photoRegex.test(t)}function s(e,t){return e.retinaUrl&&i.devicePixelRatio>1?t.replace(e.photoRegex,e.retinaSuffix):t}function a(e){"contains"in g[0]&&!g[0].contains(e.target)&&(e.stopPropagation(),g.focus())}function d(){var t,i=e.data(N,Y);null==i?(B=e.extend({},X),console&&console.log&&console.log("Error: cboxElement missing settings object")):B=e.extend({},i);for(t in B)e.isFunction(B[t])&&"on"!==t.slice(0,2)&&(B[t]=B[t].call(N));B.rel=B.rel||N.rel||e(N).data("rel")||"nofollow",B.href=B.href||e(N).attr("href"),B.title=B.title||N.title,"string"==typeof B.href&&(B.href=e.trim(B.href))}function c(i,o){e(t).trigger(i),lt.triggerHandler(i),e.isFunction(o)&&o.call(N)}function u(i){q||(N=i,d(),k=e(N),z=0,"nofollow"!==B.rel&&(k=e("."+et).filter(function(){var t,i=e.data(this,Y);return i&&(t=e(this).data("rel")||i.rel||this.rel),t===B.rel}),z=k.index(N),-1===z&&(k=k.add(N),z=k.length-1)),w.css({opacity:parseFloat(B.opacity),cursor:B.overlayClose?"pointer":"auto",visibility:"visible"}).show(),J&&g.add(w).removeClass(J),B.className&&g.add(w).addClass(B.className),J=B.className,B.closeButton?K.html(B.close).appendTo(y):K.appendTo("<div/>"),U||(U=$=!0,g.css({visibility:"hidden",display:"block"}),H=o(st,"LoadedContent","width:0; height:0; overflow:hidden"),y.css({width:"",height:""}).append(H),O=x.height()+C.height()+y.outerHeight(!0)-y.height(),_=b.width()+T.width()+y.outerWidth(!0)-y.width(),D=H.outerHeight(!0),A=H.outerWidth(!0),B.w=h(B.initialWidth,"x"),B.h=h(B.initialHeight,"y"),H.css({width:"",height:B.h}),Q.position(),c(tt,B.onOpen),P.add(L).hide(),g.focus(),B.trapFocus&&t.addEventListener&&(t.addEventListener("focus",a,!0),lt.one(rt,function(){t.removeEventListener("focus",a,!0)})),B.returnFocus&&lt.one(rt,function(){e(N).focus()})),m())}function f(){!g&&t.body&&(V=!1,E=e(i),g=o(st).attr({id:Y,"class":e.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),w=o(st,"Overlay").hide(),F=e([o(st,"LoadingOverlay")[0],o(st,"LoadingGraphic")[0]]),v=o(st,"Wrapper"),y=o(st,"Content").append(L=o(st,"Title"),S=o(st,"Current"),I=e('<button type="button"/>').attr({id:Z+"Previous"}),R=e('<button type="button"/>').attr({id:Z+"Next"}),M=o("button","Slideshow"),F),K=e('<button type="button"/>').attr({id:Z+"Close"}),v.append(o(st).append(o(st,"TopLeft"),x=o(st,"TopCenter"),o(st,"TopRight")),o(st,!1,"clear:left").append(b=o(st,"MiddleLeft"),y,T=o(st,"MiddleRight")),o(st,!1,"clear:left").append(o(st,"BottomLeft"),C=o(st,"BottomCenter"),o(st,"BottomRight"))).find("div div").css({"float":"left"}),W=o(st,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),P=R.add(I).add(S).add(M),e(t.body).append(w,g.append(v,W)))}function p(){function i(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey||(e.preventDefault(),u(this))}return g?(V||(V=!0,R.click(function(){Q.next()}),I.click(function(){Q.prev()}),K.click(function(){Q.close()}),w.click(function(){B.overlayClose&&Q.close()}),e(t).bind("keydown."+Z,function(e){var t=e.keyCode;U&&B.escKey&&27===t&&(e.preventDefault(),Q.close()),U&&B.arrowKey&&k[1]&&!e.altKey&&(37===t?(e.preventDefault(),I.click()):39===t&&(e.preventDefault(),R.click()))}),e.isFunction(e.fn.on)?e(t).on("click."+Z,"."+et,i):e("."+et).live("click."+Z,i)),!0):!1}function m(){var n,r,a,u=Q.prep,f=++at;$=!0,j=!1,N=k[z],d(),c(ht),c(it,B.onLoad),B.h=B.height?h(B.height,"y")-D-O:B.innerHeight&&h(B.innerHeight,"y"),B.w=B.width?h(B.width,"x")-A-_:B.innerWidth&&h(B.innerWidth,"x"),B.mw=B.w,B.mh=B.h,B.maxWidth&&(B.mw=h(B.maxWidth,"x")-A-_,B.mw=B.w&&B.w<B.mw?B.w:B.mw),B.maxHeight&&(B.mh=h(B.maxHeight,"y")-D-O,B.mh=B.h&&B.h<B.mh?B.h:B.mh),n=B.href,G=setTimeout(function(){F.show()},100),B.inline?(a=o(st).hide().insertBefore(e(n)[0]),lt.one(ht,function(){a.replaceWith(H.children())}),u(e(n))):B.iframe?u(" "):B.html?u(B.html):l(B,n)?(n=s(B,n),j=t.createElement("img"),e(j).addClass(Z+"Photo").bind("error",function(){B.title=!1,u(o(st,"Error").html(B.imgError))}).one("load",function(){var t;f===at&&(e.each(["alt","longdesc","aria-describedby"],function(t,i){var o=e(N).attr(i)||e(N).attr("data-"+i);o&&j.setAttribute(i,o)}),B.retinaImage&&i.devicePixelRatio>1&&(j.height=j.height/i.devicePixelRatio,j.width=j.width/i.devicePixelRatio),B.scalePhotos&&(r=function(){j.height-=j.height*t,j.width-=j.width*t},B.mw&&j.width>B.mw&&(t=(j.width-B.mw)/j.width,r()),B.mh&&j.height>B.mh&&(t=(j.height-B.mh)/j.height,r())),B.h&&(j.style.marginTop=Math.max(B.mh-j.height,0)/2+"px"),k[1]&&(B.loop||k[z+1])&&(j.style.cursor="pointer",j.onclick=function(){Q.next()}),j.style.width=j.width+"px",j.style.height=j.height+"px",setTimeout(function(){u(j)},1))}),setTimeout(function(){j.src=n},1)):n&&W.load(n,B.data,function(t,i){f===at&&u("error"===i?o(st,"Error").html(B.xhrError):e(this).contents())})}var w,g,v,y,x,b,T,C,k,E,H,W,F,L,S,M,R,I,K,P,B,O,_,D,A,N,z,j,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1},Y="colorbox",Z="cbox",et=Z+"Element",tt=Z+"_open",it=Z+"_load",ot=Z+"_complete",nt=Z+"_cleanup",rt=Z+"_closed",ht=Z+"_purge",lt=e("<a/>"),st="div",at=0,dt={},ct=function(){function e(){clearTimeout(h)}function t(){(B.loop||k[z+1])&&(e(),h=setTimeout(Q.next,B.slideshowSpeed))}function i(){M.html(B.slideshowStop).unbind(s).one(s,o),lt.bind(ot,t).bind(it,e),g.removeClass(l+"off").addClass(l+"on")}function o(){e(),lt.unbind(ot,t).unbind(it,e),M.html(B.slideshowStart).unbind(s).one(s,function(){Q.next(),i()}),g.removeClass(l+"on").addClass(l+"off")}function n(){r=!1,M.hide(),e(),lt.unbind(ot,t).unbind(it,e),g.removeClass(l+"off "+l+"on")}var r,h,l=Z+"Slideshow_",s="click."+Z;return function(){r?B.slideshow||(lt.unbind(nt,n),n()):B.slideshow&&k[1]&&(r=!0,lt.one(nt,n),B.slideshowAuto?i():o(),M.show())}}();e.colorbox||(e(f),Q=e.fn[Y]=e[Y]=function(t,i){var o=this;if(t=t||{},f(),p()){if(e.isFunction(o))o=e("<a/>"),t.open=!0;else if(!o[0])return o;i&&(t.onComplete=i),o.each(function(){e.data(this,Y,e.extend({},e.data(this,Y)||X,t))}).addClass(et),(e.isFunction(t.open)&&t.open.call(o)||t.open)&&u(o[0])}return o},Q.position=function(t,i){function o(){x[0].style.width=C[0].style.width=y[0].style.width=parseInt(g[0].style.width,10)-_+"px",y[0].style.height=b[0].style.height=T[0].style.height=parseInt(g[0].style.height,10)-O+"px"}var r,l,s,a=0,d=0,c=g.offset();if(E.unbind("resize."+Z),g.css({top:-9e4,left:-9e4}),l=E.scrollTop(),s=E.scrollLeft(),B.fixed?(c.top-=l,c.left-=s,g.css({position:"fixed"})):(a=l,d=s,g.css({position:"absolute"})),d+=B.right!==!1?Math.max(E.width()-B.w-A-_-h(B.right,"x"),0):B.left!==!1?h(B.left,"x"):Math.round(Math.max(E.width()-B.w-A-_,0)/2),a+=B.bottom!==!1?Math.max(n()-B.h-D-O-h(B.bottom,"y"),0):B.top!==!1?h(B.top,"y"):Math.round(Math.max(n()-B.h-D-O,0)/2),g.css({top:c.top,left:c.left,visibility:"visible"}),v[0].style.width=v[0].style.height="9999px",r={width:B.w+A+_,height:B.h+D+O,top:a,left:d},t){var u=0;e.each(r,function(e){return r[e]!==dt[e]?(u=t,void 0):void 0}),t=u}dt=r,t||g.css(r),g.dequeue().animate(r,{duration:t||0,complete:function(){o(),$=!1,v[0].style.width=B.w+A+_+"px",v[0].style.height=B.h+D+O+"px",B.reposition&&setTimeout(function(){E.bind("resize."+Z,Q.position)},1),i&&i()},step:o})},Q.resize=function(e){var t;U&&(e=e||{},e.width&&(B.w=h(e.width,"x")-A-_),e.innerWidth&&(B.w=h(e.innerWidth,"x")),H.css({width:B.w}),e.height&&(B.h=h(e.height,"y")-D-O),e.innerHeight&&(B.h=h(e.innerHeight,"y")),e.innerHeight||e.height||(t=H.scrollTop(),H.css({height:"auto"}),B.h=H.height()),H.css({height:B.h}),t&&H.scrollTop(t),Q.position("none"===B.transition?0:B.speed))},Q.prep=function(i){function n(){return B.w=B.w||H.width(),B.w=B.mw&&B.mw<B.w?B.mw:B.w,B.w}function h(){return B.h=B.h||H.height(),B.h=B.mh&&B.mh<B.h?B.mh:B.h,B.h}if(U){var a,d="none"===B.transition?0:B.speed;H.empty().remove(),H=o(st,"LoadedContent").append(i),H.hide().appendTo(W.show()).css({width:n(),overflow:B.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(y),W.hide(),e(j).css({"float":"none"}),a=function(){function i(){e.support.opacity===!1&&g[0].style.removeAttribute("filter")}var n,h,a=k.length,u="frameBorder",f="allowTransparency";U&&(h=function(){clearTimeout(G),F.hide(),c(ot,B.onComplete)},L.html(B.title).add(H).show(),a>1?("string"==typeof B.current&&S.html(B.current.replace("{current}",z+1).replace("{total}",a)).show(),R[B.loop||a-1>z?"show":"hide"]().html(B.next),I[B.loop||z?"show":"hide"]().html(B.previous),ct(),B.preloading&&e.each([r(-1),r(1)],function(){var i,o,n=k[this],r=e.data(n,Y);r&&r.href?(i=r.href,e.isFunction(i)&&(i=i.call(n))):i=e(n).attr("href"),i&&l(r,i)&&(i=s(r,i),o=t.createElement("img"),o.src=i)})):P.hide(),B.iframe?(n=o("iframe")[0],u in n&&(n[u]=0),f in n&&(n[f]="true"),B.scrolling||(n.scrolling="no"),e(n).attr({src:B.href,name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",h).appendTo(H),lt.one(ht,function(){n.src="//about:blank"}),B.fastIframe&&e(n).trigger("load")):h(),"fade"===B.transition?g.fadeTo(d,1,i):i())},"fade"===B.transition?g.fadeTo(d,0,function(){Q.position(0,a)}):Q.position(d,a)}},Q.next=function(){!$&&k[1]&&(B.loop||k[z+1])&&(z=r(1),u(k[z]))},Q.prev=function(){!$&&k[1]&&(B.loop||z)&&(z=r(-1),u(k[z]))},Q.close=function(){U&&!q&&(q=!0,U=!1,c(nt,B.onCleanup),E.unbind("."+Z),w.fadeTo(B.fadeOut||0,0),g.stop().fadeTo(B.fadeOut||0,0,function(){g.add(w).css({opacity:1,cursor:"auto"}).hide(),c(ht),H.empty().remove(),setTimeout(function(){q=!1,c(rt,B.onClosed)},1)}))},Q.remove=function(){g&&(g.stop(),e.colorbox.close(),g.stop().remove(),w.remove(),q=!1,g=null,e("."+et).removeData(Y).removeClass(et),e(t).unbind("click."+Z))},Q.element=function(){return e(N)},Q.settings=X)})(jQuery,document,window);;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);

    $(context).bind('cbox_complete', function () {
      Drupal.attachBehaviors('#cboxLoadedContent');
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;

/**
 * jQuery bindings for gRaphael
 * ----------------------------
 *
 * Basic usage:
 *
 *   $('div.my-graph').graphael('bar', [0, 5, 10]);
 *
 * Parameters:
 *
 * @method
 *   String key, one of the following: 'bar', 'hbar', 'dot', 'pie', 'line' or 'get'.
 *   The 'get' method may only be used against a previously instantiated
 *   graph and will retrieve the gRaphael graph object. All other methods will
 *   create a corresponding gRaphael graph of the specified type.
 *
 * @values
 *   A non-associative array of values that correspond to the parameters of
 *   the specified graph type. For example, the 'bar' method expects only one
 *   array of values, while the 'line' method requires two arrays (x and y,
 *   respectively).
 *
 * @params
 *   An associative array of parameters. Supported parameters:
 *
 *   'opts':    Options that are passed directly to the gRaphael method.
 *   'padding': Pixels of padding to add to the inside of the gRaphael element.
 *              Defaults to 10. Set to 0 to draw the chart from edge to edge.
 *    'label': Label information for barcharts, separated into 'values' 
 *              (non-associative array) and 'isBottom' (flag to indicate if the 
 *              labels must be located below the bars).
 *
 * Events
 * ------
 *
 * @init.graphael
 *   Triggered when a gRaphael graph is first created. By binding to this
 *   event, the graph object can be retrieved and different hover, etc. effects
 *   can be added to a graph.
 *
 *   $('div.my-graph').bind('init.graphael', function() {
 *     $(this).graphael('get').hover(function() {}, function() {});
 *   });
 *
 * Static methods
 * --------------
 *
 * $().graphael.labelShow(graph, element, params);
 *
 * Chart element hover in callback for displaying a label.
 *
 * Parameters:
 *
 * @graph
 *   The jQuery object for the gRaphael DOM element.
 *
 * @element
 *   The element for which labeling should occur. `this` in the context of a
 *   chart.hover() event.
 *
 * @params
 *   An associative array of parameters. Supported parameters:
 *
 *   'label':      The label type to be used. May be one of the following:
 *                 'tag', 'popup', 'flag', 'label', 'drop', 'blob'.
 *   'attrLabel':  An associative array of attributes supported by gRaphael.
 *   'attrText':   An associative array of attributes supported by gRaphael.
 *
 *
 * $().graphael.labelHide(graph, element, params);
 *
 * Chart element hover out callback for hiding a label.
 *
 * Parameters:
 *
 * @graph
 *   The jQuery object for the gRaphael DOM element.
 *
 * @element
 *   The element for which labeling should occur. `this` in the context of a
 *   chart.hover() event.
 *
 * @params
 *   An associative array of parameters. Currently no supported parameters.
 *
 *
 * $().graphael.elementPosition(graph, element);
 *
 * Helper method to retrieve the position of an element in a graph value
 * series, starting from 0. Useful for retrieving external data by index of
 * the element in question.
 *
 * Parameters:
 *
 * @graph
 *   The jQuery object for the gRaphael DOM element.
 *
 * @element
 *   The element for which the index should be retrieved. `this` in the context
 *   of a chart.hover() event.
 *
 *
 * $().graphael.elementValue(graph, element);
 *
 * Helper method to retrieve the value of an element in a graph value series.
 *
 * Parameters:
 *
 * @graph
 *   The jQuery object for the gRaphael DOM element.
 *
 * @element
 *   The element for which the value should be retrieved. `this` in the context
 *   of a chart.hover() event.
 */
(function($) {
  $.fn.graphael = function(method, values, params) {
    var r = Raphael(this.get(0));
    var chart = false;
    params = params || {};
    params.opts = params.opts || {};
    params.padding = parseFloat(params.padding || "10");

    var w = this.width() - (params.padding * 2);
    var h = this.height() - (params.padding * 2) ;
    var x = params.padding;
    var y = params.padding;

    // Set supported parameters.

    // 'color': array of CSS hex color values, example: '#fff'.
    if (params.colors) {
      r.g.colors = params.colors;
    }
    // 'font': string of CSS font shorthand, example: '12px Arial'.
    if (params.font) {
      r.g.txtattr.font = params.font;
    }

    switch (method) {
      case 'bar':
        chart = r.g.barchart(x, y, w, h, values, params.opts);
        if (params.label) {
          chart.label(params.label.values, params.label.isBottom);
        }
        break;
      case 'hbar':
        chart = r.g.hbarchart(x, y, w, h, values, params.opts);
        if (params.label) {
          chart.label(params.label.values, params.label.isRight);
        }
        break;
      case 'dot':
        chart = r.g.dotchart(x, y, w, h, values[0], values[1], values[2], params.opts);
        break;
      case 'pie':
        var pie_x = (w * 0.5) + x;
        var pie_y = (h * 0.5) + y;
        var radius = w > h ? h * 0.5 : w * 0.5;

        // If a legend has been provided, attempt to position the pie chart
        // intelligently in relation to the legend position.
        if (params.opts.legend) {
          switch (params.opts.legendpos) {
            case 'north':
              pie_y = (h - radius) + y;
              break;
            case 'south':
              pie_y = (radius) + y;
              break;
            case 'west':
              pie_x = (w - radius) + x;
              break;
            // East is the default position.
            default:
              pie_x = (radius) + x;
              break;
          }
        }

        chart = r.g.piechart(pie_x, pie_y, radius, values, params.opts);
        break;
      case 'line':
        chart = r.g.linechart(x, y, w, h, values[0], values[1], params.opts);
        break;
    }
    if (chart) {
      this.data('method', method);
      this.data('raphael', r);
      this.data('chart', chart);
      this.trigger('init.graphael', {method: method, raphael: r, chart: chart});
    }
    return this;
  };

  $.fn.graphael.labelShow = function(graph, element, params) {
    var r          = graph.data('raphael');
    var method     = graph.data('method');
    var label      = params.label || 'popup';
    var attrLabel  = params.attrLabel || { fill:'#fff' };
    var attrText   = params.attrText || { fill:'#666', font: '12px Arial' };
    var value      = params.value || $.fn.graphael.elementValue(graph, element);

    switch (method) {
      case 'pie':
        element.label = r.g[label](element.mx, element.my, value).attr([attrLabel, attrText]);
        break;
      case 'bar':
        element.label = r.g[label](element.bar.x, element.bar.y, value).attr([attrLabel, attrText]).insertBefore(element);
        break;
      case 'hbar':
        element.label = r.g[label](element.bar.x, element.bar.y, value).attr([attrLabel, attrText]).insertBefore(element);
        break;
      case 'line':
        element.label = r.g[label](element.x, element.y, value).attr([attrLabel, attrText]).insertBefore(element);
        break;
      case 'dot':
        element.label = r.g[label](element.x, element.y, value).attr([attrLabel, attrText]).insertBefore(element);
        break;
    }
  };

  $.fn.graphael.labelHide = function(graph, element, params) {
    var method = graph.data('method');
    element.label.animate({opacity: 0}, 200, function () {this.remove();});
  };

  $.fn.graphael.elementPosition = function(graph, element) {
    var method = graph.data('method');
    switch (method) {
      case 'pie':
        return element.value.order;
      case 'bar':
      case 'hbar':
        for (var i in graph.data('chart').bars) {
          if (graph.data('chart').bars[i].id === element.bar.id) {
            return i;
          }
        }
        return false;
      case 'dot':
        for (var i in graph.data('chart').series) {
          if (graph.data('chart').series[i].id === element.dot.id) {
            return i;
          }
        }
        return false;
    }
    return false;
  };

  $.fn.graphael.elementValue = function(graph, element) {
    var method = graph.data('method');
    switch (method) {
      case 'pie':
        return element.value;
      case 'bar':
      case 'hbar':
        return element.bar.value;
      case 'line':
        return element.value;
      case 'dot':
        return element.value;
    }
    return false;
  };




/**
 * Découpe une chaine de caractère tout les 25 caractères
 * Pour que cela rentre dans le rectangle
 * **/
$.fn.graphael.splitText2Tspan = function (name, len) {
  //var name = node.name;
  var splitname = new Array();
  var middleString= "";
  var segNb = 0;
  var segment = 0;
  var tabWord = name.split(" ");
  for(var i=0;i<tabWord.length;i++){
    segment = segment + tabWord[i].length;
    if (segment>len) {
      splitname[segNb] = trim(middleString);
      segment = tabWord[i].length;
      segNb =segNb+1;
      middleString = tabWord[i]+' ' ;
    }
    else {
      middleString+= tabWord[i]+' ';
    }
  }
  splitname[segNb] = middleString;
 return splitname;
};

function trim (myString) {
  return myString.replace(/^\s+/g,'').replace(/\s+$/g,'')
} ;


})(jQuery);
;
(function ($) {
  
/**
 * Behavior for initializing gRaphael graphs generated through the
 * theme('graphael') theme function in Drupal.
 */
Drupal.behaviors.graphael = {
  attach: function (context, settings) {
    // Allow others to bind to graphael DOM objects before the graph is inited
    // using the attach.drupal event.
    $(window).trigger('attach.drupal');

    $('.graphael-graph:not(.graphaelProcessed)').each(function() {
      $(this).addClass('graphaelProcessed');
      var id = $(this).attr('id');
      if (settings.graphael && settings.graphael[id]) {
        var d = settings.graphael[id];
        // Attach the original graph settings to the DOM element if they need
        // be used by any extending functionality.
        $(this)
          .data('settings', d)
          .graphael(d.method, d.values, d.params);
      }
    });
  }
};

$(window).bind('attach.drupal', function() {
  $('.graphael-graph:not(.graphaelBind)').bind('init.graphael', function(event, data) {
    var d = $(this).data('settings');
    if (d.extend) {
      // Extension: Basic labeling.
      if (d.extend.label) {
        var graph = $(this);
        var chart = data.chart;
        var params = d.extend.label.params || {};
        chart.hover(
          function() {
            var position = $().graphael.elementPosition(graph, this);
            if (position !== false && d.extend.label.values && d.extend.label.values[position]) {
              params.value = d.extend.label.values[position];
            }
            $().graphael.labelShow(graph, this, params);
          },
          function() { $().graphael.labelHide(graph, this, params); }
        );
      }
      // Extension: Clickable elements.
      if (d.extend.url) {
        var graph = $(this);
        var chart = data.chart;
        chart.each(function() {
          if (this.node) {
            var elem = this.node;
            $(elem).css({cursor:'pointer'});
          }
          else if (this.cover && this.cover.node) {
            var elem = this.cover.node;
            $(elem).css({cursor:'pointer'});
          }
        });
        chart.click(
          function() {
            var position = $().graphael.elementPosition(graph, this);
            if (position !== false && d.extend.url.values && d.extend.url.values[position]) {
              window.location = d.extend.url.values[position];
            }
          }
        );
      }
    }
  }).addClass('graphaelBind');
});

})(jQuery);
;
(function ($) {

Drupal.googleanalytics = {};

$(document).ready(function() {

  // Attach mousedown, keyup, touchstart events to document only and catch
  // clicks on all elements.
  $(document.body).bind("mousedown keyup touchstart", function(event) {

    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      // Is the clicked URL internal?
      if (Drupal.googleanalytics.isInternal(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox')) {
          // Do nothing here. The custom event will handle all tracking.
          //console.info("Click on .colorbox item has been detected.");
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (Drupal.settings.googleanalytics.trackDownload && Drupal.googleanalytics.isDownload(this.href)) {
          // Download link clicked.
          ga("send", "event", "Downloads", Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(), Drupal.googleanalytics.getPageUrl(this.href));
        }
        else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          ga("send", "pageview", { "page": Drupal.googleanalytics.getPageUrl(this.href) });
        }
      }
      else {
        if (Drupal.settings.googleanalytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          ga("send", "event", "Mails", "Click", this.href.substring(7));
        }
        else if (Drupal.settings.googleanalytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (Drupal.settings.googleanalytics.trackDomainMode != 2 || (Drupal.settings.googleanalytics.trackDomainMode == 2 && !Drupal.googleanalytics.isCrossDomain(this.hostname, Drupal.settings.googleanalytics.trackCrossDomains))) {
            // External link clicked / No top-level cross domain clicked.
            ga("send", "event", "Outbound links", "Click", this.href);
          }
        }
      }
    });
  });

  // Track hash changes as unique pageviews, if this option has been enabled.
  if (Drupal.settings.googleanalytics.trackUrlFragments) {
    window.onhashchange = function() {
      ga('send', 'pageview', location.pathname + location.search + location.hash);
    }
  }

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  $(document).bind("cbox_complete", function () {
    var href = $.colorbox.element().attr("href");
    if (href) {
      ga("send", "pageview", { "page": Drupal.googleanalytics.getPageUrl(href) });
    }
  });

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
};

/**
 * Check whether this is a download URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isDownload = function (url) {
  var isDownload = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  return isDownload.test(url);
};

/**
 * Check whether this is an absolute internal URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternal = function (url) {
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return isInternal.test(url);
};

/**
 * Check whether this is a special URL or not.
 *
 * URL types:
 *  - gotwo.module /go/* links.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternalSpecial = function (url) {
  var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
  return isInternalSpecial.test(url);
};

/**
 * Extract the relative internal URL from an absolute internal URL.
 *
 * Examples:
 * - http://mydomain.com/node/1 -> /node/1
 * - http://example.com/foo/bar -> http://example.com/foo/bar
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   Internal website URL
 */
Drupal.googleanalytics.getPageUrl = function (url) {
  var extractInternalUrl = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return url.replace(extractInternalUrl, '');
};

/**
 * Extract the download file extension from the URL.
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   The file extension of the passed url. e.g. "zip", "txt"
 */
Drupal.googleanalytics.getDownloadExtension = function (url) {
  var extractDownloadextension = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  var extension = extractDownloadextension.exec(url);
  return (extension === null) ? '' : extension[1];
};

})(jQuery);
;
