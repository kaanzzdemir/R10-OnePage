$(function () {
  $('.fade').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    appendArrows:'.carousel-buttons-wrapper',
    prevArrow: '<a href="" class="carousel-control-geri" role="button" data-slide="prev"> <img src="img/slide-arrow.png" class= "img-fluid"></a>',
    nextArrow: '<a href="" class="carousel-control-ileri" role="button" data-slide="prev"> <img src="img/slide-arrow.png" class= "img-fluid"></a>'
    });
});

const darkModeToggle = document.getElementById('checkbox');

darkModeToggle.addEventListener('change', function () {
  if (darkModeToggle.checked) {
    enableDarkMode();
    localStorage.setItem('darkModeEnabled', 'true');
  } else {
    disableDarkMode();
    localStorage.setItem('darkModeEnabled', 'false');
  }
});

// Sayfa yüklendiğinde tercihi kontrol et
document.addEventListener('DOMContentLoaded', function () {
  const darkModeEnabled = localStorage.getItem('darkModeEnabled');

  if (darkModeEnabled === 'true') {
    enableDarkMode();
    darkModeToggle.checked = true;
  }
});

function enableDarkMode() {
  document.body.classList.add('body-light');
}

function disableDarkMode() {
  document.body.classList.remove('body-light');
}

function openCarousel() {
  var menu = document.getElementById("carousel-menu");
  menu.classList.toggle("show");
}
