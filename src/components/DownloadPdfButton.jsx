import { Download } from 'lucide-react'
import { useState } from 'react'
import { downloadProfilePdf } from '../utils/downloadPdf'

function isAdminPath() {
  return window.location.pathname.replace(/\/$/, '') === '/admin'
}

export default function DownloadPdfButton({ variant = 'solid', theme = 'dark' }) {
  const [busy, setBusy] = useState(false)

  if (!isAdminPath()) return null

  async function handleClick() {
    if (busy) return
    setBusy(true)
    try {
      await downloadProfilePdf(theme)
    } catch (error) {
      console.error(error)
    } finally {
      setBusy(false)
    }
  }

  const isLight = theme === 'light'
  const label = busy
    ? 'Preparing...'
    : variant === 'nav'
      ? isLight
        ? 'PDF White'
        : 'PDF'
      : isLight
        ? 'White PDF'
        : 'Download PDF'

  const classes =
    variant === 'solid'
      ? isLight
        ? 'slash inline-flex items-center gap-2 border border-paper bg-paper px-6 py-3 font-display text-sm tracking-[0.18em] text-ink uppercase transition hover:bg-gold hover:border-gold disabled:opacity-60'
        : 'slash inline-flex items-center gap-2 bg-gold px-6 py-3 font-display text-sm tracking-[0.18em] text-ink uppercase transition hover:bg-gold-soft disabled:opacity-60'
      : isLight
        ? 'slash inline-flex items-center gap-2 border border-paper px-3 py-1.5 font-mono text-xs tracking-[0.18em] text-paper uppercase transition hover:bg-paper hover:text-ink disabled:opacity-60'
        : 'slash inline-flex items-center gap-2 border border-gold px-3 py-1.5 font-mono text-xs tracking-[0.18em] text-gold uppercase transition hover:bg-gold hover:text-ink disabled:opacity-60'

  return (
    <button type="button" onClick={handleClick} disabled={busy} className={`pdf-hide ${classes}`}>
      <Download size={16} />
      {label}
    </button>
  )
}
