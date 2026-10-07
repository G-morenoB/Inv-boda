import Reveal from './Reveal'
import Titulo from './Titulo'

// Se usa para Ceremonia y Recepción. Los datos vienen de data/boda.js
export default function Lugar({ datos }) {
  const q = encodeURIComponent(datos.mapa)
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-6 px-6 py-14 text-center">
      <Titulo icono={datos.icono}>{datos.titulo}</Titulo>
      <Reveal delay={100} className="flex flex-col items-center gap-2">
        <p className="font-titulo text-lg tracking-widest text-oro">{datos.hora}</p>
        <p className="font-titulo text-xl font-semibold">{datos.lugar}</p>
        <p className="max-w-sm">{datos.direccion}</p>
      </Reveal>
      <Reveal v="zoom" className="w-full overflow-hidden border border-oro/40">
        <iframe title={`Mapa de ${datos.titulo}`} loading="lazy" className="h-64 w-full grayscale-[30%]" src={`https://maps.google.com/maps?q=${q}&output=embed`} />
      </Reveal>
      <Reveal>
        <a href={`https://www.google.com/maps/search/?api=1&query=${q}`} target="_blank" rel="noreferrer" className="inline-block border border-oro px-6 py-2 font-titulo text-sm tracking-[0.15em] text-oro transition hover:bg-oro hover:text-white">
          Ver en Google Maps
        </a>
      </Reveal>
    </section>
  )
}
