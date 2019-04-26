(function starRating () {
  document.addEventListener(
    'submit',
    function (event) {
      if (!event.target.matches('.stars')) return;
      event.preventDefault();
      var selected = document.activeElement;
      if (!selected) return;
      var starIndex = parseInt(selected.getAttribute('data-star'), 10);
      var starsList = Array.from(event.target.querySelectorAll('.star'));

      starsList.forEach(function (star, index) {
        if (index < starIndex) {
          star.classList.add('selected');
        } else {
          star.classList.remove('selected');
        }
      });

      var prvSelect = event.target.querySelector('.star[aria-pressed="true"]');
      if (prvSelect) {
        prvSelect.removeAttribute('aria-pressed');
      }
      selected.setAttribute('aria-pressed', true);
    },
    false
  );

  var starHover = function (event) {
    var star = event.target.closest('.star');
    var starsForm = event.target.closest('.stars');
    if (!star || !starsForm) return;
    var starIndex = parseInt(star.getAttribute('data-star'), 10);
    var starsList = Array.from(starsForm.querySelectorAll('.star'));

    starsList.forEach(function (star, index) {
      if (index < starIndex) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });
  };

  document.addEventListener('mouseover', starHover, false);
  document.addEventListener('focus', starHover, true);

  var hoverReset = function (event) {
    if (!event.target.closest) return;
    var starsForm = event.target.closest('.stars');
    if (!starsForm) return;
    var starsList = Array.from(starsForm.querySelectorAll('.star'));

    var selected = starsForm.querySelector('.star[aria-pressed="true"]');
    var starIndex = selected ? parseInt(selected.getAttribute('data-star'), 10) : 0;

    starsList.forEach(function (star, index) {
      if (index < starIndex) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });
  };

  document.addEventListener('mouseleave', hoverReset, true);
  document.addEventListener('blur', hoverReset, true);
})();
