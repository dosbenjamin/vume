import banner from '../components/banner'
// import liquid from '../components/liquid';

const $words = document.querySelectorAll('.section:first-child .banner__item')

export default {
  init () {
    banner.generate($words)
    window.addEventListener('resize', () => {
      banner.generate($words)
    })
  }
}
