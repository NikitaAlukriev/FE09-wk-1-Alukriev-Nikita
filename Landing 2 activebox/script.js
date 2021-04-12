$(function() {

    /* fixed header*/
let header = $("#header");
let banner =$("#banner");
let bannerH =banner.innerHeight();
let scrollPos =$(window).scrollTop();
let nav = $("#nav");
let navToggle = $("#navToggle");


$(window).on("scroll load resize", function(){
bannerH =banner.innerHeight();
scrollPos=$(this).scrollTop();
if(scrollPos>bannerH){
header.addClass("fixed");
} else {
header.removeClass("fixed");
}
});

/*smooth scroll*/
$("[data-scroll]").on("click", function(event) {
event.preventDefault();

let elementId = $(this).data('scroll');
let elementOffset = $(elementId). offset().top;

nav.removeClass("show");

$("html,body").animate({
  scrollTop: elementOffset - 65
}, 900);
});

/*nav toggle*/

navToggle.on("click", function(event) {
event.preventDefault();

nav.toggleClass("show");
});

/*reviews*/
let slider = $("#reviewsSlider");
slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:false,
    arrows:false
  });

});