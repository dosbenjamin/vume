import anime from 'animejs/lib/anime.es.js';

export default {
  animation () {
    // const htmlHeight = document.body.clientHeight;
    // const liquid = document.querySelector('.liquid');
    // const liquidItem = document.querySelector('.liquid__item');

    // const $guide = document.querySelector('.liquid-position1');

    // liquid.setAttribute('height', `${htmlHeight}px`);

    // const offset = $el => {
    //   const rect = $el.getBoundingClientRect();
    //   const scrollTop =
    //     window.pageYOffset || document.documentElement.scrollTop;
    //   return rect.top + scrollTop;
    // };

    // liquidItem.style.transform = `scale(2) translateY(${offset($guide) / 2}px)`;

    anime({
      targets: '#morph',
      d: [
        {
          value:
            'M355.557 854.666C607.53 1189.78 1139.45 586.986 878.786 333.097C640.175 100.687 0.716614 382.745 355.557 854.666Z'
        },
        {
          value:
            'M382.389 949.81C711.336 1209.78 782.899 662.732 905.618 428.24C1151.3 -41.2034 -158.436 522.387 382.389 949.81Z'
        }
      ],
      easing: 'linear',
      duration: 100000,
      loop: true,
      autoplay: true
    });
  }
};
