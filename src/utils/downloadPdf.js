import html2canvas from 'html2canvas-pro'
import { jsPDF } from 'jspdf'

const INK = '#070708'
const CAPTURE_WIDTH = 1440

export async function downloadProfilePdf() {
  const source = document.getElementById('profile-capture')
  if (!source) {
    throw new Error('Profile content was not found.')
  }

  window.scrollTo(0, 0)
  if (document.fonts?.ready) {
    await document.fonts.ready
  }

  const canvas = await html2canvas(source, {
    scale: 2,
    useCORS: true,
    backgroundColor: INK,
    windowWidth: CAPTURE_WIDTH,
    scrollX: 0,
    scrollY: 0,
    onclone: (clonedDoc) => {
      clonedDoc.querySelectorAll('.pdf-hide').forEach((el) => {
        el.style.display = 'none'
      })
      const header = clonedDoc.querySelector('header')
      if (header) {
        header.style.position = 'relative'
        header.style.backdropFilter = 'none'
        header.style.webkitBackdropFilter = 'none'
      }
      const capture = clonedDoc.getElementById('profile-capture')
      if (capture) {
        capture.style.background = INK
      }
    },
  })

  const imgData = canvas.toDataURL('image/jpeg', 0.88)
  const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' })
  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()
  const imgWidth = pageWidth
  const imgHeight = (canvas.height * imgWidth) / canvas.width

  const fillPage = () => {
    pdf.setFillColor(7, 7, 8)
    pdf.rect(0, 0, pageWidth, pageHeight, 'F')
  }

  let heightLeft = imgHeight
  let position = 0

  fillPage()
  pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST')
  heightLeft -= pageHeight

  while (heightLeft > 0) {
    position -= pageHeight
    pdf.addPage()
    fillPage()
    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST')
    heightLeft -= pageHeight
  }

  pdf.save('Nemuel-Sumagui-Lim-Profile.pdf')
}
