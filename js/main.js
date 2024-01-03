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
  const videoFrame = document.getElementById('videoFrame');
  const processVideo = document.querySelector('.video');
  const videoUrl = 'https://www.youtube.com/embed/BNbPsiCGQzw?si=oCs2IsCeB1bp0cYh';

  window.open(videoUrl, '_blank');
  videoFrame.style.display = 'block';
}
