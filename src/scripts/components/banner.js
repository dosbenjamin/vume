const howManyWords = $el => {
  const windowWidth = document.body.offsetWidth
  const elWidth = $el.firstElementChild.offsetWidth
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
  generate () {
    const $words = document.querySelectorAll('.banner__item')
    const $style = document.querySelector('style')
    let style = ''

    $words.forEach($el => {
      const bannerContent = $el.firstElementChild.textContent
      const { elWidth, numberOfEl } = howManyWords($el)

      let span = ''
      for (let i = 0; i < numberOfEl; i++) {
        span += `<span class="banner__el">${bannerContent}</span>`
      }
      style += createStyle(elWidth)

      $el.style.width = elWidth * numberOfEl + 'px'
      $el.innerHTML = span

      $el.firstChild.setAttribute('style', `animation-name: banner-${elWidth}`)
    })
    $style.innerHTML = style
  }
}
