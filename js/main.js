// burger-menu
document.querySelector(".open-menu-js").addEventListener("click", function() {
  var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
  mobileMenuOverlay.classList.add("open");
  document.body.style.overflowX = "hidden";
});

document.querySelector(".mobileMenu-close").addEventListener("click", function() {
  var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
  mobileMenuOverlay.classList.remove("open");
  document.body.style.overflowX = "auto";
});

function playVideo() {
  // Получаем элементы
  const videoFrame = document.getElementById('videoFrame');
  const processVideo = document.querySelector('.process-video');

  // Скрываем фоновое изображение с плавным затухание

  // Извлекаем URL видео
  const videoUrl = 'https://www.youtube.com/embed/BNbPsiCGQzw?si=oCs2IsCeB1bp0cYh';

  // Открываем новое окно или вкладку браузера с URL видео на YouTube
  window.open(videoUrl, '_blank');

  // Отображаем iframe с видео
  videoFrame.style.display = 'block';
}