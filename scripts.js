document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navUL = document.querySelector('nav ul');

  menuToggle.addEventListener('click', function () {
    navUL.classList.toggle('show');
    menuToggle.classList.toggle('open');
  });

  // Close the dropdown when clicking outside of it
  document.addEventListener('click', function (event) {
    if (!navUL.contains(event.target) && !menuToggle.contains(event.target)) {
      navUL.classList.remove('show');
      menuToggle.classList.remove('open');
    }
  });
});

// Slideshow
const imageUrls = [
  'https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_1280.jpg',
  'https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg',
  'https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256_1280.jpg',
  'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/06/14/21/15/bedroom-3475656_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/08/26/20/30/hotel-1623064_1280.jpg',
];

let currentImageIndex = 0;
const background = document.querySelector('.background');

function changeBackgroundImage() {
  background.style.opacity = 0;
  setTimeout(() => {
    background.style.backgroundImage = `url(${imageUrls[currentImageIndex]})`;
    background.style.opacity = 1;
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
  }, 1000);
}

changeBackgroundImage();
setInterval(changeBackgroundImage, 3000);
