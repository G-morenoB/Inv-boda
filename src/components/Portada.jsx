import { useEffect, useRef, useState } from 'react'
import { boda } from '../data/boda'
import Reveal from './Reveal'

function useCuenta(fecha) {
  const calc = () => {
    const d = Math.max(0, new Date(fecha) - Date.now())
    return { Días: Math.floor(d / 864e5), Horas: Math.floor(d / 36e5) % 24, Minutos: Math.floor(d / 6e4) % 60, Segundos: Math.floor(d / 1e3) % 60 }
  }
  const [t, setT] = useState(calc)
  useEffect(() => { const i = setInterval(() => setT(calc()), 1000); return () => clearInterval(i) }, [fecha])
  return t
}

export default function Portada() {
  const img = useRef(null)
  const cuenta = useCuenta(boda.fecha)
  const f = new Date(boda.fecha)

  // Parallax suave de la foto
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const onScroll = () => { if (img.current) img.current.style.transform = `translateY(${scrollY * 0.3}px) scale(1.1)` }
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-black px-6 py-20 text-center text-white">
      <img ref={img} src={boda.fotos.portada} alt="" className="absolute inset-0 h-full w-full scale-110 object-cover opacity-70" />
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/10 to-black/70" />
      <div className="relative flex flex-col items-center gap-5">
        <Reveal delay={200}><p className="font-titulo text-2xl tracking-[0.25em]">NUESTRA BODA</p></Reveal>
        <Reveal delay={600} v="zoom"><h1 className="font-script text-7xl leading-none sm:text-8xl">{boda.novios[0]} <span className="text-5xl">y</span> {boda.novios[1]}</h1></Reveal>
        <Reveal delay={1000} className="mt-6 flex flex-col items-center gap-1 font-titulo tracking-[0.2em]">
          <span className="text-xl">{f.toLocaleDateString('es-MX', { month: 'long' }).toUpperCase()}</span>
          <span className="flex items-center gap-4 text-lg">
            <span className="border-y border-oro-claro py-1">{boda.diaTexto.toUpperCase()}</span>
            <span className="text-6xl leading-none">{f.getDate()}</span>
            <span className="border-y border-oro-claro py-1">{boda.ceremonia.hora}</span>
          </span>
          <span className="text-xl">{f.getFullYear()}</span>
        </Reveal>
        <Reveal delay={1400} className="mt-8 grid grid-cols-4 gap-3">
          {Object.entries(cuenta).map(([k, v]) => (
            <div key={k} className="w-16 border border-oro-claro/60 bg-black/30 py-3 backdrop-blur-sm sm:w-20">
              <div className="font-titulo text-3xl">{String(v).padStart(2, '0')}</div>
              <div className="text-xs tracking-widest text-oro-claro">{k}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </header>
  )
}
