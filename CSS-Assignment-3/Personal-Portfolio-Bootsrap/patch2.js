const fs = require('fs');

const file = 'd:/CODING DATA/Portfolio/portfolio/tunis-nextjs.netlify.app/_next/static/chunks/122-d2e3baededd2b704.js';
let txt = fs.readFileSync(file, 'utf8');

const newProjects = [
  {id:1,type:"XLICON-V2-MD",image:"https://iili.io/dET3ukX.md.png",tag:["mockup"],delayAnimation:"0",modalDetails:[{project:"XLICON-V2-MD",client:"Open Source",language:"JavaScript",preview:"View Project",link:"https://github.com/ahmmikun/XLICON-V2-MD"}]},
  {id:2,type:"Rest API Site",image:"https://i.ibb.co/gLqqC2vN/Rest-Api-Site.png",tag:["mockup"],delayAnimation:"100",modalDetails:[{project:"Rest API Site",client:"Personal",language:"Node.js",preview:"View Project",link:"https://api.salmanahmad.my.id/"}]},
  {id:3,type:"Anime Urdu",image:"https://i.ibb.co/5hM9BF6J/image.png",tag:["mockup"],delayAnimation:"200",modalDetails:[{project:"Anime Urdu",client:"Personal",language:"Web",preview:"View Project",link:"https://anime-urdu.vercel.app/"}]},
  {id:4,type:"Keys Monitor",image:"https://i.ibb.co/nVCPB2J/image.png",tag:["video"],delayAnimation:"0",modalDetails:[{project:"Keys Monitor",client:"Personal",language:"Web",preview:"View Project",link:"https://keys-monitor.vercel.app/"}]},
  {id:5,type:"ISP Portfolio",image:"https://i.ibb.co/jkX7mZJG/image.png",tag:["logo"],delayAnimation:"100",modalDetails:[{project:"ISP Portfolio",client:"Personal",language:"Web",preview:"View Project",link:"https://github.com/ahmmikun/ISP-Portfolio-Website"}]},
  {id:6,type:"Salman AI",image:"https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models?$QC_Responsive$&fmt=png-alpha&wid=814",tag:["graphic"],delayAnimation:"200",modalDetails:[{project:"Salman AI",client:"Personal",language:"AI",preview:"View Project",link:"#"}]}
];

const startStr = 'o=[';
const startIdx = txt.indexOf(startStr);
const endStr = '],n=a(';
const endIdx = txt.indexOf(endStr, startIdx);

if (startIdx !== -1 && endIdx !== -1) {
  let replacement = 'o=' + JSON.stringify(newProjects);
  let newTxt = txt.substring(0, startIdx) + replacement + txt.substring(endIdx + 1);
  newTxt = newTxt.replace(/\(0,A\.jsx\)\(r\(\),\{src:e\.image,alt:"portfolio project demo"\}\)/g, '(0,A.jsx)("img",{src:typeof e.image==="string"?e.image:e.image.src,alt:"portfolio project demo",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"10px"}})');
  fs.writeFileSync(file, newTxt, 'utf8');
  console.log('Script updated with external URLs and plain img tags successfully.');
} else {
  console.log('Unable to locate array. Please check patch logic.');
}

