const windowWidth = document.body.offsetWidth

const howManyWords = $el => {
  const elWidth = $el.offsetWidth
  const numberOfEl = Math.round(windowWidth / elWidth) + 3
  return { elWidth, numberOfEl }
}

const createStyle = width => {
  return `
    @keyframes banner-${width} {
      from {
        margin-left: -${width}px;
      }
    }
  `
}

export default {
  generate ($words) {
    const $style = document.querySelector('style')

    let style = ''

    $words.forEach($el => {
      const bannerContent = $el.firstElementChild.outerHTML
      const { elWidth, numberOfEl } = howManyWords($el.firstElementChild)

      let span = ''
      for (let i = 0; i < numberOfEl; i++) {
        span += bannerContent
        style += createStyle(elWidth)
      }

      $el.innerHTML = span

      const $firstEl = $el.querySelector('*:first-child')
      $firstEl.classList.add('banner__el')
      $firstEl.setAttribute('style', `animation-name: banner-${elWidth}`)
    })
    $style.innerHTML = style
  }
}
