// Generic accessibility + motion layer applied on top of the Stitch markup (no visual redesign).
import { toast } from '../utils/toast'
import { mockIssues } from '../data/mock'

type Cleanup = () => void
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const humanize = (s: string) => s.replace(/_/g, ' ').replace(/^\w/, (c) => c.toUpperCase())
const iconOf = (el: Element) => el.querySelector('.material-symbols-outlined')?.textContent?.trim() ?? ''

function labelOf(btn: HTMLElement) {
  const text = (btn.textContent ?? '').replace(/\s+/g, ' ').trim()
  const icon = iconOf(btn)
  const t = text && text !== icon ? text.replace(icon, '').trim() : ''
  return t || humanize(icon) || 'Action'
}

function a11y(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>('button').forEach((b) => {
    if (!b.hasAttribute('type')) b.setAttribute('type', 'button')
    if (!b.hasAttribute('aria-label') && !(b.textContent ?? '').replace(iconOf(b), '').trim()) b.setAttribute('aria-label', humanize(iconOf(b)) || 'Action')
  })
  root.querySelectorAll<HTMLInputElement>('input:not([type=file]),select,textarea').forEach((i) => {
    if (!i.hasAttribute('aria-label') && !i.id) i.setAttribute('aria-label', i.getAttribute('placeholder') || i.getAttribute('name') || 'Input')
  })
  root.querySelectorAll<HTMLImageElement>('img:not([alt]),img[alt=""]').forEach((i) => i.setAttribute('alt', i.dataset.alt || 'Infrastructure image'))
  root.querySelectorAll<HTMLElement>('.material-symbols-outlined').forEach((i) => i.setAttribute('aria-hidden', 'true'))
  root.querySelectorAll<HTMLElement>('[data-onclick]:not(button):not(a),.cursor-pointer').forEach((el) => {
    if (el.tagName === 'LABEL' || el.querySelector('input') || el.closest('button,a')) return
    el.setAttribute('role', 'button'); el.tabIndex = 0
  })
  const dlg = root.querySelector('#emergency-modal-backdrop > div')
  if (dlg) { dlg.setAttribute('role', 'dialog'); dlg.setAttribute('aria-modal', 'true'); dlg.setAttribute('aria-label', 'Emergency dispatch') }
}

function motion(root: HTMLElement): Cleanup {
  const undo: Cleanup[] = []
  if (reduced()) return () => {}
  let i = 0
  root.querySelectorAll<HTMLElement>('.rounded-xl,.rounded-lg').forEach((el) => {
    if (i >= 24 || el.closest('.cv-rise') !== el && el.closest('.cv-rise') || el.closest('[class*="fixed"]') && el.matches('.rounded-lg')) return
    el.classList.add('cv-rise'); el.style.animationDelay = `${i++ * 45}ms`
    undo.push(() => el.classList.remove('cv-rise'))
  })
  root.querySelectorAll<HTMLElement>('tbody tr').forEach((tr, n) => { tr.classList.add('cv-row'); tr.style.animationDelay = `${300 + n * 60}ms` })
  root.querySelectorAll<HTMLElement>('.overflow-hidden > [style*="width"]').forEach((bar) => {
    if (bar.parentElement?.className.match(/\bh-(1|2|6)\b/)) { bar.classList.add('cv-grow'); undo.push(() => bar.classList.remove('cv-grow')) }
  })
  let raf = 0
  root.querySelectorAll<HTMLElement>('.text-headline-xl').forEach((el) => {
    const node = el.firstChild; if (!node || node.nodeType !== 3) return
    const raw = (node.textContent ?? '').trim(); if (!/^[\d,]+(\.\d+)?$/.test(raw)) return
    const dec = (raw.split('.')[1] ?? '').length, target = parseFloat(raw.replace(/,/g, '')), t0 = performance.now()
    const step = (t: number) => {
      const p = Math.min((t - t0) / 900, 1)
      node.textContent = (target * (1 - Math.pow(1 - p, 3))).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec })
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step); undo.push(() => { node.textContent = raw })
  })
  return () => { cancelAnimationFrame(raf); undo.forEach((f) => f()) }
}

