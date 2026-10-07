import { boda } from '../data/boda'
import Reveal from './Reveal'
import Titulo from './Titulo'

export default function Vestimenta() {
  return (
    <section className="flex flex-col items-center gap-4 px-6 py-16 text-center">
      <Titulo icono="vestimenta">Código de<br />vestimenta</Titulo>
      <Reveal delay={150}><p className="font-titulo text-xl tracking-[0.3em]">{boda.vestimenta.toUpperCase()}</p></Reveal>
    </section>
  )
}
