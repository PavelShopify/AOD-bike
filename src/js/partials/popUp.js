import jQuery from "jquery";

/**
 *
 * Script accepts options object:
 * body: body selector,
 * visibleClass: class for body from the pop-up,
 * hideClass: class for hiding popups ,
 * closeSelectors: selector for closing the pop-up,
 * closeWrapp: selector for closing the pop-up,
 * noEvent: selector when you click on which the pop-up does not close
 *
 */

(function( $ ) {
  $.fn.popUp = function(options) {

    let settings = $.extend({
      'body'           : 'body',
      'visibleClass'   : 'popup-is-open',
      'hideClass'      : 'c-popup_none',
      'closeSelectors' : '.c-popup__close, [close-popup]',
      'closeWrapp'     : '.c-popup__wrapp',
      'noEvent'        : '.c-popup__block *'
    }, options);

    this.on('click', function(e) {
      e.preventDefault();

      let $link   = $(this),
          $popUp  = $($link.attr("href"));

      $popUp.removeClass(settings.hideClass)
      $(settings.body).addClass(settings.visibleClass)
      $(settings.closeSelectors).on('click',function(e){
          $popUp.addClass(settings.hideClass)
          $(settings.body).removeClass(settings.visibleClass)
      }).find($popUp).on('click', function(e){ e.stopPropagation() })

      $().on('click',function(e){
        if (!$(e.target).is(settings.noEvent)) {
          $popUp.addClass(settings.hideClass)
          $(settings.body).removeClass(settings.visibleClass)
        }
      }).find($popUp).on('click', function(e){ e.stopPropagation() })
      return false
    })
  };
})( jQuery );
