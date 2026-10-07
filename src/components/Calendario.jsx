import { boda } from '../data/boda'
import { descargarICS } from '../lib/calendario'
import Reveal from './Reveal'
import Icono from './Iconos'

const dias = ['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sa']

export default function Calendario() {
  const f = new Date(boda.fecha)
  const inicio = new Date(f.getFullYear(), f.getMonth(), 1).getDay()
  const total = new Date(f.getFullYear(), f.getMonth() + 1, 0).getDate()
  const celdas = [...Array(inicio).fill(null), ...Array.from({ length: total }, (_, i) => i + 1)]

  return (
    <Reveal className="mx-auto max-w-sm px-6 pb-20">
      <div className="border border-oro/40 bg-white/70 p-6 shadow-sm">
        <h3 className="text-center font-titulo text-2xl tracking-[0.2em] text-oro">{f.toLocaleDateString('es-MX', { month: 'long' }).toUpperCase()} {f.getFullYear()}</h3>
        <div className="mt-5 grid grid-cols-7 gap-y-2 text-center">
          {dias.map((d) => <span key={d} className="font-titulo text-sm text-oro">{d}</span>)}
          {celdas.map((d, i) => (
            <span key={i} className="relative flex h-9 items-center justify-center">
              {d === f.getDate() ? (
                <>
                  <Icono nombre="corazon" className="latido absolute h-10 w-10 fill-oro-claro text-oro" />
                  <span className="relative text-white">{d}</span>
                </>
              ) : d}
            </span>
          ))}
        </div>
      </div>
      <button onClick={() => descargarICS(boda)} className="mt-5 w-full cursor-pointer bg-oro px-4 py-3 font-titulo text-sm tracking-[0.18em] text-white transition hover:bg-oro-claro">
        Agregar a mi calendario
      </button>
    </Reveal>
  )
}
