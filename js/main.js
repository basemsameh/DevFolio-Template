// Auto Writing in Home
let typed = new Typed('.typing', {
  strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
  typeSpeed: 150,
  loop: true
});

// Up Button
let upBtn = document.querySelector('.up-btn');

window.onscroll = () => {
  if (window.scrollY >= 200) {
    upBtn.style.display = 'initial';
    upBtn.onclick = () => { window.scrollTo(0, 0) }
  } else {
    upBtn.style.display = 'none';
  }
}

// Skills Progress
let progress = document.querySelectorAll(".progress");
let layer = document.querySelectorAll(".progress .layer");
let navbarLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link");

window.onscroll = () => {
  if (window.scrollY >= 0) {
    active(navbarLinks[0]);
  }
  if (window.scrollY >= 400) {
    showEle(document.querySelector('#about'));
    active(navbarLinks[1]);
  }
  if (window.scrollY >= 800) {
    layer.forEach((e, index) => {
      e.style.width = `${progress[index].getAttribute('data-prog')}%`;
    })
  }
  if (window.scrollY >= 1400) {
    showEle(document.querySelector('.resume'));
  }
  if (window.scrollY >= 2600) {
    showEle(document.querySelector('.services'));
    active(navbarLinks[2]);
  }
  if (window.scrollY >= 3500) {
    showEle(document.querySelector('.counter'));
  }
  if (window.scrollY >= 4000) {
    showEle(document.querySelector('.portfolio'));
    active(navbarLinks[3]);
  }
  if (window.scrollY >= 5600) {
    showEle(document.querySelector('.pricing'));
  }
  if (window.scrollY >= 6600) {
    showEle(document.querySelector('.testimonials'));
  }
  if (window.scrollY >= 7200) {
    showEle(document.querySelector('.contact'));
    active(navbarLinks[5]);
  }
}

// Questions Collapse
let collapseBtn = document.querySelectorAll(".pricing ol li button");
let arrowDir = document.querySelectorAll(".pricing ol li button i");

collapseBtn.forEach((e, index) => {
  e.onclick = () => {
    if (arrowDir[index].classList.contains("rotate")) {
      arrowDir[index].classList.remove("rotate");
      e.style.color = "var(--black)";
    } else {
      arrowDir[index].classList.add("rotate");
      e.style.color = "var(--main-color)";
    }
  }
})

function showEle(element) {
  element.classList.add("show");
}

function active(element) {
  navbarLinks.forEach(e => { e.classList.remove('active') })
  element.classList.add("active");
}