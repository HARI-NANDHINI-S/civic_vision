import re, os, html
from html.parser import HTMLParser
SRC='/home/claude/stitch/stitch_civicvision_ai_frontend_platform'
OUT='/home/claude/civicvision/src/pages/generated'
os.makedirs(OUT,exist_ok=True)
VOID={'img','input','br','hr','meta','link','source','path_'}
ATTR={'pathlength':'pathLength','spreadmethod':'spreadMethod','xmlns:xlink':'xmlnsXlink','flood-color':'floodColor','flood-opacity':'floodOpacity','color-interpolation-filters':'colorInterpolationFilters','in2':'in2','marker-end':'markerEnd','marker-start':'markerStart','stroke-linecap':'strokeLinecap','class':'className','for':'htmlFor','viewbox':'viewBox','stroke-width':'strokeWidth','stroke-linecap':'strokeLinecap','stroke-linejoin':'strokeLinejoin','stroke-dasharray':'strokeDasharray','stroke-dashoffset':'strokeDashoffset','stroke-opacity':'strokeOpacity','fill-opacity':'fillOpacity','fill-rule':'fillRule','clip-rule':'clipRule','clip-path':'clipPath','stop-color':'stopColor','stop-opacity':'stopOpacity','text-anchor':'textAnchor','font-size':'fontSize','font-family':'fontFamily','font-weight':'fontWeight','tabindex':'tabIndex','readonly':'readOnly','maxlength':'maxLength','colspan':'colSpan','rowspan':'rowSpan','autocomplete':'autoComplete','crossorigin':'crossOrigin','preserveaspectratio':'preserveAspectRatio','gradientunits':'gradientUnits','gradienttransform':'gradientTransform','patternunits':'patternUnits','markerwidth':'markerWidth','markerheight':'markerHeight','refx':'refX','refy':'refY','stddeviation':'stdDeviation','textlength':'textLength','stroke-miterlimit':'strokeMiterlimit','vector-effect':'vectorEffect','spellcheck':'spellCheck','datetime':'dateTime','enterkeyhint':'enterKeyHint','xlink:href':'href'}
DROP={'onsubmit','onkeydown','onmouseover','onmouseout'}
KEEP={'onclick','onchange','oninput'}
TAGS={'lineargradient':'linearGradient','radialgradient':'radialGradient','clippath':'clipPath','textpath':'textPath','foreignobject':'foreignObject','fegaussianblur':'feGaussianBlur','femerge':'feMerge','femergenode':'feMergeNode','feoffset':'feOffset','fecolormatrix':'feColorMatrix','feflood':'feFlood','fecomposite':'feComposite','animatetransform':'animateTransform'}
def style_obj(s):
    items=[]
    for d in s.split(';'):
        if ':' not in d: continue
        k,v=d.split(':',1); k=k.strip(); v=v.strip()
        if not k: continue
        if k.startswith('--'): key=f"'{k}'"
        else: key=re.sub(r'-([a-z])',lambda m:m.group(1).upper(),k)
        items.append(f"{key}: {v!r}".replace("\\'","'") if "'" not in v else f"{key}: {v!r}")
    return '{{'+', '.join(items)+'}}'
class P(HTMLParser):
    def __init__(s,handlers): super().__init__(convert_charrefs=True); s.o=[]; s.stack=[]; s.handlers=handlers; s.skip=0; s.pre=0
    def handle_starttag(s,tag,attrs,selfc=False):
        if s.skip: 
            if tag not in VOID: s.skip+=1
            return
        if tag in('script','style'): s.skip=1; return
        a=[]
        for k,v in attrs:
            kl=k.lower()
            if kl in DROP: continue
            if kl in KEEP:
                a.append('data-'+kl+'="'+(v or '').replace('"','&quot;')+'"'); continue
            if kl=='style': a.append(f'style={style_obj(v or "")}'); continue
            n=ATTR.get(kl,k)
            if kl.startswith('data-') or kl.startswith('aria-'): n=k
            if v is None and kl=='checked': a.append('defaultChecked')
            elif v is None: a.append(n if kl not in('disabled','checked','multiple','required','readonly','selected','hidden') else n)
            else:
                v2=v.replace('{','&#123;').replace('}','&#125;').replace('"','&quot;')
                if kl in('checked','value') and tag=='input': n={'checked':'defaultChecked','value':'defaultValue'}[kl]
                a.append(f'{n}="{v2}"')
        t=TAGS.get(tag,tag)
        s.o.append('<'+t+(' '+' '.join(a) if a else '')+(' />' if tag in VOID else '>'))
        if tag not in VOID: s.stack.append(tag)
    def handle_startendtag(s,tag,attrs):
        s.handle_starttag(tag,attrs)
        if tag not in VOID and not s.skip: s.o.append(f'</{TAGS.get(s.stack.pop(),tag)}>')
    def handle_endtag(s,tag):
        if s.skip:
            s.skip-=1; return
        if tag in VOID: return
        if s.stack and s.stack[-1]==tag: s.stack.pop(); s.o.append(f'</{TAGS.get(tag,tag)}>')
    def handle_data(s,d):
        if s.skip: return
        d=d.replace('{','{"{"}').replace('}','{"}"}').replace('<','&lt;').replace('>','&gt;')
        s.o.append(d)
    def handle_comment(s,d): pass
