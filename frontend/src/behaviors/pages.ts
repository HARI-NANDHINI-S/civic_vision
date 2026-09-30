// Ports of the inline <script> blocks shipped in the Stitch exports. Behaviour is unchanged;
// alert() calls became toasts and mock work goes through src/services.
import { bindActions, type Handlers } from './actions'
import { $, toast } from '../utils/toast'
import { inspectionService, maintenanceService } from '../services'
import { mockInspection } from '../data/mock'
import { stashUpload, takeUpload } from '../utils/pendingUpload'

type Cleanup = () => void
type Nav = (to: string) => void
const listen = (cleanups: Cleanup[], el: EventTarget | null, type: string, fn: (e: Event) => void) => {
  if (!el) return; el.addEventListener(type, fn); cleanups.push(() => el.removeEventListener(type, fn))
}
const swap = (el: Element, add: string, remove: string) => { el.classList.add(...add.split(' ').filter(Boolean)); el.classList.remove(...remove.split(' ').filter(Boolean)) }
const later = (cleanups: Cleanup[], fn: () => void, ms: number) => { const t = setTimeout(fn, ms); cleanups.push(() => clearTimeout(t)) }

/* ---------- Upload preview (shared) ---------- */
async function previewUpload(file: File) {
  const img = $<HTMLImageElement>('inspectionImage'), box = $('viewportContainer')
  if (img) { img.src = URL.createObjectURL(file); img.alt = `Uploaded asset ${file.name}` }
  const scan = document.createElement('div'); scan.className = 'cv-scan pointer-events-none absolute inset-x-0 top-0 h-16 z-20'
  box?.appendChild(scan)
  toast(`Asset '${file.name}' loaded. Running mock inspection…`)
  const r = await inspectionService.analyzeImage(file)
  scan.remove(); toast(`Mock inspection complete: ${r.detections.length} placeholder detections. Backend not connected.`)
}

/* ---------- Desktop: AI Inspection ---------- */
function inspectionDesktop(): Cleanup {
  let zoom = 1, visible = true
  const setScale = (z: number) => { for (const id of ['inspectionImage', 'cvOverlaysContainer']) { const e = $(id); if (e) e.style.transform = `scale(${z})` } }
  const h: Handlers = {
    adjustZoom: ({ args }) => { zoom = Math.min(Math.max(zoom + Number(args[0]), 0.8), 2.4); setScale(zoom) },
    resetZoom: () => { zoom = 1; setScale(1) },
    toggleOverlays: () => {
      visible = !visible
      const c = $('cvOverlaysContainer'), t = $('overlayBtnText'), i = $('overlayEyeIcon'); if (!c || !t || !i) return
      c.style.opacity = visible ? '1' : '0'; c.style.pointerEvents = visible ? 'auto' : 'none'
      t.textContent = visible ? 'CV Layers: Active' : 'CV Layers: Hidden'; i.textContent = visible ? 'visibility' : 'visibility_off'
    },
    selectAnomaly: ({ args }) => {
      const d = mockInspection('').detections
      toast(args[0] === 'pothole'
        ? `Target Anomaly Selected: SEVERE_POTHOLE #01\nConfidence: ${(d[0].confidence * 100).toFixed(1)}%\nDepth: 8.5cm\nCoordinates: [37.7749° N, -122.4194° W]`
        : `Target Anomaly Selected: LONGITUDINAL_CRACK #04\nConfidence: ${(d[1].confidence * 100).toFixed(1)}%\nLength: 3.2m\nSeverity: Medium`)
    },
    handleFileSelect: async ({ ev }) => {
      const file = (ev.target as HTMLInputElement).files?.[0]; if (file) await previewUpload(file)
    },
    dispatchOrder: async () => { const r = await maintenanceService.dispatch('INF-8841-CV9'); toast(`Work Order DISPATCH-MARKET-4491 queued for Field Unit Charlie-4. SLA countdown initialized: 11h 59m. (${r.workOrderId})`) },
    exportGeoJSON: () => {
      const data = { type: 'Feature', geometry: { type: 'Point', coordinates: [-122.4194, 37.7749] },
        properties: { incident_id: 'INF-8841-CV9', class: 'SEVERE_POTHOLE', urgency_score: 92, estimated_depth_cm: 8.5, estimated_area_m2: 1.4, sla_hours: 12 } }
      const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/geo+json' }))
      const a = document.createElement('a'); a.href = url; a.download = 'civicvision-incident-INF-8841.geojson'; a.click(); URL.revokeObjectURL(url)
    },
    reinspectAsset: ({ el }) => { el.classList.add('opacity-50'); setTimeout(() => { el.classList.remove('opacity-50'); toast('Asset re-inference complete. Model inference drift: 0.02%. Detections stabilized.') }, 600) },
  }
  const pending = takeUpload(); if (pending) setTimeout(() => void previewUpload(pending), 200)
  return bindActions(h)
}

