const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const file = 'd:/CODING DATA/Portfolio/portfolio/tunis-nextjs.netlify.app/_next/static/chunks/122-d2e3baededd2b704.js';
let txt = fs.readFileSync(file, 'utf8');

const newProjects = [
  {id:1,type:"XLICON-V2-MD",image:{src:"assets/img/projects/p1.png",height:552,width:895},tag:["mockup"],delayAnimation:"0",modalDetails:[{project:"XLICON-V2-MD",client:"Open Source",language:"JavaScript",preview:"View Project",link:"https://github.com/ahmmikun/XLICON-V2-MD"}]},
  {id:2,type:"Rest API Site",image:{src:"assets/img/projects/p2.png",height:552,width:895},tag:["mockup"],delayAnimation:"100",modalDetails:[{project:"Rest API Site",client:"Personal",language:"Node.js",preview:"View Project",link:"https://api.salmanahmad.my.id/"}]},
  {id:3,type:"Anime Urdu",image:{src:"assets/img/projects/p3.png",height:552,width:895},tag:["mockup"],delayAnimation:"200",modalDetails:[{project:"Anime Urdu",client:"Personal",language:"Web",preview:"View Project",link:"https://anime-urdu.vercel.app/"}]},
  {id:4,type:"Keys Monitor",image:{src:"assets/img/projects/p4.png",height:552,width:895},tag:["mockup"],delayAnimation:"0",modalDetails:[{project:"Keys Monitor",client:"Personal",language:"Web",preview:"View Project",link:"https://keys-monitor.vercel.app/"}]},
  {id:5,type:"ISP Portfolio",image:{src:"assets/img/projects/p5.png",height:552,width:895},tag:["mockup"],delayAnimation:"100",modalDetails:[{project:"ISP Portfolio",client:"Personal",language:"Web",preview:"View Project",link:"https://github.com/ahmmikun/ISP-Portfolio-Website"}]},
  {id:6,type:"Salman AI",image:{src:"assets/img/projects/p6.png",height:552,width:895},tag:["mockup"],delayAnimation:"200",modalDetails:[{project:"Salman AI",client:"Personal",language:"AI",preview:"View Project",link:"#"}]}
];

const startStr = 'o=[';
const startIdx = txt.indexOf(startStr);
const endStr = '],n=a(';
const endIdx = txt.indexOf(endStr, startIdx);

if (startIdx !== -1 && endIdx !== -1) {
  const replacement = 'o=' + JSON.stringify(newProjects);
  const newTxt = txt.substring(0, startIdx) + replacement + txt.substring(endIdx + 1);
  fs.writeFileSync(file, newTxt, 'utf8');
  console.log('Script patched successfully');
} else {
  console.log('Array not found in JS chunk');
}

