import { boda } from '../data/boda'
import Reveal from './Reveal'
import Icono from './Iconos'
import Divisor from './Divisor'

export default function Mensaje() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-8 px-8 py-20 text-center">
      <Reveal v="zoom"><Icono nombre="anillos" className="h-20 w-20 text-oro" trazo={0.8} /></Reveal>
      <Reveal><h2 className="font-titulo text-5xl leading-tight text-oro">NUESTRA<br />BODA</h2></Reveal>
      <Reveal delay={150}><p className="text-2xl leading-relaxed italic">{boda.frase}</p></Reveal>
      <Reveal delay={300} className="w-full"><Divisor /></Reveal>
    </section>
  )
}
