import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { mockStats } from '../data/mock'

const ALERTS = [
  { icon: 'warning', tone: 'text-tertiary', text: `${mockStats.criticalHazards} critical hazards awaiting triage`, time: 'Just now' },
  { icon: 'hourglass_top', tone: 'text-secondary', text: '24 detections awaiting validation', time: '12 min ago' },
  { icon: 'check_circle', tone: 'text-primary', text: 'Work order WO-8802 in progress', time: '1 h ago' },
]

export default function Header() {
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)
  const [seen, setSeen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Live-filter the rows/cards on the current page (client-side, mock data).
  useEffect(() => {
    const term = q.toLowerCase().trim()
    document.querySelectorAll<HTMLElement>('main tbody tr, main .issue-card').forEach((el) => {
      el.style.display = !term || (el.textContent ?? '').toLowerCase().includes(term) ? '' : 'none'
    })
  }, [q])
  useEffect(() => {
    const away = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false) }
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', away); document.addEventListener('keydown', esc)
    return () => { document.removeEventListener('mousedown', away); document.removeEventListener('keydown', esc) }
  }, [])

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-surface/80 backdrop-blur-xl z-40 flex items-center justify-between px-gutter-desktop">
      <div className="flex items-center gap-space-md w-96">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden="true">search</span>
          <input aria-label="Search this page" value={q} onChange={(e) => setQ(e.target.value)}
            className="w-full bg-surface-container-lowest text-on-surface font-body-sm text-body-sm pl-9 pr-space-md py-space-sm rounded border-none focus:outline-none focus:ring-1 focus:ring-primary placeholder-on-surface-variant/60"
            placeholder="Query road ID, camera zone, or incident key..." type="text" />
        </div>
      </div>
      <div className="flex items-center gap-space-lg">
        <div className="flex items-center gap-space-xs">
          <div className="relative" ref={ref}>
            <button aria-label="Notifications" aria-haspopup="true" aria-expanded={open} onClick={() => { setOpen(!open); setSeen(true) }}
              className="relative p-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">notifications</span>
              {!seen && <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-error" />}
            </button>
            <AnimatePresence>
              {open && (
                <motion.div role="menu" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.15 }}
                  className="absolute right-0 top-11 w-80 bg-surface-container-high/95 backdrop-blur-md rounded-lg shadow-xl p-space-xs flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant px-space-sm py-space-xs uppercase">Notifications (mock data)</span>
                  {ALERTS.map((a) => (
                    <div key={a.text} role="menuitem" className="flex items-start gap-space-sm px-space-sm py-space-sm rounded hover:bg-surface-container-highest transition-colors">
                      <span className={`material-symbols-outlined text-[18px] ${a.tone}`} aria-hidden="true">{a.icon}</span>
                      <div className="flex flex-col"><span className="font-body-sm text-body-sm text-on-surface">{a.text}</span><span className="font-label-sm text-label-sm text-on-surface-variant">{a.time}</span></div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button aria-label="Filters" className="p-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded transition-colors" type="button" onClick={() => setQ('')}>
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">tune</span>
          </button>
        </div>
        <div className="flex items-center gap-space-sm pl-space-md">
          <div className="flex flex-col text-right">
            <span className="font-label-lg text-label-lg text-on-surface font-semibold">Sarah Jenkins</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Field Dispatch Lead</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">person</span>
          </div>
        </div>
      </div>
    </header>
  )
}
