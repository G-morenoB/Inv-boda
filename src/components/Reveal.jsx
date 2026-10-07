import { useEffect, useRef, useState } from 'react'

// Envuelve cualquier elemento para animarlo al entrar en pantalla.
// v: 'up' | 'left' | 'right' | 'zoom' | 'clip'
export default function Reveal({ as: Tag = 'div', v = 'up', delay = 0, className = '', children }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); io.disconnect() }
    }, { threshold: 0.15 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} data-v={v} style={{ '--d': `${delay}ms` }} className={`reveal ${on ? 'on' : ''} ${className}`}>
      {children}
    </Tag>
  )
}
