 export function smoothScroll(e, target = null) {
   e.preventDefault()

   let element;

   if (target !== null) {
      element = document.querySelector(target)
   } else {
    const section = e.target.getAttribute('href')
    element = document.querySelector(section)
   }

   element.scrollIntoView({
    behavior: 'smooth',
  })
}