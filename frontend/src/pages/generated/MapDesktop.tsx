// Generated from Stitch: civicvision_ai_desktop_geographic_map/code.html
export default function MapDesktop() {
  return (
    <><div className="flex flex-col w-full h-[calc(100vh-4rem)] overflow-hidden select-none">

<div className="relative flex-1 w-full h-full flex overflow-hidden">

<aside className="w-80 flex-shrink-0 z-20 flex flex-col bg-surface-container-lowest/95 backdrop-blur-xl h-full shadow-2xl transition-all duration-300 ease-out" id="gis-control-dock">

<div className="px-space-md py-space-sm bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">layers</span>
<span className="font-headline-md text-headline-md tracking-tight text-on-surface">GIS Layers</span>
</div>
<div className="flex items-center gap-1">
<button className="p-1 rounded bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors text-[10px] font-label-sm uppercase px-1.5 py-0.5" id="toggle-all-layers">Reset</button>
<span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
</div>
</div>

<div className="flex-1 overflow-y-auto px-space-md py-space-md flex flex-col gap-space-lg">

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Corridor Heatmaps</span>
<span className="font-label-sm text-label-sm text-primary">LIVE RADAR</span>
</div>

<label className="group cursor-pointer flex items-center justify-between p-space-sm rounded bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-space-sm">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary shadow-[0_0_8px_rgba(255,179,182,0.8)]"></span>
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface font-medium">Pothole Density Heatmap</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Kernel dynamic decay (50m)</span>
</div>
</div>
<input defaultChecked="" className="accent-primary h-4 w-4 rounded cursor-pointer" type="checkbox" />
</label>

<label className="group cursor-pointer flex items-center justify-between p-space-sm rounded bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-space-sm">
<span className="w-2.5 h-2.5 rounded-full bg-error-container shadow-[0_0_8px_rgba(147,0,10,0.9)]"></span>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-body-sm text-body-sm text-on-surface font-medium">Critical Incidents Layer</span>
<span className="bg-error/20 text-error font-label-sm text-label-sm px-1 rounded font-semibold">12</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">SEV 4-5 verified alerts</span>
</div>
</div>
<input defaultChecked="" className="accent-primary h-4 w-4 rounded cursor-pointer" type="checkbox" />
</label>

<label className="group cursor-pointer flex items-center justify-between p-space-sm rounded bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[16px]">local_shipping</span>
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface font-medium">Patrol Fleet Telemetry</span>
<span className="font-label-sm text-label-sm text-primary">6 active units online</span>
</div>
</div>
<input defaultChecked="" className="accent-primary h-4 w-4 rounded cursor-pointer" type="checkbox" />
</label>

<label className="group cursor-pointer flex items-center justify-between p-space-sm rounded bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[16px]">polyline</span>
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface font-medium">Ward Boundary Demarcation</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Metro Districts 01-14</span>
</div>
</div>
<input defaultChecked="" className="accent-primary h-4 w-4 rounded cursor-pointer" type="checkbox" />
</label>

<label className="group cursor-pointer flex items-center justify-between p-space-sm rounded bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-space-sm">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface font-medium">Road PCI Classification</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Vector color-coded corridors</span>
</div>
</div>
<input defaultChecked="" className="accent-primary h-4 w-4 rounded cursor-pointer" type="checkbox" />
</label>
</div>

<div className="flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Triage Criteria</span>

<div className="flex flex-col gap-1.5 bg-surface-container p-space-sm rounded">
<div className="flex justify-between items-center">
<span className="font-body-sm text-body-sm text-on-surface">Severity Threshold</span>
<span className="font-label-sm text-label-sm text-secondary font-mono">SEV 3 to 5</span>
</div>
<div className="grid grid-cols-4 gap-1 pt-1">
<button className="bg-surface-container-lowest text-on-surface-variant hover:text-on-surface py-1 rounded text-center font-label-sm text-label-sm">SEV 2</button>
<button className="bg-surface-container-lowest text-secondary py-1 rounded text-center font-label-sm text-label-sm">SEV 3</button>
<button className="bg-secondary-container text-on-secondary-fixed py-1 rounded text-center font-label-sm text-label-sm font-semibold">SEV 4</button>
<button className="bg-error-container text-on-error py-1 rounded text-center font-label-sm text-label-sm font-bold">SEV 5</button>
</div>
</div>

<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant">Municipal Sector / Ward</label>
<div className="relative w-full">
<select className="w-full bg-surface-container text-on-surface font-body-sm text-body-sm px-space-sm py-2 rounded appearance-none focus:outline-none focus:bg-surface-container-high cursor-pointer">
<option>Ward 04: Central Medical Corridor</option>
<option>Ward 02: North Logistics Arterial</option>
<option>Ward 08: Waterfront Industrial</option>
<option>All Municipal Sectors (Consolidated)</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">expand_more</span>
</div>
</div>

<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant">Surface Classification</label>
<div className="grid grid-cols-2 gap-1.5">
<button className="bg-surface-container-high text-primary px-space-sm py-1.5 rounded font-label-sm text-label-sm text-left flex items-center justify-between">
<span>Dense Asphalt</span>
<span className="material-symbols-outlined text-[14px]">check</span>
</button>
<button className="bg-surface-container text-on-surface-variant hover:text-on-surface px-space-sm py-1.5 rounded font-label-sm text-label-sm text-left flex items-center justify-between">
<span>Concrete Slab</span>
<span className="material-symbols-outlined text-[14px] opacity-0">check</span>
</button>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs bg-surface-container p-space-sm rounded">
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono uppercase tracking-wider">Heatmap Density Weight</span>
<div className="h-2 w-full rounded bg-gradient-to-r from-primary via-secondary to-error"></div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant font-mono">
<span>Low (PCI 85+)</span>
<span>Degraded</span>
<span className="text-error">Critical (PCI &lt;45)</span>
</div>
</div>
</div>
</aside>

<div className="relative flex-1 h-full w-full bg-surface-container-lowest overflow-hidden">

<div className="absolute inset-0 w-full h-full bg-cover bg-center brightness-[0.4] saturate-[0.7]" data-alt="Dark vector metropolitan geographic information system street map with dense desaturated urban highway grids, subtle neon route overlays, topology contours, and moody aerial night lighting." data-location="Metropolitan Urban Transit District" style={{backgroundImage: "url('https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg')"}}></div>

<div className="absolute inset-0 pointer-events-none">
<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">

<defs>
<radialGradient cx="54%" cy="48%" id="heatGlowHospital" r="35%">
<stop offset="0%" stopColor="#ff7884" stopOpacity="0.38"></stop>
<stop offset="45%" stopColor="#ee9800" stopOpacity="0.22"></stop>
<stop offset="85%" stopColor="#10b981" stopOpacity="0.05"></stop>
<stop offset="100%" stopColor="#10b981" stopOpacity="0"></stop>
</radialGradient>
<radialGradient cx="28%" cy="75%" id="heatGlowIndustrial" r="22%">
<stop offset="0%" stopColor="#ffb95f" stopOpacity="0.3"></stop>
<stop offset="70%" stopColor="#ffb95f" stopOpacity="0.08"></stop>
<stop offset="100%" stopColor="#10b981" stopOpacity="0"></stop>
</radialGradient>
</defs>

<circle cx="54%" cy="48%" fill="url(#heatGlowHospital)" r="260"></circle>
<circle cx="28%" cy="75%" fill="url(#heatGlowIndustrial)" r="180"></circle>

<polygon fill="#ffb95f" fillOpacity="0.03" points="320,120 740,90 920,290 850,560 510,610 290,440" stroke="#ffb95f" strokeDasharray="6,4" strokeOpacity="0.35" strokeWidth="1.5"></polygon>

<polyline fill="none" points="340,320 480,390 620,410 780,480 840,540" stroke="#4edea3" strokeLinecap="round" strokeOpacity="0.75" strokeWidth="4"></polyline>

<polyline fill="none" points="420,220 490,280 560,340 610,395" stroke="#10b981" strokeDasharray="8,6" strokeLinecap="round" strokeWidth="3"></polyline>
</svg>
</div>

<div className="absolute top-space-md left-space-md z-10 flex items-center gap-space-xs bg-surface-container-low/90 backdrop-blur-md px-space-md py-space-xs rounded shadow-lg">
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
<span className="font-label-sm text-label-sm text-on-surface font-mono font-medium">GIS_LAYER://STREET_GRID_METRO_V2.1</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">|</span>
<span className="font-label-sm text-label-sm text-secondary font-mono">TILE_CACHE: 100% ONLINE</span>
</div>

<div className="absolute top-space-md right-space-md z-10 flex flex-col gap-1 bg-surface-container-low/90 backdrop-blur-md p-1 rounded shadow-xl">
<button className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-container-high rounded transition-colors" title="Zoom in">
<span className="material-symbols-outlined text-[18px]">add</span>
</button>
<button className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-container-high rounded transition-colors" title="Zoom out">
<span className="material-symbols-outlined text-[18px]">remove</span>
</button>
<div className="h-[1px] bg-surface-variant my-0.5"></div>
<button className="w-8 h-8 flex items-center justify-center text-primary hover:bg-surface-container-high rounded transition-colors" title="Reset North">
<span className="material-symbols-outlined text-[18px]">explore</span>
</button>
<button className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-container-high rounded transition-colors" title="Toggle Fullscreen Canvas">
<span className="material-symbols-outlined text-[18px]">fullscreen</span>
</button>
</div>


<div className="absolute top-[28%] left-[24%] -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer group">
<div className="w-9 h-9 rounded-full bg-surface-container-highest/90 shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
<div className="w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center">
<span className="font-label-sm text-label-sm font-bold text-on-secondary-fixed">14</span>
</div>
</div>
<div className="hidden group-hover:block absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-surface-container-lowest px-2 py-1 rounded text-on-surface font-label-sm text-label-sm shadow-xl">
          Sector 02 Cluster (14 issues)
        </div>
</div>

<div className="absolute top-[395px] left-[610px] -translate-x-1/2 -translate-y-1/2 z-15 group cursor-pointer">
<div className="relative flex items-center justify-center">
<div className="absolute w-12 h-12 bg-primary/20 rounded-full animate-ping"></div>
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg text-on-primary">
<span className="material-symbols-outlined text-[18px]">local_shipping</span>
</div>
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-surface-container-lowest/90 px-1.5 py-0.5 rounded shadow font-label-sm text-label-sm text-primary font-mono font-medium">
            CREW #02 (ETA 4m)
          </div>
</div>
</div>

<div className="absolute top-[48%] left-[54%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer">
<div className="relative flex flex-col items-center group">

<div className="absolute -inset-4 rounded-full bg-error/30 animate-pulse"></div>

<div className="relative w-10 h-10 rounded-full bg-error-container flex items-center justify-center text-on-error shadow-2xl">
<span className="material-symbols-outlined text-[20px] font-bold">warning</span>
</div>

<div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-error-container"></div>

<div className="mt-1 bg-surface-container-lowest/95 backdrop-blur-md px-2 py-0.5 rounded shadow-2xl flex items-center gap-1.5 whitespace-nowrap">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
<span className="font-label-sm text-label-sm font-mono text-error font-semibold">#CIV-9021 SEV-5</span>
</div>
</div>
</div>

<div className="absolute top-[68%] left-[42%] -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer group">
<div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
<div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-on-secondary">
<span className="material-symbols-outlined text-[13px]">priority_high</span>
</div>
</div>
<div className="hidden group-hover:block absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-surface-container-lowest px-2 py-1 rounded text-on-surface font-label-sm text-label-sm shadow-xl font-mono">
          #CIV-8842 - Surface Delamination
        </div>
</div>

<div className="absolute bottom- space-md left-space-md z-10 flex items-center gap-space-md">
<div className="flex flex-col bg-surface-container-lowest/80 backdrop-blur-md px-2 py-1 rounded">
<div className="w-24 h-1 bg-on-surface-variant flex justify-between">
<div className="w-0.5 h-1.5 bg-on-surface -mt-0.5"></div>
<div className="w-0.5 h-1.5 bg-on-surface -mt-0.5"></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono mt-0.5">500 m / 1,640 ft</span>
</div>
<div className="bg-surface-container-lowest/80 backdrop-blur-md px-2 py-1 rounded font-label-sm text-label-sm text-on-surface-variant font-mono">
          EPSG:3857 (WGS 84 / Pseudo-Mercator)
        </div>
</div>
</div>

<aside className="w-96 flex-shrink-0 z-20 flex flex-col bg-surface-container-low/95 backdrop-blur-xl h-full shadow-2xl transition-all duration-300" id="incident-inspector-pane">

<div className="px-space-md py-space-sm bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-error font-mono font-bold tracking-wider">CRITICAL INCIDENT</span>
<span className="h-1.5 w-1.5 rounded-full bg-error animate-ping"></span>
</div>
<div className="flex items-center gap-1">
<button className="p-1 text-on-surface-variant hover:text-on-surface rounded transition-colors" title="Export GeoJSON Record">
<span className="material-symbols-outlined text-[18px]">share</span>
</button>
<button className="p-1 text-on-surface-variant hover:text-on-surface rounded transition-colors" id="close-inspector" title="Minimize Drawer">
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-space-md py-space-md flex flex-col gap-space-md">

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant font-mono font-medium">#CIV-9021</span>
<span className="bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm px-2 py-0.5 rounded font-mono font-semibold">CONFIDENCE 98.6%</span>
</div>
<h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">Structural Pothole & Subsurface Cavity</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">St. Jude Medical Boulevard, Westbound Lane 2 (Chainage 14+280)</span>
</div>

<div className="bg-error-container/20 p-space-sm rounded flex items-start gap-space-sm">
<span className="material-symbols-outlined text-error text-[20px] mt-0.5">emergency</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-error font-semibold">Hospital Route Constraint</span>
<span className="font-body-sm text-body-sm text-on-surface leading-tight">Zero-tolerance for unscheduled blockage. Level 1 Emergency Corridor protocol in effect.</span>
</div>
</div>

<div className="relative w-full h-44 rounded overflow-hidden shadow-inner group">
<img alt="Automated CivicVision AI detection frame" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="High-resolution road surface camera frame showing a deep fractured asphalt pothole with visible concrete base layer degradation and yellow telemetry inference bounding box in dark moody twilight lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvXP7BjxxI6YxhzBnnmHAZKt-muqRLkWKBRVWriEA3OJEkfAYCDiQm5ftdtTaYRqWBzgw5afs9wnP_fLTv0tlCkoYjHlfIH5sCVoBx4ZREx61kGv0zrJfrg9yDZCj5Ya5am30tFkNmsflyO3yk-BeTpC_bfUvg8Lywc5Nzr9iXkRAdYKA8mhrV-nkX1u_UyMXhHqE_3XOP6IuAxfHhK01W-BcKBF1LQwvbTsSHTdvZOU7gPovW5f1b" />

<div className="absolute inset-x-8 inset-y-6 pointer-events-none">
<div className="w-full h-full relative">

<div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary"></div>
<div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary"></div>
<div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary"></div>
<div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary"></div>

<div className="absolute -top-3 left-1 bg-surface-container-lowest/90 px-1.5 py-0.5 rounded flex items-center gap-1 shadow">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span className="font-label-sm text-label-sm text-primary font-mono font-medium">CAVITY_DEPTH: 8.4cm</span>
</div>
</div>
</div>

<div className="absolute bottom-1 right-1 bg-surface-container-lowest/80 px-1.5 py-0.5 rounded font-label-sm text-label-sm text-on-surface-variant font-mono">
            CAM_UNIT_09 // 09:14:22 EST
          </div>
</div>

<div className="grid grid-cols-2 gap-space-sm">

<div className="bg-surface-container p-space-sm rounded flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Condition Index</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-headline-xl text-headline-xl font-bold text-error">42</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">/ 100</span>
</div>
<span className="font-label-sm text-label-sm text-error font-medium mt-1">CRITICAL DEGRADATION</span>
</div>

<div className="bg-surface-container p-space-sm rounded flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Roughness Index</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-headline-xl text-headline-xl font-bold text-secondary">3.8</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">m/km</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-medium mt-1">SEVERE ROUGHNESS</span>
</div>
</div>

<div className="bg-surface-container p-space-sm rounded flex flex-col gap-1.5">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Subsurface Sonar Profile</span>
<span className="font-label-sm text-label-sm text-on-surface font-mono">12.4 kHz Lidar</span>
</div>
<div className="w-full h-12 flex items-center">
<svg className="w-full h-10 overflow-visible" viewBox="0 0 200 40">
<path d="M 0 10 Q 30 12 50 11 T 90 28 T 120 38 T 150 14 T 200 12" fill="none" stroke="#ff7884" strokeLinecap="round" strokeWidth="2"></path>
<path d="M 0 10 Q 30 12 50 11 T 90 28 T 120 38 T 150 14 T 200 12 L 200 40 L 0 40 Z" fill="#ff7884" fillOpacity="0.1"></path>

<circle cx="120" cy="38" fill="#ff7884" r="3"></circle>
</svg>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant font-mono">
<span>Entry -2.0m</span>
<span className="text-error font-semibold">Apex Void (-8.4cm)</span>
<span>Exit +2.0m</span>
</div>
</div>

<div className="flex flex-col gap-1 bg-surface-container p-space-sm rounded font-body-sm text-body-sm">
<div className="flex justify-between py-0.5">
<span className="text-on-surface-variant">Estimated Void Volume</span>
<span className="text-on-surface font-mono font-medium">0.42 m³</span>
</div>
<div className="flex justify-between py-0.5">
<span className="text-on-surface-variant">Surface Moisture Saturation</span>
<span className="text-on-surface font-mono font-medium">78% (Recent Rain)</span>
</div>
<div className="flex justify-between py-0.5">
<span className="text-on-surface-variant">Last Human Validation</span>
<span className="text-primary font-mono font-medium">08:45 AM (Inspector 04)</span>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<button className="w-full bg-primary hover:brightness-105 active:scale-[0.99] text-on-primary font-body-md text-body-md font-semibold py-2.5 px-space-md rounded transition-all flex items-center justify-center gap-space-sm shadow-lg" id="dispatch-unit-btn">
<span className="material-symbols-outlined text-[18px]">send</span>
<span>Dispatch Unit Alpha (Priority)</span>
</button>
<div className="grid grid-cols-2 gap-space-xs">
<button className="w-full bg-surface-container-high hover:bg-surface-bright text-on-surface font-body-sm text-body-sm font-medium py-2 px-space-sm rounded transition-colors flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-primary">assignment_add</span>
<span>Generate Work Order</span>
</button>
<button className="w-full bg-surface-container-high hover:bg-surface-bright text-on-surface font-body-sm text-body-sm font-medium py-2 px-space-sm rounded transition-colors flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-secondary">streetview</span>
<span>Road Context</span>
</button>
</div>
</div>
</div>
</aside>
</div>

<footer className="h-10 bg-surface-container-lowest px-gutter-desktop flex items-center justify-between text-on-surface-variant z-30 shadow-2xl flex-shrink-0">

<div className="flex items-center gap-space-lg">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm font-mono">
<span className="material-symbols-outlined text-primary text-[14px]">my_location</span>
<span className="text-on-surface">CURSOR: 43.6532° N, 79.3832° W</span>
<span className="text-on-surface-variant/60">|</span>
<span>ALT: 76.4m</span>
</div>
<div className="hidden md:flex items-center gap-space-xs font-label-sm text-label-sm font-mono">
<span className="text-on-surface-variant">PROJECTION:</span>
<span className="text-on-surface font-medium">EPSG 3857</span>
</div>
</div>

<div className="flex items-center gap-space-lg">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm font-mono">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="text-on-surface">GIS SYNC: <span className="text-primary font-medium">12s AGO</span></span>
</div>
<div className="hidden sm:flex items-center gap-space-xs font-label-sm text-label-sm font-mono">
<span className="text-on-surface-variant">EDGE FASTAPI:</span>
<span className="text-primary font-semibold">CONNECTED (18ms)</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm font-mono bg-surface-container px-2 py-0.5 rounded text-on-surface">
<span className="material-symbols-outlined text-secondary text-[14px]">satellite_alt</span>
<span>SATS: 11/12</span>
</div>
</div>
</footer>
</div>
</>
  )
}
