// Generated from Stitch: civicvision_ai_desktop_command_dashboard/code.html
export default function DashboardDesktop() {
  return (
    <><div className="flex flex-col w-full">
<div className="p-gutter-desktop flex flex-col gap-space-lg max-w-[1720px] mx-auto w-full">

<div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md bg-surface-container p-space-md rounded-xl shadow-md">
<div className="flex items-center gap-space-md">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-container-high text-primary">
<span className="material-symbols-outlined text-[24px]">satellite_alt</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">Metropolitan Core Operations Grid</span>
<span className="bg-primary/10 text-primary font-label-sm text-label-sm px-space-xs py-0.5 rounded uppercase font-mono">SECTOR NORTH-7</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Synchronized telemetric ingestion from 42 road-survey units & LiDAR sweeps</span>
</div>
</div>

<div className="flex items-center gap-space-md flex-wrap lg:flex-nowrap">
<div className="relative group cursor-pointer border-2 border-dashed border-outline-variant/60 hover:border-primary/60 bg-surface-container-low px-space-md py-2 rounded-lg flex items-center gap-space-sm transition-all">
<span className="material-symbols-outlined text-primary text-[20px]">add_photo_alternate</span>
<div className="flex flex-col pr-space-xs">
<span className="font-label-md text-label-md text-on-surface font-semibold">Drop Dashcam Clip / Orthophoto</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">YOLOv11 TensorRT Auto-Triage</span>
</div>
<input accept="image/*,video/*" className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
</div>
<button className="flex items-center gap-space-xs bg-primary text-on-primary px-space-md py-2.5 rounded font-label-lg text-label-lg font-semibold hover:bg-primary-fixed-dim transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span>Launch Optical Triage</span>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-space-md">

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm relative overflow-hidden group">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase font-mono tracking-wider">Detected Issues</span>
<span className="material-symbols-outlined text-[18px] text-primary">analytics</span>
</div>
<div className="my-space-xs">
<div className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">1,284</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-primary mt-1">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span>
<span>+12.4% MoM</span>
</div>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: '72%'}}></div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm relative overflow-hidden group">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase font-mono tracking-wider">Critical Hazards</span>
<span className="material-symbols-outlined text-[18px] text-tertiary">warning</span>
</div>
<div className="my-space-xs">
<div className="font-headline-xl text-headline-xl text-tertiary font-bold tracking-tight">38</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-tertiary mt-1">
<span className="h-1.5 w-1.5 rounded-full bg-tertiary animate-ping"></span>
<span>Immediate Triage Req.</span>
</div>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{width: '38%'}}></div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm relative overflow-hidden group">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase font-mono tracking-wider">Triage Queue</span>
<span className="material-symbols-outlined text-[18px] text-secondary">hourglass_top</span>
</div>
<div className="my-space-xs">
<div className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">142</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant mt-1">
<span>24 awaiting validation</span>
</div>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{width: '54%'}}></div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm relative overflow-hidden group">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase font-mono tracking-wider">Field Crews</span>
<span className="material-symbols-outlined text-[18px] text-primary">engineering</span>
</div>
<div className="my-space-xs">
<div className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">86</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-primary mt-1">
<span>14 active work zones</span>
</div>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{width: '82%'}}></div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm relative overflow-hidden group">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase font-mono tracking-wider">Inference Conf.</span>
<span className="material-symbols-outlined text-[18px] text-primary">psychology</span>
</div>
<div className="my-space-xs">
<div className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">94.8<span className="text-headline-md font-normal text-on-surface-variant">%</span></div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-primary mt-1">
<span className="material-symbols-outlined text-[14px]">verified</span>
<span>Weighted Mean F1</span>
</div>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: '95%'}}></div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm relative overflow-hidden group">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase font-mono tracking-wider">MTTR SLA</span>
<span className="material-symbols-outlined text-[18px] text-secondary-fixed-dim">speed</span>
</div>
<div className="my-space-xs">
<div className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">28.4<span className="text-headline-md font-normal text-on-surface-variant">h</span></div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-primary mt-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span>Target: &lt; 36.0h</span>
</div>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: '78%'}}></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">

