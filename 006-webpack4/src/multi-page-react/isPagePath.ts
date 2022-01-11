const isPagePath = (fn: () => void) => {
  if ((/page[A-Z]/).test(window.location.pathname)) {
    fn()
  }
}

export default isPagePath