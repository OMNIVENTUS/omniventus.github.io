(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{6737:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,8346,23)),Promise.resolve().then(a.t.bind(a,347,23)),Promise.resolve().then(a.bind(a,7689)),Promise.resolve().then(a.bind(a,3317)),Promise.resolve().then(a.bind(a,4370))},7689:(e,t,a)=>{"use strict";a.d(t,{Analytics:()=>l});var i=a(5155),s=a(6584);function l(){let e="2494a8d539fa41c7b6e69e4527c77313";return e?(0,i.jsx)(s.default,{defer:!0,src:"https://static.cloudflareinsights.com/beacon.min.js","data-cf-beacon":'{"token": "'.concat(e,'"}'),strategy:"afterInteractive"}):(console.warn("Cloudflare Analytics token is missing"),null)}},3317:(e,t,a)=>{"use strict";a.d(t,{ContactWidget:()=>m});var i=a(5155),s=a(2115),l=a(5683),r=a(9124),n=a(5565),o=a(2888),c=a(1536),d=a(9088),h=a(6046);let u=[{icon:(0,i.jsx)(o.Wjy,{size:24}),label:"LinkedIn",href:d.C.author.social.linkedin,color:"bg-[#0077B5]"},{icon:(0,i.jsx)(c.EcP,{size:24}),label:"WhatsApp",href:d.C.author.social.whatsapp,color:"bg-[#25D366]"},{icon:(0,i.jsx)(o.pHD,{size:24}),label:"Email",href:"mailto:".concat(d.C.author.social.email),color:"bg-blue-500"}];function m(){let e=(0,h.usePathname)(),[t,a]=(0,s.useState)(!1),[o,c]=(0,s.useState)(!1),[m,f]=(0,s.useState)(0),x=d.C.contactWidget.messages;return((0,s.useEffect)(()=>{a(!1),c(!1),f(0);let e=setTimeout(()=>{a(!0)},d.C.contactWidget.displayDelay);return()=>clearTimeout(e)},[e]),(0,s.useEffect)(()=>{if(!t)return;let e=setInterval(()=>{f(e=>(e+1)%x.length)},d.C.contactWidget.messageRotationInterval);return()=>clearInterval(e)},[t,x.length]),t)?(0,i.jsxs)("div",{className:"fixed bottom-10 right-4 z-50",children:[(0,i.jsx)(l.N,{children:o&&(0,i.jsx)(r.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{duration:.3},className:"mb-4 flex flex-col gap-2 items-end",children:u.map(e=>(0,i.jsxs)(r.P.a,{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-4 py-2 rounded-full text-white ".concat(e.color," hover:opacity-90 transition-opacity"),whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.icon,(0,i.jsx)("span",{className:"text-sm font-medium",children:e.label})]},e.label))})}),(0,i.jsxs)(r.P.div,{initial:{y:100},animate:{y:0},transition:{duration:.5},className:"flex items-end gap-4",children:[(0,i.jsx)(l.N,{mode:"wait",children:(0,i.jsx)(r.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},className:"bg-white text-gray-800 px-4 py-2 rounded-t-xl rounded-bl-xl shadow-lg",children:(0,i.jsx)("p",{className:"text-sm font-medium whitespace-nowrap",children:x[m]})},m)}),(0,i.jsx)(r.P.button,{onClick:()=>c(!o),className:"relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg hover:scale-105 transition-transform",whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,i.jsx)(n.default,{src:d.C.author.avatar,alt:"Contact ".concat(d.C.author.name),fill:!0,className:"object-cover"})})]})]}):null}},4370:(e,t,a)=>{"use strict";a.d(t,{Footer:()=>r});var i=a(5155),s=a(9124),l=a(9088);function r(){return(0,i.jsx)("footer",{className:"py-4 text-center text-sm text-gray-400",children:(0,i.jsxs)("p",{children:["Made by"," ",(0,i.jsx)(s.P.a,{href:l.C.author.social.linkedin,target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-300 transition-colors",whileHover:{scale:1.05},whileTap:{scale:.95},children:l.C.author.name})]})})}},347:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[838,844,711,660,359,88,441,517,358],()=>t(6737)),_N_E=e.O()}]);