$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    nav:true,
    autoWidth:true, 
    center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });
});

$('.thumbnails').find('.thumbnail').uniformHeight();

$(window).resize(function () {
    $('.thumbnails').find('.thumbnail').uniformHeight();
});

(function ($) {
    $.fn.uniformHeight = function () {
        var maxHeight = 0,
            wrapper,
            wrapperHeight;

        return this.each(function () {

            // Applying a wrapper to the contents of the current element to get reliable height
            wrapper = $(this).wrapInner('<div class="wrapper" />').children('.wrapper');
            wrapperHeight = wrapper.outerHeight();

            maxHeight = Math.max(maxHeight, wrapperHeight);

            // Remove the wrapper
            wrapper.children().unwrap();

        }).height(maxHeight);
    }
})(jQuery);
