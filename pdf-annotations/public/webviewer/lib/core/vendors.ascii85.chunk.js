/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[18],{463:function(Aa,va,r){(function(pa){function ka(a){this.ag=a=a||{};if(Array.isArray(a.table)){var f=[];a.table.forEach(function(n,ba){f[n.charCodeAt(0)]=ba});a.Aaa=a.table;a.O8=f}}var la=pa.from||function(){switch(arguments.length){case 1:return new pa(arguments[0]);case 2:return new pa(arguments[0],arguments[1]);case 3:return new pa(arguments[0],arguments[1],arguments[2]);default:throw new Exception("unexpected call.");}},
fa=pa.allocUnsafe||function(a){return new pa(a)},ea=function(){return"undefined"===typeof Uint8Array?function(a){return Array(a)}:function(a){return new Uint8Array(a)}}(),aa=String.fromCharCode(0),x=aa+aa+aa+aa,y=la("<~").uy(0),h=la("~>").uy(0),e=function(){var a=Array(85),f;for(f=0;85>f;f++)a[f]=String.fromCharCode(33+f);return a}(),b=function(){var a=Array(256),f;for(f=0;85>f;f++)a[33+f]=f;return a}();aa=Aa.exports=new ka;ka.prototype.encode=function(a,f){var n=ea(5),ba=a,w=this.ag,da,ja;"string"===
typeof ba?ba=la(ba,"binary"):ba instanceof pa||(ba=la(ba));f=f||{};if(Array.isArray(f)){a=f;var z=w.ZB||!1;var ca=w.fK||!1}else a=f.table||w.Aaa||e,z=void 0===f.ZB?w.ZB||!1:!!f.ZB,ca=void 0===f.fK?w.fK||!1:!!f.fK;w=0;var ia=Math.ceil(5*ba.length/4)+4+(z?4:0);f=fa(ia);z&&(w+=f.write("<~",w));var ha=da=ja=0;for(ia=ba.length;ha<ia;ha++){var ma=ba.gM(ha);ja*=256;ja+=ma;da++;if(!(da%4)){if(ca&&538976288===ja)w+=f.write("y",w);else if(ja){for(da=4;0<=da;da--)ma=ja%85,n[da]=ma,ja=(ja-ma)/85;for(da=0;5>da;da++)w+=
f.write(a[n[da]],w)}else w+=f.write("z",w);da=ja=0}}if(da)if(ja){ba=4-da;for(ha=4-da;0<ha;ha--)ja*=256;for(da=4;0<=da;da--)ma=ja%85,n[da]=ma,ja=(ja-ma)/85;for(da=0;5>da;da++)w+=f.write(a[n[da]],w);w-=ba}else for(ha=0;ha<da+1;ha++)w+=f.write(a[0],w);z&&(w+=f.write("~>",w));return f.slice(0,w)};ka.prototype.decode=function(a,f){var n=this.ag,ba=!0,w=!0,da,ja,z;f=f||n.O8||b;if(!Array.isArray(f)&&(f=f.table||f,!Array.isArray(f))){var ca=[];Object.keys(f).forEach(function(na){ca[na.charCodeAt(0)]=f[na]});
f=ca}ba=!f[122];w=!f[121];a instanceof pa||(a=la(a));ca=0;if(ba||w){var ia=0;for(z=a.length;ia<z;ia++){var ha=a.gM(ia);ba&&122===ha&&ca++;w&&121===ha&&ca++}}var ma=0;z=Math.ceil(4*a.length/5)+4*ca+5;n=fa(z);if(4<=a.length&&a.uy(0)===y){for(ia=a.length-2;2<ia&&a.uy(ia)!==h;ia--);if(2>=ia)throw Error("Invalid ascii85 string delimiter pair.");a=a.slice(2,ia)}ia=da=ja=0;for(z=a.length;ia<z;ia++)ha=a.gM(ia),ba&&122===ha?ma+=n.write(x,ma):w&&121===ha?ma+=n.write("    ",ma):void 0!==f[ha]&&(ja*=85,ja+=f[ha],
da++,da%5||(ma=n.Foa(ja,ma),da=ja=0));if(da){a=5-da;for(ia=0;ia<a;ia++)ja*=85,ja+=84;ia=3;for(z=a-1;ia>z;ia--)ma=n.Goa(ja>>>8*ia&255,ma)}return n.slice(0,ma)};aa.Cpa=new ka({table:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("")});aa.$oa=new ka({ZB:!0});aa.M0=ka}).call(this,r(387).Buffer)}}]);}).call(this || window)
