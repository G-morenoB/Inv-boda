// TODO EL CONTENIDO EDITABLE VIVE AQUÍ

export const boda = {
  novios: ['Diana', 'Alvaro'],
  fecha: '2027-10-11T13:00:00', // formato AAAA-MM-DDTHH:MM:SS (hora local)
  diaTexto: 'Lunes',
  musica: '/musica/cancion.mp3', // coloca tu canción en public/musica/
  whatsapp: '5210000000000', // lada país + número, sin signos
  frase:
    'Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto. Hoy, con la bendición de Dios, unimos nuestras vidas para caminar juntos en fe, esperanza y amor todos los días de nuestra existencia.',
  // FOTOS: reemplaza los archivos de la carpeta public/fotos/ conservando el nombre,
  // o cambia aquí las rutas si usas otros nombres (por ejemplo '/fotos/mi-foto.jpg').
  fotos: {
    bienvenida: '/fotos/bienvenida.jpg', // fondo de la pantalla de bienvenida
    portada: '/fotos/portada.jpg', // foto principal con los nombres
    galeria: [
      '/fotos/galeria-1.jpg',
      '/fotos/galeria-2.jpg',
      '/fotos/galeria-3.jpg',
      '/fotos/galeria-4.jpg',
      '/fotos/galeria-5.jpg',
    ],
  },
  padres: [
    { titulo: 'Con la bendición de Dios, y el amor de nuestros padres', nombres: ['Victor Tejeda', 'Alicia Carrasco'] },
    { titulo: '', nombres: ['Arturo Valderrabano', 'Judith Marín'] },
  ],
  padrinos: { titulo: 'En compañía de nuestros padrinos', nombres: ['Nelson Tejeda', 'Tania Valderrabano'] },
  ceremonia: {
    titulo: 'Ceremonia', icono: 'iglesia', hora: '01:00 PM',
    lugar: 'Catedral de Nuestra Señora de la Inmaculada Concepción de Puebla',
    direccion: 'C. 16 de Septiembre s/n, Centro histórico de Puebla, 72000 Heroica Puebla de Zaragoza, Pue.',
    mapa: 'Catedral de Puebla',
  },
  recepcion: {
    titulo: 'Recepción', icono: 'copas', hora: '03:00 PM',
    lugar: 'Salón los Girasoles',
    direccion: 'Av. 5 de Mayo 1406, San Juan Aquiahuac, 78580 San Andrés Cholula, Pue.',
    mapa: 'Salón los Girasoles, Av. 5 de Mayo 1406, San Andrés Cholula',
  },
  vestimenta: 'Formal',
  regalo: 'El regalo es opcional, la asistencia obligatoria. Pero si deseas tener un detalle con nosotros lo sabremos apreciar.',
  confirmacion: 'Lo más importante para nosotros es su compañía. Agradeceremos confirmar su asistencia.',
}
