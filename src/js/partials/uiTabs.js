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
  $.fn.uiTabs = function(options) {

    let settings = $.extend({
      'toBlock'        : false,
      'activeClass'    : 'c-tabs__item_active',
      'visibleClass'   : 'c-tabs__content_visible',
      'selectorLink'   : '.c-tabs__nav a',
      'selectorContent': '.c-tabs__content'
    }, options);

    this.each(function (index,element) {

      let $tabs   = $(element),
          $links  = $(settings.selectorLink, $tabs),
          $blocks = $(settings.selectorContent, $tabs);

      $links.on('click', function (event) {
        event.preventDefault();
        let activeId = $(this).attr('href');

        $blocks.removeClass(settings.visibleClass);
        $links.closest('li').removeClass(settings.activeClass);

        $(activeId).addClass(settings.visibleClass);
        $(this).closest('li').addClass(settings.activeClass);

        if (settings.toBlock) {
          $('html, body').animate({scrollTop: $(activeId).offset().top}, 400);
          window.location.hash = activeId;
        }
      })
    });
  };
})( jQuery );



/**************************************** Example of bad code *********************************************/
// (function( $ ) {
//   $.fn.uiTabs = function() {
//     let obj = this;
//     let hash = window.location.hash ? window.location.hash: null;
//     let showTab = function (link) {
//       let tab = 'page_'+ $(link).attr('href').replace('#', '');
//       let $tab = $($(link).attr('href'));
//       window.location.hash = tab;
//       $(link).closest('.c-tabs__nav__itm').addClass('is-active').siblings().removeClass('is-active');
//       $($tab).addClass('is-visible').siblings().removeClass('is-visible');
//
//       $('html, body').animate({
//         scrollTop: $(link).offset().top,
//       }, 400)
//     }
//     obj.each(function (){
//       let $link = $(this);
//       let tab = '#page_'+ $(this).attr('href').replace('#', '');
//       if (hash == tab) {
//         showTab($(this));
//       }
//       $link.click(function(e) {
//         e.preventDefault();
//         showTab($(this));
//       });
//     });
//   };
// })( $ );
