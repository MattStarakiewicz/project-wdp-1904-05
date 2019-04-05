console.log('hello');

var starRating = (function () {
  /*
    var starHoverOn = function(event) {
        this.classList.add('orange-star', 'full');
    };

    var starHoverOff = function(event) {
        this.classList.remove('orange-star', 'full');
    };

    var stars = event.target.querySelectorAll('.stars a');
    for (let i=0; i<stars.length; i++) {
            stars[i].addEventListener('mouseenter', starHoverOn);
            stars[i].addEventListener('mouseleave', starHoverOff);
            console.log(stars[i]);
    };
    */

  // Listen for form submissions
  document.addEventListener(
    'click',
    function (event) {
      // Only run our code on .rating forms
      if (!event.target.matches('.stars')) return;

      // Prevent form from submitting
      event.preventDefault();

      // Get the selected star
      var selected = document.activeElement;
      if (!selected) return;
      var selectedIndex = parseInt(selected.getAttribute('data-star'), 10);

      // Get all stars in this form (only search in the form, not the whole document)
      // Convert them from a node list to an array
      // https://gomakethings.com/converting-a-nodelist-to-an-array-with-vanilla-javascript/
      var stars = Array.from(event.target.querySelectorAll('.stars a'));

      // Loop through each star, and add or remove the `.selected` class to toggle highlighting
      stars.forEach(function (star, index) {
        if (index < selectedIndex) {
          // Selected star or before it
          // Add highlighting
          star.classList.add('orange-star', 'full');
        } else {
          // After selected star
          // Remove highlight
          star.classList.remove('orange-star', 'full');
        }
      });

      // Remove aria-pressed from any previously selected star
      var previousRating = event.target.querySelector('.stars a [aria-pressed="true"]');
      if (previousRating) {
        previousRating.removeAttribute('aria-pressed');
      }

      // Add aria-pressed role to the selected button
      selected.setAttribute('aria-pressed', true);
    },
    false
  );

  return starRating;
})();
