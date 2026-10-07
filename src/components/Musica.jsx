import Icono from './Iconos'

export default function Musica({ sonando, onAlternar }) {
  return (
    <button onClick={onAlternar} aria-label={sonando ? 'Silenciar música' : 'Activar música'} className="fixed right-4 bottom-4 z-40 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-oro bg-marfil shadow-md">
      <Icono nombre={sonando ? 'sonido' : 'silencio'} className="h-6 w-6 text-oro" trazo={1.5} />
    </button>
  )
}
