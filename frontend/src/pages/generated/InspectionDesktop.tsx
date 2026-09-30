// Generated from Stitch: civicvision_ai_desktop_ai_inspection/code.html
export default function InspectionDesktop() {
  return (
    <><div className="flex flex-col w-full">
<div className="p-gutter-desktop flex flex-col gap-space-lg">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-md">
<span className="px-space-sm py-0.5 rounded bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Optical Feed Real-Time</span>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px] text-primary">satellite_alt</span>
<span>ZONE_04 // SECTOR_MARKET_STREET</span>
</div>
<span className="text-on-surface-variant/40">•</span>
<div className="flex items-center gap-space-xs text-on-surface font-label-md text-label-md">
<span className="text-on-surface-variant">INFERENCE ID:</span>
<span className="font-mono text-primary font-semibold">INF-8841-CV9</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant">INFERENCE TIME: <strong className="text-on-surface font-mono">14.2ms (YOLOv8x-Municipal)</strong></span>
<button className="flex items-center gap-space-xs bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-space-md py-1.5 rounded text-body-sm font-body-sm transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">history</span>
<span>Telemetry Audit</span>
</button>
</div>
</div>
<div className="grid grid-cols-12 gap-gutter-desktop items-start">
<div className="col-span-12 lg:col-span-7 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest rounded-xl p-space-md relative overflow-hidden shadow-xl">
<div className="flex items-center justify-between pb-space-sm mb-space-sm border-none">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs">
<span className="h-2.5 w-2.5 rounded-full bg-error animate-ping"></span>
<span className="font-label-md text-label-md text-on-surface font-semibold tracking-wide">CAM-04 NORTH [TELEMETRY ACTIVE]</span>
</div>
<span className="bg-surface-container-high px-space-xs py-0.5 rounded text-on-surface-variant font-label-sm text-label-sm">FOV: 84° ULTRA-HD</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="flex items-center gap-space-xs bg-surface-container hover:bg-surface-container-high text-primary px-space-sm py-1 rounded text-label-sm font-label-sm transition-all" id="toggleOverlaysBtn" data-onclick="toggleOverlays()" type="button">
<span className="material-symbols-outlined text-[16px]" id="overlayEyeIcon">visibility</span>
<span id="overlayBtnText">CV Layers: Active</span>
</button>
<div className="flex items-center bg-surface-container rounded p-0.5">
<button className="p-1 hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface rounded transition-colors" data-onclick="adjustZoom(0.1)" title="Zoom In" type="button">
<span className="material-symbols-outlined text-[16px]">zoom_in</span>
</button>
<button className="p-1 hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface rounded transition-colors" data-onclick="adjustZoom(-0.1)" title="Zoom Out" type="button">
<span className="material-symbols-outlined text-[16px]">zoom_out</span>
</button>
<button className="p-1 hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface rounded transition-colors" data-onclick="resetZoom()" title="Reset Transform" type="button">
<span className="material-symbols-outlined text-[16px]">restart_alt</span>
</button>
</div>
</div>
</div>
<div className="relative w-full aspect-[16/10] bg-surface-dim rounded-lg overflow-hidden group select-none cursor-crosshair" id="viewportContainer">
<img className="w-full h-full object-cover transition-transform duration-200 origin-center" data-alt="High-resolution street-level asphalt pavement perspective showing a dangerous jagged pothole with exposed dark crushed gravel aggregate surrounded by longitudinal fatigue cracking on a rainy municipal avenue. Ambient dusk lighting with wet asphalt reflections and sharp contrast." id="inspectionImage" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoModFLzRSJkWqVTG3yj0xsF5vs7HK0k6i39CiUl0QYvz6njql_HtLS6hn1KDtpq_BdshavXNUSHNy6s34wFn195ZUvZFQDJSxcvTF6OS7r3FN27spqz-Dr9n2OgLl6p1UrJQGTKiWKQ2RPueull6C598uGafRccUNDpyg3T1vUKBrEaNVVU6t8UdQPPd85FbzO6g_l0yi3aHwedzaoHew6MaxEatxHbrEKZtv3-e_e9Cxj6yZ2qNc" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute inset-0 transition-opacity duration-200" id="cvOverlaysContainer">
<div className="absolute top-[28%] left-[22%] w-[42%] h-[48%] pointer-events-auto cursor-pointer" data-onclick="selectAnomaly('pothole')">
<div className="w-full h-full border-[1.5px] border-error bg-error/10 relative">
<div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-error"></div>
<div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-error"></div>
<div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-error"></div>
<div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-error"></div>
<div className="absolute -top-6 left-0 bg-error text-on-error px-1.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-tight flex items-center gap-1 shadow-md">
<span>SEVERE_POTHOLE #01</span>
<span className="bg-surface-container-lowest/40 px-1 py-0.2 rounded text-[9px]">94.2% CONF</span>
</div>
<div className="absolute bottom-1 right-1 text-right font-mono text-[9px] text-error bg-surface-container-lowest/80 px-1 rounded">
                    [x: 412, y: 310, w: 680, h: 440]
                  </div>
</div>
</div>
<div className="absolute top-[18%] left-[64%] w-[26%] h-[34%] pointer-events-auto cursor-pointer" data-onclick="selectAnomaly('crack')">
<div className="w-full h-full border-[1.5px] border-secondary bg-secondary/10 relative">
<div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-secondary"></div>
<div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-secondary"></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-secondary"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-secondary"></div>
<div className="absolute -top-6 left-0 bg-secondary text-on-secondary px-1.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-tight flex items-center gap-1 shadow-md">
<span>LONGITUDINAL_CRACK #04</span>
<span className="bg-surface-container-lowest/40 px-1 py-0.2 rounded text-[9px]">87.5% CONF</span>
</div>
<div className="absolute bottom-1 right-1 text-right font-mono text-[9px] text-secondary bg-surface-container-lowest/80 px-1 rounded">
                    [x: 1040, y: 198, w: 320, h: 290]
                  </div>
</div>
</div>
<div className="absolute top-3 left-3 flex flex-col gap-1 pointer-events-none">
<span className="bg-surface-container-lowest/90 backdrop-blur-md px-2 py-0.5 rounded font-label-sm text-label-sm text-primary font-mono tracking-wider">LIDAR DEPTH MAP ATTACHED</span>
<span className="bg-surface-container-lowest/90 backdrop-blur-md px-2 py-0.5 rounded font-label-sm text-label-sm text-on-surface-variant font-mono">SAM-SEGMENTATION: ACTIVE</span>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-on-surface font-mono text-label-sm pointer-events-none">
<div className="flex items-center gap-space-sm bg-surface-container-lowest/90 backdrop-blur-md px-space-sm py-1 rounded">
<span className="text-on-surface-variant">COORDINATES:</span>
<span className="text-on-surface">37.7749° N, -122.4194° W</span>
<span className="text-outline-variant">|</span>
<span className="text-on-surface-variant">ALTITUDE:</span>
<span className="text-on-surface">14.2m</span>
</div>
<div className="bg-surface-container-lowest/90 backdrop-blur-md px-space-sm py-1 rounded text-primary">
                STREAM BITRATE: 18.4 Mbps
              </div>
</div>
</div>
<div className="mt-space-md p-space-md rounded-lg bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="h-10 w-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">cloud_upload</span>
</div>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md text-on-surface">Batch Dashcam Frame Dropzone</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Drop MP4 dashcam snippets or 4K geotagged JPEGs to execute instant re-inference</span>
</div>
</div>
<label className="cursor-pointer shrink-0 bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-space-md py-space-sm rounded font-label-md text-label-md tracking-wider uppercase transition-colors">
              Browse Source
              <input accept="image/*,video/*" className="hidden" data-onchange="handleFileSelect(event)" type="file" />
</label>
</div>
</div>
<div className="grid grid-cols-3 gap-space-md">
<div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col gap-1 shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant">AI ENGINE BACKEND</span>
<span className="font-headline-md text-headline-md text-on-surface font-mono">TensorRT 8.6</span>
<span className="font-label-sm text-label-sm text-primary flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">check_circle</span> GPU Accelerated
            </span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col gap-1 shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant">DETECTION RECALL</span>
<span className="font-headline-md text-headline-md text-on-surface font-mono">98.1%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Class: Pothole-Major</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col gap-1 shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant">SURFACE FRICTION INDEX</span>
<span className="font-headline-md text-headline-md text-secondary font-mono">0.31 (WET)</span>
<span className="font-label-sm text-label-sm text-error">Skid Hazard Elevation</span>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-5 flex flex-col gap-space-md">
<div className="bg-surface-container-low p-space-md rounded-xl relative overflow-hidden shadow-lg">
<div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-primary/5 blur-2xl pointer-events-none"></div>
<div className="flex items-center justify-between pb-space-xs border-none">
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Dual-Engine Intelligence Paradigm</span>
<span className="px-space-xs py-0.5 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm font-mono font-semibold">SYNCHRONIZED</span>
</div>
<div className="grid grid-cols-2 gap-space-sm mt-space-xs">
<div className="bg-surface-container-lowest p-space-sm rounded">
<div className="flex items-center gap-1 text-primary font-label-md text-label-md mb-1 font-semibold">
<span className="material-symbols-outlined text-[16px]">center_focus_strong</span>
<span>YOLO Detection</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                "What is visible?" Extracts dimensional voids, asphalt crack patterns, and physical degradation metrics.
              </p>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded">
<div className="flex items-center gap-1 text-secondary font-label-md text-label-md mb-1 font-semibold">
<span className="material-symbols-outlined text-[16px]">balance</span>
<span>Priority Engine</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                "How urgently to act?" Correlates road classification, speed limits, pedestrian density, and monsoon risk.
              </p>
</div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-xl flex flex-col gap-space-md shadow-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">view_in_ar</span>
<span className="font-headline-md text-headline-md text-on-surface font-semibold">Target Anomaly Telemetry</span>
</div>
<span className="bg-error/15 text-error px-space-xs py-0.5 rounded font-label-sm text-label-sm font-mono font-bold tracking-wider">SEV-01 CRITICAL</span>
</div>
<div className="grid grid-cols-3 gap-space-sm">
<div className="bg-surface-container-high p-space-sm rounded flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">VOID DEPTH</span>
<span className="font-headline-md text-headline-md text-on-surface font-mono font-bold">~8.5 cm</span>
<span className="font-label-sm text-label-sm text-error mt-0.5">Critical Sub-base</span>
</div>
<div className="bg-surface-container-high p-space-sm rounded flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">EST. VOID AREA</span>
<span className="font-headline-md text-headline-md text-on-surface font-mono font-bold">1.4 m²</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Continuous growth</span>
</div>
<div className="bg-surface-container-high p-space-sm rounded flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">AGGREGATE EXPOSURE</span>
<span className="font-headline-md text-headline-md text-error font-mono font-bold">Level 4</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Crushed Granular</span>
</div>
</div>
<div className="flex flex-col gap-space-xs bg-surface-container-low p-space-sm rounded">
<div className="flex justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Asphalt Delamination Rate:</span>
<span className="font-mono text-on-surface font-semibold">+0.15 m²/week (Simulated)</span>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-error h-full w-[82%]"></div>
</div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-xl flex flex-col gap-space-md shadow-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">crisis_alert</span>
<span className="font-headline-md text-headline-md text-on-surface font-semibold">Contextual Risk Modifiers</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">SURROUNDING RISK VECTOR</span>
</div>
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded hover:bg-surface-container transition-colors">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">traffic</span>
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-semibold">Heavy Traffic Arterial Corridor</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Market St. Transit Backbone (28,500 ADT)</span>
</div>
</div>
<span className="font-mono text-label-lg font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded">+28 pts</span>
</div>
<div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded hover:bg-surface-container transition-colors">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-error text-[18px]">school</span>
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-semibold">School Zone Proximity (120m)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Lincoln Elementary - High Pedestrian Drop-off</span>
</div>
</div>
<span className="font-mono text-label-lg font-bold text-error bg-error/10 px-2 py-0.5 rounded">+35 pts</span>
</div>
<div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded hover:bg-surface-container transition-colors">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[18px]">rainy</span>
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-semibold">Monsoon Drainage Channel Risk</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Curbside hydraulic depression: high pooling likelihood</span>
</div>
</div>
<span className="font-mono text-label-lg font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">+14 pts</span>
</div>
</div>
</div>
<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-md shadow-lg relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-headline-md text-headline-md text-on-surface font-semibold">AI Calculated Urgency Matrix</span>
<span className="px-space-sm py-0.5 bg-error text-on-error font-label-sm text-label-sm font-bold uppercase rounded tracking-wider animate-pulse">Critical Priority</span>
</div>
<div className="flex items-center gap-space-lg">
<div className="relative w-28 h-28 flex items-center justify-center shrink-0">
<svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
<circle className="text-surface-container-highest" cx="50" cy="50" fill="none" r="42" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-error stroke-current" cx="50" cy="50" fill="none" r="42" stroke="currentColor" strokeDasharray="264" strokeDashoffset="21" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute flex flex-col items-center justify-center">
<span className="font-headline-xl text-headline-xl font-mono text-on-surface font-extrabold leading-none">92</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">/ 100</span>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-error text-[18px]">timer</span>
<span className="font-body-md text-body-md font-semibold text-on-surface">Mandated SLA Window: &lt;12 Hours</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Statutory urban safety compliance requires barricading or tactical cold-mix stabilization prior to next commute peak cycle.
              </p>
<span className="font-label-sm text-label-sm text-secondary font-mono mt-1">INCIDENT ESCALATION STATUS: AUTO-QUEUED</span>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col gap-1">
<div className="flex items-center gap-space-xs text-primary font-label-md text-label-md font-semibold">
<span className="material-symbols-outlined text-[16px]">assignment_turned_in</span>
<span>Prescriptive AI Mitigation Path</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">
              Immediate cold-mix patching and hazard barricade within 12h. Scheduled for Ward 4 deep re-milling & hot bitumen cyclic resurfacing within 14 calendar days.
            </p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-space-sm pt-space-xs">
<button className="w-full sm:flex-1 bg-primary text-on-primary font-body-md font-bold py-3 px-space-md rounded hover:brightness-110 flex items-center justify-center gap-space-xs transition-all shadow-md" data-onclick="dispatchOrder()" type="button">
<span className="material-symbols-outlined text-[20px]">send_and_archive</span>
<span>Dispatch Work Order</span>
</button>
<button className="w-full sm:w-auto bg-surface-container hover:bg-surface-container-high text-on-surface font-body-md py-3 px-space-md rounded flex items-center justify-center gap-space-xs transition-colors" data-onclick="exportGeoJSON()" type="button">
<span className="material-symbols-outlined text-[20px]">file_download</span>
<span>GeoJSON</span>
</button>
<button className="w-full sm:w-auto bg-surface-container hover:bg-surface-container-high text-on-surface font-body-md py-3 px-space-md rounded flex items-center justify-center gap-space-xs transition-colors" data-onclick="reinspectAsset()" type="button">
<span className="material-symbols-outlined text-[20px]">refresh</span>
<span>Re-Inspect</span>
</button>
</div>
</div>
</div>
</div>
</div>
</>
  )
}
