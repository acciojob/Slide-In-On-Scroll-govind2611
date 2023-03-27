// Select all images with the class "slide-in"
  const slideInImages = document.querySelectorAll('.slide-in');

  // Define the function that will add the active class to the image when scrolled to
  function handleSlideInImage(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the active class to the image
        entry.target.classList.add('active');
      } else {
        // Remove the active class from the image
        entry.target.classList.remove('active');
      }
    });
  }

  // Use the debounce function to limit the rate at which the handleSlideInImage function is called
  function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // Create a new IntersectionObserver and pass in the handleSlideInImage function
  const slideInObserver = new IntersectionObserver(debounce(handleSlideInImage));

  // Observe all slide-in images
  slideInImages.forEach(img => slideInObserver.observe(img));