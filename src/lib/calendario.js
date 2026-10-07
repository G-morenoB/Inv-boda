// Genera y descarga un archivo .ics para agregar la boda al calendario
export function descargarICS({ fecha, novios, ceremonia }) {
  const ini = new Date(fecha)
  const fin = new Date(ini.getTime() + 8 * 36e5)
  const f = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0]
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'BEGIN:VEVENT',
    `DTSTART:${f(ini)}`, `DTEND:${f(fin)}`,
    `SUMMARY:Boda de ${novios[0]} y ${novios[1]}`,
    `LOCATION:${ceremonia.lugar}`, 'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n')
  const a = document.createElement('a')
  a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }))
  a.download = 'boda.ics'
  a.click()
}
