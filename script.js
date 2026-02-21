jQuery(document).ready(function($) {
  jQuery('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      var target = this.hash;
      var $target = $(target);

      if ($target.length) {
          jQuery('html, body').animate({
              scrollTop: $target.offset().top
          }, 800); 
      }
  });
});