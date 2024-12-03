/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[5],{465:function(Aa,va,r){r.r(va);var pa=r(0),ka=r(487),la=r(488),fa;(function(ea){ea[ea.EXTERNAL_XFDF_NOT_REQUESTED=0]="EXTERNAL_XFDF_NOT_REQUESTED";ea[ea.EXTERNAL_XFDF_NOT_AVAILABLE=1]="EXTERNAL_XFDF_NOT_AVAILABLE";ea[ea.EXTERNAL_XFDF_AVAILABLE=2]="EXTERNAL_XFDF_AVAILABLE"})(fa||(fa={}));Aa=function(){function ea(aa){this.aa=aa;this.state=fa.EXTERNAL_XFDF_NOT_REQUESTED}ea.prototype.gea=function(){var aa=this;return function(x,
y,h){return Object(pa.b)(aa,void 0,void 0,function(){var e,b,a,f,n,ba,w,da=this,ja;return Object(pa.d)(this,function(z){switch(z.label){case 0:if(this.state!==fa.EXTERNAL_XFDF_NOT_REQUESTED)return[3,2];e=this.aa.getDocument().Qs();return[4,this.tca(e)];case 1:b=z.da(),a=this.n8(b),this.YI=null!==(ja=null===a||void 0===a?void 0:a.parse())&&void 0!==ja?ja:null,this.state=null===this.YI?fa.EXTERNAL_XFDF_NOT_AVAILABLE:fa.EXTERNAL_XFDF_AVAILABLE,z.label=2;case 2:if(this.state===fa.EXTERNAL_XFDF_NOT_AVAILABLE)return h(x),
[2];f=new DOMParser;n=f.parseFromString(x,"text/xml");y.forEach(function(ca){da.merge(n,da.YI,ca-1)});ba=new XMLSerializer;w=ba.serializeToString(n);h(w);return[2]}})})}};ea.prototype.UM=function(aa){this.tca=aa};ea.prototype.ue=function(){this.YI=void 0;this.state=fa.EXTERNAL_XFDF_NOT_REQUESTED};ea.prototype.n8=function(aa){return aa?Array.isArray(aa)?new ka.a(aa):"string"!==typeof aa?null:(new DOMParser).parseFromString(aa,"text/xml").querySelector("xfdf > add")?new ka.a(aa):new la.a(aa):null};
ea.prototype.merge=function(aa,x,y){var h=this;0===y&&(this.zga(aa,x.zp),this.Bga(aa,x.EI));var e=x.ca[y];e&&(this.Cga(aa,e.yn),this.Ega(aa,e.n0,x.Aw),this.Dga(aa,e.page,y),this.Aga(aa,e.QS));e=this.aa.Qb();if(y===e-1){var b=x.Aw;Object.keys(b).forEach(function(a){b[a].mK||h.RW(aa,a,b[a])})}};ea.prototype.zga=function(aa,x){null!==x&&(aa=this.Mv(aa),this.Qq(aa,"calculation-order",x))};ea.prototype.Bga=function(aa,x){null!==x&&(aa=this.Mv(aa),this.Qq(aa,"document-actions",x))};ea.prototype.Cga=function(aa,
x){var y=this,h=this.Lv(aa.querySelector("xfdf"),"annots");Object.keys(x).forEach(function(e){y.Qq(h,'[name="'+e+'"]',x[e])})};ea.prototype.Ega=function(aa,x,y){var h=this;if(0!==x.length){var e=this.Mv(aa);x.forEach(function(b){var a=b.getAttribute("field"),f=y[a];f&&(h.RW(aa,a,f),h.Qq(e,"null",b))})}};ea.prototype.RW=function(aa,x,y){var h=this.Mv(aa);null!==y.tC&&this.Qq(h,'ffield [name="'+x+'"]',y.tC);aa=this.Lv(aa.querySelector("xfdf"),"fields");x=x.split(".");this.bM(aa,x,0,y.value);y.mK=!0};
ea.prototype.Dga=function(aa,x,y){null!==x&&(aa=this.Mv(aa),aa=this.Lv(aa,"pages"),this.Qq(aa,'[number="'+(y+1)+'"]',x))};ea.prototype.Aga=function(aa,x){Object.keys(x).forEach(function(y){(y=aa.querySelector('annots [name="'+y+'"]'))&&y.parentElement.removeChild(y)})};ea.prototype.bM=function(aa,x,y,h){if(y===x.length)x=document.createElementNS("","value"),x.textContent=h,this.Qq(aa,"value",x);else{var e=x[y];this.Lv(aa,'[name="'+e+'"]',"field").setAttribute("name",e);aa=aa.querySelectorAll('[name="'+
e+'"]');1===aa.length?this.bM(aa[0],x,y+1,h):(e=this.bba(aa),this.bM(y===x.length-1?e:this.Fna(aa,e),x,y+1,h))}};ea.prototype.bba=function(aa){for(var x=null,y=0;y<aa.length;y++){var h=aa[y];if(0===h.childElementCount||1===h.childElementCount&&"value"===h.children[0].tagName){x=h;break}}return x};ea.prototype.Fna=function(aa,x){for(var y=0;y<aa.length;y++)if(aa[y]!==x)return aa[y];return null};ea.prototype.Qq=function(aa,x,y){x=aa.querySelector(x);null!==x&&aa.removeChild(x);aa.appendChild(y)};ea.prototype.Mv=
function(aa){var x=aa.querySelector("pdf-info");if(null!==x)return x;x=this.Lv(aa.querySelector("xfdf"),"pdf-info");x.setAttribute("xmlns","http://www.pdftron.com/pdfinfo");x.setAttribute("version","2");x.setAttribute("import-version","4");return x};ea.prototype.Lv=function(aa,x,y){var h=aa.querySelector(x);if(null!==h)return h;h=document.createElementNS("",y||x);aa.appendChild(h);return h};return ea}();va["default"]=Aa},476:function(Aa,va){Aa=function(){function r(){}r.prototype.XA=function(pa){var ka=
{zp:null,EI:null,Aw:{},ca:{}};pa=(new DOMParser).parseFromString(pa,"text/xml");ka.zp=pa.querySelector("pdf-info calculation-order");ka.EI=pa.querySelector("pdf-info document-actions");ka.Aw=this.xha(pa);ka.ca=this.Jha(pa);return ka};r.prototype.xha=function(pa){var ka=pa.querySelector("fields");pa=pa.querySelectorAll("pdf-info > ffield");if(null===ka&&null===pa)return{};var la={};this.D5(la,ka);this.B5(la,pa);return la};r.prototype.D5=function(pa,ka){if(null!==ka&&ka.children){for(var la=[],fa=0;fa<
ka.children.length;fa++){var ea=ka.children[fa];la.push({name:ea.getAttribute("name"),element:ea})}for(;0!==la.length;)for(ka=la.shift(),fa=0;fa<ka.element.children.length;fa++)ea=ka.element.children[fa],"value"===ea.tagName?pa[ka.name]={value:ea.textContent,tC:null,mK:!1}:ea.children&&la.push({name:ka.name+"."+ea.getAttribute("name"),element:ea})}};r.prototype.B5=function(pa,ka){ka.forEach(function(la){var fa=la.getAttribute("name");pa[fa]?pa[fa].tC=la:pa[fa]={value:null,tC:la,mK:!1}})};r.prototype.Jha=
function(pa){var ka=this,la={};pa.querySelectorAll("pdf-info widget").forEach(function(fa){var ea=parseInt(fa.getAttribute("page"),10)-1;ka.vD(la,ea);la[ea].n0.push(fa)});pa.querySelectorAll("pdf-info page").forEach(function(fa){var ea=parseInt(fa.getAttribute("number"),10)-1;ka.vD(la,ea);la[ea].page=fa});this.CU(pa).forEach(function(fa){var ea=parseInt(fa.getAttribute("page"),10),aa=fa.getAttribute("name");ka.vD(la,ea);la[ea].yn[aa]=fa});this.nU(pa).forEach(function(fa){var ea=parseInt(fa.getAttribute("page"),
10);fa=fa.textContent;ka.vD(la,ea);la[ea].QS[fa]=!0});return la};r.prototype.vD=function(pa,ka){pa[ka]||(pa[ka]={yn:{},QS:{},n0:[],page:null})};return r}();va.a=Aa},487:function(Aa,va,r){var pa=r(0),ka=r(1);r.n(ka);Aa=function(la){function fa(ea){var aa=la.call(this)||this;aa.Naa=Array.isArray(ea)?ea:[ea];return aa}Object(pa.c)(fa,la);fa.prototype.parse=function(){var ea=this,aa={zp:null,EI:null,Aw:{},ca:{}};this.Naa.forEach(function(x){aa=Object(ka.merge)(aa,ea.XA(x))});return aa};fa.prototype.CU=
function(ea){var aa=[];ea.querySelectorAll("add > *").forEach(function(x){aa.push(x)});ea.querySelectorAll("modify > *").forEach(function(x){aa.push(x)});return aa};fa.prototype.nU=function(ea){return ea.querySelectorAll("delete > *")};return fa}(r(476).a);va.a=Aa},488:function(Aa,va,r){var pa=r(0);Aa=function(ka){function la(fa){var ea=ka.call(this)||this;ea.Oaa=fa;return ea}Object(pa.c)(la,ka);la.prototype.parse=function(){return this.XA(this.Oaa)};la.prototype.CU=function(fa){return fa.querySelectorAll("annots > *")};
la.prototype.nU=function(){return[]};return la}(r(476).a);va.a=Aa}}]);}).call(this || window)