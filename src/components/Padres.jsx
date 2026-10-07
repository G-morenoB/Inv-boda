import { boda } from '../data/boda'
import Reveal from './Reveal'
import Divisor from './Divisor'

function Bloque({ titulo, nombres, v }) {
  return (
    <Reveal v={v} className="flex flex-col items-center gap-3">
      {titulo && <p className="max-w-xs text-xl italic">{titulo}</p>}
      {nombres.map((n) => <p key={n} className="font-titulo text-xl tracking-wide text-oro">{n}</p>)}
    </Reveal>
  )
}

export default function Padres() {
  const { padres, padrinos } = boda
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-10 px-8 py-20 text-center">
      <Bloque {...padres[0]} v="left" />
      <Bloque {...padres[1]} v="right" />
      <Divisor />
      <Bloque {...padrinos} v="up" />
      <Reveal delay={200}><p className="text-2xl italic">Tenemos el honor de invitarlos a nuestro enlace matrimonial.</p></Reveal>
    </section>
  )
}
