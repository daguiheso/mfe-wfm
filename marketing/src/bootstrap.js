// use var global here

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const mount = (el, { onNavigate }) => {

  window.onNavigate = onNavigate
  const root = createRoot(el)
  root.render(<App />)

  return {
    onParentNavigate() {
      console.log('Container just navigated')
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };