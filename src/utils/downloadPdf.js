import html2canvas from 'html2canvas-pro'
import { jsPDF } from 'jspdf'

const INK = '#070708'
const CAPTURE_WIDTH = 1440
const MIN_PAGE_CONTENT_PX = 120

export async function downloadProfilePdf() {
  const source = document.getElementById('profile-capture')
  if (!source) {
    throw new Error('Profile content was not found.')
  }

  window.scrollTo(0, 0)
  if (document.fonts?.ready) {
    await document.fonts.ready
  }

  let layoutHeight = source.scrollHeight
  let keepRanges = []

  const canvas = await html2canvas(source, {
    scale: 2,
    useCORS: true,
    backgroundColor: INK,
    windowWidth: CAPTURE_WIDTH,
    scrollX: 0,
    scrollY: 0,
    onclone: (clonedDoc, clonedEl) => {
      const style = clonedDoc.createElement('style')
      style.textContent = `
        .pdf-hide { display: none !important; }
        .slash {
          clip-path: none !important;
          -webkit-clip-path: none !important;
          overflow: visible !important;
          color: #f3f4ec !important;
          background: #111114 !important;
          border-color: rgba(200, 245, 66, 0.35) !important;
          padding: 6px 10px !important;
          line-height: 1.4 !important;
          letter-spacing: 0.02em !important;
          font-size: 12px !important;
        }
      `
      clonedDoc.head.appendChild(style)

      clonedDoc.querySelectorAll('.pdf-hide').forEach((el) => {
        el.style.display = 'none'
      })

      const target = clonedEl || clonedDoc.getElementById('profile-capture')
      if (!target) return

      clonedDoc.documentElement.style.width = `${CAPTURE_WIDTH}px`
      clonedDoc.body.style.width = `${CAPTURE_WIDTH}px`
      clonedDoc.body.style.background = INK
      target.style.width = `${CAPTURE_WIDTH}px`
      target.style.background = INK
      void target.offsetHeight
      layoutHeight = Math.max(target.scrollHeight, target.offsetHeight, 1)
      const root = target.getBoundingClientRect()
      keepRanges = [...target.querySelectorAll('.pdf-keep')].map((el) => {
        const rect = el.getBoundingClientRect()
        return {
          top: rect.top - root.top,
          bottom: rect.bottom - root.top,
        }
      })
    },
  })

  const scale = canvas.height / layoutHeight
  const keeps = keepRanges.map((range) => ({
    top: range.top * scale,
    bottom: range.bottom * scale,
  }))

  const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' })
  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()
  const pageHeightPx = (pageHeight / pageWidth) * canvas.width
  const slices = sliceCanvasPages(canvas.height, pageHeightPx, keeps)

  const fillPage = () => {
    pdf.setFillColor(7, 7, 8)
    pdf.rect(0, 0, pageWidth, pageHeight, 'F')
  }

  slices.forEach((slice, index) => {
    if (index > 0) pdf.addPage()
    fillPage()

    const sliceCanvas = document.createElement('canvas')
    sliceCanvas.width = canvas.width
    sliceCanvas.height = slice.height
    const ctx = sliceCanvas.getContext('2d')
    ctx.fillStyle = INK
    ctx.fillRect(0, 0, sliceCanvas.width, sliceCanvas.height)
    ctx.drawImage(
      canvas,
      0,
      slice.y,
      canvas.width,
      slice.height,
      0,
      0,
      canvas.width,
      slice.height,
    )

    const data = sliceCanvas.toDataURL('image/jpeg', 0.88)
    const heightMm = (slice.height / canvas.width) * pageWidth
    pdf.addImage(data, 'JPEG', 0, 0, pageWidth, heightMm, undefined, 'FAST')
  })

  pdf.save('Nemuel-Sumagui-Lim-Profile.pdf')
}

function sliceCanvasPages(totalHeight, pageHeightPx, keeps) {
  const pages = []
  let y = 0

  while (y < totalHeight - 1) {
    let next = Math.min(y + pageHeightPx, totalHeight)

    if (next < totalHeight) {
      const hits = keeps.filter((keep) => keep.top < next && keep.bottom > next)
      if (hits.length) {
        const cut = Math.min(...hits.map((keep) => keep.top))
        if (cut > y + MIN_PAGE_CONTENT_PX) {
          next = cut
        }
      }
    }

    const start = Math.round(y)
    const end = Math.round(next)
    if (end <= start) break

    pages.push({ y: start, height: end - start })
    y = end
    if (pages.length > 40) break
  }

  return pages
}
