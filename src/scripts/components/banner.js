export default {
  generate ($words) {
    $words.forEach($el => {
      const windowWidth = document.body.offsetWidth
      const elWidth = $el.firstElementChild.offsetWidth
      const numberOfEl = Math.round(windowWidth / elWidth) + 1
      const bannerContent = $el.firstElementChild.textContent
      let template = ''

      for (let i = 0; i < numberOfEl; i++) {
        template += `<span>${bannerContent}</span>`
      };

      $el.innerHTML = template
    })
  }
}
