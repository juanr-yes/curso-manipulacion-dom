const isIntersecting = (entry) => {
  return entry.isIntersecting;
}

const loadImage = (entry) => {
  const node = entry.target;
  node.src = node.dataset.src;
  observer.unobserve(node);
}

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage)
})

export const registerImage = (image) => {
  observer.observe(image);
}