/* ---------- Desktop: Analytics ---------- */
function analyticsDesktop(): Cleanup {
  const c: Cleanup[] = []
  const btns = document.querySelectorAll<HTMLElement>('#rangeSelector .range-btn')
  btns.forEach((b) => listen(c, b, 'click', () => {
    btns.forEach((x) => swap(x, 'text-on-surface-variant', 'bg-primary-container text-on-primary-container font-semibold shadow-sm'))
    swap(b, 'bg-primary-container text-on-primary-container font-semibold shadow-sm', 'text-on-surface-variant')
  }))
  const log = $('fastApiLog')
  const events = [
    '<span class="text-primary">[14:33:02]</span> CAMERA_PATROL_#31: Edge TensorRT OK (Batch=4)',
    '<span class="text-tertiary-container">[14:33:14]</span> DEFECT_ALERT: Ward 02 Pothole Sev 4 verified 99.1%',
    '<span class="text-primary">[14:33:28]</span> SYNC: Redis GeoJSON cache refreshed for Ward 01',
  ]
  let i = 0
  const t = setInterval(() => {
    if (!log || i >= events.length) return
    const d = document.createElement('div'); d.className = 'text-on-surface-variant'; d.innerHTML = events[i++]; log.appendChild(d); log.scrollTop = log.scrollHeight
  }, 4500)
  c.push(() => clearInterval(t)); return () => c.forEach((f) => f())
}

/* ---------- Desktop: Map ---------- */
function mapDesktop(): Cleanup {
  const c: Cleanup[] = []
  listen(c, $('close-inspector'), 'click', () => $('incident-inspector-pane')?.classList.toggle('translate-x-full'))
  const b = $('dispatch-unit-btn')
  listen(c, b, 'click', () => {
    if (!b) return
    b.innerHTML = '<span class="material-symbols-outlined text-[18px] animate-spin">autorenew</span><span>Dispatching Unit Alpha...</span>'
    later(c, () => {
      b.innerHTML = '<span class="material-symbols-outlined text-[18px]">check_circle</span><span>Unit Alpha Dispatched!</span>'
      swap(b, 'bg-primary-container text-on-primary-container', 'bg-primary text-on-primary')
    }, 1200)
  })
  return () => c.forEach((f) => f())
}

/* ---------- Desktop: Maintenance ---------- */
function maintenanceDesktop(): Cleanup {
  const c: Cleanup[] = []
  const toggle = (show: boolean) => $('emergency-modal-backdrop')?.classList.toggle('hidden', !show)
  listen(c, $('btn-emergency-modal'), 'click', () => toggle(true))
  listen(c, $('close-modal-btn'), 'click', () => toggle(false))
  listen(c, $('cancel-modal-btn'), 'click', () => toggle(false))
  listen(c, $('emergency-form'), 'submit', (e) => { e.preventDefault(); toggle(false) })
  const qa = $<HTMLButtonElement>('qa-approve-btn')
  listen(c, qa, 'click', () => {
    if (!qa) return
    qa.innerHTML = '<span class="material-symbols-outlined text-[18px]">check_circle</span><span>Signed & Sealed (WO Closed)</span>'
    swap(qa, 'bg-surface-container-highest text-primary', 'bg-primary text-on-primary'); qa.disabled = true
  })
  const fb = document.querySelectorAll<HTMLElement>('.filter-btn')
  fb.forEach((b) => listen(c, b, 'click', () => {
    fb.forEach((x) => swap(x, 'text-on-surface-variant', 'bg-primary text-on-primary'))
    swap(b, 'bg-primary text-on-primary', 'text-on-surface-variant')
  }))
  return () => c.forEach((f) => f())
}

