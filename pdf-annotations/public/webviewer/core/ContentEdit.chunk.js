/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[4],{495:function(Ba,wa,r){var oa=r(0);Ba=r(88);var na=r(50);r=function(ma){function fa(){return null!==ma&&ma.apply(this,arguments)||this}Object(oa.c)(fa,ma);fa.prototype.testSelection=function(ea,aa,w){return na.a.Hl(ea,aa,w)};return fa}(Ba.a);wa.a=r},87:function(Ba,wa,r){function oa(qb){return Object(Ha.b)(void 0,void 0,void 0,function(){var nb,xa,Ka,Xa,ab,mb,sb,cb,rb,ub,xb,Gb,kb,tb,Db;return Object(Ha.d)(this,function(Ib){switch(Ib.label){case 0:return nb=
qb.yb,xa=qb.ZE,Ka=qb.$E,Xa=qb.hL,ab=qb.zha,mb=qb.kha,sb=eb.getDocument(),cb=[1],[4,Object(za.c)(xa,{extension:"pdf"})];case 1:return rb=Ib.ca(),ub=eb.la(),kb=(Gb=Ra.a).gka,[4,rb.NC()];case 2:return xb=kb.apply(Gb,[Ib.ca().xfdfString,nb]),tb=!0,[4,sb.Rf(rb,cb,nb,tb)];case 3:return Ib.ca(),[4,sb.Fg([nb+1],tb)];case 4:return Ib.ca(),Db=ub.nb().filter(function(Sb){return Sb.CL()&&Sb.PageNumber===nb}),ub.Hf(Db,{force:!0,source:"contentEditTool"}),[4,ub.iL(xb)];case 5:return Ib.ca(),Ia||(eb.getDocument().aN(),
eb.$M(nb),eb.re()),aa(nb),mb||ab||pa(nb,Ka,Xa,ab),[2]}})})}function na(qb){if(qb)return ma(qb.contents);Object(Da.g)("Unable to extract document content")}function ma(qb){qb=(new DOMParser).parseFromString(qb,"text/html").documentElement.querySelector("body");qb.querySelectorAll("p").forEach(function(nb){nb.querySelectorAll("span").forEach(function(Xa){var ab=Xa.getAttribute("style");ab=fa(ab,Xa.innerHTML);Xa.innerHTML=ab});var xa=nb.getAttribute("style"),Ka=nb.innerHTML.replaceAll("<br>","");nb.innerHTML=
fa(xa,Ka)});return qb.innerHTML.trim()}function fa(qb,nb){if(null===qb||void 0===qb?0:qb.includes("bold"))nb="<strong>"+nb+"</strong>";if(null===qb||void 0===qb?0:qb.includes("italic"))nb="<em>"+nb+"</em>";if((null===qb||void 0===qb?0:qb.includes("underline:1;"))||(null===qb||void 0===qb?0:qb.includes("text-decoration: underline")))nb="<u>"+nb+"</u>";return nb}function ea(qb){if(["STRONG","EM","U"].includes(qb.tagName)&&null!==qb.getAttribute("style")){var nb=document.createElement("span"),xa=qb.style.color;
xa=ca(xa);nb.setAttribute("style","color:"+xa);qb.removeAttribute("style");nb.innerHTML=qb.innerHTML;qb.innerHTML="";qb.appendChild(nb)}else"SPAN"===qb.tagName&&null!==qb.getAttribute("style")?(xa=qb.style.color,xa=ca(xa),qb.setAttribute("style","color:"+xa)):"A"===qb.tagName&&qb.removeAttribute("style")}function aa(qb){var nb=eb.la(),xa=nb.nb().filter(function(Ka){return Ka.Re()&&Ka.PageNumber===qb});nb.Hf(xa,{force:!0,source:"contentEditTool"})}function w(qb,nb){nb.forEach(function(xa){Ua[qb]||
(Ua[qb]=[]);Ua[qb].find(function(Ka){return Ka.id===xa.id})||Ua[qb].push(xa)})}function x(qb,nb){nb.forEach(function(xa){Pa[qb]||(Pa[qb]=[]);Pa[qb].find(function(Ka){return Ka.id===xa.id})||Pa[qb].push(xa)})}function h(qb,nb,xa,Ka){return Object(Ha.b)(void 0,void 0,void 0,function(){var Xa,ab,mb,sb,cb,rb,ub,xb,Gb,kb,tb,Db,Ib,Sb,Qb,Zb,ya,dc;return Object(Ha.d)(this,function(kc){switch(kc.label){case 0:if(!qb)return[2];Xa=nb.replaceAll("<p><br></p>","");ab=e(Xa);ab=ab.replace(/<span style="color: var\(--text-color\);">(.*?)<\/span>/g,
"$1");ab=ab.replace(/<span class="ql-cursor">(.*?)<\/span>/g,"");mb=qb.gf.id;sb=qb.PageNumber;cb=bb[sb];rb=cb.galleys.find(function(ad){return ad.id===mb});ub=ma(rb.contents);xb=ia(sb,cb,ub,ab,mb);if(""===xb)return[3,2];Gb=new TextEncoder;kb=Gb.encode(xb);tb=kb.buffer;Db=Object(La.c)()||"https://www.pdftron.com/webfonts/v2/";Ib=eb.getDocument();return[4,Ib.be([sb],void 0,!0)];case 1:return Sb=kc.ca(),Gb=new TextEncoder,Qb=Gb.encode(""),Zb=Qb.buffer,jb.postMessage({cmd:"importText",pdfFile:Sb,pageNumber:sb,
webFontURL:Db,galleyId:mb,importData:tb,tableData:Zb,isSearchReplace:xa,callbackMapId:Ka},[tb,Zb]),ya={},rb&&(dc=rb.galleyBox,ya={top:dc.top,left:dc.left,bottom:dc.bottom,right:dc.right}),Object(Sa.w)(ub,ab,ya),[3,3];case 2:Object(Da.g)("Unable to generate import XML"),kc.label=3;case 3:return[2]}})})}function e(qb){var nb=new DOMParser,xa=nb.parseFromString(qb,"text/xml");xa.querySelector("parsererror")&&(xa=nb.parseFromString("<Root>"+qb+"</Root>","text/xml"));xa.querySelectorAll("a").forEach(function(Ka){var Xa=
Ka.childNodes[0];Array.from(Ka.querySelectorAll("*")).find(function(ab){return"u"===ab.tagName.toLowerCase()})||(Ka=document.createElement("u"),Xa.after(Ka),Ka.appendChild(Xa))});return(new XMLSerializer).serializeToString(xa)}function a(qb,nb,xa){return Object(Ha.b)(void 0,void 0,void 0,function(){var Ka,Xa,ab,mb;return Object(Ha.d)(this,function(sb){switch(sb.label){case 0:return aa(nb),Pa[nb]=[],Ua[nb]=[],[4,qb.be([nb],void 0,!0)];case 1:return Ka=sb.ca(),Xa=new TextEncoder,ab=Xa.encode(""),mb=
ab.buffer,jb.postMessage({cmd:"exportFile",pageNumber:nb,performExport:xa,pdfFile:Ka,tableData:mb},[Ka,mb]),[2]}})})}function b(qb){return Object(Ha.b)(void 0,void 0,void 0,function(){return Object(Ha.d)(this,function(){hb||(eb=qb,hb=new Promise(function(nb,xa){var Ka=window.Core.ContentEdit.getWorkerPath(),Xa=window.Core.ContentEdit.getResourcePath();jb=new Worker(Ka+"InfixServerModule.js");jb.onmessage=function(ab){ja(ab,nb,xa)};jb.postMessage({cmd:"isReady",resourcePath:Xa})}));return[2,hb]})})}
function f(qb,nb,xa,Ka){this.top=qb;this.left=nb;this.bottom=xa;this.right=Ka;this.topVal=function(){return Math.round(this.top)};this.bottomVal=function(){return Math.round(this.bottom)};this.leftVal=function(){return Math.round(this.left)};this.rightVal=function(){return Math.round(this.right)};this.height=function(){return Math.round(Math.abs(this.top-this.bottom))};this.width=function(){return Math.round(this.right-this.left)};this.US=function(Xa){return this.topVal()!==Xa.topVal()||this.leftVal()!==
Xa.leftVal()||this.bottomVal()!==Xa.bottomVal()||this.rightVal()!==Xa.rightVal()}}function n(qb,nb,xa,Ka,Xa){this.id=qb;this.pagenum=nb;this.galleysContents=xa;this.contents=Ka;this.galleyBox=Xa;Object(Sa.v)(Pa)}function z(qb,nb,xa,Ka){this.id=nb;this.type=qb;this.bbox=xa;this.pagenum=Ka}function y(qb,nb,xa,Ka,Xa){this.id=qb;this.pagecount=nb;this.pageBBox=xa;this.galleys=Ka;this.objects=Xa}function da(qb,nb){this.family=qb;this.variations=nb}function ia(qb,nb,xa,Ka,Xa){var ab=[],mb=[];(new DOMParser).parseFromString(Ka,
"text/html").documentElement.querySelectorAll("p").forEach(function(xb,Gb){ab[Gb]=xb.innerHTML;mb[Gb]={fontSize:xb.style.fontSize,fontFamily:xb.style.fontFamily,color:ca(xb.style.color)}});xa=(new DOMParser).parseFromString(xa,"text/html");var sb=null;xa.documentElement.querySelectorAll("p").forEach(function(xb,Gb){if(Gb<ab.length){var kb=(new DOMParser).parseFromString(ab[Gb],"text/html").documentElement.querySelector("body");kb.childNodes.forEach(function(Db){ea(Db)});xb.innerHTML=kb.innerHTML;
sb=xb.getAttribute("style");kb=mb[Gb].fontSize?mb[Gb].fontSize:xb.style.fontSize;var tb=mb[Gb].fontFamily?mb[Gb].fontFamily.replace(/\s+/g,"").replace(/['"]+/g,""):xb.style.fontFamily;Gb=mb[Gb].color?mb[Gb].color:null;sb=sb.replace(/(font:.*?;)/i,"font:normal normal "+kb+" "+tb+";");sb=sb.replace("Italic","");sb=sb.replace("underline:1;","underline:0;");sb=sb.replace("text-decoration: underline;","text-decoration: none;");Gb&&(sb=sb.replace(/(color:.*?;)/i,"color:"+Gb+";"));xb.setAttribute("style",
sb)}else xb.remove()});for(Ka=xa.documentElement.querySelectorAll("p").length;Ka<ab.length;Ka++){var cb=document.createElement("p");cb.setAttribute("id","0");var rb=(new DOMParser).parseFromString(ab[Ka],"text/html").documentElement.querySelector("body");rb.childNodes.forEach(function(xb){ea(xb)});cb.innerHTML=rb.innerHTML;null!=sb&&cb.setAttribute("style",sb);xa.documentElement.querySelector("body").appendChild(cb)}xa=xa.documentElement.querySelector("body").innerHTML;var ub="";Pa[qb].forEach(function(xb){xb.id===
Xa&&(ub=xb)});if(""===ub)return"";nb="<DOC id='"+nb.id+"' pagecount='"+nb.pagecount+"'>";nb=nb+("<STORY galley_ids='"+Xa+"' pagenum='"+qb+"'><galleys>")+(ub.galleysContents+"</galleys>");ub.contents=xa;nb=nb+xa+"\n</STORY>";return nb+="</DOC>"}function ca(qb){return qb.startsWith("rgb(")?"#"+qb.replace(/^[^\d]+/,"").replace(/[^\d]+$/,"").split(",").map(function(nb){return("00"+parseInt(nb,10).toString(16)).slice(-2)}).join(""):qb}function ba(qb,nb,xa,Ka){var Xa=[],ab=eb.getDocument(),mb=null;nb.forEach(function(sb){if(sb instanceof
z){var cb=ab.qo(qb,sb.bbox.leftVal(),sb.bbox.topVal());var rb=cb.x;var ub=cb.y;var xb=ab.qo(qb,sb.bbox.rightVal(),sb.bbox.bottomVal());cb=xb.x;xb=xb.y}else if(sb instanceof n)cb=ab.qo(qb,sb.galleyBox.leftVal(),sb.galleyBox.topVal()),rb=cb.x,ub=cb.y,xb=ab.qo(qb,sb.galleyBox.rightVal(),sb.galleyBox.bottomVal()),cb=xb.x,xb=xb.y;else return;var Gb=new window.Core.Annotations.RectangleAnnotation,kb=Fa.a.OBJECT;sb instanceof n&&(kb=Fa.a.TEXT);Gb.Wma(sb,kb);Gb.PageNumber=sb.pagenum;Gb.X=rb;Gb.Y=ub;Gb.Width=
cb-rb;Gb.Height=xb-ub;Gb.StrokeColor=new Ja.a("#3183C8");Gb.FillColor=new Ja.a(255,255,255,.01);Gb.Style="dash";Gb.Dashes="4,3";if(Ya||Ka)Gb.NoView=!0,Gb.Listable=!1;Gb.Gw();Gb.selectionModel=Na.a;Xa.push(Gb);"undefined"!==typeof xa&&xa===sb.id&&(mb=Gb)});nb=eb.la();nb.$g(Xa);!mb||Ya||Ka||nb.Yf(mb);nb.le(Xa)}function ja(qb,nb,xa){return Object(Ha.b)(this,void 0,void 0,function(){var Ka,Xa,ab,mb,sb,cb,rb,ub,xb,Gb;return Object(Ha.d)(this,function(kb){switch(kb.label){case 0:Ka=qb.data;ab=Ka.cmd;switch(ab){case "isReady":return[3,
1];case "initialiseInfixServer":return[3,3];case "loadAvailableFonts":return[3,4];case "exportFile":return[3,5];case "insertNewTextBox":return[3,6];case "importText":return[3,7];case "transformObject":return[3,7];case "alignParagraph":return[3,7];case "deleteObject":return[3,8];case "insertImage":return[3,9]}return[3,10];case 1:return[4,Object(Qa.b)()];case 2:return mb=kb.ca(),jb.postMessage({cmd:"initialiseInfixServer",l:mb}),[3,10];case 3:return(sb=la(Ka.resultsXML))?(nb(),cb=Object(La.c)()||"https://www.pdftron.com/webfonts/v2/",
jb.postMessage({cmd:"loadAvailableFonts",webFontURL:cb})):xa("License key does not have content edit permission"),[3,10];case 4:return Ea(Ka.resultsXML),[3,10];case 5:return Ka.exportPerformed?qa(Ka.pageNumber,Ka.exportXML,Ka.objectXML,Ka.resultsXML):(Xa=bb[Ka.pageNumber],ka(Ka.pageNumber,Xa)),ob.resolve(),zb&&zb[Ka.pageNumber]&&zb[Ka.pageNumber].resolve(),[3,10];case 6:return ha(Ka.pageNumber,Ka.exportXML,Ka.contentHTML),Xa=bb[Ka.pageNumber],oa({yb:Ka.pageNumber,ZE:Ka.pdfBuffer,$E:Xa,hL:Ka.id}),
[3,10];case 7:Xa=bb[Ka.pageNumber];Aa(Ka.pageNumber,Ka.resultsXML);oa({yb:Ka.pageNumber,ZE:Ka.pdfBuffer,$E:Xa,hL:Ka.id,zha:Ka.isSearchReplace});rb=Ka.isSearchReplace;ub=Ka.callbackMapId;if(rb&&ub&&Nb[ub])Nb[ub]();return[3,10];case 8:return Xa=bb[Ka.pageNumber],Aa(Ka.pageNumber,Ka.resultsXML),Xa.galleys=Xa.galleys.filter(function(tb){return tb.id!==Ka.id}),Xa.objects=Xa.objects.filter(function(tb){return tb.id!==Ka.id}),xb={yb:Ka.pageNumber,ZE:Ka.pdfBuffer,$E:Xa},oa(xb),[3,10];case 9:return Xa=bb[Ka.pageNumber],
Aa(Ka.pageNumber,Ka.resultsXML),Gb={yb:Ka.pageNumber,ZE:Ka.pdfBuffer,$E:Xa,hL:Ka.isText,kha:!0},oa(Gb),[3,10];case 10:return[2]}})})}function la(qb){qb=new Uint8Array(qb);var nb=(new TextDecoder("utf-8")).decode(qb);qb=!1;nb=(new DOMParser).parseFromString(nb,"text/xml").getElementsByTagName("LicenseCheck");null!==nb&&0<nb.length&&(nb=nb[0].getElementsByTagName("Status")[0].innerHTML,"error"!==nb&&"ok"===nb&&(qb=!0));return qb}function ha(qb,nb){nb=(new TextDecoder("utf-8")).decode(nb);nb=(new DOMParser).parseFromString(nb,
"text/xml").getElementsByTagName("STORY");var xa=Array.prototype.slice.call(nb)[0];nb=xa.getAttribute("galley_ids");var Ka=Array.prototype.slice.call(xa.getElementsByTagName("g"))[0],Xa=Ka.getAttribute("bbox").split(" ");Xa=new f(parseFloat(Xa[0]),parseFloat(Xa[1]),parseFloat(Xa[2]),parseFloat(Xa[3]));Ka=Ka.innerHTML;var ab=Array.prototype.slice.call(xa.getElementsByTagName("galleys"))[0];ab.parentNode.removeChild(ab);xa=va(xa.innerHTML).trim();nb=new n(nb,qb,Ka,xa,Xa);xa=bb[qb];Xa=xa.galleys;Xa.push(nb);
xa.galleys=Xa;bb[qb]=xa;ka(qb,xa)}function ka(qb,nb){x(qb,nb.galleys);w(qb,nb.objects);aa(qb);pa(qb,nb)}function pa(qb,nb,xa,Ka){ba(qb,nb.objects,xa,Ka);ba(qb,nb.galleys,xa,Ka)}function qa(qb,nb,xa,Ka){var Xa=new Uint8Array(nb),ab=new TextDecoder("utf-8");nb=ab.decode(Xa);Xa=new Uint8Array(xa);xa=ab.decode(Xa);Xa=new Uint8Array(Ka);Ka=ab.decode(Xa);bb[qb]=ta(qb,nb,xa,Ka);ka(qb,bb[qb])}function ra(qb,nb){qb=parseFloat(qb);return isNaN(nb)||nb<qb?qb:nb}function ta(qb,nb,xa,Ka){var Xa;var ab=new DOMParser;
Ka=ab.parseFromString(Ka,"text/xml");Array.prototype.slice.call(Ka.getElementsByTagName("BBox")).forEach(function(cb){if("CropBox"===cb.getAttribute("Name")){var rb=parseFloat(cb.getElementsByTagName("Top").item(0).innerHTML),ub=parseFloat(cb.getElementsByTagName("Bottom").item(0).innerHTML),xb=parseFloat(cb.getElementsByTagName("Left").item(0).innerHTML);cb=parseFloat(cb.getElementsByTagName("Right").item(0).innerHTML);Xa=new f(rb,xb,ub,cb)}});ab=new DOMParser;Ka=ab.parseFromString(nb,"text/xml");
var mb=[];Array.prototype.slice.call(Ka.getElementsByTagName("STORY")).forEach(function(cb){var rb=cb.getAttribute("galley_ids"),ub=Array.prototype.slice.call(cb.getElementsByTagName("g"))[0],xb=ub.getAttribute("bbox").split(" ");xb=new f(parseFloat(xb[0]),parseFloat(xb[1]),parseFloat(xb[2]),parseFloat(xb[3]));ub=ub.innerHTML;var Gb=Array.prototype.slice.call(cb.getElementsByTagName("galleys"))[0];Gb.parentNode.removeChild(Gb);cb=va(cb.innerHTML).trim();rb=new n(rb,qb,ub,cb,xb);mb.push(rb)});ab=new DOMParser;
var sb=[];nb=ab.parseFromString(xa,"text/xml").getElementsByTagName("Object");Array.prototype.slice.call(nb).forEach(function(cb){var rb=cb.getAttribute("Type"),ub=cb.getAttribute("OID");cb=Array.prototype.slice.call(cb.getElementsByTagName("Point"));var xb=Number.NaN,Gb=Number.NaN,kb=Number.NaN,tb=Number.NaN;cb.forEach(function(Db){var Ib=Db.getAttribute("Name");"TL"===Ib?(xb=ra(Db.getAttribute("Y"),xb),kb=ra(Db.getAttribute("X"),kb)):"TR"===Ib?(xb=ra(Db.getAttribute("Y"),xb),tb=ra(Db.getAttribute("X"),
tb)):"BR"===Ib?(Gb=ra(Db.getAttribute("Y"),Gb),tb=ra(Db.getAttribute("X"),tb)):"BL"===Ib&&(Gb=ra(Db.getAttribute("Y"),Gb),kb=ra(Db.getAttribute("X"),kb))});cb=new f(xb,kb,Gb,tb);rb=new z(rb,ub,cb,qb);sb.push(rb)});nb=Array.prototype.slice.call(Ka.getElementsByTagName("DOC"))[0].getAttribute("id");return new y(nb,1,Xa,mb,sb)}function va(qb){return(new DOMParser).parseFromString(qb,"text/html").documentElement.querySelector("body").innerHTML}function Aa(qb,nb){var xa;nb=(new TextDecoder("utf-8")).decode(nb);
var Ka=(new DOMParser).parseFromString(nb,"text/xml");nb=Ka.getElementsByTagName("Galley").item(0);if(null!=nb){var Xa=nb.getAttribute("id");nb=Ka.getElementsByTagName("BBox");nb=Array.prototype.slice.call(nb);nb.forEach(function(sb){var cb=sb.getElementsByTagName("Top"),rb=parseFloat(cb.item(0).innerHTML);cb=sb.getElementsByTagName("Left");var ub=parseFloat(cb.item(0).innerHTML);cb=sb.getElementsByTagName("Bottom");var xb=parseFloat(cb.item(0).innerHTML);cb=sb.getElementsByTagName("Right");sb=parseFloat(cb.item(0).innerHTML);
xa=new f(rb,ub,xb,sb)});Pa[qb].forEach(function(sb){sb.id===Xa&&!0===xa.US(sb.galleyBox)&&(sb.galleyBox=xa)})}nb=Ka.getElementsByTagName("Object").item(0);if(null!=nb){var ab=nb.getAttribute("OID");nb=Ka.getElementsByTagName("BBox");nb=Array.prototype.slice.call(nb);nb.forEach(function(sb){var cb=sb.getElementsByTagName("Top"),rb=parseFloat(cb.item(0).innerHTML);cb=sb.getElementsByTagName("Left");var ub=parseFloat(cb.item(0).innerHTML);cb=sb.getElementsByTagName("Bottom");var xb=parseFloat(cb.item(0).innerHTML);
cb=sb.getElementsByTagName("Right");sb=parseFloat(cb.item(0).innerHTML);xa=new f(rb,ub,xb,sb)});Ua[qb].forEach(function(sb){sb.id===ab&&!0===xa.US(sb.bbox)&&(sb.bbox=xa)})}nb=Ka.getElementsByTagName("NewParas").item(0);if(null!=nb){var mb=nb.getAttribute("id");Pa[qb].forEach(function(sb){if(sb.id===mb){var cb="<Contents>"+sb.contents;cb+="</Contents>";var rb=Array.prototype.slice.call(Ka.getElementsByTagName("NewPara"));cb=(new DOMParser).parseFromString(cb,"text/xml");var ub=Array.prototype.slice.call(cb.getElementsByTagName("p"));
rb.forEach(function(xb){var Gb=parseFloat(xb.innerHTML),kb=!1;ub.forEach(function(tb){var Db=tb.getAttribute("id");!1===kb&&"0"===Db&&(tb.setAttribute("id",Gb),kb=!0)})});sb.contents=cb.getElementsByTagName("Contents").item(0).innerHTML}})}}function ua(qb){return{regex:0!==(qb&db.f.rv),wildcard:0!==(qb&db.f.Nr),wholeWord:0!==(qb&db.f.uv),caseSensitive:0!==(qb&db.f.Cr)}}function Ea(qb){qb=new Uint8Array(qb);qb=(new TextDecoder("utf-8")).decode(qb);qb=(new DOMParser).parseFromString(qb,"text/xml").getElementsByTagName("Font");
var nb={};Array.prototype.slice.call(qb).forEach(function(xa){var Ka=xa.getAttribute("Family");Ka in nb||(nb[Ka]={});var Xa=[];Array.prototype.slice.call(xa.getElementsByTagName("Variation")).forEach(function(ab){ab=ab.innerHTML;Xa.push(ab);if(ab.includes("Regular")||ab===Ka.replace(/\s+/g,""))nb[Ka].hasRegular=!0;ab.includes("Bold")&&(nb[Ka].hasBold=!0);ab.includes("Italic")&&(nb[Ka].hasItalic=!0)});xa=new da(Ka,Xa);Ab.push(xa)});Kb=Object.keys(nb).filter(function(xa){return nb[xa].hasRegular&&nb[xa].hasBold&&
nb[xa].hasItalic})}r.r(wa);var Ha=r(0),za=r(54),Ja=r(7),Na=r(495),La=r(39),Qa=r(75),Da=r(2),Fa=r(172),Sa=r(55),Ra=r(6),Wa=r(141),db=r(25),Va=r(8),pb=r(23),jb=null,hb=null,Ya=!1,Ia=!1,Pa={},Ua={},bb={},eb,ob=window.createPromiseCapability(),zb=[],Ab=[],Kb=[],Nb={};wa["default"]={cka:b,eka:a,A$:function(qb){return Object(Ha.b)(void 0,void 0,void 0,function(){var nb,xa,Ka,Xa,ab,mb,sb,cb;return Object(Ha.d)(this,function(rb){switch(rb.label){case 0:return nb=qb.id,xa=qb.isText,Ka=qb.pageNumber,Xa=eb.getDocument(),
[4,Xa.be([Ka],void 0,!0)];case 1:return ab=rb.ca(),mb=new TextEncoder,sb=mb.encode(""),cb=sb.buffer,jb.postMessage({cmd:"deleteObject",pdfFile:ab,pageNumber:Ka,objectID:nb,isText:xa,tableData:cb},[cb]),[2]}})})},Upa:function(qb){return Object(Ha.b)(void 0,void 0,void 0,function(){var nb,xa,Ka,Xa,ab,mb,sb,cb,rb,ub,xb,Gb,kb;return Object(Ha.d)(this,function(tb){switch(tb.label){case 0:return nb=qb.id,xa=qb.position,Ka=xa.top,Xa=xa.left,ab=xa.bottom,mb=xa.right,sb=qb.isText,cb=qb.pageNumber,rb=eb.getDocument(),
[4,rb.be([cb],void 0,!0)];case 1:return ub=tb.ca(),xb=new TextEncoder,Gb=xb.encode(""),kb=Gb.buffer,jb.postMessage({cmd:"transformObject",pdfFile:ub,pageNumber:cb,objectID:nb,isText:sb,topVal:Ka,leftVal:Xa,bottomVal:ab,rightVal:mb,tableData:kb},[kb]),[2]}})})},m7:function(qb,nb){return Object(Ha.b)(void 0,void 0,void 0,function(){var xa,Ka,Xa,ab,mb,sb,cb,rb,ub,xb,Gb,kb,tb,Db,Ib;return Object(Ha.d)(this,function(Sb){switch(Sb.label){case 0:return xa="<DOC><STORY><galleys></galleys>",Ka=[],Xa=(new DOMParser).parseFromString(nb,
"text/html"),Xa.documentElement.querySelectorAll("p").forEach(function(Qb,Zb){Ka[Zb]=Qb.innerHTML}),Ka.forEach(function(Qb,Zb){Qb=(new DOMParser).parseFromString(Ka[Zb],"text/html").documentElement.querySelector("body");Qb.childNodes.forEach(function(ya){ea(ya)});xa+="<p>"+Qb.innerHTML+"</p>"}),xa+="</STORY></DOC>",ab=qb.pageNumber,mb=eb.getDocument(),sb=qb.position,cb=sb.top,rb=sb.left,ub=sb.bottom,xb=sb.right,Gb=qb.defaultText,kb=qb.font,tb=qb.fontSize,Db=qb.textColor,[4,mb.be([ab],void 0,!0)];
case 1:return Ib=Sb.ca(),jb.postMessage({cmd:"insertNewTextBox",pdfFile:Ib,pageNumber:ab,topVal:cb,leftVal:rb,bottomVal:ub,rightVal:xb,defaultText:Gb,font:kb,fontSize:tb,textColor:Db,importData:xa,content:nb}),[2]}})})},mqa:h,Zda:na,pma:function(qb){return Object(Ha.b)(this,void 0,void 0,function(){var nb,xa,Ka,Xa,ab,mb,sb,cb,rb,ub,xb,Gb,kb,tb,Db,Ib,Sb,Qb,Zb,ya,dc,kc,ad=this;return Object(Ha.d)(this,function(Uc){switch(Uc.label){case 0:nb=qb.replaceWith;xa=qb.documentViewer;Ka=qb.search;Xa=qb.searchResults;
if(xa){if(!Xa&&!Ka)throw Error('The "searchResults" parameter is missing in the options');if(void 0===nb)throw Error('The "replaceWith" parameter should not be undefined');}else throw Error('The "documentViewer" parameter is missing in the options');ab=1===Xa.length;Ka?(mb=Ka.N8,sb=Ka.Kqa):(cb=ua(xa.eK()),mb=cb.N8,sb=cb.Kqa);rb=null;ub=[];if(ab)rb=Xa[0],ub=[rb.pageNum];else try{ub=Object.keys(Xa.reduce(function(wc,Mc){wc[Mc.pageNum]=Mc.pageNum;return wc},{})).map(function(wc){return Number(wc)})}catch(wc){Object(Da.i)(wc)}xb=
0;if(rb)for(Gb=xa.uk(),kb=-1,tb=0,Db=Gb.length;tb<Db&&(Ib=Gb[tb],Ib.pageNum===kb?xb++:(kb=Ib.pageNum,xb=0),!Object(Wa.a)(Ib,rb));tb++);Sb=Xa[0].resultStr;Qb=mb?"mg":"mgi";Zb=sb?"\\b("+Sb+")\\b":"("+Sb+")";ya=new RegExp("(?<!</?[^>]*|&[^;]*)"+Zb,Qb);ob=window.createPromiseCapability();return hb?[3,2]:[4,b(xa)];case 1:Uc.ca(),Uc.label=2;case 2:return Ya=!0,Sa.a.trigger(Va.e.SEARCH_AND_REPLACE_STARTED),dc=0,kc=ub.map(function(wc){return Object(Ha.b)(ad,void 0,void 0,function(){var Mc,Ec=this;return Object(Ha.d)(this,
function(){Mc=new Promise(function(bd,me){return Object(Ha.b)(Ec,void 0,void 0,function(){var lc=this;return Object(Ha.d)(this,function(jc){switch(jc.label){case 0:return zb[wc]=window.createPromiseCapability(),[4,a(xa.getDocument(),wc,!0)];case 1:return jc.ca(),zb[wc].promise.then(function(){return Object(Ha.b)(lc,void 0,void 0,function(){function le(ud,nd){return Object(Ha.b)(this,void 0,void 0,function(){var dd,Kd;return Object(Ha.d)(this,function(Bb){switch(Bb.label){case 0:dd=Object(pb.f)(),
Nb[dd]=function(){delete Nb[dd];bd(!0);Sa.a.trigger(Va.e.SEARCH_AND_REPLACE_TEXT_REPLACED)},Bb.label=1;case 1:return Bb.fg.push([1,3,,4]),[4,h(ud,nd,!0,dd)];case 2:return Bb.ca(),[3,4];case 3:return Kd=Bb.ca(),Object(Da.i)(Kd),me(Kd),[3,4];case 4:return[2]}})})}var we,Fd,Od,Pd,pc,ae,md,Qd,cd,yc,Rd,ne,Sd,Gd,be,Td,Nd;return Object(Ha.d)(this,function(){we=eb.la();Fd=we.nb().filter(function(ud){return ud.PageNumber===wc}).filter(function(ud){return ud.Re()}).concat();Od=[];pc=Pd=0;for(ae=Fd.length;pc<
ae;pc++){md=Fd[pc];Qd=md.gf;cd=na(Qd);yc=[];try{for(Rd=void 0;null!==(Rd=ya.exec(cd));)yc.push(Rd),Od.push(Xa[dc]),dc++}catch(ud){Object(Da.i)(ud)}if(yc.length)if(Pd+=yc.length,ab&&Pd>xb){ne=Math.abs(Pd-yc.length-xb);Sd=yc[ne].index;Gd=cd.substr(0,Sd);be=nb;Td=cd.substr(Sd+Sb.length,cd.length);Nd=""+Gd+be+Td;Sa.a.trigger(Va.e.SEARCH_AND_REPLACE_TEXT_FOUND,[[rb]]);le(md,Nd);break}else ab||(Ia=!0,Nd=cd.replace(ya,nb),Sa.a.trigger(Va.e.SEARCH_AND_REPLACE_TEXT_FOUND,[Od]),le(md,Nd))}return[2]})})}).catch(me),
[2]}})})});return[2,Mc]})})}),[2,Promise.all(kc).then(function(){ab&&rb?setTimeout(function(){var Ec=[];xa.yz(Xa[0].resultStr,xa.eK(),{startPage:ub[0],endPage:ub[0],fullSearch:!0,onDocumentEnd:function(){Ia=Ya=!1;Sa.a.trigger(Va.e.SEARCH_AND_REPLACE_ENDED);xa.KO(ub[0]-1,Ec)},onResult:function(bd){bd.resultCode===db.e.mn&&Ec.push(bd)}})},200):(xa.rT(),xa.Pm(),xa.re(),Ia=Ya=!1,Sa.a.trigger(Va.e.SEARCH_AND_REPLACE_ENDED));var wc=eb.la(),Mc=wc.nb().filter(function(Ec){return Ec.Re()});wc.Hf(Mc,{force:!0,
source:"contentEditTool"})})]}})})},Xma:function(qb,nb){var xa=ma(qb.gf.contents);xa=(new DOMParser).parseFromString(xa,"text/html").documentElement.querySelector("body");var Ka=xa.querySelectorAll("p"),Xa=new XMLSerializer;Ka.forEach(function(ab){ab.style.fontFamily=nb});xa=Xa.serializeToString(xa);h(qb,xa)},Yma:function(qb,nb){var xa=ma(qb.gf.contents);xa=(new DOMParser).parseFromString(xa,"text/html").documentElement.querySelector("body");var Ka=xa.querySelectorAll("p"),Xa=new XMLSerializer;Ka.forEach(function(ab){ab.style.fontSize=
nb});xa=Xa.serializeToString(xa);h(qb,xa)},y7:function(qb,nb){return Object(Ha.b)(void 0,void 0,void 0,function(){var xa,Ka,Xa,ab,mb,sb,cb;return Object(Ha.d)(this,function(rb){switch(rb.label){case 0:return xa=qb.gf.id,Ka=qb.PageNumber,Xa=eb.getDocument(),[4,Xa.be([Ka],void 0,!0)];case 1:return ab=rb.ca(),mb=new TextEncoder,sb=mb.encode(""),cb=sb.buffer,jb.postMessage({cmd:"AlignParaText",pdfFile:ab,pageNumber:Ka,galleyID:xa,alignment:nb,topVal1:"",leftVal1:"",bottomVal1:"",rightVal1:"",topVal2:"",
leftVal2:"",bottomVal2:"",rightVal2:"",tableData:cb},[cb]),[2]}})})},o8:function(qb){var nb=ma(qb.gf.contents);nb=(new DOMParser).parseFromString(nb,"text/html").documentElement.querySelector("body");var xa=nb.querySelectorAll("p"),Ka=new XMLSerializer,Xa="bold"===xa[0].style.fontWeight,ab=Ka.serializeToString(xa[0]).includes("<strong>");xa.forEach(function(mb){if(Xa||ab){mb.style.fontWeight="normal";var sb=Ka.serializeToString(mb).replace(/<strong>/g,"");sb=sb.replace(/<\/strong>/g,"");sb=(new DOMParser).parseFromString(sb,
"text/html").documentElement.querySelector("p");mb.parentElement.replaceChild(sb,mb)}else mb.style.fontWeight="bold",mb.innerHTML="<strong>"+mb.innerHTML.trim()+"</strong>"});nb=Ka.serializeToString(nb);h(qb,nb)},Kha:function(qb){var nb=ma(qb.gf.contents);nb=(new DOMParser).parseFromString(nb,"text/html").documentElement.querySelector("body");var xa=nb.querySelectorAll("p"),Ka=new XMLSerializer,Xa="italic"===xa[0].style.fontStyle,ab=Ka.serializeToString(xa[0]).includes("<em>");xa.forEach(function(mb){if(Xa||
ab){mb.style.fontStyle="normal";mb.style.font.includes("Italic")&&(mb.style.font=mb.style.font.replace("Italic",""));var sb=Ka.serializeToString(mb).replace(/<em>/g,"");sb=sb.replace(/<\/em>/g,"");sb=(new DOMParser).parseFromString(sb,"text/html").documentElement.querySelector("p");mb.parentElement.replaceChild(sb,mb)}else mb.style.fontStyle="italic",mb.innerHTML="<em>"+mb.innerHTML.trim()+"</em>"});nb=Ka.serializeToString(nb);h(qb,nb)},$pa:function(qb){var nb=ma(qb.gf.contents);nb=(new DOMParser).parseFromString(nb,
"text/html").documentElement.querySelector("body");var xa=nb.querySelectorAll("p"),Ka=new XMLSerializer,Xa=xa[0].style.textDecoration.includes("underline")||xa[0].style.textDecoration.includes("word"),ab=Ka.serializeToString(xa[0]).includes("<u>");xa.forEach(function(mb){if(Xa||ab){mb.style.textDecoration=mb.style.textDecoration.replace("underline","");var sb=Ka.serializeToString(mb).replace(/<u>/g,"");sb=sb.replace(/<\/u>/g,"");sb=(new DOMParser).parseFromString(sb,"text/html").documentElement.querySelector("p");
mb.parentElement.replaceChild(sb,mb)}else mb.style.textDecoration.includes("none")?mb.style.textDecoration=mb.style.textDecoration.replace("none","underline"):mb.style.textDecoration+=" underline",mb.innerHTML="<u>"+mb.innerHTML.trim()+"</u>"});nb=Ka.serializeToString(nb);h(qb,nb)},Loa:function(qb,nb){var xa=ma(qb.gf.contents);xa=(new DOMParser).parseFromString(xa,"text/html").documentElement.querySelector("body");var Ka=xa.querySelectorAll("p"),Xa=new XMLSerializer;Ka.forEach(function(ab){ab.style.color=
nb});xa.querySelectorAll("span").forEach(function(ab){ab.setAttribute("style","color:"+nb)});xa=Xa.serializeToString(xa);h(qb,xa)},Mda:function(){return Kb},k7:function(qb){return Object(Ha.b)(void 0,void 0,void 0,function(){var nb,xa,Ka,Xa,ab,mb,sb,cb,rb,ub;return Object(Ha.d)(this,function(xb){switch(xb.label){case 0:return nb=qb.pageNumber,xa=qb.newImage,Ka=qb.scaleType,Xa=qb.position,ab=Xa.top,mb=Xa.left,sb=Xa.bottom,cb=Xa.right,rb=eb.getDocument(),[4,rb.be([nb],void 0,!0)];case 1:return ub=xb.ca(),
jb.postMessage({cmd:"insertImage",pdfFile:ub,pageNumber:nb,newImage:xa,scaleType:Ka,topVal:ab,leftVal:mb,bottomVal:sb,rightVal:cb},[]),[2]}})})}}}}]);}).call(this || window)