def to_jsx(frag):
    p=P(None); p.feed(frag); return ''.join(p.o)
def between(s,tag,idx=0):
    m=re.search(rf'<{tag}\b[^>]*>',s[idx:]); 
    start=idx+m.end(); depth=1; pos=start
    for mm in re.finditer(rf'<(/?){tag}\b[^>]*>',s[start:]):
        depth+= -1 if mm.group(1) else 1
        if depth==0: return s[start:start+mm.start()], start+mm.end(), idx+m.start()
def outer(s,tag,idx=0):
    inner,end,st=between(s,tag,idx); return s[st:end]
PAGES={ # folder: (Component, kind)
 'civicvision_ai_desktop_command_dashboard':('DashboardDesktop','d'),
 'civicvision_ai_desktop_ai_inspection':('InspectionDesktop','d'),
 'civicvision_ai_desktop_priority_queue':('PriorityQueueDesktop','d'),
 'civicvision_ai_desktop_geographic_map':('MapDesktop','d'),
 'civicvision_ai_desktop_maintenance_operations':('MaintenanceDesktop','d'),
 'civicvision_ai_desktop_analytics_model_intelligence':('AnalyticsDesktop','d'),
 'civicvision_ai_operational_dashboard':('DashboardMobile','m'),
 'civicvision_ai_inspection_detection':('InspectionMobile','m'),
 'civicvision_ai_priority_queue':('PriorityQueueMobile','m'),
 'civicvision_ai_geographic_map':('MapMobile','m'),
 'civicvision_ai_maintenance_operations':('MaintenanceMobile','m'),
 'civicvision_ai_infrastructure_analytics':('AnalyticsMobile','m'),
 'civicvision_ai_road_location_context':('RoadLocationMobile','m'),
}
shell={}
for folder,(name,kind) in PAGES.items():
    s=open(f'{SRC}/{folder}/code.html').read()
    body=s[s.index('<body'):]
    if kind=='d':
        main=between(body,'main')[0]
        jsx=to_jsx(main)
        if name=='DashboardDesktop':
            shell['aside']=to_jsx(outer(body,'aside')); shell['header']=to_jsx(outer(body,'header'))
        else:
            shell['header_'+name]=to_jsx(outer(body,'header'))
        # trailing overlays after </main> (e.g. modals/toasts) 
        after=body[body.index('</main>')+7:]
        after=re.sub(r'</div>\s*</body>.*','',after,flags=re.S) if False else after
        extra=re.sub(r'<script.*?</script>','',after,flags=re.S)
        extra=extra.replace('</body>','').replace('</html>','')
        # keep only balanced leading fragments
        extra_jsx=to_jsx(extra) if extra.strip() else ''
        content=f'<>{jsx}{extra_jsx}</>'
    else:
        b=re.sub(r'<script.*?</script>','',body,flags=re.S)
        b=b[b.index('>')+1:]; b=b[:b.rindex('</body>')] if '</body>' in b else b
        content='<>'+to_jsx(b)+'</>'
    open(f'{OUT}/{name}.tsx','w').write(f"// Generated from Stitch: {folder}/code.html\nexport default function {name}() {{\n  return (\n    {content}\n  )\n}}\n")
    print(name,len(content))
rl=open(f'{SRC}/civicvision_ai_road_location_context/code.html').read()
rb=rl[rl.index('<body'):]
open(f'{OUT}/RoadLocationDesktop.tsx','w').write("// Generated from Stitch: civicvision_ai_road_location_context/code.html (<main> only, hosted in desktop shell)\nexport default function RoadLocationDesktop() {\n  return (\n    <>"+to_jsx(between(rb,'main')[0])+"</>\n  )\n}\n")
open('/tmp/shell.json','w').write(__import__('json').dumps(shell))
# header diffs
base=shell['header']
for k,v in shell.items():
    if k.startswith('header_'): print(k, 'SAME' if v==base else 'DIFF')
