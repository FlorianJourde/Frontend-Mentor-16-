let burgerIcon = document.getElementById('burger-icon');
let burgerMenu = document.getElementById('burger-menu');
let details = document.querySelectorAll('details');

burgerIcon.addEventListener('click', function() {
  burgerMenu.classList.toggle('active');
})

details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

window.addEventListener('resize', function() {
  if (window.matchMedia("(min-width: 600px)").matches) {
    burgerMenu.classList.remove('active');
  }
})
