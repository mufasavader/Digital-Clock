/*/dates and times
//date constructor
const now =new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getSeconds());
console.log(now.getTime());
console.log(now.toDateString());
console.log(now.toLocaleString());
console.log(now.toTimeString());
///timestamps
const before= new Date('February 1 2019 7:30:59');
const dif = now.getTime() - before.getTime();
const days = Math.round(dif/1000/60/60/24);
console.log(days);
//convert timestamp
const timestamp=1675938474990;
console.log(new Date(timestamp));*/
const clock =document.querySelector('.clock');

const tick = ()=>{
const now = new Date();
const h=now.getHours();
const m=now.getMinutes();
const s=now.getSeconds();
const html=`
<span>${h}</span> :
<span>${m}</span> :
<span>${s}</span> :
`
clock.innerHTML=html;
;

}
setInterval(tick, 1000);