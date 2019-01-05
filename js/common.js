'use strict';
if(!window.console) window.console = {};
if(!window.console.memory) window.console.memory = function() {};
if(!window.console.debug) window.console.debug = function() {};
if(!window.console.error) window.console.error = function() {};
if(!window.console.info) window.console.info = function() {};
if(!window.console.log) window.console.log = function() {};

// sticky footer
//-----------------------------------------------------------------------------
if(!Modernizr.flexbox) {
  (function() {
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      noFlexboxStickyFooter = function() {
        $pageBody.height('auto');
        if($pageBody.height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageBody.height($(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());
        } else {
          $pageWrapper.height('auto');
        }
      };
    $(window).on('load resize', noFlexboxStickyFooter);
  })();
}
if(ieDetector.ieVersion == 10 || ieDetector.ieVersion == 11) {
  (function(){
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      ieFlexboxFix = function() {
        if($pageBody.addClass('flex-none').height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageWrapper.height($(window).height());
          $pageBody.removeClass('flex-none');
        } else {
          $pageWrapper.height('auto');
        }
      };
    ieFlexboxFix();
    $(window).on('load resize', ieFlexboxFix);
  })();
}

$(function() {

// placeholder
//-----------------------------------------------------------------------------
     $('input[placeholder], textarea[placeholder]').placeholder();


    $('.top-nav ul li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
    });
    $('.sub-link').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('sub-link-close')){
            $('.sub-nav .sub-nav-block').addClass('sub-nav-block-open');
            $('.sub-nav .sub-nav-accordion').addClass('sub-nav-accordion-open');
            $(this).addClass('sub-link-active').removeClass('sub-link-close');
        }else{
            $('.sub-nav .sub-nav-block').removeClass('sub-nav-block-open');
            $(this).removeClass('sub-link-active').addClass('sub-link-close');
            $('.sub-nav .sub-nav-accordion').removeClass('sub-nav-accordion-open');
        }
    });
    $('.sub-nav-list .second-link').on('click', function(){
        //e.preventDefault();
        var $this = $(this),
            subNavSecond= $this.attr('href');
            $('.sub-nav-list .second-link').removeClass('second-link-active');
            $this.addClass('second-link-active');
            $('.second-block-container .sub-nav-container').removeClass('sub-nav-container-open');
            $(subNavSecond).addClass('sub-nav-container-open');
        });
    $('.btn-answer a').on('click', function(e){
        e.preventDefault();
        var $this = $(this),
            $thisItem = $this.closest('.answer-block'),
            $thisContent = $thisItem.find('.text-answer-container');
        if($thisItem.hasClass('open')) {
            $thisItem.removeClass('open');
            $thisContent.stop(true, true).slideUp();
            $this.text('Развернуть ответ');
        } else {
            $thisItem.addClass('open').siblings().removeClass('open').find('.text-answer-container').stop(true, true).slideUp();
            $thisContent.stop(true, true).slideDown();
            $this.text('Свернуть ответ');
        }
    });







    if($('.fancybox').length) {
        $('.fancybox').fancybox();
    }
    $('.special-main-slider').slick({
        dots: true
    });
    $('.main-gallery-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.about-team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    //if($('#container-news').length) {
    //    $('#container-news').mixItUp();
    //}
    //if($('#content-gallery').length) {
    //    $('#content-gallery').mixItUp();
    //
    //}
    $('.tab-links li a').on('click', function(e)  {
        e.preventDefault();
        var $this = $(this),
            thisIdItem = $this.attr('href');
        $('.tab-links a').removeClass('active');
        $this.addClass('active');
        $('.tab').removeClass('active');
        $(thisIdItem).addClass('active');
    });
    //$('.gallery').masonry();
    //var $grid = $('.gallery').isotope();
    //
    //$('[data-filter]').on('click', function (e) {
    //    var $this = $(this);
    //    var filterValue = $this.data('filter');
    //    $grid.isotope({filter: filterValue});
    //    $('[data-filter]').removeClass('active');
    //    $this.addClass('active');
    //});



    $('.gallery').imagesLoaded( function () {
        $('.gallery').masonry({
            columnWidth: '.gallery__item',
            itemSelector: '.gallery__item'
        });
    });


    $('.video-service').hover(function toggleControls() {
        if (this.hasAttribute("controls")) {
            this.removeAttribute("controls")
        } else {
            this.setAttribute("controls", "controls")
        }});
    //$(".filter").on('click',function() {
    //    $('html, body').animate({
    //        scrollTop: ($('.gallery').offset().top -120)
    //    },500);
    //});

});

jQuery(function($){
    $(document).on('mouseup',function (e){
        var div = $(".sub-nav-block");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.removeClass('sub-nav-block-open');
            $('.sub-link').removeClass('sub-link-active').addClass('sub-link-close');
        }else{
        }
    });
});


//$(document).on('scroll',function (e){
//    var div = $(".sub-nav-block");
//    if (!div.is(e.target)
//        && div.has(e.target).length === 0) {
//        div.removeClass('sub-nav-block-open');
//        $('.sub-link').removeClass('sub-link-active').addClass('sub-link-close');
//
//    }else{
//    }
//});

$(window).scroll(function () {
    if($('.page-wrapper').hasClass('home-page')){
        if ($(this).scrollTop() > 710) {
            $('.bot-header').addClass('bot-header-scroll');
            $('.logo-block').addClass('logo-block-scroll');
        }
        else {
            $('.bot-header').removeClass('bot-header-scroll');
            $('.logo-block').removeClass('logo-block-scroll');
        }
    }else{
        if ($(this).scrollTop() > 60) {
            $('.bot-header').addClass('bot-header-scroll');
            $('.logo-block').addClass('logo-block-scroll');
        }
        else {
            $('.bot-header').removeClass('bot-header-scroll');
            $('.logo-block').removeClass('logo-block-scroll');
        }
    }
});
$('.header-btn').on('click', function(){
    var headBtn = ('.header-btn'),
        botHead = ('.bot-header'),
        topNav = ('.top-nav');
    if($(headBtn).hasClass('open-nav')){
        $(headBtn).removeClass('open-nav').addClass('close-nav');
        $(botHead).addClass('bot-header-open');
        $(topNav).addClass('top-nav-open');
        $('.bot-header').css('height', '100%');
        $('body').css('overflow', 'hidden');
    }else{
        $(headBtn).addClass('open-nav').removeClass('close-nav');
        $(botHead).removeClass('bot-header-open');
        $(topNav).removeClass('top-nav-open');
        $('.bot-header').css('height', '70px');
        $('body').css('overflow', 'auto');
    }
});




$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        $('.scroll-to-top').fadeIn().css('display','block');
    }
    else {
        $('.scroll-to-top').fadeOut().css('display','none');
    }
});
$('.scroll-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});



$(function (){
    if (($(window).width()) < '992'){
        $('.sub-nav-second .second-link').on("click", function () {
            var $this = $(this),
                $thisItem = $this.closest('.sub-nav-second'),
                $thisContent = $thisItem.find('.sub-nav-accordion');
            if($thisItem.hasClass('open')) {
                $thisItem.removeClass('open');
                $thisContent.stop(true, true).slideUp();
            } else {
                $thisItem.addClass('open').siblings().removeClass('open').find('.sub-nav-accordion').stop(true, true).slideUp();
                $thisContent.stop(true, true).slideDown();
                $thisContent.addClass('sub-nav-container-open');
            }
        });
    } else {
    }
});