/* ---------- Desktop: Dashboard ---------- */
function dashboardDesktop(nav: Nav): Cleanup {
  const onFile = (e: Event) => {
    const t = e.target as HTMLInputElement
    if (t.type === 'file' && t.files?.[0]) { stashUpload(t.files[0]); nav('/inspection') }
  }
  document.addEventListener('change', onFile)
  const onClick = (e: Event) => {
    const btn = (e.target as HTMLElement).closest('button'); if (!btn) return
    const label = btn.textContent ?? ''
    if (label.includes('Launch Optical Triage') || label.trim() === 'Review' || label.includes('Assign Crew') || label.includes('Dispatch Unit')) btn.dataset.handled = '1'
    if (label.includes('Launch Optical Triage')) nav('/inspection')
    else if (label.trim() === 'Review' || label.includes('Assign Crew') || label.includes('Dispatch Unit')) nav('/priority')
  }
  document.addEventListener('click', onClick); return () => { document.removeEventListener('click', onClick); document.removeEventListener('change', onFile) }
}

/* ---------- Mobile pages ---------- */
function dashboardMobile(nav: Nav): Cleanup {
  const c: Cleanup[] = []; listen(c, $('inspect-action-btn'), 'click', () => nav('/inspection')); return () => c.forEach((f) => f())
}

function inspectionMobile(): Cleanup {
  const c: Cleanup[] = []
  let visible = true
  const box = $('cvOverlayContainer'), txt = $('overlayToggleText'), dispatch = $<HTMLButtonElement>('dispatchWorkOrderBtn')
  listen(c, $('toggleOverlayBtn'), 'click', () => {
    visible = !visible; if (!box || !txt) return
    box.style.opacity = visible ? '1' : '0'; txt.innerText = visible ? 'Hide CV Overlays' : 'Show CV Overlays'
  })
  listen(c, dispatch, 'click', () => {
    if (!dispatch) return
    dispatch.disabled = true
    dispatch.innerHTML = '<span class="material-symbols-outlined text-[20px] animate-spin">refresh</span><span>Transmitting Work Order...</span>'
    later(c, () => {
      dispatch.innerHTML = '<span class="material-symbols-outlined text-[20px]">check_circle</span><span>Work Order Dispatched (#WO-8802)</span>'
      swap(dispatch, 'bg-surface-container-highest text-primary', 'bg-primary text-on-primary')
    }, 1200)
  })
  listen(c, $('reinspectBtn'), 'click', () => {
    const f = document.createElement('input'); f.type = 'file'; f.accept = 'image/*'
    f.onchange = async () => { if (f.files?.[0]) { await inspectionService.analyzeImage(f.files[0]); toast('Asset staged. Simulated neural pass initiated.') } }
    f.click()
  })
  const off = bindActions({ selectAnomaly: ({ args }) => console.log(args[0] === 'pothole' ? 'Selected Anomaly: Severe Pothole #CV-08 (94.2%)' : 'Selected Anomaly: Road Crack #CV-14 (87.5%)') })
  return () => { c.forEach((f) => f()); off() }
}

