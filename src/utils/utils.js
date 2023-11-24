/* Брейкпоинты */
export const screens = {
  mobile: '480px',
  mobileBig: '576px',
  tablet: '768px',
  tabletBig: '992px',
  desktopSmall: '1024px',
  desktop: '1200px',
  desktopBig: '1400px'
}

/* Блокировка скролла */
export const scrollController = {
  scrollPosition: 0,
  paddingOffset: 0,
  disabledScroll() {
    scrollController.scrollPosition = window.scrollY
    scrollController.paddingOffset = window.innerWidth - document.documentElement.clientWidth
    document.body.classList.add('lock')
    document.body.style.cssText = `
      top: -${scrollController.scrollPosition}px;
      padding-right: ${scrollController.paddingOffset}px;
    `
  },
  enabledScroll() {
    document.body.classList.remove('lock')
    document.body.style.cssText = `
      padding-right: '0px';
    `
    window.scroll({
      top: scrollController.scrollPosition
    })
  }

}
