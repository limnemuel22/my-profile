import html2canvas from 'html2canvas-pro'
import { jsPDF } from 'jspdf'

const CAPTURE_WIDTH = 1440
const RENDER_SCALE = 2
const MIN_PAGE_CONTENT_PX = 160
const SAFETY_CSS = 16

const THEMES = {
  dark: {
    bg: '#070708',
    fill: [7, 7, 8],
    filename: 'Nemuel-Sumagui-Lim-Profile.pdf',
    css: `
      .slash {
        color: #f3f4ec !important;
        background: #111114 !important;
        border-color: rgba(200, 245, 66, 0.35) !important;
      }
    `,
  },
  light: {
    bg: '#ffffff',
    fill: [255, 255, 255],
    filename: 'Nemuel-Sumagui-Lim-Profile-White.pdf',
    css: `
      :root, html, body, #profile-capture {
        --color-ink: #ffffff !important;
        --color-ink-soft: #f4f5ee !important;
        --color-paper: #141416 !important;
        --color-muted: #3a3d38 !important;
        --color-gold: #3f6b00 !important;
        --color-gold-soft: #2f5200 !important;
        --color-line: rgba(20, 24, 16, 0.18) !important;
        background: #ffffff !important;
        color: #141416 !important;
      }
      .slash {
        color: #141416 !important;
        background: #f4f5ee !important;
        border-color: rgba(20, 24, 16, 0.22) !important;
      }
    `,
  },
}

let exporting = false

export async function downloadProfilePdf(theme = 'dark') {
  if (exporting) return
  const palette = THEMES[theme] ?? THEMES.dark
  const source = document.getElementById('profile-capture')
  if (!source) {
    throw new Error('Profile content was not found.')
  }

  exporting = true
  window.scrollTo(0, 0)
  if (document.fonts?.ready) {
    await document.fonts.ready
  }

  let layoutHeight = source.scrollHeight
  let keepRanges = []

  try {
    const canvas = await html2canvas(source, {
      scale: RENDER_SCALE,
      useCORS: true,
      backgroundColor: palette.bg,
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
            letter-spacing: 0.04em !important;
            padding: 6px 10px !important;
            line-height: 1.35 !important;
          }
          #profile-capture .pdf-stack {
            grid-template-columns: 1fr !important;
          }
          #profile-capture .pdf-heading {
            margin-bottom: 1.25rem !important;
          }
          #profile-capture section > div {
            padding-top: 2.25rem !important;
            padding-bottom: 2.25rem !important;
          }
          #profile-capture p,
          #profile-capture li,
          #profile-capture dd {
            line-height: 1.5 !important;
            letter-spacing: 0.02em !important;
          }
          #profile-capture .tracking-widest,
          #profile-capture [class*="tracking-["] {
            letter-spacing: 0.08em !important;
          }
          #profile-capture article {
            padding: 1.35rem !important;
          }
          ${palette.css}
        `
        clonedDoc.head.appendChild(style)

        clonedDoc.querySelectorAll('.pdf-hide').forEach((el) => {
          el.style.display = 'none'
        })

        const target = clonedEl || clonedDoc.getElementById('profile-capture')
        if (!target) return

        clonedDoc.documentElement.style.width = `${CAPTURE_WIDTH}px`
        clonedDoc.body.style.width = `${CAPTURE_WIDTH}px`
        clonedDoc.body.style.background = palette.bg
        clonedDoc.body.style.color = theme === 'light' ? '#141416' : '#f3f4ec'
        target.style.width = `${CAPTURE_WIDTH}px`
        target.style.background = palette.bg
        bumpPdfFonts(clonedDoc, target)
        void target.offsetHeight
        layoutHeight = Math.max(target.scrollHeight, target.offsetHeight, 1)
        const root = target.getBoundingClientRect()
        keepRanges = collectKeepRanges(target, root)
      },
    })

    const scale = canvas.width / CAPTURE_WIDTH || canvas.height / layoutHeight
    const safety = SAFETY_CSS * scale
    const keeps = keepRanges.map((range) => ({
      top: range.top * scale,
      bottom: range.bottom * scale,
    }))

    const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' })
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    const pageHeightPx = (pageHeight / pageWidth) * canvas.width
    const slices = sliceCanvasPages(canvas.height, pageHeightPx, keeps, safety)

    const fillPage = () => {
      pdf.setFillColor(...palette.fill)
      pdf.rect(0, 0, pageWidth, pageHeight, 'F')
    }

    slices.forEach((slice, index) => {
      if (index > 0) pdf.addPage()
      fillPage()

      const sliceCanvas = document.createElement('canvas')
      sliceCanvas.width = canvas.width
      sliceCanvas.height = slice.height
      const ctx = sliceCanvas.getContext('2d')
      ctx.fillStyle = palette.bg
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

    pdf.save(palette.filename)
  } finally {
    exporting = false
  }
}

function pdfFontSize(size) {
  if (size <= 14) return 22
  if (size <= 18) return 24
  if (size <= 24) return 26
  if (size <= 36) return 30
  return size
}

function collectKeepRanges(target, root) {
  const firstKeeps = new Map()
  target.querySelectorAll('.pdf-heading').forEach((heading) => {
    const scope = heading.parentElement
    const keep = scope?.querySelector('.pdf-keep')
    if (keep && !firstKeeps.has(keep)) firstKeeps.set(keep, heading)
  })

  return [...target.querySelectorAll('.pdf-keep')].map((el) => {
    const rect = el.getBoundingClientRect()
    const heading = firstKeeps.get(el)
    const top = heading
      ? heading.getBoundingClientRect().top - root.top
      : rect.top - root.top
    return {
      top,
      bottom: rect.bottom - root.top,
    }
  })
}

function bumpPdfFonts(doc, root) {
  const view = doc.defaultView
  if (!view) return
  const nodes = [root, ...root.querySelectorAll('*')]
  const sizes = nodes.map((el) => parseFloat(view.getComputedStyle(el).fontSize))
  nodes.forEach((el, index) => {
    const size = sizes[index]
    if (!Number.isFinite(size)) return
    const next = pdfFontSize(size)
    if (next !== size) el.style.setProperty('font-size', `${next}px`, 'important')
  })
}

function sliceCanvasPages(totalHeight, pageHeightPx, keeps, safety) {
  const padded = keeps.map((keep) => ({
    top: keep.top - safety,
    bottom: keep.bottom + safety,
    originTop: keep.top,
    height: keep.bottom - keep.top,
  }))
  const pages = []
  let y = 0

  while (y < totalHeight - 1) {
    let next = Math.min(y + pageHeightPx, totalHeight)

    if (next < totalHeight) {
      const hits = padded.filter(
        (keep) =>
          keep.originTop < next &&
          keep.bottom > next &&
          keep.originTop > y + MIN_PAGE_CONTENT_PX &&
          keep.height < pageHeightPx - safety,
      )
      if (hits.length) {
        const inner = hits.reduce((a, b) => (a.originTop >= b.originTop ? a : b))
        next = inner.originTop - safety
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