function mapMobile(): Cleanup {
  const c: Cleanup[] = []
  const canvas = $('city-vector-canvas'), heat = $('heatmap-layer'), route = $('patrol-route-layer')
  const tH = $('toggle-heatmap'), tR = $('toggle-route'), dispatch = $('dispatch-crew-btn')
  let zoom = 1.05, heatOn = true, routeOn = true
  const zoomTo = (z: number) => { if (canvas) canvas.style.transform = `scale(${z})` }
  const flag = (b: HTMLElement, on: boolean) => { b.classList.toggle('bg-primary', on); b.classList.toggle('text-on-primary', on); b.classList.toggle('bg-surface-container-high', !on); b.classList.toggle('text-on-surface-variant', !on) }
  listen(c, tH, 'click', () => { heatOn = !heatOn; if (heat) heat.style.opacity = heatOn ? '1' : '0'; if (tH) flag(tH, heatOn) })
  listen(c, tR, 'click', () => { routeOn = !routeOn; if (route) route.style.display = routeOn ? 'block' : 'none'; if (tR) flag(tR, routeOn) })
  listen(c, $('zoom-in'), 'click', () => { if (zoom < 1.4) { zoom += 0.1; zoomTo(zoom) } })
  listen(c, $('zoom-out'), 'click', () => { if (zoom > 0.9) { zoom -= 0.1; zoomTo(zoom) } })
  listen(c, $('recenter-btn'), 'click', () => { zoom = 1.1; zoomTo(zoom) })
  const compass = $('compass-btn')
  listen(c, compass, 'click', () => { if (!compass) return; compass.classList.add('transition-transform', 'duration-300'); compass.style.transform = 'rotate(360deg)'; later(c, () => { compass.style.transform = 'rotate(0deg)' }, 300) })
  listen(c, dispatch, 'click', () => {
    if (!dispatch) return
    const original = dispatch.innerHTML
    dispatch.innerHTML = '<span class="material-symbols-outlined text-[16px] animate-spin">sync</span><span>Transmitting...</span>'; swap(dispatch, 'bg-surface-container-highest', 'bg-primary')
    later(c, () => {
      dispatch.innerHTML = '<span class="material-symbols-outlined text-[16px]">done_all</span><span>Crew #04 Assigned</span>'; swap(dispatch, 'bg-primary', 'bg-surface-container-highest')
      later(c, () => { dispatch.innerHTML = original }, 2400)
    }, 1200)
  })
  listen(c, $('inspect-media-btn'), 'click', () => $('inspect-media-btn')?.classList.toggle('bg-surface-bright'))
  return () => c.forEach((f) => f())
}

function analyticsMobile(): Cleanup {
  return bindActions({ triggerExportToast: () => { const t = $('exportToast'); if (!t) return; t.classList.remove('hidden'); t.classList.add('flex'); setTimeout(() => { t.classList.add('hidden'); t.classList.remove('flex') }, 3200) } })
}

function maintenanceMobile(): Cleanup {
  const c: Cleanup[] = []
  const fb = document.querySelectorAll<HTMLElement>('#filterBar .filter-btn')
  fb.forEach((b) => listen(c, b, 'click', () => {
    fb.forEach((x) => swap(x, 'bg-surface-container-high text-on-surface', 'bg-primary-container text-on-primary-container'))
    swap(b, 'bg-primary-container text-on-primary-container', 'bg-surface-container-high text-on-surface')
  }))
  return () => c.forEach((f) => f())
}

