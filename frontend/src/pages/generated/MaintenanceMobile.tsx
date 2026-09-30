// Generated from Stitch: civicvision_ai_maintenance_operations/code.html
export default function MaintenanceMobile() {
  return (
    <><header className="fixed top-0 w-full z-50 pt-safe bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.35)]"><div className="h-16 px-gutter flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0"><img alt="CivicVision AI Logo" className="h-8 w-auto object-contain flex-shrink-0" src="https://lh3.googleusercontent.com/aida/AEtjO1UqSI9c3uHM06CCSNR-x3WSxXgriU-pnA77KUXG3NoLnAJOP7vf1OmHVqX_iifygrpfwUa202Hsj7mVRr1s1-jzB_fmjPjN5YTVU_TXiTLcgS-vmHDRwKqkQaRln2MfiX1f1dY7EYN4daguv8P5MRYc2xGxY-RKrVr-46sE9OhDCBSlsN_LxCl9fBjSfhdIV_A97BR_wtbCxmv28qtx7FGS9lnXhGNp_-qsGom0ca5LePHmnaCAJwfMmrg" /><div className="flex flex-col min-w-0"><div className="flex items-center gap-space-xs"><span className="text-headline-md font-headline-md text-on-surface tracking-tight truncate leading-none">CivicVision</span><span className="px-space-xs py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">AI</span></div><span className="text-label-sm font-label-sm text-on-surface-variant truncate mt-0.5 leading-none">Civicvision Ai   Maintenance Operations</span></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><div className="hidden sm:flex items-center gap-space-xs px-space-xs py-1 rounded bg-surface-container-low"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span><span className="text-label-sm font-label-sm text-primary uppercase">LIVE SYS</span></div><button aria-label="Notifications" className="relative w-11 h-11 flex items-center justify-center rounded-lg bg-surface-container text-on-surface-variant hover:text-primary transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container"></span></button><button aria-label="Switch Module" className="w-11 h-11 flex items-center justify-center rounded-lg bg-surface-container text-on-surface-variant hover:text-primary transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">grid_view</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full px-gutter space-y-space-md">

<div className="flex flex-col bg-surface-container rounded-xl p-space-md shadow-md space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
<span className="font-headline-md text-headline-md text-on-surface">Operations Hub</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest font-label-sm text-label-sm text-primary tracking-wider uppercase">Zone A / Live</span>
</div>
<div className="grid grid-cols-2 gap-space-xs pt-space-xs">
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-primary">verified</span>
          SLA Compliance
        </span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-bold">94.2%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">target 90%</span>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-secondary">groups</span>
          Active Units
        </span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold">6</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Deployed Field</span>
</div>
</div>
</div>
</div>

<div className="flex items-center overflow-x-auto no-scrollbar space-x-space-xs py-1" id="filterBar">
<button className="filter-btn active px-3 py-1.5 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md flex items-center space-x-1 flex-shrink-0 transition-transform active:scale-95" data-filter="all">
<span>All</span>
<span className="px-1.5 py-0.2 rounded-full bg-on-primary-container/20 font-label-sm text-label-sm">86</span>
</button>
<button className="filter-btn px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center space-x-1 flex-shrink-0 transition-transform active:scale-95" data-filter="scheduled">
<span>Scheduled</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-highest font-label-sm text-label-sm text-on-surface-variant">18</span>
</button>
<button className="filter-btn px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center space-x-1 flex-shrink-0 transition-transform active:scale-95" data-filter="in-progress">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
<span>In Progress</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-highest font-label-sm text-label-sm text-secondary">24</span>
</button>
<button className="filter-btn px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center space-x-1 flex-shrink-0 transition-transform active:scale-95" data-filter="verification">
<span>Verification</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-highest font-label-sm text-label-sm text-on-surface-variant">12</span>
</button>
<button className="filter-btn px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center space-x-1 flex-shrink-0 transition-transform active:scale-95" data-filter="resolved">
<span>Resolved</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-highest font-label-sm text-label-sm text-primary">32</span>
</button>
</div>

<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface-variant tracking-wider uppercase">Active Lifecycle Queue</span>
<span className="font-label-sm text-label-sm text-primary flex items-center gap-1 cursor-pointer">
<span className="material-symbols-outlined text-[13px]">tune</span> Filtered (3)
      </span>
</div>

<div className="bg-surface-container rounded-xl p-space-md shadow-md relative overflow-hidden space-y-space-md border-l-4 border-l-error">
<div className="flex items-start justify-between">
<div className="min-w-0 pr-2">
<div className="flex items-center space-x-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold tracking-tight">#WO-4402</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest font-label-sm text-label-sm text-on-surface-variant">#CIV-9021</span>
</div>
<p className="font-headline-md text-headline-md text-on-surface font-semibold truncate mt-0.5">North Ring Arterial (MP 14.2)</p>
<span className="font-body-sm text-body-sm text-error flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[14px]">warning</span>
            Deep Cavity & Pothole (Sev-4)
          </span>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="px-2 py-0.5 rounded bg-error-container text-on-error font-label-sm text-label-sm uppercase font-semibold">Crit 94/100</span>
<span className="font-label-sm text-label-sm text-secondary mt-1 flex items-center gap-0.5">
<span className="material-symbols-outlined text-[12px]">schedule</span> 4h 15m left
          </span>
</div>
</div>

<div className="relative w-full h-24 rounded-lg overflow-hidden bg-surface-container-low flex items-end p-space-xs shadow-inner">
<img className="absolute inset-0 w-full h-full object-cover opacity-60" data-alt="Close up street level municipal inspection view of a severe asphalt cavity and cracked road section with computer vision analysis boundary lines in high resolution dark tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM8ztlnN6wow6INdgVDsGrIE9Ysi4bK18mUat6ym0yWAc0Bl4MeAeIcUvOzq5DLSIcJkK2PJAMh320qMgBFxwZHe9WHKFvyDhFNpc5ylI8X6kTMh65bcL1RP0iwhPocNL-7W16YzQZlu28AT5yq0cOJrq7Ej0X0xhqsXvp9TL3CnAuJR3zeIH_eSmkFZzYzz86_gs8N8oFlNms7EuSMnQhDhjBK5j4XJ6pnBb81Tc_z-4LPOQrGgrs" />
<div className="relative z-10 flex items-center justify-between w-full bg-surface-container-lowest/80 backdrop-blur-md px-2 py-1 rounded">
<span className="font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[12px] text-primary">engineering</span>
            Team Alpha (Rapid Asphalt #02)
          </span>
<span className="font-label-sm text-label-sm text-primary">Hot-mix Compaction</span>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-2.5 space-y-1.5">
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Lifecycle Progress</span>
<span className="text-secondary font-medium">Stage 5 of 6: In Progress</span>
</div>
<div className="grid grid-cols-6 gap-1 pt-1">
<div className="flex flex-col items-center">
<div className="w-full h-1.5 rounded-full bg-primary"></div>
<span className="font-label-sm text-[9px] text-on-surface mt-1">Det</span>
</div>
<div className="flex flex-col items-center">
<div className="w-full h-1.5 rounded-full bg-primary"></div>
<span className="font-label-sm text-[9px] text-on-surface mt-1">Ass</span>
</div>
<div className="flex flex-col items-center">
<div className="w-full h-1.5 rounded-full bg-primary"></div>
<span className="font-label-sm text-[9px] text-on-surface mt-1">Prio</span>
</div>
<div className="flex flex-col items-center">
<div className="w-full h-1.5 rounded-full bg-primary"></div>
<span className="font-label-sm text-[9px] text-on-surface mt-1">Sch</span>
</div>
<div className="flex flex-col items-center">
<div className="w-full h-1.5 rounded-full bg-secondary animate-pulse"></div>
<span className="font-label-sm text-[9px] text-secondary font-bold mt-1">Prog</span>
</div>
<div className="flex flex-col items-center">
<div className="w-full h-1.5 rounded-full bg-surface-container-highest"></div>
<span className="font-label-sm text-[9px] text-on-surface-variant mt-1">Res</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-xs pt-1">
<button className="flex-1 py-2 rounded bg-primary-container hover:bg-primary text-on-primary-container font-label-md text-label-md flex items-center justify-center space-x-1.5 active:scale-[0.98] transition-transform">
<span className="material-symbols-outlined text-[16px]">sensors</span>
<span>Update Telemetry</span>
</button>
<button className="px-3 py-2 rounded bg-surface-container-high text-on-surface hover:text-primary font-label-md text-label-md flex items-center justify-center active:scale-[0.98] transition-colors">
<span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
</button>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md shadow-md space-y-space-sm border-l-4 border-l-error">
<div className="flex items-start justify-between">
<div className="min-w-0 pr-2">
<div className="flex items-center space-x-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold tracking-tight">#WO-4398</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest font-label-sm text-label-sm text-on-surface-variant">#CIV-8984</span>
</div>
<p className="font-headline-md text-headline-md text-on-surface font-semibold truncate mt-0.5">5th Ave & Pine Crossroads</p>
<span className="font-body-sm text-body-sm text-error flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[14px]">dangerous</span>
            Collapsed Storm Drain Grate (Sev-4)
          </span>
</div>
<span className="px-2 py-0.5 rounded bg-error-container text-on-error font-label-sm text-label-sm uppercase font-semibold">Crit 91/100</span>
</div>
<div className="bg-surface-container-low rounded-lg p-2.5 grid grid-cols-2 gap-2 text-on-surface-variant">
<div>
<span className="font-label-sm text-label-sm block text-on-surface-variant/80">Assigned Unit</span>
<span className="font-label-md text-label-md text-on-surface">Team Delta (Drainage)</span>
</div>
<div>
<span className="font-label-sm text-label-sm block text-on-surface-variant/80">Permit Status</span>
<span className="font-label-md text-label-md text-primary flex items-center gap-0.5">
<span className="material-symbols-outlined text-[13px]">check_circle</span> Approved
          </span>
</div>
<div className="col-span-2 pt-1">
<span className="font-label-sm text-label-sm block text-on-surface-variant/80">Material Staged</span>
<span className="font-label-md text-label-md text-on-surface">Heavy-duty Cast Iron Grate Type-C</span>
</div>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md shadow-md space-y-space-sm border-l-4 border-l-secondary">
<div className="flex items-start justify-between">
<div className="min-w-0 pr-2">
<div className="flex items-center space-x-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold tracking-tight">#WO-4380</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest font-label-sm text-label-sm text-on-surface-variant">#CIV-8840</span>
</div>
<p className="font-headline-md text-headline-md text-on-surface font-semibold truncate mt-0.5">Industrial Road B - Freight Sector</p>
<span className="font-body-sm text-body-sm text-secondary flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[14px]">grid_4x4</span>
            Extensive Alligator Cracking (Sev-3)
          </span>
</div>
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary font-label-sm text-label-sm uppercase font-semibold">High 78/100</span>
</div>
<div className="bg-surface-container-low rounded-lg p-2.5 flex items-center justify-between">
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-secondary text-[20px]">nightlight</span>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Scheduled Action</span>
<span className="font-label-md text-label-md text-on-surface">Milling Unit Booked (Night Shift 22:00)</span>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">chevron_right</span>
</div>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md shadow-md space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface-variant tracking-wider uppercase">Live Crew Telemetry</span>
<span className="font-label-sm text-label-sm text-primary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> GPS Synced
      </span>
</div>
<div className="space-y-2">

<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
<div className="flex items-center space-x-2.5 min-w-0">
<div className="w-7 h-7 rounded-md bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0">
<span className="material-symbols-outlined text-[16px]">local_shipping</span>
</div>
<div className="min-w-0">
<span className="font-label-md text-label-md text-on-surface block truncate">Crew 01 (Paving)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">Ward 03 - Residential Main</span>
</div>
</div>
<div className="text-right flex-shrink-0 pl-2">
<span className="font-label-sm text-label-sm text-primary block font-medium">On-Site</span>
<span className="font-label-sm text-[10px] text-on-surface-variant">ETA fin: 45 min</span>
</div>
</div>

<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
<div className="flex items-center space-x-2.5 min-w-0">
<div className="w-7 h-7 rounded-md bg-surface-container-high flex items-center justify-center text-secondary flex-shrink-0">
<span className="material-symbols-outlined text-[16px]">navigation</span>
</div>
<div className="min-w-0">
<span className="font-label-md text-label-md text-on-surface block truncate">Crew 02 (Hot-Mix)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">En Route - North Ring Rd</span>
</div>
</div>
<div className="text-right flex-shrink-0 pl-2">
<span className="font-label-sm text-label-sm text-secondary block font-medium">Transit</span>
<span className="font-label-sm text-[10px] text-on-surface-variant">Dist: 1.8 mi</span>
</div>
</div>

<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
<div className="flex items-center space-x-2.5 min-w-0">
<div className="w-7 h-7 rounded-md bg-surface-container-high flex items-center justify-center text-on-surface-variant flex-shrink-0">
<span className="material-symbols-outlined text-[16px]">warehouse</span>
</div>
<div className="min-w-0">
<span className="font-label-md text-label-md text-on-surface block truncate">Crew 03 (Milling Unit)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">Central Yard Base</span>
</div>
</div>
<div className="text-right flex-shrink-0 pl-2">
<span className="font-label-sm text-label-sm text-on-surface-variant block font-medium">Depot Standby</span>
<span className="font-label-sm text-[10px] text-on-surface-variant">Readiness: 100%</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md shadow-md space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface-variant tracking-wider uppercase">QA Sign-Off Protocol</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest font-label-sm text-label-sm text-on-surface">WO-4402 Pending</span>
</div>
<div className="space-y-2">
<label className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low cursor-pointer">
<div className="flex items-center space-x-2 min-w-0">
<input defaultChecked="" className="w-4 h-4 rounded text-primary bg-surface-container border-0 focus:ring-0 accent-primary" type="checkbox" />
<span className="font-body-md text-body-md text-on-surface truncate">Compaction density test recorded (&gt;95%)</span>
</div>
<span className="material-symbols-outlined text-[18px] text-primary flex-shrink-0">check_box</span>
</label>
<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center space-x-2 min-w-0">
<span className="material-symbols-outlined text-[18px] text-secondary flex-shrink-0">photo_camera</span>
<span className="font-body-md text-body-md text-on-surface truncate">Post-repair validation photo</span>
</div>
<button className="px-2.5 py-1 rounded bg-surface-container-high text-primary font-label-sm text-label-sm hover:bg-surface-container-highest transition-colors active:scale-95">
          Trigger Upload
        </button>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-sm flex items-center space-x-space-sm">
<span className="material-symbols-outlined text-primary text-[20px] flex-shrink-0">sync_saved_locally</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
      Civic Operations Service — Status updates sync to mock state store, ready for CityWorks API / Supabase integration.
    </p>
</div>
</div>
</main><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.4)]" data-active-classes="text-primary bg-surface-container-high/60"><div className="flex items-stretch overflow-x-auto no-scrollbar h-16 px-space-xs"><a className="flex flex-col items-center justify-center flex-1 min-w-[54px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="civicvision-ai-operational-dashboard" href="#"><span className="material-symbols-outlined text-[20px]">dashboard</span><span className="text-label-sm font-label-sm mt-0.5 truncate">Dash</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[54px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="civicvision-ai-inspection-detection" href="#"><span className="material-symbols-outlined text-[20px]">document_scanner</span><span className="text-label-sm font-label-sm mt-0.5 truncate">Inspect</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[54px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="civicvision-ai-priority-queue" href="#"><span className="material-symbols-outlined text-[20px]">emergency_home</span><span className="text-label-sm font-label-sm mt-0.5 truncate">Queue</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[54px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="civicvision-ai-geographic-map" href="#"><span className="material-symbols-outlined text-[20px]">map</span><span className="text-label-sm font-label-sm mt-0.5 truncate">Map</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[54px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="civicvision-ai-road-location-context" href="#"><span className="material-symbols-outlined text-[20px]">add_road</span><span className="text-label-sm font-label-sm mt-0.5 truncate">Context</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[54px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="civicvision-ai-infrastructure-analytics" href="#"><span className="material-symbols-outlined text-[20px]">analytics</span><span className="text-label-sm font-label-sm mt-0.5 truncate">Analytics</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[54px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="civicvision-ai-maintenance-operations" href="#"><span className="material-symbols-outlined text-[20px]">build_circle</span><span className="text-label-sm font-label-sm mt-0.5 truncate">Ops</span></a></div></nav></>
  )
}
