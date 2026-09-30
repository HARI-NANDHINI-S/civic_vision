// Resolves the Stitch inline handlers (kept as data-onclick / data-onchange attributes) to typed handlers.
export type Arg = string | number
export interface Ctx { el: HTMLElement; args: Arg[]; ev: Event }
export type Handlers = Record<string, (c: Ctx) => void>

const TOKEN = /'((?:[^'\\]|\\.)*)'|(-?\d+(?:\.\d+)?)|([A-Za-z_$][\w$]*)/g
function parseArgs(src: string): Arg[] {
  const out: Arg[] = []; let m: RegExpExecArray | null; TOKEN.lastIndex = 0
  while ((m = TOKEN.exec(src))) out.push(m[1] !== undefined ? m[1].replace(/\\'/g, "'") : m[2] !== undefined ? Number(m[2]) : m[3])
  return out
}
function run(code: string, el: HTMLElement, ev: Event, h: Handlers) {
  for (const stmt of code.split(';').map((s) => s.trim()).filter(Boolean)) {
    const m = /^([\w.$]+)\((.*)\)$/s.exec(stmt)
    if (m) { h[m[1]]?.({ el, args: parseArgs(m[2]), ev }); continue }
    if (stmt.startsWith("document.getElementById('queue-search').value=''")) h.clearQueueSearch?.({ el, args: [], ev })
  }
}
export function bindActions(h: Handlers): () => void {
  const make = (attr: string) => (ev: Event) => {
    const el = (ev.target as HTMLElement | null)?.closest?.(`[${attr}]`) as HTMLElement | null
    if (el) run(el.getAttribute(attr) ?? '', el, ev, h)
  }
  const onClick = make('data-onclick'), onChange = make('data-onchange')
  document.addEventListener('click', onClick); document.addEventListener('change', onChange)
  return () => { document.removeEventListener('click', onClick); document.removeEventListener('change', onChange) }
}