<div className="xl:col-span-5 flex flex-col gap-space-lg">

<div className="bg-surface-container-low p-space-lg rounded-xl shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">equalizer</span>
<span className="font-headline-md text-headline-md text-on-surface font-semibold">Triage Severity Distribution</span>
</div>
<span className="font-label-sm text-label-sm font-mono text-on-surface-variant">ACTIVE DATASET (N=1,284)</span>
</div>

<div className="flex flex-col gap-space-xs">
<div className="h-6 w-full rounded-md bg-surface-container-highest overflow-hidden flex shadow-inner">
<div className="h-full bg-tertiary transition-all duration-500 hover:opacity-90" style={{width: '3.0%'}} title="Critical Hazards: 38 (3.0%)"></div>
<div className="h-full bg-secondary transition-all duration-500 hover:opacity-90" style={{width: '17.5%'}} title="High Priority: 224 (17.5%)"></div>
<div className="h-full bg-primary-container transition-all duration-500 hover:opacity-90" style={{width: '48.0%'}} title="Medium Severity: 616 (48.0%)"></div>
<div className="h-full bg-surface-bright transition-all duration-500 hover:opacity-90" style={{width: '31.5%'}} title="Low / Monitored: 406 (31.5%)"></div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs pt-space-xs">
<div className="bg-surface-container p-space-xs rounded flex flex-col">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">SEV-1 (Crit)</span>
</div>
<span className="font-headline-md text-headline-md text-tertiary font-bold mt-1">38</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/70">3.0%</span>
</div>
<div className="bg-surface-container p-space-xs rounded flex flex-col">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">SEV-2 (High)</span>
</div>
<span className="font-headline-md text-headline-md text-secondary font-bold mt-1">224</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/70">17.5%</span>
</div>
<div className="bg-surface-container p-space-xs rounded flex flex-col">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-primary-container"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">SEV-3 (Med)</span>
</div>
<span className="font-headline-md text-headline-md text-primary font-bold mt-1">616</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/70">48.0%</span>
</div>
<div className="bg-surface-container p-space-xs rounded flex flex-col">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-surface-bright"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">SEV-4 (Low)</span>
</div>
<span className="font-headline-md text-headline-md text-on-surface font-bold mt-1">406</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/70">31.5%</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-headline-md text-headline-md text-on-surface font-semibold">Incident Defect Taxonomy</span>
<span className="font-label-sm text-label-sm text-primary font-mono cursor-pointer hover:underline">EXPORT REPORT</span>
</div>
<div className="flex flex-col gap-space-sm">

<div className="flex flex-col gap-1">
<div className="flex justify-between items-center font-label-md text-label-md">
<span className="text-on-surface font-medium flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-tertiary">trip_origin</span>
                  Potholes & Cavities
                </span>
<span className="font-mono text-on-surface">542 inc. <span className="text-on-surface-variant font-normal">(42.2%)</span></span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: '42.2%'}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between items-center font-label-md text-label-md">
<span className="text-on-surface font-medium flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-secondary">broken_image</span>
                  Structural Voids / Subsidence
                </span>
<span className="font-mono text-on-surface">289 inc. <span className="text-on-surface-variant font-normal">(22.5%)</span></span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{width: '22.5%'}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between items-center font-label-md text-label-md">
<span className="text-on-surface font-medium flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-outline">timeline</span>
                  Longitudinal & Alligator Cracking
                </span>
<span className="font-mono text-on-surface">215 inc. <span className="text-on-surface-variant font-normal">(16.7%)</span></span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{width: '16.7%'}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between items-center font-label-md text-label-md">
<span className="text-on-surface font-medium flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-primary">water_damage</span>
                  Drainage Grates & Culvert Blockages
                </span>
<span className="font-mono text-on-surface">144 inc. <span className="text-on-surface-variant font-normal">(11.2%)</span></span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-surface-bright h-full rounded-full" style={{width: '11.2%'}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between items-center font-label-md text-label-md">
<span className="text-on-surface font-medium flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">delete_sweep</span>
                  Hazardous Road Debris
                </span>
