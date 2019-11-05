const $banners = document.querySelectorAll('.section:first-child .banner__item');

export default {
  start () {
    bannerSize($banners);
  }
};

const bannerSize = $elList => {
  const windowWidth = document.body.offsetWidth;
  $elList.forEach($el => {
    const elWidth = $el.offsetWidth;
    const needed = Math.round(windowWidth / elWidth) + 10;
    const bannerContent = $el.textContent;

    for (let i = 0; i < needed; i++) {
      const $span = document.createElement('span');
      $span.textContent = bannerContent;
      $el.append($span);
    };
  });
};
