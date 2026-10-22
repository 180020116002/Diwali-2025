/* ===== Edit your invitation details here ===== */
const INVITE = {
  greeting: "शुभ दीपावली",
  lead: "Join us for an evening of diyas, mithai and togetherness.",
  details: [["Date","Sunday, 8 November 2026"],["Time","7:00 pm onwards"],["Venue","12 Marigold Lane, Your City"],["RSVP","+91 98765 43210"]],
  host: "<small>With love</small>Bhansali Family"
};
/* ============================================ */
const $=s=>document.querySelector(s),body=document.body,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const T={cols:['#ffd35a','#ff9a1f','#fff1d0','#ffb23a'],boom:36,conf:0,onResize:toran};
$('#inv').innerHTML=`<div class="subh">${INVITE.greeting}</div>
 <div class="banner"><span>${[...'You are invited'].map((c,i)=>`<i style="--i:${i}">${c===' '?'&nbsp;':c}</i>`).join('')}</span></div>
 <div class="lead">${INVITE.lead}</div>
 <div class="card">${INVITE.details.map(d=>`<div class="row"><b>${d[0]}</b><span>${d[1]}</span></div>`).join('')}</div>
 <div class="host">${INVITE.host}</div>`;
{let s='<svg viewBox="-100 -100 200 200" width="100%" height="100%" fill="none" stroke="#f6c453" stroke-width=".6">';
 for(const [r,n,w] of [[92,24,5],[74,16,8],[54,12,10],[34,8,10]])for(let k=0;k<n;k++)s+=`<ellipse cx="0" cy="${-r}" rx="${w}" ry="${r*.17}" transform="rotate(${k*360/n})"/>`;
 $('#mandala').innerHTML=s+'<circle r="98"/><circle r="64" stroke-dasharray="1 3"/><circle r="22"/></svg>'}
function toran(){const t=$('#toran');t.innerHTML='';const step=32,n=Math.ceil(innerWidth/step)+1,cols=['#ff9a1f','#ffc61a','#ff8a00','#ffd84a'];
 const add=(x,y,i,c)=>{const f=document.createElement('i');f.className='fw';f.style.cssText=`left:${x}px;top:${y}px;--c:${c||cols[i%4]};--d:${(i*.04).toFixed(2)}s`;t.appendChild(f)};
 for(let i=0;i<n;i++){const x=i*step,sag=10+12*Math.abs(Math.sin(i*Math.PI/6));add(x,sag,i);
  if(i%3===0){const len=2+(i%2);for(let k=1;k<=len;k++)add(x,sag+k*26,i+k*2,k===len?'#c4204a':null)}}}
toran();
const cv=$('#cv'),ctx=cv.getContext('2d'),dv=$('#diya');let P=[],R=[],raf,timers=[];
const rnd=(a,b)=>a+Math.random()*(b-a);
function size(){cv.width=innerWidth;cv.height=innerHeight}
function layout(){const w=Math.min(innerWidth*.52,280),s=dv.style;
 s.setProperty('--s',w/150);s.setProperty('--dx',(innerWidth/2-w/2-innerWidth*.05)+'px');s.setProperty('--dy',-(innerHeight/2-89)+'px')}
size();layout();addEventListener('resize',()=>{size();layout();T.onResize&&T.onResize()});
function boom(x,y){for(let i=0;i<T.boom;i++){const a=rnd(0,6.283),s=rnd(.8,3.4);P.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,l:1,c:T.cols[i%T.cols.length],w:2.4,h:2.4,r:0,vr:0,g:.045,d:.016})}}
function rocket(){R.push({x:innerWidth*rnd(.12,.88),y:innerHeight,vy:-rnd(7,9),ty:innerHeight*rnd(.15,.35)})}
function popper(side){const x=side<0?0:cv.width;for(let i=0;i<T.conf;i++){const a=((side<0?-60:-120)+rnd(-22,22))*Math.PI/180,s=rnd(6,11);
 P.push({x,y:cv.height*.75,vx:Math.cos(a)*s,vy:Math.sin(a)*s,l:1,c:T.cols[i%T.cols.length],r:rnd(0,6),vr:rnd(-.2,.2),w:rnd(5,9),h:rnd(3,6),g:.2,d:.008})}}
function tick(){ctx.clearRect(0,0,cv.width,cv.height);
 for(let i=R.length-1;i>=0;i--){const r=R[i];r.y+=r.vy;
  P.push({x:r.x,y:r.y+5,vx:rnd(-.3,.3),vy:rnd(.4,1),l:.7,c:T.cols[0],w:1.8,h:1.8,r:0,vr:0,g:0,d:.04});
  if(r.y<=r.ty){boom(r.x,r.y);R.splice(i,1)}}
 P=P.filter(p=>p.l>0);
 for(const p of P){p.x+=p.vx;p.y+=p.vy;p.vy+=p.g;p.vx*=.985;p.r+=p.vr;p.l-=p.d;
  ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.globalAlpha=Math.min(1,p.l*1.5);ctx.fillStyle=p.c;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore()}
 raf=requestAnimationFrame(tick)}
function party(){if(reduce||!body.classList.contains('invite'))return;
 if(T.conf){popper(-1);popper(1)}rocket();timers.push(setTimeout(party,rnd(7000,10000)))}
function play(){timers.forEach(clearTimeout);timers=[];P=[];R=[];
 body.classList.add('nt');body.classList.remove('go','lit','center','settle','invite');void body.offsetWidth;
 if(reduce){body.classList.add('lit','center','settle','invite');requestAnimationFrame(()=>body.classList.remove('nt'));return}
 const r=$('#diya svg').getBoundingClientRect(),k=300/r.width,m=$('#match').style;
 m.setProperty('--sx',((-70-r.left)*k)+'px');m.setProperty('--sy',((innerHeight+70-r.top)*k)+'px');
 body.classList.remove('nt');void body.offsetWidth;body.classList.add('go');
 const at=(ms,f)=>timers.push(setTimeout(f,ms));
 at(4300,()=>body.classList.add('lit'));at(6000,()=>body.classList.add('center'));at(7700,()=>body.classList.add('settle'));
 at(9700,()=>{body.classList.add('invite');at(2400,party)})}
tick();$('#replay').addEventListener('click',play);play();

