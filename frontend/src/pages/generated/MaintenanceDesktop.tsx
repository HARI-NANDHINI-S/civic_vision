// Generated from Stitch: civicvision_ai_desktop_maintenance_operations/code.html
export default function MaintenanceDesktop() {
  return (
    <><div className="flex flex-col w-full">



<section className="w-full px-gutter-desktop py-space-lg flex flex-col gap-space-lg bg-surface-container-low shadow-sm">
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">

<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<div className="flex items-center gap-space-xs px-space-sm py-0.5 rounded bg-surface-container-highest text-primary">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Dispatch Grid Active</span>
</div>
<span className="text-on-surface-variant font-label-sm text-label-sm font-mono">•</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">8 Crews On-Field Telemetry Synchronized</span>
<span className="text-on-surface-variant font-label-sm text-label-sm font-mono">•</span>
<span className="font-label-sm text-label-sm text-secondary font-mono">LATENCY: 14ms</span>
</div>
<div className="flex items-baseline gap-space-md">
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Maintenance & Work Order Operations</h1>
<span className="font-label-md text-label-md text-on-surface-variant font-mono">[SYS_ID: CIVIC-MAINT-OPS-NODE-04]</span>
</div>
</div>

<div className="flex items-center gap-space-md flex-wrap">

<div className="flex items-center gap-space-md bg-surface-container px-space-md py-space-sm rounded">
<div className="relative w-10 h-10 flex items-center justify-center">
<svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
<circle className="text-surface-container-highest" cx="18" cy="18" fill="none" r="14" stroke="currentColor" strokeWidth="3"></circle>
<circle className="text-primary" cx="18" cy="18" fill="none" r="14" stroke="currentColor" strokeDasharray="88, 100" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<span className="absolute font-label-sm text-label-sm font-bold text-on-surface">95%</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">24H SLA Target</span>
<span className="font-label-md text-label-md text-primary font-bold font-mono">95.4% COMPLIANT</span>
</div>
</div>

<button className="group relative flex items-center gap-space-sm px-space-lg py-2.5 rounded bg-primary text-on-primary font-headline-md text-headline-md text-sm font-semibold transition-all hover:bg-primary-fixed tactical-glow-primary active:scale-[0.98]" id="btn-emergency-modal" type="button">
<span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:rotate-90">add_alert</span>
<span>Create Emergency Work Order</span>
<span className="inline-block w-1.5 h-1.5 rounded-full bg-on-primary animate-pulse"></span>
</button>
</div>
</div>

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pt-space-xs">
<div className="flex items-center gap-1 overflow-x-auto bg-surface-container-lowest p-1 rounded">
<button className="filter-btn active-filter px-space-md py-1.5 rounded font-label-md text-label-md font-semibold text-on-primary bg-primary transition-colors" type="button">
          All Orders (86)
        </button>
<button className="filter-btn px-space-md py-1.5 rounded font-label-md text-label-md font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-1.5" type="button">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          In Progress (24)
        </button>
<button className="filter-btn px-space-md py-1.5 rounded font-label-md text-label-md font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" type="button">
          Scheduled (18)
        </button>
<button className="filter-btn px-space-md py-1.5 rounded font-label-md text-label-md font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-1.5" type="button">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          Awaiting QA (14)
        </button>
<button className="filter-btn px-space-md py-1.5 rounded font-label-md text-label-md font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" type="button">
          Resolved (30)
        </button>
</div>

<div className="flex items-center gap-space-lg text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-space-xs">
<span className="text-tertiary font-bold font-mono">2</span>
<span>Critical Severity (Tier 1)</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="text-secondary font-bold font-mono">11</span>
<span>Material Delivery Active</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="text-primary font-bold font-mono">4</span>
<span>Ready for Inspector Sign-Off</span>
</div>
</div>
</div>
</section>

<div className="w-full px-gutter-desktop py-space-lg grid grid-cols-1 xl:grid-cols-12 gap-gutter-desktop items-start">

<div className="xl:col-span-8 flex flex-col gap-space-lg">

<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-tertiary-container text-[20px]">crisis_alert</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Active Operations Priority Queue</h2>
<span className="px-space-xs py-0.5 rounded bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-mono font-bold">2 CRITICAL EN-ROUTE</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">AUTO-REFRESH: 5s</span>
</div>

<div className="group relative bg-surface-container-low rounded p-space-md flex flex-col gap-space-md shadow-md transition-all hover:bg-surface-container overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary-container"></div>

<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pl-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="px-space-sm py-0.5 rounded bg-surface-container-highest text-on-surface font-label-md text-label-md font-mono font-bold">WO-4402</span>
<span className="px-space-sm py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-bold uppercase tracking-wider">CRITICAL 94/100</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono">ZONE 08-N</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">• Reported 1h 18m ago</span>
</div>

<div className="flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-lowest text-tertiary font-label-sm text-label-sm font-mono">
<span className="material-symbols-outlined text-[16px] animate-pulse">timer</span>
<span>SLA LIMIT: 03h 42m remaining</span>
</div>
</div>

<div className="pl-space-xs flex flex-col gap-0.5">
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">North Ring Arterial (MP 14.2) - Deep Structural Cavity</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px]">location_on</span>
<span>Northbound Lane 2 (Heavy Freight Corridor) • Lat: 42.3614, Lon: -71.0578</span>
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md pl-space-xs">

<div className="md:col-span-4 relative rounded overflow-hidden h-36 bg-surface-container-lowest">
<img className="w-full h-full object-cover" data-alt="Dark asphalt highway road showing a large deep pothole fissure with visible sub-base gravel aggregate, daylight technical documentation photo, sharp street lighting, high resolution pavement structural analysis shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-zq1xg1PxyVPPNhEpQlZaqCN9u8TaUU8rkbvo176Pbym8OwN6QYBPeIvyz_CwxKspqROYYOim1bDXQX1NdYAfNxfOBQVCUs2vhl9b3G8KUppo2d6sEO3fjHdGDZwZR7SJo0KORwhKreS212NPHNmDaesx7u2wXnbOZp8twetoJ1dD9g_hl1Jo5_CNBW8j4pv77L3K-H32eakkuCbq_bx1gsXim593PSqlqLZ63R4iewc1FtN1dPTm" />

<div className="absolute inset-x-6 inset-y-4 pointer-events-none" style={{boxShadow: 'inset 0 0 0 1.5px #4edea3'}}>
<div className="absolute -top-3 left-0 bg-surface-container-lowest px-1.5 py-0.5 rounded font-label-sm text-label-sm text-primary font-mono flex items-center gap-1 font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  DEEP_CAVITY 98.4%
                </div>

<div className="absolute -top-1 -left-1 w-2 h-2 bg-primary"></div>
<div className="absolute -top-1 -right-1 w-2 h-2 bg-primary"></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary"></div>
</div>
<div className="absolute bottom-1 right-1 px-1 bg-surface-container-lowest/80 rounded font-label-sm text-label-sm text-on-surface-variant font-mono">
                CAM_NRA_14
              </div>
</div>

<div className="md:col-span-8 flex flex-col justify-between gap-space-sm">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span className="font-semibold text-primary">Stage 5 of 6: In Progress (Compaction Phase)</span>
<span className="font-mono">82% COMPLETE</span>
</div>

<div className="w-full bg-surface-container-highest h-2 rounded overflow-hidden flex">
<div className="bg-primary h-full w-5/6 rounded transition-all"></div>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm bg-surface-container-lowest p-space-sm rounded">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">ASSIGNED CREW</span>
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">Team Alpha (#02)</span>
<span className="font-label-sm text-label-sm text-primary font-mono">0.4 km away (On-Site)</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">HOT-MIX TONNAGE</span>
<span className="font-label-md text-label-md text-on-surface font-mono font-semibold">4.8 / 5.0 Tons</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">Binder Grade PG 64-28</span>
</div>
<div className="flex flex-col col-span-2 sm:col-span-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">TRAFFIC IMPACT</span>
<span className="font-label-md text-label-md text-secondary font-semibold">Lane Closure Active</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">TMA Buffer In Place</span>
</div>
</div>

<div className="flex items-center justify-end gap-space-sm pt-1">
<button className="px-space-md py-1.5 rounded bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-space-xs" type="button">
<span className="material-symbols-outlined text-[16px]">videocam</span>
<span>Crew Live Cam</span>
</button>
<button className="open-qa-modal px-space-md py-1.5 rounded bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold hover:bg-primary transition-colors flex items-center gap-space-xs" type="button">
<span className="material-symbols-outlined text-[16px]">fact_check</span>
<span>Inspect & QA Sign-Off</span>
</button>
</div>
</div>
</div>
</div>

<div className="group relative bg-surface-container-low rounded p-space-md flex flex-col gap-space-md shadow-md transition-all hover:bg-surface-container overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary-container"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pl-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="px-space-sm py-0.5 rounded bg-surface-container-highest text-on-surface font-label-md text-label-md font-mono font-bold">WO-4398</span>
<span className="px-space-sm py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-bold uppercase tracking-wider">CRITICAL 91/100</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono">ZONE 02-C</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">• Reported 2h 45m ago</span>
</div>
<div className="flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-lowest text-secondary font-label-sm text-label-sm font-mono">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span>SLA LIMIT: 05h 15m remaining</span>
</div>
</div>
<div className="pl-space-xs flex flex-col gap-0.5">
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">5th Ave & Pine Crossroads - Collapsed Storm Drain Grate</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px]">location_on</span>
<span>Pedestrian Crosswalk East Junction • High cyclist traffic volume</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md pl-space-xs">
<div className="md:col-span-4 relative rounded overflow-hidden h-36 bg-surface-container-lowest">
<img className="w-full h-full object-cover" data-alt="Urban concrete curb and asphalt intersection with a fractured metal storm drain basin and bent steel grate, marked by safety cones, daytime municipal street infrastructure close-up photograph" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByn29hvmk35wXQMpkmiVGvDjcWbb63KEfV5wyrAhveXo-_M2Yk--u5f0xJF9IxmxESiWentI-yTLWDSYDWyxIO4Hy5yMG8tqAQorIiXnmWgurP-XEH-nyUUOWq_XQ8S0oKGS99VOfMH-L0l49o7xA6VZyvpOrFBpJ0z_E5qqbj0yDpseaTDQZhw9Efg7EaOk0ik3AZu5fswNLSpyywWgTljgcor5GX43cOuolrYj1dITKQdFUgl3cq" />
<div className="absolute inset-x-8 inset-y-5 pointer-events-none" style={{boxShadow: 'inset 0 0 0 1.5px #ff7884'}}>
<div className="absolute -top-3 left-0 bg-surface-container-lowest px-1.5 py-0.5 rounded font-label-sm text-label-sm text-tertiary font-mono flex items-center gap-1 font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  HAZARD_GRATE 96.1%
                </div>
</div>
</div>
<div className="md:col-span-8 flex flex-col justify-between gap-space-sm">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span className="font-semibold text-secondary">Stage 4 of 6: Scheduled (Permits Approved)</span>
<span className="font-mono">60% COMPLETE</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded overflow-hidden flex">
<div className="bg-secondary h-full w-3/5 rounded transition-all"></div>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm bg-surface-container-lowest p-space-sm rounded">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">ASSIGNED CREW</span>
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">Team Delta (Drainage)</span>
<span className="font-label-sm text-label-sm text-secondary font-mono">En Route • ETA 8m</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">MATERIAL SPEC</span>
<span className="font-label-md text-label-md text-on-surface font-mono font-semibold">Cast Iron 24x36"</span>
<span className="font-label-sm text-label-sm text-primary font-mono">Staged on Flatbed</span>
</div>
<div className="flex flex-col col-span-2 sm:col-span-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">POLICE ESCORT</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Active Clear</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">Unit #412 Assigned</span>
</div>
</div>
<div className="flex items-center justify-end gap-space-sm pt-1">
<button className="px-space-md py-1.5 rounded bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-space-xs" type="button">
<span className="material-symbols-outlined text-[16px]">route</span>
<span>Track Crew GPS</span>
</button>
<button className="px-space-md py-1.5 rounded bg-surface-container-highest text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-bright transition-colors flex items-center gap-space-xs" type="button">
<span className="material-symbols-outlined text-[16px]">edit_document</span>
<span>Update Work Log</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-md pt-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">table_rows</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Scheduled & Secondary Response Feed</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">SHOWING 2 OF 18</span>
</div>
<div className="flex flex-col gap-space-xs">

<div className="bg-surface-container-low p-space-md rounded flex flex-col md:flex-row md:items-center justify-between gap-space-md hover:bg-surface-container transition-colors">
<div className="flex items-center gap-space-md">
<div className="w-1.5 h-10 rounded-full bg-secondary"></div>
<div className="flex flex-col gap-0.5">
<div className="flex items-center gap-space-sm">
<span className="font-label-md text-label-md text-on-surface font-mono font-bold">WO-4380</span>
<span className="px-space-xs py-0.2 rounded bg-secondary/20 text-secondary font-label-sm text-label-sm font-semibold">HIGH 78/100</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Milling & Infill</span>
</div>
<span className="font-body-md text-body-md text-on-surface font-medium">Industrial Road B - Extensive Alligator Cracking</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">Assigned: Night Shift Milling Unit #01 • Departs 22:00 EST</span>
</div>
</div>
<div className="flex items-center gap-space-lg self-end md:self-center">
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant">STATUS</span>
<span className="font-label-md text-label-md text-secondary font-mono">SCHEDULED (NIGHT)</span>
</div>
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant">EST. DURATION</span>
<span className="font-label-md text-label-md text-on-surface font-mono">4.5 Hours</span>
</div>
<button className="p-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded flex flex-col md:flex-row md:items-center justify-between gap-space-md hover:bg-surface-container transition-colors">
<div className="flex items-center gap-space-md">
<div className="w-1.5 h-10 rounded-full bg-outline"></div>
<div className="flex flex-col gap-0.5">
<div className="flex items-center gap-space-sm">
<span className="font-label-md text-label-md text-on-surface font-mono font-bold">WO-4375</span>
<span className="px-space-xs py-0.2 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-semibold">MEDIUM 62/100</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Leveling Rim Collar</span>
</div>
<span className="font-body-md text-body-md text-on-surface font-medium">Elm & 4th Boulevard - Sunken Manhole Rim</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">Assigned: Team Beta (Civil Repairs) • Staged for 14:30 EST</span>
</div>
</div>
<div className="flex items-center gap-space-lg self-end md:self-center">
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant">STATUS</span>
<span className="font-label-md text-label-md text-on-surface font-mono">QUEUED</span>
</div>
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant">EST. DURATION</span>
<span className="font-label-md text-label-md text-on-surface font-mono">1.8 Hours</span>
</div>
<button className="p-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4 flex flex-col gap-space-lg">

<div className="bg-surface-container-low rounded p-space-md flex flex-col gap-space-md shadow-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">local_shipping</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Field Crew Telemetry</h3>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-primary">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
<span>3 UNITS ACTIVE</span>
</div>
</div>

<div className="relative w-full h-44 rounded overflow-hidden bg-surface-container-lowest">
<div className="w-full h-full bg-cover bg-center opacity-70" data-location="Boston, MA" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8Y3IAhI8y4PhHT9LINts5XGIt3dDnG42Lbi2y1DtBWYtWAbNLdXpb25roMDt2tF3FRpfVvw2XJ-jMDQ-BmhU1OyjigdQBNNxJypteuE_nuQ8mSIkgYAuS8J97OpGfMxv9oooHZzWlyE0XNay8XRUQtQhVdOIl-pMGchM-oeGEO1EP7jjc-QxLgmzktJTwBv_6QqZMj_yWDd7It8VJ0XSrW0qsEihElPuBoOt2hUrl75KvEM5B_yQI')"}}></div>

<div className="absolute inset-0 bg-surface-container-lowest/40 pointer-events-none"></div>

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="relative flex items-center justify-center">
<div className="w-6 h-6 rounded-full bg-primary/30 animate-ping absolute"></div>
<div className="w-3 h-3 rounded-full bg-primary relative shadow-md"></div>
</div>
<div className="mt-1 px-1.5 py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-sm text-label-sm font-mono border-none shadow">
              CREW-01 [ON-SITE]
            </div>
</div>

<div className="absolute bottom-1/4 right-1/4 flex flex-col items-center">
<div className="relative flex items-center justify-center">
<div className="w-5 h-5 rounded-full bg-secondary/30 animate-pulse absolute"></div>
<div className="w-2.5 h-2.5 rounded-full bg-secondary relative"></div>
</div>
<div className="mt-1 px-1.5 py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-sm text-label-sm font-mono">
              CREW-02 [ETA 8m]
            </div>
</div>

<div className="absolute bottom-1.5 left-2 flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant font-mono bg-surface-container-lowest/80 px-2 py-0.5 rounded">
<span>GRID: 42°21'N / 71°03'W</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">

<div className="bg-surface-container p-space-sm rounded flex items-center justify-between hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center font-label-sm text-label-sm font-mono font-bold">
                C-01
              </div>
<div className="flex flex-col">
<span className="font-body-md text-body-md font-semibold text-on-surface">Hot-Mix Paving Unit</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">North Ring MP 14 • Lead: Marcus R.</span>
</div>
</div>
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-primary font-mono font-semibold">ON-SITE (ACTIVE)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">Speed: 0 km/h</span>
</div>
</div>

<div className="bg-surface-container p-space-sm rounded flex items-center justify-between hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded bg-secondary/10 text-secondary flex items-center justify-center font-label-sm text-label-sm font-mono font-bold">
                C-02
              </div>
<div className="flex flex-col">
<span className="font-body-md text-body-md font-semibold text-on-surface">Drainage & Grates Unit</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">5th Ave Corridor • Lead: David K.</span>
</div>
</div>
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-secondary font-mono font-semibold">EN ROUTE</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">ETA: 8 mins</span>
</div>
</div>

<div className="bg-surface-container p-space-sm rounded flex items-center justify-between hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-sm text-label-sm font-mono font-bold">
                C-03
              </div>
<div className="flex flex-col">
<span className="font-body-md text-body-md font-semibold text-on-surface">Milling & Re-profiling</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Fleet Depot West • Prep Phase</span>
</div>
</div>
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono font-semibold">STANDBY</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">T-Minus 3h</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded p-space-md flex flex-col gap-space-md shadow-md relative overflow-hidden" id="qa-panel">

<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">verified</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Digital QA Sign-Off Protocol</h3>
</div>
<span className="px-space-xs py-0.5 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-mono font-bold">READY FOR SIGNATURE</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Work order <strong className="text-on-surface font-mono">WO-4361 (West Bypass Ramp Repaving)</strong> has concluded physical works. Review telemetry parameters and AI validation delta.
        </p>

<div className="grid grid-cols-2 gap-space-xs bg-surface-container-lowest p-space-xs rounded">

<div className="relative flex flex-col gap-1">
<div className="relative h-28 rounded overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Cracked severe road pothole before repair with road markings, municipal roadway daytime angle, asphalt failure condition inspection shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw-8dpV16MURm0fFEsufKs-bbnbrJbTGgn0G-IB9pkPvkgbqA_M5d5dIXkGdbNhgednzxC4UiWwQqxqgnDdPh9y4ClmV9AnVHS4WfGA2Jv9S3vJNye5-Xj6PcBFYCC4Z89jEh6D1GisQo1rkc4KJAB90pdJIwVGD2vG9mG0ASJqsSDse9EmMWS_tL6u9q2TpAyOxwuNWaei2GC4gp27bF_TW9ljuMl2ZFh_W2LwLMETR7L_LTfpREs" />
<span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-surface-container-lowest text-tertiary font-label-sm text-label-sm font-mono font-bold">BEFORE (AI DETECTED)</span>
</div>
<div className="flex items-center justify-between px-1 font-label-sm text-label-sm text-on-surface-variant">
<span>Severity: 88/100</span>
<span className="font-mono text-tertiary">0.8m² Cavity</span>
</div>
</div>

<div className="relative flex flex-col gap-1">
<div className="relative h-28 rounded overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Freshly paved smooth black asphalt road patch perfectly leveled with clean rolled seams, highway daylight completion inspection view" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1TCjsmBf9gSTgsM-ec029fAVWRVXCAX7QA4sfhYOK06bbi1OgAW2F_e3AGPRRG8802eu6qxZew9gPd2Hbz4b4afA2gVRQfRuIIE2__NUOB5pbuGaHyTby94hXGVsAggbU2aUaT_c87yVqBGGiGys-iWqGleAJFDcsR22en0CwV3JllwzoZ2vFVxHQhCqF3ghC3PyPvN_un3g2-UZelLZ7N8eDyjNwqqv6AW1cCUE8kMQ9E9j4QXAC" />
<span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-mono font-bold">AFTER (REPAIRED)</span>
</div>
<div className="flex items-center justify-between px-1 font-label-sm text-label-sm text-on-surface-variant">
<span>Flatness: 99.1%</span>
<span className="font-mono text-primary">Zero Cavity</span>
</div>
</div>
</div>

<div className="bg-surface-container p-space-sm rounded flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">speed</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold uppercase tracking-wider">Nuclear Compaction Gauge</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-mono font-bold">96.8% (PASS &gt; 95%)</span>
</div>

<div className="w-full bg-surface-container-lowest h-2 rounded overflow-hidden relative">
<div className="bg-primary h-full w-[96.8%] rounded"></div>

<div className="absolute top-0 bottom-0 left-[95%] w-0.5 bg-on-surface"></div>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Core Target: 95.0% Min</span>
<span>Troxler Unit #8843 Calibrated</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-sm rounded flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[24px]">fingerprint</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-mono font-semibold">DIGITAL SIGNATURE HASH</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono truncate max-w-[180px]">0x7F9B...B34C (Verified PKI)</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-primary font-mono">STATUS: SEALED</span>
</div>

<div className="flex items-center gap-space-sm pt-space-xs">
<button className="w-full py-2.5 rounded bg-primary text-on-primary font-label-lg text-label-lg font-bold hover:bg-primary-fixed transition-colors flex items-center justify-center gap-space-xs" id="qa-approve-btn" type="button">
<span className="material-symbols-outlined text-[18px]">task_alt</span>
<span>Approve & Close Incident</span>
</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 bg-surface-container-lowest/80 backdrop-blur-md hidden flex items-center justify-center p-space-lg" id="emergency-modal-backdrop">
<div className="bg-surface-container-low max-w-xl w-full rounded shadow-xl p-space-lg flex flex-col gap-space-md tactical-glow-critical relative">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="p-2 rounded bg-tertiary-container/20 text-tertiary">
<span className="material-symbols-outlined text-[24px]">emergency_home</span>
</div>
<div className="flex flex-col">
<h3 className="font-headline-md text-headline-md text-on-surface">Create Emergency Dispatch Order</h3>
<span className="font-label-sm text-label-sm text-tertiary font-mono">HIGH-PRIORITY ESCALATION PROTOCOL</span>
</div>
</div>
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" id="close-modal-btn" type="button">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
<form className="flex flex-col gap-space-md pt-space-xs" id="emergency-form">
<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase">Location Key / Intersection / Milepost</label>
<input className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md px-space-md py-space-sm rounded border-none focus:outline-none focus:ring-1 focus:ring-primary placeholder-on-surface-variant/50" type="text" defaultValue="Memorial Bridge South Overpass (Pier 4)" />
</div>
<div className="grid grid-cols-2 gap-space-md">
<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase">Incident Severity</label>
<select className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md px-space-md py-space-sm rounded border-none focus:outline-none focus:ring-1 focus:ring-primary">
<option value="CRITICAL_T1">Tier 1 - Structural Void (Immediate Risk)</option>
<option value="CRITICAL_T2">Tier 2 - Severe Heave / Buckle</option>
<option value="HIGH">High - Multi-Lane Cavity</option>
</select>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase">Dispatch Crew Assignment</label>
<select className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md px-space-md py-space-sm rounded border-none focus:outline-none focus:ring-1 focus:ring-primary">
<option value="TEAM_ALPHA">Team Alpha (Rapid Asphalt #02)</option>
<option value="TEAM_DELTA">Team Delta (Drainage & Grates)</option>
<option value="NEXT_STANDBY">Deploy Standby Reserve #04</option>
</select>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase">Specialized Material & Traffic Requirements</label>
<textarea className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md px-space-md py-space-sm rounded border-none focus:outline-none focus:ring-1 focus:ring-primary placeholder-on-surface-variant/50" placeholder="Specify hot-mix formula, cold-patch aggregate, crash attenuator trucks, or police road closures..." rows="2"></textarea>
</div>
<div className="flex items-center justify-end gap-space-md pt-space-xs">
<button className="px-space-md py-2 rounded bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" id="cancel-modal-btn" type="button">
            Cancel
          </button>
<button className="px-space-lg py-2 rounded bg-primary text-on-primary font-label-md text-label-md font-bold hover:bg-primary-fixed transition-colors flex items-center gap-space-xs" type="submit">
<span className="material-symbols-outlined text-[18px]">send</span>
<span>Broadcast & Dispatch Order</span>
</button>
</div>
</form>
</div>
</div>


</div></>
  )
}
