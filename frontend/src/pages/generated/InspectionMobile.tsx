// Generated from Stitch: civicvision_ai_inspection_detection/code.html
export default function InspectionMobile() {
  return (
    <><header className="fixed top-0 w-full z-50 pt-safe bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.35)]"><div className="h-16 px-gutter flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0"><img alt="CivicVision AI Logo" className="h-8 w-auto object-contain flex-shrink-0" src="https://lh3.googleusercontent.com/aida/AEtjO1UqSI9c3uHM06CCSNR-x3WSxXgriU-pnA77KUXG3NoLnAJOP7vf1OmHVqX_iifygrpfwUa202Hsj7mVRr1s1-jzB_fmjPjN5YTVU_TXiTLcgS-vmHDRwKqkQaRln2MfiX1f1dY7EYN4daguv8P5MRYc2xGxY-RKrVr-46sE9OhDCBSlsN_LxCl9fBjSfhdIV_A97BR_wtbCxmv28qtx7FGS9lnXhGNp_-qsGom0ca5LePHmnaCAJwfMmrg" /><div className="flex flex-col min-w-0"><div className="flex items-center gap-space-xs"><span className="text-headline-md font-headline-md text-on-surface tracking-tight truncate leading-none">CivicVision</span><span className="px-space-xs py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">AI</span></div><span className="text-label-sm font-label-sm text-on-surface-variant truncate mt-0.5 leading-none">Ai Inspection</span></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><div className="hidden sm:flex items-center gap-space-xs px-space-xs py-1 rounded bg-surface-container-low"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span><span className="text-label-sm font-label-sm text-primary uppercase">LIVE</span></div><button aria-label="Notifications" className="w-11 h-11 flex items-center justify-center rounded-lg bg-surface-container text-on-surface-variant hover:text-primary transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full px-margin pb-safe space-y-space-lg">

<div className="flex flex-col space-y-space-xs mt-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">Pipeline #CV-9942</span>
<span className="text-on-surface-variant text-label-sm font-label-sm">Inference: 142ms</span>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-low px-space-xs py-0.5 rounded">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
<span className="text-label-sm font-label-sm text-primary uppercase">Model: v4.2-YOLOv9-Civic</span>
</div>
</div>
<div className="flex items-center justify-between">
<h2 className="text-headline-lg-mobile font-headline-lg-mobile text-on-surface">Inspection Diagnosis</h2>
<button className="flex items-center gap-1 text-label-sm font-label-sm text-on-surface-variant hover:text-primary transition-colors py-1 px-space-xs rounded bg-surface-container" id="toggleOverlayBtn" type="button">
<span className="material-symbols-outlined text-[16px]">layers</span>
<span id="overlayToggleText">Hide CV Overlays</span>
</button>
</div>
</div>

<div className="relative w-full rounded-xl overflow-hidden shadow-xl bg-surface-container-lowest">
<div className="relative w-full aspect-[4/3] bg-surface-dim">
<img className="w-full h-full object-cover select-none pointer-events-none" data-alt="A first-person roadway asset inspection photograph of cracked urban asphalt pavement on a two-lane street. The road surface reveals a deep dangerous pothole with fractured structural aggregates and a sprawling longitudinal asphalt fissure. Technical daylight lighting under overcast city sky, moody teal slate undertones and rich realistic asphalt textures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPEDakhR2XlPedv8bqie4kRqzi_U-4ZH7FFtTbzSjS393W9_qLNeRGJVwckTuUqBdKxidOZ9bjJsZdpVAlNLgNyDdT5mpthl2s12JptZ6kiDtcVkygS6GnLGX9b5mQ787kPSDGty7D9uii0H_ar_CJUoXc4ZKyq-8VnhFWteGflrk_6JiZgr03zCj7bJNCYZc3fel1-bAYbB0pEcIaj9cVaTbjy0sprnX3YctC4FT_SWNZFDGCmjGo" />

<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-black/20 pointer-events-none"></div>

<div className="absolute inset-0 transition-opacity duration-300" id="cvOverlayContainer">

<div className="absolute top-[38%] left-[18%] w-[48%] h-[36%] pointer-events-auto group cursor-pointer" data-onclick="selectAnomaly('pothole')">

<div className="absolute inset-0 bg-error/10 shadow-[0_0_12px_rgba(255,180,171,0.2)]"></div>

<span className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-error"></span>
<span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-error"></span>
<span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-error"></span>
<span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-error"></span>

<div className="absolute -top-5 left-0 flex items-center gap-1 px-1.5 py-0.5 rounded-sm bg-error-container text-on-error-container shadow-md">
<span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
<span className="text-label-sm font-label-sm font-semibold tracking-tight uppercase whitespace-nowrap">
              Severe Pothole • 94.2% Conf • Severity: High
            </span>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-error text-[20px]">adjust</span>
</div>
</div>

<div className="absolute top-[18%] right-[8%] w-[34%] h-[42%] pointer-events-auto group cursor-pointer" data-onclick="selectAnomaly('crack')">

<div className="absolute inset-0 bg-secondary-container/15 shadow-[0_0_8px_rgba(238,152,0,0.2)]"></div>

<span className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-secondary"></span>
<span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-secondary"></span>
<span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-secondary"></span>
<span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-secondary"></span>

<div className="absolute -top-5 left-0 flex items-center gap-1 px-1.5 py-0.5 rounded-sm bg-surface-container-high text-secondary shadow-md">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span className="text-label-sm font-label-sm font-semibold tracking-tight uppercase whitespace-nowrap">
              Road Crack • 87.5% Conf • Severity: Medium
            </span>
</div>
</div>
</div>

<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant bg-surface-container-lowest/80 backdrop-blur-md px-2 py-1 rounded">
<span className="truncate">LAT 37.7749° N, LON -122.4194° W</span>
<span className="text-primary font-semibold shrink-0">FOV 84° • CAM_04</span>
</div>
</div>

<div className="px-space-md py-space-sm bg-surface-container flex items-center justify-between text-label-sm font-label-sm">
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-[16px] text-primary">verified</span>
<span>IMG_20250218_0941.RAW</span>
</div>
<span className="text-on-surface-variant">2 Anomalies Tagged</span>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md shadow-md space-y-space-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">hub</span>
<h3 className="text-headline-md font-headline-md text-on-surface">Dual-Engine Intelligence</h3>
</div>

<div className="grid grid-cols-1 gap-space-sm">

<div className="bg-surface-container-low rounded-lg p-space-sm flex items-start gap-space-sm">
<div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined text-[18px]">crop_free</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="text-label-md font-label-md font-semibold text-primary uppercase">YOLO Detection</span>
<span className="px-1 py-0.2 rounded bg-surface-container-high text-on-surface-variant text-label-sm font-label-sm">Visual Domain</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
<span className="text-on-surface font-medium">"What is visible?"</span> Object identification, pixel polygon boundaries, depth inference, and multi-class confidence calibration.
          </p>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm flex items-start gap-space-sm">
<div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center shrink-0 text-secondary">
<span className="material-symbols-outlined text-[18px]">crisis_alert</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="text-label-md font-label-md font-semibold text-secondary uppercase">Priority Engine</span>
<span className="px-1 py-0.2 rounded bg-surface-container-high text-on-surface-variant text-label-sm font-label-sm">Risk Domain</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
<span className="text-on-surface font-medium">"How urgently addressed?"</span> Synthesizes pedestrian footfall, Average Daily Traffic (ADT), precipitation forecasts, and school zone proximity.
          </p>
</div>
</div>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md shadow-md space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-error text-[20px]">warning</span>
<h3 className="text-headline-md font-headline-md text-on-surface">Target Anomaly Telemetry</h3>
</div>
<span className="px-space-xs py-0.5 rounded bg-error-container text-on-error-container text-label-sm font-label-sm font-semibold uppercase">
        Class ID #CV-08
      </span>
</div>

<div className="grid grid-cols-2 gap-space-sm">
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col justify-between">
<span className="text-label-sm font-label-sm text-on-surface-variant uppercase">Estimated Area</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="text-headline-md font-headline-md text-on-surface">1.4</span>
<span className="text-label-md font-label-md text-primary">m²</span>
</div>
<span className="text-label-sm font-label-sm text-on-surface-variant mt-1">Lateral expansion: +12%</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col justify-between">
<span className="text-label-sm font-label-sm text-on-surface-variant uppercase">Target Void Depth</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="text-headline-md font-headline-md text-error">8.5</span>
<span className="text-label-md font-label-md text-error">cm</span>
</div>
<span className="text-label-sm font-label-sm text-on-surface-variant mt-1">Base aggregate exposed</span>
</div>
</div>

<div className="space-y-space-xs">
<span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Contextual Risk Modifiers</span>
<div className="space-y-1.5">

<div className="bg-surface-container-low px-space-sm py-2 rounded-lg flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<span className="material-symbols-outlined text-secondary text-[18px]">commute</span>
<div className="flex flex-col min-w-0">
<span className="text-body-sm font-body-sm text-on-surface truncate">Heavy Traffic Corridor</span>
<span className="text-label-sm font-label-sm text-on-surface-variant">ADT: 18,500 veh/day</span>
</div>
</div>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-secondary text-label-sm font-label-sm uppercase font-semibold shrink-0">+28 pts</span>
</div>

<div className="bg-surface-container-low px-space-sm py-2 rounded-lg flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<span className="material-symbols-outlined text-error text-[18px]">school</span>
<div className="flex flex-col min-w-0">
<span className="text-body-sm font-body-sm text-on-surface truncate">School Zone Proximity</span>
<span className="text-label-sm font-label-sm text-on-surface-variant">Oakridge Elementary (120m away)</span>
</div>
</div>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-error text-label-sm font-label-sm uppercase font-semibold shrink-0">+35 pts</span>
</div>

<div className="bg-surface-container-low px-space-sm py-2 rounded-lg flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<span className="material-symbols-outlined text-surface-tint text-[18px]">rainy</span>
<div className="flex flex-col min-w-0">
<span className="text-body-sm font-body-sm text-on-surface truncate">Monsoon Drainage Risk</span>
<span className="text-label-sm font-label-sm text-on-surface-variant">Subsurface ponding probability</span>
</div>
</div>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-primary text-label-sm font-label-sm uppercase font-semibold shrink-0">+14 pts</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-high rounded-xl p-space-md shadow-xl space-y-space-md">

<div className="flex items-center justify-between bg-surface-container-lowest p-space-md rounded-lg">
<div className="flex flex-col">
<span className="text-label-sm font-label-sm text-on-surface-variant uppercase">Predicted Urgency Matrix</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="text-headline-xl font-headline-xl text-error tracking-tight">92</span>
<span className="text-headline-md font-headline-md text-on-surface-variant">/ 100</span>
</div>
<span className="text-label-sm font-label-sm text-on-surface-variant mt-0.5">Top 1.8% of district hazards</span>
</div>

<div className="flex flex-col items-end gap-1">
<div className="flex items-center gap-1.5 px-space-sm py-1.5 rounded-lg bg-error-container text-on-error-container shadow-md">
<span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
<span className="text-label-sm font-label-sm font-bold tracking-wider uppercase">CRITICAL PRIORITY</span>
</div>
<span className="text-label-sm font-label-sm text-on-surface-variant">SLA: &lt;12 Hours</span>
</div>
</div>

<div className="bg-surface-container-low p-space-sm rounded-lg space-y-space-xs">
<div className="flex items-center gap-1.5 text-primary">
<span className="material-symbols-outlined text-[18px]">smart_toy</span>
<span className="text-label-md font-label-md font-semibold uppercase">Prescriptive Mitigation</span>
</div>
<p className="text-body-md font-body-md text-on-surface">
        Immediate Cold-Mix Patching & Hazard Barricade within 12h. Re-mill scheduled for Ward 4 cyclic repaving.
      </p>
</div>

<div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant px-1">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary"></span>
        Triage Complete
      </span>
<span>Mock Payload Ready (JSON schema v1.2)</span>
</div>
</div>

<div className="space-y-space-sm pt-space-xs">
<button className="w-full h-12 bg-primary text-on-primary font-label-lg text-label-lg rounded-lg shadow-lg flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99] transition-all" id="dispatchWorkOrderBtn" type="button">
<span className="material-symbols-outlined text-[20px]">send</span>
<span>Dispatch Maintenance Work Order</span>
</button>
<button className="w-full h-11 bg-surface-container-high text-on-surface font-label-lg text-label-lg rounded-lg shadow-sm flex items-center justify-center gap-2 hover:bg-surface-bright active:scale-[0.99] transition-all" id="reinspectBtn" type="button">
<span className="material-symbols-outlined text-[18px]">add_a_photo</span>
<span>Re-inspect / Upload New Asset</span>
</button>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-lowest text-center">
<p className="text-label-sm font-label-sm text-on-surface-variant leading-relaxed">
      DEMO DATA — Model inference simulated for UI validation prior to FastAPI endpoint deployment.
    </p>
</div>
</div>

</main><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.4)]" data-active-classes="text-primary bg-surface-container-high/60"><div className="flex items-stretch justify-around h-16 px-space-xs"><a className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="overview" href="#"><span className="material-symbols-outlined text-[22px]">dashboard</span><span className="text-label-sm font-label-sm mt-0.5">Overview</span></a><a aria-current="page" className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded transition-colors text-primary bg-surface-container-high/60" data-path="ai-inspection" href="#"><span className="material-symbols-outlined text-[22px]">document_scanner</span><span className="text-label-sm font-label-sm mt-0.5">Inspect</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="civic-issues-queue" href="#"><span className="material-symbols-outlined text-[22px]">emergency_home</span><span className="text-label-sm font-label-sm mt-0.5">Issues</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="geographic" href="#"><span className="material-symbols-outlined text-[22px]">map</span><span className="text-label-sm font-label-sm mt-0.5">Map</span></a><a className="flex flex-col items-center justify-center flex-1 min-w-[56px] py-1 rounded text-on-surface-variant transition-colors hover:text-on-surface" data-path="analytics-maintenance" href="#"><span className="material-symbols-outlined text-[22px]">analytics</span><span className="text-label-sm font-label-sm mt-0.5">Analytics</span></a></div></nav></>
  )
}
