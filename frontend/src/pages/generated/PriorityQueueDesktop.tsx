// Generated from Stitch: civicvision_ai_desktop_priority_queue/code.html
export default function PriorityQueueDesktop() {
  return (
    <><div className="flex flex-col w-full">
<div className="p-gutter-desktop flex flex-col gap-space-lg">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<span>Operational Operations</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-semibold">Triage & Priority Queue</span>
</div>
<div className="flex items-center gap-space-md mt-1">
<h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">Active Infrastructure Triage</h1>
<span className="bg-surface-container-highest text-primary font-label-md text-label-md px-space-sm py-0.5 rounded-full flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping"></span>
            Live Telemetry Active
          </span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<button className="bg-surface-container-high hover:bg-surface-bright text-on-surface px-space-md py-space-sm rounded font-body-md text-body-md flex items-center gap-space-xs transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
<span>Export CSV / GIS</span>
</button>
<button className="bg-surface-container-high hover:bg-surface-bright text-on-surface px-space-md py-space-sm rounded font-body-md text-body-md flex items-center gap-space-xs transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">sync</span>
<span>Refresh Feed</span>
</button>
<button className="bg-primary hover:bg-primary-fixed text-on-primary font-headline-md text-label-lg px-space-lg py-space-sm rounded flex items-center gap-space-xs shadow-md transition-colors font-semibold" type="button">
<span className="material-symbols-outlined text-[18px]">smart_toy</span>
<span>Auto-Assign Crews</span>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
<div className="bg-surface-container p-space-md rounded flex items-center justify-between shadow-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Critical Unassigned</span>
<span className="font-headline-xl text-headline-xl text-error font-bold mt-1">07</span>
<span className="font-label-sm text-label-sm text-error/80 mt-0.5">Immediate Road Hazard</span>
</div>
<div className="h-10 w-10 rounded bg-error-container/40 flex items-center justify-center text-error">
<span className="material-symbols-outlined">warning</span>
</div>
</div>
<div className="bg-surface-container p-space-md rounded flex items-center justify-between shadow-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Hospital Arterials</span>
<span className="font-headline-xl text-headline-xl text-secondary font-bold mt-1">04</span>
<span className="font-label-sm text-label-sm text-secondary/80 mt-0.5">High Sensitivity Corridors</span>
</div>
<div className="h-10 w-10 rounded bg-secondary-container/20 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">emergency</span>
</div>
</div>
<div className="bg-surface-container p-space-md rounded flex items-center justify-between shadow-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Total In Queue</span>
<span className="font-headline-xl text-headline-xl text-on-surface font-bold mt-1">42</span>
<span className="font-label-sm text-label-sm text-primary mt-0.5">18 Dispatched Today</span>
</div>
<div className="h-10 w-10 rounded bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined">alt_route</span>
</div>
</div>
<div className="bg-surface-container p-space-md rounded flex items-center justify-between shadow-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Mean AI Confidence</span>
<span className="font-headline-xl text-headline-xl text-primary font-bold mt-1">96.4%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">YOLOv8-Civic Ensemble</span>
</div>
<div className="h-10 w-10 rounded bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">analytics</span>
</div>
</div>
</div>
<div className="bg-surface-container-low p-space-md rounded flex flex-col gap-space-md shadow-sm">
<div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-space-md">
<div className="relative flex-1">
<span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
<input className="w-full bg-surface-container-lowest text-on-surface font-body-sm text-body-sm pl-9 pr-space-md py-space-sm rounded border-none focus:outline-none focus:ring-1 focus:ring-primary placeholder-on-surface-variant/60" placeholder="Search by Incident Key (e.g. #CIV-9021), Street Name, or Tag..." type="text" />
</div>
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase mr-1">Severity:</span>
<button className="bg-primary text-on-primary font-label-sm text-label-sm px-space-sm py-1 rounded font-semibold shadow-sm" type="button">All 42</button>
<button className="bg-surface-container-high hover:bg-surface-bright text-error font-label-sm text-label-sm px-space-sm py-1 rounded flex items-center gap-1 transition-colors" type="button">
<span className="h-1.5 w-1.5 rounded-full bg-error"></span>Critical 7
          </button>
<button className="bg-surface-container-high hover:bg-surface-bright text-secondary font-label-sm text-label-sm px-space-sm py-1 rounded flex items-center gap-1 transition-colors" type="button">
<span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>High 12
          </button>
<button className="bg-surface-container-high hover:bg-surface-bright text-on-surface-variant font-label-sm text-label-sm px-space-sm py-1 rounded transition-colors" type="button">Medium 15</button>
<button className="bg-surface-container-high hover:bg-surface-bright text-on-surface-variant font-label-sm text-label-sm px-space-sm py-1 rounded transition-colors" type="button">Low 8</button>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase mr-1">Category:</span>
<span className="bg-surface-container px-space-sm py-1 rounded text-on-surface font-label-sm text-label-sm">All Types</span>
<span className="bg-surface-container-highest px-space-sm py-1 rounded text-primary font-label-sm text-label-sm font-semibold">Potholes (19)</span>
<span className="bg-surface-container px-space-sm py-1 rounded text-on-surface-variant font-label-sm text-label-sm">Drainage (8)</span>
<span className="bg-surface-container px-space-sm py-1 rounded text-on-surface-variant font-label-sm text-label-sm">Surface Cracking (11)</span>
<span className="bg-surface-container px-space-sm py-1 rounded text-on-surface-variant font-label-sm text-label-sm">Debris & Spill (4)</span>
</div>
<div className="flex items-center gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Ward:</span>
<select className="bg-surface-container-lowest text-on-surface font-label-sm text-label-sm py-1 px-space-sm rounded border-none focus:outline-none">
<option>Ward 02 (Metro North)</option>
<option>Ward 04 (Central Core)</option>
<option>Ward 07 (Harbor District)</option>
<option>All Wards</option>
</select>
</div>
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Status:</span>
<select className="bg-surface-container-lowest text-on-surface font-label-sm text-label-sm py-1 px-space-sm rounded border-none focus:outline-none">
<option>Prioritised (Awaiting Crew)</option>
<option>Assessed (AI Raw)</option>
<option>Scheduled (En Route)</option>
</select>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
<div className="xl:col-span-8 flex flex-col gap-space-xs">
<div className="bg-surface-container-high px-space-md py-space-sm rounded flex items-center font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
<div className="w-48">Incident & Preview</div>
<div className="w-44">Anomaly / Sev</div>
<div className="flex-1">Corridor & Exposure</div>
<div className="w-24 text-center">Score</div>
<div className="w-32">Source / Age</div>
<div className="w-28 text-right">Action</div>
</div>
<div className="flex flex-col gap-space-xs">
<div className="bg-surface-container hover:bg-surface-container-high transition-colors p-space-md rounded flex items-center justify-between cursor-pointer group shadow-sm">
<div className="w-48 flex items-center gap-space-sm">
<div className="relative w-14 h-11 rounded overflow-hidden flex-shrink-0 bg-surface-container-lowest">
<img className="w-full h-full object-cover" data-alt="High angle shot of a massive deep asphalt pothole with water pooling on an urban multi-lane road, showing computer vision yellow bounding lines and asphalt aggregate texture under gray daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwpPCYgcAKhG7ftKo3y9c-GkO6HJlvRQBgAogQ6Mgj3z7vuRXy1aBZfb9L3v5kc1aG4TSnNjlEOJQeZtWIT-0FW8T3n8OPzqQ50ehNfWwasUHOHbwYwmyXt_Q5trlYJ90dXpIa_uU63MY0O17w4c8yI4Ys2NKVthHQldygt-7n_eMjeGEHxe5cZp6tqJ4oYYJ7n7ep0ogeruuZSlt7UZ2345AsOig4ZDhJfr-vCLfAuRXe95NPPg4G" />
<span className="absolute bottom-0 right-0 bg-error text-on-error font-label-sm text-[9px] px-1 font-bold">SEV-4</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-primary font-bold">#CIV-9021</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Ward 02 • Sct 14</span>
</div>
</div>
<div className="w-44 flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-semibold truncate">Deep Structural Hole</span>
<span className="font-label-sm text-label-sm text-error flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-error animate-pulse"></span>
                Critical Depth (14cm)
              </span>
</div>
<div className="flex-1 flex flex-col pr-space-md">
<span className="font-body-md text-body-md text-on-surface truncate">North Ring Rd • St. Jude Hospital</span>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm mt-0.5">
<span className="text-secondary font-medium">ADT 24,600</span>
<span>•</span>
<span className="text-error font-semibold flex items-center gap-0.5">
<span className="material-symbols-outlined text-[12px]">local_hospital</span> Emergency Path
                </span>
</div>
</div>
<div className="w-24 flex flex-col items-center">
<span className="bg-error/15 text-error px-space-sm py-0.5 rounded font-label-md text-label-md font-bold">94 / 100</span>
<span className="font-label-sm text-[10px] text-on-surface-variant mt-0.5">Top 1% Hazard</span>
</div>
<div className="w-32 flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-primary">videocam</span> Dashcam #04
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">8 mins ago</span>
</div>
<div className="w-28 flex items-center justify-end gap-space-xs">
<button className="bg-primary hover:bg-primary-fixed text-on-primary p-1.5 rounded transition-colors" title="Instant Dispatch Team" type="button">
<span className="material-symbols-outlined text-[16px] block">send</span>
</button>
<button className="bg-surface-container-highest hover:bg-surface-bright text-on-surface p-1.5 rounded transition-colors" title="View CV Stream" type="button">
<span className="material-symbols-outlined text-[16px] block">visibility</span>
</button>
<button className="bg-surface-container-highest hover:bg-surface-bright text-on-surface-variant p-1.5 rounded transition-colors" title="Defer" type="button">
<span className="material-symbols-outlined text-[16px] block">schedule</span>
</button>
</div>
</div>
<div className="bg-surface-container hover:bg-surface-container-high transition-colors p-space-md rounded flex items-center justify-between cursor-pointer group shadow-sm">
<div className="w-48 flex items-center gap-space-sm">
<div className="relative w-14 h-11 rounded overflow-hidden flex-shrink-0 bg-surface-container-lowest">
<img className="w-full h-full object-cover" data-alt="Close up view of fractured concrete stormwater sewer grate clogged with heavy urban debris, autumn leaves and gravel along curb gutter with cyan inference overlays" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC46FVPw33MazHY6RDM2OY_X96iqfZzO5XPz4STNKzaLOMnRQkETWHaJB49hFk4X2S-fkd5_lS5mfTBXspzl441uJ5qdZ5cc2XmyX3g_8hBEY9sO_5WQd9Y8XWGYSV-WZ565CnlCAvqntPnLLW_LLPMkEyhKW9iDK6wlV2NnPeCbhwWbv08d6YElcBnDsIF-tiEeZ6ZBDkh0mDSPbtV9IdGIczvmuagJvaodTA_Gp_8vVykWsGVrWjv" />
<span className="absolute bottom-0 right-0 bg-error text-on-error font-label-sm text-[9px] px-1 font-bold">SEV-4</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-primary font-bold">#CIV-9018</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Ward 04 • Downtown</span>
</div>
</div>
<div className="w-44 flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-semibold truncate">Storm Inlet Collapsed</span>
<span className="font-label-sm text-label-sm text-error flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-error"></span>
                Inundation Threat
              </span>
</div>
<div className="flex-1 flex flex-col pr-space-md">
<span className="font-body-md text-body-md text-on-surface truncate">Commerce Way & 5th Ave</span>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm mt-0.5">
<span className="text-on-surface font-medium">ADT 18,200</span>
<span>•</span>
<span className="text-secondary font-medium">Rain Inbound 2h</span>
</div>
</div>
<div className="w-24 flex flex-col items-center">
<span className="bg-error/15 text-error px-space-sm py-0.5 rounded font-label-md text-label-md font-bold">91 / 100</span>
<span className="font-label-sm text-[10px] text-on-surface-variant mt-0.5">Flash Flood Risk</span>
</div>
<div className="w-32 flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-primary">sensors</span> Telemetry Pod 9
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">14 mins ago</span>
</div>
<div className="w-28 flex items-center justify-end gap-space-xs">
<button className="bg-primary hover:bg-primary-fixed text-on-primary p-1.5 rounded transition-colors" title="Instant Dispatch Team" type="button">
<span className="material-symbols-outlined text-[16px] block">send</span>
</button>
<button className="bg-surface-container-highest hover:bg-surface-bright text-on-surface p-1.5 rounded transition-colors" title="View CV Stream" type="button">
<span className="material-symbols-outlined text-[16px] block">visibility</span>
</button>
<button className="bg-surface-container-highest hover:bg-surface-bright text-on-surface-variant p-1.5 rounded transition-colors" title="Defer" type="button">
<span className="material-symbols-outlined text-[16px] block">schedule</span>
</button>
</div>
</div>
<div className="bg-surface-container hover:bg-surface-container-high transition-colors p-space-md rounded flex items-center justify-between cursor-pointer group shadow-sm">
<div className="w-48 flex items-center gap-space-sm">
<div className="relative w-14 h-11 rounded overflow-hidden flex-shrink-0 bg-surface-container-lowest">
<img className="w-full h-full object-cover" data-alt="Dense alligator pattern structural cracks across entire two-lane residential roadway with computer vision heat map overlay gradient in green to orange hues" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMivfhBJF3qB-AB3eE0-eI3FIzTFZ1PXb0zDLyEfO2wISCwH24NZzqwH9NFB2y2Vn66BHKERt54vZa9VfpDe-E5beSY3iECFw-hjeX26m7B-HtYPeqSFfYWekfzXGefM3Z1M7Zj1xo9UORlNUqUl_ITTU0jD68Wfpw0CwYzTlTsFnVlAIeaG97uYDpfOhuBVnJ3n7MXg8X-M1y8wdjHSNk5hYOSWhiYi1FWCZhPA_PQHBRUmLOaJDw" />
<span className="absolute bottom-0 right-0 bg-secondary text-on-secondary-fixed font-label-sm text-[9px] px-1 font-bold">SEV-3</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-primary font-bold">#CIV-8994</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Ward 02 • Substation</span>
</div>
</div>
<div className="w-44 flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-semibold truncate">Alligator Fatigue Cracking</span>
<span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
                Sub-base Degradation
              </span>
</div>
<div className="flex-1 flex flex-col pr-space-md">
<span className="font-body-md text-body-md text-on-surface truncate">Maple Ave (Between 12th & 16th)</span>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm mt-0.5">
<span className="text-on-surface font-medium">ADT 9,400</span>
<span>•</span>
<span>Bus Route 44B</span>
</div>
</div>
<div className="w-24 flex flex-col items-center">
<span className="bg-secondary/15 text-secondary px-space-sm py-0.5 rounded font-label-md text-label-md font-bold">78 / 100</span>
<span className="font-label-sm text-[10px] text-on-surface-variant mt-0.5">Pavement Subside</span>
</div>
<div className="w-32 flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-primary">airport_shuttle</span> Muni-Van Cam 02
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">42 mins ago</span>
</div>
<div className="w-28 flex items-center justify-end gap-space-xs">
<button className="bg-primary hover:bg-primary-fixed text-on-primary p-1.5 rounded transition-colors" title="Instant Dispatch Team" type="button">
<span className="material-symbols-outlined text-[16px] block">send</span>
</button>
<button className="bg-surface-container-highest hover:bg-surface-bright text-on-surface p-1.5 rounded transition-colors" title="View CV Stream" type="button">
<span className="material-symbols-outlined text-[16px] block">visibility</span>
</button>
<button className="bg-surface-container-highest hover:bg-surface-bright text-on-surface-variant p-1.5 rounded transition-colors" title="Defer" type="button">
<span className="material-symbols-outlined text-[16px] block">schedule</span>
</button>
</div>
</div>
<div className="bg-surface-container hover:bg-surface-container-high transition-colors p-space-md rounded flex items-center justify-between cursor-pointer group shadow-sm">
<div className="w-48 flex items-center gap-space-sm">
<div className="relative w-14 h-11 rounded overflow-hidden flex-shrink-0 bg-surface-container-lowest">
<img className="w-full h-full object-cover" data-alt="Large construction concrete chunk and metallic scrap debris strewn across high speed expressway lane at twilight with detection bounding boxes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX8pOcRNF61PEj7laUAV0y0GYVvjZcbri037dwRM8yJvD4WOclgrQ_-eDiPVLRTa2wdJzxd_lbTlADst9cQp4DD03of7FtT8h5dQHOehHTgLHj7VAnZkoSEkHVdYYe33BZi3jLHgIK5P3cskw89PTg4MalqQr-SgYBNpWCFHxdUB0RUhq25S2luaWHMtbSPg7-1qP_xsx62JAM2-OZcfkaf9TivXETke0RZP9jFUF6lU6TVsVZp29s" />
<span className="absolute bottom-0 right-0 bg-secondary text-on-secondary-fixed font-label-sm text-[9px] px-1 font-bold">SEV-3</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-primary font-bold">#CIV-8982</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Ward 07 • Expressway</span>
</div>
</div>
<div className="w-44 flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-semibold truncate">Hazardous Road Debris</span>
<span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
                High-Speed Obstacle
              </span>
</div>
<div className="flex-1 flex flex-col pr-space-md">
<span className="font-body-md text-body-md text-on-surface truncate">Harbor Expy Eastbound M.P. 4.2</span>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm mt-0.5">
<span className="text-secondary font-medium">ADT 42,000</span>
<span>•</span>
<span className="text-error font-medium">Lane 2 Obstructed</span>
</div>
</div>
<div className="w-24 flex flex-col items-center">
<span className="bg-secondary/15 text-secondary px-space-sm py-0.5 rounded font-label-md text-label-md font-bold">75 / 100</span>
<span className="font-label-sm text-[10px] text-on-surface-variant mt-0.5">High Speed Sector</span>
</div>
<div className="w-32 flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-primary">videocam</span> Fixed CCTV #81
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">1h 05m ago</span>
</div>
<div className="w-28 flex items-center justify-end gap-space-xs">
<button className="bg-primary hover:bg-primary-fixed text-on-primary p-1.5 rounded transition-colors" title="Instant Dispatch Team" type="button">
<span className="material-symbols-outlined text-[16px] block">send</span>
</button>
<button className="bg-surface-container-highest hover:bg-surface-bright text-on-surface p-1.5 rounded transition-colors" title="View CV Stream" type="button">
<span className="material-symbols-outlined text-[16px] block">visibility</span>
</button>
<button className="bg-surface-container-highest hover:bg-surface-bright text-on-surface-variant p-1.5 rounded transition-colors" title="Defer" type="button">
<span className="material-symbols-outlined text-[16px] block">schedule</span>
</button>
</div>
</div>
<div className="bg-surface-container hover:bg-surface-container-high transition-colors p-space-md rounded flex items-center justify-between cursor-pointer group shadow-sm">
<div className="w-48 flex items-center gap-space-sm">
<div className="relative w-14 h-11 rounded overflow-hidden flex-shrink-0 bg-surface-container-lowest">
<img className="w-full h-full object-cover" data-alt="Moderate road subsidence creating shallow depressions along suburban bike lane with painted green bike stencil and slight crack lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVKtAxNphtaez65CehlSylq6yXyUH4DcPaIHJh0dVLrwU-NcOFtH1jg0GWJUyQv3o9-aV3iLplcsShXqoHw_VTGCW5ds7RlqEyfmLv1Q8nng2xPf9zvd4Lvza0AGdb-2aXjS8XmWQAd3AMYARwAJ1RrtZq6vwDVQO5zuWI61W42BYTkJvXYGgFB4vRm8mlngGUJtHqz5KnWimTwezk2tgtoTNib_eoVwGG0cfCtWQoZKKyAfvpi-fj" />
<span className="absolute bottom-0 right-0 bg-surface-container-highest text-on-surface-variant font-label-sm text-[9px] px-1 font-bold">SEV-2</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-primary font-bold">#CIV-8970</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Ward 04 • Greenbelt</span>
</div>
</div>
<div className="w-44 flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-semibold truncate">Longitudinal Pavement Joint</span>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                Gradual Wear
              </span>
</div>
<div className="flex-1 flex flex-col pr-space-md">
<span className="font-body-md text-body-md text-on-surface truncate">Parkview Terrace Corridor</span>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm mt-0.5">
<span className="text-on-surface font-medium">ADT 4,100</span>
<span>•</span>
<span>Bicycle Transit Zone</span>
</div>
</div>
<div className="w-24 flex flex-col items-center">
<span className="bg-surface-container-highest text-on-surface px-space-sm py-0.5 rounded font-label-md text-label-md font-bold">54 / 100</span>
<span className="font-label-sm text-[10px] text-on-surface-variant mt-0.5">Low Vector Speed</span>
</div>
<div className="w-32 flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-primary">videocam</span> Inspection Car 01
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">1h 40m ago</span>
</div>
<div className="w-28 flex items-center justify-end gap-space-xs">
<button className="bg-primary hover:bg-primary-fixed text-on-primary p-1.5 rounded transition-colors" title="Instant Dispatch Team" type="button">
<span className="material-symbols-outlined text-[16px] block">send</span>
</button>
<button className="bg-surface-container-highest hover:bg-surface-bright text-on-surface p-1.5 rounded transition-colors" title="View CV Stream" type="button">
<span className="material-symbols-outlined text-[16px] block">visibility</span>
</button>
<button className="bg-surface-container-highest hover:bg-surface-bright text-on-surface-variant p-1.5 rounded transition-colors" title="Defer" type="button">
<span className="material-symbols-outlined text-[16px] block">schedule</span>
</button>
</div>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded flex items-center justify-between mt-space-sm font-label-sm text-label-sm text-on-surface-variant">
<span>Displaying 5 of 42 active prioritized civic incidents</span>
<div className="flex items-center gap-space-xs">
<button className="px-2 py-1 bg-surface-container hover:bg-surface-container-high rounded text-on-surface transition-colors" type="button">Prev</button>
<span className="px-2 py-1 bg-primary text-on-primary font-bold rounded">1</span>
<button className="px-2 py-1 bg-surface-container hover:bg-surface-container-high rounded text-on-surface transition-colors" type="button">2</button>
<button className="px-2 py-1 bg-surface-container hover:bg-surface-container-high rounded text-on-surface transition-colors" type="button">3</button>
<button className="px-2 py-1 bg-surface-container hover:bg-surface-container-high rounded text-on-surface transition-colors" type="button">Next</button>
</div>
</div>
</div>
<div className="xl:col-span-4 bg-surface-container p-space-lg rounded flex flex-col gap-space-md shadow-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm bg-error/15 text-error px-space-xs py-0.5 rounded font-bold uppercase tracking-wider">CRITICAL PRIORITY</span>
<span className="font-label-md text-label-md text-on-surface-variant font-mono">#CIV-9021</span>
</div>
<span className="font-label-sm text-label-sm text-primary flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Synced Real-Time
          </span>
</div>
<div className="relative w-full h-48 rounded overflow-hidden bg-surface-container-lowest">
<img className="w-full h-full object-cover" data-alt="High quality street view capture of severe asphalt damage with visual AI telemetry bounding box displaying POTHOLE 98.4 percent confidence and centimeter depth ruler metrics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOqitArRwHid7NM6y0qYZy1NNPgJDoUbgasbKCVowmYMHuO_b79ELsRy5jP_uTduLm7Zrt4aTAFngxBjUoVQwFd8uvYZn-Zsv5XkKgIID9Z40vFxs9bH97jtKZ7jobV0FQ0MLjAVPfDP6AcHqTjUmYk0KeyF65Tel0CsNO6pTT6o36fz_2mM42_uUgZmWZwZ4BbE9hCYvgAJBgiBY0PriyFk_PFr7251kKc9MWHgLqdt4Tb4SuNQKb" />
<div className="absolute top-2 left-2 bg-surface-container-lowest/80 backdrop-blur-md px-space-xs py-0.5 rounded flex items-center gap-1">
<span className="font-label-sm text-[10px] text-primary font-mono">AI CONTOUR DETECTED • CONF 98.4%</span>
</div>
<div className="absolute bottom-2 right-2 bg-error text-on-error font-label-md text-label-md font-bold px-space-sm py-0.5 rounded shadow">
            SEV-4 HIGH HAZARD
          </div>
</div>
<div className="flex flex-col gap-1">
<h2 className="font-headline-md text-headline-md text-on-surface font-bold">Deep Structural Pothole</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">North Ring Road (Westbound, Inner Lane), 200m from St. Jude Central Emergency Gate</span>
</div>
<div className="bg-surface-container-low p-space-md rounded flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Triage Scoring Factors</span>
<div className="flex flex-col gap-space-xs">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface">Dimensional Severity (Depth 14cm / Area 1.1m²)</span>
<span className="text-error font-bold font-mono">38/40</span>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-error h-full rounded-full" style={{width: '95%'}}></div>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface">Corridor Sensitivity (Hospital Emergency Route)</span>
<span className="text-error font-bold font-mono">30/30</span>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-error h-full rounded-full" style={{width: '100%'}}></div>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface">Traffic Volume Density (ADT 24,600 vehicles)</span>
<span className="text-secondary font-bold font-mono">18/20</span>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{width: '90%'}}></div>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface">Weather Vulnerability (Precipitation Index)</span>
<span className="text-primary font-bold font-mono">08/10</span>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: '80%'}}></div>
</div>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Recommended Deployment</span>
<div className="bg-surface-container-low p-space-md rounded flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="h-8 w-8 rounded bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">engineering</span>
</div>
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-semibold">Rapid Patch Crew #03</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Located 1.4km away • Ready</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-primary font-mono font-bold">ETA 12 MIN</span>
</div>
</div>
<div className="flex items-center gap-space-sm pt-space-xs">
<button className="flex-1 bg-error hover:bg-error-container text-on-error font-label-lg text-label-lg py-space-sm px-space-md rounded flex items-center justify-center gap-space-xs font-semibold shadow-md transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">send</span>
<span>Dispatch Crew Immediately</span>
</button>
<button className="bg-surface-container-high hover:bg-surface-bright text-on-surface p-space-sm rounded transition-colors" title="Flag for Structural Review" type="button">
<span className="material-symbols-outlined text-[20px] block">flag</span>
</button>
</div>
</div>
</div>
</div>
</div></>
  )
}
