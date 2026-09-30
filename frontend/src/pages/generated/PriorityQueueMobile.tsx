// Generated from Stitch: civicvision_ai_priority_queue/code.html
export default function PriorityQueueMobile() {
  return (
    <><header className="fixed top-0 w-full z-50 pt-safe bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.35)]"><div className="h-16 px-gutter flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0"><img alt="CivicVision AI Logo" className="h-8 w-auto object-contain flex-shrink-0" src="https://lh3.googleusercontent.com/aida/AEtjO1UqSI9c3uHM06CCSNR-x3WSxXgriU-pnA77KUXG3NoLnAJOP7vf1OmHVqX_iifygrpfwUa202Hsj7mVRr1s1-jzB_fmjPjN5YTVU_TXiTLcgS-vmHDRwKqkQaRln2MfiX1f1dY7EYN4daguv8P5MRYc2xGxY-RKrVr-46sE9OhDCBSlsN_LxCl9fBjSfhdIV_A97BR_wtbCxmv28qtx7FGS9lnXhGNp_-qsGom0ca5LePHmnaCAJwfMmrg" /><div className="flex flex-col min-w-0"><div className="flex items-center gap-space-xs"><span className="text-headline-md font-headline-md text-on-surface tracking-tight truncate leading-none">CivicVision</span><span className="px-space-xs py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">AI</span></div><span className="text-label-sm font-label-sm text-on-surface-variant truncate mt-0.5 leading-none">Civic Issues & Queue</span></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><div className="hidden sm:flex items-center gap-space-xs px-space-xs py-1 rounded bg-surface-container-low"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span><span className="text-label-sm font-label-sm text-primary uppercase">LIVE</span></div><button aria-label="Notifications" className="w-11 h-11 flex items-center justify-center rounded-lg bg-surface-container text-on-surface-variant hover:text-primary transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="sticky top-0 z-30 bg-surface/95 backdrop-blur-md px-gutter pt-space-sm pb-space-md shadow-md">

<div className="relative w-full flex items-center mb-space-sm">
<div className="absolute left-3 flex items-center pointer-events-none text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">search</span>
</div>
<input className="w-full bg-surface-container-lowest text-on-surface placeholder:text-outline text-body-md font-body-md pl-9 pr-8 py-2 rounded-xl focus:outline-none focus:bg-surface-container-high transition-colors shadow-sm" id="queue-search" placeholder="Filter by ID, street, or anomaly tag..." type="search" />
<button className="absolute right-2 text-on-surface-variant hover:text-on-surface p-1 rounded-lg" data-onclick="document.getElementById('queue-search').value=''; filterList();" type="button">
<span className="material-symbols-outlined text-[16px]">close</span>
</button>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-1.5 scrollbar-none text-label-sm font-label-sm">
<span className="text-on-surface-variant text-[9px] uppercase tracking-wider pl-0.5">Priority:</span>
<button className="filter-btn px-2.5 py-1 rounded-full bg-primary text-on-primary font-semibold flex-shrink-0 transition-all shadow-sm" data-onclick="setFilter('priority', 'all', this)">ALL (42)</button>
<button className="filter-btn px-2.5 py-1 rounded-full bg-surface-container-high text-tertiary hover:bg-surface-bright flex-shrink-0 flex items-center gap-1 transition-all" data-onclick="setFilter('priority', 'critical', this)">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>CRITICAL (7)
      </button>
<button className="filter-btn px-2.5 py-1 rounded-full bg-surface-container-high text-secondary hover:bg-surface-bright flex-shrink-0 transition-all" data-onclick="setFilter('priority', 'high', this)">HIGH (12)</button>
<button className="filter-btn px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-bright flex-shrink-0 transition-all" data-onclick="setFilter('priority', 'med', this)">MED (15)</button>
<button className="filter-btn px-2.5 py-1 rounded-full bg-surface-container-high text-outline hover:bg-surface-bright flex-shrink-0 transition-all" data-onclick="setFilter('priority', 'low', this)">LOW (8)</button>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pt-1 scrollbar-none text-label-sm font-label-sm">
<span className="text-on-surface-variant text-[9px] uppercase tracking-wider pl-0.5">Category:</span>
<button className="cat-btn px-2 py-0.5 rounded bg-primary-container text-on-primary-container flex-shrink-0" data-onclick="setFilter('type', 'all', this)">All Classes</button>
<button className="cat-btn px-2 py-0.5 rounded bg-surface-container text-on-surface-variant hover:text-on-surface flex-shrink-0" data-onclick="setFilter('type', 'pothole', this)">Potholes (19)</button>
<button className="cat-btn px-2 py-0.5 rounded bg-surface-container text-on-surface-variant hover:text-on-surface flex-shrink-0" data-onclick="setFilter('type', 'drainage', this)">Drainage (8)</button>
<button className="cat-btn px-2 py-0.5 rounded bg-surface-container text-on-surface-variant hover:text-on-surface flex-shrink-0" data-onclick="setFilter('type', 'cracks', this)">Cracks (11)</button>
<button className="cat-btn px-2 py-0.5 rounded bg-surface-container text-on-surface-variant hover:text-on-surface flex-shrink-0" data-onclick="setFilter('type', 'debris', this)">Debris (4)</button>
</div>
</div>

<div className="px-gutter pt-space-md pb-space-xs flex items-center justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="text-label-md font-label-md text-primary tracking-wider uppercase font-semibold">Live Operational Queue</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-high text-primary font-label-sm text-[9px]">REST v3</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
<span className="text-on-surface font-semibold" id="active-count">42</span> Active Triage Items — Sorted by Priority Score (Desc)
      </p>
</div>
<div className="flex items-center gap-1.5 bg-surface-container-lowest px-2 py-1 rounded-lg shadow-sm">
<span className="material-symbols-outlined text-[14px] text-primary animate-spin" style={{animationDuration: '4s'}}>sync</span>
<span className="text-label-sm font-label-sm text-on-surface-variant text-[9px]">0.4s ago</span>
</div>
</div>

<div className="px-gutter py-space-sm flex flex-col gap-space-md" id="issues-container">

<article className="issue-card bg-surface-container-low rounded-xl p-3.5 shadow-md relative overflow-hidden cursor-pointer hover:bg-surface-container transition-all active:scale-[0.99] group" data-id="CIV-9021" data-priority="critical" data-type="pothole" data-onclick="openDetailsDrawer('CIV-9021', 'Deep Structural Pothole - Lane 2', '94', 'CRITICAL', 'North Ring Rd, Near City Hospital', 'Emergency Hot-mix patch', 'Team Alpha Assigned', 'traffic_high', 'hospital')">

<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary"></div>
<div className="pl-1">

<div className="flex items-start justify-between gap-space-xs mb-1.5">
<div className="flex items-center gap-space-xs flex-wrap min-w-0">
<span className="text-label-sm font-label-sm text-primary tracking-wider bg-surface-container-lowest px-1.5 py-0.5 rounded">#CIV-9021</span>
<span className="text-label-sm font-label-sm px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span>
              CRITICAL
            </span>
<span className="text-label-sm font-label-sm text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">Score: 94/100</span>
</div>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary transition-colors">chevron_right</span>
</div>

<h3 className="text-headline-md font-headline-md text-on-surface tracking-tight mb-1">Deep Structural Pothole - Lane 2</h3>
<div className="flex items-center gap-1 text-on-surface-variant text-body-sm font-body-sm mb-2.5">
<span className="material-symbols-outlined text-[15px] text-outline">location_on</span>
<span className="truncate">North Ring Rd, Near City Hospital</span>
</div>

<div className="relative w-full h-32 rounded-lg overflow-hidden bg-surface-container-lowest mb-2.5">
<img className="w-full h-full object-cover" data-alt="Close up dark asphalt road surface inspection photo showing an expansive 30cm deep asphalt cavity pothole with jagged crushed stone aggregate exposed. High contrast city road inspection imagery with neon cyan bounding boxes and tactical telemetry markers." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkic0ZDlgAn6h-Z92UHg3m-O25SEe13pyiPzn1BCaGcgSJcVx52QHOUB5ZlE-5RYoFW5MD_sk5zMyiJAeIwsfiLfL_lrpTp2-uJdiDmdsNNvx17ITHf3eCk9u56t-u-svajr9bq3uUIn4t2lxVjyMUWUqUA649Dn1GwS8m1GeaD0fHG_-BvN4bJ7eU78ZoNxBZh2Pm5lCoefvjLbulrNiT-f54lhBOXV8ipMmE9kaUm0UotBT-LfQC" />

<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>
<div className="absolute top-2 left-2 flex items-center gap-1 bg-surface-container-lowest/85 backdrop-blur-md px-1.5 py-0.5 rounded">
<span className="material-symbols-outlined text-[13px] text-primary">visibility</span>
<span className="text-label-sm font-label-sm text-primary">CV INFERENCE 98.4%</span>
</div>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-label-sm font-label-sm">
<span className="bg-surface-container-high/90 text-on-surface px-1.5 py-0.5 rounded">Depth: ~14.2cm</span>
<span className="bg-tertiary/20 text-tertiary px-1.5 py-0.5 rounded font-semibold">Extreme Hazard</span>
</div>
</div>

<div className="flex flex-wrap items-center gap-1.5 mb-3">
<div className="flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[13px] text-secondary">traffic</span>
<span>High Arterial Traffic</span>
</div>
<div className="flex items-center gap-1 px-2 py-0.5 rounded bg-error-container/30 text-tertiary text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[13px] text-tertiary">local_hospital</span>
<span>Hospital Zone (0.2km)</span>
</div>
</div>

<div className="flex items-center justify-between pt-2 bg-surface-container-lowest/60 -mx-3.5 -mb-3.5 px-3.5 py-2.5 rounded-b-xl">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="text-label-sm font-label-sm text-on-surface">Scheduled: <strong className="text-secondary">Team Alpha</strong></span>
</div>
<button className="px-2.5 py-1 rounded bg-primary-container text-on-primary-container text-label-sm font-label-sm font-semibold hover:brightness-110 active:scale-95 transition-all flex items-center gap-1 shadow-sm" data-onclick="event.stopPropagation(); triggerDispatch('CIV-9021');" type="button">
<span className="material-symbols-outlined text-[13px]">bolt</span>
<span>Hot-Mix Patch</span>
</button>
</div>
</div>
</article>

<article className="issue-card bg-surface-container-low rounded-xl p-3.5 shadow-md relative overflow-hidden cursor-pointer hover:bg-surface-container transition-all active:scale-[0.99] group" data-id="CIV-8984" data-priority="critical" data-type="drainage" data-onclick="openDetailsDrawer('CIV-8984', 'Collapsed Storm Drain Grate', '91', 'CRITICAL', '5th Avenue & Pine Cross', 'Grate replacement & cone perimeter', 'Triage Pending', 'pedestrian_risk', 'drainage')">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary"></div>
<div className="pl-1">
<div className="flex items-start justify-between gap-space-xs mb-1.5">
<div className="flex items-center gap-space-xs flex-wrap min-w-0">
<span className="text-label-sm font-label-sm text-primary tracking-wider bg-surface-container-lowest px-1.5 py-0.5 rounded">#CIV-8984</span>
<span className="text-label-sm font-label-sm px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
              CRITICAL
            </span>
<span className="text-label-sm font-label-sm text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">Score: 91/100</span>
</div>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary transition-colors">chevron_right</span>
</div>
<h3 className="text-headline-md font-headline-md text-on-surface tracking-tight mb-1">Collapsed Storm Drain Grate</h3>
<div className="flex items-center gap-1 text-on-surface-variant text-body-sm font-body-sm mb-2.5">
<span className="material-symbols-outlined text-[15px] text-outline">location_on</span>
<span className="truncate">5th Avenue & Pine Cross (Pedestrian Crosswalk)</span>
</div>

<div className="relative w-full h-24 rounded-lg overflow-hidden bg-surface-container-lowest mb-2.5">
<img className="w-full h-full object-cover" data-alt="Urban street curb with a fractured iron drain grate sunken into storm water inlet on a dark wet roadway. High angle inspection camera telemetry overlay showing safety zone boundaries and pedestrian crossing stripes." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6VGedGWtVdZeLaSYM_Lrq3NaQL5_Eq65mRodEOMURjqCoV1k8-0V9HTIlUikizO9eRt6KRIUuDdLwx6SW46olzvXi6-ALBHT-UwWJdLw8BaA4hwH8GKLslGjSJHLWttMtyJghiii1kxTJWCa7aNlPPbn7zKMuEll7uG1Zszf1yBU0-gVL190wsF68--K6lNd205nqnn2GCLaEBmzm6ptd6nbEz0TvWtBL7u3ivgdRwBDQh-p0FnpJ" />
<div className="absolute inset-0 bg-surface-container-lowest/50 backdrop-blur-[1px]"></div>
<div className="absolute top-2 right-2 bg-surface-container-highest/90 text-on-surface px-1.5 py-0.5 rounded text-label-sm font-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-tertiary">warning</span>
<span>Severe Cavity</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-1.5 mb-3">
<div className="flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[13px] text-secondary">directions_walk</span>
<span>Pedestrian Hazard: High</span>
</div>
<div className="flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[13px] text-outline">water_drop</span>
<span>Flash Flood Risk</span>
</div>
</div>

<div className="flex items-center justify-between pt-2 bg-surface-container-lowest/60 -mx-3.5 -mb-3.5 px-3.5 py-2.5 rounded-b-xl">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="text-label-sm font-label-sm text-tertiary font-semibold">Triage Pending Action</span>
</div>
<button className="px-2.5 py-1 rounded bg-tertiary text-on-tertiary text-label-sm font-label-sm font-semibold hover:brightness-110 active:scale-95 transition-all flex items-center gap-1 shadow-sm" data-onclick="event.stopPropagation(); triggerDispatch('CIV-8984');" type="button">
<span className="material-symbols-outlined text-[13px]">shield</span>
<span>Perimeter Cone</span>
</button>
</div>
</div>
</article>

<article className="issue-card bg-surface-container-low rounded-xl p-3.5 shadow-md relative overflow-hidden cursor-pointer hover:bg-surface-container transition-all active:scale-[0.99] group" data-id="CIV-8840" data-priority="high" data-type="cracks" data-onclick="openDetailsDrawer('CIV-8840', 'Extensive Alligator Cracking', '78', 'HIGH', 'Industrial Sector Road B', 'Surface Milling & Resurfacing', 'Assessed (Structural)', 'heavy_freight', 'cracking')">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"></div>
<div className="pl-1">
<div className="flex items-start justify-between gap-space-xs mb-1.5">
<div className="flex items-center gap-space-xs flex-wrap min-w-0">
<span className="text-label-sm font-label-sm text-primary tracking-wider bg-surface-container-lowest px-1.5 py-0.5 rounded">#CIV-8840</span>
<span className="text-label-sm font-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold">
              HIGH
            </span>
<span className="text-label-sm font-label-sm text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">Score: 78/100</span>
</div>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary transition-colors">chevron_right</span>
</div>
<h3 className="text-headline-md font-headline-md text-on-surface tracking-tight mb-1">Extensive Alligator Cracking</h3>
<div className="flex items-center gap-1 text-on-surface-variant text-body-sm font-body-sm mb-2.5">
<span className="material-symbols-outlined text-[15px] text-outline">location_on</span>
<span className="truncate">Industrial Sector Road B (Mile 4.2 to 4.8)</span>
</div>
<div className="flex flex-wrap items-center gap-1.5 mb-3">
<div className="flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[13px] text-secondary">local_shipping</span>
<span>Heavy Freight Corridor</span>
</div>
<div className="flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[13px] text-outline">straighten</span>
<span>620m² Affected Area</span>
</div>
</div>

<div className="flex items-center justify-between pt-2 bg-surface-container-lowest/60 -mx-3.5 -mb-3.5 px-3.5 py-2.5 rounded-b-xl">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="text-label-sm font-label-sm text-on-surface">Status: <strong>Assessed</strong></span>
</div>
<button className="px-2.5 py-1 rounded bg-surface-container text-on-surface text-label-sm font-label-sm font-semibold hover:bg-surface-bright active:scale-95 transition-all flex items-center gap-1 shadow-sm" data-onclick="event.stopPropagation(); triggerDispatch('CIV-8840');" type="button">
<span className="material-symbols-outlined text-[13px]">architecture</span>
<span>Schedule Milling</span>
</button>
</div>
</div>
</article>

<article className="issue-card bg-surface-container-low rounded-xl p-3.5 shadow-md relative overflow-hidden cursor-pointer hover:bg-surface-container transition-all active:scale-[0.99] group" data-id="CIV-8712" data-priority="med" data-type="debris" data-onclick="openDetailsDrawer('CIV-8712', 'Loose Gravel & Road Surface Erosion', '58', 'MEDIUM', 'Westside Outer Link', 'Surface sweeping & seal coat', 'Prioritised', 'low_traffic', 'gravel')">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-outline"></div>
<div className="pl-1">
<div className="flex items-start justify-between gap-space-xs mb-1.5">
<div className="flex items-center gap-space-xs flex-wrap min-w-0">
<span className="text-label-sm font-label-sm text-primary tracking-wider bg-surface-container-lowest px-1.5 py-0.5 rounded">#CIV-8712</span>
<span className="text-label-sm font-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-semibold">
              MEDIUM
            </span>
<span className="text-label-sm font-label-sm text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">Score: 58/100</span>
</div>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary transition-colors">chevron_right</span>
</div>
<h3 className="text-headline-md font-headline-md text-on-surface tracking-tight mb-1">Loose Gravel & Surface Erosion</h3>
<div className="flex items-center gap-1 text-on-surface-variant text-body-sm font-body-sm mb-2.5">
<span className="material-symbols-outlined text-[15px] text-outline">location_on</span>
<span className="truncate">Westside Outer Link (Shoulder boundary)</span>
</div>
<div className="flex flex-wrap items-center gap-1.5 mb-3">
<div className="flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[13px] text-outline">wb_sunny</span>
<span>Weather: Dry & Clear</span>
</div>
<div className="flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[13px] text-outline">speed</span>
<span>Speed Limit: 60 km/h</span>
</div>
</div>

<div className="flex items-center justify-between pt-2 bg-surface-container-lowest/60 -mx-3.5 -mb-3.5 px-3.5 py-2.5 rounded-b-xl">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-outline"></span>
<span className="text-label-sm font-label-sm text-on-surface-variant">Status: Prioritised</span>
</div>
<button className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant text-label-sm font-label-sm hover:text-on-surface active:scale-95 transition-all flex items-center gap-1 shadow-sm" data-onclick="event.stopPropagation(); triggerDispatch('CIV-8712');" type="button">
<span className="material-symbols-outlined text-[13px]">cleaning_services</span>
<span>Sweeper Queue</span>
</button>
</div>
</div>
</article>
</div>

<div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none opacity-0 transition-all duration-300 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container-highest text-primary shadow-xl" id="action-toast">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span className="text-label-sm font-label-sm font-semibold" id="toast-msg">Dispatch Order Enqueued</span>
</div>

<div className="fixed inset-x-0 bottom-0 z-50 transform translate-y-full transition-transform duration-300 ease-out bg-surface-container-low rounded-t-2xl shadow-2xl pb-safe" id="detail-drawer">

<div className="w-full flex items-center justify-center pt-3 pb-2 cursor-pointer" data-onclick="closeDetailsDrawer()">
<div className="w-10 h-1 rounded-full bg-outline-variant"></div>
</div>

<div className="px-gutter pb-6 pt-1 max-h-[724px] overflow-y-auto">

<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="text-label-sm font-label-sm text-primary tracking-wider bg-surface-container-lowest px-2 py-0.5 rounded" id="drawer-id">#CIV-9021</span>
<span className="text-label-sm font-label-sm px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-semibold" id="drawer-priority">CRITICAL</span>
</div>
<button className="p-1 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface" data-onclick="closeDetailsDrawer()">
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
<h2 className="text-headline-lg-mobile font-headline-lg-mobile text-on-surface tracking-tight mb-1" id="drawer-title">Deep Structural Pothole - Lane 2</h2>
<p className="text-body-sm font-body-sm text-on-surface-variant mb-space-md flex items-center gap-1" id="drawer-location">
<span className="material-symbols-outlined text-[15px] text-primary">location_on</span>
        North Ring Rd, Near City Hospital
      </p>

<div className="grid grid-cols-2 gap-2 mb-space-md">
<div className="p-2.5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<span className="text-label-sm font-label-sm text-on-surface-variant uppercase text-[9px]">Priority Risk Index</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="text-headline-md font-headline-md text-tertiary" id="drawer-score">94</span>
<span className="text-label-sm font-label-sm text-on-surface-variant">/ 100</span>
</div>
<span className="text-label-sm font-label-sm text-primary mt-1 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            Urban Severity Top 2%
          </span>
</div>
<div className="p-2.5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<span className="text-label-sm font-label-sm text-on-surface-variant uppercase text-[9px]">Action Recommendation</span>
<p className="text-body-sm font-body-sm font-semibold text-on-surface mt-1" id="drawer-action">Emergency Hot-mix patch</p>
<span className="text-label-sm font-label-sm text-secondary mt-1" id="drawer-status">Scheduled: Team Alpha</span>
</div>
</div>

<div className="mb-space-md">
<div className="flex items-center justify-between mb-1.5">
<span className="text-label-sm font-label-sm text-on-surface-variant uppercase text-[9px] tracking-wider">Spatial Geospatial Context</span>
<span className="text-label-sm font-label-sm text-primary font-mono">LAT: 37.7749 • LNG: -122.4194</span>
</div>
<div className="w-full h-36 bg-cover bg-center rounded-xl relative overflow-hidden shadow-inner flex items-center justify-center" data-location="North Ring Road, San Francisco" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRuQgex3f-I8R3gylal4-H3L_YeF44S-F8o41OiMSOcsvwpkN6bN-7QMg6gH6sCJq4nmVYvJ4rj1JP720ARkr5t_6FukXOsXglV-sDcT4ce4Gdl8w-QRh9-c1zWJzZd3K3jkI8X338TTAcmK4BhMsyAF3NK1Mu-4VVgFB7Qe-CpiW3sFxMsEz_-3Da49Gx0pHXH7fEJe2T0c1SpzBk-Qc0Vadz-nEPJFwm9cHIxlZcckVB7MAMH5jH')"}}>

<div className="absolute inset-0 bg-surface-container-lowest/30 backdrop-blur-[0.5px]"></div>
<div className="relative z-10 flex flex-col items-center animate-bounce">
<span className="material-symbols-outlined text-[32px] text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>location_pin</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface text-label-sm font-label-sm shadow-md">Incident Target</span>
</div>
</div>
</div>

<div className="flex items-center gap-2">
<button className="flex-1 py-2.5 px-3 rounded-xl bg-primary text-on-primary font-headline-md text-body-md font-semibold flex items-center justify-center gap-2 shadow-lg hover:brightness-105 active:scale-95 transition-all" data-onclick="triggerDispatch(currentSelectedId); closeDetailsDrawer();">
<span className="material-symbols-outlined text-[18px]">send</span>
<span>Dispatch Crew Now</span>
</button>
<button className="py-2.5 px-3.5 rounded-xl bg-surface-container text-on-surface hover:bg-surface-bright active:scale-95 transition-all flex items-center justify-center" data-onclick="toggleMarkVerified(this)">
<span className="material-symbols-outlined text-[20px]">bookmark</span>
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 bg-surface-container-lowest/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-scrim" data-onclick="closeDetailsDrawer()"></div>

<div className="fixed bottom-20 left-4 right-4 z-20 pointer-events-none">
<div className="pointer-events-auto bg-surface-container-high/90 backdrop-blur-xl px-3.5 py-2.5 rounded-full shadow-2xl flex items-center justify-between text-label-sm font-label-sm">
<div className="flex items-center gap-2 min-w-0">
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
<span className="text-on-surface truncate">Ready for CityWorks API Gateway Sync</span>
</div>
<button className="flex-shrink-0 flex items-center gap-1 bg-surface-container-highest hover:bg-surface-bright px-2.5 py-1 rounded-full text-primary active:scale-95 transition-transform" data-onclick="refreshQueue()">
<span className="material-symbols-outlined text-[13px]">refresh</span>
<span>Pull Telemetry</span>
</button>
</div>
</div>
</div>
</main><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.4)]" data-active-classes="text-primary bg-surface-container-high/60"><div className="flex items-stretch justify-around h-16 px-space-xs"><a className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="overview" href="#"><span className="material-symbols-outlined text-[22px]">dashboard</span><span className="text-label-sm font-label-sm mt-0.5">Overview</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="ai-inspection" href="#"><span className="material-symbols-outlined text-[22px]">document_scanner</span><span className="text-label-sm font-label-sm mt-0.5">Inspect</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="civic-issues-queue" href="#"><span className="material-symbols-outlined text-[22px]">emergency_home</span><span className="text-label-sm font-label-sm mt-0.5">Issues</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="geographic" href="#"><span className="material-symbols-outlined text-[22px]">map</span><span className="text-label-sm font-label-sm mt-0.5">Map</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="analytics-maintenance" href="#"><span className="material-symbols-outlined text-[22px]">analytics</span><span className="text-label-sm font-label-sm mt-0.5">Analytics</span></a></div></nav></>
  )
}
