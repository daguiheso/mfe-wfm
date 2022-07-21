import { mount } from 'marketing/MarketingApp'
import React, { useRef, useEffect } from 'react'

const MarketingApp = () => {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current)
  })

  return <section className='' ref={ref} />
}

export default MarketingApp