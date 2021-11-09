let burgerIcon = document.getElementById('burger-icon');
let burgerMenu = document.getElementById('burger-menu');
let details = document.querySelectorAll('details');

burgerIcon.addEventListener('click', function() {
  burgerMenu.classList.toggle('active');
  burgerIcon.children[0].style.opacity = 0;

  if (burgerMenu.classList.contains('active')) {
    burgerIcon.children[0].addEventListener('webkitTransitionEnd', function() {
      burgerIcon.children[0].src = "images/icon-close.svg"
      burgerIcon.children[0].style.opacity = 1
    });
  } else {
    burgerIcon.children[0].addEventListener('webkitTransitionEnd', function() {
      burgerIcon.children[0].src = "images/icon-hamburger.svg";
      burgerIcon.children[0].style.opacity = 1
    });
  }
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
