(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[825],{3731:(e,s,r)=>{Promise.resolve().then(r.bind(r,5827))},5827:(e,s,r)=>{"use strict";r.d(s,{SupportContent:()=>j});var a=r(5155),t=r(9124),l=r(8173),n=r.n(l),i=r(2888),o=r(1536),c=r(4814),d=r(2115);function m(e){window.cfAnalytics&&window.cfAnalytics.pushEvent(e)}let u={form:{submitted:e=>m({type:"event",category:"Form",action:"Submitted",label:e}),error:(e,s)=>m({type:"event",category:"Form",action:"Error",label:"".concat(e,": ").concat(s)})},navigation:{pageView:e=>m({type:"pageview",category:"Navigation",action:"Page View",label:e}),projectView:e=>m({type:"event",category:"Navigation",action:"Project View",label:e})}};var g=r(2818);let x={mail:i.pHD,twitter:i.TC4,github:i.BR8,phone:i.QFc,whatsapp:o.EcP,address:i.HzC},h={operational:"bg-green-500",partial_outage:"bg-yellow-500",major_outage:"bg-red-500",maintenance:"bg-blue-500"},p=g.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL,b=g.env.NEXT_PUBLIC_FORM_SECRET_KEY;function j(e){let{supportConfig:s,projectId:r}=e,[l,o]=(0,d.useState)(null),[m,g]=(0,d.useState)({name:"",email:"",subject:"",message:""}),[j,f]=(0,d.useState)(!1),[y,N]=(0,d.useState)(null),v=Array.from(new Set(s.faq.map(e=>e.category||null))),w=l?s.faq.filter(e=>e.category===l):s.faq,S=async e=>{e.preventDefault(),f(!0),N(null);let s=localStorage.getItem("lastSubmission");if(s&&Date.now()-parseInt(s)<3e4){let e="Please wait 30 seconds between submissions";N({success:!1,message:e}),u.form.error("support",e);return}if(!m.email.includes("@")){let e="Please enter a valid email address";N({success:!1,message:e}),u.form.error("support",e);return}if(!p){let e="Form submission is currently unavailable";N({success:!1,message:e}),u.form.error("support",e);return}try{let e=await fetch(p,{redirect:"follow",method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({...m,secret:b,project:r})}),s=await e.json();if("success"===s.status)N({success:!0,message:"Message sent successfully!"}),g({name:"",email:"",subject:"",message:""}),localStorage.setItem("lastSubmission",Date.now().toString()),u.form.submitted("support ".concat(r));else throw Error("Submission failed")}catch(s){console.error("Form submission error:",s);let e=s instanceof Error?s.message:"Error sending message. Please try again later.";N({success:!1,message:e}),u.form.error("support",e)}finally{f(!1)}};return(0,d.useEffect)(()=>{u.navigation.pageView("/projects/".concat(r,"/support"))},[r]),(0,a.jsxs)("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white",children:[(0,a.jsx)("header",{className:"sticky top-0 z-50 backdrop-blur-lg border-b border-gray-800",children:(0,a.jsx)("div",{className:"container mx-auto px-4 py-4 flex items-center justify-between",children:(0,a.jsxs)(n(),{href:"/projects/".concat(r),className:"flex items-center gap-3 group",children:[(0,a.jsx)(t.P.div,{whileHover:{x:-3},className:"text-gray-400 group-hover:text-white",children:(0,a.jsx)(i.kRp,{size:20})}),(0,a.jsx)(c.g,{size:32})]})})}),(0,a.jsx)("main",{className:"container mx-auto px-4 py-8 max-w-4xl",children:(0,a.jsxs)(t.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"space-y-12",children:[(0,a.jsxs)("section",{className:"text-center",children:[(0,a.jsxs)("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold mb-4",children:[s.appName," Support"]}),(0,a.jsx)("p",{className:"text-gray-400 text-lg mb-8",children:"We're here to help you with any questions or issues you might have."}),(0,a.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,a.jsx)("span",{className:"w-3 h-3 rounded-full ".concat(h[s.status.status])}),(0,a.jsx)("span",{className:"text-sm",children:s.status.message})]})]}),(0,a.jsxs)("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,a.jsxs)("a",{href:s.links.appStore,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors",children:[(0,a.jsx)("span",{children:"App Store"}),(0,a.jsx)(i.HaR,{})]}),(0,a.jsxs)("a",{href:s.links.playStore,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors",children:[(0,a.jsx)("span",{children:"Play Store"}),(0,a.jsx)(i.HaR,{})]}),(0,a.jsxs)(n(),{href:s.links.privacyPolicy,className:"flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors",children:[(0,a.jsx)("span",{children:"Privacy Policy"}),(0,a.jsx)(i.HaR,{})]}),(0,a.jsxs)(n(),{href:s.links.termsOfService,className:"flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors",children:[(0,a.jsx)("span",{children:"Terms of Service"}),(0,a.jsx)(i.HaR,{})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-6",children:"Contact Information"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,a.jsxs)("div",{className:"bg-gray-800/50 p-6 rounded-lg",children:[(0,a.jsx)("h3",{className:"font-semibold mb-4",children:"Legal Address"}),(0,a.jsxs)("address",{className:"not-italic space-y-2 text-gray-300",children:[(0,a.jsx)("p",{children:s.legalAddress.company}),(0,a.jsx)("p",{children:s.legalAddress.street}),(0,a.jsxs)("p",{children:[s.legalAddress.city,", ",s.legalAddress.postalCode]}),(0,a.jsx)("p",{children:s.legalAddress.country})]})]}),(0,a.jsxs)("div",{className:"bg-gray-800/50 p-6 rounded-lg",children:[(0,a.jsx)("h3",{className:"font-semibold mb-4",children:"Support Hours"}),(0,a.jsxs)("div",{className:"space-y-2 text-gray-300",children:[(0,a.jsx)("p",{children:s.supportHours.days}),(0,a.jsx)("p",{children:s.supportHours.hours}),(0,a.jsxs)("p",{children:["Timezone: ",s.supportHours.timezone]}),(0,a.jsxs)("p",{children:["Response Time: ",s.responseTime]})]})]})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-6",children:"Contact Methods"}),(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:s.contacts.map((e,s)=>{let r=e.icon?x[e.icon]:i.HaR;return(0,a.jsxs)("a",{href:e.value,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors",children:[(0,a.jsx)(r,{size:20}),(0,a.jsx)("span",{children:e.label})]},s)})})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-6",children:"Frequently Asked Questions"}),v.length>1&&(0,a.jsxs)("div",{className:"flex gap-2 mb-6 overflow-x-auto pb-2",children:[(0,a.jsx)("button",{onClick:()=>o(null),className:"px-4 py-2 rounded-full whitespace-nowrap ".concat(null===l?"bg-blue-500 text-white":"bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"),children:"All"}),v.filter(Boolean).map(e=>(0,a.jsx)("button",{onClick:()=>o(e),className:"px-4 py-2 rounded-full whitespace-nowrap ".concat(l===e?"bg-blue-500 text-white":"bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"),children:e},e))]}),(0,a.jsx)("div",{className:"space-y-4",children:w.map((e,s)=>(0,a.jsxs)("details",{className:"group bg-gray-800/50 rounded-lg",children:[(0,a.jsxs)("summary",{className:"flex justify-between items-center cursor-pointer p-4",children:[(0,a.jsx)("span",{className:"font-medium",children:e.question}),(0,a.jsx)("span",{className:"ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform",children:"▼"})]}),(0,a.jsx)("div",{className:"px-4 pb-4 text-gray-300",children:e.answer})]},s))})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-6",children:"Contact Form"}),(0,a.jsxs)("form",{onSubmit:S,className:"space-y-4 gform",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium mb-2",children:"Name"}),(0,a.jsx)("input",{type:"text",id:"name",value:m.name,onChange:e=>g({...m,name:e.target.value}),className:"w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500",required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium mb-2",children:"Email"}),(0,a.jsx)("input",{type:"email",id:"email",value:m.email,onChange:e=>g({...m,email:e.target.value}),className:"w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500",required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"subject",className:"block text-sm font-medium mb-2",children:"Subject"}),(0,a.jsx)("input",{type:"text",id:"subject",value:m.subject,onChange:e=>g({...m,subject:e.target.value}),className:"w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500",required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium mb-2",children:"Message"}),(0,a.jsx)("textarea",{id:"message",value:m.message,onChange:e=>g({...m,message:e.target.value}),rows:5,className:"w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500",required:!0})]}),(0,a.jsxs)("button",{type:"submit",disabled:j,className:"w-full px-6 py-3 rounded-lg transition-colors relative ".concat(j?"bg-blue-500/50 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600"),children:[(0,a.jsx)("span",{className:"inline-flex items-center gap-2 ".concat(j?"invisible":""),children:"Send Message"}),j&&(0,a.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,a.jsx)("div",{className:"w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"})})]})]}),y&&(0,a.jsx)("div",{className:"p-4 rounded-lg ".concat(y.success?"bg-green-500/20 text-green-400":"bg-red-500/20 text-red-400"),children:y.message})]}),s.sbom&&(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-6",children:"Software Bill of Materials (SBOM)"}),(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:"w-full",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"border-b border-gray-700",children:[(0,a.jsx)("th",{className:"text-left py-3 px-4",children:"Package"}),(0,a.jsx)("th",{className:"text-left py-3 px-4",children:"Version"}),(0,a.jsx)("th",{className:"text-left py-3 px-4",children:"License"}),(0,a.jsx)("th",{className:"text-left py-3 px-4",children:"Link"})]})}),(0,a.jsx)("tbody",{children:s.sbom.map((e,s)=>(0,a.jsxs)("tr",{className:"border-b border-gray-800",children:[(0,a.jsx)("td",{className:"py-3 px-4",children:e.name}),(0,a.jsx)("td",{className:"py-3 px-4",children:e.version}),(0,a.jsx)("td",{className:"py-3 px-4",children:e.license}),(0,a.jsx)("td",{className:"py-3 px-4",children:e.url&&(0,a.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-300",children:"View"})})]},s))})]})})]})]})})]})}},4814:(e,s,r)=>{"use strict";r.d(s,{g:()=>n});var a=r(5155),t=r(9124),l=r(5565);function n(e){let{size:s=40,className:r="",animated:n=!0}=e;return n?(0,a.jsx)(t.P.div,{className:"relative ".concat(r),style:{width:s,height:s},whileHover:{scale:1.05},children:(0,a.jsx)(t.P.div,{animate:{rotate:360},transition:{duration:20,repeat:1/0,ease:"linear"},children:(0,a.jsx)(l.default,{src:"/brand/logo.svg",alt:"Omniventus Logo",width:s,height:s,className:"w-full h-full",priority:!0})})}):(0,a.jsx)("div",{className:"relative ".concat(r),style:{width:s,height:s},children:(0,a.jsx)(l.default,{src:"/brand/logo.svg",alt:"Omniventus Logo",width:s,height:s,className:"w-full h-full",priority:!0})})}}},e=>{var s=s=>e(e.s=s);e.O(0,[844,711,660,173,441,517,358],()=>s(3731)),_N_E=e.O()}]);