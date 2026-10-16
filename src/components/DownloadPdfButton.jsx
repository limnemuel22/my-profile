import { Download } from 'lucide-react'
import { useState } from 'react'
import { downloadProfilePdf } from '../utils/downloadPdf'

export default function DownloadPdfButton({ variant = 'solid' }) {
  const [busy, setBusy] = useState(false)

  async function handleClick() {
    if (busy) return
    setBusy(true)
    try {
      await downloadProfilePdf()
    } finally {
      setBusy(false)
    }
  }

  const classes =
    variant === 'solid'
      ? 'slash inline-flex items-center gap-2 bg-gold px-6 py-3 font-display text-sm tracking-[0.18em] text-ink uppercase transition hover:bg-gold-soft disabled:opacity-60'
      : 'slash inline-flex items-center gap-2 border border-gold px-3 py-1.5 font-mono text-xs tracking-[0.18em] text-gold uppercase transition hover:bg-gold hover:text-ink disabled:opacity-60'

  return (
    <button type="button" onClick={handleClick} disabled={busy} className={classes}>
      <Download size={16} />
      {busy ? 'Preparing...' : 'Download PDF'}
    </button>
  )
}
