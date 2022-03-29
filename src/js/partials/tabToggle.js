import jQuery from "jquery";

/**
 *
 * Script accepts options object:
 * parentItem: parent selected resource,
 * childItem: desired child selected item,
 *
 */

(function( $ ) {

  $.fn.tabToggle = function(options) {

    let settings = $.extend({
      'parentItem': '.s-account__tab',
      'childItem' : '.s-account__tabs-second'
    }, options);

    this.on('click', function(e) {
      e.preventDefault();
      $(this).closest(settings.parentItem).siblings().children(settings.childItem).stop(true, true).hide(300)
      $(this).siblings(settings.childItem).stop( true, true ).show(300)
    })

  };
})( jQuery );
