(()=>{var Ky=Object.defineProperty;var Qy=(t,e,i)=>()=>{if(i)throw i[0];try{return t&&(e=t(t=0)),e}catch(n){throw i=[n],n}};var Zy=(t,e)=>{for(var i in e)Ky(t,i,{get:e[i],enumerable:!0})};var _y={};Zy(_y,{DrawingUtils:()=>Yi,FaceDetector:()=>vn,FaceLandmarker:()=>mt,FilesetResolver:()=>so,GestureRecognizer:()=>qi,HandLandmarker:()=>Ki,HolisticLandmarker:()=>rt,ImageClassifier:()=>xn,ImageEmbedder:()=>rn,ImageSegmenter:()=>Qi,ImageSegmenterResult:()=>bu,InteractiveSegmenter:()=>Zi,InteractiveSegmenterLegacy:()=>Hn,InteractiveSegmenterLegacyResult:()=>Cu,MPImage:()=>Ii,MPMask:()=>ci,ObjectDetector:()=>yn,PoseLandmarker:()=>Ji,TaskRunner:()=>Pl,VisionTaskRunner:()=>on});function n1(t,e){e:{for(var i=["CLOSURE_FLAGS"],n=na,s=0;s<i.length;s++)if((n=n[i[s]])==null){i=null;break e}i=n}return(t=i&&i[t])!=null?t:e}function Xt(t,e){t=t.split(".");for(var i,n=na;t.length&&(i=t.shift());)t.length||e===void 0?n=n[i]&&n[i]!==Object.prototype[i]?n[i]:n[i]={}:n[i]=e}function Qr(){throw Error("Invalid UTF8")}function F0(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}function s1(t){if(AT)t=(yT||=new TextEncoder).encode(t);else{let i=0,n=new Uint8Array(3*t.length);for(let s=0;s<t.length;s++){var e=t.charCodeAt(s);if(e<128)n[i++]=e;else{if(e<2048)n[i++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&s<t.length){let r=t.charCodeAt(++s);if(r>=56320&&r<=57343){e=1024*(e-55296)+r-56320+65536,n[i++]=e>>18|240,n[i++]=e>>12&63|128,n[i++]=e>>6&63|128,n[i++]=63&e|128;continue}s--}e=65533}n[i++]=e>>12|224,n[i++]=e>>6&63|128}n[i++]=63&e|128}}t=i===n.length?n:n.subarray(0,i)}return t}function r1(t){na.setTimeout(()=>{throw t},0)}function O0(){var t=na.navigator;return t&&(t=t.userAgent)?t:""}function Ru(t){return Ru[" "](t),t}function ST(t){var e=t.length,i=3*e/4;i%3?i=Math.floor(i):"=.".indexOf(t[e-1])!=-1&&(i="=.".indexOf(t[e-2])!=-1?i-2:i-1);var n=new Uint8Array(i),s=0;return(function(r,a){function o(c){for(;l<r.length;){let u=r.charAt(l++),d=Ml[u];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return c}o1();for(var l=0;;){let c=o(-1),u=o(0),d=o(64),h=o(64);if(h===64&&c===-1)break;a(c<<2|u>>4),d!=64&&(a(u<<4&240|d>>2),h!=64&&a(d<<6&192|h))}})(t,function(r){n[s++]=r}),s!==i?n.subarray(0,s):n}function o1(){if(!Ml){Ml={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let i=0;i<5;i++){let n=t.concat(e[i].split(""));a1[i]=n;for(let s=0;s<n.length;s++){let r=n[s];Ml[r]===void 0&&(Ml[r]=s)}}}}function wT(t){return TT[t]||""}function c1(t){if(!l1)return ST(t);t=G0.test(t)?t.replace(G0,wT):t,t=atob(t);var e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return e}function dp(t){return ET&&t!=null&&t instanceof Uint8Array}function sa(){return bT||=new ds(null,lo)}function fp(t){h1(lo);var e=t.g;return(e=e==null||dp(e)?e:typeof e=="string"?c1(e):null)==null?e:t.g=e}function h1(t){if(t!==lo)throw Error("illegal external caller")}function u1(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function bl(t){return u1(t=Error(t),"warning"),t}function co(t,e){if(t!=null){var i=CT??={},n=i[t]||0;n>=e||(i[t]=n+1,u1(t=Error(),"incident"),r1(t))}}function aa(){return typeof BigInt=="function"}function vs(t,e,i=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?i&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}function Ul(t,e){_o||Se in t||f1(t,d1),t[Se]|=e}function Ai(t,e){_o||Se in t||f1(t,d1),t[Se]=e}function Bl(t){return Ul(t,34),t}function Cl(t){return Ul(t,8192),t}function an(t,e){return e===void 0?t.h!==ra&&!!(2&t.A[Se]):!!(2&e)&&t.h!==ra}function Du(t,e){if(t!=null){if(typeof t=="string")t=t?new ds(t,lo):sa();else if(t.constructor!==ds)if(dp(t))t=t.length?new ds(new Uint8Array(t),lo):sa();else{if(!e)throw Error();t=void 0}}return t}function p1(t,e,i){var n,s=128&e?0:-1,r=t.length;(n=!!r)&&(n=(n=t[r-1])!=null&&typeof n=="object"&&n.constructor===Object);var a=r+(n?-1:0);for(e=128&e?1:0;e<a;e++)i(e-s,t[e]);if(n){t=t[r-1];for(let o in t)!isNaN(o)&&i(+o,t[o])}}function Ao(t){return 128&t?m1:void 0}function Iu(t){return t.ib=!0,t}function _i(t){var e=t;if(W0(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(UT(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Pu?BigInt(t):t=BT(t)?t?"1":"0":W0(t)?t.trim()||"0":String(t)}function X0(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let i=0;i<t.length;i++){let n=t[i],s=e[i];if(n>s)return!1;if(n<s)return!0}}function Xf(t){var e=t>>>0;gt=e,Rt=(t-e)/4294967296>>>0}function oa(t){if(t<0){Xf(-t);let[e,i]=gp(gt,Rt);gt=e>>>0,Rt=i>>>0}else Xf(t)}function pp(t){var e=g1||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),Rt=0,gt=e.getUint32(0,!0)}function v1(t,e){var i=4294967296*e+(t>>>0);return Number.isSafeInteger(i)?i:fo(t,e)}function HT(t,e){return _i(aa()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):fo(t,e))}function x1(t,e){return aa()?_i(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):_i(mp(t,e))}function fo(t,e){if(t>>>=0,(e>>>=0)<=2097151)var i=""+(4294967296*e+t);else aa()?i=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(i=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),i+=8147497*e,e*=2,t>=1e7&&(i+=t/1e7>>>0,t%=1e7),i>=1e7&&(e+=i/1e7>>>0,i%=1e7),i=e+Y0(i)+Y0(t));return i}function Y0(t){return t=String(t),"0000000".slice(t.length)+t}function mp(t,e){if(2147483648&e)if(aa())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{let[i,n]=gp(t,e);t="-"+fo(i,n)}else t=fo(t,e);return t}function Fl(t){if(t.length<16)oa(Number(t));else if(aa())t=BigInt(t),gt=Number(t&BigInt(4294967295))>>>0,Rt=Number(t>>BigInt(32)&BigInt(4294967295));else{let e=+(t[0]==="-");Rt=gt=0;let i=t.length;for(let n=e,s=(i-e)%6+e;s<=i;n=s,s+=6){let r=Number(t.slice(n,s));Rt*=1e6,(gt=1e6*gt+r)>=4294967296&&(Rt+=Math.trunc(gt/4294967296),Rt>>>=0,gt>>>=0)}if(e){let[n,s]=gp(gt,Rt);gt=n,Rt=s}}}function gp(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function Dn(t){return Array.prototype.slice.call(t)}function y1(t){if(typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function zn(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function uu(t){if(typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function Mo(t){switch(typeof t){case"bigint":return!0;case"number":return Nl(t);case"string":return VT.test(t);default:return!1}}function Os(t){if(t!=null){if(!Nl(t))throw bl("enum");t|=0}return t}function la(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Nl(t)?0|t:void 0}function _1(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Nl(t)?t>>>0:void 0}function A1(t,e){if(e??=1024,!Mo(t))throw bl("int64");var i=typeof t;switch(e){case 512:switch(i){case"string":return du(t);case"bigint":return String($r(64,t));default:return T1(t)}case 1024:switch(i){case"string":return w1(t);case"bigint":return _i($r(64,t));default:return b1(t)}case 0:switch(i){case"string":return du(t);case"bigint":return _i($r(64,t));default:return Lu(t)}default:return(function(n,s=`unexpected value ${n}!`){throw Error(s)})(e,"Unknown format requested type for int64")}}function M1(t){var e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(Fl(t),mp(gt,Rt))}function S1(t){if(t[0]==="-")var e=!1;else e=(e=t.length)<20||e===20&&t<="18446744073709551615";return e?t:(Fl(t),fo(gt,Rt))}function Lu(t){if(t=Er(t),!fs(t)){oa(t);var e=gt,i=Rt;(t=2147483648&i)&&(i=~i>>>0,(e=1+~e>>>0)==0&&(i=i+1>>>0)),t=typeof(e=v1(e,i))=="number"?t?-e:e:t?"-"+e:e}return t}function E1(t){return(t=Er(t))>=0&&fs(t)||(oa(t),t=v1(gt,Rt)),t}function T1(t){return t=Er(t),fs(t)?t=String(t):(oa(t),t=mp(gt,Rt)),t}function du(t){var e=Er(Number(t));return fs(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),M1(t))}function w1(t){var e=Er(Number(t));return fs(e)?_i(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),aa()?_i($r(64,BigInt(t))):_i(M1(t)))}function b1(t){return fs(t)?_i(Lu(t)):_i(T1(t))}function fu(t){var e=typeof t;return t==null?t:e==="bigint"?_i($r(64,t)):Mo(t)?e==="string"?w1(t):b1(t):void 0}function vp(t){if(t==null)return t;var e=typeof t;if(e==="bigint")return String($r(64,t));if(Mo(t)){if(e==="string")return du(t);if(e==="number")return Lu(t)}}function C1(t){if(t==null||typeof t=="string"||t instanceof ds)return t}function R1(t){if(typeof t!="string")throw Error();return t}function Ns(t){if(t!=null&&typeof t!="string")throw Error();return t}function Ui(t){return t==null||typeof t=="string"?t:void 0}function xp(t,e,i,n){return t!=null&&t[ho]===uo?t:Array.isArray(t)?((n=(i=0|t[Se])|32&n|2&n)!==i&&Ai(t,n),new e(t)):(i?2&n?((t=e[H0])||(Bl((t=new e).A),t=e[H0]=t),e=t):e=new e:e=void 0,e)}function WT(t,e,i){return(t=e?A1(t,1024):fu(t))==null?i?zT:void 0:t}function XT(t){return t}function q0(t){return t}function Lf(t){if(2&t.M)throw Error("Cannot mutate an immutable Map")}function ZT(t,e,i,n,s,r){return t=xp(t,n,i,r),s&&(t=_p(t)),t}function JT(t){return[t,this.get(t)]}function K0(){return QT||=new Gs(Bl([]),void 0,void 0,void 0,YT)}function Uu(t){return _n?t[_n]:void 0}function pu(t,e){for(let i in t)!isNaN(i)&&e(t,+i,t[i])}function iw(t,e){e<100||co(IT,1)}function Bu(t,e,i,n){var s=n!==void 0;n=!!n;var r,a=_n;!s&&_o&&a&&(r=t[a])&&pu(r,iw),a=[];var o=t.length;r=4294967295;var l=!1,c=!!(64&e),u=c?128&e?0:-1:void 0;if(!(1&e)){var d=o&&t[o-1];d!=null&&typeof d=="object"&&d.constructor===Object?r=--o:d=void 0,!c||128&e||s||(l=!0,r=(jT??XT)(r-u,u,t,d,void 0)+u)}e=void 0;for(var h=0;h<o;h++){let f=t[h];if(f!=null&&(f=i(f,n))!=null)if(c&&h>=r){let g=h-u;(e??={})[g]=f}else a[h]=f}if(d)for(let f in d){if((o=d[f])==null||(o=i(o,n))==null)continue;let g;h=+f,c&&!Number.isNaN(h)&&(g=h+u)<r?a[g]=o:(e??={})[f]=o}return e&&(l?a.push(e):a[r]=e),s&&_n&&(t=Uu(t))&&t instanceof qf&&(a[_n]=(function(f){var g=new qf;return pu(f,(y,m,p)=>{g[m]=Dn(p)}),g.ka=f.ka,g})(t)),a}function nw(t){return t[0]=Rl(t[0]),t[1]=Rl(t[1]),t}function Rl(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return Wf(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[Se];return t.length===0&&1&e?void 0:Bu(t,e,Rl)}if(t!=null&&t[ho]===uo)return D1(t);if(t instanceof ds){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(l1){for(var i="",n=0,s=e.length-10240;n<s;)i+=String.fromCharCode.apply(null,e.subarray(n,n+=10240));i+=String.fromCharCode.apply(null,n?e.subarray(n):e),e=btoa(i)}else{i===void 0&&(i=0),o1(),i=a1[i],n=Array(Math.floor(e.length/3)),s=i[64]||"";let c=0,u=0;for(;c<e.length-2;c+=3){var r=e[c],a=e[c+1],o=e[c+2],l=i[r>>2];r=i[(3&r)<<4|a>>4],a=i[(15&a)<<2|o>>6],o=i[63&o],n[u++]=l+r+a+o}switch(l=0,o=s,e.length-c){case 2:o=i[(15&(l=e[c+1]))<<2]||s;case 1:e=e[c],n[u]=i[e>>2]+i[(3&e)<<4|l>>4]+o+s}e=n.join("")}t=t.g=e}return t}return t instanceof Gs?t=t.size!==0?t.ea(nw):void 0:void 0}return t}function D1(t){return Bu(t=t.A,0|t[Se],Rl)}function ea(t,e){return I1(t,e[0],e[1])}function I1(t,e,i,n=0){if(t==null){var s=32;i?(t=[i],s|=128):t=[],e&&(s=-16760833&s|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(s=0|t[Se],N0&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(N0)throw Error("carr");co(PT,5)})(),256&s)throw Error("farr");if(64&s)return(s|n)!==s&&Ai(t,s|n),t;if(i&&(s|=128,i!==t[0]))throw Error("mid");e:{s|=64;var r=(i=t).length;if(r){var a=r-1;let l=i[a];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((a-=e=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var o in l)(r=+o)<a&&(i[r+e]=l[o],delete l[o]);s=-16760833&s|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&o)<<14}}}return Ai(t,64|s|n),t}function sw(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var i=0|t[Se];return t.length===0&&1&i?void 0:Q0(t,i,e)}if(t!=null&&t[ho]===uo)return Z0(t);if(t instanceof Gs){if(2&(e=t.M))return t;if(!t.size)return;if(i=Bl(t.ea()),t.N)for(t=0;t<i.length;t++){let n=i[t],s=n[1];s=s==null||typeof s!="object"?void 0:s!=null&&s[ho]===uo?Z0(s):Array.isArray(s)?Q0(s,0|s[Se],!!(32&e)):void 0,n[1]=s}return i}return t instanceof ds?t:void 0}function Q0(t,e,i){return 2&e||(!i||4096&e||16&e?t=So(t,e,!1,i&&!(16&e)):(Ul(t,34),4&e&&Object.freeze(t))),t}function yp(t,e,i){return t=new t.constructor(e),i&&(t.h=ra),t.m=ra,t}function Z0(t){var e=t.A,i=0|e[Se];return an(t,i)?t:Ap(t,e,i)?yp(t,e):So(e,i)}function So(t,e,i,n){return n??=!!(34&e),t=Bu(t,e,sw,n),n=32,i&&(n|=2),Ai(t,e=16769217&e|n),t}function _p(t){var e=t.A,i=0|e[Se];return an(t,i)?Ap(t,e,i)?yp(t,e,!0):new t.constructor(So(e,i,!1)):t}function Eo(t){if(t.h!==ra)return!1;var e=t.A;return Ul(e=So(e,0|e[Se]),2048),t.A=e,t.h=void 0,t.m=void 0,!0}function ca(t){if(!Eo(t)&&an(t,0|t.A[Se]))throw Error()}function br(t,e){e===void 0&&(e=0|t[Se]),32&e&&!(4096&e)&&Ai(t,4096|e)}function Ap(t,e,i){return!!(2&i)||!(!(32&i)||4096&i)&&(Ai(e,2|i),t.h=ra,!0)}function ni(t,e,i,n){if((e=Hs(t.A,e,void 0,n))!==null||i&&t.m!==ra)return e}function Hs(t,e,i,n){if(e===-1)return null;var s=e+(i?0:-1),r=t.length-1;if(!(r<1+(i?0:-1))){if(s>=r){var a=t[r];if(a!=null&&typeof a=="object"&&a.constructor===Object){i=a[e];var o=!0}else{if(s!==r)return;i=a}}else i=t[s];if(n&&i!=null){if((n=n(i))==null)return n;if(!Object.is(n,i))return o?a[e]=n:t[s]=n,n}return i}}function qe(t,e,i,n){ca(t);var s=t.A;return ui(s,0|s[Se],e,i,n),t}function ui(t,e,i,n,s){var r=i+(s?0:-1),a=t.length-1;if(a>=1+(s?0:-1)&&r>=a){let o=t[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[i]=n,e}return r<=a?(t[r]=n,e):(n!==void 0&&(i>=(a=(e??=0|t[Se])>>14&1023||536870912)?n!=null&&(t[a+(s?0:-1)]={[i]:n}):t[r]=n),e)}function L1(t,e,i,n){var s=t.A;return k1(s,0|s[Se],e,t=N1(t,n)===i?i:-1)!==void 0}function Zr(){return LT===void 0?2:4}function Jr(t,e,i,n,s){var r=t.A,a=0|r[Se];n=an(t,a)?1:n,s=!!s||n===3,n===2&&Eo(t)&&(a=0|(r=t.A)[Se]);var o=(t=Mp(r,e))===wr?7:0|t[Se],l=Sp(o,a),c=!(4&l);if(c){4&l&&(t=Dn(t),o=0,l=Mr(l,a),a=ui(r,a,e,t));let u=0,d=0;for(;u<t.length;u++){let h=i(t[u]);h!=null&&(t[d++]=h)}d<u&&(t.length=d),i=-513&l|4,l=i&=-1025,l&=-4097}return l!==o&&(Ai(t,l),2&l&&Object.freeze(t)),U1(t,l,r,a,e,n,c,s)}function U1(t,e,i,n,s,r,a,o){var l=e;return r===1||r===4&&(2&e||!(16&e)&&32&n)?Ar(e)||((e|=!t.length||a&&!(4096&e)||32&n&&!(4096&e||16&e)?2:256)!==l&&Ai(t,e),Object.freeze(t)):(r===2&&Ar(e)&&(t=Dn(t),l=0,e=Mr(e,n),n=ui(i,n,s,t)),Ar(e)||(o||(e|=16),e!==l&&Ai(t,e))),2&e||!(4096&e||16&e)||br(i,n),t}function Mp(t,e,i){return t=Hs(t,e,i),Array.isArray(t)?t:wr}function Sp(t,e){return 2&e&&(t|=2),1|t}function Ar(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function B1(t){return Du(t,!0)}function F1(t){t=Dn(t);for(let e=0;e<t.length;e++){let i=t[e]=Dn(t[e]);Array.isArray(i[1])&&(i[1]=Bl(i[1]))}return Cl(t)}function Ol(t,e,i,n){ca(t),ui(t=t.A,0|t[Se],e,(n==="0"?Number(i)===0:i===n)?void 0:i)}function Cr(t,e,i){if(2&e)throw Error();var n=Ao(e),s=Mp(t,i,n),r=s===wr?7:0|s[Se],a=Sp(r,e);return(2&a||Ar(a)||16&a)&&(a===r||Ar(a)||Ai(s,a),s=Dn(s),r=0,a=Mr(a,e),ui(t,e,i,s,n)),(a&=-13)!==r&&Ai(s,a),s}function N1(t,e){return Tp(Ep(t=t.A),t,void 0,e)}function Ep(t){if(_o)return t[xl]??(t[xl]=new Map);if(xl in t)return t[xl];var e=new Map;return Object.defineProperty(t,xl,{value:e}),e}function O1(t,e,i,n,s){var r=Ep(t),a=Tp(r,t,e,i,s);return a!==n&&(a&&(e=ui(t,e,a,void 0,s)),r.set(i,n)),e}function Tp(t,e,i,n,s){var r=t.get(n);if(r!=null)return r;r=0;for(let a=0;a<n.length;a++){let o=n[a];Hs(e,o,s)!=null&&(r!==0&&(i=ui(e,i,r,void 0,s)),r=o)}return t.set(n,r),r}function wp(t,e,i){var n=0|t[Se],s=Ao(n),r=Hs(t,i,s);if(r!=null&&r[ho]===uo){if(!an(r))return Eo(r),r.A;var a=r.A}else Array.isArray(r)&&(a=r);if(a){let o=0|a[Se];2&o&&(a=So(a,o))}return(a=ea(a,e))!==r&&ui(t,n,i,a,s),a}function k1(t,e,i,n,s){var r=!1;if((n=Hs(t,n,s,a=>{var o=xp(a,i,!1,e);return r=o!==a&&o!=null,o}))!=null)return r&&!an(n)&&br(t,e),n}function yt(t,e,i,n){var s=t.A,r=0|s[Se];if((e=k1(s,r,e,i,n))==null)return e;if(!an(t,r=0|s[Se])){let a=_p(e);a!==e&&(Eo(t)&&(r=0|(s=t.A)[Se]),br(s,r=ui(s,r,i,e=a,n)))}return e}function G1(t,e,i,n,s,r,a,o){var l=an(t,i);r=l?1:r,a=!!a||r===3,l=o&&!l,(r===2||l)&&Eo(t)&&(i=0|(e=t.A)[Se]);var c=(t=Mp(e,s))===wr?7:0|t[Se],u=Sp(c,i);if(o=!(4&u)){var d=t,h=i;let f=!!(2&u);f&&(h|=2);let g=!f,y=!0,m=0,p=0;for(;m<d.length;m++){let S=xp(d[m],n,!1,h);if(S instanceof n){if(!f){let b=an(S);g&&=!b,y&&=b}d[p++]=S}}p<m&&(d.length=p),u|=4,u=y?-4097&u:4096|u,u=g?8|u:-9&u}if(u!==c&&(Ai(t,u),2&u&&Object.freeze(t)),l&&!(8&u||!t.length&&(r===1||r===4&&(2&u||!(16&u)&&32&i)))){for(Ar(u)&&(t=Dn(t),u=Mr(u,i),i=ui(e,i,s,t)),n=t,l=u,c=0;c<n.length;c++)(d=n[c])!==(u=_p(d))&&(n[c]=u);l|=8,Ai(t,u=l=n.length?4096|l:-4097&l)}return U1(t,u,e,i,s,r,o,a)}function zs(t,e,i){var n=t.A;return G1(t,n,0|n[Se],e,i,Zr(),!1,!0)}function H1(t){return t==null&&(t=void 0),t}function Be(t,e,i,n,s){return qe(t,i,n=H1(n),s),n&&!an(n)&&br(t.A),t}function ps(t,e,i,n){e:{var s=n=H1(n);ca(t);let r=t.A,a=0|r[Se];if(s==null){let o=Ep(r);if(Tp(o,r,a,i)!==e)break e;o.set(i,0)}else a=O1(r,a,i,e);ui(r,a,e,s)}return n&&!an(n)&&br(t.A),t}function Kf(t,e,i){ca(t);var n=t.A,s=0|n[Se];if(i==null)return ui(n,s,e),t;var r=i===wr?7:0|i[Se],a=r,o=Ar(r),l=o||Object.isFrozen(i),c=!0,u=!0;for(let h=0;h<i.length;h++){var d=i[h];o||(d=an(d),c&&=!d,u&&=d)}return o||(r=c?13:5,r=u?-4097&r:4096|r),l&&r===a||(i=Dn(i),a=0,r=Mr(r,s)),r!==a&&Ai(i,r),s=ui(n,s,e,i),2&r||!(4096&r||16&r)||br(n,s),t}function Mr(t,e){return-273&(2&e?2|t:-3&t)}function Dl(t,e,i,n){var s=n;ca(t),t=G1(t,n=t.A,0|n[Se],i,e,2,!0),s=s??new i,t.push(s),e=i=t===wr?7:0|t[Se],(s=an(s))?(i&=-9,t.length===1&&(i&=-4097)):i|=4096,i!==e&&Ai(t,i),s||br(n)}function Rn(t,e,i){return la(ni(t,e,i))}function hi(t,e){return ni(t,e,void 0,zn)??0}function J0(t,e,i){return yt(t,e,i=N1(t,Xp)===i?i:-1,void 0)}function Qf(t,e){Ol(t,3,e==null?e:uu(e),!1)}function ms(t,e,i){if(i!=null){if(typeof i!="number"||!Nl(i))throw bl("int32");i|=0}qe(t,e,i)}function Uf(t,e,i){return qe(t,e,i==null?i:A1(i))}function nu(t,e,i){return qe(t,e,i==null?i:(function(n){if(!Mo(n))throw bl("uint64");switch(typeof n){case"string":var s=Er(Number(n));return fs(s)&&s>=0?n=_i(s):((s=n.indexOf("."))!==-1&&(n=n.substring(0,s)),n=aa()?_i(Yf(64,BigInt(n))):_i(S1(n))),n;case"bigint":return _i(Yf(64,n));default:return fs(n)?n=_i(E1(n)):((n=Er(n))>=0&&fs(n)?n=String(n):(oa(n),n=fo(gt,Rt)),n=_i(n)),n}})(i))}function Ue(t,e,i){qe(t,e,i==null?i:y1(i))}function ro(t,e,i){Ol(t,e,i==null?i:y1(i),0)}function An(t,e,i){Ol(t,e,Ns(i),"")}function mu(t,e,i){{ca(t);let a=t.A,o=0|a[Se];if(i==null)ui(a,o,e);else{var n=t=i===wr?7:0|i[Se],s=Ar(t),r=s||Object.isFrozen(i);for(s||(t=0),r||(i=Dn(i),n=0,t=Mr(t,o),r=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,s=0;s<i.length;s++){let l=i[s],c=R1(l);Object.is(l,c)||(r&&(i=Dn(i),n=0,t=Mr(t,o),r=!1),i[s]=c)}t!==n&&(r&&(i=Dn(i),t=Mr(t,o)),Ai(i,t)),ui(a,o,e,i)}}}function Fu(t,e,i){ca(t),Jr(t,e,Ui,2,!0).push(R1(i))}function Nu(t,e){if(typeof t=="string")return new io(c1(t),e);if(Array.isArray(t))return new io(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new io(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new io(t,!1);if(t.constructor===ds)return e=fp(t)||new Uint8Array(0),new io(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new io(t,!1);throw Error()}function bp(t,e){var i=0,n=0,s=0,r=t.h,a=t.g;do{var o=r[a++];i|=(127&o)<<s,s+=7}while(s<32&&128&o);if(s>32)for(n|=(127&o)>>4,s=3;s<32&&128&o;s+=7)n|=(127&(o=r[a++]))<<s;if(ta(t,a),!(128&o))return e(i>>>0,n>>>0);throw Error()}function Cp(t){for(var e=0,i=t.g,n=i+10,s=t.h;i<n;){let r=s[i++];if(e|=r,!(128&r))return ta(t,i),!!(127&e)}throw Error()}function Vs(t){var e=t.h,i=t.g,n=e[i++],s=127&n;if(128&n&&(s|=(127&(n=e[i++]))<<7,128&n&&(s|=(127&(n=e[i++]))<<14,128&n&&(s|=(127&(n=e[i++]))<<21,128&n&&(s|=(n=e[i++])<<28,128&n&&128&e[i++]&&128&e[i++]&&128&e[i++]&&128&e[i++]&&128&e[i++])))))throw Error();return ta(t,i),s}function gs(t){return Vs(t)>>>0}function gu(t){return bp(t,x1)}function Zf(t){var e=t.h,i=t.g,n=e[i],s=e[i+1],r=e[i+2];return e=e[i+3],ta(t,t.g+4),(n|s<<8|r<<16|e<<24)>>>0}function vu(t){var e=Zf(t);t=2*(e>>31)+1;var i=e>>>23&255;return e&=8388607,i==255?e?NaN:t*(1/0):i==0?1401298464324817e-60*t*e:t*Math.pow(2,i-150)*(e+8388608)}function rw(t){return Vs(t)}function ta(t,e){if(t.g=e,e>t.j)throw Error()}function z1(t,e){if(e<0)throw Error();var i=t.g;if((e=i+e)>t.j)throw Error();return t.g=e,i}function V1(t,e){if(e==0)return sa();var i=z1(t,e);return t.fa&&t.o?i=t.h.subarray(i,i+e):(t=t.h,i=i===(e=i+e)?new Uint8Array(0):GT?t.slice(i,e):new Uint8Array(t.subarray(i,e))),i.length==0?sa():new ds(i,lo)}function W1(t,e,i,n){if(xu.length){let s=xu.pop();return s.v(n),s.g.init(t,e,i,n),s}return new ow(t,e,i,n)}function X1(t){t.g.clear(),t.j=-1,t.h=-1,xu.length<100&&xu.push(t)}function Y1(t){var e=t.g;if(e.g==e.j)return!1;t.m=t.g.g;var i=gs(t.g);if(e=i>>>3,!((i&=7)>=0&&i<=5)||e<1)throw Error();return t.j=e,t.h=i,!0}function su(t){try{switch(t.h){case 0:t.h!=0?su(t):Cp(t.g);break;case 1:var e=t.g;ta(e,e.g+8);break;case 2:if(t.h!=2)su(t);else{var i=gs(t.g),n=t.g;ta(n,n.g+i)}break;case 5:var s=t.g;ta(s,s.g+4);break;case 3:q1();let r=t.j;try{for(;;){if(!Y1(t))throw Error();if(t.h==4){if(t.j!=r)throw Error();break}su(t)}}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{po>0&&po--}break;default:throw Error()}}catch(r){throw r instanceof RangeError?new SyntaxError:r}}function q1(){if(po>=100)throw new SyntaxError;po++}function kl(t,e,i){var n=t.g.j,s=gs(t.g),r=(s=t.g.g+s)-n;if(r<=0&&(t.g.j=s,i(e,t,void 0,void 0,void 0),r=s-t.g.g),r)throw Error();return t.g.g=s,t.g.j=n,e}function Rp(t){var e=gs(t.g),i=z1(t=t.g,e);if(t=t.h,_T){var n,s=t;(n=Pf)||(n=Pf=new TextDecoder("utf-8",{fatal:!0})),e=i+e,s=i===0&&e===s.length?s:s.subarray(i,e);try{var r=n.decode(s)}catch(o){if(Zh===void 0){try{n.decode(new Uint8Array([128]))}catch{}try{n.decode(new Uint8Array([97])),Zh=!0}catch{Zh=!1}}throw!Zh&&(Pf=void 0),o}}else{e=(r=i)+e,i=[];let o,l=null;for(;r<e;){var a=t[r++];a<128?i.push(a):a<224?r>=e?Qr():(o=t[r++],a<194||(192&o)!=128?(r--,Qr()):i.push((31&a)<<6|63&o)):a<240?r>=e-1?Qr():(o=t[r++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(n=t[r++]))!=128?(r--,Qr()):i.push((15&a)<<12|(63&o)<<6|63&n)):a<=244?r>=e-2?Qr():(o=t[r++],(192&o)!=128||o-144+(a<<28)>>30||(192&(n=t[r++]))!=128||(192&(s=t[r++]))!=128?(r--,Qr()):(a=(7&a)<<18|(63&o)<<12|(63&n)<<6|63&s,a-=65536,i.push(55296+(a>>10&1023),56320+(1023&a)))):Qr(),i.length>=8192&&(l=F0(l,i),i.length=0)}r=F0(l,i)}return r}function Dp(t){var e=gs(t.g);return V1(t.g,e)}function Gl(t,e,i){var n=gs(t.g);for(n=t.g.g+n;t.g.g<n;)i.push(e(t.g))}function lw(t){return new yu(4294967295&t,Math.floor(t/4294967296))}function $0(t){return t?/^\d+$/.test(t)?(Fl(t),new yu(gt,Rt)):null:cw||=new yu(0,0)}function hw(t){return new _u(4294967295&t,Math.floor(t/4294967296))}function K1(t){return t?/^-?\d+$/.test(t)?(Fl(t),new _u(gt,Rt)):null:uw||=new _u(0,0)}function Q1(t,e,i){return typeof BigInt64Array<"u"?(yl||(yl=new BigInt64Array(1),Jh=new Uint32Array(yl.buffer),yl[0]=BigInt(1),nv=Jh[0]===1),yl[0]=t,new e(Jh[t=nv?0:1],Jh[1-t])):(Bf||(ev=BigInt(Number.MIN_SAFE_INTEGER),tv=BigInt(Number.MAX_SAFE_INTEGER),iv=BigInt(4294967295),Bf=BigInt(32)),t>=ev&&t<=tv?i(Number(t)):(t=BigInt.asUintN(64,t),new e(Number(t&iv),Number(t>>Bf))))}function ks(t,e,i){for(;i>0||e>127;)t.g.push(127&e|128),e=(e>>>7|i<<25)>>>0,i>>>=7;t.g.push(e)}function To(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function Hl(t,e){if(e>=0)To(t,e);else{for(let i=0;i<9;i++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function dw(t,e){Fl(e),(function(i){var n=Rt>>31;i(gt<<1^n,(Rt<<1|gt>>>31)^n)})((i,n)=>{ks(t,i>>>0,n>>>0)})}function Il(t,e){t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function mo(t,e){e.length!==0&&(t.j.push(e),t.h+=e.length)}function $i(t,e,i){To(t.g,8*e+i)}function Ip(t,e){return $i(t,e,2),e=t.g.end(),mo(t,e),e.push(t.h),e}function Pp(t,e){var i=e.pop();for(i=t.h+t.g.length()-i;i>127;)e.push(127&i|128),i>>>=7,t.h++;e.push(i),t.h++}function Z1(t,e,i){if(i!=null)switch($i(t,e,0),typeof i){case"number":t=t.g,oa(i),ks(t,gt,Rt);break;case"bigint":i=Q1(i,_u,hw),ks(t.g,i.h,i.g);break;default:i=K1(i),ks(t.g,i.h,i.g)}}function zl(t,e,i){$i(t,e,2),To(t.g,i.length),mo(t,t.g.end()),mo(t,i)}function Au(t,e,i,n){i!=null&&(e=Ip(t,e),n(i,t),Pp(t,e))}function J1(t){typeof t=="string"&&K1(t)}function In(){var t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}function xs(t,e,i){var n=t.A;_n&&_n in n&&(n=n[_n])&&delete n[e.g],e.h?e.o(t,e.h,e.g,i,e.j):e.o(t,e.g,i,e.j)}function zu(t,e){return new wo(t,e,Lp)}function $1(t,e,i,n,s){Au(t,i,nx(e,n),s)}function ha(t,e,i,n){var s=n[t];if(s)return s;(s={}).Ea=n,s.ca=(function(d){switch(typeof d){case"boolean":return $T||=[0,void 0,!0];case"number":return d>0?void 0:d===0?ew||=[0,void 0]:[-d,void 0];case"string":return[0,d];case"object":return d}})(n[0]);var r=n[1],a=1;r&&r.constructor===Object&&(s.ia=r,typeof(r=n[++a])=="function"&&(s.wa=!0,ex??=r,tx??=n[a+1],r=n[a+=2]));for(var o={};r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var l=0;l<r.length;l++)o[r[l]]=r;r=n[++a]}for(l=1;r!==void 0;){let d;typeof r=="number"&&(l+=r,r=n[++a]);var c=void 0;if(r instanceof wo?d=r:(d=xw,a--),d?.j){r=n[++a],c=n;var u=a;typeof r=="function"&&(r=r(),c[u]=r),c=r}for(u=l+1,typeof(r=n[++a])=="number"&&r<0&&(u-=r,r=n[++a]);l<u;l++){let h=o[l];c?i(s,l,d,c,h):e(s,l,d,h)}}return n[t]=s}function ix(t){return Array.isArray(t)?t[0]instanceof wo?t:[yw,t]:[t,void 0]}function nx(t,e){return t instanceof ye?t.A:Array.isArray(t)?ea(t,e):void 0}function Np(t,e,i,n){var s=i.g;t[e]=n?(r,a,o)=>s(r,a,o,n):s}function Op(t,e,i,n,s){var r,a,o=i.g;t[e]=(l,c,u)=>o(l,c,u,a||=ha(Wu,Np,Op,n).ca,r||=kp(n),s)}function kp(t){var e=t[Jf];if(e!=null)return e;var i=ha(Wu,Np,Op,t);return e=i.wa?(n,s)=>ex(n,s,i):(n,s)=>{e:{q1();try{for(;Y1(s)&&s.h!=4;){let h=s.j,f=i[h];if(f==null){let g=i.ia;if(g){let y=g[h];if(y){let m=Aw(y);m!=null&&(f=i[h]=m)}}}if(f==null||!f(s,n,h)){var r=s;let g=r.m;if(su(r),r.ra)var a=void 0;else{let y=r.g.g-g;r.g.g=g,a=V1(r.g,y)}r=void 0;var o=n,l=h,c=a;c&&((r=o[_n]??(o[_n]=new qf))[l]??(r[l]=[])).push(c)}}let d=Uu(n);d&&(d.ka=i.Ea[rv]);var u=!0;break e}catch(d){throw d instanceof RangeError?new SyntaxError:d}finally{po>0&&po--}u=void 0}return u},t[Jf]=e,t[rv]=_w.bind(t),e}function _w(t,e,i,n){var s=this[Wu],r=this[Jf],a=ea(void 0,s.ca),o=Uu(t);if(o){var l=!1,c=s.ia;if(c){if(s=(u,d,h)=>{if(h.length!==0)if(c[d])for(let f of h){u=W1(f);try{l=!0,r(a,u)}finally{X1(u)}}else n?.(t,d,h)},e==null)pu(o,s);else if(o!=null){let u=o[e];u&&s(o,e,u)}if(l){let u=0|t[Se];if(2&u&&2048&u&&!i?.cb)throw Error();let d=Ao(u),h=(f,g)=>{if(Hs(t,f,d)!=null){if(i?.lb===1)return;throw Error()}g!=null&&(u=ui(t,u,f,g,d)),delete o[f]};e==null?p1(a,0|a[Se],(f,g)=>{h(f,g)}):h(e,Hs(a,e,d))}}}}function Aw(t){var e=(t=ix(t))[0].g;if(t=t[1]){let i=kp(t),n=ha(Wu,Np,Op,t).ca;return(s,r,a)=>e(s,r,a,n,i)}return e}function Xu(t,e,i){t[e]=i.h}function Yu(t,e,i,n){var s,r,a=i.h;t[e]=(o,l,c)=>a(o,l,c,r||=ha(Vu,Xu,Yu,n).ca,s||=sx(n))}function sx(t){var e=t[sv];if(!e){let i=ha(Vu,Xu,Yu,t);e=(n,s)=>rx(n,s,i),t[sv]=e}return e}function rx(t,e,i){p1(t,0|t[Se],(n,s)=>{if(s!=null){var r=(function(a,o){var l=a[o];if(l)return l;if((l=a.ia)&&(l=l[o])){var c=(l=ix(l))[0].h;if(l=l[1]){let u=sx(l),d=ha(Vu,Xu,Yu,l).ca;l=a.wa?tx(d,u):(h,f,g)=>c(h,f,g,d,u)}else l=c;return a[o]=l}})(i,n);r?r(e,s,n):n<500||co(Vf,3)}}),(t=Uu(t))&&pu(t,(n,s,r)=>{for(mo(e,e.g.end()),n=0;n<r.length;n++)mo(e,fp(r[n])||new Uint8Array(0))})}function Ws(t,e,i){if(Array.isArray(e)){var n=0|e[Se];if(4&n)return e;for(var s=0,r=0;s<e.length;s++){let a=t(e[s]);a!=null&&(e[r++]=a)}return r<s&&(e.length=r),t=1|n,i&&(t=-1537&t|4),t!==n&&Ai(e,t),i&&2&t&&Object.freeze(e),e}}function fi(t,e,i){return new wo(t,e,i)}function Xs(t,e,i){return new wo(t,e,i)}function bi(t,e,i){ui(t,0|t[Se],e,i,Ao(0|t[Se]))}function ox(t,e,i){(e=zn(e))!=null&&($i(t,i,5),t=t.g,pp(e),Il(t,gt))}function Gp(t,e,i){(e=vp(e))!=null&&(J1(e),Z1(t,i,e))}function lx(t,e,i){(e=la(e))!=null&&e!=null&&($i(t,i,0),Hl(t.g,e))}function cx(t,e,i){(e=e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0)!=null&&($i(t,i,0),t.g.g.push(e?1:0))}function hx(t,e,i){(e=Ui(e))!=null&&zl(t,i,s1(e))}function ux(t,e,i,n,s){Au(t,i,nx(e,n),s)}function Hp(t,e,i){(e=C1(e))!=null&&zl(t,i,Nu(e,!0).buffer)}function dx(t,e,i){(e=_1(e))!=null&&e!=null&&($i(t,i,0),To(t.g,e))}function fx(t,e,i){(e=la(e))!=null&&(e=parseInt(e,10),$i(t,i,0),Hl(t.g,e))}function px(t,e,i){return(t.h===5||t.h===2)&&(e=Cr(e,0|e[Se],i),t.h==2?Gl(t,vu,e):e.push(vu(t.g)),!0)}function mx(t,e,i){return t.h===0&&(bi(e,i,gu(t.g)),!0)}function gx(t,e,i){return(t.h===0||t.h===2)&&(e=Cr(e,0|e[Se],i),t.h==2?Gl(t,Vs,e):e.push(Vs(t.g)),!0)}function vx(t,e,i){return t.h===2&&(bi(e,i,(t=Dp(t))===sa()?void 0:t),!0)}function ys(t,e){return new jf(t,e)}function Rr(t,e){return(i,n)=>{e:{let r={ma:!0};n&&Object.assign(r,n),i=W1(i,void 0,void 0,r);try{let a=new t,o=a.A;kp(e)(o,i);var s=a;break e}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{X1(i)}s=void 0}return s}}function Vp(t){return e=>ax(e,t)}function Vl(t){return function(){return ax(this,t)}}function uv(t){var e;return Ff===void 0&&(Ff=(function(){var i=null;if(!hv)return i;try{let n=s=>s;i=hv.createPolicy("goog#html",{createHTML:n,createScript:n,createScriptURL:n})}catch{}return i})()),t=(e=Ff)?e.createScriptURL(t):t,new Pw(t)}function jh(t,...e){if(e.length===0)return uv(t[0]);var i=t[0];for(let n=0;n<e.length;n++)i+=encodeURIComponent(e[n])+t[n+1];return uv(i)}function Qt(t,e){Fu(t,3,e)}function ft(t,e){Fu(t,4,e)}function Pn(t,e){Dl(t,1,ln,e)}function Zt(t,e){Fu(t,10,e)}function Et(t,e){Fu(t,15,e)}function ip(t,e){return e=e?e.clone():new Yp,t.displayNamesLocale!==void 0?qe(e,1,Ns(t.displayNamesLocale)):t.displayNamesLocale===void 0&&qe(e,1),t.maxResults!==void 0?ms(e,2,t.maxResults):"maxResults"in t&&qe(e,2),t.scoreThreshold!==void 0?Ue(e,3,t.scoreThreshold):"scoreThreshold"in t&&qe(e,3),t.categoryAllowlist!==void 0?mu(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&qe(e,4),t.categoryDenylist!==void 0?mu(e,5,t.categoryDenylist):"categoryDenylist"in t&&qe(e,5),e}function ty(t){var e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function $p(t,e=-1,i=""){return{categories:t.map(n=>({index:Rn(n,1)??0??-1,score:hi(n,2)??0,categoryName:Ui(ni(n,3))??""??"",displayName:Ui(ni(n,4))??""??""})),headIndex:e,headName:i}}function hb(t){var e={classifications:zs(t,Gw,1).map(i=>$p(yt(i,Rx,4)?.g()??[],Rn(i,2)??0,Ui(ni(i,3))??""))};return(function(i){return i==null?i:typeof i=="bigint"?(Wf(i)?i=Number(i):(i=$r(64,i),i=Wf(i)?Number(i):String(i)),i):Mo(i)?typeof i=="number"?Lu(i):du(i):void 0})(ni(t,2,void 0,fu))!=null&&(e.timestampMs=ty(ni(t,2,void 0,fu)??P1)),e}function iy(t){var e=Jr(t,3,zn,Zr()),i=Jr(t,2,la,Zr()),n=Jr(t,1,Ui,Zr()),s=Jr(t,9,Ui,Zr()),r={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)r.categories.push({score:e[a],index:i[a]??-1,categoryName:n[a]??"",displayName:s[a]??""});if((e=yt(t,Nf,4)?.j())&&(r.boundingBox={originX:Rn(e,1,yr)??0,originY:Rn(e,2,yr)??0,width:Rn(e,3,yr)??0,height:Rn(e,4,yr)??0,angle:0}),yt(t,Nf,4)?.g().length)for(let a of yt(t,Nf,4).g())r.keypoints.push({x:ni(a,1,yr,zn)??0,y:ni(a,2,yr,zn)??0,score:ni(a,4,yr,zn)??0,label:Ui(ni(a,3,yr))??""});return r}function Qu(t){var e=[];for(let i of zs(t,Lx,1))e.push({x:hi(i,1)??0,y:hi(i,2)??0,z:hi(i,3)??0,visibility:hi(i,4)??0});return e}function wl(t){var e=[];for(let i of zs(t,Px,1))e.push({x:hi(i,1)??0,y:hi(i,2)??0,z:hi(i,3)??0,visibility:hi(i,4)??0});return e}function Av(t){return Array.from(t,e=>e>127?e-256:e)}function Mv(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);var i=0,n=0,s=0;for(let r=0;r<t.length;r++)i+=t[r]*e[r],n+=t[r]*t[r],s+=e[r]*e[r];if(n<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return i/Math.sqrt(n*s)}async function ny(t){if(t)return!0;if($h===void 0)try{await WebAssembly.instantiate(ub),$h=!0}catch{$h=!1}return $h}async function eu(t,e,i){return{wasmLoaderPath:`${e}/${t}_${i=`wasm${i?"_module":""}${await ny(i)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${i}.wasm`}}function Sv(t){return qe(new np,1,Os(t))}function sp(t,e){return qe(t,1,Os(e))}function rp(t,e){return qe(t,2,Os(e))}function op(t,e){var i=new sy;i=Be(i,0,1,t.B),i=Be(i,0,2,e),e=qe(e=new vb,6,Du(i=i.g(),!1)),(t=t.l).error||t.h.push(e)}function Pv(t,e){var i={P:e.P-t.j.P,T:e.T-t.j.T,V:e.V-t.j.V,R:e.R-t.j.R,X:e.X-t.j.X,U:e.U,aa:e.aa},n=rp(sp(new ap,t.C),1);i=ry(t,i),op(t,n=ps(n,4,Tu,i)),t.j=e}function ry(t,e){var i=new db;return t=nu(t=Uf(t=qe(i,1,Os(t.D)),7,e.R),5,e.U),t=nu(t,6,e.aa),e.V>0&&nu(t,4,e.X/e.V),e.P!==0&&(i=Uf(i=Sv(3),2,e.P),Dl(t,8,np,i)),e.T!==0&&(e=Uf(i=Sv(4),2,e.T),Dl(t,8,np,e)),t}function em(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function Lv(t){if(typeof importScripts!="function"){let e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise((i,n)=>{e.addEventListener("load",()=>{i()},!1),e.addEventListener("error",s=>{n(s)},!1),document.body.appendChild(e)})}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{let i=self.import;i?await i(t.toString()):await import(t.toString())}}}function tm(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Pe(t,e,i){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),i(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function ay(t,e,i){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(i?t.i._bindTextureToStream(i):t.i._bindTextureToCanvas(),!(i=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1);var[n,s]=tm(e);return!t.j||n===t.i.canvas.width&&s===t.i.canvas.height||(t.i.canvas.width=n,t.i.canvas.height=s),[n,s]}function Uv(t,e,i){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");var n=new Uint32Array(e.length);for(let s=0;s<e.length;s++)n[s]=t.i.stringToNewUTF8(e[s]);e=t.i._malloc(4*n.length),t.i.HEAPU32.set(n,e>>2),i(e);for(let s of n)t.i._free(s);t.i._free(e)}function hs(t,e,i){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=i}function _r(t,e,i){var n=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(s,r,a)=>{r?(i(n,a),n=[]):n.push(s)}}function ly(t){return class extends t{get pa(){return this.i}Sa(){if(typeof this.pa._mediapipeLoggerGetEncodedApiKey=="function"){let e=this.pa._mediapipeLoggerGetEncodedApiKey();return this.pa._decodeBase64(e)}}}}function cy(t){return class extends t{Za(){this.i._registerModelResourcesGraphService()}}}async function Eb(t,e,i,n){return t=await(async(s,r,a,o,l)=>{if(r&&await Lv(r),!self.ModuleFactory||a&&(await Lv(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,o)})(t,i.wasmLoaderPath,i.assetLoaderPath,e,{locateFile:s=>s.endsWith(".wasm")?i.wasmBinaryPath.toString():i.assetBinaryPath&&s.endsWith(".data")?i.assetBinaryPath.toString():s}),(function(s,r){r=r.runningMode??"";var a=s.g.Sa();s.m=new Ab(s.C(),r,a)})(t,n),await t.v(n),t}async function ou(t,e,i,n){return Eb(t,e,i,n)}function kf(t,e){var i=yt(t.baseOptions,Eu,1)||new Eu;typeof e=="string"?(qe(i,2,Ns(e)),qe(i,1)):e instanceof Uint8Array&&(qe(i,1,Du(e,!1)),qe(i,2)),Be(t.baseOptions,0,1,i)}function Bv(t){try{let e=t.K.length;if(e===1)throw Error(t.K[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.K.map(i=>i.message).join(", "))}finally{t.K=[]}}function Me(t,e){t.I=Math.max(t.I,e)}function Zu(t,e){t.D=new ln,An(t.D,2,"PassThroughCalculator"),Qt(t.D,"free_memory"),ft(t.D,"free_memory_unused_out"),Zt(e,"free_memory"),Pn(e,t.D)}function go(t,e){Qt(t.D,e),ft(t.D,e+"_unused_out")}function Ju(t){t.g.addBoolToStream(!0,"free_memory",t.I)}function ji(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}function Fv(t,e,i){var n=t.g;if(i=ji(n.createShader(i),"Failed to create WebGL shader"),n.shaderSource(i,e),n.compileShader(i),!n.getShaderParameter(i,n.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${n.getShaderInfoLog(i)}`);return n.attachShader(t.h,i),i}function Nv(t,e){var i=t.g,n=ji(i.createVertexArray(),"Failed to create vertex array");i.bindVertexArray(n);var s=ji(i.createBuffer(),"Failed to create buffer");i.bindBuffer(i.ARRAY_BUFFER,s),i.enableVertexAttribArray(t.F),i.vertexAttribPointer(t.F,2,i.FLOAT,!1,0,0),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),i.STATIC_DRAW);var r=ji(i.createBuffer(),"Failed to create buffer");return i.bindBuffer(i.ARRAY_BUFFER,r),i.enableVertexAttribArray(t.K),i.vertexAttribPointer(t.K,2,i.FLOAT,!1,0,0),i.bufferData(i.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),i.STATIC_DRAW),i.bindBuffer(i.ARRAY_BUFFER,null),i.bindVertexArray(null),new lp(i,n,s,r)}function im(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function Xl(t,e,i,n){return im(t,e),t.h||(t.m(),t.I()),i?(t.l||(t.l=Nv(t,!0)),i=t.l):(t.D||(t.D=Nv(t,!1)),i=t.D),e.useProgram(t.h),i.bind(),t.j(),t=n(),i.g.bindVertexArray(null),t}function Tr(t,e,i){return im(t,e),t=ji(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,i??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function ju(t,e,i){im(t,e),t.C||(t.C=ji(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.C),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0)}function nm(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null)}function Fs(t,e){switch(e){case 0:return t.g.find(i=>i instanceof Uint8Array);case 1:return t.g.find(i=>i instanceof Float32Array);case 2:return t.g.find(i=>typeof WebGLTexture<"u"&&i instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function cp(t){var e=Fs(t,1);if(!e){if(e=Fs(t,0))e=new Float32Array(e).map(n=>n/255);else{e=new Float32Array(t.width*t.height);let n=vo(t);var i=sm(t);if(ju(i,n,hy(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){i=new Float32Array(t.width*t.height*4),n.readPixels(0,0,t.width,t.height,n.RGBA,n.FLOAT,i);for(let s=0,r=0;s<e.length;++s,r+=4)e[s]=i[r]}else n.readPixels(0,0,t.width,t.height,n.RED,n.FLOAT,e)}t.g.push(e)}return e}function hy(t){var e=Fs(t,2);if(!e){let i=vo(t);e=dy(t);let n=cp(t),s=uy(t);i.texImage2D(i.TEXTURE_2D,0,s,t.width,t.height,0,i.RED,i.FLOAT,n),hp(t)}return e}function vo(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=ji(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function uy(t){if(t=vo(t),!tu)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))tu=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");tu=t.R16F}return tu}function sm(t){return t.j||(t.j=new ua),t.j}function dy(t){var e=vo(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);var i=Fs(t,2);return i||(i=Tr(sm(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(i),t.o=!0),e.bindTexture(e.TEXTURE_2D,i),i}function hp(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}function Gf(t){return{...bb,fillColor:(t=t||{}).color,...t}}function Us(t,e){return t instanceof Function?t(e):t}function kv(t,e,i){return Math.max(Math.min(e,i),Math.min(Math.max(e,i),t))}function Al(t){if(!t.j)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return t.j}function Ll(t){if(!t.o)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return t.o}function Gv(t,e,i){if(e.W())i(e.S());else{let n=e.ua()?e.sa():e.ta();t.m=t.m??new ua;let s=Ll(t);i((t=new ci([n],e.m,!1,s.canvas,t.m,e.width,e.height)).S()),t.close()}}function Hv(t,e,i,n){var s=(function(o){return o.g||(o.g=new Tb),o.g})(t),r=Ll(t),a=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;Xl(s,r,!0,()=>{(function(l,c,u,d){var h=l.g;if(h.activeTexture(h.TEXTURE0),h.bindTexture(h.TEXTURE_2D,c),h.activeTexture(h.TEXTURE1),h.bindTexture(h.TEXTURE_2D,l.u),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,h.RGBA,h.UNSIGNED_BYTE,u),l.J&&(function(f,g){if(f!==g)return!1;f=f.entries(),g=g.entries();for(let[y,m]of f){f=y;let p=m,S=g.next();if(S.done)return!1;let[b,A]=S.value;if(f!==b||p[0]!==A[0]||p[1]!==A[1]||p[2]!==A[2]||p[3]!==A[3])return!1}return!!g.next().done})(l.J,d))h.activeTexture(h.TEXTURE2),h.bindTexture(h.TEXTURE_2D,l.o);else{l.J=d;let f=Array(1024).fill(0);d.forEach((g,y)=>{if(g.length!==4)throw Error(`Color at index ${y} is not a four-channel value.`);f[4*y]=g[0],f[4*y+1]=g[1],f[4*y+2]=g[2],f[4*y+3]=g[3]}),h.activeTexture(h.TEXTURE2),h.bindTexture(h.TEXTURE_2D,l.o),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,256,1,0,h.RGBA,h.UNSIGNED_BYTE,new Uint8Array(f))}})(s,e,a,n),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);var o=s.g;o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,null)})}function zv(t,e,i,n){var s=Ll(t),r=(function(l){return l.h||(l.h=new wb),l.h})(t),a=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i,o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;Xl(r,s,!0,()=>{var l=r.g;l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,e),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,r.o),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,a),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,r.u),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,o),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(l=r.g).activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,null)})}function us(t,e){switch(e){case 0:return t.g.find(i=>i instanceof ImageData);case 1:return t.g.find(i=>typeof ImageBitmap<"u"&&i instanceof ImageBitmap);case 2:return t.g.find(i=>typeof WebGLTexture<"u"&&i instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function fy(t){var e=us(t,0);if(!e){e=xo(t);let i=$u(t),n=new Uint8Array(t.width*t.height*4);ju(i,e,lu(t)),e.readPixels(0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,n),nm(i),e=new ImageData(new Uint8ClampedArray(n.buffer),t.width,t.height),t.g.push(e)}return e}function lu(t){var e=us(t,2);if(!e){let i=xo(t);e=cu(t);let n=us(t,1)||fy(t);i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,n),Sl(t)}return e}function xo(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=ji(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function $u(t){return t.j||(t.j=new ua),t.j}function cu(t){var e=xo(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);var i=us(t,2);return i||(i=Tr($u(t),e),t.g.push(i),t.m=!0),e.bindTexture(e.TEXTURE_2D,i),i}function Sl(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}function Vv(t){var e=xo(t);return Xl($u(t),e,!0,()=>(function(i,n){var s=i.canvas;if(s.width===i.width&&s.height===i.height)return n();var r=s.width,a=s.height;return s.width=i.width,s.height=i.height,i=n(),s.width=r,s.height=a,i})(t,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(t.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return t.canvas.transferToImageBitmap()}))}function Vn(...t){return t.map(([e,i])=>({start:e,end:i}))}async function vt(t,e,i){return ou(t,i.canvas??(em()?void 0:document.createElement("canvas")),e,i)}function py(t,e,i,n){if(t.m&&n!==void 0)if(yt(t.baseOptions,Su,3)?.g()){var s=t.m;++s.g.T,s.h.set(n,performance.now())}else++(s=t.m).g.P,s.h.set(n,performance.now());if(t.qa){if(s=new Ux,i?.regionOfInterest){if(!t.Ca)throw Error("This task doesn't support region-of-interest.");var r=i.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Ue(s,1,(r.left+r.right)/2),Ue(s,2,(r.top+r.bottom)/2),Ue(s,4,r.right-r.left),Ue(s,3,r.bottom-r.top)}else Ue(s,1,.5),Ue(s,2,.5),Ue(s,4,1),Ue(s,3,1);if(i?.rotationDegrees){if(i?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90\xB0.");if(Ue(s,5,-Math.PI*i.rotationDegrees/180),i?.rotationDegrees%180!=0){let[a,o]=tm(e);i=hi(s,3)*o/a,r=hi(s,4)*a/o,Ue(s,4,i),Ue(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.qa,n)}t.g.Da(e,t.Ba,n??performance.now()),t.finishProcessing(n)}function Xn(t,e,i){if(t.J)throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");py(t,e,i,t.I+1)}function _s(t,e,i,n){if(!t.J)throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");py(t,e,i,n)}function yo(t,e,i,n){var s=e.data,r=e.width,a=r*(e=e.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==a)throw Error("Unsupported channel count: "+s.length/a);return t=new ci([s],i,!1,t.g.i.canvas,t.da,r,e),n?t.clone():t}function Yv(t){t.l={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}function qv(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Kv(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function Qv(t,e=!0){var i=[];for(let s of t){var n=qu(s);t=[];for(let r of n.g())n=e&&Rn(r,1)!=null?Rn(r,1)??0:-1,t.push({score:hi(r,2)??0,index:n,categoryName:Ui(ni(r,3))??""??"",displayName:Ui(ni(r,4))??""??""});i.push(t)}return i}function Zv(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}function Jv(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function jv(t){try{if(!t.F)return t.h;t.F(t.h)}finally{Ju(t)}}function iu(t,e){t=Wl(t),e.push(Qu(t))}function Rb(t){var e=(function(i){return zs(i,ln,1)})(t.ja()).filter(i=>(Ui(ni(i,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(yt(e[0],Mn,7)?.o()?.g()??new Map).forEach((i,n)=>{t.u[Number(n)]=Ui(ni(i,1))??""})}function $v(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function e1(t){try{let e=new bu(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.l)return e;t.l(e)}finally{Ju(t)}}function Hf(){return em()?void 0:document.createElement("canvas")}function t1(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function i1(t){try{let e=new up(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{Ju(t)}}var na,Pf,yT,Zh,_T,AT,MT,N0,zf,k0,a1,Ml,ET,l1,G0,TT,lo,bT,ds,CT,_o,wr,RT,H0,xl,_n,DT,IT,Vf,PT,ho,z0,d1,f1,Se,V0,uo,ra,hu,LT,m1,UT,W0,BT,Pu,Wf,FT,NT,OT,kT,g1,GT,gt,Rt,$r,Yf,fs,Nl,Er,zT,VT,YT,qT,El,KT,QT,Gs,jT,$T,ew,qf,tw,P1,yr,io,aw,j0,po,ow,xu,cw,yu,uw,ev,tv,iv,Bf,nv,yl,Jh,_u,fw,pw,Lp,j1,Up,Ou,Bp,ku,mw,gw,Gu,vw,Hu,Fp,ye,wo,ex,tx,xw,yw,Vu,Wu,Jf,sv,rv,Mw,ax,Sw,av,si,Ew,zp,xx,_l,Wt,Tw,ru,Mu,dt,ov,bo,jr,Ze,Sr,Li,Bs,ae,Ht,ct,ao,yx,_x,ww,bw,Te,au,Cw,jf,Rw,Dw,Ff,lv,cv,Iw,hv,Pw,Ax,Mx,Wp,Sx,Ex,Tx,dv,wx,Lw,bx,Mn,wi,fv,ln,Tl,pv,mv,Sn,Cx,Uw,Bw,Rx,Dx,qu,Fw,Nw,Nf,Ix,Px,oo,Lx,Wl,Ow,kw,Ux,Gw,Hw,gv,zw,Vw,Xp,Ww,Yp,Bx,vv,Xw,Su,ia,Eu,Jt,Fx,di,Yw,Ku,qp,qw,Kw,Nx,Ox,$f,Qw,no,kx,Zw,Gx,Kp,Qp,Hx,xv,zx,Zp,Vx,Jw,jw,$w,Wx,Xx,Yx,Jp,ep,qx,eb,Kx,tb,Qx,yv,Zx,ib,jp,Jx,nb,sb,rb,ab,Of,_v,ob,jx,tp,$x,lb,ey,cb,$h,ub,so,np,db,Ev,fb,pb,ap,Tu,mb,sy,gb,vb,Tv,wv,bv,Cv,Rv,Dv,Iv,xb,yb,_b,wu,Ab,oy,Mb,Sb,Pl,lp,ua,Tb,wb,tu,ci,Ov,bb,Yi,Ii,Wv,Xv,Cb,Wn,on,vn,rm,am,om,my,lm,cm,gy,hm,vy,xy,mt,um,qi,Ki,yy,rt,xn,rn,bu,Qi,Db,Zi,Cu,Hn,yn,up,Ji,Ay=Qy(()=>{na=typeof self<"u"?self:{};Zh=void 0,_T=typeof TextDecoder<"u",AT=typeof TextEncoder<"u";MT=n1(610401301,!1),N0=n1(748402147,!0);k0=na.navigator;zf=k0&&k0.userAgentData||null,Ru[" "]=function(){};a1={},Ml=null;ET=typeof Uint8Array<"u",l1=!(!(MT&&zf&&zf.brands.length>0)&&(O0().indexOf("Trident")!=-1||O0().indexOf("MSIE")!=-1))&&typeof btoa=="function",G0=/[-_.]/g,TT={"-":"+",_:"/",".":"="};lo={};ds=class{h(){return new Uint8Array(fp(this)||0)}constructor(t,e){if(h1(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};CT=void 0;_o=typeof Symbol=="function"&&typeof Symbol()=="symbol";RT=vs("jas",void 0,!0),H0=vs(void 0,"0di"),xl=vs(void 0,"1oa"),_n=vs(void 0,Symbol()),DT=vs(void 0,"0ub"),IT=vs(void 0,"0ubs"),Vf=vs(void 0,"0ubsb"),PT=vs(void 0,"0actk"),ho=vs("m_m","kb",!0),z0=vs(),d1={Va:{value:0,configurable:!0,writable:!0,enumerable:!1}},f1=Object.defineProperties,Se=_o?RT:"Va",V0=[];Ai(V0,7),wr=Object.freeze(V0);uo={};ra={};hu=class{constructor(e,i,n){this.g=e,this.h=i,this.j=n}next(){var e=this.g.next();return e.done||(e.value=this.h.call(this.j,e.value)),e}[Symbol.iterator](){return this}},LT=Object.freeze({});m1={};UT=Iu(t=>typeof t=="number"),W0=Iu(t=>typeof t=="string"),BT=Iu(t=>typeof t=="boolean"),Pu=typeof na.BigInt=="function"&&typeof na.BigInt(0)=="bigint";Wf=Iu(t=>Pu?t>=NT&&t<=kT:t[0]==="-"?X0(t,FT):X0(t,OT)),FT=Number.MIN_SAFE_INTEGER.toString(),NT=Pu?BigInt(Number.MIN_SAFE_INTEGER):void 0,OT=Number.MAX_SAFE_INTEGER.toString(),kT=Pu?BigInt(Number.MAX_SAFE_INTEGER):void 0;GT=typeof Uint8Array.prototype.slice=="function",gt=0,Rt=0;$r=typeof BigInt=="function"?BigInt.asIntN:void 0,Yf=typeof BigInt=="function"?BigInt.asUintN:void 0,fs=Number.isSafeInteger,Nl=Number.isFinite,Er=Math.trunc,zT=_i(0);VT=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;YT={},qT=(function(){try{return Ru(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),El=class{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,i){return this.g.set(e,i),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,i){return this.g.forEach(e,i)}[Symbol.iterator](){return this.entries()}},KT=qT?(Object.setPrototypeOf(El.prototype,Map.prototype),Object.defineProperties(El.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),El):class extends Map{constructor(){super()}};Gs=class extends KT{constructor(t,e,i=q0,n=q0){super(),this.M=0|t[Se],this.N=e,this.ba=i,this.na=this.N?ZT:n;for(let s=0;s<t.length;s++){let r=t[s],a=i(r[0],!1,!0),o=r[1];e?o===void 0&&(o=null):o=n(r[1],!1,!0,void 0,void 0,this.M),super.set(a,o)}}ea(t){return Cl(Array.from(super.entries(),t))}clear(){Lf(this),super.clear()}delete(t){return Lf(this),super.delete(this.ba(t,!0,!1))}entries(){if(this.N){var t=super.keys();t=new hu(t,JT,this)}else t=super.entries();return t}values(){if(this.N){var t=super.keys();t=new hu(t,Gs.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.N?super.forEach((i,n,s)=>{t.call(e,s.get(n),n,s)}):super.forEach(t,e)}set(t,e){return Lf(this),(t=this.ba(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.na(e,!0,!0,this.N,!1,this.M))}gb(t){var e=this.ba(t[0],!1,!0);t=t[1],t=this.N?t===void 0?null:t:this.na(t,!1,!0,void 0,!1,this.M),super.set(e,t)}has(t){return super.has(this.ba(t,!1,!1))}get(t){t=this.ba(t,!1,!1);var e=super.get(t);if(e!==void 0){var i=this.N;return i?((i=this.na(e,!1,!0,i,this.Fa,this.M))!==e&&super.set(t,i),i):e}}[Symbol.iterator](){return this.entries()}};Gs.prototype.toJSON=void 0;qf=class{},tw={cb:!0};P1=_i(0),yr={};io=class{constructor(t,e,i){if(this.buffer=t,i&&!e)throw Error();this.g=e}};aw=class{constructor(t,e,i,n){this.h=null,this.o=!1,this.g=this.j=this.m=0,this.init(t,e,i,n)}init(t,e,i,{fa:n=!1,ma:s=!1}={}){this.fa=n,this.ma=s,t&&(t=Nu(t,this.ma),this.h=t.buffer,this.o=t.g,this.m=e||0,this.j=i!==void 0?this.m+i:this.h.length,this.g=this.m)}clear(){this.h=null,this.o=!1,this.g=this.j=this.m=0,this.fa=!1}},j0=[],po=0;ow=class{constructor(t,e,i,n){if(j0.length){let s=j0.pop();s.init(t,e,i,n),t=s}else t=new aw(t,e,i,n);this.g=t,this.m=this.g.g,this.h=this.j=-1,this.v(n)}v({ra:t=!1}={}){this.ra=t}},xu=[];yu=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};_u=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};fw=class{constructor(){this.g=[]}length(){return this.g.length}end(){var t=this.g;return this.g=[],t}};pw=class{constructor(){this.j=[],this.h=0,this.g=new fw}};Lp=In(),j1=In(),Up=In(),Ou=In(),Bp=In(),ku=In(),mw=In(),gw=In(),Gu=In(),vw=In(),Hu=In(),Fp=In();ye=class{constructor(t,e){this.A=I1(t,e,void 0,2048)}toJSON(){return D1(this)}o(){var t=ib,e=this.A,i=t.g,n=_n;if(_o&&n&&e[n]?.[i]!=null&&co(DT,3),e=t.g,z0&&_n&&z0===void 0&&(n=(i=this.A)[_n])&&(n=n.ka))try{n(i,e,tw)}catch(s){r1(s)}return t.h?t.m(this,t.h,t.g,t.j):t.m(this,t.g,t.defaultValue,t.j)}clone(){var t=this.A,e=0|t[Se];return Ap(this,t,e)?yp(this,t,!0):new this.constructor(So(t,e,!1))}};ye.prototype[ho]=uo,ye.prototype.toString=function(){return this.A.toString()};wo=class{constructor(t,e,i){this.g=t,this.h=e,t=Lp,this.j=!!t&&i===t||!1}};xw=zu(function(t,e,i,n,s){return t.h===2&&(kl(t,wp(e,n,i),s),!0)},$1),yw=zu(function(t,e,i,n,s){return t.h===2&&(kl(t,wp(e,n,i),s),!0)},$1),Vu=Symbol(),Wu=Symbol(),Jf=Symbol(),sv=Symbol(),rv=Symbol();Mw=_i(0);ax=(t,e)=>{var i=new pw;rx(t.A,i,ha(Vu,Xu,Yu,e)),mo(i,i.g.end()),t=new Uint8Array(i.h);var n=(e=i.j).length,s=0;for(let r=0;r<n;r++){let a=e[r];t.set(a,s),s+=a.length}return i.j=[t],t};Sw=zu(function(t,e,i,n,s){if(t.h!==2)return!1;if(t=Dn(t=kl(t,ea([void 0,void 0],n),s)),s=Ao(n=0|e[Se]),2&n)throw Error();var r=Hs(e,i,s);if(r instanceof Gs)2&r.M?((r=r.ea()).push(t),ui(e,n,i,r,s)):r.gb(t);else if(Array.isArray(r)){var a=0|r[Se];8192&a||Ai(r,a|=8192),2&a&&ui(e,n,i,r=F1(r),s),r.push(t)}else ui(e,n,i,Cl([t]),s);return!0},function(t,e,i,n,s){if(e instanceof Gs)e.forEach((r,a)=>{Au(t,i,ea([a,r],n),s)});else if(Array.isArray(e)){for(let r=0;r<e.length;r++){let a=e[r];Array.isArray(a)&&Au(t,i,ea(a,n),s)}Cl(e)}});av=fi(function(t,e,i){if(t.h!==1)return!1;var n=t.g;t=Zf(n);var s=Zf(n);n=2*(s>>31)+1;var r=s>>>20&2047;return t=4294967296*(1048575&s)+t,bi(e,i,r==2047?t?NaN:n*(1/0):r==0?5e-324*n*t:n*Math.pow(2,r-1075)*(t+4503599627370496)),!0},function(t,e,i){(e=zn(e))!=null&&($i(t,i,1),t=t.g,(i=g1||=new DataView(new ArrayBuffer(8))).setFloat64(0,+e,!0),gt=i.getUint32(0,!0),Rt=i.getUint32(4,!0),Il(t,gt),Il(t,Rt))},vw),si=fi(function(t,e,i){return t.h===5&&(bi(e,i,vu(t.g)),!0)},ox,Gu),Ew=Xs(px,function(t,e,i){if((e=Ws(zn,e,!0))!=null)for(let a=0;a<e.length;a++){var n=t,s=i,r=e[a];r!=null&&($i(n,s,5),n=n.g,pp(r),Il(n,gt))}},Gu),zp=Xs(px,function(t,e,i){if((e=Ws(zn,e,!0))!=null&&e.length){$i(t,i,2),To(t.g,4*e.length);for(let n=0;n<e.length;n++)i=t.g,pp(e[n]),Il(i,gt)}},Gu),xx=fi(function(t,e,i){return t.h===5&&(bi(e,i,(t=vu(t.g))===0?void 0:t),!0)},ox,Gu),_l=fi(function(t,e,i){return mx(t,e,i)},Gp,ku),Wt=fi(function(t,e,i){return mx(t,e,i)},Gp,ku),Tw=Xs(function(t,e,i){return t.h!==0&&t.h!==2?t=!1:(e=Cr(e,0|e[Se],i),t.h==2?Gl(t,gu,e):e.push(gu(t.g)),t=!0),t},function(t,e,i){if((e=Ws(vp,e,!1))!=null)for(let n=0;n<e.length;n++)Z1(t,i,e[n])},ku),ru=fi(function(t,e,i){return t.h!==0?e=!1:(bi(e,i,(t=gu(t.g))===Mw?void 0:t),e=!0),e},Gp,ku),Mu=fi(function(t,e,i){return t.h!==0?t=!1:(bi(e,i,bp(t.g,HT)),t=!0),t},function(t,e,i){if(e=(function(n){if(n==null)return n;var s=typeof n;if(s==="bigint")return String(Yf(64,n));if(Mo(n)){if(s==="string")return s=Er(Number(n)),fs(s)&&s>=0?n=String(s):((s=n.indexOf("."))!==-1&&(n=n.substring(0,s)),n=S1(n)),n;if(s==="number")return E1(n)}})(e),e!=null&&(typeof e=="string"&&$0(e),e!=null))switch($i(t,i,0),typeof e){case"number":t=t.g,oa(e),ks(t,gt,Rt);break;case"bigint":i=Q1(e,yu,lw),ks(t.g,i.h,i.g);break;default:i=$0(e),ks(t.g,i.h,i.g)}},mw),dt=fi(function(t,e,i){return t.h===0&&(bi(e,i,Vs(t.g)),!0)},lx,Ou),ov=Xs(gx,function(t,e,i){if((e=Ws(la,e,!0))!=null)for(let a=0;a<e.length;a++){var n=t,s=i,r=e[a];r!=null&&($i(n,s,0),Hl(n.g,r))}},Ou),bo=Xs(gx,function(t,e,i){if((e=Ws(la,e,!0))!=null&&e.length){i=Ip(t,i);for(let n=0;n<e.length;n++)Hl(t.g,e[n]);Pp(t,i)}},Ou),jr=fi(function(t,e,i){return t.h===0&&(bi(e,i,(t=Vs(t.g))===0?void 0:t),!0)},lx,Ou),Ze=fi(function(t,e,i){return t.h===0&&(bi(e,i,Cp(t.g)),!0)},cx,j1),Sr=fi(function(t,e,i){return t.h===0&&(bi(e,i,(t=Cp(t.g))===!1?void 0:t),!0)},cx,j1),Li=Xs(function(t,e,i){return t.h===2&&(t=Rp(t),Cr(e,0|e[Se],i).push(t),!0)},function(t,e,i){if((e=Ws(Ui,e,!0))!=null)for(let a=0;a<e.length;a++){var n=t,s=i,r=e[a];r!=null&&zl(n,s,s1(r))}},Up),Bs=fi(function(t,e,i){return t.h===2&&(bi(e,i,(t=Rp(t))===""?void 0:t),!0)},hx,Up),ae=fi(function(t,e,i){return t.h===2&&(bi(e,i,Rp(t)),!0)},hx,Up),Ht=(function(t,e,i=Lp){return new wo(t,e,i)})(function(t,e,i,n,s){return t.h===2&&(n=ea(void 0,n),Cr(e,0|e[Se],i).push(n),kl(t,n,s),!0)},function(t,e,i,n,s){if(Array.isArray(e)){for(let r=0;r<e.length;r++)ux(t,e[r],i,n,s);1&(t=0|e[Se])||Ai(e,1|t)}}),ct=zu(function(t,e,i,n,s,r){if(t.h!==2)return!1;var a=0|e[Se];return O1(e,a,r,i,Ao(a)),kl(t,e=wp(e,n,i),s),!0},ux),ao=fi(function(t,e,i){return t.h===2&&(bi(e,i,Dp(t)),!0)},Hp,Hu),yx=Xs(function(t,e,i){return t.h===2&&(t=Dp(t),Cr(e,0|e[Se],i).push(t),!0)},function(t,e,i){if((e=Ws(C1,e,!1))!=null)for(let a=0;a<e.length;a++){var n=t,s=i,r=e[a];r!=null&&zl(n,s,Nu(r,!0).buffer)}},Hu),_x=fi(function(t,e,i){return t.h===0&&(bi(e,i,gs(t.g)),!0)},dx,Bp),ww=Xs(function(t,e,i){return(t.h===0||t.h===2)&&(e=Cr(e,0|e[Se],i),t.h==2?Gl(t,gs,e):e.push(gs(t.g)),!0)},function(t,e,i){if((e=Ws(_1,e,!0))!=null)for(let a=0;a<e.length;a++){var n=t,s=i,r=e[a];r!=null&&($i(n,s,0),To(n.g,r))}},Bp),bw=fi(function(t,e,i){return t.h===0&&(bi(e,i,(t=gs(t.g))===0?void 0:t),!0)},dx,Bp),Te=fi(function(t,e,i){return t.h===0&&(bi(e,i,Vs(t.g)),!0)},fx,Fp),au=fi(function(t,e,i){return t.h===0&&(bi(e,i,(t=Vs(t.g))===0?void 0:t),!0)},fx,Fp),Cw=fi(function(t,e,i){return t.h!==0?t=!1:(bi(e,i,(function(n){return bp(n,(s,r)=>{var a=-(1&s);return x1(s=(s>>>1|r<<31)^a,r>>>1^a)})})(t.g)),t=!0),t},function(t,e,i){if((e=vp(e))!=null&&(J1(e),e!=null))switch($i(t,i,0),typeof e){case"number":t=t.g,e=(i=e)<0,Xf(i=2*Math.abs(i)),i=gt;let n=Rt;e&&(i==0?n==0?n=i=4294967295:(n--,i=4294967295):i--),ks(t,gt=i,Rt=n);break;case"bigint":t=t.g,e=e<<BigInt(1)^e>>BigInt(63),gt=Number(BigInt.asUintN(32,e)),Rt=Number(BigInt.asUintN(32,e>>BigInt(32))),ks(t,gt,Rt);break;default:dw(t.g,e)}},gw),jf=class{constructor(e,i){var n=Mn;this.g=e,this.h=i,this.m=yt,this.o=Be,this.defaultValue=void 0,this.j=n.jb!=null?m1:void 0}register(){Ru(this)}};Rw=[0,ao,yx,Ze,ae],Dw=[0,Bs,[0,au,[0,ru,jr],au,-1,[0,Te],au,-1],fi(vx,Hp,Hu)],lv=class extends ye{constructor(t){super(t)}},cv=[0,Bs,fi(vx,function(t,e,i){if(e!=null){if(e instanceof ye){let n=e.mb;return void(n?(e=n(e),e!=null&&zl(t,i,Nu(e,!0).buffer)):co(Vf,3))}if(Array.isArray(e))return void co(Vf,3)}Hp(t,e,i)},Hu)],Iw=[0,1,[0,12,dt,10,Ze],[0,7,[0,dt,-1]]],hv=globalThis.trustedTypes,Pw=class{constructor(t){this.g=t}toString(){return this.g+""}};Ax=[0,dt,Te,Ze,-1,bo,Te,-1,Ze,-1],Mx=[0,Te,-1,Ze],Wp=class extends ye{constructor(t){super(t)}},Sx=[0,Ze,ae,Ze,Te,-1,Xs(function(t,e,i){return(t.h===0||t.h===2)&&(e=Cr(e,0|e[Se],i),t.h==2?Gl(t,rw,e):e.push(Vs(t.g)),!0)},function(t,e,i){if((e=Ws(la,e,!0))!=null&&e.length){i=Ip(t,i);for(let n=0;n<e.length;n++)Hl(t.g,e[n]);Pp(t,i)}},Fp),ae,-1,[0,Ze,-1],Te,Ze,-1,Mx],Ex=[0,3,Ze,-1,2,[0,[2],dt,ct,[0,_x]],[0,Te,Ze,Te,Ze,Te,4,[0,Ze,ae,-1,Ze]],[0,[3,4],ae,-1,ct,[0,dt],ct,[0,Te,-1]],[0]],Tx=[0,ae,-2],dv=class extends ye{constructor(t){super(t)}},wx=[0],Lw=class extends ye{constructor(t){super(t)}},bx=[0,dt,Ze,1,Ze,-4],Mn=class extends ye{constructor(t){super(t,2)}},wi={};wi[336783863]=[0,ae,Ze,-1,dt,[0,[1,2,3,4,5,6,7,8,9],ct,wx,ct,Sx,ct,Tx,ct,bx,ct,Ax,ct,[0,ae,-2],ct,[0,ae,Te],ct,Ex,ct,Mx],[0,ae],Ze,[0,[1,3],[2,4],ct,[0,bo],-1,ct,[0,Li],-1,Ht,[0,ae,-1]],ae];fv=[0,ru,-1,Sr,-3,ru,bo,Bs,jr,ru,-1,Sr,jr,Sr,-2,Bs];ln=class extends ye{constructor(t){super(t,500)}v(t){return Be(this,0,7,t)}},Tl=[-1,{}],pv=[0,ae,1,Tl],mv=[0,ae,Li,Tl];Sn=class extends ye{constructor(t){super(t,500)}v(t){return Be(this,0,1001,t)}},Cx=[-500,Ht,[-500,Bs,-1,Li,-3,[-2,wi,Ze],Ht,cv,jr,-1,pv,mv,Ht,[0,Bs,Sr],Bs,fv,jr,Li,987,Li],4,Ht,[-500,ae,-1,[-1,{}],998,ae],Ht,[-500,ae,Li,-1,[-2,{},Ze],997,Li,-1],jr,Ht,[-500,ae,Li,Tl,998,Li],Li,jr,pv,mv,Ht,[0,Bs,-1,Tl],Li,-2,fv,Bs,-1,Sr,[0,Sr,bw],978,Tl,Ht,cv];Sn.prototype.g=Vl(Cx);Uw=Rr(Sn,Cx),Bw=class extends ye{constructor(t){super(t)}},Rx=class extends ye{constructor(t){super(t)}g(){return zs(this,Bw,1)}},Dx=[0,Ht,[0,dt,si,ae,-1]],qu=Rr(Rx,Dx),Fw=class extends ye{constructor(t){super(t)}},Nw=class extends ye{constructor(t){super(t)}},Nf=class extends ye{constructor(t){super(t)}j(){return yt(this,Fw,2)}g(){return zs(this,Nw,5)}},Ix=Rr(class extends ye{constructor(t){super(t)}},[0,Li,bo,zp,[0,Te,[0,dt,-3],[0,si,-3],[0,dt,-1,[0,Ht,[0,dt,-2]]],Ht,[0,si,-1,ae,si]],ae,-1,Wt,Ht,[0,dt,si],Li,Wt]),Px=class extends ye{constructor(t){super(t)}},oo=Rr(class extends ye{constructor(t){super(t)}},[0,Ht,[0,si,-4]]),Lx=class extends ye{constructor(t){super(t)}},Wl=Rr(class extends ye{constructor(t){super(t)}},[0,Ht,[0,si,-4]]),Ow=class extends ye{constructor(t){super(t)}},kw=[0,dt,-1,zp,Te],Ux=class extends ye{constructor(t){super(t)}};Ux.prototype.g=Vl([0,si,-4,Wt]);Gw=class extends ye{constructor(t){super(t)}},Hw=Rr(class extends ye{constructor(t){super(t)}},[0,Ht,[0,1,dt,ae,Dx],Wt]),gv=class extends ye{constructor(t){super(t)}},zw=class extends ye{constructor(t){super(t)}g(){var t=ni(this,1,void 0,B1);return t??sa()}},Vw=class extends ye{constructor(t){super(t)}},Xp=[1,2],Ww=Rr(class extends ye{constructor(t){super(t)}},[0,Ht,[0,Xp,ct,[0,zp],ct,[0,ao],dt,ae],Wt]),Yp=class extends ye{constructor(t){super(t)}},Bx=[0,ae,dt,si,Li,-1],vv=class extends ye{constructor(t){super(t)}},Xw=[0,Ze,-1],Su=class extends ye{constructor(t){super(t)}g(){return L1(this,Wp,2,ia)}},ia=[1,2,3,4,5,6],Eu=class extends ye{constructor(t){super(t)}g(){return ni(this,1,void 0,B1)!=null}j(){return Ui(ni(this,2))!=null}},Jt=class extends ye{constructor(t){super(t)}},Fx=[0,ao,ae,[0,dt,Wt,-1],[0,Mu,Wt]],di=[0,Fx,Ze,[0,ia,ct,bx,ct,Sx,ct,Ax,ct,wx,ct,Tx,ct,Ex],Te],Yw=Vp(di),Ku=class extends ye{constructor(t){super(t)}},qp=[0,di,si,-1,dt],qw=ys(502141897,Ku);wi[502141897]=qp;Kw=Rr(class extends ye{constructor(t){super(t)}},[0,[0,Te,-1,Ew,ww],kw]),Nx=class extends ye{constructor(t){super(t)}},Ox=class extends ye{constructor(t){super(t)}},$f=[0,di,si,[0,di],Ze],Qw=ys(508968150,Ox);wi[508968150]=[0,di,qp,$f,si,[0,[0,Fx]]],wi[508968149]=$f;no=class extends ye{constructor(t){super(t)}j(){return yt(this,Yp,2)}g(){qe(this,2)}},kx=[0,di,Bx];wi[478825465]=kx;Zw=class extends ye{constructor(t){super(t)}},Gx=class extends ye{constructor(t){super(t)}},Kp=class extends ye{constructor(t){super(t)}},Qp=class extends ye{constructor(t){super(t)}},Hx=class extends ye{constructor(t){super(t)}},xv=[0,di,[0,di],kx,-1],zx=[0,di,si,dt],Zp=[0,di,si],Vx=[0,di,zx,Zp,si],Jw=ys(479097054,Hx);wi[479097054]=[0,di,Vx,xv],wi[463370452]=xv,wi[464864288]=zx;jw=ys(462713202,Qp);wi[462713202]=Vx,wi[474472470]=Zp;$w=class extends ye{constructor(t){super(t)}},Wx=class extends ye{constructor(t){super(t)}},Xx=class extends ye{constructor(t){super(t)}},Yx=class extends ye{constructor(t){super(t)}},Jp=[0,di,si,-1,dt],ep=[0,di,si,Ze];Yx.prototype.g=Vl([0,di,Zp,[0,di],qp,$f,Jp,ep]);qx=class extends ye{constructor(t){super(t)}},eb=ys(456383383,qx);wi[456383383]=[0,di,Bx];Kx=class extends ye{constructor(t){super(t)}},tb=ys(476348187,Kx);wi[476348187]=[0,di,Xw];Qx=class extends ye{constructor(t){super(t)}},yv=class extends ye{constructor(t){super(t)}},Zx=[0,Te,-1],ib=ys(458105876,class extends ye{constructor(t){super(t)}g(){var t=this.A,e=0|t[Se],i=an(this,e);return t=(function(n,s,r,a){var o=yv;!a&&Eo(n)&&(r=0|(s=n.A)[Se]);var l=Hs(s,2);if(n=!1,l==null){if(a)return K0();l=[]}else if(l.constructor===Gs){if(!(2&l.M)||a)return l;l=l.ea()}else Array.isArray(l)?n=!!(2&l[Se]):l=[];if(a){if(!l.length)return K0();n||(n=!0,Bl(l))}else n&&(n=!1,Cl(l),l=F1(l));return!n&&32&r&&Ul(l,32),r=ui(s,r,2,a=new Gs(l,o,WT,void 0)),n||br(s,r),a})(this,t,e,i),!i&&yv&&(t.Fa=!0),t}});wi[458105876]=[0,Zx,Sw,[!0,Wt,[0,ae,-1,Li]],[0,bo,Ze,Te],Ze];jp=class extends ye{constructor(t){super(t)}},Jx=ys(458105758,jp);wi[458105758]=[0,di,ae,Zx];nb=class extends ye{constructor(t){super(t)}},sb=class extends ye{constructor(t){super(t)}},rb=class extends ye{constructor(t){super(t)}},ab=Vp([0,Ht,[0,au,Ht,[0,xx,-1],Sr]]),Of=class extends ye{constructor(t){super(t)}},_v=[0,xx,-1,Sr],ob=class extends ye{constructor(t){super(t)}},jx=class extends ye{constructor(t){super(t)}},tp=[1,2];jx.prototype.g=Vl([0,tp,ct,_v,ct,[0,Ht,_v]]);$x=class extends ye{constructor(t){super(t)}},lb=ys(443442058,$x);wi[443442058]=[0,di,ae,dt,si,Li,-1,Ze,si],wi[514774813]=Jp;ey=class extends ye{constructor(t){super(t)}},cb=ys(516587230,ey);wi[516587230]=[0,di,Jp,ep,si],wi[518928384]=ep;ub=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);so=class{};so.forVisionTasks=function(t,e=!1){return eu("vision",t??jh``,e)},so.forTextTasks=function(t,e=!1){return eu("text",t??jh``,e)},so.forGenAiTasks=function(t,e=!1){return eu("genai",t??jh``,e)},so.forAudioTasks=function(t,e=!1){return eu("audio",t??jh``,e)},so.isSimdSupported=function(t=!1){return ny(t)};np=class extends ye{constructor(t){super(t)}},db=class extends ye{constructor(t){super(t)}},Ev=[0,Te,2,Mu,-2,Wt,Ht,[0,Te,Wt]],fb=class extends ye{constructor(t){super(t)}},pb=class extends ye{constructor(t){super(t)}};ap=class extends ye{constructor(t){super(t)}},Tu=[3,4,5,6,7],mb=class extends ye{constructor(t){super(t)}},sy=class extends ye{constructor(t){super(t)}};sy.prototype.g=Vl([0,[0,Te,ae,-3,Te],[0,Tu,Te,-1,ct,[0,Te,ae,Mu],ct,Ev,ct,[0,1,Ev],ct,[0,Te],ct,[0,Te,ae,Mu]]]);gb=class{constructor(){this.g=typeof AbortController<"u"}async send(t,e,i){var n=this.g?new AbortController:void 0,s=n&&t.la>0?setTimeout(()=>{n.abort()},t.la):void 0;try{let r=await fetch(t.url,{method:t.bb,headers:{...t.ab},...t.body&&{body:t.body},...t.withCredentials&&{credentials:"include"},signal:t.la&&n?n.signal:null});r.status===200?e?.(await r.text()):i?.(r.status)}catch(r){r?.name==="AbortError"?i?.(408):i?.(400)}finally{clearTimeout(s)}}},vb=class extends ye{constructor(t){super(t,37)}},Tv=[-4,{},Iw,Te,Dw],wv=[0,ae,Te,1,ae,-1,Te,1,Te,1,Wt],bv=[0,Te,ae,-2],Cv=[0,ae,Te],Rv=[0,ae,Te],Dv=[0,Ze,-3],Iv=[0,Te,ae,-1,Wt,dt,-1,ae,-5,Ht,[0,ae,-4],-1,Ze,[0,Ze,-3],Te],xb=class extends ye{constructor(t){super(t,19)}},yb=Vp([-19,{},[0,Te,1,[0,ae,-6,Wt,dt,ae,-1,Wt],1,[0,ae,1,ae,-5],ae,-1,[0,Te,ae,-8],[0,ae,-3],[0,ae,Te,ae,-2],[0,ae,-1,Te,ae,-1,Te,ae,-1,[0,Ht,[0,ae,-1],Ze,ae,-5],[0,Te,Ze,dt,-2]],Wt,[0,ae,-3,Wt,dt,ae,-1],[0,Te,ae,-1],[0,ae,-9],[0,ae,-6,Te,ae,1,ae,Ze,Te,-1,Ze,ae,-2,Te,ae,Te,ae,dt,-1],1,[0,Te],1,[0,ae,-4],1,wv,[0,[1,2,3,4,5,6],ct,wv,ct,Cv,ct,Rv,ct,[0,Te],ct,Iv,ct,bv],Cv,Rv,Iv,[0,[0,Te,ae,-1,Wt,dt,-1,ae,-4,Ht,[0,ae,-4],-1,1,Dv],[0,Te,ae,-1,Wt,dt,-1,ae,-4,Dv]],bv,[0,ae,[0,dt,-3,Te],Te,-2,[0,dt,-1],Ze],4,[0,ae,Te,ae,-1,Wt,Te,ae,-1,Te,dt,-1]],Te,Ht,[-37,{},_l,ae,Ht,[0,ae,-1],ao,1,ao,[0,Li,-1,ov,Tw,-1],ae,[0,dt,ae,-1],Ze,dt,Wt,ae,-1,Cw,Rw,_l,ao,Te,ov,Wt,-1,[0,Te,-1],ae,Ze,ae,bo,ae,-1,av,1,av,Tv,Ze,[0,Te,[0,si,dt,-2],[0,si]],[0,Te,Wt]],_l,yx,ae,-1,_l,Te,-1,[0,Ze,-1,Te,Ze],[0,Wt,-1,ae],[0,_l,Ze,Wt],Wt,1,_x,1,Tv]),_b=class{constructor(t){this.h=[],this.m=new gb,this.j=t??"",this.g=setInterval(()=>{this.flush()},6e4)}close(){this.g!==void 0&&(clearInterval(this.g),this.g=void 0),this.flush()}flush(t,e){if(this.error)e?.("net-send-failed");else if(this.h.length===0)t?.();else{var i=this.h;this.h=[],i=(function(n){var s=new xb;return Kf(s=qe(s,2,Os(1786)),3,n)})(i),i=yb(i),this.m.send({url:"https://odml.pa.googleapis.com/v1/log",bb:"POST",la:1e4,body:i,hb:2,ab:{"Content-Type":"application/x-protobuf","x-goog-api-key":this.j},withCredentials:!1},()=>{t?.()},n=>{this.error=Error(`Logging failed with HTTP error: ${n}`),this.h=[],this.g!==void 0&&(clearInterval(this.g),this.g=void 0),e?.("net-send-failed",n)})}}},wu=class{constructor(){this.aa=this.U=this.X=this.R=this.V=this.T=this.P=0}};Ab=class{constructor(t,e,i){this.u=performance.now(),this.m=performance.now(),this.h=new Map,this.o=0,this.g=new wu,this.j=new wu,this.l=new _b(i),this.C=(function(n){switch(n){case"AudioClassifier":return 4;case"AudioEmbedder":return 5;case"TextClassifier":return 6;case"TextEmbedder":return 7;case"GestureRecognizer":return 8;case"HandDetector":return 9;case"HandLandmarker":return 10;case"ImageClassifier":return 11;case"ImageEmbedder":return 12;case"ImageSegmenter":return 13;case"ObjectDetector":return 14;case"FaceDetector":return 15;case"FaceLandmarker":return 16;case"InteractiveSegmenter":case"InteractiveSegmenterLegacy":return 18;case"HolisticLandmarker":return 20;case"LlmInference":return 21;case"LanguageDetector":return 22;case"PoseLandmarker":return 23;default:return 0}})(t),this.D=(function(n){switch(n){case"IMAGE":return 11;case"VIDEO":return 12;case"LIVE_STREAM":return 13;case"AUDIO_CLIPS":return 14;case"AUDIO_STREAM":return 15;default:return 10}})(e),t=new mb,typeof window>"u"?e=0:(e=navigator.userAgent,e=/Android/i.test(e)?1:/iPhone|iPad|iPod/i.test(e)?2:/Windows/i.test(e)?5:/Macintosh/i.test(e)?4:/Linux/i.test(e)?3:0),t=qe(t,1,Os(e)),t=qe(t,2,Ns("")),t=qe(t,3,Ns("")),t=qe(t,4,Ns("1.0.1")),t=qe(t,5,Ns("")),this.B=qe(t,6,Os(4))}ya(){var t=new pb;t=nu(t=qe(t,1,Os(this.D)),3,performance.now()-this.u),op(this,t=ps(rp(sp(new ap,this.C),0),3,Tu,t)),this.m=performance.now()}za(t){var e=this.h.get(t);if(e!==void 0&&(this.h.delete(t),t=performance.now()-e,++this.g.V,this.g.X+=t,this.g.U=Math.max(this.g.U,t),this.o=Math.max(this.o,t),performance.now()>this.m+3e4)){for(let[i,n]of this.h.entries())t=i,n<e&&(this.g.R++,this.h.delete(t));e={...this.g,aa:performance.now()-this.m},this.g.U=0,this.m=performance.now(),Pv(this,e)}}xa(){var t={...this.g,R:this.g.R+this.h.size,U:this.o,aa:performance.now()-this.u};Pv(this,t);var e=new fb;e=Be(e,0,2,t=ry(this,t)),op(this,e=ps(t=rp(sp(new ap,this.C),2),5,Tu,e))}close(){var t=this.l;typeof t.close=="function"?t.close():t.flush()}};oy=class{constructor(t,e){this.j=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:em()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){var e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){var i=t.length,n=this.i._malloc(i);this.i.HEAPU8.set(t,n),e?this.i._changeBinaryGraph(i,n):this.i._changeTextGraph(i,n),this.i._free(n)}configureAudio(t,e,i,n,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Pe(this,n||"input_audio",r=>{Pe(this,s=s||"audio_header",a=>{this.i._configureAudio(r,a,t,e??0,i)})})}setAutoResizeCanvas(t){this.j=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ja(t){hs(this,"__graph_config__",e=>{t(e)}),Pe(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,i){this.addAudioToStreamWithShape(t,0,0,e,i)}addAudioToStreamWithShape(t,e,i,n,s){var r=4*t.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(t,this.g/4),Pe(this,n,a=>{this.i._addAudioToInputStream(this.g,e,i,a,s)})}addGpuBufferToStream(t,e,i){Pe(this,e,n=>{var[s,r]=ay(this,t,n);this.i._addBoundTextureToStream(n,s,r,i)})}addBoolToStream(t,e,i){Pe(this,e,n=>{this.i._addBoolToInputStream(t,n,i)})}addDoubleToStream(t,e,i){Pe(this,e,n=>{this.i._addDoubleToInputStream(t,n,i)})}addFloatToStream(t,e,i){Pe(this,e,n=>{this.i._addFloatToInputStream(t,n,i)})}addIntToStream(t,e,i){Pe(this,e,n=>{this.i._addIntToInputStream(t,n,i)})}addUintToStream(t,e,i){Pe(this,e,n=>{this.i._addUintToInputStream(t,n,i)})}addStringToStream(t,e,i){Pe(this,e,n=>{Pe(this,t,s=>{this.i._addStringToInputStream(s,n,i)})})}addStringRecordToStream(t,e,i){Pe(this,e,n=>{Uv(this,Object.keys(t),s=>{Uv(this,Object.values(t),r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(t).length,n,i)})})})}addProtoToStream(t,e,i,n){Pe(this,i,s=>{Pe(this,e,r=>{var a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,r,s,n),this.i._free(a)})})}addEmptyPacketToStream(t,e){Pe(this,t,i=>{this.i._addEmptyPacketToInputStream(i,e)})}addBoolVectorToStream(t,e,i){Pe(this,e,n=>{var s=this.i._allocateBoolVector(t.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of t)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,n,i)})}addDoubleVectorToStream(t,e,i){Pe(this,e,n=>{var s=this.i._allocateDoubleVector(t.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of t)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,n,i)})}addFloatVectorToStream(t,e,i){Pe(this,e,n=>{var s=this.i._allocateFloatVector(t.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of t)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,n,i)})}addIntVectorToStream(t,e,i){Pe(this,e,n=>{var s=this.i._allocateIntVector(t.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of t)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,n,i)})}addUintVectorToStream(t,e,i){Pe(this,e,n=>{var s=this.i._allocateUintVector(t.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of t)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,n,i)})}addStringVectorToStream(t,e,i){Pe(this,e,n=>{var s=this.i._allocateStringVector(t.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of t)Pe(this,r,a=>{this.i._addStringVectorEntry(s,a)});this.i._addStringVectorToInputStream(s,n,i)})}addBoolToInputSidePacket(t,e){Pe(this,e,i=>{this.i._addBoolToInputSidePacket(t,i)})}addDoubleToInputSidePacket(t,e){Pe(this,e,i=>{this.i._addDoubleToInputSidePacket(t,i)})}addFloatToInputSidePacket(t,e){Pe(this,e,i=>{this.i._addFloatToInputSidePacket(t,i)})}addIntToInputSidePacket(t,e){Pe(this,e,i=>{this.i._addIntToInputSidePacket(t,i)})}addUintToInputSidePacket(t,e){Pe(this,e,i=>{this.i._addUintToInputSidePacket(t,i)})}addStringToInputSidePacket(t,e){Pe(this,e,i=>{Pe(this,t,n=>{this.i._addStringToInputSidePacket(n,i)})})}addProtoToInputSidePacket(t,e,i){Pe(this,i,n=>{Pe(this,e,s=>{var r=this.i._malloc(t.length);this.i.HEAPU8.set(t,r),this.i._addProtoToInputSidePacket(r,t.length,s,n),this.i._free(r)})})}addBoolVectorToInputSidePacket(t,e){Pe(this,e,i=>{var n=this.i._allocateBoolVector(t.length);if(!n)throw Error("Unable to allocate new bool vector on heap.");for(let s of t)this.i._addBoolVectorEntry(n,s);this.i._addBoolVectorToInputSidePacket(n,i)})}addDoubleVectorToInputSidePacket(t,e){Pe(this,e,i=>{var n=this.i._allocateDoubleVector(t.length);if(!n)throw Error("Unable to allocate new double vector on heap.");for(let s of t)this.i._addDoubleVectorEntry(n,s);this.i._addDoubleVectorToInputSidePacket(n,i)})}addFloatVectorToInputSidePacket(t,e){Pe(this,e,i=>{var n=this.i._allocateFloatVector(t.length);if(!n)throw Error("Unable to allocate new float vector on heap.");for(let s of t)this.i._addFloatVectorEntry(n,s);this.i._addFloatVectorToInputSidePacket(n,i)})}addIntVectorToInputSidePacket(t,e){Pe(this,e,i=>{var n=this.i._allocateIntVector(t.length);if(!n)throw Error("Unable to allocate new int vector on heap.");for(let s of t)this.i._addIntVectorEntry(n,s);this.i._addIntVectorToInputSidePacket(n,i)})}addUintVectorToInputSidePacket(t,e){Pe(this,e,i=>{var n=this.i._allocateUintVector(t.length);if(!n)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of t)this.i._addUintVectorEntry(n,s);this.i._addUintVectorToInputSidePacket(n,i)})}addStringVectorToInputSidePacket(t,e){Pe(this,e,i=>{var n=this.i._allocateStringVector(t.length);if(!n)throw Error("Unable to allocate new string vector on heap.");for(let s of t)Pe(this,s,r=>{this.i._addStringVectorEntry(n,r)});this.i._addStringVectorToInputSidePacket(n,i)})}attachBoolListener(t,e){hs(this,t,e),Pe(this,t,i=>{this.i._attachBoolListener(i)})}attachBoolVectorListener(t,e){_r(this,t,e),Pe(this,t,i=>{this.i._attachBoolVectorListener(i)})}attachIntListener(t,e){hs(this,t,e),Pe(this,t,i=>{this.i._attachIntListener(i)})}attachIntVectorListener(t,e){_r(this,t,e),Pe(this,t,i=>{this.i._attachIntVectorListener(i)})}attachUintListener(t,e){hs(this,t,e),Pe(this,t,i=>{this.i._attachUintListener(i)})}attachUintVectorListener(t,e){_r(this,t,e),Pe(this,t,i=>{this.i._attachUintVectorListener(i)})}attachDoubleListener(t,e){hs(this,t,e),Pe(this,t,i=>{this.i._attachDoubleListener(i)})}attachDoubleVectorListener(t,e){_r(this,t,e),Pe(this,t,i=>{this.i._attachDoubleVectorListener(i)})}attachFloatListener(t,e){hs(this,t,e),Pe(this,t,i=>{this.i._attachFloatListener(i)})}attachFloatVectorListener(t,e){_r(this,t,e),Pe(this,t,i=>{this.i._attachFloatVectorListener(i)})}attachStringListener(t,e){hs(this,t,e),Pe(this,t,i=>{this.i._attachStringListener(i)})}attachStringVectorListener(t,e){_r(this,t,e),Pe(this,t,i=>{this.i._attachStringVectorListener(i)})}attachProtoListener(t,e,i){hs(this,t,e),Pe(this,t,n=>{this.i._attachProtoListener(n,i||!1)})}attachProtoVectorListener(t,e,i){_r(this,t,e),Pe(this,t,n=>{this.i._attachProtoVectorListener(n,i||!1)})}attachAudioListener(t,e,i){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),hs(this,t,(n,s)=>{n=new Float32Array(n.buffer,n.byteOffset,n.length/4),e(n,s)}),Pe(this,t,n=>{this.i._attachAudioListener(n,i||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}};Mb=ly(cy(oy)),Sb=class extends Mb{};Pl=class{constructor(t){this.g=t,this.K=[],this.I=0,this.g.setAutoRenderToScreen(!1)}j(t,e=!0){if(e){let i=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(yt(this.baseOptions,Eu,1)?.g()||yt(this.baseOptions,Eu,1)?.j()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(n,s){var r=yt(n.baseOptions,Su,3);if(!r){var a=r=new Su,o=new dv;ps(a,4,ia,o)}"delegate"in s&&(s.delegate==="GPU"?(s=r,a=new Wp,ps(s,2,ia,a)):(s=r,a=new dv,ps(s,4,ia,a))),Be(n.baseOptions,0,3,r)})(this,i),i.modelAssetPath)return fetch(i.modelAssetPath.toString()).then(n=>{if(n.ok)return n.arrayBuffer();throw Error(`Failed to fetch model: ${i.modelAssetPath} (${n.status})`)}).then(n=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(n),!0,!1,!1),kf(this,"/model.dat"),this.o(),this.L()});if(i.modelAssetBuffer instanceof Uint8Array)kf(this,i.modelAssetBuffer);else if(i.modelAssetBuffer)return(async function(n){for(var s=[],r=0;;){let{done:a,value:o}=await n.read();if(a)break;s.push(o),r+=o.length}if(s.length===0)return new Uint8Array(0);if(s.length===1)return s[0];n=new Uint8Array(r),r=0;for(let a of s)n.set(a,r),r+=a.length;return n})(i.modelAssetBuffer).then(n=>{kf(this,n),this.o(),this.L()})}return this.o(),this.L(),Promise.resolve()}L(){}ja(){var t;if(this.g.ja(e=>{t=Uw(e)}),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener((i,n)=>{this.K.push(Error(n))}),this.g.Za(),this.g.setGraph(t,e),this.m?.ya(),this.D=void 0,Bv(this)}finishProcessing(t){this.g.finishProcessing(),Bv(this),this.m&&t!==void 0&&this.m.za(t)}close(){this.D=void 0,this.m?.xa(),this.m?.close(),this.g.closeGraph()}};Pl.prototype.close=Pl.prototype.close;lp=class{constructor(e,i,n,s){this.g=e,this.h=i,this.m=n,this.j=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.j)}};ua=class{B(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){var t=this.g;if(this.h=ji(t.createProgram(),"Failed to create WebGL program"),this.da=Fv(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.Z=Fv(this,this.B(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.F=t.getAttribLocation(this.h,"aVertex"),this.K=t.getAttribLocation(this.h,"aTex")}I(){}j(){}close(){if(this.h){let t=this.g;t.deleteProgram(this.h),t.deleteShader(this.da),t.deleteShader(this.Z)}this.C&&this.g.deleteFramebuffer(this.C),this.D&&this.D.close(),this.l&&this.l.close()}},Tb=class extends ua{B(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}I(){var t=this.g;t.activeTexture(t.TEXTURE1),this.u=Tr(this,t,t.LINEAR),t.activeTexture(t.TEXTURE2),this.o=Tr(this,t,t.NEAREST)}m(){super.m();var t=this.g;this.O=ji(t.getUniformLocation(this.h,"backgroundTexture"),"Uniform location"),this.Y=ji(t.getUniformLocation(this.h,"colorMappingTexture"),"Uniform location"),this.L=ji(t.getUniformLocation(this.h,"maskTexture"),"Uniform location")}j(){super.j();var t=this.g;t.uniform1i(this.L,0),t.uniform1i(this.O,1),t.uniform1i(this.Y,2)}close(){this.u&&this.g.deleteTexture(this.u),this.o&&this.g.deleteTexture(this.o),super.close()}},wb=class extends ua{B(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}I(){var t=this.g;t.activeTexture(t.TEXTURE1),this.o=Tr(this,t),t.activeTexture(t.TEXTURE2),this.u=Tr(this,t)}m(){super.m();var t=this.g;this.L=ji(t.getUniformLocation(this.h,"defaultTexture"),"Uniform location"),this.O=ji(t.getUniformLocation(this.h,"overlayTexture"),"Uniform location"),this.J=ji(t.getUniformLocation(this.h,"maskTexture"),"Uniform location")}j(){super.j();var t=this.g;t.uniform1i(this.J,0),t.uniform1i(this.L,1),t.uniform1i(this.O,2)}close(){this.o&&this.g.deleteTexture(this.o),this.u&&this.g.deleteTexture(this.u),super.close()}};ci=class{constructor(t,e,i,n,s,r,a){this.g=t,this.m=e,this.o=i,this.canvas=n,this.j=s,this.width=r,this.height=a,this.o&&--Ov===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ua(){return!!Fs(this,0)}ua(){return!!Fs(this,1)}W(){return!!Fs(this,2)}ta(){return(e=Fs(t=this,0))||(e=cp(t),e=new Uint8Array(e.map(i=>Math.round(255*i))),t.g.push(e)),e;var t,e}sa(){return cp(this)}S(){return hy(this)}clone(){var t=[];for(let e of this.g){let i;if(e instanceof Uint8Array)i=new Uint8Array(e);else if(e instanceof Float32Array)i=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{let n=vo(this),s=sm(this);n.activeTexture(n.TEXTURE1),i=Tr(s,n,this.m?n.LINEAR:n.NEAREST),n.bindTexture(n.TEXTURE_2D,i);let r=uy(this);n.texImage2D(n.TEXTURE_2D,0,r,this.width,this.height,0,n.RED,n.FLOAT,null),n.bindTexture(n.TEXTURE_2D,null),ju(s,n,i),Xl(s,n,!1,()=>{dy(this),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.TRIANGLE_FAN,0,4),hp(this)}),nm(s),hp(this)}}t.push(i)}return new ci(t,this.m,this.W(),this.canvas,this.j,this.width,this.height)}close(){this.o&&vo(this).deleteTexture(Fs(this,2)),Ov=-1}};ci.prototype.close=ci.prototype.close,ci.prototype.clone=ci.prototype.clone,ci.prototype.getAsWebGLTexture=ci.prototype.S,ci.prototype.getAsFloat32Array=ci.prototype.sa,ci.prototype.getAsUint8Array=ci.prototype.ta,ci.prototype.hasWebGLTexture=ci.prototype.W,ci.prototype.hasFloat32Array=ci.prototype.ua,ci.prototype.hasUint8Array=ci.prototype.Ua;Ov=250,bb={color:"white",lineWidth:4,radius:6};Yi=class{constructor(t,e){typeof CanvasRenderingContext2D<"u"&&t instanceof CanvasRenderingContext2D||t instanceof OffscreenCanvasRenderingContext2D?(this.j=t,this.o=e):this.o=t}Ma(t,e){if(t){var i=Al(this);e=Gf(e),i.save();var n=i.canvas,s=0;for(let r of t)i.fillStyle=Us(e.fillColor,{index:s,from:r}),i.strokeStyle=Us(e.color,{index:s,from:r}),i.lineWidth=Us(e.lineWidth,{index:s,from:r}),(t=new Path2D).arc(r.x*n.width,r.y*n.height,Us(e.radius,{index:s,from:r}),0,2*Math.PI),i.fill(t),i.stroke(t),++s;i.restore()}}La(t,e,i){if(t&&e){var n=Al(this);i=Gf(i),n.save();var s=n.canvas,r=0;for(let a of e){n.beginPath(),e=t[a.start];let o=t[a.end];e&&o&&(n.strokeStyle=Us(i.color,{index:r,from:e,to:o}),n.lineWidth=Us(i.lineWidth,{index:r,from:e,to:o}),n.moveTo(e.x*s.width,e.y*s.height),n.lineTo(o.x*s.width,o.y*s.height)),++r,n.stroke()}n.restore()}}Ia(t,e){var i=Al(this);e=Gf(e),i.save(),i.beginPath(),i.lineWidth=Us(e.lineWidth,{}),i.strokeStyle=Us(e.color,{}),i.fillStyle=Us(e.fillColor,{}),i.moveTo(t.originX,t.originY),i.lineTo(t.originX+t.width,t.originY),i.lineTo(t.originX+t.width,t.originY+t.height),i.lineTo(t.originX,t.originY+t.height),i.lineTo(t.originX,t.originY),i.stroke(),i.fill(),i.restore()}Ja(t,e,i=[0,0,0,255]){this.j?(function(n,s,r,a){var o=Ll(n);Gv(n,s,l=>{Hv(n,l,r,a),(l=Al(n)).drawImage(o.canvas,0,0,l.canvas.width,l.canvas.height)})})(this,t,i,e):Hv(this,t.S(),i,e)}Ka(t,e,i){this.j?(function(n,s,r,a){var o=Ll(n);Gv(n,s,l=>{zv(n,l,r,a),(l=Al(n)).drawImage(o.canvas,0,0,l.canvas.width,l.canvas.height)})})(this,t,e,i):zv(this,t.S(),e,i)}close(){this.g?.close(),this.g=void 0,this.h?.close(),this.h=void 0,this.m?.close(),this.m=void 0}};Yi.prototype.close=Yi.prototype.close,Yi.prototype.drawConfidenceMask=Yi.prototype.Ka,Yi.prototype.drawCategoryMask=Yi.prototype.Ja,Yi.prototype.drawBoundingBox=Yi.prototype.Ia,Yi.prototype.drawConnectors=Yi.prototype.La,Yi.prototype.drawLandmarks=Yi.prototype.Ma,Yi.lerp=function(t,e,i,n,s){return kv(n*(1-(t-e)/(i-e))+s*(1-(i-t)/(i-e)),n,s)},Yi.clamp=kv;Ii=class{constructor(t,e,i,n,s,r,a){this.g=t,this.o=e,this.m=i,this.canvas=n,this.j=s,this.width=r,this.height=a,(this.o||this.m)&&--Wv===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ta(){return!!us(this,0)}va(){return!!us(this,1)}W(){return!!us(this,2)}Qa(){return fy(this)}Pa(){var t=us(this,1);return t||(lu(this),cu(this),t=Vv(this),Sl(this),this.g.push(t),this.o=!0),t}S(){return lu(this)}clone(){var t=[];for(let e of this.g){let i;if(e instanceof ImageData)i=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){let n=xo(this),s=$u(this);n.activeTexture(n.TEXTURE1),i=Tr(s,n),n.bindTexture(n.TEXTURE_2D,i),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,this.width,this.height,0,n.RGBA,n.UNSIGNED_BYTE,null),n.bindTexture(n.TEXTURE_2D,null),ju(s,n,i),Xl(s,n,!1,()=>{cu(this),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.TRIANGLE_FAN,0,4),Sl(this)}),nm(s),Sl(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);lu(this),cu(this),i=Vv(this),Sl(this)}t.push(i)}return new Ii(t,this.va(),this.W(),this.canvas,this.j,this.width,this.height)}close(){this.o&&us(this,1).close(),this.m&&xo(this).deleteTexture(us(this,2)),Wv=-1}};Ii.prototype.close=Ii.prototype.close,Ii.prototype.clone=Ii.prototype.clone,Ii.prototype.getAsWebGLTexture=Ii.prototype.S,Ii.prototype.getAsImageBitmap=Ii.prototype.Pa,Ii.prototype.getAsImageData=Ii.prototype.Qa,Ii.prototype.hasWebGLTexture=Ii.prototype.W,Ii.prototype.hasImageBitmap=Ii.prototype.va,Ii.prototype.hasImageData=Ii.prototype.Ta;Wv=250;Cb=cy((Xv=ly(oy),class extends Xv{get oa(){return this.i}Da(t,e,i){Pe(this,e,n=>{var[s,r]=ay(this,t,n);this.oa._addBoundTextureAsImageToStream(n,s,r,i)})}ga(t,e){hs(this,t,e),Pe(this,t,i=>{this.oa._attachImageListener(i)})}ha(t,e){_r(this,t,e),Pe(this,t,i=>{this.oa._attachImageVectorListener(i)})}})),Wn=class extends Cb{};on=class extends Pl{constructor(t,e,i,n){super(t),this.g=t,this.Ba=e,this.qa=i,this.Ca=n,this.da=new ua,this.J=!1}j(t,e=!0){if("runningMode"in t){var i=this.J=!!t.runningMode&&t.runningMode!=="IMAGE";qe(this.baseOptions,2,i==null?i:uu(i))}if(t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.j(t,e)}close(){this.da.close(),super.close()}};on.prototype.close=on.prototype.close;vn=class extends on{constructor(t,e){super(new Wn(t,e),"image_in","norm_rect_in",!1),this.l={detections:[]},Be(t=this.h=new Ku,0,1,e=new Jt),Ue(this.h,2,.5),Ue(this.h,3,.3)}C(){return"FaceDetector"}get baseOptions(){return yt(this.h,Jt,1)}set baseOptions(t){Be(this.h,0,1,t)}v(t){return"minDetectionConfidence"in t&&Ue(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Ue(this.h,3,t.minSuppressionThreshold??.3),this.j(t)}G(t,e){return this.l={detections:[]},Xn(this,t,e),this.l}H(t,e,i){return this.l={detections:[]},_s(this,t,i,e),this.l}o(){var t=new Sn;Zt(t,"image_in"),Zt(t,"norm_rect_in"),Et(t,"detections");var e=new Mn;xs(e,qw,this.h);var i=new ln;An(i,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Qt(i,"IMAGE:image_in"),Qt(i,"NORM_RECT:norm_rect_in"),ft(i,"DETECTIONS:detections"),i.v(e),Pn(t,i),this.g.attachProtoVectorListener("detections",(n,s)=>{for(let r of n)n=Ix(r),this.l.detections.push(iy(n));Me(this,s)}),this.g.attachEmptyPacketListener("detections",n=>{Me(this,n)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};vn.prototype.detectForVideo=vn.prototype.H,vn.prototype.detect=vn.prototype.G,vn.prototype.setOptions=vn.prototype.v,vn.createFromModelPath=async function(t,e){return vt(vn,t,{baseOptions:{modelAssetPath:e}})},vn.createFromModelBuffer=function(t,e){return vt(vn,t,{baseOptions:{modelAssetBuffer:e}})},vn.createFromOptions=function(t,e){return vt(vn,t,e)};rm=Vn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),am=Vn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),om=Vn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),my=Vn([474,475],[475,476],[476,477],[477,474]),lm=Vn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),cm=Vn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),gy=Vn([469,470],[470,471],[471,472],[472,469]),hm=Vn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),vy=[...rm,...am,...om,...lm,...cm,...hm],xy=Vn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);mt=class extends on{constructor(t,e){super(new Wn(t,e),"image_in","norm_rect",!1),this.l={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Be(t=this.h=new Ox,0,1,e=new Jt),this.B=new Nx,Be(this.h,0,3,this.B),this.u=new Ku,Be(this.h,0,2,this.u),ms(this.u,4,1),Ue(this.u,2,.5),Ue(this.B,2,.5),Ue(this.h,4,.5)}C(){return"FaceLandmarker"}get baseOptions(){return yt(this.h,Jt,1)}set baseOptions(t){Be(this.h,0,1,t)}v(t){return"numFaces"in t&&ms(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Ue(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Ue(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Ue(this.B,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.j(t)}G(t,e){return Yv(this),Xn(this,t,e),this.l}H(t,e,i){return Yv(this),_s(this,t,i,e),this.l}o(){var t=new Sn;Zt(t,"image_in"),Zt(t,"norm_rect"),Et(t,"face_landmarks");var e=new Mn;xs(e,Qw,this.h);var i=new ln;An(i,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Qt(i,"IMAGE:image_in"),Qt(i,"NORM_RECT:norm_rect"),ft(i,"NORM_LANDMARKS:face_landmarks"),i.v(e),Pn(t,i),this.g.attachProtoVectorListener("face_landmarks",(n,s)=>{for(let r of n)n=Wl(r),this.l.faceLandmarks.push(Qu(n));Me(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",n=>{Me(this,n)}),this.outputFaceBlendshapes&&(Et(t,"blendshapes"),ft(i,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(n,s)=>{if(this.outputFaceBlendshapes)for(let r of n)n=qu(r),this.l.faceBlendshapes.push($p(n.g()??[]));Me(this,s)}),this.g.attachEmptyPacketListener("blendshapes",n=>{Me(this,n)})),this.outputFacialTransformationMatrixes&&(Et(t,"face_geometry"),ft(i,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(n,s)=>{if(this.outputFacialTransformationMatrixes)for(let r of n)(n=yt(n=Kw(r),Ow,2))&&this.l.facialTransformationMatrixes.push({rows:Rn(n,1)??0??0,columns:Rn(n,2)??0??0,data:Jr(n,3,zn,Zr()).slice()??[]});Me(this,s)}),this.g.attachEmptyPacketListener("face_geometry",n=>{Me(this,n)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};mt.prototype.detectForVideo=mt.prototype.H,mt.prototype.detect=mt.prototype.G,mt.prototype.setOptions=mt.prototype.v,mt.createFromModelPath=function(t,e){return vt(mt,t,{baseOptions:{modelAssetPath:e}})},mt.createFromModelBuffer=function(t,e){return vt(mt,t,{baseOptions:{modelAssetBuffer:e}})},mt.createFromOptions=function(t,e){return vt(mt,t,e)},mt.FACE_LANDMARKS_LIPS=rm,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LIPS",mt.FACE_LANDMARKS_LIPS),mt.FACE_LANDMARKS_LEFT_EYE=am,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYE",mt.FACE_LANDMARKS_LEFT_EYE),mt.FACE_LANDMARKS_LEFT_EYEBROW=om,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",mt.FACE_LANDMARKS_LEFT_EYEBROW),mt.FACE_LANDMARKS_LEFT_IRIS=my,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS",mt.FACE_LANDMARKS_LEFT_IRIS),mt.FACE_LANDMARKS_RIGHT_EYE=lm,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE",mt.FACE_LANDMARKS_RIGHT_EYE),mt.FACE_LANDMARKS_RIGHT_EYEBROW=cm,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",mt.FACE_LANDMARKS_RIGHT_EYEBROW),mt.FACE_LANDMARKS_RIGHT_IRIS=gy,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS",mt.FACE_LANDMARKS_RIGHT_IRIS),mt.FACE_LANDMARKS_FACE_OVAL=hm,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_FACE_OVAL",mt.FACE_LANDMARKS_FACE_OVAL),mt.FACE_LANDMARKS_CONTOURS=vy,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_CONTOURS",mt.FACE_LANDMARKS_CONTOURS),mt.FACE_LANDMARKS_TESSELATION=xy,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_TESSELATION",mt.FACE_LANDMARKS_TESSELATION);um=Vn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);qi=class extends on{constructor(t,e){super(new Wn(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Be(t=this.l=new Hx,0,1,e=new Jt),this.u=new Qp,Be(this.l,0,2,this.u),this.F=new Kp,Be(this.u,0,3,this.F),this.B=new Gx,Be(this.u,0,2,this.B),this.h=new Zw,Be(this.l,0,3,this.h),Ue(this.B,2,.5),Ue(this.u,4,.5),Ue(this.F,2,.5)}C(){return"GestureRecognizer"}get baseOptions(){return yt(this.l,Jt,1)}set baseOptions(t){Be(this.l,0,1,t)}v(t){if(ms(this.B,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ue(this.B,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ue(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ue(this.F,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new no,i=e,n=ip(t.cannedGesturesClassifierOptions,yt(this.h,no,3)?.j());Be(i,0,2,n),Be(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&yt(this.h,no,3)?.g();return t.customGesturesClassifierOptions?(Be(i=e=new no,0,2,n=ip(t.customGesturesClassifierOptions,yt(this.h,no,4)?.j())),Be(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&yt(this.h,no,4)?.g(),this.j(t)}Xa(t,e){return qv(this),Xn(this,t,e),Kv(this)}Ya(t,e,i){return qv(this),_s(this,t,i,e),Kv(this)}o(){var t=new Sn;Zt(t,"image_in"),Zt(t,"norm_rect"),Et(t,"hand_gestures"),Et(t,"hand_landmarks"),Et(t,"world_hand_landmarks"),Et(t,"handedness");var e=new Mn;xs(e,Jw,this.l);var i=new ln;An(i,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Qt(i,"IMAGE:image_in"),Qt(i,"NORM_RECT:norm_rect"),ft(i,"HAND_GESTURES:hand_gestures"),ft(i,"LANDMARKS:hand_landmarks"),ft(i,"WORLD_LANDMARKS:world_hand_landmarks"),ft(i,"HANDEDNESS:handedness"),i.v(e),Pn(t,i),this.g.attachProtoVectorListener("hand_landmarks",(n,s)=>{for(let r of n){n=Wl(r);let a=[];for(let o of zs(n,Lx,1))a.push({x:hi(o,1)??0,y:hi(o,2)??0,z:hi(o,3)??0,visibility:hi(o,4)??0});this.landmarks.push(a)}Me(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",n=>{Me(this,n)}),this.g.attachProtoVectorListener("world_hand_landmarks",(n,s)=>{for(let r of n){n=oo(r);let a=[];for(let o of zs(n,Px,1))a.push({x:hi(o,1)??0,y:hi(o,2)??0,z:hi(o,3)??0,visibility:hi(o,4)??0});this.worldLandmarks.push(a)}Me(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",n=>{Me(this,n)}),this.g.attachProtoVectorListener("hand_gestures",(n,s)=>{this.gestures.push(...Qv(n,!1)),Me(this,s)}),this.g.attachEmptyPacketListener("hand_gestures",n=>{Me(this,n)}),this.g.attachProtoVectorListener("handedness",(n,s)=>{this.handedness.push(...Qv(n)),Me(this,s)}),this.g.attachEmptyPacketListener("handedness",n=>{Me(this,n)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};qi.prototype.recognizeForVideo=qi.prototype.Ya,qi.prototype.recognize=qi.prototype.Xa,qi.prototype.setOptions=qi.prototype.v,qi.createFromModelPath=function(t,e){return vt(qi,t,{baseOptions:{modelAssetPath:e}})},qi.createFromModelBuffer=function(t,e){return vt(qi,t,{baseOptions:{modelAssetBuffer:e}})},qi.createFromOptions=function(t,e){return vt(qi,t,e)},qi.HAND_CONNECTIONS=um,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$gesture_recognizer$gesture_recognizer.GestureRecognizer.HAND_CONNECTIONS",qi.HAND_CONNECTIONS);Ki=class extends on{constructor(t,e){super(new Wn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Be(t=this.h=new Qp,0,1,e=new Jt),this.u=new Kp,Be(this.h,0,3,this.u),this.l=new Gx,Be(this.h,0,2,this.l),ms(this.l,3,1),Ue(this.l,2,.5),Ue(this.u,2,.5),Ue(this.h,4,.5)}C(){return"HandLandmarker"}get baseOptions(){return yt(this.h,Jt,1)}set baseOptions(t){Be(this.h,0,1,t)}v(t){return"numHands"in t&&ms(this.l,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ue(this.l,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ue(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ue(this.u,2,t.minHandPresenceConfidence??.5),this.j(t)}G(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Xn(this,t,e),Zv(this)}H(t,e,i){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],_s(this,t,i,e),Zv(this)}o(){var t=new Sn;Zt(t,"image_in"),Zt(t,"norm_rect"),Et(t,"hand_landmarks"),Et(t,"world_hand_landmarks"),Et(t,"handedness");var e=new Mn;xs(e,jw,this.h);var i=new ln;An(i,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Qt(i,"IMAGE:image_in"),Qt(i,"NORM_RECT:norm_rect"),ft(i,"LANDMARKS:hand_landmarks"),ft(i,"WORLD_LANDMARKS:world_hand_landmarks"),ft(i,"HANDEDNESS:handedness"),i.v(e),Pn(t,i),this.g.attachProtoVectorListener("hand_landmarks",(n,s)=>{for(let r of n)n=Wl(r),this.landmarks.push(Qu(n));Me(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",n=>{Me(this,n)}),this.g.attachProtoVectorListener("world_hand_landmarks",(n,s)=>{for(let r of n)n=oo(r),this.worldLandmarks.push(wl(n));Me(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",n=>{Me(this,n)}),this.g.attachProtoVectorListener("handedness",(n,s)=>{var r=this.handedness,a=r.push,o=[];for(let l of n){n=qu(l);let c=[];for(let u of n.g())c.push({score:hi(u,2)??0,index:Rn(u,1)??0??-1,categoryName:Ui(ni(u,3))??""??"",displayName:Ui(ni(u,4))??""??""});o.push(c)}a.call(r,...o),Me(this,s)}),this.g.attachEmptyPacketListener("handedness",n=>{Me(this,n)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ki.prototype.detectForVideo=Ki.prototype.H,Ki.prototype.detect=Ki.prototype.G,Ki.prototype.setOptions=Ki.prototype.v,Ki.createFromModelPath=function(t,e){return vt(Ki,t,{baseOptions:{modelAssetPath:e}})},Ki.createFromModelBuffer=function(t,e){return vt(Ki,t,{baseOptions:{modelAssetBuffer:e}})},Ki.createFromOptions=function(t,e){return vt(Ki,t,e)},Ki.HAND_CONNECTIONS=um,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$hand_landmarker$hand_landmarker.HandLandmarker.HAND_CONNECTIONS",Ki.HAND_CONNECTIONS);yy=Vn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);rt=class extends on{constructor(t,e){super(new Wn(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Be(t=this.l=new Yx,0,1,e=new Jt),this.Y=new Kp,Be(this.l,0,2,this.Y),this.Aa=new $w,Be(this.l,0,3,this.Aa),this.u=new Ku,Be(this.l,0,4,this.u),this.O=new Nx,Be(this.l,0,5,this.O),this.B=new Wx,Be(this.l,0,6,this.B),this.Z=new Xx,Be(this.l,0,7,this.Z),Ue(this.u,2,.5),Ue(this.u,3,.3),Ue(this.O,2,.5),Ue(this.B,2,.5),Ue(this.B,3,.3),Ue(this.Z,2,.5),Ue(this.Y,2,.5)}C(){return"HolisticLandmarker"}get baseOptions(){return yt(this.l,Jt,1)}set baseOptions(t){Be(this.l,0,1,t)}v(t){return"minFaceDetectionConfidence"in t&&Ue(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Ue(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Ue(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Ue(this.B,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Ue(this.B,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Ue(this.Z,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Ue(this.Y,2,t.minHandLandmarksConfidence??.5),this.j(t)}G(t,e,i){var n=typeof e!="function"?e:{};return this.F=typeof e=="function"?e:i,Jv(this),Xn(this,t,n),jv(this)}H(t,e,i,n){var s=typeof i!="function"?i:{};return this.F=typeof i=="function"?i:n,Jv(this),_s(this,t,s,e),jv(this)}o(){var t=new Sn;Zt(t,"input_frames_image"),Et(t,"pose_landmarks"),Et(t,"pose_world_landmarks"),Et(t,"face_landmarks"),Et(t,"left_hand_landmarks"),Et(t,"left_hand_world_landmarks"),Et(t,"right_hand_landmarks"),Et(t,"right_hand_world_landmarks");var e=new Mn,i=new lv;An(i,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))qe(s,2,Bu(r,0,Rl));else{if(!(typeof r=="string"||r instanceof ds||dp(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Ol(s,2,Du(r,!1),sa())}})(i,this.l.g());var n=new ln;An(n,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Dl(n,8,lv,i),Qt(n,"IMAGE:input_frames_image"),ft(n,"POSE_LANDMARKS:pose_landmarks"),ft(n,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),ft(n,"FACE_LANDMARKS:face_landmarks"),ft(n,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),ft(n,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),ft(n,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),ft(n,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),n.v(e),Pn(t,n),Zu(this,t),this.g.attachProtoListener("pose_landmarks",(s,r)=>{iu(s,this.h.poseLandmarks),Me(this,r)}),this.g.attachEmptyPacketListener("pose_landmarks",s=>{Me(this,s)}),this.g.attachProtoListener("pose_world_landmarks",(s,r)=>{var a=this.h.poseWorldLandmarks;s=oo(s),a.push(wl(s)),Me(this,r)}),this.g.attachEmptyPacketListener("pose_world_landmarks",s=>{Me(this,s)}),this.outputPoseSegmentationMasks&&(ft(n,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),go(this,"pose_segmentation_mask"),this.g.ga("pose_segmentation_mask",(s,r)=>{this.h.poseSegmentationMasks=[yo(this,s,!0,!this.F)],Me(this,r)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.h.poseSegmentationMasks=[],Me(this,s)})),this.g.attachProtoListener("face_landmarks",(s,r)=>{iu(s,this.h.faceLandmarks),Me(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",s=>{Me(this,s)}),this.outputFaceBlendshapes&&(Et(t,"extra_blendshapes"),ft(n,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(s,r)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=qu(s),a.push($p(s.g()??[]))),Me(this,r)}),this.g.attachEmptyPacketListener("extra_blendshapes",s=>{Me(this,s)})),this.g.attachProtoListener("left_hand_landmarks",(s,r)=>{iu(s,this.h.leftHandLandmarks),Me(this,r)}),this.g.attachEmptyPacketListener("left_hand_landmarks",s=>{Me(this,s)}),this.g.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var a=this.h.leftHandWorldLandmarks;s=oo(s),a.push(wl(s)),Me(this,r)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",s=>{Me(this,s)}),this.g.attachProtoListener("right_hand_landmarks",(s,r)=>{iu(s,this.h.rightHandLandmarks),Me(this,r)}),this.g.attachEmptyPacketListener("right_hand_landmarks",s=>{Me(this,s)}),this.g.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var a=this.h.rightHandWorldLandmarks;s=oo(s),a.push(wl(s)),Me(this,r)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",s=>{Me(this,s)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};rt.prototype.detectForVideo=rt.prototype.H,rt.prototype.detect=rt.prototype.G,rt.prototype.setOptions=rt.prototype.v,rt.createFromModelPath=function(t,e){return vt(rt,t,{baseOptions:{modelAssetPath:e}})},rt.createFromModelBuffer=function(t,e){return vt(rt,t,{baseOptions:{modelAssetBuffer:e}})},rt.createFromOptions=function(t,e){return vt(rt,t,e)},rt.HAND_CONNECTIONS=um,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.HAND_CONNECTIONS",rt.HAND_CONNECTIONS),rt.POSE_CONNECTIONS=yy,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.POSE_CONNECTIONS",rt.POSE_CONNECTIONS),rt.FACE_LANDMARKS_LIPS=rm,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LIPS",rt.FACE_LANDMARKS_LIPS),rt.FACE_LANDMARKS_LEFT_EYE=am,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYE",rt.FACE_LANDMARKS_LEFT_EYE),rt.FACE_LANDMARKS_LEFT_EYEBROW=om,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",rt.FACE_LANDMARKS_LEFT_EYEBROW),rt.FACE_LANDMARKS_LEFT_IRIS=my,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_IRIS",rt.FACE_LANDMARKS_LEFT_IRIS),rt.FACE_LANDMARKS_RIGHT_EYE=lm,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYE",rt.FACE_LANDMARKS_RIGHT_EYE),rt.FACE_LANDMARKS_RIGHT_EYEBROW=cm,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",rt.FACE_LANDMARKS_RIGHT_EYEBROW),rt.FACE_LANDMARKS_RIGHT_IRIS=gy,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_IRIS",rt.FACE_LANDMARKS_RIGHT_IRIS),rt.FACE_LANDMARKS_FACE_OVAL=hm,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_FACE_OVAL",rt.FACE_LANDMARKS_FACE_OVAL),rt.FACE_LANDMARKS_CONTOURS=vy,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_CONTOURS",rt.FACE_LANDMARKS_CONTOURS),rt.FACE_LANDMARKS_TESSELATION=xy,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_TESSELATION",rt.FACE_LANDMARKS_TESSELATION);xn=class extends on{constructor(t,e){super(new Wn(t,e),"input_image","norm_rect",!0),this.l={classifications:[]},Be(t=this.h=new qx,0,1,e=new Jt)}C(){return"ImageClassifier"}get baseOptions(){return yt(this.h,Jt,1)}set baseOptions(t){Be(this.h,0,1,t)}v(t){return Be(this.h,0,2,ip(t,yt(this.h,Yp,2))),this.j(t)}Ga(t,e){return this.l={classifications:[]},Xn(this,t,e),this.l}Ha(t,e,i){return this.l={classifications:[]},_s(this,t,i,e),this.l}o(){var t=new Sn;Zt(t,"input_image"),Zt(t,"norm_rect"),Et(t,"classifications");var e=new Mn;xs(e,eb,this.h);var i=new ln;An(i,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Qt(i,"IMAGE:input_image"),Qt(i,"NORM_RECT:norm_rect"),ft(i,"CLASSIFICATIONS:classifications"),i.v(e),Pn(t,i),this.g.attachProtoListener("classifications",(n,s)=>{this.l=hb(Hw(n)),Me(this,s)}),this.g.attachEmptyPacketListener("classifications",n=>{Me(this,n)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};xn.prototype.classifyForVideo=xn.prototype.Ha,xn.prototype.classify=xn.prototype.Ga,xn.prototype.setOptions=xn.prototype.v,xn.createFromModelPath=function(t,e){return vt(xn,t,{baseOptions:{modelAssetPath:e}})},xn.createFromModelBuffer=function(t,e){return vt(xn,t,{baseOptions:{modelAssetBuffer:e}})},xn.createFromOptions=function(t,e){return vt(xn,t,e)};rn=class extends on{constructor(t,e){super(new Wn(t,e),"image_in","norm_rect",!0),this.h=new Kx,this.embeddings={embeddings:[]},Be(t=this.h,0,1,e=new Jt)}C(){return"ImageEmbedder"}get baseOptions(){return yt(this.h,Jt,1)}set baseOptions(t){Be(this.h,0,1,t)}v(t){var e=this.h,i=yt(this.h,vv,2);if(i=i?i.clone():new vv,t.l2Normalize!==void 0){var n=t.l2Normalize;qe(i,1,n==null?n:uu(n))}else"l2Normalize"in t&&qe(i,1);return t.quantize!==void 0?qe(i,2,(n=t.quantize)==null?n:uu(n)):"quantize"in t&&qe(i,2),Be(e,0,2,i),this.j(t)}Na(t,e){return Xn(this,t,e),this.embeddings}Oa(t,e,i){return _s(this,t,i,e),this.embeddings}o(){var t=new Sn;Zt(t,"image_in"),Zt(t,"norm_rect"),Et(t,"embeddings_out");var e=new Mn;xs(e,tb,this.h);var i=new ln;An(i,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Qt(i,"IMAGE:image_in"),Qt(i,"NORM_RECT:norm_rect"),ft(i,"EMBEDDINGS:embeddings_out"),i.v(e),Pn(t,i),this.g.attachProtoListener("embeddings_out",(n,s)=>{n=Ww(n),this.embeddings=(function(r){return{embeddings:zs(r,Vw,1).map(a=>{var o={headIndex:Rn(a,3)??0??-1,headName:Ui(ni(a,4))??""??""};if(L1(a,gv,1,Xp))a=Jr(a=J0(a,gv,1),1,zn,Zr()),o.floatEmbedding=a.slice();else{let l=new Uint8Array(0);o.quantizedEmbedding=J0(a,zw,2)?.g()?.h()??l}return o}),timestampMs:ty(ni(r,2,void 0,fu)??P1)}})(n),Me(this,s)}),this.g.attachEmptyPacketListener("embeddings_out",n=>{Me(this,n)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};rn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Mv(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Mv(Av(t.quantizedEmbedding),Av(e.quantizedEmbedding))}return t},rn.prototype.embedForVideo=rn.prototype.Oa,rn.prototype.embed=rn.prototype.Na,rn.prototype.setOptions=rn.prototype.v,rn.createFromModelPath=function(t,e){return vt(rn,t,{baseOptions:{modelAssetPath:e}})},rn.createFromModelBuffer=function(t,e){return vt(rn,t,{baseOptions:{modelAssetBuffer:e}})},rn.createFromOptions=function(t,e){return vt(rn,t,e)};bu=class{constructor(t,e,i){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=i}close(){this.confidenceMasks?.forEach(t=>{t.close()}),this.categoryMask?.close()}};bu.prototype.close=bu.prototype.close;Qi=class extends on{constructor(t,e){super(new Wn(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new jp,this.B=new Qx,Be(this.h,0,3,this.B),Be(t=this.h,0,1,e=new Jt)}C(){return"ImageSegmenter"}get baseOptions(){return yt(this.h,Jt,1)}set baseOptions(t){Be(this.h,0,1,t)}v(t){return t.displayNamesLocale!==void 0?qe(this.h,2,Ns(t.displayNamesLocale)):"displayNamesLocale"in t&&qe(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.j(t)}L(){Rb(this)}segment(t,e,i){var n=typeof e!="function"?e:{};return this.l=typeof e=="function"?e:i,$v(this),Xn(this,t,n),e1(this)}eb(t,e,i,n){var s=typeof i!="function"?i:{};return this.l=typeof i=="function"?i:n,$v(this),_s(this,t,s,e),e1(this)}Ra(){return this.u}o(){var t=new Sn;Zt(t,"image_in"),Zt(t,"norm_rect");var e=new Mn;xs(e,Jx,this.h);var i=new ln;An(i,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Qt(i,"IMAGE:image_in"),Qt(i,"NORM_RECT:norm_rect"),i.v(e),Pn(t,i),Zu(this,t),this.outputConfidenceMasks&&(Et(t,"confidence_masks"),ft(i,"CONFIDENCE_MASKS:confidence_masks"),go(this,"confidence_masks"),this.g.ha("confidence_masks",(n,s)=>{this.confidenceMasks=n.map(r=>yo(this,r,!0,!this.l)),Me(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",n=>{this.confidenceMasks=[],Me(this,n)})),this.outputCategoryMask&&(Et(t,"category_mask"),ft(i,"CATEGORY_MASK:category_mask"),go(this,"category_mask"),this.g.ga("category_mask",(n,s)=>{this.categoryMask=yo(this,n,!1,!this.l),Me(this,s)}),this.g.attachEmptyPacketListener("category_mask",n=>{this.categoryMask=void 0,Me(this,n)})),Et(t,"quality_scores"),ft(i,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(n,s)=>{this.qualityScores=n,Me(this,s)}),this.g.attachEmptyPacketListener("quality_scores",n=>{this.categoryMask=void 0,Me(this,n)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Qi.prototype.getLabels=Qi.prototype.Ra,Qi.prototype.segmentForVideo=Qi.prototype.eb,Qi.prototype.segment=Qi.prototype.segment,Qi.prototype.setOptions=Qi.prototype.v,Qi.createFromModelPath=function(t,e){return vt(Qi,t,{baseOptions:{modelAssetPath:e}})},Qi.createFromModelBuffer=function(t,e){return vt(Qi,t,{baseOptions:{modelAssetBuffer:e}})},Qi.createFromOptions=function(t,e){return vt(Qi,t,e)};Db={0:0,1:1,2:2,3:3};Zi=class extends Pl{constructor(t,e){super(new Sb(t,e)),this.u=new ua,this.delegate="CPU",this.h=0,this.baseOptions=new Jt,this.B=this.l=0}C(){return"InteractiveSegmenter"}get i(){return this.g.i}v(t){return this.delegate=t.baseOptions?.delegate??"CPU",super.j(t)}fb(t){if(this.h===0)throw Error("Segmenter is not initialized.");var e;if(this.l!==0&&(this.i._free(this.l),this.l=0),!(e=typeof ImageData<"u"&&t instanceof ImageData))if(typeof t!="object"||t===null)e=!1;else{e=t.data;var i=t.width,n=t.height;e=Number.isInteger(i)&&i>0&&Number.isInteger(n)&&n>0&&(e instanceof Uint8ClampedArray||e instanceof Uint8Array)}if(e)e=t.width,i=t.height,t=t.data;else{if([e,i]=tm(t),typeof OffscreenCanvas<"u")n=new OffscreenCanvas(e,i);else{if(typeof document>"u")throw Error("Canvas is not supported in this environment.");n=document.createElement("canvas")}if(n.width=e,n.height=i,!(n=n.getContext("2d")))throw Error("Canvas 2D context is not supported in this environment.");n.drawImage(t,0,0),t=n.getImageData(0,0,e,i).data}if(!t)throw Error("Unsupported image source or failed to extract image pixels.");n=(function({Wa:r,width:a,height:o}){if(a<=0||o<=0)throw Error(`Invalid image dimensions: ${a}x${o}. Dimensions must be positive.`);if(r%(a*o)!==0)throw Error(`Invalid image dimensions or pixel data length. Pixel data length ${r} is not a multiple of the number of pixels (${a*o}).`);if((r/=a*o)!==4&&r!==3&&r!==1)throw Error(`Invalid image dimensions or pixel data length. Calculated channels: ${r}. Expected 1, 3, or 4.`);return r})({Wa:t.length,width:e,height:i});var s=this.i._malloc(t.length);if(this.i.HEAPU8.set(t,s),this.l=s,!this.i._interactive_segmenter_set_image(this.h,s,e,i,n))throw Error("Failed to set image on native engine.")}segment(t){if(this.h===0)throw Error("Segmenter is not initialized.");var e=(function(u){u=u.map(({isCompleted:h,brushMode:f,point:g})=>{f=Db[f]??0,g=g.map(({x:m,y:p})=>{var S=new nb;return ro(S,1,m),ro(S,2,p),S});var y=new sb;return Qf(y,h),Ol(y,1,Os(f),0),Kf(y,2,g),y});var d=new rb;return Kf(d,1,u),ab(d)})(t);t=this.i._malloc(e.length),this.i.HEAPU8.set(e,t);var i=this.i._malloc(12),n=i+4,s=i+8,r=0,a=this.B++;try{if(this.m)if(this.delegate==="GPU"){var o=this.m;++o.g.T,o.h.set(a,performance.now())}else{var l=this.m;++l.g.P,l.h.set(a,performance.now())}if((r=this.i._interactive_segmenter_segment(this.h,t,e.length,i,n,s))===0)throw Error("Segmentation failed.");this.m?.za(a);let u=this.i.HEAPU32[i/4],d=this.i.HEAPU32[n/4],h=new Float32Array(this.i.HEAPU8.buffer,r,this.i.HEAPU32[s/4]/4);var c=new Float32Array(h);if(o=u*d,(c instanceof Uint8Array||c instanceof Float32Array)&&c.length!==o)throw Error("Unsupported channel count: "+c.length/o);return new ci([c],!0,!1,this.g.i.canvas??void 0,this.u,u,d)}finally{t!==0&&this.i._free(t),i!==0&&this.i._free(i),r!==0&&this.i._free(r)}}o(){this.h!==0&&(this.m?.xa(),this.i._interactive_segmenter_close(this.h),this.h=0),this.l!==0&&(this.i._free(this.l),this.l=0);var t=new Su;if(this.delegate==="GPU"){var e=new Wp;ps(t,2,ia,e)}else ms(e=new Lw,1,4),ps(t,1,ia,e);if(Be(this.baseOptions,0,3,t),t=Yw(this.baseOptions),e=this.i._malloc(t.length),this.i.HEAPU8.set(t,e),this.h=this.i._interactive_segmenter_create(e,t.length),this.i._free(e),this.h===0)throw Error("Failed to create native InteractiveSegmenter engine.");this.m?.ya()}close(){this.h!==0&&(this.i._interactive_segmenter_close(this.h),this.h=0),this.l!==0&&(this.i._free(this.l),this.l=0),this.u.close(),super.close()}};Zi.prototype.close=Zi.prototype.close,Zi.prototype.segment=Zi.prototype.segment,Zi.prototype.setImage=Zi.prototype.fb,Zi.prototype.setOptions=Zi.prototype.v,Zi.createFromModelPath=function(t,e){return ou(Zi,Hf(),t,{baseOptions:{modelAssetPath:e}})},Zi.createFromModelBuffer=function(t,e){return ou(Zi,Hf(),t,{baseOptions:{modelAssetBuffer:e}})},Zi.createFromOptions=function(t,e){var i=e.canvas??Hf();return ou(Zi,i,t,e)};Cu=class{constructor(t,e,i){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=i}close(){this.confidenceMasks?.forEach(t=>{t.close()}),this.categoryMask?.close()}};Cu.prototype.close=Cu.prototype.close;Hn=class extends on{constructor(t,e){super(new Wn(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new jp,this.u=new Qx,Be(this.h,0,3,this.u),Be(t=this.h,0,1,e=new Jt)}C(){return"InteractiveSegmenterLegacy"}get baseOptions(){return yt(this.h,Jt,1)}set baseOptions(t){Be(this.h,0,1,t)}v(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.j(t)}segment(t,e,i,n){var s=typeof i!="function"?i:{};if(this.l=typeof i=="function"?i:n,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,i=this.I+1,n=new jx,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var r=new Of;Qf(r,!0),ro(r,1,e.keypoint.x),ro(r,2,e.keypoint.y),ps(n,1,tp,r)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{let o=new ob;for(r of e.scribble)Qf(e=new Of,!0),ro(e,1,r.x),ro(e,2,r.y),Dl(o,1,Of,e);ps(n,2,tp,o)}}this.g.addProtoToStream(n.g(),"mediapipe.tasks.vision.interactive_segmenter_legacy.proto.RegionOfInterest","roi_in",i),Xn(this,t,s);e:{try{let o=new Cu(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.l){var a=o;break e}this.l(o)}finally{Ju(this)}a=void 0}return a}o(){var t=new Sn;Zt(t,"image_in"),Zt(t,"roi_in"),Zt(t,"norm_rect_in");var e=new Mn;xs(e,Jx,this.h);var i=new ln;An(i,2,"mediapipe.tasks.vision.interactive_segmenter_legacy.InteractiveSegmenterGraphV2"),Qt(i,"IMAGE:image_in"),Qt(i,"ROI:roi_in"),Qt(i,"NORM_RECT:norm_rect_in"),i.v(e),Pn(t,i),Zu(this,t),this.outputConfidenceMasks&&(Et(t,"confidence_masks"),ft(i,"CONFIDENCE_MASKS:confidence_masks"),go(this,"confidence_masks"),this.g.ha("confidence_masks",(n,s)=>{this.confidenceMasks=n.map(r=>yo(this,r,!0,!this.l)),Me(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",n=>{this.confidenceMasks=[],Me(this,n)})),this.outputCategoryMask&&(Et(t,"category_mask"),ft(i,"CATEGORY_MASK:category_mask"),go(this,"category_mask"),this.g.ga("category_mask",(n,s)=>{this.categoryMask=yo(this,n,!1,!this.l),Me(this,s)}),this.g.attachEmptyPacketListener("category_mask",n=>{this.categoryMask=void 0,Me(this,n)})),Et(t,"quality_scores"),ft(i,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(n,s)=>{this.qualityScores=n,Me(this,s)}),this.g.attachEmptyPacketListener("quality_scores",n=>{this.categoryMask=void 0,Me(this,n)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Hn.prototype.segment=Hn.prototype.segment,Hn.prototype.setOptions=Hn.prototype.v,Hn.createFromModelPath=function(t,e){return vt(Hn,t,{baseOptions:{modelAssetPath:e}})},Hn.createFromModelBuffer=function(t,e){return vt(Hn,t,{baseOptions:{modelAssetBuffer:e}})},Hn.createFromOptions=function(t,e){return vt(Hn,t,e)};yn=class extends on{constructor(t,e){super(new Wn(t,e),"input_frame_gpu","norm_rect",!1),this.l={detections:[]},Be(t=this.h=new $x,0,1,e=new Jt)}C(){return"ObjectDetector"}get baseOptions(){return yt(this.h,Jt,1)}set baseOptions(t){Be(this.h,0,1,t)}v(t){return t.displayNamesLocale!==void 0?qe(this.h,2,Ns(t.displayNamesLocale)):"displayNamesLocale"in t&&qe(this.h,2),t.maxResults!==void 0?ms(this.h,3,t.maxResults):"maxResults"in t&&qe(this.h,3),t.scoreThreshold!==void 0?Ue(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&qe(this.h,4),t.categoryAllowlist!==void 0?mu(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&qe(this.h,5),t.categoryDenylist!==void 0?mu(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&qe(this.h,6),this.j(t)}G(t,e){return this.l={detections:[]},Xn(this,t,e),this.l}H(t,e,i){return this.l={detections:[]},_s(this,t,i,e),this.l}o(){var t=new Sn;Zt(t,"input_frame_gpu"),Zt(t,"norm_rect"),Et(t,"detections");var e=new Mn;xs(e,lb,this.h);var i=new ln;An(i,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Qt(i,"IMAGE:input_frame_gpu"),Qt(i,"NORM_RECT:norm_rect"),ft(i,"DETECTIONS:detections"),i.v(e),Pn(t,i),this.g.attachProtoVectorListener("detections",(n,s)=>{for(let r of n)n=Ix(r),this.l.detections.push(iy(n));Me(this,s)}),this.g.attachEmptyPacketListener("detections",n=>{Me(this,n)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};yn.prototype.detectForVideo=yn.prototype.H,yn.prototype.detect=yn.prototype.G,yn.prototype.setOptions=yn.prototype.v,yn.createFromModelPath=async function(t,e){return vt(yn,t,{baseOptions:{modelAssetPath:e}})},yn.createFromModelBuffer=function(t,e){return vt(yn,t,{baseOptions:{modelAssetBuffer:e}})},yn.createFromOptions=function(t,e){return vt(yn,t,e)};up=class{constructor(t,e,i){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=i}close(){this.segmentationMasks?.forEach(t=>{t.close()})}};up.prototype.close=up.prototype.close;Ji=class extends on{constructor(t,e){super(new Wn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Be(t=this.h=new ey,0,1,e=new Jt),this.B=new Xx,Be(this.h,0,3,this.B),this.l=new Wx,Be(this.h,0,2,this.l),ms(this.l,4,1),Ue(this.l,2,.5),Ue(this.B,2,.5),Ue(this.h,4,.5)}C(){return"PoseLandmarker"}get baseOptions(){return yt(this.h,Jt,1)}set baseOptions(t){Be(this.h,0,1,t)}v(t){return"numPoses"in t&&ms(this.l,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Ue(this.l,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Ue(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Ue(this.B,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.j(t)}G(t,e,i){var n=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:i,t1(this),Xn(this,t,n),i1(this)}H(t,e,i,n){var s=typeof i!="function"?i:{};return this.u=typeof i=="function"?i:n,t1(this),_s(this,t,s,e),i1(this)}o(){var t=new Sn;Zt(t,"image_in"),Zt(t,"norm_rect"),Et(t,"normalized_landmarks"),Et(t,"world_landmarks"),Et(t,"segmentation_masks");var e=new Mn;xs(e,cb,this.h);var i=new ln;An(i,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Qt(i,"IMAGE:image_in"),Qt(i,"NORM_RECT:norm_rect"),ft(i,"NORM_LANDMARKS:normalized_landmarks"),ft(i,"WORLD_LANDMARKS:world_landmarks"),i.v(e),Pn(t,i),Zu(this,t),this.g.attachProtoVectorListener("normalized_landmarks",(n,s)=>{this.landmarks=[];for(let r of n)n=Wl(r),this.landmarks.push(Qu(n));Me(this,s)}),this.g.attachEmptyPacketListener("normalized_landmarks",n=>{this.landmarks=[],Me(this,n)}),this.g.attachProtoVectorListener("world_landmarks",(n,s)=>{this.worldLandmarks=[];for(let r of n)n=oo(r),this.worldLandmarks.push(wl(n));Me(this,s)}),this.g.attachEmptyPacketListener("world_landmarks",n=>{this.worldLandmarks=[],Me(this,n)}),this.outputSegmentationMasks&&(ft(i,"SEGMENTATION_MASK:segmentation_masks"),go(this,"segmentation_masks"),this.g.ha("segmentation_masks",(n,s)=>{this.segmentationMasks=n.map(r=>yo(this,r,!0,!this.u)),Me(this,s)}),this.g.attachEmptyPacketListener("segmentation_masks",n=>{this.segmentationMasks=[],Me(this,n)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ji.prototype.detectForVideo=Ji.prototype.H,Ji.prototype.detect=Ji.prototype.G,Ji.prototype.setOptions=Ji.prototype.v,Ji.createFromModelPath=function(t,e){return vt(Ji,t,{baseOptions:{modelAssetPath:e}})},Ji.createFromModelBuffer=function(t,e){return vt(Ji,t,{baseOptions:{modelAssetBuffer:e}})},Ji.createFromOptions=function(t,e){return vt(Ji,t,e)},Ji.POSE_CONNECTIONS=yy,Xt("module$exports$google3$third_party$mediapipe$tasks$web$vision$pose_landmarker$pose_landmarker.PoseLandmarker.POSE_CONNECTIONS",Ji.POSE_CONNECTIONS)});var dg=0,zd=1,fg=2;var sl=1,pg=2,Za=3,kn=0,xi=1,li=2,tt=0,bs=1,ki=2,Vd=3,Wd=4,mg=5;var ir=100,gg=101,vg=102,xg=103,yg=104,_g=200,Ag=201,Mg=202,Sg=203,Ec=204,Tc=205,Eg=206,Tg=207,wg=208,bg=209,Cg=210,Rg=211,Dg=212,Ig=213,Pg=214,Ba=0,nr=1,Hr=2,Cs=3,Rs=4,Fa=5,Na=6,sr=7,Xd=0,Lg=1,Ug=2,mn=0,Yd=1,qd=2,Kd=3,Qd=4,Zd=5,Jd=6,jd=7;var $d=300,dr=301,Yr=302,qc=303,Kc=304,rl=306,rr=1e3,Fn=1001,wc=1002,wt=1003,Bg=1004;var al=1005;var kt=1006,Qc=1007;var ns=1008;var st=1009,ef=1010,tf=1011,Ja=1012,Zc=1013,Gn=1014,yi=1015,sn=1016,Jc=1017,jc=1018,fr=1020,nf=35902,sf=35899,rf=1021,af=1022,Gi=1023,jn=1026,ss=1027,ol=1028,$c=1029,Ls=1030,eh=1031;var th=1033,ll=33776,cl=33777,hl=33778,ul=33779,ih=35840,nh=35841,sh=35842,rh=35843,ah=36196,oh=37492,lh=37496,ch=37488,hh=37489,dl=37490,uh=37491,dh=37808,fh=37809,ph=37810,mh=37811,gh=37812,vh=37813,xh=37814,yh=37815,_h=37816,Ah=37817,Mh=37818,Sh=37819,Eh=37820,Th=37821,wh=36492,bh=36494,Ch=36495,Rh=36283,Dh=36284,fl=36285,Ih=36286;var ko=2300,bc=2301,Sc=2302,Ld=2303,Ud=2400,Bd=2401,Fd=2402;var It=3200,pr=3201;var of=0,Fg=1,gn="",We="srgb",$n="srgb-linear",Go="linear",Tt="srgb";var kr=7680;var Nd=519,Ng=512,Og=513,kg=514,Ph=515,Gg=516,Hg=517,Lh=518,zg=519,Od=35044,mr=35048;var lf="300 es",Nn=2e3,Ho=2001;function Jy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function jy(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function zo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Vg(){let t=zo("canvas");return t.style.display="block",t}var km={},Oa=null;function cf(...t){let e="THREE."+t.shift();Oa?Oa("log",e,...t):console.log(e,...t)}function Wg(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let i=t[1];i&&i.isStackTrace?t[0]+=" "+i.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Oe(...t){t=Wg(t);let e="THREE."+t.shift();if(Oa)Oa("warn",e,...t);else{let i=t[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...t)}}function He(...t){t=Wg(t);let e="THREE."+t.shift();if(Oa)Oa("error",e,...t);else{let i=t[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...t)}}function Gr(...t){let e=t.join(" ");e in km||(km[e]=!0,Oe(...t))}function Xg(t,e,i){return new Promise(function(n,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,i);break;default:n()}}setTimeout(r,i)})}var Yg={[Ba]:nr,[Hr]:Na,[Rs]:sr,[Cs]:Fa,[nr]:Ba,[Na]:Hr,[sr]:Rs,[Fa]:Cs},Oi=class{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(i)===-1&&n[e].push(i)}hasEventListener(e,i){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(i)!==-1}removeEventListener(e,i){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(i);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let i=this._listeners;if(i===void 0)return;let n=i[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Fi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gm=1234567,No=Math.PI/180,ka=180/Math.PI;function ja(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fi[t&255]+Fi[t>>8&255]+Fi[t>>16&255]+Fi[t>>24&255]+"-"+Fi[e&255]+Fi[e>>8&255]+"-"+Fi[e>>16&15|64]+Fi[e>>24&255]+"-"+Fi[i&63|128]+Fi[i>>8&255]+"-"+Fi[i>>16&255]+Fi[i>>24&255]+Fi[n&255]+Fi[n>>8&255]+Fi[n>>16&255]+Fi[n>>24&255]).toLowerCase()}function lt(t,e,i){return Math.max(e,Math.min(i,t))}function hf(t,e){return(t%e+e)%e}function $y(t,e,i,n,s){return n+(t-e)*(s-n)/(i-e)}function e_(t,e,i){return t!==e?(i-t)/(e-t):0}function Oo(t,e,i){return(1-i)*t+i*e}function t_(t,e,i,n){return Oo(t,e,1-Math.exp(-i*n))}function i_(t,e=1){return e-Math.abs(hf(t,e*2)-e)}function n_(t,e,i){return t<=e?0:t>=i?1:(t=(t-e)/(i-e),t*t*(3-2*t))}function s_(t,e,i){return t<=e?0:t>=i?1:(t=(t-e)/(i-e),t*t*t*(t*(t*6-15)+10))}function r_(t,e){return t+Math.floor(Math.random()*(e-t+1))}function a_(t,e){return t+Math.random()*(e-t)}function o_(t){return t*(.5-Math.random())}function l_(t){t!==void 0&&(Gm=t);let e=Gm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function c_(t){return t*No}function h_(t){return t*ka}function u_(t){return(t&t-1)===0&&t!==0}function d_(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function f_(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function p_(t,e,i,n,s){let r=Math.cos,a=Math.sin,o=r(i/2),l=a(i/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":t.set(o*u,l*d,l*h,o*c);break;case"YZY":t.set(l*h,o*u,l*d,o*c);break;case"ZXZ":t.set(l*d,l*h,o*u,o*c);break;case"XZX":t.set(o*u,l*g,l*f,o*c);break;case"YXY":t.set(l*f,o*u,l*g,o*c);break;case"ZYZ":t.set(l*g,l*f,o*u,o*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function La(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Uh={DEG2RAD:No,RAD2DEG:ka,generateUUID:ja,clamp:lt,euclideanModulo:hf,mapLinear:$y,inverseLerp:e_,lerp:Oo,damp:t_,pingpong:i_,smoothstep:n_,smootherstep:s_,randInt:r_,randFloat:a_,randFloatSpread:o_,seededRandom:l_,degToRad:c_,radToDeg:h_,isPowerOfTwo:u_,ceilPowerOfTwo:d_,floorPowerOfTwo:f_,setQuaternionFromProperEuler:p_,normalize:Wi,denormalize:La},le=class t{static{t.prototype.isVector2=!0}constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let i=this.x,n=this.y,s=e.elements;return this.x=s[0]*i+s[3]*n+s[6],this.y=s[1]*i+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=lt(this.x,e.x,i.x),this.y=lt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=lt(this.x,e,i),this.y=lt(this.y,e,i),this}clampLength(e,i){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;let n=this.dot(e)/i;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let i=this.x-e.x,n=this.y-e.y;return i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,n){return this.x=e.x+(i.x-e.x)*n,this.y=e.y+(i.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){let n=Math.cos(i),s=Math.sin(i),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bn=class{constructor(e=0,i=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=n,this._w=s}static slerpFlat(e,i,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*y;m<0&&(h=-h,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),b=Math.sin(S);p=Math.sin(p*S)/b,o=Math.sin(o*S)/b,l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+y*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+y*o;let S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[i]=l,e[i+1]=c,e[i+2]=u,e[i+3]=d}static multiplyQuaternionsFlat(e,i,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[i]=o*g+u*d+l*f-c*h,e[i+1]=l*g+u*h+c*d-o*f,e[i+2]=c*g+u*f+o*h-l*d,e[i+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,n,s){return this._x=e,this._y=i,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){let n=i/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let i=e.elements,n=i[0],s=i[4],r=i[8],a=i[1],o=i[5],l=i[9],c=i[2],u=i[6],d=i[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let n=e.dot(i)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,i){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,i/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){let n=e._x,s=e._y,r=e._z,a=e._w,o=i._x,l=i._y,c=i._z,u=i._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,i){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-i;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,i=Math.sin(i*c)/u,this._x=this._x*l+n*i,this._y=this._y*l+s*i,this._z=this._z*l+r*i,this._w=this._w*l+a*i,this._onChangeCallback()}else this._x=this._x*l+n*i,this._y=this._y*l+s*i,this._z=this._z*l+r*i,this._w=this._w*l+a*i,this.normalize();return this}slerpQuaternions(e,i,n){return this.copy(e).slerp(i,n)}random(){let e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(i),r*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class t{static{t.prototype.isVector3=!0}constructor(e=0,i=0,n=0){this.x=e,this.y=i,this.z=n}set(e,i,n){return n===void 0&&(n=this.z),this.x=e,this.y=i,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Hm.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Hm.setFromAxisAngle(e,i))}applyMatrix3(e){let i=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*i+r[3]*n+r[6]*s,this.y=r[1]*i+r[4]*n+r[7]*s,this.z=r[2]*i+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let i=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*i+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*i+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*i+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*i+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let i=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*i-r*s),d=2*(r*n-a*i);return this.x=i+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let i=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*i+r[4]*n+r[8]*s,this.y=r[1]*i+r[5]*n+r[9]*s,this.z=r[2]*i+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=lt(this.x,e.x,i.x),this.y=lt(this.y,e.y,i.y),this.z=lt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=lt(this.x,e,i),this.y=lt(this.y,e,i),this.z=lt(this.z,e,i),this}clampLength(e,i){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,n){return this.x=e.x+(i.x-e.x)*n,this.y=e.y+(i.y-e.y)*n,this.z=e.z+(i.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){let n=e.x,s=e.y,r=e.z,a=i.x,o=i.y,l=i.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let i=e.lengthSq();if(i===0)return this.set(0,0,0);let n=e.dot(this)/i;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ud.copy(this).projectOnVector(e),this.sub(ud)}reflect(e){return this.sub(ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;let n=this.dot(e)/i;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let i=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return i*i+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,n){let s=Math.sin(i)*e;return this.x=s*Math.sin(n),this.y=Math.cos(i)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,n){return this.x=e*Math.sin(i),this.y=n,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){let i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){let i=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=n,this.z=s,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,i=Math.random()*2-1,n=Math.sqrt(1-i*i);return this.x=n*Math.cos(e),this.y=i,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ud=new I,Hm=new bn,Ye=class t{static{t.prototype.isMatrix3=!0}constructor(e,i,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,n,s,r,a,o,l,c)}set(e,i,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=i,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let i=this.elements,n=e.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],this}extractBasis(e,i,n){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){let n=e.elements,s=i.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],S=s[1],b=s[4],A=s[7],C=s[2],M=s[5],T=s[8];return r[0]=a*y+o*S+l*C,r[3]=a*m+o*b+l*M,r[6]=a*p+o*A+l*T,r[1]=c*y+u*S+d*C,r[4]=c*m+u*b+d*M,r[7]=c*p+u*A+d*T,r[2]=h*y+f*S+g*C,r[5]=h*m+f*b+g*M,r[8]=h*p+f*A+g*T,this}multiplyScalar(e){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){let e=this.elements,i=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return i*a*u-i*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,i=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=i*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*c-u*n)*y,e[2]=(o*n-s*a)*y,e[3]=h*y,e[4]=(u*i-s*l)*y,e[5]=(s*r-o*i)*y,e[6]=f*y,e[7]=(n*l-c*i)*y,e[8]=(a*i-n*r)*y,this}transpose(){let e,i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+i,0,0,1),this}scale(e,i){return Gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dd.makeScale(e,i)),this}rotate(e){return Gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dd.makeRotation(-e)),this}translate(e,i){return Gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){let i=Math.cos(e),n=Math.sin(e);return this.set(i,-n,0,n,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){let i=this.elements,n=e.elements;for(let s=0;s<9;s++)if(i[s]!==n[s])return!1;return!0}fromArray(e,i=0){for(let n=0;n<9;n++)this.elements[n]=e[n+i];return this}toArray(e=[],i=0){let n=this.elements;return e[i]=n[0],e[i+1]=n[1],e[i+2]=n[2],e[i+3]=n[3],e[i+4]=n[4],e[i+5]=n[5],e[i+6]=n[6],e[i+7]=n[7],e[i+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},dd=new Ye,zm=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vm=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m_(){let t={enabled:!0,workingColorSpace:$n,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Tt&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Tt&&(s.r=Ua(s.r),s.g=Ua(s.g),s.b=Ua(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gn?Go:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],n=[.3127,.329];return t.define({[$n]:{primaries:e,whitePoint:n,transfer:Go,toXYZ:zm,fromXYZ:Vm,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:zm,fromXYZ:Vm,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),t}var ot=m_();function ws(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ua(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var _a,Cc=class{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_a===void 0&&(_a=zo("canvas")),_a.width=e.width,_a.height=e.height;let s=_a.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=_a}return n.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let i=zo("canvas");i.width=e.width,i.height=e.height;let n=i.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ws(r[a]/255)*255;return n.putImageData(s,0,0),i}else if(e.data){let i=e.data.slice(0);for(let n=0;n<i.length;n++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[n]=Math.floor(ws(i[n]/255)*255):i[n]=ws(i[n]);return{data:i,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},g_=0,Ga=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(fd(s[a].image)):r.push(fd(s[a]))}else r=fd(s);n.url=r}return i||(e.images[this.uuid]=n),n}};function fd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Cc.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var v_=0,pd=new I,vi=class t extends Oi{constructor(e=t.DEFAULT_IMAGE,i=t.DEFAULT_MAPPING,n=Fn,s=Fn,r=kt,a=ns,o=Gi,l=st,c=t.DEFAULT_ANISOTROPY,u=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=ja(),this.name="",this.source=new Ga(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pd).x}get height(){return this.source.getSize(pd).y}get depth(){return this.source.getSize(pd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let i in e){let n=e[i];if(n===void 0){Oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let s=this[i];if(s===void 0){Oe(`Texture.setValues(): property '${i}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[i]=n}}toJSON(e){let i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rr:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case wc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rr:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case wc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vi.DEFAULT_IMAGE=null;vi.DEFAULT_MAPPING=$d;vi.DEFAULT_ANISOTROPY=1;var ut=class t{static{t.prototype.isVector4=!0}constructor(e=0,i=0,n=0,s=1){this.x=e,this.y=i,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,n,s){return this.x=e,this.y=i,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let i=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*i+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*i+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*i+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*i+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,n,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let b=(c+1)/2,A=(f+1)/2,C=(p+1)/2,M=(u+h)/4,T=(d+y)/4,x=(g+m)/4;return b>A&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=M/n,r=T/n):A>C?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=M/s,r=x/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=x/r),this.set(n,s,r,i),this}let S=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-y)/S,this.z=(h-u)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=lt(this.x,e.x,i.x),this.y=lt(this.y,e.y,i.y),this.z=lt(this.z,e.z,i.z),this.w=lt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=lt(this.x,e,i),this.y=lt(this.y,e,i),this.z=lt(this.z,e,i),this.w=lt(this.w,e,i),this}clampLength(e,i){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,n){return this.x=e.x+(i.x-e.x)*n,this.y=e.y+(i.y-e.y)*n,this.z=e.z+(i.z-e.z)*n,this.w=e.w+(i.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rc=class extends Oi{constructor(e=1,i=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=n.depth,this.scissor=new ut(0,0,e,i),this.scissorTest=!1,this.viewport=new ut(0,0,e,i),this.textures=[];let s={width:e,height:i,depth:n.depth},r=new vi(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let i={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,n=1){if(this.width!==e||this.height!==i||this.depth!==n){this.width=e,this.height=i,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=i,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;let s=Object.assign({},e.textures[i].image);this.textures[i].source=new Ga(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ze=class extends Rc{constructor(e=1,i=1,n={}){super(e,i,n),this.isWebGLRenderTarget=!0}},Vo=class extends vi{constructor(e=null,i=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ha=class extends vi{constructor(e=null,i=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mt=class t{static{t.prototype.isMatrix4=!0}constructor(e,i,n,s,r,a,o,l,c,u,d,h,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,n,s,r,a,o,l,c,u,d,h,f,g,y,m)}set(e,i,n,s,r,a,o,l,c,u,d,h,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=i,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let i=this.elements,n=e.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],i[9]=n[9],i[10]=n[10],i[11]=n[11],i[12]=n[12],i[13]=n[13],i[14]=n[14],i[15]=n[15],this}copyPosition(e){let i=this.elements,n=e.elements;return i[12]=n[12],i[13]=n[13],i[14]=n[14],this}setFromMatrix3(e){let i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,n){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,i,n){return this.set(e.x,i.x,n.x,0,e.y,i.y,n.y,0,e.z,i.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let i=this.elements,n=e.elements,s=1/Aa.setFromMatrixColumn(e,0).length(),r=1/Aa.setFromMatrixColumn(e,1).length(),a=1/Aa.setFromMatrixColumn(e,2).length();return i[0]=n[0]*s,i[1]=n[1]*s,i[2]=n[2]*s,i[3]=0,i[4]=n[4]*r,i[5]=n[5]*r,i[6]=n[6]*r,i[7]=0,i[8]=n[8]*a,i[9]=n[9]*a,i[10]=n[10]*a,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){let i=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,g=o*u,y=o*d;i[0]=l*u,i[4]=-l*d,i[8]=c,i[1]=f+g*c,i[5]=h-y*c,i[9]=-o*l,i[2]=y-h*c,i[6]=g+f*c,i[10]=a*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,y=c*d;i[0]=h+y*o,i[4]=g*o-f,i[8]=a*c,i[1]=a*d,i[5]=a*u,i[9]=-o,i[2]=f*o-g,i[6]=y+h*o,i[10]=a*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,y=c*d;i[0]=h-y*o,i[4]=-a*d,i[8]=g+f*o,i[1]=f+g*o,i[5]=a*u,i[9]=y-h*o,i[2]=-a*c,i[6]=o,i[10]=a*l}else if(e.order==="ZYX"){let h=a*u,f=a*d,g=o*u,y=o*d;i[0]=l*u,i[4]=g*c-f,i[8]=h*c+y,i[1]=l*d,i[5]=y*c+h,i[9]=f*c-g,i[2]=-c,i[6]=o*l,i[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,g=o*l,y=o*c;i[0]=l*u,i[4]=y-h*d,i[8]=g*d+f,i[1]=d,i[5]=a*u,i[9]=-o*u,i[2]=-c*u,i[6]=f*d+g,i[10]=h-y*d}else if(e.order==="XZY"){let h=a*l,f=a*c,g=o*l,y=o*c;i[0]=l*u,i[4]=-d,i[8]=c*u,i[1]=h*d+y,i[5]=a*u,i[9]=f*d-g,i[2]=g*d-f,i[6]=o*u,i[10]=y*d+h}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(x_,e,y_)}lookAt(e,i,n){let s=this.elements;return un.subVectors(e,i),un.lengthSq()===0&&(un.z=1),un.normalize(),Qs.crossVectors(n,un),Qs.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Qs.crossVectors(n,un)),Qs.normalize(),jl.crossVectors(un,Qs),s[0]=Qs.x,s[4]=jl.x,s[8]=un.x,s[1]=Qs.y,s[5]=jl.y,s[9]=un.y,s[2]=Qs.z,s[6]=jl.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){let n=e.elements,s=i.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],S=n[3],b=n[7],A=n[11],C=n[15],M=s[0],T=s[4],x=s[8],E=s[12],L=s[1],P=s[5],R=s[9],D=s[13],B=s[2],U=s[6],G=s[10],k=s[14],Y=s[3],j=s[7],te=s[11],ne=s[15];return r[0]=a*M+o*L+l*B+c*Y,r[4]=a*T+o*P+l*U+c*j,r[8]=a*x+o*R+l*G+c*te,r[12]=a*E+o*D+l*k+c*ne,r[1]=u*M+d*L+h*B+f*Y,r[5]=u*T+d*P+h*U+f*j,r[9]=u*x+d*R+h*G+f*te,r[13]=u*E+d*D+h*k+f*ne,r[2]=g*M+y*L+m*B+p*Y,r[6]=g*T+y*P+m*U+p*j,r[10]=g*x+y*R+m*G+p*te,r[14]=g*E+y*D+m*k+p*ne,r[3]=S*M+b*L+A*B+C*Y,r[7]=S*T+b*P+A*U+C*j,r[11]=S*x+b*R+A*G+C*te,r[15]=S*E+b*D+A*k+C*ne,this}multiplyScalar(e){let i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){let e=this.elements,i=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],S=l*f-c*h,b=o*f-c*d,A=o*h-l*d,C=a*f-c*u,M=a*h-l*u,T=a*d-o*u;return i*(y*S-m*b+p*A)-n*(g*S-m*C+p*M)+s*(g*b-y*C+p*T)-r*(g*A-y*M+m*T)}determinantAffine(){let e=this.elements,i=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return i*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=i,s[14]=n),this}invert(){let e=this.elements,i=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],S=i*o-n*a,b=i*l-s*a,A=i*c-r*a,C=n*l-s*o,M=n*c-r*o,T=s*c-r*l,x=u*y-d*g,E=u*m-h*g,L=u*p-f*g,P=d*m-h*y,R=d*p-f*y,D=h*p-f*m,B=S*D-b*R+A*P+C*L-M*E+T*x;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/B;return e[0]=(o*D-l*R+c*P)*U,e[1]=(s*R-n*D-r*P)*U,e[2]=(y*T-m*M+p*C)*U,e[3]=(h*M-d*T-f*C)*U,e[4]=(l*L-a*D-c*E)*U,e[5]=(i*D-s*L+r*E)*U,e[6]=(m*A-g*T-p*b)*U,e[7]=(u*T-h*A+f*b)*U,e[8]=(a*R-o*L+c*x)*U,e[9]=(n*L-i*R-r*x)*U,e[10]=(g*M-y*A+p*S)*U,e[11]=(d*A-u*M-f*S)*U,e[12]=(o*E-a*P-l*x)*U,e[13]=(i*P-n*E+s*x)*U,e[14]=(y*b-g*C-m*S)*U,e[15]=(u*C-d*b+h*S)*U,this}scale(e){let i=this.elements,n=e.x,s=e.y,r=e.z;return i[0]*=n,i[4]*=s,i[8]*=r,i[1]*=n,i[5]*=s,i[9]*=r,i[2]*=n,i[6]*=s,i[10]*=r,i[3]*=n,i[7]*=s,i[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,n,s))}makeTranslation(e,i,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,n,0,0,0,1),this}makeRotationX(e){let i=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,i,-n,0,0,n,i,0,0,0,0,1),this}makeRotationY(e){let i=Math.cos(e),n=Math.sin(e);return this.set(i,0,n,0,0,1,0,0,-n,0,i,0,0,0,0,1),this}makeRotationZ(e){let i=Math.cos(e),n=Math.sin(e);return this.set(i,-n,0,0,n,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){let n=Math.cos(i),s=Math.sin(i),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,i,n){return this.set(e,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,i,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,i,s,1,0,0,0,0,1),this}compose(e,i,n){let s=this.elements,r=i._x,a=i._y,o=i._z,l=i._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,y=a*u,m=a*d,p=o*d,S=l*c,b=l*u,A=l*d,C=n.x,M=n.y,T=n.z;return s[0]=(1-(y+p))*C,s[1]=(f+A)*C,s[2]=(g-b)*C,s[3]=0,s[4]=(f-A)*M,s[5]=(1-(h+p))*M,s[6]=(m+S)*M,s[7]=0,s[8]=(g+b)*T,s[9]=(m-S)*T,s[10]=(1-(h+y))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,i,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),i.identity(),this;let a=Aa.set(s[0],s[1],s[2]).length(),o=Aa.set(s[4],s[5],s[6]).length(),l=Aa.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ln.copy(this);let c=1/a,u=1/o,d=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,i.setFromRotationMatrix(Ln),n.x=a,n.y=o,n.z=l,this}makePerspective(e,i,n,s,r,a,o=Nn,l=!1){let c=this.elements,u=2*r/(i-e),d=2*r/(n-s),h=(i+e)/(i-e),f=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Nn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ho)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,i,n,s,r,a,o=Nn,l=!1){let c=this.elements,u=2/(i-e),d=2/(n-s),h=-(i+e)/(i-e),f=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Nn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ho)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let i=this.elements,n=e.elements;for(let s=0;s<16;s++)if(i[s]!==n[s])return!1;return!0}fromArray(e,i=0){for(let n=0;n<16;n++)this.elements[n]=e[n+i];return this}toArray(e=[],i=0){let n=this.elements;return e[i]=n[0],e[i+1]=n[1],e[i+2]=n[2],e[i+3]=n[3],e[i+4]=n[4],e[i+5]=n[5],e[i+6]=n[6],e[i+7]=n[7],e[i+8]=n[8],e[i+9]=n[9],e[i+10]=n[10],e[i+11]=n[11],e[i+12]=n[12],e[i+13]=n[13],e[i+14]=n[14],e[i+15]=n[15],e}},Aa=new I,Ln=new Mt,x_=new I(0,0,0),y_=new I(1,1,1),Qs=new I,jl=new I,un=new I,Wm=new Mt,Xm=new bn,ar=class t{constructor(e=0,i=0,n=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,n,s=this._order){return this._x=e,this._y=i,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(i){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,n){return Wm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wm,i,n)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Xm.setFromEuler(this),this.setFromQuaternion(Xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ar.DEFAULT_ORDER="XYZ";var Wo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},__=0,Ym=new I,Ma=new bn,As=new Mt,$l=new I,Do=new I,A_=new I,M_=new bn,qm=new I(1,0,0),Km=new I(0,1,0),Qm=new I(0,0,1),Zm={type:"added"},S_={type:"removed"},Sa={type:"childadded",child:null},md={type:"childremoved",child:null},Si=class t extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new I,i=new ar,n=new bn,s=new I(1,1,1);function r(){n.setFromEuler(i,!1)}function a(){i.setFromQuaternion(n,void 0,!1)}i._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ye}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ma.setFromAxisAngle(e,i),this.quaternion.multiply(Ma),this}rotateOnWorldAxis(e,i){return Ma.setFromAxisAngle(e,i),this.quaternion.premultiply(Ma),this}rotateX(e){return this.rotateOnAxis(qm,e)}rotateY(e){return this.rotateOnAxis(Km,e)}rotateZ(e){return this.rotateOnAxis(Qm,e)}translateOnAxis(e,i){return Ym.copy(e).applyQuaternion(this.quaternion),this.position.add(Ym.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(qm,e)}translateY(e){return this.translateOnAxis(Km,e)}translateZ(e){return this.translateOnAxis(Qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(As.copy(this.matrixWorld).invert())}lookAt(e,i,n){e.isVector3?$l.copy(e):$l.set(e,i,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?As.lookAt(Do,$l,this.up):As.lookAt($l,Do,this.up),this.quaternion.setFromRotationMatrix(As),s&&(As.extractRotation(s.matrixWorld),Ma.setFromRotationMatrix(As),this.quaternion.premultiply(Ma.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zm),Sa.child=e,this.dispatchEvent(Sa),Sa.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(S_),md.child=e,this.dispatchEvent(md),md.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),As.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),As.multiply(e.parent.matrixWorld)),e.applyMatrix4(As),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zm),Sa.child=e,this.dispatchEvent(Sa),Sa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,i);if(a!==void 0)return a}}getObjectsByProperty(e,i,n=[]){this[e]===i&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,i,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,A_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,M_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);let i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverseVisible(e)}traverseAncestors(e){let i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let i=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=i-r[0]*i-r[4]*n-r[8]*s,r[13]+=n-r[1]*i-r[5]*n-r[9]*s,r[14]+=s-r[2]*i-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].updateMatrixWorld(e)}updateWorldMatrix(e,i,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),i===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let i=e===void 0||typeof e=="string",n={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(i){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Si.DEFAULT_UP=new I(0,1,0);Si.DEFAULT_MATRIX_AUTO_UPDATE=!0;Si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=class extends Si{constructor(){super(),this.isGroup=!0,this.type="Group"}},E_={type:"move"},za=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let i=this._hand;if(i)for(let n of e.hand.values())this._getHandJoint(i,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=i.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=i.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=i.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(E_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){let n=new On;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[i.jointName]=n,e.add(n)}return e.joints[i.jointName]}},qg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zs={h:0,s:0,l:0},ec={h:0,s:0,l:0};function gd(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*6*(2/3-i):t}var Re=class{constructor(e,i,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,n)}set(e,i,n){if(i===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,i,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=We){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,i),this}setRGB(e,i,n,s=ot.workingColorSpace){return this.r=e,this.g=i,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,i,n,s=ot.workingColorSpace){if(e=hf(e,1),i=lt(i,0,1),n=lt(n,0,1),i===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+i):n+i-n*i,a=2*n-r;this.r=gd(a,r,e+1/3),this.g=gd(a,r,e),this.b=gd(a,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,i=We){function n(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,i);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,i);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,i);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,i);if(a===6)return this.setHex(parseInt(r,16),i);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=We){let n=qg[e.toLowerCase()];return n!==void 0?this.setHex(n,i):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}copyLinearToSRGB(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=We){return ot.workingToColorSpace(Ni.copy(this),e),Math.round(lt(Ni.r*255,0,255))*65536+Math.round(lt(Ni.g*255,0,255))*256+Math.round(lt(Ni.b*255,0,255))}getHexString(e=We){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=ot.workingColorSpace){ot.workingToColorSpace(Ni.copy(this),i);let n=Ni.r,s=Ni.g,r=Ni.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,i=ot.workingColorSpace){return ot.workingToColorSpace(Ni.copy(this),i),e.r=Ni.r,e.g=Ni.g,e.b=Ni.b,e}getStyle(e=We){ot.workingToColorSpace(Ni.copy(this),e);let i=Ni.r,n=Ni.g,s=Ni.b;return e!==We?`color(${e} ${i.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,i,n){return this.getHSL(Zs),this.setHSL(Zs.h+e,Zs.s+i,Zs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,n){return this.r=e.r+(i.r-e.r)*n,this.g=e.g+(i.g-e.g)*n,this.b=e.b+(i.b-e.b)*n,this}lerpHSL(e,i){this.getHSL(Zs),e.getHSL(ec);let n=Oo(Zs.h,ec.h,i),s=Oo(Zs.s,ec.s,i),r=Oo(Zs.l,ec.l,i);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let i=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*i+r[3]*n+r[6]*s,this.g=r[1]*i+r[4]*n+r[7]*s,this.b=r[2]*i+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ni=new Re;Re.NAMES=qg;var Xo=class t{constructor(e,i=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=i,this.far=n}clone(){return new t(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ds=class extends Si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}},Un=new I,Ms=new I,vd=new I,Ss=new I,Ea=new I,Ta=new I,Jm=new I,xd=new I,yd=new I,_d=new I,Ad=new ut,Md=new ut,Sd=new ut,tr=class t{constructor(e=new I,i=new I,n=new I){this.a=e,this.b=i,this.c=n}static getNormal(e,i,n,s){s.subVectors(n,i),Un.subVectors(e,i),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,i,n,s,r){Un.subVectors(s,i),Ms.subVectors(n,i),vd.subVectors(e,i);let a=Un.dot(Un),o=Un.dot(Ms),l=Un.dot(vd),c=Ms.dot(Ms),u=Ms.dot(vd),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,i,n,s){return this.getBarycoord(e,i,n,s,Ss)===null?!1:Ss.x>=0&&Ss.y>=0&&Ss.x+Ss.y<=1}static getInterpolation(e,i,n,s,r,a,o,l){return this.getBarycoord(e,i,n,s,Ss)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ss.x),l.addScaledVector(a,Ss.y),l.addScaledVector(o,Ss.z),l)}static getInterpolatedAttribute(e,i,n,s,r,a){return Ad.setScalar(0),Md.setScalar(0),Sd.setScalar(0),Ad.fromBufferAttribute(e,i),Md.fromBufferAttribute(e,n),Sd.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ad,r.x),a.addScaledVector(Md,r.y),a.addScaledVector(Sd,r.z),a}static isFrontFacing(e,i,n,s){return Un.subVectors(n,i),Ms.subVectors(e,i),Un.cross(Ms).dot(s)<0}set(e,i,n){return this.a.copy(e),this.b.copy(i),this.c.copy(n),this}setFromPointsAndIndices(e,i,n,s){return this.a.copy(e[i]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,i,n,s){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),Ms.subVectors(this.a,this.b),Un.cross(Ms).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return t.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,n,s,r){return t.getInterpolation(e,this.a,this.b,this.c,i,n,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){let n=this.a,s=this.b,r=this.c,a,o;Ea.subVectors(s,n),Ta.subVectors(r,n),xd.subVectors(e,n);let l=Ea.dot(xd),c=Ta.dot(xd);if(l<=0&&c<=0)return i.copy(n);yd.subVectors(e,s);let u=Ea.dot(yd),d=Ta.dot(yd);if(u>=0&&d<=u)return i.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),i.copy(n).addScaledVector(Ea,a);_d.subVectors(e,r);let f=Ea.dot(_d),g=Ta.dot(_d);if(g>=0&&f<=g)return i.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),i.copy(n).addScaledVector(Ta,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Jm.subVectors(r,s),o=(d-u)/(d-u+(f-g)),i.copy(s).addScaledVector(Jm,o);let p=1/(m+y+h);return a=y*p,o=h*p,i.copy(n).addScaledVector(Ea,a).addScaledVector(Ta,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},es=class{constructor(e=new I(1/0,1/0,1/0),i=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,n=e.length;i<n;i+=3)this.expandByPoint(Bn.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,n=e.count;i<n;i++)this.expandByPoint(Bn.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,n=e.length;i<n;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){let n=Bn.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(i===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tc.copy(n.boundingBox)),tc.applyMatrix4(e.matrixWorld),this.union(tc)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,n;return e.normal.x>0?(i=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),i<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),ic.subVectors(this.max,Io),wa.subVectors(e.a,Io),ba.subVectors(e.b,Io),Ca.subVectors(e.c,Io),Js.subVectors(ba,wa),js.subVectors(Ca,ba),Br.subVectors(wa,Ca);let i=[0,-Js.z,Js.y,0,-js.z,js.y,0,-Br.z,Br.y,Js.z,0,-Js.x,js.z,0,-js.x,Br.z,0,-Br.x,-Js.y,Js.x,0,-js.y,js.x,0,-Br.y,Br.x,0];return!Ed(i,wa,ba,Ca,ic)||(i=[1,0,0,0,1,0,0,0,1],!Ed(i,wa,ba,Ca,ic))?!1:(nc.crossVectors(Js,js),i=[nc.x,nc.y,nc.z],Ed(i,wa,ba,Ca,ic))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Es),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Es=[new I,new I,new I,new I,new I,new I,new I,new I],Bn=new I,tc=new es,wa=new I,ba=new I,Ca=new I,Js=new I,js=new I,Br=new I,Io=new I,ic=new I,nc=new I,Fr=new I;function Ed(t,e,i,n,s){for(let r=0,a=t.length-3;r<=a;r+=3){Fr.fromArray(t,r);let o=s.x*Math.abs(Fr.x)+s.y*Math.abs(Fr.y)+s.z*Math.abs(Fr.z),l=e.dot(Fr),c=i.dot(Fr),u=n.dot(Fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var mi=new I,sc=new le,T_=0,St=class extends Oi{constructor(e,i,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:T_++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=n,this.usage=Od,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,n){e*=this.itemSize,n*=i.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=i.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,n=this.count;i<n;i++)sc.fromBufferAttribute(this,i),sc.applyMatrix3(e),this.setXY(i,sc.x,sc.y);else if(this.itemSize===3)for(let i=0,n=this.count;i<n;i++)mi.fromBufferAttribute(this,i),mi.applyMatrix3(e),this.setXYZ(i,mi.x,mi.y,mi.z);return this}applyMatrix4(e){for(let i=0,n=this.count;i<n;i++)mi.fromBufferAttribute(this,i),mi.applyMatrix4(e),this.setXYZ(i,mi.x,mi.y,mi.z);return this}applyNormalMatrix(e){for(let i=0,n=this.count;i<n;i++)mi.fromBufferAttribute(this,i),mi.applyNormalMatrix(e),this.setXYZ(i,mi.x,mi.y,mi.z);return this}transformDirection(e){for(let i=0,n=this.count;i<n;i++)mi.fromBufferAttribute(this,i),mi.transformDirection(e),this.setXYZ(i,mi.x,mi.y,mi.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let n=this.array[e*this.itemSize+i];return this.normalized&&(n=La(n,this.array)),n}setComponent(e,i,n){return this.normalized&&(n=Wi(n,this.array)),this.array[e*this.itemSize+i]=n,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=La(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wi(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=La(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wi(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=La(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wi(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=La(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wi(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,n){return e*=this.itemSize,this.normalized&&(i=Wi(i,this.array),n=Wi(n,this.array)),this.array[e+0]=i,this.array[e+1]=n,this}setXYZ(e,i,n,s){return e*=this.itemSize,this.normalized&&(i=Wi(i,this.array),n=Wi(n,this.array),s=Wi(s,this.array)),this.array[e+0]=i,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,i,n,s,r){return e*=this.itemSize,this.normalized&&(i=Wi(i,this.array),n=Wi(n,this.array),s=Wi(s,this.array),r=Wi(r,this.array)),this.array[e+0]=i,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Od&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Yo=class extends St{constructor(e,i,n){super(new Uint16Array(e),i,n)}};var qo=class extends St{constructor(e,i,n){super(new Uint32Array(e),i,n)}};var gi=class extends St{constructor(e,i,n){super(new Float32Array(e),i,n)}},w_=new es,Po=new I,Td=new I,ts=class{constructor(e=new I,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){let n=this.center;i!==void 0?n.copy(i):w_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){let n=this.center.distanceToSquared(e);return i.copy(e),n>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);let i=Po.lengthSq();if(i>this.radius*this.radius){let n=Math.sqrt(i),s=(n-this.radius)*.5;this.center.addScaledVector(Po,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Td)),this.expandByPoint(Po.copy(e.center).sub(Td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},b_=0,wn=new Mt,wd=new Si,Ra=new I,dn=new es,Lo=new es,Ri=new I,Ut=class t extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jy(e)?qo:Yo)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,n=0){this.groups.push({start:e,count:i,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,i,n){return wn.makeTranslation(e,i,n),this.applyMatrix4(wn),this}scale(e,i,n){return wn.makeScale(e,i,n),this.applyMatrix4(wn),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ra).negate(),this.translate(Ra.x,Ra.y,Ra.z),this}setFromPoints(e){let i=this.getAttribute("position");if(i===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gi(n,3))}else{let n=Math.min(e.length,i.count);for(let s=0;s<n;s++){let r=e[s];i.setXYZ(s,r.x,r.y,r.z||0)}e.length>i.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);let e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let n=0,s=i.length;n<s;n++){let r=i[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ri.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ri),Ri.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ri)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);let e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),i)for(let r=0,a=i.length;r<a;r++){let o=i[r];Lo.setFromBufferAttribute(o),this.morphTargetsRelative?(Ri.addVectors(dn.min,Lo.min),dn.expandByPoint(Ri),Ri.addVectors(dn.max,Lo.max),dn.expandByPoint(Ri)):(dn.expandByPoint(Lo.min),dn.expandByPoint(Lo.max))}dn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ri.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ri));if(i)for(let r=0,a=i.length;r<a;r++){let o=i[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ri.fromBufferAttribute(o,c),l&&(Ra.fromBufferAttribute(e,c),Ri.add(Ra)),s=Math.max(s,n.distanceToSquared(Ri))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=i.position,s=i.normal,r=i.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new St(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new I,l[x]=new I;let c=new I,u=new I,d=new I,h=new le,f=new le,g=new le,y=new I,m=new I;function p(x,E,L){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,L),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,L),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[x].add(y),o[E].add(y),o[L].add(y),l[x].add(m),l[E].add(m),l[L].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,E=S.length;x<E;++x){let L=S[x],P=L.start,R=L.count;for(let D=P,B=P+R;D<B;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let b=new I,A=new I,C=new I,M=new I;function T(x){C.fromBufferAttribute(s,x),M.copy(C);let E=o[x];b.copy(E),b.sub(C.multiplyScalar(C.dot(E))).normalize(),A.crossVectors(M,E);let P=A.dot(l[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,P)}for(let x=0,E=S.length;x<E;++x){let L=S[x],P=L.start,R=L.count;for(let D=P,B=P+R;D<B;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,i=this.getAttribute("position");if(i!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==i.count)n=new St(new Float32Array(i.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(i,g),r.fromBufferAttribute(i,y),a.fromBufferAttribute(i,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=i.count;h<f;h+=3)s.fromBufferAttribute(i,h+0),r.fromBufferAttribute(i,h+1),a.fromBufferAttribute(i,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let i=0,n=e.count;i<n;i++)Ri.fromBufferAttribute(e,i),Ri.normalize(),e.setXYZ(i,Ri.x,Ri.y,Ri.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new St(h,u,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new t,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);i.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(i))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(i));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var C_=0,fn=class extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=bs,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ec,this.blendDst=Tc,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let i in e){let n=e[i];if(n===void 0){Oe(`Material: parameter '${i}' has value of undefined.`);continue}let s=this[i];if(s===void 0){Oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[i]=n}}toJSON(e){let i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ec&&(n.blendSrc=this.blendSrc),this.blendDst!==Tc&&(n.blendDst=this.blendDst),this.blendEquation!==ir&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(i){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let i=e.clippingPlanes,n=null;if(i!==null){let s=i.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=i[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ts=new I,bd=new I,rc=new I,$s=new I,Cd=new I,ac=new I,Rd=new I,Va=class{constructor(e=new I,i=new I(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ts)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);let n=i.dot(this.direction);return n<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let i=Ts.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ts.copy(this.origin).addScaledVector(this.direction,i),Ts.distanceToSquared(e))}distanceSqToSegment(e,i,n,s){bd.copy(e).add(i).multiplyScalar(.5),rc.copy(i).sub(e).normalize(),$s.copy(this.origin).sub(bd);let r=e.distanceTo(i)*.5,a=-this.direction.dot(rc),o=$s.dot(this.direction),l=-$s.dot(rc),c=$s.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(bd).addScaledVector(rc,h),f}intersectSphere(e,i){Ts.subVectors(e.center,this.origin);let n=Ts.dot(this.direction),s=Ts.dot(Ts)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,i):this.at(o,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/i;return n>=0?n:null}intersectPlane(e,i){let n=this.distanceToPlane(e);return n===null?null:this.at(n,i)}intersectsPlane(e){let i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,i)}intersectsBox(e){return this.intersectBox(e,Ts)!==null}intersectTriangle(e,i,n,s,r){Cd.subVectors(i,e),ac.subVectors(n,e),Rd.crossVectors(Cd,ac);let a=this.direction.dot(Rd),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$s.subVectors(this.origin,e);let l=o*this.direction.dot(ac.crossVectors($s,ac));if(l<0)return null;let c=o*this.direction.dot(Cd.cross($s));if(c<0||l+c>a)return null;let u=-o*$s.dot(Rd);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},is=class extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=Xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jm=new Mt,Nr=new Va,oc=new ts,$m=new I,lc=new I,cc=new I,hc=new I,Dd=new I,uc=new I,eg=new I,dc=new I,ii=class extends Si{constructor(e=new Ut,i=new is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let i=this.geometry.morphAttributes,n=Object.keys(i);if(n.length>0){let s=i[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,i){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;i.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){uc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Dd.fromBufferAttribute(d,e),a?uc.addScaledVector(Dd,u):uc.addScaledVector(Dd.sub(i),u))}i.add(uc)}return i}raycast(e,i){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oc.copy(n.boundingSphere),oc.applyMatrix4(r),Nr.copy(e.ray).recast(e.near),!(oc.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(oc,$m)===null||Nr.origin.distanceToSquared($m)>(e.far-e.near)**2))&&(jm.copy(r).invert(),Nr.copy(e.ray).applyMatrix4(jm),!(n.boundingBox!==null&&Nr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,i,Nr)))}_computeIntersections(e,i,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let A=S,C=b;A<C;A+=3){let M=o.getX(A),T=o.getX(A+1),x=o.getX(A+2);s=fc(this,p,e,n,c,u,d,M,T,x),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,i.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=o.getX(m),b=o.getX(m+1),A=o.getX(m+2);s=fc(this,a,e,n,c,u,d,S,b,A),s&&(s.faceIndex=Math.floor(m/3),i.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let A=S,C=b;A<C;A+=3){let M=A,T=A+1,x=A+2;s=fc(this,p,e,n,c,u,d,M,T,x),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,i.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=m,b=m+1,A=m+2;s=fc(this,a,e,n,c,u,d,S,b,A),s&&(s.faceIndex=Math.floor(m/3),i.push(s))}}}};function R_(t,e,i,n,s,r,a,o){let l;if(e.side===xi?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===kn,o),l===null)return null;dc.copy(o),dc.applyMatrix4(t.matrixWorld);let c=i.ray.origin.distanceTo(dc);return c<i.near||c>i.far?null:{distance:c,point:dc.clone(),object:t}}function fc(t,e,i,n,s,r,a,o,l,c){t.getVertexPosition(o,lc),t.getVertexPosition(l,cc),t.getVertexPosition(c,hc);let u=R_(t,e,i,n,lc,cc,hc,eg);if(u){let d=new I;tr.getBarycoord(eg,lc,cc,hc,d),s&&(u.uv=tr.getInterpolatedAttribute(s,o,l,c,d,new le)),r&&(u.uv1=tr.getInterpolatedAttribute(r,o,l,c,d,new le)),a&&(u.normal=tr.getInterpolatedAttribute(a,o,l,c,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new I,materialIndex:0};tr.getNormal(lc,cc,hc,h.normal),u.face=h,u.barycoord=d}return u}var zr=class extends vi{constructor(e=null,i=1,n=1,s,r,a,o,l,c=wt,u=wt,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:i,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ko=class extends St{constructor(e,i,n,s=1){super(e,i,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Da=new Mt,tg=new Mt,pc=[],ig=new es,D_=new Mt,Uo=new ii,Bo=new ts,Wa=class extends ii{constructor(e,i,n){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new Ko(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,D_)}computeBoundingBox(){let e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new es),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<i;n++)this.getMatrixAt(n,Da),ig.copy(e.boundingBox).applyMatrix4(Da),this.boundingBox.union(ig)}computeBoundingSphere(){let e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new ts),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<i;n++)this.getMatrixAt(n,Da),Bo.copy(e.boundingSphere).applyMatrix4(Da),this.boundingSphere.union(Bo)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){return this.instanceColor===null?i.setRGB(1,1,1):i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){return i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){let n=i.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,i){let n=this.matrixWorld,s=this.count;if(Uo.geometry=this.geometry,Uo.material=this.material,Uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bo.copy(this.boundingSphere),Bo.applyMatrix4(n),e.ray.intersectsSphere(Bo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Da),tg.multiplyMatrices(n,Da),Uo.matrixWorld=tg,Uo.raycast(e,pc);for(let a=0,o=pc.length;a<o;a++){let l=pc[a];l.instanceId=r,l.object=this,i.push(l)}pc.length=0}}setColorAt(e,i){return this.instanceColor===null&&(this.instanceColor=new Ko(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,i){return i.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,i){let n=i.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zr(new Float32Array(s*this.count),s,this.count,ol,yi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Id=new I,I_=new I,P_=new Ye,Jn=class{constructor(e=new I(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,n,s){return this.normal.set(e,i,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,n){let s=Id.subVectors(n,i).cross(I_.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,n=!0){let s=e.delta(Id),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:i.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let i=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return i<0&&n>0||n<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){let n=i||P_.getNormalMatrix(e),s=this.coplanarPoint(Id).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Or=new ts,L_=new le(.5,.5),mc=new I,Qo=class{constructor(e=new Jn,i=new Jn,n=new Jn,s=new Jn,r=new Jn,a=new Jn){this.planes=[e,i,n,s,r,a]}set(e,i,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(i),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let i=this.planes;for(let n=0;n<6;n++)i[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,i=Nn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],S=r[12],b=r[13],A=r[14],C=r[15];if(s[0].setComponents(c-a,f-u,p-g,C-S).normalize(),s[1].setComponents(c+a,f+u,p+g,C+S).normalize(),s[2].setComponents(c+o,f+d,p+y,C+b).normalize(),s[3].setComponents(c-o,f-d,p-y,C-b).normalize(),n)s[4].setComponents(l,h,m,A).normalize(),s[5].setComponents(c-l,f-h,p-m,C-A).normalize();else if(s[4].setComponents(c-l,f-h,p-m,C-A).normalize(),i===Nn)s[5].setComponents(c+l,f+h,p+m,C+A).normalize();else if(i===Ho)s[5].setComponents(l,h,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);let i=L_.distanceTo(e.center);return Or.radius=.7071067811865476+i,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){let i=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(i[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let i=this.planes;for(let n=0;n<6;n++){let s=i[n];if(mc.x=s.normal.x>0?e.max.x:e.min.x,mc.y=s.normal.y>0?e.max.y:e.min.y,mc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){let i=this.planes;for(let n=0;n<6;n++)if(i[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xa=class extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Dc=new I,Ic=new I,ng=new Mt,Fo=new Va,gc=new ts,Pd=new I,sg=new I,Pc=class extends Si{constructor(e=new Ut,i=new Xa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let i=e.attributes.position,n=[0];for(let s=1,r=i.count;s<r;s++)Dc.fromBufferAttribute(i,s-1),Ic.fromBufferAttribute(i,s),n[s]=n[s-1],n[s]+=Dc.distanceTo(Ic);e.setAttribute("lineDistance",new gi(n,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gc.copy(n.boundingSphere),gc.applyMatrix4(s),gc.radius+=r,e.ray.intersectsSphere(gc)===!1)return;ng.copy(s).invert(),Fo.copy(e.ray).applyMatrix4(ng);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=u.getX(y),S=u.getX(y+1),b=vc(this,e,Fo,l,p,S,y);b&&i.push(b)}if(this.isLineLoop){let y=u.getX(g-1),m=u.getX(f),p=vc(this,e,Fo,l,y,m,g-1);p&&i.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=vc(this,e,Fo,l,y,y+1,y);p&&i.push(p)}if(this.isLineLoop){let y=vc(this,e,Fo,l,g-1,f,g-1);y&&i.push(y)}}}updateMorphTargets(){let i=this.geometry.morphAttributes,n=Object.keys(i);if(n.length>0){let s=i[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vc(t,e,i,n,s,r,a){let o=t.geometry.attributes.position;if(Dc.fromBufferAttribute(o,s),Ic.fromBufferAttribute(o,r),i.distanceSqToSegment(Dc,Ic,Pd,sg)>n)return;Pd.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(Pd);if(!(c<e.near||c>e.far))return{distance:c,point:sg.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}var rg=new I,ag=new I,Zo=class extends Pc{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let i=e.attributes.position,n=[];for(let s=0,r=i.count;s<r;s+=2)rg.fromBufferAttribute(i,s),ag.fromBufferAttribute(i,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+rg.distanceTo(ag);e.setAttribute("lineDistance",new gi(n,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Is=class extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},og=new Mt,kd=new Va,xc=new ts,yc=new I,or=class extends Si{constructor(e=new Ut,i=new Is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xc.copy(n.boundingSphere),xc.applyMatrix4(s),xc.radius+=r,e.ray.intersectsSphere(xc)===!1)return;og.copy(s).invert(),kd.copy(e.ray).applyMatrix4(og);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,y=f;g<y;g++){let m=c.getX(g);yc.fromBufferAttribute(d,m),lg(yc,m,l,s,e,i,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,y=f;g<y;g++)yc.fromBufferAttribute(d,g),lg(yc,g,l,s,e,i,this)}}updateMorphTargets(){let i=this.geometry.morphAttributes,n=Object.keys(i);if(n.length>0){let s=i[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function lg(t,e,i,n,s,r,a){let o=kd.distanceSqToPoint(t);if(o<i){let l=new I;kd.closestPointToPoint(t,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Jo=class extends vi{constructor(e=[],i=dr,n,s,r,a,o,l,c,u){super(e,i,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ya=class extends vi{constructor(e,i,n,s,r,a,o,l,c){super(e,i,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Cn=class extends vi{constructor(e,i,n=Gn,s,r,a,o=wt,l=wt,c,u=jn,d=1){if(u!==jn&&u!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:i,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ga(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}},Lc=class extends Cn{constructor(e,i=Gn,n=dr,s,r,a=wt,o=wt,l,c=jn){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,i,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},jo=class extends vi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},lr=class t extends Ut{constructor(e=1,i=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,i,e,a,r,0),g("z","y","x",1,-1,n,i,-e,a,r,1),g("x","z","y",1,1,e,n,i,s,a,2),g("x","z","y",1,-1,e,n,-i,s,a,3),g("x","y","z",1,-1,e,i,n,s,r,4),g("x","y","z",-1,-1,e,i,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new gi(c,3)),this.setAttribute("normal",new gi(u,3)),this.setAttribute("uv",new gi(d,2));function g(y,m,p,S,b,A,C,M,T,x,E){let L=A/T,P=C/x,R=A/2,D=C/2,B=M/2,U=T+1,G=x+1,k=0,Y=0,j=new I;for(let te=0;te<G;te++){let ne=te*P-D;for(let oe=0;oe<U;oe++){let Ge=oe*L-R;j[y]=Ge*S,j[m]=ne*b,j[p]=B,c.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[p]=M>0?1:-1,u.push(j.x,j.y,j.z),d.push(oe/T),d.push(1-te/x),k+=1}}for(let te=0;te<x;te++)for(let ne=0;ne<T;ne++){let oe=h+ne+U*te,Ge=h+ne+U*(te+1),xt=h+(ne+1)+U*(te+1),it=h+(ne+1)+U*te;l.push(oe,Ge,it),l.push(Ge,xt,it),Y+=6}o.addGroup(f,Y,E),f+=Y,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var qa=class t extends Ut{constructor(e=1,i=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,y=[],m=n/2,p=0;S(),a===!1&&(e>0&&b(!0),i>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new gi(d,3)),this.setAttribute("normal",new gi(h,3)),this.setAttribute("uv",new gi(f,2));function S(){let A=new I,C=new I,M=0,T=(i-e)/n;for(let x=0;x<=r;x++){let E=[],L=x/r,P=L*(i-e)+e;for(let R=0;R<=s;R++){let D=R/s,B=D*l+o,U=Math.sin(B),G=Math.cos(B);C.x=P*U,C.y=-L*n+m,C.z=P*G,d.push(C.x,C.y,C.z),A.set(U,T,G).normalize(),h.push(A.x,A.y,A.z),f.push(D,1-L),E.push(g++)}y.push(E)}for(let x=0;x<s;x++)for(let E=0;E<r;E++){let L=y[E][x],P=y[E+1][x],R=y[E+1][x+1],D=y[E][x+1];(e>0||E!==0)&&(u.push(L,P,D),M+=3),(i>0||E!==r-1)&&(u.push(P,R,D),M+=3)}c.addGroup(p,M,0),p+=M}function b(A){let C=g,M=new le,T=new I,x=0,E=A===!0?e:i,L=A===!0?1:-1;for(let R=1;R<=s;R++)d.push(0,m*L,0),h.push(0,L,0),f.push(.5,.5),g++;let P=g;for(let R=0;R<=s;R++){let B=R/s*l+o,U=Math.cos(B),G=Math.sin(B);T.x=E*G,T.y=m*L,T.z=E*U,d.push(T.x,T.y,T.z),h.push(0,L,0),M.x=U*.5+.5,M.y=G*.5*L+.5,f.push(M.x,M.y),g++}for(let R=0;R<s;R++){let D=C+R,B=P+R;A===!0?u.push(B,B+1,D):u.push(B+1,B,D),x+=3}c.addGroup(p,x,A===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ka=class t extends qa{constructor(e=1,i=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,i,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new t(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Vr=class t extends Ut{constructor(e=1,i=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:n,heightSegments:s};let r=e/2,a=i/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=i/l,f=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let S=p*h-a;for(let b=0;b<c;b++){let A=b*d-r;g.push(A,-S,0),y.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let b=S+c*p,A=S+c*(p+1),C=S+1+c*(p+1),M=S+1+c*p;f.push(b,A,M),f.push(A,C,M)}this.setIndex(f),this.setAttribute("position",new gi(g,3)),this.setAttribute("normal",new gi(y,3)),this.setAttribute("uv",new gi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},$o=class t extends Ut{constructor(e=.5,i=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],d=e,h=(i-e)/s,f=new I,g=new le;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/i+1)/2,g.y=(f.y/i+1)/2,u.push(g.x,g.y)}d+=h}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let S=p+m,b=S,A=S+n+1,C=S+n+2,M=S+1;o.push(b,A,M),o.push(A,C,M)}}this.setIndex(o),this.setAttribute("position",new gi(l,3)),this.setAttribute("normal",new gi(c,3)),this.setAttribute("uv",new gi(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};function qr(t){let e={};for(let i in t){e[i]={};for(let n in t[i]){let s=t[i][n];if(cg(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][n]=null):e[i][n]=s.clone();else if(Array.isArray(s))if(cg(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[i][n]=r}else e[i][n]=s.slice();else e[i][n]=s}}return e}function Hi(t){let e={};for(let i=0;i<t.length;i++){let n=qr(t[i]);for(let s in n)e[s]=n[s]}return e}function cg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function U_(t){let e=[];for(let i=0;i<t.length;i++)e.push(t[i].clone());return e}function uf(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var Kg={clone:qr,merge:Hi},B_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B_,this.fragmentShader=F_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=U_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?i.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?i.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?i.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?i.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?i.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?i.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?i.uniforms[s]={type:"m4",value:a.toArray()}:i.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(i.extensions=n),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=i[s.value]||null;break;case"c":this.uniforms[n].value=new Re().setHex(s.value);break;case"v2":this.uniforms[n].value=new le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Uc=class extends Xe{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Qa=class extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=It,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bc=class extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function _c(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}var cr=class{constructor(e,i,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new i.constructor(n),this.sampleValues=i,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let i=this.parameterPositions,n=this._cachedIndex,s=i[n],r=i[n-1];e:{t:{let a;i:{n:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break n;return n=i.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=i[++n],e<s)break t}a=i.length;break i}if(!(e>=r)){let o=i[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=i[--n-1],e>=r)break t}a=n,n=0;break i}break e}for(;n<a;){let o=n+a>>>1;e<i[o]?a=o:n=o+1}if(s=i[n],r=i[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=i.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let i=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)i[a]=n[r+a];return i}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fc=class extends cr{constructor(e,i,n,s){super(e,i,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ud,endingEnd:Ud}}intervalChanged_(e,i,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bd:r=e,o=2*i-n;break;case Fd:r=s.length-2,o=i+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bd:a=e,l=2*n-i;break;case Fd:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=i}let c=(n-i)*.5,u=this.valueSize;this._weightPrev=c/(i-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,i,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-i)/(s-i),y=g*g,m=y*g,p=-h*m+2*h*y-h*g,S=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,b=(-1-f)*m+(1.5+f)*y+.5*g,A=f*m-f*y;for(let C=0;C!==o;++C)r[C]=p*a[u+C]+S*a[c+C]+b*a[l+C]+A*a[d+C];return r}},Nc=class extends cr{constructor(e,i,n,s){super(e,i,n,s)}interpolate_(e,i,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-i)/(s-i),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},Oc=class extends cr{constructor(e,i,n,s){super(e,i,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kc=class extends cr{interpolate_(e,i,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-i)/(s-i),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let h=o*2,f=e-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=f*h+g*2,S=d[p],b=d[p+1],A=e*h+g*2,C=u[A],M=u[A+1],T=(n-i)/(s-i),x,E,L,P,R;for(let D=0;D<8;D++){x=T*T,E=x*T,L=1-T,P=L*L,R=P*L;let U=R*i+3*P*T*S+3*L*x*C+E*s-n;if(Math.abs(U)<1e-10)break;let G=3*P*(S-i)+6*L*T*(C-S)+3*x*(s-C);if(Math.abs(G)<1e-10)break;T=T-U/G,T=Math.max(0,Math.min(1,T))}r[g]=R*y+3*P*T*b+3*L*x*M+E*m}return r}},pn=class{constructor(e,i,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(i===void 0||i.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_c(i,this.TimeBufferType),this.values=_c(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let i=e.constructor,n;if(i.toJSON!==this.toJSON)n=i.toJSON(e);else{n={name:e.name,times:_c(e.times,Array),values:_c(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let i=new kc(this.times,this.values,this.getValueSize(),e);return this.settings&&(i.inTangents=this.settings.inTangents,i.outTangents=this.settings.outTangents),i}setInterpolation(e){let i;switch(e){case ko:i=this.InterpolantFactoryMethodDiscrete;break;case bc:i=this.InterpolantFactoryMethodLinear;break;case Sc:i=this.InterpolantFactoryMethodSmooth;break;case Ld:i=this.InterpolantFactoryMethodBezier;break}if(i===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Oe("KeyframeTrack:",n),this}return this.createInterpolant=i,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ko;case this.InterpolantFactoryMethodLinear:return bc;case this.InterpolantFactoryMethodSmooth:return Sc;case this.InterpolantFactoryMethodBezier:return Ld}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let i=this.times;for(let n=0,s=i.length;n!==s;++n)i[n]+=e}return this}scale(e){if(e!==1){let i=this.times;for(let n=0,s=i.length;n!==s;++n)i[n]*=e}return this}trim(e,i){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>i;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,i=this.getValueSize();i-Math.floor(i)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){He("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){He("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&jy(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){He("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),i=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let y=i[d+g];if(y!==i[h+g]||y!==i[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)i[h+f]=i[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)i[l+c]=i[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=i.slice(0,a*n)):(this.times=e,this.values=i),this}clone(){let e=this.times.slice(),i=this.values.slice(),n=this.constructor,s=new n(this.name,e,i);return s.createInterpolant=this.createInterpolant,s}};pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=bc;var hr=class extends pn{constructor(e,i,n){super(e,i,n)}};hr.prototype.ValueTypeName="bool";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=ko;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends pn{constructor(e,i,n,s){super(e,i,n,s)}};Gc.prototype.ValueTypeName="color";var Hc=class extends pn{constructor(e,i,n,s){super(e,i,n,s)}};Hc.prototype.ValueTypeName="number";var zc=class extends cr{constructor(e,i,n,s){super(e,i,n,s)}interpolate_(e,i,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-i)/(s-i),c=e*o;for(let u=c+o;c!==u;c+=4)bn.slerpFlat(r,0,a,c-o,a,c,l);return r}},el=class extends pn{constructor(e,i,n,s){super(e,i,n,s)}InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}};el.prototype.ValueTypeName="quaternion";el.prototype.InterpolantFactoryMethodSmooth=void 0;var ur=class extends pn{constructor(e,i,n){super(e,i,n)}};ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=ko;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Vc=class extends pn{constructor(e,i,n,s){super(e,i,n,s)}};Vc.prototype.ValueTypeName="vector";var Ps=class{constructor(e,i,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qg=new Ps,Wr=class{constructor(e){this.manager=e!==void 0?e:Qg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){let n=this;return new Promise(function(s,r){n.load(e,s,i,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Wr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wc=class extends Si{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}};var Ac=new I,Mc=new bn,Zn=new I,tl=class extends Si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ac,Mc,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ac,Mc,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,i,n=!1){super.updateWorldMatrix(e,i,n),this.matrixWorld.decompose(Ac,Mc,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ac,Mc,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},er=new I,hg=new le,ug=new le,qt=class extends tl{constructor(e=50,i=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let i=.5*this.getFilmHeight()/e;this.fov=ka*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,n){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(er.x,er.y).multiplyScalar(-e/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(er.x,er.y).multiplyScalar(-e/er.z)}getViewSize(e,i){return this.getViewBounds(e,hg,ug),i.subVectors(ug,hg)}setViewOffset(e,i,n,s,r,a){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,i=e*Math.tan(No*.5*this.fov)/this.zoom,n=2*i,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,i-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,i,i-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}};var Xr=class extends tl{constructor(e=-1,i=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+i,l=s-i;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}};var il=class extends Wc{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ia=-90,Pa=1,Xc=class extends Si{constructor(e,i,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qt(Ia,Pa,e,i);s.layers=this.layers,this.add(s);let r=new qt(Ia,Pa,e,i);r.layers=this.layers,this.add(r);let a=new qt(Ia,Pa,e,i);a.layers=this.layers,this.add(a);let o=new qt(Ia,Pa,e,i);o.layers=this.layers,this.add(o);let l=new qt(Ia,Pa,e,i);l.layers=this.layers,this.add(l);let c=new qt(Ia,Pa,e,i);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,i=this.children.concat(),[n,s,r,a,o,l]=i;for(let c of i)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of i)this.add(c),c.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(i,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(i,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(i,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(i,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Yc=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var df="\\[\\]\\.:\\/",N_=new RegExp("["+df+"]","g"),ff="[^"+df+"]",O_="[^"+df.replace("\\.","")+"]",k_=/((?:WC+[\/:])*)/.source.replace("WC",ff),G_=/(WCOD+)?/.source.replace("WCOD",O_),H_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ff),z_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ff),V_=new RegExp("^"+k_+G_+H_+z_+"$"),W_=["material","materials","bones","map"],Gd=class{constructor(e,i,n){let s=n||zt.parseTrackName(i);this._targetGroup=e,this._bindings=e.subscribe_(i,s)}getValue(e,i){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,i)}setValue(e,i){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,i)}bind(){let e=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=e.length;i!==n;++i)e[i].bind()}unbind(){let e=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=e.length;i!==n;++i)e[i].unbind()}},zt=class t{constructor(e,i,n){this.path=i,this.parsedPath=n||t.parseTrackName(i),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,i,n){return e&&e.isAnimationObjectGroup?new t.Composite(e,i,n):new t(e,i,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(N_,"")}static parseTrackName(e){let i=V_.exec(e);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);W_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,i){if(i===void 0||i===""||i==="."||i===-1||i===e.name||i===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(i);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===i||o.uuid===i)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,i){e[i]=this.targetObject[this.propertyName]}_getValue_array(e,i){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[i++]=n[s]}_getValue_arrayElement(e,i){e[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,i){this.resolvedProperty.toArray(e,i)}_setValue_direct(e,i){this.targetObject[this.propertyName]=e[i]}_setValue_direct_setNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,i){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[i++]}_setValue_array_setNeedsUpdate(e,i){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,i){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,i){this.resolvedProperty[this.propertyIndex]=e[i]}_setValue_arrayElement_setNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,i){this.resolvedProperty.fromArray(e,i)}_setValue_fromArray_setNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,i){this.bind(),this.getValue(e,i)}_setValue_unbound(e,i){this.bind(),this.setValue(e,i)}bind(){let e=this.node,i=this.parsedPath,n=i.objectName,s=i.propertyName,r=i.propertyIndex;if(e||(e=t.findNode(this.rootNode,i.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=i.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=i.nodeName;He("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=Gd;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iC=new Float32Array(1);var ie=class t{constructor(e){this.value=e}clone(){return new t(this.value.clone===void 0?this.value:this.value.clone())}};var nl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}};var Hd=class t{static{t.prototype.isMatrix2=!0}constructor(e,i,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let n=0;n<4;n++)this.elements[n]=e[n+i];return this}set(e,i,n,s){let r=this.elements;return r[0]=e,r[2]=i,r[1]=n,r[3]=s,this}};function pf(t,e,i,n){let s=X_(n);switch(i){case rf:return t*e;case ol:return t*e/s.components*s.byteLength;case $c:return t*e/s.components*s.byteLength;case Ls:return t*e*2/s.components*s.byteLength;case eh:return t*e*2/s.components*s.byteLength;case af:return t*e*3/s.components*s.byteLength;case Gi:return t*e*4/s.components*s.byteLength;case th:return t*e*4/s.components*s.byteLength;case ll:case cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case hl:case ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nh:case rh:return Math.max(t,16)*Math.max(e,8)/4;case ih:case sh:return Math.max(t,8)*Math.max(e,8)/2;case ah:case oh:case ch:case hh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lh:case dl:case uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ph:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case gh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case vh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case xh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case yh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case _h:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Th:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case wh:case bh:case Ch:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Rh:case Dh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case fl:case Ih:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function X_(t){switch(t){case st:case ef:return{byteLength:1,components:1};case Ja:case tf:case sn:return{byteLength:2,components:1};case Jc:case jc:return{byteLength:2,components:4};case Gn:case Zc:case yi:return{byteLength:4,components:1};case nf:case sf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function y0(){let t=null,e=!1,i=null,n=null;function s(r,a){i(r,a),n=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&i!==null&&t!==null&&(n=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){i=r},setContext:function(r){t=r}}}function q_(t){let e=new WeakMap;function i(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var K_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q_=`#ifdef USE_ALPHAHASH
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
#endif`,Z_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e2=`#ifdef USE_AOMAP
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
#endif`,t2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i2=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,n2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o2=`#ifdef USE_IRIDESCENCE
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
#endif`,l2=`#ifdef USE_BUMPMAP
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
#endif`,c2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,p2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,m2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,g2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,v2=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,x2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y2=`vec3 transformedNormal = objectNormal;
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
#endif`,_2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E2="gl_FragColor = linearToOutputTexel( gl_FragColor );",T2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,b2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,C2=`#ifdef USE_ENVMAP
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
#endif`,R2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,I2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B2=`#ifdef USE_GRADIENTMAP
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
}`,F2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k2=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,G2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,H2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Y2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,q2=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,K2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,Q2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,J2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sA=`#if defined( USE_POINTS_UV )
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
#endif`,rA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hA=`#ifdef USE_MORPHTARGETS
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
#endif`,uA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vA=`#ifdef USE_NORMALMAP
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
#endif`,xA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_A=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,EA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,IA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,LA=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,UA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BA=`#ifdef USE_SKINNING
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
#endif`,FA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NA=`#ifdef USE_SKINNING
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
#endif`,OA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zA=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VA=`#ifdef USE_TRANSMISSION
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
#endif`,WA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,KA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QA=`uniform sampler2D t2D;
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
}`,ZA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$A=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`#include <common>
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
}`,tM=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iM=`#define DISTANCE
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
}`,nM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`uniform float scale;
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
}`,oM=`uniform vec3 diffuse;
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
}`,lM=`#include <common>
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
}`,cM=`uniform vec3 diffuse;
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
}`,hM=`#define LAMBERT
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
}`,uM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,dM=`#define MATCAP
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
}`,fM=`#define MATCAP
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
}`,pM=`#define NORMAL
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
}`,mM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gM=`#define PHONG
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
}`,vM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,xM=`#define STANDARD
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
}`,yM=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,_M=`#define TOON
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
}`,AM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,MM=`uniform float size;
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
}`,SM=`uniform vec3 diffuse;
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
}`,EM=`#include <common>
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
}`,TM=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,wM=`uniform float rotation;
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
}`,bM=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:K_,alphahash_pars_fragment:Q_,alphamap_fragment:Z_,alphamap_pars_fragment:J_,alphatest_fragment:j_,alphatest_pars_fragment:$_,aomap_fragment:e2,aomap_pars_fragment:t2,batching_pars_vertex:i2,batching_vertex:n2,begin_vertex:s2,beginnormal_vertex:r2,bsdfs:a2,iridescence_fragment:o2,bumpmap_pars_fragment:l2,clipping_planes_fragment:c2,clipping_planes_pars_fragment:h2,clipping_planes_pars_vertex:u2,clipping_planes_vertex:d2,color_fragment:f2,color_pars_fragment:p2,color_pars_vertex:m2,color_vertex:g2,common:v2,cube_uv_reflection_fragment:x2,defaultnormal_vertex:y2,displacementmap_pars_vertex:_2,displacementmap_vertex:A2,emissivemap_fragment:M2,emissivemap_pars_fragment:S2,colorspace_fragment:E2,colorspace_pars_fragment:T2,envmap_fragment:w2,envmap_common_pars_fragment:b2,envmap_pars_fragment:C2,envmap_pars_vertex:R2,envmap_physical_pars_fragment:G2,envmap_vertex:D2,fog_vertex:I2,fog_pars_vertex:P2,fog_fragment:L2,fog_pars_fragment:U2,gradientmap_pars_fragment:B2,lightmap_pars_fragment:F2,lights_lambert_fragment:N2,lights_lambert_pars_fragment:O2,lights_pars_begin:k2,lights_toon_fragment:H2,lights_toon_pars_fragment:z2,lights_phong_fragment:V2,lights_phong_pars_fragment:W2,lights_physical_fragment:X2,lights_physical_pars_fragment:Y2,lights_fragment_begin:q2,lights_fragment_maps:K2,lights_fragment_end:Q2,lightprobes_pars_fragment:Z2,logdepthbuf_fragment:J2,logdepthbuf_pars_fragment:j2,logdepthbuf_pars_vertex:$2,logdepthbuf_vertex:eA,map_fragment:tA,map_pars_fragment:iA,map_particle_fragment:nA,map_particle_pars_fragment:sA,metalnessmap_fragment:rA,metalnessmap_pars_fragment:aA,morphinstance_vertex:oA,morphcolor_vertex:lA,morphnormal_vertex:cA,morphtarget_pars_vertex:hA,morphtarget_vertex:uA,normal_fragment_begin:dA,normal_fragment_maps:fA,normal_pars_fragment:pA,normal_pars_vertex:mA,normal_vertex:gA,normalmap_pars_fragment:vA,clearcoat_normal_fragment_begin:xA,clearcoat_normal_fragment_maps:yA,clearcoat_pars_fragment:_A,iridescence_pars_fragment:AA,opaque_fragment:MA,packing:SA,premultiplied_alpha_fragment:EA,project_vertex:TA,dithering_fragment:wA,dithering_pars_fragment:bA,roughnessmap_fragment:CA,roughnessmap_pars_fragment:RA,shadowmap_pars_fragment:DA,shadowmap_pars_vertex:IA,shadowmap_vertex:PA,shadowmask_pars_fragment:LA,skinbase_vertex:UA,skinning_pars_vertex:BA,skinning_vertex:FA,skinnormal_vertex:NA,specularmap_fragment:OA,specularmap_pars_fragment:kA,tonemapping_fragment:GA,tonemapping_pars_fragment:HA,transmission_fragment:zA,transmission_pars_fragment:VA,uv_pars_fragment:WA,uv_pars_vertex:XA,uv_vertex:YA,worldpos_vertex:qA,background_vert:KA,background_frag:QA,backgroundCube_vert:ZA,backgroundCube_frag:JA,cube_vert:jA,cube_frag:$A,depth_vert:eM,depth_frag:tM,distance_vert:iM,distance_frag:nM,equirect_vert:sM,equirect_frag:rM,linedashed_vert:aM,linedashed_frag:oM,meshbasic_vert:lM,meshbasic_frag:cM,meshlambert_vert:hM,meshlambert_frag:uM,meshmatcap_vert:dM,meshmatcap_frag:fM,meshnormal_vert:pM,meshnormal_frag:mM,meshphong_vert:gM,meshphong_frag:vM,meshphysical_vert:xM,meshphysical_frag:yM,meshtoon_vert:_M,meshtoon_frag:AM,points_vert:MM,points_frag:SM,shadow_vert:EM,shadow_frag:TM,sprite_vert:wM,sprite_frag:bM},me={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},as={basic:{uniforms:Hi([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Hi([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Hi([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Hi([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Hi([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Re(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Hi([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Hi([me.points,me.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Hi([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Hi([me.common,me.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Hi([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Hi([me.sprite,me.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Hi([me.common,me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Hi([me.lights,me.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};as.physical={uniforms:Hi([as.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Bh={r:0,b:0,g:0},CM=new Mt,_0=new Ye;_0.set(-1,0,0,0,1,0,0,0,1);function RM(t,e,i,n,s,r){let a=new Re(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){let A=S.backgroundBlurriness>0;b=e.get(b,A)}return b}function g(S){let b=!1,A=f(S);A===null?m(a,o):A&&A.isColor&&(m(A,1),b=!0);let C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(t.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(S,b){let A=f(b);A&&(A.isCubeTexture||A.mapping===rl)?(c===void 0&&(c=new ii(new lr(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:qr(as.backgroundCube.uniforms),vertexShader:as.backgroundCube.vertexShader,fragmentShader:as.backgroundCube.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=A,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(CM.makeRotationFromEuler(b.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_0),c.material.toneMapped=ot.getTransfer(A.colorSpace)!==Tt,(u!==A||d!==A.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,h=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new ii(new Vr(2,2),new Xe({name:"BackgroundMaterial",uniforms:qr(as.background.uniforms),vertexShader:as.background.vertexShader,fragmentShader:as.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ot.getTransfer(A.colorSpace)!==Tt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,h=t.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,b){S.getRGB(Bh,uf(t)),i.buffers.color.setClear(Bh.r,Bh.g,Bh.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:y,dispose:p}}function DM(t,e){let i=t.getParameter(t.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(P,R,D,B,U){let G=!1,k=d(P,B,D,R);r!==k&&(r=k,c(r.object)),G=f(P,B,D,U),G&&g(P,B,D,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,A(P,R,D,B),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function u(P){return t.deleteVertexArray(P)}function d(P,R,D,B){let U=B.wireframe===!0,G=n[R.id];G===void 0&&(G={},n[R.id]=G);let k=P.isInstancedMesh===!0?P.id:0,Y=G[k];Y===void 0&&(Y={},G[k]=Y);let j=Y[D.id];j===void 0&&(j={},Y[D.id]=j);let te=j[U];return te===void 0&&(te=h(l()),j[U]=te),te}function h(P){let R=[],D=[],B=[];for(let U=0;U<i;U++)R[U]=0,D[U]=0,B[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:B,object:P,attributes:{},index:null}}function f(P,R,D,B){let U=r.attributes,G=R.attributes,k=0,Y=D.getAttributes();for(let j in Y)if(Y[j].location>=0){let ne=U[j],oe=G[j];if(oe===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),ne===void 0||ne.attribute!==oe||oe&&ne.data!==oe.data)return!0;k++}return r.attributesNum!==k||r.index!==B}function g(P,R,D,B){let U={},G=R.attributes,k=0,Y=D.getAttributes();for(let j in Y)if(Y[j].location>=0){let ne=G[j];ne===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));let oe={};oe.attribute=ne,ne&&ne.data&&(oe.data=ne.data),U[j]=oe,k++}r.attributes=U,r.attributesNum=k,r.index=B}function y(){let P=r.newAttributes;for(let R=0,D=P.length;R<D;R++)P[R]=0}function m(P){p(P,0)}function p(P,R){let D=r.newAttributes,B=r.enabledAttributes,U=r.attributeDivisors;D[P]=1,B[P]===0&&(t.enableVertexAttribArray(P),B[P]=1),U[P]!==R&&(t.vertexAttribDivisor(P,R),U[P]=R)}function S(){let P=r.newAttributes,R=r.enabledAttributes;for(let D=0,B=R.length;D<B;D++)R[D]!==P[D]&&(t.disableVertexAttribArray(D),R[D]=0)}function b(P,R,D,B,U,G,k){k===!0?t.vertexAttribIPointer(P,R,D,U,G):t.vertexAttribPointer(P,R,D,B,U,G)}function A(P,R,D,B){y();let U=B.attributes,G=D.getAttributes(),k=R.defaultAttributeValues;for(let Y in G){let j=G[Y];if(j.location>=0){let te=U[Y];if(te===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),te!==void 0){let ne=te.normalized,oe=te.itemSize,Ge=e.get(te);if(Ge===void 0)continue;let xt=Ge.buffer,it=Ge.type,Q=Ge.bytesPerElement,se=it===t.INT||it===t.UNSIGNED_INT||te.gpuType===Zc;if(te.isInterleavedBufferAttribute){let ee=te.data,be=ee.stride,Ve=te.offset;if(ee.isInstancedInterleavedBuffer){for(let Fe=0;Fe<j.locationSize;Fe++)p(j.location+Fe,ee.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Fe=0;Fe<j.locationSize;Fe++)m(j.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,xt);for(let Fe=0;Fe<j.locationSize;Fe++)b(j.location+Fe,oe/j.locationSize,it,ne,be*Q,(Ve+oe/j.locationSize*Fe)*Q,se)}else{if(te.isInstancedBufferAttribute){for(let ee=0;ee<j.locationSize;ee++)p(j.location+ee,te.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ee=0;ee<j.locationSize;ee++)m(j.location+ee);t.bindBuffer(t.ARRAY_BUFFER,xt);for(let ee=0;ee<j.locationSize;ee++)b(j.location+ee,oe/j.locationSize,it,ne,oe*Q,oe/j.locationSize*ee*Q,se)}}else if(k!==void 0){let ne=k[Y];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(j.location,ne);break;case 3:t.vertexAttrib3fv(j.location,ne);break;case 4:t.vertexAttrib4fv(j.location,ne);break;default:t.vertexAttrib1fv(j.location,ne)}}}}S()}function C(){E();for(let P in n){let R=n[P];for(let D in R){let B=R[D];for(let U in B){let G=B[U];for(let k in G)u(G[k].object),delete G[k];delete B[U]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let R=n[P.id];for(let D in R){let B=R[D];for(let U in B){let G=B[U];for(let k in G)u(G[k].object),delete G[k];delete B[U]}}delete n[P.id]}function T(P){for(let R in n){let D=n[R];for(let B in D){let U=D[B];if(U[P.id]===void 0)continue;let G=U[P.id];for(let k in G)u(G[k].object),delete G[k];delete U[P.id]}}}function x(P){for(let R in n){let D=n[R],B=P.isInstancedMesh===!0?P.id:0,U=D[B];if(U!==void 0){for(let G in U){let k=U[G];for(let Y in k)u(k[Y].object),delete k[Y];delete U[G]}delete D[B],Object.keys(D).length===0&&delete n[R]}}}function E(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:L,dispose:C,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function IM(t,e,i){let n;function s(l){n=l}function r(l,c){t.drawArrays(n,l,c),i.update(c,n,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(n,l,c,u),i.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];i.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function PM(t,e,i,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Gi&&n.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let x=T===sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==st&&n.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==yi&&!x)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp",u=l(c);u!==c&&(Oe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=i.logarithmicDepthBuffer===!0,h=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&h===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),A=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),M=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:A,maxSamples:C,samples:M}}function LM(t){let e=this,i=null,n=0,s=!1,r=!1,a=new Jn,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){i=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let S=r?0:n,b=S*4,A=p.clippingState||null;l.value=A,A=u(g,h,b,f);for(let C=0;C!==b;++C)A[C]=i[C];p.clippingState=A,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,A=f;b!==y;++b,A+=4)a.copy(d[b]).applyMatrix4(S,o),a.normal.toArray(m,A),m[A+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var gr=4,Zg=[.125,.215,.35,.446,.526,.582],Kr=20,UM=256,pl=new Xr,Jg=new Re,mf=null,gf=0,vf=0,xf=!1,BM=new I,Nh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,n=.1,s=100,r={}){let{size:a=256,position:o=BM}=r;mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),i>0&&this._blur(l,0,0,i),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mf,gf,vf),this._renderer.xr.enabled=xf,e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===dr||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=i||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:sn,format:Gi,colorSpace:$n,depthBuffer:!1},s=jg(e,i,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jg(e,i,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=FM(r)),this._blurMaterial=OM(r,e,i),this._ggxMaterial=NM(r,e,i)}return s}_compileMaterial(e){let i=new ii(new Ut,e);this._renderer.compile(i,pl)}_sceneToCubeUV(e,i,n,s,r){let l=new qt(90,1,i,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Jg),d.toneMapping=mn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ii(new lr,new is({name:"PMREM.Background",side:xi,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(Jg),p=!0);for(let b=0;b<6;b++){let A=b%3;A===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):A===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));let C=this._cubeSize;$a(s,A*C,b>2?C:0,C,C),d.setRenderTarget(s),p&&d.render(y,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=S}_textureToCubeUV(e,i){let n=this._renderer,s=e.mapping===dr||e.mapping===Yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=e0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$g());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;$a(i,0,0,3*l,2*l),n.setRenderTarget(i),n.render(a,pl)}_applyPMREM(e){let i=this._renderer,n=i.autoClear;i.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);i.autoClear=n}_applyGGXFilter(e,i,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=i/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-gr?n-g+gr:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-i,$a(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,pl),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,$a(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(o,pl)}_blur(e,i,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,i,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,i,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&He("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[s];d.material=c;let h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Kr-1),y=r/g,m=isFinite(r)?1+Math.floor(u*y):Kr;m>Kr&&Oe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kr}`);let p=[],S=0;for(let T=0;T<Kr;++T){let x=T/y,E=Math.exp(-x*x/2);p.push(E),T===0?S+=E:T<m&&(S+=2*E)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-n;let A=this._sizeLods[s],C=3*A*(s>b-gr?s-b+gr:0),M=4*(this._cubeSize-A);$a(i,C,M,3*A,2*A),l.setRenderTarget(i),l.render(d,pl)}};function FM(t){let e=[],i=[],n=[],s=t,r=t-gr+1+Zg.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>t-gr?l=Zg[a-t+gr-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,y=3,m=2,p=1,S=new Float32Array(y*g*f),b=new Float32Array(m*g*f),A=new Float32Array(p*g*f);for(let M=0;M<f;M++){let T=M%3*2/3-1,x=M>2?0:-1,E=[T,x,0,T+2/3,x,0,T+2/3,x+1,0,T,x,0,T+2/3,x+1,0,T,x+1,0];S.set(E,y*g*M),b.set(h,m*g*M);let L=[M,M,M,M,M,M];A.set(L,p*g*M)}let C=new Ut;C.setAttribute("position",new St(S,y)),C.setAttribute("uv",new St(b,m)),C.setAttribute("faceIndex",new St(A,p)),n.push(new ii(C,null)),s>gr&&s--}return{lodMeshes:n,sizeLods:e,sigmas:i}}function jg(t,e,i){let n=new ze(t,e,i);return n.texture.mapping=rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $a(t,e,i,n,s){t.viewport.set(e,i,n,s),t.scissor.set(e,i,n,s)}function NM(t,e,i){return new Xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:UM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:tt,depthTest:!1,depthWrite:!1})}function OM(t,e,i){let n=new Float32Array(Kr),s=new I(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:tt,depthTest:!1,depthWrite:!1})}function $g(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:tt,depthTest:!1,depthWrite:!1})}function e0(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tt,depthTest:!1,depthWrite:!1})}function Gh(){return`

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
	`}var Oh=class extends ze{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Jo(s),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new lr(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xi,blending:tt});r.uniforms.tEquirect.value=i;let a=new ii(s,r),o=i.minFilter;return i.minFilter===ns&&(i.minFilter=kt),new Xc(1,10,this).update(e,a),i.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,i=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(i,n,s);e.setRenderTarget(r)}};function kM(t){let e=new WeakMap,i=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===qc||f===Kc)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new Oh(g.height);return y.fromEquirectangularTexture(t,h),e.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===qc||f===Kc,y=f===dr||f===Yr;if(g||y){let m=i.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Nh(t)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,i.set(h,m),m.texture;if(m!==void 0)return m.texture;{let S=h.image;return g&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new Nh(t)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,i.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===qc?h.mapping=dr:f===Kc&&(h.mapping=Yr),h}function l(h){let f=0,g=6;for(let y=0;y<g;y++)h[y]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=i.get(f);g!==void 0&&(i.delete(f),g.dispose())}function d(){e=new WeakMap,i=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function GM(t){let e={};function i(n){if(e[n]!==void 0)return e[n];let s=t.getExtension(n);return e[n]=s,s}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){let s=i(n);return s===null&&Gr("WebGLRenderer: "+n+" extension not supported."),s}}}function HM(t,e,i,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,i.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,i.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],t.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let S=f.array;y=f.version;for(let b=0,A=S.length;b<A;b+=3){let C=S[b+0],M=S[b+1],T=S[b+2];h.push(C,M,M,T,T,C)}}else{let S=g.array;y=g.version;for(let b=0,A=S.length/3-1;b<A;b+=3){let C=b+0,M=b+1,T=b+2;h.push(C,M,M,T,T,C)}}let m=new(g.count>=65535?qo:Yo)(h,1);m.version=y;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function zM(t,e,i){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){t.drawElements(n,h,r,d*a),i.update(h,n,1)}function c(d,h,f){f!==0&&(t.drawElementsInstanced(n,h,r,d*a,f),i.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=h[m];i.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function VM(t){let e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(i.calls++,a){case t.TRIANGLES:i.triangles+=o*(r/3);break;case t.LINES:i.lines+=o*(r/2);break;case t.LINE_STRIP:i.lines+=o*(r-1);break;case t.LINE_LOOP:i.lines+=o*r;break;case t.POINTS:i.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function s(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:s,update:n}}function WM(t,e,i){let n=new WeakMap,s=new ut;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let E=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let A=o.attributes.position.count*b,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let M=new Float32Array(A*C*4*d),T=new Vo(M,A,C,d);T.type=yi,T.needsUpdate=!0;let x=b*4;for(let L=0;L<d;L++){let P=m[L],R=p[L],D=S[L],B=A*C*4*L;for(let U=0;U<P.count;U++){let G=U*x;f===!0&&(s.fromBufferAttribute(P,U),M[B+G+0]=s.x,M[B+G+1]=s.y,M[B+G+2]=s.z,M[B+G+3]=0),g===!0&&(s.fromBufferAttribute(R,U),M[B+G+4]=s.x,M[B+G+5]=s.y,M[B+G+6]=s.z,M[B+G+7]=0),y===!0&&(s.fromBufferAttribute(D,U),M[B+G+8]=s.x,M[B+G+9]=s.y,M[B+G+10]=s.z,M[B+G+11]=D.itemSize===4?s.w:1)}}h={count:d,texture:T,size:new le(A,C)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,i);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,i),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function XM(t,e,i,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(i.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),i.remove(u.instanceMatrix),u.instanceColor!==null&&i.remove(u.instanceColor)}return{update:a,dispose:o}}var YM={[Yd]:"LINEAR_TONE_MAPPING",[qd]:"REINHARD_TONE_MAPPING",[Kd]:"CINEON_TONE_MAPPING",[Qd]:"ACES_FILMIC_TONE_MAPPING",[Jd]:"AGX_TONE_MAPPING",[jd]:"NEUTRAL_TONE_MAPPING",[Zd]:"CUSTOM_TONE_MAPPING"};function qM(t,e,i,n,s,r){let a=new ze(e,i,{type:t,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Cn(e,i):void 0}),o=new ze(e,i,{type:sn,depthBuffer:!1,stencilBuffer:!1}),l=new Ut;l.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new gi([0,2,0,0,2,0],2));let c=new Uc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ii(l,c),d=new Xr(-1,1,1,-1,0,1),h=null,f=null,g=!1,y,m=null,p=[],S=!1;this.setSize=function(b,A){a.setSize(b,A),o.setSize(b,A);for(let C=0;C<p.length;C++){let M=p[C];M.setSize&&M.setSize(b,A)}},this.setEffects=function(b){p=b,S=p.length>0&&p[0].isRenderPass===!0;let A=a.width,C=a.height;for(let M=0;M<p.length;M++){let T=p[M];T.setSize&&T.setSize(A,C)}},this.begin=function(b,A){if(g||b.toneMapping===mn&&p.length===0)return!1;if(m=A,A!==null){let C=A.width,M=A.height;(a.width!==C||a.height!==M)&&this.setSize(C,M)}return S===!1&&b.setRenderTarget(a),y=b.toneMapping,b.toneMapping=mn,!0},this.hasRenderPass=function(){return S},this.end=function(b,A){b.toneMapping=y,g=!0;let C=a,M=o;for(let T=0;T<p.length;T++){let x=p[T];if(x.enabled!==!1&&(x.render(b,M,C,A),x.needsSwap!==!1)){let E=C;C=M,M=E}}if(h!==b.outputColorSpace||f!==b.toneMapping){h=b.outputColorSpace,f=b.toneMapping,c.defines={},ot.getTransfer(h)===Tt&&(c.defines.SRGB_TRANSFER="");let T=YM[f];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=C.texture,b.setRenderTarget(m),b.render(u,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var A0=new vi,Af=new Cn(1,1),M0=new Vo,S0=new Ha,E0=new Jo,t0=[],i0=[],n0=new Float32Array(16),s0=new Float32Array(9),r0=new Float32Array(4);function to(t,e,i){let n=t[0];if(n<=0||n>0)return t;let s=e*i,r=t0[s];if(r===void 0&&(r=new Float32Array(s),t0[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=i,t[a].toArray(r,o)}return r}function Ei(t,e){if(t.length!==e.length)return!1;for(let i=0,n=t.length;i<n;i++)if(t[i]!==e[i])return!1;return!0}function Ti(t,e){for(let i=0,n=e.length;i<n;i++)t[i]=e[i]}function Hh(t,e){let i=i0[e];i===void 0&&(i=new Int32Array(e),i0[e]=i);for(let n=0;n!==e;++n)i[n]=t.allocateTextureUnit();return i}function KM(t,e){let i=this.cache;i[0]!==e&&(t.uniform1f(this.addr,e),i[0]=e)}function QM(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Ei(i,e))return;t.uniform2fv(this.addr,e),Ti(i,e)}}function ZM(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Ei(i,e))return;t.uniform3fv(this.addr,e),Ti(i,e)}}function JM(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Ei(i,e))return;t.uniform4fv(this.addr,e),Ti(i,e)}}function jM(t,e){let i=this.cache,n=e.elements;if(n===void 0){if(Ei(i,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ti(i,e)}else{if(Ei(i,n))return;r0.set(n),t.uniformMatrix2fv(this.addr,!1,r0),Ti(i,n)}}function $M(t,e){let i=this.cache,n=e.elements;if(n===void 0){if(Ei(i,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ti(i,e)}else{if(Ei(i,n))return;s0.set(n),t.uniformMatrix3fv(this.addr,!1,s0),Ti(i,n)}}function eS(t,e){let i=this.cache,n=e.elements;if(n===void 0){if(Ei(i,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ti(i,e)}else{if(Ei(i,n))return;n0.set(n),t.uniformMatrix4fv(this.addr,!1,n0),Ti(i,n)}}function tS(t,e){let i=this.cache;i[0]!==e&&(t.uniform1i(this.addr,e),i[0]=e)}function iS(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Ei(i,e))return;t.uniform2iv(this.addr,e),Ti(i,e)}}function nS(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Ei(i,e))return;t.uniform3iv(this.addr,e),Ti(i,e)}}function sS(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Ei(i,e))return;t.uniform4iv(this.addr,e),Ti(i,e)}}function rS(t,e){let i=this.cache;i[0]!==e&&(t.uniform1ui(this.addr,e),i[0]=e)}function aS(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Ei(i,e))return;t.uniform2uiv(this.addr,e),Ti(i,e)}}function oS(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Ei(i,e))return;t.uniform3uiv(this.addr,e),Ti(i,e)}}function lS(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Ei(i,e))return;t.uniform4uiv(this.addr,e),Ti(i,e)}}function cS(t,e,i){let n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(t.uniform1i(this.addr,s),n[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Af.compareFunction=i.isReversedDepthBuffer()?Lh:Ph,r=Af):r=A0,i.setTexture2D(e||r,s)}function hS(t,e,i){let n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(t.uniform1i(this.addr,s),n[0]=s),i.setTexture3D(e||S0,s)}function uS(t,e,i){let n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(t.uniform1i(this.addr,s),n[0]=s),i.setTextureCube(e||E0,s)}function dS(t,e,i){let n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(t.uniform1i(this.addr,s),n[0]=s),i.setTexture2DArray(e||M0,s)}function fS(t){switch(t){case 5126:return KM;case 35664:return QM;case 35665:return ZM;case 35666:return JM;case 35674:return jM;case 35675:return $M;case 35676:return eS;case 5124:case 35670:return tS;case 35667:case 35671:return iS;case 35668:case 35672:return nS;case 35669:case 35673:return sS;case 5125:return rS;case 36294:return aS;case 36295:return oS;case 36296:return lS;case 35678:case 36198:case 36298:case 36306:case 35682:return cS;case 35679:case 36299:case 36307:return hS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return dS}}function pS(t,e){t.uniform1fv(this.addr,e)}function mS(t,e){let i=to(e,this.size,2);t.uniform2fv(this.addr,i)}function gS(t,e){let i=to(e,this.size,3);t.uniform3fv(this.addr,i)}function vS(t,e){let i=to(e,this.size,4);t.uniform4fv(this.addr,i)}function xS(t,e){let i=to(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,i)}function yS(t,e){let i=to(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,i)}function _S(t,e){let i=to(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,i)}function AS(t,e){t.uniform1iv(this.addr,e)}function MS(t,e){t.uniform2iv(this.addr,e)}function SS(t,e){t.uniform3iv(this.addr,e)}function ES(t,e){t.uniform4iv(this.addr,e)}function TS(t,e){t.uniform1uiv(this.addr,e)}function wS(t,e){t.uniform2uiv(this.addr,e)}function bS(t,e){t.uniform3uiv(this.addr,e)}function CS(t,e){t.uniform4uiv(this.addr,e)}function RS(t,e,i){let n=this.cache,s=e.length,r=Hh(i,s);Ei(n,r)||(t.uniform1iv(this.addr,r),Ti(n,r));let a;this.type===t.SAMPLER_2D_SHADOW?a=Af:a=A0;for(let o=0;o!==s;++o)i.setTexture2D(e[o]||a,r[o])}function DS(t,e,i){let n=this.cache,s=e.length,r=Hh(i,s);Ei(n,r)||(t.uniform1iv(this.addr,r),Ti(n,r));for(let a=0;a!==s;++a)i.setTexture3D(e[a]||S0,r[a])}function IS(t,e,i){let n=this.cache,s=e.length,r=Hh(i,s);Ei(n,r)||(t.uniform1iv(this.addr,r),Ti(n,r));for(let a=0;a!==s;++a)i.setTextureCube(e[a]||E0,r[a])}function PS(t,e,i){let n=this.cache,s=e.length,r=Hh(i,s);Ei(n,r)||(t.uniform1iv(this.addr,r),Ti(n,r));for(let a=0;a!==s;++a)i.setTexture2DArray(e[a]||M0,r[a])}function LS(t){switch(t){case 5126:return pS;case 35664:return mS;case 35665:return gS;case 35666:return vS;case 35674:return xS;case 35675:return yS;case 35676:return _S;case 5124:case 35670:return AS;case 35667:case 35671:return MS;case 35668:case 35672:return SS;case 35669:case 35673:return ES;case 5125:return TS;case 36294:return wS;case 36295:return bS;case 36296:return CS;case 35678:case 36198:case 36298:case 36306:case 35682:return RS;case 35679:case 36299:case 36307:return DS;case 35680:case 36300:case 36308:case 36293:return IS;case 36289:case 36303:case 36311:case 36292:return PS}}var Mf=class{constructor(e,i,n){this.id=e,this.addr=n,this.cache=[],this.type=i.type,this.setValue=fS(i.type)}},Sf=class{constructor(e,i,n){this.id=e,this.addr=n,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=LS(i.type)}},Ef=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,i[o.id],n)}}},yf=/(\w+)(\])?(\[|\.)?/g;function a0(t,e){t.seq.push(e),t.map[e.id]=e}function US(t,e,i){let n=t.name,s=n.length;for(yf.lastIndex=0;;){let r=yf.exec(n),a=yf.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){a0(i,c===void 0?new Mf(o,t,e):new Sf(o,t,e));break}else{let d=i.map[o];d===void 0&&(d=new Ef(o),a0(i,d)),i=d}}}var eo=class{constructor(e,i){this.seq=[],this.map={};let n=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(i,a),l=e.getUniformLocation(i,o.name);US(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,i,n,s){let r=this.map[i];r!==void 0&&r.setValue(e,n,s)}setOptional(e,i,n){let s=i[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,i,n,s){for(let r=0,a=i.length;r!==a;++r){let o=i[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,i){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in i&&n.push(a)}return n}};function o0(t,e,i){let n=t.createShader(e);return t.shaderSource(n,i),t.compileShader(n),n}var BS=37297,FS=0;function NS(t,e){let i=t.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,i.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${i[a]}`)}return n.join(`
`)}var l0=new Ye;function OS(t){ot._getMatrix(l0,ot.workingColorSpace,t);let e=`mat3( ${l0.elements.map(i=>i.toFixed(4))} )`;switch(ot.getTransfer(t)){case Go:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function c0(t,e,i){let n=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return i.toUpperCase()+`

`+r+`

`+NS(t.getShaderSource(e),o)}else return r}function kS(t,e){let i=OS(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var GS={[Yd]:"Linear",[qd]:"Reinhard",[Kd]:"Cineon",[Qd]:"ACESFilmic",[Jd]:"AgX",[jd]:"Neutral",[Zd]:"Custom"};function HS(t,e){let i=GS[e];return i===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Fh=new I;function zS(){ot.getLuminanceCoefficients(Fh);let t=Fh.x.toFixed(4),e=Fh.y.toFixed(4),i=Fh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VS(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function WS(t){let e=[];for(let i in t){let n=t[i];n!==!1&&e.push("#define "+i+" "+n)}return e.join(`
`)}function XS(t,e){let i={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),i[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return i}function gl(t){return t!==""}function h0(t,e){let i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function u0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var YS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tf(t){return t.replace(YS,KS)}var qS=new Map;function KS(t,e){let i=Je[e];if(i===void 0){let n=qS.get(e);if(n!==void 0)i=Je[n],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Tf(i)}var QS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d0(t){return t.replace(QS,ZS)}function ZS(t,e,i,n){let s="";for(let r=parseInt(e);r<parseInt(i);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function f0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var JS={[sl]:"SHADOWMAP_TYPE_PCF",[Za]:"SHADOWMAP_TYPE_VSM"};function jS(t){return JS[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $S={[dr]:"ENVMAP_TYPE_CUBE",[Yr]:"ENVMAP_TYPE_CUBE",[rl]:"ENVMAP_TYPE_CUBE_UV"};function eE(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":$S[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var tE={[Yr]:"ENVMAP_MODE_REFRACTION"};function iE(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":tE[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var nE={[Xd]:"ENVMAP_BLENDING_MULTIPLY",[Lg]:"ENVMAP_BLENDING_MIX",[Ug]:"ENVMAP_BLENDING_ADD"};function sE(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":nE[t.combine]||"ENVMAP_BLENDING_NONE"}function rE(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let i=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:n,maxMip:i}}function aE(t,e,i,n){let s=t.getContext(),r=i.defines,a=i.vertexShader,o=i.fragmentShader,l=jS(i),c=eE(i),u=iE(i),d=sE(i),h=rE(i),f=VS(i),g=WS(r),y=s.createProgram(),m,p,S=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(gl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(gl).join(`
`),p.length>0&&(p+=`
`)):(m=[f0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),p=[f0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+u:"",i.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==mn?"#define TONE_MAPPING":"",i.toneMapping!==mn?Je.tonemapping_pars_fragment:"",i.toneMapping!==mn?HS("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,kS("linearToOutputTexel",i.outputColorSpace),zS(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(gl).join(`
`)),a=Tf(a),a=h0(a,i),a=u0(a,i),o=Tf(o),o=h0(o,i),o=u0(o,i),a=d0(a),o=d0(o),i.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",i.glslVersion===lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=S+m+a,A=S+p+o,C=o0(s,s.VERTEX_SHADER,b),M=o0(s,s.FRAGMENT_SHADER,A);s.attachShader(y,C),s.attachShader(y,M),i.index0AttributeName!==void 0?s.bindAttribLocation(y,0,i.index0AttributeName):i.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function T(P){if(t.debug.checkShaderErrors){let R=s.getProgramInfoLog(y)||"",D=s.getShaderInfoLog(C)||"",B=s.getShaderInfoLog(M)||"",U=R.trim(),G=D.trim(),k=B.trim(),Y=!0,j=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,y,C,M);else{let te=c0(s,C,"vertex"),ne=c0(s,M,"fragment");He("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+te+`
`+ne)}else U!==""?Oe("WebGLProgram: Program Info Log:",U):(G===""||k==="")&&(j=!1);j&&(P.diagnostics={runnable:Y,programLog:U,vertexShader:{log:G,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(C),s.deleteShader(M),x=new eo(s,y),E=XS(s,y)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(y,BS)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=FS++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=M,this}var oE=0,wf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,n){let s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let i=this.materialCache.get(e);for(let n of i)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let i=this.materialCache,n=i.get(e);return n===void 0&&(n=new Set,i.set(e,n)),n}_getShaderStage(e){let i=this.shaderCache,n=i.get(e);return n===void 0&&(n=new bf(e),i.set(e,n)),n}},bf=class{constructor(e){this.id=oE++,this.code=e,this.usedTimes=0}};function lE(t){return t===Ls||t===dl||t===fl}function cE(t,e,i,n,s,r){let a=new Wo,o=new wf,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,E,L,P,R,D){let B=P.fog,U=R.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=e.get(x.envMap||G,k),j=Y&&Y.mapping===rl?Y.image.height:null,te=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Oe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let ne=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,oe=ne!==void 0?ne.length:0,Ge=0;U.morphAttributes.position!==void 0&&(Ge=1),U.morphAttributes.normal!==void 0&&(Ge=2),U.morphAttributes.color!==void 0&&(Ge=3);let xt,it,Q,se;if(te){let Ee=as[te];xt=Ee.vertexShader,it=Ee.fragmentShader}else{xt=x.vertexShader,it=x.fragmentShader;let Ee=o.getVertexShaderStage(x),ei=o.getFragmentShaderStage(x);o.update(x,Ee,ei),Q=Ee.id,se=ei.id}let ee=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),Ve=R.isInstancedMesh===!0,Fe=R.isBatchedMesh===!0,Yt=!!x.map,nt=!!x.matcap,At=!!Y,ht=!!x.aoMap,at=!!x.lightMap,jt=!!x.bumpMap&&x.wireframe===!1,ri=!!x.normalMap,Ci=!!x.displacementMap,Pi=!!x.emissiveMap,$t=!!x.metalnessMap,pi=!!x.roughnessMap,N=x.anisotropy>0,nn=x.clearcoat>0,bt=x.dispersion>0,w=x.iridescence>0,v=x.sheen>0,H=x.transmission>0,W=N&&!!x.anisotropyMap,q=nn&&!!x.clearcoatMap,re=nn&&!!x.clearcoatNormalMap,he=nn&&!!x.clearcoatRoughnessMap,K=w&&!!x.iridescenceMap,J=w&&!!x.iridescenceThicknessMap,ue=v&&!!x.sheenColorMap,De=v&&!!x.sheenRoughnessMap,pe=!!x.specularMap,de=!!x.specularColorMap,Ne=!!x.specularIntensityMap,ke=H&&!!x.transmissionMap,Ke=H&&!!x.thicknessMap,F=!!x.gradientMap,ce=!!x.alphaMap,Z=x.alphaTest>0,fe=!!x.alphaHash,xe=!!x.extensions,$=mn;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&($=t.toneMapping);let Ce={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:xt,fragmentShader:it,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Fe,batchingColor:Fe&&R._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&R.instanceColor!==null,instancingMorph:Ve&&R.morphTexture!==null,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Yt,matcap:nt,envMap:At,envMapMode:At&&Y.mapping,envMapCubeUVHeight:j,aoMap:ht,lightMap:at,bumpMap:jt,normalMap:ri,displacementMap:Ci,emissiveMap:Pi,normalMapObjectSpace:ri&&x.normalMapType===Fg,normalMapTangentSpace:ri&&x.normalMapType===of,packedNormalMap:ri&&x.normalMapType===of&&lE(x.normalMap.format),metalnessMap:$t,roughnessMap:pi,anisotropy:N,anisotropyMap:W,clearcoat:nn,clearcoatMap:q,clearcoatNormalMap:re,clearcoatRoughnessMap:he,dispersion:bt,iridescence:w,iridescenceMap:K,iridescenceThicknessMap:J,sheen:v,sheenColorMap:ue,sheenRoughnessMap:De,specularMap:pe,specularColorMap:de,specularIntensityMap:Ne,transmission:H,transmissionMap:ke,thicknessMap:Ke,gradientMap:F,opaque:x.transparent===!1&&x.blending===bs&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:Z,alphaHash:fe,combine:x.combine,mapUv:Yt&&g(x.map.channel),aoMapUv:ht&&g(x.aoMap.channel),lightMapUv:at&&g(x.lightMap.channel),bumpMapUv:jt&&g(x.bumpMap.channel),normalMapUv:ri&&g(x.normalMap.channel),displacementMapUv:Ci&&g(x.displacementMap.channel),emissiveMapUv:Pi&&g(x.emissiveMap.channel),metalnessMapUv:$t&&g(x.metalnessMap.channel),roughnessMapUv:pi&&g(x.roughnessMap.channel),anisotropyMapUv:W&&g(x.anisotropyMap.channel),clearcoatMapUv:q&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:De&&g(x.sheenRoughnessMap.channel),specularMapUv:pe&&g(x.specularMap.channel),specularColorMapUv:de&&g(x.specularColorMap.channel),specularIntensityMapUv:Ne&&g(x.specularIntensityMap.channel),transmissionMapUv:ke&&g(x.transmissionMap.channel),thicknessMapUv:Ke&&g(x.thicknessMap.channel),alphaMapUv:ce&&g(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ri||N),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!U.attributes.uv&&(Yt||ce),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&ri===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Ge,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:$,decodeVideoTexture:Yt&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===Tt,decodeVideoTextureEmissive:Pi&&x.emissiveMap.isVideoTexture===!0&&ot.getTransfer(x.emissiveMap.colorSpace)===Tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===li,flipSided:x.side===xi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&x.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function m(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)E.push(L),E.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(p(E,x),S(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function b(x){let E=f[x.type],L;if(E){let P=as[E];L=Kg.clone(P.uniforms)}else L=x.uniforms;return L}function A(x,E){let L=u.get(E);return L!==void 0?++L.usedTimes:(L=new aE(t,E,x,s),c.push(L),u.set(E,L)),L}function C(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function M(x){o.remove(x)}function T(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:b,acquireProgram:A,releaseProgram:C,releaseShaderCache:M,programs:c,dispose:T}}function hE(){let t=new WeakMap;function e(a){return t.has(a)}function i(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function n(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:i,remove:n,update:s,dispose:r}}function uE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function p0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function m0(){let t=[],e=0,i=[],n=[],s=[];function r(){e=0,i.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,y,m,p){let S=t[e];return S===void 0?(S={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},t[e]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=g,S.materialVariant=a(h),S.groupOrder=y,S.renderOrder=h.renderOrder,S.z=m,S.group=p),e++,S}function l(h,f,g,y,m,p){let S=o(h,f,g,y,m,p);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):i.push(S)}function c(h,f,g,y,m,p){let S=o(h,f,g,y,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):i.unshift(S)}function u(h,f,g){i.length>1&&i.sort(h||uE),n.length>1&&n.sort(f||p0),s.length>1&&s.sort(f||p0),g&&(i.reverse(),n.reverse(),s.reverse())}function d(){for(let h=e,f=t.length;h<f;h++){let g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function dE(){let t=new WeakMap;function e(n,s){let r=t.get(n),a;return r===void 0?(a=new m0,t.set(n,[a])):s>=r.length?(a=new m0,r.push(a)):a=r[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}function fE(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new I,color:new Re};break;case"SpotLight":i={position:new I,direction:new I,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new I,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new I,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=i,i}}}function pE(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=i,i}}}var mE=0;function gE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function vE(t){let e=new fE,i=pE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Mt,a=new Mt;function o(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,S=0,b=0,A=0,C=0,M=0,T=0;c.sort(gE);for(let E=0,L=c.length;E<L;E++){let P=c[E],R=P.color,D=P.intensity,B=P.distance,U=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ls?U=P.shadow.map.texture:U=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=R.r*D,d+=R.g*D,h+=R.b*D;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],D);T++}else if(P.isDirectionalLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let k=P.shadow,Y=i.get(P);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=P.shadow.matrix,S++}n.directional[f]=G,f++}else if(P.isSpotLight){let G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(R).multiplyScalar(D),G.distance=B,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[y]=G;let k=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,k.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[y]=k.matrix,P.castShadow){let Y=i.get(P);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,n.spotShadow[y]=Y,n.spotShadowMap[y]=U,A++}y++}else if(P.isRectAreaLight){let G=e.get(P);G.color.copy(R).multiplyScalar(D),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let k=P.shadow,Y=i.get(P);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,Y.shadowCameraNear=k.camera.near,Y.shadowCameraFar=k.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=G,g++}else if(P.isHemisphereLight){let G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(D),G.groundColor.copy(P.groundColor).multiplyScalar(D),n.hemi[p]=G,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let x=n.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==y||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==S||x.numPointShadows!==b||x.numSpotShadows!==A||x.numSpotMaps!==C||x.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=A+C-M,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,x.directionalLength=f,x.pointLength=g,x.spotLength=y,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=S,x.numPointShadows=b,x.numSpotShadows=A,x.numSpotMaps=C,x.numLightProbes=T,n.version=mE++)}function l(c,u){let d=0,h=0,f=0,g=0,y=0,m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let b=c[p];if(b.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(b.isSpotLight){let A=n.spot[f];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let A=n.rectArea[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let A=n.point[h];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){let A=n.hemi[y];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:n}}function g0(t){let e=new vE(t),i=[],n=[],s=[];function r(h){d.camera=h,i.length=0,n.length=0,s.length=0}function a(h){i.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(i)}function u(h){e.setupView(i,h)}let d={lightsArray:i,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function xE(t){let e=new WeakMap;function i(s,r=0){let a=e.get(s),o;return a===void 0?(o=new g0(t),e.set(s,[o])):r>=a.length?(o=new g0(t),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:i,dispose:n}}var yE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_E=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,AE=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],ME=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],v0=new Mt,ml=new I,_f=new I;function SE(t,e,i){let n=new Qo,s=new le,r=new le,a=new ut,o=new Qa,l=new Bc,c={},u=i.maxTextureSize,d={[kn]:xi,[xi]:kn,[li]:li},h=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:yE,fragmentShader:_E}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ut;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ii(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let p=this.type;this.render=function(M,T,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===pg&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=sl);let E=t.getRenderTarget(),L=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),R=t.state;R.setBlending(tt),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let D=p!==this.type;D&&T.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(U=>U.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,U=M.length;B<U;B++){let G=M[B],k=G.shadow;if(k===void 0){Oe("WebGLShadowMap:",G,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let Y=k.getFrameExtents();s.multiply(Y),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,k.mapSize.y=r.y));let j=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=j,k.map===null||D===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Za){if(G.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ze(s.x,s.y,{format:Ls,type:sn,minFilter:kt,magFilter:kt,generateMipmaps:!1}),k.map.texture.name=G.name+".shadowMap",k.map.depthTexture=new Cn(s.x,s.y,yi),k.map.depthTexture.name=G.name+".shadowMapDepth",k.map.depthTexture.format=jn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=wt,k.map.depthTexture.magFilter=wt}else G.isPointLight?(k.map=new Oh(s.x),k.map.depthTexture=new Lc(s.x,Gn)):(k.map=new ze(s.x,s.y),k.map.depthTexture=new Cn(s.x,s.y,Gn)),k.map.depthTexture.name=G.name+".shadowMap",k.map.depthTexture.format=jn,this.type===sl?(k.map.depthTexture.compareFunction=j?Lh:Ph,k.map.depthTexture.minFilter=kt,k.map.depthTexture.magFilter=kt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=wt,k.map.depthTexture.magFilter=wt);k.camera.updateProjectionMatrix()}let te=k.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<te;ne++){if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,ne),t.clear();else{ne===0&&(t.setRenderTarget(k.map),t.clear());let oe=k.getViewport(ne);a.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),R.viewport(a)}if(G.isPointLight){let oe=k.camera,Ge=k.matrix,xt=G.distance||oe.far;xt!==oe.far&&(oe.far=xt,oe.updateProjectionMatrix()),ml.setFromMatrixPosition(G.matrixWorld),oe.position.copy(ml),_f.copy(oe.position),_f.add(AE[ne]),oe.up.copy(ME[ne]),oe.lookAt(_f),oe.updateMatrixWorld(),Ge.makeTranslation(-ml.x,-ml.y,-ml.z),v0.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(v0,oe.coordinateSystem,oe.reversedDepth)}else k.updateMatrices(G);n=k.getFrustum(),A(T,x,k.camera,G,this.type)}k.isPointLightShadow!==!0&&this.type===Za&&S(k,x),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(E,L,P)};function S(M,T){let x=e.update(y);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ze(s.x,s.y,{format:Ls,type:sn})),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(T,null,x,h,y,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(T,null,x,f,y,null)}function b(M,T,x,E){let L=null,P=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)L=P;else if(L=x.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let R=L.uuid,D=T.uuid,B=c[R];B===void 0&&(B={},c[R]=B);let U=B[D];U===void 0&&(U=L.clone(),B[D]=U,T.addEventListener("dispose",C)),L=U}if(L.visible=T.visible,L.wireframe=T.wireframe,E===Za?L.side=T.shadowSide!==null?T.shadowSide:T.side:L.side=T.shadowSide!==null?T.shadowSide:d[T.side],L.alphaMap=T.alphaMap,L.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,L.map=T.map,L.clipShadows=T.clipShadows,L.clippingPlanes=T.clippingPlanes,L.clipIntersection=T.clipIntersection,L.displacementMap=T.displacementMap,L.displacementScale=T.displacementScale,L.displacementBias=T.displacementBias,L.wireframeLinewidth=T.wireframeLinewidth,L.linewidth=T.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let R=t.properties.get(L);R.light=x}return L}function A(M,T,x,E,L){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&L===Za)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);let D=e.update(M),B=M.material;if(Array.isArray(B)){let U=D.groups;for(let G=0,k=U.length;G<k;G++){let Y=U[G],j=B[Y.materialIndex];if(j&&j.visible){let te=b(M,j,E,L);M.onBeforeShadow(t,M,T,x,D,te,Y),t.renderBufferDirect(x,null,D,te,M,Y),M.onAfterShadow(t,M,T,x,D,te,Y)}}}else if(B.visible){let U=b(M,B,E,L);M.onBeforeShadow(t,M,T,x,D,U,null),t.renderBufferDirect(x,null,D,U,M,null),M.onAfterShadow(t,M,T,x,D,U,null)}}let R=M.children;for(let D=0,B=R.length;D<B;D++)A(R[D],T,x,E,L)}function C(M){M.target.removeEventListener("dispose",C);for(let x in c){let E=c[x],L=M.target.uuid;L in E&&(E[L].dispose(),delete E[L])}}}function EE(t,e){function i(){let F=!1,ce=new ut,Z=null,fe=new ut(0,0,0,0);return{setMask:function(xe){Z!==xe&&!F&&(t.colorMask(xe,xe,xe,xe),Z=xe)},setLocked:function(xe){F=xe},setClear:function(xe,$,Ce,Ee,ei){ei===!0&&(xe*=Ee,$*=Ee,Ce*=Ee),ce.set(xe,$,Ce,Ee),fe.equals(ce)===!1&&(t.clearColor(xe,$,Ce,Ee),fe.copy(ce))},reset:function(){F=!1,Z=null,fe.set(-1,0,0,0)}}}function n(){let F=!1,ce=!1,Z=null,fe=null,xe=null;return{setReversed:function($){if(ce!==$){let Ce=e.get("EXT_clip_control");$?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ce=$;let Ee=xe;xe=null,this.setClear(Ee)}},getReversed:function(){return ce},setTest:function($){$?ee(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function($){Z!==$&&!F&&(t.depthMask($),Z=$)},setFunc:function($){if(ce&&($=Yg[$]),fe!==$){switch($){case Ba:t.depthFunc(t.NEVER);break;case nr:t.depthFunc(t.ALWAYS);break;case Hr:t.depthFunc(t.LESS);break;case Cs:t.depthFunc(t.LEQUAL);break;case Rs:t.depthFunc(t.EQUAL);break;case Fa:t.depthFunc(t.GEQUAL);break;case Na:t.depthFunc(t.GREATER);break;case sr:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=$}},setLocked:function($){F=$},setClear:function($){xe!==$&&(xe=$,ce&&($=1-$),t.clearDepth($))},reset:function(){F=!1,Z=null,fe=null,xe=null,ce=!1}}}function s(){let F=!1,ce=null,Z=null,fe=null,xe=null,$=null,Ce=null,Ee=null,ei=null;return{setTest:function(Nt){F||(Nt?ee(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(Nt){ce!==Nt&&!F&&(t.stencilMask(Nt),ce=Nt)},setFunc:function(Nt,qn,Kn){(Z!==Nt||fe!==qn||xe!==Kn)&&(t.stencilFunc(Nt,qn,Kn),Z=Nt,fe=qn,xe=Kn)},setOp:function(Nt,qn,Kn){($!==Nt||Ce!==qn||Ee!==Kn)&&(t.stencilOp(Nt,qn,Kn),$=Nt,Ce=qn,Ee=Kn)},setLocked:function(Nt){F=Nt},setClear:function(Nt){ei!==Nt&&(t.clearStencil(Nt),ei=Nt)},reset:function(){F=!1,ce=null,Z=null,fe=null,xe=null,$=null,Ce=null,Ee=null,ei=null}}}let r=new i,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,b=null,A=null,C=null,M=null,T=null,x=new Re(0,0,0),E=0,L=!1,P=null,R=null,D=null,B=null,U=null,G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Y=0,j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=Y>=1):j.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=Y>=2);let te=null,ne={},oe=t.getParameter(t.SCISSOR_BOX),Ge=t.getParameter(t.VIEWPORT),xt=new ut().fromArray(oe),it=new ut().fromArray(Ge);function Q(F,ce,Z,fe){let xe=new Uint8Array(4),$=t.createTexture();t.bindTexture(F,$),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<Z;Ce++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(ce+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return $}let se={};se[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(t.DEPTH_TEST),a.setFunc(Cs),jt(!1),ri(zd),ee(t.CULL_FACE),ht(tt);function ee(F){u[F]!==!0&&(t.enable(F),u[F]=!0)}function be(F){u[F]!==!1&&(t.disable(F),u[F]=!1)}function Ve(F,ce){return h[F]!==ce?(t.bindFramebuffer(F,ce),h[F]=ce,F===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ce),F===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Fe(F,ce){let Z=g,fe=!1;if(F){Z=f.get(ce),Z===void 0&&(Z=[],f.set(ce,Z));let xe=F.textures;if(Z.length!==xe.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let $=0,Ce=xe.length;$<Ce;$++)Z[$]=t.COLOR_ATTACHMENT0+$;Z.length=xe.length,fe=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,fe=!0);fe&&t.drawBuffers(Z)}function Yt(F){return y!==F?(t.useProgram(F),y=F,!0):!1}let nt={[ir]:t.FUNC_ADD,[gg]:t.FUNC_SUBTRACT,[vg]:t.FUNC_REVERSE_SUBTRACT};nt[xg]=t.MIN,nt[yg]=t.MAX;let At={[_g]:t.ZERO,[Ag]:t.ONE,[Mg]:t.SRC_COLOR,[Ec]:t.SRC_ALPHA,[Cg]:t.SRC_ALPHA_SATURATE,[wg]:t.DST_COLOR,[Eg]:t.DST_ALPHA,[Sg]:t.ONE_MINUS_SRC_COLOR,[Tc]:t.ONE_MINUS_SRC_ALPHA,[bg]:t.ONE_MINUS_DST_COLOR,[Tg]:t.ONE_MINUS_DST_ALPHA,[Rg]:t.CONSTANT_COLOR,[Dg]:t.ONE_MINUS_CONSTANT_COLOR,[Ig]:t.CONSTANT_ALPHA,[Pg]:t.ONE_MINUS_CONSTANT_ALPHA};function ht(F,ce,Z,fe,xe,$,Ce,Ee,ei,Nt){if(F===tt){m===!0&&(be(t.BLEND),m=!1);return}if(m===!1&&(ee(t.BLEND),m=!0),F!==mg){if(F!==p||Nt!==L){if((S!==ir||C!==ir)&&(t.blendEquation(t.FUNC_ADD),S=ir,C=ir),Nt)switch(F){case bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ki:t.blendFunc(t.ONE,t.ONE);break;case Vd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:He("WebGLState: Invalid blending: ",F);break}else switch(F){case bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ki:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Vd:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wd:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",F);break}b=null,A=null,M=null,T=null,x.set(0,0,0),E=0,p=F,L=Nt}return}xe=xe||ce,$=$||Z,Ce=Ce||fe,(ce!==S||xe!==C)&&(t.blendEquationSeparate(nt[ce],nt[xe]),S=ce,C=xe),(Z!==b||fe!==A||$!==M||Ce!==T)&&(t.blendFuncSeparate(At[Z],At[fe],At[$],At[Ce]),b=Z,A=fe,M=$,T=Ce),(Ee.equals(x)===!1||ei!==E)&&(t.blendColor(Ee.r,Ee.g,Ee.b,ei),x.copy(Ee),E=ei),p=F,L=!1}function at(F,ce){F.side===li?be(t.CULL_FACE):ee(t.CULL_FACE);let Z=F.side===xi;ce&&(Z=!Z),jt(Z),F.blending===bs&&F.transparent===!1?ht(tt):ht(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let fe=F.stencilWrite;o.setTest(fe),fe&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Pi(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function jt(F){P!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),P=F)}function ri(F){F!==dg?(ee(t.CULL_FACE),F!==R&&(F===zd?t.cullFace(t.BACK):F===fg?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),R=F}function Ci(F){F!==D&&(k&&t.lineWidth(F),D=F)}function Pi(F,ce,Z){F?(ee(t.POLYGON_OFFSET_FILL),(B!==ce||U!==Z)&&(B=ce,U=Z,a.getReversed()&&(ce=-ce),t.polygonOffset(ce,Z))):be(t.POLYGON_OFFSET_FILL)}function $t(F){F?ee(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function pi(F){F===void 0&&(F=t.TEXTURE0+G-1),te!==F&&(t.activeTexture(F),te=F)}function N(F,ce,Z){Z===void 0&&(te===null?Z=t.TEXTURE0+G-1:Z=te);let fe=ne[Z];fe===void 0&&(fe={type:void 0,texture:void 0},ne[Z]=fe),(fe.type!==F||fe.texture!==ce)&&(te!==Z&&(t.activeTexture(Z),te=Z),t.bindTexture(F,ce||se[F]),fe.type=F,fe.texture=ce)}function nn(){let F=ne[te];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function bt(){try{t.compressedTexImage2D(...arguments)}catch(F){He("WebGLState:",F)}}function w(){try{t.compressedTexImage3D(...arguments)}catch(F){He("WebGLState:",F)}}function v(){try{t.texSubImage2D(...arguments)}catch(F){He("WebGLState:",F)}}function H(){try{t.texSubImage3D(...arguments)}catch(F){He("WebGLState:",F)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(F){He("WebGLState:",F)}}function q(){try{t.compressedTexSubImage3D(...arguments)}catch(F){He("WebGLState:",F)}}function re(){try{t.texStorage2D(...arguments)}catch(F){He("WebGLState:",F)}}function he(){try{t.texStorage3D(...arguments)}catch(F){He("WebGLState:",F)}}function K(){try{t.texImage2D(...arguments)}catch(F){He("WebGLState:",F)}}function J(){try{t.texImage3D(...arguments)}catch(F){He("WebGLState:",F)}}function ue(F){return d[F]!==void 0?d[F]:t.getParameter(F)}function De(F,ce){d[F]!==ce&&(t.pixelStorei(F,ce),d[F]=ce)}function pe(F){xt.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),xt.copy(F))}function de(F){it.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),it.copy(F))}function Ne(F,ce){let Z=c.get(ce);Z===void 0&&(Z=new WeakMap,c.set(ce,Z));let fe=Z.get(F);fe===void 0&&(fe=t.getUniformBlockIndex(ce,F.name),Z.set(F,fe))}function ke(F,ce){let fe=c.get(ce).get(F);l.get(ce)!==fe&&(t.uniformBlockBinding(ce,fe,F.__bindingPointIndex),l.set(ce,fe))}function Ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},te=null,ne={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,b=null,A=null,C=null,M=null,T=null,x=new Re(0,0,0),E=0,L=!1,P=null,R=null,D=null,B=null,U=null,xt.set(0,0,t.canvas.width,t.canvas.height),it.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:be,bindFramebuffer:Ve,drawBuffers:Fe,useProgram:Yt,setBlending:ht,setMaterial:at,setFlipSided:jt,setCullFace:ri,setLineWidth:Ci,setPolygonOffset:Pi,setScissorTest:$t,activeTexture:pi,bindTexture:N,unbindTexture:nn,compressedTexImage2D:bt,compressedTexImage3D:w,texImage2D:K,texImage3D:J,pixelStorei:De,getParameter:ue,updateUBOMapping:Ne,uniformBlockBinding:ke,texStorage2D:re,texStorage3D:he,texSubImage2D:v,texSubImage3D:H,compressedTexSubImage2D:W,compressedTexSubImage3D:q,scissor:pe,viewport:de,reset:Ke}}function TE(t,e,i,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,v){return g?new OffscreenCanvas(w,v):zo("canvas")}function m(w,v,H){let W=1,q=bt(w);if((q.width>H||q.height>H)&&(W=H/Math.max(q.width,q.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let re=Math.floor(W*q.width),he=Math.floor(W*q.height);h===void 0&&(h=y(re,he));let K=v?y(re,he):h;return K.width=re,K.height=he,K.getContext("2d").drawImage(w,0,0,re,he),Oe("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+re+"x"+he+")."),K}else return"data"in w&&Oe("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),w;return w}function p(w){return w.generateMipmaps}function S(w){t.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function A(w,v,H,W,q,re=!1){if(w!==null){if(t[w]!==void 0)return t[w];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let he;W&&(he=e.get("EXT_texture_norm16"),he||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=v;if(v===t.RED&&(H===t.FLOAT&&(K=t.R32F),H===t.HALF_FLOAT&&(K=t.R16F),H===t.UNSIGNED_BYTE&&(K=t.R8),H===t.UNSIGNED_SHORT&&he&&(K=he.R16_EXT),H===t.SHORT&&he&&(K=he.R16_SNORM_EXT)),v===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(K=t.R8UI),H===t.UNSIGNED_SHORT&&(K=t.R16UI),H===t.UNSIGNED_INT&&(K=t.R32UI),H===t.BYTE&&(K=t.R8I),H===t.SHORT&&(K=t.R16I),H===t.INT&&(K=t.R32I)),v===t.RG&&(H===t.FLOAT&&(K=t.RG32F),H===t.HALF_FLOAT&&(K=t.RG16F),H===t.UNSIGNED_BYTE&&(K=t.RG8),H===t.UNSIGNED_SHORT&&he&&(K=he.RG16_EXT),H===t.SHORT&&he&&(K=he.RG16_SNORM_EXT)),v===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(K=t.RG8UI),H===t.UNSIGNED_SHORT&&(K=t.RG16UI),H===t.UNSIGNED_INT&&(K=t.RG32UI),H===t.BYTE&&(K=t.RG8I),H===t.SHORT&&(K=t.RG16I),H===t.INT&&(K=t.RG32I)),v===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(K=t.RGB8UI),H===t.UNSIGNED_SHORT&&(K=t.RGB16UI),H===t.UNSIGNED_INT&&(K=t.RGB32UI),H===t.BYTE&&(K=t.RGB8I),H===t.SHORT&&(K=t.RGB16I),H===t.INT&&(K=t.RGB32I)),v===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),H===t.UNSIGNED_INT&&(K=t.RGBA32UI),H===t.BYTE&&(K=t.RGBA8I),H===t.SHORT&&(K=t.RGBA16I),H===t.INT&&(K=t.RGBA32I)),v===t.RGB&&(H===t.UNSIGNED_SHORT&&he&&(K=he.RGB16_EXT),H===t.SHORT&&he&&(K=he.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),v===t.RGBA){let J=re?Go:ot.getTransfer(q);H===t.FLOAT&&(K=t.RGBA32F),H===t.HALF_FLOAT&&(K=t.RGBA16F),H===t.UNSIGNED_BYTE&&(K=J===Tt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&he&&(K=he.RGBA16_EXT),H===t.SHORT&&he&&(K=he.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function C(w,v){let H;return w?v===null||v===Gn||v===fr?H=t.DEPTH24_STENCIL8:v===yi?H=t.DEPTH32F_STENCIL8:v===Ja&&(H=t.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Gn||v===fr?H=t.DEPTH_COMPONENT24:v===yi?H=t.DEPTH_COMPONENT32F:v===Ja&&(H=t.DEPTH_COMPONENT16),H}function M(w,v){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==wt&&w.minFilter!==kt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function T(w){let v=w.target;v.removeEventListener("dispose",T),E(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function x(w){let v=w.target;v.removeEventListener("dispose",x),P(v)}function E(w){let v=n.get(w);if(v.__webglInit===void 0)return;let H=w.source,W=f.get(H);if(W){let q=W[v.__cacheKey];q.usedTimes--,q.usedTimes===0&&L(w),Object.keys(W).length===0&&f.delete(H)}n.remove(w)}function L(w){let v=n.get(w);t.deleteTexture(v.__webglTexture);let H=w.source,W=f.get(H);delete W[v.__cacheKey],a.memory.textures--}function P(w){let v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let q=0;q<v.__webglFramebuffer[W].length;q++)t.deleteFramebuffer(v.__webglFramebuffer[W][q]);else t.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)t.deleteFramebuffer(v.__webglFramebuffer[W]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let H=w.textures;for(let W=0,q=H.length;W<q;W++){let re=n.get(H[W]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(H[W])}n.remove(w)}let R=0;function D(){R=0}function B(){return R}function U(w){R=w}function G(){let w=R;return w>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function k(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function Y(w,v){let H=n.get(w);if(w.isVideoTexture&&N(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){let W=w.image;if(W===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{be(H,w,v);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+v)}function j(w,v){let H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){be(H,w,v);return}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+v)}function te(w,v){let H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){be(H,w,v);return}i.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+v)}function ne(w,v){let H=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&H.__version!==w.version){Ve(H,w,v);return}i.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+v)}let oe={[rr]:t.REPEAT,[Fn]:t.CLAMP_TO_EDGE,[wc]:t.MIRRORED_REPEAT},Ge={[wt]:t.NEAREST,[Bg]:t.NEAREST_MIPMAP_NEAREST,[al]:t.NEAREST_MIPMAP_LINEAR,[kt]:t.LINEAR,[Qc]:t.LINEAR_MIPMAP_NEAREST,[ns]:t.LINEAR_MIPMAP_LINEAR},xt={[Ng]:t.NEVER,[zg]:t.ALWAYS,[Og]:t.LESS,[Ph]:t.LEQUAL,[kg]:t.EQUAL,[Lh]:t.GEQUAL,[Gg]:t.GREATER,[Hg]:t.NOTEQUAL};function it(w,v){if(v.type===yi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===kt||v.magFilter===Qc||v.magFilter===al||v.magFilter===ns||v.minFilter===kt||v.minFilter===Qc||v.minFilter===al||v.minFilter===ns)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,oe[v.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,oe[v.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,oe[v.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,Ge[v.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,Ge[v.minFilter]),v.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,xt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===wt||v.minFilter!==al&&v.minFilter!==ns||v.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Q(w,v){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",T));let W=v.source,q=f.get(W);q===void 0&&(q={},f.set(W,q));let re=k(v);if(re!==w.__cacheKey){q[re]===void 0&&(q[re]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),q[re].usedTimes++;let he=q[w.__cacheKey];he!==void 0&&(q[w.__cacheKey].usedTimes--,he.usedTimes===0&&L(v)),w.__cacheKey=re,w.__webglTexture=q[re].texture}return H}function se(w,v,H){return Math.floor(Math.floor(w/H)/v)}function ee(w,v,H,W){let re=w.updateRanges;if(re.length===0)i.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,H,W,v.data);else{re.sort((De,pe)=>De.start-pe.start);let he=0;for(let De=1;De<re.length;De++){let pe=re[he],de=re[De],Ne=pe.start+pe.count,ke=se(de.start,v.width,4),Ke=se(pe.start,v.width,4);de.start<=Ne+1&&ke===Ke&&se(de.start+de.count-1,v.width,4)===ke?pe.count=Math.max(pe.count,de.start+de.count-pe.start):(++he,re[he]=de)}re.length=he+1;let K=i.getParameter(t.UNPACK_ROW_LENGTH),J=i.getParameter(t.UNPACK_SKIP_PIXELS),ue=i.getParameter(t.UNPACK_SKIP_ROWS);i.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let De=0,pe=re.length;De<pe;De++){let de=re[De],Ne=Math.floor(de.start/4),ke=Math.ceil(de.count/4),Ke=Ne%v.width,F=Math.floor(Ne/v.width),ce=ke,Z=1;i.pixelStorei(t.UNPACK_SKIP_PIXELS,Ke),i.pixelStorei(t.UNPACK_SKIP_ROWS,F),i.texSubImage2D(t.TEXTURE_2D,0,Ke,F,ce,Z,H,W,v.data)}w.clearUpdateRanges(),i.pixelStorei(t.UNPACK_ROW_LENGTH,K),i.pixelStorei(t.UNPACK_SKIP_PIXELS,J),i.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function be(w,v,H){let W=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=t.TEXTURE_3D);let q=Q(w,v),re=v.source;i.bindTexture(W,w.__webglTexture,t.TEXTURE0+H);let he=n.get(re);if(re.version!==he.__version||q===!0){if(i.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let Z=ot.getPrimaries(ot.workingColorSpace),fe=v.colorSpace===gn?null:ot.getPrimaries(v.colorSpace),xe=v.colorSpace===gn||Z===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;i.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}i.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let J=m(v.image,!1,s.maxTextureSize);J=nn(v,J);let ue=r.convert(v.format,v.colorSpace),De=r.convert(v.type),pe=A(v.internalFormat,ue,De,v.normalized,v.colorSpace,v.isVideoTexture);it(W,v);let de,Ne=v.mipmaps,ke=v.isVideoTexture!==!0,Ke=he.__version===void 0||q===!0,F=re.dataReady,ce=M(v,J);if(v.isDepthTexture)pe=C(v.format===ss,v.type),Ke&&(ke?i.texStorage2D(t.TEXTURE_2D,1,pe,J.width,J.height):i.texImage2D(t.TEXTURE_2D,0,pe,J.width,J.height,0,ue,De,null));else if(v.isDataTexture)if(Ne.length>0){ke&&Ke&&i.texStorage2D(t.TEXTURE_2D,ce,pe,Ne[0].width,Ne[0].height);for(let Z=0,fe=Ne.length;Z<fe;Z++)de=Ne[Z],ke?F&&i.texSubImage2D(t.TEXTURE_2D,Z,0,0,de.width,de.height,ue,De,de.data):i.texImage2D(t.TEXTURE_2D,Z,pe,de.width,de.height,0,ue,De,de.data);v.generateMipmaps=!1}else ke?(Ke&&i.texStorage2D(t.TEXTURE_2D,ce,pe,J.width,J.height),F&&ee(v,J,ue,De)):i.texImage2D(t.TEXTURE_2D,0,pe,J.width,J.height,0,ue,De,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ke&&Ke&&i.texStorage3D(t.TEXTURE_2D_ARRAY,ce,pe,Ne[0].width,Ne[0].height,J.depth);for(let Z=0,fe=Ne.length;Z<fe;Z++)if(de=Ne[Z],v.format!==Gi)if(ue!==null)if(ke){if(F)if(v.layerUpdates.size>0){let xe=pf(de.width,de.height,v.format,v.type);for(let $ of v.layerUpdates){let Ce=de.data.subarray($*xe/de.data.BYTES_PER_ELEMENT,($+1)*xe/de.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,$,de.width,de.height,1,ue,Ce)}v.clearLayerUpdates()}else i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,de.width,de.height,J.depth,ue,de.data)}else i.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,pe,de.width,de.height,J.depth,0,de.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?F&&i.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,de.width,de.height,J.depth,ue,De,de.data):i.texImage3D(t.TEXTURE_2D_ARRAY,Z,pe,de.width,de.height,J.depth,0,ue,De,de.data)}else{ke&&Ke&&i.texStorage2D(t.TEXTURE_2D,ce,pe,Ne[0].width,Ne[0].height);for(let Z=0,fe=Ne.length;Z<fe;Z++)de=Ne[Z],v.format!==Gi?ue!==null?ke?F&&i.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,de.width,de.height,ue,de.data):i.compressedTexImage2D(t.TEXTURE_2D,Z,pe,de.width,de.height,0,de.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?F&&i.texSubImage2D(t.TEXTURE_2D,Z,0,0,de.width,de.height,ue,De,de.data):i.texImage2D(t.TEXTURE_2D,Z,pe,de.width,de.height,0,ue,De,de.data)}else if(v.isDataArrayTexture)if(ke){if(Ke&&i.texStorage3D(t.TEXTURE_2D_ARRAY,ce,pe,J.width,J.height,J.depth),F)if(v.layerUpdates.size>0){let Z=pf(J.width,J.height,v.format,v.type);for(let fe of v.layerUpdates){let xe=J.data.subarray(fe*Z/J.data.BYTES_PER_ELEMENT,(fe+1)*Z/J.data.BYTES_PER_ELEMENT);i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,J.width,J.height,1,ue,De,xe)}v.clearLayerUpdates()}else i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ue,De,J.data)}else i.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,J.width,J.height,J.depth,0,ue,De,J.data);else if(v.isData3DTexture)ke?(Ke&&i.texStorage3D(t.TEXTURE_3D,ce,pe,J.width,J.height,J.depth),F&&i.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ue,De,J.data)):i.texImage3D(t.TEXTURE_3D,0,pe,J.width,J.height,J.depth,0,ue,De,J.data);else if(v.isFramebufferTexture){if(Ke)if(ke)i.texStorage2D(t.TEXTURE_2D,ce,pe,J.width,J.height);else{let Z=J.width,fe=J.height;for(let xe=0;xe<ce;xe++)i.texImage2D(t.TEXTURE_2D,xe,pe,Z,fe,0,ue,De,null),Z>>=1,fe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){let Z=t.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),d.add(v),Z.onpaint=fe=>{let xe=fe.changedElements;for(let $ of d)xe.includes($.image)&&($.needsUpdate=!0)},Z.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,J);else{let xe=t.RGBA,$=t.RGBA,Ce=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,xe,$,Ce,J)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(ke&&Ke){let Z=bt(Ne[0]);i.texStorage2D(t.TEXTURE_2D,ce,pe,Z.width,Z.height)}for(let Z=0,fe=Ne.length;Z<fe;Z++)de=Ne[Z],ke?F&&i.texSubImage2D(t.TEXTURE_2D,Z,0,0,ue,De,de):i.texImage2D(t.TEXTURE_2D,Z,pe,ue,De,de);v.generateMipmaps=!1}else if(ke){if(Ke){let Z=bt(J);i.texStorage2D(t.TEXTURE_2D,ce,pe,Z.width,Z.height)}F&&i.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,De,J)}else i.texImage2D(t.TEXTURE_2D,0,pe,ue,De,J);p(v)&&S(W),he.__version=re.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Ve(w,v,H){if(v.image.length!==6)return;let W=Q(w,v),q=v.source;i.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+H);let re=n.get(q);if(q.version!==re.__version||W===!0){i.activeTexture(t.TEXTURE0+H);let he=ot.getPrimaries(ot.workingColorSpace),K=v.colorSpace===gn?null:ot.getPrimaries(v.colorSpace),J=v.colorSpace===gn||he===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;i.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ue=v.isCompressedTexture||v.image[0].isCompressedTexture,De=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let $=0;$<6;$++)!ue&&!De?pe[$]=m(v.image[$],!0,s.maxCubemapSize):pe[$]=De?v.image[$].image:v.image[$],pe[$]=nn(v,pe[$]);let de=pe[0],Ne=r.convert(v.format,v.colorSpace),ke=r.convert(v.type),Ke=A(v.internalFormat,Ne,ke,v.normalized,v.colorSpace),F=v.isVideoTexture!==!0,ce=re.__version===void 0||W===!0,Z=q.dataReady,fe=M(v,de);it(t.TEXTURE_CUBE_MAP,v);let xe;if(ue){F&&ce&&i.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ke,de.width,de.height);for(let $=0;$<6;$++){xe=pe[$].mipmaps;for(let Ce=0;Ce<xe.length;Ce++){let Ee=xe[Ce];v.format!==Gi?Ne!==null?F?Z&&i.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,0,0,Ee.width,Ee.height,Ne,Ee.data):i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,Ke,Ee.width,Ee.height,0,Ee.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Z&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,0,0,Ee.width,Ee.height,Ne,ke,Ee.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,Ke,Ee.width,Ee.height,0,Ne,ke,Ee.data)}}}else{if(xe=v.mipmaps,F&&ce){xe.length>0&&fe++;let $=bt(pe[0]);i.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ke,$.width,$.height)}for(let $=0;$<6;$++)if(De){F?Z&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pe[$].width,pe[$].height,Ne,ke,pe[$].data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ke,pe[$].width,pe[$].height,0,Ne,ke,pe[$].data);for(let Ce=0;Ce<xe.length;Ce++){let ei=xe[Ce].image[$].image;F?Z&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,0,0,ei.width,ei.height,Ne,ke,ei.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,Ke,ei.width,ei.height,0,Ne,ke,ei.data)}}else{F?Z&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ne,ke,pe[$]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ke,Ne,ke,pe[$]);for(let Ce=0;Ce<xe.length;Ce++){let Ee=xe[Ce];F?Z&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,0,0,Ne,ke,Ee.image[$]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,Ke,Ne,ke,Ee.image[$])}}}p(v)&&S(t.TEXTURE_CUBE_MAP),re.__version=q.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Fe(w,v,H,W,q,re){let he=r.convert(H.format,H.colorSpace),K=r.convert(H.type),J=A(H.internalFormat,he,K,H.normalized,H.colorSpace),ue=n.get(v),De=n.get(H);if(De.__renderTarget=v,!ue.__hasExternalTextures){let pe=Math.max(1,v.width>>re),de=Math.max(1,v.height>>re);q===t.TEXTURE_3D||q===t.TEXTURE_2D_ARRAY?i.texImage3D(q,re,J,pe,de,v.depth,0,he,K,null):i.texImage2D(q,re,J,pe,de,0,he,K,null)}i.bindFramebuffer(t.FRAMEBUFFER,w),pi(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,q,De.__webglTexture,0,$t(v)):(q===t.TEXTURE_2D||q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,q,De.__webglTexture,re),i.bindFramebuffer(t.FRAMEBUFFER,null)}function Yt(w,v,H){if(t.bindRenderbuffer(t.RENDERBUFFER,w),v.depthBuffer){let W=v.depthTexture,q=W&&W.isDepthTexture?W.type:null,re=C(v.stencilBuffer,q),he=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;pi(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$t(v),re,v.width,v.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,$t(v),re,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,re,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,w)}else{let W=v.textures;for(let q=0;q<W.length;q++){let re=W[q],he=r.convert(re.format,re.colorSpace),K=r.convert(re.type),J=A(re.internalFormat,he,K,re.normalized,re.colorSpace);pi(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$t(v),J,v.width,v.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,$t(v),J,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,J,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function nt(w,v,H){let W=v.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(t.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(v.depthTexture);if(q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(q.__webglInit===void 0&&(q.__webglInit=!0,v.depthTexture.addEventListener("dispose",T)),q.__webglTexture===void 0){q.__webglTexture=t.createTexture(),i.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),it(t.TEXTURE_CUBE_MAP,v.depthTexture);let ue=r.convert(v.depthTexture.format),De=r.convert(v.depthTexture.type),pe;v.depthTexture.format===jn?pe=t.DEPTH_COMPONENT24:v.depthTexture.format===ss&&(pe=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,pe,v.width,v.height,0,ue,De,null)}}else Y(v.depthTexture,0);let re=q.__webglTexture,he=$t(v),K=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,J=v.depthTexture.format===ss?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===jn)pi(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,K,re,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,J,K,re,0);else if(v.depthTexture.format===ss)pi(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,K,re,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,J,K,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function At(w){let v=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let W=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",q)};W.addEventListener("dispose",q),v.__depthDisposeCallback=q}v.__boundDepthTexture=W}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let W=0;W<6;W++)nt(v.__webglFramebuffer[W],w,W);else{let W=w.texture.mipmaps;W&&W.length>0?nt(v.__webglFramebuffer[0],w,0):nt(v.__webglFramebuffer,w,0)}else if(H){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(i.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=t.createRenderbuffer(),Yt(v.__webglDepthbuffer[W],w,!1);else{let q=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=v.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,re)}}else{let W=w.texture.mipmaps;if(W&&W.length>0?i.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):i.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),Yt(v.__webglDepthbuffer,w,!1);else{let q=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,re)}}i.bindFramebuffer(t.FRAMEBUFFER,null)}function ht(w,v,H){let W=n.get(w);v!==void 0&&Fe(W.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&At(w)}function at(w){let v=w.texture,H=n.get(w),W=n.get(v);w.addEventListener("dispose",x);let q=w.textures,re=w.isWebGLCubeRenderTarget===!0,he=q.length>1;if(he||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=v.version,a.memory.textures++),re){H.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[K]=[];for(let J=0;J<v.mipmaps.length;J++)H.__webglFramebuffer[K][J]=t.createFramebuffer()}else H.__webglFramebuffer[K]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)H.__webglFramebuffer[K]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(he)for(let K=0,J=q.length;K<J;K++){let ue=n.get(q[K]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(w.samples>0&&pi(w)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],i.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let K=0;K<q.length;K++){let J=q[K];H.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[K]);let ue=r.convert(J.format,J.colorSpace),De=r.convert(J.type),pe=A(J.internalFormat,ue,De,J.normalized,J.colorSpace,w.isXRRenderTarget===!0),de=$t(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,pe,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,H.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Yt(H.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){i.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),it(t.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Fe(H.__webglFramebuffer[K][J],w,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else Fe(H.__webglFramebuffer[K],w,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(v)&&S(t.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(he){for(let K=0,J=q.length;K<J;K++){let ue=q[K],De=n.get(ue),pe=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pe=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(pe,De.__webglTexture),it(pe,ue),Fe(H.__webglFramebuffer,w,ue,t.COLOR_ATTACHMENT0+K,pe,0),p(ue)&&S(pe)}i.unbindTexture()}else{let K=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(K,W.__webglTexture),it(K,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Fe(H.__webglFramebuffer[J],w,v,t.COLOR_ATTACHMENT0,K,J);else Fe(H.__webglFramebuffer,w,v,t.COLOR_ATTACHMENT0,K,0);p(v)&&S(K),i.unbindTexture()}w.depthBuffer&&At(w)}function jt(w){let v=w.textures;for(let H=0,W=v.length;H<W;H++){let q=v[H];if(p(q)){let re=b(w),he=n.get(q).__webglTexture;i.bindTexture(re,he),S(re),i.unbindTexture()}}}let ri=[],Ci=[];function Pi(w){if(w.samples>0){if(pi(w)===!1){let v=w.textures,H=w.width,W=w.height,q=t.COLOR_BUFFER_BIT,re=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=n.get(w),K=v.length>1;if(K)for(let ue=0;ue<v.length;ue++)i.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),i.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);i.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let J=w.texture.mipmaps;J&&J.length>0?i.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):i.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ue=0;ue<v.length;ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(q|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(q|=t.STENCIL_BUFFER_BIT)),K){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[ue]);let De=n.get(v[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,H,W,0,0,H,W,q,t.NEAREST),l===!0&&(ri.length=0,Ci.length=0,ri.push(t.COLOR_ATTACHMENT0+ue),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ri.push(re),Ci.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ci)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ri))}if(i.bindFramebuffer(t.READ_FRAMEBUFFER,null),i.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let ue=0;ue<v.length;ue++){i.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,he.__webglColorRenderbuffer[ue]);let De=n.get(v[ue]).__webglTexture;i.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,De,0)}i.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let v=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function $t(w){return Math.min(s.maxSamples,w.samples)}function pi(w){let v=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(w){let v=a.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function nn(w,v){let H=w.colorSpace,W=w.format,q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==$n&&H!==gn&&(ot.getTransfer(H)===Tt?(W!==Gi||q!==st)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",H)),v}function bt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=D,this.getTextureUnits=B,this.setTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=j,this.setTexture3D=te,this.setTextureCube=ne,this.rebindTextures=ht,this.setupRenderTarget=at,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Pi,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=pi,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function wE(t,e){function i(n,s=gn){let r,a=ot.getTransfer(s);if(n===st)return t.UNSIGNED_BYTE;if(n===Jc)return t.UNSIGNED_SHORT_4_4_4_4;if(n===jc)return t.UNSIGNED_SHORT_5_5_5_1;if(n===nf)return t.UNSIGNED_INT_5_9_9_9_REV;if(n===sf)return t.UNSIGNED_INT_10F_11F_11F_REV;if(n===ef)return t.BYTE;if(n===tf)return t.SHORT;if(n===Ja)return t.UNSIGNED_SHORT;if(n===Zc)return t.INT;if(n===Gn)return t.UNSIGNED_INT;if(n===yi)return t.FLOAT;if(n===sn)return t.HALF_FLOAT;if(n===rf)return t.ALPHA;if(n===af)return t.RGB;if(n===Gi)return t.RGBA;if(n===jn)return t.DEPTH_COMPONENT;if(n===ss)return t.DEPTH_STENCIL;if(n===ol)return t.RED;if(n===$c)return t.RED_INTEGER;if(n===Ls)return t.RG;if(n===eh)return t.RG_INTEGER;if(n===th)return t.RGBA_INTEGER;if(n===ll||n===cl||n===hl||n===ul)if(a===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ll)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ll)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ul)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ih||n===nh||n===sh||n===rh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ih)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ah||n===oh||n===lh||n===ch||n===hh||n===dl||n===uh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ah||n===oh)return a===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lh)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ch)return r.COMPRESSED_R11_EAC;if(n===hh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===dl)return r.COMPRESSED_RG11_EAC;if(n===uh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dh||n===fh||n===ph||n===mh||n===gh||n===vh||n===xh||n===yh||n===_h||n===Ah||n===Mh||n===Sh||n===Eh||n===Th)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dh)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fh)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ph)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mh)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gh)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vh)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xh)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yh)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_h)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ah)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mh)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sh)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eh)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Th)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wh||n===bh||n===Ch)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wh)return a===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ch)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rh||n===Dh||n===fl||n===Ih)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ih)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?t.UNSIGNED_INT_24_8:t[n]!==void 0?t[n]:null}return{convert:i}}var bE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CE=`
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

}`,Cf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){let n=new jo(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let i=e.cameras[0].viewport,n=new Xe({vertexShader:bE,fragmentShader:CE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ii(new Vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rf=class extends Oi{constructor(e,i){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new Cf,p={},S=i.getContextAttributes(),b=null,A=null,C=[],M=[],T=new le,x=null,E=new qt;E.viewport=new ut;let L=new qt;L.viewport=new ut;let P=[E,L],R=new Yc,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let se=C[Q];return se===void 0&&(se=new za,C[Q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Q){let se=C[Q];return se===void 0&&(se=new za,C[Q]=se),se.getGripSpace()},this.getHand=function(Q){let se=C[Q];return se===void 0&&(se=new za,C[Q]=se),se.getHandSpace()};function U(Q){let se=M.indexOf(Q.inputSource);if(se===-1)return;let ee=C[se];ee!==void 0&&(ee.update(Q.inputSource,Q.frame,c||a),ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",k);for(let Q=0;Q<C.length;Q++){let se=M[Q];se!==null&&(M[Q]=null,C[Q].disconnect(se))}D=null,B=null,m.reset();for(let Q in p)delete p[Q];e.setRenderTarget(b),f=null,h=null,d=null,s=null,A=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,i)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",G),s.addEventListener("inputsourceschange",k),S.xrCompatible!==!0&&await i.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,be=null,Ve=null;S.depth&&(Ve=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ee=S.stencil?ss:jn,be=S.stencil?fr:Gn);let Fe={colorFormat:i.RGBA8,depthFormat:Ve,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Fe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new ze(h.textureWidth,h.textureHeight,{format:Gi,type:st,depthTexture:new Cn(h.textureWidth,h.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ee={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,i,ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new ze(f.framebufferWidth,f.framebufferHeight,{format:Gi,type:st,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(Q){for(let se=0;se<Q.removed.length;se++){let ee=Q.removed[se],be=M.indexOf(ee);be>=0&&(M[be]=null,C[be].disconnect(ee))}for(let se=0;se<Q.added.length;se++){let ee=Q.added[se],be=M.indexOf(ee);if(be===-1){for(let Fe=0;Fe<C.length;Fe++)if(Fe>=M.length){M.push(ee),be=Fe;break}else if(M[Fe]===null){M[Fe]=ee,be=Fe;break}if(be===-1)break}let Ve=C[be];Ve&&Ve.connect(ee)}}let Y=new I,j=new I;function te(Q,se,ee){Y.setFromMatrixPosition(se.matrixWorld),j.setFromMatrixPosition(ee.matrixWorld);let be=Y.distanceTo(j),Ve=se.projectionMatrix.elements,Fe=ee.projectionMatrix.elements,Yt=Ve[14]/(Ve[10]-1),nt=Ve[14]/(Ve[10]+1),At=(Ve[9]+1)/Ve[5],ht=(Ve[9]-1)/Ve[5],at=(Ve[8]-1)/Ve[0],jt=(Fe[8]+1)/Fe[0],ri=Yt*at,Ci=Yt*jt,Pi=be/(-at+jt),$t=Pi*-at;if(se.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX($t),Q.translateZ(Pi),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ve[10]===-1)Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let pi=Yt+Pi,N=nt+Pi,nn=ri-$t,bt=Ci+(be-$t),w=At*nt/N*pi,v=ht*nt/N*pi;Q.projectionMatrix.makePerspective(nn,bt,w,v,pi,N),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ne(Q,se){se===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(se.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let se=Q.near,ee=Q.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(ee=m.depthFar)),R.near=L.near=E.near=se,R.far=L.far=E.far=ee,(D!==R.near||B!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),D=R.near,B=R.far),R.layers.mask=Q.layers.mask|6,E.layers.mask=R.layers.mask&-5,L.layers.mask=R.layers.mask&-3;let be=Q.parent,Ve=R.cameras;ne(R,be);for(let Fe=0;Fe<Ve.length;Fe++)ne(Ve[Fe],be);Ve.length===2?te(R,E,L):R.projectionMatrix.copy(E.projectionMatrix),oe(Q,R,be)};function oe(Q,se,ee){ee===null?Q.matrix.copy(se.matrixWorld):(Q.matrix.copy(ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(se.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ka*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(Q){return p[Q]};let Ge=null;function xt(Q,se){if(u=se.getViewerPose(c||a),g=se,u!==null){let ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let be=!1;ee.length!==R.cameras.length&&(R.cameras.length=0,be=!0);for(let nt=0;nt<ee.length;nt++){let At=ee[nt],ht=null;if(f!==null)ht=f.getViewport(At);else{let jt=d.getViewSubImage(h,At);ht=jt.viewport,nt===0&&(e.setRenderTargetTextures(A,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(A))}let at=P[nt];at===void 0&&(at=new qt,at.layers.enable(nt),at.viewport=new ut,P[nt]=at),at.matrix.fromArray(At.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(At.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ht.x,ht.y,ht.width,ht.height),nt===0&&(R.matrix.copy(at.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),be===!0&&R.cameras.push(at)}let Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let nt=d.getDepthInformation(ee[0]);nt&&nt.isValid&&nt.texture&&m.init(nt,s.renderState)}if(Ve&&Ve.includes("camera-access")&&y){e.state.unbindTexture(),d=n.getBinding();for(let nt=0;nt<ee.length;nt++){let At=ee[nt].camera;if(At){let ht=p[At];ht||(ht=new jo,p[At]=ht);let at=d.getCameraImage(At);ht.sourceTexture=at}}}}for(let ee=0;ee<C.length;ee++){let be=M[ee],Ve=C[ee];be!==null&&Ve!==void 0&&Ve.update(be,se,c||a)}Ge&&Ge(Q,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}let it=new y0;it.setAnimationLoop(xt),this.setAnimationLoop=function(Q){Ge=Q},this.dispose=function(){}}},RE=new Mt,T0=new Ye;T0.set(-1,0,0,0,1,0,0,0,1);function DE(t,e){function i(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uf(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,b,A){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,A)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,i(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,i(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===xi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,i(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===xi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,i(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,i(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),b=S.envMap,A=S.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(RE.makeRotationFromEuler(A)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(T0),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,i(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,i(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,i(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xi&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function IE(t,e,i,n){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,C){let M=C.program;n.uniformBlockBinding(A,M)}function c(A,C){let M=s[A.id];M===void 0&&(m(A),M=u(A),s[A.id]=M,A.addEventListener("dispose",S));let T=C.program;n.updateUBOMapping(A,T);let x=e.render.frame;r[A.id]!==x&&(h(A),r[A.id]=x)}function u(A){let C=d();A.__bindingPointIndex=C;let M=t.createBuffer(),T=A.__size,x=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,T,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,C,M),M}function d(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){let C=s[A.id],M=A.uniforms,T=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,C);for(let x=0,E=M.length;x<E;x++){let L=M[x];if(Array.isArray(L))for(let P=0,R=L.length;P<R;P++)f(L[P],x,P,T);else f(L,x,0,T)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(A,C,M,T){if(y(A,C,M,T)===!0){let x=A.__offset,E=A.value;if(Array.isArray(E)){let L=0;for(let P=0;P<E.length;P++){let R=E[P],D=p(R);g(R,A.__data,L),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(L+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,A.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,A.__data)}}function g(A,C,M){typeof A=="number"||typeof A=="boolean"?C[0]=A:A.isMatrix3?(C[0]=A.elements[0],C[1]=A.elements[1],C[2]=A.elements[2],C[3]=0,C[4]=A.elements[3],C[5]=A.elements[4],C[6]=A.elements[5],C[7]=0,C[8]=A.elements[6],C[9]=A.elements[7],C[10]=A.elements[8],C[11]=0):ArrayBuffer.isView(A)?C.set(new A.constructor(A.buffer,A.byteOffset,C.length)):A.toArray(C,M)}function y(A,C,M,T){let x=A.value,E=C+"_"+M;if(T[E]===void 0)return typeof x=="number"||typeof x=="boolean"?T[E]=x:ArrayBuffer.isView(x)?T[E]=x.slice():T[E]=x.clone(),!0;{let L=T[E];if(typeof x=="number"||typeof x=="boolean"){if(L!==x)return T[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(L.equals(x)===!1)return L.copy(x),!0}}return!1}function m(A){let C=A.uniforms,M=0,T=16;for(let E=0,L=C.length;E<L;E++){let P=Array.isArray(C[E])?C[E]:[C[E]];for(let R=0,D=P.length;R<D;R++){let B=P[R],U=Array.isArray(B.value)?B.value:[B.value];for(let G=0,k=U.length;G<k;G++){let Y=U[G],j=p(Y),te=M%T,ne=te%j.boundary,oe=te+ne;M+=ne,oe!==0&&T-oe<j.storage&&(M+=T-oe),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=j.storage}}}let x=M%T;return x>0&&(M+=T-x),A.__size=M,A.__cache={},this}function p(A){let C={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(C.boundary=4,C.storage=4):A.isVector2?(C.boundary=8,C.storage=8):A.isVector3||A.isColor?(C.boundary=16,C.storage=12):A.isVector4?(C.boundary=16,C.storage=16):A.isMatrix3?(C.boundary=48,C.storage=48):A.isMatrix4?(C.boundary=64,C.storage=64):A.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(C.boundary=16,C.storage=A.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",A),C}function S(A){let C=A.target;C.removeEventListener("dispose",S);let M=a.indexOf(C.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function b(){for(let A in s)t.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}var PE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),rs=null;function LE(){return rs===null&&(rs=new zr(PE,16,16,Ls,sn),rs.name="DFG_LUT",rs.minFilter=kt,rs.magFilter=kt,rs.wrapS=Fn,rs.wrapT=Fn,rs.generateMipmaps=!1,rs.needsUpdate=!0),rs}var kh=class{constructor(e={}){let{canvas:i=Vg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=st}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=f,m=new Set([th,eh,$c]),p=new Set([st,Gn,Ja,fr,Jc,jc]),S=new Uint32Array(4),b=new Int32Array(4),A=new I,C=null,M=null,T=[],x=[],E=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,P=!1,R=null,D=null,B=null,U=null;this._outputColorSpace=We;let G=0,k=0,Y=null,j=-1,te=null,ne=new ut,oe=new ut,Ge=null,xt=new Re(0),it=0,Q=i.width,se=i.height,ee=1,be=null,Ve=null,Fe=new ut(0,0,Q,se),Yt=new ut(0,0,Q,se),nt=!1,At=new Qo,ht=!1,at=!1,jt=new Mt,ri=new I,Ci=new ut,Pi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function pi(){return Y===null?ee:1}let N=n;function nn(_,O){return i.getContext(_,O)}try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${"185"}`),i.addEventListener("webglcontextlost",ei,!1),i.addEventListener("webglcontextrestored",Nt,!1),i.addEventListener("webglcontextcreationerror",qn,!1),N===null){let O="webgl2";if(N=nn(O,_),N===null)throw nn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(_){throw He("WebGLRenderer: "+_.message),_}let bt,w,v,H,W,q,re,he,K,J,ue,De,pe,de,Ne,ke,Ke,F,ce,Z,fe,xe,$;function Ce(){bt=new GM(N),bt.init(),fe=new wE(N,bt),w=new PM(N,bt,e,fe),v=new EE(N,bt),w.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),D=N.createFramebuffer(),B=N.createFramebuffer(),U=N.createFramebuffer(),H=new VM(N),W=new hE,q=new TE(N,bt,v,W,w,fe,H),re=new kM(L),he=new q_(N),xe=new DM(N,he),K=new HM(N,he,H,xe),J=new XM(N,K,he,xe,H),F=new WM(N,w,q),Ne=new LM(W),ue=new cE(L,re,bt,w,xe,Ne),De=new DE(L,W),pe=new dE,de=new xE(bt),Ke=new RM(L,re,v,J,g,l),ke=new SE(L,J,w),$=new IE(N,H,w,v),ce=new IM(N,bt,H),Z=new zM(N,bt,H),H.programs=ue.programs,L.capabilities=w,L.extensions=bt,L.properties=W,L.renderLists=pe,L.shadowMap=ke,L.state=v,L.info=H}Ce(),y!==st&&(E=new qM(y,i.width,i.height,o,s,r));let Ee=new Rf(L,N);this.xr=Ee,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let _=bt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=bt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(_){_!==void 0&&(ee=_,this.setSize(Q,se,!1))},this.getSize=function(_){return _.set(Q,se)},this.setSize=function(_,O,X=!0){if(Ee.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=_,se=O,i.width=Math.floor(_*ee),i.height=Math.floor(O*ee),X===!0&&(i.style.width=_+"px",i.style.height=O+"px"),E!==null&&E.setSize(i.width,i.height),this.setViewport(0,0,_,O)},this.getDrawingBufferSize=function(_){return _.set(Q*ee,se*ee).floor()},this.setDrawingBufferSize=function(_,O,X){Q=_,se=O,ee=X,i.width=Math.floor(_*X),i.height=Math.floor(O*X),this.setViewport(0,0,_,O)},this.setEffects=function(_){if(y===st){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let O=0;O<_.length;O++)if(_[O].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(ne)},this.getViewport=function(_){return _.copy(Fe)},this.setViewport=function(_,O,X,z){_.isVector4?Fe.set(_.x,_.y,_.z,_.w):Fe.set(_,O,X,z),v.viewport(ne.copy(Fe).multiplyScalar(ee).round())},this.getScissor=function(_){return _.copy(Yt)},this.setScissor=function(_,O,X,z){_.isVector4?Yt.set(_.x,_.y,_.z,_.w):Yt.set(_,O,X,z),v.scissor(oe.copy(Yt).multiplyScalar(ee).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(_){v.setScissorTest(nt=_)},this.setOpaqueSort=function(_){be=_},this.setTransparentSort=function(_){Ve=_},this.getClearColor=function(_){return _.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(_=!0,O=!0,X=!0){let z=0;if(_){let V=!1;if(Y!==null){let ve=Y.texture.format;V=m.has(ve)}if(V){let ve=Y.texture.type,Ae=p.has(ve),ge=Ke.getClearColor(),we=Ke.getClearAlpha(),Ie=ge.r,Qe=ge.g,et=ge.b;Ae?(S[0]=Ie,S[1]=Qe,S[2]=et,S[3]=we,N.clearBufferuiv(N.COLOR,0,S)):(b[0]=Ie,b[1]=Qe,b[2]=et,b[3]=we,N.clearBufferiv(N.COLOR,0,b))}else z|=N.COLOR_BUFFER_BIT}O&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),R=_},this.dispose=function(){i.removeEventListener("webglcontextlost",ei,!1),i.removeEventListener("webglcontextrestored",Nt,!1),i.removeEventListener("webglcontextcreationerror",qn,!1),Ke.dispose(),pe.dispose(),de.dispose(),W.dispose(),re.dispose(),J.dispose(),xe.dispose(),$.dispose(),ue.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Im),Ee.removeEventListener("sessionend",Pm),Ur.stop()};function ei(_){_.preventDefault(),cf("WebGLRenderer: Context Lost."),P=!0}function Nt(){cf("WebGLRenderer: Context Restored."),P=!1;let _=H.autoReset,O=ke.enabled,X=ke.autoUpdate,z=ke.needsUpdate,V=ke.type;Ce(),H.autoReset=_,ke.enabled=O,ke.autoUpdate=X,ke.needsUpdate=z,ke.type=V}function qn(_){He("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Kn(_){let O=_.target;O.removeEventListener("dispose",Kn),Hy(O)}function Hy(_){zy(_),W.remove(_)}function zy(_){let O=W.get(_).programs;O!==void 0&&(O.forEach(function(X){ue.releaseProgram(X)}),_.isShaderMaterial&&ue.releaseShaderCache(_))}this.renderBufferDirect=function(_,O,X,z,V,ve){O===null&&(O=Pi);let Ae=V.isMesh&&V.matrixWorld.determinantAffine()<0,ge=Xy(_,O,X,z,V);v.setMaterial(z,Ae);let we=X.index,Ie=1;if(z.wireframe===!0){if(we=K.getWireframeAttribute(X),we===void 0)return;Ie=2}let Qe=X.drawRange,et=X.attributes.position,Le=Qe.start*Ie,Dt=(Qe.start+Qe.count)*Ie;ve!==null&&(Le=Math.max(Le,ve.start*Ie),Dt=Math.min(Dt,(ve.start+ve.count)*Ie)),we!==null?(Le=Math.max(Le,0),Dt=Math.min(Dt,we.count)):et!=null&&(Le=Math.max(Le,0),Dt=Math.min(Dt,et.count));let ai=Dt-Le;if(ai<0||ai===1/0)return;xe.setup(V,z,ge,X,we);let ti,Pt=ce;if(we!==null&&(ti=he.get(we),Pt=Z,Pt.setIndex(ti)),V.isMesh)z.wireframe===!0?(v.setLineWidth(z.wireframeLinewidth*pi()),Pt.setMode(N.LINES)):Pt.setMode(N.TRIANGLES);else if(V.isLine){let Bi=z.linewidth;Bi===void 0&&(Bi=1),v.setLineWidth(Bi*pi()),V.isLineSegments?Pt.setMode(N.LINES):V.isLineLoop?Pt.setMode(N.LINE_LOOP):Pt.setMode(N.LINE_STRIP)}else V.isPoints?Pt.setMode(N.POINTS):V.isSprite&&Pt.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Bi=V._multiDrawStarts,_e=V._multiDrawCounts,hn=V._multiDrawCount,pt=we?he.get(we).bytesPerElement:1,Tn=W.get(z).currentProgram.getUniforms();for(let Qn=0;Qn<hn;Qn++)Tn.setValue(N,"_gl_DrawID",Qn),Pt.render(Bi[Qn]/pt,_e[Qn])}else if(V.isInstancedMesh)Pt.renderInstances(Le,ai,V.count);else if(X.isInstancedBufferGeometry){let Bi=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_e=Math.min(X.instanceCount,Bi);Pt.renderInstances(Le,ai,_e)}else Pt.render(Le,ai)};function Dm(_,O,X){_.transparent===!0&&_.side===li&&_.forceSinglePass===!1?(_.side=xi,_.needsUpdate=!0,Jl(_,O,X),_.side=kn,_.needsUpdate=!0,Jl(_,O,X),_.side=li):Jl(_,O,X)}this.compile=function(_,O,X=null){X===null&&(X=_),M=de.get(X),M.init(O),x.push(M),X.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(M.pushLight(V),V.castShadow&&M.pushShadow(V))}),_!==X&&_.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(M.pushLight(V),V.castShadow&&M.pushShadow(V))}),M.setupLights();let z=new Set;return _.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ve=V.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){let ge=ve[Ae];Dm(ge,X,V),z.add(ge)}else Dm(ve,X,V),z.add(ve)}),M=x.pop(),z},this.compileAsync=function(_,O,X=null){let z=this.compile(_,O,X);return new Promise(V=>{function ve(){if(z.forEach(function(Ae){W.get(Ae).currentProgram.isReady()&&z.delete(Ae)}),z.size===0){V(_);return}setTimeout(ve,10)}bt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let cd=null;function Vy(_){cd&&cd(_)}function Im(){Ur.stop()}function Pm(){Ur.start()}let Ur=new y0;Ur.setAnimationLoop(Vy),typeof self<"u"&&Ur.setContext(self),this.setAnimationLoop=function(_){cd=_,Ee.setAnimationLoop(_),_===null?Ur.stop():Ur.start()},Ee.addEventListener("sessionstart",Im),Ee.addEventListener("sessionend",Pm),this.render=function(_,O){if(O!==void 0&&O.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;R!==null&&R.renderStart(_,O);let X=Ee.enabled===!0&&Ee.isPresenting===!0,z=E!==null&&(Y===null||X)&&E.begin(L,Y);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(O),O=Ee.getCamera()),_.isScene===!0&&_.onBeforeRender(L,_,O,Y),M=de.get(_,x.length),M.init(O),M.state.textureUnits=q.getTextureUnits(),x.push(M),jt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),At.setFromProjectionMatrix(jt,Nn,O.reversedDepth),at=this.localClippingEnabled,ht=Ne.init(this.clippingPlanes,at),C=pe.get(_,T.length),C.init(),T.push(C),Ee.enabled===!0&&Ee.isPresenting===!0){let Ae=L.xr.getDepthSensingMesh();Ae!==null&&hd(Ae,O,-1/0,L.sortObjects)}hd(_,O,0,L.sortObjects),C.finish(),L.sortObjects===!0&&C.sort(be,Ve,O.reversedDepth),$t=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,$t&&Ke.addToRenderList(C,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&Ne.beginShadows();let V=M.state.shadowsArray;if(ke.render(V,_,O),ht===!0&&Ne.endShadows(),(z&&E.hasRenderPass())===!1){let Ae=C.opaque,ge=C.transmissive;if(M.setupLights(),O.isArrayCamera){let we=O.cameras;if(ge.length>0)for(let Ie=0,Qe=we.length;Ie<Qe;Ie++){let et=we[Ie];Um(Ae,ge,_,et)}$t&&Ke.render(_);for(let Ie=0,Qe=we.length;Ie<Qe;Ie++){let et=we[Ie];Lm(C,_,et,et.viewport)}}else ge.length>0&&Um(Ae,ge,_,O),$t&&Ke.render(_),Lm(C,_,O)}Y!==null&&k===0&&(q.updateMultisampleRenderTarget(Y),q.updateRenderTargetMipmap(Y)),z&&E.end(L),_.isScene===!0&&_.onAfterRender(L,_,O),xe.resetDefaultState(),j=-1,te=null,x.pop(),x.length>0?(M=x[x.length-1],q.setTextureUnits(M.state.textureUnits),ht===!0&&Ne.setGlobalState(L.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?C=T[T.length-1]:C=null,R!==null&&R.renderEnd()};function hd(_,O,X,z){if(_.visible===!1)return;if(_.layers.test(O.layers)){if(_.isGroup)X=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(O);else if(_.isLightProbeGrid)M.pushLightProbeGrid(_);else if(_.isLight)M.pushLight(_),_.castShadow&&M.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||At.intersectsSprite(_)){z&&Ci.setFromMatrixPosition(_.matrixWorld).applyMatrix4(jt);let Ae=J.update(_),ge=_.material;ge.visible&&C.push(_,Ae,ge,X,Ci.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||At.intersectsObject(_))){let Ae=J.update(_),ge=_.material;if(z&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ci.copy(_.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ci.copy(Ae.boundingSphere.center)),Ci.applyMatrix4(_.matrixWorld).applyMatrix4(jt)),Array.isArray(ge)){let we=Ae.groups;for(let Ie=0,Qe=we.length;Ie<Qe;Ie++){let et=we[Ie],Le=ge[et.materialIndex];Le&&Le.visible&&C.push(_,Ae,Le,X,Ci.z,et)}}else ge.visible&&C.push(_,Ae,ge,X,Ci.z,null)}}let ve=_.children;for(let Ae=0,ge=ve.length;Ae<ge;Ae++)hd(ve[Ae],O,X,z)}function Lm(_,O,X,z){let{opaque:V,transmissive:ve,transparent:Ae}=_;M.setupLightsView(X),ht===!0&&Ne.setGlobalState(L.clippingPlanes,X),z&&v.viewport(ne.copy(z)),V.length>0&&Zl(V,O,X),ve.length>0&&Zl(ve,O,X),Ae.length>0&&Zl(Ae,O,X),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Um(_,O,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[z.id]===void 0){let Le=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[z.id]=new ze(1,1,{generateMipmaps:!0,type:Le?sn:st,minFilter:ns,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let ve=M.state.transmissionRenderTarget[z.id],Ae=z.viewport||ne;ve.setSize(Ae.z*L.transmissionResolutionScale,Ae.w*L.transmissionResolutionScale);let ge=L.getRenderTarget(),we=L.getActiveCubeFace(),Ie=L.getActiveMipmapLevel();L.setRenderTarget(ve),L.getClearColor(xt),it=L.getClearAlpha(),it<1&&L.setClearColor(16777215,.5),L.clear(),$t&&Ke.render(X);let Qe=L.toneMapping;L.toneMapping=mn;let et=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),M.setupLightsView(z),ht===!0&&Ne.setGlobalState(L.clippingPlanes,z),Zl(_,X,z),q.updateMultisampleRenderTarget(ve),q.updateRenderTargetMipmap(ve),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Dt=0,ai=O.length;Dt<ai;Dt++){let ti=O[Dt],{object:Pt,geometry:Bi,material:_e,group:hn}=ti;if(_e.side===li&&Pt.layers.test(z.layers)){let pt=_e.side;_e.side=xi,_e.needsUpdate=!0,Bm(Pt,X,z,Bi,_e,hn),_e.side=pt,_e.needsUpdate=!0,Le=!0}}Le===!0&&(q.updateMultisampleRenderTarget(ve),q.updateRenderTargetMipmap(ve))}L.setRenderTarget(ge,we,Ie),L.setClearColor(xt,it),et!==void 0&&(z.viewport=et),L.toneMapping=Qe}function Zl(_,O,X){let z=O.isScene===!0?O.overrideMaterial:null;for(let V=0,ve=_.length;V<ve;V++){let Ae=_[V],{object:ge,geometry:we,group:Ie}=Ae,Qe=Ae.material;Qe.allowOverride===!0&&z!==null&&(Qe=z),ge.layers.test(X.layers)&&Bm(ge,O,X,we,Qe,Ie)}}function Bm(_,O,X,z,V,ve){_.onBeforeRender(L,O,X,z,V,ve),_.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),V.onBeforeRender(L,O,X,z,_,ve),V.transparent===!0&&V.side===li&&V.forceSinglePass===!1?(V.side=xi,V.needsUpdate=!0,L.renderBufferDirect(X,O,z,V,_,ve),V.side=kn,V.needsUpdate=!0,L.renderBufferDirect(X,O,z,V,_,ve),V.side=li):L.renderBufferDirect(X,O,z,V,_,ve),_.onAfterRender(L,O,X,z,V,ve)}function Jl(_,O,X){O.isScene!==!0&&(O=Pi);let z=W.get(_),V=M.state.lights,ve=M.state.shadowsArray,Ae=V.state.version,ge=ue.getParameters(_,V.state,ve,O,X,M.state.lightProbeGridArray),we=ue.getProgramCacheKey(ge),Ie=z.programs;z.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?O.environment:null,z.fog=O.fog;let Qe=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;z.envMap=re.get(_.envMap||z.environment,Qe),z.envMapRotation=z.environment!==null&&_.envMap===null?O.environmentRotation:_.envMapRotation,Ie===void 0&&(_.addEventListener("dispose",Kn),Ie=new Map,z.programs=Ie);let et=Ie.get(we);if(et!==void 0){if(z.currentProgram===et&&z.lightsStateVersion===Ae)return Nm(_,ge),et}else ge.uniforms=ue.getUniforms(_),R!==null&&_.isNodeMaterial&&R.build(_,X,ge),_.onBeforeCompile(ge,L),et=ue.acquireProgram(ge,we),Ie.set(we,et),z.uniforms=ge.uniforms;let Le=z.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Le.clippingPlanes=Ne.uniform),Nm(_,ge),z.needsLights=qy(_),z.lightsStateVersion=Ae,z.needsLights&&(Le.ambientLightColor.value=V.state.ambient,Le.lightProbe.value=V.state.probe,Le.directionalLights.value=V.state.directional,Le.directionalLightShadows.value=V.state.directionalShadow,Le.spotLights.value=V.state.spot,Le.spotLightShadows.value=V.state.spotShadow,Le.rectAreaLights.value=V.state.rectArea,Le.ltc_1.value=V.state.rectAreaLTC1,Le.ltc_2.value=V.state.rectAreaLTC2,Le.pointLights.value=V.state.point,Le.pointLightShadows.value=V.state.pointShadow,Le.hemisphereLights.value=V.state.hemi,Le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Le.spotLightMatrix.value=V.state.spotLightMatrix,Le.spotLightMap.value=V.state.spotLightMap,Le.pointShadowMatrix.value=V.state.pointShadowMatrix),z.lightProbeGrid=M.state.lightProbeGridArray.length>0,z.currentProgram=et,z.uniformsList=null,et}function Fm(_){if(_.uniformsList===null){let O=_.currentProgram.getUniforms();_.uniformsList=eo.seqWithValue(O.seq,_.uniforms)}return _.uniformsList}function Nm(_,O){let X=W.get(_);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Wy(_,O){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;A.setFromMatrixPosition(O.matrixWorld);for(let X=0,z=_.length;X<z;X++){let V=_[X];if(V.texture!==null&&V.boundingBox.containsPoint(A))return V}return null}function Xy(_,O,X,z,V){O.isScene!==!0&&(O=Pi),q.resetTextureUnits();let ve=O.fog,Ae=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?O.environment:null,ge=Y===null?L.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ot.workingColorSpace,we=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ie=re.get(z.envMap||Ae,we),Qe=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,et=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Le=!!X.morphAttributes.position,Dt=!!X.morphAttributes.normal,ai=!!X.morphAttributes.color,ti=mn;z.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ti=L.toneMapping);let Pt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Bi=Pt!==void 0?Pt.length:0,_e=W.get(z),hn=M.state.lights;if(ht===!0&&(at===!0||_!==te)){let Ot=_===te&&z.id===j;Ne.setState(z,_,Ot)}let pt=!1;z.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==hn.state.version||_e.outputColorSpace!==ge||V.isBatchedMesh&&_e.batching===!1||!V.isBatchedMesh&&_e.batching===!0||V.isBatchedMesh&&_e.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&_e.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&_e.instancing===!1||!V.isInstancedMesh&&_e.instancing===!0||V.isSkinnedMesh&&_e.skinning===!1||!V.isSkinnedMesh&&_e.skinning===!0||V.isInstancedMesh&&_e.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&_e.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&_e.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&_e.instancingMorph===!1&&V.morphTexture!==null||_e.envMap!==Ie||z.fog===!0&&_e.fog!==ve||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ne.numPlanes||_e.numIntersection!==Ne.numIntersection)||_e.vertexAlphas!==Qe||_e.vertexTangents!==et||_e.morphTargets!==Le||_e.morphNormals!==Dt||_e.morphColors!==ai||_e.toneMapping!==ti||_e.morphTargetsCount!==Bi||!!_e.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,_e.__version=z.version);let Tn=_e.currentProgram;pt===!0&&(Tn=Jl(z,O,V),R&&z.isNodeMaterial&&R.onUpdateProgram(z,Tn,_e));let Qn=!1,Ys=!1,xa=!1,Lt=Tn.getUniforms(),oi=_e.uniforms;if(v.useProgram(Tn.program)&&(Qn=!0,Ys=!0,xa=!0),z.id!==j&&(j=z.id,Ys=!0),_e.needsLights){let Ot=Wy(M.state.lightProbeGridArray,V);_e.lightProbeGrid!==Ot&&(_e.lightProbeGrid=Ot,Ys=!0)}if(Qn||te!==_){v.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),Lt.setValue(N,"projectionMatrix",_.projectionMatrix),Lt.setValue(N,"viewMatrix",_.matrixWorldInverse);let Ks=Lt.map.cameraPosition;Ks!==void 0&&Ks.setValue(N,ri.setFromMatrixPosition(_.matrixWorld)),w.logarithmicDepthBuffer&&Lt.setValue(N,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Lt.setValue(N,"isOrthographic",_.isOrthographicCamera===!0),te!==_&&(te=_,Ys=!0,xa=!0)}if(_e.needsLights&&(hn.state.directionalShadowMap.length>0&&Lt.setValue(N,"directionalShadowMap",hn.state.directionalShadowMap,q),hn.state.spotShadowMap.length>0&&Lt.setValue(N,"spotShadowMap",hn.state.spotShadowMap,q),hn.state.pointShadowMap.length>0&&Lt.setValue(N,"pointShadowMap",hn.state.pointShadowMap,q)),V.isSkinnedMesh){Lt.setOptional(N,V,"bindMatrix"),Lt.setOptional(N,V,"bindMatrixInverse");let Ot=V.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Lt.setValue(N,"boneTexture",Ot.boneTexture,q))}V.isBatchedMesh&&(Lt.setOptional(N,V,"batchingTexture"),Lt.setValue(N,"batchingTexture",V._matricesTexture,q),Lt.setOptional(N,V,"batchingIdTexture"),Lt.setValue(N,"batchingIdTexture",V._indirectTexture,q),Lt.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&Lt.setValue(N,"batchingColorTexture",V._colorsTexture,q));let qs=X.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&F.update(V,X,Tn),(Ys||_e.receiveShadow!==V.receiveShadow)&&(_e.receiveShadow=V.receiveShadow,Lt.setValue(N,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&O.environment!==null&&(oi.envMapIntensity.value=O.environmentIntensity),oi.dfgLUT!==void 0&&(oi.dfgLUT.value=LE()),Ys){if(Lt.setValue(N,"toneMappingExposure",L.toneMappingExposure),_e.needsLights&&Yy(oi,xa),ve&&z.fog===!0&&De.refreshFogUniforms(oi,ve),De.refreshMaterialUniforms(oi,z,ee,se,M.state.transmissionRenderTarget[_.id]),_e.needsLights&&_e.lightProbeGrid){let Ot=_e.lightProbeGrid;oi.probesSH.value=Ot.texture,oi.probesMin.value.copy(Ot.boundingBox.min),oi.probesMax.value.copy(Ot.boundingBox.max),oi.probesResolution.value.copy(Ot.resolution)}eo.upload(N,Fm(_e),oi,q)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(eo.upload(N,Fm(_e),oi,q),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Lt.setValue(N,"center",V.center),Lt.setValue(N,"modelViewMatrix",V.modelViewMatrix),Lt.setValue(N,"normalMatrix",V.normalMatrix),Lt.setValue(N,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){let Ot=z.uniformsGroups;for(let Ks=0,ya=Ot.length;Ks<ya;Ks++){let Om=Ot[Ks];$.update(Om,Tn),$.bind(Om,Tn)}}return Tn}function Yy(_,O){_.ambientLightColor.needsUpdate=O,_.lightProbe.needsUpdate=O,_.directionalLights.needsUpdate=O,_.directionalLightShadows.needsUpdate=O,_.pointLights.needsUpdate=O,_.pointLightShadows.needsUpdate=O,_.spotLights.needsUpdate=O,_.spotLightShadows.needsUpdate=O,_.rectAreaLights.needsUpdate=O,_.hemisphereLights.needsUpdate=O}function qy(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(_,O,X){let z=W.get(_);z.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),W.get(_.texture).__webglTexture=O,W.get(_.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,O){let X=W.get(_);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(_,O=0,X=0){Y=_,G=O,k=X;let z=null,V=!1,ve=!1;if(_){let ge=W.get(_);if(ge.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(N.FRAMEBUFFER,ge.__webglFramebuffer),ne.copy(_.viewport),oe.copy(_.scissor),Ge=_.scissorTest,v.viewport(ne),v.scissor(oe),v.setScissorTest(Ge),j=-1;return}else if(ge.__webglFramebuffer===void 0)q.setupRenderTarget(_);else if(ge.__hasExternalTextures)q.rebindTextures(_,W.get(_.texture).__webglTexture,W.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Qe=_.depthTexture;if(ge.__boundDepthTexture!==Qe){if(Qe!==null&&W.has(Qe)&&(_.width!==Qe.image.width||_.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(_)}}let we=_.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ve=!0);let Ie=W.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ie[O])?z=Ie[O][X]:z=Ie[O],V=!0):_.samples>0&&q.useMultisampledRTT(_)===!1?z=W.get(_).__webglMultisampledFramebuffer:Array.isArray(Ie)?z=Ie[X]:z=Ie,ne.copy(_.viewport),oe.copy(_.scissor),Ge=_.scissorTest}else ne.copy(Fe).multiplyScalar(ee).floor(),oe.copy(Yt).multiplyScalar(ee).floor(),Ge=nt;if(X!==0&&(z=D),v.bindFramebuffer(N.FRAMEBUFFER,z)&&v.drawBuffers(_,z),v.viewport(ne),v.scissor(oe),v.setScissorTest(Ge),V){let ge=W.get(_.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,X)}else if(ve){let ge=O;for(let we=0;we<_.textures.length;we++){let Ie=W.get(_.textures[we]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+we,Ie.__webglTexture,X,ge)}}else if(_!==null&&X!==0){let ge=W.get(_.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ge.__webglTexture,X)}j=-1},this.readRenderTargetPixels=function(_,O,X,z,V,ve,Ae,ge=0){if(!(_&&_.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=W.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Ae!==void 0&&(we=we[Ae]),we){v.bindFramebuffer(N.FRAMEBUFFER,we);try{let Ie=_.textures[ge],Qe=Ie.format,et=Ie.type;if(_.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge),!w.textureFormatReadable(Qe)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(et)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=_.width-z&&X>=0&&X<=_.height-V&&N.readPixels(O,X,z,V,fe.convert(Qe),fe.convert(et),ve)}finally{let Ie=Y!==null?W.get(Y).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(_,O,X,z,V,ve,Ae,ge=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=W.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Ae!==void 0&&(we=we[Ae]),we)if(O>=0&&O<=_.width-z&&X>=0&&X<=_.height-V){v.bindFramebuffer(N.FRAMEBUFFER,we);let Ie=_.textures[ge],Qe=Ie.format,et=Ie.type;if(_.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge),!w.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Le=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Le),N.bufferData(N.PIXEL_PACK_BUFFER,ve.byteLength,N.STREAM_READ),N.readPixels(O,X,z,V,fe.convert(Qe),fe.convert(et),0);let Dt=Y!==null?W.get(Y).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,Dt);let ai=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Xg(N,ai,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Le),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ve),N.deleteBuffer(Le),N.deleteSync(ai),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,O=null,X=0){let z=Math.pow(2,-X),V=Math.floor(_.image.width*z),ve=Math.floor(_.image.height*z),Ae=O!==null?O.x:0,ge=O!==null?O.y:0;q.setTexture2D(_,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,Ae,ge,V,ve),v.unbindTexture()},this.copyTextureToTexture=function(_,O,X=null,z=null,V=0,ve=0){let Ae,ge,we,Ie,Qe,et,Le,Dt,ai,ti=_.isCompressedTexture?_.mipmaps[ve]:_.image;if(X!==null)Ae=X.max.x-X.min.x,ge=X.max.y-X.min.y,we=X.isBox3?X.max.z-X.min.z:1,Ie=X.min.x,Qe=X.min.y,et=X.isBox3?X.min.z:0;else{let oi=Math.pow(2,-V);Ae=Math.floor(ti.width*oi),ge=Math.floor(ti.height*oi),_.isDataArrayTexture?we=ti.depth:_.isData3DTexture?we=Math.floor(ti.depth*oi):we=1,Ie=0,Qe=0,et=0}z!==null?(Le=z.x,Dt=z.y,ai=z.z):(Le=0,Dt=0,ai=0);let Pt=fe.convert(O.format),Bi=fe.convert(O.type),_e;O.isData3DTexture?(q.setTexture3D(O,0),_e=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(q.setTexture2DArray(O,0),_e=N.TEXTURE_2D_ARRAY):(q.setTexture2D(O,0),_e=N.TEXTURE_2D),v.activeTexture(N.TEXTURE0),v.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),v.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),v.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);let hn=v.getParameter(N.UNPACK_ROW_LENGTH),pt=v.getParameter(N.UNPACK_IMAGE_HEIGHT),Tn=v.getParameter(N.UNPACK_SKIP_PIXELS),Qn=v.getParameter(N.UNPACK_SKIP_ROWS),Ys=v.getParameter(N.UNPACK_SKIP_IMAGES);v.pixelStorei(N.UNPACK_ROW_LENGTH,ti.width),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ti.height),v.pixelStorei(N.UNPACK_SKIP_PIXELS,Ie),v.pixelStorei(N.UNPACK_SKIP_ROWS,Qe),v.pixelStorei(N.UNPACK_SKIP_IMAGES,et);let xa=_.isDataArrayTexture||_.isData3DTexture,Lt=O.isDataArrayTexture||O.isData3DTexture;if(_.isDepthTexture){let oi=W.get(_),qs=W.get(O),Ot=W.get(oi.__renderTarget),Ks=W.get(qs.__renderTarget);v.bindFramebuffer(N.READ_FRAMEBUFFER,Ot.__webglFramebuffer),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ks.__webglFramebuffer);for(let ya=0;ya<we;ya++)xa&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(_).__webglTexture,V,et+ya),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(O).__webglTexture,ve,ai+ya)),N.blitFramebuffer(Ie,Qe,Ae,ge,Le,Dt,Ae,ge,N.DEPTH_BUFFER_BIT,N.NEAREST);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||_.isRenderTargetTexture||W.has(_)){let oi=W.get(_),qs=W.get(O);v.bindFramebuffer(N.READ_FRAMEBUFFER,B),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,U);for(let Ot=0;Ot<we;Ot++)xa?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,oi.__webglTexture,V,et+Ot):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,oi.__webglTexture,V),Lt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,qs.__webglTexture,ve,ai+Ot):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,qs.__webglTexture,ve),V!==0?N.blitFramebuffer(Ie,Qe,Ae,ge,Le,Dt,Ae,ge,N.COLOR_BUFFER_BIT,N.NEAREST):Lt?N.copyTexSubImage3D(_e,ve,Le,Dt,ai+Ot,Ie,Qe,Ae,ge):N.copyTexSubImage2D(_e,ve,Le,Dt,Ie,Qe,Ae,ge);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Lt?_.isDataTexture||_.isData3DTexture?N.texSubImage3D(_e,ve,Le,Dt,ai,Ae,ge,we,Pt,Bi,ti.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(_e,ve,Le,Dt,ai,Ae,ge,we,Pt,ti.data):N.texSubImage3D(_e,ve,Le,Dt,ai,Ae,ge,we,Pt,Bi,ti):_.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ve,Le,Dt,Ae,ge,Pt,Bi,ti.data):_.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ve,Le,Dt,ti.width,ti.height,Pt,ti.data):N.texSubImage2D(N.TEXTURE_2D,ve,Le,Dt,Ae,ge,Pt,Bi,ti);v.pixelStorei(N.UNPACK_ROW_LENGTH,hn),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pt),v.pixelStorei(N.UNPACK_SKIP_PIXELS,Tn),v.pixelStorei(N.UNPACK_SKIP_ROWS,Qn),v.pixelStorei(N.UNPACK_SKIP_IMAGES,Ys),ve===0&&O.generateMipmaps&&N.generateMipmap(_e),v.unbindTexture()},this.initRenderTarget=function(_){W.get(_).__webglFramebuffer===void 0&&q.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?q.setTextureCube(_,0):_.isData3DTexture?q.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?q.setTexture2DArray(_,0):q.setTexture2D(_,0),v.unbindTexture()},this.resetState=function(){G=0,k=0,Y=null,v.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let i=this.getContext();i.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),i.unpackColorSpace=ot._getUnpackColorSpace()}};var Gt={ink:{bg:17,swordCore:65535,swordGlow:26367,swordTrail:43775,starfield:16777215},stars:{count:2e3,radiusMin:50,radiusMax:150,size:.5,opacity:.8,rotationSpeed:.002},volley:{max:300,sphereLayers:[{radius:1.5,count:60,rotationSpeed:.025,scale:.7},{radius:2.5,count:100,rotationSpeed:.015,scale:.9},{radius:3.5,count:140,rotationSpeed:.008,scale:1.1}],burstCount:132,gatherTime:.32,fireSpeed:[15,23],fireLife:[1.7,2.5],trailLeads:10},energySword:{coreColor:65535,midColor:26367,outerColor:43775,coreOpacity:.9,midOpacity:.3,outerOpacity:.15,coreRadiusTop:.0045,coreRadiusBottom:.015,midScale:2,outerScale:3,bladeLength:1.2,tipRadius:.0225,tipOpacity:.8},energySwordLow:{midOpacity:.44,outerOpacity:.3},formations:{lerpK:5.2,bigSwordScale:.32,bigSwordOffset:0,pillarRadius:1.5,pillarHeight:15,hexRadius:4,dragonRadius:2.5,dragonHeight:12,rainGroundY:-6,infinityScaleX:6,infinityScaleY:4,infinityScaleZ:3,explodeMaxR:15,taichiRadius:4,taichiTilt:Math.PI/5,waterfallSpeed:42},gestureStableMs:180,gestureEnterMs:130,gestureIdleMs:350,hero:{scale:1.35,follow:14,maxSpeed:26,arriveDur:.6,arriveFromZ:-26,trailLength:26,trailWidth:.34},sparksPerBurst:46,ringMaxRadius:3.4,ringLife:.4,bloom:{intensity:1.8,luminanceThreshold:.15,luminanceSmoothing:.4,radius:.6},vignette:{offset:.35,darkness:.72},grain:.04,exposure:.72,quality:{resScaleMax:1,resScaleMin:.55,resStep:.12,downFps:45,upFps:57,holdDownMs:2e3,holdUpMs:8e3,sampleMs:500},cameraBreath:.12,fovKick:3.5,maxDeviceLongEdge:3200,maxDpr:1.75};var Vt={smoothAlpha:.55,velocityWindow:.12,swipeHi:.75,swipeLo:.3,swipeMaxDur:.7,burstCooldown:.35,swipeMinDist:.07,handLostTimeout:.5,lockEnabled:!0,lockRoi:[.12,.1,.88,.9],lockDwell:.2,lockCandidateTtl:.15,lockMaxJump:.22,lockMaxPalm:.4,lockGapClear:.07,mirror:!0};var zh=class{constructor(e){this.group=new On,e.add(this.group),e.background=new Re(198672),e.fog=new Xo(198672,50,160),this.ambientLight=new il(4491519,.25),e.add(this.ambientLight);let i=2e3,n=new Ut,s=new Float32Array(i*3),r=new Float32Array(i*3);for(let c=0;c<i;c++){let u=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1),h=85+Math.random()*45;s[c*3]=h*Math.sin(d)*Math.cos(u),s[c*3+1]=h*Math.sin(d)*Math.sin(u),s[c*3+2]=h*Math.cos(d);let f=.55+Math.random()*.45;r[c*3]=f*.85,r[c*3+1]=f*.95,r[c*3+2]=f+Math.random()*.15}n.setAttribute("position",new St(s,3)),n.setAttribute("color",new St(r,3));let a=new Is({size:.45,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0,depthWrite:!1});this.starField=new or(n,a),this.group.add(this.starField);let o=200;this.particleGeo=new Ut,this.particlePos=new Float32Array(o*3);for(let c=0;c<o;c++)this.particlePos[c*3]=(Math.random()-.5)*80,this.particlePos[c*3+1]=(Math.random()-.5)*50,this.particlePos[c*3+2]=(Math.random()-.5)*50;this.particleGeo.setAttribute("position",new St(this.particlePos,3));let l=new Is({size:.28,color:7401727,transparent:!0,opacity:.65,blending:ki,depthWrite:!1});this.spiritParticles=new or(this.particleGeo,l),this.group.add(this.spiritParticles)}update(e,i){this.starField.rotation.y=i*.01;let n=this.particleGeo.attributes.position.array;for(let s=0;s<n.length/3;s++)n[s*3+1]+=(Math.sin(i*1.5+s)*.02+.05)*60*e,n[s*3+1]>26&&(n[s*3+1]=-26);this.particleGeo.attributes.position.needsUpdate=!0}};var cs=128,UE=new I,w0=["attribute float nodeID;","attribute float nodeVertexID;","attribute vec3 nodeCenter;","uniform float minID;","uniform float maxID;","uniform float trailLength;","uniform float maxTrailLength;","uniform float verticesPerNode;","uniform vec2 textureTileFactor;","uniform vec4 headColor;","uniform vec4 tailColor;","varying vec4 vColor;","varying float vFraction;","varying float vCross;"].join(`
`),b0=["float fraction = ( maxID - nodeID ) / max(0.0001, maxID - minID );","vFraction = fraction;","vCross = clamp( nodeVertexID / max(1.0, verticesPerNode - 1.0), 0.0, 1.0 );","vColor = ( 1.0 - fraction ) * headColor + fraction * tailColor;","vec4 realPosition = vec4( ( 1.0 - fraction ) * position.xyz + fraction * nodeCenter.xyz, 1.0 );"].join(`
`),BE=`${w0}
void main() {
  ${b0}
  gl_Position = projectionMatrix * modelViewMatrix * realPosition;
}`,FE=`
precision highp float;
varying vec4 vColor;
varying float vFraction;
varying float vCross;
void main() {
  float edge = pow(sin(vCross * 3.14159265), 0.8);   // \u4E2D\u810A\u5B9E\u3001\u4E24\u7F18\u865A
  float along = pow(1.0 - vFraction, 1.6);            // \u5C3E\u7AEF\u6DE1\u51FA
  gl_FragColor = vec4(vColor.rgb, vColor.a * edge * along);
}`,NE=`${w0}
void main() {
  ${b0}
  gl_Position = projectionMatrix * viewMatrix * realPosition;
}`,OE=`
precision highp float;
varying vec4 vColor;
void main() { gl_FragColor = vColor; }`,vl=class t extends Si{constructor(e,i=!1){super(),this.active=!1,this.orientToMovement=i,this.scene=e,this.geometry=null,this.mesh=null,this.nodeCenters=null,this.lastNodeCenter=null,this.currentNodeCenter=null,this.lastOrientationDir=null,this.nodeIDs=null,this.currentLength=0,this.currentEnd=0,this.currentNodeID=0,this.length=0,this.dragTexture=0,this.targetObject=null,this.material=null,this.localHeadGeometry=null,this.verticesPerNode=0,this.vertexCount=0,this.faceCount=0,this.facesPerNode=0,this.faceIndicesPerNode=0,this._m44=new Mt,this._m4=new Mt,this._q=new bn,this._offset=new I,this._worldOri=new I,this._dir=new I,this._pos=new I}static get MaxHeadVertices(){return cs}static get PositionComponentCount(){return 3}static get UVComponentCount(){return 3}static get IndicesPerFace(){return 3}static get FacesPerQuad(){return 2}initialize(e,i,n,s,r,a){this.deactivate(),this.destroyMesh(),this.length=i>0?i+1:0,this.dragTexture=n?1:0,this.targetObject=a,this.initializeLocalHeadGeometry(s,r),this.nodeIDs=[],this.nodeCenters=[];for(let o=0;o<this.length;o++)this.nodeIDs[o]=-1,this.nodeCenters[o]=new I;this.material=e,this.initializeGeometry(),this.initializeMesh(),this.material.uniforms.trailLength.value=0,this.material.uniforms.minID.value=0,this.material.uniforms.maxID.value=0,this.material.uniforms.dragTexture.value=this.dragTexture,this.material.uniforms.maxTrailLength.value=this.length,this.material.uniforms.verticesPerNode.value=this.verticesPerNode,this.material.uniforms.textureTileFactor&&(this.material.uniforms.textureTileFactor.value=new le(1,1)),this.reset()}initializeLocalHeadGeometry(e,i){if(this.localHeadGeometry=[],i){this.verticesPerNode=0;for(let n=0;n<i.length&&n<cs;n++){let s=i[n];s&&s.isVector3&&this.localHeadGeometry.push(s.clone())}this.verticesPerNode=this.localHeadGeometry.length}else{let n=(e||1)/2;this.localHeadGeometry.push(new I(-n,0,0)),this.localHeadGeometry.push(new I(n,0,0)),this.verticesPerNode=2}this.facesPerNode=(this.verticesPerNode-1)*2,this.faceIndicesPerNode=this.facesPerNode*3}initializeGeometry(){this.vertexCount=this.length*this.verticesPerNode,this.faceCount=this.length*this.facesPerNode;let e=new Ut,i=(n,s)=>{let r=new St(n,s);return r.setUsage(mr),r};e.setAttribute("nodeID",i(new Float32Array(this.vertexCount),1)),e.setAttribute("nodeVertexID",i(new Float32Array(this.vertexCount),1)),e.setAttribute("nodeCenter",i(new Float32Array(this.vertexCount*3),3)),e.setAttribute("position",i(new Float32Array(this.vertexCount*3),3)),e.setAttribute("uv",i(new Float32Array(this.vertexCount*3),3)),e.setIndex(i(new Uint32Array(this.faceCount*3),1)),this.geometry=e}zeroVertices(){let e=this.geometry.getAttribute("position");for(let i=0;i<this.vertexCount;i++)e.array[i*3]=0,e.array[i*3+1]=0,e.array[i*3+2]=0;e.needsUpdate=!0}zeroIndices(){let e=this.geometry.getIndex();e.array.fill(0),e.needsUpdate=!0}formInitialFaces(){this.zeroIndices();for(let e=0;e<this.length-1;e++)this.connectNodes(e,e+1);this.geometry.getIndex().needsUpdate=!0}initializeMesh(){this.mesh=new ii(this.geometry,this.material),this.mesh.matrixAutoUpdate=!1,this.mesh.frustumCulled=!1}destroyMesh(){this.mesh&&(this.scene.remove(this.mesh),this.mesh=null)}reset(){this.currentLength=0,this.currentEnd=-1,this.lastNodeCenter=null,this.currentNodeCenter=null,this.lastOrientationDir=null,this.currentNodeID=0,this.formInitialFaces(),this.zeroVertices(),this.geometry.setDrawRange(0,0)}updateUniforms(){this.material.uniforms.minID.value=this.currentLength<this.length?0:this.currentNodeID-this.length,this.material.uniforms.maxID.value=this.currentNodeID,this.material.uniforms.trailLength.value=this.currentLength,this.material.uniforms.maxTrailLength.value=this.length,this.material.uniforms.verticesPerNode.value=this.verticesPerNode}advance(){this.targetObject&&(this.targetObject.updateMatrixWorld(),this._m44.copy(this.targetObject.matrixWorld),this.advanceWithTransform(this._m44),this.updateUniforms())}advanceWithPositionAndOrientation(e,i){this.advanceGeometry({position:e,tangent:i},null),this.updateUniforms()}advanceWorld(e,i){let n=this.currentEnd+1>=this.length?0:this.currentEnd+1;this._localHead||(this._localHead=Array.from({length:cs},()=>new I),this._localHead2=Array.from({length:cs},()=>new I));let s=this.geometry.getAttribute("position");this.updateNodeCenter(n,e);let r=UE.copy(i).multiplyScalar(.5);this._localHead[0].copy(e).sub(r),this._localHead[1].copy(e).add(r);for(let a=0;a<2;a++){let o=(this.verticesPerNode*n+a)*t.PositionComponentCount,l=this._localHead[a];s.array[o]=l.x,s.array[o+1]=l.y,s.array[o+2]=l.z}s.needsUpdate=!0,this._postAdvance(n),this.updateUniforms()}_postAdvance(e){if(this.currentLength>=1&&(this.connectNodes(this.currentEnd,e),this.currentLength>=this.length)){let i=this.currentEnd+1>=this.length?0:this.currentEnd+1;this.disconnectNodes(i)}this.currentLength<this.length&&this.currentLength++,this.currentEnd++,this.currentEnd>=this.length&&(this.currentEnd=0),this.currentLength>=1&&this.geometry.setDrawRange(0,this.currentLength<this.length?(this.currentLength-1)*this.faceIndicesPerNode:this.currentLength*this.faceIndicesPerNode),this.updateNodeID(this.currentEnd,this.currentNodeID),this.currentNodeID++}advanceWithTransform(e){this.advanceGeometry(null,e)}advanceGeometry(e,i){let n=this.currentEnd+1>=this.length?0:this.currentEnd+1;if(i?this.updateNodePositionsFromTransformMatrix(n,i):this.updateNodePositionsFromOrientationTangent(n,e.position,e.tangent),this.currentLength>=1&&(this.connectNodes(this.currentEnd,n),this.currentLength>=this.length)){let s=this.currentEnd+1>=this.length?0:this.currentEnd+1;this.disconnectNodes(s)}this.currentLength<this.length&&this.currentLength++,this.currentEnd++,this.currentEnd>=this.length&&(this.currentEnd=0),this.currentLength>=1&&this.geometry.setDrawRange(0,this.currentLength<this.length?(this.currentLength-1)*this.faceIndicesPerNode:this.currentLength*this.faceIndicesPerNode),this.updateNodeID(this.currentEnd,this.currentNodeID),this.currentNodeID++}updateHead(){this.currentEnd<0||!this.targetObject||(this.targetObject.updateMatrixWorld(),this._m4.copy(this.targetObject.matrixWorld),this.updateNodePositionsFromTransformMatrix(this.currentEnd,this._m4))}updateNodeID(e,i){this.nodeIDs[e]=i;let n=this.geometry.getAttribute("nodeID"),s=this.geometry.getAttribute("nodeVertexID");for(let r=0;r<this.verticesPerNode;r++){let a=e*this.verticesPerNode+r;n.array[a]=i,s.array[a]=r}n.needsUpdate=!0,s.needsUpdate=!0}updateNodeCenter(e,i){this.lastNodeCenter=this.currentNodeCenter,this.currentNodeCenter=this.nodeCenters[e],this.currentNodeCenter.copy(i);let n=this.geometry.getAttribute("nodeCenter");for(let s=0;s<this.verticesPerNode;s++){let r=(e*this.verticesPerNode+s)*3;n.array[r]=i.x,n.array[r+1]=i.y,n.array[r+2]=i.z}n.needsUpdate=!0}_tempHead(e){return this._localHead||(this._localHead=Array.from({length:cs},()=>new I),this._localHead2=Array.from({length:cs},()=>new I)),this._localHead[e]}updateNodePositionsFromOrientationTangent(e,i,n){let s=this.geometry.getAttribute("position");this.updateNodeCenter(e,i),this._localHead||(this._localHead=Array.from({length:cs},()=>new I),this._localHead2=Array.from({length:cs},()=>new I)),this._offset.copy(i);let r=new I(1,0,0);this._q.setFromUnitVectors(r,n);for(let a=0;a<this.localHeadGeometry.length;a++){let o=this._localHead[a];o.copy(this.localHeadGeometry[a]),o.applyQuaternion(this._q),o.add(this._offset)}for(let a=0;a<this.localHeadGeometry.length;a++){let o=(this.verticesPerNode*e+a)*t.PositionComponentCount,l=this._localHead[a];s.array[o]=l.x,s.array[o+1]=l.y,s.array[o+2]=l.z}s.needsUpdate=!0}static getMatrix3FromMatrix4(e,i){let n=i.elements;e.set(n[0],n[1],n[2],n[4],n[5],n[6],n[8],n[9],n[10])}updateNodePositionsFromTransformMatrix(e,i){let n=this.geometry.getAttribute("position");this._pos.set(0,0,0).applyMatrix4(i),this.updateNodeCenter(e,this._pos),this._localHead||(this._localHead=Array.from({length:cs},()=>new I),this._localHead2=Array.from({length:cs},()=>new I));for(let s=0;s<this.localHeadGeometry.length;s++)this._localHead2[s].copy(this.localHeadGeometry[s]);for(let s=0;s<this.localHeadGeometry.length;s++)this._localHead2[s].applyMatrix4(i);if(this.lastNodeCenter&&this.orientToMovement&&(this._m3||(this._m3=new Ye),t.getMatrix3FromMatrix4(this._m3,i),this._worldOri.set(0,0,-1).applyMatrix3(this._m3),this._dir.copy(this.currentNodeCenter).sub(this.lastNodeCenter).normalize(),this._dir.lengthSq()<=1e-4&&this.lastOrientationDir&&this._dir.copy(this.lastOrientationDir),this._dir.lengthSq()>1e-4)){this.lastOrientationDir||(this.lastOrientationDir=new I),this._q.setFromUnitVectors(this._worldOri,this._dir);for(let s=0;s<this.localHeadGeometry.length;s++){let r=this._localHead2[s];this._offset2=this._offset2||new I,this._offset2.copy(this.currentNodeCenter),r.sub(this._offset2).applyQuaternion(this._q).add(this._offset2)}}for(let s=0;s<this.localHeadGeometry.length;s++){let r=(this.verticesPerNode*e+s)*t.PositionComponentCount,a=this._localHead2[s];n.array[r]=a.x,n.array[r+1]=a.y,n.array[r+2]=a.z}n.needsUpdate=!0}connectNodes(e,i){let n=this.geometry.getIndex();for(let s=0;s<this.localHeadGeometry.length-1;s++){let r=this.verticesPerNode*e+s,a=this.verticesPerNode*i+s,o=(e*this.facesPerNode+s*t.FacesPerQuad)*t.IndicesPerFace;n.array[o]=r,n.array[o+1]=a,n.array[o+2]=r+1,n.array[o+3]=a,n.array[o+4]=a+1,n.array[o+5]=r+1}n.needsUpdate=!0}disconnectNodes(e){let i=this.geometry.getIndex();for(let n=0;n<this.localHeadGeometry.length-1;n++){let s=(e*this.facesPerNode+n*t.FacesPerQuad)*t.IndicesPerFace;for(let r=0;r<6;r++)i.array[s+r]=0}i.needsUpdate=!0}deactivate(){this.active&&(this.scene.remove(this.mesh),this.active=!1)}activate(){!this.active&&this.mesh&&(this.scene.add(this.mesh),this.active=!0)}static _uniforms(){return{trailLength:{value:0},verticesPerNode:{value:0},minID:{value:0},maxID:{value:0},dragTexture:{value:0},maxTrailLength:{value:0},textureTileFactor:{value:new le(1,1)},headColor:{value:new ut},tailColor:{value:new ut}}}static createMaterial(e,i,n={}){return Object.assign(n,t._uniforms()),new Xe({uniforms:n,vertexShader:e,fragmentShader:i,transparent:!0,blending:bs,depthTest:!0,depthWrite:!1,side:li})}static createBaseMaterial(e){return t.createMaterial(NE,OE,e)}static createGlowMaterial(e,i){let n=t.createMaterial(BE,FE);return n.blending=ki,n.alphaTest=0,n.uniforms.headColor.value.set(e.r,e.g,e.b,e.a??1),n.uniforms.tailColor.value.set(i.r,i.g,i.b,i.a??0),n.toneMapped=!1,n}};function kE(t){let e=0,i=0,n=t.map(h=>{let f=h.attributes.position;h.attributes.normal||h.computeVertexNormals();let g=h.attributes.normal,y=h.index;return e+=f.count,i+=y?y.count:f.count,{pos:f,norm:g,idx:y}}),s=new Ut,r=new Float32Array(e*3),a=new Float32Array(e*3),o=e>65535?new Uint32Array(i):new Uint16Array(i),l=0,c=0,u=0,d=0;for(let h of n){if(r.set(h.pos.array,l),l+=h.pos.array.length,a.set(h.norm.array,c),c+=h.norm.array.length,h.idx)for(let f=0;f<h.idx.count;f++)o[u++]=h.idx.array[f]+d;else for(let f=0;f<h.pos.count;f++)o[u++]=f+d;d+=h.pos.count}return s.setAttribute("position",new St(r,3)),s.setAttribute("normal",new St(a,3)),s.setIndex(new St(o,1)),s}function C0(){let t=new Ka(.12,2.5,4);t.scale(.4,1,1),t.rotateX(Math.PI/2),t.translate(0,0,1);let e=new lr(.5,.08,.15);e.translate(0,0,-.2);let i=new qa(.05,.06,.7,6);return i.rotateX(Math.PI/2),i.translate(0,0,-.6),kE([t,e,i])}function R0(){let t=new Ka(.15,2.6,4);return t.scale(.5,1,1),t.rotateX(Math.PI/2),t.translate(0,0,1),t}var GE=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,HE=`
varying vec2 vUv;
uniform float uTime;
uniform float uOpacity;

void main() {
  vec2 center = vec2(0.5, 0.5);
  float dist = distance(vUv, center);
  if (dist > 0.5) discard;

  // 1. \u540C\u5FC3\u80FD\u91CF\u5149\u73AF
  float ring1 = smoothstep(0.48, 0.485, dist) - smoothstep(0.49, 0.495, dist);
  float ring2 = smoothstep(0.42, 0.424, dist) - smoothstep(0.428, 0.432, dist);
  float ring3 = smoothstep(0.32, 0.324, dist) - smoothstep(0.328, 0.332, dist);
  float ringInner = smoothstep(0.14, 0.145, dist) - smoothstep(0.15, 0.155, dist);

  // 2. \u65CB\u8F6C\u7B26\u6587\u5149\u5708\uFF08\u6781\u5750\u6807\u89D2\u5411\u660E\u6697\u4EA4\u66FF\uFF09
  float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
  float runes1 = sin(angle * 14.0 + uTime * 0.8) * 0.5 + 0.5;
  float runeRing1 = smoothstep(0.34, 0.41, dist) * runes1 * smoothstep(0.42, 0.35, dist);

  float runes2 = cos(angle * 9.0 - uTime * 0.5) * 0.5 + 0.5;
  float runeRing2 = smoothstep(0.22, 0.31, dist) * runes2 * smoothstep(0.32, 0.23, dist);

  // 3. \u6838\u5FC3\u6CD5\u773C\u5FAE\u5149
  float coreGlow = smoothstep(0.15, 0.0, dist) * (0.6 + 0.4 * sin(uTime * 2.5));

  // \u534E\u590F\u9752\u84DD\u4ED9\u6C14\u8272\u8C03\uFF1A\u9752\u5185\u6838 + \u6E5B\u84DD\u8FB9\u7F18
  vec3 color = vec3(0.15, 0.85, 1.0);
  vec3 outerColor = vec3(0.04, 0.38, 0.95);
  vec3 finalColor = mix(color, outerColor, dist * 2.0);

  float alpha = (ring1 * 1.3 + ring2 * 0.95 + ring3 * 0.85 + ringInner * 0.75 +
                 runeRing1 * 0.7 + runeRing2 * 0.55 + coreGlow * 0.45) * uOpacity;

  gl_FragColor = vec4(finalColor, alpha);
}
`,Vh=class{constructor(e){this.uniforms={uTime:{value:0},uOpacity:{value:0}},this.material=new Xe({vertexShader:GE,fragmentShader:HE,uniforms:this.uniforms,transparent:!0,blending:ki,depthWrite:!1,side:li}),this.mesh=new ii(new Vr(1,1),this.material),this.mesh.rotation.x=-Math.PI/2,this.mesh.scale.set(45,45,1),this.mesh.visible=!1,e.add(this.mesh),this.opacity=0,this.targetOpacity=0}setMode(e){this.targetOpacity=e?.95:0}update(e,i,n){this.uniforms.uTime.value=i;let s=1-Math.exp(-6.5*e);if(this.opacity+=(this.targetOpacity-this.opacity)*s,this.uniforms.uOpacity.value=this.opacity,this.opacity<.01){this.mesh.visible=!1;return}this.mesh.visible=!0,n&&this.mesh.position.set(n.x,n.y-12,n.z||0),this.mesh.rotation.z=i*.12}};var Wh=class{constructor(e,i=160){this.maxSegments=i,this.geometry=new Ut;let n=new Float32Array(i*3*2);this.geometry.setAttribute("position",new St(n,3)),this.material=new Xa({color:6809849,transparent:!0,opacity:.95,blending:ki,depthWrite:!1}),this.mesh=new Zo(this.geometry,this.material),this.mesh.visible=!1,e.add(this.mesh),this.intensity=0,this.targetIntensity=0}setMode(e){this.targetIntensity=e?1:0}update(e,i,n,s){let r=1-Math.exp(-6*e);if(this.intensity+=(this.targetIntensity-this.intensity)*r,this.intensity<.05||!n||s<2){this.mesh.visible=!1;return}this.mesh.visible=!0;let a=this.geometry.attributes.position,o=a.array,l=0,c=Math.floor(40+this.intensity*(this.maxSegments-45)),u=28,d=.35+this.intensity*.45,h=0;for(let f=0;f<s&&h<c;f+=3){let g=Math.sin(i*18+f*3.7),y=1+Math.abs(Math.floor(g*23))%19,m=(f+y)%s;if(m===f)continue;let p=n[f],S=n[m];if(!p||!S)continue;let b=S.x-p.x,A=S.y-p.y,C=S.z-p.z,M=Math.hypot(b,A,C);if(M>1.5&&M<u){let T=(Math.sin(i*35+f*7.1)-.5)*d*M*.08,x=(Math.cos(i*30+f*5.3)-.5)*d*M*.08,E=(Math.sin(i*40+f*3.7)-.5)*d*M*.08;if(o[l++]=p.x,o[l++]=p.y,o[l++]=p.z,o[l++]=(p.x+S.x)*.5+T,o[l++]=(p.y+S.y)*.5+x,o[l++]=(p.z+S.z)*.5+E,h++,h>=c)break;o[l++]=(p.x+S.x)*.5+T,o[l++]=(p.y+S.y)*.5+x,o[l++]=(p.z+S.z)*.5+E,o[l++]=S.x,o[l++]=S.y,o[l++]=S.z,h++}}for(;l<o.length;)o[l++]=0;a.needsUpdate=!0,this.material.opacity=Math.min(1,.6+.4*Math.sin(i*20))*this.intensity}};var Df={noise3D:(t,e,i)=>Math.sin(t*1.2+e*.8)*Math.cos(e*1.1+i*.9)*Math.sin(i*.7+t*1.3)},zE=new I,Bt=new I,zi=new I,VE=new I,vr=new I,WE=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768,D0=new Re(58879),I0=new Re(3718648),XE=new Re(16722748),YE=new Re(16719408),Ct={swordCount:WE?400:999,pathHistoryLength:600,maxSpeed:25,sprintSpeed:50,steerForce:28,separationDist:3,separationForce:10,noiseScale:.3,noiseStrength:1,shieldRadius:18,shieldOrbitSpeed:2.5,lotusRadius:24,lotusRotateSpeed:2.5,dagengRadius:30,dagengHeight:46,dagengRotateSpeed:.2},qE={IDLE:"LOTUS",FIST:"BALL",TWO_FINGERS:"DRAGON",OPEN_PALM:"LOTUS",THUMB_UP:"THUMBSUP",SHAKA:"HEXAGRAM",ROCK:"DAGENG",PALM_DOWN:"RAIN",DOUBLE_FIST:"BAGUA",CROSSED_HANDS:"INFINITY",HANDS_PUSH:"EXPLODE",HANDS_CUP:"ENERGY_BALL",SALUTE:"QIANTANG",FINGER_HEART:"WOAI",THREE_FINGERS:"LETTERS"},KE="Molispark";function P0(t,e,i,n,s){let r=document.createElement("canvas");r.width=e,r.height=i;let a=r.getContext("2d",{willReadFrequently:!0});s(r,a);let o=a.getImageData(0,0,e,i).data,l=[];for(let T=0;T<i;T+=2)for(let x=0;x<e;x+=2)o[(T*e+x)*4+3]>96&&l.push(x,T);let c=l.length/2,u=1234567,d=()=>(u=u*1664525+1013904223>>>0,u/4294967296);for(let T=c-1;T>0;T--){let x=Math.floor(d()*(T+1)),E=l[T*2],L=l[T*2+1];l[T*2]=l[x*2],l[T*2+1]=l[x*2+1],l[x*2]=E,l[x*2+1]=L}let h=new Float32Array(t),f=new Float32Array(t),g=new Float32Array(t),y=new Float32Array(t),m=1e9,p=-1e9,S=1e9,b=-1e9;for(let T=0;T<c;T++){let x=l[T*2],E=l[T*2+1];x<m&&(m=x),x>p&&(p=x),E<S&&(S=E),E>b&&(b=E)}let A=n/Math.max(1,p-m),C=(m+p)/2,M=(S+b)/2;for(let T=0;T<t;T++){let x=Math.floor(T*(c/t))%c,E=l[x*2],L=l[x*2+1],P=Math.sin(T*12.9898)*43758.5453,R=Math.sin(T*78.233)*12543.123,D=(P-Math.floor(P)-.5)*3,B=(R-Math.floor(R)-.5)*3;h[T]=(E+D-C)*A,f[T]=-(L+B-M)*A,g[T]=Math.sin((E-m)/Math.max(1,p-m)*Math.PI)*1.2,y[T]=Math.sin(T*12.9898)*.14}return{px:h,py:f,pz:g,rot:y}}function QE(t,e,i=52,n=0,s){let o=document.createElement("canvas").getContext("2d"),l=`bold 300px ${s||'"YujianKai", "STKaiti", "KaiTi", "Microsoft YaHei", serif'}`;o.font=l;let c=Math.ceil(o.measureText(e).width)+150,u=Math.ceil(300*1.35);return P0(t,c,u,i,(d,h)=>{h.font=l,h.textAlign="center",h.textBaseline="middle",h.fillStyle="#fff",h.fillText(e,c/2,u/2),n>0&&(h.lineWidth=n,h.strokeStyle="#fff",h.lineJoin="round",h.lineCap="round",h.strokeText(e,c/2,u/2))})}function ZE(t,e,i,n,s){let r=document.createElement("canvas");r.width=e,r.height=i;let a=r.getContext("2d",{willReadFrequently:!0});s(r,a);let o=a.getImageData(0,0,e,i).data,l=(M,T)=>M>=0&&T>=0&&M<e&&T<i&&o[(T*e+M)*4+3]>96,c=[];for(let M=0;M<i;M++)for(let T=0;T<e;T++)l(T,M)&&(l(T,M-1)||c.push(T+.5,M),l(T,M+1)||c.push(T+.5,M+1),l(T-1,M)||c.push(T,M+.5),l(T+1,M)||c.push(T+1,M+.5));let u=c.length/2,d=new Float32Array(t),h=new Float32Array(t),f=new Float32Array(t),g=new Float32Array(t),y=1e9,m=-1e9,p=1e9,S=-1e9;for(let M=0;M<u;M++){let T=c[M*2],x=c[M*2+1];T<y&&(y=T),T>m&&(m=T),x<p&&(p=x),x>S&&(S=x)}let b=n/Math.max(1,m-y),A=(y+m)/2,C=(p+S)/2;for(let M=0;M<t;M++){let T=Math.floor(M*(u/t))%u,x=c[T*2],E=c[T*2+1];d[M]=(x-A)*b,h[M]=-(E-C)*b,f[M]=Math.sin((x-y)/Math.max(1,m-y)*Math.PI)*.4,g[M]=Math.sin(M*12.9898)*.14}return{px:d,py:h,pz:f,rot:g}}function JE(t){let i='"Microsoft YaHei", "PingFang SC", "Noto Sans SC", "YujianKai", "STKaiti", "KaiTi", sans-serif',n=Math.ceil(425),s=Math.ceil(340*2.4);return ZE(t,n,s,14,(r,a)=>{a.font=`bold 340px ${i}`,a.textAlign="center",a.textBaseline="middle",a.fillStyle="#fff",a.fillText("\u94B1",n/2,s*.27),a.fillText("\u5858",n/2,s*.73)})}function jE(t,e,i,n,s){t.beginPath(),t.moveTo(e,i+s*.35),t.bezierCurveTo(e+n*.5,i-s*.1,e+n*.36,i-s*.55,e,i-s*.16),t.bezierCurveTo(e-n*.36,i-s*.55,e-n*.5,i-s*.1,e,i+s*.35),t.closePath(),t.fill()}function $E(t,e,i,n,s,r,a=1,o=null){let l=document.createElement("canvas");l.width=e,l.height=i;let c=l.getContext("2d",{willReadFrequently:!0});r(l,c);let u=c.getImageData(0,0,e,i).data,d=(D,B)=>D>=0&&B>=0&&D<e&&B<i&&u[(B*e+D)*4+3]>96,h=[],f=o?[]:null;for(let D=s>>1;D<i;D+=s)for(let B=s>>1;B<e;B+=s)d(B,D)&&(h.push(B,D),f&&f.push(o(B,D)?1:0));let g=h.length/2,y=987654321,m=()=>(y=y*1664525+1013904223>>>0,y/4294967296);for(let D=g-1;D>0;D--){let B=Math.floor(m()*(D+1)),U=h[D*2],G=h[D*2+1];if(h[D*2]=h[B*2],h[D*2+1]=h[B*2+1],h[B*2]=U,h[B*2+1]=G,f){let k=f[D];f[D]=f[B],f[B]=k}}let p=new Float32Array(t),S=new Float32Array(t),b=new Float32Array(t),A=new Float32Array(t),C=o?new Uint8Array(t):null,M=1e9,T=-1e9,x=1e9,E=-1e9;for(let D=0;D<g;D++){let B=h[D*2],U=h[D*2+1];B<M&&(M=B),B>T&&(T=B),U<x&&(x=U),U>E&&(E=U)}let L=n/Math.max(1,T-M),P=(M+T)/2,R=(x+E)/2;for(let D=0;D<t;D++){let B=Math.floor(D*(g/t))%g,U=h[B*2],G=h[B*2+1],k=Math.sin(D*12.9898)*43758.5453,Y=(k-Math.floor(k)-.5)*s*.3;p[D]=(U+Y-P)*L,S[D]=-(G-R)*L*a,b[D]=Math.sin((U-M)/Math.max(1,T-M)*Math.PI)*.8,A[D]=Math.sin(D*12.9898)*.14,C&&(C[D]=f[B])}return{px:p,py:S,pz:b,rot:A,flags:C}}function eT(t){let n='"Microsoft YaHei", "PingFang SC", "Noto Sans SC", "YujianKai", "STKaiti", "KaiTi", sans-serif',s=document.createElement("canvas").getContext("2d"),r=`bold 300px ${n}`;s.font=r;let a=Math.ceil(Math.max(s.measureText("\u6211").width,s.measureText("\u94B1").width,s.measureText("\u5858").width)),o=Math.max(a,Math.ceil(300*.95)),l=300*.22,c=Math.ceil(l*2+o*4+162),u=Math.ceil(300*1.35),d=150*Math.tan(Math.PI/7.2)*(innerWidth/Math.max(1,innerHeight)),h=Math.min(118,d*.92),f=u*.53,g=l+o*.5,y=l+o*1.5+54,m=l+o*2.5+108,p=l+o*3.5+162;return $E(t,c,u,h,11,(S,b)=>{b.font=r,b.textAlign="center",b.textBaseline="middle",b.fillStyle="#fff",b.fillText("\u6211",g,f),jE(b,y,f,300*.92,300*.92),b.fillText("\u94B1",m,f),b.fillText("\u5858",p,f)},1.1,S=>S>y-300*.5&&S<y+300*.5)}function tT(t){return P0(t,460,460,17,(e,i)=>{i.fillStyle="#fff",i.strokeStyle="#fff";let n=(s,r,a,o,l)=>{i.beginPath(),i.roundRect?(i.roundRect(s,r,a,o,l),i.fill()):i.fillRect(s,r,a,o)};n(55,173,103,173,22),n(155,190,250,172,30),n(295,150,130,92,24);for(let[s,r]of[[188,30],[242,32],[294,32],[342,30]])i.beginPath(),i.arc(402,s,r,0,Math.PI*2),i.fill();i.lineCap="round",i.lineWidth=74,i.beginPath(),i.moveTo(245,205),i.quadraticCurveTo(233,108,258,42),i.stroke(),i.globalCompositeOperation="destination-out",i.lineWidth=7,i.beginPath(),i.moveTo(158,182),i.lineTo(158,338),i.stroke(),i.globalCompositeOperation="source-over"})}var Xh=class{constructor(e){this.scene=e,this.swordTotal=Ct.swordCount,this.max=this.swordTotal;let i=C0(),n=R0();this.material=new is({color:16777215,transparent:!0,opacity:.9}),this.auraMaterial=new is({color:16777215,transparent:!0,opacity:.6,blending:ki}),this.mesh=new Wa(i,this.material,this.swordTotal),this.mesh.instanceMatrix.setUsage(mr),this.mesh.frustumCulled=!1,e.add(this.mesh),this.aura=new Wa(n,this.auraMaterial,this.swordTotal),this.aura.instanceMatrix.setUsage(mr),this.aura.frustumCulled=!1,e.add(this.aura);for(let s=0;s<this.swordTotal;s++)this.mesh.setColorAt(s,D0),this.aura.setColorAt(s,I0);this._tinted=!1,this.meshMid=this.aura,this.meshOuter=this.aura,this.magicCircle=new Vh(e),this.divineLightning=new Wh(e,100),this.positions=[],this.velocities=[],this.dummy=new Si;for(let s=0;s<this.swordTotal;s++)this.positions.push(new I((Math.random()-.5)*20,(Math.random()-.5)*15,(Math.random()-.5)*10-5)),this.velocities.push(new I);this.pathHistory=[];for(let s=0;s<Ct.pathHistoryLength;s++)this.pathHistory.push(new I(0,0,0));this.lastDirection=new I(0,0,0),this._origin=new I(0,0,0),this.formation="LOTUS",this.handPos=new I(0,0,0),this.pointDir=new I(1,0,0),this.handVel={vx:0,vy:0,speed:0},this.palmN=new I(0,0,1),this.isTracking=!1,this.burstMode=new Uint8Array(this.swordTotal),this.burstAge=new Float32Array(this.swordTotal),this.burstLife=new Float32Array(this.swordTotal),this.scl=new Float32Array(this.swordTotal).fill(1),this._cursor=0,this.handsCX=0,this.handsCY=0,this.handsDist=.3,this.trails=[],this.trailFree=[],this._shapes={},this._activeShape=null,this._shapeAge=0;for(let s=0;s<20;s++){let r=vl.createGlowMaterial(new Re(.4,.9,1),new Re(0,.45,1));r.uniforms.headColor.value.set(.4,.9,1,.6);let a=new vl(e,!1);a.initialize(r,22,!1,.9,null,null),a.user={idx:-1},e.add(a.mesh),a.deactivate(),this.trails.push(a),this.trailFree.push(a)}this.bigSword=new On,this.bigSword.visible=!1,e.add(this.bigSword),this.hexLines=[]}_tintSwords(e){this._tinted=!!e;for(let i=0;i<this.swordTotal;i++){let n=!!(e&&e[i]);this.mesh.setColorAt(i,n?XE:D0),this.aura.setColorAt(i,n?YE:I0)}this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.aura.instanceColor&&(this.aura.instanceColor.needsUpdate=!0)}setMode(e,i){let n=qE[e]||"LOTUS";if(i&&this.handPos.set(i.x,i.y,i.z||0),n===this.formation)return;this.formation=n;let s=this.swordTotal;if(n==="EXPLODE")for(let r=0;r<s;r++){let a=Math.PI*(1+Math.sqrt(5))*r,o=Math.acos(1-2*(r+.5)/s),l=30+Math.random()*18;this.velocities[r].set(Math.sin(o)*Math.cos(a)*l,Math.cos(o)*l,Math.sin(o)*Math.sin(a)*l*.6)}else if(n==="RAIN")for(let r=0;r<s;r++){let a=(Math.random()-.5)*76,o=20+Math.random()*24,l=(Math.random()-.5)*28;this.positions[r].set(a,o,l);let c=-(48+Math.random()*24);this.velocities[r].set((Math.random()-.5)*1.5,c,(Math.random()-.5)*1.5)}else if(n==="LETTERS"||n==="THUMBSUP"||n==="QIANTANG"||n==="WOAI"){this._shapes[n]||(this._shapes[n]=n==="LETTERS"?QE(s,KE,52):n==="THUMBSUP"?tT(s):n==="WOAI"?eT(s):JE(s)),this._activeShape=this._shapes[n],n==="WOAI"&&this._activeShape.flags?this._tintSwords(this._activeShape.flags):this._tinted&&this._tintSwords(null),this._shapeAge=0;for(let r=0;r<s;r++){let a=r/s,o=Math.acos(1-2*a),l=Math.PI*(1+Math.sqrt(5))*r,c=26+r%7*1.4,u=l,d=Math.cos(u)*c*Math.sin(o),h=Math.cos(o)*c,f=Math.sin(u)*c*Math.sin(o)*.8;this.velocities[r].set(d*.6,h*.6,f*.6),this.velocities[r].x+=-Math.sin(u)*12,this.velocities[r].y+=Math.cos(u)*8}}}setHands(e,i,n,s,r,a,o,l){e&&this.handPos.set(e.x,e.y,e.z||0),n&&(this.handsCX=n.x,this.handsCY=n.y),this.handsDist=s||.3,o&&(Math.abs(o.x)>.01||Math.abs(o.y)>.01)?this.pointDir.set(o.x,o.y,o.z||0):r&&this.pointDir.set(r.x,r.y,r.z||0),a&&this.palmN.set(a.x,a.y,a.z||1),l&&(this.handVel=l)}updatePath(e){let i=this.pathHistory[0],n=zi.copy(e).sub(i);if(n.length()>.08){this.lastDirection.copy(n.normalize());let r=this.pathHistory.pop();r.copy(e),this.pathHistory.unshift(r)}}extendPath(){if(this.lastDirection.length()<.01)return;let e=this.pathHistory[0];if(this.lastDirection.multiplyScalar(.96),this.lastDirection.length()>.05){let i=this.pathHistory.pop();i.copy(e).addScaledVector(this.lastDirection,.08),this.pathHistory.unshift(i)}}burst(e,i,n,s,r){let a=Math.min(Math.floor(this.swordTotal*.4),400),o=-s,l=n;for(let u=0;u<a;u++){let d=this._cursor++%this.swordTotal;this.burstMode[d]=1,this.burstAge[d]=0,this.burstLife[d]=1.6+Math.random()*.8;let h=75+Math.random()*25,f=(u/(a-1)||0)-.5;if(this.velocities[d].set((n+o*f*.28)*h,(s+l*f*.28)*h,(Math.random()-.5)*6),u<16&&this.trailFree.length){let g=this.trailFree.pop();g.user.idx=d,g.age=0,g.reset(),g.activate()}}let c=Math.min(r*12,22);for(let u=0;u<this.swordTotal;u++)this.burstMode[u]===0&&(this.velocities[u].x+=n*c*(.4+Math.random()*.6),this.velocities[u].y+=s*c*(.4+Math.random()*.6))}launchCloud(e,i){let n=e,s=i;if(this.pointDir&&(Math.abs(this.pointDir.x)>.05||Math.abs(this.pointDir.y)>.05)){n=this.pointDir.x*.75+e*.25,s=this.pointDir.y*.75+i*.25;let o=Math.hypot(n,s)||1;n/=o,s/=o}let r=75+Math.random()*15,a=0;for(let o=0;o<this.swordTotal;o++){this.burstMode[o]=1,this.burstAge[o]=0,this.burstLife[o]=1.5+Math.random()*.8;let l=(Math.random()-.5)*.2;if(this.velocities[o].set((n-s*l)*r,(s+n*l)*r,(Math.random()-.5)*6),o<16&&this.trailFree.length){let c=this.trailFree.pop();c.user.idx=o,c.age=0,c.reset(),c.activate(),a++}}return a}getFormationBounds(){let e=1/0,i=-1/0,n=1/0,s=-1/0,r=1/0,a=-1/0;for(let c=0;c<this.swordTotal;c++){let u=this.positions[c];u.x<e&&(e=u.x),u.x>i&&(i=u.x),u.y<n&&(n=u.y),u.y>s&&(s=u.y),u.z<r&&(r=u.z),u.z>a&&(a=u.z)}let o=new I((e+i)*.5,(n+s)*.5,(r+a)*.5),l=Math.max(i-e,s-n,a-r)*.5;return{center:o,size:Math.max(8,Math.min(l,45))}}update(e,i,n){this.isTracking=!!n;let s=i,r=1/60,a=this.handPos;if(this.isTracking)this.formation==="DRAGON"&&this.extendPath();else{a=this._origin;let c=this.pathHistory.pop();c.copy(this._origin),this.pathHistory.unshift(c)}let o=this.formation;(o==="LETTERS"||o==="THUMBSUP"||o==="QIANTANG"||o==="WOAI")&&(this._shapeAge+=r);let l=this.dummy;for(let c=0;c<this.swordTotal;c++){let u=this.positions[c],d=this.velocities[c],h=zE.set(0,0,0);if(this.burstMode[c]===1){this.burstAge[c]+=e,u.addScaledVector(d,e),this.burstAge[c]>=this.burstLife[c]&&(this.burstMode[c]=2),l.position.copy(u),l.lookAt(Bt.copy(u).add(d)),l.scale.set(1,1,1),l.updateMatrix(),this.mesh.setMatrixAt(c,l.matrix),this.aura.setMatrixAt(c,l.matrix);continue}else if(this.burstMode[c]===2){let R=a.x-u.x,D=a.y-u.y,B=a.z-u.z,U=Math.hypot(R,D,B)+1e-4;d.x+=(R/U*45-d.x)*Math.min(1,6*e),d.y+=(D/U*45-d.y)*Math.min(1,6*e),d.z+=(B/U*45-d.z)*Math.min(1,6*e),u.addScaledVector(d,e),U<5&&(this.burstMode[c]=0),l.position.copy(u),l.lookAt(Bt.copy(u).add(d)),l.scale.set(1,1,1),l.updateMatrix(),this.mesh.setMatrixAt(c,l.matrix),this.aura.setMatrixAt(c,l.matrix);continue}if(o==="SHIELD"){let R=Math.acos(1-2*(c+.5)/Ct.swordCount),D=Math.PI*(1+Math.sqrt(5))*c,B=Ct.shieldRadius*Math.sin(R)*Math.cos(D+s*Ct.shieldOrbitSpeed),U=Ct.shieldRadius*Math.sin(R)*Math.sin(D+s*Ct.shieldOrbitSpeed),G=Ct.shieldRadius*Math.cos(R),k=B*Math.cos(s*.3)-G*Math.sin(s*.3),Y=B*Math.sin(s*.3)+G*Math.cos(s*.3);h.set(a.x+k,a.y+U,a.z+Y),h.x+=Math.sin(s*3+c)*.2,h.y+=Math.cos(s*3+c*.7)*.2}else if(o==="LOTUS"){let R=Math.PI*(3-Math.sqrt(5)),D=Ct.lotusRadius,B=6,U=c/(Ct.swordCount-1),G=Math.sqrt(U),k=B+(D-B)*G,Y=c*R+s*Ct.lotusRotateSpeed,j=1+Math.sin(s*2)*.05,te=k*j,ne=te*Math.cos(Y),oe=te*Math.sin(Y),Ge=(ne*(this.palmN?.x||0)+oe*(this.palmN?.y||0))*.5,xt=this.handVel?.vx||0,it=this.handVel?.vy||0,Q=xt*(.8+G*1.2)*20,se=it*(.8+G*1.2)*20,ee=ne+Q,be=oe+se,Ve=Math.sin(s*2+c*.1)*.25+Ge;h.set(a.x+ee,a.y+be,a.z+Ve)}else if(o==="BALL"){let D=(c+.5)/Ct.swordCount,B=Math.acos(1-2*D),U=Math.PI*(1+Math.sqrt(5))*c+s*1.1,G=9.5*Math.cbrt(D)*(1+Math.sin(s*2+c*.4)*.04);h.set(a.x+G*Math.sin(B)*Math.cos(U),a.y+G*Math.cos(B)*.92,a.z+G*Math.sin(B)*Math.sin(U)),Bt.set(h.x-Math.sin(U)*3,h.y+.4,h.z+Math.cos(U)*3)}else if(o==="BAGUA"){let B=s*.15,U=[7,6,2,4,0,1,5,3],G=.94;if(c<183){let k=c/183*Math.PI*2+B*.6,Y=1.3;h.set(a.x+Math.cos(k)*Y,a.y+Math.sin(k)*Y*G,a.z+.5),Bt.set(h.x-Math.sin(k),h.y+Math.cos(k)*G,h.z+.1)}else{let k=c-183,Y=k%24,j=Math.floor(k/24),te=Math.floor(Y/3),ne=Y%3,oe=U[te]>>ne&1,Ge=te*Math.PI/4+B,xt=6.5,it=a.x+Math.cos(Ge)*xt,Q=a.y+Math.sin(Ge)*xt*G,se=-Math.sin(Ge),ee=Math.cos(Ge)*G,be=Math.hypot(se,ee)||1;se/=be,ee/=be;let Ve=Math.cos(Ge),Fe=Math.sin(Ge)*G,Yt=Math.hypot(Ve,Fe)||1;Ve/=Yt,Fe/=Yt;let At=(j/33-.5)*1.5,ht=(ne-1)*1.4;if(!oe){let jt=j<17?-1:1,ri=j%(34/2);At=jt*1+(ri/(34/2-1)-.5)*1.2}let at=Math.sin(c*12.9898)*.025;h.set(it+se*(At+at)+Ve*ht,Q+ee*(At+at)+Fe*ht,a.z+.45+ne*.02),Bt.set(h.x+se,h.y+ee,h.z+.12)}}else if(o==="PILLAR"){let D=Math.ceil(this.swordTotal/5),B=Math.floor(c/D),G=c%D/D*Math.PI*2+s*.6,k=B/5,Y=3.5+Math.sin(s*3+k*Math.PI*2)*.6;h.set(a.x+Math.cos(G)*Y,a.y+k*18-6,a.z+Math.sin(G)*Y),Bt.set(h.x,h.y+5,h.z)}else if(o==="HEXAGRAM"){let R=Math.ceil(this.swordTotal/6),D=Math.floor(c/R)%6,B=c%R,U=s*.48+D*Math.PI/3,G=a.x+Math.cos(U)*8.5,k=a.y+Math.sin(U)*8.5*.8,Y=a.z+Math.sin(U)*4,j=B/R*Math.PI*2+s*1.8,te=B/R*Math.PI,ne=1.4;h.set(G+Math.sin(te)*Math.cos(j)*ne,k+Math.cos(te)*ne,Y+Math.sin(te)*Math.sin(j)*ne),Bt.set(a.x,a.y,a.z)}else if(o==="RAIN"){if(h.set(u.x+Math.sin(s*3+c)*.15,u.y-45,u.z+Math.cos(s*3+c)*.15),u.y<-26){u.y=26+c%6*2.2+Math.random()*2;let R=(Math.random()-.5)*76;u.x=a.x*.3+R*.7,u.z=(Math.random()-.5)*28,d.set((Math.random()-.5)*1.5,-(50+Math.random()*25),(Math.random()-.5)*1.5)}Bt.set(u.x,u.y-15,u.z)}else if(o==="INFINITY"){let R=c/this.swordTotal*Math.PI*2+s*.6;h.set(a.x+11*Math.sin(R),a.y+5*Math.sin(R*2),a.z+3*Math.cos(R));let D=R+.08;Bt.set(a.x+11*Math.sin(D),a.y+5*Math.sin(D*2),a.z+3*Math.cos(D))}else if(o==="ENERGY_BALL"){let R=Math.max(3,Math.min(this.handsDist*26+2,11)),D=Math.PI*(1+Math.sqrt(5))*c+s*.9,B=Math.acos(1-2*(c+.5)/this.swordTotal);h.set(this.handsCX+R*Math.sin(B)*Math.cos(D),this.handsCY+1.4+R*Math.cos(B),a.z+R*Math.sin(B)*Math.sin(D)*.5),Bt.set(this.handsCX,this.handsCY+1.4,a.z)}else if(o==="EXPLODE")h.copy(a),Bt.set(u.x+this.velocities[c].x,u.y+this.velocities[c].y,u.z+this.velocities[c].z);else if(o==="LETTERS"||o==="THUMBSUP"||o==="QIANTANG"||o==="WOAI"){let R=this._shapeAge,D=this._activeShape,B=this._origin.x,U=this._origin.y,G=this._origin.z,k=D?D.px[c]:0,Y=D?D.py[c]:0,j=D?D.pz[c]:0,te=0;if(R>=3.2)te=1;else if(R>1.2){let be=(R-1.2)/2;te=be*be*(3-2*be)}let ne=R*2.4,oe=c/this.swordTotal*Math.PI*2+ne,Ge=34+c%7*1.2,xt=B+Math.cos(oe)*Ge,it=U+Math.sin(oe)*Ge,Q=G+Math.sin(oe*1.3)*5,se=o==="WOAI"?0:.04,ee=R>=3.2?1+Math.sin(s*2+c*.05)*se:1;if(h.set(xt+(k*ee-xt)*te,it+(Y*ee-it)*te,Q+(j-Q)*te),te>.5){let be=D?D.rot[c]:0;Bt.set(h.x+Math.sin(be)*.7,h.y+3,h.z+Math.cos(be)*.5)}else Bt.set(u.x+this.velocities[c].x,u.y+this.velocities[c].y,u.z+this.velocities[c].z)}else if(o==="DAGENG"&&this.isTracking)if(c===0){let R=a.y+5;h.set(a.x,R,a.z)}else{let R=c-1,D=Ct.swordCount-1,U=Math.max(1,Math.floor(D/10)),G=Math.floor(R/U),k=R%U,Y=Ct.dagengRadius+G*1.5+2,j=G%2===0?1:-1,te=k/U*Math.PI*2+s*Ct.dagengRotateSpeed*j,ne=0,oe=Ct.dagengHeight,Ge=Math.sin(R*13.1)*.5+.5,xt=ne+(Ge-.5)*oe;h.set(Math.cos(te)*Y,xt,Math.sin(te)*Y)}else if(c<25){let D=c/25,B=D*4.2+.5,U=Math.sqrt(D)*1.6,G=c*2.39996+s*6,k=this.pointDir.x||1,Y=this.pointDir.y||0,j=-Y,te=k;h.set(a.x+k*B+j*Math.cos(G)*U,a.y+Y*B+te*Math.cos(G)*U,a.z+Math.sin(G)*U*.7),Bt.set(h.x+k*5,h.y+Y*5,h.z)}else{let D=c-25,B=this.swordTotal-25,G=D/(B-1)*(this.pathHistory.length-1),k=Math.floor(G),Y=Math.min(k+1,this.pathHistory.length-1),j=G-k;this.pathHistory[k]&&this.pathHistory[Y]?h.lerpVectors(this.pathHistory[k],this.pathHistory[Y],j):this.pathHistory[k]?h.copy(this.pathHistory[k]):h.copy(a);let te=D*.14+s*4.5,ne=1+Math.sin(D*.04+s*2)*.5;h.x+=Math.cos(te)*ne*.6,h.y+=Math.sin(te)*ne*.6,h.z+=Math.sin(s*3+D*.08)*.4;let oe=Ct.noiseScale,Ge=Ct.noiseStrength*(.6+Math.sin(s*2+D*.02)*.3);h.x+=Df.noise3D(u.x*oe,u.y*oe,s)*Ge,h.y+=Df.noise3D(u.y*oe,u.z*oe,s+100)*Ge,h.z+=Df.noise3D(u.z*oe,u.x*oe,s+200)*Ge}let f=o==="BAGUA"||o==="PILLAR"||o==="HEXAGRAM"||o==="BALL"||o==="INFINITY"||o==="ENERGY_BALL"||o==="EXPLODE"||o==="LETTERS"||o==="THUMBSUP"||o==="QIANTANG"||o==="WOAI",g=f?6:10,y=f?18:o==="SHIELD"?Ct.sprintSpeed:Ct.maxSpeed,m=f?4:o==="SHIELD"||o==="LOTUS"?3:1;o==="RAIN"?y=58:o==="DRAGON"&&(m=c<25?5.2:2.8,y=c<25?Ct.sprintSpeed:Ct.maxSpeed*1.3);let p=h.distanceTo(u);o!=="RAIN"&&(o==="DRAGON"&&c<25?p>1.5?y=Ct.sprintSpeed:y=p*Ct.sprintSpeed*.6:p>4?y=f?18:Ct.sprintSpeed:p<1&&(y=p*Ct.maxSpeed));let S=zi.copy(h).sub(u),b=S.length();b>0&&(S.normalize(),b<g?S.multiplyScalar(y*(b/g)):S.multiplyScalar(y));let A=VE.copy(S).sub(d);A.clampLength(0,Ct.steerForce*r*m),d.add(A);let C=o==="DRAGON"||o==="DAGENG"||o==="LOTUS"&&!this.isTracking;if(c>0&&C){let R=this.positions[c-1],D=vr.copy(u).sub(R),B=D.length();B<Ct.separationDist&&B>.01&&(D.normalize().multiplyScalar(Ct.separationForce*r),d.add(D))}u.addScaledVector(d,r),l.position.copy(u);let M=Bt;if(!(o==="BAGUA"||o==="PILLAR"||o==="HEXAGRAM"||o==="RAIN"||o==="INFINITY"||o==="ENERGY_BALL"||o==="EXPLODE"||o==="BALL"||o==="LETTERS"||o==="THUMBSUP"||o==="QIANTANG"||o==="WOAI"||o==="DRAGON"&&c<25))if(o==="SHIELD")d.length()>.1?Bt.copy(u).add(zi.copy(d).normalize()):(zi.copy(u).sub(a),Bt.set(-zi.z,0,zi.x),Bt.lengthSq()>1e-8?Bt.normalize():Bt.set(0,0,1),Bt.add(u));else if(o==="LOTUS"){zi.copy(u).sub(a),zi.lengthSq()<1e-8?zi.set(1,0,0):zi.normalize();let R=this.handVel.vx||0,D=this.handVel.vy||0,B=Math.hypot(R,D);B>.06&&(vr.set(R/B,D/B,0),zi.lerp(vr,Math.min(B*2.2,.85)).normalize()),Bt.copy(u).add(zi)}else o==="DAGENG"&&this.isTracking?Bt.set(u.x,u.y-1,u.z):d.length()>.1?Bt.copy(u).add(d):Bt.set(u.x,u.y,u.z-1);l.lookAt(M);let T=1;o==="DAGENG"&&this.isTracking?T=c===0?6:1.5:o==="BAGUA"?T=c<183?.45:.5:o==="LETTERS"?T=.24:o==="THUMBSUP"?T=.28:o==="QIANTANG"?T=.3:o==="WOAI"&&(T=.68);let x=c===0&&o==="DAGENG"?.6:2;this.scl[c]+=(T-this.scl[c])*Math.min(1,x*e);let E=this.scl[c];l.scale.set(E,E,E),l.updateMatrix(),this.mesh.setMatrixAt(c,l.matrix);let L=o==="SHIELD"?Math.sin(s*30+c*.5)>0:Math.sin(s*20+c*.7)>.3,P=E*(L?1.3:1);!L&&!(c===0&&o==="DAGENG")?l.scale.set(0,0,0):l.scale.set(P,P,P),l.updateMatrix(),this.aura.setMatrixAt(c,l.matrix),l.scale.set(E,E,E)}this.mesh.instanceMatrix.needsUpdate=!0,this.aura.instanceMatrix.needsUpdate=!0,this.magicCircle.setMode(o==="DAGENG"&&this.isTracking),this.magicCircle.update(e,i,a),this.divineLightning.setMode(o==="DAGENG"&&this.isTracking),this.divineLightning.update(e,i,this.positions,this.swordTotal);for(let c of this.trails){let u=c.user.idx;if(u<0||this.burstMode[u]===0){if(c.active){c.age=(c.age||0)+e;let h=Math.max(0,.6*(1-(c.age-0)/.5));c.material.uniforms.headColor.value.w=h,c.age>.6&&(c.deactivate(),c.user.idx=-1,c.reset())}continue}c.active||(c.activate(),c.age=0);let d=this.velocities[u];if(d.length()>.5){let h=this.positions[u];zi.copy(d).normalize(),Bt.copy(h).addScaledVector(zi,1.5),vr.set(-zi.y,zi.x,0),vr.lengthSq()>1e-8?vr.normalize().multiplyScalar(.8):vr.set(.8,0,0),c.advanceWorld(Bt,vr)}}}get activeCount(){return this.swordTotal}};function iT(){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d"),i=e.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(220,250,255,1)"),i.addColorStop(.35,"rgba(120,210,255,0.7)"),i.addColorStop(1,"rgba(0,120,220,0)"),e.fillStyle=i,e.fillRect(0,0,64,64);let n=new Ya(t);return n.colorSpace=We,n}var Yh=class{constructor(e,i=600){this.max=i,this.pos=new Float32Array(i*3),this.vel=new Float32Array(i*3),this.life=new Float32Array(i),this.maxLife=new Float32Array(i);let n=new Ut;n.setAttribute("position",new St(this.pos,3).setUsage(mr)),this.pts=new or(n,new Is({color:10476799,size:.3,map:iT(),transparent:!0,opacity:.95,depthWrite:!1,blending:ki})),this.pts.frustumCulled=!1,e.add(this.pts),this.cursor=0;for(let s=0;s<i;s++)this.pos[s*3+1]=9999}burst(e,i,n,s,r,a=Gt.sparksPerBurst){for(let o=0;o<a;o++){let l=this.cursor;this.cursor=(this.cursor+1)%this.max;let c=Math.atan2(r,s)+(Math.random()-.5)*2,u=3+Math.random()*10;this.pos[l*3]=e,this.pos[l*3+1]=i,this.pos[l*3+2]=n??.8,this.vel[l*3]=Math.cos(c)*u,this.vel[l*3+1]=Math.sin(c)*u,this.vel[l*3+2]=(Math.random()-.5)*3,this.life[l]=this.maxLife[l]=.3+Math.random()*.4}}update(e){for(let i=0;i<this.max;i++){if(this.life[i]<=0){this.pos[i*3+1]=9999;continue}this.life[i]-=e,this.pos[i*3]+=this.vel[i*3]*e,this.pos[i*3+1]+=this.vel[i*3+1]*e,this.pos[i*3+2]+=this.vel[i*3+2]*e,this.vel[i*3]*=1-2.5*e,this.vel[i*3+1]*=1-2.5*e}this.pts.geometry.attributes.position.needsUpdate=!0}},qh=class{constructor(e){this.items=[],this.geo=new $o(.97,1,72);for(let i=0;i<6;i++){let n=new ii(this.geo,new is({color:Gt.ink.swordTrail,transparent:!0,opacity:0,side:li,depthWrite:!1,blending:ki}));n.visible=!1,n.renderOrder=6,e.add(n),this.items.push({mesh:n,age:9,delay:i%2===0?0:.08,ox:0,oy:0})}}add(e,i){let n=this.items.find(s=>s.age>Gt.ringLife+s.delay)||this.items[0];n.age=-n.delay,n.ox=e,n.oy=i}update(e){for(let i of this.items){if(i.age>Gt.ringLife+i.delay){i.mesh.visible=!1;continue}if(i.age+=e,i.age<0){i.mesh.visible=!1;continue}let n=i.age/Gt.ringLife,s=.5+n*Gt.ringMaxRadius;i.mesh.visible=!0,i.mesh.position.set(i.ox,i.oy,.9),i.mesh.scale.setScalar(s),i.mesh.material.opacity=.55*(1-n)*(1-n)}}};var Kh=class{constructor(){this.ctx=null;try{this.ctx=new(window.AudioContext||window.webkitAudioContext)}catch{}addEventListener("pointerdown",()=>this.resume(),{once:!0}),addEventListener("keydown",()=>this.resume(),{once:!0})}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}whoosh(e=1){let i=this.ctx;if(!i)return;let n=i.currentTime,s=.45,r=i.createBuffer(1,i.sampleRate*s,i.sampleRate),a=r.getChannelData(0);for(let d=0;d<a.length;d++)a[d]=Math.random()*2-1;let o=i.createBufferSource();o.buffer=r;let l=i.createBiquadFilter();l.type="bandpass",l.Q.value=1.2,l.frequency.setValueAtTime(480,n),l.frequency.exponentialRampToValueAtTime(3200,n+s*.6);let c=i.createGain(),u=.18+.12*Math.min(e,1.4);c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(u,n+.06),c.gain.exponentialRampToValueAtTime(1e-4,n+s),o.connect(l),l.connect(c),c.connect(i.destination),o.start(n)}chime(){let e=this.ctx;if(!e)return;let i=e.currentTime;[880,1320].forEach((n,s)=>{let r=e.createOscillator();r.type="sine",r.frequency.value=n;let a=e.createGain();a.gain.setValueAtTime(1e-4,i+s*.04),a.gain.exponentialRampToValueAtTime(.08,i+.05+s*.04),a.gain.exponentialRampToValueAtTime(1e-4,i+.7+s*.04),r.connect(a),a.connect(e.destination),r.start(i+s*.04),r.stop(i+.8)})}};var Kt={IDLE:"IDLE",FIST:"FIST",FINGER_HEART:"FINGER_HEART",TWO_FINGERS:"TWO_FINGERS",OPEN_PALM:"OPEN_PALM",THUMB_UP:"THUMB_UP",SHAKA:"SHAKA",ROCK:"ROCK",SALUTE:"SALUTE",PALM_DOWN:"PALM_DOWN",CROSSED_HANDS:"CROSSED_HANDS",HANDS_PUSH:"HANDS_PUSH",HANDS_CUP:"HANDS_CUP",DOUBLE_FIST:"DOUBLE_FIST",THREE_FINGERS:"THREE_FINGERS"};function je(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)+Math.pow((t.z||0)-(e.z||0),2))}function U0(t,e,i){let n=t.x-e.x,s=t.y-e.y,r=(t.z||0)-(e.z||0),a=i.x-e.x,o=i.y-e.y,l=(i.z||0)-(e.z||0),c=n*a+s*o+r*l,u=Math.sqrt(n*n+s*s+r*r)||1e-6,d=Math.sqrt(a*a+o*o+l*l)||1e-6;return Math.acos(Math.max(-1,Math.min(1,c/(u*d))))*180/Math.PI}var If=[{mcp:5,pip:6,dip:7,tip:8},{mcp:9,pip:10,dip:11,tip:12},{mcp:13,pip:14,dip:15,tip:16},{mcp:17,pip:18,dip:19,tip:20}];function Di(t,e){let i=If[e];return je(t[i.tip],t[0])<je(t[i.mcp],t[0])*1.02?!1:U0(t[i.mcp],t[i.pip],t[i.dip])>148?!0:je(t[i.tip],t[0])>je(t[i.pip],t[0])*1.13}function Xi(t,e){let i=If[e];return U0(t[i.mcp],t[i.pip],t[i.dip])<110?!0:je(t[i.tip],t[0])<je(t[i.pip],t[0])*.97}function nT(t){let e=Math.hypot(t[17].x-t[5].x,t[17].y-t[5].y)||1e-6;return Math.hypot(t[8].x-t[4].x,t[8].y-t[4].y)>e*.5||!Di(t,0)||je(t[4],t[9])<e*.9?!1:Xi(t,1)&&Xi(t,2)&&Xi(t,3)}function sT(t){if(Di(t,0)||Di(t,1))return!1;let e=t[0],i=[8,12,16,20],n=[5,9,13,17],s=0;for(let a=0;a<i.length;a++){let o=je(t[i[a]],e),l=je(t[n[a]],e);o<l*1.25&&s++}return(je(t[4],t[5])<.11||je(t[4],t[9])<.15||t[4].y>t[2].y)&&s++,s>=5}function rT(t){if(Di(t,0)||Di(t,1))return!1;let e=t[4].y<t[3].y&&t[3].y<t[2].y||je(t[4],t[0])>je(t[2],t[0])*1.15&&t[4].y<t[2].y,i=Xi(t,0)||je(t[8],t[0])<je(t[5],t[0])*1.3,n=Xi(t,1)||je(t[12],t[0])<je(t[9],t[0])*1.3,s=Xi(t,2)||je(t[16],t[0])<je(t[13],t[0])*1.3,r=Xi(t,3)||je(t[20],t[0])<je(t[17],t[0])*1.3;return e&&i&&n&&s&&r}function aT(t){let e=Di(t,0),i=Di(t,1);if(!e||!i)return!1;let n=t[0],s=je(t[12],n);return Xi(t,3)||je(t[20],n)<je(t[18],n)*.98||je(t[20],n)<s*.8?Xi(t,2)||je(t[16],n)<je(t[14],n)*1.05||je(t[16],n)<s*.8:!1}function oT(t){let e=t[0],i=t[5],n=t[17],s=i.x-e.x,r=i.y-e.y,a=(i.z||0)-(e.z||0),o=n.x-e.x,l=n.y-e.y,c=(n.z||0)-(e.z||0),u=r*c-a*l,d=a*o-s*c,h=s*l-r*o,f=Math.sqrt(u*u+d*d+h*h)||1e-6;return Math.abs(d/f)}function lT(t){let e=0,i=[8,12,16,20],n=[6,10,14,18];for(let r=0;r<4;r++)je(t[i[r]],t[0])>je(t[n[r]],t[0])&&e++;if(e<3||Di(t,0)&&Di(t,1)&&!Di(t,2)&&!Di(t,3))return!1;let s=(t[8].y+t[12].y+t[16].y+t[20].y)/4;return t[0].y<s-.05?!0:oT(t)>.68}function cT(t){let e=0;for(let n=0;n<4;n++)Di(t,n)&&e++;let i=je(t[4],t[5])>.1;return e>=3&&i}function hT(t){let e=je(t[4],t[9])>.12,i=Di(t,3),n=Xi(t,0),s=Xi(t,1),r=Xi(t,2);return e&&i&&n&&s&&r}function uT(t){let e=Di(t,0),i=Di(t,3),n=Xi(t,1),s=Xi(t,2);return e&&i&&n&&s}function dT(t){let e=0;for(let n=0;n<4;n++){let s=If[n];je(t[s.tip],t[0])>je(t[s.pip],t[0])*.95&&e++}return e<3?!1:(t[8].y+t[12].y+t[16].y+t[20].y)/4<.55}function L0(t){let e=0,i=[8,12,16,20],n=[6,10,14,18];for(let s=0;s<4;s++)je(t[i[s]],t[0])>je(t[n[s]],t[0])*1.08&&e++;return e>=3}function fT(t,e){let i=Math.abs(t[0].y-e[0].y)<.32||Math.abs(t[9].y-e[9].y)<.32,n=t[0].x-e[0].x,s=t[9].x-e[9].x,r=t[8].x-e[8].x,a=n*r<0||n*s<0,o=Math.hypot(n,t[0].y-e[0].y)<.16&&Math.abs(r)>.08;return i&&(a||o)}function pT(t,e){let i=r=>{let a=0,o=[8,12,16,20],l=[6,10,14,18];for(let c=0;c<4;c++)r[o[c]].y<r[l[c]].y&&a++;return a>=3},n=i(t)&&i(e),s=Math.abs(t[9].x-e[9].x)>.45;return n&&s}function mT(t,e){if(!L0(t)||!L0(e)||(t[0].x-e[0].x)*(t[8].x-e[8].x)<0)return!1;let i=Math.abs(t[9].y-e[9].y)<.22,n=Math.abs(t[9].x-e[9].x),s=n>.08&&n<.55,r=t[9].x<=e[9].x?t:e,a=t[9].x<=e[9].x?e:t,o=r[12].x>r[0].x-.02&&a[12].x<a[0].x+.02;return i&&s&&o}function gT(t,e){let i=n=>{let s=n[0],r=[8,12,16,20],a=[5,9,13,17],o=0;for(let l=0;l<r.length;l++){let c=je(n[r[l]],s),u=je(n[a[l]],s);c<u*1.25&&o++}return o>=3};return i(t)&&i(e)}function vT(t){return!Di(t,0)||!Di(t,1)||!Di(t,2)?!1:Xi(t,3)||je(t[20],t[0])<je(t[18],t[0])*.98}var xT=new Set([Kt.FIST,Kt.THUMB_UP,Kt.SHAKA,Kt.ROCK,Kt.SALUTE,Kt.FINGER_HEART]);function B0(t,e){let i=Kt.IDLE;if(e&&e.length>=2){let[n,s]=e;gT(n,s)?i=Kt.DOUBLE_FIST:fT(n,s)?i=Kt.CROSSED_HANDS:mT(n,s)?i=Kt.HANDS_CUP:pT(n,s)&&(i=Kt.HANDS_PUSH)}return i===Kt.IDLE&&t&&(nT(t)?i=Kt.FINGER_HEART:sT(t)?i=Kt.FIST:rT(t)?i=Kt.THUMB_UP:aT(t)?i=Kt.TWO_FINGERS:vT(t)?i=Kt.THREE_FINGERS:hT(t)?i=Kt.SHAKA:uT(t)?i=Kt.ROCK:dT(t)?i=Kt.SALUTE:lT(t)?i=Kt.PALM_DOWN:cT(t)&&(i=Kt.OPEN_PALM)),xT.has(i)?i:Kt.IDLE}var xr=Kt;var Qh=class{constructor(){this.reset()}reset(){this.state="empty",this.candStart=-1,this.lastT=-1,this.lastX=.5,this.lastY=.5,this.sx=null,this.sy=null,this.session=0}_inRoi(e,i){let[n,s,r,a]=Vt.lockRoi;return e>=n&&e<=r&&i>=s&&i<=a}update(e,i,n,s,r=null){if(!Vt.lockEnabled)return this.state=i?"locked":"empty",i?this.session===0||this.sx===null?(this.session=Math.max(this.session,1),this.sx=n,this.sy=s,this.lastT=e,this.lastX=n,this.lastY=s,{present:!0,x:n,y:s,accepted:!0,acquired:!0,reset:!0,session:this.session,phase:"locked",cand:1}):(this._smooth(n,s),this.lastT=e,this.lastX=n,this.lastY=s,{present:!0,x:this.sx,y:this.sy,accepted:!0,acquired:!1,reset:!1,session:this.session,phase:"locked",cand:1}):(this.sx=this.sy=null,{present:!1,x:null,y:null,accepted:!1,acquired:!1,reset:!1,session:this.session,phase:"idle",cand:0});let a=!1,o=!1,l=this.state==="locked"&&this.lastT>=0&&e-this.lastT>Vt.lockGapClear;return i&&(r===null||r<=Vt.lockMaxPalm)&&(this.state==="empty"?this._inRoi(n,s)&&(this.state="candidate",this.candStart=e,this.lastT=e,this.lastX=n,this.lastY=s):this.state==="candidate"?this._inRoi(n,s)&&Math.hypot(n-this.lastX,s-this.lastY)<=Vt.lockMaxJump?(this.lastT=e,this.lastX=n,this.lastY=s,e-this.candStart>=Vt.lockDwell&&(this._acquire(n,s),o=!0,a=!0,l=!0)):(this.state="empty",this.sx=this.sy=null):Math.hypot(n-this.lastX,s-this.lastY)<=Vt.lockMaxJump&&(this.lastT=e,this.lastX=n,this.lastY=s,this._smooth(n,s),o=!0)),this.state==="candidate"&&e-this.lastT>Vt.lockCandidateTtl&&(this.state="empty"),this.state==="locked"&&e-this.lastT>Vt.handLostTimeout&&(this.state="empty",this.sx=this.sy=null),{present:this.state==="locked",x:this.sx,y:this.sy,accepted:o,acquired:a,reset:l&&o,session:this.session,phase:this.state==="locked"?"locked":this.state==="candidate"?"candidate":"idle",cand:this.state==="candidate"?Math.max(0,Math.min(1,(e-this.candStart)/Vt.lockDwell)):this.state==="locked"?1:0}}_acquire(e,i){this.state="locked",this.session+=1,this.sx=e,this.sy=i}_smooth(e,i){this.sx===null?(this.sx=e,this.sy=i):(this.sx+=Vt.smoothAlpha*(e-this.sx),this.sy+=Vt.smoothAlpha*(i-this.sy))}};var dm=[0,5,9,13,17],fm=class t{constructor(){this.hist=[],this.swiping=!1,this.start=null,this.peak=0,this.lastBurst=-10,this._needArm=!0}static get ARM_POINTS(){return 4}reset(){this.hist.length=0,this.swiping=!1,this.start=null,this._needArm=!0}feed(e,i,n,s){if(!i)return this.reset(),null;this.hist.push({t:e,x:n,y:s});let r=e-Vt.velocityWindow;for(;this.hist.length&&this.hist[0].t<r;)this.hist.shift();if(this._needArm)return this.hist.length>=t.ARM_POINTS&&(this._needArm=!1),null;if(this.hist.length<2)return null;let a=this.hist[0],o=Math.max(e-a.t,.001),l=(n-a.x)/o,c=(s-a.y)/o,u=Math.hypot(l,c);if(this.swiping)this.peak=Math.max(this.peak,u),(u<Vt.swipeLo||e-this.start.t>Vt.swipeMaxDur)&&(this.swiping=!1,this.start=null);else if(u>Vt.swipeHi&&(this.swiping=!0,this.start={t:e,x:n,y:s},this.peak=u,e-this.lastBurst>=Vt.burstCooldown)){this.lastBurst=e;let d=Math.hypot(l,c)||1;return{dx:l/d,dy:c/d,peak:u}}return null}};function Ib(t){let e=t[9].x-t[0].x,i=(t[9].y-t[0].y)*.75;return Math.hypot(e,i)}function My(t){let e=0,i=0;for(let n of dm)e+=t[n].x,i+=t[n].y;return[e/dm.length,i/dm.length]}var da=class t{constructor(e=1.1,i=.55,n=1){this.minCutoff=e,this.beta=i,this.dCutoff=n,this.reset()}static _alpha(e,i){let n=1/(2*Math.PI*e);return n/(n+i)}reset(){this._px=null,this._py=null,this._pt=0,this._dx=0,this._dy=0}filter(e,i,n){if(this._px===null)return this._px=e,this._py=i,this._pt=n,this._dx=0,this._dy=0,[e,i];let s=Math.max(n-this._pt,.001),r=this._step("x",e,n,s),a=this._step("y",i,n,s);return this._pt=n,[r,a]}_step(e,i,n,s){let r=e==="x"?this._px:this._py,a=Math.abs((i-r)/s),o=t._alpha(this.dCutoff,s),l=(e==="x"?this._dx:this._dy)+o*(a-(e==="x"?this._dx:this._dy));e==="x"?this._dx=l:this._dy=l;let c=this.minCutoff+this.beta*Math.hypot(this._dx,this._dy),u=t._alpha(c,s),d=r+u*(i-r);return e==="x"?this._px=d:this._py=d,d}},ed=class{constructor(e=21){this.f=Array.from({length:e},()=>new da(1.6,.35,1))}reset(){for(let e of this.f)e.reset()}apply(e,i){return e.map((n,s)=>{let[r,a]=this.f[s].filter(n.x,n.y,i);return{x:r,y:a,z:n.z}})}},td=class{constructor({demo:e=!1,prerollTo:i=0,onSwipe:n,onState:s,onHealth:r,onGesture:a,onBrightWarn:o}={}){this.demo=e,this.onSwipe=n||(()=>{}),this.onState=s||(()=>{}),this.onHealth=r||(()=>{}),this.onGesture=a||(()=>{}),this.onBrightWarn=o||(()=>{}),this._gCandidate=xr.IDLE,this._gSince=0,this._gPublished=xr.IDLE,this.onSwipe=n||(()=>{}),this.prerollTo=i,this.lock=new Qh,this.detector=new fm,this.oe=new da,this._gSm=new ed,this._gSm2=new ed,this._vote=[],this._lumaCv=null,this._lumaAt=0,this.brightWarn=!1,this.dirX=0,this.dirY=1,this.dirZ=0,this.palmNX=0,this.palmNY=0,this.palmNZ=1,this.hand2Nx=null,this.hand2Ny=null,this.ncx=.5,this.ncy=.5,this.handDist=.3,this.landmarker=null,this.video=null,this.stream=null,this.running=!1,this._raf=0,this._retries=0,this.sx=null,this.sy=null,this.present=!1,this.phase=this.demo?"idle":"init",this.cand=0,this.lastSeen=0,this.lastVideoTime=-1,this._lastFrameMs=-1,this.stalled=!1,this.fps=0,this._fpsCount=0,this._fpsT=null,this.status="init";try{this._stage=l=>{try{window.__yjStage=l}catch{}try{dispatchEvent(new CustomEvent("yujian-stage",{detail:l}))}catch{}}}catch{this._stage=()=>{}}this.speed=0,this.vx=0,this.vy=0,this.rawHands=[]}async restart(){this.running=!1,cancelAnimationFrame(this._raf);try{this.stream?.getTracks().forEach(e=>e.stop())}catch{}return this._retries=Math.min(this._retries+1,8),await new Promise(e=>setTimeout(e,Math.min(8e3,600*2**this._retries))),this.lastVideoTime=-1,this._lastFrameMs=-1,this.stalled=!1,this.lock.reset(),this.detector.reset(),this.oe.reset(),this.present=!1,this.sx=this.sy=null,this.start()}resetSession(){this.lock.reset(),this.detector.reset(),this.oe.reset(),this.present=!1,this.sx=this.sy=null,this.hand2Nx=null,this.handDist=.3,this._gSm.reset(),this._vote.length=0,this._gCandidate=xr.IDLE,this._gPublished=xr.IDLE,this._gSm2.reset()}async start(){if(this.demo){if(this.status="demo",this.phase="idle",this.running=!0,this.onHealth({state:"ok",msg:""}),this.prerollTo>0)return;this._loopDemo();return}this.onHealth({state:"starting",msg:""});try{this._stage("\u52A0\u8F7D\u624B\u52BF\u8BC6\u522B\u5F15\u64CE\u2026\u2026");let{FilesetResolver:e,HandLandmarker:i}=await Promise.resolve().then(()=>(Ay(),_y)),n=await e.forVisionTasks("./vendor/mediapipe/wasm"),s=a=>i.createFromOptions(n,{baseOptions:{modelAssetPath:"./vendor/mediapipe/hand_landmarker.task",delegate:a},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.5,minHandTrackingConfidence:.6});this._stage("\u52A0\u8F7D\u624B\u52BF\u6A21\u578B\uFF08\u7EA6 8MB\uFF0C\u9996\u6B21\u8F83\u6162\uFF09\u2026\u2026");try{this.landmarker=await s("GPU")}catch(a){console.warn("GPU delegate \u5931\u8D25\uFF0C\u56DE\u9000 CPU",a),this.landmarker=await s("CPU")}this.status="camera",this._stage("\u8BF7\u6C42\u6444\u50CF\u5934\u6743\u9650\u2026\u2026\u8BF7\u5728\u6D4F\u89C8\u5668\u63D0\u793A\u4E2D\u70B9\u51FB\u300C\u5141\u8BB8\u300D"),this.stream=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480},facingMode:"user"}}),this.video=document.createElement("video"),this.video.srcObject=this.stream,this.video.muted=!0,this.video.playsInline=!0,this.stream.getVideoTracks().forEach(a=>a.addEventListener("ended",()=>{this.onHealth({state:"reconnecting",msg:"\u6444\u50CF\u5934\u4FE1\u53F7\u4E2D\u65AD\uFF0C\u6B63\u5728\u6062\u590D\u2026"}),this.restart()})),navigator.mediaDevices?.addEventListener?.("devicechange",()=>{this.stream?.active||(this.onHealth({state:"reconnecting",msg:"\u6444\u50CF\u5934\u53D8\u5316\uFF0C\u6B63\u5728\u91CD\u8FDE\u2026"}),this.restart())}),await this.video.play(),this.running=!0,this._retries=0,this._stage("\u6444\u50CF\u5934\u5DF2\u5C31\u7EEA\uFF0C\u6325\u624B\u5373\u53EF\uFF01");try{let[a]=this.stream.getVideoTracks(),o=a.getCapabilities?a.getCapabilities():{};if(o.exposureMode&&o.exposureMode.includes("manual")){let l=o.exposureCompensation||{},c=Math.max(l.min??-2,Math.min(l.max??-1,-2));a.applyConstraints({advanced:[{exposureMode:"manual",exposureCompensation:c}]}).catch(()=>{})}}catch{}this.onHealth({state:"ok",msg:""});let r=()=>{this.running&&(this._tick(performance.now()),this._raf=requestAnimationFrame(r))};this._raf=requestAnimationFrame(r)}catch(e){this.status="error: "+e.message,console.error(e);let i=/denied|permission/i.test(e.name)?"denied":/notfound|device.*not|overconstrained/i.test(e.name)?"missing":/notreadable|track|busy/i.test(e.name)?"busy":"engine";this.onHealth({state:"error",kind:i,msg:e.message})}}_tick(e){let i=e/1e3,n=!1;if(this.video&&this.video.readyState>=2&&this.video.currentTime!==this.lastVideoTime){if(this.lastVideoTime=this.video.currentTime,this._lastFrameMs=e,n=!0,this._fpsCount++,this._fpsT===null?(this._fpsT=i,this._fpsCount=0):i-this._fpsT>=1&&(this.fps=this._fpsCount/(i-this._fpsT),this._fpsCount=0,this._fpsT=i),i-this._lumaAt>.5){this._lumaAt=i;try{this._lumaCv||(this._lumaCv=document.createElement("canvas"),this._lumaCv.width=16,this._lumaCv.height=12);let r=this._lumaCv.getContext("2d",{willReadFrequently:!0});r.drawImage(this.video,0,0,16,12);let a=r.getImageData(0,0,16,12).data,o=0;for(let u=0;u<a.length;u+=4)o+=.299*a[u]+.587*a[u+1]+.114*a[u+2];let l=o/(a.length/4),c=l>225;c!==this.brightWarn&&(this.brightWarn=c,this.onBrightWarn(c,Math.round(l)))}catch{}}let s;try{let r=this.landmarker.detectForVideo(this.video,e);if(r.landmarks&&r.landmarks.length){this.rawHands=r.landmarks.map(h=>h.map(f=>({x:f.x,y:f.y})));let a=r.landmarks.map(h=>h.map(f=>({x:Vt.mirror?1-f.x:f.x,y:f.y,z:f.z}))),o=a[0];if(a.length>1&&this.sx!==null){let h=f=>{let[g,y]=My(f);return Math.hypot(g-this.sx,y-this.sy)};o=h(a[0])<=h(a[1])?a[0]:a[1]}let l=a.find(h=>h!==o)||null,c=l?[o,l]:[o];this._updateGesture(i,c),this.lockedLandmarks=o,this._updateHandContext(o,l);let[u,d]=My(o);s=this.lock.update(i,!0,u,d,Ib(o))}else this.rawHands=[],s=this.lock.update(i,!1,0,0,null),this._updateGesture(i,null),this.lockedLandmarks=null,this.hand2Nx=null}catch(r){console.error("detectForVideo \u5931\u8D25",r),this.onHealth({state:"reconnecting",msg:"\u8FFD\u8E2A\u5931\u7075\uFF0C\u6B63\u5728\u6062\u590D\u2026"}),s=this.lock.update(i,!1,0,0,null)}this._consumeLock(i,s)}else if(this.video&&this._lastFrameMs>0&&e-this._lastFrameMs>600){this.stalled||(this.stalled=!0,this.onHealth({state:"stalled",msg:"\u6444\u50CF\u5934\u4FE1\u53F7\u4E2D\u65AD\uFF0C\u6B63\u5728\u6062\u590D\u2026"}));let s=this.lock.update(this._lastFrameMs/1e3+.7,!1,0,0,null);this._consumeLock(i,s)}this.stalled&&n&&(this.stalled=!1,this.onHealth({state:"ok",msg:""})),this._publish(i)}_updateHandContext(e,i){let n=e[0],s=e[12],r=s.x-n.x,a=s.y-n.y,o=s.z-n.z,l=Math.hypot(r,a,o)||1;this.dirX=r/l,this.dirY=-a/l,this.dirZ=-o/l;let c=e[5],u=e[17],d=c.x-n.x,h=c.y-n.y,f=c.z-n.z,g=u.x-n.x,y=u.y-n.y,m=u.z-n.z,p=h*m-f*y,S=f*g-d*m,b=d*y-h*g,A=Math.hypot(p,S,b)||1;this.palmNX=p/A,this.palmNY=S/A,this.palmNZ=b/A,i&&(this.hand2Nx=(i[0].x+i[9].x)/2,this.hand2Ny=(i[0].y+i[9].y)/2,this.ncx=(e[9].x+i[9].x)/2,this.ncy=(e[9].y+i[9].y)/2,this.handDist=Math.abs(e[9].x-i[9].x))}_updateGesture(e,i){let n;if(i&&i.length){let o=this._gSm.apply(i[0],e),l;if(i.length>=2){let c=this._gSm2.apply(i[1],e);l=[o,c]}else this._gSm2.reset(),l=[o];n=B0(o,l)}else this._gSm.reset(),this._gSm2.reset(),n=xr.IDLE;let s=this._vote;s.push(n),s.length>5&&s.shift();let r=n,a=0;for(let o=0;o<s.length;o++){let l=0;for(let c=0;c<s.length;c++)s[c]===s[o]&&l++;(l>a||l===a&&o===s.length-1)&&(a=l,r=s[o])}if(r!==this._gCandidate&&(this._gCandidate=r,this._gSince=e),r!==this._gPublished){let o=r===xr.IDLE?Gt.gestureIdleMs:this._gPublished===xr.IDLE?Gt.gestureEnterMs:Gt.gestureStableMs;(e-this._gSince)*1e3>=o&&(this._gPublished=r,this.onGesture(r))}}_consumeLock(e,i){if(i.reset&&this.detector.reset(),this.phase=i.phase,this.cand=i.cand,this.present=i.present,i.present){if(this.sx=i.x,this.sy=i.y,i.accepted){this._lastAcceptedT=e;let n=this.detector.feed(e,!0,i.x,i.y);n&&this.onSwipe(n)}}else this.detector.feed(e,!1,0,0)}_publish(e){let i=this.sx??.5,n=this.sy??.5,s,r;if(this.present?[s,r]=this.oe.filter(i,n,e):(this.oe.reset(),s=i,r=n),this.present&&this.detector.hist.length>=2&&e-(this._lastAcceptedT??e)<=Vt.velocityWindow){let a=this.detector.hist[this.detector.hist.length-1],o=this.detector.hist[this.detector.hist.length-2],l=Math.max(a.t-o.t,.001);this.vx=(a.x-o.x)/l,this.vy=(a.y-o.y)/l,this.speed=Math.hypot(this.vx,this.vy)}else this.vx=0,this.vy=0,this.speed=0;this.onState({present:this.present,phase:this.phase,cand:this.cand,nx:s,ny:r,vx:this.vx,vy:this.vy,speed:this.speed,stalled:this.stalled,dir:{x:this.dirX,y:this.dirY,z:this.dirZ},normal:{x:this.palmNX,y:this.palmNY,z:this.palmNZ},hand2:this.present&&this.hand2Nx!==null?{x:this.hand2Nx,y:this.hand2Ny}:null,handsCenter:{x:this.ncx,y:this.ncy},handDist:this.handDist,landmarks:this.present?this.lockedLandmarks:null})}scriptAt(e){let i=!1,n=.5,s=.55;e>=1&&e<1.5?(i=!0,n=.5+(e-1)*.8,s=.55):e>=1.5&&e<2.2?(i=!0,n=.9,s=.55):e>=2.2&&e<2.65?(i=!0,n=.9-(e-2.2)*.8,s=.55-(e-2.2)*.44):e>=2.65&&e<5?(i=!0,n=.54,s=.35):e>=5&&(i=!1);let r=Vt.mirror?1-n:n;this._consumeLock(e,this.lock.update(e,i,r,s,null)),this._publish(e)}_loopDemo(){let e=performance.now(),i=()=>{this.running&&(this.scriptAt((performance.now()-e)/1e3),requestAnimationFrame(i))};requestAnimationFrame(i)}};var Co=new I,id=[{g:"IDLE",dwell:8},{g:"THUMB_UP",dwell:12},{g:"FIST",dwell:12},{g:"SHAKA",dwell:14}],nd=class{constructor(e,i){this.scene=e,this.camera=i,this.env=new zh(e),this.volley=new Xh(e),this.sparks=new Yh(e),this.rings=new qh(e),this.sfx=new Kh,this.phase="idle",this.cand=0,this.present=!1,this.nx=.5,this.ny=.5,this.speed=0,this.fovKick=0,this.handWorldPos=new I(0,0,0),this._tipOE=new da(2.4,1.2,1),this._baseOE=new da(1.6,.6,1),this.smoothTarget=new I(0,0,0),this.smoothCamPos=new I(0,5,45),this.smoothLookAt=new I(0,0,0),this.smoothZoom=45,this.camera.position.set(0,5,45)}onGesture(e){if(e===this._gesture)return;this._gesture=e;let[i,n,s]=this.screenToWorld(this.nx,this.ny);this.volley.setMode(e,{x:i,y:n,z:s})}screenToWorld(e,i){let n=e*2-1,s=-(i*2-1);Co.set(n,s,.5).unproject(this.camera).sub(this.camera.position).normalize();let r=-this.camera.position.z/(Co.z||-1e-4);return Co.multiplyScalar(r).add(this.camera.position),[Co.x,Co.y,Co.z||0]}onState(e){let i=this.phase;this.phase=e.phase,this.cand=e.cand,this.present=e.present,this.nx=e.nx,this.ny=e.ny,this.speed=e.speed,this.vx=e.vx||0,this.vy=e.vy||0,this.handDist=e.handDist,this.palmDir=e.dir,this.palmN=e.normal,this.lm=e.landmarks,i==="candidate"&&this.phase==="locked"&&this.sfx.chime()}onSwipe(e){if(this.volley.formation==="WATERFALL"||this.volley.formation==="RAIN"||this.volley.formation==="LETTERS"||this.volley.formation==="THUMBSUP"||this.volley.formation==="QIANTANG"||this.volley.formation==="WOAI")return;let i=this.camera.aspect,n=e.dx*i,s=-e.dy,r=Math.hypot(n,s)||1;n/=r,s/=r;let[a,o]=this.screenToWorld(this.nx,this.ny);this.volley.formation==="DRAGON"||this.volley.formation==="TWO_FINGERS"?this.volley.launchCloud(n,s):this.volley.burst(a,o,n,s,e.peak),this.sparks.burst(a,o,1.2,n,s),this.rings.add(a,o),this.fovKick=Math.min(1,.35+.65*Math.min(e.peak,1.6)),this.sfx.whoosh(e.peak)}bloomTargets(){return[this.volley.mesh,this.volley.aura,this.volley.magicCircle.mesh,this.volley.divineLightning.mesh,...this.volley.trails.map(e=>e.mesh),...this.volley.hexLines,this.sparks.pts,...this.rings.items.map(e=>e.mesh)]}applyLowGlow(e){if(this._lowGlow===!!e)return;this._lowGlow=!!e;let i=e?.85:.6;this.volley.auraMaterial.opacity=i}update(e,i){this.env.update(e,i);let n,s=null,r=this.volley.formation;if(this.lm&&this.lm.length>=21)if(r==="DRAGON"){let y=(this.lm[8].x+this.lm[12].x)*.5,m=(this.lm[8].y+this.lm[12].y)*.5,p=(this.lm[5].x+this.lm[9].x)*.5,S=(this.lm[5].y+this.lm[9].y)*.5,[b,A]=this._tipOE.filter(y,m,i),[C,M]=this._baseOE.filter(p,S,i),[T,x]=this.screenToWorld(b,A),[E,L]=this.screenToWorld(C,M),P=T-E,R=x-L,D=Math.hypot(P,R)||1;s={x:P/D,y:R/D,z:0},n={x:b,y:A}}else r==="SHIELD"||r==="LOTUS"?(this._tipOE.reset(),this._baseOE.reset(),n={x:(this.lm[0].x+this.lm[9].x)*.5,y:(this.lm[0].y+this.lm[9].y)*.5}):(this._tipOE.reset(),this._baseOE.reset(),n=this.lm[8]);else this._tipOE.reset(),this._baseOE.reset(),n={x:this.nx,y:this.ny};let[a,o,l]=this.screenToWorld(n.x,n.y);if(this.handWorldPos.set(a,o,l),this.volley.setHands({x:a,y:o,z:l},null,null,this.handDist,this.palmDir,this.palmN,s,{vx:this.vx,vy:this.vy,speed:this.speed||0}),this.present&&r==="DRAGON"&&this.volley.updatePath(this.handWorldPos),this.forceGesture)this.present=!0,this._gesture=this.forceGesture,this.volley.setMode(this.forceGesture,{x:a,y:o,z:l});else if(this.present)this.volley.setMode(this._gesture||"IDLE",{x:a,y:o,z:l}),this._presentSince==null&&(this._presentSince=i),this._attract&&(this._attract.paused=!0);else if(this.phase!=="candidate"){let y=this._presentSince!=null&&i-this._presentSince>2.5;this._presentSince=null,!this._attract||y?(this._attract={idx:0,since:i,paused:!1},this.volley.setMode(id[0].g,{x:0,y:0,z:0})):(this._attract.paused&&(this._attract.since=i,this._attract.paused=!1),i-this._attract.since>=id[this._attract.idx].dwell&&(this._attract.idx=(this._attract.idx+1)%id.length,this._attract.since=i,this.volley.setMode(id[this._attract.idx].g,{x:0,y:0,z:0})))}this.volley.update(e,i,this.present||this.phase==="candidate"),this.sparks.update(e),this.rings.update(e),this.sfx.resume();let c=this.volley.getFormationBounds(),u=this.volley.formation,d=Uh.clamp(c.size*1.2+18,22,u==="DAGENG"?55:75);this.smoothZoom=Uh.lerp(this.smoothZoom,d,.025);let h;this.volley.formation==="LETTERS"||this.volley.formation==="THUMBSUP"||this.volley.formation==="QIANTANG"||this.volley.formation==="WOAI"?h=new I(Math.sin(i*.5)*5,Math.cos(i*.3)*3,0):this.present?h=new I(this.handWorldPos.x*.7,this.handWorldPos.y*.7,0):h=new I(Math.sin(i*.5)*5,Math.cos(i*.3)*3,0),this.smoothTarget.lerp(h,.025);let f=new I(this.smoothTarget.x*.25,this.smoothTarget.y*.15+3,this.smoothZoom);this.smoothCamPos.lerp(f,.025),this.camera.position.copy(this.smoothCamPos);let g=new I(this.smoothTarget.x*.4,this.smoothTarget.y*.25,4);if(this.smoothLookAt.lerp(g,.025),this.camera.lookAt(this.smoothLookAt),this.fovKick>.001){this.fovKick=Math.max(0,this.fovKick-e*2.5);let y=50+Gt.fovKick*this.fovKick;Math.abs(this.camera.fov-y)>.02&&(this.camera.fov=y,this.camera.updateProjectionMatrix())}else Math.abs(this.camera.fov-50)>.02&&(this.camera.fov=50,this.camera.updateProjectionMatrix())}};var Pb=(()=>{let t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),i=new Ut;return i.setAttribute("position",new St(t,3)),i.setAttribute("uv",new St(e,2)),i})(),cn=class xm{static get fullscreenGeometry(){return Pb}constructor(e="Pass",i=new Ds,n=new Xr){this.name=e,this.renderer=null,this.scene=i,this.camera=n,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){let i=this.fullscreenMaterial;i!==null&&(i.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let i=this.screen;i!==null?i.material=e:(i=new ii(xm.fullscreenGeometry,e),i.frustumCulled=!1,this.scene===null&&(this.scene=new Ds),this.scene.add(i),this.screen=i)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,i=It){}render(e,i,n,s,r){throw new Error("Render method not implemented!")}setSize(e,i){}initialize(e,i,n){}dispose(){for(let e of Object.keys(this)){let i=this[e];(i instanceof ze||i instanceof fn||i instanceof vi||i instanceof xm)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Lb=class extends cn{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(t,e,i,n,s){let r=t.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},Ub=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,sd="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",wy=class extends Xe{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new ie(null),depthBuffer:new ie(null),channelWeights:new ie(null),opacity:new ie(1)},blending:tt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Ub,vertexShader:sd}),this.depthFunc=nr}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(t){let e=t!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){let e=t!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=t}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(t){this.colorSpaceConversion!==t&&(t?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(t){t!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=t):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(t){this.uniforms.inputBuffer.value=t}getOpacity(t){return this.uniforms.opacity.value}setOpacity(t){this.uniforms.opacity.value=t}},by=class extends cn{constructor(t,e=!0){super("CopyPass"),this.fullscreenMaterial=new wy,this.needsSwap=!1,this.renderTarget=t,t===void 0&&(this.renderTarget=new ze(1,1,{minFilter:kt,magFilter:kt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(t){this.autoResize=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(t){this.autoResize=t}render(t,e,i,n,s){this.fullscreenMaterial.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){this.autoResize&&this.renderTarget.setSize(t,e)}initialize(t,e,i){i!==void 0&&(this.renderTarget.texture.type=i,i!==st?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":t!==null&&t.outputColorSpace===We&&(this.renderTarget.texture.colorSpace=We))}},Sy=new Re,ym=class extends cn{constructor(t=!0,e=!0,i=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=t,this.depth=e,this.stencil=i,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(t,e,i){this.color=t,this.depth=e,this.stencil=i}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(t){this.overrideClearColor=t}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(t){this.overrideClearAlpha=t}render(t,e,i,n,s){let r=this.overrideClearColor,a=this.overrideClearAlpha,o=t.getClearAlpha(),l=r!==null,c=a>=0;l?(t.getClearColor(Sy),t.setClearColor(r,c?a:o)):c&&t.setClearAlpha(a),t.setRenderTarget(this.renderToScreen?null:e),t.clear(this.color,this.depth,this.stencil),l?t.setClearColor(Sy,o):c&&t.setClearAlpha(o)}},Bb=class extends cn{constructor(t,e){super("MaskPass",t,e),this.needsSwap=!1,this.clearPass=new ym(!1,!1,!0),this.inverse=!1}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get inverted(){return this.inverse}set inverted(t){this.inverse=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(t){this.inverted=t}render(t,e,i,n,s){let r=t.getContext(),a=t.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,u=this.inverted?0:1,d=1-u;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,u,4294967295),a.stencil.setClear(d),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(t,null):(c.render(t,e),c.render(t,i))),this.renderToScreen?(t.setRenderTarget(null),t.render(o,l)):(t.setRenderTarget(e),t.render(o,l),t.setRenderTarget(i),t.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}},pm=1/1e3,Fb=1e3,Nb=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(t){typeof document<"u"&&document.hidden!==void 0&&(t?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=t)}get delta(){return this._delta*pm}get fixedDelta(){return this._fixedDelta*pm}set fixedDelta(t){this._fixedDelta=t*Fb}get elapsed(){return this._elapsed*pm}update(t){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(t!==void 0?t:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(t){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Cy=class{constructor(t=null,{depthBuffer:e=!0,stencilBuffer:i=!1,multisampling:n=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,i,s,n),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new by,this.depthRenderTarget=null,this.passes=[],this.timer=new Nb,this.autoRenderToScreen=!0,this.setRenderer(t)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(t){this.multisampling!==t&&(this.inputBuffer.samples=t,this.outputBuffer.samples=t,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(t){if(this.renderer=t,t!==null){let e=t.getSize(new le),i=t.getContext().getContextAttributes().alpha,n=this.inputBuffer.texture.type;n===st&&t.outputColorSpace===We&&(this.inputBuffer.texture.colorSpace=We,this.outputBuffer.texture.colorSpace=We,this.inputBuffer.dispose(),this.outputBuffer.dispose()),t.autoClear=!1,this.setSize(e.width,e.height);for(let s of this.passes)s.initialize(t,i,n)}}replaceRenderer(t,e=!0){let i=this.renderer,n=i.domElement.parentNode;return this.setRenderer(t),e&&n!==null&&(n.removeChild(i.domElement),n.appendChild(t.domElement)),i}createDepthTexture(){let t=new Cn;t.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(t.format=ss,t.type=fr):t.type=yi;let e=t.clone();e.name="EffectComposer.OutputDepth";let i=t.clone();i.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=t,this.outputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.outputBuffer.dispose();let{width:n,height:s}=this.inputBuffer;this.depthRenderTarget=new ze(n,s,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:i})}blitDepthBuffer(t){let e=this.renderer,i=this.depthRenderTarget,n=e.properties,s=e.getContext();e.setRenderTarget(i);let r=n.get(t).__webglFramebuffer,a=n.get(i).__webglFramebuffer,o=t.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,r),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,a),s.blitFramebuffer(0,0,t.width,t.height,0,0,i.width,i.height,o,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){let t=this.stableDepthTexture;for(let e of this.passes)e.getDepthTexture()===t&&e.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(t,e,i,n){let s=this.renderer,r=s===null?new le:s.getDrawingBufferSize(new le),a=new ze(r.width,r.height,{minFilter:kt,magFilter:kt,samples:n,stencilBuffer:e,depthBuffer:t,type:i});return i===st&&s!==null&&s.outputColorSpace===We&&(a.texture.colorSpace=We),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(t){for(let e of this.passes)e.mainScene=t}setMainCamera(t){for(let e of this.passes)e.mainCamera=t}addPass(t,e){let i=this.passes,n=this.renderer,s=n.getDrawingBufferSize(new le),r=n.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(t.renderer=n,t.setSize(s.width,s.height),t.initialize(n,r,a),this.autoRenderToScreen&&(i.length>0&&(i[i.length-1].renderToScreen=!1),t.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?i.splice(e,0,t):i.push(t),this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!0),t.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(let o of i)o.setDepthTexture(this.stableDepthTexture)}else t.setDepthTexture(this.stableDepthTexture)}removePass(t){let e=this.passes,i=e.indexOf(t);if(i!==-1&&e.splice(i,1).length>0){let r=this.stableDepthTexture;if(r!==null){let a=(l,c)=>l||c.needsDepthTexture;e.reduce(a,!1)||(t.getDepthTexture()===r&&t.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&i===e.length&&(t.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){let t=this.passes;this.deleteDepthTexture(),t.length>0&&(this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!1),this.passes=[])}render(t){let e=this.renderer,i=this.copyPass,n=this.inputBuffer,s=this.outputBuffer,r,a=!1;t===void 0&&(this.timer.update(),t=this.timer.getDelta());for(let o of this.passes)if(o.enabled){if(o.render(e,n,s,t,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(n),o.needsSwap){if(a){i.renderToScreen=o.renderToScreen;let l=e.getContext(),c=e.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),i.render(e,n,s,t,a),c.setFunc(l.EQUAL,1,4294967295)}r=n,n=s,s=r}o instanceof Bb?a=!0:o instanceof Lb&&(a=!1)}}setSize(t,e,i){let n=this.renderer,s=n.getSize(new le);(t===void 0||e===void 0)&&(t=s.width,e=s.height),(s.width!==t||s.height!==e)&&n.setSize(t,e,i);let r=n.getDrawingBufferSize(new le);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(let a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(let t of this.passes)t.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],cn.fullscreenGeometry.dispose()}},Ir={NONE:0,DEPTH:1,CONVOLUTION:2},_t={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},Ob=class{constructor(){this.shaderParts=new Map([[_t.FRAGMENT_HEAD,null],[_t.FRAGMENT_MAIN_UV,null],[_t.FRAGMENT_MAIN_IMAGE,null],[_t.VERTEX_HEAD,null],[_t.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Ir.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=$n}};var mm=!1,Ey=class{constructor(t=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(t),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let i;if(e.material.flatShading)switch(e.material.side){case li:i=this.materialsFlatShadedDoubleSide;break;case xi:i=this.materialsFlatShadedBackSide;break;default:i=this.materialsFlatShaded;break}else switch(e.material.side){case li:i=this.materialsDoubleSide;break;case xi:i=this.materialsBackSide;break;default:i=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=i[2]:e.isInstancedMesh?e.material=i[1]:e.material=i[0],++this.meshCount}}}cloneMaterial(t){if(!(t instanceof Xe))return t.clone();let e=t.uniforms,i=new Map;for(let s in e){let r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,i.set(s,r))}let n=t.clone();for(let s of i)e[s[0]].value=s[1],n.uniforms[s[0]].value=s[1];return n}setMaterial(t){if(this.disposeMaterials(),this.material=t,t!==null){let e=this.materials=[this.cloneMaterial(t),this.cloneMaterial(t),this.cloneMaterial(t)];for(let i of e)i.uniforms=Object.assign({},t.uniforms),i.side=kn;e[2].skinning=!0,this.materialsBackSide=e.map(i=>{let n=this.cloneMaterial(i);return n.uniforms=Object.assign({},t.uniforms),n.side=xi,n}),this.materialsDoubleSide=e.map(i=>{let n=this.cloneMaterial(i);return n.uniforms=Object.assign({},t.uniforms),n.side=li,n}),this.materialsFlatShaded=e.map(i=>{let n=this.cloneMaterial(i);return n.uniforms=Object.assign({},t.uniforms),n.flatShading=!0,n}),this.materialsFlatShadedBackSide=e.map(i=>{let n=this.cloneMaterial(i);return n.uniforms=Object.assign({},t.uniforms),n.flatShading=!0,n.side=xi,n}),this.materialsFlatShadedDoubleSide=e.map(i=>{let n=this.cloneMaterial(i);return n.uniforms=Object.assign({},t.uniforms),n.flatShading=!0,n.side=li,n})}}render(t,e,i){let n=t.shadowMap.enabled;if(t.shadowMap.enabled=!1,mm){let s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),t.render(e,i);for(let r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{let s=e.overrideMaterial;e.overrideMaterial=this.material,t.render(e,i),e.overrideMaterial=s}t.shadowMap.enabled=n}disposeMaterials(){if(this.material!==null){let t=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(let e of t)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return mm}static set workaroundEnabled(t){mm=t}};var Dr=-1,En=class extends Oi{constructor(t=null,e=Dr,i=Dr,n=1){super(),t!==null&&this.addEventListener("change",()=>t.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new le(1,1),this.preferredSize=new le(e,i),this.target=this.preferredSize,this.s=n,this.effectiveSize=new le,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){let t=this.baseSize,e=this.preferredSize,i=this.effectiveSize,n=this.scale;e.width!==Dr?i.width=e.width:e.height!==Dr?i.width=Math.round(e.height*(t.width/Math.max(t.height,1))):i.width=Math.round(t.width*n),e.height!==Dr?i.height=e.height:e.width!==Dr?i.height=Math.round(e.width/Math.max(t.width/Math.max(t.height,1),1)):i.height=Math.round(t.height*n)}get width(){return this.effectiveSize.width}set width(t){this.preferredWidth=t}get height(){return this.effectiveSize.height}set height(t){this.preferredHeight=t}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(t){this.s!==t&&(this.s=t,this.preferredSize.setScalar(Dr),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(t){this.scale=t}get baseWidth(){return this.baseSize.width}set baseWidth(t){this.baseSize.width!==t&&(this.baseSize.width=t,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(t){this.baseWidth=t}get baseHeight(){return this.baseSize.height}set baseHeight(t){this.baseSize.height!==t&&(this.baseSize.height=t,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(t){this.baseHeight=t}setBaseSize(t,e){(this.baseSize.width!==t||this.baseSize.height!==e)&&(this.baseSize.set(t,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(t){this.preferredSize.width!==t&&(this.preferredSize.width=t,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(t){this.preferredWidth=t}get preferredHeight(){return this.preferredSize.height}set preferredHeight(t){this.preferredSize.height!==t&&(this.preferredSize.height=t,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(t){this.preferredHeight=t}setPreferredSize(t,e){(this.preferredSize.width!==t||this.preferredSize.height!==e)&&(this.preferredSize.set(t,e),this.dispatchEvent({type:"change"}))}copy(t){this.s=t.scale,this.baseSize.set(t.baseWidth,t.baseHeight),this.preferredSize.set(t.preferredWidth,t.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return Dr}},kb=class{constructor(t=0){this.nextId=t}getNextId(){return this.nextId++}reset(t=0){return this.nextId=t,this}},gm=new kb(2),Gb=class extends Set{constructor(t,e=gm.getNextId()){super(),this.exclusive=!1,this._layer=e,(this._layer<1||this._layer>31)&&(console.warn("Layer out of range, resetting to 2"),gm.reset(2),this._layer=gm.getNextId()),t!==void 0&&this.set(t)}get layer(){return this._layer}set layer(t){let e=this._layer;for(let i of this)i.layers.disable(e),i.layers.enable(t);this._layer=t}getLayer(){return this.layer}setLayer(t){this.layer=t}isExclusive(){return this.exclusive}setExclusive(t){this.exclusive=t}clear(){let t=this.layer;for(let e of this)e.layers.disable(t);return super.clear()}set(t){this.clear();for(let e of t)this.add(e);return this}indexOf(t){return this.has(t)?0:-1}add(t){return this.exclusive?t.layers.set(this.layer):t.layers.enable(this.layer),super.add(t)}delete(t){return this.has(t)&&t.layers.disable(this.layer),super.delete(t)}toggle(t){let e;return this.has(t)?(this.delete(t),e=!1):(this.add(t),e=!0),e}setVisible(t){for(let e of this)t?e.layers.enable(0):e.layers.disable(0);return this}},$e={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Hb="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zb="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",Vb="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Wb="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Xb="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Yb="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qb="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Kb="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Qb="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Zb="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Jb="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jb="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$b="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",e3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",t3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",i3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",n3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",s3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",r3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",a3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",o3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",l3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",c3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",h3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",u3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",d3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",f3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",p3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",m3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",g3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",v3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",x3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",y3=new Map([[$e.ADD,Hb],[$e.ALPHA,zb],[$e.AVERAGE,Vb],[$e.COLOR,Wb],[$e.COLOR_BURN,Xb],[$e.COLOR_DODGE,Yb],[$e.DARKEN,qb],[$e.DIFFERENCE,Kb],[$e.DIVIDE,Qb],[$e.DST,null],[$e.EXCLUSION,Zb],[$e.HARD_LIGHT,Jb],[$e.HARD_MIX,jb],[$e.HUE,$b],[$e.INVERT,e3],[$e.INVERT_RGB,t3],[$e.LIGHTEN,i3],[$e.LINEAR_BURN,n3],[$e.LINEAR_DODGE,s3],[$e.LINEAR_LIGHT,r3],[$e.LUMINOSITY,a3],[$e.MULTIPLY,o3],[$e.NEGATION,l3],[$e.NORMAL,c3],[$e.OVERLAY,h3],[$e.PIN_LIGHT,u3],[$e.REFLECT,d3],[$e.SATURATION,f3],[$e.SCREEN,p3],[$e.SOFT_LIGHT,m3],[$e.SRC,g3],[$e.SUBTRACT,v3],[$e.VIVID_LIGHT,x3]]),_3=class extends Oi{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new ie(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return y3.get(this.blendFunction)}};var rd=class extends Oi{constructor(t,e,{attributes:i=Ir.NONE,blendFunction:n=$e.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=i,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new _3(n),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=$n,this._outputColorSpace=gn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=It){}update(t,e,i){}setSize(t,e){}initialize(t,e,i){}dispose(){for(let t of Object.keys(this)){let e=this[t];(e instanceof ze||e instanceof fn||e instanceof vi||e instanceof cn)&&this[t].dispose()}}};var _m={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},A3=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,M3="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",S3=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],E3=class extends Xe{constructor(t=new ut){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new ie(null),texelSize:new ie(new ut),scale:new ie(1),kernel:new ie(0)},blending:tt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:A3,vertexShader:M3}),this.setTexelSize(t.x,t.y),this.kernelSize=_m.MEDIUM}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.inputBuffer=t}get kernelSequence(){return S3[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(t){this.uniforms.scale.value=t}getScale(){return this.uniforms.scale.value}setScale(t){this.uniforms.scale.value=t}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(t){this.uniforms.kernel.value=t}setKernel(t){this.kernel=t}setTexelSize(t,e){this.uniforms.texelSize.value.set(t,e,t*.5,e*.5)}setSize(t,e){let i=1/t,n=1/e;this.uniforms.texelSize.value.set(i,n,i*.5,n*.5)}},T3=class extends cn{constructor({kernelSize:t=_m.MEDIUM,resolutionScale:e=.5,width:i=En.AUTO_SIZE,height:n=En.AUTO_SIZE,resolutionX:s=i,resolutionY:r=n}={}){super("KawaseBlurPass"),this.renderTargetA=new ze(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";let a=this.resolution=new En(this,s,r,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new E3,this._blurMaterial.kernelSize=t,this.copyMaterial=new wy}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(t){this._blurMaterial=t}get dithering(){return this.copyMaterial.dithering}set dithering(t){this.copyMaterial.dithering=t}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(t){this.blurMaterial.kernelSize=t}get width(){return this.resolution.width}set width(t){this.resolution.preferredWidth=t}get height(){return this.resolution.height}set height(t){this.resolution.preferredHeight=t}get scale(){return this.blurMaterial.scale}set scale(t){this.blurMaterial.scale=t}getScale(){return this.blurMaterial.scale}setScale(t){this.blurMaterial.scale=t}getKernelSize(){return this.kernelSize}setKernelSize(t){this.kernelSize=t}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}render(t,e,i,n,s){let r=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,u=c.kernelSequence,d=e;this.fullscreenMaterial=c;for(let h=0,f=u.length;h<f;++h){let g=(h&1)===0?o:l;c.kernel=u[h],c.inputBuffer=d.texture,t.setRenderTarget(g),t.render(r,a),d=g}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=d.texture,t.setRenderTarget(this.renderToScreen?null:i),t.render(r,a)}setSize(t,e){let i=this.resolution;i.setBaseSize(t,e);let n=i.width,s=i.height;this.renderTargetA.setSize(n,s),this.renderTargetB.setSize(n,s),this.blurMaterial.setSize(t,e)}initialize(t,e,i){i!==void 0&&(this.renderTargetA.texture.type=i,this.renderTargetB.texture.type=i,i!==st?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):t!==null&&t.outputColorSpace===We&&(this.renderTargetA.texture.colorSpace=We,this.renderTargetB.texture.colorSpace=We))}static get AUTO_SIZE(){return En.AUTO_SIZE}},w3=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,b3=class extends Xe{constructor(t=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:"185".replace(/\D+/g,"")},uniforms:{inputBuffer:new ie(null),threshold:new ie(0),smoothing:new ie(1),range:new ie(null)},blending:tt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:w3,vertexShader:sd}),this.colorOutput=t,this.luminanceRange=e}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get threshold(){return this.uniforms.threshold.value}set threshold(t){this.smoothing>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=t}getThreshold(){return this.threshold}setThreshold(t){this.threshold=t}get smoothing(){return this.uniforms.smoothing.value}set smoothing(t){this.threshold>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=t}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(t){this.smoothing=t}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(t){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(t){t?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(t){return this.colorOutput}setColorOutputEnabled(t){this.colorOutput=t}get useRange(){return this.luminanceRange!==null}set useRange(t){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(t){t!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=t,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(t){this.luminanceRange=t}},Ry=class extends cn{constructor({renderTarget:t,luminanceRange:e,colorOutput:i,resolutionScale:n=1,width:s=En.AUTO_SIZE,height:r=En.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("LuminancePass"),this.fullscreenMaterial=new b3(i,e),this.needsSwap=!1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new ze(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");let l=this.resolution=new En(this,a,o,n);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(t,e,i,n,s){let r=this.fullscreenMaterial;r.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){let i=this.resolution;i.setBaseSize(t,e),this.renderTarget.setSize(i.width,i.height)}initialize(t,e,i){i!==void 0&&i!==st&&(this.renderTarget.texture.type=i,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},C3=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,R3="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",D3=class extends Xe{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new ie(null),texelSize:new ie(new le)},blending:tt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:C3,vertexShader:R3})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},I3=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,P3="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",L3=class extends Xe{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new ie(null),supportBuffer:new ie(null),texelSize:new ie(new le),radius:new ie(.85)},blending:tt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:I3,vertexShader:P3})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}set supportBuffer(t){this.uniforms.supportBuffer.value=t}get radius(){return this.uniforms.radius.value}set radius(t){this.uniforms.radius.value=t}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},U3=class extends cn{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new ze(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new D3,this.upsamplingMaterial=new L3,this.resolution=new le}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(t){if(this.levels!==t){let e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let i=0;i<t;++i){let n=e.clone();n.texture.name="Downsampling.Mipmap"+i,this.downsamplingMipmaps.push(n)}this.upsamplingMipmaps.push(e);for(let i=1,n=t-1;i<n;++i){let s=e.clone();s.texture.name="Upsampling.Mipmap"+i,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(t){this.upsamplingMaterial.radius=t}render(t,e,i,n,s){let{scene:r,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:u}=this,d=e;this.fullscreenMaterial=o;for(let h=0,f=c.length;h<f;++h){let g=c[h];o.setSize(d.width,d.height),o.inputBuffer=d.texture,t.setRenderTarget(g),t.render(r,a),d=g}this.fullscreenMaterial=l;for(let h=u.length-1;h>=0;--h){let f=u[h];l.setSize(d.width,d.height),l.inputBuffer=d.texture,l.supportBuffer=c[h].texture,t.setRenderTarget(f),t.render(r,a),d=f}}setSize(t,e){let i=this.resolution;i.set(t,e);let n=i.width,s=i.height;for(let r=0,a=this.downsamplingMipmaps.length;r<a;++r)n=Math.round(n*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(n,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(n,s)}initialize(t,e,i){if(i!==void 0){let n=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(let s of n)s.texture.type=i;if(i!==st)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(t!==null&&t.outputColorSpace===We)for(let s of n)s.texture.colorSpace=We}}dispose(){super.dispose();for(let t of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))t.dispose()}},B3=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,F3=class extends rd{constructor({blendFunction:t=$e.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:i=.03,mipmapBlur:n=!0,intensity:s=1,radius:r=.85,levels:a=8,kernelSize:o=_m.LARGE,resolutionScale:l=.5,width:c=En.AUTO_SIZE,height:u=En.AUTO_SIZE,resolutionX:d=c,resolutionY:h=u}={}){super("BloomEffect",B3,{blendFunction:t,uniforms:new Map([["map",new ie(null)],["intensity",new ie(s)]])}),this.renderTarget=new ze(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new T3({kernelSize:o}),this.luminancePass=new Ry({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=i,this.mipmapBlurPass=new U3,this.mipmapBlurPass.enabled=n,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=n?this.mipmapBlurPass.texture:this.renderTarget.texture;let f=this.resolution=new En(this,d,h,l);f.addEventListener("change",g=>this.setSize(f.baseWidth,f.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(t){this.resolution.preferredWidth=t}get height(){return this.resolution.height}set height(t){this.resolution.preferredHeight=t}get dithering(){return this.blurPass.dithering}set dithering(t){this.blurPass.dithering=t}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(t){this.blurPass.kernelSize=t}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(t){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(t){this.uniforms.get("intensity").value=t}getIntensity(){return this.intensity}setIntensity(t){this.intensity=t}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}update(t,e,i){let n=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(t,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(t,s.renderTarget):this.blurPass.render(t,s.renderTarget,n)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(t,e):this.blurPass.render(t,e,n)}setSize(t,e){let i=this.resolution;i.setBaseSize(t,e),this.renderTarget.setSize(i.width,i.height),this.blurPass.resolution.copy(i),this.luminancePass.setSize(t,e),this.mipmapBlurPass.setSize(t,e)}initialize(t,e,i){this.blurPass.initialize(t,e,i),this.luminancePass.initialize(t,e,i),this.mipmapBlurPass.initialize(t,e,i),i!==void 0&&(this.renderTarget.texture.type=i,t!==null&&t.outputColorSpace===We&&(this.renderTarget.texture.colorSpace=We))}};var N3=class extends cn{constructor(t,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=t,this.input=e}setInput(t){this.input=t}render(t,e,i,n,s){let r=this.fullscreenMaterial.uniforms;e!==null&&r!==void 0&&r[this.input]!==void 0&&(r[this.input].value=e.texture),t.setRenderTarget(this.renderToScreen?null:i),t.render(this.scene,this.camera)}initialize(t,e,i){i!==void 0&&i!==st&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}};var Am=class extends cn{constructor(t,e,i=null){super("RenderPass",t,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new ym,this.overrideMaterialManager=i===null?null:new Ey(i),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get renderToScreen(){return super.renderToScreen}set renderToScreen(t){super.renderToScreen=t,this.clearPass.renderToScreen=t}get overrideMaterial(){let t=this.overrideMaterialManager;return t!==null?t.material:null}set overrideMaterial(t){let e=this.overrideMaterialManager;t!==null?e!==null?e.setMaterial(t):this.overrideMaterialManager=new Ey(t):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(t){this.overrideMaterial=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getSelection(){return this.selection}setSelection(t){this.selection=t}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(t){this.ignoreBackground=t}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(t){this.skipShadowMapUpdate=t}getClearPass(){return this.clearPass}render(t,e,i,n,s){let r=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=r.background,u=t.shadowMap.autoUpdate,d=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(t.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(t,e),t.setRenderTarget(d),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(t,r,a):t.render(r,a),a.layers.mask=l,r.background=c,t.shadowMap.autoUpdate=u}};var ql={DEFAULT:0,KEEP_MAX_DEPTH:1,DISCARD_MAX_DEPTH:2};var en={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,UNCHARTED2:4,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8},Yl={DEFAULT:0,ESKIL:1};var O3=`void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 noise=vec3(rand(uv*(1.0+time)));
#ifdef PREMULTIPLY
outputColor=vec4(min(inputColor.rgb*noise,vec3(1.0)),inputColor.a);
#else
outputColor=vec4(noise,inputColor.a);
#endif
}`,Dy=class extends rd{constructor({blendFunction:t=$e.SCREEN,premultiply:e=!1}={}){super("NoiseEffect",O3,{blendFunction:t}),this.premultiply=e}get premultiply(){return this.defines.has("PREMULTIPLY")}set premultiply(t){this.premultiply!==t&&(t?this.defines.set("PREMULTIPLY","1"):this.defines.delete("PREMULTIPLY"),this.setChanged())}isPremultiplied(){return this.premultiply}setPremultiplied(t){this.premultiply=t}};var k3=class extends cn{constructor(t,e,{renderTarget:i,resolutionScale:n=1,width:s=En.AUTO_SIZE,height:r=En.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("DepthPass"),this.needsSwap=!1,this.renderPass=new Am(t,e,new Qa({depthPacking:pr}));let l=this.renderPass;l.skipShadowMapUpdate=!0,l.ignoreBackground=!0,this.renderTarget=i,this.renderTarget===void 0&&(this.renderTarget=new ze(1,1,{minFilter:wt,magFilter:wt}),this.renderTarget.texture.name="DepthPass.Target");let c=this.resolution=new En(this,a,o,n);c.addEventListener("change",u=>this.setSize(c.baseWidth,c.baseHeight))}set mainScene(t){this.renderPass.mainScene=t}set mainCamera(t){this.renderPass.mainCamera=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}render(t,e,i,n,s){let r=this.renderToScreen?null:this.renderTarget;this.renderPass.render(t,r)}setSize(t,e){let i=this.resolution;i.setBaseSize(t,e),this.renderTarget.setSize(i.width,i.height)}initialize(t,e,i){let n=t.capabilities.reversedDepthBuffer?0:16777215,s=this.renderPass.clearPass;s.overrideClearColor=new Re(n),s.overrideClearAlpha=1}};var aU=Math.PI*.5;var G3=`#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer0;uniform highp sampler2D depthBuffer1;
#else
uniform mediump sampler2D depthBuffer0;uniform mediump sampler2D depthBuffer1;
#endif
uniform sampler2D inputBuffer;uniform vec2 cameraNearFar;float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#else
return orthographicDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#endif
}varying vec2 vUv;void main(){vec2 depth;
#if DEPTH_PACKING_0 == 3201
depth.x=unpackRGBAToDepth(texture2D(depthBuffer0,vUv));
#else
depth.x=texture2D(depthBuffer0,vUv).r;
#endif
#if DEPTH_PACKING_1 == 3201
depth.y=unpackRGBAToDepth(texture2D(depthBuffer1,vUv));
#else
depth.y=texture2D(depthBuffer1,vUv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float a=cameraNearFar.y/(cameraNearFar.y-cameraNearFar.x);float b=cameraNearFar.y*cameraNearFar.x/(cameraNearFar.x-cameraNearFar.y);float c=log2(cameraNearFar.y+1.0);float d=pow(2.0,depth.x*c)-1.0;depth.x=a+b/d;d=pow(2.0,depth.y*c)-1.0;depth.y=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth.x=1.0-depth.x;depth.y=1.0-depth.y;
#endif
bool isMaxDepth=(depth.x==1.0);
#ifdef PERSPECTIVE_CAMERA
depth.x=viewZToOrthographicDepth(getViewZ(depth.x),cameraNearFar.x,cameraNearFar.y);depth.y=viewZToOrthographicDepth(getViewZ(depth.y),cameraNearFar.x,cameraNearFar.y);
#endif
#if DEPTH_TEST_STRATEGY == 0
bool keep=depthTest(depth.x,depth.y);
#elif DEPTH_TEST_STRATEGY == 1
bool keep=isMaxDepth||depthTest(depth.x,depth.y);
#else
bool keep=!isMaxDepth&&depthTest(depth.x,depth.y);
#endif
if(keep){gl_FragColor=texture2D(inputBuffer,vUv);}else{discard;}}`,H3=class extends Xe{constructor(){super({name:"DepthMaskMaterial",defines:{DEPTH_EPSILON:"0.0001",DEPTH_PACKING_0:"0",DEPTH_PACKING_1:"0",DEPTH_TEST_STRATEGY:ql.KEEP_MAX_DEPTH},uniforms:{inputBuffer:new ie(null),depthBuffer0:new ie(null),depthBuffer1:new ie(null),cameraNearFar:new ie(new le(1,1))},blending:tt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:G3,vertexShader:sd}),this.depthMode=Hr}set depthBuffer0(t){this.uniforms.depthBuffer0.value=t}set depthPacking0(t){this.defines.DEPTH_PACKING_0=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer0(t,e=It){this.depthBuffer0=t,this.depthPacking0=e}set depthBuffer1(t){this.uniforms.depthBuffer1.value=t}set depthPacking1(t){this.defines.DEPTH_PACKING_1=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer1(t,e=It){this.depthBuffer1=t,this.depthPacking1=e}get maxDepthStrategy(){return Number(this.defines.DEPTH_TEST_STRATEGY)}set maxDepthStrategy(t){this.defines.DEPTH_TEST_STRATEGY=t.toFixed(0),this.needsUpdate=!0}get keepFar(){return this.maxDepthStrategy}set keepFar(t){this.maxDepthStrategy=t?ql.KEEP_MAX_DEPTH:ql.DISCARD_MAX_DEPTH}getMaxDepthStrategy(){return this.maxDepthStrategy}setMaxDepthStrategy(t){this.maxDepthStrategy=t}get epsilon(){return Number(this.defines.DEPTH_EPSILON)}set epsilon(t){this.defines.DEPTH_EPSILON=t.toFixed(16),this.needsUpdate=!0}getEpsilon(){return this.epsilon}setEpsilon(t){this.epsilon=t}get depthMode(){return Number(this.defines.DEPTH_MODE)}set depthMode(t){let e;switch(t){case Ba:e="false";break;case nr:e="true";break;case Rs:e="abs(d1 - d0) <= DEPTH_EPSILON";break;case sr:e="abs(d1 - d0) > DEPTH_EPSILON";break;case Hr:e="d0 > d1";break;case Cs:e="d0 >= d1";break;case Fa:e="d0 <= d1";break;case Na:default:e="d0 < d1";break}this.defines.DEPTH_MODE=t.toFixed(0),this.defines["depthTest(d0, d1)"]=e,this.needsUpdate=!0}getDepthMode(){return this.depthMode}setDepthMode(t){this.depthMode=t}adoptCameraSettings(t){this.copyCameraSettings(t)}copyCameraSettings(t){t&&(this.uniforms.cameraNearFar.value.set(t.near,t.far),t instanceof qt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}},Iy=class extends F3{constructor(t,e,i){super(i),this.setAttributes(this.getAttributes()|Ir.DEPTH),this.camera=e,this.depthPass=new k3(t,e),this.clearPass=new ym(!0,!1,!1),this.clearPass.overrideClearColor=new Re(0),this.depthMaskPass=new N3(new H3);let n=this.depthMaskMaterial;n.copyCameraSettings(e),n.depthBuffer1=this.depthPass.texture,n.depthPacking1=pr,n.depthMode=Rs,this.renderTargetMasked=new ze(1,1,{depthBuffer:!1}),this.renderTargetMasked.texture.name="Bloom.Masked",this.selection=new Gb,this._inverted=!1,this._ignoreBackground=!1}set mainScene(t){this.depthPass.mainScene=t}set mainCamera(t){this.camera=t,this.depthPass.mainCamera=t,this.depthMaskMaterial.copyCameraSettings(t)}getSelection(){return this.selection}get depthMaskMaterial(){return this.depthMaskPass.fullscreenMaterial}get inverted(){return this._inverted}set inverted(t){this._inverted=t,this.depthMaskMaterial.depthMode=t?sr:Rs}isInverted(){return this.inverted}setInverted(t){this.inverted=t}get ignoreBackground(){return this._ignoreBackground}set ignoreBackground(t){this._ignoreBackground=t,this.depthMaskMaterial.maxDepthStrategy=t?ql.DISCARD_MAX_DEPTH:ql.KEEP_MAX_DEPTH}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(t){this.ignoreBackground=t}setDepthTexture(t,e=It){this.depthMaskMaterial.depthBuffer0=t,this.depthMaskMaterial.depthPacking0=e}update(t,e,i){let n=this.camera,s=this.selection,r=this.inverted,a=e;if(this.ignoreBackground||!r||s.size>0){let o=n.layers.mask;n.layers.set(s.layer),this.depthPass.render(t),n.layers.mask=o,a=this.renderTargetMasked,this.clearPass.render(t,a),this.depthMaskPass.render(t,e,a)}super.update(t,a,i)}setSize(t,e){super.setSize(t,e),this.renderTargetMasked.setSize(t,e),this.depthPass.setSize(t,e)}initialize(t,e,i){super.initialize(t,e,i),this.clearPass.initialize(t,e,i),this.depthPass.initialize(t,e,i),this.depthMaskPass.initialize(t,e,i),t!==null&&t.capabilities.logarithmicDepthBuffer&&(this.depthMaskPass.fullscreenMaterial.defines.LOG_DEPTH="1"),i!==void 0&&(this.renderTargetMasked.texture.type=i,t!==null&&t.outputColorSpace===We&&(this.renderTargetMasked.texture.colorSpace=We))}};var z3=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,V3=class extends Xe{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new ie(null),luminanceBuffer1:new ie(null),minLuminance:new ie(.01),deltaTime:new ie(0),tau:new ie(1)},extensions:{shaderTextureLOD:!0},blending:tt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:z3,vertexShader:sd})}set luminanceBuffer0(t){this.uniforms.luminanceBuffer0.value=t}setLuminanceBuffer0(t){this.uniforms.luminanceBuffer0.value=t}set luminanceBuffer1(t){this.uniforms.luminanceBuffer1.value=t}setLuminanceBuffer1(t){this.uniforms.luminanceBuffer1.value=t}set mipLevel1x1(t){this.defines.MIP_LEVEL_1X1=t.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(t){this.mipLevel1x1=t}set deltaTime(t){this.uniforms.deltaTime.value=t}setDeltaTime(t){this.uniforms.deltaTime.value=t}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(t){this.uniforms.minLuminance.value=t}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(t){this.uniforms.minLuminance.value=t}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(t){this.uniforms.tau.value=t}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(t){this.uniforms.tau.value=t}},W3=class extends cn{constructor(t,{minLuminance:e=.01,adaptationRate:i=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new V3,this.needsSwap=!1,this.renderTargetPrevious=new ze(1,1,{minFilter:wt,magFilter:wt,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";let n=this.fullscreenMaterial;n.luminanceBuffer0=this.renderTargetPrevious.texture,n.luminanceBuffer1=t,n.minLuminance=e,n.adaptationRate=i,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new by(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(t){this.fullscreenMaterial.mipLevel1x1=t}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(t){this.fullscreenMaterial.adaptationRate=t}render(t,e,i,n,s){this.fullscreenMaterial.deltaTime=n,t.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),t.render(this.scene,this.camera),this.copyPass.render(t,this.renderTargetAdapted)}},X3=`#include <tonemapping_pars_fragment>
uniform float whitePoint;
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
uniform float middleGrey;
#if TONE_MAPPING_MODE == 3
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 3
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 4
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 4
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,Py=class extends rd{constructor({blendFunction:t=$e.SRC,adaptive:e=!1,mode:i=e?en.REINHARD2_ADAPTIVE:en.AGX,resolution:n=256,maxLuminance:s=4,whitePoint:r=s,middleGrey:a=.6,minLuminance:o=.01,averageLuminance:l=1,adaptationRate:c=1}={}){super("ToneMappingEffect",X3,{blendFunction:t,uniforms:new Map([["luminanceBuffer",new ie(null)],["maxLuminance",new ie(s)],["whitePoint",new ie(r)],["middleGrey",new ie(a)],["averageLuminance",new ie(l)]])}),this.renderTargetLuminance=new ze(1,1,{minFilter:ns,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new Ry({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new W3(this.luminancePass.texture,{minLuminance:o,adaptationRate:c}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=n,this.mode=i}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(t){if(this.mode===t)return;let i="185".replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",t.toFixed(0)),t){case en.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case en.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case en.CINEON:case en.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",i);break;case en.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case en.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case en.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=t===en.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(t){this.mode=t}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(t){this.uniforms.get("whitePoint").value=t}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(t){this.uniforms.get("middleGrey").value=t}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(t){this.uniforms.get("averageLuminance").value=t}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(t){let e=Math.max(0,Math.ceil(Math.log2(t))),i=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(i,i),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(t){this.resolution=t}get adaptive(){return this.mode===en.REINHARD2_ADAPTIVE}set adaptive(t){this.mode=t?en.REINHARD2_ADAPTIVE:en.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(t){this.adaptiveLuminanceMaterial.adaptationRate=t}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(t){console.warn(this.name,"distinction was removed.")}update(t,e,i){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(t,e),this.adaptiveLuminancePass.render(t,null,null,i))}initialize(t,e,i){this.adaptiveLuminancePass.initialize(t,e,i)}},Y3=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,Ly=class extends rd{constructor({blendFunction:t,eskil:e=!1,technique:i=e?Yl.ESKIL:Yl.DEFAULT,offset:n=.5,darkness:s=.5}={}){super("VignetteEffect",Y3,{blendFunction:t,defines:new Map([["VIGNETTE_TECHNIQUE",i.toFixed(0)]]),uniforms:new Map([["offset",new ie(n)],["darkness",new ie(s)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(t){this.technique!==t&&(this.defines.set("VIGNETTE_TECHNIQUE",t.toFixed(0)),this.setChanged())}get eskil(){return this.technique===Yl.ESKIL}set eskil(t){this.technique=t?Yl.ESKIL:Yl.DEFAULT}getTechnique(){return this.technique}setTechnique(t){this.technique=t}get offset(){return this.uniforms.get("offset").value}set offset(t){this.uniforms.get("offset").value=t}getOffset(){return this.offset}setOffset(t){this.offset=t}get darkness(){return this.uniforms.get("darkness").value}set darkness(t){this.uniforms.get("darkness").value=t}getDarkness(){return this.darkness}setDarkness(t){this.darkness=t}};var q3=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,K3="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",Q3=class extends Xe{constructor(t,e,i,n,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:"185".replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new ie(null),depthBuffer:new ie(null),resolution:new ie(new le),texelSize:new ie(new le),cameraNear:new ie(.3),cameraFar:new ie(1e3),aspect:new ie(1),time:new ie(0)},blending:tt,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),t&&this.setShaderParts(t),e&&this.setDefines(e),i&&this.setUniforms(i),this.copyCameraSettings(n)}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){this.uniforms.depthBuffer.value=t}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=It){this.depthBuffer=t,this.depthPacking=e}setShaderData(t){this.setShaderParts(t.shaderParts),this.setDefines(t.defines),this.setUniforms(t.uniforms),this.setExtensions(t.extensions)}setShaderParts(t){return this.fragmentShader=q3.replace(_t.FRAGMENT_HEAD,t.get(_t.FRAGMENT_HEAD)||"").replace(_t.FRAGMENT_MAIN_UV,t.get(_t.FRAGMENT_MAIN_UV)||"").replace(_t.FRAGMENT_MAIN_IMAGE,t.get(_t.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=K3.replace(_t.VERTEX_HEAD,t.get(_t.VERTEX_HEAD)||"").replace(_t.VERTEX_MAIN_SUPPORT,t.get(_t.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(t){for(let e of t.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(t){for(let e of t.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(t){this.extensions={};for(let e of t)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(t){this.encodeOutput!==t&&(t?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(t){return this.encodeOutput}setOutputEncodingEnabled(t){this.encodeOutput=t}get time(){return this.uniforms.time.value}set time(t){this.uniforms.time.value=t}setDeltaTime(t){this.uniforms.time.value+=t}adoptCameraSettings(t){this.copyCameraSettings(t)}copyCameraSettings(t){t&&(this.uniforms.cameraNear.value=t.near,this.uniforms.cameraFar.value=t.far,t instanceof qt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(t,e){let i=this.uniforms;i.resolution.value.set(t,e),i.texelSize.value.set(1/t,1/e),i.aspect.value=t/e}static get Section(){return _t}};var UU=Number("185".replace(/\D+/g,"")),fa=255/256,BU=new Float32Array([fa/256**3,fa/256**2,fa/256,fa]),FU=new Float32Array([fa,fa/256,fa/256**2,1/256**3]);function Ty(t,e,i){for(let n of e){let s="$1"+t+n.charAt(0).toUpperCase()+n.slice(1),r=new RegExp("([^\\.])(\\b"+n+"\\b)","g");for(let a of i.entries())a[1]!==null&&i.set(a[0],a[1].replace(r,s))}}function Z3(t,e,i){let n=e.getFragmentShader(),s=e.getVertexShader(),r=n!==void 0&&/mainImage/.test(n),a=n!==void 0&&/mainUv/.test(n);if(i.attributes|=e.getAttributes(),n===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(i.attributes&Ir.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{let o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=i.shaderParts,c=l.get(_t.FRAGMENT_HEAD)||"",u=l.get(_t.FRAGMENT_MAIN_UV)||"",d=l.get(_t.FRAGMENT_MAIN_IMAGE)||"",h=l.get(_t.VERTEX_HEAD)||"",f=l.get(_t.VERTEX_MAIN_SUPPORT)||"",g=new Set,y=new Set;if(a&&(u+=`	${t}MainUv(UV);
`,i.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){let S=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);f+=`	${t}MainSupport(`,f+=S?`vUv);
`:`);
`;for(let b of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(let A of b[1].split(/\s*,\s*/))i.varyings.add(A),g.add(A),y.add(A);for(let b of s.matchAll(o))y.add(b[1])}for(let S of n.matchAll(o))y.add(S[1]);for(let S of e.defines.keys())y.add(S.replace(/\([\w\s,]*\)/g,""));for(let S of e.uniforms.keys())y.add(S);y.delete("while"),y.delete("for"),y.delete("if"),e.uniforms.forEach((S,b)=>i.uniforms.set(t+b.charAt(0).toUpperCase()+b.slice(1),S)),e.defines.forEach((S,b)=>i.defines.set(t+b.charAt(0).toUpperCase()+b.slice(1),S));let m=new Map([["fragment",n],["vertex",s]]);Ty(t,y,i.defines),Ty(t,y,m),n=m.get("fragment"),s=m.get("vertex");let p=e.blendMode;if(i.blendModes.set(p.blendFunction,p),r){e.inputColorSpace!==null&&e.inputColorSpace!==i.colorSpace&&(d+=e.inputColorSpace===We?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==gn?i.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(i.colorSpace=e.inputColorSpace);let S=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;d+=`${t}MainImage(color0, UV, `,(i.attributes&Ir.DEPTH)!==0&&S.test(n)&&(d+="depth, ",i.readDepth=!0),d+=`color1);
	`;let b=t+"BlendOpacity";i.uniforms.set(b,p.opacity),d+=`color0 = blend${p.blendFunction}(color0, color1, ${b});

	`,c+=`uniform float ${b};

`}if(c+=n+`
`,s!==null&&(h+=s+`
`),l.set(_t.FRAGMENT_HEAD,c),l.set(_t.FRAGMENT_MAIN_UV,u),l.set(_t.FRAGMENT_MAIN_IMAGE,d),l.set(_t.VERTEX_HEAD,h),l.set(_t.VERTEX_MAIN_SUPPORT,f),e.extensions!==null)for(let S of e.extensions)i.extensions.add(S)}}var ad=class extends cn{constructor(t,...e){super("EffectPass"),this.fullscreenMaterial=new Q3(null,null,null,t),this.listener=i=>this.handleEvent(i),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(t){for(let e of this.effects)e.mainScene=t}set mainCamera(t){this.fullscreenMaterial.copyCameraSettings(t);for(let e of this.effects)e.mainCamera=t}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(t){this.fullscreenMaterial.encodeOutput=t}get dithering(){return this.fullscreenMaterial.dithering}set dithering(t){let e=this.fullscreenMaterial;e.dithering=t,e.needsUpdate=!0}setEffects(t){for(let e of this.effects)e.removeEventListener("change",this.listener);this.effects=t.sort((e,i)=>i.attributes-e.attributes);for(let e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){let t=new Ob,e=0;for(let a of this.effects)if(a.blendMode.blendFunction===$e.DST)t.attributes|=a.getAttributes()&Ir.DEPTH;else{if((t.attributes&a.getAttributes()&Ir.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);Z3("e"+e++,a,t)}let i=t.shaderParts.get(_t.FRAGMENT_HEAD),n=t.shaderParts.get(_t.FRAGMENT_MAIN_IMAGE),s=t.shaderParts.get(_t.FRAGMENT_MAIN_UV),r=/\bblend\b/g;for(let a of t.blendModes.values())i+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(t.attributes&Ir.DEPTH)!==0?(t.readDepth&&(n=`float depth = readDepth(UV);

	`+n),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,t.colorSpace===We&&(n+=`color0 = sRGBToLinear(color0);
	`),t.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,t.defines.set("UV","transformedUv")):t.defines.set("UV","vUv"),t.shaderParts.set(_t.FRAGMENT_HEAD,i),t.shaderParts.set(_t.FRAGMENT_MAIN_IMAGE,n),t.shaderParts.set(_t.FRAGMENT_MAIN_UV,s);for(let[a,o]of t.shaderParts)o!==null&&t.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(t)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(t,e=It){this.fullscreenMaterial.depthBuffer=t,this.fullscreenMaterial.depthPacking=e;for(let i of this.effects)i.setDepthTexture(t,e)}render(t,e,i,n,s){for(let r of this.effects)r.update(t,e,n);if(!this.skipRendering||this.renderToScreen){let r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=n*this.timeScale,t.setRenderTarget(this.renderToScreen?null:i),t.render(this.scene,this.camera)}}setSize(t,e){this.fullscreenMaterial.setSize(t,e);for(let i of this.effects)i.setSize(t,e)}initialize(t,e,i){this.renderer=t;for(let n of this.effects)n.initialize(t,e,i);this.updateMaterial(),i!==void 0&&i!==st&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(let t of this.effects)t.removeEventListener("change",this.listener),t.dispose()}handleEvent(t){t.type==="change"&&this.recompile()}};var GU=[new Float32Array(3),new Float32Array(3)],HU=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],zU=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]];var VU=[new Float32Array(2),new Float32Array(2)];var WU=new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),XU=[new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125])],YU=[new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4])],qU=[new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3])];var QU=new Map([[Vi(0,0,0,0),new Float32Array([0,0,0,0])],[Vi(0,0,0,1),new Float32Array([0,0,0,1])],[Vi(0,0,1,0),new Float32Array([0,0,1,0])],[Vi(0,0,1,1),new Float32Array([0,0,1,1])],[Vi(0,1,0,0),new Float32Array([0,1,0,0])],[Vi(0,1,0,1),new Float32Array([0,1,0,1])],[Vi(0,1,1,0),new Float32Array([0,1,1,0])],[Vi(0,1,1,1),new Float32Array([0,1,1,1])],[Vi(1,0,0,0),new Float32Array([1,0,0,0])],[Vi(1,0,0,1),new Float32Array([1,0,0,1])],[Vi(1,0,1,0),new Float32Array([1,0,1,0])],[Vi(1,0,1,1),new Float32Array([1,0,1,1])],[Vi(1,1,0,0),new Float32Array([1,1,0,0])],[Vi(1,1,0,1),new Float32Array([1,1,0,1])],[Vi(1,1,1,0),new Float32Array([1,1,1,0])],[Vi(1,1,1,1),new Float32Array([1,1,1,1])]]);function vm(t,e,i){return t+(e-t)*i}function Vi(t,e,i,n){let s=vm(t,e,.75),r=vm(i,n,1-.25);return vm(s,r,1-.125)}var od=class{constructor(e,i,n){this.composer=new Cy(e,{frameBufferType:sn,multisampling:0}),this.composer.addPass(new Am(i,n)),this.bloom=new Iy(i,n,{intensity:Gt.bloom.intensity,luminanceThreshold:Gt.bloom.luminanceThreshold,luminanceSmoothing:Gt.bloom.luminanceSmoothing,mipmapBlur:!0,radius:Gt.bloom.radius}),this.bloom.inverted=!1,this.selection=this.bloom.selection,this.bloomPass=new ad(n,this.bloom),this.composer.addPass(this.bloomPass),this.bloomEnabled=!0;let s=new Ly({offset:Gt.vignette.offset,darkness:Gt.vignette.darkness}),r=new Dy({blendFunction:$e.OVERLAY});r.blendMode.opacity.value=Gt.grain,this.composer.addPass(new ad(n,s,r)),this.tonemap=new Py({mode:en.ACES_FILMIC}),this.tonemap.exposure=Gt.exposure,this.composer.addPass(new ad(n,this.tonemap)),e.toneMapping=mn}add(...e){for(let i of e)i&&this.selection.add(i)}setBloomEnabled(e){this.bloomPass.enabled=!!e,this.bloomEnabled=!!e}render(e){this.composer.render(e)}setSize(e,i){this.composer.setSize(e,i)}};var va=new URLSearchParams(location.search),Ro=va.has("demo"),ld=parseFloat(va.get("t")||"0")||0,J3=ld>0,ga=va.has("debug"),wm=va.get("q"),Mm=va.get("gesture"),Ny=!1,Ft=t=>document.getElementById(t);document.body.classList.toggle("debug",ga);ga&&Ft("quality").classList.add("on");va.has("kiosk")&&document.body.classList.add("kiosk");var Oy={IDLE:"\u7B49\u5F85\u68C0\u6D4B\u624B\u52BF...",FIST:"\u63E1\u62F3 - \u4ED9\u5251\u7403",THUMB_UP:"\u70B9\u8D5E - \u4E07\u5251\u70B9\u8D5E",SHAKA:"\u516D\u5B57\u8BC0 - \u516D\u8292\u661F\u9635",ROCK:"\u91D1\u5C5E\u793C - \u5927\u5E9A\u5251\u9635",SALUTE:"\u656C\u793C - \u94B1\u5858\u5251\u9635",FINGER_HEART:"\u6BD4\u5FC3 - \u6211\u2764\uFE0F\u94B1\u5858"},j3=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17]],Lr=new kh({antialias:!1,powerPreference:"high-performance"}),ky=(()=>{let t=Math.min(devicePixelRatio||1,Gt.maxDpr),e=Math.min(1,Gt.maxDeviceLongEdge/(Math.max(innerWidth,innerHeight)*t));return Math.max(.6,t*e)})();Lr.setPixelRatio(ky);Lr.setSize(innerWidth,innerHeight);Lr.setClearColor(263693);Ft("app").appendChild(Lr.domElement);var Uy=new Ds,Ql=new qt(60,innerWidth/innerHeight,.1,400);Ql.position.set(0,3,40);var Mi,ma,Yn,bm,Kl={phase:"init",setPhase(t){this.phase=t,document.body.dataset.phase=t},setGesture(t){let e=Ft("gesture-text");if(e){e.textContent=Oy[t]||t;let n={FIST:"#88ccff",THUMB_UP:"#67e8f9",SHAKA:"#ffd166",ROCK:"#7dd3fc",SALUTE:"#ffe08a",FINGER_HEART:"#ff9fcf",IDLE:"#ffaa44"};e.style.color=n[t]||"#00ffff"}let i=Ft("gesture-guide");if(i)for(let n of i.querySelectorAll(".g"))n.classList.toggle("on",n.dataset.k===t)},health(t,e){let i=Ft("error");if(t.state==="ok"){i.classList.remove("on"),Ft("loading").classList.remove("on");return}if(t.state==="starting"){Ft("loading").classList.add("on"),i.classList.remove("on");return}let n={denied:"CAMERA DENIED",missing:"NO CAMERA",busy:"CAMERA BUSY",stalled:"SIGNAL LOST",reconnecting:"RECONNECTING",engine:"ENGINE FAILED"}[t.kind||t.state]||"RETRYING";Ft("errorText").innerHTML=n,i.classList.add("on"),Ft("loading").classList.remove("on"),t.state==="error"&&(t.kind==="denied"||t.kind==="missing"||t.kind==="engine")?Ft("retry").style.display="":e&&!this._autoTimer&&(this._autoTimer=setTimeout(()=>{this._autoTimer=0,e.restart()},3e3))}};Ft("retry").addEventListener("click",()=>{Ft("error").classList.remove("on"),Yn?.restart()});var pa=null;for(let t of document.querySelectorAll("#gesture-guide .g"))t.addEventListener("click",()=>{let e=t.dataset.k;Oy[e]&&(pa===e?(pa=null,Mi&&(Mi.forceGesture=null),Kl.setGesture("IDLE")):(pa=e,Mi&&(Mi.forceGesture=e),Kl.setGesture(e)))});var Pr=Ft("hand-canvas"),tn=Pr.getContext("2d");function $3(t){let e=t.video;if(!e||e.readyState<2)return;(Pr.width!==e.videoWidth||Pr.height!==e.videoHeight)&&(Pr.width=e.videoWidth||640,Pr.height=e.videoHeight||480);let i=Pr.width,n=Pr.height;tn.clearRect(0,0,i,n);let s=t.rawHands||[];for(let r=0;r<s.length;r++){let a=s[r],o=r===0?"rgba(0,255,255,0.7)":"rgba(255,100,255,0.7)";tn.strokeStyle=o,tn.lineWidth=2;for(let[l,c]of j3){let u=a[l],d=a[c];!u||!d||(tn.beginPath(),tn.moveTo(u.x*i,u.y*n),tn.lineTo(d.x*i,d.y*n),tn.stroke())}tn.fillStyle=r===0?"#00ffff":"#ff66ff",tn.shadowColor=tn.fillStyle,tn.shadowBlur=8;for(let l=0;l<a.length;l++){let c=a[l];tn.beginPath(),tn.arc(c.x*i,c.y*n,[4,8,12,16,20].includes(l)?5:3,0,Math.PI*2),tn.fill()}tn.shadowBlur=0}}var Cm=class{constructor(e,i,n){this.renderer=e,this.postfx=i,this.director=n,this.q=Gt.quality,this.scale=wm==="low"?this.q.resScaleMin:this.q.resScaleMax,this.bloomOff=wm==="low",this._frames=0,this._t=performance.now(),this._downSince=null,this._upSince=null,this._apply()}_apply(){this.renderer.setPixelRatio(ky*this.scale),this.postfx.setSize(innerWidth,innerHeight),this.postfx.setBloomEnabled(!this.bloomOff),this.director.applyLowGlow(this.bloomOff)}_stepDown(e){if(this.scale>this.q.resScaleMin+.001)this.scale=Math.max(this.q.resScaleMin,this.scale-this.q.resStep);else if(!this.bloomOff)this.bloomOff=!0;else return;this._apply(),this._downSince=e}_stepUp(e){if(this.bloomOff)this.bloomOff=!1;else if(this.scale<this.q.resScaleMax-.001)this.scale=Math.min(this.q.resScaleMax,this.scale+this.q.resStep);else return;this._apply(),this._upSince=e}tick(e){this._frames++;let i=e-this._t;if(i<this.q.sampleMs)return;let n=this._frames*1e3/i;this._frames=0,this._t=e,n<this.q.downFps?(this._upSince=null,this._downSince===null?this._downSince=e:e-this._downSince>=this.q.holdDownMs&&this._stepDown(e)):n>this.q.upFps?(this._downSince=null,this._upSince===null?this._upSince=e:e-this._upSince>=this.q.holdUpMs&&this._stepUp(e)):this._downSince=this._upSince=null,ga&&(Ft("quality").textContent=`Q ${Math.round(this.scale*100)}%${this.bloomOff?" \u65E0\u8F89\u5149":""}`)}},Rm=class{constructor(){this.audio=document.getElementById("bgm"),this.audio||(this.audio=new Audio("./audio/bgm.mp3"),this.audio.id="bgm",document.body.appendChild(this.audio)),this.audio.loop=!0,this.audio.volume=.75,this.audio.preload="auto",this.audio.addEventListener("ended",()=>{this.audio.currentTime=0,this.play()}),document.addEventListener("visibilitychange",()=>{document.hidden||this.play()});let e=()=>{this.play()};window.addEventListener("pointerdown",e,{passive:!0}),window.addEventListener("keydown",e,{passive:!0}),window.addEventListener("touchstart",e,{passive:!0}),this.play()}play(){!this.audio||document.hidden||!this.audio.paused&&!this.audio.ended||this.audio.play().catch(()=>{})}},Sm=null;async function eC(){try{if(document.fonts&&(await Promise.all([document.fonts.load('16px "YujianKai"'),document.fonts.load('bold 150px "YujianKai"')]).catch(()=>{}),await document.fonts.ready),Mi=new nd(Uy,Ql),pa&&(Mi.forceGesture=pa),ma=new od(Lr,Uy,Ql),ma.add(...Mi.bloomTargets()),Mm&&(Mi.forceGesture=Mm,Mi.onGesture(Mm)),bm=new Cm(Lr,ma,Mi),Yn=new td({demo:Ro,prerollTo:ld,onSwipe:t=>{pa||Mi.onSwipe(t)},onState:t=>{Mi.onState(t),Kl.setPhase(t.phase),t.present&&Sm&&Sm.play()},onGesture:t=>{pa||(Mi.onGesture(t),Kl.setGesture(t))},onBrightWarn:t=>{let e=Ft("lightwarn");e&&e.classList.toggle("on",t)},onHealth:t=>Kl.health(t,Yn)}),await Yn.start(),!Ro&&Yn.video&&(Ft("preview").insertBefore(Yn.video,Pr),Ft("preview").classList.add("on"),Ft("gesture-status").classList.add("on"),Ft("gesture-guide").classList.add("on")),Ft("status").textContent=Ro?"":"\u8FFD\u8E2A\u4E2D",Ft("status").classList.toggle("on",!Ro&&ga),Ro&&ld>0){let t=.016666666666666666;for(let e=0;e<=ld;e+=t)Yn.scriptAt(e),Mi.update(t,e);if(va.has("probe")){let e=Mi.volley;console.log(`PROBE formation=${e.formation} isTracking=${e.isTracking} present=${Mi.present} total=${e.swordTotal}`);let i=0,n=0,s=1e9,r=-1e9,a=1e9,o=-1e9;for(let l=0;l<e.swordTotal;l++)i+=e.positions[l].x,n+=e.positions[l].y,s=Math.min(s,e.positions[l].x),r=Math.max(r,e.positions[l].x),a=Math.min(a,e.positions[l].y),o=Math.max(o,e.positions[l].y);console.log(`PROBE mean=(${(i/e.swordTotal).toFixed(2)},${(n/e.swordTotal).toFixed(2)}) x=[${s.toFixed(1)},${r.toFixed(1)}] y=[${a.toFixed(1)},${o.toFixed(1)}]`);for(let l=0;l<3;l++)console.log(`PROBE i=${l} pos=(${e.positions[l].x.toFixed(2)},${e.positions[l].y.toFixed(2)},${e.positions[l].z.toFixed(2)}) vel=(${e.velocities[l].x.toFixed(2)},${e.velocities[l].y.toFixed(2)})`)}}Sm=new Rm,Ny=!0,Ft("loading").classList.remove("on")}catch(t){console.error(t),Ft("loading").classList.remove("on"),Ft("errorText").innerHTML="LOAD FAILED",Ft("retry").style.display="none",Ft("error").classList.add("on")}}eC();var Em=performance.now(),Tm=0,By=new nl;function Gy(){requestAnimationFrame(Gy);let t=Math.min(By.getDelta(),.05),e=By.elapsedTime;if(Ny&&Mi){if(J3||(Mi.update(t,e),bm&&!wm&&!document.hidden&&bm.tick(performance.now())),ma.render(),!Ro&&Yn?.video&&$3(Yn),ga){Tm++;let i=performance.now();if(i-Em>500){let n=Tm*1e3/(i-Em);Tm=0,Em=i,Ft("status").textContent=`FPS ${n.toFixed(0)}  \u8FFD\u8E2A ${(Yn.fps||0).toFixed(0)}  \u5251\u9635 ${Mi.volley.swordTotal}  \u98DE ${Mi.volley.counts.fire}`}}}else ma&&ma.render()}Gy();addEventListener("resize",()=>{Ql.aspect=innerWidth/innerHeight,Ql.updateProjectionMatrix(),Lr.setSize(innerWidth,innerHeight),ma?.setSize(innerWidth,innerHeight)});addEventListener("keydown",t=>{if(t.key==="f"||t.key==="F")document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();else if(ga&&(t.key==="s"||t.key==="S")){let e=document.createElement("a");e.href=Lr.domElement.toDataURL("image/png"),e.download="yujian.png",e.click()}else ga&&(t.key==="m"||t.key==="M")&&(Vt.mirror=!Vt.mirror,Yn.resetSession())});var Fy;addEventListener("pointermove",()=>{document.body.classList.remove("cursor-off"),clearTimeout(Fy),Fy=setTimeout(()=>document.body.classList.add("cursor-off"),2e3)});})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
/**
 * postprocessing v6.39.4 build Mon Jul 27 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */
