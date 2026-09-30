// Generated from Stitch: civicvision_ai_geographic_map/code.html
export default function MapMobile() {
  return (
    <><header className="fixed top-0 w-full z-50 pt-safe bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.35)]"><div className="h-16 px-gutter flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0"><img alt="CivicVision AI Logo" className="h-8 w-auto object-contain flex-shrink-0" src="https://lh3.googleusercontent.com/aida/AEtjO1UqSI9c3uHM06CCSNR-x3WSxXgriU-pnA77KUXG3NoLnAJOP7vf1OmHVqX_iifygrpfwUa202Hsj7mVRr1s1-jzB_fmjPjN5YTVU_TXiTLcgS-vmHDRwKqkQaRln2MfiX1f1dY7EYN4daguv8P5MRYc2xGxY-RKrVr-46sE9OhDCBSlsN_LxCl9fBjSfhdIV_A97BR_wtbCxmv28qtx7FGS9lnXhGNp_-qsGom0ca5LePHmnaCAJwfMmrg" /><div className="flex flex-col min-w-0"><div className="flex items-center gap-space-xs"><span className="text-headline-md font-headline-md text-on-surface tracking-tight truncate leading-none">CivicVision</span><span className="px-space-xs py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">AI</span></div><span className="text-label-sm font-label-sm text-on-surface-variant truncate mt-0.5 leading-none">Geographic</span></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><div className="hidden sm:flex items-center gap-space-xs px-space-xs py-1 rounded bg-surface-container-low"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span><span className="text-label-sm font-label-sm text-primary uppercase">LIVE</span></div><button aria-label="Notifications" className="w-11 h-11 flex items-center justify-center rounded-lg bg-surface-container text-on-surface-variant hover:text-primary transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full relative select-none">

<div className="sticky top-0 z-30 flex flex-col gap-space-xs p-margin bg-gradient-to-b from-surface via-surface/90 to-transparent backdrop-blur-md">

<div className="flex items-center justify-between gap-space-sm bg-surface-container/95 p-space-xs rounded-xl shadow-lg">
<div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 px-1 min-w-0">
<button className="layer-pill active flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm whitespace-nowrap transition-all shadow-sm" id="toggle-heatmap">
<span className="material-symbols-outlined text-[14px]">local_fire_department</span>
<span>Heatmap</span>
</button>
<button className="layer-pill active flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap hover:text-on-surface transition-all" id="toggle-critical">
<span className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></span>
<span>Critical (12)</span>
</button>
<button className="layer-pill active flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap hover:text-on-surface transition-all" id="toggle-route">
<span className="material-symbols-outlined text-[14px]">alt_route</span>
<span>Patrol Trail</span>
</button>
<button className="layer-pill flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap hover:text-on-surface transition-all" id="toggle-crews">
<span className="material-symbols-outlined text-[14px]">engineering</span>
<span>Crews (4)</span>
</button>
</div>
<div className="flex-shrink-0 flex items-center pl-1">
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-primary font-label-sm text-label-sm uppercase">GIS v4.2</span>
</div>
</div>

<div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-0.5">
<button className="filter-chip px-2.5 py-1 rounded-full bg-primary/20 text-primary font-label-sm text-label-sm flex items-center gap-1 whitespace-nowrap font-semibold">
<span>All</span>
<span className="px-1 py-0.2 bg-primary/30 rounded text-[9px]">156</span>
</button>
<button className="filter-chip px-2.5 py-1 rounded-full bg-surface-container-high text-error font-label-sm text-label-sm flex items-center gap-1 whitespace-nowrap">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
<span>Critical</span>
<span className="text-on-surface-variant font-normal">38</span>
</button>
<button className="filter-chip px-2.5 py-1 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm flex items-center gap-1 whitespace-nowrap">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>High</span>
<span className="text-on-surface-variant font-normal">42</span>
</button>
<button className="filter-chip px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1 whitespace-nowrap">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span>WIP</span>
<span className="text-on-surface-variant font-normal">19</span>
</button>
<div className="ml-auto flex items-center gap-1 text-on-surface-variant/80 font-label-sm text-[10px] uppercase tracking-wider pl-2 whitespace-nowrap">
<span className="material-symbols-outlined text-[12px] text-primary">satellite_alt</span>
<span>Metropolitan Grid</span>
</div>
</div>
</div>

<div className="relative w-full h-[580px] bg-surface-container-lowest overflow-hidden" id="map-viewport">

<svg className="w-full h-full object-cover scale-105 transition-transform duration-500 ease-out" fill="none" id="city-vector-canvas" viewBox="0 0 400 620" xmlns="http://www.w3.org/2000/svg">
<defs>

<radialGradient cx="0" cy="0" gradientTransform="translate(180 260) rotate(90) scale(110 130)" gradientUnits="userSpaceOnUse" id="heat-core-1" r="1">
<stop offset="0%" stopColor="#ffb4ab" stopOpacity="0.45"></stop>
<stop offset="45%" stopColor="#ee9800" stopOpacity="0.25"></stop>
<stop offset="75%" stopColor="#4edea3" stopOpacity="0.1"></stop>
<stop offset="100%" stopColor="#0b1326" stopOpacity="0"></stop>
</radialGradient>
<radialGradient cx="0" cy="0" gradientTransform="translate(290 140) rotate(90) scale(80 90)" gradientUnits="userSpaceOnUse" id="heat-core-2" r="1">
<stop offset="0%" stopColor="#ee9800" stopOpacity="0.4"></stop>
<stop offset="60%" stopColor="#4edea3" stopOpacity="0.1"></stop>
<stop offset="100%" stopColor="#0b1326" stopOpacity="0"></stop>
</radialGradient>
<pattern height="20" id="urban-mesh" patternUnits="userSpaceOnUse" width="20">
<path d="M 20 0 L 0 0 0 20" fill="none" stroke="#222a3d" strokeOpacity="0.4" strokeWidth="0.5"></path>
</pattern>
<linearGradient gradientUnits="userSpaceOnUse" id="route-gradient" x1="50" x2="320" y1="520" y2="120">
<stop offset="0%" stopColor="#4edea3"></stop>
<stop offset="50%" stopColor="#6ffbbe"></stop>
<stop offset="100%" stopColor="#10b981"></stop>
</linearGradient>
</defs>

<rect fill="#0b1326" height="620" width="400"></rect>
<rect fill="url(#urban-mesh)" height="620" width="400"></rect>

<path d="M-10 180 C 70 200, 110 240, 150 330 C 180 390, 250 430, 410 450" fill="none" stroke="#131b2e" strokeLinecap="round" strokeWidth="32"></path>
<path d="M-10 180 C 70 200, 110 240, 150 330 C 180 390, 250 430, 410 450" fill="none" stroke="#171f33" strokeLinecap="round" strokeWidth="18"></path>


<path d="M10 30 L160 20 L150 170 L20 180 Z" fill="#171f33" fillOpacity="0.6"></path>

<path d="M170 30 L390 10 L380 280 L180 240 Z" fill="#222a3d" fillOpacity="0.35"></path>

<path d="M160 260 L380 300 L360 560 L140 460 Z" fill="#171f33" fillOpacity="0.5"></path>

<g opacity="0.85" stroke="#2d3449" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6">

<path d="M20 90 Q 180 120 380 70"></path>
<path d="M180 30 L 190 320 L 180 600"></path>
<path d="M40 240 L 370 250"></path>
<path d="M30 410 L 380 430"></path>
<path d="M300 20 L 310 590"></path>
<path d="M70 20 L 80 580"></path>
</g>

<g stroke="#1a233a" strokeLinecap="round" strokeWidth="2">
<path d="M20 140 H380 M20 190 H380 M20 290 H380 M20 350 H380 M20 480 H380 M20 540 H380"></path>
<path d="M120 20 V600 M240 20 V600 M350 20 V600 M40 20 V600"></path>
</g>

<g className="transition-opacity duration-300" id="heatmap-layer">
<circle cx="180" cy="260" fill="url(#heat-core-1)" r="130"></circle>
<circle cx="290" cy="140" fill="url(#heat-core-2)" r="90"></circle>
</g>

<text fill="#86948a" fontFamily="JetBrains Mono" fontSize="10" letter-spacing="1" x="35" y="55">WARD 04 // NORTH HARBOR</text>
<text fill="#86948a" fontFamily="JetBrains Mono" fontSize="10" letter-spacing="1" x="210" y="45">WARD 07 // MED CORRIDOR</text>
<text fill="#86948a" fontFamily="JetBrains Mono" fontSize="10" letter-spacing="1" x="210" y="380">CENTRAL BUSINESS DIST</text>

<g id="patrol-route-layer">
<path className="animate-pulse" d="M 80 540 L 80 410 L 190 410 L 190 260 L 300 260 L 300 90 L 370 90" fill="none" stroke="url(#route-gradient)" strokeDasharray="6 4" strokeLinecap="round" strokeWidth="3"></path>

<g transform="translate(190, 310)">
<circle className="animate-ping" fill="#4edea3" fillOpacity="0.2" r="14"></circle>
<circle fill="#10b981" r="7"></circle>
<circle fill="#003824" r="3"></circle>
</g>
</g>
</svg>

<div className="absolute inset-0 pointer-events-none" id="pins-container">

<div className="pin-marker pointer-events-auto absolute top-[252px] left-[182px] -translate-x-1/2 -translate-y-full cursor-pointer group" id="pin-civ-9021">
<div className="relative flex flex-col items-center">

<span className="absolute -bottom-1 w-7 h-7 rounded-full bg-error/40 animate-ping"></span>
<span className="absolute -bottom-1 w-4 h-4 rounded-full bg-error/70"></span>

<div className="flex items-center gap-1 bg-surface-container-lowest px-1.5 py-0.5 rounded shadow-lg text-[9px] font-label-sm text-error whitespace-nowrap mb-1">
<span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
<span>CIV-9021 • 94%</span>
</div>

<div className="w-8 h-8 rounded-full bg-error text-on-error flex items-center justify-center shadow-md shadow-error/30 transform group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[18px]">warning</span>
</div>

<div className="w-1 h-2 bg-error"></div>
</div>
</div>

<div className="pin-marker pointer-events-auto absolute top-[138px] left-[288px] -translate-x-1/2 -translate-y-full cursor-pointer group">
<div className="relative flex flex-col items-center">
<span className="absolute -bottom-1 w-4 h-4 rounded-full bg-secondary/30"></span>
<div className="flex items-center gap-1 bg-surface-container-lowest px-1.5 py-0.5 rounded shadow text-[9px] font-label-sm text-secondary whitespace-nowrap mb-1">
<span>CIV-8834</span>
</div>
<div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[15px]">report_problem</span>
</div>
<div className="w-1 h-1.5 bg-secondary"></div>
</div>
</div>

<div className="pin-marker pointer-events-auto absolute top-[85px] left-[85px] -translate-x-1/2 -translate-y-full cursor-pointer group">
<div className="relative flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shadow-sm transform group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[14px]">remove_road</span>
</div>
<div className="w-0.5 h-1.5 bg-secondary-fixed"></div>
</div>
</div>

<div className="pin-marker pointer-events-auto absolute top-[410px] left-[260px] -translate-x-1/2 -translate-y-full cursor-pointer group">
<div className="relative flex flex-col items-center">
<div className="flex items-center gap-1 bg-surface-container-high px-1.5 py-0.5 rounded shadow text-[9px] font-label-sm text-primary whitespace-nowrap mb-1">
<span className="material-symbols-outlined text-[10px]">engineering</span>
<span>CREW #02 (En Route)</span>
</div>
<div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-[15px]">build</span>
</div>
<div className="w-0.5 h-1 bg-primary"></div>
</div>
</div>

<div className="pin-marker pointer-events-auto absolute top-[470px] left-[135px] -translate-x-1/2 -translate-y-full cursor-pointer group opacity-80">
<div className="relative flex flex-col items-center">
<div className="w-5 h-5 rounded-full bg-surface-container-highest text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[12px]">check_circle</span>
</div>
</div>
</div>
</div>

<div className="absolute right-3 top-4 flex flex-col gap-2 z-20">

<button className="w-9 h-9 rounded-lg bg-surface-container-high/90 backdrop-blur text-on-surface flex items-center justify-center shadow-md hover:bg-surface-bright transition-colors" id="compass-btn" title="Orient North">
<span className="material-symbols-outlined text-[18px] text-error transform rotate-45">navigation</span>
</button>

<button className="w-9 h-9 rounded-lg bg-surface-container-high/90 backdrop-blur text-on-surface flex items-center justify-center shadow-md hover:bg-surface-bright transition-colors active:scale-95" id="zoom-in">
<span className="material-symbols-outlined text-[18px]">add</span>
</button>

<button className="w-9 h-9 rounded-lg bg-surface-container-high/90 backdrop-blur text-on-surface flex items-center justify-center shadow-md hover:bg-surface-bright transition-colors active:scale-95" id="zoom-out">
<span className="material-symbols-outlined text-[18px]">remove</span>
</button>

<button className="w-9 h-9 rounded-lg bg-primary text-on-primary flex items-center justify-center shadow-md shadow-primary/20 hover:brightness-110 transition-all active:scale-95" id="recenter-btn" title="Center Autonomous Van">
<span className="material-symbols-outlined text-[18px]">my_location</span>
</button>
</div>

<div className="absolute right-2 bottom-3 z-10">
<div className="px-2 py-1 rounded bg-surface-container-lowest/80 backdrop-blur text-[9px] font-label-sm text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-[11px] text-primary">layers</span>
<span>Leaflet/OSM Mock Layer • Fictional Demo Coordinates</span>
</div>
</div>
</div>

<div className="relative z-30 -mt-3 bg-surface-container-low rounded-t-xl shadow-[0_-8px_24px_rgba(0,0,0,0.6)] px-margin pt-space-sm pb-space-lg flex flex-col gap-space-sm transition-all duration-300" id="incident-drawer">

<div className="w-full flex justify-center py-1 cursor-pointer" id="drawer-toggle">
<div className="w-10 h-1 bg-surface-container-highest rounded-full"></div>
</div>

<div className="flex items-start justify-between gap-space-sm">
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded bg-error/20 text-error font-label-sm text-label-sm font-semibold tracking-wider flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></span>
            CRITICAL SEV-4
          </span>
<span className="font-label-sm text-label-sm text-outline">#CIV-9021</span>
<span className="text-on-surface-variant font-label-sm text-[10px]">Triage 3m ago</span>
</div>
<h2 className="text-headline-md font-headline-md text-on-surface mt-1 truncate">
          Structural Pothole & Subsurface Gap
        </h2>
</div>

<div className="flex flex-col items-end flex-shrink-0 bg-surface-container-high px-2.5 py-1 rounded">
<span className="text-label-sm font-label-sm text-outline uppercase">AI Risk</span>
<span className="font-label-lg text-headline-md text-error leading-none font-bold">94<span className="text-xs text-outline">/100</span></span>
</div>
</div>

<div className="grid grid-cols-3 gap-2 bg-surface-container p-2.5 rounded-lg">
<div className="flex flex-col min-w-0">
<span className="text-label-sm font-label-sm text-outline">Corridor</span>
<span className="font-body-md text-on-surface font-medium truncate mt-0.5">North Ring Rd</span>
<span className="text-[10px] text-on-surface-variant">Ward 07 Med Zone</span>
</div>
<div className="flex flex-col min-w-0">
<span className="text-label-sm font-label-sm text-outline">Traffic Load</span>
<span className="font-body-md text-secondary font-medium mt-0.5">High • 84%</span>
<span className="text-[10px] text-on-surface-variant">Limit 60 km/h</span>
</div>
<div className="flex flex-col min-w-0">
<span className="text-label-sm font-label-sm text-outline">Zone Constraint</span>
<span className="font-body-md text-tertiary-fixed font-medium mt-0.5 flex items-center gap-0.5">
<span className="material-symbols-outlined text-[13px]">emergency</span>
          Hospital
        </span>
<span className="text-[10px] text-outline">Priority Route</span>
</div>
</div>

<div className="flex items-center gap-space-sm bg-surface-container-high p-2 rounded-lg">
<div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0 bg-surface-container-lowest">
<img className="w-full h-full object-cover" data-alt="High angle close-up autonomous camera inspection photo of a deep asphalt pothole crack on a dark wet urban roadway at dusk, illuminated by vehicle LED headlights, with technical data overlay indicators." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRBseKIan_wYUxchPbE0qb8x4EVyf43xwF3TVmJZMhjsN91ZrUh9yme9APpTEwATnbyqwj8z4bGb0eoqF8MdUVvQqvWgKJJr-T1KufkVYPFxMfJJghrBI-jSDeTc9FbjDEqeJe4NmBVkcbQTXngP2r-85wib9T5KA_HkL4YU8JZv0uYuBYrMp5O_D0Qx5w6e73PYg9btmA7KwXXS7zKBH0wi2BTc7w7k1mrT2aZ0Q5dDwV5e4jmpq6" />

<div className="absolute inset-1.5 border border-primary/90 rounded-sm pointer-events-none flex items-start justify-end p-0.5">
<span className="bg-surface-container-lowest/90 text-primary font-label-sm text-[8px] px-0.5 rounded leading-none">94%</span>
</div>
</div>
<div className="flex flex-col justify-center min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary uppercase flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">smart_toy</span>
            YOLOv9-CIVIC INFERENCE
          </span>
<span className="text-[10px] font-label-sm text-outline">Cam_03_L</span>
</div>
<p className="font-body-sm text-on-surface-variant text-[11px] truncate mt-0.5">
          Class: ASPHALT_VOID_L3 • Area ~0.42m² • Depth ~8.5cm
        </p>
<span className="text-label-sm text-outline text-[10px]">Lat: 42.3601° N • Long: -71.0589° W</span>
</div>
</div>

<div className="grid grid-cols-2 gap-2 mt-0.5">
<button className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-bright transition-colors active:scale-95" id="inspect-media-btn">
<span className="material-symbols-outlined text-[16px] text-primary">visibility</span>
<span>View Inferences</span>
</button>
<button className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded bg-primary text-on-primary font-label-md text-label-md font-semibold hover:brightness-105 transition-all shadow-md active:scale-95" id="dispatch-crew-btn">
<span className="material-symbols-outlined text-[16px]">local_shipping</span>
<span>Dispatch Crew</span>
</button>
</div>
</div>
</div>
</main><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.4)]" data-active-classes="text-primary bg-surface-container-high/60"><div className="flex items-stretch justify-around h-16 px-space-xs"><a className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="overview" href="#"><span className="material-symbols-outlined text-[22px]">dashboard</span><span className="text-label-sm font-label-sm mt-0.5">Overview</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="ai-inspection" href="#"><span className="material-symbols-outlined text-[22px]">document_scanner</span><span className="text-label-sm font-label-sm mt-0.5">Inspect</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="civic-issues-queue" href="#"><span className="material-symbols-outlined text-[22px]">emergency_home</span><span className="text-label-sm font-label-sm mt-0.5">Issues</span></a><a aria-current="page" className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded transition-colors text-primary bg-surface-container-high/60" data-path="geographic" href="#"><span className="material-symbols-outlined text-[22px]">map</span><span className="text-label-sm font-label-sm mt-0.5">Map</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="analytics-maintenance" href="#"><span className="material-symbols-outlined text-[22px]">analytics</span><span className="text-label-sm font-label-sm mt-0.5">Analytics</span></a></div></nav></>
  )
}
