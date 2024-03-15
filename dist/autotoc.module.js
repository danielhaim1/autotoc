/*!
 * @danielhaim/autotoc - v1.3.0 - 2024-03-15
 * git+https://github.com/danielhaim1/autotoc.git
 * Copyright (c) 2024 Daniel Haim, Licensed MIT
 */(()=>{"use strict";var t={497:(t,e,i)=>{var n;const o={Generate:i(352).Generate};t.exports&&(t.exports=o),void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n),"object"==typeof window&&(window.AutoToc=o)},352:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Generate=void 0;(n=i(864))&&n.__esModule;var n,o=i(896);e.Generate=class{constructor(t,e,i,n,o,r){this.contentSelector=t,this.navigationContainer=e,this.tocTitle=i,this.tocIcon=n,this.highlightOffset=o,this.headingDepthLimit=r,this.tocMap=new Map,this.tocTopMap=new Map,this.tocBottomMap=new Map,this.pendingExternalLinks=[]}validateParameters(){if("string"!=typeof this.contentSelector||!document.querySelector(this.contentSelector))throw new Error("Invalid contentSelector: Must be a valid CSS selector string for an existing element.");if("string"!=typeof this.navigationContainer||!document.querySelector(this.navigationContainer))throw new Error("Invalid navigationContainer: Must be a valid CSS selector string for an existing element.");if("string"!=typeof this.tocTitle)throw new Error("Invalid tocTitle: Must be a string.");if(null!==this.tocIcon&&"string"!=typeof this.tocIcon&&void 0!==this.tocIcon)throw new Error("Invalid tocIcon: Must be a string or null.");if("number"!=typeof this.highlightOffset||this.highlightOffset<0)throw new Error("Invalid highlightOffset: Must be a non-negative number.");if("number"!=typeof this.headingDepthLimit||this.headingDepthLimit<1||this.headingDepthLimit>6||!Number.isInteger(this.headingDepthLimit))throw new Error("Invalid headingDepthLimit: Must be an integer between 1 and 6.")}detachEventListeners(){window.removeEventListener("scroll",this.boundScrollListener)}generateUniqueId(t){return(new o.slugify).generate(t.textContent||"")}populateTocMap(){const t=document.querySelectorAll(`${this.createHeadingSelector()}`),e=new Map;t.forEach((t=>{const i=parseInt(t.tagName.substring(1),10),n=t.id||this.generateUniqueId(t),o=t.textContent.trim();this.tocMap.has(n)||e.set(n,{level:i,text:o})})),this.tocMap=new Map([...this.tocMap,...e]),this.renderTocHtml()}createTocList(t){const e=document.createElement("ol");return 0===t.size||t.forEach(((t,i)=>{const{level:n,text:o}=t,r=o.replace(/^#/,""),s=document.createElement("li");s.className=`toc-list--item level-${n}`,s.setAttribute("role","listitem");const a=document.createElement("a");a.href=`#${i}`,a.textContent=r,s.appendChild(a),e.appendChild(s)})),e}findFirstHeadingLevel(){for(let t=1;t<=this.headingDepthLimit;t++)if(document.querySelector(`${this.contentSelector} h${t}`))return t;return null}renderTocHtml(){let t=this.findFirstHeadingLevel()||1;const e=document.createElement("ol");e.className="toc-list",e.setAttribute("role","list");let i=[e];const n=this.createTocList(this.tocTopMap),o=this.createTocList(this.tocBottomMap);this.pendingExternalLinks.forEach((t=>{const e=document.createElement("li");e.className="toc-list--item level-level-0",e.setAttribute("role","listitem");const n=document.createElement("a");n.href=`#${t.id}`,n.textContent=t.text,e.appendChild(n),i[i.length-1].appendChild(e)}));const r=(t,e)=>{null!=t?t.appendChild(e):console.error("Attempted to append to a non-existent element.")};this.tocMap.forEach(((e,n)=>{const{level:o,text:r}=e,s=o-t;if(s>0)for(let t=0;t<s;t++){const t=document.createElement("ol");i[i.length-1].lastElementChild.appendChild(t),i.push(t)}else if(s<0)for(let t=0;t<-s;t++)i.pop();const a=r.replace(/^#/,""),l=document.createElement("li");l.className=`toc-list--item level-${o}`,l.setAttribute("role","listitem");const c=document.createElement("a");c.href=`#${n}`,c.textContent=a,l.appendChild(c),i[i.length-1].appendChild(l),t=o}));const s=document.querySelector(this.navigationContainer);s?(s.innerHTML=`<header><h2>${this.tocIcon}<span>${this.tocTitle}</span></h2></header>`,r(s,n),r(s,e),r(s,o),s.setAttribute("role","doc-toc"),s.addEventListener("click",(t=>{if("A"===t.target.tagName&&t.target.getAttribute("href")){t.preventDefault();const e=t.target.getAttribute("href").substring(1);this.scrollToElement(e)}}))):console.error("Navigation container not found")}attachAnchorsToHeadings(){document.querySelectorAll(`${this.createHeadingSelector()}`).forEach((t=>{if(!this.navigationContainer.includes(t.parentNode)){const e=this.generateUniqueId(t);t.id=e;const i=document.createElement("a");i.href=`#${e}`,i.textContent="#",t.insertBefore(i,t.firstChild)}}))}createHeadingSelector(){return Array.from({length:this.headingDepthLimit},((t,e)=>`${this.contentSelector} h${e+1}`)).join(", ")}scrollToElement(t){const e=document.getElementById(t);if(e){this.highlightOffset;const t=e.offsetTop-window.innerHeight/2+e.clientHeight/2;window.scrollTo({top:t,behavior:"smooth"})}}highlightActiveSection(){const t=this.highlightOffset,e=this.createHeadingSelector(),i=document.querySelectorAll(e);i.forEach(((e,n)=>{const o=e.getAttribute("id"),r=document.querySelector(`${this.navigationContainer} .toc-list--item a[href="#${o}"]`),s=i[n+1],a=window.pageYOffset>=e.offsetTop-t,l=!!s&&window.pageYOffset>=s.offsetTop-t;r&&(a&&!l?r.classList.add("active"):r.classList.remove("active"))}))}addContentToToc(t,e,i){this.tocMap.has(e)||(this.tocMap.set(e,{level:t,text:i}),this.renderTocHtml())}addExternalLinksToToc(t,e="bottom",i="level-0"){if(!Array.isArray(t))throw new Error("Invalid links: Must be an array of link objects.");"top"===e?t.forEach((t=>{if("object"!=typeof t||!t.id||!t.text)throw new Error("Invalid link format: Each link object must have 'id' and 'text' properties.");this.tocTopMap.has(t.id)||this.tocTopMap.set(t.id,{level:i,text:t.text})})):t.forEach((t=>{if("object"!=typeof t||!t.id||!t.text)throw new Error("Invalid link format: Each link object must have 'id' and 'text' properties.");this.tocBottomMap.has(t.id)||this.tocBottomMap.set(t.id,{level:i,text:t.text})})),this.renderTocHtml()}initializeScrollHighlighting(){this.boundHighlightActiveSection=this.highlightActiveSection.bind(this);const t=this.boundHighlightActiveSection;window.addEventListener("scroll",t)}removeEmptyLists(){const t=document.querySelector(this.navigationContainer);if(t){t.querySelectorAll("ol").forEach((t=>{0===t.children.length&&t.parentNode.removeChild(t)}))}}initialize(){this.validateParameters(),this.attachAnchorsToHeadings(),this.populateTocMap(),this.renderTocHtml(),this.initializeScrollHighlighting(),this.removeEmptyLists()}}},864:t=>{t.exports=require("@danielhaim/modulator")},896:t=>{t.exports=require("@danielhaim/slugify/src/index.js")}},e={};var i=function i(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,i),r.exports}(497);module.exports=i})();