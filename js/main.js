'use strict';
$(document).ready(function(){

  // slider ini
  $('.slick').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: false
        }
      }]
  });

  // top parallax
  $('section.top').mousemove( function( e ) {
    $( '.cloud1' ).parallax( 10 , e );
    $( '.cloud2' ).parallax( 20 , e );
    $( '.cloud3' ).parallax( 30 , e );
  });

  // custom script
  $('.btn_down').on('click', function(){
    $("html, body").animate({scrollTop: $(".slick").offset().top}, 500);
  });
  
});