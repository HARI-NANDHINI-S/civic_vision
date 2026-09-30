/** Lightweight toast styled with Stitch tokens (replaces window.alert in the Stitch scripts). */
export function toast(message: string, ms = 3500) {
  const el = document.createElement('div')
  el.setAttribute('role', 'status'); el.setAttribute('aria-live', 'polite')
  el.className = 'cv-toast fixed top-20 right-6 z-[100] max-w-sm whitespace-pre-line bg-surface-container-high text-on-surface font-body-sm text-body-sm px-space-md py-space-sm rounded-lg shadow-xl border-l-[3px] border-primary'
  el.textContent = message
  document.body.appendChild(el)
  setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .3s'; setTimeout(() => el.remove(), 300) }, ms)
}
export const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T | null
