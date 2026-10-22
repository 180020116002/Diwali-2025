/* ===== Edit your invitation details here ===== */
const INVITE = {
  pill: "🪔 diwali night 2026",
  lead: "lights, mithai, card games and chaos. come hungry, aana zaroor ✨",
  details: [["when","Sun, 8 Nov"],["time","7 pm onwards"],["where","12 Marigold Lane, Your City"],["rsvp","+91 98765 43210"]],
  chips: ["dress code: desi fits 👗","mithai > calories 🍬","teen patti after dinner 🃏"],
  wa: "919876543210",
  host: "Bhansali Family"
};
/* ============================================ */
const $=s=>document.querySelector(s),body=document.body,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const T={cols:['#ff2e93','#ffd60a','#c8ff3d','#3de7ff','#ff8a00'],boom:34,conf:26};
const L=(t,o)=>[...t].map((c,i)=>`<i style="--i:${o+i}">${c===' '?'&nbsp;':c}</i>`).join('');
const BG=['#ffd60a','#ff7ac0','#3de7ff','#c8ff3d'],CC=['#ff2e93','#ffd60a','#c8ff3d'];
$('#inv').innerHTML=`<div class="pill pop" style="--rot:2deg;--dl:1s">${INVITE.pill}</div>
 <div class="banner big"><div>${L('You are',0)}</div><div class="l2">${L('invited!',7)}</div></div>
 <div class="lead pop" style="--dl:2.2s">${INVITE.lead}</div>
 <div class="grid">${INVITE.details.map((d,i)=>`<div class="box pop" style="--bg:${BG[i]};--rot:${i%2?2:-2}deg;--dl:${2.4+i*.18}s"><b>${d[0]}</b><span>${d[1]}</span></div>`).join('')}</div>
 <div class="chips">${INVITE.chips.map((c,i)=>`<div class="chip pop" style="--c:${CC[i%3]};--rot:${[-3,2,-1][i]}deg;--dl:${3.2+i*.15}s">${c}</div>`).join('')}</div>
 <a class="cta pop" style="--dl:3.7s" href="https://wa.me/${INVITE.wa}?text=${encodeURIComponent('Aa rahe hain! 🪔')}" target="_blank" rel="noopener">RSVP on WhatsApp 💬</a>
 <div class="host big pop" style="--dl:3.9s"><small>hosted with love by the</small>${INVITE.host}</div>`;
$('#mq').textContent='\u2726 diwali dump szn \u2726 pull up \u2726 mithai > everything \u2726 no cap, just diyas \u2726 '.repeat(8);
function bunt(){const t=$('#bunt');t.innerHTML='';const step=30,n=Math.ceil(innerWidth/step)+1,cols=['#ff2e93','#ff8a00','#ffd60a','#c8ff3d','#3de7ff'];
 for(let i=0;i<n;i++){const f=document.createElement('i');f.className='fg';f.style.cssText=`left:${i*step}px;top:${(10*Math.sin(Math.PI*(i%8)/8)).toFixed(1)}px;--c:${cols[i%5]};--d:${(i*.035).toFixed(2)}s`;t.appendChild(f)}}
bunt();T.onResize=bunt;
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

