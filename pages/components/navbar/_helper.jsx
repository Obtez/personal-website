 export function smoothScroll(e) {
   e.preventDefault()
  const section = e.target.getAttribute('href')

  const element = document.querySelector(section)
  element.scrollIntoView({
    behavior: 'smooth',
  })
}