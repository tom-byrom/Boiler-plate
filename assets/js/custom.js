/* Smooth Scroll */

$(document).ready(function () {

  $('body').smoothScroll({
    offset: 0,
    speed: 400,
    easing: 'swing',
    delegateSelector: 'a'
  });
});



/* Fancy Box 
    
    $("[data-fancybox]").fancybox({
		loop: true,
        keyboard: true,
        arrows : true,
        buttons : [
        'slideShow',
        'fullScreen',
        //thumbs',
        //share',
        //'download',
        //'zoom',
        'close'],

	});

*/

/* Lazy Load Images */

$(function () {
  $('.lazy').Lazy({
    effect: 'fadeIn'

  });
});


/* Slick Slider */

$(document).ready(function () {
  $('.home_search_slider').slick({
    autoplay: false,
    lazyLoad: 'ondemand',
    infinite: false,
    fade: true,
    prevArrow: $('.prev-hero'),
    nextArrow: $('.next-hero')
  });
});


// Set preferred slidesToShow
var slidesToShowXL = 4;
var childElementsXL = $('.home_featured_slick_slider').children().length;
// Check if we can fulfill the preferred slidesToShow
if (slidesToShowXL > (childElementsXL - 1)) {
  // Otherwise, make slidesToShow the number of slides - 1
  // Has to be -1 otherwise there is nothing to scroll for - all the slides would already be visible
  slidesToShowXL = (childElementsXL);
}

// Set preferred slidesToShow
var slidesToShowL = 3;
var childElementsL = $('.home_featured_slick_slider').children().length;
// Check if we can fulfill the preferred slidesToShow
if (slidesToShowL > (childElementsL - 1)) {
  // Otherwise, make slidesToShow the number of slides - 1
  // Has to be -1 otherwise there is nothing to scroll for - all the slides would already be visible
  slidesToShowL = (childElementsL);
}

// Set preferred slidesToShow
var slidesToShowMD = 2;
var childElementsMD = $('.home_featured_slick_slider').children().length;
// Check if we can fulfill the preferred slidesToShow
if (slidesToShowMD > (childElementsMD - 1)) {
  // Otherwise, make slidesToShow the number of slides - 1
  // Has to be -1 otherwise there is nothing to scroll for - all the slides would already be visible
  slidesToShowMD = (childElementsMD);
}


$(document).ready(function () {
  $('.home_featured_slick_slider').slick({
    prevArrow: $('.prev-caravan'),
    nextArrow: $('.next-caravan'),
    responsive: [

      {
        breakpoint: 50000,
        settings: {
          lazyLoad: 'ondemand',
          slidesToShow: slidesToShowXL,
          slidesToScroll: 4,
          infinite: false,
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          lazyLoad: 'ondemand',
          slidesToShow: slidesToShowL,
          slidesToScroll: 3,
          infinite: false,
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          lazyLoad: 'ondemand',
          slidesToShow: slidesToShowMD,
          slidesToScroll: 2,
          infinite: false,
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          lazyLoad: 'ondemand',
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: true,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });
});


$(document).ready(function () {
  $('.bottom_links_slick').slick({
    responsive: [

      {
        breakpoint: 50000,
        settings: {
          slidesToShow: 4,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          lazyLoad: 'ondemand',
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          lazyLoad: 'ondemand',
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          lazyLoad: 'ondemand',
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: false,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });
});


$(document).ready(function () {
  $('.caravan_brands_slick').slick({

    responsive: [

      {
        breakpoint: 50000,
        settings: "unslick"
      },
      {
        breakpoint: 1200,
        settings: {
          lazyLoad: 'ondemand',
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: false,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          lazyLoad: 'ondemand',
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          lazyLoad: 'ondemand',
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          infinite: false,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });
});



// Unslicks and reslicks responsively 
$(window).on('resize orientationchange', function () {
  var mySlider = $('.caravan_brands_slick');

  // without this check, all kinds of weird errors happen, and the slider doesn't really work
  if (!mySlider.hasClass('slick-initialized')) {
    mySlider.slick({
      responsive: [

        {
          breakpoint: 50000,
          settings: "unslick"

        },
        {
          breakpoint: 1200,
          settings: {
            lazyLoad: 'ondemand',
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: false,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            lazyLoad: 'ondemand',
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 576,
          settings: {
            lazyLoad: 'ondemand',
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            infinite: false,
            dots: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

    });
  }
});



$('.caravan_brands_slick').on('destroy', function (event, slick) {

  $('.brands_img').attr("src", $('brands_img').attr("data-lazy"));
  $('.brands_img').removeAttr("data-lazy");
  $('.brands_img').removeClass('slick-loading');

});

// Lazy Loading on Hero Slides hack 

$(".home_search_slider").on("lazyLoaded", function (e, slick, image, imageSource) {
  parentSlide = $(image).parent(".slick-slide");
  imageSource.src = image.attr("src"); //get source
  parentSlide.css("background-image", 'url("' + imageSource + '")').addClass("loaded"); //replace with background instead
  image.remove(); // remove source
});



// Caravan Gallery 

$('.caravan_gallery_large').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.caravan_gallery_small'
});
$('.caravan_gallery_small').slick({
  prevArrow: $('.prev-caravan-small'),
  nextArrow: $('.next-caravan-small'),
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.caravan_gallery_large',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});





// Google maps

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 51.236447,
      lng: -3.002586
    },
    zoom: 12,
    disableDefaultUI: true,
    scrollwheel: false,
    zoomControl: true,
    styles: [{
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [{
          "saturation": "-100"
        }]
      },
      {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
            "saturation": -100
          },
          {
            "lightness": 65
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
            "saturation": -100
          },
          {
            "lightness": "50"
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
          "saturation": "-100"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
          "visibility": "simplified"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [{
          "lightness": "30"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [{
          "lightness": "40"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
            "saturation": -100
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "hue": "#ffff00"
          },
          {
            "lightness": -25
          },
          {
            "saturation": -97
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [{
            "lightness": -25
          },
          {
            "saturation": -100
          }
        ]
      }
    ]
  });

  var image =
    '/assets/images/map-marker.svg';
  var caravanmarker = new google.maps.Marker({
    position: {
      lat: 51.236447,
      lng: -2.952681
    },
    map: map,
    icon: image
  });
}


// Dropdown for shar links

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}