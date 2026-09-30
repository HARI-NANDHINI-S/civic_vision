import { NavLink } from 'react-router-dom'

interface Item { to: string; icon: string; label: string; badge?: string }
export const NAV_ITEMS: Item[] = [
  { to: '/dashboard', icon: 'grid_view', label: 'Dashboard' },
  { to: '/inspection', icon: 'document_scanner', label: 'AI Inspection' },
  { to: '/issues', icon: 'report_problem', label: 'Civic Issues' },
  { to: '/road-location', icon: 'alt_route', label: 'Road / Location' },
  { to: '/priority', icon: 'low_priority', label: 'Priority Queue', badge: '18' },
  { to: '/map', icon: 'map', label: 'Map' },
  { to: '/analytics', icon: 'analytics', label: 'Analytics' },
  { to: '/maintenance', icon: 'build_circle', label: 'Maintenance' },
]

const ACTIVE = 'bg-primary-container text-on-primary-container font-semibold rounded'
const IDLE = 'rounded font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors'

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low z-50 flex flex-col justify-between py-space-lg">
      <div className="flex flex-col gap-space-lg">
        <div className="flex items-center gap-space-sm px-space-lg">
          <img alt="CivicVision AI logo" className="h-8 w-auto object-contain" src="/logo.svg" />
          <div className="flex flex-col">
            <span className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface">CivicVision<span className="text-primary"> AI</span></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Infrastructure Core</span>
          </div>
        </div>
        <div className="px-space-md">
          <div className="bg-surface-container-lowest px-space-md py-space-sm rounded flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-sm text-label-sm text-on-surface font-medium uppercase">FastAPI Ready</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">v2.4.1</span>
          </div>
        </div>
        <nav className="flex flex-col gap-space-xs px-space-md" aria-label="Primary">
          {NAV_ITEMS.map((n) => (
            <NavLink key={n.to} to={n.to}
              className={({ isActive }) => `flex items-center ${n.badge ? 'justify-between' : ''} px-space-md py-space-sm ${isActive ? `transition-colors ${ACTIVE}` : IDLE}`}>
              <span className="flex items-center gap-space-md">
                <span className="material-symbols-outlined text-[20px]">{n.icon}</span>
                <span>{n.label}</span>
              </span>
              {n.badge && <span className="bg-secondary/20 text-secondary font-label-sm text-label-sm px-space-xs py-0.5 rounded">{n.badge}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="px-space-md flex flex-col gap-space-sm">
        <div className="bg-surface-container-lowest p-space-md rounded flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface-variant">NETWORK LOAD</span>
            <span className="font-label-md text-label-md text-primary">OPTIMAL (98.2%)</span>
          </div>
          <span className="material-symbols-outlined text-primary text-[20px]">wifi_tethering</span>
        </div>
      </div>
    </aside>
  )
}
