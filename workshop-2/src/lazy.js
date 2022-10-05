const isIntersecting = (entry) => {
  return entry.isIntersecting;
}

const loadImage = (entry) => {
  const node = entry.target;
  node.src = node.dataset.src;
  observer.unobserve(node);
  loadedCount++;
  console.log(`Solicitudes de carga realizadas: ${requestsCount}. Imagenes cargadas: ${loadedCount}`)
}

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage)
})

export const registerImage = (image) => {
  observer.observe(image);
}