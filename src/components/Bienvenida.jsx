import { useState } from 'react'
import { boda } from '../data/boda'

const destellos = Array.from({ length: 22 }, (_, i) => ({
  left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%`,
  size: 2 + (i % 3), delay: `${(i % 7) * 0.7}s`,
}))

export default function Bienvenida({ onAbrir }) {
  const [saliendo, setSaliendo] = useState(false)
  const [fuera, setFuera] = useState(false)
  if (fuera) return null

  const abrir = () => {
    onAbrir()
    setSaliendo(true)
    setTimeout(() => setFuera(true), 1100)
  }

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${saliendo ? 'pointer-events-none opacity-0' : ''}`}>
      <img src={boda.fotos.bienvenida} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/70" />
      {destellos.map((d, i) => (
        <span key={i} className="destello" style={{ left: d.left, top: d.top, width: d.size, height: d.size, animationDelay: d.delay }} />
      ))}
      <div className="relative flex flex-col items-center gap-10 px-6 text-center">
        <h1 className="bg-linear-to-b from-oro-claro to-oro bg-clip-text font-titulo text-4xl tracking-[0.08em] text-transparent sm:text-6xl">BIENVENIDOS</h1>
        <p className="font-script text-4xl text-oro-claro">{boda.novios[0]} y {boda.novios[1]}</p>
        <button onClick={abrir} className="cursor-pointer rounded-sm border border-oro-claro/70 bg-marfil px-9 py-3 font-titulo text-sm tracking-[0.2em] text-oro shadow-lg transition hover:bg-white">
          Abrir invitación
        </button>
      </div>
    </div>
  )
}
