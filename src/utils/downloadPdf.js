import { jsPDF } from 'jspdf'
import { education, experience, profile, projects, skillGroups } from '../data/profile'

const PAGE = { w: 210, h: 297, m: 16 }
const LIME = [90, 140, 20]
const INK = [18, 18, 20]
const MUTED = [90, 92, 88]

function clean(text) {
  return String(text)
    .replace(/[—–]/g, '-')
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/·/g, '|')
}

async function loadImage(src) {
  const response = await fetch(src)
  const blob = await response.blob()
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

function addAccent(doc) {
  doc.setFillColor(...LIME)
  doc.rect(0, 0, 6, PAGE.h, 'F')
}

function makeWriter(doc, startY = PAGE.m) {
  const maxX = PAGE.w - PAGE.m
  const width = maxX - PAGE.m
  let y = startY

  function ensure(space) {
    if (y + space > PAGE.h - PAGE.m) {
      doc.addPage()
      addAccent(doc)
      y = PAGE.m
    }
  }

  function wrap(text, size, font = 'normal') {
    doc.setFont('helvetica', font)
    doc.setFontSize(size)
    return doc.splitTextToSize(clean(text), width)
  }

  return {
    get y() {
      return y
    },
    section(title) {
      ensure(14)
      y += 4
      doc.setFillColor(...LIME)
      doc.rect(PAGE.m, y, 4, 6, 'F')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(12)
      doc.setTextColor(...INK)
      doc.text(title.toUpperCase(), PAGE.m + 7, y + 5)
      y += 12
    },
    heading(text, size = 11) {
      const lines = wrap(text, size, 'bold')
      ensure(lines.length * 5 + 4)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(size)
      doc.setTextColor(...INK)
      doc.text(lines, PAGE.m, y)
      y += lines.length * 5 + 1
    },
    muted(text, size = 9) {
      const lines = wrap(text, size)
      ensure(lines.length * 4.2 + 2)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(size)
      doc.setTextColor(...MUTED)
      doc.text(lines, PAGE.m, y)
      y += lines.length * 4.2 + 1
    },
    body(text, size = 9.5) {
      const lines = wrap(text, size)
      ensure(lines.length * 4.5 + 3)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(size)
      doc.setTextColor(...INK)
      doc.text(lines, PAGE.m, y)
      y += lines.length * 4.5 + 2
    },
    bullet(text) {
      const lines = wrap(`- ${text}`, 9.5)
      ensure(lines.length * 4.4 + 2)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9.5)
      doc.setTextColor(...INK)
      doc.text(lines, PAGE.m, y)
      y += lines.length * 4.4 + 1
    },
    gap(n = 3) {
      y += n
    },
  }
}

export async function downloadProfilePdf() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  addAccent(doc)

  try {
    const photo = await loadImage(profile.avatar)
    doc.addImage(photo, 'JPEG', PAGE.w - PAGE.m - 28, PAGE.m, 28, 35)
  } catch {
    // Continue without photo if it fails to load.
  }

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(22)
  doc.setTextColor(...INK)
  doc.text(clean(profile.fullName), PAGE.m, 22)

  doc.setFontSize(11)
  doc.setTextColor(...LIME)
  doc.text('NEM PROFILE', PAGE.m, 29)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(...INK)
  doc.text(clean(profile.title), PAGE.m, 36)

  doc.setFontSize(8.5)
  doc.setTextColor(...MUTED)
  doc.text(`${profile.location}  |  ${profile.email}  |  ${profile.phone}`, PAGE.m, 42)
  doc.text('github.com/limnemuel22  |  linkedin.com/in/nemuel-lim-57244629b', PAGE.m, 47)

  const write = makeWriter(doc, 56)

  write.section('About')
  profile.about.forEach((paragraph) => write.body(paragraph))

  write.section('Experience')
  experience.forEach((job) => {
    write.heading(`${job.role} / ${job.company}`)
    write.muted(`${job.period}  |  ${job.location}`)
    job.highlights.forEach((item) => write.bullet(item))
    write.gap(3)
  })

  write.section('Education')
  education.forEach((item) => {
    write.heading(item.degree)
    write.muted(`${item.school}  |  ${item.period}`)
  })

  write.section('Skills')
  skillGroups.forEach((group) => {
    write.heading(group.title, 10)
    write.body(group.items.join(', '))
  })

  write.section('Projects')
  projects.forEach((project) => {
    const label = project.company ? `${project.name} / ${project.company}` : project.name
    write.heading(label, 10)
    write.body(project.description)
    write.muted(project.tags.join('  |  '))
    if (project.live) write.muted(project.live)
    write.gap(2)
  })

  const pageCount = doc.getNumberOfPages()
  for (let i = 1; i <= pageCount; i += 1) {
    doc.setPage(i)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(...MUTED)
    doc.text(
      `${clean(profile.name)}  |  Nem Profile  |  ${i}/${pageCount}`,
      PAGE.w / 2,
      PAGE.h - 8,
      { align: 'center' },
    )
  }

  doc.save('Nemuel-Sumagui-Lim-Profile.pdf')
}
