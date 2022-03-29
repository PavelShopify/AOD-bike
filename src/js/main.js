const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  xxxl: 1600
}
import $ from 'jquery'
import * as global from './partials/global'
import uiTabs from './partials/uiTabs'
import popUp from './partials/popUp'
import tabMenu from './partials/tabMenu'
import tabToggle from './partials/tabToggle'
import confPassword from './partials/confirm-password'
import  './partials/jquery.select.js'
import  './partials/jquery.form-validate.js'
// import predictiveSearch  from './partials/predictive-search'
window.addEventListener('DOMContentLoaded', (event) => {
  // TODO this IIFE function is overhead
  (() => {
    $('[data-tabs]').uiTabs();
  })();

  (() => {

    let $customSelect = $('[data-custom-select]'),
        $forms        = $('[data-js-validate]');

    if($customSelect.length > 0) {
      $customSelect.SelectStyle();
    }

    if($forms.length > 0) {
      $forms.formValidate();
    }
  })();

  (() => {
    $('.c-field__close').on('click', function(){
      $(this).closest('.c-field__error').siblings('.c-field__input').removeClass('c-field__input_is-succeed c-field__input_is-error')
    })
  })();

  (() => {
    $('[data-recover-email]').click(function(e){
      e.preventDefault();

      let recoverBlock = $(this).attr('href')
      $('.s-log-reg').stop( true, true ).hide(300)
      $(recoverBlock).stop( true, true ).show(300)
    });
  })();


  (() => {
    $('[data-footer-ttl]').click(function(){
      let innerWidth = window.innerWidth
      if(innerWidth < breakpoints.lg) {
        $(this).closest('.s-footer__bottom__grid__col').siblings().children('.s-footer__ttl').removeClass('s-footer__ttl_is-active')
        $(this).closest('.s-footer__bottom__grid__col').siblings().children('.s-footer__bottom-menu').stop( true, true ).hide(300)
        if(!$(this).hasClass('s-footer__ttl_is-active')) {
          $(this).addClass('s-footer__ttl_is-active')
          $(this).siblings('.s-footer__bottom-menu').stop( true, true ).show(300)
        } else {
          $(this).removeClass('s-footer__ttl_is-active')
          $(this).siblings('.s-footer__bottom-menu').stop( true, true ).hide(300)
        }
      }
    })
  })();
});

(() => {
  $('[data-popup-link]').popUp()
})();

(() => {
  $('[data-tab-menu]').tabMenu()
  $('[data-tab-toggle]').tabToggle()
})();

(() => {
  $('[data-conf-password]').confPassword();
})();
