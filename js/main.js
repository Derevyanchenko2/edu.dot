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

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.scroll-link, .mobileMenu-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const offset = document.querySelector('.header').offsetHeight;

      window.scrollTo({
        top: targetElement?.offsetTop - offset,
        behavior: 'smooth'
      });

      document.querySelector('.mobileMenu-close').click();
    });
  });
});