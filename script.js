$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        items:1,
        dots:false,
        autoplay:true,
        smartSpeed:500,
        autoplayTimeout:5000
    });
    $('#tabset').tabs();
});