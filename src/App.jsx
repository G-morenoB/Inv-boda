import { useEffect, useRef, useState } from 'react'
import { boda } from './data/boda'
import Bienvenida from './components/Bienvenida'
import Musica from './components/Musica'
import Portada from './components/Portada'
import Mensaje from './components/Mensaje'
import Calendario from './components/Calendario'
import Foto from './components/Foto'
import Padres from './components/Padres'
import Lugar from './components/Lugar'
import Vestimenta from './components/Vestimenta'
import Regalo from './components/Regalo'
import Confirmacion from './components/Confirmacion'
import Despedida from './components/Despedida'

export default function App() {
  const [abierta, setAbierta] = useState(false)
  const [sonando, setSonando] = useState(false)
  const audio = useRef(null)

  useEffect(() => {
    audio.current = new Audio(boda.musica)
    audio.current.loop = true
    audio.current.volume = 0.6
  }, [])
  useEffect(() => { document.body.style.overflow = abierta ? '' : 'hidden' }, [abierta])

  const abrir = () => {
    audio.current.play().then(() => setSonando(true)).catch(() => {})
    setAbierta(true)
  }
  const alternar = () => {
    const a = audio.current
    if (a.paused) { a.play().then(() => setSonando(true)).catch(() => {}) } else { a.pause(); setSonando(false) }
  }

  const [g1, g2, g3, g4, g5] = boda.fotos.galeria
  return (
    <>
      <Bienvenida onAbrir={abrir} />
      {abierta && (
        <main>
          <Portada />
          <Mensaje />
          <Calendario />
          <Foto src={g1} />
          <Foto src={g2} />
          <Padres />
          <Lugar datos={boda.ceremonia} />
          <Lugar datos={boda.recepcion} />
          <Vestimenta />
          <Foto src={g3} alto="h-[24rem]" />
          <Foto src={g4} alto="h-[24rem]" />
          <Regalo />
          <Confirmacion />
          <Foto src={g5} alto="h-[24rem]" />
          <Despedida />
          <Musica sonando={sonando} onAlternar={alternar} />
        </main>
      )}
    </>
  )
}