function downloadCsv() {
  const rows = [['id', 'title', 'severity', 'score', 'location', 'status', 'recommended_action'],
    ...mockIssues.map((x) => [x.id, x.title, x.severity, x.priority.score, x.location.label, x.status, x.priority.recommendedAction])]
  const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n')
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }))
  a.download = 'civicvision-issues-mock.csv'; a.click(); URL.revokeObjectURL(a.href)
}

function buttons(): Cleanup {
  const SKIP = 'nav,form,[data-onclick],.filter-btn,.range-btn,.cat-btn'
  const onClick = (e: Event) => {
    const btn = (e.target as HTMLElement).closest('button') as HTMLButtonElement | null
    if (!btn || btn.id || btn.disabled || btn.type === 'submit' || btn.closest(SKIP) || btn.matches(SKIP)) return
    setTimeout(() => {
      if (btn.dataset.handled || e.defaultPrevented || !btn.isConnected) return
      const label = labelOf(btn), icon = iconOf(btn)
      const html = btn.innerHTML
      const busy = (txt: string, done: string, msg: string) => {
        btn.disabled = true
        btn.innerHTML = `<span class="material-symbols-outlined text-[16px] animate-spin" aria-hidden="true">sync</span><span>${txt}</span>`
        setTimeout(() => {
          btn.innerHTML = `<span class="material-symbols-outlined text-[16px]" aria-hidden="true">check_circle</span><span>${done}</span>`; toast(msg)
          setTimeout(() => { btn.innerHTML = html; btn.disabled = false }, 2200)
        }, 900)
      }
      if (/dispatch|assign|approve|escalate|acknowledge/i.test(label)) busy('Sending…', 'Queued', `${label}: request queued (mock, no backend connected)`)
      else if (/export|download|report/i.test(label) || icon === 'download') { downloadCsv(); toast('Exported mock issue list as CSV') }
      else if (/refresh|sync|reload/i.test(label) || icon === 'refresh') { const ic = btn.querySelector('.material-symbols-outlined'); ic?.classList.add('animate-spin'); setTimeout(() => { ic?.classList.remove('animate-spin'); toast('Data refreshed (mock data)') }, 800) }
      else if (icon === 'fullscreen') { const t = btn.closest('.overflow-hidden,section') as HTMLElement | null; if (document.fullscreenElement) void document.exitFullscreen(); else void t?.requestFullscreen?.() }
      else if (icon === 'filter_list' || icon === 'tune') { const on = btn.getAttribute('aria-pressed') !== 'true'; btn.setAttribute('aria-pressed', String(on)); btn.classList.toggle('bg-surface-bright', on); toast(on ? 'Filters panel toggled on (mock)' : 'Filters cleared') }
      else if (/^(review|details|view|inspect)/i.test(label)) toast(`${label}: opening detail view (mock)`)
      else toast(label)
    }, 0)
  }
  const onKey = (e: KeyboardEvent) => {
    const t = e.target as HTMLElement
    if ((e.key === 'Enter' || e.key === ' ') && t.getAttribute('role') === 'button' && t.tagName !== 'BUTTON') { e.preventDefault(); t.click() }
    if (e.key === 'Escape') {
      const modal = document.getElementById('emergency-modal-backdrop')
      if (modal && !modal.classList.contains('hidden')) document.getElementById('close-modal-btn')?.click()
      else if (document.getElementById('detail-drawer')?.classList.contains('translate-y-0')) document.querySelector<HTMLElement>('[data-onclick^="closeDetailsDrawer"]')?.click()
    }
  }
  document.addEventListener('click', onClick); document.addEventListener('keydown', onKey)
  return () => { document.removeEventListener('click', onClick); document.removeEventListener('keydown', onKey) }
}

export function enhancePage(): Cleanup {
  const root = document.querySelector<HTMLElement>('main') ?? document.body
  a11y(root)
  const stopMotion = motion(root)
  const stopButtons = buttons()
  return () => { stopMotion(); stopButtons() }
}
