const trazos = {
  iglesia: <path d="M12 2v4M10 4h4M6 22V12l6-5 6 5v10M3 22h18M10 22v-5a2 2 0 0 1 4 0v5" />,
  copas: <path d="M5 3h6l-1 6a2 2 0 0 1-4 0zM8 11v8M5 20h6M13 3h6l-1 6a2 2 0 0 1-4 0zM16 11v8M13 20h6" />,
  vestimenta: <path d="M12 7a2 2 0 1 0-2-2M12 7v2L3 16a1 1 0 0 0 .6 1.8h16.8A1 1 0 0 0 21 16l-9-7" />,
  regalo: <path d="M3 9h18v4H3zM5 13v8h14v-8M12 9v12M12 9C9 9 7 7.500 8 6s4 0 4 3c0-3 3-4.500 4-3s-1 3-4 3" />,
  chat: <path d="M4 20l1.300-4A8 8 0 1 1 8 18.700z" />,
  anillos: <><circle cx="9" cy="15" r="5" /><circle cx="15" cy="15" r="5" /><path d="M7.500 5l1.500 2 1.500-2-1-2h-1z" /></>,
  pin: <path d="M12 21s-7-6.200-7-11a7 7 0 0 1 14 0c0 4.800-7 11-7 11zM12 12a2.500 2.500 0 1 0 0-5 2.500 2.500 0 0 0 0 5z" />,
  corazon: <path d="M12 20s-8-5-8-11a4.500 4.500 0 0 1 8-2.500A4.500 4.500 0 0 1 20 9c0 6-8 11-8 11z" />,
  sonido: <path d="M4 9v6h4l5 4V5L8 9zM16 8.500a5 5 0 0 1 0 7M18.500 6a8.500 8.500 0 0 1 0 12" />,
  silencio: <path d="M4 9v6h4l5 4V5L8 9zM17 9l5 6M22 9l-5 6" />,
}

export default function Icono({ nombre, className = 'h-14 w-14 text-oro', trazo = 1 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={trazo} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {trazos[nombre]}
    </svg>
  )
}
