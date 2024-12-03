/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[0],{450:function(Aa,va,r){r.r(va);r.d(va,"ByteRangeRequest",function(){return ba});var pa=r(0),ka=r(1);r.n(ka);var la=r(2),fa=r(153);Aa=r(97);var ea=r(253),aa=r(74),x=r(72),y=r(252),h=r(172);r=r(386);var e=[],b=[],a=window,f=function(){return function(){this.ym=1}}(),n;(function(da){da[da.UNSENT=0]="UNSENT";da[da.DONE=4]="DONE"})(n||(n={}));var ba=function(){function da(ja,z,ca,ia){var ha=this;this.url=ja;this.range=z;this.ef=ca;
this.withCredentials=ia;this.l3=n;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);a.Uint8Array&&(this.request.responseType="arraybuffer");ia&&(this.request.withCredentials=ia);w.DISABLE_RANGE_HEADER||(Object(ka.isUndefined)(z.stop)?this.request.setRequestHeader("Range","bytes="+z.start):this.request.setRequestHeader("Range",["bytes=",z.start,"-",z.stop-1].join("")));ca&&Object.keys(ca).forEach(function(ma){ha.request.setRequestHeader(ma,ca[ma])});this.request.overrideMimeType?
this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=y.a.NOT_STARTED}da.prototype.start=function(ja){var z=this,ca=this.request;ca.onreadystatechange=function(){if(z.aborted)return z.status=y.a.ABORTED,ja({code:y.a.ABORTED});if(this.readyState===z.l3.DONE){z.WC();var ia=0===window.document.URL.indexOf("file:///");200===ca.status||206===ca.status||ia&&0===ca.status?(ia=a.PU(this),z.CN(ia,ja)):(z.status=y.a.ERROR,
ja({code:z.status,status:z.status}))}};this.request.send(null);this.status=y.a.STARTED};da.prototype.CN=function(ja,z){this.status=y.a.SUCCESS;if(z)return z(!1,ja)};da.prototype.abort=function(){this.WC();this.aborted=!0;this.request.abort()};da.prototype.WC=function(){var ja=Object(h.c)(this.url,this.range,b);-1!==ja&&b.splice(ja,1);if(0<e.length){ja=e.shift();var z=new da(ja.url,ja.range,this.ef,this.withCredentials);ja.request=z;b.push(ja);z.start(Object(h.d)(ja))}};da.prototype.extend=function(ja){var z=
Object.assign({},this,ja.prototype);z.constructor=ja;return z};return da}(),w=function(da){function ja(z,ca,ia,ha,ma){ia=da.call(this,z,ia,ha)||this;ia.rj={};ia.yB=ca;ia.url=z;ia.DISABLE_RANGE_HEADER=!1;ia.sy=ba;ia.BO=3;ia.ef=ma||{};return ia}Object(pa.c)(ja,da);ja.prototype.ew=function(z,ca,ia){var ha=-1===z.indexOf("?")?"?":"&";switch(ia){case !1:case x.a.NEVER_CACHE:z=z+ha+"_="+Object(ka.uniqueId)();break;case !0:case x.a.CACHE:z=z+ha+"_="+ca.start+","+(Object(ka.isUndefined)(ca.stop)?"":ca.stop)}return z};
ja.prototype.CS=function(z,ca,ia,ha){void 0===ia&&(ia={});return new this.sy(z,ca,ia,ha)};ja.prototype.Daa=function(z,ca,ia,ha,ma){for(var na=0;na<e.length;na++)if(Object(ka.isEqual)(e[na].range,ca)&&Object(ka.isEqual)(e[na].url,z))return e[na].Yg.push(ha),e[na].aE++,null;for(na=0;na<b.length;na++)if(Object(ka.isEqual)(b[na].range,ca)&&Object(ka.isEqual)(b[na].url,z))return b[na].Yg.push(ha),b[na].aE++,null;ia={url:z,range:ca,yB:ia,Yg:[ha],aE:1};if(0===e.length&&b.length<this.BO)return b.push(ia),
ia.request=this.CS(z,ca,ma,this.withCredentials),ia;e.push(ia);return null};ja.prototype.qo=function(z,ca,ia){var ha=this.ew(z,ca,this.yB);(z=this.Daa(ha,ca,this.yB,ia,this.ef))&&z.request.start(Object(h.d)(z));return function(){var ma=Object(h.c)(ha,ca,b);if(-1!==ma){var na=--b[ma].aE;0===na&&b[ma].request&&b[ma].request.abort()}else ma=Object(h.c)(ha,ca,e),-1!==ma&&(na=--e[ma].aE,0===na&&e.splice(ma,1))}};ja.prototype.sU=function(){return{start:-fa.a}};ja.prototype.oea=function(){var z=-(fa.a+fa.e);
return{start:z-fa.d,end:z}};ja.prototype.Ht=function(z){var ca=this;this.EB=!0;var ia=fa.a;this.qo(this.url,this.sU(),function(ha,ma,na){function sa(){var qa=ca.wd.oU();ca.qo(ca.url,qa,function(ra,ua){if(ra)return Object(la.j)("Error loading central directory: "+ra),z(ra);ua=Object(aa.a)(ua);if(ua.length!==qa.stop-qa.start)return z("Invalid XOD file: Zip central directory data is wrong size! Should be "+(qa.stop-qa.start)+" but is "+ua.length);ca.wd.mY(ua);ca.fI=!0;ca.EB=!1;return z(!1)})}if(ha)return Object(la.j)("Error loading end header: "+
ha),z(ha,ma,na);ma=Object(aa.a)(ma);if(ma.length!==ia)return z("Invalid XOD file: Zip end header data is wrong size!");try{ca.wd=new ea.a(ma)}catch(qa){return z(qa)}ca.wd.Tfa?ca.qo(ca.url,ca.oea(),function(qa,ra){if(qa)return Object(la.j)("Error loading zip64 header: "+qa),z(qa);ra=Object(aa.a)(ra);ca.wd.mga(ra);sa()}):sa()})};ja.prototype.MU=function(z){z(Object.keys(this.wd.On))};ja.prototype.eM=function(z,ca){var ia=this;if(this.wd.rS(z)){var ha=this.wd.Nw(z);if(ha in this.rj){var ma=this.rh[z];
ma.os=this.rj[ha];ma.os.ym++;ma.cancel=ma.os.cancel}else{var na=this.wd.Aca(z),sa=this.qo(this.url,na,function(ra,ua){ra?(Object(la.j)('Error loading part "'+z+'": '+ra),ia.qo(ia.url,na,function(oa,wa){if(oa)return ca(oa,z);ia.qY(wa,na,ha,z,ca)})):ia.qY(ua,na,ha,z,ca)}),qa=this.rh[z];qa&&(qa.v_=!0,qa.cancel=function(){qa.os.ym--;0===qa.os.ym&&(sa(),delete ia.rj[ha])},this.rj[ha]=new f(ha),qa.os=this.rj[ha],qa.os.cancel=qa.cancel)}}else delete this.rh[z],ca(Error('File not found: "'+z+'"'),z)};ja.prototype.qY=
function(z,ca,ia,ha,ma){if(z.length!==ca.stop-ca.start)ma(Error("Part data is wrong size!"),ha);else{do{if(!this.rj[ia])return;ha=this.rj[ia].ym;for(var na=ca.Rq.length,sa=0;sa<na;++sa){var qa=ca.Rq[sa];ma(!1,qa.Nq,z["string"===typeof z?"substring":"subarray"](qa.start,qa.stop),this.wd.RV(qa.Nq));qa.Nq in this.rh&&delete this.rh[qa.Nq]}}while(ha!==this.rj[ia].ym);delete this.rj[ia]}};ja.DISABLE_RANGE_HEADER=!1;ja.BO=3;return ja}(Aa.a);(function(da){function ja(z,ca,ia){var ha=da.call(this)||this,
ma;for(ma in z)ha[ma]=z[ma];ha.Hra=z;ha.startOffset=ca;ha.endOffset=ia;ha.CS=function(na,sa,qa,ra){Object(ka.isUndefined)(sa.stop)?(sa.start+=ha.endOffset,sa.stop=ha.endOffset):(sa.start+=ha.startOffset,sa.stop+=ha.startOffset);na=ha.ew(ha.url,sa,ha.yB);return new z.sy(na,sa,qa,ra)};return ha}Object(pa.c)(ja,da);return ja})(w);Object(r.a)(w);Object(r.b)(w);va["default"]=w}}]);}).call(this || window)