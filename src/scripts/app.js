import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

///  start import into js all images from /images/pictures
import import1 from '../images/pictures/*.*';
var images = {};
for (var key in import1) {
  images[key] = import1[key][Object.keys(import1[key])[0]];
}
///  end import into js all images from /images/pictures

///  start app-hot-deals-slider

// set data to be in slider
var items1 = [
  {
    img: 'i_9',
    price: 950,
    discount: 990,
    name: 'meh5',
    stars: 4,
    date: new Date('2019/08/22 13:00:00') // date to end of deal format YYYY/MM/DD HH/MM/SS
  },
  {
    img: 'i_8',
    price: 850,
    discount: 890,
    name: 'meh6',
    stars: 3,
    date: new Date('2019/09/28 13:30:00')
  },
  {
    img: 'i_7',
    price: 750,
    discount: 790,
    name: 'meh7',
    stars: 2,
    date: new Date('2019/10/27 14:00:00')
  }
];
var dom = [];
window.dom = dom;

dom.slider1 = document.getElementsByClassName('app-hot-deals-slider')[0];
dom.navbar1 = document.querySelector('.section-promoted .app-hot-deals-slider-navbar');
dom.price = document.querySelector('.section-promoted .promoted-price').children[1];
dom.discount = document.querySelector('.section-promoted .promoted-price').children[0];
dom.promo_timer = document.querySelector('.section-promoted .promo-timer');
dom.product_name = document.querySelector('.section-promoted .product-name');
dom.stars = document.querySelector('.section-promoted .stars');

for (let i = 0; i < items1.length; i++) {
  let elm = document.createElement('div');
  elm.style = "background-image: url('" + images[items1[i].img] + "')";
  dom.slider1.appendChild(elm);
  dom.navbar1.appendChild(document.createElement('li'));
}

var sliderHotDeals = tns({
  container: dom.slider1,
  items: 1,
  autoplay: true,
  // autoplayHoverPause: true,
  autoplayButtonOutput: false,
  controls: false,
  navContainer: dom.navbar1,
  autoplayTimeout: 3000,
  loop: true,
  rewind: true
});

sliderHotDeals.events.on('indexChanged', function () {
  updateHotdealsDetails(sliderHotDeals.getInfo().index);
});

updateHotdealsDetails(0); // force update
function updateHotdealsDetails (index) {
  dom.price.innerHTML = '$ ' + items1[index].price;
  dom.discount.innerHTML = '$ ' + items1[index].discount;
  dom.product_name.innerHTML = items1[index].name;

  // update stars
  let i = 0;
  for (i; i < items1[index].stars; i++) {
    dom.stars.children[i].className = 'full';
  }
  for (i; i < dom.stars.childElementCount; i++) {
    dom.stars.children[i].className = '';
  }
}

setInterval(function () {
  // update time to end of deal
  let diff = items1[sliderHotDeals.getInfo().index].date - new Date().getTime(); // item date - current time

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  dom.promo_timer.children[0].children[0].innerHTML = days;
  dom.promo_timer.children[1].children[0].innerHTML = hours;
  dom.promo_timer.children[2].children[0].innerHTML = minutes;
  dom.promo_timer.children[3].children[0].innerHTML = seconds;
}, 1000);

///   end app-hot-deals-slider

///   start app-promo-banner-slider
var items2 = ['a_1', 'a_2', 'a_3', 'a_4', 'a_5', 'a_6'];

dom.slider2 = document.getElementsByClassName('app-promo-banner-slider')[0];

for (let i = 0; i < items2.length; i++) {
  let elm = document.createElement('div');
  elm.style = "background-image: url('" + images[items2[i]] + "')";
  dom.slider2.appendChild(elm);
}

var sliderPromoBanner; // eslint-disable-line no-unused-vars
sliderPromoBanner = tns({
  container: dom.slider2,
  items: 1,
  nav: false,
  controlsContainer: '.promo-banner .direction-arrows',
  rewind: false
});

///   end app-promo-banner-slider
