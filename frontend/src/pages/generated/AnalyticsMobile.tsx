// Generated from Stitch: civicvision_ai_infrastructure_analytics/code.html
export default function AnalyticsMobile() {
  return (
    <><header className="fixed top-0 w-full z-50 pt-safe bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.35)]"><div className="h-16 px-gutter flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0"><img alt="CivicVision AI Logo" className="h-8 w-auto object-contain flex-shrink-0" src="https://lh3.googleusercontent.com/aida/AEtjO1UqSI9c3uHM06CCSNR-x3WSxXgriU-pnA77KUXG3NoLnAJOP7vf1OmHVqX_iifygrpfwUa202Hsj7mVRr1s1-jzB_fmjPjN5YTVU_TXiTLcgS-vmHDRwKqkQaRln2MfiX1f1dY7EYN4daguv8P5MRYc2xGxY-RKrVr-46sE9OhDCBSlsN_LxCl9fBjSfhdIV_A97BR_wtbCxmv28qtx7FGS9lnXhGNp_-qsGom0ca5LePHmnaCAJwfMmrg" /><div className="flex flex-col min-w-0"><div className="flex items-center gap-space-xs"><span className="text-headline-md font-headline-md text-on-surface tracking-tight truncate leading-none">CivicVision</span><span className="px-space-xs py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">AI</span></div><span className="text-label-sm font-label-sm text-on-surface-variant truncate mt-0.5 leading-none">Civicvision Ai   Infrastructure Analytics</span></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><div className="hidden sm:flex items-center gap-space-xs px-space-xs py-1 rounded bg-surface-container-low"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span><span className="text-label-sm font-label-sm text-primary uppercase">LIVE SYS</span></div><button aria-label="Notifications" className="relative w-11 h-11 flex items-center justify-center rounded-lg bg-surface-container text-on-surface-variant hover:text-primary transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container"></span></button><button aria-label="Switch Module" className="w-11 h-11 flex items-center justify-center rounded-lg bg-surface-container text-on-surface-variant hover:text-primary transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">grid_view</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full px-margin pb-space-xl gap-space-md">

<div className="flex flex-col gap-space-xs pt-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Spatial Telemetry Active</span>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container text-primary font-medium">FastAPI Engine 2.4</span>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar py-1">

<button className="flex items-center gap-1.5 px-space-sm py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md flex-shrink-0 active:scale-95 transition-transform" id="dateFilterBtn">
<span className="material-symbols-outlined text-[16px] text-primary">calendar_today</span>
<span>Last 30 Days</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">expand_more</span>
</button>

<button className="flex items-center gap-1.5 px-space-sm py-2 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md flex-shrink-0 active:scale-95 transition-transform" id="wardFilterBtn">
<span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
<span className="text-primary font-semibold">Ward 07 Active</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">tune</span>
</button>

<button className="flex items-center gap-1.5 px-space-sm py-2 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md flex-shrink-0 ml-auto active:scale-95 transition-transform shadow-sm" data-onclick="triggerExportToast()">
<span className="material-symbols-outlined text-[16px]">file_download</span>
<span className="font-semibold">Export</span>
</button>
</div>
</div>

<div className="hidden transition-all duration-300 flex items-center justify-between p-space-sm rounded-lg bg-surface-container-highest text-on-surface shadow-xl" id="exportToast">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
<span className="font-body-sm text-body-sm">Compiling Ward 07 municipal audit snapshot...</span>
</div>
<span className="font-label-sm text-label-sm text-primary uppercase">Queued</span>
</div>

<div className="grid grid-cols-2 gap-space-xs">

<div className="flex flex-col p-space-sm rounded-lg bg-surface-container shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wide">Inferences</span>
<span className="material-symbols-outlined text-[16px] text-primary">grain</span>
</div>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold">4,892</span>
</div>
<div className="flex items-center gap-1 mt-1">
<span className="flex items-center font-label-sm text-label-sm text-primary">
<span className="material-symbols-outlined text-[12px]">trending_up</span>+18%
        </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">MoM</span>
</div>
</div>

<div className="flex flex-col p-space-sm rounded-lg bg-surface-container shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wide">Model Acc</span>
<span className="material-symbols-outlined text-[16px] text-secondary">psychology</span>
</div>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold">94.2%</span>
</div>
<div className="flex items-center mt-1">
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant">YOLOv9-Civic</span>
</div>
</div>

<div className="flex flex-col p-space-sm rounded-lg bg-surface-container shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wide">MTTR SLA</span>
<span className="material-symbols-outlined text-[16px] text-primary">avg_time</span>
</div>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold">28.4</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">hrs</span>
</div>
<div className="flex items-center gap-1 mt-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Goal: &lt;36.0h</span>
</div>
</div>

<div className="flex flex-col p-space-sm rounded-lg bg-surface-container shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wide">Defects Fixed</span>
<span className="material-symbols-outlined text-[16px] text-primary">task_alt</span>
</div>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-bold">842</span>
</div>
<div className="flex items-center gap-1 mt-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">Verified by crew</span>
</div>
</div>
</div>

<div className="flex flex-col rounded-lg bg-surface-container p-space-sm shadow-md gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">camera_video</span>
<span className="font-label-md text-label-md text-on-surface font-semibold tracking-wide">FIELD SAMPLING TELEMETRY</span>
</div>
<span className="font-label-sm text-label-sm text-primary uppercase px-space-xs py-0.5 rounded bg-surface-container-high">CAM-04-NORTH</span>
</div>
<div className="relative w-full h-44 rounded-lg overflow-hidden bg-surface-container-lowest">
<img className="w-full h-full object-cover opacity-80" data-alt="First-person dashboard camera view from a civic vehicle inspecting asphalt pavement along an urban roadway under daylight. The asphalt exhibits structural cracks and a deep fissure, with real-time green, amber and cyan computer vision bounding overlays displaying detection tags and percentages on a crisp dark tech interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgMnne8GJhHPs9Oh1PkuQ1Zwe1yYrGX8byaF7y30TGIAOm0nJiNfGgroPhnq3UkkjUnbv3mx_lnV7GjLOT7LjEAnJ_ljwWklTbXQ1A4yNeZFuYLxNAPIjxb_EuZEjTZ8yGSIseEXbTemqWP9NLLuq95aTbKWi008LpkF5wnrGE119cXmRJXhXha13ulL5uyX0DmFam4QGQQjch-4leeb-PRjMdKpEOhISJua1dSgIDNvKotsPVqyFz" />

<div className="absolute inset-0 p-3 pointer-events-none flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-lowest/90 text-primary">GPS: 40.7128° N, 74.0060° W</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-lowest/90 text-secondary">PCI INDEX: 46 (CRITICAL)</span>
</div>

<div className="relative w-36 h-20 self-center border-0 bg-error/15 rounded-sm p-1">

<div className="absolute -top-1 -left-1 w-2 h-2 bg-error rounded-xs"></div>
<div className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-xs"></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 bg-error rounded-xs"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 bg-error rounded-xs"></div>
<div className="inline-flex items-center gap-1 px-1 py-0.5 rounded bg-surface-container-lowest/95">
<span className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></span>
<span className="font-label-sm text-label-sm text-error font-bold">POTHOLE_SEV_4 98.4%</span>
</div>
</div>
<div className="flex justify-between items-end">
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-lowest/80 px-1 rounded">FRAME: #448929</span>
<span className="font-label-sm text-label-sm text-primary bg-surface-container-lowest/80 px-1 rounded">LIVE SYNC OK</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col p-space-sm rounded-lg bg-surface-container shadow-md gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">pie_chart</span>
<span className="font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider">Defects by Anomaly Category</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">1,284 Total Active</span>
</div>
<div className="flex flex-col gap-space-sm">

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-md text-label-md">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-error"></span>
<span className="text-on-surface font-medium">Potholes & Structural Voids</span>
</div>
<div className="flex items-center gap-2">
<span className="text-on-surface-variant font-label-sm text-label-sm">539 items</span>
<span className="text-error font-bold">42%</span>
</div>
</div>

<div className="w-full h-2 rounded bg-surface-container-lowest overflow-hidden">
<div className="h-full bg-error rounded" style={{width: '42%'}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-md text-label-md">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-secondary"></span>
<span className="text-on-surface font-medium">Longitudinal / Alligator Cracks</span>
</div>
<div className="flex items-center gap-2">
<span className="text-on-surface-variant font-label-sm text-label-sm">359 items</span>
<span className="text-secondary font-bold">28%</span>
</div>
</div>
<div className="w-full h-2 rounded bg-surface-container-lowest overflow-hidden">
<div className="h-full bg-secondary rounded" style={{width: '28%'}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-md text-label-md">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-primary"></span>
<span className="text-on-surface font-medium">Drainage & Manhole Displacements</span>
</div>
<div className="flex items-center gap-2">
<span className="text-on-surface-variant font-label-sm text-label-sm">231 items</span>
<span className="text-primary font-bold">18%</span>
</div>
</div>
<div className="w-full h-2 rounded bg-surface-container-lowest overflow-hidden">
<div className="h-full bg-primary rounded" style={{width: '18%'}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-md text-label-md">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-surface-container-highest"></span>
<span className="text-on-surface font-medium">Debris & Shoulder Obstructions</span>
</div>
<div className="flex items-center gap-2">
<span className="text-on-surface-variant font-label-sm text-label-sm">155 items</span>
<span className="text-on-surface-variant font-bold">12%</span>
</div>
</div>
<div className="w-full h-2 rounded bg-surface-container-lowest overflow-hidden">
<div className="h-full bg-surface-container-highest rounded" style={{width: '12%'}}></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col p-space-sm rounded-lg bg-surface-container shadow-md gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">speed</span>
<span className="font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider">Priority Urgency Score</span>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-low text-primary">Triage Matrix</span>
</div>

<div className="flex w-full h-3 rounded-full overflow-hidden gap-0.5 bg-surface-container-lowest">
<div className="bg-error transition-all duration-500" style={{width: '12%'}} title="Critical: 12%"></div>
<div className="bg-secondary transition-all duration-500" style={{width: '29%'}} title="High: 29%"></div>
<div className="bg-primary transition-all duration-500" style={{width: '38%'}} title="Medium: 38%"></div>
<div className="bg-surface-container-highest transition-all duration-500" style={{width: '21%'}} title="Low: 21%"></div>
</div>

<div className="grid grid-cols-2 gap-space-xs pt-1">

<div className="flex items-center justify-between p-space-xs rounded bg-surface-container-low">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-error"></span>
<span className="font-label-sm text-label-sm text-on-surface">Critical (80-100)</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-error">12%</span>
</div>

<div className="flex items-center justify-between p-space-xs rounded bg-surface-container-low">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-on-surface">High (60-79)</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-secondary">29%</span>
</div>

<div className="flex items-center justify-between p-space-xs rounded bg-surface-container-low">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-sm text-label-sm text-on-surface">Medium (40-59)</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-primary">38%</span>
</div>

<div className="flex items-center justify-between p-space-xs rounded bg-surface-container-low">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-surface-container-highest"></span>
<span className="font-label-sm text-label-sm text-on-surface">Low (0-39)</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-on-surface-variant">21%</span>
</div>
</div>
</div>

<div className="flex flex-col p-space-sm rounded-lg bg-surface-container shadow-md gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">memory</span>
<span className="font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider">Model Calibration & Edge Telemetry</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-mono">v9.4.2-quant</span>
</div>

<div className="grid grid-cols-3 gap-space-xs mt-1">
<div className="flex flex-col items-center justify-center p-space-xs rounded bg-surface-container-low text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Precision</span>
<span className="font-label-lg text-label-lg font-bold text-primary mt-0.5">96.1%</span>
</div>
<div className="flex flex-col items-center justify-center p-space-xs rounded bg-surface-container-low text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Recall</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface mt-0.5">92.4%</span>
</div>
<div className="flex flex-col items-center justify-center p-space-xs rounded bg-surface-container-low text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">mAP@0.5</span>
<span className="font-label-lg text-label-lg font-bold text-secondary mt-0.5">94.8%</span>
</div>
</div>

<div className="flex items-center justify-between px-space-sm py-2 rounded bg-surface-container-lowest mt-1">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">terminal</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Processing Latency (Nvidia Jetson Orin)</span>
</div>
<div className="flex items-center gap-1 font-label-md text-label-md text-primary font-bold">
<span>142ms</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-normal">/ frame</span>
</div>
</div>
</div>

<div className="flex flex-col p-space-sm rounded-lg bg-surface-container shadow-md gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">domain_verification</span>
<span className="font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider">Ward Risk Comparison</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">PCI Health Index</span>
</div>
<div className="flex flex-col gap-space-xs">

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-error"></span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Ward 07 (Central Medical)</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">High Density & Emergency Arterials</span>
</div>
<div className="flex flex-col items-end">
<span className="font-label-lg text-label-lg font-bold text-error">PCI 46</span>
<span className="font-label-sm text-label-sm text-error/90 uppercase">Critical</span>
</div>
</div>

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Ward 04 (Industrial Harbor)</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Heavy Freight & Axle Load Wear</span>
</div>
<div className="flex flex-col items-end">
<span className="font-label-lg text-label-lg font-bold text-secondary">PCI 51</span>
<span className="font-label-sm text-label-sm text-secondary uppercase">Degraded</span>
</div>
</div>

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Ward 02 (Uptown Residential)</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Moderate Commuter Footprint</span>
</div>
<div className="flex flex-col items-end">
<span className="font-label-lg text-label-lg font-bold text-primary">PCI 72</span>
<span className="font-label-sm text-label-sm text-primary uppercase">Stable</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col p-space-sm rounded-lg bg-surface-container-lowest gap-space-xs text-on-surface-variant">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[16px]">sensors</span>
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Backend Telemetry Connection</span>
</div>
<p className="font-body-sm text-body-sm">
      Recharts Mock Telemetry — Ready for backend FastAPI metrics service stream. Real-time updates aggregated via municipal vehicle dashcam edge inference relays.
    </p>
<div className="flex items-center justify-between pt-1">
<span className="font-label-sm text-label-sm text-on-surface-variant/80">Last Poll: 12s ago</span>
<span className="font-label-sm text-label-sm text-primary font-mono">STATUS 200 OK</span>
</div>
</div>
</div>
</main><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.4)]" data-active-classes="text-primary bg-surface-container-high/60"><div className="flex items-stretch overflow-x-auto no-scrollbar h-16 px-space-xs"><a className="flex flex-col items-center justify-center flex-1 min-w-[54px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="civicvision-ai-operational-dashboard" href="#"><span className="material-symbols-outlined text-[20px]">dashboard</span><span className="text-label-sm font-label-sm mt-0.5 truncate">Dash</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[54px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="civicvision-ai-inspection-detection" href="#"><span className="material-symbols-outlined text-[20px]">document_scanner</span><span className="text-label-sm font-label-sm mt-0.5 truncate">Inspect</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[54px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="civicvision-ai-priority-queue" href="#"><span className="material-symbols-outlined text-[20px]">emergency_home</span><span className="text-label-sm font-label-sm mt-0.5 truncate">Queue</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[54px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="civicvision-ai-geographic-map" href="#"><span className="material-symbols-outlined text-[20px]">map</span><span className="text-label-sm font-label-sm mt-0.5 truncate">Map</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[54px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="civicvision-ai-road-location-context" href="#"><span className="material-symbols-outlined text-[20px]">add_road</span><span className="text-label-sm font-label-sm mt-0.5 truncate">Context</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[54px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="civicvision-ai-infrastructure-analytics" href="#"><span className="material-symbols-outlined text-[20px]">analytics</span><span className="text-label-sm font-label-sm mt-0.5 truncate">Analytics</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[54px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="civicvision-ai-maintenance-operations" href="#"><span className="material-symbols-outlined text-[20px]">build_circle</span><span className="text-label-sm font-label-sm mt-0.5 truncate">Ops</span></a></div></nav></>
  )
}
