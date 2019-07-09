$(document).ready(function() {
	$('.carousel').slick({
   slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  arrows:true,
  prevArrow:'<button type="button" class="slick-prev"></button>',
  nextArrow:'<button type="button" class="slick-next"></button>'
  });
	$('.slide').click(function() {
    $slideshow.slick('slickNext');
  		});
	});