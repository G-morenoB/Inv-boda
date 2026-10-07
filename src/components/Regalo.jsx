import { boda } from '../data/boda'
import Reveal from './Reveal'
import Titulo from './Titulo'

export default function Regalo() {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center gap-5 px-8 py-16 text-center">
      <Titulo icono="regalo">Sugerencia<br />de regalo</Titulo>
      <Reveal delay={150}><p className="text-xl leading-relaxed">{boda.regalo}</p></Reveal>
    </section>
  )
}