<span className="font-mono text-on-surface">94 inc. <span className="text-on-surface-variant font-normal">(7.3%)</span></span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-outline-variant h-full rounded-full" style={{width: '7.3%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-7 flex flex-col bg-surface-container-low rounded-xl shadow-md overflow-hidden min-h-[480px]">

<div className="p-space-md bg-surface-container flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">layers</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Live GIS Spatial Awareness</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">EPSG:3857 // Real-time Ingestion</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<div className="flex items-center gap-1 bg-surface-container-lowest px-space-sm py-1 rounded text-on-surface">
<span className="h-2 w-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-sm text-label-sm font-mono">Ward 07: 19 High</span>
</div>
<div className="flex items-center gap-1 bg-surface-container-lowest px-space-sm py-1 rounded text-on-surface">
<span className="h-2 w-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm font-mono">Ward 04: 12 High</span>
</div>
<button className="p-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface" type="button">
<span className="material-symbols-outlined text-[18px]">fullscreen</span>
</button>
</div>
</div>

<div className="relative flex-1 w-full min-h-[380px] bg-surface-container-lowest overflow-hidden">

<div className="w-full h-full object-cover opacity-60" data-location="Downtown Austin, Texas" style={{}}></div>

<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent pointer-events-none"></div>

<div className="absolute top-space-md left-space-md flex flex-col gap-1 bg-surface/90 backdrop-blur-md p-space-xs rounded shadow-lg">
<button className="p-1 hover:bg-surface-container-high text-on-surface rounded"><span className="material-symbols-outlined text-[18px]">add</span></button>
<button className="p-1 hover:bg-surface-container-high text-on-surface rounded"><span className="material-symbols-outlined text-[18px]">remove</span></button>
<div className="h-[1px] bg-surface-container-highest my-0.5"></div>
<button className="p-1 hover:bg-surface-container-high text-primary rounded"><span className="material-symbols-outlined text-[18px]">my_location</span></button>
</div>

<div className="absolute top-[28%] left-[34%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
<div className="relative flex items-center justify-center">
<span className="absolute w-12 h-12 rounded-full bg-tertiary/20 animate-ping"></span>
<span className="absolute w-8 h-8 rounded-full bg-tertiary/40"></span>
<span className="relative h-4 w-4 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary font-label-sm text-label-sm font-bold shadow-md">!</span>
</div>

<div className="hidden group-hover:flex absolute left-6 top-0 bg-surface-container-high/95 backdrop-blur-md p-space-xs rounded shadow-xl flex-col min-w-[160px] z-20">
<span className="font-label-sm text-label-sm text-tertiary font-bold">CLUSTER #07-ALPHA</span>
<span className="font-body-sm text-body-sm text-on-surface">North Ring Arterial MP 14.2</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono mt-0.5">6 Active Cavities • High Risk</span>
</div>
</div>

<div className="absolute top-[64%] left-[68%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
<div className="relative flex items-center justify-center">
<span className="absolute w-10 h-10 rounded-full bg-secondary/20 animate-ping"></span>
<span className="h-3.5 w-3.5 rounded-full bg-secondary shadow-md"></span>
</div>
<div className="hidden group-hover:flex absolute right-6 bottom-0 bg-surface-container-high/95 backdrop-blur-md p-space-xs rounded shadow-xl flex-col min-w-[150px] z-20">
<span className="font-label-sm text-label-sm text-secondary font-bold">CLUSTER #04-BETA</span>
<span className="font-body-sm text-body-sm text-on-surface">Oakridge Viaduct S-Bound</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono mt-0.5">Pavement Delamination</span>
</div>
</div>

<div className="absolute top-[48%] left-[45%] flex items-center gap-1.5 bg-surface-container-high/90 px-space-xs py-1 rounded backdrop-blur-sm shadow-md">
<span className="material-symbols-outlined text-primary text-[14px] animate-spin">navigation</span>
<span className="font-label-sm text-label-sm font-mono text-on-surface">CREW-14 [EN ROUTE]</span>
</div>

