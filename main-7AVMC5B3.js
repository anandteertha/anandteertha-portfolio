var RO=Object.create;var Mg=Object.defineProperty,NO=Object.defineProperties,PO=Object.getOwnPropertyDescriptor,OO=Object.getOwnPropertyDescriptors,LO=Object.getOwnPropertyNames,$M=Object.getOwnPropertySymbols,FO=Object.getPrototypeOf,XM=Object.prototype.hasOwnProperty,kO=Object.prototype.propertyIsEnumerable;var qM=(n,e,t)=>e in n?Mg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Le=(n,e)=>{for(var t in e||={})XM.call(e,t)&&qM(n,t,e[t]);if($M)for(var t of $M(e))kO.call(e,t)&&qM(n,t,e[t]);return n},on=(n,e)=>NO(n,OO(e));var UO=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var BO=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of LO(e))!XM.call(n,r)&&r!==t&&Mg(n,r,{get:()=>e[r],enumerable:!(i=PO(e,r))||i.enumerable});return n};var VO=(n,e,t)=>(t=n!=null?RO(FO(n)):{},BO(e||!n||!n.__esModule?Mg(t,"default",{value:n,enumerable:!0}):t,n));var Ps=(n,e,t)=>new Promise((i,r)=>{var s=u=>{try{l(t.next(u))}catch(f){r(f)}},a=u=>{try{l(t.throw(u))}catch(f){r(f)}},l=u=>u.done?i(u.value):Promise.resolve(u.value).then(s,a);l((t=t.apply(n,e)).next())});var ND=UO((Fc,Iu)=>{"use strict";(function(){var n,e="4.17.21",t=200,i="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",r="Expected a function",s="Invalid `variable` option passed into `_.template`",a="__lodash_hash_undefined__",l=500,u="__lodash_placeholder__",f=1,h=2,m=4,g=1,v=2,M=1,w=2,_=4,y=8,P=16,N=32,I=64,G=128,V=256,F=512,j=30,A="...",C=800,k=16,se=1,J=2,de=3,le=1/0,ne=9007199254740991,he=17976931348623157e292,K=NaN,ge=4294967295,Ne=ge-1,Ve=ge>>>1,pt=[["ary",G],["bind",M],["bindKey",w],["curry",y],["curryRight",P],["flip",F],["partial",N],["partialRight",I],["rearg",V]],Rt="[object Arguments]",ie="[object Array]",ve="[object AsyncFunction]",Pe="[object Boolean]",ye="[object Date]",qe="[object DOMException]",Mt="[object Error]",We="[object Function]",an="[object GeneratorFunction]",Dt="[object Map]",dt="[object Number]",L="[object Null]",hn="[object Object]",St="[object Promise]",Et="[object Proxy]",Be="[object RegExp]",yt="[object Set]",Fe="[object String]",D="[object Symbol]",S="[object Undefined]",$="[object WeakMap]",ae="[object WeakSet]",ue="[object ArrayBuffer]",te="[object DataView]",ke="[object Float32Array]",_e="[object Float64Array]",Ce="[object Int8Array]",_t="[object Int16Array]",me="[object Int32Array]",Ae="[object Uint8Array]",je="[object Uint8ClampedArray]",Ze="[object Uint16Array]",Ie="[object Uint32Array]",wt=/\b__p \+= '';/g,ot=/\b(__p \+=) '' \+/g,Xt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,U=/&(?:amp|lt|gt|quot|#39);/g,Ee=/[&<>"']/g,Q=RegExp(U.source),ce=RegExp(Ee.source),Te=/<%-([\s\S]+?)%>/g,we=/<%([\s\S]+?)%>/g,tt=/<%=([\s\S]+?)%>/g,cn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nn=/^\w*$/,Ht=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ti=/[\\^$.*+?()[\]{}|]/g,ir=RegExp(ti.source),ea=/^\s+/,Ru=/\s/,Vr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Uc=/\{\n\/\* \[wrapped with (.+)\] \*/,Nu=/,? & /,Pu=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ta=/[()=,{}\[\]\/\s]/,Ou=/\\(\\)?/g,na=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Bc=/\w*$/,Lu=/^[-+]0x[0-9a-f]+$/i,um=/^0b[01]+$/i,dm=/^\[object .+?Constructor\]$/,fm=/^0o[0-7]+$/i,hm=/^(?:0|[1-9]\d*)$/,pm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ia=/($^)/,b=/['\n\r\u2028\u2029\\]/g,H="\\ud800-\\udfff",q="\\u0300-\\u036f",X="\\ufe20-\\ufe2f",W="\\u20d0-\\u20ff",pe=q+X+W,xe="\\u2700-\\u27bf",De="a-z\\xdf-\\xf6\\xf8-\\xff",Oe="\\xac\\xb1\\xd7\\xf7",Ke="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Je="\\u2000-\\u206f",He=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",bt="A-Z\\xc0-\\xd6\\xd8-\\xde",Lt="\\ufe0e\\ufe0f",dn=Oe+Ke+Je+He,Qt="['\u2019]",Nt="["+H+"]",ze="["+dn+"]",pn="["+pe+"]",Ft="\\d+",yi="["+xe+"]",Hr="["+De+"]",jn="[^"+H+dn+Ft+xe+De+bt+"]",zr="\\ud83c[\\udffb-\\udfff]",en="(?:"+pn+"|"+zr+")",ni="[^"+H+"]",$n="(?:\\ud83c[\\udde6-\\uddff]){2}",bn="[\\ud800-\\udbff][\\udc00-\\udfff]",yn="["+bt+"]",ra="\\u200d",Sr="(?:"+Hr+"|"+jn+")",OD="(?:"+yn+"|"+jn+")",O0="(?:"+Qt+"(?:d|ll|m|re|s|t|ve))?",L0="(?:"+Qt+"(?:D|LL|M|RE|S|T|VE))?",F0=en+"?",k0="["+Lt+"]?",LD="(?:"+ra+"(?:"+[ni,$n,bn].join("|")+")"+k0+F0+")*",FD="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",kD="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",U0=k0+F0+LD,UD="(?:"+[yi,$n,bn].join("|")+")"+U0,BD="(?:"+[ni+pn+"?",pn,$n,bn,Nt].join("|")+")",VD=RegExp(Qt,"g"),HD=RegExp(pn,"g"),mm=RegExp(zr+"(?="+zr+")|"+BD+U0,"g"),zD=RegExp([yn+"?"+Hr+"+"+O0+"(?="+[ze,yn,"$"].join("|")+")",OD+"+"+L0+"(?="+[ze,yn+Sr,"$"].join("|")+")",yn+"?"+Sr+"+"+O0,yn+"+"+L0,kD,FD,Ft,UD].join("|"),"g"),GD=RegExp("["+ra+H+pe+Lt+"]"),WD=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,jD=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],$D=-1,sn={};sn[ke]=sn[_e]=sn[Ce]=sn[_t]=sn[me]=sn[Ae]=sn[je]=sn[Ze]=sn[Ie]=!0,sn[Rt]=sn[ie]=sn[ue]=sn[Pe]=sn[te]=sn[ye]=sn[Mt]=sn[We]=sn[Dt]=sn[dt]=sn[hn]=sn[Be]=sn[yt]=sn[Fe]=sn[$]=!1;var tn={};tn[Rt]=tn[ie]=tn[ue]=tn[te]=tn[Pe]=tn[ye]=tn[ke]=tn[_e]=tn[Ce]=tn[_t]=tn[me]=tn[Dt]=tn[dt]=tn[hn]=tn[Be]=tn[yt]=tn[Fe]=tn[D]=tn[Ae]=tn[je]=tn[Ze]=tn[Ie]=!0,tn[Mt]=tn[We]=tn[$]=!1;var qD={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},XD={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},YD={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},ZD={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},JD=parseFloat,KD=parseInt,B0=typeof global=="object"&&global&&global.Object===Object&&global,QD=typeof self=="object"&&self&&self.Object===Object&&self,Pn=B0||QD||Function("return this")(),gm=typeof Fc=="object"&&Fc&&!Fc.nodeType&&Fc,co=gm&&typeof Iu=="object"&&Iu&&!Iu.nodeType&&Iu,V0=co&&co.exports===gm,vm=V0&&B0.process,ki=function(){try{var B=co&&co.require&&co.require("util").types;return B||vm&&vm.binding&&vm.binding("util")}catch{}}(),H0=ki&&ki.isArrayBuffer,z0=ki&&ki.isDate,G0=ki&&ki.isMap,W0=ki&&ki.isRegExp,j0=ki&&ki.isSet,$0=ki&&ki.isTypedArray;function _i(B,ee,Y){switch(Y.length){case 0:return B.call(ee);case 1:return B.call(ee,Y[0]);case 2:return B.call(ee,Y[0],Y[1]);case 3:return B.call(ee,Y[0],Y[1],Y[2])}return B.apply(ee,Y)}function eA(B,ee,Y,Re){for(var nt=-1,zt=B==null?0:B.length;++nt<zt;){var Tn=B[nt];ee(Re,Tn,Y(Tn),B)}return Re}function Ui(B,ee){for(var Y=-1,Re=B==null?0:B.length;++Y<Re&&ee(B[Y],Y,B)!==!1;);return B}function tA(B,ee){for(var Y=B==null?0:B.length;Y--&&ee(B[Y],Y,B)!==!1;);return B}function q0(B,ee){for(var Y=-1,Re=B==null?0:B.length;++Y<Re;)if(!ee(B[Y],Y,B))return!1;return!0}function Es(B,ee){for(var Y=-1,Re=B==null?0:B.length,nt=0,zt=[];++Y<Re;){var Tn=B[Y];ee(Tn,Y,B)&&(zt[nt++]=Tn)}return zt}function Fu(B,ee){var Y=B==null?0:B.length;return!!Y&&sa(B,ee,0)>-1}function ym(B,ee,Y){for(var Re=-1,nt=B==null?0:B.length;++Re<nt;)if(Y(ee,B[Re]))return!0;return!1}function ln(B,ee){for(var Y=-1,Re=B==null?0:B.length,nt=Array(Re);++Y<Re;)nt[Y]=ee(B[Y],Y,B);return nt}function ws(B,ee){for(var Y=-1,Re=ee.length,nt=B.length;++Y<Re;)B[nt+Y]=ee[Y];return B}function _m(B,ee,Y,Re){var nt=-1,zt=B==null?0:B.length;for(Re&&zt&&(Y=B[++nt]);++nt<zt;)Y=ee(Y,B[nt],nt,B);return Y}function nA(B,ee,Y,Re){var nt=B==null?0:B.length;for(Re&&nt&&(Y=B[--nt]);nt--;)Y=ee(Y,B[nt],nt,B);return Y}function xm(B,ee){for(var Y=-1,Re=B==null?0:B.length;++Y<Re;)if(ee(B[Y],Y,B))return!0;return!1}var iA=Mm("length");function rA(B){return B.split("")}function sA(B){return B.match(Pu)||[]}function X0(B,ee,Y){var Re;return Y(B,function(nt,zt,Tn){if(ee(nt,zt,Tn))return Re=zt,!1}),Re}function ku(B,ee,Y,Re){for(var nt=B.length,zt=Y+(Re?1:-1);Re?zt--:++zt<nt;)if(ee(B[zt],zt,B))return zt;return-1}function sa(B,ee,Y){return ee===ee?vA(B,ee,Y):ku(B,Y0,Y)}function oA(B,ee,Y,Re){for(var nt=Y-1,zt=B.length;++nt<zt;)if(Re(B[nt],ee))return nt;return-1}function Y0(B){return B!==B}function Z0(B,ee){var Y=B==null?0:B.length;return Y?Em(B,ee)/Y:K}function Mm(B){return function(ee){return ee==null?n:ee[B]}}function Sm(B){return function(ee){return B==null?n:B[ee]}}function J0(B,ee,Y,Re,nt){return nt(B,function(zt,Tn,Jt){Y=Re?(Re=!1,zt):ee(Y,zt,Tn,Jt)}),Y}function aA(B,ee){var Y=B.length;for(B.sort(ee);Y--;)B[Y]=B[Y].value;return B}function Em(B,ee){for(var Y,Re=-1,nt=B.length;++Re<nt;){var zt=ee(B[Re]);zt!==n&&(Y=Y===n?zt:Y+zt)}return Y}function wm(B,ee){for(var Y=-1,Re=Array(B);++Y<B;)Re[Y]=ee(Y);return Re}function cA(B,ee){return ln(ee,function(Y){return[Y,B[Y]]})}function K0(B){return B&&B.slice(0,nx(B)+1).replace(ea,"")}function xi(B){return function(ee){return B(ee)}}function bm(B,ee){return ln(ee,function(Y){return B[Y]})}function Vc(B,ee){return B.has(ee)}function Q0(B,ee){for(var Y=-1,Re=B.length;++Y<Re&&sa(ee,B[Y],0)>-1;);return Y}function ex(B,ee){for(var Y=B.length;Y--&&sa(ee,B[Y],0)>-1;);return Y}function lA(B,ee){for(var Y=B.length,Re=0;Y--;)B[Y]===ee&&++Re;return Re}var uA=Sm(qD),dA=Sm(XD);function fA(B){return"\\"+ZD[B]}function hA(B,ee){return B==null?n:B[ee]}function oa(B){return GD.test(B)}function pA(B){return WD.test(B)}function mA(B){for(var ee,Y=[];!(ee=B.next()).done;)Y.push(ee.value);return Y}function Tm(B){var ee=-1,Y=Array(B.size);return B.forEach(function(Re,nt){Y[++ee]=[nt,Re]}),Y}function tx(B,ee){return function(Y){return B(ee(Y))}}function bs(B,ee){for(var Y=-1,Re=B.length,nt=0,zt=[];++Y<Re;){var Tn=B[Y];(Tn===ee||Tn===u)&&(B[Y]=u,zt[nt++]=Y)}return zt}function Uu(B){var ee=-1,Y=Array(B.size);return B.forEach(function(Re){Y[++ee]=Re}),Y}function gA(B){var ee=-1,Y=Array(B.size);return B.forEach(function(Re){Y[++ee]=[Re,Re]}),Y}function vA(B,ee,Y){for(var Re=Y-1,nt=B.length;++Re<nt;)if(B[Re]===ee)return Re;return-1}function yA(B,ee,Y){for(var Re=Y+1;Re--;)if(B[Re]===ee)return Re;return Re}function aa(B){return oa(B)?xA(B):iA(B)}function rr(B){return oa(B)?MA(B):rA(B)}function nx(B){for(var ee=B.length;ee--&&Ru.test(B.charAt(ee)););return ee}var _A=Sm(YD);function xA(B){for(var ee=mm.lastIndex=0;mm.test(B);)++ee;return ee}function MA(B){return B.match(mm)||[]}function SA(B){return B.match(zD)||[]}var EA=function B(ee){ee=ee==null?Pn:Ts.defaults(Pn.Object(),ee,Ts.pick(Pn,jD));var Y=ee.Array,Re=ee.Date,nt=ee.Error,zt=ee.Function,Tn=ee.Math,Jt=ee.Object,Cm=ee.RegExp,wA=ee.String,Bi=ee.TypeError,Bu=Y.prototype,bA=zt.prototype,ca=Jt.prototype,Vu=ee["__core-js_shared__"],Hu=bA.toString,$t=ca.hasOwnProperty,TA=0,ix=function(){var o=/[^.]+$/.exec(Vu&&Vu.keys&&Vu.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),zu=ca.toString,CA=Hu.call(Jt),DA=Pn._,AA=Cm("^"+Hu.call($t).replace(ti,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Gu=V0?ee.Buffer:n,Cs=ee.Symbol,Wu=ee.Uint8Array,rx=Gu?Gu.allocUnsafe:n,ju=tx(Jt.getPrototypeOf,Jt),sx=Jt.create,ox=ca.propertyIsEnumerable,$u=Bu.splice,ax=Cs?Cs.isConcatSpreadable:n,Hc=Cs?Cs.iterator:n,lo=Cs?Cs.toStringTag:n,qu=function(){try{var o=mo(Jt,"defineProperty");return o({},"",{}),o}catch{}}(),IA=ee.clearTimeout!==Pn.clearTimeout&&ee.clearTimeout,RA=Re&&Re.now!==Pn.Date.now&&Re.now,NA=ee.setTimeout!==Pn.setTimeout&&ee.setTimeout,Xu=Tn.ceil,Yu=Tn.floor,Dm=Jt.getOwnPropertySymbols,PA=Gu?Gu.isBuffer:n,cx=ee.isFinite,OA=Bu.join,LA=tx(Jt.keys,Jt),Cn=Tn.max,qn=Tn.min,FA=Re.now,kA=ee.parseInt,lx=Tn.random,UA=Bu.reverse,Am=mo(ee,"DataView"),zc=mo(ee,"Map"),Im=mo(ee,"Promise"),la=mo(ee,"Set"),Gc=mo(ee,"WeakMap"),Wc=mo(Jt,"create"),Zu=Gc&&new Gc,ua={},BA=go(Am),VA=go(zc),HA=go(Im),zA=go(la),GA=go(Gc),Ju=Cs?Cs.prototype:n,jc=Ju?Ju.valueOf:n,ux=Ju?Ju.toString:n;function E(o){if(mn(o)&&!it(o)&&!(o instanceof Tt)){if(o instanceof Vi)return o;if($t.call(o,"__wrapped__"))return dM(o)}return new Vi(o)}var da=function(){function o(){}return function(c){if(!fn(c))return{};if(sx)return sx(c);o.prototype=c;var d=new o;return o.prototype=n,d}}();function Ku(){}function Vi(o,c){this.__wrapped__=o,this.__actions__=[],this.__chain__=!!c,this.__index__=0,this.__values__=n}E.templateSettings={escape:Te,evaluate:we,interpolate:tt,variable:"",imports:{_:E}},E.prototype=Ku.prototype,E.prototype.constructor=E,Vi.prototype=da(Ku.prototype),Vi.prototype.constructor=Vi;function Tt(o){this.__wrapped__=o,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ge,this.__views__=[]}function WA(){var o=new Tt(this.__wrapped__);return o.__actions__=ui(this.__actions__),o.__dir__=this.__dir__,o.__filtered__=this.__filtered__,o.__iteratees__=ui(this.__iteratees__),o.__takeCount__=this.__takeCount__,o.__views__=ui(this.__views__),o}function jA(){if(this.__filtered__){var o=new Tt(this);o.__dir__=-1,o.__filtered__=!0}else o=this.clone(),o.__dir__*=-1;return o}function $A(){var o=this.__wrapped__.value(),c=this.__dir__,d=it(o),p=c<0,x=d?o.length:0,T=r1(0,x,this.__views__),R=T.start,O=T.end,z=O-R,re=p?O:R-1,oe=this.__iteratees__,fe=oe.length,Me=0,Ue=qn(z,this.__takeCount__);if(!d||!p&&x==z&&Ue==z)return Ox(o,this.__actions__);var Xe=[];e:for(;z--&&Me<Ue;){re+=c;for(var ft=-1,Ye=o[re];++ft<fe;){var xt=oe[ft],At=xt.iteratee,Ei=xt.type,si=At(Ye);if(Ei==J)Ye=si;else if(!si){if(Ei==se)continue e;break e}}Xe[Me++]=Ye}return Xe}Tt.prototype=da(Ku.prototype),Tt.prototype.constructor=Tt;function uo(o){var c=-1,d=o==null?0:o.length;for(this.clear();++c<d;){var p=o[c];this.set(p[0],p[1])}}function qA(){this.__data__=Wc?Wc(null):{},this.size=0}function XA(o){var c=this.has(o)&&delete this.__data__[o];return this.size-=c?1:0,c}function YA(o){var c=this.__data__;if(Wc){var d=c[o];return d===a?n:d}return $t.call(c,o)?c[o]:n}function ZA(o){var c=this.__data__;return Wc?c[o]!==n:$t.call(c,o)}function JA(o,c){var d=this.__data__;return this.size+=this.has(o)?0:1,d[o]=Wc&&c===n?a:c,this}uo.prototype.clear=qA,uo.prototype.delete=XA,uo.prototype.get=YA,uo.prototype.has=ZA,uo.prototype.set=JA;function Gr(o){var c=-1,d=o==null?0:o.length;for(this.clear();++c<d;){var p=o[c];this.set(p[0],p[1])}}function KA(){this.__data__=[],this.size=0}function QA(o){var c=this.__data__,d=Qu(c,o);if(d<0)return!1;var p=c.length-1;return d==p?c.pop():$u.call(c,d,1),--this.size,!0}function eI(o){var c=this.__data__,d=Qu(c,o);return d<0?n:c[d][1]}function tI(o){return Qu(this.__data__,o)>-1}function nI(o,c){var d=this.__data__,p=Qu(d,o);return p<0?(++this.size,d.push([o,c])):d[p][1]=c,this}Gr.prototype.clear=KA,Gr.prototype.delete=QA,Gr.prototype.get=eI,Gr.prototype.has=tI,Gr.prototype.set=nI;function Wr(o){var c=-1,d=o==null?0:o.length;for(this.clear();++c<d;){var p=o[c];this.set(p[0],p[1])}}function iI(){this.size=0,this.__data__={hash:new uo,map:new(zc||Gr),string:new uo}}function rI(o){var c=dd(this,o).delete(o);return this.size-=c?1:0,c}function sI(o){return dd(this,o).get(o)}function oI(o){return dd(this,o).has(o)}function aI(o,c){var d=dd(this,o),p=d.size;return d.set(o,c),this.size+=d.size==p?0:1,this}Wr.prototype.clear=iI,Wr.prototype.delete=rI,Wr.prototype.get=sI,Wr.prototype.has=oI,Wr.prototype.set=aI;function fo(o){var c=-1,d=o==null?0:o.length;for(this.__data__=new Wr;++c<d;)this.add(o[c])}function cI(o){return this.__data__.set(o,a),this}function lI(o){return this.__data__.has(o)}fo.prototype.add=fo.prototype.push=cI,fo.prototype.has=lI;function sr(o){var c=this.__data__=new Gr(o);this.size=c.size}function uI(){this.__data__=new Gr,this.size=0}function dI(o){var c=this.__data__,d=c.delete(o);return this.size=c.size,d}function fI(o){return this.__data__.get(o)}function hI(o){return this.__data__.has(o)}function pI(o,c){var d=this.__data__;if(d instanceof Gr){var p=d.__data__;if(!zc||p.length<t-1)return p.push([o,c]),this.size=++d.size,this;d=this.__data__=new Wr(p)}return d.set(o,c),this.size=d.size,this}sr.prototype.clear=uI,sr.prototype.delete=dI,sr.prototype.get=fI,sr.prototype.has=hI,sr.prototype.set=pI;function dx(o,c){var d=it(o),p=!d&&vo(o),x=!d&&!p&&Ns(o),T=!d&&!p&&!x&&ma(o),R=d||p||x||T,O=R?wm(o.length,wA):[],z=O.length;for(var re in o)(c||$t.call(o,re))&&!(R&&(re=="length"||x&&(re=="offset"||re=="parent")||T&&(re=="buffer"||re=="byteLength"||re=="byteOffset")||Xr(re,z)))&&O.push(re);return O}function fx(o){var c=o.length;return c?o[Hm(0,c-1)]:n}function mI(o,c){return fd(ui(o),ho(c,0,o.length))}function gI(o){return fd(ui(o))}function Rm(o,c,d){(d!==n&&!or(o[c],d)||d===n&&!(c in o))&&jr(o,c,d)}function $c(o,c,d){var p=o[c];(!($t.call(o,c)&&or(p,d))||d===n&&!(c in o))&&jr(o,c,d)}function Qu(o,c){for(var d=o.length;d--;)if(or(o[d][0],c))return d;return-1}function vI(o,c,d,p){return Ds(o,function(x,T,R){c(p,x,d(x),R)}),p}function hx(o,c){return o&&wr(c,On(c),o)}function yI(o,c){return o&&wr(c,fi(c),o)}function jr(o,c,d){c=="__proto__"&&qu?qu(o,c,{configurable:!0,enumerable:!0,value:d,writable:!0}):o[c]=d}function Nm(o,c){for(var d=-1,p=c.length,x=Y(p),T=o==null;++d<p;)x[d]=T?n:fg(o,c[d]);return x}function ho(o,c,d){return o===o&&(d!==n&&(o=o<=d?o:d),c!==n&&(o=o>=c?o:c)),o}function Hi(o,c,d,p,x,T){var R,O=c&f,z=c&h,re=c&m;if(d&&(R=x?d(o,p,x,T):d(o)),R!==n)return R;if(!fn(o))return o;var oe=it(o);if(oe){if(R=o1(o),!O)return ui(o,R)}else{var fe=Xn(o),Me=fe==We||fe==an;if(Ns(o))return kx(o,O);if(fe==hn||fe==Rt||Me&&!x){if(R=z||Me?{}:nM(o),!O)return z?YI(o,yI(R,o)):XI(o,hx(R,o))}else{if(!tn[fe])return x?o:{};R=a1(o,fe,O)}}T||(T=new sr);var Ue=T.get(o);if(Ue)return Ue;T.set(o,R),RM(o)?o.forEach(function(Ye){R.add(Hi(Ye,c,d,Ye,o,T))}):AM(o)&&o.forEach(function(Ye,xt){R.set(xt,Hi(Ye,c,d,xt,o,T))});var Xe=re?z?Km:Jm:z?fi:On,ft=oe?n:Xe(o);return Ui(ft||o,function(Ye,xt){ft&&(xt=Ye,Ye=o[xt]),$c(R,xt,Hi(Ye,c,d,xt,o,T))}),R}function _I(o){var c=On(o);return function(d){return px(d,o,c)}}function px(o,c,d){var p=d.length;if(o==null)return!p;for(o=Jt(o);p--;){var x=d[p],T=c[x],R=o[x];if(R===n&&!(x in o)||!T(R))return!1}return!0}function mx(o,c,d){if(typeof o!="function")throw new Bi(r);return Qc(function(){o.apply(n,d)},c)}function qc(o,c,d,p){var x=-1,T=Fu,R=!0,O=o.length,z=[],re=c.length;if(!O)return z;d&&(c=ln(c,xi(d))),p?(T=ym,R=!1):c.length>=t&&(T=Vc,R=!1,c=new fo(c));e:for(;++x<O;){var oe=o[x],fe=d==null?oe:d(oe);if(oe=p||oe!==0?oe:0,R&&fe===fe){for(var Me=re;Me--;)if(c[Me]===fe)continue e;z.push(oe)}else T(c,fe,p)||z.push(oe)}return z}var Ds=zx(Er),gx=zx(Om,!0);function xI(o,c){var d=!0;return Ds(o,function(p,x,T){return d=!!c(p,x,T),d}),d}function ed(o,c,d){for(var p=-1,x=o.length;++p<x;){var T=o[p],R=c(T);if(R!=null&&(O===n?R===R&&!Si(R):d(R,O)))var O=R,z=T}return z}function MI(o,c,d,p){var x=o.length;for(d=lt(d),d<0&&(d=-d>x?0:x+d),p=p===n||p>x?x:lt(p),p<0&&(p+=x),p=d>p?0:PM(p);d<p;)o[d++]=c;return o}function vx(o,c){var d=[];return Ds(o,function(p,x,T){c(p,x,T)&&d.push(p)}),d}function Un(o,c,d,p,x){var T=-1,R=o.length;for(d||(d=l1),x||(x=[]);++T<R;){var O=o[T];c>0&&d(O)?c>1?Un(O,c-1,d,p,x):ws(x,O):p||(x[x.length]=O)}return x}var Pm=Gx(),yx=Gx(!0);function Er(o,c){return o&&Pm(o,c,On)}function Om(o,c){return o&&yx(o,c,On)}function td(o,c){return Es(c,function(d){return Yr(o[d])})}function po(o,c){c=Is(c,o);for(var d=0,p=c.length;o!=null&&d<p;)o=o[br(c[d++])];return d&&d==p?o:n}function _x(o,c,d){var p=c(o);return it(o)?p:ws(p,d(o))}function ii(o){return o==null?o===n?S:L:lo&&lo in Jt(o)?i1(o):g1(o)}function Lm(o,c){return o>c}function SI(o,c){return o!=null&&$t.call(o,c)}function EI(o,c){return o!=null&&c in Jt(o)}function wI(o,c,d){return o>=qn(c,d)&&o<Cn(c,d)}function Fm(o,c,d){for(var p=d?ym:Fu,x=o[0].length,T=o.length,R=T,O=Y(T),z=1/0,re=[];R--;){var oe=o[R];R&&c&&(oe=ln(oe,xi(c))),z=qn(oe.length,z),O[R]=!d&&(c||x>=120&&oe.length>=120)?new fo(R&&oe):n}oe=o[0];var fe=-1,Me=O[0];e:for(;++fe<x&&re.length<z;){var Ue=oe[fe],Xe=c?c(Ue):Ue;if(Ue=d||Ue!==0?Ue:0,!(Me?Vc(Me,Xe):p(re,Xe,d))){for(R=T;--R;){var ft=O[R];if(!(ft?Vc(ft,Xe):p(o[R],Xe,d)))continue e}Me&&Me.push(Xe),re.push(Ue)}}return re}function bI(o,c,d,p){return Er(o,function(x,T,R){c(p,d(x),T,R)}),p}function Xc(o,c,d){c=Is(c,o),o=oM(o,c);var p=o==null?o:o[br(Gi(c))];return p==null?n:_i(p,o,d)}function xx(o){return mn(o)&&ii(o)==Rt}function TI(o){return mn(o)&&ii(o)==ue}function CI(o){return mn(o)&&ii(o)==ye}function Yc(o,c,d,p,x){return o===c?!0:o==null||c==null||!mn(o)&&!mn(c)?o!==o&&c!==c:DI(o,c,d,p,Yc,x)}function DI(o,c,d,p,x,T){var R=it(o),O=it(c),z=R?ie:Xn(o),re=O?ie:Xn(c);z=z==Rt?hn:z,re=re==Rt?hn:re;var oe=z==hn,fe=re==hn,Me=z==re;if(Me&&Ns(o)){if(!Ns(c))return!1;R=!0,oe=!1}if(Me&&!oe)return T||(T=new sr),R||ma(o)?Qx(o,c,d,p,x,T):t1(o,c,z,d,p,x,T);if(!(d&g)){var Ue=oe&&$t.call(o,"__wrapped__"),Xe=fe&&$t.call(c,"__wrapped__");if(Ue||Xe){var ft=Ue?o.value():o,Ye=Xe?c.value():c;return T||(T=new sr),x(ft,Ye,d,p,T)}}return Me?(T||(T=new sr),n1(o,c,d,p,x,T)):!1}function AI(o){return mn(o)&&Xn(o)==Dt}function km(o,c,d,p){var x=d.length,T=x,R=!p;if(o==null)return!T;for(o=Jt(o);x--;){var O=d[x];if(R&&O[2]?O[1]!==o[O[0]]:!(O[0]in o))return!1}for(;++x<T;){O=d[x];var z=O[0],re=o[z],oe=O[1];if(R&&O[2]){if(re===n&&!(z in o))return!1}else{var fe=new sr;if(p)var Me=p(re,oe,z,o,c,fe);if(!(Me===n?Yc(oe,re,g|v,p,fe):Me))return!1}}return!0}function Mx(o){if(!fn(o)||d1(o))return!1;var c=Yr(o)?AA:dm;return c.test(go(o))}function II(o){return mn(o)&&ii(o)==Be}function RI(o){return mn(o)&&Xn(o)==yt}function NI(o){return mn(o)&&yd(o.length)&&!!sn[ii(o)]}function Sx(o){return typeof o=="function"?o:o==null?hi:typeof o=="object"?it(o)?bx(o[0],o[1]):wx(o):WM(o)}function Um(o){if(!Kc(o))return LA(o);var c=[];for(var d in Jt(o))$t.call(o,d)&&d!="constructor"&&c.push(d);return c}function PI(o){if(!fn(o))return m1(o);var c=Kc(o),d=[];for(var p in o)p=="constructor"&&(c||!$t.call(o,p))||d.push(p);return d}function Bm(o,c){return o<c}function Ex(o,c){var d=-1,p=di(o)?Y(o.length):[];return Ds(o,function(x,T,R){p[++d]=c(x,T,R)}),p}function wx(o){var c=eg(o);return c.length==1&&c[0][2]?rM(c[0][0],c[0][1]):function(d){return d===o||km(d,o,c)}}function bx(o,c){return ng(o)&&iM(c)?rM(br(o),c):function(d){var p=fg(d,o);return p===n&&p===c?hg(d,o):Yc(c,p,g|v)}}function nd(o,c,d,p,x){o!==c&&Pm(c,function(T,R){if(x||(x=new sr),fn(T))OI(o,c,R,d,nd,p,x);else{var O=p?p(rg(o,R),T,R+"",o,c,x):n;O===n&&(O=T),Rm(o,R,O)}},fi)}function OI(o,c,d,p,x,T,R){var O=rg(o,d),z=rg(c,d),re=R.get(z);if(re){Rm(o,d,re);return}var oe=T?T(O,z,d+"",o,c,R):n,fe=oe===n;if(fe){var Me=it(z),Ue=!Me&&Ns(z),Xe=!Me&&!Ue&&ma(z);oe=z,Me||Ue||Xe?it(O)?oe=O:_n(O)?oe=ui(O):Ue?(fe=!1,oe=kx(z,!0)):Xe?(fe=!1,oe=Ux(z,!0)):oe=[]:el(z)||vo(z)?(oe=O,vo(O)?oe=OM(O):(!fn(O)||Yr(O))&&(oe=nM(z))):fe=!1}fe&&(R.set(z,oe),x(oe,z,p,T,R),R.delete(z)),Rm(o,d,oe)}function Tx(o,c){var d=o.length;if(d)return c+=c<0?d:0,Xr(c,d)?o[c]:n}function Cx(o,c,d){c.length?c=ln(c,function(T){return it(T)?function(R){return po(R,T.length===1?T[0]:T)}:T}):c=[hi];var p=-1;c=ln(c,xi($e()));var x=Ex(o,function(T,R,O){var z=ln(c,function(re){return re(T)});return{criteria:z,index:++p,value:T}});return aA(x,function(T,R){return qI(T,R,d)})}function LI(o,c){return Dx(o,c,function(d,p){return hg(o,p)})}function Dx(o,c,d){for(var p=-1,x=c.length,T={};++p<x;){var R=c[p],O=po(o,R);d(O,R)&&Zc(T,Is(R,o),O)}return T}function FI(o){return function(c){return po(c,o)}}function Vm(o,c,d,p){var x=p?oA:sa,T=-1,R=c.length,O=o;for(o===c&&(c=ui(c)),d&&(O=ln(o,xi(d)));++T<R;)for(var z=0,re=c[T],oe=d?d(re):re;(z=x(O,oe,z,p))>-1;)O!==o&&$u.call(O,z,1),$u.call(o,z,1);return o}function Ax(o,c){for(var d=o?c.length:0,p=d-1;d--;){var x=c[d];if(d==p||x!==T){var T=x;Xr(x)?$u.call(o,x,1):Wm(o,x)}}return o}function Hm(o,c){return o+Yu(lx()*(c-o+1))}function kI(o,c,d,p){for(var x=-1,T=Cn(Xu((c-o)/(d||1)),0),R=Y(T);T--;)R[p?T:++x]=o,o+=d;return R}function zm(o,c){var d="";if(!o||c<1||c>ne)return d;do c%2&&(d+=o),c=Yu(c/2),c&&(o+=o);while(c);return d}function mt(o,c){return sg(sM(o,c,hi),o+"")}function UI(o){return fx(ga(o))}function BI(o,c){var d=ga(o);return fd(d,ho(c,0,d.length))}function Zc(o,c,d,p){if(!fn(o))return o;c=Is(c,o);for(var x=-1,T=c.length,R=T-1,O=o;O!=null&&++x<T;){var z=br(c[x]),re=d;if(z==="__proto__"||z==="constructor"||z==="prototype")return o;if(x!=R){var oe=O[z];re=p?p(oe,z,O):n,re===n&&(re=fn(oe)?oe:Xr(c[x+1])?[]:{})}$c(O,z,re),O=O[z]}return o}var Ix=Zu?function(o,c){return Zu.set(o,c),o}:hi,VI=qu?function(o,c){return qu(o,"toString",{configurable:!0,enumerable:!1,value:mg(c),writable:!0})}:hi;function HI(o){return fd(ga(o))}function zi(o,c,d){var p=-1,x=o.length;c<0&&(c=-c>x?0:x+c),d=d>x?x:d,d<0&&(d+=x),x=c>d?0:d-c>>>0,c>>>=0;for(var T=Y(x);++p<x;)T[p]=o[p+c];return T}function zI(o,c){var d;return Ds(o,function(p,x,T){return d=c(p,x,T),!d}),!!d}function id(o,c,d){var p=0,x=o==null?p:o.length;if(typeof c=="number"&&c===c&&x<=Ve){for(;p<x;){var T=p+x>>>1,R=o[T];R!==null&&!Si(R)&&(d?R<=c:R<c)?p=T+1:x=T}return x}return Gm(o,c,hi,d)}function Gm(o,c,d,p){var x=0,T=o==null?0:o.length;if(T===0)return 0;c=d(c);for(var R=c!==c,O=c===null,z=Si(c),re=c===n;x<T;){var oe=Yu((x+T)/2),fe=d(o[oe]),Me=fe!==n,Ue=fe===null,Xe=fe===fe,ft=Si(fe);if(R)var Ye=p||Xe;else re?Ye=Xe&&(p||Me):O?Ye=Xe&&Me&&(p||!Ue):z?Ye=Xe&&Me&&!Ue&&(p||!ft):Ue||ft?Ye=!1:Ye=p?fe<=c:fe<c;Ye?x=oe+1:T=oe}return qn(T,Ne)}function Rx(o,c){for(var d=-1,p=o.length,x=0,T=[];++d<p;){var R=o[d],O=c?c(R):R;if(!d||!or(O,z)){var z=O;T[x++]=R===0?0:R}}return T}function Nx(o){return typeof o=="number"?o:Si(o)?K:+o}function Mi(o){if(typeof o=="string")return o;if(it(o))return ln(o,Mi)+"";if(Si(o))return ux?ux.call(o):"";var c=o+"";return c=="0"&&1/o==-le?"-0":c}function As(o,c,d){var p=-1,x=Fu,T=o.length,R=!0,O=[],z=O;if(d)R=!1,x=ym;else if(T>=t){var re=c?null:QI(o);if(re)return Uu(re);R=!1,x=Vc,z=new fo}else z=c?[]:O;e:for(;++p<T;){var oe=o[p],fe=c?c(oe):oe;if(oe=d||oe!==0?oe:0,R&&fe===fe){for(var Me=z.length;Me--;)if(z[Me]===fe)continue e;c&&z.push(fe),O.push(oe)}else x(z,fe,d)||(z!==O&&z.push(fe),O.push(oe))}return O}function Wm(o,c){return c=Is(c,o),o=oM(o,c),o==null||delete o[br(Gi(c))]}function Px(o,c,d,p){return Zc(o,c,d(po(o,c)),p)}function rd(o,c,d,p){for(var x=o.length,T=p?x:-1;(p?T--:++T<x)&&c(o[T],T,o););return d?zi(o,p?0:T,p?T+1:x):zi(o,p?T+1:0,p?x:T)}function Ox(o,c){var d=o;return d instanceof Tt&&(d=d.value()),_m(c,function(p,x){return x.func.apply(x.thisArg,ws([p],x.args))},d)}function jm(o,c,d){var p=o.length;if(p<2)return p?As(o[0]):[];for(var x=-1,T=Y(p);++x<p;)for(var R=o[x],O=-1;++O<p;)O!=x&&(T[x]=qc(T[x]||R,o[O],c,d));return As(Un(T,1),c,d)}function Lx(o,c,d){for(var p=-1,x=o.length,T=c.length,R={};++p<x;){var O=p<T?c[p]:n;d(R,o[p],O)}return R}function $m(o){return _n(o)?o:[]}function qm(o){return typeof o=="function"?o:hi}function Is(o,c){return it(o)?o:ng(o,c)?[o]:uM(Wt(o))}var GI=mt;function Rs(o,c,d){var p=o.length;return d=d===n?p:d,!c&&d>=p?o:zi(o,c,d)}var Fx=IA||function(o){return Pn.clearTimeout(o)};function kx(o,c){if(c)return o.slice();var d=o.length,p=rx?rx(d):new o.constructor(d);return o.copy(p),p}function Xm(o){var c=new o.constructor(o.byteLength);return new Wu(c).set(new Wu(o)),c}function WI(o,c){var d=c?Xm(o.buffer):o.buffer;return new o.constructor(d,o.byteOffset,o.byteLength)}function jI(o){var c=new o.constructor(o.source,Bc.exec(o));return c.lastIndex=o.lastIndex,c}function $I(o){return jc?Jt(jc.call(o)):{}}function Ux(o,c){var d=c?Xm(o.buffer):o.buffer;return new o.constructor(d,o.byteOffset,o.length)}function Bx(o,c){if(o!==c){var d=o!==n,p=o===null,x=o===o,T=Si(o),R=c!==n,O=c===null,z=c===c,re=Si(c);if(!O&&!re&&!T&&o>c||T&&R&&z&&!O&&!re||p&&R&&z||!d&&z||!x)return 1;if(!p&&!T&&!re&&o<c||re&&d&&x&&!p&&!T||O&&d&&x||!R&&x||!z)return-1}return 0}function qI(o,c,d){for(var p=-1,x=o.criteria,T=c.criteria,R=x.length,O=d.length;++p<R;){var z=Bx(x[p],T[p]);if(z){if(p>=O)return z;var re=d[p];return z*(re=="desc"?-1:1)}}return o.index-c.index}function Vx(o,c,d,p){for(var x=-1,T=o.length,R=d.length,O=-1,z=c.length,re=Cn(T-R,0),oe=Y(z+re),fe=!p;++O<z;)oe[O]=c[O];for(;++x<R;)(fe||x<T)&&(oe[d[x]]=o[x]);for(;re--;)oe[O++]=o[x++];return oe}function Hx(o,c,d,p){for(var x=-1,T=o.length,R=-1,O=d.length,z=-1,re=c.length,oe=Cn(T-O,0),fe=Y(oe+re),Me=!p;++x<oe;)fe[x]=o[x];for(var Ue=x;++z<re;)fe[Ue+z]=c[z];for(;++R<O;)(Me||x<T)&&(fe[Ue+d[R]]=o[x++]);return fe}function ui(o,c){var d=-1,p=o.length;for(c||(c=Y(p));++d<p;)c[d]=o[d];return c}function wr(o,c,d,p){var x=!d;d||(d={});for(var T=-1,R=c.length;++T<R;){var O=c[T],z=p?p(d[O],o[O],O,d,o):n;z===n&&(z=o[O]),x?jr(d,O,z):$c(d,O,z)}return d}function XI(o,c){return wr(o,tg(o),c)}function YI(o,c){return wr(o,eM(o),c)}function sd(o,c){return function(d,p){var x=it(d)?eA:vI,T=c?c():{};return x(d,o,$e(p,2),T)}}function fa(o){return mt(function(c,d){var p=-1,x=d.length,T=x>1?d[x-1]:n,R=x>2?d[2]:n;for(T=o.length>3&&typeof T=="function"?(x--,T):n,R&&ri(d[0],d[1],R)&&(T=x<3?n:T,x=1),c=Jt(c);++p<x;){var O=d[p];O&&o(c,O,p,T)}return c})}function zx(o,c){return function(d,p){if(d==null)return d;if(!di(d))return o(d,p);for(var x=d.length,T=c?x:-1,R=Jt(d);(c?T--:++T<x)&&p(R[T],T,R)!==!1;);return d}}function Gx(o){return function(c,d,p){for(var x=-1,T=Jt(c),R=p(c),O=R.length;O--;){var z=R[o?O:++x];if(d(T[z],z,T)===!1)break}return c}}function ZI(o,c,d){var p=c&M,x=Jc(o);function T(){var R=this&&this!==Pn&&this instanceof T?x:o;return R.apply(p?d:this,arguments)}return T}function Wx(o){return function(c){c=Wt(c);var d=oa(c)?rr(c):n,p=d?d[0]:c.charAt(0),x=d?Rs(d,1).join(""):c.slice(1);return p[o]()+x}}function ha(o){return function(c){return _m(zM(HM(c).replace(VD,"")),o,"")}}function Jc(o){return function(){var c=arguments;switch(c.length){case 0:return new o;case 1:return new o(c[0]);case 2:return new o(c[0],c[1]);case 3:return new o(c[0],c[1],c[2]);case 4:return new o(c[0],c[1],c[2],c[3]);case 5:return new o(c[0],c[1],c[2],c[3],c[4]);case 6:return new o(c[0],c[1],c[2],c[3],c[4],c[5]);case 7:return new o(c[0],c[1],c[2],c[3],c[4],c[5],c[6])}var d=da(o.prototype),p=o.apply(d,c);return fn(p)?p:d}}function JI(o,c,d){var p=Jc(o);function x(){for(var T=arguments.length,R=Y(T),O=T,z=pa(x);O--;)R[O]=arguments[O];var re=T<3&&R[0]!==z&&R[T-1]!==z?[]:bs(R,z);if(T-=re.length,T<d)return Yx(o,c,od,x.placeholder,n,R,re,n,n,d-T);var oe=this&&this!==Pn&&this instanceof x?p:o;return _i(oe,this,R)}return x}function jx(o){return function(c,d,p){var x=Jt(c);if(!di(c)){var T=$e(d,3);c=On(c),d=function(O){return T(x[O],O,x)}}var R=o(c,d,p);return R>-1?x[T?c[R]:R]:n}}function $x(o){return qr(function(c){var d=c.length,p=d,x=Vi.prototype.thru;for(o&&c.reverse();p--;){var T=c[p];if(typeof T!="function")throw new Bi(r);if(x&&!R&&ud(T)=="wrapper")var R=new Vi([],!0)}for(p=R?p:d;++p<d;){T=c[p];var O=ud(T),z=O=="wrapper"?Qm(T):n;z&&ig(z[0])&&z[1]==(G|y|N|V)&&!z[4].length&&z[9]==1?R=R[ud(z[0])].apply(R,z[3]):R=T.length==1&&ig(T)?R[O]():R.thru(T)}return function(){var re=arguments,oe=re[0];if(R&&re.length==1&&it(oe))return R.plant(oe).value();for(var fe=0,Me=d?c[fe].apply(this,re):oe;++fe<d;)Me=c[fe].call(this,Me);return Me}})}function od(o,c,d,p,x,T,R,O,z,re){var oe=c&G,fe=c&M,Me=c&w,Ue=c&(y|P),Xe=c&F,ft=Me?n:Jc(o);function Ye(){for(var xt=arguments.length,At=Y(xt),Ei=xt;Ei--;)At[Ei]=arguments[Ei];if(Ue)var si=pa(Ye),wi=lA(At,si);if(p&&(At=Vx(At,p,x,Ue)),T&&(At=Hx(At,T,R,Ue)),xt-=wi,Ue&&xt<re){var xn=bs(At,si);return Yx(o,c,od,Ye.placeholder,d,At,xn,O,z,re-xt)}var ar=fe?d:this,Jr=Me?ar[o]:o;return xt=At.length,O?At=v1(At,O):Xe&&xt>1&&At.reverse(),oe&&z<xt&&(At.length=z),this&&this!==Pn&&this instanceof Ye&&(Jr=ft||Jc(Jr)),Jr.apply(ar,At)}return Ye}function qx(o,c){return function(d,p){return bI(d,o,c(p),{})}}function ad(o,c){return function(d,p){var x;if(d===n&&p===n)return c;if(d!==n&&(x=d),p!==n){if(x===n)return p;typeof d=="string"||typeof p=="string"?(d=Mi(d),p=Mi(p)):(d=Nx(d),p=Nx(p)),x=o(d,p)}return x}}function Ym(o){return qr(function(c){return c=ln(c,xi($e())),mt(function(d){var p=this;return o(c,function(x){return _i(x,p,d)})})})}function cd(o,c){c=c===n?" ":Mi(c);var d=c.length;if(d<2)return d?zm(c,o):c;var p=zm(c,Xu(o/aa(c)));return oa(c)?Rs(rr(p),0,o).join(""):p.slice(0,o)}function KI(o,c,d,p){var x=c&M,T=Jc(o);function R(){for(var O=-1,z=arguments.length,re=-1,oe=p.length,fe=Y(oe+z),Me=this&&this!==Pn&&this instanceof R?T:o;++re<oe;)fe[re]=p[re];for(;z--;)fe[re++]=arguments[++O];return _i(Me,x?d:this,fe)}return R}function Xx(o){return function(c,d,p){return p&&typeof p!="number"&&ri(c,d,p)&&(d=p=n),c=Zr(c),d===n?(d=c,c=0):d=Zr(d),p=p===n?c<d?1:-1:Zr(p),kI(c,d,p,o)}}function ld(o){return function(c,d){return typeof c=="string"&&typeof d=="string"||(c=Wi(c),d=Wi(d)),o(c,d)}}function Yx(o,c,d,p,x,T,R,O,z,re){var oe=c&y,fe=oe?R:n,Me=oe?n:R,Ue=oe?T:n,Xe=oe?n:T;c|=oe?N:I,c&=~(oe?I:N),c&_||(c&=~(M|w));var ft=[o,c,x,Ue,fe,Xe,Me,O,z,re],Ye=d.apply(n,ft);return ig(o)&&aM(Ye,ft),Ye.placeholder=p,cM(Ye,o,c)}function Zm(o){var c=Tn[o];return function(d,p){if(d=Wi(d),p=p==null?0:qn(lt(p),292),p&&cx(d)){var x=(Wt(d)+"e").split("e"),T=c(x[0]+"e"+(+x[1]+p));return x=(Wt(T)+"e").split("e"),+(x[0]+"e"+(+x[1]-p))}return c(d)}}var QI=la&&1/Uu(new la([,-0]))[1]==le?function(o){return new la(o)}:yg;function Zx(o){return function(c){var d=Xn(c);return d==Dt?Tm(c):d==yt?gA(c):cA(c,o(c))}}function $r(o,c,d,p,x,T,R,O){var z=c&w;if(!z&&typeof o!="function")throw new Bi(r);var re=p?p.length:0;if(re||(c&=~(N|I),p=x=n),R=R===n?R:Cn(lt(R),0),O=O===n?O:lt(O),re-=x?x.length:0,c&I){var oe=p,fe=x;p=x=n}var Me=z?n:Qm(o),Ue=[o,c,d,p,x,oe,fe,T,R,O];if(Me&&p1(Ue,Me),o=Ue[0],c=Ue[1],d=Ue[2],p=Ue[3],x=Ue[4],O=Ue[9]=Ue[9]===n?z?0:o.length:Cn(Ue[9]-re,0),!O&&c&(y|P)&&(c&=~(y|P)),!c||c==M)var Xe=ZI(o,c,d);else c==y||c==P?Xe=JI(o,c,O):(c==N||c==(M|N))&&!x.length?Xe=KI(o,c,d,p):Xe=od.apply(n,Ue);var ft=Me?Ix:aM;return cM(ft(Xe,Ue),o,c)}function Jx(o,c,d,p){return o===n||or(o,ca[d])&&!$t.call(p,d)?c:o}function Kx(o,c,d,p,x,T){return fn(o)&&fn(c)&&(T.set(c,o),nd(o,c,n,Kx,T),T.delete(c)),o}function e1(o){return el(o)?n:o}function Qx(o,c,d,p,x,T){var R=d&g,O=o.length,z=c.length;if(O!=z&&!(R&&z>O))return!1;var re=T.get(o),oe=T.get(c);if(re&&oe)return re==c&&oe==o;var fe=-1,Me=!0,Ue=d&v?new fo:n;for(T.set(o,c),T.set(c,o);++fe<O;){var Xe=o[fe],ft=c[fe];if(p)var Ye=R?p(ft,Xe,fe,c,o,T):p(Xe,ft,fe,o,c,T);if(Ye!==n){if(Ye)continue;Me=!1;break}if(Ue){if(!xm(c,function(xt,At){if(!Vc(Ue,At)&&(Xe===xt||x(Xe,xt,d,p,T)))return Ue.push(At)})){Me=!1;break}}else if(!(Xe===ft||x(Xe,ft,d,p,T))){Me=!1;break}}return T.delete(o),T.delete(c),Me}function t1(o,c,d,p,x,T,R){switch(d){case te:if(o.byteLength!=c.byteLength||o.byteOffset!=c.byteOffset)return!1;o=o.buffer,c=c.buffer;case ue:return!(o.byteLength!=c.byteLength||!T(new Wu(o),new Wu(c)));case Pe:case ye:case dt:return or(+o,+c);case Mt:return o.name==c.name&&o.message==c.message;case Be:case Fe:return o==c+"";case Dt:var O=Tm;case yt:var z=p&g;if(O||(O=Uu),o.size!=c.size&&!z)return!1;var re=R.get(o);if(re)return re==c;p|=v,R.set(o,c);var oe=Qx(O(o),O(c),p,x,T,R);return R.delete(o),oe;case D:if(jc)return jc.call(o)==jc.call(c)}return!1}function n1(o,c,d,p,x,T){var R=d&g,O=Jm(o),z=O.length,re=Jm(c),oe=re.length;if(z!=oe&&!R)return!1;for(var fe=z;fe--;){var Me=O[fe];if(!(R?Me in c:$t.call(c,Me)))return!1}var Ue=T.get(o),Xe=T.get(c);if(Ue&&Xe)return Ue==c&&Xe==o;var ft=!0;T.set(o,c),T.set(c,o);for(var Ye=R;++fe<z;){Me=O[fe];var xt=o[Me],At=c[Me];if(p)var Ei=R?p(At,xt,Me,c,o,T):p(xt,At,Me,o,c,T);if(!(Ei===n?xt===At||x(xt,At,d,p,T):Ei)){ft=!1;break}Ye||(Ye=Me=="constructor")}if(ft&&!Ye){var si=o.constructor,wi=c.constructor;si!=wi&&"constructor"in o&&"constructor"in c&&!(typeof si=="function"&&si instanceof si&&typeof wi=="function"&&wi instanceof wi)&&(ft=!1)}return T.delete(o),T.delete(c),ft}function qr(o){return sg(sM(o,n,pM),o+"")}function Jm(o){return _x(o,On,tg)}function Km(o){return _x(o,fi,eM)}var Qm=Zu?function(o){return Zu.get(o)}:yg;function ud(o){for(var c=o.name+"",d=ua[c],p=$t.call(ua,c)?d.length:0;p--;){var x=d[p],T=x.func;if(T==null||T==o)return x.name}return c}function pa(o){var c=$t.call(E,"placeholder")?E:o;return c.placeholder}function $e(){var o=E.iteratee||gg;return o=o===gg?Sx:o,arguments.length?o(arguments[0],arguments[1]):o}function dd(o,c){var d=o.__data__;return u1(c)?d[typeof c=="string"?"string":"hash"]:d.map}function eg(o){for(var c=On(o),d=c.length;d--;){var p=c[d],x=o[p];c[d]=[p,x,iM(x)]}return c}function mo(o,c){var d=hA(o,c);return Mx(d)?d:n}function i1(o){var c=$t.call(o,lo),d=o[lo];try{o[lo]=n;var p=!0}catch{}var x=zu.call(o);return p&&(c?o[lo]=d:delete o[lo]),x}var tg=Dm?function(o){return o==null?[]:(o=Jt(o),Es(Dm(o),function(c){return ox.call(o,c)}))}:_g,eM=Dm?function(o){for(var c=[];o;)ws(c,tg(o)),o=ju(o);return c}:_g,Xn=ii;(Am&&Xn(new Am(new ArrayBuffer(1)))!=te||zc&&Xn(new zc)!=Dt||Im&&Xn(Im.resolve())!=St||la&&Xn(new la)!=yt||Gc&&Xn(new Gc)!=$)&&(Xn=function(o){var c=ii(o),d=c==hn?o.constructor:n,p=d?go(d):"";if(p)switch(p){case BA:return te;case VA:return Dt;case HA:return St;case zA:return yt;case GA:return $}return c});function r1(o,c,d){for(var p=-1,x=d.length;++p<x;){var T=d[p],R=T.size;switch(T.type){case"drop":o+=R;break;case"dropRight":c-=R;break;case"take":c=qn(c,o+R);break;case"takeRight":o=Cn(o,c-R);break}}return{start:o,end:c}}function s1(o){var c=o.match(Uc);return c?c[1].split(Nu):[]}function tM(o,c,d){c=Is(c,o);for(var p=-1,x=c.length,T=!1;++p<x;){var R=br(c[p]);if(!(T=o!=null&&d(o,R)))break;o=o[R]}return T||++p!=x?T:(x=o==null?0:o.length,!!x&&yd(x)&&Xr(R,x)&&(it(o)||vo(o)))}function o1(o){var c=o.length,d=new o.constructor(c);return c&&typeof o[0]=="string"&&$t.call(o,"index")&&(d.index=o.index,d.input=o.input),d}function nM(o){return typeof o.constructor=="function"&&!Kc(o)?da(ju(o)):{}}function a1(o,c,d){var p=o.constructor;switch(c){case ue:return Xm(o);case Pe:case ye:return new p(+o);case te:return WI(o,d);case ke:case _e:case Ce:case _t:case me:case Ae:case je:case Ze:case Ie:return Ux(o,d);case Dt:return new p;case dt:case Fe:return new p(o);case Be:return jI(o);case yt:return new p;case D:return $I(o)}}function c1(o,c){var d=c.length;if(!d)return o;var p=d-1;return c[p]=(d>1?"& ":"")+c[p],c=c.join(d>2?", ":" "),o.replace(Vr,`{
/* [wrapped with `+c+`] */
`)}function l1(o){return it(o)||vo(o)||!!(ax&&o&&o[ax])}function Xr(o,c){var d=typeof o;return c=c??ne,!!c&&(d=="number"||d!="symbol"&&hm.test(o))&&o>-1&&o%1==0&&o<c}function ri(o,c,d){if(!fn(d))return!1;var p=typeof c;return(p=="number"?di(d)&&Xr(c,d.length):p=="string"&&c in d)?or(d[c],o):!1}function ng(o,c){if(it(o))return!1;var d=typeof o;return d=="number"||d=="symbol"||d=="boolean"||o==null||Si(o)?!0:Nn.test(o)||!cn.test(o)||c!=null&&o in Jt(c)}function u1(o){var c=typeof o;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?o!=="__proto__":o===null}function ig(o){var c=ud(o),d=E[c];if(typeof d!="function"||!(c in Tt.prototype))return!1;if(o===d)return!0;var p=Qm(d);return!!p&&o===p[0]}function d1(o){return!!ix&&ix in o}var f1=Vu?Yr:xg;function Kc(o){var c=o&&o.constructor,d=typeof c=="function"&&c.prototype||ca;return o===d}function iM(o){return o===o&&!fn(o)}function rM(o,c){return function(d){return d==null?!1:d[o]===c&&(c!==n||o in Jt(d))}}function h1(o){var c=gd(o,function(p){return d.size===l&&d.clear(),p}),d=c.cache;return c}function p1(o,c){var d=o[1],p=c[1],x=d|p,T=x<(M|w|G),R=p==G&&d==y||p==G&&d==V&&o[7].length<=c[8]||p==(G|V)&&c[7].length<=c[8]&&d==y;if(!(T||R))return o;p&M&&(o[2]=c[2],x|=d&M?0:_);var O=c[3];if(O){var z=o[3];o[3]=z?Vx(z,O,c[4]):O,o[4]=z?bs(o[3],u):c[4]}return O=c[5],O&&(z=o[5],o[5]=z?Hx(z,O,c[6]):O,o[6]=z?bs(o[5],u):c[6]),O=c[7],O&&(o[7]=O),p&G&&(o[8]=o[8]==null?c[8]:qn(o[8],c[8])),o[9]==null&&(o[9]=c[9]),o[0]=c[0],o[1]=x,o}function m1(o){var c=[];if(o!=null)for(var d in Jt(o))c.push(d);return c}function g1(o){return zu.call(o)}function sM(o,c,d){return c=Cn(c===n?o.length-1:c,0),function(){for(var p=arguments,x=-1,T=Cn(p.length-c,0),R=Y(T);++x<T;)R[x]=p[c+x];x=-1;for(var O=Y(c+1);++x<c;)O[x]=p[x];return O[c]=d(R),_i(o,this,O)}}function oM(o,c){return c.length<2?o:po(o,zi(c,0,-1))}function v1(o,c){for(var d=o.length,p=qn(c.length,d),x=ui(o);p--;){var T=c[p];o[p]=Xr(T,d)?x[T]:n}return o}function rg(o,c){if(!(c==="constructor"&&typeof o[c]=="function")&&c!="__proto__")return o[c]}var aM=lM(Ix),Qc=NA||function(o,c){return Pn.setTimeout(o,c)},sg=lM(VI);function cM(o,c,d){var p=c+"";return sg(o,c1(p,y1(s1(p),d)))}function lM(o){var c=0,d=0;return function(){var p=FA(),x=k-(p-d);if(d=p,x>0){if(++c>=C)return arguments[0]}else c=0;return o.apply(n,arguments)}}function fd(o,c){var d=-1,p=o.length,x=p-1;for(c=c===n?p:c;++d<c;){var T=Hm(d,x),R=o[T];o[T]=o[d],o[d]=R}return o.length=c,o}var uM=h1(function(o){var c=[];return o.charCodeAt(0)===46&&c.push(""),o.replace(Ht,function(d,p,x,T){c.push(x?T.replace(Ou,"$1"):p||d)}),c});function br(o){if(typeof o=="string"||Si(o))return o;var c=o+"";return c=="0"&&1/o==-le?"-0":c}function go(o){if(o!=null){try{return Hu.call(o)}catch{}try{return o+""}catch{}}return""}function y1(o,c){return Ui(pt,function(d){var p="_."+d[0];c&d[1]&&!Fu(o,p)&&o.push(p)}),o.sort()}function dM(o){if(o instanceof Tt)return o.clone();var c=new Vi(o.__wrapped__,o.__chain__);return c.__actions__=ui(o.__actions__),c.__index__=o.__index__,c.__values__=o.__values__,c}function _1(o,c,d){(d?ri(o,c,d):c===n)?c=1:c=Cn(lt(c),0);var p=o==null?0:o.length;if(!p||c<1)return[];for(var x=0,T=0,R=Y(Xu(p/c));x<p;)R[T++]=zi(o,x,x+=c);return R}function x1(o){for(var c=-1,d=o==null?0:o.length,p=0,x=[];++c<d;){var T=o[c];T&&(x[p++]=T)}return x}function M1(){var o=arguments.length;if(!o)return[];for(var c=Y(o-1),d=arguments[0],p=o;p--;)c[p-1]=arguments[p];return ws(it(d)?ui(d):[d],Un(c,1))}var S1=mt(function(o,c){return _n(o)?qc(o,Un(c,1,_n,!0)):[]}),E1=mt(function(o,c){var d=Gi(c);return _n(d)&&(d=n),_n(o)?qc(o,Un(c,1,_n,!0),$e(d,2)):[]}),w1=mt(function(o,c){var d=Gi(c);return _n(d)&&(d=n),_n(o)?qc(o,Un(c,1,_n,!0),n,d):[]});function b1(o,c,d){var p=o==null?0:o.length;return p?(c=d||c===n?1:lt(c),zi(o,c<0?0:c,p)):[]}function T1(o,c,d){var p=o==null?0:o.length;return p?(c=d||c===n?1:lt(c),c=p-c,zi(o,0,c<0?0:c)):[]}function C1(o,c){return o&&o.length?rd(o,$e(c,3),!0,!0):[]}function D1(o,c){return o&&o.length?rd(o,$e(c,3),!0):[]}function A1(o,c,d,p){var x=o==null?0:o.length;return x?(d&&typeof d!="number"&&ri(o,c,d)&&(d=0,p=x),MI(o,c,d,p)):[]}function fM(o,c,d){var p=o==null?0:o.length;if(!p)return-1;var x=d==null?0:lt(d);return x<0&&(x=Cn(p+x,0)),ku(o,$e(c,3),x)}function hM(o,c,d){var p=o==null?0:o.length;if(!p)return-1;var x=p-1;return d!==n&&(x=lt(d),x=d<0?Cn(p+x,0):qn(x,p-1)),ku(o,$e(c,3),x,!0)}function pM(o){var c=o==null?0:o.length;return c?Un(o,1):[]}function I1(o){var c=o==null?0:o.length;return c?Un(o,le):[]}function R1(o,c){var d=o==null?0:o.length;return d?(c=c===n?1:lt(c),Un(o,c)):[]}function N1(o){for(var c=-1,d=o==null?0:o.length,p={};++c<d;){var x=o[c];p[x[0]]=x[1]}return p}function mM(o){return o&&o.length?o[0]:n}function P1(o,c,d){var p=o==null?0:o.length;if(!p)return-1;var x=d==null?0:lt(d);return x<0&&(x=Cn(p+x,0)),sa(o,c,x)}function O1(o){var c=o==null?0:o.length;return c?zi(o,0,-1):[]}var L1=mt(function(o){var c=ln(o,$m);return c.length&&c[0]===o[0]?Fm(c):[]}),F1=mt(function(o){var c=Gi(o),d=ln(o,$m);return c===Gi(d)?c=n:d.pop(),d.length&&d[0]===o[0]?Fm(d,$e(c,2)):[]}),k1=mt(function(o){var c=Gi(o),d=ln(o,$m);return c=typeof c=="function"?c:n,c&&d.pop(),d.length&&d[0]===o[0]?Fm(d,n,c):[]});function U1(o,c){return o==null?"":OA.call(o,c)}function Gi(o){var c=o==null?0:o.length;return c?o[c-1]:n}function B1(o,c,d){var p=o==null?0:o.length;if(!p)return-1;var x=p;return d!==n&&(x=lt(d),x=x<0?Cn(p+x,0):qn(x,p-1)),c===c?yA(o,c,x):ku(o,Y0,x,!0)}function V1(o,c){return o&&o.length?Tx(o,lt(c)):n}var H1=mt(gM);function gM(o,c){return o&&o.length&&c&&c.length?Vm(o,c):o}function z1(o,c,d){return o&&o.length&&c&&c.length?Vm(o,c,$e(d,2)):o}function G1(o,c,d){return o&&o.length&&c&&c.length?Vm(o,c,n,d):o}var W1=qr(function(o,c){var d=o==null?0:o.length,p=Nm(o,c);return Ax(o,ln(c,function(x){return Xr(x,d)?+x:x}).sort(Bx)),p});function j1(o,c){var d=[];if(!(o&&o.length))return d;var p=-1,x=[],T=o.length;for(c=$e(c,3);++p<T;){var R=o[p];c(R,p,o)&&(d.push(R),x.push(p))}return Ax(o,x),d}function og(o){return o==null?o:UA.call(o)}function $1(o,c,d){var p=o==null?0:o.length;return p?(d&&typeof d!="number"&&ri(o,c,d)?(c=0,d=p):(c=c==null?0:lt(c),d=d===n?p:lt(d)),zi(o,c,d)):[]}function q1(o,c){return id(o,c)}function X1(o,c,d){return Gm(o,c,$e(d,2))}function Y1(o,c){var d=o==null?0:o.length;if(d){var p=id(o,c);if(p<d&&or(o[p],c))return p}return-1}function Z1(o,c){return id(o,c,!0)}function J1(o,c,d){return Gm(o,c,$e(d,2),!0)}function K1(o,c){var d=o==null?0:o.length;if(d){var p=id(o,c,!0)-1;if(or(o[p],c))return p}return-1}function Q1(o){return o&&o.length?Rx(o):[]}function eR(o,c){return o&&o.length?Rx(o,$e(c,2)):[]}function tR(o){var c=o==null?0:o.length;return c?zi(o,1,c):[]}function nR(o,c,d){return o&&o.length?(c=d||c===n?1:lt(c),zi(o,0,c<0?0:c)):[]}function iR(o,c,d){var p=o==null?0:o.length;return p?(c=d||c===n?1:lt(c),c=p-c,zi(o,c<0?0:c,p)):[]}function rR(o,c){return o&&o.length?rd(o,$e(c,3),!1,!0):[]}function sR(o,c){return o&&o.length?rd(o,$e(c,3)):[]}var oR=mt(function(o){return As(Un(o,1,_n,!0))}),aR=mt(function(o){var c=Gi(o);return _n(c)&&(c=n),As(Un(o,1,_n,!0),$e(c,2))}),cR=mt(function(o){var c=Gi(o);return c=typeof c=="function"?c:n,As(Un(o,1,_n,!0),n,c)});function lR(o){return o&&o.length?As(o):[]}function uR(o,c){return o&&o.length?As(o,$e(c,2)):[]}function dR(o,c){return c=typeof c=="function"?c:n,o&&o.length?As(o,n,c):[]}function ag(o){if(!(o&&o.length))return[];var c=0;return o=Es(o,function(d){if(_n(d))return c=Cn(d.length,c),!0}),wm(c,function(d){return ln(o,Mm(d))})}function vM(o,c){if(!(o&&o.length))return[];var d=ag(o);return c==null?d:ln(d,function(p){return _i(c,n,p)})}var fR=mt(function(o,c){return _n(o)?qc(o,c):[]}),hR=mt(function(o){return jm(Es(o,_n))}),pR=mt(function(o){var c=Gi(o);return _n(c)&&(c=n),jm(Es(o,_n),$e(c,2))}),mR=mt(function(o){var c=Gi(o);return c=typeof c=="function"?c:n,jm(Es(o,_n),n,c)}),gR=mt(ag);function vR(o,c){return Lx(o||[],c||[],$c)}function yR(o,c){return Lx(o||[],c||[],Zc)}var _R=mt(function(o){var c=o.length,d=c>1?o[c-1]:n;return d=typeof d=="function"?(o.pop(),d):n,vM(o,d)});function yM(o){var c=E(o);return c.__chain__=!0,c}function xR(o,c){return c(o),o}function hd(o,c){return c(o)}var MR=qr(function(o){var c=o.length,d=c?o[0]:0,p=this.__wrapped__,x=function(T){return Nm(T,o)};return c>1||this.__actions__.length||!(p instanceof Tt)||!Xr(d)?this.thru(x):(p=p.slice(d,+d+(c?1:0)),p.__actions__.push({func:hd,args:[x],thisArg:n}),new Vi(p,this.__chain__).thru(function(T){return c&&!T.length&&T.push(n),T}))});function SR(){return yM(this)}function ER(){return new Vi(this.value(),this.__chain__)}function wR(){this.__values__===n&&(this.__values__=NM(this.value()));var o=this.__index__>=this.__values__.length,c=o?n:this.__values__[this.__index__++];return{done:o,value:c}}function bR(){return this}function TR(o){for(var c,d=this;d instanceof Ku;){var p=dM(d);p.__index__=0,p.__values__=n,c?x.__wrapped__=p:c=p;var x=p;d=d.__wrapped__}return x.__wrapped__=o,c}function CR(){var o=this.__wrapped__;if(o instanceof Tt){var c=o;return this.__actions__.length&&(c=new Tt(this)),c=c.reverse(),c.__actions__.push({func:hd,args:[og],thisArg:n}),new Vi(c,this.__chain__)}return this.thru(og)}function DR(){return Ox(this.__wrapped__,this.__actions__)}var AR=sd(function(o,c,d){$t.call(o,d)?++o[d]:jr(o,d,1)});function IR(o,c,d){var p=it(o)?q0:xI;return d&&ri(o,c,d)&&(c=n),p(o,$e(c,3))}function RR(o,c){var d=it(o)?Es:vx;return d(o,$e(c,3))}var NR=jx(fM),PR=jx(hM);function OR(o,c){return Un(pd(o,c),1)}function LR(o,c){return Un(pd(o,c),le)}function FR(o,c,d){return d=d===n?1:lt(d),Un(pd(o,c),d)}function _M(o,c){var d=it(o)?Ui:Ds;return d(o,$e(c,3))}function xM(o,c){var d=it(o)?tA:gx;return d(o,$e(c,3))}var kR=sd(function(o,c,d){$t.call(o,d)?o[d].push(c):jr(o,d,[c])});function UR(o,c,d,p){o=di(o)?o:ga(o),d=d&&!p?lt(d):0;var x=o.length;return d<0&&(d=Cn(x+d,0)),_d(o)?d<=x&&o.indexOf(c,d)>-1:!!x&&sa(o,c,d)>-1}var BR=mt(function(o,c,d){var p=-1,x=typeof c=="function",T=di(o)?Y(o.length):[];return Ds(o,function(R){T[++p]=x?_i(c,R,d):Xc(R,c,d)}),T}),VR=sd(function(o,c,d){jr(o,d,c)});function pd(o,c){var d=it(o)?ln:Ex;return d(o,$e(c,3))}function HR(o,c,d,p){return o==null?[]:(it(c)||(c=c==null?[]:[c]),d=p?n:d,it(d)||(d=d==null?[]:[d]),Cx(o,c,d))}var zR=sd(function(o,c,d){o[d?0:1].push(c)},function(){return[[],[]]});function GR(o,c,d){var p=it(o)?_m:J0,x=arguments.length<3;return p(o,$e(c,4),d,x,Ds)}function WR(o,c,d){var p=it(o)?nA:J0,x=arguments.length<3;return p(o,$e(c,4),d,x,gx)}function jR(o,c){var d=it(o)?Es:vx;return d(o,vd($e(c,3)))}function $R(o){var c=it(o)?fx:UI;return c(o)}function qR(o,c,d){(d?ri(o,c,d):c===n)?c=1:c=lt(c);var p=it(o)?mI:BI;return p(o,c)}function XR(o){var c=it(o)?gI:HI;return c(o)}function YR(o){if(o==null)return 0;if(di(o))return _d(o)?aa(o):o.length;var c=Xn(o);return c==Dt||c==yt?o.size:Um(o).length}function ZR(o,c,d){var p=it(o)?xm:zI;return d&&ri(o,c,d)&&(c=n),p(o,$e(c,3))}var JR=mt(function(o,c){if(o==null)return[];var d=c.length;return d>1&&ri(o,c[0],c[1])?c=[]:d>2&&ri(c[0],c[1],c[2])&&(c=[c[0]]),Cx(o,Un(c,1),[])}),md=RA||function(){return Pn.Date.now()};function KR(o,c){if(typeof c!="function")throw new Bi(r);return o=lt(o),function(){if(--o<1)return c.apply(this,arguments)}}function MM(o,c,d){return c=d?n:c,c=o&&c==null?o.length:c,$r(o,G,n,n,n,n,c)}function SM(o,c){var d;if(typeof c!="function")throw new Bi(r);return o=lt(o),function(){return--o>0&&(d=c.apply(this,arguments)),o<=1&&(c=n),d}}var cg=mt(function(o,c,d){var p=M;if(d.length){var x=bs(d,pa(cg));p|=N}return $r(o,p,c,d,x)}),EM=mt(function(o,c,d){var p=M|w;if(d.length){var x=bs(d,pa(EM));p|=N}return $r(c,p,o,d,x)});function wM(o,c,d){c=d?n:c;var p=$r(o,y,n,n,n,n,n,c);return p.placeholder=wM.placeholder,p}function bM(o,c,d){c=d?n:c;var p=$r(o,P,n,n,n,n,n,c);return p.placeholder=bM.placeholder,p}function TM(o,c,d){var p,x,T,R,O,z,re=0,oe=!1,fe=!1,Me=!0;if(typeof o!="function")throw new Bi(r);c=Wi(c)||0,fn(d)&&(oe=!!d.leading,fe="maxWait"in d,T=fe?Cn(Wi(d.maxWait)||0,c):T,Me="trailing"in d?!!d.trailing:Me);function Ue(xn){var ar=p,Jr=x;return p=x=n,re=xn,R=o.apply(Jr,ar),R}function Xe(xn){return re=xn,O=Qc(xt,c),oe?Ue(xn):R}function ft(xn){var ar=xn-z,Jr=xn-re,jM=c-ar;return fe?qn(jM,T-Jr):jM}function Ye(xn){var ar=xn-z,Jr=xn-re;return z===n||ar>=c||ar<0||fe&&Jr>=T}function xt(){var xn=md();if(Ye(xn))return At(xn);O=Qc(xt,ft(xn))}function At(xn){return O=n,Me&&p?Ue(xn):(p=x=n,R)}function Ei(){O!==n&&Fx(O),re=0,p=z=x=O=n}function si(){return O===n?R:At(md())}function wi(){var xn=md(),ar=Ye(xn);if(p=arguments,x=this,z=xn,ar){if(O===n)return Xe(z);if(fe)return Fx(O),O=Qc(xt,c),Ue(z)}return O===n&&(O=Qc(xt,c)),R}return wi.cancel=Ei,wi.flush=si,wi}var QR=mt(function(o,c){return mx(o,1,c)}),eN=mt(function(o,c,d){return mx(o,Wi(c)||0,d)});function tN(o){return $r(o,F)}function gd(o,c){if(typeof o!="function"||c!=null&&typeof c!="function")throw new Bi(r);var d=function(){var p=arguments,x=c?c.apply(this,p):p[0],T=d.cache;if(T.has(x))return T.get(x);var R=o.apply(this,p);return d.cache=T.set(x,R)||T,R};return d.cache=new(gd.Cache||Wr),d}gd.Cache=Wr;function vd(o){if(typeof o!="function")throw new Bi(r);return function(){var c=arguments;switch(c.length){case 0:return!o.call(this);case 1:return!o.call(this,c[0]);case 2:return!o.call(this,c[0],c[1]);case 3:return!o.call(this,c[0],c[1],c[2])}return!o.apply(this,c)}}function nN(o){return SM(2,o)}var iN=GI(function(o,c){c=c.length==1&&it(c[0])?ln(c[0],xi($e())):ln(Un(c,1),xi($e()));var d=c.length;return mt(function(p){for(var x=-1,T=qn(p.length,d);++x<T;)p[x]=c[x].call(this,p[x]);return _i(o,this,p)})}),lg=mt(function(o,c){var d=bs(c,pa(lg));return $r(o,N,n,c,d)}),CM=mt(function(o,c){var d=bs(c,pa(CM));return $r(o,I,n,c,d)}),rN=qr(function(o,c){return $r(o,V,n,n,n,c)});function sN(o,c){if(typeof o!="function")throw new Bi(r);return c=c===n?c:lt(c),mt(o,c)}function oN(o,c){if(typeof o!="function")throw new Bi(r);return c=c==null?0:Cn(lt(c),0),mt(function(d){var p=d[c],x=Rs(d,0,c);return p&&ws(x,p),_i(o,this,x)})}function aN(o,c,d){var p=!0,x=!0;if(typeof o!="function")throw new Bi(r);return fn(d)&&(p="leading"in d?!!d.leading:p,x="trailing"in d?!!d.trailing:x),TM(o,c,{leading:p,maxWait:c,trailing:x})}function cN(o){return MM(o,1)}function lN(o,c){return lg(qm(c),o)}function uN(){if(!arguments.length)return[];var o=arguments[0];return it(o)?o:[o]}function dN(o){return Hi(o,m)}function fN(o,c){return c=typeof c=="function"?c:n,Hi(o,m,c)}function hN(o){return Hi(o,f|m)}function pN(o,c){return c=typeof c=="function"?c:n,Hi(o,f|m,c)}function mN(o,c){return c==null||px(o,c,On(c))}function or(o,c){return o===c||o!==o&&c!==c}var gN=ld(Lm),vN=ld(function(o,c){return o>=c}),vo=xx(function(){return arguments}())?xx:function(o){return mn(o)&&$t.call(o,"callee")&&!ox.call(o,"callee")},it=Y.isArray,yN=H0?xi(H0):TI;function di(o){return o!=null&&yd(o.length)&&!Yr(o)}function _n(o){return mn(o)&&di(o)}function _N(o){return o===!0||o===!1||mn(o)&&ii(o)==Pe}var Ns=PA||xg,xN=z0?xi(z0):CI;function MN(o){return mn(o)&&o.nodeType===1&&!el(o)}function SN(o){if(o==null)return!0;if(di(o)&&(it(o)||typeof o=="string"||typeof o.splice=="function"||Ns(o)||ma(o)||vo(o)))return!o.length;var c=Xn(o);if(c==Dt||c==yt)return!o.size;if(Kc(o))return!Um(o).length;for(var d in o)if($t.call(o,d))return!1;return!0}function EN(o,c){return Yc(o,c)}function wN(o,c,d){d=typeof d=="function"?d:n;var p=d?d(o,c):n;return p===n?Yc(o,c,n,d):!!p}function ug(o){if(!mn(o))return!1;var c=ii(o);return c==Mt||c==qe||typeof o.message=="string"&&typeof o.name=="string"&&!el(o)}function bN(o){return typeof o=="number"&&cx(o)}function Yr(o){if(!fn(o))return!1;var c=ii(o);return c==We||c==an||c==ve||c==Et}function DM(o){return typeof o=="number"&&o==lt(o)}function yd(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=ne}function fn(o){var c=typeof o;return o!=null&&(c=="object"||c=="function")}function mn(o){return o!=null&&typeof o=="object"}var AM=G0?xi(G0):AI;function TN(o,c){return o===c||km(o,c,eg(c))}function CN(o,c,d){return d=typeof d=="function"?d:n,km(o,c,eg(c),d)}function DN(o){return IM(o)&&o!=+o}function AN(o){if(f1(o))throw new nt(i);return Mx(o)}function IN(o){return o===null}function RN(o){return o==null}function IM(o){return typeof o=="number"||mn(o)&&ii(o)==dt}function el(o){if(!mn(o)||ii(o)!=hn)return!1;var c=ju(o);if(c===null)return!0;var d=$t.call(c,"constructor")&&c.constructor;return typeof d=="function"&&d instanceof d&&Hu.call(d)==CA}var dg=W0?xi(W0):II;function NN(o){return DM(o)&&o>=-ne&&o<=ne}var RM=j0?xi(j0):RI;function _d(o){return typeof o=="string"||!it(o)&&mn(o)&&ii(o)==Fe}function Si(o){return typeof o=="symbol"||mn(o)&&ii(o)==D}var ma=$0?xi($0):NI;function PN(o){return o===n}function ON(o){return mn(o)&&Xn(o)==$}function LN(o){return mn(o)&&ii(o)==ae}var FN=ld(Bm),kN=ld(function(o,c){return o<=c});function NM(o){if(!o)return[];if(di(o))return _d(o)?rr(o):ui(o);if(Hc&&o[Hc])return mA(o[Hc]());var c=Xn(o),d=c==Dt?Tm:c==yt?Uu:ga;return d(o)}function Zr(o){if(!o)return o===0?o:0;if(o=Wi(o),o===le||o===-le){var c=o<0?-1:1;return c*he}return o===o?o:0}function lt(o){var c=Zr(o),d=c%1;return c===c?d?c-d:c:0}function PM(o){return o?ho(lt(o),0,ge):0}function Wi(o){if(typeof o=="number")return o;if(Si(o))return K;if(fn(o)){var c=typeof o.valueOf=="function"?o.valueOf():o;o=fn(c)?c+"":c}if(typeof o!="string")return o===0?o:+o;o=K0(o);var d=um.test(o);return d||fm.test(o)?KD(o.slice(2),d?2:8):Lu.test(o)?K:+o}function OM(o){return wr(o,fi(o))}function UN(o){return o?ho(lt(o),-ne,ne):o===0?o:0}function Wt(o){return o==null?"":Mi(o)}var BN=fa(function(o,c){if(Kc(c)||di(c)){wr(c,On(c),o);return}for(var d in c)$t.call(c,d)&&$c(o,d,c[d])}),LM=fa(function(o,c){wr(c,fi(c),o)}),xd=fa(function(o,c,d,p){wr(c,fi(c),o,p)}),VN=fa(function(o,c,d,p){wr(c,On(c),o,p)}),HN=qr(Nm);function zN(o,c){var d=da(o);return c==null?d:hx(d,c)}var GN=mt(function(o,c){o=Jt(o);var d=-1,p=c.length,x=p>2?c[2]:n;for(x&&ri(c[0],c[1],x)&&(p=1);++d<p;)for(var T=c[d],R=fi(T),O=-1,z=R.length;++O<z;){var re=R[O],oe=o[re];(oe===n||or(oe,ca[re])&&!$t.call(o,re))&&(o[re]=T[re])}return o}),WN=mt(function(o){return o.push(n,Kx),_i(FM,n,o)});function jN(o,c){return X0(o,$e(c,3),Er)}function $N(o,c){return X0(o,$e(c,3),Om)}function qN(o,c){return o==null?o:Pm(o,$e(c,3),fi)}function XN(o,c){return o==null?o:yx(o,$e(c,3),fi)}function YN(o,c){return o&&Er(o,$e(c,3))}function ZN(o,c){return o&&Om(o,$e(c,3))}function JN(o){return o==null?[]:td(o,On(o))}function KN(o){return o==null?[]:td(o,fi(o))}function fg(o,c,d){var p=o==null?n:po(o,c);return p===n?d:p}function QN(o,c){return o!=null&&tM(o,c,SI)}function hg(o,c){return o!=null&&tM(o,c,EI)}var eP=qx(function(o,c,d){c!=null&&typeof c.toString!="function"&&(c=zu.call(c)),o[c]=d},mg(hi)),tP=qx(function(o,c,d){c!=null&&typeof c.toString!="function"&&(c=zu.call(c)),$t.call(o,c)?o[c].push(d):o[c]=[d]},$e),nP=mt(Xc);function On(o){return di(o)?dx(o):Um(o)}function fi(o){return di(o)?dx(o,!0):PI(o)}function iP(o,c){var d={};return c=$e(c,3),Er(o,function(p,x,T){jr(d,c(p,x,T),p)}),d}function rP(o,c){var d={};return c=$e(c,3),Er(o,function(p,x,T){jr(d,x,c(p,x,T))}),d}var sP=fa(function(o,c,d){nd(o,c,d)}),FM=fa(function(o,c,d,p){nd(o,c,d,p)}),oP=qr(function(o,c){var d={};if(o==null)return d;var p=!1;c=ln(c,function(T){return T=Is(T,o),p||(p=T.length>1),T}),wr(o,Km(o),d),p&&(d=Hi(d,f|h|m,e1));for(var x=c.length;x--;)Wm(d,c[x]);return d});function aP(o,c){return kM(o,vd($e(c)))}var cP=qr(function(o,c){return o==null?{}:LI(o,c)});function kM(o,c){if(o==null)return{};var d=ln(Km(o),function(p){return[p]});return c=$e(c),Dx(o,d,function(p,x){return c(p,x[0])})}function lP(o,c,d){c=Is(c,o);var p=-1,x=c.length;for(x||(x=1,o=n);++p<x;){var T=o==null?n:o[br(c[p])];T===n&&(p=x,T=d),o=Yr(T)?T.call(o):T}return o}function uP(o,c,d){return o==null?o:Zc(o,c,d)}function dP(o,c,d,p){return p=typeof p=="function"?p:n,o==null?o:Zc(o,c,d,p)}var UM=Zx(On),BM=Zx(fi);function fP(o,c,d){var p=it(o),x=p||Ns(o)||ma(o);if(c=$e(c,4),d==null){var T=o&&o.constructor;x?d=p?new T:[]:fn(o)?d=Yr(T)?da(ju(o)):{}:d={}}return(x?Ui:Er)(o,function(R,O,z){return c(d,R,O,z)}),d}function hP(o,c){return o==null?!0:Wm(o,c)}function pP(o,c,d){return o==null?o:Px(o,c,qm(d))}function mP(o,c,d,p){return p=typeof p=="function"?p:n,o==null?o:Px(o,c,qm(d),p)}function ga(o){return o==null?[]:bm(o,On(o))}function gP(o){return o==null?[]:bm(o,fi(o))}function vP(o,c,d){return d===n&&(d=c,c=n),d!==n&&(d=Wi(d),d=d===d?d:0),c!==n&&(c=Wi(c),c=c===c?c:0),ho(Wi(o),c,d)}function yP(o,c,d){return c=Zr(c),d===n?(d=c,c=0):d=Zr(d),o=Wi(o),wI(o,c,d)}function _P(o,c,d){if(d&&typeof d!="boolean"&&ri(o,c,d)&&(c=d=n),d===n&&(typeof c=="boolean"?(d=c,c=n):typeof o=="boolean"&&(d=o,o=n)),o===n&&c===n?(o=0,c=1):(o=Zr(o),c===n?(c=o,o=0):c=Zr(c)),o>c){var p=o;o=c,c=p}if(d||o%1||c%1){var x=lx();return qn(o+x*(c-o+JD("1e-"+((x+"").length-1))),c)}return Hm(o,c)}var xP=ha(function(o,c,d){return c=c.toLowerCase(),o+(d?VM(c):c)});function VM(o){return pg(Wt(o).toLowerCase())}function HM(o){return o=Wt(o),o&&o.replace(pm,uA).replace(HD,"")}function MP(o,c,d){o=Wt(o),c=Mi(c);var p=o.length;d=d===n?p:ho(lt(d),0,p);var x=d;return d-=c.length,d>=0&&o.slice(d,x)==c}function SP(o){return o=Wt(o),o&&ce.test(o)?o.replace(Ee,dA):o}function EP(o){return o=Wt(o),o&&ir.test(o)?o.replace(ti,"\\$&"):o}var wP=ha(function(o,c,d){return o+(d?"-":"")+c.toLowerCase()}),bP=ha(function(o,c,d){return o+(d?" ":"")+c.toLowerCase()}),TP=Wx("toLowerCase");function CP(o,c,d){o=Wt(o),c=lt(c);var p=c?aa(o):0;if(!c||p>=c)return o;var x=(c-p)/2;return cd(Yu(x),d)+o+cd(Xu(x),d)}function DP(o,c,d){o=Wt(o),c=lt(c);var p=c?aa(o):0;return c&&p<c?o+cd(c-p,d):o}function AP(o,c,d){o=Wt(o),c=lt(c);var p=c?aa(o):0;return c&&p<c?cd(c-p,d)+o:o}function IP(o,c,d){return d||c==null?c=0:c&&(c=+c),kA(Wt(o).replace(ea,""),c||0)}function RP(o,c,d){return(d?ri(o,c,d):c===n)?c=1:c=lt(c),zm(Wt(o),c)}function NP(){var o=arguments,c=Wt(o[0]);return o.length<3?c:c.replace(o[1],o[2])}var PP=ha(function(o,c,d){return o+(d?"_":"")+c.toLowerCase()});function OP(o,c,d){return d&&typeof d!="number"&&ri(o,c,d)&&(c=d=n),d=d===n?ge:d>>>0,d?(o=Wt(o),o&&(typeof c=="string"||c!=null&&!dg(c))&&(c=Mi(c),!c&&oa(o))?Rs(rr(o),0,d):o.split(c,d)):[]}var LP=ha(function(o,c,d){return o+(d?" ":"")+pg(c)});function FP(o,c,d){return o=Wt(o),d=d==null?0:ho(lt(d),0,o.length),c=Mi(c),o.slice(d,d+c.length)==c}function kP(o,c,d){var p=E.templateSettings;d&&ri(o,c,d)&&(c=n),o=Wt(o),c=xd({},c,p,Jx);var x=xd({},c.imports,p.imports,Jx),T=On(x),R=bm(x,T),O,z,re=0,oe=c.interpolate||ia,fe="__p += '",Me=Cm((c.escape||ia).source+"|"+oe.source+"|"+(oe===tt?na:ia).source+"|"+(c.evaluate||ia).source+"|$","g"),Ue="//# sourceURL="+($t.call(c,"sourceURL")?(c.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++$D+"]")+`
`;o.replace(Me,function(Ye,xt,At,Ei,si,wi){return At||(At=Ei),fe+=o.slice(re,wi).replace(b,fA),xt&&(O=!0,fe+=`' +
__e(`+xt+`) +
'`),si&&(z=!0,fe+=`';
`+si+`;
__p += '`),At&&(fe+=`' +
((__t = (`+At+`)) == null ? '' : __t) +
'`),re=wi+Ye.length,Ye}),fe+=`';
`;var Xe=$t.call(c,"variable")&&c.variable;if(!Xe)fe=`with (obj) {
`+fe+`
}
`;else if(ta.test(Xe))throw new nt(s);fe=(z?fe.replace(wt,""):fe).replace(ot,"$1").replace(Xt,"$1;"),fe="function("+(Xe||"obj")+`) {
`+(Xe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(O?", __e = _.escape":"")+(z?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+fe+`return __p
}`;var ft=GM(function(){return zt(T,Ue+"return "+fe).apply(n,R)});if(ft.source=fe,ug(ft))throw ft;return ft}function UP(o){return Wt(o).toLowerCase()}function BP(o){return Wt(o).toUpperCase()}function VP(o,c,d){if(o=Wt(o),o&&(d||c===n))return K0(o);if(!o||!(c=Mi(c)))return o;var p=rr(o),x=rr(c),T=Q0(p,x),R=ex(p,x)+1;return Rs(p,T,R).join("")}function HP(o,c,d){if(o=Wt(o),o&&(d||c===n))return o.slice(0,nx(o)+1);if(!o||!(c=Mi(c)))return o;var p=rr(o),x=ex(p,rr(c))+1;return Rs(p,0,x).join("")}function zP(o,c,d){if(o=Wt(o),o&&(d||c===n))return o.replace(ea,"");if(!o||!(c=Mi(c)))return o;var p=rr(o),x=Q0(p,rr(c));return Rs(p,x).join("")}function GP(o,c){var d=j,p=A;if(fn(c)){var x="separator"in c?c.separator:x;d="length"in c?lt(c.length):d,p="omission"in c?Mi(c.omission):p}o=Wt(o);var T=o.length;if(oa(o)){var R=rr(o);T=R.length}if(d>=T)return o;var O=d-aa(p);if(O<1)return p;var z=R?Rs(R,0,O).join(""):o.slice(0,O);if(x===n)return z+p;if(R&&(O+=z.length-O),dg(x)){if(o.slice(O).search(x)){var re,oe=z;for(x.global||(x=Cm(x.source,Wt(Bc.exec(x))+"g")),x.lastIndex=0;re=x.exec(oe);)var fe=re.index;z=z.slice(0,fe===n?O:fe)}}else if(o.indexOf(Mi(x),O)!=O){var Me=z.lastIndexOf(x);Me>-1&&(z=z.slice(0,Me))}return z+p}function WP(o){return o=Wt(o),o&&Q.test(o)?o.replace(U,_A):o}var jP=ha(function(o,c,d){return o+(d?" ":"")+c.toUpperCase()}),pg=Wx("toUpperCase");function zM(o,c,d){return o=Wt(o),c=d?n:c,c===n?pA(o)?SA(o):sA(o):o.match(c)||[]}var GM=mt(function(o,c){try{return _i(o,n,c)}catch(d){return ug(d)?d:new nt(d)}}),$P=qr(function(o,c){return Ui(c,function(d){d=br(d),jr(o,d,cg(o[d],o))}),o});function qP(o){var c=o==null?0:o.length,d=$e();return o=c?ln(o,function(p){if(typeof p[1]!="function")throw new Bi(r);return[d(p[0]),p[1]]}):[],mt(function(p){for(var x=-1;++x<c;){var T=o[x];if(_i(T[0],this,p))return _i(T[1],this,p)}})}function XP(o){return _I(Hi(o,f))}function mg(o){return function(){return o}}function YP(o,c){return o==null||o!==o?c:o}var ZP=$x(),JP=$x(!0);function hi(o){return o}function gg(o){return Sx(typeof o=="function"?o:Hi(o,f))}function KP(o){return wx(Hi(o,f))}function QP(o,c){return bx(o,Hi(c,f))}var eO=mt(function(o,c){return function(d){return Xc(d,o,c)}}),tO=mt(function(o,c){return function(d){return Xc(o,d,c)}});function vg(o,c,d){var p=On(c),x=td(c,p);d==null&&!(fn(c)&&(x.length||!p.length))&&(d=c,c=o,o=this,x=td(c,On(c)));var T=!(fn(d)&&"chain"in d)||!!d.chain,R=Yr(o);return Ui(x,function(O){var z=c[O];o[O]=z,R&&(o.prototype[O]=function(){var re=this.__chain__;if(T||re){var oe=o(this.__wrapped__),fe=oe.__actions__=ui(this.__actions__);return fe.push({func:z,args:arguments,thisArg:o}),oe.__chain__=re,oe}return z.apply(o,ws([this.value()],arguments))})}),o}function nO(){return Pn._===this&&(Pn._=DA),this}function yg(){}function iO(o){return o=lt(o),mt(function(c){return Tx(c,o)})}var rO=Ym(ln),sO=Ym(q0),oO=Ym(xm);function WM(o){return ng(o)?Mm(br(o)):FI(o)}function aO(o){return function(c){return o==null?n:po(o,c)}}var cO=Xx(),lO=Xx(!0);function _g(){return[]}function xg(){return!1}function uO(){return{}}function dO(){return""}function fO(){return!0}function hO(o,c){if(o=lt(o),o<1||o>ne)return[];var d=ge,p=qn(o,ge);c=$e(c),o-=ge;for(var x=wm(p,c);++d<o;)c(d);return x}function pO(o){return it(o)?ln(o,br):Si(o)?[o]:ui(uM(Wt(o)))}function mO(o){var c=++TA;return Wt(o)+c}var gO=ad(function(o,c){return o+c},0),vO=Zm("ceil"),yO=ad(function(o,c){return o/c},1),_O=Zm("floor");function xO(o){return o&&o.length?ed(o,hi,Lm):n}function MO(o,c){return o&&o.length?ed(o,$e(c,2),Lm):n}function SO(o){return Z0(o,hi)}function EO(o,c){return Z0(o,$e(c,2))}function wO(o){return o&&o.length?ed(o,hi,Bm):n}function bO(o,c){return o&&o.length?ed(o,$e(c,2),Bm):n}var TO=ad(function(o,c){return o*c},1),CO=Zm("round"),DO=ad(function(o,c){return o-c},0);function AO(o){return o&&o.length?Em(o,hi):0}function IO(o,c){return o&&o.length?Em(o,$e(c,2)):0}return E.after=KR,E.ary=MM,E.assign=BN,E.assignIn=LM,E.assignInWith=xd,E.assignWith=VN,E.at=HN,E.before=SM,E.bind=cg,E.bindAll=$P,E.bindKey=EM,E.castArray=uN,E.chain=yM,E.chunk=_1,E.compact=x1,E.concat=M1,E.cond=qP,E.conforms=XP,E.constant=mg,E.countBy=AR,E.create=zN,E.curry=wM,E.curryRight=bM,E.debounce=TM,E.defaults=GN,E.defaultsDeep=WN,E.defer=QR,E.delay=eN,E.difference=S1,E.differenceBy=E1,E.differenceWith=w1,E.drop=b1,E.dropRight=T1,E.dropRightWhile=C1,E.dropWhile=D1,E.fill=A1,E.filter=RR,E.flatMap=OR,E.flatMapDeep=LR,E.flatMapDepth=FR,E.flatten=pM,E.flattenDeep=I1,E.flattenDepth=R1,E.flip=tN,E.flow=ZP,E.flowRight=JP,E.fromPairs=N1,E.functions=JN,E.functionsIn=KN,E.groupBy=kR,E.initial=O1,E.intersection=L1,E.intersectionBy=F1,E.intersectionWith=k1,E.invert=eP,E.invertBy=tP,E.invokeMap=BR,E.iteratee=gg,E.keyBy=VR,E.keys=On,E.keysIn=fi,E.map=pd,E.mapKeys=iP,E.mapValues=rP,E.matches=KP,E.matchesProperty=QP,E.memoize=gd,E.merge=sP,E.mergeWith=FM,E.method=eO,E.methodOf=tO,E.mixin=vg,E.negate=vd,E.nthArg=iO,E.omit=oP,E.omitBy=aP,E.once=nN,E.orderBy=HR,E.over=rO,E.overArgs=iN,E.overEvery=sO,E.overSome=oO,E.partial=lg,E.partialRight=CM,E.partition=zR,E.pick=cP,E.pickBy=kM,E.property=WM,E.propertyOf=aO,E.pull=H1,E.pullAll=gM,E.pullAllBy=z1,E.pullAllWith=G1,E.pullAt=W1,E.range=cO,E.rangeRight=lO,E.rearg=rN,E.reject=jR,E.remove=j1,E.rest=sN,E.reverse=og,E.sampleSize=qR,E.set=uP,E.setWith=dP,E.shuffle=XR,E.slice=$1,E.sortBy=JR,E.sortedUniq=Q1,E.sortedUniqBy=eR,E.split=OP,E.spread=oN,E.tail=tR,E.take=nR,E.takeRight=iR,E.takeRightWhile=rR,E.takeWhile=sR,E.tap=xR,E.throttle=aN,E.thru=hd,E.toArray=NM,E.toPairs=UM,E.toPairsIn=BM,E.toPath=pO,E.toPlainObject=OM,E.transform=fP,E.unary=cN,E.union=oR,E.unionBy=aR,E.unionWith=cR,E.uniq=lR,E.uniqBy=uR,E.uniqWith=dR,E.unset=hP,E.unzip=ag,E.unzipWith=vM,E.update=pP,E.updateWith=mP,E.values=ga,E.valuesIn=gP,E.without=fR,E.words=zM,E.wrap=lN,E.xor=hR,E.xorBy=pR,E.xorWith=mR,E.zip=gR,E.zipObject=vR,E.zipObjectDeep=yR,E.zipWith=_R,E.entries=UM,E.entriesIn=BM,E.extend=LM,E.extendWith=xd,vg(E,E),E.add=gO,E.attempt=GM,E.camelCase=xP,E.capitalize=VM,E.ceil=vO,E.clamp=vP,E.clone=dN,E.cloneDeep=hN,E.cloneDeepWith=pN,E.cloneWith=fN,E.conformsTo=mN,E.deburr=HM,E.defaultTo=YP,E.divide=yO,E.endsWith=MP,E.eq=or,E.escape=SP,E.escapeRegExp=EP,E.every=IR,E.find=NR,E.findIndex=fM,E.findKey=jN,E.findLast=PR,E.findLastIndex=hM,E.findLastKey=$N,E.floor=_O,E.forEach=_M,E.forEachRight=xM,E.forIn=qN,E.forInRight=XN,E.forOwn=YN,E.forOwnRight=ZN,E.get=fg,E.gt=gN,E.gte=vN,E.has=QN,E.hasIn=hg,E.head=mM,E.identity=hi,E.includes=UR,E.indexOf=P1,E.inRange=yP,E.invoke=nP,E.isArguments=vo,E.isArray=it,E.isArrayBuffer=yN,E.isArrayLike=di,E.isArrayLikeObject=_n,E.isBoolean=_N,E.isBuffer=Ns,E.isDate=xN,E.isElement=MN,E.isEmpty=SN,E.isEqual=EN,E.isEqualWith=wN,E.isError=ug,E.isFinite=bN,E.isFunction=Yr,E.isInteger=DM,E.isLength=yd,E.isMap=AM,E.isMatch=TN,E.isMatchWith=CN,E.isNaN=DN,E.isNative=AN,E.isNil=RN,E.isNull=IN,E.isNumber=IM,E.isObject=fn,E.isObjectLike=mn,E.isPlainObject=el,E.isRegExp=dg,E.isSafeInteger=NN,E.isSet=RM,E.isString=_d,E.isSymbol=Si,E.isTypedArray=ma,E.isUndefined=PN,E.isWeakMap=ON,E.isWeakSet=LN,E.join=U1,E.kebabCase=wP,E.last=Gi,E.lastIndexOf=B1,E.lowerCase=bP,E.lowerFirst=TP,E.lt=FN,E.lte=kN,E.max=xO,E.maxBy=MO,E.mean=SO,E.meanBy=EO,E.min=wO,E.minBy=bO,E.stubArray=_g,E.stubFalse=xg,E.stubObject=uO,E.stubString=dO,E.stubTrue=fO,E.multiply=TO,E.nth=V1,E.noConflict=nO,E.noop=yg,E.now=md,E.pad=CP,E.padEnd=DP,E.padStart=AP,E.parseInt=IP,E.random=_P,E.reduce=GR,E.reduceRight=WR,E.repeat=RP,E.replace=NP,E.result=lP,E.round=CO,E.runInContext=B,E.sample=$R,E.size=YR,E.snakeCase=PP,E.some=ZR,E.sortedIndex=q1,E.sortedIndexBy=X1,E.sortedIndexOf=Y1,E.sortedLastIndex=Z1,E.sortedLastIndexBy=J1,E.sortedLastIndexOf=K1,E.startCase=LP,E.startsWith=FP,E.subtract=DO,E.sum=AO,E.sumBy=IO,E.template=kP,E.times=hO,E.toFinite=Zr,E.toInteger=lt,E.toLength=PM,E.toLower=UP,E.toNumber=Wi,E.toSafeInteger=UN,E.toString=Wt,E.toUpper=BP,E.trim=VP,E.trimEnd=HP,E.trimStart=zP,E.truncate=GP,E.unescape=WP,E.uniqueId=mO,E.upperCase=jP,E.upperFirst=pg,E.each=_M,E.eachRight=xM,E.first=mM,vg(E,function(){var o={};return Er(E,function(c,d){$t.call(E.prototype,d)||(o[d]=c)}),o}(),{chain:!1}),E.VERSION=e,Ui(["bind","bindKey","curry","curryRight","partial","partialRight"],function(o){E[o].placeholder=E}),Ui(["drop","take"],function(o,c){Tt.prototype[o]=function(d){d=d===n?1:Cn(lt(d),0);var p=this.__filtered__&&!c?new Tt(this):this.clone();return p.__filtered__?p.__takeCount__=qn(d,p.__takeCount__):p.__views__.push({size:qn(d,ge),type:o+(p.__dir__<0?"Right":"")}),p},Tt.prototype[o+"Right"]=function(d){return this.reverse()[o](d).reverse()}}),Ui(["filter","map","takeWhile"],function(o,c){var d=c+1,p=d==se||d==de;Tt.prototype[o]=function(x){var T=this.clone();return T.__iteratees__.push({iteratee:$e(x,3),type:d}),T.__filtered__=T.__filtered__||p,T}}),Ui(["head","last"],function(o,c){var d="take"+(c?"Right":"");Tt.prototype[o]=function(){return this[d](1).value()[0]}}),Ui(["initial","tail"],function(o,c){var d="drop"+(c?"":"Right");Tt.prototype[o]=function(){return this.__filtered__?new Tt(this):this[d](1)}}),Tt.prototype.compact=function(){return this.filter(hi)},Tt.prototype.find=function(o){return this.filter(o).head()},Tt.prototype.findLast=function(o){return this.reverse().find(o)},Tt.prototype.invokeMap=mt(function(o,c){return typeof o=="function"?new Tt(this):this.map(function(d){return Xc(d,o,c)})}),Tt.prototype.reject=function(o){return this.filter(vd($e(o)))},Tt.prototype.slice=function(o,c){o=lt(o);var d=this;return d.__filtered__&&(o>0||c<0)?new Tt(d):(o<0?d=d.takeRight(-o):o&&(d=d.drop(o)),c!==n&&(c=lt(c),d=c<0?d.dropRight(-c):d.take(c-o)),d)},Tt.prototype.takeRightWhile=function(o){return this.reverse().takeWhile(o).reverse()},Tt.prototype.toArray=function(){return this.take(ge)},Er(Tt.prototype,function(o,c){var d=/^(?:filter|find|map|reject)|While$/.test(c),p=/^(?:head|last)$/.test(c),x=E[p?"take"+(c=="last"?"Right":""):c],T=p||/^find/.test(c);x&&(E.prototype[c]=function(){var R=this.__wrapped__,O=p?[1]:arguments,z=R instanceof Tt,re=O[0],oe=z||it(R),fe=function(xt){var At=x.apply(E,ws([xt],O));return p&&Me?At[0]:At};oe&&d&&typeof re=="function"&&re.length!=1&&(z=oe=!1);var Me=this.__chain__,Ue=!!this.__actions__.length,Xe=T&&!Me,ft=z&&!Ue;if(!T&&oe){R=ft?R:new Tt(this);var Ye=o.apply(R,O);return Ye.__actions__.push({func:hd,args:[fe],thisArg:n}),new Vi(Ye,Me)}return Xe&&ft?o.apply(this,O):(Ye=this.thru(fe),Xe?p?Ye.value()[0]:Ye.value():Ye)})}),Ui(["pop","push","shift","sort","splice","unshift"],function(o){var c=Bu[o],d=/^(?:push|sort|unshift)$/.test(o)?"tap":"thru",p=/^(?:pop|shift)$/.test(o);E.prototype[o]=function(){var x=arguments;if(p&&!this.__chain__){var T=this.value();return c.apply(it(T)?T:[],x)}return this[d](function(R){return c.apply(it(R)?R:[],x)})}}),Er(Tt.prototype,function(o,c){var d=E[c];if(d){var p=d.name+"";$t.call(ua,p)||(ua[p]=[]),ua[p].push({name:c,func:d})}}),ua[od(n,w).name]=[{name:"wrapper",func:n}],Tt.prototype.clone=WA,Tt.prototype.reverse=jA,Tt.prototype.value=$A,E.prototype.at=MR,E.prototype.chain=SR,E.prototype.commit=ER,E.prototype.next=wR,E.prototype.plant=TR,E.prototype.reverse=CR,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=DR,E.prototype.first=E.prototype.head,Hc&&(E.prototype[Hc]=bR),E},Ts=EA();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Pn._=Ts,define(function(){return Ts})):co?((co.exports=Ts)._=Ts,gm._=Ts):Pn._=Ts}).call(Fc)});function YM(n,e){return Object.is(n,e)}var Dn=null,Md=!1,Eg=1,va=Symbol("SIGNAL");function Gt(n){let e=Dn;return Dn=n,e}function wg(){return Dn}var Sd={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function bg(n){if(Md)throw new Error("");if(Dn===null)return;Dn.consumerOnSignalRead(n);let e=Dn.nextProducerIndex++;if(wd(Dn),e<Dn.producerNode.length&&Dn.producerNode[e]!==n&&tl(Dn)){let t=Dn.producerNode[e];Ed(t,Dn.producerIndexOfThis[e])}Dn.producerNode[e]!==n&&(Dn.producerNode[e]=n,Dn.producerIndexOfThis[e]=tl(Dn)?eS(n,Dn,e):0),Dn.producerLastReadVersion[e]=n.version}function ZM(){Eg++}function JM(n){if(!(tl(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Eg)){if(!n.producerMustRecompute(n)&&!Dg(n)){Sg(n);return}n.producerRecomputeValue(n),Sg(n)}}function Tg(n){if(n.liveConsumerNode===void 0)return;let e=Md;Md=!0;try{for(let t of n.liveConsumerNode)t.dirty||HO(t)}finally{Md=e}}function KM(){return Dn?.consumerAllowSignalWrites!==!1}function HO(n){n.dirty=!0,Tg(n),n.consumerMarkedDirty?.(n)}function Sg(n){n.dirty=!1,n.lastCleanEpoch=Eg}function Cg(n){return n&&(n.nextProducerIndex=0),Gt(n)}function QM(n,e){if(Gt(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(tl(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Ed(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Dg(n){wd(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(JM(t),i!==t.version))return!0}return!1}function Ag(n){if(wd(n),tl(n))for(let e=0;e<n.producerNode.length;e++)Ed(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function eS(n,e,t){if(tS(n),n.liveConsumerNode.length===0&&nS(n))for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=eS(n.producerNode[i],n,i);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function Ed(n,e){if(tS(n),n.liveConsumerNode.length===1&&nS(n))for(let i=0;i<n.producerNode.length;i++)Ed(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];wd(r),r.producerIndexOfThis[i]=e}}function tl(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function wd(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function tS(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function nS(n){return n.producerNode!==void 0}function zO(){throw new Error}var iS=zO;function GO(n){iS(n)}function Ig(n){iS=n}var WO=null;function Rg(n,e){KM()||GO(n),n.equal(n.value,e)||(n.value=e,jO(n))}var Ng=on(Le({},Sd),{equal:YM,value:void 0,kind:"signal"});function jO(n){n.version++,ZM(),Tg(n),WO?.()}var Pg;function nl(){return Pg}function Kr(n){let e=Pg;return Pg=n,e}var bd=Symbol("NotFound");function rt(n){return typeof n=="function"}function ya(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Td=ya(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function il(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Sn=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(rt(i))try{i()}catch(s){e=s instanceof Td?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{rS(s)}catch(a){e=e??[],a instanceof Td?e=[...e,...a.errors]:e.push(a)}}if(e)throw new Td(e)}}add(e){var t;if(e&&e!==this)if(this.closed)rS(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&il(t,e)}remove(e){let{_finalizers:t}=this;t&&il(t,e),e instanceof n&&e._removeParent(this)}};Sn.EMPTY=(()=>{let n=new Sn;return n.closed=!0,n})();var Og=Sn.EMPTY;function Cd(n){return n instanceof Sn||n&&"closed"in n&&rt(n.remove)&&rt(n.add)&&rt(n.unsubscribe)}function rS(n){rt(n)?n():n.unsubscribe()}var cr={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var _a={setTimeout(n,e,...t){let{delegate:i}=_a;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=_a;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Dd(n){_a.setTimeout(()=>{let{onUnhandledError:e}=cr;if(e)e(n);else throw n})}function rl(){}var sS=Lg("C",void 0,void 0);function oS(n){return Lg("E",void 0,n)}function aS(n){return Lg("N",n,void 0)}function Lg(n,e,t){return{kind:n,value:e,error:t}}var yo=null;function xa(n){if(cr.useDeprecatedSynchronousErrorHandling){let e=!yo;if(e&&(yo={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=yo;if(yo=null,t)throw i}}else n()}function cS(n){cr.useDeprecatedSynchronousErrorHandling&&yo&&(yo.errorThrown=!0,yo.error=n)}var _o=class extends Sn{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Cd(e)&&e.add(this)):this.destination=tL}static create(e,t,i){return new Ma(e,t,i)}next(e){this.isStopped?kg(aS(e),this):this._next(e)}error(e){this.isStopped?kg(oS(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?kg(sS,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},QO=Function.prototype.bind;function Fg(n,e){return QO.call(n,e)}var Ug=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Ad(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Ad(i)}else Ad(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Ad(t)}}},Ma=class extends _o{constructor(e,t,i){super();let r;if(rt(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&cr.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Fg(e.next,s),error:e.error&&Fg(e.error,s),complete:e.complete&&Fg(e.complete,s)}):r=e}this.destination=new Ug(r)}};function Ad(n){cr.useDeprecatedSynchronousErrorHandling?cS(n):Dd(n)}function eL(n){throw n}function kg(n,e){let{onStoppedNotification:t}=cr;t&&_a.setTimeout(()=>t(n,e))}var tL={closed:!0,next:rl,error:eL,complete:rl};var Sa=typeof Symbol=="function"&&Symbol.observable||"@@observable";function bi(n){return n}function Bg(...n){return Vg(n)}function Vg(n){return n.length===0?bi:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var Yt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=iL(t)?t:new Ma(t,i,r);return xa(()=>{let{operator:a,source:l}=this;s.add(a?a.call(s,l):l?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=lS(i),new i((r,s)=>{let a=new Ma({next:l=>{try{t(l)}catch(u){s(u),a.unsubscribe()}},error:s,complete:r});this.subscribe(a)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Sa](){return this}pipe(...t){return Vg(t)(this)}toPromise(t){return t=lS(t),new t((i,r)=>{let s;this.subscribe(a=>s=a,a=>r(a),()=>i(s))})}}return n.create=e=>new n(e),n})();function lS(n){var e;return(e=n??cr.Promise)!==null&&e!==void 0?e:Promise}function nL(n){return n&&rt(n.next)&&rt(n.error)&&rt(n.complete)}function iL(n){return n&&n instanceof _o||nL(n)&&Cd(n)}function Hg(n){return rt(n?.lift)}function Pt(n){return e=>{if(Hg(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Ot(n,e,t,i,r){return new zg(n,e,t,i,r)}var zg=class extends _o{constructor(e,t,i,r,s,a){super(e),this.onFinalize=s,this.shouldUnsubscribe=a,this._next=t?function(l){try{t(l)}catch(u){e.error(u)}}:super._next,this._error=r?function(l){try{r(l)}catch(u){e.error(u)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(l){e.error(l)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function Ea(){return Pt((n,e)=>{let t=null;n._refCount++;let i=Ot(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var wa=class extends Yt{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Hg(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Sn;let t=this.getSubject();e.add(this.source.subscribe(Ot(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Sn.EMPTY)}return e}refCount(){return Ea()(this)}};var uS=ya(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Bn=(()=>{class n extends Yt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Id(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new uS}next(t){xa(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){xa(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){xa(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Og:(this.currentObservers=null,s.push(t),new Sn(()=>{this.currentObservers=null,il(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new Yt;return t.source=this,t}}return n.create=(e,t)=>new Id(e,t),n})(),Id=class extends Bn{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Og}};var Vn=class extends Bn{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var pi=new Yt(n=>n.complete());function dS(n){return n&&rt(n.schedule)}function fS(n){return n[n.length-1]}function hS(n){return rt(fS(n))?n.pop():void 0}function Os(n){return dS(fS(n))?n.pop():void 0}function mS(n,e,t,i){function r(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function l(h){try{f(i.next(h))}catch(m){a(m)}}function u(h){try{f(i.throw(h))}catch(m){a(m)}}function f(h){h.done?s(h.value):r(h.value).then(l,u)}f((i=i.apply(n,e||[])).next())})}function pS(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function xo(n){return this instanceof xo?(this.v=n,this):new xo(n)}function gS(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),l("next"),l("throw"),l("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(v){return function(M){return Promise.resolve(M).then(v,m)}}function l(v,M){i[v]&&(r[v]=function(w){return new Promise(function(_,y){s.push([v,w,_,y])>1||u(v,w)})},M&&(r[v]=M(r[v])))}function u(v,M){try{f(i[v](M))}catch(w){g(s[0][3],w)}}function f(v){v.value instanceof xo?Promise.resolve(v.value.v).then(h,m):g(s[0][2],v)}function h(v){u("next",v)}function m(v){u("throw",v)}function g(v,M){v(M),s.shift(),s.length&&u(s[0][0],s[0][1])}}function vS(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof pS=="function"?pS(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(a){return new Promise(function(l,u){a=n[s](a),r(l,u,a.done,a.value)})}}function r(s,a,l,u){Promise.resolve(u).then(function(f){s({value:f,done:l})},a)}}var Rd=n=>n&&typeof n.length=="number"&&typeof n!="function";function Nd(n){return rt(n?.then)}function Pd(n){return rt(n[Sa])}function Od(n){return Symbol.asyncIterator&&rt(n?.[Symbol.asyncIterator])}function Ld(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function rL(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Fd=rL();function kd(n){return rt(n?.[Fd])}function Ud(n){return gS(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield xo(t.read());if(r)return yield xo(void 0);yield yield xo(i)}}finally{t.releaseLock()}})}function Bd(n){return rt(n?.getReader)}function Ln(n){if(n instanceof Yt)return n;if(n!=null){if(Pd(n))return sL(n);if(Rd(n))return oL(n);if(Nd(n))return aL(n);if(Od(n))return yS(n);if(kd(n))return cL(n);if(Bd(n))return lL(n)}throw Ld(n)}function sL(n){return new Yt(e=>{let t=n[Sa]();if(rt(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function oL(n){return new Yt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function aL(n){return new Yt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Dd)})}function cL(n){return new Yt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function yS(n){return new Yt(e=>{uL(n,e).catch(t=>e.error(t))})}function lL(n){return yS(Ud(n))}function uL(n,e){var t,i,r,s;return mS(this,void 0,void 0,function*(){try{for(t=vS(n);i=yield t.next(),!i.done;){let a=i.value;if(e.next(a),e.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function mi(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Vd(n,e=0){return Pt((t,i)=>{t.subscribe(Ot(i,r=>mi(i,n,()=>i.next(r),e),()=>mi(i,n,()=>i.complete(),e),r=>mi(i,n,()=>i.error(r),e)))})}function Hd(n,e=0){return Pt((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function _S(n,e){return Ln(n).pipe(Hd(e),Vd(e))}function xS(n,e){return Ln(n).pipe(Hd(e),Vd(e))}function MS(n,e){return new Yt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function SS(n,e){return new Yt(t=>{let i;return mi(t,e,()=>{i=n[Fd](),mi(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(a){t.error(a);return}s?t.complete():t.next(r)},0,!0)}),()=>rt(i?.return)&&i.return()})}function zd(n,e){if(!n)throw new Error("Iterable cannot be null");return new Yt(t=>{mi(t,e,()=>{let i=n[Symbol.asyncIterator]();mi(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function ES(n,e){return zd(Ud(n),e)}function wS(n,e){if(n!=null){if(Pd(n))return _S(n,e);if(Rd(n))return MS(n,e);if(Nd(n))return xS(n,e);if(Od(n))return zd(n,e);if(kd(n))return SS(n,e);if(Bd(n))return ES(n,e)}throw Ld(n)}function En(n,e){return e?wS(n,e):Ln(n)}function st(...n){let e=Os(n);return En(n,e)}function ba(n,e){let t=rt(n)?n:()=>n,i=r=>r.error(t());return new Yt(e?r=>e.schedule(i,0,r):i)}function Gg(n){return!!n&&(n instanceof Yt||rt(n.lift)&&rt(n.subscribe))}var Qr=ya(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function kt(n,e){return Pt((t,i)=>{let r=0;t.subscribe(Ot(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:dL}=Array;function fL(n,e){return dL(e)?n(...e):n(e)}function bS(n){return kt(e=>fL(n,e))}var{isArray:hL}=Array,{getPrototypeOf:pL,prototype:mL,keys:gL}=Object;function TS(n){if(n.length===1){let e=n[0];if(hL(e))return{args:e,keys:null};if(vL(e)){let t=gL(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function vL(n){return n&&typeof n=="object"&&pL(n)===mL}function CS(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Gd(...n){let e=Os(n),t=hS(n),{args:i,keys:r}=TS(n);if(i.length===0)return En([],e);let s=new Yt(yL(i,e,r?a=>CS(r,a):bi));return t?s.pipe(bS(t)):s}function yL(n,e,t=bi){return i=>{DS(e,()=>{let{length:r}=n,s=new Array(r),a=r,l=r;for(let u=0;u<r;u++)DS(e,()=>{let f=En(n[u],e),h=!1;f.subscribe(Ot(i,m=>{s[u]=m,h||(h=!0,l--),l||i.next(t(s.slice()))},()=>{--a||i.complete()}))},i)},i)}}function DS(n,e,t){n?mi(t,n,e):e()}function AS(n,e,t,i,r,s,a,l){let u=[],f=0,h=0,m=!1,g=()=>{m&&!u.length&&!f&&e.complete()},v=w=>f<i?M(w):u.push(w),M=w=>{s&&e.next(w),f++;let _=!1;Ln(t(w,h++)).subscribe(Ot(e,y=>{r?.(y),s?v(y):e.next(y)},()=>{_=!0},void 0,()=>{if(_)try{for(f--;u.length&&f<i;){let y=u.shift();a?mi(e,a,()=>M(y)):M(y)}g()}catch(y){e.error(y)}}))};return n.subscribe(Ot(e,v,()=>{m=!0,g()})),()=>{l?.()}}function An(n,e,t=1/0){return rt(e)?An((i,r)=>kt((s,a)=>e(i,s,r,a))(Ln(n(i,r))),t):(typeof e=="number"&&(t=e),Pt((i,r)=>AS(i,r,n,t)))}function IS(n=1/0){return An(bi,n)}function RS(){return IS(1)}function Ta(...n){return RS()(En(n,Os(n)))}function Wd(n){return new Yt(e=>{Ln(n()).subscribe(e)})}function lr(n,e){return Pt((t,i)=>{let r=0;t.subscribe(Ot(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Ls(n){return Pt((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Ot(t,void 0,void 0,a=>{s=Ln(n(a,Ls(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function NS(n,e,t,i,r){return(s,a)=>{let l=t,u=e,f=0;s.subscribe(Ot(a,h=>{let m=f++;u=l?n(u,h,m):(l=!0,h),i&&a.next(u)},r&&(()=>{l&&a.next(u),a.complete()})))}}function Ca(n,e){return rt(e)?An(n,e,1):An(n,1)}function Fs(n){return Pt((e,t)=>{let i=!1;e.subscribe(Ot(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function es(n){return n<=0?()=>pi:Pt((e,t)=>{let i=0;e.subscribe(Ot(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function jd(n=_L){return Pt((e,t)=>{let i=!1;e.subscribe(Ot(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function _L(){return new Qr}function sl(n){return Pt((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function ts(n,e){let t=arguments.length>=2;return i=>i.pipe(n?lr((r,s)=>n(r,s,i)):bi,es(1),t?Fs(e):jd(()=>new Qr))}function Da(n){return n<=0?()=>pi:Pt((e,t)=>{let i=[];e.subscribe(Ot(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Wg(n,e){let t=arguments.length>=2;return i=>i.pipe(n?lr((r,s)=>n(r,s,i)):bi,Da(1),t?Fs(e):jd(()=>new Qr))}function jg(n,e){return Pt(NS(n,e,arguments.length>=2,!0))}function $g(...n){let e=Os(n);return Pt((t,i)=>{(e?Ta(n,t,e):Ta(n,t)).subscribe(i)})}function ur(n,e){return Pt((t,i)=>{let r=null,s=0,a=!1,l=()=>a&&!r&&i.complete();t.subscribe(Ot(i,u=>{r?.unsubscribe();let f=0,h=s++;Ln(n(u,h)).subscribe(r=Ot(i,m=>i.next(e?e(u,m,h,f++):m),()=>{r=null,l()}))},()=>{a=!0,l()}))})}function qg(n){return Pt((e,t)=>{Ln(n).subscribe(Ot(t,()=>t.complete(),rl)),!t.closed&&e.subscribe(t)})}function Hn(n,e,t){let i=rt(n)||e||t?{next:n,error:e,complete:t}:n;return i?Pt((r,s)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let l=!0;r.subscribe(Ot(s,u=>{var f;(f=i.next)===null||f===void 0||f.call(i,u),s.next(u)},()=>{var u;l=!1,(u=i.complete)===null||u===void 0||u.call(i),s.complete()},u=>{var f;l=!1,(f=i.error)===null||f===void 0||f.call(i,u),s.error(u)},()=>{var u,f;l&&((u=i.unsubscribe)===null||u===void 0||u.call(i)),(f=i.finalize)===null||f===void 0||f.call(i)}))}):bi}var vE="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",Ge=class extends Error{code;constructor(e,t){super(ML(e,t)),this.code=e}};function xL(n){return`NG0${Math.abs(n)}`}function ML(n,e){return`${xL(n)}${e?": "+e:""}`}var yE=Symbol("InputSignalNode#UNSET"),SL=on(Le({},Ng),{transformFn:void 0,applyValueToInputSignal(n,e){Rg(n,e)}});function _E(n,e){let t=Object.create(SL);t.value=n,t.transformFn=e?.transform;function i(){if(bg(t),t.value===yE){let r=null;throw new Ge(-950,r)}return t.value}return i[va]=t,i}function _l(n){return{toString:n}.toString()}var $d="__parameters__";function EL(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function xE(n,e,t){return _l(()=>{let i=EL(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;let a=new r(...s);return l.annotation=a,l;function l(u,f,h){let m=u.hasOwnProperty($d)?u[$d]:Object.defineProperty(u,$d,{value:[]})[$d];for(;m.length<=h;)m.push(null);return(m[h]=m[h]||[]).push(a),u}}return r.prototype.ngMetadataName=n,r.annotationCls=r,r})}function Kt(n){for(let e in n)if(n[e]===Kt)return e;throw Error("Could not find renamed property on target object.")}function Ti(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(Ti).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function PS(n,e){return n?e?`${n} ${e}`:n:e||""}var wL=Kt({__forward_ref__:Kt});function ME(n){return n.__forward_ref__=ME,n.toString=function(){return Ti(this())},n}function $i(n){return SE(n)?n():n}function SE(n){return typeof n=="function"&&n.hasOwnProperty(wL)&&n.__forward_ref__===ME}function et(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Sf(n){return{providers:n.providers||[],imports:n.imports||[]}}function Ef(n){return OS(n,wE)||OS(n,bE)}function EE(n){return Ef(n)!==null}function OS(n,e){return n.hasOwnProperty(e)?n[e]:null}function bL(n){let e=n&&(n[wE]||n[bE]);return e||null}function LS(n){return n&&(n.hasOwnProperty(FS)||n.hasOwnProperty(TL))?n[FS]:null}var wE=Kt({\u0275prov:Kt}),FS=Kt({\u0275inj:Kt}),bE=Kt({ngInjectableDef:Kt}),TL=Kt({ngInjectorDef:Kt}),Qe=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=et({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function TE(n){return n&&!!n.\u0275providers}var CL=Kt({\u0275cmp:Kt}),DL=Kt({\u0275dir:Kt}),AL=Kt({\u0275pipe:Kt}),IL=Kt({\u0275mod:Kt}),Kd=Kt({\u0275fac:Kt}),ll=Kt({__NG_ELEMENT_ID__:Kt}),kS=Kt({__NG_ENV_ID__:Kt});function ul(n){return typeof n=="string"?n:n==null?"":String(n)}function RL(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():ul(n)}function CE(n,e){throw new Ge(-200,n)}function Bv(n,e){throw new Ge(-201,!1)}var gt=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(gt||{}),nv;function DE(){return nv}function ji(n){let e=nv;return nv=n,e}function AE(n,e,t){let i=Ef(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&gt.Optional)return null;if(e!==void 0)return e;Bv(n,"Injector")}var NL={},Mo=NL,iv="__NG_DI_FLAG__",Qd=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=t;return this.injector.get(e,i.optional?bd:Mo,i)}},ef="ngTempTokenPath",PL="ngTokenPath",OL=/\n/gm,LL="\u0275",US="__source";function FL(n,e=gt.Default){if(nl()===void 0)throw new Ge(-203,!1);if(nl()===null)return AE(n,void 0,e);{let t=nl(),i;return t instanceof Qd?i=t.injector:i=t,i.get(n,e&gt.Optional?null:void 0,e)}}function vt(n,e=gt.Default){return(DE()||FL)($i(n),e)}function be(n,e=gt.Default){return vt(n,wf(e))}function wf(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function rv(n){let e=[];for(let t=0;t<n.length;t++){let i=$i(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ge(900,!1);let r,s=gt.Default;for(let a=0;a<i.length;a++){let l=i[a],u=kL(l);typeof u=="number"?u===-1?r=l.token:s|=u:r=l}e.push(vt(r,s))}else e.push(vt(i))}return e}function IE(n,e){return n[iv]=e,n.prototype[iv]=e,n}function kL(n){return n[iv]}function UL(n,e,t,i){let r=n[ef];throw e[US]&&r.unshift(e[US]),n.message=BL(`
`+n.message,r,t,i),n[PL]=r,n[ef]=null,n}function BL(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==LL?n.slice(2):n;let r=Ti(e);if(Array.isArray(e))r=e.map(Ti).join(" -> ");else if(typeof e=="object"){let s=[];for(let a in e)if(e.hasOwnProperty(a)){let l=e[a];s.push(a+":"+(typeof l=="string"?JSON.stringify(l):Ti(l)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(OL,`
  `)}`}var VL=IE(xE("Optional"),8);var HL=IE(xE("SkipSelf"),4);function Pa(n,e){let t=n.hasOwnProperty(Kd);return t?n[Kd]:null}function Vv(n,e){n.forEach(t=>Array.isArray(t)?Vv(t,e):e(t))}function RE(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function tf(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var Oa={},Tr=[],dl=new Qe(""),NE=new Qe("",-1),PE=new Qe(""),nf=class{get(e,t=Mo){if(t===Mo){let i=new Error(`NullInjectorError: No provider for ${Ti(e)}!`);throw i.name="NullInjectorError",i}return t}};function OE(n,e){let t=n[IL]||null;if(!t&&e===!0)throw new Error(`Type ${Ti(n)} does not have '\u0275mod' property.`);return t}function La(n){return n[CL]||null}function zL(n){return n[DL]||null}function GL(n){return n[AL]||null}function Hv(n){return{\u0275providers:n}}function WL(...n){return{\u0275providers:LE(!0,n),\u0275fromNgModule:!0}}function LE(n,...e){let t=[],i=new Set,r,s=a=>{t.push(a)};return Vv(e,a=>{let l=a;sv(l,s,[],i)&&(r||=[],r.push(l))}),r!==void 0&&FE(r,s),t}function FE(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];zv(r,s=>{e(s,i)})}}function sv(n,e,t,i){if(n=$i(n),!n)return!1;let r=null,s=LS(n),a=!s&&La(n);if(!s&&!a){let u=n.ngModule;if(s=LS(u),s)r=u;else return!1}else{if(a&&!a.standalone)return!1;r=n}let l=i.has(r);if(a){if(l)return!1;if(i.add(r),a.dependencies){let u=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let f of u)sv(f,e,t,i)}}else if(s){if(s.imports!=null&&!l){i.add(r);let f;try{Vv(s.imports,h=>{sv(h,e,t,i)&&(f||=[],f.push(h))})}finally{}f!==void 0&&FE(f,e)}if(!l){let f=Pa(r)||(()=>new r);e({provide:r,useFactory:f,deps:Tr},r),e({provide:PE,useValue:r,multi:!0},r),e({provide:dl,useValue:()=>vt(r),multi:!0},r)}let u=s.providers;if(u!=null&&!l){let f=n;zv(u,h=>{e(h,f)})}}else return!1;return r!==n&&n.providers!==void 0}function zv(n,e){for(let t of n)TE(t)&&(t=t.\u0275providers),Array.isArray(t)?zv(t,e):e(t)}var jL=Kt({provide:String,useValue:Kt});function kE(n){return n!==null&&typeof n=="object"&&jL in n}function $L(n){return!!(n&&n.useExisting)}function qL(n){return!!(n&&n.useFactory)}function ov(n){return typeof n=="function"}var bf=new Qe(""),qd={},BS={},Xg;function Gv(){return Xg===void 0&&(Xg=new nf),Xg}var Yi=class{},fl=class extends Yi{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,cv(e,a=>this.processProvider(a)),this.records.set(NE,Aa(void 0,this)),r.has("environment")&&this.records.set(Yi,Aa(void 0,this));let s=this.records.get(bf);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(PE,Tr,gt.Self))}retrieve(e,t){let i=t;return this.get(e,i.optional?bd:Mo,i)}destroy(){al(this),this._destroyed=!0;let e=Gt(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Gt(e)}}onDestroy(e){return al(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){al(this);let t=Kr(this),i=ji(void 0),r;try{return e()}finally{Kr(t),ji(i)}}get(e,t=Mo,i=gt.Default){if(al(this),e.hasOwnProperty(kS))return e[kS](this);i=wf(i);let r,s=Kr(this),a=ji(void 0);try{if(!(i&gt.SkipSelf)){let u=this.records.get(e);if(u===void 0){let f=QL(e)&&Ef(e);f&&this.injectableDefInScope(f)?u=Aa(av(e),qd):u=null,this.records.set(e,u)}if(u!=null)return this.hydrate(e,u)}let l=i&gt.Self?Gv():this.parent;return t=i&gt.Optional&&t===Mo?null:t,l.get(e,t)}catch(l){if(l.name==="NullInjectorError"){if((l[ef]=l[ef]||[]).unshift(Ti(e)),s)throw l;return UL(l,e,"R3InjectorError",this.source)}else throw l}finally{ji(a),Kr(s)}}resolveInjectorInitializers(){let e=Gt(null),t=Kr(this),i=ji(void 0),r;try{let s=this.get(dl,Tr,gt.Self);for(let a of s)a()}finally{Kr(t),ji(i),Gt(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(Ti(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=$i(e);let t=ov(e)?e:$i(e&&e.provide),i=YL(e);if(!ov(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Aa(void 0,qd,!0),r.factory=()=>rv(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=Gt(null);try{return t.value===BS?CE(Ti(e)):t.value===qd&&(t.value=BS,t.value=t.factory()),typeof t.value=="object"&&t.value&&KL(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{Gt(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=$i(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function av(n){let e=Ef(n),t=e!==null?e.factory:Pa(n);if(t!==null)return t;if(n instanceof Qe)throw new Ge(204,!1);if(n instanceof Function)return XL(n);throw new Ge(204,!1)}function XL(n){if(n.length>0)throw new Ge(204,!1);let t=bL(n);return t!==null?()=>t.factory(n):()=>new n}function YL(n){if(kE(n))return Aa(void 0,n.useValue);{let e=ZL(n);return Aa(e,qd)}}function ZL(n,e,t){let i;if(ov(n)){let r=$i(n);return Pa(r)||av(r)}else if(kE(n))i=()=>$i(n.useValue);else if(qL(n))i=()=>n.useFactory(...rv(n.deps||[]));else if($L(n))i=()=>vt($i(n.useExisting));else{let r=$i(n&&(n.useClass||n.provide));if(JL(n))i=()=>new r(...rv(n.deps));else return Pa(r)||av(r)}return i}function al(n){if(n.destroyed)throw new Ge(205,!1)}function Aa(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function JL(n){return!!n.deps}function KL(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function QL(n){return typeof n=="function"||typeof n=="object"&&n instanceof Qe}function cv(n,e){for(let t of n)Array.isArray(t)?cv(t,e):t&&TE(t)?cv(t.\u0275providers,e):e(t)}function hr(n,e){let t;n instanceof fl?(al(n),t=n):t=new Qd(n);let i,r=Kr(t),s=ji(void 0);try{return e()}finally{Kr(r),ji(s)}}function eF(){return DE()!==void 0||nl()!=null}function tF(n){return typeof n=="function"}var rs=0,Vt=1,at=2,oi=3,fr=4,pr=5,rf=6,VS=7,Zi=8,hl=9,ns=10,Ci=11,pl=12,HS=13,Va=14,Dr=15,Fa=16,Ia=17,ka=18,Tf=19,UE=20,ks=21,Yg=22,sf=23,qi=24,Zg=25,Ar=26,BE=1;var wo=7,of=8,af=9,Xi=10;function So(n){return Array.isArray(n)&&typeof n[BE]=="object"}function ss(n){return Array.isArray(n)&&n[BE]===!0}function VE(n){return(n.flags&4)!==0}function xl(n){return n.componentOffset>-1}function HE(n){return(n.flags&1)===1}function Do(n){return!!n.template}function cf(n){return(n[at]&512)!==0}function Ml(n){return(n[at]&256)===256}var lv=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function zE(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var Wv=(()=>{let n=()=>GE;return n.ngInherit=!0,n})();function GE(n){return n.type.prototype.ngOnChanges&&(n.setInput=iF),nF}function nF(){let n=jE(this),e=n?.current;if(e){let t=n.previous;if(t===Oa)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function iF(n,e,t,i,r){let s=this.declaredInputs[i],a=jE(n)||rF(n,{previous:Oa,current:null}),l=a.current||(a.current={}),u=a.previous,f=u[s];l[s]=new lv(f&&f.currentValue,t,u===Oa),zE(n,e,r,t)}var WE="__ngSimpleChanges__";function jE(n){return n[WE]||null}function rF(n,e){return n[WE]=e}var zS=null;var un=function(n,e=null,t){zS?.(n,e,t)},sF="svg",oF="math";function is(n){for(;Array.isArray(n);)n=n[rs];return n}function aF(n,e){return is(e[n])}function Hs(n,e){return is(e[n.index])}function $E(n,e){return n.data[e]}function cF(n,e){return n[e]}function Us(n,e){let t=e[n];return So(t)?t:t[rs]}function jv(n){return(n[at]&128)===128}function lF(n){return ss(n[oi])}function lf(n,e){return e==null?null:n[e]}function qE(n){n[Ia]=0}function XE(n){n[at]&1024||(n[at]|=1024,jv(n)&&Df(n))}function uF(n,e){for(;n>0;)e=e[Va],n--;return e}function Cf(n){return!!(n[at]&9216||n[qi]?.dirty)}function uv(n){n[ns].changeDetectionScheduler?.notify(8),n[at]&64&&(n[at]|=1024),Cf(n)&&Df(n)}function Df(n){n[ns].changeDetectionScheduler?.notify(0);let e=bo(n);for(;e!==null&&!(e[at]&8192||(e[at]|=8192,!jv(e)));)e=bo(e)}function YE(n,e){if(Ml(n))throw new Ge(911,!1);n[ks]===null&&(n[ks]=[]),n[ks].push(e)}function dF(n,e){if(n[ks]===null)return;let t=n[ks].indexOf(e);t!==-1&&n[ks].splice(t,1)}function bo(n){let e=n[oi];return ss(e)?e[oi]:e}var It={lFrame:rw(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var dv=!1;function fF(){return It.lFrame.elementDepthCount}function hF(){It.lFrame.elementDepthCount++}function pF(){It.lFrame.elementDepthCount--}function ZE(){return It.bindingsEnabled}function mF(){return It.skipHydrationRootTNode!==null}function gF(n){return It.skipHydrationRootTNode===n}function vF(){It.skipHydrationRootTNode=null}function zn(){return It.lFrame.lView}function Ha(){return It.lFrame.tView}function zs(){let n=JE();for(;n!==null&&n.type===64;)n=n.parent;return n}function JE(){return It.lFrame.currentTNode}function yF(){let n=It.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Sl(n,e){let t=It.lFrame;t.currentTNode=n,t.isParent=e}function KE(){return It.lFrame.isParent}function _F(){It.lFrame.isParent=!1}function xF(){return It.lFrame.contextLView}function QE(){return dv}function GS(n){let e=dv;return dv=n,e}function MF(){return It.lFrame.bindingIndex}function SF(n){return It.lFrame.bindingIndex=n}function ew(){return It.lFrame.bindingIndex++}function EF(n){let e=It.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function wF(){return It.lFrame.inI18n}function bF(n,e){let t=It.lFrame;t.bindingIndex=t.bindingRootIndex=n,fv(e)}function TF(){return It.lFrame.currentDirectiveIndex}function fv(n){It.lFrame.currentDirectiveIndex=n}function tw(n){It.lFrame.currentQueryIndex=n}function CF(n){let e=n[Vt];return e.type===2?e.declTNode:e.type===1?n[pr]:null}function nw(n,e,t){if(t&gt.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&gt.Host);)if(r=CF(s),r===null||(s=s[Va],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=It.lFrame=iw();return i.currentTNode=e,i.lView=n,!0}function $v(n){let e=iw(),t=n[Vt];It.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function iw(){let n=It.lFrame,e=n===null?null:n.child;return e===null?rw(n):e}function rw(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function sw(){let n=It.lFrame;return It.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var ow=sw;function qv(){let n=sw();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function DF(n){return(It.lFrame.contextLView=uF(n,It.lFrame.contextLView))[Zi]}function Af(){return It.lFrame.selectedIndex}function To(n){It.lFrame.selectedIndex=n}function AF(){let n=It.lFrame;return $E(n.tView,n.selectedIndex)}function IF(){return It.lFrame.currentNamespace}var aw=!0;function Xv(){return aw}function Yv(n){aw=n}function RF(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let a=GE(e);(t.preOrderHooks??=[]).push(n,a),(t.preOrderCheckHooks??=[]).push(n,a)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function cw(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:l,ngAfterViewInit:u,ngAfterViewChecked:f,ngOnDestroy:h}=s;a&&(n.contentHooks??=[]).push(-t,a),l&&((n.contentHooks??=[]).push(t,l),(n.contentCheckHooks??=[]).push(t,l)),u&&(n.viewHooks??=[]).push(-t,u),f&&((n.viewHooks??=[]).push(t,f),(n.viewCheckHooks??=[]).push(t,f)),h!=null&&(n.destroyHooks??=[]).push(t,h)}}function Xd(n,e,t){lw(n,e,3,t)}function Yd(n,e,t,i){(n[at]&3)===t&&lw(n,e,t,i)}function Jg(n,e){let t=n[at];(t&3)===e&&(t&=16383,t+=1,n[at]=t)}function lw(n,e,t,i){let r=i!==void 0?n[Ia]&65535:0,s=i??-1,a=e.length-1,l=0;for(let u=r;u<a;u++)if(typeof e[u+1]=="number"){if(l=e[u],i!=null&&l>=i)break}else e[u]<0&&(n[Ia]+=65536),(l<s||s==-1)&&(NF(n,t,e,u),n[Ia]=(n[Ia]&4294901760)+u+2),u++}function WS(n,e){un(4,n,e);let t=Gt(null);try{e.call(n)}finally{Gt(t),un(5,n,e)}}function NF(n,e,t,i){let r=t[i]<0,s=t[i+1],a=r?-t[i]:t[i],l=n[a];r?n[at]>>14<n[Ia]>>16&&(n[at]&3)===e&&(n[at]+=16384,WS(l,s)):WS(l,s)}var Na=-1,ml=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=i}};function PF(n){return(n.flags&8)!==0}function OF(n){return(n.flags&16)!==0}function LF(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],a=t[i++],l=t[i++];n.setAttribute(e,a,l,s)}else{let s=r,a=t[++i];kF(s)?n.setProperty(e,s,a):n.setAttribute(e,s,a),i++}}return i}function FF(n){return n===3||n===4||n===6}function kF(n){return n.charCodeAt(0)===64}function Zv(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?jS(n,t,r,null,e[++i]):jS(n,t,r,null,null))}}return n}function jS(n,e,t,i,r){let s=0,a=n.length;if(e===-1)a=-1;else for(;s<n.length;){let l=n[s++];if(typeof l=="number"){if(l===e){a=-1;break}else if(l>e){a=s-1;break}}}for(;s<n.length;){let l=n[s];if(typeof l=="number")break;if(l===t){r!==null&&(n[s+1]=r);return}s++,r!==null&&s++}a!==-1&&(n.splice(a,0,e),s=a+1),n.splice(s++,0,t),r!==null&&n.splice(s++,0,r)}function uw(n){return n!==Na}function uf(n){return n&32767}function UF(n){return n>>16}function df(n,e){let t=UF(n),i=e;for(;t>0;)i=i[Va],t--;return i}var hv=!0;function $S(n){let e=hv;return hv=n,e}var BF=256,dw=BF-1,fw=5,VF=0,Cr={};function HF(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(ll)&&(i=t[ll]),i==null&&(i=t[ll]=VF++);let r=i&dw,s=1<<r;e.data[n+(r>>fw)]|=s}function hw(n,e){let t=pw(n,e);if(t!==-1)return t;let i=e[Vt];i.firstCreatePass&&(n.injectorIndex=e.length,Kg(i.data,n),Kg(e,null),Kg(i.blueprint,null));let r=Jv(n,e),s=n.injectorIndex;if(uw(r)){let a=uf(r),l=df(r,e),u=l[Vt].data;for(let f=0;f<8;f++)e[s+f]=l[a+f]|u[a+f]}return e[s+8]=r,s}function Kg(n,e){n.push(0,0,0,0,0,0,0,0,e)}function pw(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Jv(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=_w(r),i===null)return Na;if(t++,r=r[Va],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Na}function zF(n,e,t){HF(n,e,t)}function mw(n,e,t){if(t&gt.Optional||n!==void 0)return n;Bv(e,"NodeInjector")}function gw(n,e,t,i){if(t&gt.Optional&&i===void 0&&(i=null),(t&(gt.Self|gt.Host))===0){let r=n[hl],s=ji(void 0);try{return r?r.get(e,i,t&gt.Optional):AE(e,i,t&gt.Optional)}finally{ji(s)}}return mw(i,e,t)}function vw(n,e,t,i=gt.Default,r){if(n!==null){if(e[at]&2048&&!(i&gt.Self)){let a=qF(n,e,t,i,Cr);if(a!==Cr)return a}let s=yw(n,e,t,i,Cr);if(s!==Cr)return s}return gw(e,t,i,r)}function yw(n,e,t,i,r){let s=jF(t);if(typeof s=="function"){if(!nw(e,n,i))return i&gt.Host?mw(r,t,i):gw(e,t,i,r);try{let a;if(a=s(i),a==null&&!(i&gt.Optional))Bv(t);else return a}finally{ow()}}else if(typeof s=="number"){let a=null,l=pw(n,e),u=Na,f=i&gt.Host?e[Dr][pr]:null;for((l===-1||i&gt.SkipSelf)&&(u=l===-1?Jv(n,e):e[l+8],u===Na||!XS(i,!1)?l=-1:(a=e[Vt],l=uf(u),e=df(u,e)));l!==-1;){let h=e[Vt];if(qS(s,l,h.data)){let m=GF(l,e,t,a,i,f);if(m!==Cr)return m}u=e[l+8],u!==Na&&XS(i,e[Vt].data[l+8]===f)&&qS(s,l,e)?(a=h,l=uf(u),e=df(u,e)):l=-1}}return r}function GF(n,e,t,i,r,s){let a=e[Vt],l=a.data[n+8],u=i==null?xl(l)&&hv:i!=a&&(l.type&3)!==0,f=r&gt.Host&&s===l,h=WF(l,a,t,u,f);return h!==null?pv(e,a,h,l):Cr}function WF(n,e,t,i,r){let s=n.providerIndexes,a=e.data,l=s&1048575,u=n.directiveStart,f=n.directiveEnd,h=s>>20,m=i?l:l+h,g=r?l+h:f;for(let v=m;v<g;v++){let M=a[v];if(v<u&&t===M||v>=u&&M.type===t)return v}if(r){let v=a[u];if(v&&Do(v)&&v.type===t)return u}return null}function pv(n,e,t,i){let r=n[t],s=e.data;if(r instanceof ml){let a=r;a.resolving&&CE(RL(s[t]));let l=$S(a.canSeeViewProviders);a.resolving=!0;let u,f=a.injectImpl?ji(a.injectImpl):null,h=nw(n,i,gt.Default);try{r=n[t]=a.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&RF(t,s[t],e)}finally{f!==null&&ji(f),$S(l),a.resolving=!1,ow()}}return r}function jF(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(ll)?n[ll]:void 0;return typeof e=="number"?e>=0?e&dw:$F:e}function qS(n,e,t){let i=1<<n;return!!(t[e+(n>>fw)]&i)}function XS(n,e){return!(n&gt.Self)&&!(n&gt.Host&&e)}var Eo=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return vw(this._tNode,this._lView,e,wf(i),t)}};function $F(){return new Eo(zs(),zn())}function Kv(n){return _l(()=>{let e=n.prototype.constructor,t=e[Kd]||mv(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Kd]||mv(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function mv(n){return SE(n)?()=>{let e=mv($i(n));return e&&e()}:Pa(n)}function qF(n,e,t,i,r){let s=n,a=e;for(;s!==null&&a!==null&&a[at]&2048&&!cf(a);){let l=yw(s,a,t,i|gt.Self,Cr);if(l!==Cr)return l;let u=s.parent;if(!u){let f=a[UE];if(f){let h=f.get(t,Cr,i);if(h!==Cr)return h}u=_w(a),a=a[Va]}s=u}return r}function _w(n){let e=n[Vt],t=e.type;return t===2?e.declTNode:t===1?n[pr]:null}function YS(n,e=null,t=null,i){let r=xw(n,e,t,i);return r.resolveInjectorInitializers(),r}function xw(n,e=null,t=null,i,r=new Set){let s=[t||Tr,WL(n)];return i=i||(typeof n=="object"?void 0:Ti(n)),new fl(s,e||Gv(),i||null,r)}var Bs=class n{static THROW_IF_NOT_FOUND=Mo;static NULL=new nf;static create(e,t){if(Array.isArray(e))return YS({name:""},t,e,"");{let i=e.name??"";return YS({name:i},e.parent,e.providers,i)}}static \u0275prov=et({token:n,providedIn:"any",factory:()=>vt(NE)});static __NG_ELEMENT_ID__=-1};var XF=new Qe("");XF.__NG_ELEMENT_ID__=n=>{let e=zs();if(e===null)throw new Ge(204,!1);if(e.type&2)return e.value;if(n&gt.Optional)return null;throw new Ge(204,!1)};var Mw=!1,If=(()=>{class n{static __NG_ELEMENT_ID__=YF;static __NG_ENV_ID__=t=>t}return n})(),gv=class extends If{_lView;constructor(e){super(),this._lView=e}onDestroy(e){return YE(this._lView,e),()=>dF(this._lView,e)}};function YF(){return new gv(zn())}var gl=class{},Qv=new Qe("",{providedIn:"root",factory:()=>!1});var Sw=new Qe(""),Ew=new Qe(""),za=(()=>{class n{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new Vn(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=et({token:n,providedIn:"root",factory:()=>new n})}return n})();var vv=class extends Bn{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,eF()&&(this.destroyRef=be(If,{optional:!0})??void 0,this.pendingTasks=be(za,{optional:!0})??void 0)}emit(e){let t=Gt(null);try{super.next(e)}finally{Gt(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),a=i;if(e&&typeof e=="object"){let u=e;r=u.next?.bind(u),s=u.error?.bind(u),a=u.complete?.bind(u)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let l=super.subscribe({next:r,error:s,complete:a});return e instanceof Sn&&e.add(l),l}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{e(t),i!==void 0&&this.pendingTasks?.remove(i)})}}},gi=vv;function ff(...n){}function ww(n){let e,t;function i(){n=ff;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function ZS(n){return queueMicrotask(()=>n()),()=>{n=ff}}var ey="isAngularZone",hf=ey+"_ID",ZF=0,Fn=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new gi(!1);onMicrotaskEmpty=new gi(!1);onStable=new gi(!1);onError=new gi(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=Mw}=e;if(typeof Zone>"u")throw new Ge(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=s,QF(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(ey)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ge(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ge(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,a=s.scheduleEventTask("NgZoneEvent: "+r,e,JF,ff,ff);try{return s.runTask(a,t,i)}finally{s.cancelTask(a)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},JF={};function ty(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function KF(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){ww(()=>{n.callbackScheduled=!1,yv(n),n.isCheckStableRunning=!0,ty(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),yv(n)}function QF(n){let e=()=>{KF(n)},t=ZF++;n._inner=n._inner.fork({name:"angular",properties:{[ey]:!0,[hf]:t,[hf+t]:!0},onInvokeTask:(i,r,s,a,l,u)=>{if(e2(u))return i.invokeTask(s,a,l,u);try{return JS(n),i.invokeTask(s,a,l,u)}finally{(n.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),KS(n)}},onInvoke:(i,r,s,a,l,u,f)=>{try{return JS(n),i.invoke(s,a,l,u,f)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!t2(u)&&e(),KS(n)}},onHasTask:(i,r,s,a)=>{i.hasTask(s,a),r===s&&(a.change=="microTask"?(n._hasPendingMicrotasks=a.microTask,yv(n),ty(n)):a.change=="macroTask"&&(n.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,s,a)=>(i.handleError(s,a),n.runOutsideAngular(()=>n.onError.emit(a)),!1)})}function yv(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function JS(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function KS(n){n._nesting--,ty(n)}var _v=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new gi;onMicrotaskEmpty=new gi;onStable=new gi;onError=new gi;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function e2(n){return bw(n,"__ignore_ng_zone__")}function t2(n){return bw(n,"__scheduler_tick__")}function bw(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var Vs=class{_console=console;handleError(e){this._console.error("ERROR",e)}},n2=new Qe("",{providedIn:"root",factory:()=>{let n=be(Fn),e=be(Vs);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function QS(n,e){return _E(n,e)}function i2(n){return _E(yE,n)}var Tw=(QS.required=i2,QS);function r2(){return Rf(zs(),zn())}function Rf(n,e){return new Cw(Hs(n,e))}var Cw=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=r2}return n})();function Dw(n){return(n.flags&128)===128}var Aw=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(Aw||{}),Iw=new Map,s2=0;function o2(){return s2++}function a2(n){Iw.set(n[Tf],n)}function xv(n){Iw.delete(n[Tf])}var eE="__ngContext__";function El(n,e){So(e)?(n[eE]=e[Tf],a2(e)):n[eE]=e}function Rw(n){return Pw(n[pl])}function Nw(n){return Pw(n[fr])}function Pw(n){for(;n!==null&&!ss(n);)n=n[fr];return n}var Mv;function Ow(n){Mv=n}function c2(){if(Mv!==void 0)return Mv;if(typeof document<"u")return document;throw new Ge(210,!1)}var ny=new Qe("",{providedIn:"root",factory:()=>l2}),l2="ng",iy=new Qe(""),wl=new Qe("",{providedIn:"platform",factory:()=>"unknown"});var ry=new Qe("",{providedIn:"root",factory:()=>c2().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var u2="h",d2="b";var Lw=!1,f2=new Qe("",{providedIn:"root",factory:()=>Lw});var Fw=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(Fw||{}),Nf=new Qe(""),tE=new Set;function sy(n){tE.has(n)||(tE.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var h2=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=et({token:n,providedIn:"root",factory:()=>new n})}return n})();var p2=()=>null;function kw(n,e,t=!1){return p2(n,e,t)}function Uw(n,e){let t=n.contentQueries;if(t!==null){let i=Gt(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],a=t[r+1];if(a!==-1){let l=n.data[a];tw(s),l.contentQueries(2,e[a],a)}}}finally{Gt(i)}}}function Sv(n,e,t){tw(0);let i=Gt(null);try{e(n,t)}finally{Gt(i)}}function Bw(n,e,t){if(VE(e)){let i=Gt(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let a=r;a<s;a++){let l=n.data[a];if(l.contentQueries){let u=t[a];l.contentQueries(1,u,a)}}}finally{Gt(i)}}}var Ir=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(Ir||{});var pf=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${vE})`}};function m2(n){return n instanceof pf?n.changingThisBreaksApplicationSecurity:n}function g2(n,e){let t=v2(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${vE})`)}return t===e}function v2(n){return n instanceof pf&&n.getTypeName()||null}var y2=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function _2(n){return n=String(n),n.match(y2)?n:"unsafe:"+n}var Vw=function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n}(Vw||{});function Hw(n){let e=x2();return e?e.sanitize(Vw.URL,n)||"":g2(n,"URL")?m2(n):_2(ul(n))}function x2(){let n=zn();return n&&n[ns].sanitizer}function zw(n){return n instanceof Function?n():n}function M2(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var Gw="ng-template";function S2(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&M2(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(oy(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function oy(n){return n.type===4&&n.value!==Gw}function E2(n,e,t){let i=n.type===4&&!t?Gw:n.value;return e===i}function w2(n,e,t){let i=4,r=n.attrs,s=r!==null?C2(r):0,a=!1;for(let l=0;l<e.length;l++){let u=e[l];if(typeof u=="number"){if(!a&&!dr(i)&&!dr(u))return!1;if(a&&dr(u))continue;a=!1,i=u|i&1;continue}if(!a)if(i&4){if(i=2|i&1,u!==""&&!E2(n,u,t)||u===""&&e.length===1){if(dr(i))return!1;a=!0}}else if(i&8){if(r===null||!S2(n,r,u,t)){if(dr(i))return!1;a=!0}}else{let f=e[++l],h=b2(u,r,oy(n),t);if(h===-1){if(dr(i))return!1;a=!0;continue}if(f!==""){let m;if(h>s?m="":m=r[h+1].toLowerCase(),i&2&&f!==m){if(dr(i))return!1;a=!0}}}}return dr(i)||a}function dr(n){return(n&1)===0}function b2(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let a=e[r];if(a===n)return r;if(a===3||a===6)s=!0;else if(a===1||a===2){let l=e[++r];for(;typeof l=="string";)l=e[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=s?1:2}return-1}else return D2(e,n)}function T2(n,e,t=!1){for(let i=0;i<e.length;i++)if(w2(n,e[i],t))return!0;return!1}function C2(n){for(let e=0;e<n.length;e++){let t=n[e];if(FF(t))return e}return n.length}function D2(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function nE(n,e){return n?":not("+e.trim()+")":e}function A2(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let a=n[t];if(typeof a=="string")if(i&2){let l=n[++t];r+="["+a+(l.length>0?'="'+l+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!dr(a)&&(e+=nE(s,r),r=""),i=a,s=s||!dr(i);t++}return r!==""&&(e+=nE(s,r)),e}function I2(n){return n.map(A2).join(",")}function R2(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!dr(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var Ga={};function N2(n,e){return n.createText(e)}function P2(n,e,t){n.setValue(e,t)}function Ww(n,e,t){return n.createElement(e,t)}function mf(n,e,t,i,r){n.insertBefore(e,t,i,r)}function jw(n,e,t){n.appendChild(e,t)}function iE(n,e,t,i,r){i!==null?mf(n,e,t,i,r):jw(n,e,t)}function O2(n,e,t){n.removeChild(null,e,t)}function L2(n,e,t){n.setAttribute(e,"style",t)}function F2(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function $w(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&LF(n,e,i),r!==null&&F2(n,e,r),s!==null&&L2(n,e,s)}function ay(n,e,t,i,r,s,a,l,u,f,h){let m=Ar+i,g=m+r,v=k2(m,g),M=typeof f=="function"?f():f;return v[Vt]={type:n,blueprint:v,template:t,queries:null,viewQuery:l,declTNode:e,data:v.slice().fill(null,m),bindingStartIndex:m,expandoStartIndex:g,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:u,consts:M,incompleteFirstPass:!1,ssrId:h}}function k2(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Ga);return t}function U2(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=ay(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function cy(n,e,t,i,r,s,a,l,u,f,h){let m=e.blueprint.slice();return m[rs]=r,m[at]=i|4|128|8|64|1024,(f!==null||n&&n[at]&2048)&&(m[at]|=2048),qE(m),m[oi]=m[Va]=n,m[Zi]=t,m[ns]=a||n&&n[ns],m[Ci]=l||n&&n[Ci],m[hl]=u||n&&n[hl]||null,m[pr]=s,m[Tf]=o2(),m[rf]=h,m[UE]=f,m[Dr]=e.type==2?n[Dr]:m,m}function B2(n,e,t){let i=Hs(e,n),r=U2(t),s=n[ns].rendererFactory,a=ly(n,cy(n,r,null,qw(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=a}function qw(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function Xw(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function ly(n,e){return n[pl]?n[HS][fr]=e:n[pl]=e,n[HS]=e,e}function vi(n=1){Yw(Ha(),zn(),Af()+n,!1)}function Yw(n,e,t,i){if(!i)if((e[at]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Xd(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Yd(e,s,0,t)}To(t)}var Pf=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Pf||{});function Ev(n,e,t,i){let r=Gt(null);try{let[s,a,l]=n.inputs[t],u=null;(a&Pf.SignalBased)!==0&&(u=e[s][va]),u!==null&&u.transformFn!==void 0?i=u.transformFn(i):l!==null&&(i=l.call(e,i)),n.setInput!==null?n.setInput(e,u,i,t,s):zE(e,u,s,i)}finally{Gt(r)}}function Zw(n,e,t,i,r){let s=Af(),a=i&2;try{To(-1),a&&e.length>Ar&&Yw(n,e,Ar,!1),un(a?2:0,r),t(i,r)}finally{To(s),un(a?3:1,r)}}function uy(n,e,t){$2(n,e,t),(t.flags&64)===64&&q2(n,e,t)}function Jw(n,e,t=Hs){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let a=i[s+1],l=a===-1?t(e,n):n[a];n[r++]=l}}}function V2(n,e,t,i){let s=i.get(f2,Lw)||t===Ir.ShadowDom,a=n.selectRootElement(e,s);return H2(a),a}function H2(n){z2(n)}var z2=()=>null;function G2(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function W2(n,e,t,i,r,s,a,l){if(!l&&dy(e,n,t,i,r)){xl(e)&&j2(t,e.index);return}if(e.type&3){let u=Hs(e,t);i=G2(i),r=a!=null?a(r,e.value||"",i):r,s.setProperty(u,i,r)}else e.type&12}function j2(n,e){let t=Us(e,n);t[at]&16||(t[at]|=64)}function $2(n,e,t){let i=t.directiveStart,r=t.directiveEnd;xl(t)&&B2(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||hw(t,e);let s=t.initialInputs;for(let a=i;a<r;a++){let l=n.data[a],u=pv(e,n,a,t);if(El(u,e),s!==null&&Y2(e,a-i,u,l,t,s),Do(l)){let f=Us(t.index,e);f[Zi]=pv(e,n,a,t)}}}function q2(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,a=TF();try{To(s);for(let l=i;l<r;l++){let u=n.data[l],f=e[l];fv(l),(u.hostBindings!==null||u.hostVars!==0||u.hostAttrs!==null)&&X2(u,f)}}finally{To(-1),fv(a)}}function X2(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function Kw(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];T2(e,s.selectors,!1)&&(i??=[],Do(s)?i.unshift(s):i.push(s))}return i}function Y2(n,e,t,i,r,s){let a=s[e];if(a!==null)for(let l=0;l<a.length;l+=2){let u=a[l],f=a[l+1];Ev(i,t,u,f)}}function Z2(n,e){let t=n[hl],i=t?t.get(Vs,null):null;i&&i.handleError(e)}function dy(n,e,t,i,r){let s=n.inputs?.[i],a=n.hostDirectiveInputs?.[i],l=!1;if(a)for(let u=0;u<a.length;u+=2){let f=a[u],h=a[u+1],m=e.data[f];Ev(m,t[f],h,r),l=!0}if(s)for(let u of s){let f=t[u],h=e.data[u];Ev(h,f,i,r),l=!0}return l}function J2(n,e){let t=Us(e,n),i=t[Vt];K2(i,t);let r=t[rs];r!==null&&t[rf]===null&&(t[rf]=kw(r,t[hl])),un(18),fy(i,t,t[Zi]),un(19,t[Zi])}function K2(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function fy(n,e,t){$v(e);try{let i=n.viewQuery;i!==null&&Sv(1,i,t);let r=n.template;r!==null&&Zw(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[ka]?.finishViewCreation(n),n.staticContentQueries&&Uw(n,e),n.staticViewQueries&&Sv(2,n.viewQuery,t);let s=n.components;s!==null&&Q2(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[at]&=-5,qv()}}function Q2(n,e){for(let t=0;t<e.length;t++)J2(n,e[t])}function ek(n,e,t,i){let r=Gt(null);try{let s=e.tView,l=n[at]&4096?4096:16,u=cy(n,s,t,l,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),f=n[e.index];u[Fa]=f;let h=n[ka];return h!==null&&(u[ka]=h.createEmbeddedView(s)),fy(s,u,t),u}finally{Gt(r)}}function rE(n,e){return!e||e.firstChild===null||Dw(n)}var tk;function hy(n,e){return tk(n,e)}var Ao=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(Ao||{});function Qw(n){return(n.flags&32)===32}function Ra(n,e,t,i,r){if(i!=null){let s,a=!1;ss(i)?s=i:So(i)&&(a=!0,i=i[rs]);let l=is(i);n===0&&t!==null?r==null?jw(e,t,l):mf(e,t,l,r||null,!0):n===1&&t!==null?mf(e,t,l,r||null,!0):n===2?O2(e,l,a):n===3&&e.destroyNode(l),s!=null&&hk(e,n,s,t,r)}}function nk(n,e){eb(n,e),e[rs]=null,e[pr]=null}function ik(n,e,t,i,r,s){i[rs]=r,i[pr]=e,Of(n,i,t,1,r,s)}function eb(n,e){e[ns].changeDetectionScheduler?.notify(9),Of(n,e,e[Ci],2,null,null)}function rk(n){let e=n[pl];if(!e)return Qg(n[Vt],n);for(;e;){let t=null;if(So(e))t=e[pl];else{let i=e[Xi];i&&(t=i)}if(!t){for(;e&&!e[fr]&&e!==n;)So(e)&&Qg(e[Vt],e),e=e[oi];e===null&&(e=n),So(e)&&Qg(e[Vt],e),t=e&&e[fr]}e=t}}function py(n,e){let t=n[af],i=t.indexOf(e);t.splice(i,1)}function tb(n,e){if(Ml(e))return;let t=e[Ci];t.destroyNode&&Of(n,e,t,3,null,null),rk(e)}function Qg(n,e){if(Ml(e))return;let t=Gt(null);try{e[at]&=-129,e[at]|=256,e[qi]&&Ag(e[qi]),ok(n,e),sk(n,e),e[Vt].type===1&&e[Ci].destroy();let i=e[Fa];if(i!==null&&ss(e[oi])){i!==e[oi]&&py(i,e);let r=e[ka];r!==null&&r.detachView(n)}xv(e)}finally{Gt(t)}}function sk(n,e){let t=n.cleanup,i=e[VS];if(t!==null)for(let a=0;a<t.length-1;a+=2)if(typeof t[a]=="string"){let l=t[a+3];l>=0?i[l]():i[-l].unsubscribe(),a+=2}else{let l=i[t[a+1]];t[a].call(l)}i!==null&&(e[VS]=null);let r=e[ks];if(r!==null){e[ks]=null;for(let a=0;a<r.length;a++){let l=r[a];l()}}let s=e[sf];if(s!==null){e[sf]=null;for(let a of s)a.destroy()}}function ok(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof ml)){let s=t[i+1];if(Array.isArray(s))for(let a=0;a<s.length;a+=2){let l=r[s[a]],u=s[a+1];un(4,l,u);try{u.call(l)}finally{un(5,l,u)}}else{un(4,r,s);try{s.call(r)}finally{un(5,r,s)}}}}}function ak(n,e,t){return ck(n,e.parent,t)}function ck(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[rs];if(xl(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===Ir.None||r===Ir.Emulated)return null}return Hs(i,t)}function lk(n,e,t){return dk(n,e,t)}function uk(n,e,t){return n.type&40?Hs(n,t):null}var dk=uk,sE;function my(n,e,t,i){let r=ak(n,i,e),s=e[Ci],a=i.parent||e[pr],l=lk(a,i,e);if(r!=null)if(Array.isArray(t))for(let u=0;u<t.length;u++)iE(s,r,t[u],l,!1);else iE(s,r,t,l,!1);sE!==void 0&&sE(s,i,e,t,r)}function cl(n,e){if(e!==null){let t=e.type;if(t&3)return Hs(e,n);if(t&4)return wv(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return cl(n,i);{let r=n[e.index];return ss(r)?wv(-1,r):is(r)}}else{if(t&128)return cl(n,e.next);if(t&32)return hy(e,n)()||is(n[e.index]);{let i=nb(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=bo(n[Dr]);return cl(r,i)}else return cl(n,e.next)}}}return null}function nb(n,e){if(e!==null){let i=n[Dr][pr],r=e.projection;return i.projection[r]}return null}function wv(n,e){let t=Xi+n+1;if(t<e.length){let i=e[t],r=i[Vt].firstChild;if(r!==null)return cl(i,r)}return e[wo]}function gy(n,e,t,i,r,s,a){for(;t!=null;){if(t.type===128){t=t.next;continue}let l=i[t.index],u=t.type;if(a&&e===0&&(l&&El(is(l),i),t.flags|=2),!Qw(t))if(u&8)gy(n,e,t.child,i,r,s,!1),Ra(e,n,r,l,s);else if(u&32){let f=hy(t,i),h;for(;h=f();)Ra(e,n,r,h,s);Ra(e,n,r,l,s)}else u&16?fk(n,e,i,t,r,s):Ra(e,n,r,l,s);t=a?t.projectionNext:t.next}}function Of(n,e,t,i,r,s){gy(t,i,n.firstChild,e,r,s,!1)}function fk(n,e,t,i,r,s){let a=t[Dr],u=a[pr].projection[i.projection];if(Array.isArray(u))for(let f=0;f<u.length;f++){let h=u[f];Ra(e,n,r,h,s)}else{let f=u,h=a[oi];Dw(i)&&(f.flags|=128),gy(n,e,f,h,r,s,!0)}}function hk(n,e,t,i,r){let s=t[wo],a=is(t);s!==a&&Ra(e,n,i,s,r);for(let l=Xi;l<t.length;l++){let u=t[l];Of(u[Vt],u,n,e,i,s)}}function gf(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(is(s)),ss(s)&&pk(s,i);let a=t.type;if(a&8)gf(n,e,t.child,i);else if(a&32){let l=hy(t,e),u;for(;u=l();)i.push(u)}else if(a&16){let l=nb(e,t);if(Array.isArray(l))i.push(...l);else{let u=bo(e[Dr]);gf(u[Vt],u,l,i,!0)}}t=r?t.projectionNext:t.next}return i}function pk(n,e){for(let t=Xi;t<n.length;t++){let i=n[t],r=i[Vt].firstChild;r!==null&&gf(i[Vt],i,r,e)}n[wo]!==n[rs]&&e.push(n[wo])}function ib(n){if(n[Zg]!==null){for(let e of n[Zg])e.impl.addSequence(e);n[Zg].length=0}}var rb=[];function mk(n){return n[qi]??gk(n)}function gk(n){let e=rb.pop()??Object.create(yk);return e.lView=n,e}function vk(n){n.lView[qi]!==n&&(n.lView=null,rb.push(n))}var yk=on(Le({},Sd),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Df(n.lView)},consumerOnSignalRead(){this.lView[qi]=this}});function _k(n){let e=n[qi]??Object.create(xk);return e.lView=n,e}var xk=on(Le({},Sd),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=bo(n.lView);for(;e&&!sb(e[Vt]);)e=bo(e);e&&XE(e)},consumerOnSignalRead(){this.lView[qi]=this}});function sb(n){return n.type!==2}function ob(n){if(n[sf]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[sf])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[at]&8192)}}var Mk=100;function ab(n,e=!0,t=0){let r=n[ns].rendererFactory,s=!1;s||r.begin?.();try{Sk(n,t)}catch(a){throw e&&Z2(n,a),a}finally{s||r.end?.()}}function Sk(n,e){let t=QE();try{GS(!0),bv(n,e);let i=0;for(;Cf(n);){if(i===Mk)throw new Ge(103,!1);i++,bv(n,1)}}finally{GS(t)}}function Ek(n,e,t,i){if(Ml(e))return;let r=e[at],s=!1,a=!1;$v(e);let l=!0,u=null,f=null;s||(sb(n)?(f=mk(e),u=Cg(f)):wg()===null?(l=!1,f=_k(e),u=Cg(f)):e[qi]&&(Ag(e[qi]),e[qi]=null));try{qE(e),SF(n.bindingStartIndex),t!==null&&Zw(n,e,t,2,i);let h=(r&3)===3;if(!s)if(h){let v=n.preOrderCheckHooks;v!==null&&Xd(e,v,null)}else{let v=n.preOrderHooks;v!==null&&Yd(e,v,0,null),Jg(e,0)}if(a||wk(e),ob(e),cb(e,0),n.contentQueries!==null&&Uw(n,e),!s)if(h){let v=n.contentCheckHooks;v!==null&&Xd(e,v)}else{let v=n.contentHooks;v!==null&&Yd(e,v,1),Jg(e,1)}Tk(n,e);let m=n.components;m!==null&&ub(e,m,0);let g=n.viewQuery;if(g!==null&&Sv(2,g,i),!s)if(h){let v=n.viewCheckHooks;v!==null&&Xd(e,v)}else{let v=n.viewHooks;v!==null&&Yd(e,v,2),Jg(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Yg]){for(let v of e[Yg])v();e[Yg]=null}s||(ib(e),e[at]&=-73)}catch(h){throw s||Df(e),h}finally{f!==null&&(QM(f,u),l&&vk(f)),qv()}}function cb(n,e){for(let t=Rw(n);t!==null;t=Nw(t))for(let i=Xi;i<t.length;i++){let r=t[i];lb(r,e)}}function wk(n){for(let e=Rw(n);e!==null;e=Nw(e)){if(!(e[at]&2))continue;let t=e[af];for(let i=0;i<t.length;i++){let r=t[i];XE(r)}}}function bk(n,e,t){un(18);let i=Us(e,n);lb(i,t),un(19,i[Zi])}function lb(n,e){jv(n)&&bv(n,e)}function bv(n,e){let i=n[Vt],r=n[at],s=n[qi],a=!!(e===0&&r&16);if(a||=!!(r&64&&e===0),a||=!!(r&1024),a||=!!(s?.dirty&&Dg(s)),a||=!1,s&&(s.dirty=!1),n[at]&=-9217,a)Ek(i,n,i.template,n[Zi]);else if(r&8192){ob(n),cb(n,1);let l=i.components;l!==null&&ub(n,l,1),ib(n)}}function ub(n,e,t){for(let i=0;i<e.length;i++)bk(n,e[i],t)}function Tk(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)To(~r);else{let s=r,a=t[++i],l=t[++i];bF(a,s);let u=e[s];un(24,u),l(2,u),un(25,u)}}}finally{To(-1)}}function db(n,e){let t=QE()?64:1088;for(n[ns].changeDetectionScheduler?.notify(e);n;){n[at]|=t;let i=bo(n);if(cf(n)&&!i)return n;n=i}return null}function fb(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Ck(n,e,t,i=!0){let r=e[Vt];if(Dk(r,e,n,t),i){let a=wv(t,n),l=e[Ci],u=l.parentNode(n[wo]);u!==null&&ik(r,n[pr],l,e,u,a)}let s=e[rf];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Tv(n,e){if(n.length<=Xi)return;let t=Xi+e,i=n[t];if(i){let r=i[Fa];r!==null&&r!==n&&py(r,i),e>0&&(n[t-1][fr]=i[fr]);let s=tf(n,Xi+e);nk(i[Vt],i);let a=s[ka];a!==null&&a.detachView(s[Vt]),i[oi]=null,i[fr]=null,i[at]&=-129}return i}function Dk(n,e,t,i){let r=Xi+i,s=t.length;i>0&&(t[r-1][fr]=e),i<s-Xi?(e[fr]=t[r],RE(t,Xi+i,e)):(t.push(e),e[fr]=null),e[oi]=t;let a=e[Fa];a!==null&&t!==a&&hb(a,e);let l=e[ka];l!==null&&l.insertView(n),uv(e),e[at]|=128}function hb(n,e){let t=n[af],i=e[oi];if(So(i))n[at]|=2;else{let r=i[oi][Dr];e[Dr]!==r&&(n[at]|=2)}t===null?n[af]=[e]:t.push(e)}var vl=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let e=this._lView,t=e[Vt];return gf(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i}get context(){return this._lView[Zi]}set context(e){this._lView[Zi]=e}get destroyed(){return Ml(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[oi];if(ss(e)){let t=e[of],i=t?t.indexOf(this):-1;i>-1&&(Tv(e,i),tf(t,i))}this._attachedToViewContainer=!1}tb(this._lView[Vt],this._lView)}onDestroy(e){YE(this._lView,e)}markForCheck(){db(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[at]&=-129}reattach(){uv(this._lView),this._lView[at]|=128}detectChanges(){this._lView[at]|=1024,ab(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ge(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=cf(this._lView),t=this._lView[Fa];t!==null&&!e&&py(t,this._lView),eb(this._lView[Vt],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ge(902,!1);this._appRef=e;let t=cf(this._lView),i=this._lView[Fa];i!==null&&!t&&hb(i,this._lView),uv(this._lView)}};var Lf=(()=>{class n{static __NG_ELEMENT_ID__=Rk}return n})(),Ak=Lf,Ik=class extends Ak{_declarationLView;_declarationTContainer;elementRef;constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=ek(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new vl(r)}};function Rk(){return pb(zs(),zn())}function pb(n,e){return n.type&4?new Ik(e,n,Rf(n,e)):null}function vy(n,e,t,i,r){let s=n.data[e];if(s===null)s=Nk(n,e,t,i,r),wF()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let a=yF();s.injectorIndex=a===null?-1:a.injectorIndex}return Sl(s,!0),s}function Nk(n,e,t,i,r){let s=JE(),a=KE(),l=a?s:s&&s.parent,u=n.data[e]=Ok(n,l,t,e,i,r);return Pk(n,u,s,a),u}function Pk(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function Ok(n,e,t,i,r,s){let a=e?e.injectorIndex:-1,l=0;return mF()&&(l|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:l,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var _q=new RegExp(`^(\\d+)*(${d2}|${u2})*(.*)`);var Lk=()=>null;function oE(n,e){return Lk(n,e)}var Fk=class{},mb=class{},Cv=class{resolveComponentFactory(e){throw Error(`No component factory found for ${Ti(e)}.`)}},Ff=class{static NULL=new Cv},Ua=class{};var kk=(()=>{class n{static \u0275prov=et({token:n,providedIn:"root",factory:()=>null})}return n})();var ev={},Dv=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=wf(i);let r=this.injector.get(e,ev,i);return r!==ev||t===ev?r:this.parentInjector.get(e,t,i)}};function aE(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let a=0;a<e.length;a++){let l=e[a];if(typeof l=="number")s=l;else if(s==1)r=PS(r,l);else if(s==2){let u=l,f=e[++a];i=PS(i,u+": "+f+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function Io(n,e=gt.Default){let t=zn();if(t===null)return vt(n,e);let i=zs();return vw(i,t,$i(n),e)}function gb(n,e,t,i,r){let s=i===null?null:{"":-1},a=r(n,t);if(a!==null){let l,u=null,f=null,h=Bk(a);h===null?l=a:[l,u,f]=h,zk(n,e,t,l,s,u,f)}s!==null&&i!==null&&Uk(t,i,s)}function Uk(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Ge(-301,!1);i.push(e[r],s)}}function Bk(n){let e=null,t=!1;for(let a=0;a<n.length;a++){let l=n[a];if(a===0&&Do(l)&&(e=l),l.findHostDirectiveDefs!==null){t=!0;break}}if(!t)return null;let i=null,r=null,s=null;for(let a of n)a.findHostDirectiveDefs!==null&&(i??=[],r??=new Map,s??=new Map,Vk(a,i,s,r)),a===e&&(i??=[],i.push(a));return i!==null?(i.push(...e===null?n:n.slice(1)),[i,r,s]):null}function Vk(n,e,t,i){let r=e.length;n.findHostDirectiveDefs(n,e,i),t.set(n,[r,e.length-1])}function Hk(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function zk(n,e,t,i,r,s,a){let l=i.length,u=!1;for(let g=0;g<l;g++){let v=i[g];!u&&Do(v)&&(u=!0,Hk(n,t,g)),zF(hw(t,e),n,v.type)}Xk(t,n.data.length,l);for(let g=0;g<l;g++){let v=i[g];v.providersResolver&&v.providersResolver(v)}let f=!1,h=!1,m=Xw(n,e,l,null);l>0&&(t.directiveToIndex=new Map);for(let g=0;g<l;g++){let v=i[g];if(t.mergedAttrs=Zv(t.mergedAttrs,v.hostAttrs),Wk(n,t,e,m,v),qk(m,v,r),a!==null&&a.has(v)){let[w,_]=a.get(v);t.directiveToIndex.set(v.type,[m,w+t.directiveStart,_+t.directiveStart])}else(s===null||!s.has(v))&&t.directiveToIndex.set(v.type,m);v.contentQueries!==null&&(t.flags|=4),(v.hostBindings!==null||v.hostAttrs!==null||v.hostVars!==0)&&(t.flags|=64);let M=v.type.prototype;!f&&(M.ngOnChanges||M.ngOnInit||M.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),f=!0),!h&&(M.ngOnChanges||M.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),h=!0),m++}Gk(n,t,s)}function Gk(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))cE(0,e,r,i),cE(1,e,r,i),uE(e,i,!1);else{let s=t.get(r);lE(0,e,s,i),lE(1,e,s,i),uE(e,i,!0)}}}function cE(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let a;n===0?a=e.inputs??={}:a=e.outputs??={},a[s]??=[],a[s].push(i),vb(e,s)}}function lE(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let a=r[s],l;n===0?l=e.hostDirectiveInputs??={}:l=e.hostDirectiveOutputs??={},l[a]??=[],l[a].push(i,s),vb(e,a)}}function vb(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function uE(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:s}=n;if(i===null||!t&&r===null||t&&s===null||oy(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let a=null,l=0;for(;l<i.length;){let u=i[l];if(u===0){l+=4;continue}else if(u===5){l+=2;continue}else if(typeof u=="number")break;if(!t&&r.hasOwnProperty(u)){let f=r[u];for(let h of f)if(h===e){a??=[],a.push(u,i[l+1]);break}}else if(t&&s.hasOwnProperty(u)){let f=s[u];for(let h=0;h<f.length;h+=2)if(f[h]===e){a??=[],a.push(f[h+1],i[l+1]);break}}l+=2}n.initialInputs??=[],n.initialInputs.push(a)}function Wk(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=Pa(r.type,!0)),a=new ml(s,Do(r),Io);n.blueprint[i]=a,t[i]=a,jk(n,e,i,Xw(n,t,r.hostVars,Ga),r)}function jk(n,e,t,i,r){let s=r.hostBindings;if(s){let a=n.hostBindingOpCodes;a===null&&(a=n.hostBindingOpCodes=[]);let l=~e.index;$k(a)!=l&&a.push(l),a.push(t,i,s)}}function $k(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function qk(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Do(e)&&(t[""]=n)}}function Xk(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function yb(n,e,t,i,r,s,a,l){let u=e.consts,f=lf(u,a),h=vy(e,n,2,i,f);return s&&gb(e,t,h,lf(u,l),r),h.mergedAttrs=Zv(h.mergedAttrs,h.attrs),h.attrs!==null&&aE(h,h.attrs,!1),h.mergedAttrs!==null&&aE(h,h.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,h),h}function _b(n,e){cw(n,e),VE(e)&&n.queries.elementEnd(e)}var vf=class extends Ff{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=La(e);return new yl(t,this.ngModule)}};function Yk(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],s={propName:t,templateName:e,isSignal:(i&Pf.SignalBased)!==0};return r&&(s.transform=r),s})}function Zk(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function Jk(n,e,t){let i=e instanceof Yi?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new Dv(t,i):t}function Kk(n){let e=n.get(Ua,null);if(e===null)throw new Ge(407,!1);let t=n.get(kk,null),i=n.get(gl,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i}}function Qk(n,e){let t=(n.selectors[0][0]||"div").toLowerCase();return Ww(e,t,t==="svg"?sF:t==="math"?oF:null)}var yl=class extends mb{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=Yk(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=Zk(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=I2(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r){un(22);let s=Gt(null);try{let a=this.componentDef,l=i?["ng-version","19.2.7"]:R2(this.componentDef.selectors[0]),u=ay(0,null,null,1,0,null,null,null,null,[l],null),f=Jk(a,r||this.ngModule,e),h=Kk(f),m=h.rendererFactory.createRenderer(null,a),g=i?V2(m,i,a.encapsulation,f):Qk(a,m),v=cy(null,u,null,512|qw(a),null,null,h,m,f,null,kw(g,f,!0));v[Ar]=g,$v(v);let M=null;try{let w=yb(Ar,u,v,"#host",()=>[this.componentDef],!0,0);g&&($w(m,g,w),El(g,v)),uy(u,v,w),Bw(u,w,v),_b(u,w),t!==void 0&&eU(w,this.ngContentSelectors,t),M=Us(w.index,v),v[Zi]=M[Zi],fy(u,v,null)}catch(w){throw M!==null&&xv(M),xv(v),w}finally{un(23),qv()}return new Av(this.componentType,v)}finally{Gt(s)}}},Av=class extends Fk{_rootLView;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t){super(),this._rootLView=t,this._tNode=$E(t[Vt],Ar),this.location=Rf(this._tNode,t),this.instance=Us(this._tNode.index,t)[Zi],this.hostView=this.changeDetectorRef=new vl(t,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,s=dy(i,r[Vt],r,e,t);this.previousInputValues.set(e,t);let a=Us(i.index,r);db(a,1)}get injector(){return new Eo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function eU(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var Wa=(()=>{class n{static __NG_ELEMENT_ID__=tU}return n})();function tU(){let n=zs();return iU(n,zn())}var nU=Wa,xb=class extends nU{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Rf(this._hostTNode,this._hostLView)}get injector(){return new Eo(this._hostTNode,this._hostLView)}get parentInjector(){let e=Jv(this._hostTNode,this._hostLView);if(uw(e)){let t=df(e,this._hostLView),i=uf(e),r=t[Vt].data[i+8];return new Eo(r,t)}else return new Eo(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=dE(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Xi}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let a=oE(this._lContainer,e.ssrId),l=e.createEmbeddedViewImpl(t||{},s,a);return this.insertImpl(l,r,rE(this._hostTNode,a)),l}createComponent(e,t,i,r,s){let a=e&&!tF(e),l;if(a)l=t;else{let M=t||{};l=M.index,i=M.injector,r=M.projectableNodes,s=M.environmentInjector||M.ngModuleRef}let u=a?e:new yl(La(e)),f=i||this.parentInjector;if(!s&&u.ngModule==null){let w=(a?f:this.parentInjector).get(Yi,null);w&&(s=w)}let h=La(u.componentType??{}),m=oE(this._lContainer,h?.id??null),g=m?.firstChild??null,v=u.create(f,r,g,s);return this.insertImpl(v.hostView,l,rE(this._hostTNode,m)),v}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(lF(r)){let l=this.indexOf(e);if(l!==-1)this.detach(l);else{let u=r[oi],f=new xb(u,u[pr],u[oi]);f.detach(f.indexOf(e))}}let s=this._adjustIndex(t),a=this._lContainer;return Ck(a,r,s,i),e.attachToViewContainerRef(),RE(tv(a),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=dE(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Tv(this._lContainer,t);i&&(tf(tv(this._lContainer),t),tb(i[Vt],i))}detach(e){let t=this._adjustIndex(e,-1),i=Tv(this._lContainer,t);return i&&tf(tv(this._lContainer),t)!=null?new vl(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function dE(n){return n[of]}function tv(n){return n[of]||(n[of]=[])}function iU(n,e){let t,i=e[n.index];return ss(i)?t=i:(t=fb(i,e,null,n),e[n.index]=t,ly(e,t)),sU(t,e,n,i),new xb(t,n,e)}function rU(n,e){let t=n[Ci],i=t.createComment(""),r=Hs(e,n),s=t.parentNode(r);return mf(t,s,i,t.nextSibling(r),!1),i}var sU=cU,oU=()=>!1;function aU(n,e,t){return oU(n,e,t)}function cU(n,e,t,i){if(n[wo])return;let r;t.type&8?r=is(i):r=rU(e,t),n[wo]=r}var Ba=class{},yy=class{};var Iv=class extends Ba{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new vf(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=OE(e);this._bootstrapComponents=zw(s.bootstrap),this._r3Injector=xw(e,t,[{provide:Ba,useValue:this},{provide:Ff,useValue:this.componentFactoryResolver},...i],Ti(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Rv=class extends yy{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new Iv(this.moduleType,e,[])}};var yf=class extends Ba{injector;componentFactoryResolver=new vf(this);instance=null;constructor(e){super();let t=new fl([...e.providers,{provide:Ba,useValue:this},{provide:Ff,useValue:this.componentFactoryResolver}],e.parent||Gv(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function kf(n,e,t=null){return new yf({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var lU=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=LE(!1,t.type),r=i.length>0?kf([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=et({token:n,providedIn:"environment",factory:()=>new n(vt(Yi))})}return n})();function Yn(n){return _l(()=>{let e=Mb(n),t=on(Le({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Aw.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(lU).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Ir.Emulated,styles:n.styles||Tr,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&sy("NgStandalone"),Sb(t);let i=n.dependencies;return t.directiveDefs=fE(i,!1),t.pipeDefs=fE(i,!0),t.id=pU(t),t})}function uU(n){return La(n)||zL(n)}function dU(n){return n!==null}function Uf(n){return _l(()=>({type:n.type,bootstrap:n.bootstrap||Tr,declarations:n.declarations||Tr,imports:n.imports||Tr,exports:n.exports||Tr,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function fU(n,e){if(n==null)return Oa;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,a,l,u;Array.isArray(r)?(l=r[0],s=r[1],a=r[2]??s,u=r[3]||null):(s=r,a=r,l=Pf.None,u=null),t[s]=[i,l,u],e[s]=a}return t}function hU(n){if(n==null)return Oa;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function bl(n){return _l(()=>{let e=Mb(n);return Sb(e),e})}function Mb(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||Oa,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||Tr,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:fU(n.inputs,e),outputs:hU(n.outputs),debugInfo:null}}function Sb(n){n.features?.forEach(e=>e(n))}function fE(n,e){if(!n)return null;let t=e?GL:uU;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(dU)}function pU(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function Eb(n){return gU(n)?Array.isArray(n)||!(n instanceof Map)&&Symbol.iterator in n:!1}function mU(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{let t=n[Symbol.iterator](),i;for(;!(i=t.next()).done;)e(i.value)}}function gU(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function _f(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function vU(n,e,t,i){let r=_f(n,e,t);return _f(n,e+1,i)||r}function yU(n,e,t,i,r,s,a,l,u){let f=e.consts,h=vy(e,n,4,a||null,l||null);ZE()&&gb(e,t,h,lf(f,u),Kw),h.mergedAttrs=Zv(h.mergedAttrs,h.attrs),cw(e,h);let m=h.tView=ay(2,h,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,f,null);return e.queries!==null&&(e.queries.template(e,h),m.queries=e.queries.embeddedTView(h)),h}function _U(n,e,t,i,r,s,a,l,u,f){let h=t+Ar,m=e.firstCreatePass?yU(h,e,n,i,r,s,a,l,u):e.data[h];Sl(m,!1);let g=xU(e,n,m,t);Xv()&&my(e,n,g,m),El(g,n);let v=fb(g,n,g,m);return n[h]=v,ly(n,v),aU(v,m,n),HE(m)&&uy(e,n,m),u!=null&&Jw(n,m,f),m}function Ro(n,e,t,i,r,s,a,l){let u=zn(),f=Ha(),h=lf(f.consts,s);return _U(u,f,n,e,t,i,r,h,a,l),Ro}var xU=MU;function MU(n,e,t,i){return Yv(!0),e[Ci].createComment("")}var wb=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var bb=new Qe("");var SU=(()=>{class n{static \u0275prov=et({token:n,providedIn:"root",factory:()=>new Nv})}return n})(),Nv=class{queuedEffectCount=0;queues=new Map;schedule(e){this.enqueue(e)}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),this.queuedEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||(this.queuedEffectCount++,i.add(e))}flush(){for(;this.queuedEffectCount>0;)for(let[e,t]of this.queues)e===null?this.flushQueue(t):e.run(()=>this.flushQueue(t))}flushQueue(e){for(let t of e)e.delete(t),this.queuedEffectCount--,t.run()}};function Tl(n){return!!n&&typeof n.then=="function"}function Tb(n){return!!n&&typeof n.subscribe=="function"}var EU=new Qe("");var Cb=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=be(EU,{optional:!0})??[];injector=be(Bs);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=hr(this.injector,r);if(Tl(s))t.push(s);else if(Tb(s)){let a=new Promise((l,u)=>{s.subscribe({complete:l,error:u})});t.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),_y=new Qe("");function wU(){Ig(()=>{throw new Ge(600,!1)})}function bU(n){return n.isBoundToModule}var TU=10;var Co=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=be(n2);afterRenderManager=be(h2);zonelessEnabled=be(Qv);rootEffectScheduler=be(SU);dirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new Bn;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=be(za).hasPendingTasks.pipe(kt(t=>!t));constructor(){be(Nf,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=be(Yi);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=Bs.NULL){un(10);let s=t instanceof mb;if(!this._injector.get(Cb).done){let v="";throw new Ge(405,v)}let l;s?l=t:l=this._injector.get(Ff).resolveComponentFactory(t),this.componentTypes.push(l.componentType);let u=bU(l)?void 0:this._injector.get(Ba),f=i||l.selector,h=l.create(r,[],f,u),m=h.location.nativeElement,g=h.injector.get(bb,null);return g?.registerApplication(m),h.onDestroy(()=>{this.detachView(h.hostView),Zd(this.components,h),g?.unregisterApplication(m)}),this._loadComponent(h),un(11,h),h}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){un(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(Fw.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new Ge(101,!1);let t=Gt(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Gt(t),this.afterTick.next(),un(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Ua,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<TU;)un(14),this.synchronizeOnce(),un(15)}synchronizeOnce(){if(this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let t=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i,notifyErrorHandler:r}of this.allViews)CU(i,r,t,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Cf(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Zd(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(_y,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Zd(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Ge(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Zd(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function CU(n,e,t,i){if(!t&&!Cf(n))return;ab(n,e,t&&!i?0:1)}function DU(n,e,t,i){return _f(n,ew(),t)?e+ul(t)+i:Ga}function AU(n,e,t,i,r,s){let a=MF(),l=vU(n,a,t,r);return EF(2),l?e+ul(t)+i+ul(r)+s:Ga}function Di(n,e,t){let i=zn(),r=ew();if(_f(i,r,e)){let s=Ha(),a=AF();W2(s,a,i,n,e,i[Ci],t,!1)}return Di}function hE(n,e,t,i,r){dy(e,n,t,r?"class":"style",i)}function nn(n,e,t,i){let r=zn(),s=Ha(),a=Ar+n,l=r[Ci],u=s.firstCreatePass?yb(a,s,r,e,Kw,ZE(),t,i):s.data[a],f=IU(s,r,u,l,e,n);r[a]=f;let h=HE(u);return Sl(u,!0),$w(l,f,u),!Qw(u)&&Xv()&&my(s,r,f,u),(fF()===0||h)&&El(f,r),hF(),h&&(uy(s,r,u),Bw(s,u,r)),i!==null&&Jw(r,u),nn}function rn(){let n=zs();KE()?_F():(n=n.parent,Sl(n,!1));let e=n;gF(e)&&vF(),pF();let t=Ha();return t.firstCreatePass&&_b(t,e),e.classesWithoutHost!=null&&PF(e)&&hE(t,e,zn(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&OF(e)&&hE(t,e,zn(),e.stylesWithoutHost,!1),rn}function ai(n,e,t,i){return nn(n,e,t,i),rn(),ai}var IU=(n,e,t,i,r,s)=>(Yv(!0),Ww(i,r,IF()));var xf="en-US";var RU=xf;function NU(n){typeof n=="string"&&(RU=n.toLowerCase().replace(/_/g,"-"))}function Cl(n=1){return DF(n)}function xy(n){let e=xF();return cF(e,Ar+n)}function Gn(n,e=""){let t=zn(),i=Ha(),r=n+Ar,s=i.firstCreatePass?vy(i,r,1,e,null):i.data[r],a=PU(i,t,s,e,n);t[r]=a,Xv()&&my(i,t,a,s),Sl(s,!1)}var PU=(n,e,t,i,r)=>(Yv(!0),N2(e[Ci],i));function ja(n){return Bf("",n,""),ja}function Bf(n,e,t){let i=zn(),r=DU(i,n,e,t);return r!==Ga&&Db(i,Af(),r),Bf}function Vf(n,e,t,i,r){let s=zn(),a=AU(s,n,e,t,i,r);return a!==Ga&&Db(s,Af(),a),Vf}function Db(n,e,t){let i=aF(e,n);P2(n[Ci],i,t)}function My(n,e){return pb(n,e)}var Pv=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},Ab=(()=>{class n{compileModuleSync(t){return new Rv(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=OE(t),s=zw(r.declarations).reduce((a,l)=>{let u=La(l);return u&&a.push(new yl(u)),a},[]);return new Pv(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var OU=(()=>{class n{zone=be(Fn);changeDetectionScheduler=be(gl);applicationRef=be(Co);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),LU=new Qe("",{factory:()=>!1});function Ib({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new Fn(on(Le({},Nb()),{scheduleInRootZone:t})),[{provide:Fn,useFactory:n},{provide:dl,multi:!0,useFactory:()=>{let i=be(OU,{optional:!0});return()=>i.initialize()}},{provide:dl,multi:!0,useFactory:()=>{let i=be(FU);return()=>{i.initialize()}}},e===!0?{provide:Sw,useValue:!0}:[],{provide:Ew,useValue:t??Mw}]}function Rb(n){let e=n?.ignoreChangesOutsideZone,t=n?.scheduleInRootZone,i=Ib({ngZoneFactory:()=>{let r=Nb(n);return r.scheduleInRootZone=t,r.shouldCoalesceEventChangeDetection&&sy("NgZone_CoalesceEvent"),new Fn(r)},ignoreChangesOutsideZone:e,scheduleInRootZone:t});return Hv([{provide:LU,useValue:!0},{provide:Qv,useValue:!1},i])}function Nb(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var FU=(()=>{class n{subscription=new Sn;initialized=!1;zone=be(Fn);pendingTasks=be(za);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Fn.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Fn.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var kU=(()=>{class n{appRef=be(Co);taskService=be(za);ngZone=be(Fn);zonelessEnabled=be(Qv);tracing=be(Nf,{optional:!0});disableScheduling=be(Sw,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Sn;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(hf):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(be(Ew,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof _v||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{this.appRef.dirtyFlags|=16,i=!0;break}case 13:{this.appRef.dirtyFlags|=2,i=!0;break}case 11:{i=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?ZS:ww;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(hf+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,ZS(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function UU(){return typeof $localize<"u"&&$localize.locale||xf}var Sy=new Qe("",{providedIn:"root",factory:()=>be(Sy,gt.Optional|gt.SkipSelf)||UU()});var Ov=new Qe(""),BU=new Qe("");function ol(n){return!n.moduleRef}function VU(n){let e=ol(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Fn);return t.run(()=>{ol(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(Vs,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),ol(n)){let s=()=>e.destroy(),a=n.platformInjector.get(Ov);a.add(s),e.onDestroy(()=>{r.unsubscribe(),a.delete(s)})}else{let s=()=>n.moduleRef.destroy(),a=n.platformInjector.get(Ov);a.add(s),n.moduleRef.onDestroy(()=>{Zd(n.allPlatformModules,n.moduleRef),r.unsubscribe(),a.delete(s)})}return zU(i,t,()=>{let s=e.get(Cb);return s.runInitializers(),s.donePromise.then(()=>{let a=e.get(Sy,xf);if(NU(a||xf),!e.get(BU,!0))return ol(n)?e.get(Co):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(ol(n)){let u=e.get(Co);return n.rootComponent!==void 0&&u.bootstrap(n.rootComponent),u}else return HU(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function HU(n,e){let t=n.injector.get(Co);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new Ge(-403,!1);e.push(n)}function zU(n,e,t){try{let i=t();return Tl(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var Jd=null;function GU(n=[],e){return Bs.create({name:e,providers:[{provide:bf,useValue:"platform"},{provide:Ov,useValue:new Set([()=>Jd=null])},...n]})}function WU(n=[]){if(Jd)return Jd;let e=GU(n);return Jd=e,wU(),jU(e),e}function jU(n){let e=n.get(iy,null);hr(n,()=>{e?.forEach(t=>t())})}var Ey=(()=>{class n{static __NG_ELEMENT_ID__=$U}return n})();function $U(n){return qU(zs(),zn(),(n&16)===16)}function qU(n,e,t){if(xl(n)&&!t){let i=Us(n.index,e);return new vl(i,i)}else if(n.type&175){let i=e[Dr];return new vl(i,e)}return null}var Lv=class{constructor(){}supports(e){return Eb(e)}create(e){return new Fv(e)}},XU=(n,e)=>e,Fv=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(e){this._trackByFn=e||XU}forEachItem(e){let t;for(t=this._itHead;t!==null;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,i=this._removalsHead,r=0,s=null;for(;t||i;){let a=!i||t&&t.currentIndex<pE(i,r,s)?t:i,l=pE(a,r,s),u=a.currentIndex;if(a===i)r--,i=i._nextRemoved;else if(t=t._next,a.previousIndex==null)r++;else{s||(s=[]);let f=l-r,h=u-r;if(f!=h){for(let g=0;g<f;g++){let v=g<s.length?s[g]:s[g]=0,M=v+g;h<=M&&M<f&&(s[g]=v+1)}let m=a.previousIndex;s[m]=h-f}}l!==u&&e(a,l,u)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;t!==null;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;t!==null;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;t!==null;t=t._nextIdentityChange)e(t)}diff(e){if(e==null&&(e=[]),!Eb(e))throw new Ge(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._itHead,i=!1,r,s,a;if(Array.isArray(e)){this.length=e.length;for(let l=0;l<this.length;l++)s=e[l],a=this._trackByFn(l,s),t===null||!Object.is(t.trackById,a)?(t=this._mismatch(t,s,a,l),i=!0):(i&&(t=this._verifyReinsertion(t,s,a,l)),Object.is(t.item,s)||this._addIdentityChange(t,s)),t=t._next}else r=0,mU(e,l=>{a=this._trackByFn(r,l),t===null||!Object.is(t.trackById,a)?(t=this._mismatch(t,l,a,r),i=!0):(i&&(t=this._verifyReinsertion(t,l,a,r)),Object.is(t.item,l)||this._addIdentityChange(t,l)),t=t._next,r++}),this.length=r;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,i,r){let s;return e===null?s=this._itTail:(s=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,s,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(i,r),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,s,r)):e=this._addAfter(new kv(t,i),s,r)),e}_verifyReinsertion(e,t,i,r){let s=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return s!==null?e=this._reinsertAfter(s,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let t=e._next;this._addToRemovals(this._unlink(e)),e=t}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,s=e._nextRemoved;return r===null?this._removalsHead=s:r._nextRemoved=s,s===null?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(e,t,i),this._addToMoves(e,i),e}_moveAfter(e,t,i){return this._unlink(e),this._insertAfter(e,t,i),this._addToMoves(e,i),e}_addAfter(e,t,i){return this._insertAfter(e,t,i),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,i){let r=t===null?this._itHead:t._next;return e._next=r,e._prev=t,r===null?this._itTail=e:r._prev=e,t===null?this._itHead=e:t._next=e,this._linkedRecords===null&&(this._linkedRecords=new Mf),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let t=e._prev,i=e._next;return t===null?this._itHead=i:t._next=i,i===null?this._itTail=t:i._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new Mf),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},kv=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(e,t){this.item=e,this.trackById=t}},Uv=class{_head=null;_tail=null;add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let i;for(i=this._head;i!==null;i=i._nextDup)if((t===null||t<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){let t=e._prevDup,i=e._nextDup;return t===null?this._head=i:t._nextDup=i,i===null?this._tail=t:i._prevDup=t,this._head===null}},Mf=class{map=new Map;put(e){let t=e.trackById,i=this.map.get(t);i||(i=new Uv,this.map.set(t,i)),i.add(e)}get(e,t){let i=e,r=this.map.get(i);return r?r.get(e,t):null}remove(e){let t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function pE(n,e,t){let i=n.previousIndex;if(i===null)return i;let r=0;return t&&i<t.length&&(r=t[i]),i+e+r}function mE(){return new wy([new Lv])}var wy=(()=>{class n{factories;static \u0275prov=et({token:n,providedIn:"root",factory:mE});constructor(t){this.factories=t}static create(t,i){if(i!=null){let r=i.factories.slice();t=t.concat(r)}return new n(t)}static extend(t){return{provide:n,useFactory:i=>n.create(t,i||mE()),deps:[[n,new HL,new VL]]}}find(t){let i=this.factories.find(r=>r.supports(t));if(i!=null)return i;throw new Ge(901,!1)}}return n})();function Pb(n){un(8);try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=WU(i),s=[Ib({}),{provide:gl,useExisting:kU},...t||[]],a=new yf({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1});return VU({r3Injector:a.injector,platformInjector:r,rootComponent:e})}catch(e){return Promise.reject(e)}finally{un(9)}}var gE=class{[va];constructor(e){this[va]=e}destroy(){this[va].destroy()}};var Zn=new Qe("");var Fb=null;function os(){return Fb}function by(n){Fb??=n}var Dl=class{},Ty=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:()=>be(kb),providedIn:"platform"})}return n})();var kb=(()=>{class n extends Ty{_location;_history;_doc=be(Zn);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return os().getBaseHref(this._doc)}onPopState(t){let i=os().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=os().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Ub(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function Ob(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function Gs(n){return n&&n[0]!=="?"?`?${n}`:n}var Hf=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:()=>be(Vb),providedIn:"root"})}return n})(),Bb=new Qe(""),Vb=(()=>{class n extends Hf{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??be(Zn).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Ub(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+Gs(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let a=this.prepareExternalUrl(r+Gs(s));this._platformLocation.pushState(t,i,a)}replaceState(t,i,r,s){let a=this.prepareExternalUrl(r+Gs(s));this._platformLocation.replaceState(t,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(vt(Ty),vt(Bb,8))};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),$a=(()=>{class n{_subject=new Bn;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=JU(Ob(Lb(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+Gs(i))}normalize(t){return n.stripTrailingSlash(ZU(this._basePath,Lb(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Gs(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Gs(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Gs;static joinWithSlash=Ub;static stripTrailingSlash=Ob;static \u0275fac=function(i){return new(i||n)(vt(Hf))};static \u0275prov=et({token:n,factory:()=>YU(),providedIn:"root"})}return n})();function YU(){return new $a(vt(Hf))}function ZU(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function Lb(n){return n.replace(/\/index.html$/,"")}function JU(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var zf=class{$implicit;ngForOf;index;count;constructor(e,t,i,r){this.$implicit=e,this.ngForOf=t,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Wf=(()=>{class n{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,i,r){this._viewContainer=t,this._template=i,this._differs=r}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let i=this._viewContainer;t.forEachOperation((r,s,a)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new zf(r.item,this._ngForOf,-1,-1),a===null?void 0:a);else if(a==null)i.remove(s===null?void 0:s);else if(s!==null){let l=i.get(s);i.move(l,a),Hb(l,r)}});for(let r=0,s=i.length;r<s;r++){let l=i.get(r).context;l.index=r,l.count=s,l.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let s=i.get(r.currentIndex);Hb(s,r)})}static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||n)(Io(Wa),Io(Lf),Io(wy))};static \u0275dir=bl({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return n})();function Hb(n,e){n.context.$implicit=e.item}var Cy=(()=>{class n{_viewContainer;_context=new Gf;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,i){this._viewContainer=t,this._thenTemplateRef=i}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){zb(t,!1),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){zb(t,!1),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||n)(Io(Wa),Io(Lf))};static \u0275dir=bl({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return n})(),Gf=class{$implicit=null;ngIf=null};function zb(n,e){if(n&&!n.createEmbeddedView)throw new Ge(2020,!1)}var jf=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Uf({type:n});static \u0275inj=Sf({})}return n})();function Dy(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Ay="browser",Gb="server";function $f(n){return n===Gb}var Al=class{};var Yf=new Qe(""),Py=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new Ge(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(vt(Yf),vt(Fn))};static \u0275prov=et({token:n,factory:n.\u0275fac})}return n})(),Il=class{_doc;constructor(e){this._doc=e}manager},qf="ng-app-id";function Wb(n){for(let e of n)e.remove()}function jb(n,e){let t=e.createElement("style");return t.textContent=n,t}function QU(n,e,t,i){let r=n.head?.querySelectorAll(`style[${qf}="${e}"],link[${qf}="${e}"]`);if(r)for(let s of r)s.removeAttribute(qf),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function Ry(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var Oy=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=$f(s),QU(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,jb);i?.forEach(r=>this.addUsage(r,this.external,Ry))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(Wb(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Wb(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,jb(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,Ry(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(qf,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(vt(Zn),vt(ny),vt(ry,8),vt(wl))};static \u0275prov=et({token:n,factory:n.\u0275fac})}return n})(),Iy={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ly=/%COMP%/g;var qb="%COMP%",eB=`_nghost-${qb}`,tB=`_ngcontent-${qb}`,nB=!0,iB=new Qe("",{providedIn:"root",factory:()=>nB});function rB(n){return tB.replace(Ly,n)}function sB(n){return eB.replace(Ly,n)}function Xb(n,e){return e.map(t=>t.replace(Ly,n))}var Fy=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,a,l,u,f=null,h=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=a,this.platformId=l,this.ngZone=u,this.nonce=f,this.tracingService=h,this.platformIsServer=$f(l),this.defaultRenderer=new Rl(t,a,u,this.platformIsServer,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===Ir.ShadowDom&&(i=on(Le({},i),{encapsulation:Ir.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof Xf?r.applyToHost(t):r instanceof Nl&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let a=this.doc,l=this.ngZone,u=this.eventManager,f=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,m=this.platformIsServer,g=this.tracingService;switch(i.encapsulation){case Ir.Emulated:s=new Xf(u,f,i,this.appId,h,a,l,m,g);break;case Ir.ShadowDom:return new Ny(u,f,t,i,a,l,this.nonce,m,g);default:s=new Nl(u,f,i,h,a,l,m,g);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(vt(Py),vt(Oy),vt(ny),vt(iB),vt(Zn),vt(wl),vt(Fn),vt(ry),vt(Nf,8))};static \u0275prov=et({token:n,factory:n.\u0275fac})}return n})(),Rl=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,s){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Iy[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){($b(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&($b(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ge(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Iy[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Iy[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Ao.DashCase|Ao.Important)?e.style.setProperty(t,i,r&Ao.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Ao.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=os().getGlobalEventTarget(this.doc,e),!e))throw new Ge(5102,!1);let s=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function $b(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Ny=class extends Rl{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,a,l,u,f){super(e,s,a,u,f),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let h=r.styles;h=Xb(r.id,h);for(let g of h){let v=document.createElement("style");l&&v.setAttribute("nonce",l),v.textContent=g,this.shadowRoot.appendChild(v)}let m=r.getExternalStyles?.();if(m)for(let g of m){let v=Ry(g,s);l&&v.setAttribute("nonce",l),this.shadowRoot.appendChild(v)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Nl=class extends Rl{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,a,l,u,f){super(e,s,a,l,u),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let h=i.styles;this.styles=f?Xb(f,h):h,this.styleUrls=i.getExternalStyles?.(f)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Xf=class extends Nl{contentAttr;hostAttr;constructor(e,t,i,r,s,a,l,u,f){let h=r+"-"+i.id;super(e,t,i,s,a,l,u,f,h),this.contentAttr=rB(h),this.hostAttr=sB(h)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var Zf=class n extends Dl{supportsDOMEvents=!0;static makeCurrent(){by(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=oB();return t==null?null:aB(t)}resetBaseElement(){Pl=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Dy(document.cookie,e)}},Pl=null;function oB(){return Pl=Pl||document.querySelector("base"),Pl?Pl.getAttribute("href"):null}function aB(n){return new URL(n,document.baseURI).pathname}var cB=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:n.\u0275fac})}return n})(),Zb=(()=>{class n extends Il{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)(vt(Zn))};static \u0275prov=et({token:n,factory:n.\u0275fac})}return n})(),Yb=["alt","control","meta","shift"],lB={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},uB={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Jb=(()=>{class n extends Il{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let a=n.parseEventName(i),l=n.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>os().onAndCancel(t,a.domEventName,l,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),a="",l=i.indexOf("code");if(l>-1&&(i.splice(l,1),a="code."),Yb.forEach(f=>{let h=i.indexOf(f);h>-1&&(i.splice(h,1),a+=f+".")}),a+=s,i.length!=0||s.length===0)return null;let u={};return u.domEventName=r,u.fullKey=a,u}static matchEventFullKeyCode(t,i){let r=lB[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Yb.forEach(a=>{if(a!==r){let l=uB[a];l(t)&&(s+=a+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(vt(Zn))};static \u0275prov=et({token:n,factory:n.\u0275fac})}return n})();function ky(n,e){return Pb(Le({rootComponent:n},dB(e)))}function dB(n){return{appProviders:[...gB,...n?.providers??[]],platformProviders:mB}}function fB(){Zf.makeCurrent()}function hB(){return new Vs}function pB(){return Ow(document),document}var mB=[{provide:wl,useValue:Ay},{provide:iy,useValue:fB,multi:!0},{provide:Zn,useFactory:pB}];var gB=[{provide:bf,useValue:"root"},{provide:Vs,useFactory:hB},{provide:Yf,useClass:Zb,multi:!0,deps:[Zn]},{provide:Yf,useClass:Jb,multi:!0,deps:[Zn]},Fy,Oy,Py,{provide:Ua,useExisting:Fy},{provide:Al,useClass:cB},[]];var Kb=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(vt(Zn))};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ut="primary",jl=Symbol("RouteTitle"),zy=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Ka(n){return new zy(n)}function yB(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let a=i[s],l=n[s];if(a[0]===":")r[a.substring(1)]=l;else if(a!==l.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function _B(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Rr(n[t],e[t]))return!1;return!0}function Rr(n,e){let t=n?Gy(n):void 0,i=e?Gy(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!oT(n[r],e[r]))return!1;return!0}function Gy(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function oT(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function aT(n){return n.length>0?n[n.length-1]:null}function $s(n){return Gg(n)?n:Tl(n)?En(Promise.resolve(n)):st(n)}var xB={exact:lT,subset:uT},cT={exact:MB,subset:SB,ignored:()=>!0};function Qb(n,e,t){return xB[t.paths](n.root,e.root,t.matrixParams)&&cT[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function MB(n,e){return Rr(n,e)}function lT(n,e,t){if(!Po(n.segments,e.segments)||!Qf(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!lT(n.children[i],e.children[i],t))return!1;return!0}function SB(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>oT(n[t],e[t]))}function uT(n,e,t){return dT(n,e,e.segments,t)}function dT(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Po(r,t)||e.hasChildren()||!Qf(r,t,i))}else if(n.segments.length===t.length){if(!Po(n.segments,t)||!Qf(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!uT(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Po(n.segments,r)||!Qf(n.segments,r,i)||!n.children[ut]?!1:dT(n.children[ut],e,s,i)}}function Qf(n,e,t){return e.every((i,r)=>cT[t](n[r].parameters,i.parameters))}var cs=class{root;queryParams;fragment;_queryParamMap;constructor(e=new jt([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Ka(this.queryParams),this._queryParamMap}toString(){return bB.serialize(this)}},jt=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return eh(this)}},No=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Ka(this.parameters),this._parameterMap}toString(){return hT(this)}};function EB(n,e){return Po(n,e)&&n.every((t,i)=>Rr(t.parameters,e[i].parameters))}function Po(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function wB(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===ut&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==ut&&(t=t.concat(e(r,i)))}),t}var hh=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:()=>new Qa,providedIn:"root"})}return n})(),Qa=class{parse(e){let t=new jy(e);return new cs(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Ol(e.root,!0)}`,i=DB(e.queryParams),r=typeof e.fragment=="string"?`#${TB(e.fragment)}`:"";return`${t}${i}${r}`}},bB=new Qa;function eh(n){return n.segments.map(e=>hT(e)).join("/")}function Ol(n,e){if(!n.hasChildren())return eh(n);if(e){let t=n.children[ut]?Ol(n.children[ut],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==ut&&i.push(`${r}:${Ol(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=wB(n,(i,r)=>r===ut?[Ol(n.children[ut],!1)]:[`${r}:${Ol(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[ut]!=null?`${eh(n)}/${t[0]}`:`${eh(n)}/(${t.join("//")})`}}function fT(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Jf(n){return fT(n).replace(/%3B/gi,";")}function TB(n){return encodeURI(n)}function Wy(n){return fT(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function th(n){return decodeURIComponent(n)}function eT(n){return th(n.replace(/\+/g,"%20"))}function hT(n){return`${Wy(n.path)}${CB(n.parameters)}`}function CB(n){return Object.entries(n).map(([e,t])=>`;${Wy(e)}=${Wy(t)}`).join("")}function DB(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${Jf(t)}=${Jf(r)}`).join("&"):`${Jf(t)}=${Jf(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var AB=/^[^\/()?;#]+/;function Uy(n){let e=n.match(AB);return e?e[0]:""}var IB=/^[^\/()?;=#]+/;function RB(n){let e=n.match(IB);return e?e[0]:""}var NB=/^[^=?&#]+/;function PB(n){let e=n.match(NB);return e?e[0]:""}var OB=/^[^&#]+/;function LB(n){let e=n.match(OB);return e?e[0]:""}var jy=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new jt([],{}):new jt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[ut]=new jt(e,t)),i}parseSegment(){let e=Uy(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Ge(4009,!1);return this.capture(e),new No(th(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=RB(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Uy(this.remaining);r&&(i=r,this.capture(i))}e[th(t)]=th(i)}parseQueryParam(e){let t=PB(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let a=LB(this.remaining);a&&(i=a,this.capture(i))}let r=eT(t),s=eT(i);if(e.hasOwnProperty(r)){let a=e[r];Array.isArray(a)||(a=[a],e[r]=a),a.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Uy(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Ge(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=ut);let a=this.parseChildren();t[s]=Object.keys(a).length===1?a[ut]:new jt([],a),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Ge(4011,!1)}};function pT(n){return n.segments.length>0?new jt([],{[ut]:n}):n}function mT(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=mT(r);if(i===ut&&s.segments.length===0&&s.hasChildren())for(let[a,l]of Object.entries(s.children))e[a]=l;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new jt(n.segments,e);return FB(t)}function FB(n){if(n.numberOfChildren===1&&n.children[ut]){let e=n.children[ut];return new jt(n.segments.concat(e.segments),e.children)}return n}function ec(n){return n instanceof cs}function kB(n,e,t=null,i=null){let r=gT(n);return vT(r,e,t,i)}function gT(n){let e;function t(s){let a={};for(let u of s.children){let f=t(u);a[u.outlet]=f}let l=new jt(s.url,a);return s===n&&(e=l),l}let i=t(n.root),r=pT(i);return e??r}function vT(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return By(r,r,r,t,i);let s=UB(e);if(s.toRoot())return By(r,r,new jt([],{}),t,i);let a=BB(s,r,n),l=a.processChildren?Fl(a.segmentGroup,a.index,s.commands):_T(a.segmentGroup,a.index,s.commands);return By(r,a.segmentGroup,l,t,i)}function ih(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Ul(n){return typeof n=="object"&&n!=null&&n.outlets}function By(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([u,f])=>{s[u]=Array.isArray(f)?f.map(h=>`${h}`):`${f}`});let a;n===e?a=t:a=yT(n,e,t);let l=pT(mT(a));return new cs(l,s,r)}function yT(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=yT(s,e,t)}),new jt(n.segments,i)}var rh=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&ih(i[0]))throw new Ge(4003,!1);let r=i.find(Ul);if(r&&r!==aT(i))throw new Ge(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function UB(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new rh(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,a)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let l={};return Object.entries(s.outlets).forEach(([u,f])=>{l[u]=typeof f=="string"?f.split("/"):f}),[...r,{outlets:l}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:a===0?(s.split("/").forEach((l,u)=>{u==0&&l==="."||(u==0&&l===""?t=!0:l===".."?e++:l!=""&&r.push(l))}),r):[...r,s]},[]);return new rh(t,e,i)}var Ya=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function BB(n,e,t){if(n.isAbsolute)return new Ya(e,!0,0);if(!t)return new Ya(e,!1,NaN);if(t.parent===null)return new Ya(t,!0,0);let i=ih(n.commands[0])?0:1,r=t.segments.length-1+i;return VB(t,r,n.numberOfDoubleDots)}function VB(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Ge(4005,!1);r=i.segments.length}return new Ya(i,!1,r-s)}function HB(n){return Ul(n[0])?n[0].outlets:{[ut]:n}}function _T(n,e,t){if(n??=new jt([],{}),n.segments.length===0&&n.hasChildren())return Fl(n,e,t);let i=zB(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new jt(n.segments.slice(0,i.pathIndex),{});return s.children[ut]=new jt(n.segments.slice(i.pathIndex),n.children),Fl(s,0,r)}else return i.match&&r.length===0?new jt(n.segments,{}):i.match&&!n.hasChildren()?$y(n,e,t):i.match?Fl(n,0,r):$y(n,e,t)}function Fl(n,e,t){if(t.length===0)return new jt(n.segments,{});{let i=HB(t),r={};if(Object.keys(i).some(s=>s!==ut)&&n.children[ut]&&n.numberOfChildren===1&&n.children[ut].segments.length===0){let s=Fl(n.children[ut],e,t);return new jt(n.segments,s.children)}return Object.entries(i).forEach(([s,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[s]=_T(n.children[s],e,a))}),Object.entries(n.children).forEach(([s,a])=>{i[s]===void 0&&(r[s]=a)}),new jt(n.segments,r)}}function zB(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let a=n.segments[r],l=t[i];if(Ul(l))break;let u=`${l}`,f=i<t.length-1?t[i+1]:null;if(r>0&&u===void 0)break;if(u&&f&&typeof f=="object"&&f.outlets===void 0){if(!nT(u,f,a))return s;i+=2}else{if(!nT(u,{},a))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function $y(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Ul(s)){let u=GB(s.outlets);return new jt(i,u)}if(r===0&&ih(t[0])){let u=n.segments[e];i.push(new No(u.path,tT(t[0]))),r++;continue}let a=Ul(s)?s.outlets[ut]:`${s}`,l=r<t.length-1?t[r+1]:null;a&&l&&ih(l)?(i.push(new No(a,tT(l))),r+=2):(i.push(new No(a,{})),r++)}return new jt(i,{})}function GB(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=$y(new jt([],{}),0,i))}),e}function tT(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function nT(n,e,t){return n==t.path&&Rr(e,t.parameters)}var nh="imperative",Wn=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(Wn||{}),Ji=class{id;url;constructor(e,t){this.id=e,this.url=t}},tc=class extends Ji{type=Wn.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ws=class extends Ji{urlAfterRedirects;type=Wn.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ri=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(Ri||{}),sh=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(sh||{}),as=class extends Ji{reason;code;type=Wn.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},js=class extends Ji{reason;code;type=Wn.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},Bl=class extends Ji{error;target;type=Wn.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},oh=class extends Ji{urlAfterRedirects;state;type=Wn.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},qy=class extends Ji{urlAfterRedirects;state;type=Wn.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xy=class extends Ji{urlAfterRedirects;state;shouldActivate;type=Wn.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Yy=class extends Ji{urlAfterRedirects;state;type=Wn.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Zy=class extends Ji{urlAfterRedirects;state;type=Wn.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Jy=class{route;type=Wn.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ky=class{route;type=Wn.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Qy=class{snapshot;type=Wn.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},e_=class{snapshot;type=Wn.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},t_=class{snapshot;type=Wn.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},n_=class{snapshot;type=Wn.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Vl=class{},nc=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function WB(n,e){return n.providers&&!n._injector&&(n._injector=kf(n.providers,e,`Route: ${n.path}`)),n._injector??e}function mr(n){return n.outlet||ut}function jB(n,e){let t=n.filter(i=>mr(i)===e);return t.push(...n.filter(i=>mr(i)!==e)),t}function $l(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var i_=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return $l(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new ql(this.rootInjector)}},ql=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new i_(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(vt(Yi))};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ah=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=r_(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=r_(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=s_(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return s_(e,this._root).map(t=>t.value)}};function r_(n,e){if(n===e.value)return e;for(let t of e.children){let i=r_(n,t);if(i)return i}return null}function s_(n,e){if(n===e.value)return[e];for(let t of e.children){let i=s_(n,t);if(i.length)return i.unshift(e),i}return[]}var Ii=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Xa(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var ch=class extends ah{snapshot;constructor(e,t){super(e),this.snapshot=t,p_(this,e)}toString(){return this.snapshot.toString()}};function xT(n){let e=$B(n),t=new Vn([new No("",{})]),i=new Vn({}),r=new Vn({}),s=new Vn({}),a=new Vn(""),l=new Oo(t,i,s,a,r,ut,n,e.root);return l.snapshot=e.root,new ch(new Ii(l,[]),e)}function $B(n){let e={},t={},i={},r="",s=new Za([],e,i,r,t,ut,n,null,{});return new uh("",new Ii(s,[]))}var Oo=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,a,l,u){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=a,this.component=l,this._futureSnapshot=u,this.title=this.dataSubject?.pipe(kt(f=>f[jl]))??st(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(kt(e=>Ka(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(kt(e=>Ka(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function lh(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:Le(Le({},e.params),n.params),data:Le(Le({},e.data),n.data),resolve:Le(Le(Le(Le({},n.data),e.data),r?.data),n._resolvedData)}:i={params:Le({},n.params),data:Le({},n.data),resolve:Le(Le({},n.data),n._resolvedData??{})},r&&ST(r)&&(i.resolve[jl]=r.title),i}var Za=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[jl]}constructor(e,t,i,r,s,a,l,u,f){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=a,this.component=l,this.routeConfig=u,this._resolve=f}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ka(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ka(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},uh=class extends ah{url;constructor(e,t){super(t),this.url=e,p_(this,t)}toString(){return MT(this._root)}};function p_(n,e){e.value._routerState=n,e.children.forEach(t=>p_(n,t))}function MT(n){let e=n.children.length>0?` { ${n.children.map(MT).join(", ")} } `:"";return`${n.value}${e}`}function Vy(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Rr(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Rr(e.params,t.params)||n.paramsSubject.next(t.params),_B(e.url,t.url)||n.urlSubject.next(t.url),Rr(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function o_(n,e){let t=Rr(n.params,e.params)&&EB(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||o_(n.parent,e.parent))}function ST(n){return typeof n.title=="string"||n.title===null}var qB=new Qe(""),ET=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ut;activateEvents=new gi;deactivateEvents=new gi;attachEvents=new gi;detachEvents=new gi;routerOutletData=Tw(void 0);parentContexts=be(ql);location=be(Wa);changeDetector=be(Ey);inputBinder=be(ph,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Ge(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Ge(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Ge(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new Ge(4013,!1);this._activatedRoute=t;let r=this.location,a=t.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,u=new a_(t,l,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:u,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=bl({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Wv]})}return n})(),a_=class{route;childContexts;parent;outletData;constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===Oo?this.route:e===ql?this.childContexts:e===qB?this.outletData:this.parent.get(e,t)}},ph=new Qe("");function XB(n,e,t){let i=Hl(n,e._root,t?t._root:void 0);return new ch(i,e)}function Hl(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=YB(n,e,t);return new Ii(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let a=s.route;return a.value._futureSnapshot=e.value,a.children=e.children.map(l=>Hl(n,l)),a}}let i=ZB(e.value),r=e.children.map(s=>Hl(n,s));return new Ii(i,r)}}function YB(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Hl(n,i,r);return Hl(n,i)})}function ZB(n){return new Oo(new Vn(n.url),new Vn(n.params),new Vn(n.queryParams),new Vn(n.fragment),new Vn(n.data),n.outlet,n.component,n)}var zl=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},wT="ngNavigationCancelingError";function dh(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=ec(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=bT(!1,Ri.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function bT(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[wT]=!0,t.cancellationCode=e,t}function JB(n){return TT(n)&&ec(n.url)}function TT(n){return!!n&&n[wT]}var KB=(n,e,t,i)=>kt(r=>(new c_(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),c_=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Vy(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Xa(t);e.children.forEach(s=>{let a=s.value.outlet;this.deactivateRoutes(s,r[a],i),delete r[a]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(e,t,a.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Xa(e);for(let a of Object.values(s))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),l=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:a,route:e,contexts:l})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Xa(e);for(let a of Object.values(s))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Xa(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new n_(s.value.snapshot))}),e.children.length&&this.forwardEvent(new e_(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(Vy(r),r===s)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,a.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let l=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(l.contexts),a.attachRef=l.componentRef,a.route=l.route.value,a.outlet&&a.outlet.attach(l.componentRef,l.route.value),Vy(l.route.value),this.activateChildRoutes(e,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(e,null,a.children)}else this.activateChildRoutes(e,null,i)}},fh=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Ja=class{component;route;constructor(e,t){this.component=e,this.route=t}};function QB(n,e,t){let i=n._root,r=e?e._root:null;return Ll(i,r,t,[i.value])}function e3(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function rc(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!EE(n)?n:e.get(n):i}function Ll(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Xa(e);return n.children.forEach(a=>{t3(a,s[a.value.outlet],t,i.concat([a.value]),r),delete s[a.value.outlet]}),Object.entries(s).forEach(([a,l])=>kl(l,t.getContext(a),r)),r}function t3(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,a=e?e.value:null,l=t?t.getContext(n.value.outlet):null;if(a&&s.routeConfig===a.routeConfig){let u=n3(a,s,s.routeConfig.runGuardsAndResolvers);u?r.canActivateChecks.push(new fh(i)):(s.data=a.data,s._resolvedData=a._resolvedData),s.component?Ll(n,e,l?l.children:null,i,r):Ll(n,e,t,i,r),u&&l&&l.outlet&&l.outlet.isActivated&&r.canDeactivateChecks.push(new Ja(l.outlet.component,a))}else a&&kl(e,l,r),r.canActivateChecks.push(new fh(i)),s.component?Ll(n,null,l?l.children:null,i,r):Ll(n,null,t,i,r);return r}function n3(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Po(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Po(n.url,e.url)||!Rr(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!o_(n,e)||!Rr(n.queryParams,e.queryParams);case"paramsChange":default:return!o_(n,e)}}function kl(n,e,t){let i=Xa(n),r=n.value;Object.entries(i).forEach(([s,a])=>{r.component?e?kl(a,e.children.getContext(s),t):kl(a,null,t):kl(a,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Ja(e.outlet.component,r)):t.canDeactivateChecks.push(new Ja(null,r)):t.canDeactivateChecks.push(new Ja(null,r))}function Xl(n){return typeof n=="function"}function i3(n){return typeof n=="boolean"}function r3(n){return n&&Xl(n.canLoad)}function s3(n){return n&&Xl(n.canActivate)}function o3(n){return n&&Xl(n.canActivateChild)}function a3(n){return n&&Xl(n.canDeactivate)}function c3(n){return n&&Xl(n.canMatch)}function CT(n){return n instanceof Qr||n?.name==="EmptyError"}var Kf=Symbol("INITIAL_VALUE");function ic(){return ur(n=>Gd(n.map(e=>e.pipe(es(1),$g(Kf)))).pipe(kt(e=>{for(let t of e)if(t!==!0){if(t===Kf)return Kf;if(t===!1||l3(t))return t}return!0}),lr(e=>e!==Kf),es(1)))}function l3(n){return ec(n)||n instanceof zl}function u3(n,e){return An(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:a}}=t;return a.length===0&&s.length===0?st(on(Le({},t),{guardsResult:!0})):d3(a,i,r,n).pipe(An(l=>l&&i3(l)?f3(i,s,n,e):st(l)),kt(l=>on(Le({},t),{guardsResult:l})))})}function d3(n,e,t,i){return En(n).pipe(An(r=>v3(r.component,r.route,t,e,i)),ts(r=>r!==!0,!0))}function f3(n,e,t,i){return En(e).pipe(Ca(r=>Ta(p3(r.route.parent,i),h3(r.route,i),g3(n,r.path,t),m3(n,r.route,t))),ts(r=>r!==!0,!0))}function h3(n,e){return n!==null&&e&&e(new t_(n)),st(!0)}function p3(n,e){return n!==null&&e&&e(new Qy(n)),st(!0)}function m3(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return st(!0);let r=i.map(s=>Wd(()=>{let a=$l(e)??t,l=rc(s,a),u=s3(l)?l.canActivate(e,n):hr(a,()=>l(e,n));return $s(u).pipe(ts())}));return st(r).pipe(ic())}function g3(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(a=>e3(a)).filter(a=>a!==null).map(a=>Wd(()=>{let l=a.guards.map(u=>{let f=$l(a.node)??t,h=rc(u,f),m=o3(h)?h.canActivateChild(i,n):hr(f,()=>h(i,n));return $s(m).pipe(ts())});return st(l).pipe(ic())}));return st(s).pipe(ic())}function v3(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return st(!0);let a=s.map(l=>{let u=$l(e)??r,f=rc(l,u),h=a3(f)?f.canDeactivate(n,e,t,i):hr(u,()=>f(n,e,t,i));return $s(h).pipe(ts())});return st(a).pipe(ic())}function y3(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return st(!0);let s=r.map(a=>{let l=rc(a,n),u=r3(l)?l.canLoad(e,t):hr(n,()=>l(e,t));return $s(u)});return st(s).pipe(ic(),DT(i))}function DT(n){return Bg(Hn(e=>{if(typeof e!="boolean")throw dh(n,e)}),kt(e=>e===!0))}function _3(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return st(!0);let s=r.map(a=>{let l=rc(a,n),u=c3(l)?l.canMatch(e,t):hr(n,()=>l(e,t));return $s(u)});return st(s).pipe(ic(),DT(i))}var Gl=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},Wl=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function qa(n){return ba(new Gl(n))}function x3(n){return ba(new Ge(4e3,!1))}function M3(n){return ba(bT(!1,Ri.GuardRejected))}var l_=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return st(i);if(r.numberOfChildren>1||!r.children[ut])return x3(`${e.redirectTo}`);r=r.children[ut]}}applyRedirectCommands(e,t,i,r,s){if(typeof t!="string"){let l=t,{queryParams:u,fragment:f,routeConfig:h,url:m,outlet:g,params:v,data:M,title:w}=r,_=hr(s,()=>l({params:v,data:M,queryParams:u,fragment:f,routeConfig:h,url:m,outlet:g,title:w}));if(_ instanceof cs)throw new Wl(_);t=_}let a=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new Wl(a);return a}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new cs(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let l=s.substring(1);i[r]=t[l]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),a={};return Object.entries(t.children).forEach(([l,u])=>{a[l]=this.createSegmentGroup(e,u,i,r)}),new jt(s,a)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Ge(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},u_={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function S3(n,e,t,i,r){let s=AT(n,e,t);return s.matched?(i=WB(e,i),_3(i,e,t,r).pipe(kt(a=>a===!0?s:Le({},u_)))):st(s)}function AT(n,e,t){if(e.path==="**")return E3(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?Le({},u_):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||yB)(t,n,e);if(!r)return Le({},u_);let s={};Object.entries(r.posParams??{}).forEach(([l,u])=>{s[l]=u.path});let a=r.consumed.length>0?Le(Le({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function E3(n){return{matched:!0,parameters:n.length>0?aT(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function iT(n,e,t,i){return t.length>0&&T3(n,t,i)?{segmentGroup:new jt(e,b3(i,new jt(t,n.children))),slicedSegments:[]}:t.length===0&&C3(n,t,i)?{segmentGroup:new jt(n.segments,w3(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new jt(n.segments,n.children),slicedSegments:t}}function w3(n,e,t,i){let r={};for(let s of t)if(mh(n,e,s)&&!i[mr(s)]){let a=new jt([],{});r[mr(s)]=a}return Le(Le({},i),r)}function b3(n,e){let t={};t[ut]=e;for(let i of n)if(i.path===""&&mr(i)!==ut){let r=new jt([],{});t[mr(i)]=r}return t}function T3(n,e,t){return t.some(i=>mh(n,e,i)&&mr(i)!==ut)}function C3(n,e,t){return t.some(i=>mh(n,e,i))}function mh(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function D3(n,e,t){return e.length===0&&!n.children[t]}var d_=class{};function A3(n,e,t,i,r,s,a="emptyOnly"){return new f_(n,e,t,i,r,a,s).recognize()}var I3=31,f_=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,a,l){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=a,this.urlSerializer=l,this.applyRedirects=new l_(this.urlSerializer,this.urlTree)}noMatchError(e){return new Ge(4002,`'${e.segmentGroup}'`)}recognize(){let e=iT(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(kt(({children:t,rootSnapshot:i})=>{let r=new Ii(i,t),s=new uh("",r),a=kB(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(a),{state:s,tree:a}}))}match(e){let t=new Za([],Object.freeze({}),Object.freeze(Le({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ut,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,ut,t).pipe(kt(i=>({children:i,rootSnapshot:t})),Ls(i=>{if(i instanceof Wl)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Gl?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe(kt(a=>a instanceof Ii?[a]:[]))}processChildren(e,t,i,r){let s=[];for(let a of Object.keys(i.children))a==="primary"?s.unshift(a):s.push(a);return En(s).pipe(Ca(a=>{let l=i.children[a],u=jB(t,a);return this.processSegmentGroup(e,u,l,a,r)}),jg((a,l)=>(a.push(...l),a)),Fs(null),Wg(),An(a=>{if(a===null)return qa(i);let l=IT(a);return R3(l),st(l)}))}processSegment(e,t,i,r,s,a,l){return En(t).pipe(Ca(u=>this.processSegmentAgainstRoute(u._injector??e,t,u,i,r,s,a,l).pipe(Ls(f=>{if(f instanceof Gl)return st(null);throw f}))),ts(u=>!!u),Ls(u=>{if(CT(u))return D3(i,r,s)?st(new d_):qa(i);throw u}))}processSegmentAgainstRoute(e,t,i,r,s,a,l,u){return mr(i)!==a&&(a===ut||!mh(r,s,i))?qa(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,a,u):this.allowRedirects&&l?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,a,u):qa(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,a,l){let{matched:u,parameters:f,consumedSegments:h,positionalParamSegments:m,remainingSegments:g}=AT(t,r,s);if(!u)return qa(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>I3&&(this.allowRedirects=!1));let v=new Za(s,f,Object.freeze(Le({},this.urlTree.queryParams)),this.urlTree.fragment,rT(r),mr(r),r.component??r._loadedComponent??null,r,sT(r)),M=lh(v,l,this.paramsInheritanceStrategy);v.params=Object.freeze(M.params),v.data=Object.freeze(M.data);let w=this.applyRedirects.applyRedirectCommands(h,r.redirectTo,m,v,e);return this.applyRedirects.lineralizeSegments(r,w).pipe(An(_=>this.processSegment(e,i,t,_.concat(g),a,!1,l)))}matchSegmentAgainstRoute(e,t,i,r,s,a){let l=S3(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),l.pipe(ur(u=>u.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(ur(({routes:f})=>{let h=i._loadedInjector??e,{parameters:m,consumedSegments:g,remainingSegments:v}=u,M=new Za(g,m,Object.freeze(Le({},this.urlTree.queryParams)),this.urlTree.fragment,rT(i),mr(i),i.component??i._loadedComponent??null,i,sT(i)),w=lh(M,a,this.paramsInheritanceStrategy);M.params=Object.freeze(w.params),M.data=Object.freeze(w.data);let{segmentGroup:_,slicedSegments:y}=iT(t,g,v,f);if(y.length===0&&_.hasChildren())return this.processChildren(h,f,_,M).pipe(kt(N=>new Ii(M,N)));if(f.length===0&&y.length===0)return st(new Ii(M,[]));let P=mr(i)===s;return this.processSegment(h,f,_,y,P?ut:s,!0,M).pipe(kt(N=>new Ii(M,N instanceof Ii?[N]:[])))}))):qa(t)))}getChildConfig(e,t,i){return t.children?st({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?st({routes:t._loadedRoutes,injector:t._loadedInjector}):y3(e,t,i,this.urlSerializer).pipe(An(r=>r?this.configLoader.loadChildren(e,t).pipe(Hn(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):M3(t))):st({routes:[],injector:e})}};function R3(n){n.sort((e,t)=>e.value.outlet===ut?-1:t.value.outlet===ut?1:e.value.outlet.localeCompare(t.value.outlet))}function N3(n){let e=n.value.routeConfig;return e&&e.path===""}function IT(n){let e=[],t=new Set;for(let i of n){if(!N3(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=IT(i.children);e.push(new Ii(i.value,r))}return e.filter(i=>!t.has(i))}function rT(n){return n.data||{}}function sT(n){return n.resolve||{}}function P3(n,e,t,i,r,s){return An(a=>A3(n,e,t,i,a.extractedUrl,r,s).pipe(kt(({state:l,tree:u})=>on(Le({},a),{targetSnapshot:l,urlAfterRedirects:u}))))}function O3(n,e){return An(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return st(t);let s=new Set(r.map(u=>u.route)),a=new Set;for(let u of s)if(!a.has(u))for(let f of RT(u))a.add(f);let l=0;return En(a).pipe(Ca(u=>s.has(u)?L3(u,i,n,e):(u.data=lh(u,u.parent,n).resolve,st(void 0))),Hn(()=>l++),Da(1),An(u=>l===a.size?st(t):pi))})}function RT(n){let e=n.children.map(t=>RT(t)).flat();return[n,...e]}function L3(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!ST(r)&&(s[jl]=r.title),F3(s,n,e,i).pipe(kt(a=>(n._resolvedData=a,n.data=lh(n,n.parent,t).resolve,null)))}function F3(n,e,t,i){let r=Gy(n);if(r.length===0)return st({});let s={};return En(r).pipe(An(a=>k3(n[a],e,t,i).pipe(ts(),Hn(l=>{if(l instanceof zl)throw dh(new Qa,l);s[a]=l}))),Da(1),kt(()=>s),Ls(a=>CT(a)?pi:ba(a)))}function k3(n,e,t,i){let r=$l(e)??i,s=rc(n,r),a=s.resolve?s.resolve(e,t):hr(r,()=>s(e,t));return $s(a)}function Hy(n){return ur(e=>{let t=n(e);return t?En(t).pipe(kt(()=>e)):st(e)})}var NT=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===ut);return i}getResolvedTitleForRoute(t){return t.data[jl]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:()=>be(U3),providedIn:"root"})}return n})(),U3=(()=>{class n extends NT{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(vt(Kb))};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),gh=new Qe("",{providedIn:"root",factory:()=>({})}),PT=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Yn({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&ai(0,"router-outlet")},dependencies:[ET],encapsulation:2})}return n})();function m_(n){let e=n.children&&n.children.map(m_),t=e?on(Le({},n),{children:e}):Le({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==ut&&(t.component=PT),t}var vh=new Qe(""),OT=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=be(Ab);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return st(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=$s(t.loadComponent()).pipe(kt(LT),Hn(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),sl(()=>{this.componentLoaders.delete(t)})),r=new wa(i,()=>new Bn).pipe(Ea());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return st({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=B3(i,this.compiler,t,this.onLoadEndListener).pipe(sl(()=>{this.childrenLoaders.delete(i)})),a=new wa(s,()=>new Bn).pipe(Ea());return this.childrenLoaders.set(i,a),a}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function B3(n,e,t,i){return $s(n.loadChildren()).pipe(kt(LT),An(r=>r instanceof yy||Array.isArray(r)?st(r):En(e.compileModuleAsync(r))),kt(r=>{i&&i(n);let s,a,l=!1;return Array.isArray(r)?(a=r,l=!0):(s=r.create(t).injector,a=s.get(vh,[],{optional:!0,self:!0}).flat()),{routes:a.map(m_),injector:s}}))}function V3(n){return n&&typeof n=="object"&&"default"in n}function LT(n){return V3(n)?n.default:n}var g_=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:()=>be(H3),providedIn:"root"})}return n})(),H3=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),FT=new Qe("");var kT=new Qe(""),UT=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Bn;transitionAbortSubject=new Bn;configLoader=be(OT);environmentInjector=be(Yi);destroyRef=be(If);urlSerializer=be(hh);rootContexts=be(ql);location=be($a);inputBindingEnabled=be(ph,{optional:!0})!==null;titleStrategy=be(NT);options=be(gh,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=be(g_);createViewTransition=be(FT,{optional:!0});navigationErrorHandler=be(kT,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>st(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new Jy(r)),i=r=>this.events.next(new Ky(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(on(Le({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i}))}setupNavigations(t){return this.transitions=new Vn(null),this.transitions.pipe(lr(i=>i!==null),ur(i=>{let r=!1,s=!1;return st(i).pipe(ur(a=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Ri.SupersededByNewNavigation),pi;this.currentTransition=i,this.currentNavigation={id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?on(Le({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let l=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=a.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!l&&u!=="reload"){let f="";return this.events.next(new js(a.id,this.urlSerializer.serialize(a.rawUrl),f,sh.IgnoredSameUrlNavigation)),a.resolve(!1),pi}if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return st(a).pipe(ur(f=>(this.events.next(new tc(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?pi:Promise.resolve(f))),P3(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Hn(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation=on(Le({},this.currentNavigation),{finalUrl:f.urlAfterRedirects});let h=new oh(f.id,this.urlSerializer.serialize(f.extractedUrl),this.urlSerializer.serialize(f.urlAfterRedirects),f.targetSnapshot);this.events.next(h)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:f,extractedUrl:h,source:m,restoredState:g,extras:v}=a,M=new tc(f,this.urlSerializer.serialize(h),m,g);this.events.next(M);let w=xT(this.rootComponentType).snapshot;return this.currentTransition=i=on(Le({},a),{targetSnapshot:w,urlAfterRedirects:h,extras:on(Le({},v),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=h,st(i)}else{let f="";return this.events.next(new js(a.id,this.urlSerializer.serialize(a.extractedUrl),f,sh.IgnoredByUrlHandlingStrategy)),a.resolve(!1),pi}}),Hn(a=>{let l=new qy(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(l)}),kt(a=>(this.currentTransition=i=on(Le({},a),{guards:QB(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),i)),u3(this.environmentInjector,a=>this.events.next(a)),Hn(a=>{if(i.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw dh(this.urlSerializer,a.guardsResult);let l=new Xy(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.events.next(l)}),lr(a=>a.guardsResult?!0:(this.cancelNavigationTransition(a,"",Ri.GuardRejected),!1)),Hy(a=>{if(a.guards.canActivateChecks.length!==0)return st(a).pipe(Hn(l=>{let u=new Yy(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),ur(l=>{let u=!1;return st(l).pipe(O3(this.paramsInheritanceStrategy,this.environmentInjector),Hn({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(l,"",Ri.NoDataFromResolver)}}))}),Hn(l=>{let u=new Zy(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}))}),Hy(a=>{let l=u=>{let f=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&f.push(this.configLoader.loadComponent(u.routeConfig).pipe(Hn(h=>{u.component=h}),kt(()=>{})));for(let h of u.children)f.push(...l(h));return f};return Gd(l(a.targetSnapshot.root)).pipe(Fs(null),es(1))}),Hy(()=>this.afterPreactivation()),ur(()=>{let{currentSnapshot:a,targetSnapshot:l}=i,u=this.createViewTransition?.(this.environmentInjector,a.root,l.root);return u?En(u).pipe(kt(()=>i)):st(i)}),kt(a=>{let l=XB(t.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return this.currentTransition=i=on(Le({},a),{targetRouterState:l}),this.currentNavigation.targetRouterState=l,i}),Hn(()=>{this.events.next(new Vl)}),KB(this.rootContexts,t.routeReuseStrategy,a=>this.events.next(a),this.inputBindingEnabled),es(1),Hn({next:a=>{r=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Ws(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0)},complete:()=>{r=!0}}),qg(this.transitionAbortSubject.pipe(Hn(a=>{throw a}))),sl(()=>{!r&&!s&&this.cancelNavigationTransition(i,"",Ri.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation=null,this.currentTransition=null)}),Ls(a=>{if(this.destroyed)return i.resolve(!1),pi;if(s=!0,TT(a))this.events.next(new as(i.id,this.urlSerializer.serialize(i.extractedUrl),a.message,a.cancellationCode)),JB(a)?this.events.next(new nc(a.url,a.navigationBehaviorOptions)):i.resolve(!1);else{let l=new Bl(i.id,this.urlSerializer.serialize(i.extractedUrl),a,i.targetSnapshot??void 0);try{let u=hr(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(u instanceof zl){let{message:f,cancellationCode:h}=dh(this.urlSerializer,u);this.events.next(new as(i.id,this.urlSerializer.serialize(i.extractedUrl),f,h)),this.events.next(new nc(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(l),a}catch(u){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(u)}}return pi}))}))}cancelNavigationTransition(t,i,r){let s=new as(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function z3(n){return n!==nh}var G3=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:()=>be(W3),providedIn:"root"})}return n})(),h_=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},W3=(()=>{class n extends h_{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Kv(n)))(r||n)}})();static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),BT=(()=>{class n{urlSerializer=be(hh);options=be(gh,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=be($a);urlHandlingStrategy=be(g_);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new cs;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let s=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,a=r??s;return a instanceof cs?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=xT(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:()=>be(j3),providedIn:"root"})}return n})(),j3=(()=>{class n extends BT{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate")})})}handleRouterEvent(t,i){t instanceof tc?this.updateStateMemento():t instanceof js?this.commitTransition(i):t instanceof oh?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof Vl?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof as&&(t.code===Ri.GuardRejected||t.code===Ri.NoDataFromResolver)?this.restoreHistory(i):t instanceof Bl?this.restoreHistory(i,!0):t instanceof Ws&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:i,id:r}){let{replaceUrl:s,state:a}=i;if(this.location.isCurrentPathEqualTo(t)||s){let l=this.browserPageId,u=Le(Le({},a),this.generateNgRouterState(r,l));this.location.replaceState(t,"",u)}else{let l=Le(Le({},a),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",l)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===t.finalUrl&&s===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Kv(n)))(r||n)}})();static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function VT(n,e){n.events.pipe(lr(t=>t instanceof Ws||t instanceof as||t instanceof Bl||t instanceof js),kt(t=>t instanceof Ws||t instanceof js?0:(t instanceof as?t.code===Ri.Redirect||t.code===Ri.SupersededByNewNavigation:!1)?2:1),lr(t=>t!==2),es(1)).subscribe(()=>{e()})}var $3={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},q3={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},v_=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=be(wb);stateManager=be(BT);options=be(gh,{optional:!0})||{};pendingTasks=be(za);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=be(UT);urlSerializer=be(hh);location=be($a);urlHandlingStrategy=be(g_);_events=new Bn;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=be(G3);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=be(vh,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!be(ph,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Sn;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof as&&i.code!==Ri.Redirect&&i.code!==Ri.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Ws)this.navigated=!0;else if(i instanceof nc){let a=i.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),u=Le({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||z3(r.source)},a);this.scheduleNavigation(l,nh,null,u,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Y3(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),nh,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r)=>{this.navigateToSyncWithBrowser(t,r,i)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},a=r?.navigationId?r:null;if(r){let u=Le({},r);delete u.navigationId,delete u.\u0275routerPageId,Object.keys(u).length!==0&&(s.state=u)}let l=this.parseUrl(t);this.scheduleNavigation(l,i,a,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(m_),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:a,queryParamsHandling:l,preserveFragment:u}=i,f=u?this.currentUrlTree.fragment:a,h=null;switch(l??this.options.defaultQueryParamsHandling){case"merge":h=Le(Le({},this.currentUrlTree.queryParams),s);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=s||null}h!==null&&(h=this.removeEmptyProps(h));let m;try{let g=r?r.snapshot:this.routerState.snapshot.root;m=gT(g)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),m=this.currentUrlTree.root}return vT(m,t,h,f??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=ec(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,nh,null,i)}navigate(t,i={skipLocationChange:!1}){return X3(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=Le({},$3):i===!1?r=Le({},q3):r=i,ec(t))return Qb(this.currentUrlTree,t,r);let s=this.parseUrl(t);return Qb(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,a){if(this.disposed)return Promise.resolve(!1);let l,u,f;a?(l=a.resolve,u=a.reject,f=a.promise):f=new Promise((m,g)=>{l=m,u=g});let h=this.pendingTasks.add();return VT(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:l,reject:u,promise:f,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),f.catch(m=>Promise.reject(m))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function X3(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Ge(4008,!1)}function Y3(n){return!(n instanceof Vl)&&!(n instanceof nc)}var Z3=new Qe("");function y_(n,...e){return Hv([{provide:vh,multi:!0,useValue:n},[],{provide:Oo,useFactory:J3,deps:[v_]},{provide:_y,multi:!0,useFactory:K3},e.map(t=>t.\u0275providers)])}function J3(n){return n.routerState.root}function K3(){let n=be(Bs);return e=>{let t=n.get(Co);if(e!==t.components[0])return;let i=n.get(v_),r=n.get(Q3);n.get(eV)===1&&i.initialNavigation(),n.get(tV,null,gt.Optional)?.setUpPreloading(),n.get(Z3,null,gt.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Q3=new Qe("",{factory:()=>new Bn}),eV=new Qe("",{providedIn:"root",factory:()=>1});var tV=new Qe("");var HT=[];var zT={providers:[Rb({eventCoalescing:!0}),y_(HT)]};var lp="175";var lC=0,X_=1,uC=2;var Y_=1,dC=2,Lr=3,ms=0,li=1,Fr=2,ys=0,Ho=1,xu=2,Z_=3,J_=4,fC=5,to=100,hC=101,pC=102,mC=103,gC=104,vC=200,yC=201,_C=202,xC=203,Bh=204,Vh=205,MC=206,SC=207,EC=208,wC=209,bC=210,TC=211,CC=212,DC=213,AC=214,up=0,dp=1,fp=2,zo=3,hp=4,pp=5,mp=6,gp=7,K_=0,IC=1,RC=2,_s=0,NC=1,PC=2,OC=3,LC=4,FC=5,kC=6,UC=7;var B_=300,qo=301,Xo=302,vp=303,yp=304,Mu=306,Hh=1e3,eo=1001,zh=1002,er=1003,BC=1004;var Su=1005;var _r=1006,_p=1007;var oo=1008;var kr=1009,Q_=1010,e0=1011,Tc=1012,xp=1013,ao=1014,Ur=1015,Cc=1016,Mp=1017,Sp=1018,Dc=1020,t0=35902,n0=1021,i0=1022,nr=1023,r0=1024,s0=1025,_c=1026,Ac=1027,o0=1028,Ep=1029,a0=1030,wp=1031;var bp=1033,Eu=33776,wu=33777,bu=33778,Tu=33779,Tp=35840,Cp=35841,Dp=35842,Ap=35843,Ip=36196,Rp=37492,Np=37496,Pp=37808,Op=37809,Lp=37810,Fp=37811,kp=37812,Up=37813,Bp=37814,Vp=37815,Hp=37816,zp=37817,Gp=37818,Wp=37819,jp=37820,$p=37821,Cu=36492,qp=36494,Xp=36495,c0=36283,Yp=36284,Zp=36285,Jp=36286;var tu=2300,Gh=2301,Uh=2302,V_=2400,H_=2401,z_=2402;var VC=3200,HC=3201;var zC=0,GC=1,xs="",Oi="srgb",Go="srgb-linear",nu="linear",qt="srgb";var Bo=7680;var G_=519,WC=512,jC=513,$C=514,l0=515,qC=516,XC=517,YC=518,ZC=519,W_=35044;var u0="300 es",Pr=2e3,iu=2001;var gs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],GT=1234567,Ql=Math.PI/180,xc=180/Math.PI;function Ic(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jn[n&255]+Jn[n>>8&255]+Jn[n>>16&255]+Jn[n>>24&255]+"-"+Jn[e&255]+Jn[e>>8&255]+"-"+Jn[e>>16&15|64]+Jn[e>>24&255]+"-"+Jn[t&63|128]+Jn[t>>8&255]+"-"+Jn[t>>16&255]+Jn[t>>24&255]+Jn[i&255]+Jn[i>>8&255]+Jn[i>>16&255]+Jn[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function d0(n,e){return(n%e+e)%e}function iV(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function rV(n,e,t){return n!==e?(t-n)/(e-n):0}function eu(n,e,t){return(1-t)*n+t*e}function sV(n,e,t,i){return eu(n,e,1-Math.exp(-t*i))}function oV(n,e=1){return e-Math.abs(d0(n,e*2)-e)}function aV(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function cV(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function lV(n,e){return n+Math.floor(Math.random()*(e-n+1))}function uV(n,e){return n+Math.random()*(e-n)}function dV(n){return n*(.5-Math.random())}function fV(n){n!==void 0&&(GT=n);let e=GT+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hV(n){return n*Ql}function pV(n){return n*xc}function mV(n){return(n&n-1)===0&&n!==0}function gV(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function vV(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yV(n,e,t,i,r){let s=Math.cos,a=Math.sin,l=s(t/2),u=a(t/2),f=s((e+i)/2),h=a((e+i)/2),m=s((e-i)/2),g=a((e-i)/2),v=s((i-e)/2),M=a((i-e)/2);switch(r){case"XYX":n.set(l*h,u*m,u*g,l*f);break;case"YZY":n.set(u*g,l*h,u*m,l*f);break;case"ZXZ":n.set(u*m,u*g,l*h,l*f);break;case"XZX":n.set(l*h,u*M,u*v,l*f);break;case"YXY":n.set(u*v,l*h,u*M,l*f);break;case"ZYZ":n.set(u*M,u*v,l*h,l*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vc(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ci(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var f0={DEG2RAD:Ql,RAD2DEG:xc,generateUUID:Ic,clamp:Ct,euclideanModulo:d0,mapLinear:iV,inverseLerp:rV,lerp:eu,damp:sV,pingpong:oV,smoothstep:aV,smootherstep:cV,randInt:lV,randFloat:uV,randFloatSpread:dV,seededRandom:fV,degToRad:hV,radToDeg:pV,isPowerOfTwo:mV,ceilPowerOfTwo:gV,floorPowerOfTwo:vV,setQuaternionFromProperEuler:yV,normalize:ci,denormalize:vc},Zt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ct=class n{constructor(e,t,i,r,s,a,l,u,f){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,l,u,f)}set(e,t,i,r,s,a,l,u,f){let h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=t,h[4]=s,h[5]=u,h[6]=i,h[7]=a,h[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],l=i[3],u=i[6],f=i[1],h=i[4],m=i[7],g=i[2],v=i[5],M=i[8],w=r[0],_=r[3],y=r[6],P=r[1],N=r[4],I=r[7],G=r[2],V=r[5],F=r[8];return s[0]=a*w+l*P+u*G,s[3]=a*_+l*N+u*V,s[6]=a*y+l*I+u*F,s[1]=f*w+h*P+m*G,s[4]=f*_+h*N+m*V,s[7]=f*y+h*I+m*F,s[2]=g*w+v*P+M*G,s[5]=g*_+v*N+M*V,s[8]=g*y+v*I+M*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],f=e[7],h=e[8];return t*a*h-t*l*f-i*s*h+i*l*u+r*s*f-r*a*u}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],f=e[7],h=e[8],m=h*a-l*f,g=l*u-h*s,v=f*s-a*u,M=t*m+i*g+r*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/M;return e[0]=m*w,e[1]=(r*f-h*i)*w,e[2]=(l*i-r*a)*w,e[3]=g*w,e[4]=(h*t-r*u)*w,e[5]=(r*s-l*t)*w,e[6]=v*w,e[7]=(i*u-f*t)*w,e[8]=(a*t-i*s)*w,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,l){let u=Math.cos(s),f=Math.sin(s);return this.set(i*u,i*f,-i*(u*a+f*l)+a+e,-r*f,r*u,-r*(-f*a+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(__.makeScale(e,t)),this}rotate(e){return this.premultiply(__.makeRotation(-e)),this}translate(e,t){return this.premultiply(__.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},__=new ct;function h0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Mc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function JC(){let n=Mc("canvas");return n.style.display="block",n}var WT={};function Du(n){n in WT||(WT[n]=!0,console.warn(n))}function KC(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function QC(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function eD(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var jT=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$T=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _V(){let n={enabled:!0,workingColorSpace:Go,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===qt&&(r.r=ps(r.r),r.g=ps(r.g),r.b=ps(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===qt&&(r.r=yc(r.r),r.g=yc(r.g),r.b=yc(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xs?nu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Go]:{primaries:e,whitePoint:i,transfer:nu,toXYZ:jT,fromXYZ:$T,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Oi},outputColorSpaceConfig:{drawingBufferColorSpace:Oi}},[Oi]:{primaries:e,whitePoint:i,transfer:qt,toXYZ:jT,fromXYZ:$T,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Oi}}}),n}var Ut=_V();function ps(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var sc,Wh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{sc===void 0&&(sc=Mc("canvas")),sc.width=e.width,sc.height=e.height;let r=sc.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=sc}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Mc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ps(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ps(t[i]/255)*255):t[i]=ps(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},xV=0,Sc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xV++}),this.uuid=Ic(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(x_(r[a].image)):s.push(x_(r[a]))}else s=x_(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function x_(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var MV=0,Ms=(()=>{class n extends gs{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=eo,s=eo,a=_r,l=oo,u=nr,f=kr,h=n.DEFAULT_ANISOTROPY,m=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MV++}),this.uuid=Ic(),this.name="",this.source=new Sc(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=a,this.minFilter=l,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==B_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hh:t.x=t.x-Math.floor(t.x);break;case eo:t.x=t.x<0?0:1;break;case zh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hh:t.y=t.y-Math.floor(t.y);break;case eo:t.y=t.y<0?0:1;break;case zh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=B_,n.DEFAULT_ANISOTROPY=1,n})(),vn=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,u=e.elements,f=u[0],h=u[4],m=u[8],g=u[1],v=u[5],M=u[9],w=u[2],_=u[6],y=u[10];if(Math.abs(h-g)<.01&&Math.abs(m-w)<.01&&Math.abs(M-_)<.01){if(Math.abs(h+g)<.1&&Math.abs(m+w)<.1&&Math.abs(M+_)<.1&&Math.abs(f+v+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let N=(f+1)/2,I=(v+1)/2,G=(y+1)/2,V=(h+g)/4,F=(m+w)/4,j=(M+_)/4;return N>I&&N>G?N<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(N),r=V/i,s=F/i):I>G?I<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(I),i=V/r,s=j/r):G<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(G),i=F/s,r=j/s),this.set(i,r,s,t),this}let P=Math.sqrt((_-M)*(_-M)+(m-w)*(m-w)+(g-h)*(g-h));return Math.abs(P)<.001&&(P=1),this.x=(_-M)/P,this.y=(m-w)/P,this.z=(g-h)/P,this.w=Math.acos((f+v+y-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jh=class extends gs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vn(0,0,e,t),this.scissorTest=!1,this.viewport=new vn(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_r,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Ms(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Sc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Or=class extends jh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ru=class extends Ms{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=er,this.minFilter=er,this.wrapR=eo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $h=class extends Ms{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=er,this.minFilter=er,this.wrapR=eo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vs=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,l){let u=i[r+0],f=i[r+1],h=i[r+2],m=i[r+3],g=s[a+0],v=s[a+1],M=s[a+2],w=s[a+3];if(l===0){e[t+0]=u,e[t+1]=f,e[t+2]=h,e[t+3]=m;return}if(l===1){e[t+0]=g,e[t+1]=v,e[t+2]=M,e[t+3]=w;return}if(m!==w||u!==g||f!==v||h!==M){let _=1-l,y=u*g+f*v+h*M+m*w,P=y>=0?1:-1,N=1-y*y;if(N>Number.EPSILON){let G=Math.sqrt(N),V=Math.atan2(G,y*P);_=Math.sin(_*V)/G,l=Math.sin(l*V)/G}let I=l*P;if(u=u*_+g*I,f=f*_+v*I,h=h*_+M*I,m=m*_+w*I,_===1-l){let G=1/Math.sqrt(u*u+f*f+h*h+m*m);u*=G,f*=G,h*=G,m*=G}}e[t]=u,e[t+1]=f,e[t+2]=h,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,r,s,a){let l=i[r],u=i[r+1],f=i[r+2],h=i[r+3],m=s[a],g=s[a+1],v=s[a+2],M=s[a+3];return e[t]=l*M+h*m+u*v-f*g,e[t+1]=u*M+h*g+f*m-l*v,e[t+2]=f*M+h*v+l*g-u*m,e[t+3]=h*M-l*m-u*g-f*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,u=Math.sin,f=l(i/2),h=l(r/2),m=l(s/2),g=u(i/2),v=u(r/2),M=u(s/2);switch(a){case"XYZ":this._x=g*h*m+f*v*M,this._y=f*v*m-g*h*M,this._z=f*h*M+g*v*m,this._w=f*h*m-g*v*M;break;case"YXZ":this._x=g*h*m+f*v*M,this._y=f*v*m-g*h*M,this._z=f*h*M-g*v*m,this._w=f*h*m+g*v*M;break;case"ZXY":this._x=g*h*m-f*v*M,this._y=f*v*m+g*h*M,this._z=f*h*M+g*v*m,this._w=f*h*m-g*v*M;break;case"ZYX":this._x=g*h*m-f*v*M,this._y=f*v*m+g*h*M,this._z=f*h*M-g*v*m,this._w=f*h*m+g*v*M;break;case"YZX":this._x=g*h*m+f*v*M,this._y=f*v*m+g*h*M,this._z=f*h*M-g*v*m,this._w=f*h*m-g*v*M;break;case"XZY":this._x=g*h*m-f*v*M,this._y=f*v*m-g*h*M,this._z=f*h*M+g*v*m,this._w=f*h*m+g*v*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],l=t[5],u=t[9],f=t[2],h=t[6],m=t[10],g=i+l+m;if(g>0){let v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(h-u)*v,this._y=(s-f)*v,this._z=(a-r)*v}else if(i>l&&i>m){let v=2*Math.sqrt(1+i-l-m);this._w=(h-u)/v,this._x=.25*v,this._y=(r+a)/v,this._z=(s+f)/v}else if(l>m){let v=2*Math.sqrt(1+l-i-m);this._w=(s-f)/v,this._x=(r+a)/v,this._y=.25*v,this._z=(u+h)/v}else{let v=2*Math.sqrt(1+m-i-l);this._w=(a-r)/v,this._x=(s+f)/v,this._y=(u+h)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,l=t._x,u=t._y,f=t._z,h=t._w;return this._x=i*h+a*l+r*f-s*u,this._y=r*h+a*u+s*l-i*f,this._z=s*h+a*f+i*u-r*l,this._w=a*h-i*l-r*u-s*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,l=a*e._w+i*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let u=1-l*l;if(u<=Number.EPSILON){let v=1-t;return this._w=v*a+t*this._w,this._x=v*i+t*this._x,this._y=v*r+t*this._y,this._z=v*s+t*this._z,this.normalize(),this}let f=Math.sqrt(u),h=Math.atan2(f,l),m=Math.sin((1-t)*h)/f,g=Math.sin(t*h)/f;return this._w=a*m+this._w*g,this._x=i*m+this._x*g,this._y=r*m+this._y*g,this._z=s*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qT.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qT.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,u=e.w,f=2*(a*r-l*i),h=2*(l*t-s*r),m=2*(s*i-a*t);return this.x=t+u*f+a*m-l*h,this.y=i+u*h+l*f-s*m,this.z=r+u*m+s*h-a*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,l=t.y,u=t.z;return this.x=r*u-s*l,this.y=s*a-i*u,this.z=i*l-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return M_.copy(this).projectOnVector(e),this.sub(M_)}reflect(e){return this.sub(M_.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},M_=new Z,qT=new vs,no=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=gr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,gr):gr.fromBufferAttribute(s,a),gr.applyMatrix4(e.matrixWorld),this.expandByPoint(gr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yh.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yh.copy(i.boundingBox)),yh.applyMatrix4(e.matrixWorld),this.union(yh)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gr),gr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yl),_h.subVectors(this.max,Yl),oc.subVectors(e.a,Yl),ac.subVectors(e.b,Yl),cc.subVectors(e.c,Yl),qs.subVectors(ac,oc),Xs.subVectors(cc,ac),Lo.subVectors(oc,cc);let t=[0,-qs.z,qs.y,0,-Xs.z,Xs.y,0,-Lo.z,Lo.y,qs.z,0,-qs.x,Xs.z,0,-Xs.x,Lo.z,0,-Lo.x,-qs.y,qs.x,0,-Xs.y,Xs.x,0,-Lo.y,Lo.x,0];return!S_(t,oc,ac,cc,_h)||(t=[1,0,0,0,1,0,0,0,1],!S_(t,oc,ac,cc,_h))?!1:(xh.crossVectors(qs,Xs),t=[xh.x,xh.y,xh.z],S_(t,oc,ac,cc,_h))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ls),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ls=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],gr=new Z,yh=new no,oc=new Z,ac=new Z,cc=new Z,qs=new Z,Xs=new Z,Lo=new Z,Yl=new Z,_h=new Z,xh=new Z,Fo=new Z;function S_(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Fo.fromArray(n,s);let l=r.x*Math.abs(Fo.x)+r.y*Math.abs(Fo.y)+r.z*Math.abs(Fo.z),u=e.dot(Fo),f=t.dot(Fo),h=i.dot(Fo);if(Math.max(-Math.max(u,f,h),Math.min(u,f,h))>l)return!1}return!0}var SV=new no,Zl=new Z,E_=new Z,Wo=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):SV.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zl.subVectors(e,this.center);let t=Zl.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Zl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(E_.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zl.copy(e.center).add(E_)),this.expandByPoint(Zl.copy(e.center).sub(E_))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},us=new Z,w_=new Z,Mh=new Z,Ys=new Z,b_=new Z,Sh=new Z,T_=new Z,su=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,us)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=us.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(us.copy(this.origin).addScaledVector(this.direction,t),us.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){w_.copy(e).add(t).multiplyScalar(.5),Mh.copy(t).sub(e).normalize(),Ys.copy(this.origin).sub(w_);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Mh),l=Ys.dot(this.direction),u=-Ys.dot(Mh),f=Ys.lengthSq(),h=Math.abs(1-a*a),m,g,v,M;if(h>0)if(m=a*u-l,g=a*l-u,M=s*h,m>=0)if(g>=-M)if(g<=M){let w=1/h;m*=w,g*=w,v=m*(m+a*g+2*l)+g*(a*m+g+2*u)+f}else g=s,m=Math.max(0,-(a*g+l)),v=-m*m+g*(g+2*u)+f;else g=-s,m=Math.max(0,-(a*g+l)),v=-m*m+g*(g+2*u)+f;else g<=-M?(m=Math.max(0,-(-a*s+l)),g=m>0?-s:Math.min(Math.max(-s,-u),s),v=-m*m+g*(g+2*u)+f):g<=M?(m=0,g=Math.min(Math.max(-s,-u),s),v=g*(g+2*u)+f):(m=Math.max(0,-(a*s+l)),g=m>0?s:Math.min(Math.max(-s,-u),s),v=-m*m+g*(g+2*u)+f);else g=a>0?-s:s,m=Math.max(0,-(a*g+l)),v=-m*m+g*(g+2*u)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(w_).addScaledVector(Mh,g),v}intersectSphere(e,t){us.subVectors(e.center,this.origin);let i=us.dot(this.direction),r=us.dot(us)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),l=i-a,u=i+a;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,l,u,f=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,g=this.origin;return f>=0?(i=(e.min.x-g.x)*f,r=(e.max.x-g.x)*f):(i=(e.max.x-g.x)*f,r=(e.min.x-g.x)*f),h>=0?(s=(e.min.y-g.y)*h,a=(e.max.y-g.y)*h):(s=(e.max.y-g.y)*h,a=(e.min.y-g.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),m>=0?(l=(e.min.z-g.z)*m,u=(e.max.z-g.z)*m):(l=(e.max.z-g.z)*m,u=(e.min.z-g.z)*m),i>u||l>r)||((l>i||i!==i)&&(i=l),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,us)!==null}intersectTriangle(e,t,i,r,s){b_.subVectors(t,e),Sh.subVectors(i,e),T_.crossVectors(b_,Sh);let a=this.direction.dot(T_),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Ys.subVectors(this.origin,e);let u=l*this.direction.dot(Sh.crossVectors(Ys,Sh));if(u<0)return null;let f=l*this.direction.dot(b_.cross(Ys));if(f<0||u+f>a)return null;let h=-l*Ys.dot(T_);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mn=class n{constructor(e,t,i,r,s,a,l,u,f,h,m,g,v,M,w,_){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,l,u,f,h,m,g,v,M,w,_)}set(e,t,i,r,s,a,l,u,f,h,m,g,v,M,w,_){let y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=r,y[1]=s,y[5]=a,y[9]=l,y[13]=u,y[2]=f,y[6]=h,y[10]=m,y[14]=g,y[3]=v,y[7]=M,y[11]=w,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/lc.setFromMatrixColumn(e,0).length(),s=1/lc.setFromMatrixColumn(e,1).length(),a=1/lc.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),u=Math.cos(r),f=Math.sin(r),h=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){let g=a*h,v=a*m,M=l*h,w=l*m;t[0]=u*h,t[4]=-u*m,t[8]=f,t[1]=v+M*f,t[5]=g-w*f,t[9]=-l*u,t[2]=w-g*f,t[6]=M+v*f,t[10]=a*u}else if(e.order==="YXZ"){let g=u*h,v=u*m,M=f*h,w=f*m;t[0]=g+w*l,t[4]=M*l-v,t[8]=a*f,t[1]=a*m,t[5]=a*h,t[9]=-l,t[2]=v*l-M,t[6]=w+g*l,t[10]=a*u}else if(e.order==="ZXY"){let g=u*h,v=u*m,M=f*h,w=f*m;t[0]=g-w*l,t[4]=-a*m,t[8]=M+v*l,t[1]=v+M*l,t[5]=a*h,t[9]=w-g*l,t[2]=-a*f,t[6]=l,t[10]=a*u}else if(e.order==="ZYX"){let g=a*h,v=a*m,M=l*h,w=l*m;t[0]=u*h,t[4]=M*f-v,t[8]=g*f+w,t[1]=u*m,t[5]=w*f+g,t[9]=v*f-M,t[2]=-f,t[6]=l*u,t[10]=a*u}else if(e.order==="YZX"){let g=a*u,v=a*f,M=l*u,w=l*f;t[0]=u*h,t[4]=w-g*m,t[8]=M*m+v,t[1]=m,t[5]=a*h,t[9]=-l*h,t[2]=-f*h,t[6]=v*m+M,t[10]=g-w*m}else if(e.order==="XZY"){let g=a*u,v=a*f,M=l*u,w=l*f;t[0]=u*h,t[4]=-m,t[8]=f*h,t[1]=g*m+w,t[5]=a*h,t[9]=v*m-M,t[2]=M*m-v,t[6]=l*h,t[10]=w*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(EV,e,wV)}lookAt(e,t,i){let r=this.elements;return Ni.subVectors(e,t),Ni.lengthSq()===0&&(Ni.z=1),Ni.normalize(),Zs.crossVectors(i,Ni),Zs.lengthSq()===0&&(Math.abs(i.z)===1?Ni.x+=1e-4:Ni.z+=1e-4,Ni.normalize(),Zs.crossVectors(i,Ni)),Zs.normalize(),Eh.crossVectors(Ni,Zs),r[0]=Zs.x,r[4]=Eh.x,r[8]=Ni.x,r[1]=Zs.y,r[5]=Eh.y,r[9]=Ni.y,r[2]=Zs.z,r[6]=Eh.z,r[10]=Ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],l=i[4],u=i[8],f=i[12],h=i[1],m=i[5],g=i[9],v=i[13],M=i[2],w=i[6],_=i[10],y=i[14],P=i[3],N=i[7],I=i[11],G=i[15],V=r[0],F=r[4],j=r[8],A=r[12],C=r[1],k=r[5],se=r[9],J=r[13],de=r[2],le=r[6],ne=r[10],he=r[14],K=r[3],ge=r[7],Ne=r[11],Ve=r[15];return s[0]=a*V+l*C+u*de+f*K,s[4]=a*F+l*k+u*le+f*ge,s[8]=a*j+l*se+u*ne+f*Ne,s[12]=a*A+l*J+u*he+f*Ve,s[1]=h*V+m*C+g*de+v*K,s[5]=h*F+m*k+g*le+v*ge,s[9]=h*j+m*se+g*ne+v*Ne,s[13]=h*A+m*J+g*he+v*Ve,s[2]=M*V+w*C+_*de+y*K,s[6]=M*F+w*k+_*le+y*ge,s[10]=M*j+w*se+_*ne+y*Ne,s[14]=M*A+w*J+_*he+y*Ve,s[3]=P*V+N*C+I*de+G*K,s[7]=P*F+N*k+I*le+G*ge,s[11]=P*j+N*se+I*ne+G*Ne,s[15]=P*A+N*J+I*he+G*Ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],u=e[9],f=e[13],h=e[2],m=e[6],g=e[10],v=e[14],M=e[3],w=e[7],_=e[11],y=e[15];return M*(+s*u*m-r*f*m-s*l*g+i*f*g+r*l*v-i*u*v)+w*(+t*u*v-t*f*g+s*a*g-r*a*v+r*f*h-s*u*h)+_*(+t*f*m-t*l*v-s*a*m+i*a*v+s*l*h-i*f*h)+y*(-r*l*h-t*u*m+t*l*g+r*a*m-i*a*g+i*u*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],f=e[7],h=e[8],m=e[9],g=e[10],v=e[11],M=e[12],w=e[13],_=e[14],y=e[15],P=m*_*f-w*g*f+w*u*v-l*_*v-m*u*y+l*g*y,N=M*g*f-h*_*f-M*u*v+a*_*v+h*u*y-a*g*y,I=h*w*f-M*m*f+M*l*v-a*w*v-h*l*y+a*m*y,G=M*m*u-h*w*u-M*l*g+a*w*g+h*l*_-a*m*_,V=t*P+i*N+r*I+s*G;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/V;return e[0]=P*F,e[1]=(w*g*s-m*_*s-w*r*v+i*_*v+m*r*y-i*g*y)*F,e[2]=(l*_*s-w*u*s+w*r*f-i*_*f-l*r*y+i*u*y)*F,e[3]=(m*u*s-l*g*s-m*r*f+i*g*f+l*r*v-i*u*v)*F,e[4]=N*F,e[5]=(h*_*s-M*g*s+M*r*v-t*_*v-h*r*y+t*g*y)*F,e[6]=(M*u*s-a*_*s-M*r*f+t*_*f+a*r*y-t*u*y)*F,e[7]=(a*g*s-h*u*s+h*r*f-t*g*f-a*r*v+t*u*v)*F,e[8]=I*F,e[9]=(M*m*s-h*w*s-M*i*v+t*w*v+h*i*y-t*m*y)*F,e[10]=(a*w*s-M*l*s+M*i*f-t*w*f-a*i*y+t*l*y)*F,e[11]=(h*l*s-a*m*s-h*i*f+t*m*f+a*i*v-t*l*v)*F,e[12]=G*F,e[13]=(h*w*r-M*m*r+M*i*g-t*w*g-h*i*_+t*m*_)*F,e[14]=(M*l*r-a*w*r-M*i*u+t*w*u+a*i*_-t*l*_)*F,e[15]=(a*m*r-h*l*r+h*i*u-t*m*u-a*i*g+t*l*g)*F,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,l=e.y,u=e.z,f=s*a,h=s*l;return this.set(f*a+i,f*l-r*u,f*u+r*l,0,f*l+r*u,h*l+i,h*u-r*a,0,f*u-r*l,h*u+r*a,s*u*u+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,l=t._z,u=t._w,f=s+s,h=a+a,m=l+l,g=s*f,v=s*h,M=s*m,w=a*h,_=a*m,y=l*m,P=u*f,N=u*h,I=u*m,G=i.x,V=i.y,F=i.z;return r[0]=(1-(w+y))*G,r[1]=(v+I)*G,r[2]=(M-N)*G,r[3]=0,r[4]=(v-I)*V,r[5]=(1-(g+y))*V,r[6]=(_+P)*V,r[7]=0,r[8]=(M+N)*F,r[9]=(_-P)*F,r[10]=(1-(g+w))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=lc.set(r[0],r[1],r[2]).length(),a=lc.set(r[4],r[5],r[6]).length(),l=lc.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],vr.copy(this);let f=1/s,h=1/a,m=1/l;return vr.elements[0]*=f,vr.elements[1]*=f,vr.elements[2]*=f,vr.elements[4]*=h,vr.elements[5]*=h,vr.elements[6]*=h,vr.elements[8]*=m,vr.elements[9]*=m,vr.elements[10]*=m,t.setFromRotationMatrix(vr),i.x=s,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,a,l=Pr){let u=this.elements,f=2*s/(t-e),h=2*s/(i-r),m=(t+e)/(t-e),g=(i+r)/(i-r),v,M;if(l===Pr)v=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(l===iu)v=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=f,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=h,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,a,l=Pr){let u=this.elements,f=1/(t-e),h=1/(i-r),m=1/(a-s),g=(t+e)*f,v=(i+r)*h,M,w;if(l===Pr)M=(a+s)*m,w=-2*m;else if(l===iu)M=s*m,w=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=2*f,u[4]=0,u[8]=0,u[12]=-g,u[1]=0,u[5]=2*h,u[9]=0,u[13]=-v,u[2]=0,u[6]=0,u[10]=w,u[14]=-M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},lc=new Z,vr=new Mn,EV=new Z(0,0,0),wV=new Z(1,1,1),Zs=new Z,Eh=new Z,Ni=new Z,XT=new Mn,YT=new vs,jo=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,a=s[0],l=s[4],u=s[8],f=s[1],h=s[5],m=s[9],g=s[2],v=s[6],M=s[10];switch(i){case"XYZ":this._y=Math.asin(Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,M),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,M),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-Ct(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,M));break;case"XZY":this._z=Math.asin(-Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-m,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return XT.makeRotationFromQuaternion(t),this.setFromRotationMatrix(XT,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return YT.setFromEuler(this),this.setFromQuaternion(YT,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),ou=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bV=0,ZT=new Z,uc=new vs,ds=new Mn,wh=new Z,Jl=new Z,TV=new Z,CV=new vs,JT=new Z(1,0,0),KT=new Z(0,1,0),QT=new Z(0,0,1),eC={type:"added"},DV={type:"removed"},dc={type:"childadded",child:null},C_={type:"childremoved",child:null},Ss=(()=>{class n extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bV++}),this.uuid=Ic(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new Z,i=new jo,r=new vs,s=new Z(1,1,1);function a(){r.setFromEuler(i,!1)}function l(){i.setFromQuaternion(r,void 0,!1)}i._onChange(a),r._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mn},normalMatrix:{value:new ct}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return uc.setFromAxisAngle(t,i),this.quaternion.multiply(uc),this}rotateOnWorldAxis(t,i){return uc.setFromAxisAngle(t,i),this.quaternion.premultiply(uc),this}rotateX(t){return this.rotateOnAxis(JT,t)}rotateY(t){return this.rotateOnAxis(KT,t)}rotateZ(t){return this.rotateOnAxis(QT,t)}translateOnAxis(t,i){return ZT.copy(t).applyQuaternion(this.quaternion),this.position.add(ZT.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(JT,t)}translateY(t){return this.translateOnAxis(KT,t)}translateZ(t){return this.translateOnAxis(QT,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ds.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?wh.copy(t):wh.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Jl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ds.lookAt(Jl,wh,this.up):ds.lookAt(wh,Jl,this.up),this.quaternion.setFromRotationMatrix(ds),s&&(ds.extractRotation(s.matrixWorld),uc.setFromRotationMatrix(ds),this.quaternion.premultiply(uc.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eC),dc.child=t,this.dispatchEvent(dc),dc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(DV),C_.child=t,this.dispatchEvent(C_),C_.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ds.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ds.multiply(t.parent.matrixWorld)),t.applyMatrix4(ds),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eC),dc.child=t,this.dispatchEvent(dc),dc.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let l=this.children[r].getObjectByProperty(t,i);if(l!==void 0)return l}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jl,t,TV),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jl,CV,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){let f=u.shapes;if(Array.isArray(f))for(let h=0,m=f.length;h<m;h++){let g=f[h];a(t.shapes,g)}else a(t.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(a(t.materials,this.material[f]));s.material=u}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){let f=this.animations[u];s.animations.push(a(t.animations,f))}}if(i){let u=l(t.geometries),f=l(t.materials),h=l(t.textures),m=l(t.images),g=l(t.shapes),v=l(t.skeletons),M=l(t.animations),w=l(t.nodes);u.length>0&&(r.geometries=u),f.length>0&&(r.materials=f),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=s,r;function l(u){let f=[];for(let h in u){let m=u[h];delete m.metadata,f.push(m)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new Z(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),yr=new Z,fs=new Z,D_=new Z,hs=new Z,fc=new Z,hc=new Z,tC=new Z,A_=new Z,I_=new Z,R_=new Z,N_=new vn,P_=new vn,O_=new vn,Qs=class n{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),yr.subVectors(e,t),r.cross(yr);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){yr.subVectors(r,t),fs.subVectors(i,t),D_.subVectors(e,t);let a=yr.dot(yr),l=yr.dot(fs),u=yr.dot(D_),f=fs.dot(fs),h=fs.dot(D_),m=a*f-l*l;if(m===0)return s.set(0,0,0),null;let g=1/m,v=(f*u-l*h)*g,M=(a*h-l*u)*g;return s.set(1-v-M,M,v)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,hs)===null?!1:hs.x>=0&&hs.y>=0&&hs.x+hs.y<=1}static getInterpolation(e,t,i,r,s,a,l,u){return this.getBarycoord(e,t,i,r,hs)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,hs.x),u.addScaledVector(a,hs.y),u.addScaledVector(l,hs.z),u)}static getInterpolatedAttribute(e,t,i,r,s,a){return N_.setScalar(0),P_.setScalar(0),O_.setScalar(0),N_.fromBufferAttribute(e,t),P_.fromBufferAttribute(e,i),O_.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(N_,s.x),a.addScaledVector(P_,s.y),a.addScaledVector(O_,s.z),a}static isFrontFacing(e,t,i,r){return yr.subVectors(i,t),fs.subVectors(e,t),yr.cross(fs).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yr.subVectors(this.c,this.b),fs.subVectors(this.a,this.b),yr.cross(fs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,l;fc.subVectors(r,i),hc.subVectors(s,i),A_.subVectors(e,i);let u=fc.dot(A_),f=hc.dot(A_);if(u<=0&&f<=0)return t.copy(i);I_.subVectors(e,r);let h=fc.dot(I_),m=hc.dot(I_);if(h>=0&&m<=h)return t.copy(r);let g=u*m-h*f;if(g<=0&&u>=0&&h<=0)return a=u/(u-h),t.copy(i).addScaledVector(fc,a);R_.subVectors(e,s);let v=fc.dot(R_),M=hc.dot(R_);if(M>=0&&v<=M)return t.copy(s);let w=v*f-u*M;if(w<=0&&f>=0&&M<=0)return l=f/(f-M),t.copy(i).addScaledVector(hc,l);let _=h*M-v*m;if(_<=0&&m-h>=0&&v-M>=0)return tC.subVectors(s,r),l=(m-h)/(m-h+(v-M)),t.copy(r).addScaledVector(tC,l);let y=1/(_+w+g);return a=w*y,l=g*y,t.copy(i).addScaledVector(fc,a).addScaledVector(hc,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tD={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Js={h:0,s:0,l:0},bh={h:0,s:0,l:0};function L_(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Bt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ut.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ut.workingColorSpace){if(e=d0(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=L_(a,s,e+1/3),this.g=L_(a,s,e),this.b=L_(a,s,e-1/3)}return Ut.toWorkingColorSpace(this,r),this}setStyle(e,t=Oi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Oi){let i=tD[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=yc(e.r),this.g=yc(e.g),this.b=yc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oi){return Ut.fromWorkingColorSpace(Kn.copy(this),e),Math.round(Ct(Kn.r*255,0,255))*65536+Math.round(Ct(Kn.g*255,0,255))*256+Math.round(Ct(Kn.b*255,0,255))}getHexString(e=Oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.fromWorkingColorSpace(Kn.copy(this),t);let i=Kn.r,r=Kn.g,s=Kn.b,a=Math.max(i,r,s),l=Math.min(i,r,s),u,f,h=(l+a)/2;if(l===a)u=0,f=0;else{let m=a-l;switch(f=h<=.5?m/(a+l):m/(2-a-l),a){case i:u=(r-s)/m+(r<s?6:0);break;case r:u=(s-i)/m+2;break;case s:u=(i-r)/m+4;break}u/=6}return e.h=u,e.s=f,e.l=h,e}getRGB(e,t=Ut.workingColorSpace){return Ut.fromWorkingColorSpace(Kn.copy(this),t),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=Oi){Ut.fromWorkingColorSpace(Kn.copy(this),e);let t=Kn.r,i=Kn.g,r=Kn.b;return e!==Oi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Js),this.setHSL(Js.h+e,Js.s+t,Js.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Js),e.getHSL(bh);let i=eu(Js.h,bh.h,t),r=eu(Js.s,bh.s,t),s=eu(Js.l,bh.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kn=new Bt;Bt.NAMES=tD;var AV=0,io=class extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AV++}),this.uuid=Ic(),this.name="",this.type="Material",this.blending=Ho,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=Vh,this.blendEquation=to,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bo,this.stencilZFail=Bo,this.stencilZPass=Bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ho&&(i.blending=this.blending),this.side!==ms&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bh&&(i.blendSrc=this.blendSrc),this.blendDst!==Vh&&(i.blendDst=this.blendDst),this.blendEquation!==to&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==G_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let l in s){let u=s[l];delete u.metadata,a.push(u)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},au=class extends io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jo,this.combine=K_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var wn=new Z,Th=new Zt,IV=0,Li=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:IV++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=W_,this.updateRanges=[],this.gpuType=Ur,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Th.fromBufferAttribute(this,t),Th.applyMatrix3(e),this.setXY(t,Th.x,Th.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix3(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vc(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vc(t,this.array)),t}setX(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vc(t,this.array)),t}setY(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vc(t,this.array)),t}setW(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),i=ci(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),i=ci(i,this.array),r=ci(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),i=ci(i,this.array),r=ci(r,this.array),s=ci(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==W_&&(e.usage=this.usage),e}};var cu=class extends Li{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var lu=class extends Li{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Qi=class extends Li{constructor(e,t,i){super(new Float32Array(e),t,i)}},RV=0,Ki=new Mn,F_=new Ss,pc=new Z,Pi=new no,Kl=new no,kn=new Z,xr=class n extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RV++}),this.uuid=Ic(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(h0(e)?lu:cu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ct().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ki.makeRotationFromQuaternion(e),this.applyMatrix4(Ki),this}rotateX(e){return Ki.makeRotationX(e),this.applyMatrix4(Ki),this}rotateY(e){return Ki.makeRotationY(e),this.applyMatrix4(Ki),this}rotateZ(e){return Ki.makeRotationZ(e),this.applyMatrix4(Ki),this}translate(e,t,i){return Ki.makeTranslation(e,t,i),this.applyMatrix4(Ki),this}scale(e,t,i){return Ki.makeScale(e,t,i),this.applyMatrix4(Ki),this}lookAt(e){return F_.lookAt(e),F_.updateMatrix(),this.applyMatrix4(F_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pc).negate(),this.translate(pc.x,pc.y,pc.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qi(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Pi.setFromBufferAttribute(s),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,Pi.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,Pi.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(Pi.min),this.boundingBox.expandByPoint(Pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){let i=this.boundingSphere.center;if(Pi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let l=t[s];Kl.setFromBufferAttribute(l),this.morphTargetsRelative?(kn.addVectors(Pi.min,Kl.min),Pi.expandByPoint(kn),kn.addVectors(Pi.max,Kl.max),Pi.expandByPoint(kn)):(Pi.expandByPoint(Kl.min),Pi.expandByPoint(Kl.max))}Pi.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)kn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kn));if(t)for(let s=0,a=t.length;s<a;s++){let l=t[s],u=this.morphTargetsRelative;for(let f=0,h=l.count;f<h;f++)kn.fromBufferAttribute(l,f),u&&(pc.fromBufferAttribute(e,f),kn.add(pc)),r=Math.max(r,i.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),l=[],u=[];for(let j=0;j<i.count;j++)l[j]=new Z,u[j]=new Z;let f=new Z,h=new Z,m=new Z,g=new Zt,v=new Zt,M=new Zt,w=new Z,_=new Z;function y(j,A,C){f.fromBufferAttribute(i,j),h.fromBufferAttribute(i,A),m.fromBufferAttribute(i,C),g.fromBufferAttribute(s,j),v.fromBufferAttribute(s,A),M.fromBufferAttribute(s,C),h.sub(f),m.sub(f),v.sub(g),M.sub(g);let k=1/(v.x*M.y-M.x*v.y);isFinite(k)&&(w.copy(h).multiplyScalar(M.y).addScaledVector(m,-v.y).multiplyScalar(k),_.copy(m).multiplyScalar(v.x).addScaledVector(h,-M.x).multiplyScalar(k),l[j].add(w),l[A].add(w),l[C].add(w),u[j].add(_),u[A].add(_),u[C].add(_))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let j=0,A=P.length;j<A;++j){let C=P[j],k=C.start,se=C.count;for(let J=k,de=k+se;J<de;J+=3)y(e.getX(J+0),e.getX(J+1),e.getX(J+2))}let N=new Z,I=new Z,G=new Z,V=new Z;function F(j){G.fromBufferAttribute(r,j),V.copy(G);let A=l[j];N.copy(A),N.sub(G.multiplyScalar(G.dot(A))).normalize(),I.crossVectors(V,A);let k=I.dot(u[j])<0?-1:1;a.setXYZW(j,N.x,N.y,N.z,k)}for(let j=0,A=P.length;j<A;++j){let C=P[j],k=C.start,se=C.count;for(let J=k,de=k+se;J<de;J+=3)F(e.getX(J+0)),F(e.getX(J+1)),F(e.getX(J+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Li(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,v=i.count;g<v;g++)i.setXYZ(g,0,0,0);let r=new Z,s=new Z,a=new Z,l=new Z,u=new Z,f=new Z,h=new Z,m=new Z;if(e)for(let g=0,v=e.count;g<v;g+=3){let M=e.getX(g+0),w=e.getX(g+1),_=e.getX(g+2);r.fromBufferAttribute(t,M),s.fromBufferAttribute(t,w),a.fromBufferAttribute(t,_),h.subVectors(a,s),m.subVectors(r,s),h.cross(m),l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,_),l.add(h),u.add(h),f.add(h),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(w,u.x,u.y,u.z),i.setXYZ(_,f.x,f.y,f.z)}else for(let g=0,v=t.count;g<v;g+=3)r.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),a.fromBufferAttribute(t,g+2),h.subVectors(a,s),m.subVectors(r,s),h.cross(m),i.setXYZ(g+0,h.x,h.y,h.z),i.setXYZ(g+1,h.x,h.y,h.z),i.setXYZ(g+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kn.fromBufferAttribute(e,t),kn.normalize(),e.setXYZ(t,kn.x,kn.y,kn.z)}toNonIndexed(){function e(l,u){let f=l.array,h=l.itemSize,m=l.normalized,g=new f.constructor(u.length*h),v=0,M=0;for(let w=0,_=u.length;w<_;w++){l.isInterleavedBufferAttribute?v=u[w]*l.data.stride+l.offset:v=u[w]*h;for(let y=0;y<h;y++)g[M++]=f[v++]}return new Li(g,h,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let l in r){let u=r[l],f=e(u,i);t.setAttribute(l,f)}let s=this.morphAttributes;for(let l in s){let u=[],f=s[l];for(let h=0,m=f.length;h<m;h++){let g=f[h],v=e(g,i);u.push(v)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,u=a.length;l<u;l++){let f=a[l];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let u=this.parameters;for(let f in u)u[f]!==void 0&&(e[f]=u[f]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let u in i){let f=i[u];e.data.attributes[u]=f.toJSON(e.data)}let r={},s=!1;for(let u in this.morphAttributes){let f=this.morphAttributes[u],h=[];for(let m=0,g=f.length;m<g;m++){let v=f[m];h.push(v.toJSON(e.data))}h.length>0&&(r[u]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let f in r){let h=r[f];this.setAttribute(f,h.clone(t))}let s=e.morphAttributes;for(let f in s){let h=[],m=s[f];for(let g=0,v=m.length;g<v;g++)h.push(m[g].clone(t));this.morphAttributes[f]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let f=0,h=a.length;f<h;f++){let m=a[f];this.addGroup(m.start,m.count,m.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nC=new Mn,ko=new su,Ch=new Wo,iC=new Z,Dh=new Z,Ah=new Z,Ih=new Z,k_=new Z,Rh=new Z,rC=new Z,Nh=new Z,tr=class extends Ss{constructor(e=new xr,t=new au){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let l=this.morphTargetInfluences;if(s&&l){Rh.set(0,0,0);for(let u=0,f=s.length;u<f;u++){let h=l[u],m=s[u];h!==0&&(k_.fromBufferAttribute(m,e),a?Rh.addScaledVector(k_,h):Rh.addScaledVector(k_.sub(t),h))}t.add(Rh)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ch.copy(i.boundingSphere),Ch.applyMatrix4(s),ko.copy(e.ray).recast(e.near),!(Ch.containsPoint(ko.origin)===!1&&(ko.intersectSphere(Ch,iC)===null||ko.origin.distanceToSquared(iC)>(e.far-e.near)**2))&&(nC.copy(s).invert(),ko.copy(e.ray).applyMatrix4(nC),!(i.boundingBox!==null&&ko.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ko)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,l=s.index,u=s.attributes.position,f=s.attributes.uv,h=s.attributes.uv1,m=s.attributes.normal,g=s.groups,v=s.drawRange;if(l!==null)if(Array.isArray(a))for(let M=0,w=g.length;M<w;M++){let _=g[M],y=a[_.materialIndex],P=Math.max(_.start,v.start),N=Math.min(l.count,Math.min(_.start+_.count,v.start+v.count));for(let I=P,G=N;I<G;I+=3){let V=l.getX(I),F=l.getX(I+1),j=l.getX(I+2);r=Ph(this,y,e,i,f,h,m,V,F,j),r&&(r.faceIndex=Math.floor(I/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let M=Math.max(0,v.start),w=Math.min(l.count,v.start+v.count);for(let _=M,y=w;_<y;_+=3){let P=l.getX(_),N=l.getX(_+1),I=l.getX(_+2);r=Ph(this,a,e,i,f,h,m,P,N,I),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(a))for(let M=0,w=g.length;M<w;M++){let _=g[M],y=a[_.materialIndex],P=Math.max(_.start,v.start),N=Math.min(u.count,Math.min(_.start+_.count,v.start+v.count));for(let I=P,G=N;I<G;I+=3){let V=I,F=I+1,j=I+2;r=Ph(this,y,e,i,f,h,m,V,F,j),r&&(r.faceIndex=Math.floor(I/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let M=Math.max(0,v.start),w=Math.min(u.count,v.start+v.count);for(let _=M,y=w;_<y;_+=3){let P=_,N=_+1,I=_+2;r=Ph(this,a,e,i,f,h,m,P,N,I),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}};function NV(n,e,t,i,r,s,a,l){let u;if(e.side===li?u=i.intersectTriangle(a,s,r,!0,l):u=i.intersectTriangle(r,s,a,e.side===ms,l),u===null)return null;Nh.copy(l),Nh.applyMatrix4(n.matrixWorld);let f=t.ray.origin.distanceTo(Nh);return f<t.near||f>t.far?null:{distance:f,point:Nh.clone(),object:n}}function Ph(n,e,t,i,r,s,a,l,u,f){n.getVertexPosition(l,Dh),n.getVertexPosition(u,Ah),n.getVertexPosition(f,Ih);let h=NV(n,e,t,i,Dh,Ah,Ih,rC);if(h){let m=new Z;Qs.getBarycoord(rC,Dh,Ah,Ih,m),r&&(h.uv=Qs.getInterpolatedAttribute(r,l,u,f,m,new Zt)),s&&(h.uv1=Qs.getInterpolatedAttribute(s,l,u,f,m,new Zt)),a&&(h.normal=Qs.getInterpolatedAttribute(a,l,u,f,m,new Z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let g={a:l,b:u,c:f,normal:new Z,materialIndex:0};Qs.getNormal(Dh,Ah,Ih,g.normal),h.face=g,h.barycoord=m}return h}var Ec=class n extends xr{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let u=[],f=[],h=[],m=[],g=0,v=0;M("z","y","x",-1,-1,i,t,e,a,s,0),M("z","y","x",1,-1,i,t,-e,a,s,1),M("x","z","y",1,1,e,i,t,r,a,2),M("x","z","y",1,-1,e,i,-t,r,a,3),M("x","y","z",1,-1,e,t,i,r,s,4),M("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(u),this.setAttribute("position",new Qi(f,3)),this.setAttribute("normal",new Qi(h,3)),this.setAttribute("uv",new Qi(m,2));function M(w,_,y,P,N,I,G,V,F,j,A){let C=I/F,k=G/j,se=I/2,J=G/2,de=V/2,le=F+1,ne=j+1,he=0,K=0,ge=new Z;for(let Ne=0;Ne<ne;Ne++){let Ve=Ne*k-J;for(let pt=0;pt<le;pt++){let Rt=pt*C-se;ge[w]=Rt*P,ge[_]=Ve*N,ge[y]=de,f.push(ge.x,ge.y,ge.z),ge[w]=0,ge[_]=0,ge[y]=V>0?1:-1,h.push(ge.x,ge.y,ge.z),m.push(pt/F),m.push(1-Ne/j),he+=1}}for(let Ne=0;Ne<j;Ne++)for(let Ve=0;Ve<F;Ve++){let pt=g+Ve+le*Ne,Rt=g+Ve+le*(Ne+1),ie=g+(Ve+1)+le*(Ne+1),ve=g+(Ve+1)+le*Ne;u.push(pt,Rt,ve),u.push(Rt,ie,ve),K+=6}l.addGroup(v,K,A),v+=K,g+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Yo(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ei(n){let e={};for(let t=0;t<n.length;t++){let i=Yo(n[t]);for(let r in i)e[r]=i[r]}return e}function PV(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function p0(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}var nD={clone:Yo,merge:ei},OV=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LV=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mr=class extends io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OV,this.fragmentShader=LV,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yo(e.uniforms),this.uniformsGroups=PV(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},uu=class extends Ss{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=Pr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ks=new Z,sC=new Zt,oC=new Zt,Qn=class extends uu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ql*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xc*2*Math.atan(Math.tan(Ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ks.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ks.x,Ks.y).multiplyScalar(-e/Ks.z),Ks.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ks.x,Ks.y).multiplyScalar(-e/Ks.z)}getViewSize(e,t){return this.getViewBounds(e,sC,oC),t.subVectors(oC,sC)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ql*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let u=a.fullWidth,f=a.fullHeight;s+=a.offsetX*r/u,t-=a.offsetY*i/f,r*=a.width/u,i*=a.height/f}let l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mc=-90,gc=1,qh=class extends Ss{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Qn(mc,gc,e,t);r.layers=this.layers,this.add(r);let s=new Qn(mc,gc,e,t);s.layers=this.layers,this.add(s);let a=new Qn(mc,gc,e,t);a.layers=this.layers,this.add(a);let l=new Qn(mc,gc,e,t);l.layers=this.layers,this.add(l);let u=new Qn(mc,gc,e,t);u.layers=this.layers,this.add(u);let f=new Qn(mc,gc,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,l,u]=t;for(let f of t)this.remove(f);if(e===Pr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===iu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,l,u,f,h]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;let w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,l),e.setRenderTarget(i,3,r),e.render(t,u),e.setRenderTarget(i,4,r),e.render(t,f),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(m,g,v),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}},du=class extends Ms{constructor(e=[],t=qo,i,r,s,a,l,u,f,h){super(e,t,i,r,s,a,l,u,f,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xh=class extends Or{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new du(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_r}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ec(5,5,5),s=new Mr({name:"CubemapFromEquirect",uniforms:Yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:li,blending:ys});s.uniforms.tEquirect.value=t;let a=new tr(r,s),l=t.minFilter;return t.minFilter===oo&&(t.minFilter=_r),new qh(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},Vo=class extends Ss{constructor(){super(),this.isGroup=!0,this.type="Group"}},FV={type:"move"},wc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,l=this._targetRay,u=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){a=!0;for(let w of e.hand.values()){let _=t.getJointPose(w,i),y=this._getHandJoint(f,w);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}let h=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],g=h.position.distanceTo(m.position),v=.02,M=.005;f.inputState.pinching&&g>v+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&g<=v-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(FV)))}return l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),f!==null&&(f.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Vo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var fu=class extends Ss{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jo,this.environmentIntensity=1,this.environmentRotation=new jo,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var U_=new Z,kV=new Z,UV=new ct,Nr=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=U_.subVectors(i,t).cross(kV.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(U_),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||UV.getNormalMatrix(e),r=this.coplanarPoint(U_).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Uo=new Wo,Oh=new Z,hu=class{constructor(e=new Nr,t=new Nr,i=new Nr,r=new Nr,s=new Nr,a=new Nr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pr){let i=this.planes,r=e.elements,s=r[0],a=r[1],l=r[2],u=r[3],f=r[4],h=r[5],m=r[6],g=r[7],v=r[8],M=r[9],w=r[10],_=r[11],y=r[12],P=r[13],N=r[14],I=r[15];if(i[0].setComponents(u-s,g-f,_-v,I-y).normalize(),i[1].setComponents(u+s,g+f,_+v,I+y).normalize(),i[2].setComponents(u+a,g+h,_+M,I+P).normalize(),i[3].setComponents(u-a,g-h,_-M,I-P).normalize(),i[4].setComponents(u-l,g-m,_-w,I-N).normalize(),t===Pr)i[5].setComponents(u+l,g+m,_+w,I+N).normalize();else if(t===iu)i[5].setComponents(l,m,w,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Uo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Uo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Uo)}intersectsSprite(e){return Uo.center.set(0,0,0),Uo.radius=.7071067811865476,Uo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Uo)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Oh.x=r.normal.x>0?e.max.x:e.min.x,Oh.y=r.normal.y>0?e.max.y:e.min.y,Oh.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oh)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bc=class extends io{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},aC=new Mn,j_=new su,Lh=new Wo,Fh=new Z,pu=class extends Ss{constructor(e=new xr,t=new bc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lh.copy(i.boundingSphere),Lh.applyMatrix4(r),Lh.radius+=s,e.ray.intersectsSphere(Lh)===!1)return;aC.copy(r).invert(),j_.copy(e.ray).applyMatrix4(aC);let l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,f=i.index,m=i.attributes.position;if(f!==null){let g=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let M=g,w=v;M<w;M++){let _=f.getX(M);Fh.fromBufferAttribute(m,_),cC(Fh,_,u,r,e,t,this)}}else{let g=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let M=g,w=v;M<w;M++)Fh.fromBufferAttribute(m,M),cC(Fh,M,u,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}};function cC(n,e,t,i,r,s,a){let l=j_.distanceSqToPoint(n);if(l<t){let u=new Z;j_.closestPointToPoint(n,u),u.applyMatrix4(i);let f=r.ray.origin.distanceTo(u);if(f<r.near||f>r.far)return;s.push({distance:f,distanceToRay:Math.sqrt(l),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var mu=class extends Ms{constructor(e,t,i=ao,r,s,a,l=er,u=er,f,h=_c){if(h!==_c&&h!==Ac)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,a,l,u,h,i,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var gu=class n extends xr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,l=Math.floor(i),u=Math.floor(r),f=l+1,h=u+1,m=e/l,g=t/u,v=[],M=[],w=[],_=[];for(let y=0;y<h;y++){let P=y*g-a;for(let N=0;N<f;N++){let I=N*m-s;M.push(I,-P,0),w.push(0,0,1),_.push(N/l),_.push(1-y/u)}}for(let y=0;y<u;y++)for(let P=0;P<l;P++){let N=P+f*y,I=P+f*(y+1),G=P+1+f*(y+1),V=P+1+f*y;v.push(N,I,V),v.push(I,G,V)}this.setIndex(v),this.setAttribute("position",new Qi(M,3)),this.setAttribute("normal",new Qi(w,3)),this.setAttribute("uv",new Qi(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Yh=class extends io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zh=class extends io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function kh(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function BV(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var $o=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let l=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){let l=t[1];e<l&&(i=2,s=l);for(let u=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===u)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){let l=i+a>>>1;e<t[l]?a=l:i=l+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jh=class extends $o{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:V_,endingEnd:V_}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,l=r[s],u=r[a];if(l===void 0)switch(this.getSettings_().endingStart){case H_:s=e,l=2*t-i;break;case z_:s=r.length-2,l=t+r[s]-r[s+1];break;default:s=e,l=i}if(u===void 0)switch(this.getSettings_().endingEnd){case H_:a=e,u=2*i-t;break;case z_:a=1,u=i+r[1]-r[0];break;default:a=e-1,u=t}let f=(i-t)*.5,h=this.valueSize;this._weightPrev=f/(t-l),this._weightNext=f/(u-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=e*l,f=u-l,h=this._offsetPrev,m=this._offsetNext,g=this._weightPrev,v=this._weightNext,M=(i-t)/(r-t),w=M*M,_=w*M,y=-g*_+2*g*w-g*M,P=(1+g)*_+(-1.5-2*g)*w+(-.5+g)*M+1,N=(-1-v)*_+(1.5+v)*w+.5*M,I=v*_-v*w;for(let G=0;G!==l;++G)s[G]=y*a[h+G]+P*a[f+G]+N*a[u+G]+I*a[m+G];return s}},Kh=class extends $o{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=e*l,f=u-l,h=(i-t)/(r-t),m=1-h;for(let g=0;g!==l;++g)s[g]=a[f+g]*m+a[u+g]*h;return s}},Qh=class extends $o{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Fi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kh(t,this.TimeBufferType),this.values=kh(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:kh(e.times,Array),values:kh(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Qh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case tu:t=this.InterpolantFactoryMethodDiscrete;break;case Gh:t=this.InterpolantFactoryMethodLinear;break;case Uh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tu;case this.InterpolantFactoryMethodLinear:return Gh;case this.InterpolantFactoryMethodSmooth:return Uh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let l=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==s;l++){let u=i[l];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,u),e=!1;break}if(a!==null&&a>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,u,a),e=!1;break}a=u}if(r!==void 0&&BV(r))for(let l=0,u=r.length;l!==u;++l){let f=r[l];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,f),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Uh,s=e.length-1,a=1;for(let l=1;l<s;++l){let u=!1,f=e[l],h=e[l+1];if(f!==h&&(l!==1||f!==e[0]))if(r)u=!0;else{let m=l*i,g=m-i,v=m+i;for(let M=0;M!==i;++M){let w=t[m+M];if(w!==t[g+M]||w!==t[v+M]){u=!0;break}}}if(u){if(l!==a){e[a]=e[l];let m=l*i,g=a*i;for(let v=0;v!==i;++v)t[g+v]=t[m+v]}++a}}if(s>0){e[a]=e[s];for(let l=s*i,u=a*i,f=0;f!==i;++f)t[u+f]=t[l+f];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Fi.prototype.ValueTypeName="";Fi.prototype.TimeBufferType=Float32Array;Fi.prototype.ValueBufferType=Float32Array;Fi.prototype.DefaultInterpolation=Gh;var ro=class extends Fi{constructor(e,t,i){super(e,t,i)}};ro.prototype.ValueTypeName="bool";ro.prototype.ValueBufferType=Array;ro.prototype.DefaultInterpolation=tu;ro.prototype.InterpolantFactoryMethodLinear=void 0;ro.prototype.InterpolantFactoryMethodSmooth=void 0;var ep=class extends Fi{constructor(e,t,i,r){super(e,t,i,r)}};ep.prototype.ValueTypeName="color";var tp=class extends Fi{constructor(e,t,i,r){super(e,t,i,r)}};tp.prototype.ValueTypeName="number";var np=class extends $o{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=(i-t)/(r-t),f=e*l;for(let h=f+l;f!==h;f+=4)vs.slerpFlat(s,0,a,f-l,a,f,u);return s}},vu=class extends Fi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new np(this.times,this.values,this.getValueSize(),e)}};vu.prototype.ValueTypeName="quaternion";vu.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends Fi{constructor(e,t,i){super(e,t,i)}};so.prototype.ValueTypeName="string";so.prototype.ValueBufferType=Array;so.prototype.DefaultInterpolation=tu;so.prototype.InterpolantFactoryMethodLinear=void 0;so.prototype.InterpolantFactoryMethodSmooth=void 0;var ip=class extends Fi{constructor(e,t,i,r){super(e,t,i,r)}};ip.prototype.ValueTypeName="vector";var $_={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},rp=class{constructor(e,t,i){let r=this,s=!1,a=0,l=0,u,f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,l),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,l),a===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return u?u(h):h},this.setURLModifier=function(h){return u=h,this},this.addHandler=function(h,m){return f.push(h,m),this},this.removeHandler=function(h){let m=f.indexOf(h);return m!==-1&&f.splice(m,2),this},this.getHandler=function(h){for(let m=0,g=f.length;m<g;m+=2){let v=f[m],M=f[m+1];if(v.global&&(v.lastIndex=0),v.test(h))return M}return null}}},iD=new rp,m0=(()=>{class n{constructor(t){this.manager=t!==void 0?t:iD,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,a){r.load(t,s,i,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})();var sp=class extends m0{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=$_.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let l=Mc("img");function u(){h(),$_.add(e,this),t&&t(this),s.manager.itemEnd(e)}function f(m){h(),r&&r(m),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){l.removeEventListener("load",u,!1),l.removeEventListener("error",f,!1)}return l.addEventListener("load",u,!1),l.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}};var yu=class extends m0{constructor(e){super(e)}load(e,t,i,r){let s=new Ms,a=new sp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},op=class extends Ss{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var ap=class extends uu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,l=r+t,u=r-t;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,a=s+f*this.view.width,l-=h*this.view.offsetY,u=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var _u=class extends op{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var cp=class extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}};var g0="\\[\\]\\.:\\/",VV=new RegExp("["+g0+"]","g"),v0="[^"+g0+"]",HV="[^"+g0.replace("\\.","")+"]",zV=/((?:WC+[\/:])*)/.source.replace("WC",v0),GV=/(WCOD+)?/.source.replace("WCOD",HV),WV=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",v0),jV=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",v0),$V=new RegExp("^"+zV+GV+WV+jV+"$"),qV=["material","materials","bones","map"],q_=class{constructor(e,t,i){let r=i||gn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},gn=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(VV,"")}static parseTrackName(t){let i=$V.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=r.nodeName.substring(s+1);qV.indexOf(a)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=a)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(a){for(let l=0;l<a.length;l++){let u=a[l];if(u.name===i||u.uuid===i)return u;let f=r(u.children);if(f)return f}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,a=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let m=0;m<t.length;m++)if(t[m].name===h){h=m;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let l=t[s];if(l===void 0){let h=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let u=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?u=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}f=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=a}else l.fromArray!==void 0&&l.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(f=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=q_,n})();gn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gn.prototype.GetterByBindingType=[gn.prototype._getValue_direct,gn.prototype._getValue_array,gn.prototype._getValue_arrayElement,gn.prototype._getValue_toArray];gn.prototype.SetterByBindingTypeAndVersioning=[[gn.prototype._setValue_direct,gn.prototype._setValue_direct_setNeedsUpdate,gn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_array,gn.prototype._setValue_array_setNeedsUpdate,gn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_arrayElement,gn.prototype._setValue_arrayElement_setNeedsUpdate,gn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_fromArray,gn.prototype._setValue_fromArray_setNeedsUpdate,gn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sY=new Float32Array(1);function y0(n,e,t,i){let r=XV(i);switch(t){case n0:return n*e;case r0:return n*e;case s0:return n*e*2;case o0:return n*e/r.components*r.byteLength;case Ep:return n*e/r.components*r.byteLength;case a0:return n*e*2/r.components*r.byteLength;case wp:return n*e*2/r.components*r.byteLength;case i0:return n*e*3/r.components*r.byteLength;case nr:return n*e*4/r.components*r.byteLength;case bp:return n*e*4/r.components*r.byteLength;case Eu:case wu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bu:case Tu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cp:case Ap:return Math.max(n,16)*Math.max(e,8)/4;case Tp:case Dp:return Math.max(n,8)*Math.max(e,8)/2;case Ip:case Rp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Np:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Op:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Lp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Fp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case kp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Up:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Hp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case zp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Gp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Wp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case jp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $p:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Cu:case qp:case Xp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case c0:case Yp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Zp:case Jp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function XV(n){switch(n){case kr:case Q_:return{byteLength:1,components:1};case Tc:case e0:case Cc:return{byteLength:2,components:1};case Mp:case Sp:return{byteLength:2,components:4};case ao:case xp:case Ur:return{byteLength:4,components:1};case t0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lp);function CD(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function YV(n){let e=new WeakMap;function t(l,u){let f=l.array,h=l.usage,m=f.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,f,h),l.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)l.isFloat16BufferAttribute?v=n.HALF_FLOAT:v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:m}}function i(l,u,f){let h=u.array,m=u.updateRanges;if(n.bindBuffer(f,l),m.length===0)n.bufferSubData(f,0,h);else{m.sort((v,M)=>v.start-M.start);let g=0;for(let v=1;v<m.length;v++){let M=m[g],w=m[v];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++g,m[g]=w)}m.length=g+1;for(let v=0,M=m.length;v<M;v++){let w=m[v];n.bufferSubData(f,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=e.get(l);u&&(n.deleteBuffer(u.buffer),e.delete(l))}function a(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let f=e.get(l);if(f===void 0)e.set(l,t(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,l,u),f.version=l.version}}return{get:r,remove:s,update:a}}var ZV=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JV=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,KV=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QV=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eH=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tH=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nH=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iH=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rH=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sH=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oH=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aH=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cH=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lH=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uH=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dH=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pH=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mH=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gH=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vH=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yH=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_H=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xH=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,MH=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,SH=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EH=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wH=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TH="gl_FragColor = linearToOutputTexel( gl_FragColor );",CH=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,AH=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IH=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,PH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kH=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VH=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HH=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zH=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WH=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$H=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qH=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,XH=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YH=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZH=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,JH=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KH=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QH=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ez=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tz=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nz=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iz=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rz=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sz=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oz=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,az=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cz=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lz=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uz=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dz=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fz=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hz=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pz=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mz=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gz=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vz=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yz=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_z=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xz=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mz=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sz=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ez=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wz=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bz=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tz=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cz=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dz=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Az=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iz=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rz=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Nz=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pz=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Oz=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lz=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fz=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kz=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uz=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bz=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vz=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hz=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zz=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gz=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wz=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jz=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$z=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qz=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xz=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yz=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zz=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jz=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kz=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qz=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,n4=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,i4=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,r4=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,s4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a4=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c4=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,u4=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d4=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f4=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h4=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,p4=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m4=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,g4=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v4=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y4=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_4=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,x4=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E4=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,w4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b4=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T4=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,C4=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:ZV,alphahash_pars_fragment:JV,alphamap_fragment:KV,alphamap_pars_fragment:QV,alphatest_fragment:eH,alphatest_pars_fragment:tH,aomap_fragment:nH,aomap_pars_fragment:iH,batching_pars_vertex:rH,batching_vertex:sH,begin_vertex:oH,beginnormal_vertex:aH,bsdfs:cH,iridescence_fragment:lH,bumpmap_pars_fragment:uH,clipping_planes_fragment:dH,clipping_planes_pars_fragment:fH,clipping_planes_pars_vertex:hH,clipping_planes_vertex:pH,color_fragment:mH,color_pars_fragment:gH,color_pars_vertex:vH,color_vertex:yH,common:_H,cube_uv_reflection_fragment:xH,defaultnormal_vertex:MH,displacementmap_pars_vertex:SH,displacementmap_vertex:EH,emissivemap_fragment:wH,emissivemap_pars_fragment:bH,colorspace_fragment:TH,colorspace_pars_fragment:CH,envmap_fragment:DH,envmap_common_pars_fragment:AH,envmap_pars_fragment:IH,envmap_pars_vertex:RH,envmap_physical_pars_fragment:zH,envmap_vertex:NH,fog_vertex:PH,fog_pars_vertex:OH,fog_fragment:LH,fog_pars_fragment:FH,gradientmap_pars_fragment:kH,lightmap_pars_fragment:UH,lights_lambert_fragment:BH,lights_lambert_pars_fragment:VH,lights_pars_begin:HH,lights_toon_fragment:GH,lights_toon_pars_fragment:WH,lights_phong_fragment:jH,lights_phong_pars_fragment:$H,lights_physical_fragment:qH,lights_physical_pars_fragment:XH,lights_fragment_begin:YH,lights_fragment_maps:ZH,lights_fragment_end:JH,logdepthbuf_fragment:KH,logdepthbuf_pars_fragment:QH,logdepthbuf_pars_vertex:ez,logdepthbuf_vertex:tz,map_fragment:nz,map_pars_fragment:iz,map_particle_fragment:rz,map_particle_pars_fragment:sz,metalnessmap_fragment:oz,metalnessmap_pars_fragment:az,morphinstance_vertex:cz,morphcolor_vertex:lz,morphnormal_vertex:uz,morphtarget_pars_vertex:dz,morphtarget_vertex:fz,normal_fragment_begin:hz,normal_fragment_maps:pz,normal_pars_fragment:mz,normal_pars_vertex:gz,normal_vertex:vz,normalmap_pars_fragment:yz,clearcoat_normal_fragment_begin:_z,clearcoat_normal_fragment_maps:xz,clearcoat_pars_fragment:Mz,iridescence_pars_fragment:Sz,opaque_fragment:Ez,packing:wz,premultiplied_alpha_fragment:bz,project_vertex:Tz,dithering_fragment:Cz,dithering_pars_fragment:Dz,roughnessmap_fragment:Az,roughnessmap_pars_fragment:Iz,shadowmap_pars_fragment:Rz,shadowmap_pars_vertex:Nz,shadowmap_vertex:Pz,shadowmask_pars_fragment:Oz,skinbase_vertex:Lz,skinning_pars_vertex:Fz,skinning_vertex:kz,skinnormal_vertex:Uz,specularmap_fragment:Bz,specularmap_pars_fragment:Vz,tonemapping_fragment:Hz,tonemapping_pars_fragment:zz,transmission_fragment:Gz,transmission_pars_fragment:Wz,uv_pars_fragment:jz,uv_pars_vertex:$z,uv_vertex:qz,worldpos_vertex:Xz,background_vert:Yz,background_frag:Zz,backgroundCube_vert:Jz,backgroundCube_frag:Kz,cube_vert:Qz,cube_frag:e4,depth_vert:t4,depth_frag:n4,distanceRGBA_vert:i4,distanceRGBA_frag:r4,equirect_vert:s4,equirect_frag:o4,linedashed_vert:a4,linedashed_frag:c4,meshbasic_vert:l4,meshbasic_frag:u4,meshlambert_vert:d4,meshlambert_frag:f4,meshmatcap_vert:h4,meshmatcap_frag:p4,meshnormal_vert:m4,meshnormal_frag:g4,meshphong_vert:v4,meshphong_frag:y4,meshphysical_vert:_4,meshphysical_frag:x4,meshtoon_vert:M4,meshtoon_frag:S4,points_vert:E4,points_frag:w4,shadow_vert:b4,shadow_frag:T4,sprite_vert:C4,sprite_frag:D4},Se={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Br={basic:{uniforms:ei([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:ei([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Bt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:ei([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:ei([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:ei([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Bt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:ei([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:ei([Se.points,Se.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:ei([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:ei([Se.common,Se.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:ei([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:ei([Se.sprite,Se.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:ei([Se.common,Se.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:ei([Se.lights,Se.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Br.physical={uniforms:ei([Br.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Kp={r:0,b:0,g:0},Zo=new jo,A4=new Mn;function I4(n,e,t,i,r,s,a){let l=new Bt(0),u=s===!0?0:1,f,h,m=null,g=0,v=null;function M(N){let I=N.isScene===!0?N.background:null;return I&&I.isTexture&&(I=(N.backgroundBlurriness>0?t:e).get(I)),I}function w(N){let I=!1,G=M(N);G===null?y(l,u):G&&G.isColor&&(y(G,1),I=!0);let V=n.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,a):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(N,I){let G=M(I);G&&(G.isCubeTexture||G.mapping===Mu)?(h===void 0&&(h=new tr(new Ec(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:Yo(Br.backgroundCube.uniforms),vertexShader:Br.backgroundCube.vertexShader,fragmentShader:Br.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Zo.copy(I.backgroundRotation),Zo.x*=-1,Zo.y*=-1,Zo.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Zo.y*=-1,Zo.z*=-1),h.material.uniforms.envMap.value=G,h.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(A4.makeRotationFromEuler(Zo)),h.material.toneMapped=Ut.getTransfer(G.colorSpace)!==qt,(m!==G||g!==G.version||v!==n.toneMapping)&&(h.material.needsUpdate=!0,m=G,g=G.version,v=n.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null)):G&&G.isTexture&&(f===void 0&&(f=new tr(new gu(2,2),new Mr({name:"BackgroundMaterial",uniforms:Yo(Br.background.uniforms),vertexShader:Br.background.vertexShader,fragmentShader:Br.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=G,f.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,f.material.toneMapped=Ut.getTransfer(G.colorSpace)!==qt,G.matrixAutoUpdate===!0&&G.updateMatrix(),f.material.uniforms.uvTransform.value.copy(G.matrix),(m!==G||g!==G.version||v!==n.toneMapping)&&(f.material.needsUpdate=!0,m=G,g=G.version,v=n.toneMapping),f.layers.enableAll(),N.unshift(f,f.geometry,f.material,0,0,null))}function y(N,I){N.getRGB(Kp,p0(n)),i.buffers.color.setClear(Kp.r,Kp.g,Kp.b,I,a)}function P(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return l},setClearColor:function(N,I=1){l.set(N),u=I,y(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(N){u=N,y(l,u)},render:w,addToRenderList:_,dispose:P}}function R4(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=g(null),s=r,a=!1;function l(C,k,se,J,de){let le=!1,ne=m(J,se,k);s!==ne&&(s=ne,f(s.object)),le=v(C,J,se,de),le&&M(C,J,se,de),de!==null&&e.update(de,n.ELEMENT_ARRAY_BUFFER),(le||a)&&(a=!1,I(C,k,se,J),de!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function u(){return n.createVertexArray()}function f(C){return n.bindVertexArray(C)}function h(C){return n.deleteVertexArray(C)}function m(C,k,se){let J=se.wireframe===!0,de=i[C.id];de===void 0&&(de={},i[C.id]=de);let le=de[k.id];le===void 0&&(le={},de[k.id]=le);let ne=le[J];return ne===void 0&&(ne=g(u()),le[J]=ne),ne}function g(C){let k=[],se=[],J=[];for(let de=0;de<t;de++)k[de]=0,se[de]=0,J[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:se,attributeDivisors:J,object:C,attributes:{},index:null}}function v(C,k,se,J){let de=s.attributes,le=k.attributes,ne=0,he=se.getAttributes();for(let K in he)if(he[K].location>=0){let Ne=de[K],Ve=le[K];if(Ve===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Ve=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Ve=C.instanceColor)),Ne===void 0||Ne.attribute!==Ve||Ve&&Ne.data!==Ve.data)return!0;ne++}return s.attributesNum!==ne||s.index!==J}function M(C,k,se,J){let de={},le=k.attributes,ne=0,he=se.getAttributes();for(let K in he)if(he[K].location>=0){let Ne=le[K];Ne===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Ne=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Ne=C.instanceColor));let Ve={};Ve.attribute=Ne,Ne&&Ne.data&&(Ve.data=Ne.data),de[K]=Ve,ne++}s.attributes=de,s.attributesNum=ne,s.index=J}function w(){let C=s.newAttributes;for(let k=0,se=C.length;k<se;k++)C[k]=0}function _(C){y(C,0)}function y(C,k){let se=s.newAttributes,J=s.enabledAttributes,de=s.attributeDivisors;se[C]=1,J[C]===0&&(n.enableVertexAttribArray(C),J[C]=1),de[C]!==k&&(n.vertexAttribDivisor(C,k),de[C]=k)}function P(){let C=s.newAttributes,k=s.enabledAttributes;for(let se=0,J=k.length;se<J;se++)k[se]!==C[se]&&(n.disableVertexAttribArray(se),k[se]=0)}function N(C,k,se,J,de,le,ne){ne===!0?n.vertexAttribIPointer(C,k,se,de,le):n.vertexAttribPointer(C,k,se,J,de,le)}function I(C,k,se,J){w();let de=J.attributes,le=se.getAttributes(),ne=k.defaultAttributeValues;for(let he in le){let K=le[he];if(K.location>=0){let ge=de[he];if(ge===void 0&&(he==="instanceMatrix"&&C.instanceMatrix&&(ge=C.instanceMatrix),he==="instanceColor"&&C.instanceColor&&(ge=C.instanceColor)),ge!==void 0){let Ne=ge.normalized,Ve=ge.itemSize,pt=e.get(ge);if(pt===void 0)continue;let Rt=pt.buffer,ie=pt.type,ve=pt.bytesPerElement,Pe=ie===n.INT||ie===n.UNSIGNED_INT||ge.gpuType===xp;if(ge.isInterleavedBufferAttribute){let ye=ge.data,qe=ye.stride,Mt=ge.offset;if(ye.isInstancedInterleavedBuffer){for(let We=0;We<K.locationSize;We++)y(K.location+We,ye.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let We=0;We<K.locationSize;We++)_(K.location+We);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let We=0;We<K.locationSize;We++)N(K.location+We,Ve/K.locationSize,ie,Ne,qe*ve,(Mt+Ve/K.locationSize*We)*ve,Pe)}else{if(ge.isInstancedBufferAttribute){for(let ye=0;ye<K.locationSize;ye++)y(K.location+ye,ge.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ye=0;ye<K.locationSize;ye++)_(K.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let ye=0;ye<K.locationSize;ye++)N(K.location+ye,Ve/K.locationSize,ie,Ne,Ve*ve,Ve/K.locationSize*ye*ve,Pe)}}else if(ne!==void 0){let Ne=ne[he];if(Ne!==void 0)switch(Ne.length){case 2:n.vertexAttrib2fv(K.location,Ne);break;case 3:n.vertexAttrib3fv(K.location,Ne);break;case 4:n.vertexAttrib4fv(K.location,Ne);break;default:n.vertexAttrib1fv(K.location,Ne)}}}}P()}function G(){j();for(let C in i){let k=i[C];for(let se in k){let J=k[se];for(let de in J)h(J[de].object),delete J[de];delete k[se]}delete i[C]}}function V(C){if(i[C.id]===void 0)return;let k=i[C.id];for(let se in k){let J=k[se];for(let de in J)h(J[de].object),delete J[de];delete k[se]}delete i[C.id]}function F(C){for(let k in i){let se=i[k];if(se[C.id]===void 0)continue;let J=se[C.id];for(let de in J)h(J[de].object),delete J[de];delete se[C.id]}}function j(){A(),a=!0,s!==r&&(s=r,f(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:j,resetDefaultState:A,dispose:G,releaseStatesOfGeometry:V,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:_,disableUnusedAttributes:P}}function N4(n,e,t){let i;function r(f){i=f}function s(f,h){n.drawArrays(i,f,h),t.update(h,i,1)}function a(f,h,m){m!==0&&(n.drawArraysInstanced(i,f,h,m),t.update(h,i,m))}function l(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,h,0,m);let v=0;for(let M=0;M<m;M++)v+=h[M];t.update(v,i,1)}function u(f,h,m,g){if(m===0)return;let v=e.get("WEBGL_multi_draw");if(v===null)for(let M=0;M<f.length;M++)a(f[M],h[M],g[M]);else{v.multiDrawArraysInstancedWEBGL(i,f,0,h,0,g,0,m);let M=0;for(let w=0;w<m;w++)M+=h[w]*g[w];t.update(M,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function P4(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let F=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(F){return!(F!==nr&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(F){let j=F===Cc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==kr&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ur&&!j)}function u(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp",h=u(f);h!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",h,"instead."),f=h);let m=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),v=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),N=n.getParameter(n.MAX_VARYING_VECTORS),I=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),G=M>0,V=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:l,precision:f,logarithmicDepthBuffer:m,reverseDepthBuffer:g,maxTextures:v,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:I,vertexTextures:G,maxSamples:V}}function O4(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Nr,l=new ct,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){let v=m.length!==0||g||i!==0||r;return r=g,i=m.length,v},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,g){t=h(m,g,0)},this.setState=function(m,g,v){let M=m.clippingPlanes,w=m.clipIntersection,_=m.clipShadows,y=n.get(m);if(!r||M===null||M.length===0||s&&!_)s?h(null):f();else{let P=s?0:i,N=P*4,I=y.clippingState||null;u.value=I,I=h(M,g,N,v);for(let G=0;G!==N;++G)I[G]=t[G];y.clippingState=I,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function f(){u.value!==t&&(u.value=t,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(m,g,v,M){let w=m!==null?m.length:0,_=null;if(w!==0){if(_=u.value,M!==!0||_===null){let y=v+w*4,P=g.matrixWorldInverse;l.getNormalMatrix(P),(_===null||_.length<y)&&(_=new Float32Array(y));for(let N=0,I=v;N!==w;++N,I+=4)a.copy(m[N]).applyMatrix4(P,l),a.normal.toArray(_,I),_[I+3]=a.constant}u.value=_,u.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}function L4(n){let e=new WeakMap;function t(a,l){return l===vp?a.mapping=qo:l===yp&&(a.mapping=Xo),a}function i(a){if(a&&a.isTexture){let l=a.mapping;if(l===vp||l===yp)if(e.has(a)){let u=e.get(a).texture;return t(u,a.mapping)}else{let u=a.image;if(u&&u.height>0){let f=new Xh(u.height);return f.fromEquirectangularTexture(n,a),e.set(a,f),a.addEventListener("dispose",r),t(f.texture,a.mapping)}else return null}}return a}function r(a){let l=a.target;l.removeEventListener("dispose",r);let u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Nc=4,rD=[.125,.215,.35,.446,.526,.582],Qo=20,_0=new ap,sD=new Bt,x0=null,M0=0,S0=0,E0=!1,Ko=(1+Math.sqrt(5))/2,Rc=1/Ko,oD=[new Z(-Ko,Rc,0),new Z(Ko,Rc,0),new Z(-Rc,0,Ko),new Z(Rc,0,Ko),new Z(0,Ko,-Rc),new Z(0,Ko,Rc),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],F4=new Z,tm=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:l=F4}=s;x0=this._renderer.getRenderTarget(),M0=this._renderer.getActiveCubeFace(),S0=this._renderer.getActiveMipmapLevel(),E0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,i,r,u,l),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lD(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cD(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(x0,M0,S0),this._renderer.xr.enabled=E0,e.scissorTest=!1,Qp(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qo||e.mapping===Xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),x0=this._renderer.getRenderTarget(),M0=this._renderer.getActiveCubeFace(),S0=this._renderer.getActiveMipmapLevel(),E0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_r,minFilter:_r,generateMipmaps:!1,type:Cc,format:nr,colorSpace:Go,depthBuffer:!1},r=aD(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=aD(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k4(s)),this._blurMaterial=U4(s,e,t)}return r}_compileMaterial(e){let t=new tr(this._lodPlanes[0],e);this._renderer.compile(t,_0)}_sceneToCubeUV(e,t,i,r,s){let u=new Qn(90,1,t,i),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(sD),m.toneMapping=_s,m.autoClear=!1;let M=new au({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1}),w=new tr(new Ec,M),_=!1,y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,_=!0):(M.color.copy(sD),_=!0);for(let P=0;P<6;P++){let N=P%3;N===0?(u.up.set(0,f[P],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+h[P],s.y,s.z)):N===1?(u.up.set(0,0,f[P]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+h[P],s.z)):(u.up.set(0,f[P],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+h[P]));let I=this._cubeSize;Qp(r,N*I,P>2?I:0,I,I),m.setRenderTarget(r),_&&m.render(w,u),m.render(e,u)}w.geometry.dispose(),w.material.dispose(),m.toneMapping=v,m.autoClear=g,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===qo||e.mapping===Xo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lD()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cD());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new tr(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;let u=this._cubeSize;Qp(t,0,0,3*u,2*u),i.setRenderTarget(t),i.render(a,_0)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=oD[(r-s-1)%oD.length];this._blur(e,s-1,s,a,l)}t.autoClear=i}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,l){let u=this._renderer,f=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,m=new tr(this._lodPlanes[r],f),g=f.uniforms,v=this._sizeLods[i]-1,M=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*Qo-1),w=s/M,_=isFinite(s)?1+Math.floor(h*w):Qo;_>Qo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Qo}`);let y=[],P=0;for(let F=0;F<Qo;++F){let j=F/w,A=Math.exp(-j*j/2);y.push(A),F===0?P+=A:F<_&&(P+=2*A)}for(let F=0;F<y.length;F++)y[F]=y[F]/P;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=y,g.latitudinal.value=a==="latitudinal",l&&(g.poleAxis.value=l);let{_lodMax:N}=this;g.dTheta.value=M,g.mipInt.value=N-i;let I=this._sizeLods[r],G=3*I*(r>N-Nc?r-N+Nc:0),V=4*(this._cubeSize-I);Qp(t,G,V,3*I,2*I),u.setRenderTarget(t),u.render(m,_0)}};function k4(n){let e=[],t=[],i=[],r=n,s=n-Nc+1+rD.length;for(let a=0;a<s;a++){let l=Math.pow(2,r);t.push(l);let u=1/l;a>n-Nc?u=rD[a-n+Nc-1]:a===0&&(u=0),i.push(u);let f=1/(l-2),h=-f,m=1+f,g=[h,h,m,h,m,m,h,h,m,m,h,m],v=6,M=6,w=3,_=2,y=1,P=new Float32Array(w*M*v),N=new Float32Array(_*M*v),I=new Float32Array(y*M*v);for(let V=0;V<v;V++){let F=V%3*2/3-1,j=V>2?0:-1,A=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];P.set(A,w*M*V),N.set(g,_*M*V);let C=[V,V,V,V,V,V];I.set(C,y*M*V)}let G=new xr;G.setAttribute("position",new Li(P,w)),G.setAttribute("uv",new Li(N,_)),G.setAttribute("faceIndex",new Li(I,y)),e.push(G),r>Nc&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function aD(n,e,t){let i=new Or(n,e,t);return i.texture.mapping=Mu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qp(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function U4(n,e,t){let i=new Float32Array(Qo),r=new Z(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:Qo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:P0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function cD(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:P0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function lD(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:P0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function P0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function B4(n){let e=new WeakMap,t=null;function i(l){if(l&&l.isTexture){let u=l.mapping,f=u===vp||u===yp,h=u===qo||u===Xo;if(f||h){let m=e.get(l),g=m!==void 0?m.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==g)return t===null&&(t=new tm(n)),m=f?t.fromEquirectangular(l,m):t.fromCubemap(l,m),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),m.texture;if(m!==void 0)return m.texture;{let v=l.image;return f&&v&&v.height>0||h&&v&&r(v)?(t===null&&(t=new tm(n)),m=f?t.fromEquirectangular(l):t.fromCubemap(l),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),l.addEventListener("dispose",s),m.texture):null}}}return l}function r(l){let u=0,f=6;for(let h=0;h<f;h++)l[h]!==void 0&&u++;return u===f}function s(l){let u=l.target;u.removeEventListener("dispose",s);let f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function V4(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Du("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function H4(n,e,t,i){let r={},s=new WeakMap;function a(m){let g=m.target;g.index!==null&&e.remove(g.index);for(let M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",a),delete r[g.id];let v=s.get(g);v&&(e.remove(v),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(m,g){return r[g.id]===!0||(g.addEventListener("dispose",a),r[g.id]=!0,t.memory.geometries++),g}function u(m){let g=m.attributes;for(let v in g)e.update(g[v],n.ARRAY_BUFFER)}function f(m){let g=[],v=m.index,M=m.attributes.position,w=0;if(v!==null){let P=v.array;w=v.version;for(let N=0,I=P.length;N<I;N+=3){let G=P[N+0],V=P[N+1],F=P[N+2];g.push(G,V,V,F,F,G)}}else if(M!==void 0){let P=M.array;w=M.version;for(let N=0,I=P.length/3-1;N<I;N+=3){let G=N+0,V=N+1,F=N+2;g.push(G,V,V,F,F,G)}}else return;let _=new(h0(g)?lu:cu)(g,1);_.version=w;let y=s.get(m);y&&e.remove(y),s.set(m,_)}function h(m){let g=s.get(m);if(g){let v=m.index;v!==null&&g.version<v.version&&f(m)}else f(m);return s.get(m)}return{get:l,update:u,getWireframeAttribute:h}}function z4(n,e,t){let i;function r(g){i=g}let s,a;function l(g){s=g.type,a=g.bytesPerElement}function u(g,v){n.drawElements(i,v,s,g*a),t.update(v,i,1)}function f(g,v,M){M!==0&&(n.drawElementsInstanced(i,v,s,g*a,M),t.update(v,i,M))}function h(g,v,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,s,g,0,M);let _=0;for(let y=0;y<M;y++)_+=v[y];t.update(_,i,1)}function m(g,v,M,w){if(M===0)return;let _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<g.length;y++)f(g[y]/a,v[y],w[y]);else{_.multiDrawElementsInstancedWEBGL(i,v,0,s,g,0,w,0,M);let y=0;for(let P=0;P<M;P++)y+=v[P]*w[P];t.update(y,i,1)}}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function G4(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(s/3);break;case n.LINES:t.lines+=l*(s/2);break;case n.LINE_STRIP:t.lines+=l*(s-1);break;case n.LINE_LOOP:t.lines+=l*s;break;case n.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function W4(n,e,t){let i=new WeakMap,r=new vn;function s(a,l,u){let f=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=h!==void 0?h.length:0,g=i.get(l);if(g===void 0||g.count!==m){let C=function(){j.dispose(),i.delete(l),l.removeEventListener("dispose",C)};var v=C;g!==void 0&&g.texture.dispose();let M=l.morphAttributes.position!==void 0,w=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,y=l.morphAttributes.position||[],P=l.morphAttributes.normal||[],N=l.morphAttributes.color||[],I=0;M===!0&&(I=1),w===!0&&(I=2),_===!0&&(I=3);let G=l.attributes.position.count*I,V=1;G>e.maxTextureSize&&(V=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);let F=new Float32Array(G*V*4*m),j=new ru(F,G,V,m);j.type=Ur,j.needsUpdate=!0;let A=I*4;for(let k=0;k<m;k++){let se=y[k],J=P[k],de=N[k],le=G*V*4*k;for(let ne=0;ne<se.count;ne++){let he=ne*A;M===!0&&(r.fromBufferAttribute(se,ne),F[le+he+0]=r.x,F[le+he+1]=r.y,F[le+he+2]=r.z,F[le+he+3]=0),w===!0&&(r.fromBufferAttribute(J,ne),F[le+he+4]=r.x,F[le+he+5]=r.y,F[le+he+6]=r.z,F[le+he+7]=0),_===!0&&(r.fromBufferAttribute(de,ne),F[le+he+8]=r.x,F[le+he+9]=r.y,F[le+he+10]=r.z,F[le+he+11]=de.itemSize===4?r.w:1)}}g={count:m,texture:j,size:new Zt(G,V)},i.set(l,g),l.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let M=0;for(let _=0;_<f.length;_++)M+=f[_];let w=l.morphTargetsRelative?1:1-M;u.getUniforms().setValue(n,"morphTargetBaseInfluence",w),u.getUniforms().setValue(n,"morphTargetInfluences",f)}u.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:s}}function j4(n,e,t,i){let r=new WeakMap;function s(u){let f=i.render.frame,h=u.geometry,m=e.get(u,h);if(r.get(m)!==f&&(e.update(m),r.set(m,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==f&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){let g=u.skeleton;r.get(g)!==f&&(g.update(),r.set(g,f))}return m}function a(){r=new WeakMap}function l(u){let f=u.target;f.removeEventListener("dispose",l),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:a}}var DD=new Ms,uD=new mu(1,1),AD=new ru,ID=new $h,RD=new du,dD=[],fD=[],hD=new Float32Array(16),pD=new Float32Array(9),mD=new Float32Array(4);function Oc(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=dD[r];if(s===void 0&&(s=new Float32Array(r),dD[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(s,l)}return s}function In(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function im(n,e){let t=fD[e];t===void 0&&(t=new Int32Array(e),fD[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $4(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function q4(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;n.uniform2fv(this.addr,e),Rn(t,e)}}function X4(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(In(t,e))return;n.uniform3fv(this.addr,e),Rn(t,e)}}function Y4(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;n.uniform4fv(this.addr,e),Rn(t,e)}}function Z4(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(In(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rn(t,e)}else{if(In(t,i))return;mD.set(i),n.uniformMatrix2fv(this.addr,!1,mD),Rn(t,i)}}function J4(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(In(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rn(t,e)}else{if(In(t,i))return;pD.set(i),n.uniformMatrix3fv(this.addr,!1,pD),Rn(t,i)}}function K4(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(In(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rn(t,e)}else{if(In(t,i))return;hD.set(i),n.uniformMatrix4fv(this.addr,!1,hD),Rn(t,i)}}function Q4(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function eG(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;n.uniform2iv(this.addr,e),Rn(t,e)}}function tG(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;n.uniform3iv(this.addr,e),Rn(t,e)}}function nG(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;n.uniform4iv(this.addr,e),Rn(t,e)}}function iG(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function rG(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;n.uniform2uiv(this.addr,e),Rn(t,e)}}function sG(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;n.uniform3uiv(this.addr,e),Rn(t,e)}}function oG(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;n.uniform4uiv(this.addr,e),Rn(t,e)}}function aG(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(uD.compareFunction=l0,s=uD):s=DD,t.setTexture2D(e||s,r)}function cG(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ID,r)}function lG(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||RD,r)}function uG(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||AD,r)}function dG(n){switch(n){case 5126:return $4;case 35664:return q4;case 35665:return X4;case 35666:return Y4;case 35674:return Z4;case 35675:return J4;case 35676:return K4;case 5124:case 35670:return Q4;case 35667:case 35671:return eG;case 35668:case 35672:return tG;case 35669:case 35673:return nG;case 5125:return iG;case 36294:return rG;case 36295:return sG;case 36296:return oG;case 35678:case 36198:case 36298:case 36306:case 35682:return aG;case 35679:case 36299:case 36307:return cG;case 35680:case 36300:case 36308:case 36293:return lG;case 36289:case 36303:case 36311:case 36292:return uG}}function fG(n,e){n.uniform1fv(this.addr,e)}function hG(n,e){let t=Oc(e,this.size,2);n.uniform2fv(this.addr,t)}function pG(n,e){let t=Oc(e,this.size,3);n.uniform3fv(this.addr,t)}function mG(n,e){let t=Oc(e,this.size,4);n.uniform4fv(this.addr,t)}function gG(n,e){let t=Oc(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vG(n,e){let t=Oc(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yG(n,e){let t=Oc(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _G(n,e){n.uniform1iv(this.addr,e)}function xG(n,e){n.uniform2iv(this.addr,e)}function MG(n,e){n.uniform3iv(this.addr,e)}function SG(n,e){n.uniform4iv(this.addr,e)}function EG(n,e){n.uniform1uiv(this.addr,e)}function wG(n,e){n.uniform2uiv(this.addr,e)}function bG(n,e){n.uniform3uiv(this.addr,e)}function TG(n,e){n.uniform4uiv(this.addr,e)}function CG(n,e,t){let i=this.cache,r=e.length,s=im(t,r);In(i,s)||(n.uniform1iv(this.addr,s),Rn(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||DD,s[a])}function DG(n,e,t){let i=this.cache,r=e.length,s=im(t,r);In(i,s)||(n.uniform1iv(this.addr,s),Rn(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ID,s[a])}function AG(n,e,t){let i=this.cache,r=e.length,s=im(t,r);In(i,s)||(n.uniform1iv(this.addr,s),Rn(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||RD,s[a])}function IG(n,e,t){let i=this.cache,r=e.length,s=im(t,r);In(i,s)||(n.uniform1iv(this.addr,s),Rn(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||AD,s[a])}function RG(n){switch(n){case 5126:return fG;case 35664:return hG;case 35665:return pG;case 35666:return mG;case 35674:return gG;case 35675:return vG;case 35676:return yG;case 5124:case 35670:return _G;case 35667:case 35671:return xG;case 35668:case 35672:return MG;case 35669:case 35673:return SG;case 5125:return EG;case 36294:return wG;case 36295:return bG;case 36296:return TG;case 35678:case 36198:case 36298:case 36306:case 35682:return CG;case 35679:case 36299:case 36307:return DG;case 35680:case 36300:case 36308:case 36293:return AG;case 36289:case 36303:case 36311:case 36292:return IG}}var b0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=dG(t.type)}},T0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RG(t.type)}},C0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let l=r[s];l.setValue(e,t[l.id],i)}}},w0=/(\w+)(\])?(\[|\.)?/g;function gD(n,e){n.seq.push(e),n.map[e.id]=e}function NG(n,e,t){let i=n.name,r=i.length;for(w0.lastIndex=0;;){let s=w0.exec(i),a=w0.lastIndex,l=s[1],u=s[2]==="]",f=s[3];if(u&&(l=l|0),f===void 0||f==="["&&a+2===r){gD(t,f===void 0?new b0(l,n,e):new T0(l,n,e));break}else{let m=t.map[l];m===void 0&&(m=new C0(l),gD(t,m)),t=m}}}var Pc=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);NG(s,a,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let l=t[s],u=i[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function vD(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var PG=37297,OG=0;function LG(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let l=a+1;i.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}var yD=new ct;function FG(n){Ut._getMatrix(yD,Ut.workingColorSpace,n);let e=`mat3( ${yD.elements.map(t=>t.toFixed(4))} )`;switch(Ut.getTransfer(n)){case nu:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function _D(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+LG(n.getShaderSource(e),a)}else return r}function kG(n,e){let t=FG(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function UG(n,e){let t;switch(e){case NC:t="Linear";break;case PC:t="Reinhard";break;case OC:t="Cineon";break;case LC:t="ACESFilmic";break;case kC:t="AgX";break;case UC:t="Neutral";break;case FC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var em=new Z;function BG(){Ut.getLuminanceCoefficients(em);let n=em.x.toFixed(4),e=em.y.toFixed(4),t=em.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VG(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Au).join(`
`)}function HG(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zG(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,l=1;s.type===n.FLOAT_MAT2&&(l=2),s.type===n.FLOAT_MAT3&&(l=3),s.type===n.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function Au(n){return n!==""}function xD(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function MD(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var GG=/^[ \t]*#include +<([\w\d./]+)>/gm;function D0(n){return n.replace(GG,jG)}var WG=new Map;function jG(n,e){let t=ht[e];if(t===void 0){let i=WG.get(e);if(i!==void 0)t=ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return D0(t)}var $G=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function SD(n){return n.replace($G,qG)}function qG(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ED(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XG(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Y_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===dC?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Lr&&(e="SHADOWMAP_TYPE_VSM"),e}function YG(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qo:case Xo:e="ENVMAP_TYPE_CUBE";break;case Mu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZG(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xo:e="ENVMAP_MODE_REFRACTION";break}return e}function JG(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case K_:e="ENVMAP_BLENDING_MULTIPLY";break;case IC:e="ENVMAP_BLENDING_MIX";break;case RC:e="ENVMAP_BLENDING_ADD";break}return e}function KG(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function QG(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,l=t.fragmentShader,u=XG(t),f=YG(t),h=ZG(t),m=JG(t),g=KG(t),v=VG(t),M=HG(s),w=r.createProgram(),_,y,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Au).join(`
`),_.length>0&&(_+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Au).join(`
`),y.length>0&&(y+=`
`)):(_=[ED(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Au).join(`
`),y=[ED(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_s?"#define TONE_MAPPING":"",t.toneMapping!==_s?ht.tonemapping_pars_fragment:"",t.toneMapping!==_s?UG("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,kG("linearToOutputTexel",t.outputColorSpace),BG(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Au).join(`
`)),a=D0(a),a=xD(a,t),a=MD(a,t),l=D0(l),l=xD(l,t),l=MD(l,t),a=SD(a),l=SD(l),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,_=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,y=["#define varying in",t.glslVersion===u0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===u0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let N=P+_+a,I=P+y+l,G=vD(r,r.VERTEX_SHADER,N),V=vD(r,r.FRAGMENT_SHADER,I);r.attachShader(w,G),r.attachShader(w,V),t.index0AttributeName!==void 0?r.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function F(k){if(n.debug.checkShaderErrors){let se=r.getProgramInfoLog(w).trim(),J=r.getShaderInfoLog(G).trim(),de=r.getShaderInfoLog(V).trim(),le=!0,ne=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(le=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,w,G,V);else{let he=_D(r,G,"vertex"),K=_D(r,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+se+`
`+he+`
`+K)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(J===""||de==="")&&(ne=!1);ne&&(k.diagnostics={runnable:le,programLog:se,vertexShader:{log:J,prefix:_},fragmentShader:{log:de,prefix:y}})}r.deleteShader(G),r.deleteShader(V),j=new Pc(r,w),A=zG(r,w)}let j;this.getUniforms=function(){return j===void 0&&F(this),j};let A;this.getAttributes=function(){return A===void 0&&F(this),A};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(w,PG)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OG++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=G,this.fragmentShader=V,this}var eW=0,A0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new I0(e),t.set(e,i)),i}},I0=class{constructor(e){this.id=eW++,this.code=e,this.usedTimes=0}};function tW(n,e,t,i,r,s,a){let l=new ou,u=new A0,f=new Set,h=[],m=r.logarithmicDepthBuffer,g=r.vertexTextures,v=r.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(A){return f.add(A),A===0?"uv":`uv${A}`}function _(A,C,k,se,J){let de=se.fog,le=J.geometry,ne=A.isMeshStandardMaterial?se.environment:null,he=(A.isMeshStandardMaterial?t:e).get(A.envMap||ne),K=he&&he.mapping===Mu?he.image.height:null,ge=M[A.type];A.precision!==null&&(v=r.getMaxPrecision(A.precision),v!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));let Ne=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ve=Ne!==void 0?Ne.length:0,pt=0;le.morphAttributes.position!==void 0&&(pt=1),le.morphAttributes.normal!==void 0&&(pt=2),le.morphAttributes.color!==void 0&&(pt=3);let Rt,ie,ve,Pe;if(ge){let Ht=Br[ge];Rt=Ht.vertexShader,ie=Ht.fragmentShader}else Rt=A.vertexShader,ie=A.fragmentShader,u.update(A),ve=u.getVertexShaderID(A),Pe=u.getFragmentShaderID(A);let ye=n.getRenderTarget(),qe=n.state.buffers.depth.getReversed(),Mt=J.isInstancedMesh===!0,We=J.isBatchedMesh===!0,an=!!A.map,Dt=!!A.matcap,dt=!!he,L=!!A.aoMap,hn=!!A.lightMap,St=!!A.bumpMap,Et=!!A.normalMap,Be=!!A.displacementMap,yt=!!A.emissiveMap,Fe=!!A.metalnessMap,D=!!A.roughnessMap,S=A.anisotropy>0,$=A.clearcoat>0,ae=A.dispersion>0,ue=A.iridescence>0,te=A.sheen>0,ke=A.transmission>0,_e=S&&!!A.anisotropyMap,Ce=$&&!!A.clearcoatMap,_t=$&&!!A.clearcoatNormalMap,me=$&&!!A.clearcoatRoughnessMap,Ae=ue&&!!A.iridescenceMap,je=ue&&!!A.iridescenceThicknessMap,Ze=te&&!!A.sheenColorMap,Ie=te&&!!A.sheenRoughnessMap,wt=!!A.specularMap,ot=!!A.specularColorMap,Xt=!!A.specularIntensityMap,U=ke&&!!A.transmissionMap,Ee=ke&&!!A.thicknessMap,Q=!!A.gradientMap,ce=!!A.alphaMap,Te=A.alphaTest>0,we=!!A.alphaHash,tt=!!A.extensions,cn=_s;A.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(cn=n.toneMapping);let Nn={shaderID:ge,shaderType:A.type,shaderName:A.name,vertexShader:Rt,fragmentShader:ie,defines:A.defines,customVertexShaderID:ve,customFragmentShaderID:Pe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:We,batchingColor:We&&J._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&J.instanceColor!==null,instancingMorph:Mt&&J.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Go,alphaToCoverage:!!A.alphaToCoverage,map:an,matcap:Dt,envMap:dt,envMapMode:dt&&he.mapping,envMapCubeUVHeight:K,aoMap:L,lightMap:hn,bumpMap:St,normalMap:Et,displacementMap:g&&Be,emissiveMap:yt,normalMapObjectSpace:Et&&A.normalMapType===GC,normalMapTangentSpace:Et&&A.normalMapType===zC,metalnessMap:Fe,roughnessMap:D,anisotropy:S,anisotropyMap:_e,clearcoat:$,clearcoatMap:Ce,clearcoatNormalMap:_t,clearcoatRoughnessMap:me,dispersion:ae,iridescence:ue,iridescenceMap:Ae,iridescenceThicknessMap:je,sheen:te,sheenColorMap:Ze,sheenRoughnessMap:Ie,specularMap:wt,specularColorMap:ot,specularIntensityMap:Xt,transmission:ke,transmissionMap:U,thicknessMap:Ee,gradientMap:Q,opaque:A.transparent===!1&&A.blending===Ho&&A.alphaToCoverage===!1,alphaMap:ce,alphaTest:Te,alphaHash:we,combine:A.combine,mapUv:an&&w(A.map.channel),aoMapUv:L&&w(A.aoMap.channel),lightMapUv:hn&&w(A.lightMap.channel),bumpMapUv:St&&w(A.bumpMap.channel),normalMapUv:Et&&w(A.normalMap.channel),displacementMapUv:Be&&w(A.displacementMap.channel),emissiveMapUv:yt&&w(A.emissiveMap.channel),metalnessMapUv:Fe&&w(A.metalnessMap.channel),roughnessMapUv:D&&w(A.roughnessMap.channel),anisotropyMapUv:_e&&w(A.anisotropyMap.channel),clearcoatMapUv:Ce&&w(A.clearcoatMap.channel),clearcoatNormalMapUv:_t&&w(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&w(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&w(A.iridescenceMap.channel),iridescenceThicknessMapUv:je&&w(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&w(A.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&w(A.sheenRoughnessMap.channel),specularMapUv:wt&&w(A.specularMap.channel),specularColorMapUv:ot&&w(A.specularColorMap.channel),specularIntensityMapUv:Xt&&w(A.specularIntensityMap.channel),transmissionMapUv:U&&w(A.transmissionMap.channel),thicknessMapUv:Ee&&w(A.thicknessMap.channel),alphaMapUv:ce&&w(A.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Et||S),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!le.attributes.uv&&(an||ce),fog:!!de,useFog:A.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:qe,skinning:J.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:pt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:cn,decodeVideoTexture:an&&A.map.isVideoTexture===!0&&Ut.getTransfer(A.map.colorSpace)===qt,decodeVideoTextureEmissive:yt&&A.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(A.emissiveMap.colorSpace)===qt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Fr,flipSided:A.side===li,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:tt&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&A.extensions.multiDraw===!0||We)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Nn.vertexUv1s=f.has(1),Nn.vertexUv2s=f.has(2),Nn.vertexUv3s=f.has(3),f.clear(),Nn}function y(A){let C=[];if(A.shaderID?C.push(A.shaderID):(C.push(A.customVertexShaderID),C.push(A.customFragmentShaderID)),A.defines!==void 0)for(let k in A.defines)C.push(k),C.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(P(C,A),N(C,A),C.push(n.outputColorSpace)),C.push(A.customProgramCacheKey),C.join()}function P(A,C){A.push(C.precision),A.push(C.outputColorSpace),A.push(C.envMapMode),A.push(C.envMapCubeUVHeight),A.push(C.mapUv),A.push(C.alphaMapUv),A.push(C.lightMapUv),A.push(C.aoMapUv),A.push(C.bumpMapUv),A.push(C.normalMapUv),A.push(C.displacementMapUv),A.push(C.emissiveMapUv),A.push(C.metalnessMapUv),A.push(C.roughnessMapUv),A.push(C.anisotropyMapUv),A.push(C.clearcoatMapUv),A.push(C.clearcoatNormalMapUv),A.push(C.clearcoatRoughnessMapUv),A.push(C.iridescenceMapUv),A.push(C.iridescenceThicknessMapUv),A.push(C.sheenColorMapUv),A.push(C.sheenRoughnessMapUv),A.push(C.specularMapUv),A.push(C.specularColorMapUv),A.push(C.specularIntensityMapUv),A.push(C.transmissionMapUv),A.push(C.thicknessMapUv),A.push(C.combine),A.push(C.fogExp2),A.push(C.sizeAttenuation),A.push(C.morphTargetsCount),A.push(C.morphAttributeCount),A.push(C.numDirLights),A.push(C.numPointLights),A.push(C.numSpotLights),A.push(C.numSpotLightMaps),A.push(C.numHemiLights),A.push(C.numRectAreaLights),A.push(C.numDirLightShadows),A.push(C.numPointLightShadows),A.push(C.numSpotLightShadows),A.push(C.numSpotLightShadowsWithMaps),A.push(C.numLightProbes),A.push(C.shadowMapType),A.push(C.toneMapping),A.push(C.numClippingPlanes),A.push(C.numClipIntersection),A.push(C.depthPacking)}function N(A,C){l.disableAll(),C.supportsVertexTextures&&l.enable(0),C.instancing&&l.enable(1),C.instancingColor&&l.enable(2),C.instancingMorph&&l.enable(3),C.matcap&&l.enable(4),C.envMap&&l.enable(5),C.normalMapObjectSpace&&l.enable(6),C.normalMapTangentSpace&&l.enable(7),C.clearcoat&&l.enable(8),C.iridescence&&l.enable(9),C.alphaTest&&l.enable(10),C.vertexColors&&l.enable(11),C.vertexAlphas&&l.enable(12),C.vertexUv1s&&l.enable(13),C.vertexUv2s&&l.enable(14),C.vertexUv3s&&l.enable(15),C.vertexTangents&&l.enable(16),C.anisotropy&&l.enable(17),C.alphaHash&&l.enable(18),C.batching&&l.enable(19),C.dispersion&&l.enable(20),C.batchingColor&&l.enable(21),A.push(l.mask),l.disableAll(),C.fog&&l.enable(0),C.useFog&&l.enable(1),C.flatShading&&l.enable(2),C.logarithmicDepthBuffer&&l.enable(3),C.reverseDepthBuffer&&l.enable(4),C.skinning&&l.enable(5),C.morphTargets&&l.enable(6),C.morphNormals&&l.enable(7),C.morphColors&&l.enable(8),C.premultipliedAlpha&&l.enable(9),C.shadowMapEnabled&&l.enable(10),C.doubleSided&&l.enable(11),C.flipSided&&l.enable(12),C.useDepthPacking&&l.enable(13),C.dithering&&l.enable(14),C.transmission&&l.enable(15),C.sheen&&l.enable(16),C.opaque&&l.enable(17),C.pointsUvs&&l.enable(18),C.decodeVideoTexture&&l.enable(19),C.decodeVideoTextureEmissive&&l.enable(20),C.alphaToCoverage&&l.enable(21),A.push(l.mask)}function I(A){let C=M[A.type],k;if(C){let se=Br[C];k=nD.clone(se.uniforms)}else k=A.uniforms;return k}function G(A,C){let k;for(let se=0,J=h.length;se<J;se++){let de=h[se];if(de.cacheKey===C){k=de,++k.usedTimes;break}}return k===void 0&&(k=new QG(n,C,A,s),h.push(k)),k}function V(A){if(--A.usedTimes===0){let C=h.indexOf(A);h[C]=h[h.length-1],h.pop(),A.destroy()}}function F(A){u.remove(A)}function j(){u.dispose()}return{getParameters:_,getProgramCacheKey:y,getUniforms:I,acquireProgram:G,releaseProgram:V,releaseShaderCache:F,programs:h,dispose:j}}function nW(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function r(a,l,u){n.get(a)[l]=u}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function iW(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function wD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bD(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(m,g,v,M,w,_){let y=n[e];return y===void 0?(y={id:m.id,object:m,geometry:g,material:v,groupOrder:M,renderOrder:m.renderOrder,z:w,group:_},n[e]=y):(y.id=m.id,y.object=m,y.geometry=g,y.material=v,y.groupOrder=M,y.renderOrder=m.renderOrder,y.z=w,y.group=_),e++,y}function l(m,g,v,M,w,_){let y=a(m,g,v,M,w,_);v.transmission>0?i.push(y):v.transparent===!0?r.push(y):t.push(y)}function u(m,g,v,M,w,_){let y=a(m,g,v,M,w,_);v.transmission>0?i.unshift(y):v.transparent===!0?r.unshift(y):t.unshift(y)}function f(m,g){t.length>1&&t.sort(m||iW),i.length>1&&i.sort(g||wD),r.length>1&&r.sort(g||wD)}function h(){for(let m=e,g=n.length;m<g;m++){let v=n[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:h,sort:f}}function rW(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new bD,n.set(i,[a])):r>=s.length?(a=new bD,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function sW(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Bt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":t={color:new Bt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[e.id]=t,t}}}function oW(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var aW=0;function cW(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lW(n){let e=new sW,t=oW(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new Z);let r=new Z,s=new Mn,a=new Mn;function l(f){let h=0,m=0,g=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let v=0,M=0,w=0,_=0,y=0,P=0,N=0,I=0,G=0,V=0,F=0;f.sort(cW);for(let A=0,C=f.length;A<C;A++){let k=f[A],se=k.color,J=k.intensity,de=k.distance,le=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=se.r*J,m+=se.g*J,g+=se.b*J;else if(k.isLightProbe){for(let ne=0;ne<9;ne++)i.probe[ne].addScaledVector(k.sh.coefficients[ne],J);F++}else if(k.isDirectionalLight){let ne=e.get(k);if(ne.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let he=k.shadow,K=t.get(k);K.shadowIntensity=he.intensity,K.shadowBias=he.bias,K.shadowNormalBias=he.normalBias,K.shadowRadius=he.radius,K.shadowMapSize=he.mapSize,i.directionalShadow[v]=K,i.directionalShadowMap[v]=le,i.directionalShadowMatrix[v]=k.shadow.matrix,P++}i.directional[v]=ne,v++}else if(k.isSpotLight){let ne=e.get(k);ne.position.setFromMatrixPosition(k.matrixWorld),ne.color.copy(se).multiplyScalar(J),ne.distance=de,ne.coneCos=Math.cos(k.angle),ne.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ne.decay=k.decay,i.spot[w]=ne;let he=k.shadow;if(k.map&&(i.spotLightMap[G]=k.map,G++,he.updateMatrices(k),k.castShadow&&V++),i.spotLightMatrix[w]=he.matrix,k.castShadow){let K=t.get(k);K.shadowIntensity=he.intensity,K.shadowBias=he.bias,K.shadowNormalBias=he.normalBias,K.shadowRadius=he.radius,K.shadowMapSize=he.mapSize,i.spotShadow[w]=K,i.spotShadowMap[w]=le,I++}w++}else if(k.isRectAreaLight){let ne=e.get(k);ne.color.copy(se).multiplyScalar(J),ne.halfWidth.set(k.width*.5,0,0),ne.halfHeight.set(0,k.height*.5,0),i.rectArea[_]=ne,_++}else if(k.isPointLight){let ne=e.get(k);if(ne.color.copy(k.color).multiplyScalar(k.intensity),ne.distance=k.distance,ne.decay=k.decay,k.castShadow){let he=k.shadow,K=t.get(k);K.shadowIntensity=he.intensity,K.shadowBias=he.bias,K.shadowNormalBias=he.normalBias,K.shadowRadius=he.radius,K.shadowMapSize=he.mapSize,K.shadowCameraNear=he.camera.near,K.shadowCameraFar=he.camera.far,i.pointShadow[M]=K,i.pointShadowMap[M]=le,i.pointShadowMatrix[M]=k.shadow.matrix,N++}i.point[M]=ne,M++}else if(k.isHemisphereLight){let ne=e.get(k);ne.skyColor.copy(k.color).multiplyScalar(J),ne.groundColor.copy(k.groundColor).multiplyScalar(J),i.hemi[y]=ne,y++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;let j=i.hash;(j.directionalLength!==v||j.pointLength!==M||j.spotLength!==w||j.rectAreaLength!==_||j.hemiLength!==y||j.numDirectionalShadows!==P||j.numPointShadows!==N||j.numSpotShadows!==I||j.numSpotMaps!==G||j.numLightProbes!==F)&&(i.directional.length=v,i.spot.length=w,i.rectArea.length=_,i.point.length=M,i.hemi.length=y,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=N,i.pointShadowMap.length=N,i.spotShadow.length=I,i.spotShadowMap.length=I,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=N,i.spotLightMatrix.length=I+G-V,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=V,i.numLightProbes=F,j.directionalLength=v,j.pointLength=M,j.spotLength=w,j.rectAreaLength=_,j.hemiLength=y,j.numDirectionalShadows=P,j.numPointShadows=N,j.numSpotShadows=I,j.numSpotMaps=G,j.numLightProbes=F,i.version=aW++)}function u(f,h){let m=0,g=0,v=0,M=0,w=0,_=h.matrixWorldInverse;for(let y=0,P=f.length;y<P;y++){let N=f[y];if(N.isDirectionalLight){let I=i.directional[m];I.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(_),m++}else if(N.isSpotLight){let I=i.spot[v];I.position.setFromMatrixPosition(N.matrixWorld),I.position.applyMatrix4(_),I.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(_),v++}else if(N.isRectAreaLight){let I=i.rectArea[M];I.position.setFromMatrixPosition(N.matrixWorld),I.position.applyMatrix4(_),a.identity(),s.copy(N.matrixWorld),s.premultiply(_),a.extractRotation(s),I.halfWidth.set(N.width*.5,0,0),I.halfHeight.set(0,N.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),M++}else if(N.isPointLight){let I=i.point[g];I.position.setFromMatrixPosition(N.matrixWorld),I.position.applyMatrix4(_),g++}else if(N.isHemisphereLight){let I=i.hemi[w];I.direction.setFromMatrixPosition(N.matrixWorld),I.direction.transformDirection(_),w++}}}return{setup:l,setupView:u,state:i}}function TD(n){let e=new lW(n),t=[],i=[];function r(h){f.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function uW(n){let e=new WeakMap;function t(r,s=0){let a=e.get(r),l;return a===void 0?(l=new TD(n),e.set(r,[l])):s>=a.length?(l=new TD(n),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:t,dispose:i}}var dW=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fW=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hW(n,e,t){let i=new hu,r=new Zt,s=new Zt,a=new vn,l=new Yh({depthPacking:HC}),u=new Zh,f={},h=t.maxTextureSize,m={[ms]:li,[li]:ms,[Fr]:Fr},g=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:dW,fragmentShader:fW}),v=g.clone();v.defines.HORIZONTAL_PASS=1;let M=new xr;M.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new tr(M,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Y_;let y=this.type;this.render=function(V,F,j){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||V.length===0)return;let A=n.getRenderTarget(),C=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),se=n.state;se.setBlending(ys),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);let J=y!==Lr&&this.type===Lr,de=y===Lr&&this.type!==Lr;for(let le=0,ne=V.length;le<ne;le++){let he=V[le],K=he.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);let ge=K.getFrameExtents();if(r.multiply(ge),s.copy(K.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ge.x),r.x=s.x*ge.x,K.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ge.y),r.y=s.y*ge.y,K.mapSize.y=s.y)),K.map===null||J===!0||de===!0){let Ve=this.type!==Lr?{minFilter:er,magFilter:er}:{};K.map!==null&&K.map.dispose(),K.map=new Or(r.x,r.y,Ve),K.map.texture.name=he.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();let Ne=K.getViewportCount();for(let Ve=0;Ve<Ne;Ve++){let pt=K.getViewport(Ve);a.set(s.x*pt.x,s.y*pt.y,s.x*pt.z,s.y*pt.w),se.viewport(a),K.updateMatrices(he,Ve),i=K.getFrustum(),I(F,j,K.camera,he,this.type)}K.isPointLightShadow!==!0&&this.type===Lr&&P(K,j),K.needsUpdate=!1}y=this.type,_.needsUpdate=!1,n.setRenderTarget(A,C,k)};function P(V,F){let j=e.update(w);g.defines.VSM_SAMPLES!==V.blurSamples&&(g.defines.VSM_SAMPLES=V.blurSamples,v.defines.VSM_SAMPLES=V.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Or(r.x,r.y)),g.uniforms.shadow_pass.value=V.map.texture,g.uniforms.resolution.value=V.mapSize,g.uniforms.radius.value=V.radius,n.setRenderTarget(V.mapPass),n.clear(),n.renderBufferDirect(F,null,j,g,w,null),v.uniforms.shadow_pass.value=V.mapPass.texture,v.uniforms.resolution.value=V.mapSize,v.uniforms.radius.value=V.radius,n.setRenderTarget(V.map),n.clear(),n.renderBufferDirect(F,null,j,v,w,null)}function N(V,F,j,A){let C=null,k=j.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(k!==void 0)C=k;else if(C=j.isPointLight===!0?u:l,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){let se=C.uuid,J=F.uuid,de=f[se];de===void 0&&(de={},f[se]=de);let le=de[J];le===void 0&&(le=C.clone(),de[J]=le,F.addEventListener("dispose",G)),C=le}if(C.visible=F.visible,C.wireframe=F.wireframe,A===Lr?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:m[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,j.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let se=n.properties.get(C);se.light=j}return C}function I(V,F,j,A,C){if(V.visible===!1)return;if(V.layers.test(F.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&C===Lr)&&(!V.frustumCulled||i.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,V.matrixWorld);let J=e.update(V),de=V.material;if(Array.isArray(de)){let le=J.groups;for(let ne=0,he=le.length;ne<he;ne++){let K=le[ne],ge=de[K.materialIndex];if(ge&&ge.visible){let Ne=N(V,ge,A,C);V.onBeforeShadow(n,V,F,j,J,Ne,K),n.renderBufferDirect(j,null,J,Ne,V,K),V.onAfterShadow(n,V,F,j,J,Ne,K)}}}else if(de.visible){let le=N(V,de,A,C);V.onBeforeShadow(n,V,F,j,J,le,null),n.renderBufferDirect(j,null,J,le,V,null),V.onAfterShadow(n,V,F,j,J,le,null)}}let se=V.children;for(let J=0,de=se.length;J<de;J++)I(se[J],F,j,A,C)}function G(V){V.target.removeEventListener("dispose",G);for(let j in f){let A=f[j],C=V.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}var pW={[up]:dp,[fp]:mp,[hp]:gp,[zo]:pp,[dp]:up,[mp]:fp,[gp]:hp,[pp]:zo};function mW(n,e){function t(){let U=!1,Ee=new vn,Q=null,ce=new vn(0,0,0,0);return{setMask:function(Te){Q!==Te&&!U&&(n.colorMask(Te,Te,Te,Te),Q=Te)},setLocked:function(Te){U=Te},setClear:function(Te,we,tt,cn,Nn){Nn===!0&&(Te*=cn,we*=cn,tt*=cn),Ee.set(Te,we,tt,cn),ce.equals(Ee)===!1&&(n.clearColor(Te,we,tt,cn),ce.copy(Ee))},reset:function(){U=!1,Q=null,ce.set(-1,0,0,0)}}}function i(){let U=!1,Ee=!1,Q=null,ce=null,Te=null;return{setReversed:function(we){if(Ee!==we){let tt=e.get("EXT_clip_control");we?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),Ee=we;let cn=Te;Te=null,this.setClear(cn)}},getReversed:function(){return Ee},setTest:function(we){we?ye(n.DEPTH_TEST):qe(n.DEPTH_TEST)},setMask:function(we){Q!==we&&!U&&(n.depthMask(we),Q=we)},setFunc:function(we){if(Ee&&(we=pW[we]),ce!==we){switch(we){case up:n.depthFunc(n.NEVER);break;case dp:n.depthFunc(n.ALWAYS);break;case fp:n.depthFunc(n.LESS);break;case zo:n.depthFunc(n.LEQUAL);break;case hp:n.depthFunc(n.EQUAL);break;case pp:n.depthFunc(n.GEQUAL);break;case mp:n.depthFunc(n.GREATER);break;case gp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=we}},setLocked:function(we){U=we},setClear:function(we){Te!==we&&(Ee&&(we=1-we),n.clearDepth(we),Te=we)},reset:function(){U=!1,Q=null,ce=null,Te=null,Ee=!1}}}function r(){let U=!1,Ee=null,Q=null,ce=null,Te=null,we=null,tt=null,cn=null,Nn=null;return{setTest:function(Ht){U||(Ht?ye(n.STENCIL_TEST):qe(n.STENCIL_TEST))},setMask:function(Ht){Ee!==Ht&&!U&&(n.stencilMask(Ht),Ee=Ht)},setFunc:function(Ht,ti,ir){(Q!==Ht||ce!==ti||Te!==ir)&&(n.stencilFunc(Ht,ti,ir),Q=Ht,ce=ti,Te=ir)},setOp:function(Ht,ti,ir){(we!==Ht||tt!==ti||cn!==ir)&&(n.stencilOp(Ht,ti,ir),we=Ht,tt=ti,cn=ir)},setLocked:function(Ht){U=Ht},setClear:function(Ht){Nn!==Ht&&(n.clearStencil(Ht),Nn=Ht)},reset:function(){U=!1,Ee=null,Q=null,ce=null,Te=null,we=null,tt=null,cn=null,Nn=null}}}let s=new t,a=new i,l=new r,u=new WeakMap,f=new WeakMap,h={},m={},g=new WeakMap,v=[],M=null,w=!1,_=null,y=null,P=null,N=null,I=null,G=null,V=null,F=new Bt(0,0,0),j=0,A=!1,C=null,k=null,se=null,J=null,de=null,le=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,he=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(K)[1]),ne=he>=1):K.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),ne=he>=2);let ge=null,Ne={},Ve=n.getParameter(n.SCISSOR_BOX),pt=n.getParameter(n.VIEWPORT),Rt=new vn().fromArray(Ve),ie=new vn().fromArray(pt);function ve(U,Ee,Q,ce){let Te=new Uint8Array(4),we=n.createTexture();n.bindTexture(U,we),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<Q;tt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(Ee+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return we}let Pe={};Pe[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),Pe[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pe[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ye(n.DEPTH_TEST),a.setFunc(zo),St(!1),Et(X_),ye(n.CULL_FACE),L(ys);function ye(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function qe(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Mt(U,Ee){return m[U]!==Ee?(n.bindFramebuffer(U,Ee),m[U]=Ee,U===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Ee),U===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function We(U,Ee){let Q=v,ce=!1;if(U){Q=g.get(Ee),Q===void 0&&(Q=[],g.set(Ee,Q));let Te=U.textures;if(Q.length!==Te.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let we=0,tt=Te.length;we<tt;we++)Q[we]=n.COLOR_ATTACHMENT0+we;Q.length=Te.length,ce=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,ce=!0);ce&&n.drawBuffers(Q)}function an(U){return M!==U?(n.useProgram(U),M=U,!0):!1}let Dt={[to]:n.FUNC_ADD,[hC]:n.FUNC_SUBTRACT,[pC]:n.FUNC_REVERSE_SUBTRACT};Dt[mC]=n.MIN,Dt[gC]=n.MAX;let dt={[vC]:n.ZERO,[yC]:n.ONE,[_C]:n.SRC_COLOR,[Bh]:n.SRC_ALPHA,[bC]:n.SRC_ALPHA_SATURATE,[EC]:n.DST_COLOR,[MC]:n.DST_ALPHA,[xC]:n.ONE_MINUS_SRC_COLOR,[Vh]:n.ONE_MINUS_SRC_ALPHA,[wC]:n.ONE_MINUS_DST_COLOR,[SC]:n.ONE_MINUS_DST_ALPHA,[TC]:n.CONSTANT_COLOR,[CC]:n.ONE_MINUS_CONSTANT_COLOR,[DC]:n.CONSTANT_ALPHA,[AC]:n.ONE_MINUS_CONSTANT_ALPHA};function L(U,Ee,Q,ce,Te,we,tt,cn,Nn,Ht){if(U===ys){w===!0&&(qe(n.BLEND),w=!1);return}if(w===!1&&(ye(n.BLEND),w=!0),U!==fC){if(U!==_||Ht!==A){if((y!==to||I!==to)&&(n.blendEquation(n.FUNC_ADD),y=to,I=to),Ht)switch(U){case Ho:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xu:n.blendFunc(n.ONE,n.ONE);break;case Z_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case J_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ho:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Z_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case J_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}P=null,N=null,G=null,V=null,F.set(0,0,0),j=0,_=U,A=Ht}return}Te=Te||Ee,we=we||Q,tt=tt||ce,(Ee!==y||Te!==I)&&(n.blendEquationSeparate(Dt[Ee],Dt[Te]),y=Ee,I=Te),(Q!==P||ce!==N||we!==G||tt!==V)&&(n.blendFuncSeparate(dt[Q],dt[ce],dt[we],dt[tt]),P=Q,N=ce,G=we,V=tt),(cn.equals(F)===!1||Nn!==j)&&(n.blendColor(cn.r,cn.g,cn.b,Nn),F.copy(cn),j=Nn),_=U,A=!1}function hn(U,Ee){U.side===Fr?qe(n.CULL_FACE):ye(n.CULL_FACE);let Q=U.side===li;Ee&&(Q=!Q),St(Q),U.blending===Ho&&U.transparent===!1?L(ys):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);let ce=U.stencilWrite;l.setTest(ce),ce&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),yt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function St(U){C!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),C=U)}function Et(U){U!==lC?(ye(n.CULL_FACE),U!==k&&(U===X_?n.cullFace(n.BACK):U===uC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):qe(n.CULL_FACE),k=U}function Be(U){U!==se&&(ne&&n.lineWidth(U),se=U)}function yt(U,Ee,Q){U?(ye(n.POLYGON_OFFSET_FILL),(J!==Ee||de!==Q)&&(n.polygonOffset(Ee,Q),J=Ee,de=Q)):qe(n.POLYGON_OFFSET_FILL)}function Fe(U){U?ye(n.SCISSOR_TEST):qe(n.SCISSOR_TEST)}function D(U){U===void 0&&(U=n.TEXTURE0+le-1),ge!==U&&(n.activeTexture(U),ge=U)}function S(U,Ee,Q){Q===void 0&&(ge===null?Q=n.TEXTURE0+le-1:Q=ge);let ce=Ne[Q];ce===void 0&&(ce={type:void 0,texture:void 0},Ne[Q]=ce),(ce.type!==U||ce.texture!==Ee)&&(ge!==Q&&(n.activeTexture(Q),ge=Q),n.bindTexture(U,Ee||Pe[U]),ce.type=U,ce.texture=Ee)}function $(){let U=Ne[ge];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ae(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ze(U){Rt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Rt.copy(U))}function Ie(U){ie.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ie.copy(U))}function wt(U,Ee){let Q=f.get(Ee);Q===void 0&&(Q=new WeakMap,f.set(Ee,Q));let ce=Q.get(U);ce===void 0&&(ce=n.getUniformBlockIndex(Ee,U.name),Q.set(U,ce))}function ot(U,Ee){let ce=f.get(Ee).get(U);u.get(Ee)!==ce&&(n.uniformBlockBinding(Ee,ce,U.__bindingPointIndex),u.set(Ee,ce))}function Xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ge=null,Ne={},m={},g=new WeakMap,v=[],M=null,w=!1,_=null,y=null,P=null,N=null,I=null,G=null,V=null,F=new Bt(0,0,0),j=0,A=!1,C=null,k=null,se=null,J=null,de=null,Rt.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:ye,disable:qe,bindFramebuffer:Mt,drawBuffers:We,useProgram:an,setBlending:L,setMaterial:hn,setFlipSided:St,setCullFace:Et,setLineWidth:Be,setPolygonOffset:yt,setScissorTest:Fe,activeTexture:D,bindTexture:S,unbindTexture:$,compressedTexImage2D:ae,compressedTexImage3D:ue,texImage2D:Ae,texImage3D:je,updateUBOMapping:wt,uniformBlockBinding:ot,texStorage2D:_t,texStorage3D:me,texSubImage2D:te,texSubImage3D:ke,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ce,scissor:Ze,viewport:Ie,reset:Xt}}function gW(n,e,t,i,r,s,a){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Zt,h=new WeakMap,m,g=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,S){return v?new OffscreenCanvas(D,S):Mc("canvas")}function w(D,S,$){let ae=1,ue=Fe(D);if((ue.width>$||ue.height>$)&&(ae=$/Math.max(ue.width,ue.height)),ae<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let te=Math.floor(ae*ue.width),ke=Math.floor(ae*ue.height);m===void 0&&(m=M(te,ke));let _e=S?M(te,ke):m;return _e.width=te,_e.height=ke,_e.getContext("2d").drawImage(D,0,0,te,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+te+"x"+ke+")."),_e}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),D;return D}function _(D){return D.generateMipmaps}function y(D){n.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function N(D,S,$,ae,ue=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let te=S;if(S===n.RED&&($===n.FLOAT&&(te=n.R32F),$===n.HALF_FLOAT&&(te=n.R16F),$===n.UNSIGNED_BYTE&&(te=n.R8)),S===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(te=n.R8UI),$===n.UNSIGNED_SHORT&&(te=n.R16UI),$===n.UNSIGNED_INT&&(te=n.R32UI),$===n.BYTE&&(te=n.R8I),$===n.SHORT&&(te=n.R16I),$===n.INT&&(te=n.R32I)),S===n.RG&&($===n.FLOAT&&(te=n.RG32F),$===n.HALF_FLOAT&&(te=n.RG16F),$===n.UNSIGNED_BYTE&&(te=n.RG8)),S===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(te=n.RG8UI),$===n.UNSIGNED_SHORT&&(te=n.RG16UI),$===n.UNSIGNED_INT&&(te=n.RG32UI),$===n.BYTE&&(te=n.RG8I),$===n.SHORT&&(te=n.RG16I),$===n.INT&&(te=n.RG32I)),S===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(te=n.RGB8UI),$===n.UNSIGNED_SHORT&&(te=n.RGB16UI),$===n.UNSIGNED_INT&&(te=n.RGB32UI),$===n.BYTE&&(te=n.RGB8I),$===n.SHORT&&(te=n.RGB16I),$===n.INT&&(te=n.RGB32I)),S===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),$===n.UNSIGNED_INT&&(te=n.RGBA32UI),$===n.BYTE&&(te=n.RGBA8I),$===n.SHORT&&(te=n.RGBA16I),$===n.INT&&(te=n.RGBA32I)),S===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),S===n.RGBA){let ke=ue?nu:Ut.getTransfer(ae);$===n.FLOAT&&(te=n.RGBA32F),$===n.HALF_FLOAT&&(te=n.RGBA16F),$===n.UNSIGNED_BYTE&&(te=ke===qt?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function I(D,S){let $;return D?S===null||S===ao||S===Dc?$=n.DEPTH24_STENCIL8:S===Ur?$=n.DEPTH32F_STENCIL8:S===Tc&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ao||S===Dc?$=n.DEPTH_COMPONENT24:S===Ur?$=n.DEPTH_COMPONENT32F:S===Tc&&($=n.DEPTH_COMPONENT16),$}function G(D,S){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==er&&D.minFilter!==_r?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function V(D){let S=D.target;S.removeEventListener("dispose",V),j(S),S.isVideoTexture&&h.delete(S)}function F(D){let S=D.target;S.removeEventListener("dispose",F),C(S)}function j(D){let S=i.get(D);if(S.__webglInit===void 0)return;let $=D.source,ae=g.get($);if(ae){let ue=ae[S.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&A(D),Object.keys(ae).length===0&&g.delete($)}i.remove(D)}function A(D){let S=i.get(D);n.deleteTexture(S.__webglTexture);let $=D.source,ae=g.get($);delete ae[S.__cacheKey],a.memory.textures--}function C(D){let S=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(S.__webglFramebuffer[ae]))for(let ue=0;ue<S.__webglFramebuffer[ae].length;ue++)n.deleteFramebuffer(S.__webglFramebuffer[ae][ue]);else n.deleteFramebuffer(S.__webglFramebuffer[ae]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[ae])}else{if(Array.isArray(S.__webglFramebuffer))for(let ae=0;ae<S.__webglFramebuffer.length;ae++)n.deleteFramebuffer(S.__webglFramebuffer[ae]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ae=0;ae<S.__webglColorRenderbuffer.length;ae++)S.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[ae]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let $=D.textures;for(let ae=0,ue=$.length;ae<ue;ae++){let te=i.get($[ae]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove($[ae])}i.remove(D)}let k=0;function se(){k=0}function J(){let D=k;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),k+=1,D}function de(D){let S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function le(D,S){let $=i.get(D);if(D.isVideoTexture&&Be(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){let ae=D.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie($,D,S);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+S)}function ne(D,S){let $=i.get(D);if(D.version>0&&$.__version!==D.version){ie($,D,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+S)}function he(D,S){let $=i.get(D);if(D.version>0&&$.__version!==D.version){ie($,D,S);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+S)}function K(D,S){let $=i.get(D);if(D.version>0&&$.__version!==D.version){ve($,D,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+S)}let ge={[Hh]:n.REPEAT,[eo]:n.CLAMP_TO_EDGE,[zh]:n.MIRRORED_REPEAT},Ne={[er]:n.NEAREST,[BC]:n.NEAREST_MIPMAP_NEAREST,[Su]:n.NEAREST_MIPMAP_LINEAR,[_r]:n.LINEAR,[_p]:n.LINEAR_MIPMAP_NEAREST,[oo]:n.LINEAR_MIPMAP_LINEAR},Ve={[WC]:n.NEVER,[ZC]:n.ALWAYS,[jC]:n.LESS,[l0]:n.LEQUAL,[$C]:n.EQUAL,[YC]:n.GEQUAL,[qC]:n.GREATER,[XC]:n.NOTEQUAL};function pt(D,S){if(S.type===Ur&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===_r||S.magFilter===_p||S.magFilter===Su||S.magFilter===oo||S.minFilter===_r||S.minFilter===_p||S.minFilter===Su||S.minFilter===oo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,ge[S.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,ge[S.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,ge[S.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,Ne[S.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,Ne[S.minFilter]),S.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,Ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===er||S.minFilter!==Su&&S.minFilter!==oo||S.type===Ur&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Rt(D,S){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",V));let ae=S.source,ue=g.get(ae);ue===void 0&&(ue={},g.set(ae,ue));let te=de(S);if(te!==D.__cacheKey){ue[te]===void 0&&(ue[te]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,$=!0),ue[te].usedTimes++;let ke=ue[D.__cacheKey];ke!==void 0&&(ue[D.__cacheKey].usedTimes--,ke.usedTimes===0&&A(S)),D.__cacheKey=te,D.__webglTexture=ue[te].texture}return $}function ie(D,S,$){let ae=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ae=n.TEXTURE_3D);let ue=Rt(D,S),te=S.source;t.bindTexture(ae,D.__webglTexture,n.TEXTURE0+$);let ke=i.get(te);if(te.version!==ke.__version||ue===!0){t.activeTexture(n.TEXTURE0+$);let _e=Ut.getPrimaries(Ut.workingColorSpace),Ce=S.colorSpace===xs?null:Ut.getPrimaries(S.colorSpace),_t=S.colorSpace===xs||_e===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let me=w(S.image,!1,r.maxTextureSize);me=yt(S,me);let Ae=s.convert(S.format,S.colorSpace),je=s.convert(S.type),Ze=N(S.internalFormat,Ae,je,S.colorSpace,S.isVideoTexture);pt(ae,S);let Ie,wt=S.mipmaps,ot=S.isVideoTexture!==!0,Xt=ke.__version===void 0||ue===!0,U=te.dataReady,Ee=G(S,me);if(S.isDepthTexture)Ze=I(S.format===Ac,S.type),Xt&&(ot?t.texStorage2D(n.TEXTURE_2D,1,Ze,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,Ze,me.width,me.height,0,Ae,je,null));else if(S.isDataTexture)if(wt.length>0){ot&&Xt&&t.texStorage2D(n.TEXTURE_2D,Ee,Ze,wt[0].width,wt[0].height);for(let Q=0,ce=wt.length;Q<ce;Q++)Ie=wt[Q],ot?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Ie.width,Ie.height,Ae,je,Ie.data):t.texImage2D(n.TEXTURE_2D,Q,Ze,Ie.width,Ie.height,0,Ae,je,Ie.data);S.generateMipmaps=!1}else ot?(Xt&&t.texStorage2D(n.TEXTURE_2D,Ee,Ze,me.width,me.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me.width,me.height,Ae,je,me.data)):t.texImage2D(n.TEXTURE_2D,0,Ze,me.width,me.height,0,Ae,je,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ot&&Xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ze,wt[0].width,wt[0].height,me.depth);for(let Q=0,ce=wt.length;Q<ce;Q++)if(Ie=wt[Q],S.format!==nr)if(Ae!==null)if(ot){if(U)if(S.layerUpdates.size>0){let Te=y0(Ie.width,Ie.height,S.format,S.type);for(let we of S.layerUpdates){let tt=Ie.data.subarray(we*Te/Ie.data.BYTES_PER_ELEMENT,(we+1)*Te/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,we,Ie.width,Ie.height,1,Ae,tt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Ie.width,Ie.height,me.depth,Ae,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Ze,Ie.width,Ie.height,me.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Ie.width,Ie.height,me.depth,Ae,je,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Ze,Ie.width,Ie.height,me.depth,0,Ae,je,Ie.data)}else{ot&&Xt&&t.texStorage2D(n.TEXTURE_2D,Ee,Ze,wt[0].width,wt[0].height);for(let Q=0,ce=wt.length;Q<ce;Q++)Ie=wt[Q],S.format!==nr?Ae!==null?ot?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,Ie.width,Ie.height,Ae,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Ze,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Ie.width,Ie.height,Ae,je,Ie.data):t.texImage2D(n.TEXTURE_2D,Q,Ze,Ie.width,Ie.height,0,Ae,je,Ie.data)}else if(S.isDataArrayTexture)if(ot){if(Xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ze,me.width,me.height,me.depth),U)if(S.layerUpdates.size>0){let Q=y0(me.width,me.height,S.format,S.type);for(let ce of S.layerUpdates){let Te=me.data.subarray(ce*Q/me.data.BYTES_PER_ELEMENT,(ce+1)*Q/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,me.width,me.height,1,Ae,je,Te)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ae,je,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ze,me.width,me.height,me.depth,0,Ae,je,me.data);else if(S.isData3DTexture)ot?(Xt&&t.texStorage3D(n.TEXTURE_3D,Ee,Ze,me.width,me.height,me.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ae,je,me.data)):t.texImage3D(n.TEXTURE_3D,0,Ze,me.width,me.height,me.depth,0,Ae,je,me.data);else if(S.isFramebufferTexture){if(Xt)if(ot)t.texStorage2D(n.TEXTURE_2D,Ee,Ze,me.width,me.height);else{let Q=me.width,ce=me.height;for(let Te=0;Te<Ee;Te++)t.texImage2D(n.TEXTURE_2D,Te,Ze,Q,ce,0,Ae,je,null),Q>>=1,ce>>=1}}else if(wt.length>0){if(ot&&Xt){let Q=Fe(wt[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Ze,Q.width,Q.height)}for(let Q=0,ce=wt.length;Q<ce;Q++)Ie=wt[Q],ot?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Ae,je,Ie):t.texImage2D(n.TEXTURE_2D,Q,Ze,Ae,je,Ie);S.generateMipmaps=!1}else if(ot){if(Xt){let Q=Fe(me);t.texStorage2D(n.TEXTURE_2D,Ee,Ze,Q.width,Q.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,je,me)}else t.texImage2D(n.TEXTURE_2D,0,Ze,Ae,je,me);_(S)&&y(ae),ke.__version=te.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function ve(D,S,$){if(S.image.length!==6)return;let ae=Rt(D,S),ue=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+$);let te=i.get(ue);if(ue.version!==te.__version||ae===!0){t.activeTexture(n.TEXTURE0+$);let ke=Ut.getPrimaries(Ut.workingColorSpace),_e=S.colorSpace===xs?null:Ut.getPrimaries(S.colorSpace),Ce=S.colorSpace===xs||ke===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let _t=S.isCompressedTexture||S.image[0].isCompressedTexture,me=S.image[0]&&S.image[0].isDataTexture,Ae=[];for(let ce=0;ce<6;ce++)!_t&&!me?Ae[ce]=w(S.image[ce],!0,r.maxCubemapSize):Ae[ce]=me?S.image[ce].image:S.image[ce],Ae[ce]=yt(S,Ae[ce]);let je=Ae[0],Ze=s.convert(S.format,S.colorSpace),Ie=s.convert(S.type),wt=N(S.internalFormat,Ze,Ie,S.colorSpace),ot=S.isVideoTexture!==!0,Xt=te.__version===void 0||ae===!0,U=ue.dataReady,Ee=G(S,je);pt(n.TEXTURE_CUBE_MAP,S);let Q;if(_t){ot&&Xt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,wt,je.width,je.height);for(let ce=0;ce<6;ce++){Q=Ae[ce].mipmaps;for(let Te=0;Te<Q.length;Te++){let we=Q[Te];S.format!==nr?Ze!==null?ot?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te,0,0,we.width,we.height,Ze,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te,wt,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te,0,0,we.width,we.height,Ze,Ie,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te,wt,we.width,we.height,0,Ze,Ie,we.data)}}}else{if(Q=S.mipmaps,ot&&Xt){Q.length>0&&Ee++;let ce=Fe(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,wt,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(me){ot?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ae[ce].width,Ae[ce].height,Ze,Ie,Ae[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,wt,Ae[ce].width,Ae[ce].height,0,Ze,Ie,Ae[ce].data);for(let Te=0;Te<Q.length;Te++){let tt=Q[Te].image[ce].image;ot?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te+1,0,0,tt.width,tt.height,Ze,Ie,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te+1,wt,tt.width,tt.height,0,Ze,Ie,tt.data)}}else{ot?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ze,Ie,Ae[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,wt,Ze,Ie,Ae[ce]);for(let Te=0;Te<Q.length;Te++){let we=Q[Te];ot?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te+1,0,0,Ze,Ie,we.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te+1,wt,Ze,Ie,we.image[ce])}}}_(S)&&y(n.TEXTURE_CUBE_MAP),te.__version=ue.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function Pe(D,S,$,ae,ue,te){let ke=s.convert($.format,$.colorSpace),_e=s.convert($.type),Ce=N($.internalFormat,ke,_e,$.colorSpace),_t=i.get(S),me=i.get($);if(me.__renderTarget=S,!_t.__hasExternalTextures){let Ae=Math.max(1,S.width>>te),je=Math.max(1,S.height>>te);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,te,Ce,Ae,je,S.depth,0,ke,_e,null):t.texImage2D(ue,te,Ce,Ae,je,0,ke,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Et(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,ue,me.__webglTexture,0,St(S)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,ue,me.__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(D,S,$){if(n.bindRenderbuffer(n.RENDERBUFFER,D),S.depthBuffer){let ae=S.depthTexture,ue=ae&&ae.isDepthTexture?ae.type:null,te=I(S.stencilBuffer,ue),ke=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=St(S);Et(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,te,S.width,S.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,te,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,te,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ke,n.RENDERBUFFER,D)}else{let ae=S.textures;for(let ue=0;ue<ae.length;ue++){let te=ae[ue],ke=s.convert(te.format,te.colorSpace),_e=s.convert(te.type),Ce=N(te.internalFormat,ke,_e,te.colorSpace),_t=St(S);$&&Et(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,Ce,S.width,S.height):Et(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t,Ce,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(D,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ae=i.get(S.depthTexture);ae.__renderTarget=S,(!ae.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),le(S.depthTexture,0);let ue=ae.__webglTexture,te=St(S);if(S.depthTexture.format===_c)Et(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0);else if(S.depthTexture.format===Ac)Et(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Mt(D){let S=i.get(D),$=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){let ae=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ae){let ue=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ae.removeEventListener("dispose",ue)};ae.addEventListener("dispose",ue),S.__depthDisposeCallback=ue}S.__boundDepthTexture=ae}if(D.depthTexture&&!S.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");qe(S.__webglFramebuffer,D)}else if($){S.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ae]),S.__webglDepthbuffer[ae]===void 0)S.__webglDepthbuffer[ae]=n.createRenderbuffer(),ye(S.__webglDepthbuffer[ae],D,!1);else{let ue=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,te)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ye(S.__webglDepthbuffer,D,!1);else{let ae=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,ue)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(D,S,$){let ae=i.get(D);S!==void 0&&Pe(ae.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Mt(D)}function an(D){let S=D.texture,$=i.get(D),ae=i.get(S);D.addEventListener("dispose",F);let ue=D.textures,te=D.isWebGLCubeRenderTarget===!0,ke=ue.length>1;if(ke||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=S.version,a.memory.textures++),te){$.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer[_e]=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)$.__webglFramebuffer[_e][Ce]=n.createFramebuffer()}else $.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer=[];for(let _e=0;_e<S.mipmaps.length;_e++)$.__webglFramebuffer[_e]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(ke)for(let _e=0,Ce=ue.length;_e<Ce;_e++){let _t=i.get(ue[_e]);_t.__webglTexture===void 0&&(_t.__webglTexture=n.createTexture(),a.memory.textures++)}if(D.samples>0&&Et(D)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let _e=0;_e<ue.length;_e++){let Ce=ue[_e];$.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[_e]);let _t=s.convert(Ce.format,Ce.colorSpace),me=s.convert(Ce.type),Ae=N(Ce.internalFormat,_t,me,Ce.colorSpace,D.isXRRenderTarget===!0),je=St(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,je,Ae,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,$.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),ye($.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),pt(n.TEXTURE_CUBE_MAP,S);for(let _e=0;_e<6;_e++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)Pe($.__webglFramebuffer[_e][Ce],D,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce);else Pe($.__webglFramebuffer[_e],D,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);_(S)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let _e=0,Ce=ue.length;_e<Ce;_e++){let _t=ue[_e],me=i.get(_t);t.bindTexture(n.TEXTURE_2D,me.__webglTexture),pt(n.TEXTURE_2D,_t),Pe($.__webglFramebuffer,D,_t,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,0),_(_t)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(_e=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,ae.__webglTexture),pt(_e,S),S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)Pe($.__webglFramebuffer[Ce],D,S,n.COLOR_ATTACHMENT0,_e,Ce);else Pe($.__webglFramebuffer,D,S,n.COLOR_ATTACHMENT0,_e,0);_(S)&&y(_e),t.unbindTexture()}D.depthBuffer&&Mt(D)}function Dt(D){let S=D.textures;for(let $=0,ae=S.length;$<ae;$++){let ue=S[$];if(_(ue)){let te=P(D),ke=i.get(ue).__webglTexture;t.bindTexture(te,ke),y(te),t.unbindTexture()}}}let dt=[],L=[];function hn(D){if(D.samples>0){if(Et(D)===!1){let S=D.textures,$=D.width,ae=D.height,ue=n.COLOR_BUFFER_BIT,te=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ke=i.get(D),_e=S.length>1;if(_e)for(let Ce=0;Ce<S.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ke.__webglColorRenderbuffer[Ce]);let _t=i.get(S[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_t,0)}n.blitFramebuffer(0,0,$,ae,0,0,$,ae,ue,n.NEAREST),u===!0&&(dt.length=0,L.length=0,dt.push(n.COLOR_ATTACHMENT0+Ce),D.depthBuffer&&D.resolveDepthBuffer===!1&&(dt.push(te),L.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Ce=0;Ce<S.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,ke.__webglColorRenderbuffer[Ce]);let _t=i.get(S[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,_t,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&u){let S=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function St(D){return Math.min(r.maxSamples,D.samples)}function Et(D){let S=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Be(D){let S=a.render.frame;h.get(D)!==S&&(h.set(D,S),D.update())}function yt(D,S){let $=D.colorSpace,ae=D.format,ue=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==Go&&$!==xs&&(Ut.getTransfer($)===qt?(ae!==nr||ue!==kr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),S}function Fe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(f.width=D.naturalWidth||D.width,f.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(f.width=D.displayWidth,f.height=D.displayHeight):(f.width=D.width,f.height=D.height),f}this.allocateTextureUnit=J,this.resetTextureUnits=se,this.setTexture2D=le,this.setTexture2DArray=ne,this.setTexture3D=he,this.setTextureCube=K,this.rebindTextures=We,this.setupRenderTarget=an,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Et}function vW(n,e){function t(i,r=xs){let s,a=Ut.getTransfer(r);if(i===kr)return n.UNSIGNED_BYTE;if(i===Mp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===t0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Q_)return n.BYTE;if(i===e0)return n.SHORT;if(i===Tc)return n.UNSIGNED_SHORT;if(i===xp)return n.INT;if(i===ao)return n.UNSIGNED_INT;if(i===Ur)return n.FLOAT;if(i===Cc)return n.HALF_FLOAT;if(i===n0)return n.ALPHA;if(i===i0)return n.RGB;if(i===nr)return n.RGBA;if(i===r0)return n.LUMINANCE;if(i===s0)return n.LUMINANCE_ALPHA;if(i===_c)return n.DEPTH_COMPONENT;if(i===Ac)return n.DEPTH_STENCIL;if(i===o0)return n.RED;if(i===Ep)return n.RED_INTEGER;if(i===a0)return n.RG;if(i===wp)return n.RG_INTEGER;if(i===bp)return n.RGBA_INTEGER;if(i===Eu||i===wu||i===bu||i===Tu)if(a===qt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Eu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Eu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tp||i===Cp||i===Dp||i===Ap)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Tp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ap)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ip||i===Rp||i===Np)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ip||i===Rp)return a===qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Np)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pp||i===Op||i===Lp||i===Fp||i===kp||i===Up||i===Bp||i===Vp||i===Hp||i===zp||i===Gp||i===Wp||i===jp||i===$p)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Pp)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Op)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lp)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fp)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kp)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Up)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bp)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vp)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hp)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zp)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gp)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wp)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jp)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$p)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cu||i===qp||i===Xp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Cu)return a===qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===c0||i===Yp||i===Zp||i===Jp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Cu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Dc?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var yW=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_W=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,R0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Ms,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Mr({vertexShader:yW,fragmentShader:_W,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tr(new gu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},N0=class extends gs{constructor(e,t){super();let i=this,r=null,s=1,a=null,l="local-floor",u=1,f=null,h=null,m=null,g=null,v=null,M=null,w=new R0,_=t.getContextAttributes(),y=null,P=null,N=[],I=[],G=new Zt,V=null,F=new Qn;F.viewport=new vn;let j=new Qn;j.viewport=new vn;let A=[F,j],C=new cp,k=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ve=N[ie];return ve===void 0&&(ve=new wc,N[ie]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ie){let ve=N[ie];return ve===void 0&&(ve=new wc,N[ie]=ve),ve.getGripSpace()},this.getHand=function(ie){let ve=N[ie];return ve===void 0&&(ve=new wc,N[ie]=ve),ve.getHandSpace()};function J(ie){let ve=I.indexOf(ie.inputSource);if(ve===-1)return;let Pe=N[ve];Pe!==void 0&&(Pe.update(ie.inputSource,ie.frame,f||a),Pe.dispatchEvent({type:ie.type,data:ie.inputSource}))}function de(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",de),r.removeEventListener("inputsourceschange",le);for(let ie=0;ie<N.length;ie++){let ve=I[ie];ve!==null&&(I[ie]=null,N[ie].disconnect(ve))}k=null,se=null,w.reset(),e.setRenderTarget(y),v=null,g=null,m=null,r=null,P=null,Rt.stop(),i.isPresenting=!1,e.setPixelRatio(V),e.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){l=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||a},this.setReferenceSpace=function(ie){f=ie},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return m},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=function(ie){return Ps(this,null,function*(){if(r=ie,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",de),r.addEventListener("inputsourceschange",le),_.xrCompatible!==!0&&(yield t.makeXRCompatible()),V=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,ye=null,qe=null;_.depth&&(qe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=_.stencil?Ac:_c,ye=_.stencil?Dc:ao);let Mt={colorFormat:t.RGBA8,depthFormat:qe,scaleFactor:s};m=new XRWebGLBinding(r,t),g=m.createProjectionLayer(Mt),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Or(g.textureWidth,g.textureHeight,{format:nr,type:kr,depthTexture:new mu(g.textureWidth,g.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{let Pe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,t,Pe),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),P=new Or(v.framebufferWidth,v.framebufferHeight,{format:nr,type:kr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(u),f=null,a=yield r.requestReferenceSpace(l),Rt.setContext(r),Rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function le(ie){for(let ve=0;ve<ie.removed.length;ve++){let Pe=ie.removed[ve],ye=I.indexOf(Pe);ye>=0&&(I[ye]=null,N[ye].disconnect(Pe))}for(let ve=0;ve<ie.added.length;ve++){let Pe=ie.added[ve],ye=I.indexOf(Pe);if(ye===-1){for(let Mt=0;Mt<N.length;Mt++)if(Mt>=I.length){I.push(Pe),ye=Mt;break}else if(I[Mt]===null){I[Mt]=Pe,ye=Mt;break}if(ye===-1)break}let qe=N[ye];qe&&qe.connect(Pe)}}let ne=new Z,he=new Z;function K(ie,ve,Pe){ne.setFromMatrixPosition(ve.matrixWorld),he.setFromMatrixPosition(Pe.matrixWorld);let ye=ne.distanceTo(he),qe=ve.projectionMatrix.elements,Mt=Pe.projectionMatrix.elements,We=qe[14]/(qe[10]-1),an=qe[14]/(qe[10]+1),Dt=(qe[9]+1)/qe[5],dt=(qe[9]-1)/qe[5],L=(qe[8]-1)/qe[0],hn=(Mt[8]+1)/Mt[0],St=We*L,Et=We*hn,Be=ye/(-L+hn),yt=Be*-L;if(ve.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(yt),ie.translateZ(Be),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),qe[10]===-1)ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{let Fe=We+Be,D=an+Be,S=St-yt,$=Et+(ye-yt),ae=Dt*an/D*Fe,ue=dt*an/D*Fe;ie.projectionMatrix.makePerspective(S,$,ae,ue,Fe,D),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ge(ie,ve){ve===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ve.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let ve=ie.near,Pe=ie.far;w.texture!==null&&(w.depthNear>0&&(ve=w.depthNear),w.depthFar>0&&(Pe=w.depthFar)),C.near=j.near=F.near=ve,C.far=j.far=F.far=Pe,(k!==C.near||se!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,se=C.far),F.layers.mask=ie.layers.mask|2,j.layers.mask=ie.layers.mask|4,C.layers.mask=F.layers.mask|j.layers.mask;let ye=ie.parent,qe=C.cameras;ge(C,ye);for(let Mt=0;Mt<qe.length;Mt++)ge(qe[Mt],ye);qe.length===2?K(C,F,j):C.projectionMatrix.copy(F.projectionMatrix),Ne(ie,C,ye)};function Ne(ie,ve,Pe){Pe===null?ie.matrix.copy(ve.matrixWorld):(ie.matrix.copy(Pe.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ve.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=xc*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(g===null&&v===null))return u},this.setFoveation=function(ie){u=ie,g!==null&&(g.fixedFoveation=ie),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ie)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let Ve=null;function pt(ie,ve){if(h=ve.getViewerPose(f||a),M=ve,h!==null){let Pe=h.views;v!==null&&(e.setRenderTargetFramebuffer(P,v.framebuffer),e.setRenderTarget(P));let ye=!1;Pe.length!==C.cameras.length&&(C.cameras.length=0,ye=!0);for(let We=0;We<Pe.length;We++){let an=Pe[We],Dt=null;if(v!==null)Dt=v.getViewport(an);else{let L=m.getViewSubImage(g,an);Dt=L.viewport,We===0&&(e.setRenderTargetTextures(P,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(P))}let dt=A[We];dt===void 0&&(dt=new Qn,dt.layers.enable(We),dt.viewport=new vn,A[We]=dt),dt.matrix.fromArray(an.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(an.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),We===0&&(C.matrix.copy(dt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ye===!0&&C.cameras.push(dt)}let qe=r.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){let We=m.getDepthInformation(Pe[0]);We&&We.isValid&&We.texture&&w.init(e,We,r.renderState)}}for(let Pe=0;Pe<N.length;Pe++){let ye=I[Pe],qe=N[Pe];ye!==null&&qe!==void 0&&qe.update(ye,ve,f||a)}Ve&&Ve(ie,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),M=null}let Rt=new CD;Rt.setAnimationLoop(pt),this.setAnimationLoop=function(ie){Ve=ie},this.dispose=function(){}}},Jo=new jo,xW=new Mn;function MW(n,e){function t(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function i(_,y){y.color.getRGB(_.fogColor.value,p0(n)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function r(_,y,P,N,I){y.isMeshBasicMaterial||y.isMeshLambertMaterial?s(_,y):y.isMeshToonMaterial?(s(_,y),m(_,y)):y.isMeshPhongMaterial?(s(_,y),h(_,y)):y.isMeshStandardMaterial?(s(_,y),g(_,y),y.isMeshPhysicalMaterial&&v(_,y,I)):y.isMeshMatcapMaterial?(s(_,y),M(_,y)):y.isMeshDepthMaterial?s(_,y):y.isMeshDistanceMaterial?(s(_,y),w(_,y)):y.isMeshNormalMaterial?s(_,y):y.isLineBasicMaterial?(a(_,y),y.isLineDashedMaterial&&l(_,y)):y.isPointsMaterial?u(_,y,P,N):y.isSpriteMaterial?f(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function s(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,t(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===li&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,t(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===li&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,t(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,t(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);let P=e.get(y),N=P.envMap,I=P.envMapRotation;N&&(_.envMap.value=N,Jo.copy(I),Jo.x*=-1,Jo.y*=-1,Jo.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Jo.y*=-1,Jo.z*=-1),_.envMapRotation.value.setFromMatrix4(xW.makeRotationFromEuler(Jo)),_.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap&&(_.lightMap.value=y.lightMap,_.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,_.lightMapTransform)),y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,_.aoMapTransform))}function a(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform))}function l(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function u(_,y,P,N){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*P,_.scale.value=N*.5,y.map&&(_.map.value=y.map,t(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function f(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function h(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function m(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function g(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,_.roughnessMapTransform)),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function v(_,y,P){_.ior.value=y.ior,y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===li&&_.clearcoatNormalScale.value.negate())),y.dispersion>0&&(_.dispersion.value=y.dispersion),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=P.texture,_.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,y){y.matcap&&(_.matcap.value=y.matcap)}function w(_,y){let P=e.get(y).light;_.referencePosition.value.setFromMatrixPosition(P.matrixWorld),_.nearDistance.value=P.shadow.camera.near,_.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function SW(n,e,t,i){let r={},s={},a=[],l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(P,N){let I=N.program;i.uniformBlockBinding(P,I)}function f(P,N){let I=r[P.id];I===void 0&&(M(P),I=h(P),r[P.id]=I,P.addEventListener("dispose",_));let G=N.program;i.updateUBOMapping(P,G);let V=e.render.frame;s[P.id]!==V&&(g(P),s[P.id]=V)}function h(P){let N=m();P.__bindingPointIndex=N;let I=n.createBuffer(),G=P.__size,V=P.usage;return n.bindBuffer(n.UNIFORM_BUFFER,I),n.bufferData(n.UNIFORM_BUFFER,G,V),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,N,I),I}function m(){for(let P=0;P<l;P++)if(a.indexOf(P)===-1)return a.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(P){let N=r[P.id],I=P.uniforms,G=P.__cache;n.bindBuffer(n.UNIFORM_BUFFER,N);for(let V=0,F=I.length;V<F;V++){let j=Array.isArray(I[V])?I[V]:[I[V]];for(let A=0,C=j.length;A<C;A++){let k=j[A];if(v(k,V,A,G)===!0){let se=k.__offset,J=Array.isArray(k.value)?k.value:[k.value],de=0;for(let le=0;le<J.length;le++){let ne=J[le],he=w(ne);typeof ne=="number"||typeof ne=="boolean"?(k.__data[0]=ne,n.bufferSubData(n.UNIFORM_BUFFER,se+de,k.__data)):ne.isMatrix3?(k.__data[0]=ne.elements[0],k.__data[1]=ne.elements[1],k.__data[2]=ne.elements[2],k.__data[3]=0,k.__data[4]=ne.elements[3],k.__data[5]=ne.elements[4],k.__data[6]=ne.elements[5],k.__data[7]=0,k.__data[8]=ne.elements[6],k.__data[9]=ne.elements[7],k.__data[10]=ne.elements[8],k.__data[11]=0):(ne.toArray(k.__data,de),de+=he.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,se,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(P,N,I,G){let V=P.value,F=N+"_"+I;if(G[F]===void 0)return typeof V=="number"||typeof V=="boolean"?G[F]=V:G[F]=V.clone(),!0;{let j=G[F];if(typeof V=="number"||typeof V=="boolean"){if(j!==V)return G[F]=V,!0}else if(j.equals(V)===!1)return j.copy(V),!0}return!1}function M(P){let N=P.uniforms,I=0,G=16;for(let F=0,j=N.length;F<j;F++){let A=Array.isArray(N[F])?N[F]:[N[F]];for(let C=0,k=A.length;C<k;C++){let se=A[C],J=Array.isArray(se.value)?se.value:[se.value];for(let de=0,le=J.length;de<le;de++){let ne=J[de],he=w(ne),K=I%G,ge=K%he.boundary,Ne=K+ge;I+=ge,Ne!==0&&G-Ne<he.storage&&(I+=G-Ne),se.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=I,I+=he.storage}}}let V=I%G;return V>0&&(I+=G-V),P.__size=I,P.__cache={},this}function w(P){let N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),N}function _(P){let N=P.target;N.removeEventListener("dispose",_);let I=a.indexOf(N.__bindingPointIndex);a.splice(I,1),n.deleteBuffer(r[N.id]),delete r[N.id],delete s[N.id]}function y(){for(let P in r)n.deleteBuffer(r[P]);a=[],r={},s={}}return{bind:u,update:f,dispose:y}}var nm=class{constructor(e={}){let{canvas:t=JC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;let M=new Uint32Array(4),w=new Int32Array(4),_=null,y=null,P=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_s,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,G=!1;this._outputColorSpace=Oi;let V=0,F=0,j=null,A=-1,C=null,k=new vn,se=new vn,J=null,de=new Bt(0),le=0,ne=t.width,he=t.height,K=1,ge=null,Ne=null,Ve=new vn(0,0,ne,he),pt=new vn(0,0,ne,he),Rt=!1,ie=new hu,ve=!1,Pe=!1,ye=new Mn,qe=new Mn,Mt=new Z,We=new vn,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dt=!1;function dt(){return j===null?K:1}let L=i;function hn(b,H){return t.getContext(b,H)}try{let b={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lp}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",we,!1),L===null){let H="webgl2";if(L=hn(H,b),L===null)throw hn(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let St,Et,Be,yt,Fe,D,S,$,ae,ue,te,ke,_e,Ce,_t,me,Ae,je,Ze,Ie,wt,ot,Xt,U;function Ee(){St=new V4(L),St.init(),ot=new vW(L,St),Et=new P4(L,St,e,ot),Be=new mW(L,St),Et.reverseDepthBuffer&&g&&Be.buffers.depth.setReversed(!0),yt=new G4(L),Fe=new nW,D=new gW(L,St,Be,Fe,Et,ot,yt),S=new L4(I),$=new B4(I),ae=new YV(L),Xt=new R4(L,ae),ue=new H4(L,ae,yt,Xt),te=new j4(L,ue,ae,yt),Ze=new W4(L,Et,D),me=new O4(Fe),ke=new tW(I,S,$,St,Et,Xt,me),_e=new MW(I,Fe),Ce=new rW,_t=new uW(St),je=new I4(I,S,$,Be,te,v,u),Ae=new hW(I,te,Et),U=new SW(L,yt,Et,Be),Ie=new N4(L,St,yt),wt=new z4(L,St,yt),yt.programs=ke.programs,I.capabilities=Et,I.extensions=St,I.properties=Fe,I.renderLists=Ce,I.shadowMap=Ae,I.state=Be,I.info=yt}Ee();let Q=new N0(I,L);this.xr=Q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=St.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=St.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(ne,he,!1))},this.getSize=function(b){return b.set(ne,he)},this.setSize=function(b,H,q=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=b,he=H,t.width=Math.floor(b*K),t.height=Math.floor(H*K),q===!0&&(t.style.width=b+"px",t.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(ne*K,he*K).floor()},this.setDrawingBufferSize=function(b,H,q){ne=b,he=H,K=q,t.width=Math.floor(b*q),t.height=Math.floor(H*q),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(k)},this.getViewport=function(b){return b.copy(Ve)},this.setViewport=function(b,H,q,X){b.isVector4?Ve.set(b.x,b.y,b.z,b.w):Ve.set(b,H,q,X),Be.viewport(k.copy(Ve).multiplyScalar(K).round())},this.getScissor=function(b){return b.copy(pt)},this.setScissor=function(b,H,q,X){b.isVector4?pt.set(b.x,b.y,b.z,b.w):pt.set(b,H,q,X),Be.scissor(se.copy(pt).multiplyScalar(K).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(b){Be.setScissorTest(Rt=b)},this.setOpaqueSort=function(b){ge=b},this.setTransparentSort=function(b){Ne=b},this.getClearColor=function(b){return b.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,q=!0){let X=0;if(b){let W=!1;if(j!==null){let pe=j.texture.format;W=pe===bp||pe===wp||pe===Ep}if(W){let pe=j.texture.type,xe=pe===kr||pe===ao||pe===Tc||pe===Dc||pe===Mp||pe===Sp,De=je.getClearColor(),Oe=je.getClearAlpha(),Ke=De.r,Je=De.g,He=De.b;xe?(M[0]=Ke,M[1]=Je,M[2]=He,M[3]=Oe,L.clearBufferuiv(L.COLOR,0,M)):(w[0]=Ke,w[1]=Je,w[2]=He,w[3]=Oe,L.clearBufferiv(L.COLOR,0,w))}else X|=L.COLOR_BUFFER_BIT}H&&(X|=L.DEPTH_BUFFER_BIT),q&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",we,!1),je.dispose(),Ce.dispose(),_t.dispose(),Fe.dispose(),S.dispose(),$.dispose(),te.dispose(),Xt.dispose(),U.dispose(),ke.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",ea),Q.removeEventListener("sessionend",Ru),Vr.stop()};function ce(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;let b=yt.autoReset,H=Ae.enabled,q=Ae.autoUpdate,X=Ae.needsUpdate,W=Ae.type;Ee(),yt.autoReset=b,Ae.enabled=H,Ae.autoUpdate=q,Ae.needsUpdate=X,Ae.type=W}function we(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function tt(b){let H=b.target;H.removeEventListener("dispose",tt),cn(H)}function cn(b){Nn(b),Fe.remove(b)}function Nn(b){let H=Fe.get(b).programs;H!==void 0&&(H.forEach(function(q){ke.releaseProgram(q)}),b.isShaderMaterial&&ke.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,q,X,W,pe){H===null&&(H=an);let xe=W.isMesh&&W.matrixWorld.determinant()<0,De=um(b,H,q,X,W);Be.setMaterial(X,xe);let Oe=q.index,Ke=1;if(X.wireframe===!0){if(Oe=ue.getWireframeAttribute(q),Oe===void 0)return;Ke=2}let Je=q.drawRange,He=q.attributes.position,bt=Je.start*Ke,Lt=(Je.start+Je.count)*Ke;pe!==null&&(bt=Math.max(bt,pe.start*Ke),Lt=Math.min(Lt,(pe.start+pe.count)*Ke)),Oe!==null?(bt=Math.max(bt,0),Lt=Math.min(Lt,Oe.count)):He!=null&&(bt=Math.max(bt,0),Lt=Math.min(Lt,He.count));let dn=Lt-bt;if(dn<0||dn===1/0)return;Xt.setup(W,X,De,q,Oe);let Qt,Nt=Ie;if(Oe!==null&&(Qt=ae.get(Oe),Nt=wt,Nt.setIndex(Qt)),W.isMesh)X.wireframe===!0?(Be.setLineWidth(X.wireframeLinewidth*dt()),Nt.setMode(L.LINES)):Nt.setMode(L.TRIANGLES);else if(W.isLine){let ze=X.linewidth;ze===void 0&&(ze=1),Be.setLineWidth(ze*dt()),W.isLineSegments?Nt.setMode(L.LINES):W.isLineLoop?Nt.setMode(L.LINE_LOOP):Nt.setMode(L.LINE_STRIP)}else W.isPoints?Nt.setMode(L.POINTS):W.isSprite&&Nt.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Du("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(St.get("WEBGL_multi_draw"))Nt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let ze=W._multiDrawStarts,pn=W._multiDrawCounts,Ft=W._multiDrawCount,yi=Oe?ae.get(Oe).bytesPerElement:1,Hr=Fe.get(X).currentProgram.getUniforms();for(let jn=0;jn<Ft;jn++)Hr.setValue(L,"_gl_DrawID",jn),Nt.render(ze[jn]/yi,pn[jn])}else if(W.isInstancedMesh)Nt.renderInstances(bt,dn,W.count);else if(q.isInstancedBufferGeometry){let ze=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,pn=Math.min(q.instanceCount,ze);Nt.renderInstances(bt,dn,pn)}else Nt.render(bt,dn)};function Ht(b,H,q){b.transparent===!0&&b.side===Fr&&b.forceSinglePass===!1?(b.side=li,b.needsUpdate=!0,na(b,H,q),b.side=ms,b.needsUpdate=!0,na(b,H,q),b.side=Fr):na(b,H,q)}this.compile=function(b,H,q=null){q===null&&(q=b),y=_t.get(q),y.init(H),N.push(y),q.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),b!==q&&b.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),y.setupLights();let X=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let pe=W.material;if(pe)if(Array.isArray(pe))for(let xe=0;xe<pe.length;xe++){let De=pe[xe];Ht(De,q,W),X.add(De)}else Ht(pe,q,W),X.add(pe)}),y=N.pop(),X},this.compileAsync=function(b,H,q=null){let X=this.compile(b,H,q);return new Promise(W=>{function pe(){if(X.forEach(function(xe){Fe.get(xe).currentProgram.isReady()&&X.delete(xe)}),X.size===0){W(b);return}setTimeout(pe,10)}St.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let ti=null;function ir(b){ti&&ti(b)}function ea(){Vr.stop()}function Ru(){Vr.start()}let Vr=new CD;Vr.setAnimationLoop(ir),typeof self<"u"&&Vr.setContext(self),this.setAnimationLoop=function(b){ti=b,Q.setAnimationLoop(b),b===null?Vr.stop():Vr.start()},Q.addEventListener("sessionstart",ea),Q.addEventListener("sessionend",Ru),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(H),H=Q.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,H,j),y=_t.get(b,N.length),y.init(H),N.push(y),qe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ie.setFromProjectionMatrix(qe),Pe=this.localClippingEnabled,ve=me.init(this.clippingPlanes,Pe),_=Ce.get(b,P.length),_.init(),P.push(_),Q.enabled===!0&&Q.isPresenting===!0){let pe=I.xr.getDepthSensingMesh();pe!==null&&Uc(pe,H,-1/0,I.sortObjects)}Uc(b,H,0,I.sortObjects),_.finish(),I.sortObjects===!0&&_.sort(ge,Ne),Dt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Dt&&je.addToRenderList(_,b),this.info.render.frame++,ve===!0&&me.beginShadows();let q=y.state.shadowsArray;Ae.render(q,b,H),ve===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=_.opaque,W=_.transmissive;if(y.setupLights(),H.isArrayCamera){let pe=H.cameras;if(W.length>0)for(let xe=0,De=pe.length;xe<De;xe++){let Oe=pe[xe];Pu(X,W,b,Oe)}Dt&&je.render(b);for(let xe=0,De=pe.length;xe<De;xe++){let Oe=pe[xe];Nu(_,b,Oe,Oe.viewport)}}else W.length>0&&Pu(X,W,b,H),Dt&&je.render(b),Nu(_,b,H);j!==null&&F===0&&(D.updateMultisampleRenderTarget(j),D.updateRenderTargetMipmap(j)),b.isScene===!0&&b.onAfterRender(I,b,H),Xt.resetDefaultState(),A=-1,C=null,N.pop(),N.length>0?(y=N[N.length-1],ve===!0&&me.setGlobalState(I.clippingPlanes,y.state.camera)):y=null,P.pop(),P.length>0?_=P[P.length-1]:_=null};function Uc(b,H,q,X){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ie.intersectsSprite(b)){X&&We.setFromMatrixPosition(b.matrixWorld).applyMatrix4(qe);let xe=te.update(b),De=b.material;De.visible&&_.push(b,xe,De,q,We.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ie.intersectsObject(b))){let xe=te.update(b),De=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),We.copy(b.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),We.copy(xe.boundingSphere.center)),We.applyMatrix4(b.matrixWorld).applyMatrix4(qe)),Array.isArray(De)){let Oe=xe.groups;for(let Ke=0,Je=Oe.length;Ke<Je;Ke++){let He=Oe[Ke],bt=De[He.materialIndex];bt&&bt.visible&&_.push(b,xe,bt,q,We.z,He)}}else De.visible&&_.push(b,xe,De,q,We.z,null)}}let pe=b.children;for(let xe=0,De=pe.length;xe<De;xe++)Uc(pe[xe],H,q,X)}function Nu(b,H,q,X){let W=b.opaque,pe=b.transmissive,xe=b.transparent;y.setupLightsView(q),ve===!0&&me.setGlobalState(I.clippingPlanes,q),X&&Be.viewport(k.copy(X)),W.length>0&&ta(W,H,q),pe.length>0&&ta(pe,H,q),xe.length>0&&ta(xe,H,q),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Pu(b,H,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[X.id]===void 0&&(y.state.transmissionRenderTarget[X.id]=new Or(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float")?Cc:kr,minFilter:oo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));let pe=y.state.transmissionRenderTarget[X.id],xe=X.viewport||k;pe.setSize(xe.z*I.transmissionResolutionScale,xe.w*I.transmissionResolutionScale);let De=I.getRenderTarget();I.setRenderTarget(pe),I.getClearColor(de),le=I.getClearAlpha(),le<1&&I.setClearColor(16777215,.5),I.clear(),Dt&&je.render(q);let Oe=I.toneMapping;I.toneMapping=_s;let Ke=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),y.setupLightsView(X),ve===!0&&me.setGlobalState(I.clippingPlanes,X),ta(b,q,X),D.updateMultisampleRenderTarget(pe),D.updateRenderTargetMipmap(pe),St.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let He=0,bt=H.length;He<bt;He++){let Lt=H[He],dn=Lt.object,Qt=Lt.geometry,Nt=Lt.material,ze=Lt.group;if(Nt.side===Fr&&dn.layers.test(X.layers)){let pn=Nt.side;Nt.side=li,Nt.needsUpdate=!0,Ou(dn,q,X,Qt,Nt,ze),Nt.side=pn,Nt.needsUpdate=!0,Je=!0}}Je===!0&&(D.updateMultisampleRenderTarget(pe),D.updateRenderTargetMipmap(pe))}I.setRenderTarget(De),I.setClearColor(de,le),Ke!==void 0&&(X.viewport=Ke),I.toneMapping=Oe}function ta(b,H,q){let X=H.isScene===!0?H.overrideMaterial:null;for(let W=0,pe=b.length;W<pe;W++){let xe=b[W],De=xe.object,Oe=xe.geometry,Ke=xe.group,Je=xe.material;Je.allowOverride===!0&&X!==null&&(Je=X),De.layers.test(q.layers)&&Ou(De,H,q,Oe,Je,Ke)}}function Ou(b,H,q,X,W,pe){b.onBeforeRender(I,H,q,X,W,pe),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(I,H,q,X,b,pe),W.transparent===!0&&W.side===Fr&&W.forceSinglePass===!1?(W.side=li,W.needsUpdate=!0,I.renderBufferDirect(q,H,X,W,b,pe),W.side=ms,W.needsUpdate=!0,I.renderBufferDirect(q,H,X,W,b,pe),W.side=Fr):I.renderBufferDirect(q,H,X,W,b,pe),b.onAfterRender(I,H,q,X,W,pe)}function na(b,H,q){H.isScene!==!0&&(H=an);let X=Fe.get(b),W=y.state.lights,pe=y.state.shadowsArray,xe=W.state.version,De=ke.getParameters(b,W.state,pe,H,q),Oe=ke.getProgramCacheKey(De),Ke=X.programs;X.environment=b.isMeshStandardMaterial?H.environment:null,X.fog=H.fog,X.envMap=(b.isMeshStandardMaterial?$:S).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Ke===void 0&&(b.addEventListener("dispose",tt),Ke=new Map,X.programs=Ke);let Je=Ke.get(Oe);if(Je!==void 0){if(X.currentProgram===Je&&X.lightsStateVersion===xe)return Lu(b,De),Je}else De.uniforms=ke.getUniforms(b),b.onBeforeCompile(De,I),Je=ke.acquireProgram(De,Oe),Ke.set(Oe,Je),X.uniforms=De.uniforms;let He=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=me.uniform),Lu(b,De),X.needsLights=fm(b),X.lightsStateVersion=xe,X.needsLights&&(He.ambientLightColor.value=W.state.ambient,He.lightProbe.value=W.state.probe,He.directionalLights.value=W.state.directional,He.directionalLightShadows.value=W.state.directionalShadow,He.spotLights.value=W.state.spot,He.spotLightShadows.value=W.state.spotShadow,He.rectAreaLights.value=W.state.rectArea,He.ltc_1.value=W.state.rectAreaLTC1,He.ltc_2.value=W.state.rectAreaLTC2,He.pointLights.value=W.state.point,He.pointLightShadows.value=W.state.pointShadow,He.hemisphereLights.value=W.state.hemi,He.directionalShadowMap.value=W.state.directionalShadowMap,He.directionalShadowMatrix.value=W.state.directionalShadowMatrix,He.spotShadowMap.value=W.state.spotShadowMap,He.spotLightMatrix.value=W.state.spotLightMatrix,He.spotLightMap.value=W.state.spotLightMap,He.pointShadowMap.value=W.state.pointShadowMap,He.pointShadowMatrix.value=W.state.pointShadowMatrix),X.currentProgram=Je,X.uniformsList=null,Je}function Bc(b){if(b.uniformsList===null){let H=b.currentProgram.getUniforms();b.uniformsList=Pc.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function Lu(b,H){let q=Fe.get(b);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function um(b,H,q,X,W){H.isScene!==!0&&(H=an),D.resetTextureUnits();let pe=H.fog,xe=X.isMeshStandardMaterial?H.environment:null,De=j===null?I.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Go,Oe=(X.isMeshStandardMaterial?$:S).get(X.envMap||xe),Ke=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Je=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),He=!!q.morphAttributes.position,bt=!!q.morphAttributes.normal,Lt=!!q.morphAttributes.color,dn=_s;X.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(dn=I.toneMapping);let Qt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Nt=Qt!==void 0?Qt.length:0,ze=Fe.get(X),pn=y.state.lights;if(ve===!0&&(Pe===!0||b!==C)){let bn=b===C&&X.id===A;me.setState(X,b,bn)}let Ft=!1;X.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==pn.state.version||ze.outputColorSpace!==De||W.isBatchedMesh&&ze.batching===!1||!W.isBatchedMesh&&ze.batching===!0||W.isBatchedMesh&&ze.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&ze.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&ze.instancing===!1||!W.isInstancedMesh&&ze.instancing===!0||W.isSkinnedMesh&&ze.skinning===!1||!W.isSkinnedMesh&&ze.skinning===!0||W.isInstancedMesh&&ze.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ze.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&ze.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&ze.instancingMorph===!1&&W.morphTexture!==null||ze.envMap!==Oe||X.fog===!0&&ze.fog!==pe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==me.numPlanes||ze.numIntersection!==me.numIntersection)||ze.vertexAlphas!==Ke||ze.vertexTangents!==Je||ze.morphTargets!==He||ze.morphNormals!==bt||ze.morphColors!==Lt||ze.toneMapping!==dn||ze.morphTargetsCount!==Nt)&&(Ft=!0):(Ft=!0,ze.__version=X.version);let yi=ze.currentProgram;Ft===!0&&(yi=na(X,H,W));let Hr=!1,jn=!1,zr=!1,en=yi.getUniforms(),ni=ze.uniforms;if(Be.useProgram(yi.program)&&(Hr=!0,jn=!0,zr=!0),X.id!==A&&(A=X.id,jn=!0),Hr||C!==b){Be.buffers.depth.getReversed()?(ye.copy(b.projectionMatrix),QC(ye),eD(ye),en.setValue(L,"projectionMatrix",ye)):en.setValue(L,"projectionMatrix",b.projectionMatrix),en.setValue(L,"viewMatrix",b.matrixWorldInverse);let yn=en.map.cameraPosition;yn!==void 0&&yn.setValue(L,Mt.setFromMatrixPosition(b.matrixWorld)),Et.logarithmicDepthBuffer&&en.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&en.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,jn=!0,zr=!0)}if(W.isSkinnedMesh){en.setOptional(L,W,"bindMatrix"),en.setOptional(L,W,"bindMatrixInverse");let bn=W.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),en.setValue(L,"boneTexture",bn.boneTexture,D))}W.isBatchedMesh&&(en.setOptional(L,W,"batchingTexture"),en.setValue(L,"batchingTexture",W._matricesTexture,D),en.setOptional(L,W,"batchingIdTexture"),en.setValue(L,"batchingIdTexture",W._indirectTexture,D),en.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&en.setValue(L,"batchingColorTexture",W._colorsTexture,D));let $n=q.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&Ze.update(W,q,yi),(jn||ze.receiveShadow!==W.receiveShadow)&&(ze.receiveShadow=W.receiveShadow,en.setValue(L,"receiveShadow",W.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ni.envMap.value=Oe,ni.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&H.environment!==null&&(ni.envMapIntensity.value=H.environmentIntensity),jn&&(en.setValue(L,"toneMappingExposure",I.toneMappingExposure),ze.needsLights&&dm(ni,zr),pe&&X.fog===!0&&_e.refreshFogUniforms(ni,pe),_e.refreshMaterialUniforms(ni,X,K,he,y.state.transmissionRenderTarget[b.id]),Pc.upload(L,Bc(ze),ni,D)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Pc.upload(L,Bc(ze),ni,D),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&en.setValue(L,"center",W.center),en.setValue(L,"modelViewMatrix",W.modelViewMatrix),en.setValue(L,"normalMatrix",W.normalMatrix),en.setValue(L,"modelMatrix",W.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let bn=X.uniformsGroups;for(let yn=0,ra=bn.length;yn<ra;yn++){let Sr=bn[yn];U.update(Sr,yi),U.bind(Sr,yi)}}return yi}function dm(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function fm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,H,q){let X=Fe.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Fe.get(b.texture).__webglTexture=H,Fe.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){let q=Fe.get(b);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};let hm=L.createFramebuffer();this.setRenderTarget=function(b,H=0,q=0){j=b,V=H,F=q;let X=!0,W=null,pe=!1,xe=!1;if(b){let Oe=Fe.get(b);if(Oe.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(Oe.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(Oe.__hasExternalTextures)D.rebindTextures(b,Fe.get(b.texture).__webglTexture,Fe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let He=b.depthTexture;if(Oe.__boundDepthTexture!==He){if(He!==null&&Fe.has(He)&&(b.width!==He.image.width||b.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}let Ke=b.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(xe=!0);let Je=Fe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Je[H])?W=Je[H][q]:W=Je[H],pe=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?W=Fe.get(b).__webglMultisampledFramebuffer:Array.isArray(Je)?W=Je[q]:W=Je,k.copy(b.viewport),se.copy(b.scissor),J=b.scissorTest}else k.copy(Ve).multiplyScalar(K).floor(),se.copy(pt).multiplyScalar(K).floor(),J=Rt;if(q!==0&&(W=hm),Be.bindFramebuffer(L.FRAMEBUFFER,W)&&X&&Be.drawBuffers(b,W),Be.viewport(k),Be.scissor(se),Be.setScissorTest(J),pe){let Oe=Fe.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,Oe.__webglTexture,q)}else if(xe){let Oe=Fe.get(b.texture),Ke=H;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Oe.__webglTexture,q,Ke)}else if(b!==null&&q!==0){let Oe=Fe.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Oe.__webglTexture,q)}A=-1},this.readRenderTargetPixels=function(b,H,q,X,W,pe,xe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(De=De[xe]),De){Be.bindFramebuffer(L.FRAMEBUFFER,De);try{let Oe=b.texture,Ke=Oe.format,Je=Oe.type;if(!Et.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-X&&q>=0&&q<=b.height-W&&L.readPixels(H,q,X,W,ot.convert(Ke),ot.convert(Je),pe)}finally{let Oe=j!==null?Fe.get(j).__webglFramebuffer:null;Be.bindFramebuffer(L.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=function(b,H,q,X,W,pe,xe){return Ps(this,null,function*(){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(De=De[xe]),De)if(H>=0&&H<=b.width-X&&q>=0&&q<=b.height-W){Be.bindFramebuffer(L.FRAMEBUFFER,De);let Oe=b.texture,Ke=Oe.format,Je=Oe.type;if(!Et.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let He=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,He),L.bufferData(L.PIXEL_PACK_BUFFER,pe.byteLength,L.STREAM_READ),L.readPixels(H,q,X,W,ot.convert(Ke),ot.convert(Je),0);let bt=j!==null?Fe.get(j).__webglFramebuffer:null;Be.bindFramebuffer(L.FRAMEBUFFER,bt);let Lt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),yield KC(L,Lt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,He),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pe),L.deleteBuffer(He),L.deleteSync(Lt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(b,H=null,q=0){let X=Math.pow(2,-q),W=Math.floor(b.image.width*X),pe=Math.floor(b.image.height*X),xe=H!==null?H.x:0,De=H!==null?H.y:0;D.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,xe,De,W,pe),Be.unbindTexture()};let pm=L.createFramebuffer(),ia=L.createFramebuffer();this.copyTextureToTexture=function(b,H,q=null,X=null,W=0,pe=null){pe===null&&(W!==0?(Du("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=W,W=0):pe=0);let xe,De,Oe,Ke,Je,He,bt,Lt,dn,Qt=b.isCompressedTexture?b.mipmaps[pe]:b.image;if(q!==null)xe=q.max.x-q.min.x,De=q.max.y-q.min.y,Oe=q.isBox3?q.max.z-q.min.z:1,Ke=q.min.x,Je=q.min.y,He=q.isBox3?q.min.z:0;else{let $n=Math.pow(2,-W);xe=Math.floor(Qt.width*$n),De=Math.floor(Qt.height*$n),b.isDataArrayTexture?Oe=Qt.depth:b.isData3DTexture?Oe=Math.floor(Qt.depth*$n):Oe=1,Ke=0,Je=0,He=0}X!==null?(bt=X.x,Lt=X.y,dn=X.z):(bt=0,Lt=0,dn=0);let Nt=ot.convert(H.format),ze=ot.convert(H.type),pn;H.isData3DTexture?(D.setTexture3D(H,0),pn=L.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(D.setTexture2DArray(H,0),pn=L.TEXTURE_2D_ARRAY):(D.setTexture2D(H,0),pn=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);let Ft=L.getParameter(L.UNPACK_ROW_LENGTH),yi=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Hr=L.getParameter(L.UNPACK_SKIP_PIXELS),jn=L.getParameter(L.UNPACK_SKIP_ROWS),zr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Qt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ke),L.pixelStorei(L.UNPACK_SKIP_ROWS,Je),L.pixelStorei(L.UNPACK_SKIP_IMAGES,He);let en=b.isDataArrayTexture||b.isData3DTexture,ni=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){let $n=Fe.get(b),bn=Fe.get(H),yn=Fe.get($n.__renderTarget),ra=Fe.get(bn.__renderTarget);Be.bindFramebuffer(L.READ_FRAMEBUFFER,yn.__webglFramebuffer),Be.bindFramebuffer(L.DRAW_FRAMEBUFFER,ra.__webglFramebuffer);for(let Sr=0;Sr<Oe;Sr++)en&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.get(b).__webglTexture,W,He+Sr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.get(H).__webglTexture,pe,dn+Sr)),L.blitFramebuffer(Ke,Je,xe,De,bt,Lt,xe,De,L.DEPTH_BUFFER_BIT,L.NEAREST);Be.bindFramebuffer(L.READ_FRAMEBUFFER,null),Be.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||Fe.has(b)){let $n=Fe.get(b),bn=Fe.get(H);Be.bindFramebuffer(L.READ_FRAMEBUFFER,pm),Be.bindFramebuffer(L.DRAW_FRAMEBUFFER,ia);for(let yn=0;yn<Oe;yn++)en?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$n.__webglTexture,W,He+yn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,$n.__webglTexture,W),ni?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bn.__webglTexture,pe,dn+yn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bn.__webglTexture,pe),W!==0?L.blitFramebuffer(Ke,Je,xe,De,bt,Lt,xe,De,L.COLOR_BUFFER_BIT,L.NEAREST):ni?L.copyTexSubImage3D(pn,pe,bt,Lt,dn+yn,Ke,Je,xe,De):L.copyTexSubImage2D(pn,pe,bt,Lt,Ke,Je,xe,De);Be.bindFramebuffer(L.READ_FRAMEBUFFER,null),Be.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ni?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(pn,pe,bt,Lt,dn,xe,De,Oe,Nt,ze,Qt.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(pn,pe,bt,Lt,dn,xe,De,Oe,Nt,Qt.data):L.texSubImage3D(pn,pe,bt,Lt,dn,xe,De,Oe,Nt,ze,Qt):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pe,bt,Lt,xe,De,Nt,ze,Qt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pe,bt,Lt,Qt.width,Qt.height,Nt,Qt.data):L.texSubImage2D(L.TEXTURE_2D,pe,bt,Lt,xe,De,Nt,ze,Qt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ft),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yi),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Hr),L.pixelStorei(L.UNPACK_SKIP_ROWS,jn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,zr),pe===0&&H.generateMipmaps&&L.generateMipmap(pn),Be.unbindTexture()},this.copyTextureToTexture3D=function(b,H,q=null,X=null,W=0){return Du('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,H,q,X,W)},this.initRenderTarget=function(b){Fe.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),Be.unbindTexture()},this.resetState=function(){V=0,F=0,j=null,Be.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}};var rm=class n{renderer=new nm;scene=new fu;camera;stars;asteroidTexture;ngOnInit(){this.loadTexture().then(()=>{this.setupScene()})}loadTexture(){return Ps(this,null,function*(){let e=new yu;this.asteroidTexture=yield new Promise(t=>e.load("asteroid.jpg",t))})}setupScene(){this.camera=new Qn(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,0,50),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement);let e=new _u(16777215,1);e.position.set(5,10,7.5),this.scene.add(e),window.addEventListener("resize",this.onWindowResize.bind(this)),this.addStarField(1e3),this.animate()}addStarField(e=1e3){let t=new xr,i=[];for(let s=0;s<e;s++){let a=(Math.random()-.5)*1e3,l=(Math.random()-.5)*1e3,u=(Math.random()-.5)*1e3;i.push(a,l,u)}t.setAttribute("position",new Qi(i,3));let r=new bc({color:16777215,size:.8,transparent:!0,opacity:.8,blending:xu,depthWrite:!1,sizeAttenuation:!1});this.stars=new pu(t,r),this.scene.add(this.stars)}animate(){requestAnimationFrame(()=>this.animate()),this.animateStars(),this.renderer.render(this.scene,this.camera)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animateStars(){let e=this.stars.geometry.attributes.position.array,t=1.5;for(let i=0;i<e.length;i+=3)e[i+2]+=t,e[i+2]>0&&(e[i+2]=f0.randFloat(-1e3,-200));this.stars.geometry.attributes.position.needsUpdate=!0}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Yn({type:n,selectors:[["app-background"]],decls:2,vars:0,consts:[["canvasContainer",""],[1,"canvas-container"]],template:function(t,i){t&1&&ai(0,"div",1,0)},styles:[".canvas-container[_ngcontent-%COMP%]{width:100%;height:100%}"]})};var sm=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Yn({type:n,selectors:[["app-about"]],decls:7,vars:0,consts:[["id","about"],[1,"about-container"],[1,"info"],[1,"text"]],template:function(t,i){t&1&&(nn(0,"section",0)(1,"div",1)(2,"h1"),Gn(3,"Hey, I'm Anandteertha Rao"),rn(),nn(4,"div",2)(5,"p",3),Gn(6,"I build things with code and love turning ideas into something real. Always reaching for the stars \u2728"),rn()()()())},styles:["[_nghost-%COMP%]{position:relative;z-index:0;display:block}section[_ngcontent-%COMP%]{background-position:center;height:100vh;min-height:70rem;max-height:120rem;position:relative}.about-container[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:90rem;width:90%}.info[_ngcontent-%COMP%]{margin:3rem auto 0;max-width:80rem}.text[_ngcontent-%COMP%]{color:#cfcfcf;opacity:.9;font-size:2rem;text-align:center;width:100%;line-height:2}"]})};var om=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Yn({type:n,selectors:[["app-nav-bar"]],decls:21,vars:0,consts:[[1,"header-content"],[1,"logo-container"],[1,"image-container"],["src","assets/anand-pic.JPG","alt","Anandteertha Rao"],[1,"main"],[1,"links"],[1,"link-wrapper"],["href","#about",1,"header-link"],["href","#workExperience",1,"header-link"],["href","#projects",1,"header-link"],["href","#",1,"header-link"]],template:function(t,i){t&1&&(nn(0,"header")(1,"div",0)(2,"div",1)(3,"div",2),ai(4,"img",3),rn(),nn(5,"span"),Gn(6,"Anandteertha Rao"),rn()(),nn(7,"div",4)(8,"ul",5)(9,"li",6)(10,"a",7),Gn(11,"About"),rn()(),nn(12,"li",6)(13,"a",8),Gn(14,"Work Experience"),rn()(),nn(15,"li",6)(16,"a",9),Gn(17,"Projects"),rn()(),nn(18,"li",6)(19,"a",10),Gn(20,"Contact"),rn()()()()()())},styles:["header[_ngcontent-%COMP%]{position:fixed;width:100%;z-index:1000;box-shadow:0 10px 100px #6564641a;background-color:#000}.header-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:1rem 5rem}.link-wrapper[_ngcontent-%COMP%]{list-style:none}.logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer;color:#e4e4e4;transition:color .3s}.logo-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{width:5rem;height:5rem;border-radius:50px;overflow:hidden;margin-right:1.5rem;background:#7843e9}.logo-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;display:block}.logo-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.8rem;text-transform:uppercase;font-weight:700;letter-spacing:1px}.main[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:inherit;font-family:inherit}.links[_ngcontent-%COMP%]{display:flex}.header-link[_ngcontent-%COMP%]{padding:2.2rem 3rem;display:inline-block;font-size:1.6rem;color:#e4e4e4;text-transform:uppercase;letter-spacing:1px;font-weight:600;transition:color .3s;text-decoration:none}@media only screen and (max-width: 37.5em){.links[_ngcontent-%COMP%]{display:none}}"]})};var PD=VO(ND());function EW(n,e){if(n&1&&(nn(0,"h1"),Gn(1),rn()),n&2){let t=Cl().$implicit;vi(),Vf("",t.name," | ",t.role,"")}}function wW(n,e){if(n&1&&(nn(0,"h1"),Gn(1),rn()),n&2){let t=Cl().$implicit;vi(),ja(t.name)}}function bW(n,e){if(n&1&&(nn(0,"li",20),Gn(1),rn()),n&2){let t=e.$implicit;vi(),Bf(" ",t," ")}}function TW(n,e){if(n&1&&(nn(0,"ul"),Ro(1,bW,2,1,"li",19),rn()),n&2){let t=Cl().$implicit;vi(),Di("ngForOf",t.description)}}function CW(n,e){if(n&1&&(nn(0,"p"),Gn(1),rn()),n&2){let t=Cl().$implicit;vi(),ja(t.description[0])}}function DW(n,e){if(n&1&&(nn(0,"span",21),Gn(1),rn()),n&2){let t=e.$implicit;vi(),ja(t)}}function AW(n,e){if(n&1&&(nn(0,"div",8)(1,"div",9),ai(2,"img",10),rn(),nn(3,"div",11)(4,"div",12)(5,"div",13),Ro(6,EW,2,2,"h1",14)(7,wW,2,1,"ng-template",null,0,My),rn(),nn(9,"div",15)(10,"small")(11,"i"),Gn(12),rn()()()(),nn(13,"div",16),Ro(14,TW,2,1,"ul",14)(15,CW,2,1,"ng-template",null,1,My),rn(),nn(17,"div",17),Ro(18,DW,2,1,"span",18),rn()()()),n&2){let t,i=e.$implicit,r=xy(8),s=xy(16);vi(2),Di("id",(t=i.id)!==null&&t!==void 0?t:"")("src",i.logoPath,Hw)("alt",i.logoPath),vi(4),Di("ngIf",!!i.role)("ngIfElse",r),vi(6),Vf("",i.from," - ",i.to,""),vi(2),Di("ngIf",i.description.length>1)("ngIfElse",s),vi(4),Di("ngForOf",i.skills)}}var kc=class n{title="";entities=[];get id(){return(0,PD.camelCase)(this.title)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Yn({type:n,selectors:[["app-work-project-entity"]],inputs:{title:"title",entities:"entities"},decls:7,vars:3,consts:[["displayName",""],["simpleDescription",""],[3,"id"],[1,"main-container"],[1,"title"],[1,"heading-main"],[1,"content"],["class","content-container",4,"ngFor","ngForOf"],[1,"content-container"],[1,"logo"],[3,"id","src","alt"],[1,"main"],[1,"header"],[1,"header-details"],[4,"ngIf","ngIfElse"],[1,"header-duration"],[1,"description"],[1,"skills"],["class","skill",4,"ngFor","ngForOf"],["class","text-description",4,"ngFor","ngForOf"],[1,"text-description"],[1,"skill"]],template:function(t,i){t&1&&(nn(0,"section",2)(1,"div",3)(2,"div",4)(3,"h1",5),Gn(4),rn()(),nn(5,"div",6),Ro(6,AW,19,10,"div",7),rn()()()),t&2&&(Di("id",i.id),vi(4),ja(i.title),vi(2),Di("ngForOf",i.entities))},dependencies:[jf,Wf,Cy],encapsulation:2})};var am=class n{title="Work Experience";workExperience=[{name:"Raychem (Chemelex)",description:["Led the development of a smart Python code editor, allowing users to run custom scripts securely.","Worked on a 3D piping system renderer."],from:"5th July 2022",to:"1st April 2025",skills:["TypeScript","JavaScript","Angular","Three.Js","Python",".NET","HTML","CSS","AWS","GIT","Gitlab","JIRA"],logoPath:"assets/chemelex.png",role:"Full Stack Developer"},{name:"Outrider.live",description:["Integrated Google Maps Drawing API to display live salesman locations and building backend APIs for seamless data exchange.","Oversaw task assignments, conducted code reviews, and coordinated directly with stakeholders to translate business requirements into technical solutions."],from:"3rd September 2020",to:"19th June 2021",skills:["NodeJS","JavaScript","Socket.io","HTML","CSS","Github","Scrum Master","Leadership"],logoPath:"assets/outrider.png",role:"Software developer Intern",id:"fitImage"}];static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Yn({type:n,selectors:[["app-work-experience"]],decls:1,vars:2,consts:[[3,"entities","title"]],template:function(t,i){t&1&&ai(0,"app-work-project-entity",0),t&2&&Di("entities",i.workExperience)("title",i.title)},dependencies:[kc],encapsulation:2})};var cm=class n{title="Projects";projects=[{name:"Faculty Attendance System",description:["A smart faculty attendance system using facial recognition, geofencing, and secure Node.js backend, enabling one-click attendance with fraud prevention. Published in the Turkish Journal of Computer and Mathematics."],from:"January 2021",to:"May 2021",skills:["Facial Recognition","Python","OpenCV","Node.js","REST APIs","Geofencing","Haversine Formula","Authentication & Authorization","Research & Technical Writing"],logoPath:"assets/faculty-attendance.png",role:""},{name:"Crowd Counting",description:["Built a real-time crowd counting system using YOLO-based human detection and Flask backend","Developed custom algorithms to distinguish overlapping individuals and eliminate false positives (e.g., mannequins, posters) from camera footage in malls."],from:"January 2021",to:"April 2021",skills:["Python","YOLO (You Only Look Once)","OpenCV","Flask","Real-time Video Processing","Multithreading","Data Visualization"],logoPath:"assets/crowd-counting.png",role:""},{name:"Gym Manager Application",description:["Led development of a full-featured Gym Manager Application supporting user registration, multi-tier subscriptions, seamless payment integration, and real-time trainer-client chat using Socket.io."],from:"September 2020",to:"January 2021",skills:["NodeJS","Socket.io","HTML","CSS","EJS","MVC","Express JS","Stripe","MySQL"],logoPath:"assets/gym-manager-application.png",role:""}];static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Yn({type:n,selectors:[["app-projects"]],decls:1,vars:2,consts:[[3,"title","entities"]],template:function(t,i){t&1&&ai(0,"app-work-project-entity",0),t&2&&Di("title",i.title)("entities",i.projects)},dependencies:[kc],encapsulation:2})};var lm=class n{title="client";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Yn({type:n,selectors:[["app-root"]],decls:5,vars:0,template:function(t,i){t&1&&ai(0,"app-nav-bar")(1,"app-background")(2,"app-about")(3,"app-work-experience")(4,"app-projects")},dependencies:[rm,sm,om,am,cm],styles:["[_nghost-%COMP%]{display:block;position:relative;z-index:0}"]})};ky(lm,zT).catch(n=>console.error(n));
