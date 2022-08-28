(self.webpackChunkrps_sim=self.webpackChunkrps_sim||[]).push([[736],{4444:function(t,e,n){"use strict";n.d(e,{$s:function(){return calculateBackoffMillis},BH:function(){return Deferred},L:function(){return s},LL:function(){return ErrorFactory},Mn:function(){return isUWP},ZR:function(){return FirebaseError},b$:function(){return isReactNative},d:function(){return isElectron},eu:function(){return validateIndexedDBOpenable},hl:function(){return isIndexedDBAvailable},m9:function(){return getModularInstance},ru:function(){return isBrowserExtension},uI:function(){return isMobileCordova},vZ:function(){return deepEqual},w1:function(){return isIE},zI:function(){return areCookiesEnabled}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,h=(3&i)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0,o=++e<t.length?n[t.charAt(e)]:64,a=++e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const t=s<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},s=function(t){return function(t){const e=r(t);return i.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Deferred{constructor(){this.reject=(()=>{}),this.resolve=(()=>{}),this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getUA(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function isMobileCordova(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA())}function isBrowserExtension(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function isReactNative(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function isElectron(){return getUA().indexOf("Electron/")>=0}function isIE(){const t=getUA();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function isUWP(){return getUA().indexOf("MSAppHost/")>=0}function isIndexedDBAvailable(){return"object"==typeof indexedDB}function validateIndexedDBOpenable(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=(()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)}),i.onupgradeneeded=(()=>{n=!1}),i.onerror=(()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")})}catch(t){e(t)}})}function areCookiesEnabled(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="FirebaseError";class FirebaseError extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=o,Object.setPrototypeOf(this,FirebaseError.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ErrorFactory.prototype.create)}}class ErrorFactory{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function replaceTemplate(t,e){return t.replace(a,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new FirebaseError(r,o,n)}}const a=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function deepEqual(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(isObject(n)&&isObject(s)){if(!deepEqual(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function isObject(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=1e3,u=2,h=144e5,l=.5;function calculateBackoffMillis(t,e=c,n=u){const r=e*Math.pow(n,t),i=Math.round(l*r*(Math.random()-.5)*2);return Math.min(h,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(t){return t&&t._delegate?t._delegate:t}},9662:function(t,e,n){var r=n(614),i=n(6330),s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not a function")}},9483:function(t,e,n){var r=n(4411),i=n(6330),s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not a constructor")}},6077:function(t,e,n){var r=n(614),i=String,s=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw s("Can't set "+i(t)+" as a prototype")}},1223:function(t,e,n){var r=n(5112),i=n(30),s=n(3070).f,o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},5787:function(t,e,n){var r=n(7976),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},9670:function(t,e,n){var r=n(111),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not an object")}},8533:function(t,e,n){"use strict";var r=n(2092).forEach,i=n(9341)("forEach");t.exports=i?[].forEach:function forEach(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},1318:function(t,e,n){var r=n(5656),i=n(1400),s=n(6244),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),h=i(o,u);if(t&&n!=n){for(;u>h;)if((a=c[h++])!=a)return!0}else for(;u>h;h++)if((t||h in c)&&c[h]===n)return t||h||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},2092:function(t,e,n){var r=n(9974),i=n(1702),s=n(8361),o=n(7908),a=n(6244),c=n(5417),u=i([].push),h=function(t){var e=1==t,n=2==t,i=3==t,h=4==t,l=6==t,d=7==t,f=5==t||l;return function(p,m,g,y){for(var v,_,w=o(p),b=s(w),E=r(m,g),x=a(b),T=0,S=y||c,I=e?S(p,x):n||d?S(p,0):void 0;x>T;T++)if((f||T in b)&&(_=E(v=b[T],T,w),t))if(e)I[T]=_;else if(_)switch(t){case 3:return!0;case 5:return v;case 6:return T;case 2:u(I,v)}else switch(t){case 4:return!1;case 7:u(I,v)}return l?-1:i||h?h:I}};t.exports={forEach:h(0),map:h(1),filter:h(2),some:h(3),every:h(4),find:h(5),findIndex:h(6),filterReject:h(7)}},1194:function(t,e,n){var r=n(7293),i=n(5112),s=n(7392),o=i("species");t.exports=function(t){return s>=51||!r(function(){var e=[];return(e.constructor={})[o]=function(){return{foo:1}},1!==e[t](Boolean).foo})}},9341:function(t,e,n){"use strict";var r=n(7293);t.exports=function(t,e){var n=[][t];return!!n&&r(function(){n.call(null,e||function(){return 1},1)})}},1589:function(t,e,n){var r=n(1400),i=n(6244),s=n(6135),o=Array,a=Math.max;t.exports=function(t,e,n){for(var c=i(t),u=r(e,c),h=r(void 0===n?c:n,c),l=o(a(h-u,0)),d=0;u<h;u++,d++)s(l,d,t[u]);return l.length=d,l}},206:function(t,e,n){var r=n(1702);t.exports=r([].slice)},7475:function(t,e,n){var r=n(3157),i=n(4411),s=n(111),o=n(5112)("species"),a=Array;t.exports=function(t){var e;return r(t)&&(e=t.constructor,i(e)&&(e===a||r(e.prototype))?e=void 0:s(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?a:e}},5417:function(t,e,n){var r=n(7475);t.exports=function(t,e){return new(r(t))(0===e?0:e)}},7072:function(t,e,n){var r=n(5112)("iterator"),i=!1;try{var s=0,o={next:function(){return{done:!!s++}},return:function(){i=!0}};o[r]=function(){return this},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var s={};s[r]=function(){return{next:function(){return{done:n=!0}}}},t(s)}catch(t){}return n}},4326:function(t,e,n){var r=n(1702),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},648:function(t,e,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112)("toStringTag"),a=Object,c="Arguments"==s(function(){return arguments}());t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=a(t),o))?n:c?s(e):"Object"==(r=s(e))&&i(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,h=0;h<a.length;h++){var l=a[h];r(t,l)||n&&r(n,l)||c(t,l,u(e,l))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r(function(){function F(){}return F.prototype.constructor=null,Object.getPrototypeOf(new F)!==F.prototype})},8880:function(t,e,n){var r=n(9781),i=n(3070),s=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:function(t,e,n){"use strict";var r=n(4948),i=n(3070),s=n(9114);t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,s(0,n)):t[o]=n}},8052:function(t,e,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&s(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(t){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},317:function(t,e,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:function(t,e,n){var r=n(317)("span").classList,i=r&&r.constructor&&r.constructor.prototype;t.exports=i===Object.prototype?void 0:i},7871:function(t,e,n){var r=n(3823),i=n(5268);t.exports=!r&&!i&&"object"==typeof window&&"object"==typeof document},3823:function(t){t.exports="object"==typeof Deno&&Deno&&"object"==typeof Deno.version},1528:function(t,e,n){var r=n(8113),i=n(7854);t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},6833:function(t,e,n){var r=n(8113);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},5268:function(t,e,n){var r=n(4326),i=n(7854);t.exports="process"==r(i.process)},1036:function(t,e,n){var r=n(8113);t.exports=/web0s(?!.*chrome)/i.test(r)},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,h=u&&u.v8;h&&(i=(r=h.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(!(r=o.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/))&&(i=+r[1]),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);t.exports=function(t,e){var n,h,l,d,f,p=t.target,m=t.global,g=t.stat;if(n=m?r:g?r[p]||a(p,{}):(r[p]||{}).prototype)for(h in e){if(d=e[h],l=t.dontCallGetSet?(f=i(n,h))&&f.value:n[h],!u(m?h:p+(g?".":"#")+h,t.forced)&&void 0!==l){if(typeof d==typeof l)continue;c(d,l)}(t.sham||l&&l.sham)&&s(d,"sham",!0),o(n,h,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},2104:function(t,e,n){var r=n(4374),i=Function.prototype,s=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},9974:function(t,e,n){var r=n(1702),i=n(9662),s=n(4374),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,n){var r=n(7293);t.exports=!r(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function something(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(t,e,n){var r=n(4374),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),i=n(614);t.exports=function(t,e){return arguments.length<2?function(t){return i(t)?t:void 0}(r[t]):r[t]&&r[t][e]}},1246:function(t,e,n){var r=n(648),i=n(8173),s=n(8554),o=n(7497),a=n(5112)("iterator");t.exports=function(t){if(!s(t))return i(t,a)||i(t,"@@iterator")||o[r(t)]}},4121:function(t,e,n){var r=n(6916),i=n(9662),s=n(9670),o=n(6330),a=n(1246),c=TypeError;t.exports=function(t,e){var n=arguments.length<2?a(t):e;if(i(n))return s(r(n,t));throw c(o(t)+" is not iterable")}},8173:function(t,e,n){var r=n(9662),i=n(8554);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function hasOwn(t,e){return s(i(t),e)}},3501:function(t){t.exports={}},842:function(t,e,n){var r=n(7854);t.exports=function(t,e){var n=r.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),i=n(7293),s=n(317);t.exports=!r&&!i(function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a})},8361:function(t,e,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);t.exports=i(function(){return!o("z").propertyIsEnumerable(0)})?function(t){return"String"==s(t)?a(t,""):o(t)}:o},2788:function(t,e,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},9909:function(t,e,n){var r,i,s,o=n(4811),a=n(7854),c=n(1702),u=n(111),h=n(8880),l=n(2597),d=n(5465),f=n(6200),p=n(3501),m=a.TypeError,g=a.WeakMap;if(o||d.state){var y=d.state||(d.state=new g),v=c(y.get),_=c(y.has),w=c(y.set);r=function(t,e){if(_(y,t))throw m("Object already initialized");return e.facade=t,w(y,t,e),e},i=function(t){return v(y,t)||{}},s=function(t){return _(y,t)}}else{var b=f("state");p[b]=!0,r=function(t,e){if(l(t,b))throw m("Object already initialized");return e.facade=t,h(t,b,e),e},i=function(t){return l(t,b)?t[b]:{}},s=function(t){return l(t,b)}}t.exports={set:r,get:i,has:s,enforce:function(t){return s(t)?i(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}}}},7659:function(t,e,n){var r=n(5112),i=n(7497),s=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function isArray(t){return"Array"==r(t)}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,e,n){var r=n(1702),i=n(7293),s=n(614),o=n(648),a=n(5005),c=n(2788),u=function(){},h=[],l=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(u),m=function isConstructor(t){if(!s(t))return!1;try{return l(u,h,t),!0}catch(t){return!1}},g=function isConstructor(t){if(!s(t))return!1;switch(o(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(t))}catch(t){return!0}};g.sham=!0,t.exports=!l||i(function(){var t;return m(m.call)||!m(Object)||!m(function(){t=!0})||t})?g:m},4705:function(t,e,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==h||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",h=o.POLYFILL="P";t.exports=o},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),i="object"==typeof document&&document.all,s=void 0===i&&void 0!==i;t.exports=s?function(t){return"object"==typeof t?null!==t:r(t)||t===i}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},408:function(t,e,n){var r=n(9974),i=n(6916),s=n(9670),o=n(6330),a=n(7659),c=n(6244),u=n(7976),h=n(4121),l=n(1246),d=n(9212),f=TypeError,p=function(t,e){this.stopped=t,this.result=e},m=p.prototype;t.exports=function(t,e,n){var g,y,v,_,w,b,E,x=n&&n.that,T=!(!n||!n.AS_ENTRIES),S=!(!n||!n.IS_RECORD),I=!(!n||!n.IS_ITERATOR),C=!(!n||!n.INTERRUPTED),A=r(e,x),D=function(t){return g&&d(g,"normal",t),new p(!0,t)},O=function(t){return T?(s(t),C?A(t[0],t[1],D):A(t[0],t[1])):C?A(t,D):A(t)};if(S)g=t.iterator;else if(I)g=t;else{if(!(y=l(t)))throw f(o(t)+" is not iterable");if(a(y)){for(v=0,_=c(t);_>v;v++)if((w=O(t[v]))&&u(m,w))return w;return new p(!1)}g=h(t,y)}for(b=S?t.next:g.next;!(E=i(b,g)).done;){try{w=O(E.value)}catch(t){d(g,"throw",t)}if("object"==typeof w&&w&&u(m,w))return w}return new p(!1)}},9212:function(t,e,n){var r=n(6916),i=n(9670),s=n(8173);t.exports=function(t,e,n){var o,a;i(t);try{if(!(o=s(t,"return"))){if("throw"===e)throw n;return n}o=r(o,t)}catch(t){a=!0,o=t}if("throw"===e)throw n;if(a)throw o;return i(o),n}},3061:function(t,e,n){"use strict";var r=n(3383).IteratorPrototype,i=n(30),s=n(9114),o=n(8003),a=n(7497),c=function(){return this};t.exports=function(t,e,n,u){var h=e+" Iterator";return t.prototype=i(r,{next:s(+!u,n)}),o(t,h,!1,!0),a[h]=c,t}},1656:function(t,e,n){"use strict";var r=n(2109),i=n(6916),s=n(1913),o=n(6530),a=n(614),c=n(3061),u=n(9518),h=n(7674),l=n(8003),d=n(8880),f=n(8052),p=n(5112),m=n(7497),g=n(3383),y=o.PROPER,v=o.CONFIGURABLE,_=g.IteratorPrototype,w=g.BUGGY_SAFARI_ITERATORS,b=p("iterator"),E=function(){return this};t.exports=function(t,e,n,o,p,g,x){c(n,e,o);var T,S,I,C=function(t){if(t===p&&N)return N;if(!w&&t in O)return O[t];switch(t){case"keys":return function keys(){return new n(this,t)};case"values":return function values(){return new n(this,t)};case"entries":return function entries(){return new n(this,t)}}return function(){return new n(this)}},A=e+" Iterator",D=!1,O=t.prototype,k=O[b]||O["@@iterator"]||p&&O[p],N=!w&&k||C(p),R="Array"==e&&O.entries||k;if(R&&(T=u(R.call(new t)))!==Object.prototype&&T.next&&(s||u(T)===_||(h?h(T,_):a(T[b])||f(T,b,E)),l(T,A,!0,!0),s&&(m[A]=E)),y&&"values"==p&&k&&"values"!==k.name&&(!s&&v?d(O,"name","values"):(D=!0,N=function values(){return i(k,this)})),p)if(S={values:C("values"),keys:g?N:C("keys"),entries:C("entries")},x)for(I in S)!w&&!D&&I in O||f(O,I,S[I]);else r({target:e,proto:!0,forced:w||D},S);return s&&!x||O[b]===N||f(O,b,N,{name:p}),m[e]=N,S}},3383:function(t,e,n){"use strict";var r,i,s,o=n(7293),a=n(614),c=n(111),u=n(30),h=n(9518),l=n(8052),d=n(5112),f=n(1913),p=d("iterator"),m=!1;[].keys&&("next"in(s=[].keys())?(i=h(h(s)))!==Object.prototype&&(r=i):m=!0),!c(r)||o(function(){var t={};return r[p].call(t)!==t})?r={}:f&&(r=u(r)),a(r[p])||l(r,p,function(){return this}),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:m}},7497:function(t){t.exports={}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(7293),i=n(614),s=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),h=u.enforce,l=u.get,d=Object.defineProperty,f=o&&!r(function(){return 8!==d(function(){},"length",{value:8}).length}),p=String(String).split("String"),m=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||a&&t.name!==e)&&(o?d(t,"name",{value:e,configurable:!0}):t.name=e),f&&n&&s(n,"arity")&&t.length!==n.arity&&d(t,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?o&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=h(t);return s(r,"source")||(r.source=p.join("string"==typeof e?e:"")),t};Function.prototype.toString=m(function toString(){return i(this)&&l(this).source||c(this)},"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function trunc(t){var r=+t;return(r>0?n:e)(r)}},5948:function(t,e,n){var r,i,s,o,a,c,u,h,l=n(7854),d=n(9974),f=n(1236).f,p=n(261).set,m=n(6833),g=n(1528),y=n(1036),v=n(5268),_=l.MutationObserver||l.WebKitMutationObserver,w=l.document,b=l.process,E=l.Promise,x=f(l,"queueMicrotask"),T=x&&x.value;T||(r=function(){var t,e;for(v&&(t=b.domain)&&t.exit();i;){e=i.fn,i=i.next;try{e()}catch(t){throw i?o():s=void 0,t}}s=void 0,t&&t.enter()},m||v||y||!_||!w?!g&&E&&E.resolve?((u=E.resolve(void 0)).constructor=E,h=d(u.then,u),o=function(){h(r)}):v?o=function(){b.nextTick(r)}:(p=d(p,l),o=function(){p(r)}):(a=!0,c=w.createTextNode(""),new _(r).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),t.exports=T||function(t){var e={fn:t,next:void 0};s&&(s.next=e),i||(i=e,o()),s=e}},8523:function(t,e,n){"use strict";var r=n(9662),i=TypeError;t.exports.f=function(t){return new function(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw i("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}(t)}},30:function(t,e,n){var r,i=n(9670),s=n(6048),o=n(748),a=n(3501),c=n(490),u=n(317),h=n(6200)("IE_PROTO"),l=function(){},d=function(t){return"<script>"+t+"<\/script>"},f=function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e},p=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}p="undefined"!=typeof document?document.domain&&r?f(r):function(){var t,e=u("iframe");return e.style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F}():f(r);for(var t=o.length;t--;)delete p.prototype[o[t]];return p()};a[h]=!0,t.exports=Object.create||function create(t,e){var n;return null!==t?(l.prototype=i(t),n=new l,l.prototype=null,n[h]=t):n=p(),void 0===e?n:s.f(n,e)}},6048:function(t,e,n){var r=n(9781),i=n(3353),s=n(3070),o=n(9670),a=n(5656),c=n(1956);e.f=r&&!i?Object.defineProperties:function defineProperties(t,e){o(t);for(var n,r=a(e),i=c(e),u=i.length,h=0;u>h;)s.f(t,n=i[h++],r[n]);return t}},3070:function(t,e,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,h=Object.getOwnPropertyDescriptor;e.f=r?s?function defineProperty(t,e,n){if(o(t),e=a(e),o(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=h(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return u(t,e,n)}:u:function defineProperty(t,e,n){if(o(t),e=a(e),o(n),i)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),h=n(4664),l=Object.getOwnPropertyDescriptor;e.f=r?l:function getOwnPropertyDescriptor(t,e){if(t=a(t),e=c(e),h)try{return l(t,e)}catch(t){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},1156:function(t,e,n){var r=n(4326),i=n(5656),s=n(8006).f,o=n(1589),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function getOwnPropertyNames(t){return a&&"Window"==r(t)?function(t){try{return s(t)}catch(t){return o(a)}}(t):s(i(t))}},8006:function(t,e,n){var r=n(6324),i=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function getOwnPropertyNames(t){return r(t,i)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,h=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?h:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,h=[];for(n in r)!i(a,n)&&i(r,n)&&c(h,n);for(;e.length>u;)i(r,n=e[u++])&&(~o(h,n)||c(h,n));return h}},1956:function(t,e,n){var r=n(6324),i=n(748);t.exports=Object.keys||function keys(t){return r(t,i)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function propertyIsEnumerable(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),i=n(9670),s=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),e=n instanceof Array}catch(t){}return function setPrototypeOf(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},288:function(t,e,n){"use strict";var r=n(1694),i=n(648);t.exports=r?{}.toString:function toString(){return"[object "+i(this)+"]"}},2140:function(t,e,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw o("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);t.exports=r("Reflect","ownKeys")||function ownKeys(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},857:function(t,e,n){var r=n(7854);t.exports=r},2534:function(t){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},3702:function(t,e,n){var r=n(7854),i=n(2492),s=n(614),o=n(4705),a=n(2788),c=n(5112),u=n(7871),h=n(3823),l=n(1913),d=n(7392),f=i&&i.prototype,p=c("species"),m=!1,g=s(r.PromiseRejectionEvent),y=o("Promise",function(){var t=a(i),e=t!==String(i);if(!e&&66===d)return!0;if(l&&(!f.catch||!f.finally))return!0;if(!d||d<51||!/native code/.test(t)){var n=new i(function(t){t(1)}),r=function(t){t(function(){},function(){})};if((n.constructor={})[p]=r,!(m=n.then(function(){})instanceof r))return!0}return!e&&(u||h)&&!g});t.exports={CONSTRUCTOR:y,REJECTION_EVENT:g,SUBCLASSING:m}},2492:function(t,e,n){var r=n(7854);t.exports=r.Promise},9478:function(t,e,n){var r=n(9670),i=n(111),s=n(8523);t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=s.f(t);return(0,n.resolve)(e),n.promise}},612:function(t,e,n){var r=n(2492),i=n(7072),s=n(3702).CONSTRUCTOR;t.exports=s||!i(function(t){r.all(t).then(void 0,function(){})})},8572:function(t){var e=function(){this.head=null,this.tail=null};e.prototype={add:function(t){var e={item:t,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}},t.exports=e},7066:function(t,e,n){"use strict";var r=n(9670);t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},4706:function(t,e,n){var r=n(6916),i=n(2597),s=n(7976),o=n(7066),a=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in a||i(t,"flags")||!s(a,t)?e:r(o,t)}},4488:function(t,e,n){var r=n(8554),i=TypeError;t.exports=function(t){if(r(t))throw i("Can't call method on "+t);return t}},6340:function(t,e,n){"use strict";var r=n(5005),i=n(3070),s=n(5112),o=n(9781),a=s("species");t.exports=function(t){var e=r(t),n=i.f;o&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},8003:function(t,e,n){var r=n(3070).f,i=n(2597),s=n(5112)("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!i(t,s)&&r(t,s,{configurable:!0,value:e})}},6200:function(t,e,n){var r=n(2309),i=n(9711),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3072),s=r["__core-js_shared__"]||i("__core-js_shared__",{});t.exports=s},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.25.0",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6707:function(t,e,n){var r=n(9670),i=n(9483),s=n(8554),o=n(5112)("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||s(n=r(a)[o])?e:i(n)}},8710:function(t,e,n){var r=n(1702),i=n(9303),s=n(1340),o=n(4488),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),h=function(t){return function(e,n){var r,h,l=s(o(e)),d=i(n),f=l.length;return d<0||d>=f?t?"":void 0:(r=c(l,d))<55296||r>56319||d+1===f||(h=c(l,d+1))<56320||h>57343?t?a(l,d):r:t?u(l,d,d+2):h-56320+(r-55296<<10)+65536}};t.exports={codeAt:h(!1),charAt:h(!0)}},6293:function(t,e,n){var r=n(7392),i=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!i(function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41})},6532:function(t,e,n){var r=n(6916),i=n(5005),s=n(5112),o=n(8052);t.exports=function(){var t=i("Symbol"),e=t&&t.prototype,n=e&&e.valueOf,a=s("toPrimitive");e&&!e[a]&&o(e,a,function(t){return r(n,this)},{arity:1})}},2015:function(t,e,n){var r=n(6293);t.exports=r&&!!Symbol.for&&!!Symbol.keyFor},261:function(t,e,n){var r,i,s,o,a=n(7854),c=n(2104),u=n(9974),h=n(614),l=n(2597),d=n(7293),f=n(490),p=n(206),m=n(317),g=n(8053),y=n(6833),v=n(5268),_=a.setImmediate,w=a.clearImmediate,b=a.process,E=a.Dispatch,x=a.Function,T=a.MessageChannel,S=a.String,I=0,C={};try{r=a.location}catch(t){}var A=function(t){if(l(C,t)){var e=C[t];delete C[t],e()}},D=function(t){return function(){A(t)}},O=function(t){A(t.data)},k=function(t){a.postMessage(S(t),r.protocol+"//"+r.host)};_&&w||(_=function setImmediate(t){g(arguments.length,1);var e=h(t)?t:x(t),n=p(arguments,1);return C[++I]=function(){c(e,void 0,n)},i(I),I},w=function clearImmediate(t){delete C[t]},v?i=function(t){b.nextTick(D(t))}:E&&E.now?i=function(t){E.now(D(t))}:T&&!y?(o=(s=new T).port2,s.port1.onmessage=O,i=u(o.postMessage,o)):a.addEventListener&&h(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(k)?(i=k,a.addEventListener("message",O,!1)):i="onreadystatechange"in m("script")?function(t){f.appendChild(m("script")).onreadystatechange=function(){f.removeChild(this),A(t)}}:function(t){setTimeout(D(t),0)}),t.exports={set:_,clear:w}},1400:function(t,e,n){var r=n(9303),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!=e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),i=Object;t.exports=function(t){return i(r(t))}},7593:function(t,e,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,h=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,c=o(t,h);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r={};r[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},1340:function(t,e,n){var r=n(648),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype})},8053:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw e("Not enough arguments");return t}},4811:function(t,e,n){var r=n(7854),i=n(614),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},6800:function(t,e,n){var r=n(857),i=n(2597),s=n(6061),o=n(3070).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:s.f(t)})}},6061:function(t,e,n){var r=n(5112);e.f=r},5112:function(t,e,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),c=n(3307),u=i("wks"),h=r.Symbol,l=h&&h.for,d=c?h:h&&h.withoutSetter||o;t.exports=function(t){if(!s(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&s(h,t)?u[t]=h[t]:u[t]=c&&l?l(e):d(e)}return u[t]}},6992:function(t,e,n){"use strict";var r=n(5656),i=n(1223),s=n(7497),o=n(9909),a=n(3070).f,c=n(1656),u=n(1913),h=n(9781),l=o.set,d=o.getterFor("Array Iterator");t.exports=c(Array,"Array",function(t,e){l(this,{type:"Array Iterator",target:r(t),index:0,kind:e})},function(){var t=d(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}},"values");var f=s.Arguments=s.Array;if(i("keys"),i("values"),i("entries"),!u&&h&&"values"!==f.name)try{a(f,"name",{value:"values"})}catch(t){}},7042:function(t,e,n){"use strict";var r=n(2109),i=n(3157),s=n(4411),o=n(111),a=n(1400),c=n(6244),u=n(5656),h=n(6135),l=n(5112),d=n(1194),f=n(206),p=d("slice"),m=l("species"),g=Array,y=Math.max;r({target:"Array",proto:!0,forced:!p},{slice:function slice(t,e){var n,r,l,d=u(this),p=c(d),v=a(t,p),_=a(void 0===e?p:e,p);if(i(d)&&(n=d.constructor,s(n)&&(n===g||i(n.prototype))?n=void 0:o(n)&&null===(n=n[m])&&(n=void 0),n===g||void 0===n))return f(d,v,_);for(r=new(void 0===n?g:n)(y(_-v,0)),l=0;v<_;v++,l++)v in d&&h(r,l,d[v]);return r.length=l,r}})},8309:function(t,e,n){var r=n(9781),i=n(6530).EXISTS,s=n(1702),o=n(3070).f,a=Function.prototype,c=s(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,h=s(u.exec);r&&!i&&o(a,"name",{configurable:!0,get:function(){try{return h(u,c(this))[1]}catch(t){return""}}})},8862:function(t,e,n){var r=n(2109),i=n(5005),s=n(2104),o=n(6916),a=n(1702),c=n(7293),u=n(3157),h=n(614),l=n(111),d=n(2190),f=n(206),p=n(6293),m=i("JSON","stringify"),g=a(/./.exec),y=a("".charAt),v=a("".charCodeAt),_=a("".replace),w=a(1..toString),b=/[\uD800-\uDFFF]/g,E=/^[\uD800-\uDBFF]$/,x=/^[\uDC00-\uDFFF]$/,T=!p||c(function(){var t=i("Symbol")();return"[null]"!=m([t])||"{}"!=m({a:t})||"{}"!=m(Object(t))}),S=c(function(){return'"\\udf06\\ud834"'!==m("\udf06\ud834")||'"\\udead"'!==m("\udead")}),I=function(t,e){var n=f(arguments),r=e;if((l(e)||void 0!==t)&&!d(t))return u(e)||(e=function(t,e){if(h(r)&&(e=o(r,this,t,e)),!d(e))return e}),n[1]=e,s(m,null,n)},C=function(t,e,n){var r=y(n,e-1),i=y(n,e+1);return g(E,t)&&!g(x,i)||g(x,t)&&!g(E,r)?"\\u"+w(v(t,0),16):t};m&&r({target:"JSON",stat:!0,arity:3,forced:T||S},{stringify:function stringify(t,e,n){var r=f(arguments),i=s(T?I:m,null,r);return S&&"string"==typeof i?_(i,b,C):i}})},3706:function(t,e,n){var r=n(7854);n(8003)(r.JSON,"JSON",!0)},2703:function(t,e,n){n(8003)(Math,"Math",!0)},9660:function(t,e,n){var r=n(2109),i=n(6293),s=n(7293),o=n(5181),a=n(7908);r({target:"Object",stat:!0,forced:!i||s(function(){o.f(1)})},{getOwnPropertySymbols:function getOwnPropertySymbols(t){var e=o.f;return e?e(a(t)):[]}})},489:function(t,e,n){var r=n(2109),i=n(7293),s=n(7908),o=n(9518),a=n(8544);r({target:"Object",stat:!0,forced:i(function(){o(1)}),sham:!a},{getPrototypeOf:function getPrototypeOf(t){return o(s(t))}})},8304:function(t,e,n){n(2109)({target:"Object",stat:!0},{setPrototypeOf:n(7674)})},1539:function(t,e,n){var r=n(1694),i=n(8052),s=n(288);r||i(Object.prototype,"toString",s,{unsafe:!0})},821:function(t,e,n){"use strict";var r=n(2109),i=n(6916),s=n(9662),o=n(8523),a=n(2534),c=n(408);r({target:"Promise",stat:!0,forced:n(612)},{all:function all(t){var e=this,n=o.f(e),r=n.resolve,u=n.reject,h=a(function(){var n=s(e.resolve),o=[],a=0,h=1;c(t,function(t){var s=a++,c=!1;h++,i(n,e,t).then(function(t){c||(c=!0,o[s]=t,--h||r(o))},u)}),--h||r(o)});return h.error&&u(h.value),n.promise}})},4164:function(t,e,n){"use strict";var r=n(2109),i=n(1913),s=n(3702).CONSTRUCTOR,o=n(2492),a=n(5005),c=n(614),u=n(8052),h=o&&o.prototype;if(r({target:"Promise",proto:!0,forced:s,real:!0},{catch:function(t){return this.then(void 0,t)}}),!i&&c(o)){var l=a("Promise").prototype.catch;h.catch!==l&&u(h,"catch",l,{unsafe:!0})}},3401:function(t,e,n){"use strict";var r,i,s,o=n(2109),a=n(1913),c=n(5268),u=n(7854),h=n(6916),l=n(8052),d=n(7674),f=n(8003),p=n(6340),m=n(9662),g=n(614),y=n(111),v=n(5787),_=n(6707),w=n(261).set,b=n(5948),E=n(842),x=n(2534),T=n(8572),S=n(9909),I=n(2492),C=n(3702),A=n(8523),D=C.CONSTRUCTOR,O=C.REJECTION_EVENT,k=C.SUBCLASSING,N=S.getterFor("Promise"),R=S.set,L=I&&I.prototype,P=I,V=L,M=u.TypeError,F=u.document,U=u.process,j=A.f,B=j,q=!!(F&&F.createEvent&&u.dispatchEvent),K=function(t){var e;return!(!y(t)||!g(e=t.then))&&e},$=function(t,e){var n,r,i,s=e.value,o=1==e.state,a=o?t.ok:t.fail,c=t.resolve,u=t.reject,l=t.domain;try{a?(o||(2===e.rejection&&W(e),e.rejection=1),!0===a?n=s:(l&&l.enter(),n=a(s),l&&(l.exit(),i=!0)),n===t.promise?u(M("Promise-chain cycle")):(r=K(n))?h(r,n,c,u):c(n)):u(s)}catch(t){l&&!i&&l.exit(),u(t)}},G=function(t,e){t.notified||(t.notified=!0,b(function(){for(var n,r=t.reactions;n=r.get();)$(n,t);t.notified=!1,e&&!t.rejection&&H(t)}))},z=function(t,e,n){var r,i;q?((r=F.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!O&&(i=u["on"+t])?i(r):"unhandledrejection"===t&&E("Unhandled promise rejection",n)},H=function(t){h(w,u,function(){var e,n=t.facade,r=t.value;if(Q(t)&&(e=x(function(){c?U.emit("unhandledRejection",r,n):z("unhandledrejection",n,r)}),t.rejection=c||Q(t)?2:1,e.error))throw e.value})},Q=function(t){return 1!==t.rejection&&!t.parent},W=function(t){h(w,u,function(){var e=t.facade;c?U.emit("rejectionHandled",e):z("rejectionhandled",e,t.value)})},X=function(t,e,n){return function(r){t(e,r,n)}},Y=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=2,G(t,!0))},J=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw M("Promise can't be resolved itself");var r=K(e);r?b(function(){var n={done:!1};try{h(r,e,X(J,n,t),X(Y,n,t))}catch(e){Y(n,e,t)}}):(t.value=e,t.state=1,G(t,!1))}catch(e){Y({done:!1},e,t)}}};if(D&&(V=(P=function Promise(t){v(this,V),m(t),h(r,this);var e=N(this);try{t(X(J,e),X(Y,e))}catch(t){Y(e,t)}}).prototype,(r=function Promise(t){R(this,{type:"Promise",done:!1,notified:!1,parent:!1,reactions:new T,rejection:!1,state:0,value:void 0})}).prototype=l(V,"then",function then(t,e){var n=N(this),r=j(_(this,P));return n.parent=!0,r.ok=!g(t)||t,r.fail=g(e)&&e,r.domain=c?U.domain:void 0,0==n.state?n.reactions.add(r):b(function(){$(r,n)}),r.promise}),i=function(){var t=new r,e=N(t);this.promise=t,this.resolve=X(J,e),this.reject=X(Y,e)},A.f=j=function(t){return t===P||void 0===t?new i(t):B(t)},!a&&g(I)&&L!==Object.prototype)){s=L.then,k||l(L,"then",function then(t,e){var n=this;return new P(function(t,e){h(s,n,t,e)}).then(t,e)},{unsafe:!0});try{delete L.constructor}catch(t){}d&&d(L,V)}o({global:!0,constructor:!0,wrap:!0,forced:D},{Promise:P}),f(P,"Promise",!1,!0),p("Promise")},8674:function(t,e,n){n(3401),n(821),n(4164),n(6027),n(683),n(6294)},6027:function(t,e,n){"use strict";var r=n(2109),i=n(6916),s=n(9662),o=n(8523),a=n(2534),c=n(408);r({target:"Promise",stat:!0,forced:n(612)},{race:function race(t){var e=this,n=o.f(e),r=n.reject,u=a(function(){var o=s(e.resolve);c(t,function(t){i(o,e,t).then(n.resolve,r)})});return u.error&&r(u.value),n.promise}})},683:function(t,e,n){"use strict";var r=n(2109),i=n(6916),s=n(8523);r({target:"Promise",stat:!0,forced:n(3702).CONSTRUCTOR},{reject:function reject(t){var e=s.f(this);return i(e.reject,void 0,t),e.promise}})},6294:function(t,e,n){"use strict";var r=n(2109),i=n(5005),s=n(1913),o=n(2492),a=n(3702).CONSTRUCTOR,c=n(9478),u=i("Promise"),h=s&&!a;r({target:"Promise",stat:!0,forced:s||a},{resolve:function resolve(t){return c(h&&this===u?o:this,t)}})},9714:function(t,e,n){"use strict";var r=n(6530).PROPER,i=n(8052),s=n(9670),o=n(1340),a=n(7293),c=n(4706),u=RegExp.prototype.toString,h=a(function(){return"/a/b"!=u.call({source:"a",flags:"b"})}),l=r&&"toString"!=u.name;(h||l)&&i(RegExp.prototype,"toString",function toString(){var t=s(this);return"/"+o(t.source)+"/"+o(c(t))},{unsafe:!0})},8783:function(t,e,n){"use strict";var r=n(8710).charAt,i=n(1340),s=n(9909),o=n(1656),a=s.set,c=s.getterFor("String Iterator");o(String,"String",function(t){a(this,{type:"String Iterator",string:i(t),index:0})},function next(){var t,e=c(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})})},2443:function(t,e,n){n(6800)("asyncIterator")},4032:function(t,e,n){"use strict";var r=n(2109),i=n(7854),s=n(6916),o=n(1702),a=n(1913),c=n(9781),u=n(6293),h=n(7293),l=n(2597),d=n(7976),f=n(9670),p=n(5656),m=n(4948),g=n(1340),y=n(9114),v=n(30),_=n(1956),w=n(8006),b=n(1156),E=n(5181),x=n(1236),T=n(3070),S=n(6048),I=n(5296),C=n(8052),A=n(2309),D=n(6200),O=n(3501),k=n(9711),N=n(5112),R=n(6061),L=n(6800),P=n(6532),V=n(8003),M=n(9909),F=n(2092).forEach,U=D("hidden"),j=M.set,B=M.getterFor("Symbol"),q=Object.prototype,K=i.Symbol,$=K&&K.prototype,G=i.TypeError,z=i.QObject,H=x.f,Q=T.f,W=b.f,X=I.f,Y=o([].push),J=A("symbols"),Z=A("op-symbols"),tt=A("wks"),et=!z||!z.prototype||!z.prototype.findChild,nt=c&&h(function(){return 7!=v(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=H(q,e);r&&delete q[e],Q(t,e,n),r&&t!==q&&Q(q,e,r)}:Q,rt=function(t,e){var n=J[t]=v($);return j(n,{type:"Symbol",tag:t,description:e}),c||(n.description=e),n},it=function defineProperty(t,e,n){t===q&&it(Z,e,n),f(t);var r=m(e);return f(n),l(J,r)?(n.enumerable?(l(t,U)&&t[U][r]&&(t[U][r]=!1),n=v(n,{enumerable:y(0,!1)})):(l(t,U)||Q(t,U,y(1,{})),t[U][r]=!0),nt(t,r,n)):Q(t,r,n)},st=function defineProperties(t,e){f(t);var n=p(e),r=_(n).concat(ut(n));return F(r,function(e){c&&!s(ot,n,e)||it(t,e,n[e])}),t},ot=function propertyIsEnumerable(t){var e=m(t),n=s(X,this,e);return!(this===q&&l(J,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(J,e)||l(this,U)&&this[U][e])||n)},at=function getOwnPropertyDescriptor(t,e){var n=p(t),r=m(e);if(n!==q||!l(J,r)||l(Z,r)){var i=H(n,r);return!i||!l(J,r)||l(n,U)&&n[U][r]||(i.enumerable=!0),i}},ct=function getOwnPropertyNames(t){var e=W(p(t)),n=[];return F(e,function(t){l(J,t)||l(O,t)||Y(n,t)}),n},ut=function(t){var e=t===q,n=W(e?Z:p(t)),r=[];return F(n,function(t){!l(J,t)||e&&!l(q,t)||Y(r,J[t])}),r};u||(C($=(K=function Symbol(){if(d($,this))throw G("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?g(arguments[0]):void 0,e=k(t),n=function(t){this===q&&s(n,Z,t),l(this,U)&&l(this[U],e)&&(this[U][e]=!1),nt(this,e,y(1,t))};return c&&et&&nt(q,e,{configurable:!0,set:n}),rt(e,t)}).prototype,"toString",function toString(){return B(this).tag}),C(K,"withoutSetter",function(t){return rt(k(t),t)}),I.f=ot,T.f=it,S.f=st,x.f=at,w.f=b.f=ct,E.f=ut,R.f=function(t){return rt(N(t),t)},c&&(Q($,"description",{configurable:!0,get:function description(){return B(this).description}}),a||C(q,"propertyIsEnumerable",ot,{unsafe:!0}))),r({global:!0,constructor:!0,wrap:!0,forced:!u,sham:!u},{Symbol:K}),F(_(tt),function(t){L(t)}),r({target:"Symbol",stat:!0,forced:!u},{useSetter:function(){et=!0},useSimple:function(){et=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!c},{create:function create(t,e){return void 0===e?v(t):st(v(t),e)},defineProperty:it,defineProperties:st,getOwnPropertyDescriptor:at}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:ct}),P(),V(K,"Symbol"),O[U]=!0},1817:function(t,e,n){"use strict";var r=n(2109),i=n(9781),s=n(7854),o=n(1702),a=n(2597),c=n(614),u=n(7976),h=n(1340),l=n(3070).f,d=n(9920),f=s.Symbol,p=f&&f.prototype;if(i&&c(f)&&(!("description"in p)||void 0!==f().description)){var m={},g=function Symbol(){var t=arguments.length<1||void 0===arguments[0]?void 0:h(arguments[0]),e=u(p,this)?new f(t):void 0===t?f():f(t);return""===t&&(m[e]=!0),e};d(g,f),g.prototype=p,p.constructor=g;var y="Symbol(test)"==String(f("test")),v=o(p.valueOf),_=o(p.toString),w=/^Symbol\((.*)\)[^)]+$/,b=o("".replace),E=o("".slice);l(p,"description",{configurable:!0,get:function description(){var t=v(this);if(a(m,t))return"";var e=_(t),n=y?E(e,7,-1):b(e,w,"$1");return""===n?void 0:n}}),r({global:!0,constructor:!0,forced:!0},{Symbol:g})}},763:function(t,e,n){var r=n(2109),i=n(5005),s=n(2597),o=n(1340),a=n(2309),c=n(2015),u=a("string-to-symbol-registry"),h=a("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=o(t);if(s(u,e))return u[e];var n=i("Symbol")(e);return u[e]=n,h[n]=e,n}})},2165:function(t,e,n){n(6800)("iterator")},2526:function(t,e,n){n(4032),n(763),n(6620),n(8862),n(9660)},6620:function(t,e,n){var r=n(2109),i=n(2597),s=n(2190),o=n(6330),a=n(2309),c=n(2015),u=a("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!c},{keyFor:function keyFor(t){if(!s(t))throw TypeError(o(t)+" is not a symbol");if(i(u,t))return u[t]}})},3680:function(t,e,n){var r=n(5005),i=n(6800),s=n(8003);i("toStringTag"),s(r("Symbol"),"Symbol")},4747:function(t,e,n){var r=n(7854),i=n(8324),s=n(8509),o=n(8533),a=n(8880),c=function(t){if(t&&t.forEach!==o)try{a(t,"forEach",o)}catch(e){t.forEach=o}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(s)},3948:function(t,e,n){var r=n(7854),i=n(8324),s=n(8509),o=n(6992),a=n(8880),c=n(5112),u=c("iterator"),h=c("toStringTag"),l=o.values,d=function(t,e){if(t){if(t[u]!==l)try{a(t,u,l)}catch(e){t[u]=l}if(t[h]||a(t,h,e),i[e])for(var n in o)if(t[n]!==o[n])try{a(t,n,o[n])}catch(e){t[n]=o[n]}}};for(var f in i)d(r[f]&&r[f].prototype,f);d(s,"DOMTokenList")},7988:function(t,e,n){"use strict";n.d(e,{IH:function(){return getAnalytics}});var r=n(2238),i=n(3333),s=n(4444),o=n(8463),a=n(4424);const c=1e4,u="w:0.5.12",h="FIS_v2",l="https://firebaseinstallations.googleapis.com/v1",d=36e5,f={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},p=new s.LL("installations","Installations",f);function isServerError(t){return t instanceof s.ZR&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getInstallationsEndpoint({projectId:t}){return`${l}/projects/${t}/installations`}function extractAuthTokenInfoFromResponse(t){return{token:t.token,requestStatus:2,expiresIn:function getExpiresInFromResponseExpiresIn(t){return Number(t.replace("s","000"))}(t.expiresIn),creationTime:Date.now()}}async function getErrorFromResponse(t,e){const n=(await e.json()).error;return p.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function getHeaders({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function getHeadersWithAuth(t,{refreshToken:e}){const n=getHeaders(t);return n.append("Authorization",function getAuthorizationHeader(t){return`${h} ${t}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),n}async function retryIfServerError(t){const e=await t();return e.status>=500&&e.status<600?t():e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sleep(t){return new Promise(e=>{setTimeout(e,t)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const m=/^[cdef][\w-]{21}$/,g="";function generateFid(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function encode(t){return function bufferToBase64UrlSafe(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}(t).substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);return m.test(e)?e:g}catch(t){return g}}function getKey(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=new Map;function fidChanged(t,e){const n=getKey(t);callFidChangeCallbacks(n,e),function broadcastFidChange(t,e){const n=getBroadcastChannel();n&&n.postMessage({key:t,fid:e});closeBroadcastChannel()}(n,e)}function callFidChangeCallbacks(t,e){const n=y.get(t);if(n)for(const t of n)t(e)}let v=null;function getBroadcastChannel(){return!v&&"BroadcastChannel"in self&&((v=new BroadcastChannel("[Firebase] FID Change")).onmessage=(t=>{callFidChangeCallbacks(t.data.key,t.data.fid)})),v}function closeBroadcastChannel(){0===y.size&&v&&(v.close(),v=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _="firebase-installations-database",w=1,b="firebase-installations-store";let E=null;function getDbPromise(){return E||(E=(0,a.X3)(_,w,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(b)}}})),E}async function set(t,e){const n=getKey(t),r=(await getDbPromise()).transaction(b,"readwrite"),i=r.objectStore(b),s=await i.get(n);return await i.put(e,n),await r.done,s&&s.fid===e.fid||fidChanged(t,e.fid),e}async function remove(t){const e=getKey(t),n=(await getDbPromise()).transaction(b,"readwrite");await n.objectStore(b).delete(e),await n.done}async function update(t,e){const n=getKey(t),r=(await getDbPromise()).transaction(b,"readwrite"),i=r.objectStore(b),s=await i.get(n),o=e(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.done,!o||s&&s.fid===o.fid||fidChanged(t,o.fid),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function getInstallationEntry(t){let e;const n=await update(t.appConfig,n=>{const r=function updateOrCreateInstallationEntry(t){return clearTimedOutRequest(t||{fid:generateFid(),registrationStatus:0})}(n),i=function triggerRegistrationIfNecessary(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(p.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=async function registerInstallation(t,e){try{const n=await async function createInstallationRequest({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=getInstallationsEndpoint(t),i=getHeaders(t),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={fid:n,authVersion:h,appId:t.appId,sdkVersion:u},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await retryIfServerError(()=>fetch(r,a));if(c.ok){const t=await c.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:extractAuthTokenInfoFromResponse(t.authToken)}}throw await getErrorFromResponse("Create Installation",c)}(t,e);return set(t.appConfig,n)}catch(n){throw isServerError(n)&&409===n.customData.serverCode?await remove(t.appConfig):await set(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:async function waitUntilFidRegistration(t){let e=await updateInstallationRequest(t.appConfig);for(;1===e.registrationStatus;)await sleep(100),e=await updateInstallationRequest(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await getInstallationEntry(t);return n||e}return e}(t)}:{installationEntry:e}}(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===g?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function updateInstallationRequest(t){return update(t,t=>{if(!t)throw p.create("installation-not-found");return clearTimedOutRequest(t)})}function clearTimedOutRequest(t){return function hasInstallationRequestTimedOut(t){return 1===t.registrationStatus&&t.registrationTime+c<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)?{fid:t.fid,registrationStatus:0}:t}async function generateAuthTokenRequest({appConfig:t,heartbeatServiceProvider:e},n){const r=function getGenerateAuthTokenEndpoint(t,{fid:e}){return`${getInstallationsEndpoint(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,n),i=getHeadersWithAuth(t,n),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={installation:{sdkVersion:u,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await retryIfServerError(()=>fetch(r,a));if(c.ok){return extractAuthTokenInfoFromResponse(await c.json())}throw await getErrorFromResponse("Generate Auth Token",c)}async function refreshAuthToken(t,e=!1){let n;const r=await update(t.appConfig,r=>{if(!isEntryRegistered(r))throw p.create("not-registered");const i=r.authToken;if(!e&&function isAuthTokenValid(t){return 2===t.requestStatus&&!function isAuthTokenExpired(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+d}(t)}(i))return r;if(1===i.requestStatus)return n=async function waitUntilAuthTokenRequest(t,e){let n=await updateAuthTokenRequest(t.appConfig);for(;1===n.authToken.requestStatus;)await sleep(100),n=await updateAuthTokenRequest(t.appConfig);const r=n.authToken;return 0===r.requestStatus?refreshAuthToken(t,e):r}(t,e),r;{if(!navigator.onLine)throw p.create("app-offline");const e=function makeAuthTokenRequestInProgressEntry(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(r);return n=async function fetchAuthTokenFromServer(t,e){try{const n=await generateAuthTokenRequest(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await set(t.appConfig,r),n}catch(n){if(!isServerError(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await set(t.appConfig,n)}else await remove(t.appConfig);throw n}}(t,e),e}});return n?await n:r.authToken}function updateAuthTokenRequest(t){return update(t,t=>{if(!isEntryRegistered(t))throw p.create("not-registered");return function hasAuthTokenRequestTimedOut(t){return 1===t.requestStatus&&t.requestTime+c<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.authToken)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}function isEntryRegistered(t){return void 0!==t&&2===t.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function getToken(t,e=!1){const n=t;return await async function completeInstallationRegistration(t){const{registrationPromise:e}=await getInstallationEntry(t);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n),(await refreshAuthToken(n,e)).token}function getMissingValueError(t){return p.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x="installations",T="installations-internal",S=t=>{const e=t.getProvider("app").getImmediate();return{app:e,appConfig:
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig(t){if(!t||!t.options)throw getMissingValueError("App Configuration");if(!t.name)throw getMissingValueError("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw getMissingValueError(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),heartbeatServiceProvider:(0,r.qX)(e,"heartbeat"),_delete:()=>Promise.resolve()}},I=t=>{const e=t.getProvider("app").getImmediate(),n=(0,r.qX)(e,x).getImmediate();return{getId:()=>(async function getId(t){const e=t,{installationEntry:n,registrationPromise:r}=await getInstallationEntry(e);return r?r.catch(console.error):refreshAuthToken(e).catch(console.error),n.fid})(n),getToken:t=>getToken(n,t)}};!function registerInstallations(){(0,r.Xd)(new o.wA(x,S,"PUBLIC")),(0,r.Xd)(new o.wA(T,I,"PRIVATE"))}(),(0,r.KN)("@firebase/installations","0.5.12"),(0,r.KN)("@firebase/installations","0.5.12","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C="analytics",A="firebase_id",D="origin",O=6e4,k="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",N="https://www.googletagmanager.com/gtag/js",R=new i.Yd("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function promiseAllSettled(t){return Promise.all(t.map(t=>t.catch(t=>t)))}function wrapGtag(t,e,n,r){return async function gtagWrapper(i,s,o){try{"event"===i?await async function gtagOnEvent(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let t=i.send_to;Array.isArray(t)||(t=[t]);const r=await promiseAllSettled(n);for(const n of t){const t=r.find(t=>t.measurementId===n),i=t&&e[t.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(t){R.error(t)}}(t,e,n,s,o):"config"===i?await async function gtagOnConfig(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const t=(await promiseAllSettled(n)).find(t=>t.measurementId===i);t&&await e[t.appId]}}catch(t){R.error(t)}t("config",i,s)}(t,e,n,r,s,o):"consent"===i?t("consent","update",o):t("set",s)}catch(t){R.error(t)}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const L={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},P=new s.LL("analytics","Analytics",L),V=30,M=1e3;const F=new class RetryData{constructor(t={},e=M){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};async function fetchDynamicConfig(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:function index_esm2017_getHeaders(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}(r)},s=k.replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw P.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}async function fetchDynamicConfigWithRetry(t,e=F,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw P.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw P.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new AnalyticsAbortSignal;return setTimeout(async()=>{c.abort()},void 0!==n?n:O),async function attemptFetchDynamicConfigWithRetry(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=F){var o,a;const{appId:c,measurementId:u}=t;try{await function setAbortableTimeout(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(P.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}(r,e)}catch(t){if(u)return R.warn("Timed out fetching this Firebase app's measurement ID from the server."+` Falling back to the measurement ID ${u}`+` provided in the "measurementId" field in the local Firebase config. [${null===(o=t)||void 0===o?void 0:o.message}]`),{appId:c,measurementId:u};throw t}try{const e=await fetchDynamicConfig(t);return i.deleteThrottleMetadata(c),e}catch(e){const o=e;if(!function isRetriableError(t){if(!(t instanceof s.ZR&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(o)){if(i.deleteThrottleMetadata(c),u)return R.warn("Failed to fetch this Firebase app's measurement ID from the server."+` Falling back to the measurement ID ${u}`+` provided in the "measurementId" field in the local Firebase config. [${null===o||void 0===o?void 0:o.message}]`),{appId:c,measurementId:u};throw e}const h=503===Number(null===(a=null===o||void 0===o?void 0:o.customData)||void 0===a?void 0:a.httpStatus)?(0,s.$s)(n,i.intervalMillis,V):(0,s.$s)(n,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(c,l),R.debug(`Calling attemptFetch again in ${h} millis`),attemptFetchDynamicConfigWithRetry(t,l,r,i)}}({appId:r,apiKey:i,measurementId:o},a,c,e)}class AnalyticsAbortSignal{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let U,j;function _setConsentDefaultForInit(t){j=t}function _setDefaultEventParametersForInit(t){U=t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _initializeAnalytics(t,e,n,r,i,o,a){var c;const u=fetchDynamicConfigWithRetry(t);u.then(e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&R.warn(`The measurement ID in the local Firebase config (${t.options.measurementId})`+` does not match the measurement ID fetched from the server (${e.measurementId}).`+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")}).catch(t=>R.error(t)),e.push(u);const h=async function validateIndexedDB(){var t;if(!(0,s.hl)())return R.warn(P.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,s.eu)()}catch(e){return R.warn(P.create("indexeddb-unavailable",{errorInfo:null===(t=e)||void 0===t?void 0:t.toString()}).message),!1}return!0}().then(t=>t?r.getId():void 0),[l,d]=await Promise.all([u,h]);(function findGtagScriptOnPage(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(N))return e;return null})()||function insertScriptTag(t,e){const n=document.createElement("script");n.src=`${N}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}(o,l.measurementId),j&&(i("consent","default",j),_setConsentDefaultForInit(void 0)),i("js",new Date);const f=null!==(c=null===a||void 0===a?void 0:a.config)&&void 0!==c?c:{};return f[D]="firebase",f.update=!0,null!=d&&(f[A]=d),i("config",l.measurementId,f),U&&(i("set",U),_setDefaultEventParametersForInit(void 0)),l.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AnalyticsService{constructor(t){this.app=t}_delete(){return delete B[this.app.options.appId],Promise.resolve()}}let B={},q=[];const K={};let $,G,z="dataLayer",H="gtag",Q=!1;function factory(t,e,n){!function warnOnBrowserContextMismatch(){const t=[];if((0,s.ru)()&&t.push("This is a browser extension environment."),(0,s.zI)()||t.push("Cookies are not available."),t.length>0){const e=t.map((t,e)=>`(${e+1}) ${t}`).join(" "),n=P.create("invalid-analytics-context",{errorInfo:e});R.warn(n.message)}}();const r=t.options.appId;if(!r)throw P.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw P.create("no-api-key");R.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+` measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId}`+' provided in the "measurementId" field in the local Firebase config.')}if(null!=B[r])throw P.create("already-exists",{id:r});if(!Q){!function getOrCreateDataLayer(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}(z);const{wrappedGtag:t,gtagCore:e}=function wrapOrCreateGtag(t,e,n,r,i){let s=function(...t){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=wrapGtag(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}(B,q,K,z,H);G=t,$=e,Q=!0}return B[r]=_initializeAnalytics(t,q,K,e,$,z,n),new AnalyticsService(t)}function getAnalytics(t=(0,r.Mq)()){t=(0,s.m9)(t);const e=(0,r.qX)(t,C);return e.isInitialized()?e.getImmediate():function initializeAnalytics(t,e={}){const n=(0,r.qX)(t,C);if(n.isInitialized()){const t=n.getImmediate();if((0,s.vZ)(e,n.getOptions()))return t;throw P.create("already-initialized")}return n.initialize({options:e})}(t)}function logEvent(t,e,n,r){t=(0,s.m9)(t),async function logEvent$1(t,e,n,r,i){if(i&&i.global)t("event",n,r);else{const i=await e;t("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(G,B[t.app.options.appId],e,n,r).catch(t=>R.error(t))}const W="@firebase/analytics",X="0.8.0";!function registerAnalytics(){(0,r.Xd)(new o.wA(C,(t,{options:e})=>factory(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e),"PUBLIC")),(0,r.Xd)(new o.wA("analytics-internal",function internalFactory(t){try{const e=t.getProvider(C).getImmediate();return{logEvent:(t,n,r)=>logEvent(e,t,n,r)}}catch(t){throw P.create("interop-component-reg-failed",{reason:t})}},"PRIVATE")),(0,r.KN)(W,X),(0,r.KN)(W,X,"esm2017")}()},5503:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(2238);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)("firebase","9.9.3","app")},1591:function(e,n,r){"use strict";r.d(n,{JU:function(){return index_esm2017_xa},ad:function(){return index_esm2017_Ua},cf:function(){return Rl},Bt:function(){return Cl},r7:function(){return Tl}});var i,s=r(2238),o=r(8463),a=r(3333),c=r(4444),u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{},h={},l=l||{},d=u||self;function aa(){}function ba(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var f="closure_uid_"+(1e9*Math.random()>>>0),m=0;function ha(t,e,n){return t.call.apply(t.bind,arguments)}function ia(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function q(t,e,n){return(q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia).apply(null,arguments)}function ja(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function t(t,e){function c(){}c.prototype=e.prototype,t.Z=e.prototype,t.prototype=new c,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function v(){this.s=this.s,this.o=this.o}var g={};v.prototype.s=!1,v.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function da(t){return Object.prototype.hasOwnProperty.call(t,f)&&t[f]||(t[f]=++m)}(this);delete g[t]}},v.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const y=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},_=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"==typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function qa(t){return Array.prototype.concat.apply([],arguments)}function ra(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function sa(t){return/^[\s\xa0]*$/.test(t)}var b,x=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function w(t,e){return-1!=t.indexOf(e)}function ua(t,e){return t<e?-1:t>e?1:0}t:{var k=d.navigator;if(k){var L=k.userAgent;if(L){b=L;break t}}b=""}function xa(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function ya(t){const e={};for(const n in t)e[n]=t[n];return e}var B="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Aa(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e])t[n]=r[n];for(let e=0;e<B.length;e++)n=B[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ca(t){return Ca[" "](t),t}Ca[" "]=aa;var G,H=w(b,"Opera"),et=w(b,"Trident")||w(b,"MSIE"),ot=w(b,"Edge"),lt=ot||et,pt=w(b,"Gecko")&&!(w(b.toLowerCase(),"webkit")&&!w(b,"Edge"))&&!(w(b,"Trident")||w(b,"MSIE"))&&!w(b,"Edge"),mt=w(b.toLowerCase(),"webkit")&&!w(b,"Edge");function Ma(){var t=d.document;return t?t.documentMode:void 0}t:{var gt="",yt=function(){var t=b;return pt?/rv:([^\);]+)(\)|;)/.exec(t):ot?/Edge\/([\d\.]+)/.exec(t):et?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):mt?/WebKit\/(\S+)/.exec(t):H?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(yt&&(gt=yt?yt[1]:""),et){var wt=Ma();if(null!=wt&&wt>parseFloat(gt)){G=String(wt);break t}}G=gt}var bt,xt={};function Ra(){return function Fa(t){var e=xt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}(function(){let t=0;const e=x(String(G)).split("."),n=x("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=ua(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||ua(0==i[2].length,0==s[2].length)||ua(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t})}if(d.document&&et){var St=Ma();bt=St||(parseInt(G,10)||void 0)}else bt=void 0;var It=bt,Ct=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{d.addEventListener("test",aa,e),d.removeEventListener("test",aa,e)}catch(t){}return t}();function z(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function A(t,e){if(z.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(pt){t:{try{Ca(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Dt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&A.Z.h.call(this)}}z.prototype.h=function(){this.defaultPrevented=!0},t(A,z);var Dt={2:"touch",3:"pen",4:"mouse"};A.prototype.h=function(){A.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ot="closure_listenable_"+(1e6*Math.random()|0),kt=0;function Za(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function $a(t){this.src=t,this.g={},this.h=0}function bb(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=y(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Za(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ab(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}$a.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=ab(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new function Ya(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++kt,this.ca=this.fa=!1}(e,this.src,s,!!r,i)).fa=n,t.push(e)),e};var Mt="closure_lm_"+(1e6*Math.random()|0),Ft={};function fb(t,e,n,r,i){if(r&&r.once)return function gb(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)gb(t,e[s],n,r,i);return null}n=hb(n);return t&&t[Ot]?t.O(e,n,p(r)?!!r.capture:!!r,i):ib(t,e,n,!0,r,i)}(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)fb(t,e[s],n,r,i);return null}return n=hb(n),t&&t[Ot]?t.N(e,n,p(r)?!!r.capture:!!r,i):ib(t,e,n,!1,r,i)}function ib(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=jb(t);if(a||(t[Mt]=a=new $a(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function kb(){var t=mb;return function a(e){return t.call(a.src,a.listener,e)}}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Ct||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(lb(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ob(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Ot])bb(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(lb(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=jb(e))?(bb(n,t),0==n.h&&(n.src=null,e[Mt]=null)):Za(t)}}}function lb(t){return t in Ft?Ft[t]:Ft[t]="on"+t}function mb(t,e){if(t.ca)t=!0;else{e=new A(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&ob(t),t=n.call(r,e)}return t}function jb(t){return(t=t[Mt])instanceof $a?t:null}var Bt="__closure_events_fn_"+(1e9*Math.random()>>>0);function hb(t){return"function"==typeof t?t:(t[Bt]||(t[Bt]=function(e){return t.handleEvent(e)}),t[Bt])}function C(){v.call(this),this.i=new $a(this),this.P=this,this.I=null}function D(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new z(e,t);else if(e instanceof z)e.target=e.target||t;else{var i=e;Aa(e=new z(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=qb(o,r,!0,e)&&i}if(i=qb(o=e.g=t,r,!0,e)&&i,i=qb(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=qb(o=e.g=n[s],r,!1,e)&&i}function qb(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&bb(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}t(C,v),C.prototype[Ot]=!0,C.prototype.removeEventListener=function(t,e,n,r){!function nb(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)nb(t,e[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=hb(n),t&&t[Ot]?(t=t.i,(e=String(e).toString())in t.g&&-1<(n=ab(s=t.g[e],n,r,i))&&(Za(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--))):t&&(t=jb(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ab(e,n,r,i)),(n=-1<t?e[t]:null)&&ob(n))}(this,t,e,n,r)},C.prototype.M=function(){if(C.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Za(n[r]);delete e.g[t],e.h--}}this.I=null},C.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},C.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var $t=d.JSON.stringify;function sb(){var t=le;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Ht,Yt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new class wb{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}},t=>t.reset());function yb(t){d.setTimeout(()=>{throw t},0)}function zb(t,e){Ht||function Bb(){var t=d.Promise.resolve(void 0);Ht=function(){t.then(Db)}}(),Zt||(Ht(),Zt=!0),le.add(t,e)}var Zt=!1,le=new class ub{constructor(){this.h=this.g=null}add(t,e){const n=Yt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Db(){for(var t;t=sb();){try{t.h.call(t.g)}catch(t){yb(t)}var e=Yt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Zt=!1}function Eb(t,e){C.call(this),this.h=t||1,this.g=e||d,this.j=q(this.kb,this),this.l=Date.now()}function Fb(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Gb(t,e,n){if("function"==typeof t)n&&(t=q(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=q(t.handleEvent,t)}return 2147483647<Number(e)?-1:d.setTimeout(t,e||0)}t(Eb,C),(i=Eb.prototype).da=!1,i.S=null,i.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),D(this,"tick"),this.da&&(Fb(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Eb.Z.M.call(this),Fb(this),delete this.g};class Ib extends v{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:function Hb(t){t.g=Gb(()=>{t.g=null,t.i&&(t.i=!1,Hb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}(this)}M(){super.M(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function E(t){v.call(this),this.h=t,this.g={}}t(E,v);var fe=[];function Kb(t,e,n,r){Array.isArray(n)||(n&&(fe[0]=n.toString()),n=fe);for(var i=0;i<n.length;i++){var s=fb(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Lb(t){xa(t.g,function(t,e){this.g.hasOwnProperty(e)&&ob(t)},t),t.g={}}function Mb(){this.g=!0}function F(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function Pb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return $t(n)}catch(t){return e}}(t,n)+(r?" "+r:"")})}E.prototype.M=function(){E.Z.M.call(this),Lb(this)},E.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Mb.prototype.Aa=function(){this.g=!1},Mb.prototype.info=function(){};var Se={},Ie=null;function Sb(){return Ie=Ie||new C}function Tb(t){z.call(this,Se.Ma,t)}function I(t){const e=Sb();D(e,new Tb(e,t))}function Ub(t,e){z.call(this,Se.STAT_EVENT,t),this.stat=e}function J(t){const e=Sb();D(e,new Ub(e,t))}function Vb(t,e){z.call(this,Se.Na,t),this.size=e}function K(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){t()},e)}Se.Ma="serverreachability",t(Tb,z),Se.STAT_EVENT="statevent",t(Ub,z),Se.Na="timingevent",t(Vb,z);var Ce={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},De={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Yb(){}function Zb(t){return t.h||(t.h=t.i())}function $b(){}Yb.prototype.h=null;var Ve,Ue={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ac(){z.call(this,"d")}function bc(){z.call(this,"c")}function dc(){}function M(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new E(this),this.P=qe,t=lt?125:void 0,this.W=new Eb(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new fc}function fc(){this.i=null,this.g="",this.h=!1}t(ac,z),t(bc,z),t(dc,Yb),dc.prototype.g=function(){return new XMLHttpRequest},dc.prototype.i=function(){return{}},Ve=new dc;var qe=45e3,Ke={},tr={};function ic(t,e,n){t.K=1,t.v=jc(N(e)),t.s=n,t.U=!0,kc(t,null)}function kc(t,e){t.F=Date.now(),lc(t),t.A=N(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),mc(n.h,"t",r),t.C=0,n=t.l.H,t.h=new fc,t.g=nc(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Ib(q(t.Ia,t,t.g),t.O)),Kb(t.V,t.g,"readystatechange",t.gb),e=t.H?ya(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),I(1),function Nb(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o})}(t.j,t.u,t.A,t.m,t.X,t.s)}function qc(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function tc(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if((r=vc(t,n))==tr){4==e&&(t.o=4,J(14),i=!1),F(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ke){t.o=4,J(15),F(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}F(t.j,t.m,r,null),sc(t,r)}qc(t)&&r!=tr&&r!=Ke&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,J(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),wc(e),e.L=!0,J(11))):(F(t.j,t.m,n,"[Invalid Chunked Response]"),P(t),rc(t))}function vc(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?tr:(n=Number(e.substring(n,r)),isNaN(n)?Ke:(r+=1)+n>e.length?tr:(e=e.substr(r,n),t.C=r+n,e))}function lc(t){t.Y=Date.now()+t.P,xc(t,t.P)}function xc(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=K(q(t.eb,t),e)}function pc(t){t.B&&(d.clearTimeout(t.B),t.B=null)}function rc(t){0==t.l.G||t.I||uc(t.l,t)}function P(t){pc(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Fb(t.W),Lb(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function sc(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||yc(n.i,t)))if(n.I=t.N,!t.J&&yc(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;zc(n),Ac(n)}Bc(n),J(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=K(q(n.ab,n),6e3));if(1>=Cc(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else Q(n,11)}else if((t.J||n.g==t)&&zc(n),!sa(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(r=1.5*h,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(w(t,"spdy")||w(t,"quic")||w(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Dc(s,s.h),s.h=null))}if(r.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,R(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((r=n).oa=Ec(r,r.H?r.la:null,r.W),o.J){Fc(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(pc(a),lc(a)),r.g=o}else Gc(r);0<n.l.length&&Hc(n)}else"stop"!=u[0]&&"close"!=u[0]||Q(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Q(n,7):Ic(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}I(4)}catch(t){}}function Kc(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ba(t)||"string"==typeof t)_(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(ba(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;i=(r=function Jc(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(ba(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t)).length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function S(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof S)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Lc(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];T(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)T(i,r=t.g[e])||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function T(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(i=M.prototype).setTimeout=function(t){this.P=t},i.gb=function(t){t=t.target;const e=this.L;e&&3==O(t)?e.l():this.Ia(t)},i.Ia=function(t){try{if(t==this.g)t:{const h=O(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>h)&&(3!=h||lt||this.g&&(this.h.h||this.g.ga()||oc(this.g)))){this.I||4!=h||7==e||I(8==e||0>=l?3:2),pc(this);var n=this.g.ba();this.N=n;e:if(qc(this)){var r=oc(this.g);t="";var i=r.length,s=4==O(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){P(this),rc(this);var o="";break e}this.h.i=new d.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function Ob(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o})}(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sa(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,J(12),P(this),rc(this);break t}F(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,sc(this,n)}this.U?(tc(this,h,o),lt&&this.i&&3==h&&(Kb(this.V,this.W,"tick",this.fb),this.W.start())):(F(this.j,this.m,o,null),sc(this,o)),4==h&&P(this),this.i&&!this.I&&(4==h?uc(this.l,this):(this.i=!1,lc(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,J(12)):(this.o=0,J(13)),P(this),rc(this)}}}catch(t){}},i.fb=function(){if(this.g){var t=O(this.g),e=this.g.ga();this.C<e.length&&(pc(this),tc(this,t,e),this.i&&4!=t&&lc(this))}},i.cancel=function(){this.I=!0,P(this)},i.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function Qb(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.j,this.A),2!=this.K&&(I(3),J(17)),P(this),this.o=2,rc(this)):xc(this,this.Y-t)},(i=S.prototype).R=function(){Lc(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},i.T=function(){return Lc(this),this.g.concat()},i.get=function(t,e){return T(this.h,t)?this.h[t]:e},i.set=function(t,e){T(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},i.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var er=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function U(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof U){this.g=void 0!==e?e:t.g,Oc(this,t.j),this.s=t.s,Pc(this,t.i),Qc(this,t.m),this.l=t.l,e=t.h;var n=new Rc;n.i=e.i,e.g&&(n.g=new S(e.g),n.h=e.h),Sc(this,n),this.o=t.o}else t&&(n=String(t).match(er))?(this.g=!!e,Oc(this,n[1]||"",!0),this.s=Tc(n[2]||""),Pc(this,n[3]||"",!0),Qc(this,n[4]),this.l=Tc(n[5]||"",!0),Sc(this,n[6]||"",!0),this.o=Tc(n[7]||"")):(this.g=!!e,this.h=new Rc(null,this.g))}function N(t){return new U(t)}function Oc(t,e,n){t.j=n?Tc(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Pc(t,e,n){t.i=n?Tc(e,!0):e}function Qc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Sc(t,e,n){e instanceof Rc?(t.h=e,function Zc(t,e){e&&!t.j&&(V(t),t.i=null,t.g.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(dd(this,e),mc(this,n,t))},t)),t.j=e}(t.h,t.g)):(n||(e=Uc(e,sr)),t.h=new Rc(e,t.g))}function R(t,e,n){t.h.set(e,n)}function jc(t){return R(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Tc(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Uc(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,cd),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cd(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}U.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Uc(e,nr,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Uc(e,nr,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Uc(n,"/"==n.charAt(0)?ir:rr,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Uc(n,or)),t.join("")};var nr=/[#\/\?@]/g,rr=/[#\?:]/g,ir=/[#\?]/g,sr=/[#\?@]/g,or=/#/g;function Rc(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function V(t){t.g||(t.g=new S,t.h=0,t.i&&function Nc(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function dd(t,e){V(t),e=W(t,e),T(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,T((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Lc(t)))}function ed(t,e){return V(t),e=W(t,e),T(t.g.h,e)}function mc(t,e,n){dd(t,e),0<n.length&&(t.i=null,t.g.set(W(t,e),ra(n)),t.h+=n.length)}function W(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(i=Rc.prototype).add=function(t,e){V(this),this.i=null,t=W(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){V(this),this.g.forEach(function(n,r){_(n,function(n){t.call(e,n,r,this)},this)},this)},i.T=function(){V(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},i.R=function(t){V(this);var e=[];if("string"==typeof t)ed(this,t)&&(e=qa(e,this.g.get(W(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=qa(e,t[n])}return e},i.set=function(t,e){return V(this),this.i=null,ed(this,t=W(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var ar=class{constructor(t,e){this.h=t,this.g=e}};function gd(t){this.l=t||cr,d.PerformanceNavigationTiming?t=0<(t=d.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(d.g&&d.g.Ea&&d.g.Ea()&&d.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cr=10;function id(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Cc(t){return t.h?1:t.g?t.g.size:0}function yc(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Dc(t,e){t.g?t.g.add(e):t.h=e}function Fc(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function jd(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ra(t.i)}function kd(){}function md(t,e,n){const r=n||"";try{Kc(t,function(t,n){let i=t;p(t)&&(i=$t(t)),e.push(r+n+"="+encodeURIComponent(i))})}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function od(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function pd(t){this.l=t.$b||null,this.j=t.ib||!1}function qd(t,e){C.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=hr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}gd.prototype.cancel=function(){if(this.i=jd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},kd.prototype.stringify=function(t){return d.JSON.stringify(t,void 0)},kd.prototype.parse=function(t){return d.JSON.parse(t,void 0)},t(pd,Yb),pd.prototype.g=function(){return new qd(this.l,this.j)},pd.prototype.i=function(t){return function(){return t}}({}),t(qd,C);var hr=0;function ud(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function td(t){t.readyState=4,t.l=null,t.j=null,t.A=null,sd(t)}function sd(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(i=qd.prototype).open=function(t,e){if(this.readyState!=hr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,sd(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||d).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,td(this)),this.readyState=hr},i.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,sd(this)),this.g&&(this.readyState=3,sd(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==d.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ud(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?td(this):sd(this),3==this.readyState&&ud(this)}},i.Ua=function(t){this.g&&(this.response=this.responseText=t,td(this))},i.Ta=function(t){this.g&&(this.response=t,td(this))},i.ha=function(){this.g&&td(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(qd.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var lr=d.JSON.parse;function X(t){C.call(this),this.headers=new S,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=dr,this.K=this.L=!1}t(X,C);var dr="",fr=/^https?$/i,mr=["POST","PUT"];function pa(t){return"content-type"==t.toLowerCase()}function zd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Cd(t),Dd(t)}function Cd(t){t.D||(t.D=!0,D(t,"complete"),D(t,"error"))}function Ed(t){if(t.h&&void 0!==l&&(!t.C[1]||4!=O(t)||2!=t.ba()))if(t.v&&4==O(t))Gb(t.Fa,0,t);else if(D(t,"readystatechange"),4==O(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.H).match(er)[1]||null;if(!i&&d.self&&d.self.location){var s=d.self.location.protocol;i=s.substr(0,s.length-1)}r=!fr.test(i?i.toLowerCase():"")}n=r}if(n)D(t,"complete"),D(t,"success");else{t.m=6;try{var o=2<O(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",Cd(t)}}finally{Dd(t)}}}function Dd(t,e){if(t.g){Ad(t);const n=t.g,r=t.C[0]?aa:null;t.g=null,t.C=null,e||D(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function Ad(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(d.clearTimeout(t.A),t.A=null)}function O(t){return t.g?t.g.readyState:0}function oc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case dr:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Gd(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function Fd(t){let e="";return xa(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):R(t,e,n))}function Hd(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Id(t){this.za=0,this.l=[],this.h=new Mb,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Hd("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Hd("baseRetryDelayMs",5e3,t),this.$a=Hd("retryDelaySeedMs",1e4,t),this.Ya=Hd("forwardChannelMaxRetries",2,t),this.ra=Hd("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new gd(t&&t.concurrentRequestLimit),this.Ca=new function ld(){this.g=new kd},this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Ic(t){if(Jd(t),3==t.G){var e=t.V++,n=N(t.F);R(n,"SID",t.J),R(n,"RID",e),R(n,"TYPE","terminate"),Kd(t,n),(e=new M(t,t.h,e,void 0)).K=2,e.v=jc(N(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(e.v.toString(),"")),!n&&d.Image&&((new Image).src=e.v,n=!0),n||(e.g=nc(e.l,null),e.g.ea(e.v)),e.F=Date.now(),lc(e)}Ld(t)}function Ac(t){t.g&&(wc(t),t.g.cancel(),t.g=null)}function Jd(t){Ac(t),t.u&&(d.clearTimeout(t.u),t.u=null),zc(t),t.i.cancel(),t.m&&("number"==typeof t.m&&d.clearTimeout(t.m),t.m=null)}function Md(t,e){t.l.push(new ar(t.Za++,e)),3==t.G&&Hc(t)}function Hc(t){id(t.i)||t.m||(t.m=!0,zb(t.Ha,t),t.C=0)}function Qd(t,e){var n;n=e?e.m:t.V++;const r=N(t.F);R(r,"SID",t.J),R(r,"RID",n),R(r,"AID",t.U),Kd(t,r),t.o&&t.s&&Gd(r,t.o,t.s),n=new M(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Pd(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Dc(t.i,n),ic(n,r,e)}function Kd(t,e){t.j&&Kc({},function(t,n){R(e,n,t)})}function Pd(t,e,n){n=Math.min(t.l.length,n);var r=t.j?q(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(0>(n-=e))e=Math.max(0,i[o].h-100),s=!1;else try{md(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function Gc(t){t.g||t.u||(t.Y=1,zb(t.Ga,t),t.A=0)}function Bc(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=K(q(t.Ga,t),Od(t,t.A)),t.A++,!0)}function wc(t){null!=t.B&&(d.clearTimeout(t.B),t.B=null)}function Rd(t){t.g=new M(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=N(t.oa);R(e,"RID","rpc"),R(e,"SID",t.J),R(e,"CI",t.N?"0":"1"),R(e,"AID",t.U),Kd(t,e),R(e,"TYPE","xmlhttp"),t.o&&t.s&&Gd(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=jc(N(e)),n.s=null,n.U=!0,kc(n,t)}function zc(t){null!=t.v&&(d.clearTimeout(t.v),t.v=null)}function uc(t,e){var n=null;if(t.g==e){zc(t),wc(t),t.g=null;var r=2}else{if(!yc(t.i,e))return;n=e.D,Fc(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;D(r=Sb(),new Vb(r,n,e,i)),Hc(t)}else Gc(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==r&&function Nd(t,e){return!(Cc(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=K(q(t.Ha,t,e),Od(t,t.C)),t.C++,0)))}(t,e)||2==r&&Bc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Q(t,5);break;case 4:Q(t,10);break;case 3:Q(t,6);break;default:Q(t,2)}}function Od(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Q(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=q(t.jb,t);n||(n=new U("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Oc(n,"https"),jc(n)),function nd(t,e){const n=new Mb;if(d.Image){const r=new Image;r.onload=ja(od,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ja(od,n,r,"TestLoadImage: error",!1,e),r.onabort=ja(od,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ja(od,n,r,"TestLoadImage: timeout",!1,e),d.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}(n.toString(),r)}else J(2);t.G=0,t.j&&t.j.va(e),Ld(t),Jd(t)}function Ld(t){t.G=0,t.I=-1,t.j&&(0==jd(t.i).length&&0==t.l.length||(t.i.i.length=0,ra(t.l),t.l.length=0),t.j.ua())}function Ec(t,e,n){let r=function ad(t){return t instanceof U?N(t):new U(t,void 0)}(n);if(""!=r.i)e&&Pc(r,e+"."+r.i),Qc(r,r.m);else{const t=d.location;r=function bd(t,e,n,r){var i=new U(null,void 0);return t&&Oc(i,t),e&&Pc(i,e),n&&Qc(i,n),r&&(i.l=r),i}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&xa(t.aa,function(t,e){R(r,e,t)}),e=t.D,n=t.sa,e&&n&&R(r,e,n),R(r,"VER",t.ma),Kd(t,r),r}function nc(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new X(new pd({ib:!0})):new X(t.qa)).L=t.H,e}function Sd(){}function Td(){if(et&&!(10<=Number(It)))throw Error("Environmental error: no available transport.")}function Y(t,e){C.call(this),this.g=new Id(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!sa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!sa(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Z(this)}function Ud(t){ac.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Vd(){bc.call(this),this.status=1}function Z(t){this.g=t}(i=X.prototype).ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ve.g(),this.C=this.u?Zb(this.u):Zb(Ve),this.g.onreadystatechange=q(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void zd(this,t)}t=n||"";const i=new S(this.headers);r&&Kc(r,function(t,e){i.set(e,t)}),r=function oa(t){t:{var e=pa;const n=t.length,r="string"==typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=d.FormData&&t instanceof d.FormData,!(0<=y(mr,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(t,e){this.g.setRequestHeader(e,t)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ad(this),0<this.B&&((this.K=function Bd(t){return et&&Ra()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=q(this.pa,this)):this.A=Gb(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){zd(this,t)}},i.pa=function(){void 0!==l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,D(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,D(this,"complete"),D(this,"abort"),Dd(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dd(this,!0)),X.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?Ed(this):this.cb())},i.cb=function(){Ed(this)},i.ba=function(){try{return 2<O(this)?this.g.status:-1}catch(t){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),lr(e)}},i.Da=function(){return this.m},i.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(i=Id.prototype).ma=8,i.G=1,i.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},i.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new M(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?Aa(s=ya(s),this.P):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Pd(this,i,e),R(n=N(this.F),"RID",t),R(n,"CVER",22),this.D&&R(n,"X-HTTP-Session-Id",this.D),Kd(this,n),this.o&&s&&Gd(n,this.o,s),Dc(this.i,i),this.Ra&&R(n,"TYPE","init"),this.ja?(R(n,"$req",e),R(n,"SID","null"),i.$=!0,ic(i,n,null)):ic(i,n,e),this.G=2}}else 3==this.G&&(t?Qd(this,t):0==this.l.length||id(this.i)||Qd(this))},i.Ga=function(){if(this.u=null,Rd(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=K(q(this.bb,this),t)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,J(10),Ac(this),Rd(this))},i.ab=function(){null!=this.v&&(this.v=null,Ac(this),Bc(this),J(19))},i.jb=function(t){t?(this.h.info("Successfully pinged google.com"),J(2)):(this.h.info("Failed to ping google.com"),J(1))},(i=Sd.prototype).xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},Td.prototype.g=function(t,e){return new Y(t,e)},t(Y,C),Y.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),zb(q(t.hb,t,e))),J(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ec(t,null,t.W),Hc(t)},Y.prototype.close=function(){Ic(this.g)},Y.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Md(this.g,e)}else this.v?((e={}).__data__=$t(t),Md(this.g,e)):Md(this.g,t)},Y.prototype.M=function(){this.g.j=null,delete this.j,Ic(this.g),delete this.g,Y.Z.M.call(this)},t(Ud,ac),t(Vd,bc),t(Z,Sd),Z.prototype.xa=function(){D(this.g,"a")},Z.prototype.wa=function(t){D(this.g,new Ud(t))},Z.prototype.va=function(t){D(this.g,new Vd(t))},Z.prototype.ua=function(){D(this.g,"b")},Td.prototype.createWebChannel=Td.prototype.g,Y.prototype.send=Y.prototype.u,Y.prototype.open=Y.prototype.m,Y.prototype.close=Y.prototype.close,Ce.NO_ERROR=0,Ce.TIMEOUT=8,Ce.HTTP_ERROR=6,De.COMPLETE="complete",$b.EventType=Ue,Ue.OPEN="a",Ue.CLOSE="b",Ue.ERROR="c",Ue.MESSAGE="d",C.prototype.listen=C.prototype.N,X.prototype.listenOnce=X.prototype.O,X.prototype.getLastError=X.prototype.La,X.prototype.getLastErrorCode=X.prototype.Da,X.prototype.getStatus=X.prototype.ba,X.prototype.getResponseJson=X.prototype.Qa,X.prototype.getResponseText=X.prototype.ga,X.prototype.send=X.prototype.ea;var gr=h.createWebChannelTransport=function(){return new Td},vr=h.getStatEventTarget=function(){return Sb()},_r=h.ErrorCode=Ce,wr=h.EventType=De,br=h.Event=Se,Er=h.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},xr=h.FetchXmlHttpFactory=pd,Tr=h.WebChannel=$b,Sr=h.XhrIo=X;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class index_esm2017_C{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}index_esm2017_C.UNAUTHENTICATED=new index_esm2017_C(null),index_esm2017_C.GOOGLE_CREDENTIALS=new index_esm2017_C("google-credentials-uid"),index_esm2017_C.FIRST_PARTY=new index_esm2017_C("first-party-uid"),index_esm2017_C.MOCK_USER=new index_esm2017_C("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ir="9.9.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new a.Yd("@firebase/firestore");function index_esm2017_k(){return Cr.logLevel}function index_esm2017_O(t,...e){if(Cr.logLevel<=a.in.DEBUG){const n=e.map(index_esm2017_B);Cr.debug(`Firestore (${Ir}): ${t}`,...n)}}function index_esm2017_F(t,...e){if(Cr.logLevel<=a.in.ERROR){const n=e.map(index_esm2017_B);Cr.error(`Firestore (${Ir}): ${t}`,...n)}}function $(t,...e){if(Cr.logLevel<=a.in.WARN){const n=e.map(index_esm2017_B);Cr.warn(`Firestore (${Ir}): ${t}`,...n)}}function index_esm2017_B(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function index_esm2017_L(t="Unexpected state"){const e=`FIRESTORE (${Ir}) INTERNAL ASSERTION FAILED: `+t;throw index_esm2017_F(e),new Error(e)}function index_esm2017_U(t,e){t||index_esm2017_L()}function index_esm2017_K(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class index_esm2017_Q extends c.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=(()=>`${this.name}: [code=${this.code}]: ${this.message}`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class index_esm2017_W{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class index_esm2017_z{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(index_esm2017_C.UNAUTHENTICATED))}shutdown(){}}class index_esm2017_Y{constructor(t,e,n){this.type="FirstParty",this.user=index_esm2017_C.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class index_esm2017_X{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new index_esm2017_Y(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(index_esm2017_C.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class index_esm2017_Z{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nt(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=nt(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function it(t,e){return t<e?-1:t>e?1:0}function rt(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ut.fromMillis(Date.now())}static fromDate(t){return ut.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ut(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?it(this.nanoseconds,t.nanoseconds):it(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ct(t)}static min(){return new ct(new ut(0,0))}static max(){return new ct(new ut(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t,e,n){void 0===e?e=0:e>t.length&&index_esm2017_L(),void 0===n?n=t.length-e:n>t.length-e&&index_esm2017_L(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===at.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof at?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ht extends at{construct(t,e,n){return new ht(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new ht(e)}static emptyPath(){return new ht([])}}const Dr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends at{construct(t,e,n){return new ft(t,e,n)}static isValidIdentifier(t){return Dr.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ft(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ft(e)}static emptyPath(){return new ft([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.path=t}static fromPath(t){return new dt(ht.fromString(t))}static fromName(t){return new dt(ht.fromString(t).popFirst(5))}static empty(){return new dt(ht.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ht.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ht.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new dt(new ht(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}_t.UNKNOWN_ID=-1;function Tt(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ct.fromTimestamp(1e9===r?new ut(n+1,0):new ut(n,r));return new At(i,dt.empty(),e)}function Et(t){return new At(t.readTime,t.key,-1)}class At{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new At(ct.min(),dt.empty(),-1)}static max(){return new At(ct.max(),dt.empty(),-1)}}function Rt(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:0!==(n=dt.comparator(t.documentKey,e.documentKey))?n:it(t.largestBatchId,e.largestBatchId)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pt{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(t){if(t.code!==Ar.FAILED_PRECONDITION||t.message!==kr)throw t;index_esm2017_O("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&index_esm2017_L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Vt((n,r)=>{this.nextCallback=(e=>{this.wrapSuccess(t,e).next(n,r)}),this.catchCallback=(t=>{this.wrapFailure(e,t).next(n,r)})})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Vt?e:Vt.resolve(e)}catch(t){return Vt.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Vt.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Vt.reject(e)}static resolve(t){return new Vt((e,n)=>{e(t)})}static reject(t){return new Vt((e,n)=>{n(t)})}static waitFor(t){return new Vt((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=Vt.resolve(!1);for(const n of t)e=e.next(t=>t?Vt.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}static mapArray(t,e){return new Vt((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next(t=>{s[c]=t,++o===i&&n(s)},t=>r(t))}})}static doWhile(t,e){return new Vt((n,r)=>{const i=()=>{!0===t()?e().next(()=>{i()},r):n()};i()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=(t=>this.it(t)),this.rt=(t=>e.writeSequenceNumber(t)))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kt(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.ot=-1;class Gt{constructor(t,e){this.comparator=t,this.root=e||jt.EMPTY}insert(t,e){return new Gt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(t){return new Gt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,jt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qt(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qt(this.root,t,this.comparator,!0)}}class Qt{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class jt{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:jt.RED,this.left=null!=r?r:jt.EMPTY,this.right=null!=i?i:jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new jt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n))).fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return jt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=(t=t.rotateRight()).colorFlip()),t}rotateLeft(){const t=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw index_esm2017_L();if(this.right.isRed())throw index_esm2017_L();const t=this.left.check();if(t!==this.right.check())throw index_esm2017_L();return t+(this.isRed()?0:1)}}jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1,jt.EMPTY=new class{constructor(){this.size=0}get key(){throw index_esm2017_L()}get value(){throw index_esm2017_L()}get color(){throw index_esm2017_L()}get left(){throw index_esm2017_L()}get right(){throw index_esm2017_L()}copy(t,e,n,r,i){return this}insert(t,e,n){return new jt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{constructor(t){this.comparator=t,this.data=new Gt(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new zt(this.data.getIterator())}getIteratorFrom(t){return new zt(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Wt))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Wt(this.comparator);return e.data=t,e}}class zt{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt{constructor(t){this.fields=t,t.sort(ft.comparator)}static empty(){return new Jt([])}unionWith(t){let e=new Wt(ft.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Jt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return rt(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Xt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Xt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return it(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const Nr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(t){if(index_esm2017_U(!!t),"string"==typeof t){let e=0;const n=Nr.exec(t);if(index_esm2017_U(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ee(t.seconds),nanos:ee(t.nanos)}}function ee(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ne(t){return"string"==typeof t?Xt.fromBase64String(t):Xt.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function re(t){const e=te(t.mapValue.fields.__local_write_time__.timestampValue);return new ut(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ue{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ue("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof ue&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t){return null==t}function ae(t){return 0===t&&1/t==-1/0}function he(t){return"number"==typeof t&&Number.isInteger(t)&&!ae(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function de(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?se(t)?4:ve(t)?9007199254740991:10:index_esm2017_L()}function _e(t,e){if(t===e)return!0;const n=de(t);if(n!==de(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return re(t).isEqual(re(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=te(t.timestampValue),r=te(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return ne(t.bytesValue).isEqual(ne(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return ee(t.geoPointValue.latitude)===ee(e.geoPointValue.latitude)&&ee(t.geoPointValue.longitude)===ee(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return ee(t.integerValue)===ee(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=ee(t.doubleValue),r=ee(e.doubleValue);return n===r?ae(n)===ae(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return rt(t.arrayValue.values||[],e.arrayValue.values||[],_e);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Ut(n)!==Ut(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!_e(n[t],r[t])))return!1;return!0}(t,e);default:return index_esm2017_L()}}function we(t,e){return void 0!==(t.values||[]).find(t=>_e(t,e))}function me(t,e){if(t===e)return 0;const n=de(t),r=de(e);if(n!==r)return it(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return it(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=ee(t.integerValue||t.doubleValue),r=ee(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ge(t.timestampValue,e.timestampValue);case 4:return ge(re(t),re(e));case 5:return it(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ne(t),r=ne(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=it(n[t],r[t]);if(0!==e)return e}return it(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=it(ee(t.latitude),ee(e.latitude));return 0!==n?n:it(ee(t.longitude),ee(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=me(n[t],r[t]);if(e)return e}return it(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Rr.mapValue&&e===Rr.mapValue)return 0;if(t===Rr.mapValue)return 1;if(e===Rr.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=it(r[t],s[t]);if(0!==e)return e;const o=me(n[r[t]],i[s[t]]);if(0!==o)return o}return it(r.length,s.length)}(t.mapValue,e.mapValue);default:throw index_esm2017_L()}}function ge(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return it(t,e);const n=te(t),r=te(e),i=it(n.seconds,r.seconds);return 0!==i?i:it(n.nanos,r.nanos)}function ye(t){return function pe(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=te(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ne(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,dt.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=pe(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${pe(t.fields[i])}`;return n+"}"}(t.mapValue):index_esm2017_L();var e,n}(t)}function Te(t){return!!t&&"integerValue"in t}function Ee(t){return!!t&&"arrayValue"in t}function Ae(t){return!!t&&"nullValue"in t}function Re(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function be(t){return!!t&&"mapValue"in t}function Pe(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qt(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Pe(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pe(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ve(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe{constructor(t){this.value=t}static empty(){return new xe({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(!be(e=(e.mapValue.fields||{})[t.get(n)]))return null;return(e=(e.mapValue.fields||{})[t.lastSegment()])||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Pe(e)}setAll(t){let e=ft.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Pe(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());be(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return _e(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];be(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){qt(e,(e,n)=>t[e]=n);for(const e of n)delete t[e]}clone(){return new xe(Pe(this.value))}}function Ne(t){const e=[];return qt(t.fields,(t,n)=>{const r=new ft([t]);if(be(n)){const t=Ne(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new Jt(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ke{constructor(t,e,n,r,i,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(t){return new ke(t,0,ct.min(),ct.min(),xe.empty(),0)}static newFoundDocument(t,e,n){return new ke(t,1,e,ct.min(),n,0)}static newNoDocument(t,e){return new ke(t,2,e,ct.min(),xe.empty(),0)}static newUnknownDocument(t,e){return new ke(t,3,e,ct.min(),xe.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=xe.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ct.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ke&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ut=null}}function Oe(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Me(t,e,n,r,i,s,o)}function Fe(t){const e=index_esm2017_K(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>{return(e=t).field.canonicalString()+e.op.toString()+ye(e.value);var e}).join(","),t+="|ob:",t+=e.orderBy.map(t=>(function(t){return t.field.canonicalString()+t.dir})(t)).join(","),ce(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>ye(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>ye(t)).join(",")),e.ut=t}return e.ut}function Be(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!en(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!_e(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sn(t.startAt,e.startAt)&&sn(t.endAt,e.endAt)}function Le(t){return dt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Ge extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new Qe(t,e,n):"array-contains"===e?new He(t,n):"in"===e?new Je(t,n):"not-in"===e?new Ye(t,n):"array-contains-any"===e?new Xe(t,n):new Ge(t,e,n)}static ct(t,e,n){return"in"===e?new je(t,n):new We(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(me(e,this.value)):null!==e&&de(this.value)===de(e)&&this.at(me(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return index_esm2017_L()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Qe extends Ge{constructor(t,e,n){super(t,e,n),this.key=dt.fromName(n.referenceValue)}matches(t){const e=dt.comparator(t.key,this.key);return this.at(e)}}class je extends Ge{constructor(t,e){super(t,"in",e),this.keys=ze("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class We extends Ge{constructor(t,e){super(t,"not-in",e),this.keys=ze("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ze(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>dt.fromName(t.referenceValue))}class He extends Ge{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ee(e)&&we(e.arrayValue,this.value)}}class Je extends Ge{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&we(this.value.arrayValue,e)}}class Ye extends Ge{constructor(t,e){super(t,"not-in",e)}matches(t){if(we(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!we(this.value.arrayValue,e)}}class Xe extends Ge{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ee(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>we(this.value.arrayValue,t))}}class Ze{constructor(t,e){this.position=t,this.inclusive=e}}class tn{constructor(t,e="asc"){this.field=t,this.dir=e}}function en(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function nn(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?dt.comparator(dt.fromName(o.referenceValue),n.key):me(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function sn(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_e(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function on(t,e,n,r,i,s,o,a){return new rn(t,e,n,r,i,s,o,a)}function un(t){return new rn(t)}function cn(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function an(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function hn(t){for(const e of t.filters)if(e.ht())return e.field;return null}function ln(t){return null!==t.collectionGroup}function fn(t){const e=index_esm2017_K(t);if(null===e.lt){e.lt=[];const t=hn(e),n=an(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new tn(t)),e.lt.push(new tn(ft.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new tn(ft.keyField(),t))}}}return e.lt}function dn(t){const e=index_esm2017_K(t);if(!e.ft)if("F"===e.limitType)e.ft=Oe(e.path,e.collectionGroup,fn(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of fn(e)){const e="desc"===n.dir?"asc":"desc";t.push(new tn(n.field,e))}const n=e.endAt?new Ze(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ze(e.startAt.position,e.startAt.inclusive):null;e.ft=Oe(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.ft}function _n(t,e,n){return new rn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wn(t,e){return Be(dn(t),dn(e))&&t.limitType===e.limitType}function mn(t){return`${Fe(dn(t))}|lt:${t.limitType}`}function gn(t){return`Query(target=${function $e(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ye(e.value)}`;var e}).join(", ")}]`),ce(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>(function(t){return`${t.field.canonicalString()} (${t.dir})`})(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>ye(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>ye(t)).join(",")),`Target(${e})`}(dn(t))}; limitType=${t.limitType})`}function yn(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):dt.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=nn(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,fn(t),e))&&!(t.endAt&&!function(t,e,n){const r=nn(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,fn(t),e))}(t,e)}function pn(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function In(t){return(e,n)=>{let r=!1;for(const i of fn(t)){const t=Tn(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Tn(t,e,n){const r=t.field.isKeyField()?dt.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?me(r,i):index_esm2017_L()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return index_esm2017_L()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ae(e)?"-0":e}}function An(t){return{integerValue:""+t}}function Rn(t,e){return he(e)?An(e):En(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this._=void 0}}function Pn(t,e,n){return t instanceof Sn?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Dn?Cn(t,e):t instanceof xn?Nn(t,e):function(t,e){const n=Vn(t,e),r=Mn(n)+Mn(t._t);return Te(n)&&Te(t._t)?An(r):En(t.wt,r)}(t,e)}function vn(t,e,n){return t instanceof Dn?Cn(t,e):t instanceof xn?Nn(t,e):n}function Vn(t,e){return t instanceof kn?Te(n=e)||n&&"doubleValue"in n?e:{integerValue:0}:null;var n}class Sn extends bn{}class Dn extends bn{constructor(t){super(),this.elements=t}}function Cn(t,e){const n=On(e);for(const e of t.elements)n.some(t=>_e(t,e))||n.push(e);return{arrayValue:{values:n}}}class xn extends bn{constructor(t){super(),this.elements=t}}function Nn(t,e){let n=On(e);for(const e of t.elements)n=n.filter(t=>!_e(t,e));return{arrayValue:{values:n}}}class kn extends bn{constructor(t,e){super(),this.wt=t,this._t=e}}function Mn(t){return ee(t.integerValue||t.doubleValue)}function On(t){return Ee(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t,e){this.field=t,this.transform=e}}class Bn{constructor(t,e){this.version=t,this.transformResults=e}}class Ln{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ln}static exists(t){return new Ln(void 0,t)}static updateTime(t){return new Ln(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Un(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class qn{}function Kn(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Zn(t.key,Ln.none()):new zn(t.key,t.data,Ln.none());{const n=t.data,r=xe.empty();let i=new Wt(ft.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Hn(t.key,r,new Jt(i.toArray()),Ln.none())}}function Gn(t,e,n){t instanceof zn?function(t,e,n){const r=t.value.clone(),i=Yn(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Hn?function(t,e,n){if(!Un(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Yn(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Jn(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Qn(t,e,n,r){return t instanceof zn?function(t,e,n,r){if(!Un(t.precondition,e))return n;const i=t.value.clone(),s=Xn(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Hn?function(t,e,n,r){if(!Un(t.precondition,e))return n;const i=Xn(t.fieldTransforms,r,e),s=e.data;return s.setAll(Jn(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,r):function(t,e,n){return Un(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function jn(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Vn(r.transform,t||null);null!=i&&(null===n&&(n=xe.empty()),n.set(r.field,i))}return n||null}function Wn(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&rt(t,e,(t,e)=>(function $n(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Dn&&e instanceof Dn||t instanceof xn&&e instanceof xn?rt(t.elements,e.elements,_e):t instanceof kn&&e instanceof kn?_e(t._t,e._t):t instanceof Sn&&e instanceof Sn}(t.transform,e.transform)})(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zn extends qn{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Hn extends qn{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Jn(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Yn(t,e,n){const r=new Map;index_esm2017_U(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,vn(o,a,n[i]))}return r}function Xn(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Pn(t,s,e))}return r}class Zn extends qn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ts extends qn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lr,Pr;function is(t){switch(t){default:return index_esm2017_L();case Ar.CANCELLED:case Ar.UNKNOWN:case Ar.DEADLINE_EXCEEDED:case Ar.RESOURCE_EXHAUSTED:case Ar.INTERNAL:case Ar.UNAVAILABLE:case Ar.UNAUTHENTICATED:return!1;case Ar.INVALID_ARGUMENT:case Ar.NOT_FOUND:case Ar.ALREADY_EXISTS:case Ar.PERMISSION_DENIED:case Ar.FAILED_PRECONDITION:case Ar.ABORTED:case Ar.OUT_OF_RANGE:case Ar.UNIMPLEMENTED:case Ar.DATA_LOSS:return!0}}function rs(t){if(void 0===t)return index_esm2017_F("GRPC error has no .code"),Ar.UNKNOWN;switch(t){case Lr.OK:return Ar.OK;case Lr.CANCELLED:return Ar.CANCELLED;case Lr.UNKNOWN:return Ar.UNKNOWN;case Lr.DEADLINE_EXCEEDED:return Ar.DEADLINE_EXCEEDED;case Lr.RESOURCE_EXHAUSTED:return Ar.RESOURCE_EXHAUSTED;case Lr.INTERNAL:return Ar.INTERNAL;case Lr.UNAVAILABLE:return Ar.UNAVAILABLE;case Lr.UNAUTHENTICATED:return Ar.UNAUTHENTICATED;case Lr.INVALID_ARGUMENT:return Ar.INVALID_ARGUMENT;case Lr.NOT_FOUND:return Ar.NOT_FOUND;case Lr.ALREADY_EXISTS:return Ar.ALREADY_EXISTS;case Lr.PERMISSION_DENIED:return Ar.PERMISSION_DENIED;case Lr.FAILED_PRECONDITION:return Ar.FAILED_PRECONDITION;case Lr.ABORTED:return Ar.ABORTED;case Lr.OUT_OF_RANGE:return Ar.OUT_OF_RANGE;case Lr.UNIMPLEMENTED:return Ar.UNIMPLEMENTED;case Lr.DATA_LOSS:return Ar.DATA_LOSS;default:return index_esm2017_L()}}(Pr=Lr||(Lr={}))[Pr.OK=0]="OK",Pr[Pr.CANCELLED=1]="CANCELLED",Pr[Pr.UNKNOWN=2]="UNKNOWN",Pr[Pr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pr[Pr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pr[Pr.NOT_FOUND=5]="NOT_FOUND",Pr[Pr.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pr[Pr.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pr[Pr.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pr[Pr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pr[Pr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pr[Pr.ABORTED=10]="ABORTED",Pr[Pr.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pr[Pr.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pr[Pr.INTERNAL=13]="INTERNAL",Pr[Pr.UNAVAILABLE=14]="UNAVAILABLE",Pr[Pr.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class os{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){qt(this.inner,(e,n)=>{for(const[e,r]of n)t(e,r)})}isEmpty(){return Kt(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Gt(dt.comparator);function cs(){return Mr}const Fr=new Gt(dt.comparator);function hs(...t){let e=Fr;for(const n of t)e=e.insert(n.key,n);return e}function ls(t){let e=Fr;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function fs(){return _s()}function ds(){return _s()}function _s(){return new os(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ur=new Gt(dt.comparator),jr=new Wt(dt.comparator);function gs(...t){let e=jr;for(const n of t)e=e.add(n);return e}const Br=new Wt(it);function ps(){return Br}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Ts.createSynthesizedTargetChangeForCurrentChange(t,e)),new Is(ct.min(),n,ps(),cs(),gs())}}class Ts{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Ts(Xt.EMPTY_BYTE_STRING,e,gs(),gs(),gs())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,e,n,r){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=r}}class As{constructor(t,e){this.targetId=t,this.It=e}}class Rs{constructor(t,e,n=Xt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class bs{constructor(){this.Tt=0,this.Et=Vs(),this.At=Xt.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=gs(),e=gs(),n=gs();return this.Et.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:index_esm2017_L()}}),new Ts(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=Vs()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class Ps{constructor(t){this.Ot=t,this.Ft=new Map,this.$t=cs(),this.Bt=vs(),this.Lt=new Wt(it)}Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Mt(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:index_esm2017_L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach((t,n)=>{this.jt(n)&&e(n)})}zt(t){const e=t.targetId,n=t.It.count,r=this.Ht(e);if(r){const t=r.target;if(Le(t))if(0===n){const n=new dt(t.path);this.Kt(e,n,ke.newNoDocument(n,ct.min()))}else index_esm2017_U(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach((n,r)=>{const i=this.Ht(r);if(i){if(n.current&&Le(i.target)){const e=new dt(i.target.path);null!==this.$t.get(e)||this.Xt(r,e)||this.Kt(r,e,ke.newNoDocument(e,t))}n.vt&&(e.set(r,n.St()),n.Dt())}});let n=gs();this.Bt.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.Ht(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.$t.forEach((e,n)=>n.setReadTime(t));const r=new Is(t,e,this.Lt,this.$t,n);return this.$t=cs(),this.Bt=vs(),this.Lt=new Wt(it),r}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const r=this.Qt(t);this.Xt(t,e)?r.Ct(e,1):r.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Ot.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new bs,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new Wt(it),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||index_esm2017_O("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Ot.te(t)}Wt(t){this.Ft.set(t,new bs),this.Ot.getRemoteKeysForTarget(t).forEach(e=>{this.Kt(t,e,null)})}Xt(t,e){return this.Ot.getRemoteKeysForTarget(t).has(e)}}function vs(){return new Gt(dt.comparator)}function Vs(){return new Gt(dt.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr={asc:"ASCENDING",desc:"DESCENDING"},Kr={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Cs{constructor(t,e){this.databaseId=t,this.dt=e}}function xs(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ns(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Ms(t){return index_esm2017_U(!!t),ct.fromTimestamp(function(t){const e=te(t);return new ut(e.seconds,e.nanos)}(t))}function Os(t,e){return function(t){return new ht(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Fs(t){const e=ht.fromString(t);return index_esm2017_U(ai(e)),e}function $s(t,e){return Os(t.databaseId,e.path)}function Bs(t,e){const n=Fs(e);if(n.get(1)!==t.databaseId.projectId)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new dt(Ks(n))}function Ls(t,e){return Os(t.databaseId,e)}function Us(t){const e=Fs(t);return 4===e.length?ht.emptyPath():Ks(e)}function qs(t){return new ht(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ks(t){return index_esm2017_U(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Gs(t,e,n){return{name:$s(t,e),fields:n.value.mapValue.fields}}function zs(t,e){let n;if(e instanceof zn)n={update:Gs(t,e.key,e.value)};else if(e instanceof Zn)n={delete:$s(t,e.key)};else if(e instanceof Hn)n={update:Gs(t,e.key,e.data),updateMask:function ci(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}(e.fieldMask)};else{if(!(e instanceof ts))return index_esm2017_L();n={verify:$s(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>(function(t,e){const n=e.transform;if(n instanceof Sn)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Dn)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof xn)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof kn)return{fieldPath:e.field.canonicalString(),increment:n._t};throw index_esm2017_L()})(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:function ks(t,e){return xs(t,e.toTimestamp())}(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:index_esm2017_L()}(t,e.precondition)),n}function Ys(t,e){return{documents:[Ls(t,e.path)]}}function Xs(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Ls(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ls(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>(function(t){if("=="===t.op){if(Re(t.value))return{unaryFilter:{field:ii(t.field),op:"IS_NAN"}};if(Ae(t.value))return{unaryFilter:{field:ii(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Re(t.value))return{unaryFilter:{field:ii(t.field),op:"IS_NOT_NAN"}};if(Ae(t.value))return{unaryFilter:{field:ii(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ii(t.field),op:function si(t){return Kr[t]}(t.op),value:t.value}}})(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map(t=>(function(t){return{field:ii(t.field),direction:function ni(t){return qr[t]}(t.dir)}})(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.dt||ce(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Zs(t){let e=Us(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){index_esm2017_U(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function ei(t){return t?void 0!==t.unaryFilter?[function ui(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ri(t.unaryFilter.field);return Ge.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ri(t.unaryFilter.field);return Ge.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ri(t.unaryFilter.field);return Ge.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ri(t.unaryFilter.field);return Ge.create(i,"!=",{nullValue:"NULL_VALUE"});default:return index_esm2017_L()}}(t)]:void 0!==t.fieldFilter?[function oi(t){return Ge.create(ri(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return index_esm2017_L()}}(t.fieldFilter.op),t.fieldFilter.value)}(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>ei(t)).reduce((t,e)=>t.concat(e)):index_esm2017_L():[]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>(function(t){return new tn(ri(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))})(t)));let a=null;n.limit&&(a=function(t){let e;return ce(e="object"==typeof t?t.value:t)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Ze(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Ze(n,e)}(n.endAt)),on(e,i,o,s,a,"F",c,u)}function ii(t){return{fieldPath:t.canonicalString()}}function ri(t){return ft.fromServerFormat(t.fieldPath)}function ai(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=[...[...[...[...["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments"],"clientMetadata"],"remoteDocumentGlobal"],"collectionParents"],"bundles","namedQueries"],Gr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],zr=Gr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bi{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&Gn(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Qn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Qn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ds();return this.mutations.forEach(r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);const a=Kn(s,o=e.has(r.key)?null:o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(ct.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),gs())}isEqual(t){return this.batchId===t.batchId&&rt(this.mutations,t.mutations,(t,e)=>Wn(t,e))&&rt(this.baseMutations,t.baseMutations,(t,e)=>Wn(t,e))}}class Li{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){index_esm2017_U(t.mutations.length===n.length);let r=Ur;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new Li(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(t,e,n,r,i=ct.min(),s=ct.min(),o=Xt.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new qi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new qi(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new qi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t){this.ne=t}}function Xi(t){const e=Zs({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?_n(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ur{constructor(){}re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(ee(t.integerValue));else if("doubleValue"in t){const n=ee(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),ae(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(ne(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?ve(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):index_esm2017_L()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const t of Object.keys(n))this.le(t,e),this.oe(n[t],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const t of n)this.oe(t,e)}_e(t,e){this.ce(e,37),dt.fromName(t).path.forEach(t=>{this.ce(e,60),this.ge(t,e)})}ce(t,e){t.ae(e)}fe(t){t.ae(2)}}ur.ye=new ur;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr{constructor(){this.ze=new pr}addToCollectionParentIndex(t,e){return this.ze.add(e),Vt.resolve()}getCollectionParents(t,e){return Vt.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return Vt.resolve()}deleteFieldIndex(t,e){return Vt.resolve()}getDocumentsMatchingTarget(t,e){return Vt.resolve(null)}getIndexType(t,e){return Vt.resolve(0)}getFieldIndexes(t,e){return Vt.resolve([])}getNextCollectionGroupToUpdate(t){return Vt.resolve(null)}getMinOffset(t,e){return Vt.resolve(At.min())}getMinOffsetFromCollectionGroup(t,e){return Vt.resolve(At.min())}updateCollectionGroup(t,e,n){return Vt.resolve()}updateIndexEntries(t,e){return Vt.resolve()}}class pr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Wt(ht.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Wt(ht.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Vr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Vr(t,Vr.DEFAULT_COLLECTION_PERCENTILE,Vr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vr.DEFAULT_COLLECTION_PERCENTILE=10,Vr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vr.DEFAULT=new Vr(41943040,Vr.DEFAULT_COLLECTION_PERCENTILE,Vr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vr.DISABLED=new Vr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Or{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new Or(0)}static Rn(){return new Or(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wr{constructor(){this.changes=new os(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ke.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Vt.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.getBaseDocument(t,e,n))).next(t=>(null!==n&&Qn(n.mutation,t,Jt.empty(),ut.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,gs()).next(()=>e))}getLocalViewOfDocuments(t,e,n=gs()){const r=fs();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(t=>{let e=hs();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=fs();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,gs()))}populateOverlays(t,e,n){const r=[];return n.forEach(t=>{e.has(t)||r.push(t)}),this.documentOverlayCache.getOverlays(t,r).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,r){let i=cs();const s=_s(),o=_s();return e.forEach((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Hn)?i=i.insert(e.key,e):void 0!==o&&(s.set(e.key,o.mutation.getFieldMask()),Qn(o.mutation,e,o.mutation.getFieldMask(),ut.now()))}),this.recalculateAndSaveOverlays(t,i).next(t=>(t.forEach((t,e)=>s.set(t,e)),e.forEach((t,e)=>{var n;return o.set(t,new no(e,null!==(n=s.get(t))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(t,e){const n=_s();let r=new Gt((t,e)=>t-e),i=gs();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const i of t)i.keys().forEach(t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Jt.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||gs()).add(t);r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=ds();c.forEach(t=>{if(!i.has(t)){const r=Kn(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}}),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Vt.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n){return function(t){return dt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ln(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Vt.resolve(fs());let o=-1,a=i;return s.next(e=>Vt.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Vt.resolve():this.getBaseDocument(t,e,n).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,i)).next(()=>this.computeViews(t,a,e,gs())).next(t=>({batchId:o,changes:ls(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new dt(e)).next(t=>{let e=hs();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=hs();return this.indexManager.getCollectionParents(t,r).next(s=>Vt.forEach(s,s=>{const o=function(t,e){return new rn(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId))).next(t=>{t.forEach((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,ke.newInvalidDocument(n)))});let n=hs();return r.forEach((r,i)=>{const s=t.get(r);void 0!==s&&Qn(s.mutation,i,Jt.empty(),ut.now()),yn(e,i)&&(n=n.insert(r,i))}),n})}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Vt.resolve(ke.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return Vt.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:Ms(n.createTime)}),Vt.resolve()}getNamedQuery(t,e){return Vt.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:Xi(t.bundledQuery),readTime:Ms(t.readTime)}}(e)),Vt.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.overlays=new Gt(dt.comparator),this.Xn=new Map}getOverlay(t,e){return Vt.resolve(this.overlays.get(e))}getOverlays(t,e){const n=fs();return Vt.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.ie(t,e,r)}),Vt.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.Xn.delete(n)),Vt.resolve()}getOverlaysForCollection(t,e,n){const r=fs(),i=e.length+1,s=new dt(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Vt.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Gt((t,e)=>t-e);const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=fs(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=fs(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((t,e)=>o.set(t,e)),!(o.size()>=r)););return Vt.resolve(o)}ie(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Ui(e,n));let i=this.Xn.get(e);void 0===i&&(i=gs(),this.Xn.set(e,i)),this.Xn.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.Zn=new Wt(uo.ts),this.es=new Wt(uo.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new uo(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.rs(new uo(t,e))}os(t,e){t.forEach(t=>this.removeReference(t,e))}us(t){const e=new dt(new ht([])),n=new uo(e,t),r=new uo(e,t+1),i=[];return this.es.forEachInRange([n,r],t=>{this.rs(t),i.push(t.key)}),i}cs(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new dt(new ht([])),n=new uo(e,t),r=new uo(e,t+1);let i=gs();return this.es.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new uo(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class uo{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return dt.comparator(t.key,e.key)||it(t.ls,e.ls)}static ns(t,e){return it(t.ls,e.ls)||dt.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new Wt(uo.ts)}checkEmpty(t){return Vt.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Bi(i,e,n,r);this.mutationQueue.push(s);for(const e of r)this.ds=this.ds.add(new uo(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Vt.resolve(s)}lookupMutationBatch(t,e){return Vt.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ws(n),i=r<0?0:r;return Vt.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Vt.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return Vt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new uo(e,0),r=new uo(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],t=>{const e=this._s(t.ls);i.push(e)}),Vt.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Wt(it);return e.forEach(t=>{const e=new uo(t,0),r=new uo(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],t=>{n=n.add(t.ls)})}),Vt.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;dt.isDocumentKey(i)||(i=i.child(""));const s=new uo(new dt(i),0);let o=new Wt(it);return this.ds.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)},s),Vt.resolve(this.gs(o))}gs(t){const e=[];return t.forEach(t=>{const n=this._s(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){index_esm2017_U(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Vt.forEach(e.mutations,r=>{const i=new uo(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=n})}In(t){}containsKey(t,e){const n=new uo(e,0),r=this.ds.firstAfterOrEqual(n);return Vt.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Vt.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t){this.ps=t,this.docs=new Gt(dt.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Vt.resolve(n?n.document.mutableCopy():ke.newInvalidDocument(e))}getEntries(t,e){let n=cs();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ke.newInvalidDocument(t))}),Vt.resolve(n)}getAllFromCollection(t,e,n){let r=cs();const i=new dt(e.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Rt(Et(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Vt.resolve(r)}getAllFromCollectionGroup(t,e,n,r){index_esm2017_L()}Is(t,e){return Vt.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new ho(this)}getSize(t){return Vt.resolve(this.size)}}class ho extends Wr{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.zn.addEntry(t,r)):this.zn.removeEntry(n)}),Vt.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t){this.persistence=t,this.Ts=new os(t=>Fe(t),Be),this.lastRemoteSnapshotVersion=ct.min(),this.highestTargetId=0,this.Es=0,this.As=new oo,this.targetCount=0,this.Rs=Or.An()}forEachTarget(t,e){return this.Ts.forEach((t,n)=>e(n)),Vt.resolve()}getLastRemoteSnapshotVersion(t){return Vt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Vt.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Vt.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),Vt.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Or(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,Vt.resolve()}updateTargetData(t,e){return this.vn(e),Vt.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,Vt.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Ts.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),Vt.waitFor(i).next(()=>r)}getTargetCount(t){return Vt.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Vt.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Vt.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),Vt.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),Vt.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Vt.resolve(n)}containsKey(t,e){return Vt.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t,e){this.bs={},this.overlays={},this.Ps=new Lt(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new lo(this),this.indexManager=new yr,this.remoteDocumentCache=function(t){return new ao(t)}(t=>this.referenceDelegate.Ss(t)),this.wt=new Ki(e),this.Ds=new io(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ro,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new co(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){index_esm2017_O("MemoryPersistence","Starting transaction:",t);const r=new _o(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next(t=>this.referenceDelegate.xs(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ns(t,e){return Vt.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class _o extends Pt{constructor(t){super(),this.currentSequenceNumber=t}}class wo{constructor(t){this.persistence=t,this.ks=new oo,this.Ms=null}static Os(t){return new wo(t)}get Fs(){if(this.Ms)return this.Ms;throw index_esm2017_L()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),Vt.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),Vt.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),Vt.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach(t=>this.Fs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Fs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Cs(){this.Ms=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Vt.forEach(this.Fs,n=>{const r=dt.fromPath(n);return this.$s(t,r).next(t=>{t||e.removeEntry(r,ct.min())})}).next(()=>(this.Ms=null,e.apply(t)))}updateLimboDocument(t,e){return this.$s(t,e).next(t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())})}Ss(t){return 0}$s(t,e){return Vt.or([()=>Vt.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ao{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=r}static Vi(t,e){let n=gs(),r=gs();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new Ao(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ci(t,e).next(i=>i||this.xi(t,e,r,n)).next(n=>n||this.Ni(t,e))}Ci(t,e){if(cn(e))return Vt.resolve(null);let n=dn(e);return this.indexManager.getIndexType(t,n).next(r=>0===r?null:(null!==e.limit&&1===r&&(e=_n(e,null,"F"),n=dn(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(r=>{const i=gs(...r);return this.Di.getDocuments(t,i).next(r=>this.indexManager.getMinOffset(t,n).next(n=>{const s=this.ki(e,r);return this.Mi(e,s,i,n.readTime)?this.Ci(t,_n(e,null,"F")):this.Oi(t,s,e,n)}))})))}xi(t,e,n,r){return cn(e)||r.isEqual(ct.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next(i=>{const s=this.ki(e,i);return this.Mi(e,s,n,r)?this.Ni(t,e):(index_esm2017_k()<=a.in.DEBUG&&index_esm2017_O("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),gn(e)),this.Oi(t,s,e,Tt(r,-1)))})}ki(t,e){let n=new Wt(In(t));return e.forEach((e,r)=>{yn(t,r)&&(n=n.add(r))}),n}Mi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(t,e){return index_esm2017_k()<=a.in.DEBUG&&index_esm2017_O("QueryEngine","Using full collection scan to execute query:",gn(e)),this.Di.getDocumentsMatchingQuery(t,e,At.min())}Oi(t,e,n,r){return this.Di.getDocumentsMatchingQuery(t,n,r).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t,e,n,r){this.persistence=t,this.Fi=e,this.wt=r,this.$i=new Gt(it),this.Bi=new os(t=>Fe(t),Be),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new so(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.$i))}}function Po(t,e,n,r){return new bo(t,e,n,r)}async function vo(t,e){const n=index_esm2017_K(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next(i=>(r=i,n.qi(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const i=[],s=[];let o=gs();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({Ki:t,removedBatchIds:i,addedBatchIds:s}))})})}function So(t){const e=index_esm2017_K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Vs.getLastRemoteSnapshotVersion(t))}function Co(t,e,n){let r=gs(),i=gs();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=cs();return n.forEach((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(ct.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):index_esm2017_O("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{Gi:r,Qi:i}})}function xo(t,e){const n=index_esm2017_K(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}function No(t,e){const n=index_esm2017_K(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.Vs.getTargetData(t,e).next(i=>i?(r=i,Vt.resolve(r)):n.Vs.allocateTargetId(t).next(i=>(r=new qi(e,i,0,t.currentSequenceNumber),n.Vs.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.$i.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t})}async function ko(t,e,n){const r=index_esm2017_K(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!Nt(t))throw t;index_esm2017_O("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function Mo(t,e,n){const r=index_esm2017_K(t);let i=ct.min(),s=gs();return r.persistence.runTransaction("Execute query","readonly",t=>(function(t,e,n){const r=index_esm2017_K(t),i=r.Bi.get(n);return void 0!==i?Vt.resolve(r.$i.get(i)):r.Vs.getTargetData(e,n)})(r,t,dn(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Fi.getDocumentsMatchingQuery(t,e,n?i:ct.min(),n?s:gs())).next(t=>($o(r,pn(e),t),{documents:t,ji:s})))}function $o(t,e,n){let r=ct.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.Li.set(e,r)}class zo{constructor(){this.activeTargetIds=ps()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Jo{constructor(){this.Fr=new zo,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new zo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(){this.Lr=(()=>this.Ur()),this.qr=(()=>this.Kr()),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){index_esm2017_O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){index_esm2017_O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,r,i){const s=this.oo(t,e);index_esm2017_O("RestConnection","Sending: ",s,n);const o={};return this.uo(o,r,i),this.co(t,s,o,n).then(t=>(index_esm2017_O("RestConnection","Received: ",t),t),e=>{throw $("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e})}ao(t,e,n,r,i,s){return this.ro(t,e,n,r,i)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ir,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}oo(t,e){const n=Hr[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,r){return new Promise((i,s)=>{const o=new Sr;o.listenOnce(wr.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case _r.NO_ERROR:const e=o.getResponseJson();index_esm2017_O("Connection","XHR received:",JSON.stringify(e)),i(e);break;case _r.TIMEOUT:index_esm2017_O("Connection",'RPC "'+t+'" timed out'),s(new index_esm2017_Q(Ar.DEADLINE_EXCEEDED,"Request time out"));break;case _r.HTTP_ERROR:const n=o.getStatus();if(index_esm2017_O("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Ar).indexOf(e)>=0?e:Ar.UNKNOWN}(t.status);s(new index_esm2017_Q(e,t.message))}else s(new index_esm2017_Q(Ar.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new index_esm2017_Q(Ar.UNAVAILABLE,"Connection failed."));break;default:index_esm2017_L()}}finally{index_esm2017_O("Connection",'RPC "'+t+'" completed.')}});const a=JSON.stringify(r);o.send(e,"POST",a,n,15)})}ho(t,e,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=gr(),s=vr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new xr({})),this.uo(o.initMessageHeaders,e,n),(0,c.uI)()||(0,c.b$)()||(0,c.d)()||(0,c.w1)()||(0,c.Mn)()||(0,c.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");index_esm2017_O("Connection","Creating WebChannel: "+a,o);const u=i.createWebChannel(a,o);let h=!1,l=!1;const d=new tu({jr:t=>{l?index_esm2017_O("Connection","Not sending because WebChannel is closed:",t):(h||(index_esm2017_O("Connection","Opening WebChannel transport."),u.open(),h=!0),index_esm2017_O("Connection","WebChannel sending:",t),u.send(t))},Wr:()=>u.close()}),f=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return f(u,Tr.EventType.OPEN,()=>{l||index_esm2017_O("Connection","WebChannel transport opened.")}),f(u,Tr.EventType.CLOSE,()=>{l||(l=!0,index_esm2017_O("Connection","WebChannel transport closed"),d.eo())}),f(u,Tr.EventType.ERROR,t=>{l||(l=!0,$("Connection","WebChannel transport errored:",t),d.eo(new index_esm2017_Q(Ar.UNAVAILABLE,"The operation could not be completed")))}),f(u,Tr.EventType.MESSAGE,t=>{var e;if(!l){const n=t.data[0];index_esm2017_U(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){index_esm2017_O("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Lr[t];if(void 0!==e)return rs(e)}(t),n=i.message;void 0===e&&(e=Ar.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),l=!0,d.eo(new index_esm2017_Q(e,n)),u.close()}else index_esm2017_O("Connection","WebChannel received:",n),d.no(n)}}),f(s,br.STAT_EVENT,t=>{t.stat===Er.PROXY?index_esm2017_O("Connection","Detected buffering proxy"):t.stat===Er.NOPROXY&&index_esm2017_O("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t){return new Cs(t,!0)}class ru{constructor(t,e,n=1e3,r=1.5,i=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,e-n);r>0&&index_esm2017_O("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t,e,n,r,i,s,o,a){this.js=t,this.Ao=n,this.Ro=r,this.bo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new ru(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(t){this.Fo(),this.stream.send(t)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Ar.RESOURCE_EXHAUSTED?(index_esm2017_F(e.toString()),index_esm2017_F("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Ar.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.Po===e&&this.Uo(t,n)},e=>{t(()=>{const t=new index_esm2017_Q(Ar.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)})})}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr(()=>{n(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(t=>{n(()=>this.qo(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(t){return index_esm2017_O("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget(()=>this.Po===t?e():(index_esm2017_O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uu extends ou{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.wt=i}Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=function Ws(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:index_esm2017_L()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.dt?(index_esm2017_U(void 0===e||"string"==typeof e),Xt.fromBase64String(e||"")):(index_esm2017_U(void 0===e||e instanceof Uint8Array),Xt.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Ar.UNKNOWN:rs(t.code);return new index_esm2017_Q(e,t.message||"")}(o);n=new Rs(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Bs(t,r.document.name),s=Ms(r.document.updateTime),o=new xe({mapValue:{fields:r.document.fields}}),a=ke.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Es(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Bs(t,r.document),s=r.readTime?Ms(r.readTime):ct.min(),o=ke.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Es([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Bs(t,r.document),s=r.removedTargetIds||[];n=new Es([],s,i,null)}else{if(!("filter"in e))return index_esm2017_L();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new es(r),s=t.targetId;n=new As(s,i)}}return n}(this.wt,t),n=function(t){if(!("targetChange"in t))return ct.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?ct.min():e.readTime?Ms(e.readTime):ct.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=qs(this.wt),e.addTarget=function(t,e){let n;const r=e.target;return(n=Le(r)?{documents:Ys(t,r)}:{query:Xs(t,r)}).targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Ns(t,e.resumeToken):e.snapshotVersion.compareTo(ct.min())>0&&(n.readTime=xs(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=function ti(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return index_esm2017_L()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.wt,t);n&&(e.labels=n),this.Oo(e)}jo(t){const e={};e.database=qs(this.wt),e.removeTarget=t,this.Oo(e)}}class cu extends ou{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(index_esm2017_U(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=function Js(t,e){return t&&t.length>0?(index_esm2017_U(void 0!==e),t.map(t=>(function(t,e){let n=t.updateTime?Ms(t.updateTime):Ms(e);return n.isEqual(ct.min())&&(n=Ms(e)),new Bn(n,t.transformResults||[])})(t,e))):[]}(t.writeResults,t.commitTime),n=Ms(t.commitTime);return this.listener.Jo(n,e)}return index_esm2017_U(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=qs(this.wt),this.Oo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>zs(this.wt,t))};this.Oo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new index_esm2017_Q(Ar.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===Ar.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new index_esm2017_Q(Ar.UNKNOWN,t.toString())})}ao(t,e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ao(t,e,n,i,s,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===Ar.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new index_esm2017_Q(Ar.UNKNOWN,t.toString())})}terminate(){this.Zo=!0}}class hu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(index_esm2017_F(e),this.su=!1):index_esm2017_O("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(t=>{n.enqueueAndForget(async()=>{Iu(this)&&(index_esm2017_O("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=index_esm2017_K(t);e.lu.add(4),await du(e),e._u.set("Unknown"),e.lu.delete(4),await fu(e)}(this))})}),this._u=new hu(n,r)}}async function fu(t){if(Iu(t))for(const e of t.fu)await e(!0)}async function du(t){for(const e of t.fu)await e(!1)}function _u(t,e){const n=index_esm2017_K(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),pu(n)?yu(n):$u(n).Co()&&mu(n,e))}function wu(t,e){const n=index_esm2017_K(t),r=$u(n);n.hu.delete(e),r.Co()&&gu(n,e),0===n.hu.size&&(r.Co()?r.ko():Iu(n)&&n._u.set("Unknown"))}function mu(t,e){t.wu.Nt(e.targetId),$u(t).Qo(e)}function gu(t,e){t.wu.Nt(e),$u(t).jo(e)}function yu(t){t.wu=new Ps({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),$u(t).start(),t._u.iu()}function pu(t){return Iu(t)&&!$u(t).Do()&&t.hu.size>0}function Iu(t){return 0===index_esm2017_K(t).lu.size}function Tu(t){t.wu=void 0}async function bu(t,e,n){if(!Nt(e))throw e;t.lu.add(1),await du(t),t._u.set("Offline"),n||(n=(()=>So(t.localStore))),t.asyncQueue.enqueueRetryable(async()=>{index_esm2017_O("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await fu(t)})}function Pu(t,e){return e().catch(n=>bu(t,n,e))}async function vu(t){const e=index_esm2017_K(t),n=Bu(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;Vu(e);)try{const i=await xo(e.localStore,r);if(null===i){0===e.au.length&&n.ko();break}r=i.batchId,Su(e,i)}catch(t){await bu(e,t)}Du(e)&&Cu(e)}function Vu(t){return Iu(t)&&t.au.length<10}function Su(t,e){t.au.push(e);const n=Bu(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Du(t){return Iu(t)&&!Bu(t).Do()&&t.au.length>0}function Cu(t){Bu(t).start()}async function Ou(t,e){const n=index_esm2017_K(t);n.asyncQueue.verifyOperationInProgress(),index_esm2017_O("RemoteStore","RemoteStore received new credentials");const r=Iu(n);n.lu.add(3),await du(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await fu(n)}async function Fu(t,e){const n=index_esm2017_K(t);e?(n.lu.delete(2),await fu(n)):e||(n.lu.add(2),await du(n),n._u.set("Unknown"))}function $u(t){return t.mu||(t.mu=function(t,e,n){const r=index_esm2017_K(t);return r.tu(),new uu(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{zr:async function Eu(t){t.hu.forEach((e,n)=>{mu(t,e)})}.bind(null,t),Jr:async function Au(t,e){Tu(t),pu(t)?(t._u.uu(e),yu(t)):t._u.set("Unknown")}.bind(null,t),Go:async function Ru(t,e,n){if(t._u.set("Online"),e instanceof Rs&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.hu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.hu.delete(r),t.wu.removeTarget(r))}(t,e)}catch(n){index_esm2017_O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await bu(t,n)}else if(e instanceof Es?t.wu.Ut(e):e instanceof As?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(ct.min()))try{const r=await So(t.localStore);n.compareTo(r)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.hu.get(r);i&&t.hu.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(Xt.EMPTY_BYTE_STRING,n.snapshotVersion)),gu(t,e);const r=new qi(n.target,e,1,n.sequenceNumber);mu(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){index_esm2017_O("RemoteStore","Failed to raise snapshot:",e),await bu(t,e)}}.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),pu(t)?yu(t):t._u.set("Unknown")):(await t.mu.stop(),Tu(t))})),t.mu}function Bu(t){return t.gu||(t.gu=function(t,e,n){const r=index_esm2017_K(t);return r.tu(),new cu(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(t.datastore,t.asyncQueue,{zr:async function xu(t){Bu(t).Xo()}.bind(null,t),Jr:async function Mu(t,e){e&&Bu(t).zo&&await async function(t,e){if(is(n=e.code)&&n!==Ar.ABORTED){const n=t.au.shift();Bu(t).No(),await Pu(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await vu(t)}var n}(t,e),Du(t)&&Cu(t)}.bind(null,t),Yo:async function Nu(t){const e=Bu(t);for(const n of t.au)e.Ho(n.mutations)}.bind(null,t),Jo:async function ku(t,e,n){const r=t.au.shift(),i=Li.from(r,e,n);await Pu(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await vu(t)}.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await vu(t)):(await t.gu.stop(),t.au.length>0&&(index_esm2017_O("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Lu{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new j,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Lu(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new index_esm2017_Q(Ar.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uu(t,e){if(index_esm2017_F("AsyncQueue",`${e}: ${t}`),Nt(t))return new index_esm2017_Q(Ar.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||dt.comparator(e.key,n.key):(t,e)=>dt.comparator(t.key,e.key),this.keyedMap=hs(),this.sortedSet=new Gt(this.comparator)}static emptySet(t){return new qu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof qu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new qu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(){this.yu=new Gt(dt.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):index_esm2017_L():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal((e,n)=>{t.push(n)}),t}}class Gu{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new Gu(t,e,qu.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&wn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(){this.Iu=void 0,this.listeners=[]}}class ju{constructor(){this.queries=new os(t=>mn(t),wn),this.onlineState="Unknown",this.Tu=new Set}}async function Wu(t,e){const n=index_esm2017_K(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Qu),i)try{s.Iu=await n.onListen(r)}catch(t){const n=Uu(t,`Initialization of query '${gn(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&Yu(n)}async function zu(t,e){const n=index_esm2017_K(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Yu(t){t.Tu.forEach(t=>{t.next()})}class Xu{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Gu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.Du&&n||t.docs.isEmpty()&&"Offline"!==e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=Gu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class index_esm2017_sc{constructor(t){this.key=t}}class index_esm2017_ic{constructor(t){this.key=t}}class index_esm2017_rc{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=gs(),this.mutatedKeys=gs(),this.Lu=In(t),this.Uu=new qu(this.Lu)}get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new Ku,r=e?e.Uu:this.Uu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),h=yn(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Qu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Lu(h,a)>0||c&&this.Lu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(s=s.add(h),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Uu:s,Gu:n,Mi:o,mutatedKeys:i}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const i=t.Gu.pu();i.sort((t,e)=>(function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return index_esm2017_L()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(t.type,e.type)||this.Lu(t.doc,e.doc)),this.ju(n);const s=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==i.length||a?{snapshot:new Gu(this.query,t.Uu,r,i,t.mutatedKeys,0===o,a,!1),zu:s}:{zu:s}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Ku,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach(t=>this.Fu=this.Fu.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Fu=this.Fu.delete(t)),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=gs(),this.Uu.forEach(t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))});const e=[];return t.forEach(t=>{this.Bu.has(t)||e.push(new index_esm2017_ic(t))}),this.Bu.forEach(n=>{t.has(n)||e.push(new index_esm2017_sc(n))}),e}Ju(t){this.Fu=t.ji,this.Bu=gs();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return Gu.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class index_esm2017_oc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class index_esm2017_uc{constructor(t){this.key=t,this.Xu=!1}}class index_esm2017_cc{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Zu={},this.tc=new os(t=>mn(t),wn),this.ec=new Map,this.nc=new Set,this.sc=new Gt(dt.comparator),this.ic=new Map,this.rc=new oo,this.oc={},this.uc=new Map,this.cc=Or.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function index_esm2017_hc(t,e,n,r){t.hc=((e,n,r)=>(async function(t,e,n,r){let i=e.view.Ku(n);i.Mi&&(i=await Mo(t.localStore,e.query,!1).then(({documents:t})=>e.view.Ku(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return index_esm2017_Ac(t,e.targetId,o.zu),o.snapshot})(t,e,n,r));const i=await Mo(t.localStore,e,!0),s=new index_esm2017_rc(e,i.ji),o=s.Ku(i.documents),a=Ts.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);index_esm2017_Ac(t,n,c.zu);const u=new index_esm2017_oc(e,n,s);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function index_esm2017_dc(t,e){const n=index_esm2017_K(t);try{const r=await function Do(t,e){const n=index_esm2017_K(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const o=[];e.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,s.removedDocuments,a).next(()=>n.Vs.addMatchingKeys(t,s.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Xt.EMPTY_BYTE_STRING,ct.min()).withLastLimboFreeSnapshotVersion(ct.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,s)&&o.push(n.Vs.updateTargetData(t,u))});let a=cs(),c=gs();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(Co(t,s,e.documentUpdates).next(t=>{a=t.Gi,c=t.Qi})),!r.isEqual(ct.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next(e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return Vt.waitFor(o).next(()=>s.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.$i=i,t))}(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.ic.get(e);r&&(index_esm2017_U(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Xu=!0:t.modifiedDocuments.size>0?index_esm2017_U(r.Xu):t.removedDocuments.size>0&&(index_esm2017_U(r.Xu),r.Xu=!1))}),await index_esm2017_Pc(n,r,e)}catch(t){await vt(t)}}function _c(t,e,n){const r=index_esm2017_K(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.tc.forEach((n,r)=>{const i=r.view.Eu(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=index_esm2017_K(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const t of n.listeners)t.Eu(e)&&(r=!0)}),r&&Yu(n)}(r.eventManager,e),t.length&&r.Zu.Go(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function index_esm2017_mc(t,e){const n=index_esm2017_K(t),r=e.batch.batchId;try{const i=await function Vo(t,e){const n=index_esm2017_K(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Vt.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);index_esm2017_U(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=gs();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,r))})}(n.localStore,e);index_esm2017_Ic(n,r,null),index_esm2017_pc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await index_esm2017_Pc(n,i)}catch(t){await vt(t)}}function index_esm2017_pc(t,e){(t.uc.get(e)||[]).forEach(t=>{t.resolve()}),t.uc.delete(e)}function index_esm2017_Ic(t,e,n){const r=index_esm2017_K(t);let i=r.oc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.oc[r.currentUser.toKey()]=i}}function index_esm2017_Tc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(e=>{t.rc.containsKey(e)||index_esm2017_Ec(t,e)})}function index_esm2017_Ec(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(wu(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),index_esm2017_bc(t))}function index_esm2017_Ac(t,e,n){for(const r of n)r instanceof index_esm2017_sc?(t.rc.addReference(r.key,e),index_esm2017_Rc(t,r)):r instanceof index_esm2017_ic?(index_esm2017_O("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||index_esm2017_Ec(t,r.key)):index_esm2017_L()}function index_esm2017_Rc(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(index_esm2017_O("SyncEngine","New document in limbo: "+n),t.nc.add(r),index_esm2017_bc(t))}function index_esm2017_bc(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new dt(ht.fromString(e)),r=t.cc.next();t.ic.set(r,new index_esm2017_uc(n)),t.sc=t.sc.insert(n,r),_u(t.remoteStore,new qi(dn(un(n.path)),r,2,Lt.ot))}}async function index_esm2017_Pc(t,e,n){const r=index_esm2017_K(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach((t,a)=>{o.push(r.hc(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Ao.Vi(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.Zu.Go(i),await async function(t,e){const n=index_esm2017_K(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Vt.forEach(e,e=>Vt.forEach(e.Pi,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>Vt.forEach(e.vi,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!Nt(t))throw t;index_esm2017_O("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.$i.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(e,i)}}}(r.localStore,s))}function index_esm2017_$c(t){const e=index_esm2017_K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=index_esm2017_dc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=function index_esm2017_Vc(t,e){const n=index_esm2017_K(t),r=n.ic.get(e);if(r&&r.Xu)return gs().add(r.key);{let t=gs();const r=n.ec.get(e);if(!r)return t;for(const e of r){const r=n.tc.get(e);t=t.unionWith(r.view.qu)}return t}}.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=async function index_esm2017_wc(t,e,n){const r=index_esm2017_K(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let t=new Gt(dt.comparator);t=t.insert(s,ke.newNoDocument(s,ct.min()));const n=gs().add(s),i=new Is(ct.min(),new Map,new Wt(it),t,n);await index_esm2017_dc(r,i),r.sc=r.sc.remove(s),r.ic.delete(e),index_esm2017_bc(r)}else await ko(r.localStore,e,!1).then(()=>index_esm2017_Tc(r,e,n)).catch(vt)}.bind(null,e),e.Zu.Go=function Hu(t,e){const n=index_esm2017_K(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.Au(t)&&(r=!0);i.Iu=t}}r&&Yu(n)}.bind(null,e.eventManager),e.Zu.lc=function Ju(t,e,n){const r=index_esm2017_K(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}.bind(null,e.eventManager),e}function index_esm2017_Bc(t){const e=index_esm2017_K(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=index_esm2017_mc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=async function index_esm2017_gc(t,e,n){const r=index_esm2017_K(t);try{const t=await function(t,e){const n=index_esm2017_K(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(index_esm2017_U(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r)).next(()=>n.localDocuments.getDocuments(t,r))})}(r.localStore,e);index_esm2017_Ic(r,e,n),index_esm2017_pc(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await index_esm2017_Pc(r,t)}catch(n){await vt(n)}}.bind(null,e),e}class index_esm2017_Uc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=iu(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return Po(this.persistence,new Ro,t.initialUser,this.wt)}_c(t){return new fo(wo.Os,this.wt)}dc(t){return new Jo}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class index_esm2017_Gc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=(t=>_c(this.syncEngine,t,1)),this.remoteStore.remoteSyncer.handleCredentialChange=async function index_esm2017_vc(t,e){const n=index_esm2017_K(t);if(!n.currentUser.isEqual(e)){index_esm2017_O("SyncEngine","User change. New user:",e.toKey());const t=await vo(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach(t=>{t.forEach(t=>{t.reject(new index_esm2017_Q(Ar.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),t.uc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await index_esm2017_Pc(n,t.Ki)}}.bind(null,this.syncEngine),await Fu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ju}createDatastore(t){const e=iu(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new eu(r));var r;return function(t,e,n,r){return new au(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=(t=>_c(this.syncEngine,t,0)),s=Xo.V()?new Xo:new Yo,new lu(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new index_esm2017_cc(t,e,n,r,i,s);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=index_esm2017_K(t);index_esm2017_O("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await du(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class index_esm2017_jc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):index_esm2017_F("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class index_esm2017_Jc{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=index_esm2017_C.UNAUTHENTICATED,this.clientId=st.I(),this.authCredentialListener=(()=>Promise.resolve()),this.appCheckCredentialListener=(()=>Promise.resolve()),this.authCredentials.start(n,async t=>{index_esm2017_O("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(index_esm2017_O("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new index_esm2017_Q(Ar.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new j;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Uu(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function index_esm2017_Yc(t,e){t.asyncQueue.verifyOperationInProgress(),index_esm2017_O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await vo(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function index_esm2017_Xc(t,e){t.asyncQueue.verifyOperationInProgress();const n=await index_esm2017_Zc(t);index_esm2017_O("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>Ou(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>Ou(e.remoteStore,n)),t.onlineComponents=e}async function index_esm2017_Zc(t){return t.offlineComponents||(index_esm2017_O("FirestoreClient","Using default OfflineComponentProvider"),await index_esm2017_Yc(t,new index_esm2017_Uc)),t.offlineComponents}async function index_esm2017_ta(t){return t.onlineComponents||(index_esm2017_O("FirestoreClient","Using default OnlineComponentProvider"),await index_esm2017_Xc(t,new index_esm2017_Gc)),t.onlineComponents}function index_esm2017_ia(t){return index_esm2017_ta(t).then(t=>t.syncEngine)}async function index_esm2017_ra(t){const e=await index_esm2017_ta(t),n=e.eventManager;return n.onListen=async function index_esm2017_ac(t,e){const n=index_esm2017_$c(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const t=await No(n.localStore,dn(e));n.isPrimaryClient&&_u(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await index_esm2017_hc(n,e,r,"current"===s)}return i}.bind(null,e.syncEngine),n.onUnlisten=async function index_esm2017_lc(t,e){const n=index_esm2017_K(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter(t=>!wn(t,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ko(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),wu(n.remoteStore,r.targetId),index_esm2017_Tc(n,r.targetId)}).catch(vt)):(index_esm2017_Tc(n,r.targetId),await ko(n.localStore,r.targetId,!0))}.bind(null,e.syncEngine),n}const Qr=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t,e,n){if(!n)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function index_esm2017_pa(t){if(!dt.isDocumentKey(t))throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function index_esm2017_Ta(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":index_esm2017_L()}function Ea(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=index_esm2017_Ta(t);throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class index_esm2017_Ra{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function index_esm2017_ya(t,e,n,r){if(!0===e&&!0===r)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class index_esm2017_ba{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new index_esm2017_Ra({}),this._settingsFrozen=!1,t instanceof ue?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ue(t.options.projectId)}(t))}get app(){if(!this._app)throw new index_esm2017_Q(Ar.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new index_esm2017_Q(Ar.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new index_esm2017_Ra(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new index_esm2017_z;switch(t.type){case"gapi":const e=t.client;return index_esm2017_U(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new index_esm2017_X(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Qr.get(t);e&&(index_esm2017_O("ComponentProvider","Removing Datastore"),Qr.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class index_esm2017_va{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new index_esm2017_Sa(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new index_esm2017_va(this.firestore,t,this._key)}}class index_esm2017_Va{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new index_esm2017_Va(this.firestore,t,this._query)}}class index_esm2017_Sa extends index_esm2017_Va{constructor(t,e,n){super(t,e,un(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new index_esm2017_va(this.firestore,null,new dt(t))}withConverter(t){return new index_esm2017_Sa(this.firestore,t,this._path)}}function index_esm2017_xa(t,e,...n){if(t=(0,c.m9)(t),1===arguments.length&&(e=st.I()),ga("doc","path",e),t instanceof index_esm2017_ba){const r=ht.fromString(e,...n);return index_esm2017_pa(r),new index_esm2017_va(t,null,new dt(r))}{if(!(t instanceof index_esm2017_va||t instanceof index_esm2017_Sa))throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ht.fromString(e,...n));return index_esm2017_pa(r),new index_esm2017_va(t.firestore,t instanceof index_esm2017_Sa?t.converter:null,new dt(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class index_esm2017_Ma{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new ru(this,"async_queue_retry"),this.Kc=(()=>{const t=su();t&&index_esm2017_O("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()});const t=su();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=su();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise(()=>{});const e=new j;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Oc.push(t),this.jc()))}async jc(){if(0!==this.Oc.length){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(t){if(!Nt(t))throw t;index_esm2017_O("AsyncQueue","Operation failed with retryable error: "+t)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(t){const e=this.Mc.then(()=>(this.Lc=!0,t().catch(t=>{throw this.Bc=t,this.Lc=!1,index_esm2017_F("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),t}).then(t=>(this.Lc=!1,t))));return this.Mc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const r=Lu.createAndSchedule(this,t,e,n,t=>this.Wc(t));return this.$c.push(r),r}Gc(){this.Bc&&index_esm2017_L()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Mc,await t}while(t!==this.Mc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then(()=>{this.$c.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()})}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}function index_esm2017_Oa(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}class Ba extends index_esm2017_ba{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new index_esm2017_Ma,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||index_esm2017_Ka(this),this._firestoreClient.terminate()}}function index_esm2017_Ua(t=(0,s.Mq)()){return(0,s.qX)(t,"firestore").getImmediate()}function index_esm2017_qa(t){return t._firestoreClient||index_esm2017_Ka(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function index_esm2017_Ka(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new oe(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new index_esm2017_Jc(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eh{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new sh(Xt.fromBase64String(t))}catch(t){throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new sh(Xt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return it(this._lat,t._lat)||it(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=/^__.*__$/;class ch{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Hn(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ah(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw index_esm2017_L()}}class hh{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new hh(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.sa(t),r}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return Dh(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(ah(this.Zc)&&Xr.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class lh{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||iu(t)}aa(t,e,n,r=!1){return new hh({Zc:t,methodName:e,ca:n,path:ft.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function fh(t){const e=t._freezeSettings(),n=iu(t._databaseId);return new lh(t._databaseId,!!e.ignoreUndefinedProperties,n)}class _h extends ih{_toFieldTransform(t){if(2!==t.Zc)throw 1===t.Zc?t.oa(`${this._methodName}() can only appear at the top level of your update data`):t.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof _h}}class mh extends ih{_toFieldTransform(t){return new Fn(t.path,new Sn)}isEqual(t){return t instanceof mh}}function Ih(t,e,n,r){const i=t.aa(1,e,n);Ph("Data must be an object, but it was:",i,r);const s=[],o=xe.empty();qt(r,(t,r)=>{const a=Sh(e,t,n);r=(0,c.m9)(r);const u=i.ia(a);if(r instanceof _h)s.push(a);else{const t=Ah(r,u);null!=t&&(s.push(a),o.set(a,t))}});const a=new Jt(s);return new ch(o,a,i.fieldTransforms)}function Th(t,e,n,r,i,s){const o=t.aa(1,e,n),a=[vh(e,r,n)],u=[i];if(s.length%2!=0)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<s.length;t+=2)a.push(vh(e,s[t])),u.push(s[t+1]);const h=[],l=xe.empty();for(let t=a.length-1;t>=0;--t)if(!Ch(h,a[t])){const e=a[t];let n=u[t];n=(0,c.m9)(n);const r=o.ia(e);if(n instanceof _h)h.push(e);else{const t=Ah(n,r);null!=t&&(h.push(e),l.set(e,t))}}const d=new Jt(h);return new ch(l,d,o.fieldTransforms)}function Ah(t,e){if(bh(t=(0,c.m9)(t)))return Ph("Unsupported field value:",e,t),Rh(t,e);if(t instanceof ih)return function(t,e){if(!ah(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Ah(i,e.ra(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,c.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Rn(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ut.fromDate(t);return{timestampValue:xs(e.wt,n)}}if(t instanceof ut){const n=new ut(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:xs(e.wt,n)}}if(t instanceof rh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof sh)return{bytesValue:Ns(e.wt,t._byteString)};if(t instanceof index_esm2017_va){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Os(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${index_esm2017_Ta(t)}`)}(t,e)}function Rh(t,e){const n={};return Kt(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qt(t,(t,r)=>{const i=Ah(r,e.ea(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function bh(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ut||t instanceof rh||t instanceof sh||t instanceof index_esm2017_va||t instanceof ih)}function Ph(t,e,n){if(!bh(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=index_esm2017_Ta(n);throw"an object"===r?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function vh(t,e,n){if((e=(0,c.m9)(e))instanceof eh)return e._internalPath;if("string"==typeof e)return Sh(t,e);throw Dh("Field path arguments must be of type string or ",t,!1,void 0,n)}const Yr=new RegExp("[~\\*/\\[\\]]");function Sh(t,e,n){if(e.search(Yr)>=0)throw Dh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new eh(...e.split("."))._internalPath}catch(r){throw Dh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new index_esm2017_Q(Ar.INVALID_ARGUMENT,a+t+c)}function Ch(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new index_esm2017_va(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Nh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(kh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Nh extends xh{data(){return super.data()}}function kh(t,e){return"string"==typeof e?Sh(t,e):e instanceof eh?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Oh extends xh{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Fh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(kh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Fh extends Oh{data(t={}){return super.data(t)}}class $h{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Mh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Fh(this._firestore,this._userDataWriter,n.key,n,new Mh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new index_esm2017_Q(Ar.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Fh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Mh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new Fh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Mh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(s=(n=n.add(e.doc)).indexOf(e.doc.key)),{type:function Bh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return index_esm2017_L()}}(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Uh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new index_esm2017_Q(Ar.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cl{convertValue(t,e="none"){switch(de(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ee(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ne(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw index_esm2017_L()}}convertObject(t,e){const n={};return qt(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new rh(ee(t.latitude),ee(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=function ie(t){const e=t.mapValue.fields.__previous_value__;return se(e)?ie(e):e}(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(re(t));default:return null}}convertTimestamp(t){const e=te(t);return new ut(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ht.fromString(t);index_esm2017_U(ai(n));const r=new ue(n.get(1),n.get(3)),i=new dt(n.popFirst(5));return r.isEqual(e)||index_esm2017_F(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends cl{constructor(t){super(),this.firestore=t}convertBytes(t){return new sh(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new index_esm2017_va(this.firestore,null,e)}}function Tl(t,e,n,...r){const i=Ea((t=Ea(t,index_esm2017_va)).firestore,Ba),s=fh(i);let o;return Pl(i,[(o="string"==typeof(e=(0,c.m9)(e))||e instanceof eh?Th(s,"updateDoc",t._key,e,n,r):Ih(s,"updateDoc",t._key,e)).toMutation(t._key,Ln.exists(!0))])}function Rl(t,...e){var n,r,i;t=(0,c.m9)(t);let s={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||index_esm2017_Oa(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(index_esm2017_Oa(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,h,l;if(t instanceof index_esm2017_va)h=Ea(t.firestore,Ba),l=un(t._key.path),u={next:n=>{e[o]&&e[o](vl(h,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Ea(t,index_esm2017_Va);h=Ea(n.firestore,Ba),l=n._query;const r=new _l(h);u={next:t=>{e[o]&&e[o](new $h(h,r,n,t))},error:e[o+1],complete:e[o+2]},Uh(t._query)}return function(t,e,n,r){const i=new index_esm2017_jc(u),s=new Xu(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>Wu(await index_esm2017_ra(t),s)),()=>{i.Tc(),t.asyncQueue.enqueueAndForget(async()=>zu(await index_esm2017_ra(t),s))}}(index_esm2017_qa(h),l,a)}function Pl(t,e){return function(t,e){const n=new j;return t.asyncQueue.enqueueAndForget(async()=>(async function index_esm2017_fc(t,e,n){const r=index_esm2017_Bc(t);try{const i=await function(t,e){const n=index_esm2017_K(t),r=ut.now(),i=e.reduce((t,e)=>t.add(e.key),gs());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=cs(),c=gs();return n.Ui.getEntries(t,i).next(t=>{(a=t).forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(i=>{s=i;const o=[];for(const t of e){const e=jn(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Hn(t.key,e,Ne(e.value.mapValue),Ln.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)}).next(e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)})}).then(()=>({batchId:o.batchId,changes:ls(s)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(t,e,n){let r=t.oc[t.currentUser.toKey()];r||(r=new Gt(it)),r=r.insert(e,n),t.oc[t.currentUser.toKey()]=r}(r,i.batchId,n),await index_esm2017_Pc(r,i.changes),await vu(r.remoteStore)}catch(t){const e=Uu(t,"Failed to persist write");n.reject(e)}})(await index_esm2017_ia(t),e,n)),n.promise}(index_esm2017_qa(t),e)}function vl(t,e,n){const r=n.docs.get(e._key),i=new _l(t);return new Oh(t,i,e._key,r,new Mh(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(){return new mh("serverTimestamp")}!function(t,e=!0){!function(t){Ir=t}(s.Jn),(0,s.Xd)(new o.wA("firestore",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new Ba(r,new class index_esm2017_J{constructor(t){this.t=t,this.currentUser=index_esm2017_C.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new j;this.o=(()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new j,t.enqueueRetryable(()=>r(this.currentUser))});const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{index_esm2017_O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(index_esm2017_O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new j)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(index_esm2017_O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(index_esm2017_U("string"==typeof e.accessToken),new index_esm2017_W(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return index_esm2017_U(null===t||"string"==typeof t),new index_esm2017_C(t)}}(t.getProvider("auth-internal")),new class tt{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&index_esm2017_O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,index_esm2017_O("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=(e=>{t.enqueueRetryable(()=>n(e))});const r=t=>{index_esm2017_O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):index_esm2017_O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(index_esm2017_U("string"==typeof t.token),this.p=t.token,new index_esm2017_Z(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i},"PUBLIC")),(0,s.KN)("@firebase/firestore","3.4.14",void 0),(0,s.KN)("@firebase/firestore","3.4.14","esm2017")}()},2238:function(t,e,n){"use strict";n.d(e,{Jn:function(){return g},KN:function(){return registerVersion},Mq:function(){return getApp},Xd:function(){return _registerComponent},ZF:function(){return initializeApp},qX:function(){return _getProvider}});var r=n(8463),i=n(3333),s=n(4444),o=n(4424);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class PlatformLoggerServiceImpl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function isVersionServiceProvider(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}const a="@firebase/app",c="0.7.31",u=new i.Yd("@firebase/app"),h="[DEFAULT]",l={[a]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},d=new Map,f=new Map;function _addComponent(t,e){try{t.container.addComponent(e)}catch(n){u.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _registerComponent(t){const e=t.name;if(f.has(e))return u.debug(`There were multiple attempts to register component ${e}.`),!1;f.set(e,t);for(const e of d.values())_addComponent(e,t);return!0}function _getProvider(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const p={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},m=new s.LL("app","Firebase",p);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FirebaseAppImpl{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw m.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g="9.9.3";function initializeApp(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:h,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!=typeof i||!i)throw m.create("bad-app-name",{appName:String(i)});const o=d.get(i);if(o){if((0,s.vZ)(t,o.options)&&(0,s.vZ)(n,o.config))return o;throw m.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const t of f.values())a.addComponent(t);const c=new FirebaseAppImpl(t,n,a);return d.set(i,c),c}function getApp(t=h){const e=d.get(t);if(!e)throw m.create("no-app",{appName:t});return e}function registerVersion(t,e,n){var i;let s=null!==(i=l[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void u.warn(t.join(" "))}_registerComponent(new r.wA(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const y="firebase-heartbeat-database",v=1,_="firebase-heartbeat-store";let w=null;function getDbPromise(){return w||(w=(0,o.X3)(y,v,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_)}}}).catch(t=>{throw m.create("idb-open",{originalErrorMessage:t.message})})),w}async function writeHeartbeatsToIndexedDB(t,e){var n;try{const r=(await getDbPromise()).transaction(_,"readwrite"),i=r.objectStore(_);return await i.put(e,computeKey(t)),r.done}catch(t){if(t instanceof s.ZR)u.warn(t.message);else{const e=m.create("idb-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message});u.warn(e.message)}}}function computeKey(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=1024,E=2592e6;class HeartbeatServiceImpl{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new HeartbeatStorageImpl(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=getUTCDateString();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some(t=>t.date===e))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=E}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=getUTCDateString(),{heartbeatsToSend:e,unsentEntries:n}=function extractHeartbeatsForHeader(t,e=b){const n=[];let r=t.slice();for(const i of t){const t=n.find(t=>t.agent===i.agent);if(t){if(t.dates.push(i.date),countBytes(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),countBytes(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function getUTCDateString(){return(new Date).toISOString().substring(0,10)}class HeartbeatStorageImpl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){return await async function readHeartbeatsFromIndexedDB(t){var e;try{return(await getDbPromise()).transaction(_).objectStore(_).get(computeKey(t))}catch(t){if(t instanceof s.ZR)u.warn(t.message);else{const n=m.create("idb-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message});u.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function countBytes(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function registerCoreComponents(t){_registerComponent(new r.wA("platform-logger",t=>new PlatformLoggerServiceImpl(t),"PRIVATE")),_registerComponent(new r.wA("heartbeat",t=>new HeartbeatServiceImpl(t),"PRIVATE")),registerVersion(a,c,t),registerVersion(a,c,"esm2017"),registerVersion("fire-js","")}("")},8463:function(t,e,n){"use strict";n.d(e,{H0:function(){return ComponentContainer},wA:function(){return Component}});var r=n(4444);class Component{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Provider{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function isComponentEager(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:function normalizeIdentifierForFactory(t){return t===i?void 0:t}(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ComponentContainer{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Provider(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){"use strict";n.d(e,{Yd:function(){return Logger},in:function(){return i}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class Logger{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},4424:function(t,e,n){"use strict";n.d(e,{X3:function(){return openDB}});const r=(t,e)=>e.some(e=>t instanceof e);let i,s;const o=new WeakMap,a=new WeakMap,c=new WeakMap,u=new WeakMap,h=new WeakMap;let l={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return a.get(t);if("objectStoreNames"===e)return t.objectStoreNames||c.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wrap_idb_value_wrap(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function wrapFunction(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?function getCursorAdvanceMethods(){return s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}().includes(t)?function(...e){return t.apply(d(this),e),wrap_idb_value_wrap(o.get(this))}:function(...e){return wrap_idb_value_wrap(t.apply(d(this),e))}:function(e,...n){const r=t.call(d(this),e,...n);return c.set(r,e.sort?e.sort():[e]),wrap_idb_value_wrap(r)}}function transformCachableValue(t){return"function"==typeof t?wrapFunction(t):(t instanceof IDBTransaction&&function cacheDonePromiseForTransaction(t){if(a.has(t))return;const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});a.set(t,e)}(t),r(t,function getIdbProxyableTypes(){return i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}())?new Proxy(t,l):t)}function wrap_idb_value_wrap(t){if(t instanceof IDBRequest)return function promisifyRequest(t){const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(wrap_idb_value_wrap(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(e=>{e instanceof IDBCursor&&o.set(e,t)}).catch(()=>{}),h.set(e,t),e}(t);if(u.has(t))return u.get(t);const e=transformCachableValue(t);return e!==t&&(u.set(t,e),h.set(e,t)),e}const d=t=>h.get(t);function openDB(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=wrap_idb_value_wrap(o);return r&&o.addEventListener("upgradeneeded",t=>{r(wrap_idb_value_wrap(o.result),t.oldVersion,t.newVersion,wrap_idb_value_wrap(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(t=>{s&&t.addEventListener("close",()=>s()),i&&t.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const f=["get","getKey","getAll","getAllKeys","count"],p=["put","add","delete","clear"],m=new Map;function getMethod(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(m.get(e))return m.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=p.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!f.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return m.set(e,s),s}!function replaceTraps(t){l=t(l)}(t=>({...t,get:(e,n,r)=>getMethod(e,n)||t.get(e,n,r),has:(e,n)=>!!getMethod(e,n)||t.has(e,n)}))}}]);