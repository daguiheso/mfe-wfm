import { mount } from 'marketing/MarketingApp'
import React, { useRef, useEffect } from 'react'

const MarketingApp = () => {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current, {
      onNavigate: (nextPathname) => {
        if (window.location.pathname !== nextPathname) history.pushState(null, null, nextPathname)
      }
    })
  })

  return <section className='' ref={ref} />
}

export default MarketingApp