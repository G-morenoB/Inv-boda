import Reveal from './Reveal'

// Foto a ancho completo con revelado tipo cortina.
// El contenedor (que se observa) no se recorta; solo la imagen interior.
export default function Foto({ src, alto = 'h-[28rem]' }) {
  return (
    <Reveal v="clip" className={`${alto} w-full overflow-hidden`}>
      <img src={src} alt="" className="clip-img h-full w-full object-cover" />
    </Reveal>
  )
}
