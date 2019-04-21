import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

///  start import into js all images from /images/pictures
import import1 from '../images/pictures/*.*';
var images = {};
for (var key in import1) {
  images[key] = import1[key][Object.keys(import1[key])[0]];
}
///  end import into js all images from /images/pictures

///  start app-hot-deals-slider
/* todo:
?maybe change time in array format to UTC format?
*/

// select images to be in slider
var items = [
  {
    img: 'i_9',
    price: 950,
    discount: 990,
    name: 'meh5',
    stars: 4,
    // time: [25, 10, 45, 30] // format dd-hrs-min-sec
    date: new Date('2019/04/22 13:00:00') // date to end of deal format YYYY/MM/DD HH/MM/SS
  },
  {
    img: 'i_8',
    price: 850,
    discount: 890,
    name: 'meh6',
    stars: 3,
    date: new Date('2019/05/28 13:00:00')
  },
  {
    img: 'i_7',
    price: 750,
    discount: 790,
    name: 'meh7',
    stars: 2,
    date: new Date('2019/05/27 13:00:00')
  }
];
var dom = [];
window.dom = dom;

dom.slider = document.getElementsByClassName('app-hot-deals-slider')[0];
dom.price = document.querySelector('.section-promoted .promoted-price').children[1];
dom.discount = document.querySelector('.section-promoted .promoted-price').children[0];
dom.promo_timer = document.querySelector('.section-promoted .promo-timer');
dom.product_name = document.querySelector('.section-promoted .product-name');
dom.stars = document.querySelector('.section-promoted .stars');

for (let i = 0; i < dom.slider.childElementCount; i++) {
  let elm = dom.slider.children[i];
  elm.style = "background-image: url('" + images[items[i].img] + "')";
}

var sliderHotDeals = tns({
  container: dom.slider,
  items: 1,
  autoplay: true,
  autoplayHoverPause: true, // bugged in 2.9.1 if you grab and slide it mess up
  autoplayButtonOutput: false,
  controls: false,
  navContainer: '#app-hot-deals-slider-navbar',
  autoplayTimeout: 3000,
  loop: true,
  rewind: true
});

sliderHotDeals.events.on('indexChanged', function () {
  updateHotdealsDetails(sliderHotDeals.getInfo().index);
});

function updateHotdealsDetails (index) {
  dom.price.innerHTML = '$ ' + items[index].price;
  dom.discount.innerHTML = '$ ' + items[index].discount;
  dom.product_name.innerHTML = items[index].name;

  // update stars
  let i = 0;
  for (i; i < items[index].stars; i++) {
    dom.stars.children[i].className = 'full';
  }
  for (i; i < dom.stars.childElementCount; i++) {
    dom.stars.children[i].className = '';
  }
}

updateHotdealsDetails(0); // force update

setInterval(function () {
  // update time to end of deal
  let diff = items[sliderHotDeals.getInfo().index].date - new Date().getTime(); // item date - current time

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  dom.promo_timer.children[0].children[0].innerHTML = days;
  dom.promo_timer.children[1].children[0].innerHTML = hours;
  dom.promo_timer.children[2].children[0].innerHTML = minutes;
  dom.promo_timer.children[3].children[0].innerHTML = seconds;

  // console.log(curDate,itemDate,days,hours,minutes,seconds)
}, 1000);

///   end app-hot-deals-slider
