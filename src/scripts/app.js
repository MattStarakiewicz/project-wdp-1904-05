import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

const updateNav = info => {
  for (let i = 0; i < info.navItems.length; i++) {
    info.navItems[i].classList.toggle('tns-nav-hidden', i >= info.pages);
  }
};

var slider = tns({
  container: '#new-furnitures-products',
  items: 1,
  center: true,
  slideBy: 'page',
  controls: false,
  navContainer: '#new-furnitures-dots',
  speed: 400,
  loop: false,
  mouseDrag: true,
  onInit: updateNav,
  responsive: {
    640: {
      center: false,
      items: 2
    },
    900: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});

slider.events.on('newBreakpointStart', updateNav);
slider.events.on('newBreakpointEnd', updateNav);