function priorityMobile(): Cleanup {
  const c: Cleanup[] = []
  let selected = 'CIV-9021', activePriority = 'all', activeType = 'all'
  const search = $<HTMLInputElement>('queue-search')
  const showToast = (msg: string) => {
    const t = $('action-toast'), m = $('toast-msg'); if (!t || !m) return
    m.textContent = msg; swap(t, 'opacity-100 translate-y-0', 'opacity-0 -translate-y-2')
    later(c, () => swap(t, 'opacity-0 -translate-y-2', 'opacity-100 translate-y-0'), 2400)
  }
  const filterList = () => {
    const q = (search?.value ?? '').toLowerCase().trim(); let n = 0
    document.querySelectorAll<HTMLElement>('.issue-card').forEach((card) => {
      const ok = (activePriority === 'all' || card.dataset.priority === activePriority) && (activeType === 'all' || card.dataset.type === activeType) && (!q || (card.textContent ?? '').toLowerCase().includes(q))
      card.style.display = ok ? 'block' : 'none'; if (ok) n++
    })
    const cnt = $('active-count'); if (cnt) cnt.textContent = String(n)
  }
  const drawer = (open: boolean) => {
    const d = $('detail-drawer'), s = $('drawer-scrim'); if (!d || !s) return
    if (open) { swap(d, 'translate-y-0', 'translate-y-full'); swap(s, 'opacity-100 pointer-events-auto', 'opacity-0 pointer-events-none') }
    else { swap(d, 'translate-y-full', 'translate-y-0'); swap(s, 'opacity-0 pointer-events-none', 'opacity-100 pointer-events-auto') }
  }
  const text = (id: string, v: string) => { const e = $(id); if (e) e.textContent = v }
  listen(c, search, 'input', filterList)
  const off = bindActions({
    'event.stopPropagation': () => {},
    setFilter: ({ args, el }) => {
      const [cat, val] = args as string[]
      if (cat === 'priority') {
        activePriority = val
        document.querySelectorAll('.filter-btn').forEach((b) => swap(b, 'bg-surface-container-high', 'bg-primary text-on-primary font-semibold'))
        swap(el, 'bg-primary text-on-primary font-semibold', 'bg-surface-container-high')
      } else {
        activeType = val
        document.querySelectorAll('.cat-btn').forEach((b) => swap(b, 'bg-surface-container text-on-surface-variant', 'bg-primary-container text-on-primary-container'))
        swap(el, 'bg-primary-container text-on-primary-container', 'bg-surface-container text-on-surface-variant')
      }
      filterList()
    },
    openDetailsDrawer: ({ args }) => {
      const [id, title, score, priority, location, action, status] = args as string[]
      selected = id; text('drawer-id', '#' + id); text('drawer-title', title); text('drawer-score', score); text('drawer-priority', priority)
      const loc = $('drawer-location')
      if (loc) { loc.textContent = ''; const i = document.createElement('span'); i.className = 'material-symbols-outlined text-[15px] text-primary'; i.textContent = 'location_on'; loc.append(i, ' ' + location) }
      text('drawer-action', action); text('drawer-status', status); drawer(true)
    },
    closeDetailsDrawer: () => drawer(false),
    triggerDispatch: async ({ args }) => { const id = args[0] === 'currentSelectedId' ? selected : String(args[0]); await maintenanceService.dispatch(id); showToast(`Dispatched crew to #${id}`) },
    toggleMarkVerified: ({ el }) => {
      const icon = el.querySelector('.material-symbols-outlined'); if (!icon) return
      if (icon.textContent === 'bookmark') { icon.textContent = 'bookmark_added'; icon.classList.add('text-primary'); showToast('Incident added to priority watch') }
      else { icon.textContent = 'bookmark'; icon.classList.remove('text-primary') }
    },
    refreshQueue: () => showToast('Synced with municipal real-time feed'),
    clearQueueSearch: () => { if (search) search.value = ''; filterList() },
  })
  return () => { c.forEach((f) => f()); off() }
}

/* ---------- Registry ---------- */
const MOBILE_PATHS: Record<string, string> = {
  overview: '/dashboard', 'civicvision-ai-operational-dashboard': '/dashboard',
  'ai-inspection': '/inspection', 'civicvision-ai-inspection-detection': '/inspection',
  'civic-issues-queue': '/priority', 'civicvision-ai-priority-queue': '/priority',
  geographic: '/map', 'civicvision-ai-geographic-map': '/map',
  'analytics-maintenance': '/analytics', 'civicvision-ai-infrastructure-analytics': '/analytics',
  'civicvision-ai-maintenance-operations': '/maintenance', 'civicvision-ai-road-location-context': '/road-location',
}

export function setupPage(name: string, desktop: boolean, nav: Nav): Cleanup {
  const onClick = (e: MouseEvent) => {
    const a = (e.target as HTMLElement).closest('a'); if (!a) return
    const p = a.getAttribute('data-path')
    if (!desktop && p && MOBILE_PATHS[p]) { e.preventDefault(); nav(MOBILE_PATHS[p]) }
    else if (a.getAttribute('href') === '#') e.preventDefault()
  }
  document.addEventListener('click', onClick)
  const key = `${name}:${desktop ? 'd' : 'm'}`
  const map: Record<string, () => Cleanup> = {
    'dashboard:d': () => dashboardDesktop(nav), 'dashboard:m': () => dashboardMobile(nav),
    'inspection:d': inspectionDesktop, 'inspection:m': inspectionMobile,
    'analytics:d': analyticsDesktop, 'analytics:m': analyticsMobile,
    'map:d': mapDesktop, 'map:m': mapMobile,
    'maintenance:d': maintenanceDesktop, 'maintenance:m': maintenanceMobile,
    'priority:m': priorityMobile,
  }
  const off = map[key]?.()
  return () => { document.removeEventListener('click', onClick); off?.() }
}
