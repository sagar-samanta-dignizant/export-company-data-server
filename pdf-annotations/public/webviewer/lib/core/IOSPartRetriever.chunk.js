/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[7],{458:function(Aa,va,r){r.r(va);var pa=r(0),ka=r(252);Aa=r(450);r(34);r=r(386);var la=function(fa){function ea(aa,x){var y=fa.call(this,aa,x)||this;y.url=aa;y.range=x;y.status=ka.a.NOT_STARTED;return y}Object(pa.c)(ea,fa);ea.prototype.start=function(){var aa=document.createElement("IFRAME");aa.setAttribute("src",this.url);document.documentElement.appendChild(aa);aa.parentNode.removeChild(aa);this.status=ka.a.STARTED;this.WC()};
return ea}(Aa.ByteRangeRequest);Aa=function(fa){function ea(aa,x,y,h){aa=fa.call(this,aa,x,y,h)||this;aa.sy=la;return aa}Object(pa.c)(ea,fa);ea.prototype.ew=function(aa,x){return aa+"#"+x.start+"&"+(x.stop?x.stop:"")};return ea}(Aa["default"]);Object(r.a)(Aa);Object(r.b)(Aa);va["default"]=Aa}}]);}).call(this || window)