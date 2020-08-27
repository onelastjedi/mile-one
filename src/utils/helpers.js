export const matchMedia = (r1, r2) => {
  // Desktop
  if (window.matchMedia('(min-width: 768px)').matches) {
    return r1
  }

  // Mobile
  if (window.matchMedia('(max-width: 768px)').matches) {
    return r2
  }
}
