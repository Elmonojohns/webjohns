// toggle icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
// scroll active
let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let heigth = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + heigth) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  }); 

  // sticky navbar
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // quitar menu cuando se desplaza
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// circle skill
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor(dots*marked/100);
  var points = "";
  var rotate = 360 / dots;

  for(let i = 0 ; i < dots ; i++){
    points +=  `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div> `;
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll('.points');
  for (let i = 0; i < percent; i++) {
      pointsMarked[i].classList.add('marked');
  }
});

// portafolio mix
var mixer = mixitup('.portafolio-container');

// scroll reveal
ScrollReveal({ 
  // reset: true, 
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skill-rigth, .services-container, .portafolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .filter-buttons1, .skill-left, .services1-container1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .footer, .about-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text',{
  strings: ['Responsivas','Personalizadas', 'Profesionales', 'Optimizadas "SEO"', 'Landing Page','Onepage', 'E-commerce', 'Institucional', 'Blog ', 'Mucho más...'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});