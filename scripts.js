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

var maxHeight = 0;
$(".thumbnail").each(function(index, element) {
    var elementHeight = $(element).height();
    if (elementHeight >maxHeight) {
        maxHeight = elementHeight;
    }
});
$(".thumbnail").css(".height",maxHeight);
$(".thumbnail").each(function(index, element) {
$(element).height(maxHeight);});