<div className="absolute bottom-space-md left-space-md right-space-md bg-surface-container-high/90 backdrop-blur-md p-space-sm rounded-lg flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface font-mono">TILE SERVER: CONNECTED</span>
</div>
<div className="hidden sm:flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm font-mono">
<span>LAT: 30.2672° N</span>
<span>•</span>
<span>LON: 97.7431° W</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant">Layer:</span>
<span className="bg-surface-container-lowest text-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded font-mono">Thermal + Surface Mesh</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl shadow-md flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">linear_scale</span>
<span className="font-headline-md text-headline-md text-on-surface font-semibold">Civic SLA Operational Lifecycle Pipeline</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">TARGET CYCLE: 36.0h • CURRENT CYCLE: 28.4h</span>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-space-sm relative">

<div className="bg-surface-container p-space-sm rounded-lg flex flex-col gap-1 relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-mono text-on-surface-variant">STAGE 01</span>
<span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Detected</span>
<span className="font-label-sm text-label-sm text-primary font-mono">1,284 Assets (0.2h)</span>
<div className="w-full bg-primary h-1 rounded-full mt-1"></div>
</div>

<div className="bg-surface-container p-space-sm rounded-lg flex flex-col gap-1 relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-mono text-on-surface-variant">STAGE 02</span>
<span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Assessed</span>
<span className="font-label-sm text-label-sm text-primary font-mono">1,142 AI Scored (1.4h)</span>
<div className="w-full bg-primary h-1 rounded-full mt-1"></div>
</div>

<div className="bg-surface-container p-space-sm rounded-lg flex flex-col gap-1 relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-mono text-on-surface-variant">STAGE 03</span>
<span className="material-symbols-outlined text-[16px] text-secondary">pending</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Prioritised</span>
<span className="font-label-sm text-label-sm text-secondary font-mono">142 In Queue (4.1h)</span>
<div className="w-full bg-secondary h-1 rounded-full mt-1"></div>
</div>

<div className="bg-surface-container p-space-sm rounded-lg flex flex-col gap-1 relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-mono text-on-surface-variant">STAGE 04</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">schedule</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Scheduled</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">98 Dispatches (6.2h)</span>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-1"></div>
</div>

<div className="bg-surface-container p-space-sm rounded-lg flex flex-col gap-1 relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-mono text-on-surface-variant">STAGE 05</span>
<span className="material-symbols-outlined text-[16px] text-primary">sync</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-semibold">In Progress</span>
<span className="font-label-sm text-label-sm text-primary font-mono">86 On Field (12.5h)</span>
<div className="w-full bg-primary-container h-1 rounded-full mt-1"></div>
</div>

<div className="bg-surface-container p-space-sm rounded-lg flex flex-col gap-1 relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-mono text-on-surface-variant">STAGE 06</span>
<span className="material-symbols-outlined text-[16px] text-primary">verified_user</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Resolved</span>
<span className="font-label-sm text-label-sm text-primary font-mono">758 Closed (4.0h)</span>
<div className="w-full bg-primary h-1 rounded-full mt-1"></div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl shadow-md overflow-hidden flex flex-col">
<div className="p-space-lg bg-surface-container flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-tertiary text-[22px]">emergency</span>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md text-on-surface font-semibold">Real-Time Critical Incident Triage Feed</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Live streaming from edge computer-vision survey units</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<span className="bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm px-space-sm py-1 rounded font-mono">
            FEED: 28 FPS BUFFER
          </span>
<button className="p-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface" type="button">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
</button>
</div>
</div>

<div className="overflow-x-auto w-full">
<table className="w-full text-left font-body-sm text-body-sm">
<thead className="bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm font-mono uppercase tracking-wider">
<tr>
<th className="py-space-sm px-space-lg">Visual Anomaly</th>
<th className="py-space-sm px-space-md">Incident ID & Severity</th>
<th className="py-space-sm px-space-md">Spatial Coordinates</th>
<th className="py-space-sm px-space-md">YOLOv11 Conf.</th>
<th className="py-space-sm px-space-md">Timestamp</th>
<th className="py-space-sm px-space-lg text-right">Immediate Triage</th>
</tr>
</thead>
<tbody className="divide-y-0 text-on-surface">

