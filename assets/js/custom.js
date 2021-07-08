// let main = document.querySelector('main')
// let footer = document.querySelector('footer')
// let carousel = document.querySelector('#carousel')

// var footerHeight = footer.offsetHeight

// init rellax on desktop
if (window.innerWidth >= 992) {
  var rellax = new Rellax('.rellax', {
    center:true
  });
}

function reportWindowSize() {
  rellax.refresh()
}

window.onresize = reportWindowSize




// Calculate screen height and create a css variable on root
document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px');
// document.querySelector(':root').style.setProperty('--footer', footer.offsetHeight + 'px');

// main.style.marginBottom = footerHeight + 'px';

window.addEventListener('resize', () => {
  document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px');
  // document.querySelector(':root').style.setProperty('--footer', footer.offsetHeight + 'px');
  // main.style.marginBottom = footerHeight + 'px';


})


// Hightlight active menu item
function menuActive() {
  var current = location.pathname.split('/')[1];
  if (current === "") return;
  var menuItems = document.querySelectorAll('.nav-link');
  for (var i = 0, len = menuItems.length; i < len; i++) {
    if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
      menuItems[i].classList.add("active");
    }
  }
}

menuActive()


// Get the height of the client
var clientHeight = window.innerHeight



// Toggle the stuidos nav
var scrollPosition = window.scrollY;
let studioNav = document.querySelector('.studio_nav');

if (studioNav) {
  window.addEventListener('scroll', function() {

    scrollPosition = window.scrollY;

    if (scrollPosition >= clientHeight / 2) {
      studioNav.classList.remove('hide_nav');
    } else {
      studioNav.classList.add('hide_nav');
    }
  });
}



// Anchor links nav
let mainNavLinks = document.querySelectorAll(".studio_nav a");
let clientHeightHalf = clientHeight / 2

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY + clientHeightHalf;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});


// Toggle sticky header
window.addEventListener('scroll', function () {
  let header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 0)
})


// Smooth Scroll
const links = document.querySelectorAll(".smoothScroll");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop - 60,
    behavior: "smooth"
  });
}


// Swiper inits

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 16,
  direction: 'vertical',
  mousewheel: true,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    hide: true,
  },
});
var gallerySide = new Swiper('.gallery-side', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});


let swiperFranchises = new Swiper('.swiper-container-franchises', {
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 30,
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: {
    loadPrevNext: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-franchises',
    prevEl: '.swiper-button-prev-franchises',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    640: {
      slidesPerView: 1.05,
      spaceBetween: 15,
      navigation: false,
    }
  }
});





// Hide text on horizontal scroll

function myFunction(x) {
  if (x.matches) { // If media query matches
    swiperFranchises.on('fromEdge', function () {
      let textFadeOut = document.getElementById('fadeOnSlide')
      textFadeOut.classList.add('opacity_0')
    });

    swiperFranchises.on('reachBeginning', function () {
      let textFadeOut = document.getElementById('fadeOnSlide')
      textFadeOut.classList.remove('opacity_0')
    });
  } else {

  }
}

var x = window.matchMedia("(min-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes





function disableScroll() {
  if (window.addEventListener) // older FF
  window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}



// window.addEventListener('scroll', () => {
//     if (window.scrollY >= footerHeight) {
//         carousel.style.zIndex = "-2"
//     }
//     if (window.scrollY <= footerHeight) {
//       carousel.style.zIndex = "unset"
//   }
// })


// if(window.location.href.indexOf('/projects') != -1 ){

//     function openDraw() {
//         let drawOpen = document.querySelectorAll('.open-drawer')
//         for (draw of drawOpen) {
//             draw.addEventListener('click', function(){
//                 const target = draw.closest('.drawer');
//                 if(target.classList.contains('open')){
//                     target.classList.remove('open');
//                 } else {
//                     target.classList.add('open');
//                 }
//             });
//         }
//     }

//     openDraw()

//     let drawer = document.querySelector('#drawer')
//     let carousel = document.querySelector('#carousel')

//     function drawOpen() {
//         if(drawer.classList.contains('open')){
//             target.classList.remove('open');
//         } else {
//             drawer.classList.add('open');
//         }
//     }

//     function openDrawWheel() {
//         carousel.addEventListener('touchstart', drawOpen);
//         carousel.addEventListener('wheel', drawOpen);
//     }

//     openDrawWheel()

// }


// Remove preload

// window.onload = (event) => {
//   var body = document.querySelector('body')
//   body.classList.remove('preload')
// };