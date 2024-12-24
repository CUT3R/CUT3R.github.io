document.addEventListener('DOMContentLoaded', () => {
	var options = {
			  slidesToScroll: 2,
			  slidesToShow: 2,
			  loop: true,
			  infinite: true,
			  initialSlide: 2,
			  autoplay: false,
			  autoplaySpeed: 3000,
			  pagination: false,
	};
  
	// Initialize all div with carousel class
	var carousels = bulmaCarousel.attach('.carousel', options);
  });
  
  window.HELP_IMPROVE_VIDEOJS = false;
  