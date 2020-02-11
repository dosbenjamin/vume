import banner from '../components/banner'

export default {
  init () {
    const $words = document.querySelectorAll('.banner__item')
    document.addEventListener('load', () => {
      banner.generate($words)
    })
    window.addEventListener('resize', () => {
      banner.generate($words)
    })
  }
}
