import React from 'react'
import Header from './components/Header'
import MarketingApp from './components/MarketingApp'
import { BrowserRouter } from 'react-router-dom'
import './scss/index.scss'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <MarketingApp />
      </div>
    </BrowserRouter>
  )
}

export default App