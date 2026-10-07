import { useState } from 'react'
import { boda } from '../data/boda'
import Reveal from './Reveal'
import Titulo from './Titulo'

export default function Confirmacion() {
  const [nombre, setNombre] = useState('')
  const [error, setError] = useState(false)

  const enviar = () => {
    if (!nombre.trim()) return setError(true)
    const msg = `Hola, soy ${nombre.trim()} y confirmo mi asistencia a la boda de ${boda.novios[0]} y ${boda.novios[1]}.`
    window.open(`https://wa.me/${boda.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section className="mx-auto flex max-w-md flex-col items-center gap-5 px-8 py-16 text-center">
      <Titulo icono="chat">Confirmación<br />de asistencia</Titulo>
      <Reveal delay={150}><p className="text-xl leading-relaxed">{boda.confirmacion}</p></Reveal>
      <Reveal delay={250} className="flex w-full flex-col gap-3">
        <label htmlFor="nombre" className="font-titulo text-sm tracking-[0.2em] text-oro">Tu nombre</label>
        <input id="nombre" value={nombre} onChange={(e) => { setNombre(e.target.value); setError(false) }} placeholder="Nombre completo" className="border border-oro/50 bg-white/70 px-4 py-3 text-center outline-none focus:border-oro" />
        {error && <p role="alert" className="text-sm text-red-800">Escribe tu nombre para poder confirmar.</p>}
        <button onClick={enviar} className="cursor-pointer bg-oro px-4 py-3 font-titulo text-sm tracking-[0.18em] text-white transition hover:bg-oro-claro">Confirmar por WhatsApp</button>
      </Reveal>
    </section>
  )
}
