import jQuery from "jquery";

/**
 *
 * Script accepts options object:
 * allClassItem: class all elements,
 * allRemClass: remove all classes,
 * allHideBlock: class hiding all blocks,
 * hasClassItem: class to check,
 * actClassLv1: class the first level,
 * actClassLv2: class the second level
 *
 */

(function( $ ) {

  $.fn.tabMenu = function(options) {

    let settings = $.extend({
      'allClassItem': '.s-account__lnk, .s-account__lnk-second',
      'allRemClass' : 's-account__lnk_is-active s-account__lnk-second_is-active',
      'allHideBlock': '.s-account__content',
      'hasClassItem': 's-account__lnk-second',
      'actClassLv1' : 's-account__lnk-second_is-active',
      'actClassLv2' : 's-account__lnk_is-active'
    }, options);

    this.on('click', function(e) {
      e.preventDefault();
      let $link = $(this),
          $tabMenu = $($link.attr("href"))

      $(settings.allClassItem).removeClass(settings.allRemClass)
      $(settings.allHideBlock).stop(true, true).hide(100)
      if($link.hasClass(settings.hasClassItem)){
        $link.addClass(settings.actClassLv1)
      } else {
        $link.addClass(settings.actClassLv2)
      }
      $tabMenu.stop( true, true ).show(100)
    })

  };
})( jQuery );
