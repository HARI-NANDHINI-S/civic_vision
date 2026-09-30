// Generated from Stitch: civicvision_ai_operational_dashboard/code.html
export default function DashboardMobile() {
  return (
    <><header className="fixed top-0 w-full z-50 pt-safe bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.35)]"><div className="h-16 px-gutter flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0"><img alt="CivicVision AI Logo" className="h-8 w-auto object-contain flex-shrink-0" src="https://lh3.googleusercontent.com/aida/AEtjO1UqSI9c3uHM06CCSNR-x3WSxXgriU-pnA77KUXG3NoLnAJOP7vf1OmHVqX_iifygrpfwUa202Hsj7mVRr1s1-jzB_fmjPjN5YTVU_TXiTLcgS-vmHDRwKqkQaRln2MfiX1f1dY7EYN4daguv8P5MRYc2xGxY-RKrVr-46sE9OhDCBSlsN_LxCl9fBjSfhdIV_A97BR_wtbCxmv28qtx7FGS9lnXhGNp_-qsGom0ca5LePHmnaCAJwfMmrg" /><div className="flex flex-col min-w-0"><div className="flex items-center gap-space-xs"><span className="text-headline-md font-headline-md text-on-surface tracking-tight truncate leading-none">CivicVision</span><span className="px-space-xs py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">AI</span></div><span className="text-label-sm font-label-sm text-on-surface-variant truncate mt-0.5 leading-none">Overview</span></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><div className="hidden sm:flex items-center gap-space-xs px-space-xs py-1 rounded bg-surface-container-low"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span><span className="text-label-sm font-label-sm text-primary uppercase">LIVE</span></div><button aria-label="Notifications" className="w-11 h-11 flex items-center justify-center rounded-lg bg-surface-container text-on-surface-variant hover:text-primary transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full px-margin space-y-space-md">

<div className="flex flex-col p-space-md rounded-xl bg-surface-container-low shadow-sm">
<div className="flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs min-w-0">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary truncate">CIVIC INFRASTRUCTURE ENGINE</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm whitespace-nowrap">v2.4-DEV</span>
</div>
<div className="mt-space-xs flex items-center justify-between flex-wrap gap-y-1">
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">tune</span>
<span>Mock Mode Active (FastAPI ready)</span>
</p>
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">4.2ms</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm">99.8% Sync</span>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container p-space-md shadow-md flex flex-col justify-between">
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div>
<div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm mb-1.5">
<span className="material-symbols-outlined text-[13px]">videocam</span>
<span>CV VISION PIPELINE</span>
</div>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Start Live AI Inspection</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Detect potholes, cracks, debris & auto-score maintenance priority in real time.
        </p>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center flex-shrink-0 text-primary">
<span className="material-symbols-outlined text-[24px]">center_focus_strong</span>
</div>
</div>
<button className="w-full mt-space-xs py-space-sm px-space-md rounded bg-primary text-on-primary font-headline-md text-body-md flex items-center justify-center gap-space-xs shadow-sm active:scale-[0.98] transition-transform" id="inspect-action-btn" type="button">
<span className="material-symbols-outlined text-[20px]">document_scanner</span>
<span>Launch Optical Triage</span>
</button>
</div>

<div className="grid grid-cols-2 gap-space-sm">

<div className="flex flex-col p-space-md rounded-xl bg-surface-container-low shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant mb-1">
<span className="font-label-sm text-label-sm uppercase">Total Detected</span>
<span className="material-symbols-outlined text-[16px] text-primary">scatter_plot</span>
</div>
<div className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight">1,284</div>
<div className="mt-1 flex items-center gap-1 font-label-sm text-label-sm text-primary">
<span className="material-symbols-outlined text-[12px]">trending_up</span>
<span>+12% vs last wk</span>
</div>
</div>

<div className="flex flex-col p-space-md rounded-xl bg-surface-container-low shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant mb-1">
<span className="font-label-sm text-label-sm uppercase">Critical Risk</span>
<span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
</div>
<div className="font-headline-lg-mobile text-headline-lg-mobile text-error tracking-tight">38</div>
<div className="mt-1 font-body-sm text-body-sm text-error truncate">
        Urgent safety hazard
      </div>
</div>

<div className="flex flex-col p-space-md rounded-xl bg-surface-container-low shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant mb-1">
<span className="font-label-sm text-label-sm uppercase">High Priority</span>
<span className="material-symbols-outlined text-[16px] text-secondary">flag</span>
</div>
<div className="font-headline-lg-mobile text-headline-lg-mobile text-secondary tracking-tight">142</div>
<div className="mt-1 font-body-sm text-body-sm text-on-surface-variant truncate">
        Awaiting triage
      </div>
</div>

<div className="flex flex-col p-space-md rounded-xl bg-surface-container-low shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant mb-1">
<span className="font-label-sm text-label-sm uppercase">In Dispatch</span>
<span className="material-symbols-outlined text-[16px] text-surface-tint">engineering</span>
</div>
<div className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight">86</div>
<div className="mt-1 font-body-sm text-body-sm text-on-surface-variant truncate">
        Scheduled & active
      </div>
</div>
</div>

<div className="flex flex-col p-space-md rounded-xl bg-surface-container-low space-y-space-xs shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Triage Severity Distribution</span>
<span className="font-label-sm text-label-sm text-on-surface">1,284 Assets</span>
</div>

<div className="w-full h-2 rounded-full bg-surface-container-highest flex overflow-hidden">
<div className="h-full bg-error" style={{width: '3%'}}></div>
<div className="h-full bg-secondary" style={{width: '11%'}}></div>
<div className="h-full bg-surface-tint" style={{width: '32%'}}></div>
<div className="h-full bg-outline-variant" style={{width: '54%'}}></div>
</div>

<div className="grid grid-cols-4 gap-1 pt-1 text-center">
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm text-error font-bold">38</span>
<span className="font-label-sm text-[9px] text-on-surface-variant uppercase">Critical</span>
</div>
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm text-secondary font-bold">142</span>
<span className="font-label-sm text-[9px] text-on-surface-variant uppercase">High</span>
</div>
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm text-surface-tint font-bold">412</span>
<span className="font-label-sm text-[9px] text-on-surface-variant uppercase">Medium</span>
</div>
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm text-outline font-bold">692</span>
<span className="font-label-sm text-[9px] text-on-surface-variant uppercase">Low</span>
</div>
</div>
</div>

<div className="flex flex-col space-y-space-xs">
<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
<h3 className="font-headline-md text-body-lg text-on-surface">Live Critical Alerts</h3>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Real-time Feed</span>
</div>

<div className="flex flex-col p-space-sm rounded-xl bg-surface-container-low shadow-sm space-y-space-xs">
<div className="flex items-center justify-between gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-error-container text-error font-label-sm text-label-sm font-semibold uppercase">SEV-1 CRITICAL</span>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-primary">98.4% CONF</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">2m ago</span>
</div>
</div>
<div className="flex gap-space-sm items-center">
<div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Ground-level close-up of a deep jagged asphalt pothole on a city street, high-resolution forensic civic inspection photo, dark moody lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_ZHxo8OSrNOJIXskJDMbJTWCJeebpIyt3qeyW1zOl0yjI-urrK8CX6mbyEFmNnlXC4QfzD4lyGc-bVtqNOSxv1_0dUmDV0e782AEEk_GFEefzfiiFRTiwqN3dkHhzOvzOQWu8F5t5GTfJtYTGtglJngt8CUBisP8NV6tIWq5ToRQ9kt8QBtabxxNFsIfgnJ3-1tDdHlhILKnwkqdIZ4d209njj4mI8nJEuyvRnymLMcR-n058CvIa" />
</div>
<div className="flex flex-col min-w-0 flex-1">
<p className="font-headline-md text-body-md text-on-surface truncate">Severe Pothole — Arterial Rd</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Ward 4 Northbound • Depth ~14cm</p>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<span className="font-label-sm text-label-sm text-secondary">Impact: Heavy Wheel Damage</span>
<button className="px-2 py-1 rounded bg-surface-container text-on-surface text-label-sm font-label-sm hover:text-primary transition-colors" type="button">Triage Issue</button>
</div>
</div>

<div className="flex flex-col p-space-sm rounded-xl bg-surface-container-low shadow-sm space-y-space-xs">
<div className="flex items-center justify-between gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-error-container text-error font-label-sm text-label-sm font-semibold uppercase">SEV-1 HAZARD</span>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-primary">96.1% CONF</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">11m ago</span>
</div>
</div>
<div className="flex gap-space-sm items-center">
<div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Dislodged storm drainage iron grate on a pedestrian walkway downtown, infrastructure danger hazard street capture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxcpNdAHmV6a3CSWdrfk89DFoS0Dmrn328voerqC52RaQqDBz8ZRpJ-M3DXxw1z0CGApYK9SOgRizRK3XuaOdH64ecl-C-AehGSwHK4_KEGvRz93MvnbxGNEfjLrWbDWcrte29zpucClt4PdBF4RCaYUnKXJx5qzD7TnQ6Se2x7iWIeeAZBUXZU2RC5TEghF_nQ2vaGRs99TiGhTYgh4JD-hexMt0xmMGsqWWlY2_yjfZrdAFEonq6" />
</div>
<div className="flex flex-col min-w-0 flex-1">
<p className="font-headline-md text-body-md text-on-surface truncate">Fallen Storm Drainage Cover</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Market St & 5th Ave • Pedestrian Risk</p>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<span className="font-label-sm text-label-sm text-error">Crew Dispatched: Team Delta</span>
<button className="px-2 py-1 rounded bg-surface-container text-on-surface text-label-sm font-label-sm hover:text-primary transition-colors" type="button">View Map</button>
</div>
</div>
</div>

<div className="flex flex-col p-space-md rounded-xl bg-surface-container-low shadow-sm space-y-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-primary">explore</span>
<h3 className="font-headline-md text-body-lg text-on-surface">Spatial Hotspots</h3>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Sector 7 & Downtown</span>
</div>

<div className="w-full h-36 rounded-lg overflow-hidden relative shadow-inner flex items-end p-space-sm" data-location="Downtown Sector 7 Civic Center" style={{backgroundImage: "url('https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg')"}}>

<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
<div className="relative z-10 w-full flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">24 Active Clusters</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-label-sm text-label-sm">High Congestion</span>
</div>
<button className="px-2 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm flex items-center gap-1" type="button">
<span>Explore</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
</div>
</div>

<div className="flex flex-col p-space-md rounded-xl bg-surface-container-low shadow-sm space-y-space-sm">
<div className="flex items-center justify-between">
<h3 className="font-headline-md text-body-lg text-on-surface">Maintenance Workflow</h3>
<span className="font-label-sm text-label-sm text-primary">Operational SLA: 94%</span>
</div>

<div className="flex items-center justify-between overflow-x-auto gap-2 pb-1">

<div className="flex flex-col items-center min-w-[56px] text-center">
<span className="font-label-sm text-label-sm text-primary">1,284</span>
<div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center my-1">
<span className="material-symbols-outlined text-[14px] text-primary">radar</span>
</div>
<span className="font-label-sm text-[10px] text-on-surface-variant">Detected</span>
</div>
<div className="w-3 h-0.5 bg-surface-container-highest"></div>

<div className="flex flex-col items-center min-w-[56px] text-center">
<span className="font-label-sm text-label-sm text-on-surface">940</span>
<div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center my-1">
<span className="material-symbols-outlined text-[14px] text-on-surface">analytics</span>
</div>
<span className="font-label-sm text-[10px] text-on-surface-variant">Assessed</span>
</div>
<div className="w-3 h-0.5 bg-surface-container-highest"></div>

<div className="flex flex-col items-center min-w-[56px] text-center">
<span className="font-label-sm text-label-sm text-secondary">512</span>
<div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center my-1">
<span className="material-symbols-outlined text-[14px] text-secondary">low_priority</span>
</div>
<span className="font-label-sm text-[10px] text-on-surface-variant">Prioritised</span>
</div>
<div className="w-3 h-0.5 bg-surface-container-highest"></div>

<div className="flex flex-col items-center min-w-[56px] text-center">
<span className="font-label-sm text-label-sm text-on-surface">186</span>
<div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center my-1">
<span className="material-symbols-outlined text-[14px] text-on-surface">calendar_today</span>
</div>
<span className="font-label-sm text-[10px] text-on-surface-variant">Scheduled</span>
</div>
<div className="w-3 h-0.5 bg-surface-container-highest"></div>

<div className="flex flex-col items-center min-w-[56px] text-center">
<span className="font-label-sm text-label-sm text-surface-tint">86</span>
<div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center my-1">
<span className="material-symbols-outlined text-[14px] text-surface-tint">build</span>
</div>
<span className="font-label-sm text-[10px] text-on-surface-variant">In Progress</span>
</div>
<div className="w-3 h-0.5 bg-surface-container-highest"></div>

<div className="flex flex-col items-center min-w-[56px] text-center">
<span className="font-label-sm text-label-sm text-primary">824</span>
<div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center my-1">
<span className="material-symbols-outlined text-[14px] text-primary">check_circle</span>
</div>
<span className="font-label-sm text-[10px] text-on-surface-variant">Resolved</span>
</div>
</div>
</div>
</div>
</main><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.4)]" data-active-classes="text-primary bg-surface-container-high/60"><div className="flex items-stretch justify-around h-16 px-space-xs"><a aria-current="page" className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded transition-colors text-primary bg-surface-container-high/60" data-path="overview" href="#"><span className="material-symbols-outlined text-[22px]">dashboard</span><span className="text-label-sm font-label-sm mt-0.5">Overview</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="ai-inspection" href="#"><span className="material-symbols-outlined text-[22px]">document_scanner</span><span className="text-label-sm font-label-sm mt-0.5">Inspect</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="civic-issues-queue" href="#"><span className="material-symbols-outlined text-[22px]">emergency_home</span><span className="text-label-sm font-label-sm mt-0.5">Issues</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="geographic" href="#"><span className="material-symbols-outlined text-[22px]">map</span><span className="text-label-sm font-label-sm mt-0.5">Map</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="analytics-maintenance" href="#"><span className="material-symbols-outlined text-[22px]">analytics</span><span className="text-label-sm font-label-sm mt-0.5">Analytics</span></a></div></nav></>
  )
}
