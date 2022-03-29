import jQuery from "jquery";

(function($) {

  $.fn.SelectStyle = function() {

    this.each(function (index, element) {

      let $this         = $(element),
        numberOfOptions = $this.children('option').length;

      $this.addClass('c-field__select_d-none');
      $this.wrap('<div class="c-field__select_wrap"></div>');
      $this.after('<div class="c-field__select_styled"></div>');

      let $styledSelect = $this.next('div.c-field__select_styled');

      $styledSelect.text($this.children('option').eq(0).text());

      let $list = $('<ul />', {
        'class': 'c-field__select_options'
      }).insertAfter($styledSelect);

      for (var i = 0; i < numberOfOptions; i++) {

        $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val() !== ''?$this.children('option').eq(i).val(): 'hide',
          class: 'c-field__select_item'
        }).appendTo($list);

        if ($this.children('option').eq(i).is(':selected')) {
         $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('c-field__select_selected')
        }

      }

      $('[rel="hide"]', $list).addClass('c-field__select_d-none');

      let $listItems = $list.children('li');

      $styledSelect.click(function(e) {
        e.stopPropagation();

        $('div.c-field__select_styled.c-field__select_active').not(this).each(function(){
          $(this).removeClass('c-field__select_active').next('.c-field__select_options').hide();
        });

        $(this).toggleClass('c-field__select_active').next('.c-field__select_options').toggle();

      });

      $listItems.click(function(e) {

        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('c-field__select_active');
        $this.val($(this).attr('rel'));
        $listItems.removeClass('c-field__select_item-selected');
        $(e.target).addClass('c-field__select_item-selected');
        $list.hide();

      });

      $(document).click(function() {

        $styledSelect.removeClass('c-field__select_active');
        $list.hide();

      });
    });
  };
})(jQuery);
