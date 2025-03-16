// Toggle Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar-menu');
const navbar = document.querySelector('.navbar'); // Select the navbar

mobileMenu.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  navbar.classList.toggle('active'); // Toggle the active class on the navbar
});


// Toggle Search Input
const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');

searchIcon.addEventListener('click', () => {
  searchInput.classList.toggle('active');
  searchInput.focus();
});




// slider


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.navigation-dots');
let currentIndex = 0;

// Create navigation dots
slides.forEach((slide, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// Function to go to a specific slide
function goToSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
  updateDots();
}

// Function to update the active dot
function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Automatic slider functionality
function autoSlide() {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  }, 3000); // Change slide every 3 seconds
}

autoSlide();



// view all

function toggleLike(icon) {
  icon.classList.toggle('active');
}



// cart


