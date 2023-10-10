// Slider.js
$(document).ready(function() {
    // Initialize variables
    var currentSlide = 0;
    var slides = $('.slide');
    var slideCount = slides.length;
  
    // Function to show a specific slide
    function showSlide(index) {
      slides.eq(currentSlide).fadeOut();
      slides.eq(index).fadeIn();
      currentSlide = index;
    }
  
    // Start the slideshow
    showSlide(0);
  
    // Automatic slideshow
    var interval = setInterval(function() {
      var nextSlide = (currentSlide + 1) % slideCount;
      showSlide(nextSlide);
    }, 3000); // Change slide every 3 seconds (adjust as needed)
  });
  