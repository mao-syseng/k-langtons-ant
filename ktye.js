function ge(x){return document.getElementById(x)}
function ce(x){return document.createElement(x)}
function pd(e){if(e){e.preventDefault();e.stopPropagation()}}
function rm(p){while(p.firstChild)p.removeChild(p.firstChild);return p}
const td_=new TextDecoder("utf-8"),su=x=>td_.decode(x)
const te_=new TextEncoder("utf-8"),us=x=>te_.encode(x)
function s64u(u){let c=function(x){let r='';for(let i=0;i<x.length;i++)r+=String.fromCharCode(x[i]);return r};return btoa(c(u))}
function u64s(s){let c=function(x){const r=new Uint8Array(x.length);for(let i=0;i<x.length;i++)r[i]=x.charCodeAt(i);return r};return c(atob(s))}