<tr className="hover:bg-surface-container/60 transition-colors">
<td className="py-space-sm px-space-lg">
<div className="relative w-20 h-12 rounded overflow-hidden shadow-sm bg-surface-container-highest">
<img className="w-full h-full object-cover" data-alt="Close up high-resolution view of deep asphalt pothole with fractured structural edges on highway lane, computer vision telemetry detection frame, moody dark overcast lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk8taL6dyDrOGviFo68FDh9_wgEZQTt1TueZ7qAJPBC0qu8JDLPHs4fcArxqsJC4DJafFRroE3bwr1E0esPbcD-CMlQcg5Z7UtAoWmwkcxxFEQHkS0FpviY9hXRp7NlOFk7PyNI2qqlFVKE8Gvv4_RTkgNCHUwaAyEaWnNGvtcYX6Eu4Fyfe9NlPRX9SEj4rL_ipy63HkQp294fMrtBtGpMd6cd9_uORdz-WOUFMgwc0GoGziBQA1G" />
<div className="absolute inset-0 bg-tertiary/20"></div>
<span className="absolute bottom-0.5 right-0.5 font-label-sm text-[9px] bg-surface-container-lowest/90 px-1 rounded font-mono text-tertiary">#P-892</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="bg-tertiary/15 text-tertiary font-label-sm text-label-sm font-bold px-1.5 py-0.5 rounded">SEV-1 CRITICAL</span>
<span className="font-mono text-on-surface font-semibold">INC-8921-X</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Deep Cavity Void (&gt;15cm depth)</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col font-mono text-on-surface">
<span className="font-medium">North Ring Arterial MP 14.2</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Ward 07 • Inbound Fast Lane</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex items-center gap-1.5 font-mono">
<span className="text-primary font-bold">98.4%</span>
<span className="material-symbols-outlined text-primary text-[14px]">task_alt</span>
</div>
</td>
<td className="py-space-sm px-space-md font-mono text-on-surface-variant">
                1 min ago
              </td>
<td className="py-space-sm px-space-lg text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="bg-surface-container-high hover:bg-surface-bright text-on-surface px-space-sm py-1 rounded font-label-sm text-label-sm font-semibold transition-colors" type="button">
                    Review
                  </button>
<button className="bg-tertiary-container hover:opacity-90 text-on-tertiary-container px-space-sm py-1 rounded font-label-sm text-label-sm font-bold transition-all shadow-sm" type="button">
                    Dispatch Unit
                  </button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container/60 transition-colors bg-surface-container-lowest/30">
<td className="py-space-sm px-space-lg">
<div className="relative w-20 h-12 rounded overflow-hidden shadow-sm bg-surface-container-highest">
<img className="w-full h-full object-cover" data-alt="Severe longitudinal cracking across concrete roadway with crumbling expansion joint in urban metro environment, dark ambient tones, sharp technical framing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYbB7aX0919OFRw7E4zY1XGupUmA8NeeqSPtUCpJorZQNietXADMMEYJVC4F_8Ua6lkAbn9kwYz0Ybky6ZxMldzA-uXeoIuBMVk5x2iB_4qUK6GFOSFL1-KhzGyDKgs0EV7fy6vZKSlrmnkEE7abdC-0mj3YIAyvfpNCuatl_QmxF0xa63OjnV0vXD7g2o4atyHvboLzpZNu6Dh57Dw7FVFpSI7ga3NctmX00FpwFSqods1ONZcXBH" />
<span className="absolute bottom-0.5 right-0.5 font-label-sm text-[9px] bg-surface-container-lowest/90 px-1 rounded font-mono text-secondary">#C-441</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="bg-secondary/15 text-secondary font-label-sm text-label-sm font-bold px-1.5 py-0.5 rounded">SEV-2 HIGH</span>
<span className="font-mono text-on-surface font-semibold">INC-8920-Y</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Transverse Structural Fracture</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col font-mono text-on-surface">
<span className="font-medium">Oakridge Viaduct Southbound</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Ward 04 • Pier 12 Transition</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex items-center gap-1.5 font-mono">
<span className="text-primary font-bold">96.1%</span>
<span className="material-symbols-outlined text-primary text-[14px]">task_alt</span>
</div>
</td>
<td className="py-space-sm px-space-md font-mono text-on-surface-variant">
                4 mins ago
              </td>
