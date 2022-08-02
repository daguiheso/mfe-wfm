import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import Pricing from './components/Pricing'
import './scss/index.scss'

export default () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route exact path="pricing" element={<Pricing/>} />
        <Route path="/" element={<Landing/>} />
      </Routes>
    </MemoryRouter>
  )
}