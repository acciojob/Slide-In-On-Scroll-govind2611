// Get all the images
      const images = document.querySelectorAll("img");

      // Function to check if the image is in the viewport
      function checkSlide(e) {
        images.forEach((image) => {
          const slideInAt =
            window.scrollY + window.innerHeight - image.height / 2;
          const imageBottom = image.offsetTop + image.height;
          const isHalfShown = slideInAt > image.offsetTop;
          const isNotScrolledPast = window.scrollY < imageBottom;

          if (isHalfShown && isNotScrolledPast) {
            image.classList.add("active");
          } else {
            image.classList.remove("active");
          }
        });
      }

      // Debounce function to improve performance
      function debounce(func, wait = 20, immediate = true) {
        let timeout;
        return function () {
          const context = this,
            args = arguments;
          const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          const callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      }

      // Call the checkSlide function on scroll
      window.addEventListener("scroll", debounce(checkSlide));