<td className="py-space-sm px-space-lg text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="bg-surface-container-high hover:bg-surface-bright text-on-surface px-space-sm py-1 rounded font-label-sm text-label-sm font-semibold transition-colors" type="button">
                    Review
                  </button>
<button className="bg-primary text-on-primary hover:bg-primary-fixed-dim px-space-sm py-1 rounded font-label-sm text-label-sm font-bold transition-all shadow-sm" type="button">
                    Assign Crew
                  </button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container/60 transition-colors">
<td className="py-space-sm px-space-lg">
<div className="relative w-20 h-12 rounded overflow-hidden shadow-sm bg-surface-container-highest">
<img className="w-full h-full object-cover" data-alt="Dislodged storm drain grate on side of wet tarmac road posing wheel hazard to vehicles, civic infrastructure survey view with dark technical mood" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjpxYcqRICB7VvBkAAjV-nh-udfVyvD5h0XeW3bnQ6GXII0-2QF7A7KeT-TxS2xPge_7zk7Mb2NYhYkvLg-K1xVKpITYmORIAxMiVQeSN-mgUiC3RC0nGZdFbmB-JA1h4rUhwIvyb6vVOblqb0rv8SM87l79Bxcbd55MJXnjNQiez2Yau_6WrLRZb8T52GMrBKDj2eGlMjnkluUd3a9R1rhNM5cv-Q1ndlPti0NwNBafphQk3dsWgx" />
<span className="absolute bottom-0.5 right-0.5 font-label-sm text-[9px] bg-surface-container-lowest/90 px-1 rounded font-mono text-secondary">#D-109</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="bg-secondary/15 text-secondary font-label-sm text-label-sm font-bold px-1.5 py-0.5 rounded">SEV-2 HIGH</span>
<span className="font-mono text-on-surface font-semibold">INC-8919-A</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Displaced Stormwater Grate Cover</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col font-mono text-on-surface">
<span className="font-medium">Cesar Chavez & 4th Intersection</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Ward 02 • Bike Lane Corridors</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex items-center gap-1.5 font-mono">
<span className="text-primary font-bold">92.7%</span>
<span className="material-symbols-outlined text-primary text-[14px]">task_alt</span>
</div>
</td>
<td className="py-space-sm px-space-md font-mono text-on-surface-variant">
                11 mins ago
              </td>
<td className="py-space-sm px-space-lg text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="bg-surface-container-high hover:bg-surface-bright text-on-surface px-space-sm py-1 rounded font-label-sm text-label-sm font-semibold transition-colors" type="button">
                    Review
                  </button>
<button className="bg-primary text-on-primary hover:bg-primary-fixed-dim px-space-sm py-1 rounded font-label-sm text-label-sm font-bold transition-all shadow-sm" type="button">
                    Assign Crew
                  </button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="p-space-md bg-surface-container-lowest rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[18px]">terminal</span>
<div className="flex items-center gap-space-xs font-mono font-label-sm text-label-sm text-on-surface-variant">
<span className="text-primary font-semibold">TERMINAL LIVE:</span>
<span>Mock Mode Active — Ready for FastAPI / Supabase edge endpoints</span>
</div>
</div>
<div className="flex items-center gap-space-md font-mono font-label-sm text-label-sm text-on-surface-variant">
<span>LATENCY: 14ms</span>
<span>•</span>
<span>MEMORY: 1.4GB / 8GB</span>
<span>•</span>
<span className="text-primary">ALL SYSTEMS SECURE</span>
</div>
</div>
</div>
</div></>
  )
}
