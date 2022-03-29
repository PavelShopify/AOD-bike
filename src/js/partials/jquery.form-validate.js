import jQuery from "jquery";

(function($) {
  $.fn.formValidate = function() {

    let classValidate = 'c-field__validate',
      classError      = 'c-field__input_is-error';

    this.each(function (index, element) {

      let $form         = $(element).closest('form'),
          $submitButton = $('[type=submit]', $form).length > 0 ? $('[type=submit]', $form) : $('button', $form);

      function error(el) {
        $(el).addClass(classError).removeClass(classValidate);
        $submitButton.attr('disabled', true);
      }

      function validate(el) {
        $(el).removeClass(classError).addClass(classValidate)
        if ($('.c-field__error:visible',$form).length === 0) {
          $submitButton.removeAttr('disabled');
        }
      }

      function check (element) {
        if (
          $(element).is('[required]') &&
          (
            ($(element).val().trim() === '' && $(element).attr('type') === 'text') ||
            ($(element).attr('type') === 'checkbox' && $(element).is(':checked') === false) ||
            (element.tagName === "TEXTAREA" && $(element).val().trim() === '')
          )
        ) {
          error($(element));
        } else if (
          typeof $(element).attr('pattern') !== 'undefined' &&
          $(element).is('[required]') &&
          !new RegExp($(element).attr('pattern')).test($(element).val()))
        {
          error($(element));
        } else {
          validate($(element));
        }
      }

      function checkInput(element) {
        if (element.tagName === 'FORM') {
          let $elements = $('input, textarea, select', $(element));
          $elements.each(function (index, element) {
            check(element);
          })
        } else {
          check(element);
        }
      }

      if ($('input[type="checkbox"]', $form).length > 0 || $('select', $form).length > 0) {
        $('input[type="checkbox"], select', $form).on('change', function (event) {
          checkInput(event.target);
        });
      }

      $('input, textarea, select', $(element)).focusout(function (event) {
        if ($(event.target).val() === '') {
          validate(event.target);
        } else {
          checkInput(event.target);
        }
      });

      $form.submit(function (event) {
        checkInput($form.get(0));
        if ($('.c-field__error:visible', $form).length > 0) {
          event.preventDefault();
        }
      });
    });
  };
})(jQuery);
