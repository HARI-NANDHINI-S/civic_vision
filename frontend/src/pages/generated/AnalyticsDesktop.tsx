// Generated from Stitch: civicvision_ai_desktop_analytics_model_intelligence/code.html
export default function AnalyticsDesktop() {
  return (
    <><div className="flex flex-col w-full">
<div className="p-gutter-desktop flex flex-col gap-space-lg">

<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md bg-surface-container-low p-space-md rounded-lg shadow-sm">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-mono">CivicVision // Inference Pipeline v2.4.1</span>
<span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping"></span>
</div>
<h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">Infrastructure Analytics & Model Performance</h1>
</div>
<div className="flex flex-wrap items-center gap-space-sm w-full lg:w-auto">

<div className="flex items-center bg-surface-container-lowest p-0.5 rounded shadow-inner" id="rangeSelector">
<button className="range-btn font-label-md text-label-md px-space-md py-1.5 rounded text-on-surface-variant hover:text-on-surface transition-colors" data-range="7d" type="button">Last 7 Days</button>
<button className="range-btn active font-label-md text-label-md px-space-md py-1.5 rounded bg-primary-container text-on-primary-container font-semibold transition-all shadow-sm" data-range="30d" type="button">Last 30 Days</button>
<button className="range-btn font-label-md text-label-md px-space-md py-1.5 rounded text-on-surface-variant hover:text-on-surface transition-colors" data-range="q3" type="button">Q3 Fiscal 2025</button>
<button className="range-btn font-label-md text-label-md px-space-md py-1.5 rounded text-on-surface-variant hover:text-on-surface transition-colors" data-range="custom" type="button">Custom</button>
</div>

<div className="relative">
<select className="appearance-none bg-surface-container text-on-surface font-label-md text-label-md py-2 pl-3 pr-8 rounded focus:outline-none focus:bg-surface-container-high transition-colors cursor-pointer border-none shadow-sm">
<option value="all">Cross-Ward Global (All 7 Wards)</option>
<option value="w1">Ward 01 - Metro Central</option>
<option value="w2">Ward 02 - Harbor Industrial</option>
<option value="w3">Ward 03 - Northern Heights</option>
<option value="w4">Ward 04 - University Valley</option>
<option value="w5">Ward 05 - East Gateway</option>
<option value="w6">Ward 06 - South Riverside</option>
<option value="w7">Ward 07 - Tech Corridor Outer</option>
</select>
<span className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]">expand_more</span>
</div>

<button className="flex items-center gap-space-xs bg-primary text-on-primary font-label-md text-label-md px-space-md py-2 rounded font-semibold hover:brightness-110 active:scale-95 transition-all shadow-lg hover:shadow-primary/20" type="button">
<span className="material-symbols-outlined text-[16px]">file_download</span>
<span>Export Telemetry (PDF/CSV)</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">

<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between shadow-sm relative overflow-hidden group hover:bg-surface-container transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Inferences Processed</span>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
</div>
<div className="mt-space-sm flex items-baseline justify-between">
<div className="font-headline-xl text-headline-xl font-bold text-on-surface font-headline-xl tracking-tight">14,892</div>
<span className="font-label-sm text-label-sm bg-primary/15 text-primary px-1.5 py-0.5 rounded font-mono">+18.4% MoM</span>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant">
<svg className="w-full h-8 overflow-visible" fill="none" viewBox="0 0 100 24">
<path d="M0 20 Q15 18 30 12 T60 14 T80 6 L100 4" fill="none" stroke="#4edea3" strokeLinecap="round" strokeWidth="2"></path>
<path d="M0 20 Q15 18 30 12 T60 14 T80 6 L100 4 L100 24 L0 24 Z" fill="url(#gradEmerald)" opacity="0.18"></path>
<defs>
<linearGradient id="gradEmerald" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#4edea3"></stop>
<stop offset="100%" stopColor="#4edea3" stopOpacity="0"></stop>
</linearGradient>
</defs>
</svg>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant/70 mt-1">Dashcam feeds & aerial scans</span>
</div>

<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between shadow-sm relative overflow-hidden group hover:bg-surface-container transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Dual-Engine Ensemble</span>
<span className="material-symbols-outlined text-[16px] text-primary">psychology</span>
</div>
<div className="mt-space-sm flex items-baseline justify-between">
<div className="font-headline-xl text-headline-xl font-bold text-primary font-headline-xl tracking-tight">96.2%</div>
<span className="font-label-sm text-label-sm bg-primary-container text-on-primary-container font-mono px-1.5 py-0.5 rounded font-semibold">YOLOv11+</span>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between">
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full transition-all duration-700" style={{width: '96.2%'}}></div>
</div>
</div>
<div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm mt-2">
<span>False Positives &lt;0.8%</span>
<span className="font-mono text-on-surface font-medium">IoU 0.88</span>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between shadow-sm relative overflow-hidden group hover:bg-surface-container transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Mean Time To Repair</span>
<span className="material-symbols-outlined text-[16px] text-secondary">timelapse</span>
</div>
<div className="mt-space-sm flex items-baseline justify-between">
<div className="font-headline-xl text-headline-xl font-bold text-on-surface font-headline-xl tracking-tight">22.4<span className="font-body-md text-body-md text-on-surface-variant ml-1 font-normal">hrs</span></div>
<span className="font-label-sm text-label-sm bg-secondary/15 text-secondary px-1.5 py-0.5 rounded font-mono">-14% SLA</span>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between">
<svg className="w-full h-8 overflow-visible" fill="none" viewBox="0 0 100 24">
<path d="M0 6 L20 8 L40 14 L60 11 L80 18 L100 21" stroke="#ffb95f" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm mt-1">
<span>Benchmark: 36.0 hrs</span>
<span className="text-secondary font-mono">Ahead</span>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between shadow-sm relative overflow-hidden group hover:bg-surface-container transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Hazardous Remediated</span>
<span className="material-symbols-outlined text-[16px] text-tertiary-container">verified</span>
</div>
<div className="mt-space-sm flex items-baseline justify-between">
<div className="font-headline-xl text-headline-xl font-bold text-on-surface font-headline-xl tracking-tight">1,148</div>
<span className="font-label-sm text-label-sm bg-surface-container-highest text-on-surface px-1.5 py-0.5 rounded font-mono">99.1% QA</span>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between">
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden flex">
<div className="bg-primary h-full" style={{width: '82%'}}></div>
<div className="bg-secondary h-full" style={{width: '14%'}}></div>
<div className="bg-tertiary-container h-full" style={{width: '4%'}}></div>
</div>
</div>
<div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm mt-2">
<span>Compaction pass confirmed</span>
<span className="text-primary font-mono font-medium">942 Potholes</span>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between shadow-sm relative overflow-hidden group hover:bg-surface-container transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Active Patrol Fleets</span>
<span className="material-symbols-outlined text-[16px] text-primary">directions_car</span>
</div>
<div className="mt-space-sm flex items-baseline justify-between">
<div className="font-headline-xl text-headline-xl font-bold text-on-surface font-headline-xl tracking-tight">42<span className="font-body-md text-body-md text-on-surface-variant ml-1 font-normal">units</span></div>
<span className="font-label-sm text-label-sm bg-primary/15 text-primary px-1.5 py-0.5 rounded font-mono">18ms Lag</span>
</div>
<div className="mt-space-sm pt-space-xs flex items-center gap-1">
<span className="h-2 flex-1 rounded-sm bg-primary"></span>
<span className="h-2 flex-1 rounded-sm bg-primary"></span>
<span className="h-2 flex-1 rounded-sm bg-primary"></span>
<span className="h-2 flex-1 rounded-sm bg-primary"></span>
<span className="h-2 flex-1 rounded-sm bg-secondary"></span>
<span className="h-2 flex-1 rounded-sm bg-surface-container-highest"></span>
</div>
<div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm mt-2">
<span>38 Online / 4 Synced</span>
<span className="font-mono text-primary">99.8% Up</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">

<div className="xl:col-span-7 bg-surface-container-low p-space-lg rounded-lg shadow-sm flex flex-col justify-between">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-md">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-mono">CV Inference Temporal Analysis</span>
<h2 className="font-headline-md text-headline-md font-bold text-on-surface">Defect Severity & Velocity Trends</h2>
</div>
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary-container"></span> Pothole (Sev 4)
            </span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span> Cracking
            </span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span> Drain Blockage
            </span>
</div>
</div>

<div className="relative w-full h-72 bg-surface-container-lowest rounded p-space-md flex flex-col justify-between overflow-hidden">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none p-space-md opacity-20">
<div className="w-full h-px bg-on-surface-variant"></div>
<div className="w-full h-px bg-on-surface-variant"></div>
<div className="w-full h-px bg-on-surface-variant"></div>
<div className="w-full h-px bg-on-surface-variant"></div>
<div className="w-full h-px bg-on-surface-variant"></div>
</div>

<div className="absolute left-1/2 top-10 transform -translate-x-1/2 bg-surface-container-high/95 backdrop-blur px-space-md py-space-xs rounded shadow-2xl pointer-events-none z-10 flex flex-col gap-0.5">
<div className="flex items-center justify-between gap-space-md text-on-surface font-label-sm text-label-sm">
<span className="font-semibold text-primary">WEEK 03 (PEAK STORM)</span>
<span className="font-mono text-on-surface-variant">OCT 18</span>
</div>
<div className="flex items-center justify-between text-on-surface font-label-sm text-label-sm gap-space-md font-mono">
<span className="text-tertiary-container">Potholes: 312</span>
<span className="text-secondary">Cracks: 489</span>
<span className="text-primary">Drains: 142</span>
</div>
</div>

<div className="absolute left-1/2 top-0 bottom-8 w-px bg-primary/40 pointer-events-none"></div>

<svg className="w-full h-56 mt-auto overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 160">

<defs>
<linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#ff7884" stopOpacity="0.35"></stop>
<stop offset="100%" stopColor="#ff7884" stopOpacity="0.0"></stop>
</linearGradient>
<linearGradient id="primaryArea" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#4edea3" stopOpacity="0.25"></stop>
<stop offset="100%" stopColor="#4edea3" stopOpacity="0.0"></stop>
</linearGradient>
</defs>

<polygon fill="url(#primaryArea)" points="0,160 0,130 80,120 160,110 250,75 340,95 420,80 500,100 500,160"></polygon>
<polyline fill="none" points="0,130 80,120 160,110 250,75 340,95 420,80 500,100" stroke="#4edea3" strokeLinecap="round" strokeWidth="2.5"></polyline>

<polyline fill="none" points="0,95 80,105 160,80 250,45 340,65 420,50 500,60" stroke="#ffb95f" strokeDasharray="4 2" strokeLinecap="round" strokeWidth="2.5"></polyline>

<polygon fill="url(#areaGradient)" points="0,160 0,110 80,85 160,90 250,30 340,60 420,40 500,35 500,160"></polygon>
<polyline fill="none" points="0,110 80,85 160,90 250,30 340,60 420,40 500,35" stroke="#ff7884" strokeLinecap="round" strokeWidth="3"></polyline>

<circle cx="250" cy="30" fill="#ff7884" r="4.5" stroke="#060e20" strokeWidth="2"></circle>
<circle cx="250" cy="45" fill="#ffb95f" r="4" stroke="#060e20" strokeWidth="2"></circle>
<circle cx="250" cy="75" fill="#4edea3" r="4" stroke="#060e20" strokeWidth="2"></circle>
</svg>

<div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm pt-2 px-1">
<span>Oct 01 (W1)</span>
<span>Oct 08 (W2)</span>
<span className="text-primary font-semibold">Oct 15 (W3: Storm Front)</span>
<span>Oct 22 (W4)</span>
<span>Oct 29 (W5)</span>
</div>
</div>

<div className="mt-space-md grid grid-cols-3 gap-space-sm pt-space-xs">
<div className="bg-surface-container-lowest p-space-sm rounded">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Cumulative Volume</span>
<span className="font-headline-md text-headline-md font-bold text-on-surface">3,490</span>
<span className="font-label-sm text-label-sm text-primary block mt-0.5">↑ 12% vs 30d prev</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Auto-Triaged to Crews</span>
<span className="font-headline-md text-headline-md font-bold text-on-surface">2,881</span>
<span className="font-label-sm text-label-sm text-secondary block mt-0.5">82.5% Auto-Dispatch</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Human Review Flag</span>
<span className="font-headline-md text-headline-md font-bold text-on-surface">609</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block mt-0.5">Low confidence &lt;85%</span>
</div>
</div>
</div>

<div className="xl:col-span-5 bg-surface-container-low p-space-lg rounded-lg shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-space-md">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-mono">Model Diagnostic Matrix</span>
<h2 className="font-headline-md text-headline-md font-bold text-on-surface">Confidence Calibration</h2>
</div>
<span className="bg-primary/10 text-primary font-label-sm text-label-sm px-2 py-1 rounded font-mono">mAP@0.5: 0.941</span>
</div>

<div className="space-y-space-sm flex-1 flex flex-col justify-center">

<div className="bg-surface-container-lowest p-space-sm rounded flex flex-col gap-1.5">
<div className="flex justify-between items-center">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded bg-tertiary-container"></span>
<span className="font-label-md text-label-md font-semibold text-on-surface">POTHOLE_CLASS_A</span>
</div>
<span className="font-label-sm text-label-sm font-mono text-primary font-bold">97.4% Prec</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden flex">
<div className="bg-tertiary-container h-full" style={{width: '97.4%'}}></div>
</div>
<div className="flex justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Recall: 95.8%</span>
<span>Inference Time: 12.4ms</span>
<span className="text-on-surface font-mono">N=6,412</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-sm rounded flex flex-col gap-1.5">
<div className="flex justify-between items-center">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded bg-secondary"></span>
<span className="font-label-md text-label-md font-semibold text-on-surface">VOID_SUBSIDENCE_S3</span>
</div>
<span className="font-label-sm text-label-sm font-mono text-primary font-bold">94.8% Prec</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden flex">
<div className="bg-secondary h-full" style={{width: '94.8%'}}></div>
</div>
<div className="flex justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Recall: 91.2%</span>
<span>Inference Time: 14.1ms</span>
<span className="text-on-surface font-mono">N=1,824</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-sm rounded flex flex-col gap-1.5">
<div className="flex justify-between items-center">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded bg-primary"></span>
<span className="font-label-md text-label-md font-semibold text-on-surface">DRAIN_BLOCKAGE_SURF</span>
</div>
<span className="font-label-sm text-label-sm font-mono text-primary font-bold">98.1% Prec</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden flex">
<div className="bg-primary h-full" style={{width: '98.1%'}}></div>
</div>
<div className="flex justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Recall: 97.4%</span>
<span>Inference Time: 10.8ms</span>
<span className="text-on-surface font-mono">N=3,110</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-sm rounded flex flex-col gap-1.5">
<div className="flex justify-between items-center">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded bg-outline"></span>
<span className="font-label-md text-label-md font-semibold text-on-surface">CRACK_LONGITUDINAL</span>
</div>
<span className="font-label-sm text-label-sm font-mono text-primary font-bold">92.6% Prec</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden flex">
<div className="bg-outline h-full" style={{width: '92.6%'}}></div>
</div>
<div className="flex justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Recall: 89.3%</span>
<span>Inference Time: 16.2ms</span>
<span className="text-on-surface font-mono">N=3,546</span>
</div>
</div>
</div>

<div className="mt-space-md p-space-xs bg-surface-container-high rounded flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[16px]">tune</span>
<span>Threshold Gate: <strong className="text-on-surface font-mono">0.72 Conf</strong></span>
</div>
<button className="text-primary hover:underline font-mono text-label-sm" type="button">Adjust Weights →</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">

<div className="xl:col-span-8 bg-surface-container-low p-space-lg rounded-lg shadow-sm">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm mb-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-mono">Spatial Priority Index</span>
<span className="bg-secondary/15 text-secondary font-label-sm text-label-sm px-1.5 rounded">ASTM D6433 Aligned</span>
</div>
<h2 className="font-headline-md text-headline-md font-bold text-on-surface">Cross-Ward Infrastructure Health & PCI Matrix</h2>
</div>
<div className="flex items-center gap-space-xs text-label-sm font-label-sm text-on-surface-variant">
<span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-error"></span> Critical &lt;45</span>
<span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-secondary"></span> Degraded 45-70</span>
<span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-primary"></span> Stable &gt;70</span>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-space-sm px-space-md rounded-l">Ward & Designation</th>
<th className="py-space-sm px-space-md">Pavement Health (PCI)</th>
<th className="py-space-sm px-space-md">Active Hazards</th>
<th className="py-space-sm px-space-md">Corridor Focus</th>
<th className="py-space-sm px-space-md">Est. Remediation</th>
<th className="py-space-sm px-space-md text-right rounded-r">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container/60 font-body-sm text-body-sm text-on-surface">

<tr className="hover:bg-surface-container-high/40 transition-colors">
<td className="py-space-md px-space-md font-medium">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-6 rounded-full bg-error"></span>
<div>
<span className="font-bold block text-on-surface">Ward 02</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">Harbor Industrial Zone</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-sm">
<span className="font-mono font-bold text-error">38.4</span>
<div className="w-24 bg-surface-container-lowest h-2 rounded-full overflow-hidden">
<div className="bg-error h-full" style={{width: '38.4%'}}></div>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="font-mono bg-error-container text-on-error-container px-2 py-0.5 rounded text-label-sm font-bold">142 Critical</span>
</td>
<td className="py-space-md px-space-md font-mono text-label-sm text-on-surface-variant">Pier 44 Heavy Freight Arterial</td>
<td className="py-space-md px-space-md font-mono font-semibold text-on-surface">$412,000</td>
<td className="py-space-md px-space-md text-right">
<button className="bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface px-space-sm py-1 rounded font-label-sm text-label-sm transition-colors" type="button">Dispatch</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/40 transition-colors">
<td className="py-space-md px-space-md font-medium">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-6 rounded-full bg-secondary"></span>
<div>
<span className="font-bold block text-on-surface">Ward 06</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">South Riverside Corridor</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-sm">
<span className="font-mono font-bold text-secondary">54.1</span>
<div className="w-24 bg-surface-container-lowest h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full" style={{width: '54.1%'}}></div>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="font-mono bg-secondary/15 text-secondary px-2 py-0.5 rounded text-label-sm font-semibold">68 Urgent</span>
</td>
<td className="py-space-md px-space-md font-mono text-label-sm text-on-surface-variant">Riverside Parkway Blv</td>
<td className="py-space-md px-space-md font-mono font-semibold text-on-surface">$184,500</td>
<td className="py-space-md px-space-md text-right">
<button className="bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface px-space-sm py-1 rounded font-label-sm text-label-sm transition-colors" type="button">Dispatch</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/40 transition-colors">
<td className="py-space-md px-space-md font-medium">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-6 rounded-full bg-secondary"></span>
<div>
<span className="font-bold block text-on-surface">Ward 01</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">Metro Central Downtown</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-sm">
<span className="font-mono font-bold text-secondary">68.7</span>
<div className="w-24 bg-surface-container-lowest h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full" style={{width: '68.7%'}}></div>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="font-mono bg-secondary/15 text-secondary px-2 py-0.5 rounded text-label-sm font-semibold">41 Minor</span>
</td>
<td className="py-space-md px-space-md font-mono text-label-sm text-on-surface-variant">5th Ave / Civic Plaza Cross</td>
<td className="py-space-md px-space-md font-mono font-semibold text-on-surface">$98,000</td>
<td className="py-space-md px-space-md text-right">
<button className="bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface px-space-sm py-1 rounded font-label-sm text-label-sm transition-colors" type="button">Dispatch</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/40 transition-colors">
<td className="py-space-md px-space-md font-medium">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-6 rounded-full bg-primary"></span>
<div>
<span className="font-bold block text-on-surface">Ward 04</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">University Research Valley</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-sm">
<span className="font-mono font-bold text-primary">82.9</span>
<div className="w-24 bg-surface-container-lowest h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full" style={{width: '82.9%'}}></div>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="font-mono bg-primary/15 text-primary px-2 py-0.5 rounded text-label-sm font-semibold">12 Monitored</span>
</td>
<td className="py-space-md px-space-md font-mono text-label-sm text-on-surface-variant">Campus Way & Loop 2</td>
<td className="py-space-md px-space-md font-mono font-semibold text-on-surface">$24,200</td>
<td className="py-space-md px-space-md text-right">
<button className="bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface px-space-sm py-1 rounded font-label-sm text-label-sm transition-colors" type="button">Dispatch</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/40 transition-colors">
<td className="py-space-md px-space-md font-medium">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-6 rounded-full bg-primary"></span>
<div>
<span className="font-bold block text-on-surface">Ward 07</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">Silicon Outer Bypass</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-sm">
<span className="font-mono font-bold text-primary">88.5</span>
<div className="w-24 bg-surface-container-lowest h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full" style={{width: '88.5%'}}></div>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="font-mono bg-primary/15 text-primary px-2 py-0.5 rounded text-label-sm font-semibold">7 Minor</span>
</td>
<td className="py-space-md px-space-md font-mono text-label-sm text-on-surface-variant">Interstate 880 Express Lane</td>
<td className="py-space-md px-space-md font-mono font-semibold text-on-surface">$12,000</td>
<td className="py-space-md px-space-md text-right">
<button className="bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface px-space-sm py-1 rounded font-label-sm text-label-sm transition-colors" type="button">Dispatch</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="xl:col-span-4 bg-surface-container-low p-space-lg rounded-lg shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-space-md">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-mono">Edge Patrol Telemetry</span>
<h2 className="font-headline-md text-headline-md font-bold text-on-surface">Hardware Ingestion</h2>
</div>
<span className="material-symbols-outlined text-primary text-[20px]">router</span>
</div>

<div className="space-y-space-md">

<div className="bg-surface-container-lowest p-space-sm rounded">
<div className="flex justify-between items-center mb-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">Live Dashcam Ingestion</span>
<span className="font-mono font-bold text-primary text-label-md">28.4 FPS / Fleet Unit</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden flex">
<div className="bg-primary h-full" style={{width: '88%'}}></div>
</div>
<div className="flex justify-between text-on-surface-variant font-label-sm text-label-sm mt-1">
<span>H.265 Hardware Encode</span>
<span className="font-mono">Bitrate: 4.8 Mbps</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-sm rounded">
<div className="flex justify-between items-center mb-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">NVIDIA Jetson AGX Orin Load</span>
<span className="font-mono font-bold text-secondary text-label-md">68% Capacity</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden flex">
<div className="bg-secondary h-full" style={{width: '68%'}}></div>
</div>
<div className="flex justify-between text-on-surface-variant font-label-sm text-label-sm mt-1">
<span>TensorRT FP16 Active</span>
<span className="font-mono">Temp: 54°C (Safe)</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-sm rounded">
<div className="flex justify-between items-center mb-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">Stream Event Socket (Live)</span>
<span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
</div>
<div className="font-mono text-label-sm space-y-1 overflow-y-auto max-h-36 pr-1 select-all" id="fastApiLog">
<div className="text-on-surface-variant">
<span className="text-primary">[14:32:01]</span> POST /v2/infer/batch : 4 frames (Ward 02) <span className="text-primary font-bold">200 OK</span>
</div>
<div className="text-on-surface-variant">
<span className="text-primary">[14:32:04]</span> DETECT: POTHOLE_SEV_4 conf=0.982 loc=[37.77,-122.41]
              </div>
<div className="text-on-surface-variant">
<span className="text-secondary">[14:32:09]</span> QUEUE: SLA Priority Triggered -&gt; Ward 02 Dispatch
              </div>
<div className="text-on-surface-variant">
<span className="text-primary">[14:32:15]</span> CAMERA_PATROL_#19: GPS Sync Valid (HDOP 0.8)
              </div>
<div className="text-on-surface-variant">
<span className="text-primary">[14:32:19]</span> POST /v2/infer/batch : 6 frames (Ward 06) <span className="text-primary font-bold">200 OK</span>
</div>
</div>
</div>
</div>

<div className="mt-space-md pt-space-xs flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Engine: <span className="text-on-surface font-mono">TensorFlow-Lite / PyTorch 2.4</span></span>
<button className="text-primary hover:underline font-label-sm text-label-sm font-mono flex items-center gap-1" type="button">
<span>View Logs</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-lg shadow-sm">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm mb-space-md">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-mono">Recent Telemetry Frames</span>
<h2 className="font-headline-md text-headline-md font-bold text-on-surface">Live Detection Inferences & Computer Vision Bounds</h2>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">Automated Capture Rate: 1 Frame / 50m</span>
<button className="bg-surface-container-highest text-on-surface font-label-sm text-label-sm px-3 py-1.5 rounded hover:bg-surface-bright transition-colors" type="button">Refresh Feeds</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="relative bg-surface-container-lowest rounded-lg overflow-hidden flex flex-col group">
<div className="relative w-full h-48 bg-surface-container">
<img className="w-full h-full object-cover" data-alt="High-resolution asphalt road surface taken from mobile patrol vehicle dash camera at dusk, highlighting a deep severe pothole in the asphalt with dark charcoal textures, urban road background in slate tones, sharp computer vision diagnostic lighting, high clarity photorealistic civic infrastructure." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNWAtICjN4InbzJs7-kkResVqKnBY2Ob92Rbr53jVmAlICd_pxq9_ujUMrhlw6weWA30NhcpHyaou_b3G3Oa3ABbZ_tBEnyg8vVoClaUtcfbp3z0-cYevgMAd9oQXI4TZlBo5H0T1tga6tJAbM2Q1yB_5svQiKmAjWoLTcCDgk9P3jGawRh9VAe61--PaVc1VjKrnXwU4u1Wlm42uJxGSuftUR3E39XGTFQ52OUJHMPIIo5IuQbox7" />

<div className="absolute inset-x-8 inset-y-10 border-2 border-tertiary-container rounded-sm pointer-events-none">

<span className="absolute -top-1 -left-1 w-2 h-2 bg-tertiary-container"></span>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-tertiary-container"></span>
<span className="absolute -bottom-1 -left-1 w-2 h-2 bg-tertiary-container"></span>
<span className="absolute -bottom-1 -right-1 w-2 h-2 bg-tertiary-container"></span>

<div className="absolute -top-6 left-0 bg-surface-container-lowest/90 px-1.5 py-0.5 rounded text-tertiary-container font-mono font-bold text-label-sm shadow">
                POTHOLE_CLASS_A 98.4%
              </div>
</div>

<div className="absolute bottom-2 left-2 bg-surface-container-lowest/80 backdrop-blur px-2 py-0.5 rounded font-mono text-label-sm text-on-surface">
              Ward 02 • Unit #08 • 18ms
            </div>
</div>
<div className="p-space-sm flex justify-between items-center">
<div>
<span className="font-label-md text-label-md font-bold block text-on-surface">Pier 44 Freight Access</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Depth: 8.2cm • Severity: Tier 4</span>
</div>
<span className="material-symbols-outlined text-tertiary-container">priority_high</span>
</div>
</div>

<div className="relative bg-surface-container-lowest rounded-lg overflow-hidden flex flex-col group">
<div className="relative w-full h-48 bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Close-up pavement view of longitudinal asphalt fatigue cracking along urban roadway curb, wet pavement reflection, twilight atmospheric lighting, technical street view camera capture, moody deep charcoal tones and crisp road markings." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAayT812n2FTWbvulR5cnBD7O62lXH7IM6GDvSyR7iDj6DXXqf2F0I13Z-Tk_2Ep3TfqQpnfpbPFlR3ZUcpy_ETA9045jhuThWvp_4yoYtYkjK4CgftLRXMV9sPBJUkTPqnRToN907DtKSn-o8gZJqm-Ptr_O-LvKuvfgIlMkaSfTVTK54zhGBdbbJ_zGHJvOcu8wzUfPTk9srEzMnN9lXQot8wcYqBGhtxGY7Vij8gf3VHit7aiJTg" />

<div className="absolute inset-x-12 inset-y-8 border-2 border-secondary rounded-sm pointer-events-none">
<span className="absolute -top-1 -left-1 w-2 h-2 bg-secondary"></span>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary"></span>
<span className="absolute -bottom-1 -left-1 w-2 h-2 bg-secondary"></span>
<span className="absolute -bottom-1 -right-1 w-2 h-2 bg-secondary"></span>
<div className="absolute -top-6 left-0 bg-surface-container-lowest/90 px-1.5 py-0.5 rounded text-secondary font-mono font-bold text-label-sm shadow">
                CRACK_FATIGUE 94.2%
              </div>
</div>
<div className="absolute bottom-2 left-2 bg-surface-container-lowest/80 backdrop-blur px-2 py-0.5 rounded font-mono text-label-sm text-on-surface">
              Ward 06 • Unit #14 • 14ms
            </div>
</div>
<div className="p-space-sm flex justify-between items-center">
<div>
<span className="font-label-md text-label-md font-bold block text-on-surface">Riverside Parkway Mile 3.2</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Length: 4.6m • Severity: Tier 2</span>
</div>
<span className="material-symbols-outlined text-secondary">warning</span>
</div>
</div>

<div className="relative bg-surface-container-lowest rounded-lg overflow-hidden flex flex-col group">
<div className="relative w-full h-48 bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Municipal storm drain basin grate clogged with heavy foliage and debris on a city street gutter, overcast ambient lighting, cinematic moody contrast, sharp focus on drainage grate with water pooling, photorealistic infrastructure inspection." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMLz57ZnBTcLqBsqC5OzdccPvdOavN7YOIWdqOWK9QaZCcsRw4_MfBinwQdn7h1SpSzUlaukCg1W8DSI8H4k8-B0nUcqsiSIR_LQilLQmJ89_kISXA9Hf8Zf-_BxG1X3EHPe7bq8Srv5EHL_i_e4-G1t2lP_WpCOEV6K_XlA7xOzy2FaKvTtLoRqj3AEuG84Zl4rF1xzb8Cs9DH1M8-Kk4jwUMQ9L1q7Iz-POCXK8dbEGZW6ud7ahS" />

<div className="absolute inset-x-14 inset-y-6 border-2 border-primary rounded-sm pointer-events-none">
<span className="absolute -top-1 -left-1 w-2 h-2 bg-primary"></span>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-primary"></span>
<span className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary"></span>
<span className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary"></span>
<div className="absolute -top-6 left-0 bg-surface-container-lowest/90 px-1.5 py-0.5 rounded text-primary font-mono font-bold text-label-sm shadow">
                DRAIN_INUNDATION 99.1%
              </div>
</div>
<div className="absolute bottom-2 left-2 bg-surface-container-lowest/80 backdrop-blur px-2 py-0.5 rounded font-mono text-label-sm text-on-surface">
              Ward 01 • Unit #22 • 11ms
            </div>
</div>
<div className="p-space-sm flex justify-between items-center">
<div>
<span className="font-label-md text-label-md font-bold block text-on-surface">Metro 5th & Alder Corner</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Inundation: 74% Occluded</span>
</div>
<span className="material-symbols-outlined text-primary">check_circle</span>
</div>
</div>
</div>
</div>
</div>
</div>
</>
  )
}
