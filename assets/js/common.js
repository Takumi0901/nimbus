jQuery(document).ready(function($){
  /**
   * Tab
   */
  $('.js-tab-btn').on('click', function(event){
    event.preventDefault();
    var $this = $(this);

    $this.parent().siblings().removeClass('is-active').end().addClass('is-active');
    
    var tabId = $this.data('tabid');
    $this.closest('.js-tab').find('.js-tab-body').each(function(){
      var $content = $(this);
      if($content.data('contentid') == tabId){
        $content.addClass('is-show');
      }else{
        $content.removeClass('is-show');
      }
    });
  });


  /**
   * Page-link
   */
  $('.js-page-link').click(function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 64;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});