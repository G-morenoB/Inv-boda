import { boda } from '../data/boda'
import Reveal from './Reveal'

export default function Despedida() {
  return (
    <footer className="flex flex-col items-center gap-4 px-6 pt-10 pb-24 text-center">
      <Reveal><p className="font-script text-6xl leading-tight text-oro">Muchas gracias<br />por acompañarnos</p></Reveal>
      <Reveal delay={200}><p className="font-titulo tracking-[0.2em]">{boda.novios[0]} y {boda.novios[1]}</p></Reveal>
    </footer>
  )
}
