import json,re,pathlib,datetime,unicodedata
root=pathlib.Path(__file__).resolve().parents[1]
tables=json.loads((root/'reports/streaming-source-tables-2018-expanded.json').read_text())
pub=json.loads((root/'reports/streaming-2018-provenance.json').read_text())['publicationDates']
months={m:i+1 for i,m in enumerate(['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'])}
def dates(h):
 y=re.search(r'20\d\d',h)[0]
 return [f'{y}-{months[m]:02d}-{int(d):02d}' for d,m in re.findall(r'(\d{1,2})\s*('+'|'.join(months)+')',h)]
def canon(s):return re.sub('[^a-zа-я0-9]+',' ',unicodedata.normalize('NFKC',s).lower().replace('ё','е')).strip()
def identity(a,t):
 t=re.sub(r'/\s*[\d\s]+$','',t).strip()
 if canon(a)=='allj' and canon(t)=='минимал':a='Элджей'
 if canon(a)=='allj' and canon(t)=='розовое вино feat feduk':a,t='Элджей & Feduk','Розовое вино'
 if canon(a)=='gazirovka':a='GAZIROVKA'
 if canon(a)=='леша свик':a='Лёша Свик'
 return a,t
weeks=[]
for i,t in tables.items():
 if 'apple' not in t:continue
 ds=dates(t['apple']['heading'])
 if len(ds)!=2:print('BAD',i,ds);continue
 weeks.append({'id':i,'start':ds[0],'end':ds[1],'published':pub[i],'tables':t})
weeks.sort(key=lambda w:w['start'])
out=[]
for w in weeks:
 cs=[]
 for rank,a,t in w['tables']['apple']['rows']:
  a,t=identity(a,t);key=canon(a)+'|'+canon(t)
  if not re.search('[а-яА-ЯёЁ]',t) and key!='gazirovka|black':continue
  match=None
  for platform in ['yandex','vk']:
   tab=w['tables'].get(platform)
   if not tab:continue
   ds=dates(tab['heading'])
   if len(ds)!=1 or abs((datetime.date.fromisoformat(ds[0])-datetime.date.fromisoformat(w['end'])).days)>7:continue
   for r,b,u in tab['rows']:
    b,u=identity(b,u)
    if key==canon(b)+'|'+canon(u):match={'platform':platform,'date':ds[0],'rank':int(r)};break
   if match:break
  if not match:continue
  repeats=[]
  for v in weeks:
   gap=abs((datetime.date.fromisoformat(v['end'])-datetime.date.fromisoformat(w['end'])).days)
   if not 7<=gap<=31:continue
   for r,b,u in v['tables']['apple']['rows']:
    b,u=identity(b,u)
    if key==canon(b)+'|'+canon(u):repeats.append({'id':v['id'],'start':v['start'],'end':v['end'],'rank':int(r),'published':v['published'],'gap':gap})
  if not repeats:continue
  repeat=min(repeats,key=lambda r:(r['gap'],r['end']))
  cs.append({'artist':a,'title':t,'rank':int(rank),'corroboration':match,'repeat':repeat})
 if len(cs)>=3:out.append({k:v for k,v in w.items() if k!='tables'}|{'candidates':cs})
print('qualified weeks',len(out))
for w in out:print(w['start'],w['end'],[(c['artist'],c['title']) for c in w['candidates']])
(root/'reports/streaming-source-tables-2018-expanded.json').write_text(json.dumps(tables,ensure_ascii=False,indent=2)+'\n')
(root/'app/streaming-weeks-2018-data.ts').write_text('// National Apple Music weekly tables with dated Yandex/VK corroboration.\n// Raw headings and unmodified rows: reports/streaming-source-tables-2018-expanded.json\n// Only two explicit Allj identities normalized; no generic feat/version removal.\nexport const VERIFIED_STREAMING_WEEKS_2018 = '+json.dumps(out,ensure_ascii=False,indent=2)+' as const;\n')
