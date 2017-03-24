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

  /**
   * modal
   */
  $('.js-modal-btn').each(function(){
    var modal = new Modal(this);
    modal;
  });


  /**
   * fixedContent
   */
  var fixedContent = new FixedContent();
  fixedContent;
});

// Modal
////////////////////////////////////////////////////////////
function Modal(el){
  this.initialize(el);
  this.handleEvents();
}

Modal.prototype.initialize = function(el){
  this.$el = $(el);
  this.$modal = $('.js-modal');
  this.$overlay = $('.js-modal-overlay');
  this.$closeBtn = $('.js-modal-close-btn');
}

Modal.prototype.handleEvents = function(){
  var self = this;

  var event = 'ontouchstart' in window ? 'touchstart' : 'click';

  this.$el.on(event, function(event){
    event.preventDefault();
    var $target = self.$el.attr('href');
    self.modalFadeIn($target);

    return false;
  });

  this.$overlay.on(event, function(event){
    self.modalFadeOut();

    return false;
  });

  this.$closeBtn.on(event, function(event){
    self.modalFadeOut();

    return false;
  });
}

Modal.prototype.modalFadeIn = function(target){
  $(target).addClass('is-fadein');
}

Modal.prototype.modalFadeOut = function(){
  var self = this;

  this.$modal.addClass('is-fadeout');

  setTimeout(function(){
    self.modalFadeReset();
  },600);
}

Modal.prototype.modalFadeReset = function(){
  this.$modal.removeClass('is-fadein');
  this.$modal.removeClass('is-fadeout');
}


// FixedContent
////////////////////////////////////////////////////////////
function FixedContent(){
  this.initialize();
  this.handleScrollEvents();
}

FixedContent.prototype.initialize = function(){
  this.$sideH = $('.js-fixed-content').innerHeight();
  this.$mainH = $('.js-wrapper').innerHeight();
  this.$headerH = $('.js-header').innerHeight();
  this.$sideOffsetTop = $('.js-fixed-content').offset().top
  this.$bottomContentH = $('.js-footer').innerHeight();

  var self = this;
  this.sideWithOverFlowScroll();

  $(window).resize(function(){
    self.sideWithOverFlowScroll();
  });
}

FixedContent.prototype.sideWithOverFlowScroll = function(){
  this.$wH = $(window).height();
  this.$wrapW = $('.js-fixed-content-wrap').innerWidth();
  $('.js-fixed-content-wrap').css({'position': 'rerative'});

  if(this.$wH < this.$sideH){
    $('.js-fixed-content').css({'height': this.$wH - this.$bottomContentH, 'width': this.$wrapW});
  }else{
    $('.js-fixed-content').css({'height': 'auto', 'width':  this.$wrapW});
  }
}

FixedContent.prototype.handleScrollEvents = function(){
  var self = this
  $(window).on('scroll', function(){
    var scrollValue = $(this).scrollTop();
    if(self.$mainH > self.$sideH){
      self.customScroll(scrollValue);
    }
  });
}

FixedContent.prototype.customScroll = function(scrollValue){
  var self = this;

  $('.js-fixed-content').each(function(){
    var $this = $(this);
    var $targetEle = $('.js-footer').offset().top;
    var $targetPos = $targetEle - self.$wH;

    if(self.$sideOffsetTop <= scrollValue){

      if($targetPos < scrollValue){
        if(!$this.hasClass('is-absolute')){
          $this.addClass('is-absolute');
          $this.removeClass('is-fixed');
          $this.css({top: 'auto', bottom: 0});
        }
      }else{
        
        if(!$this.hasClass('is-fixed')){
          $this.addClass('is-fixed');
          $this.removeClass('is-absolute');
          $this.css({top: self.$headerH + 24 + 'px', bottom: 'auto'});
        }
      }
    }else{
      $this.removeClass('is-fixed');
      $this.removeClass('is-absolute');
    }
  });
}