
// Smooth Scroll
$(document).ready(function() {
  $('.navigation-menu__item a').smoothScroll({offset: 0});

  // Parallax BG
  $.stellar({
    horizontalScrolling: false,
    verticalOffset: 40
  });
});
