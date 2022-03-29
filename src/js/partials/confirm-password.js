import jQuery from "jquery";

/**
 *
 * Script accepts options object:
 * toBlock: scroll to active block - default value is true,
 * selectorLink: selector for tab links - default value ".c-tabs__nav a",
 * selectorContent: selector for content block -default value ".c-tabs__content",
 * activeClass: class for active link element - default value "c-tabs__item_active",
 * visibleClass: selector for visible block - default value "c-tabs__content_visible"
 *
 */

(function( $ ) {
  $.fn.confPassword = function(options) {

    let settings = $.extend({
      'allField'   : '.c-field',
      'matchPassword': '[data-match-password]',
      'errorClass': 'c-field__input_is-error'
    }, options);

    let $confInput = $(this)

    $confInput.on('focusout', function (event) {

      let $confPassword = $(this),
          $cPasswordVal = $confPassword.val(),
          $password = $(this).closest(settings.allField).siblings().children(settings.matchPassword),
          $passwordVal = $password.val();

      if($cPasswordVal == $passwordVal) {
        setTimeout(() => $confPassword.removeClass(settings.errorClass), 100);
      } else {
        setTimeout(() => $confPassword.addClass(settings.errorClass), 100);
      }

    });
  };
})( jQuery );
