import Reveal from './Reveal'
import Icono from './Iconos'

// Encabezado de sección: icono + título en Cinzel
export default function Titulo({ icono, children }) {
  return (
    <Reveal className="flex flex-col items-center gap-3 text-center">
      {icono && <Icono nombre={icono} />}
      <h2 className="font-titulo text-4xl leading-tight tracking-wide text-oro uppercase sm:text-5xl">{children}</h2>
    </Reveal>
  )
}
