/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[10],{470:function(Ba,wa,r){function oa(ba){ba.Ha();ba.advance();var ja=ba.current.textContent;ba.Za();return ja}function na(ba){var ja=[];for(ba.Ha();ba.advance();){var la=ba.Na();"field"===la?ja.push(String(ba.ga("name"))):Object(b.j)("unrecognised field list element: "+la)}ba.Za();return ja}function ma(ba,ja){return ja?"false"!==ba:"true"===ba}function fa(ba,ja){var la=ba.Na();switch(la){case "javascript":return{name:"JavaScript",
javascript:ba.current.textContent};case "uri":return{name:"URI",uri:ba.ga("uri")};case "goto":la=null;ba.Ha();if(ba.advance()){var ha=ba.ga("fit");la={page:ba.ga("page"),fit:ha};if("0"===la.page)Object(b.j)("null page encountered in dest");else switch(ja=ja(Number(la.page)),ha){case "Fit":case "FitB":break;case "FitH":case "FitBH":la.top=ja.ra({x:0,y:ba.ga("top")||0}).y;break;case "FitV":case "FitBV":la.left=ja.ra({x:ba.ga("left")||0,y:0}).x;break;case "FitR":ha=ja.ra({x:ba.ga("left")||0,y:ba.ga("top")||
0});ja=ja.ra({x:ba.ga("right")||0,y:ba.ga("bottom")||0});ja=new z.d(ha.x,ha.y,ja.x,ja.y);la.top=ja.y1;la.left=ja.x1;la.bottom=ja.y2;la.right=ja.x2;break;case "XYZ":ha=ja.ra({x:ba.ga("left")||0,y:ba.ga("top")||0});la.top=ha.y;la.left=ha.x;la.zoom=ba.ga("zoom")||0;break;default:Object(b.j)("unknown dest fit: "+ha)}la={name:"GoTo",dest:la}}else Object(b.j)("missing dest in GoTo action");ba.Za();return la;case "submit-form":la={name:"SubmitForm",url:ba.ga("url"),format:ba.ga("format"),method:ba.ga("method")||
"POST",exclude:ma(ba.ga("exclude"),!1)};ja=ba.ga("flags");la.flags=ja?ja.split(" "):[];for(ba.Ha();ba.advance();)switch(ja=ba.Na(),ja){case "fields":la.fields=na(ba);break;default:Object(b.j)("unrecognised submit-form child: "+ja)}ba.Za();return la;case "reset-form":la={name:"ResetForm",exclude:ma(ba.ga("exclude"),!1)};for(ba.Ha();ba.advance();)switch(ja=ba.Na(),ja){case "fields":la.fields=na(ba);break;default:Object(b.j)("unrecognised reset-form child: "+ja)}ba.Za();return la;case "hide":la={name:"Hide",
hide:ma(ba.ga("hide"),!0)};for(ba.Ha();ba.advance();)switch(ja=ba.Na(),ja){case "fields":la.fields=na(ba);break;default:Object(b.j)("unrecognised hide child: "+ja)}ba.Za();return la;case "named":return{name:"Named",action:ba.ga("name")};default:Object(b.j)("Encountered unexpected action type: "+la)}return null}function ea(ba,ja,la){var ha={};for(ba.Ha();ba.advance();){var ka=ba.Na();switch(ka){case "action":ka=ba.ga("trigger");if(ja?-1!==ja.indexOf(ka):1){ha[ka]=[];for(ba.Ha();ba.advance();){var pa=
fa(ba,la);Object(f.isNull)(pa)||ha[ka].push(pa)}ba.Za()}else Object(b.j)("encountered unexpected trigger on field: "+ka);break;default:Object(b.j)("encountered unknown action child: "+ka)}}ba.Za();return ha}function aa(ba){return new y.a(ba.ga("r")||0,ba.ga("g")||0,ba.ga("b")||0,ba.ga("a")||1)}function w(ba,ja){var la=ba.ga("name"),ha=ba.ga("type")||"Type1",ka=ba.ga("size"),pa=ja.ra({x:0,y:0});ka=ja.ra({x:Number(ka),y:0});ja=pa.x-ka.x;pa=pa.y-ka.y;la={name:la,type:ha,size:Math.sqrt(ja*ja+pa*pa)||
0,strokeColor:[0,0,0],fillColor:[0,0,0]};for(ba.Ha();ba.advance();)switch(ha=ba.Na(),ha){case "stroke-color":la.strokeColor=aa(ba);break;case "fill-color":la.fillColor=aa(ba);break;default:Object(b.j)("unrecognised font child: "+ha)}ba.Za();return la}function x(ba){var ja=[];for(ba.Ha();ba.advance();){var la=ba.Na();switch(la){case "option":la=ja;var ha=la.push;var ka=ba;ka={value:ka.ga("value"),displayValue:ka.ga("display-value")||void 0};ha.call(la,ka);break;default:Object(b.j)("unrecognised options child: "+
la)}}ba.Za();return ja}function h(ba,ja){var la=ba.ga("name"),ha={type:ba.ga("type"),quadding:ba.ga("quadding")||"Left-justified",maxLen:ba.ga("max-len")||-1},ka=ba.ga("flags");Object(f.isString)(ka)&&(ha.flags=ka.split(" "));for(ba.Ha();ba.advance();)switch(ka=ba.Na(),ka){case "actions":ha.actions=ea(ba,["C","F","K","V"],function(){return ja});break;case "default-value":ha.defaultValue=oa(ba);break;case "font":ha.font=w(ba,ja);break;case "options":ha.options=x(ba);break;default:Object(b.j)("unknown field child: "+
ka)}ba.Za();return new window.Annotations.ha.pa(la,ha)}function e(ba,ja){switch(ba.type){case "Tx":try{if(Object(ia.c)(ba.actions))return new n.a.DatePickerWidgetAnnotation(ba,ja)}catch(la){Object(b.j)(la)}return new n.a.TextWidgetAnnotation(ba,ja);case "Ch":return ba.flags.get(ca.WidgetFlags.COMBO)?new n.a.ChoiceWidgetAnnotation(ba,ja):new n.a.ListWidgetAnnotation(ba,ja);case "Btn":return ba.flags.get(ca.WidgetFlags.PUSH_BUTTON)?new n.a.PushButtonWidgetAnnotation(ba,ja):ba.flags.get(ca.WidgetFlags.RADIO)?
new n.a.RadioButtonWidgetAnnotation(ba,ja):new n.a.CheckButtonWidgetAnnotation(ba,ja);case "Sig":return new n.a.SignatureWidgetAnnotation(ba,ja);default:Object(b.j)("Unrecognised field type: "+ba.type)}return null}function a(ba,ja,la,ha){var ka=[],pa={};ba.Ha();var qa=[],ra={},ta=[];Object(da.a)(function(){if(ba.advance()){var va=ba.Na();switch(va){case "calculation-order":qa="calculation-order"===ba.Na()?na(ba):[];break;case "document-actions":ra=ea(ba,["Init","Open"],ja);break;case "pages":va=[];
for(ba.Ha();ba.advance();){var Aa=ba.Na();switch(Aa){case "page":Aa=va;var ua=Aa.push,Ea=ba,Ha=ja,za={number:Ea.ga("number")};for(Ea.Ha();Ea.advance();){var Ja=Ea.Na();switch(Ja){case "actions":za.actions=ea(Ea,["O","C"],Ha);break;default:Object(b.j)("unrecognised page child: "+Ja)}}Ea.Za();ua.call(Aa,za);break;default:Object(b.j)("unrecognised page child: "+Aa)}}ba.Za();ta=va;break;case "field":Aa=h(ba,ja(1));pa[Aa.name]=Aa;break;case "widget":va={border:{style:"Solid",width:1},backgroundColor:[],
fieldName:ba.ga("field"),page:ba.ga("page"),index:ba.ga("index")||0,rotation:ba.ga("rotation")||0,flags:[],isImporting:!0};(Aa=ba.ga("appearance"))&&(va.appearance=Aa);(Aa=ba.ga("flags"))&&(va.flags=Aa.split(" "));for(ba.Ha();ba.advance();)switch(Aa=ba.Na(),Aa){case "rect":ua=ba;Ea=ja(Number(va.page));Aa=Ea.ra({x:ua.ga("x1")||0,y:ua.ga("y1")||0});ua=Ea.ra({x:ua.ga("x2")||0,y:ua.ga("y2")||0});Aa=new z.d(Aa.x,Aa.y,ua.x,ua.y);Aa.normalize();va.rect={x1:Aa.x1,y1:Aa.y1,x2:Aa.x2,y2:Aa.y2};break;case "border":Aa=
ba;ua={style:Aa.ga("style")||"Solid",width:Aa.ga("width")||1,color:[0,0,0]};for(Aa.Ha();Aa.advance();)switch(Ea=Aa.Na(),Ea){case "color":ua.color=aa(Aa);break;default:Object(b.j)("unrecognised border child: "+Ea)}Aa.Za();va.border=ua;break;case "background-color":va.backgroundColor=aa(ba);break;case "actions":va.actions=ea(ba,"E X D U Fo Bl PO PC PV PI".split(" "),ja);break;case "appearances":Aa=ba;ua=Object(ia.b)(va,"appearances");for(Aa.Ha();Aa.advance();)if(Ea=Aa.Na(),"appearance"===Ea){Ea=Aa.ga("name");
Ha=Object(ia.b)(ua,Ea);Ea=Aa;for(Ea.Ha();Ea.advance();)switch(za=Ea.Na(),za){case "Normal":Object(ia.b)(Ha,"Normal").data=Ea.current.textContent;break;default:Object(b.j)("unexpected appearance state: ",za)}Ea.Za()}else Object(b.j)("unexpected appearances child: "+Ea);Aa.Za();break;case "extra":Aa=ba;ua=ja;Ea={};for(Aa.Ha();Aa.advance();)switch(Ha=Aa.Na(),Ha){case "font":Ea.font=w(Aa,ua(1));break;default:Object(b.j)("unrecognised extra child: "+Ha)}Aa.Za();Aa=Ea;Aa.font&&(va.font=Aa.font);break;case "captions":ua=
ba;Aa={};(Ea=ua.ga("Normal"))&&(Aa.Normal=Ea);(Ea=ua.ga("Rollover"))&&(Aa.Rollover=Ea);(ua=ua.ga("Down"))&&(Aa.Down=ua);va.captions=Aa;break;default:Object(b.j)("unrecognised widget child: "+Aa)}ba.Za();(Aa=pa[va.fieldName])?(va=e(Aa,va),ka.push(va)):Object(b.j)("ignoring widget with no corresponding field data: "+va.fieldName);break;default:Object(b.j)("Unknown element encountered in PDFInfo: "+va)}return!0}return!1},function(){ba.Za();la({calculationOrder:qa,widgets:ka,fields:pa,documentActions:ra,
pages:ta,custom:[]})},ha)}r.r(wa);r.d(wa,"parse",function(){return a});var b=r(2),f=r(1);r.n(f);var n=r(123),z=r(4),y=r(7),da=r(20),ia=r(108),ca=r(17)}}]);}).call(this || window)