// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// initializes tabCollapse
$('#myTab').tabCollapse();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// disables accordion functionality on sm+ devices
$('a[data-toggle="collapse"]').click(function(e){
  if ($(window).width() >= 768) {  
    e.stopPropagation();
  }    
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// initializes owl carosuel
$('.owl-carousel').owlCarousel({
    // lazyLoad:            true,
    responsiveClass:        true,
    // mouseDrag:              false,
    loop:                   true,
    dots:                   false,
    responsiveRefreshRate:  0,
    navText: [
        "<i class='fa fa-angle-left' aria-hidden='true'></i>",
        "<i class='fa fa-angle-right' aria-hidden='true'></i>"
    ],
    responsive: {
        0: {
            items:          1,
            stagePadding:   40,
            nav:            false,
            margin:         20,
        },
        768: {
            items:          2,
            nav:            true
        },
        1100: {
            items:          3,
            nav:            true,
        }
    }
})

// $(".owl-carousel").on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function (event) {
//     if (!event.namespace) return;
//     var carousel = event.relatedTarget,
//         element = event.target,
//         current = carousel.current();
//     $('.owl-next', element).toggleClass('disabled', current === carousel.maximum());
//     $('.owl-prev', element).toggleClass('disabled', current === carousel.minimum());
// })

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// moves distillery tablet below cover image when on mobile
$(document).ready(manipulateDOMforMobile);
$(document).load($(window).bind("resize", manipulateDOMforMobile));

function manipulateDOMforMobile( e ) {
    if ($(window).width() < 768) {
        $("#distillery-tablet").remove().insertBefore($("#info"));
        $("#title-tablet").remove().insertBefore($("#info"));
        $("#product-call-to-action").remove().insertBefore($("#trust"));
    } else {
        $("#distillery-tablet").remove().insertBefore($("#hero-zig-zag"));
        $("#title-tablet").remove().insertBefore($("#hero-zig-zag"));
        $("#product-call-to-action").remove().insertAfter($("#product-rating"));
    }
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// colapses all sections on mobile
$(document).ready(function(){
    var windowWidth = $(window).width();
    if(windowWidth <= 768) //for iPad & smaller devices
    $('.collapse').removeClass('in')
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// loads more distillery details
$(document).ready(function(){
    $('#distillery-details a.more').click(function() {
        $('#distillery-details li').removeClass('hide');
        $('#distillery-details a.more').addClass('hide');
    })
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// scrolls animated to target with same ID as "href"
$('a[href^="#"].scroll-to').click(function(event) {
    var target = $(this.hash);
    $('html, body').animate({
    scrollTop: target.offset().top
}, 500);
    return false;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// loads more reviews
$('#load-more-reviews').click(function(event) {
    $('.single-review.hide').removeClass('hide');
    $(this).hide();
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 