// Importar extensiones de Jest para DOM
import '@testing-library/jest-dom'

// Mock para matchMedia que no está disponible en JSDOM
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  }
}

// Mock para IntersectionObserver que no está disponible en JSDOM
class IntersectionObserver {
  constructor(callback) {
    this.callback = callback
  }
  observe() { return null }
  unobserve() { return null }
  disconnect() { return null }
}

window.IntersectionObserver = IntersectionObserver

// Mock para requestAnimationFrame
global.requestAnimationFrame = function(callback) {
  return setTimeout(callback, 0)
}

global.cancelAnimationFrame = function(id) {
  clearTimeout(id)
}

