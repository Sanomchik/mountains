$(document).ready(function() {


//$("a[href*='#']").mPageScroll2id();
$(function() {
  $('#gallery-container').snapGallery();
})

});
$(window).load(function() { // makes sure the whole site is loaded
            $('.loader').fadeOut(); // will first fade out the loading animation
            $('.loader_inner').delay(1000).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(1000).css({'overflow':'visible'});
        })
