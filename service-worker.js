"use strict";var precacheConfig=[["/pgrcarlson/index.html","e771a257ccf3fee7c31e748e78ee390d"],["/pgrcarlson/static/css/main.50e74fb1.css","11d41c0c4cb96bc6513e95d9047f9089"],["/pgrcarlson/static/js/main.285e1e5a.js","1a5eb33600fdf1d23f198603696f5e1c"],["/pgrcarlson/static/media/goku1.ad5df2c5.jpg","ad5df2c55bdfac443a13b24bf7f51f37"],["/pgrcarlson/static/media/goku10.5ca86c73.png","5ca86c7304c2ce6c1b1777fadfa2339f"],["/pgrcarlson/static/media/goku11.5be6c547.jpg","5be6c547f666a884ee82a99bcec9c5f4"],["/pgrcarlson/static/media/goku12.fa85d22e.jpg","fa85d22e1097a39cdc33573b27466832"],["/pgrcarlson/static/media/goku2.cb2386d9.jpeg","cb2386d902f5d58b07eb1373ee8ad198"],["/pgrcarlson/static/media/goku3.f904097c.png","f904097c8ed0bd96609fb74afb83f464"],["/pgrcarlson/static/media/goku4.4a4f0b74.jpg","4a4f0b7459f53a1105732c1f7eb093d6"],["/pgrcarlson/static/media/goku5.6f4d716a.jpg","6f4d716ab1e78da746fe5010d1455998"],["/pgrcarlson/static/media/goku6.fa54ab4c.jpg","fa54ab4cbbf93ebef6642cf4581fd832"],["/pgrcarlson/static/media/goku7.7efa253d.jpg","7efa253d9099b321b546a0b1a5a953e1"],["/pgrcarlson/static/media/goku8.39f3e5e4.jpg","39f3e5e496d0becf5ed51a3d9a5d32e3"],["/pgrcarlson/static/media/goku9.4d4a70aa.jpg","4d4a70aadf58ab211282bf5216b67fa5"],["/pgrcarlson/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/pgrcarlson/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});