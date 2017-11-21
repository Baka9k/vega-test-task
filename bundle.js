!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={G:2,k:5}},function(t,e,n){"use strict";var i=n(2),r=function(t){return t&&t.__esModule?t:{default:t}}(i);n(5);var o=document.createElement("canvas"),a=document.getElementById("canvas-container");o.width=a.clientWidth,o.height=a.clientHeight,a.appendChild(o);var s=new r.default(o);s.init(),s.start();var u=document.getElementById("resume"),l=document.getElementById("pause"),c=document.getElementById("reset");u.onclick=function(t){return s.resume()},l.onclick=function(t){return s.pause()},c.onclick=function(t){var e=Number(document.getElementById("gravity").value),n=Number(document.getElementById("restitution").value);s.changePhysics(e,n),s.reset()}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(3),s=i(a),u=n(0),l=i(u),c=function(){function t(e){if(r(this,t),!e)return void console.log("Error in BallSimulation constructor: you should call 'new BallSimulation()' with valid \n      DOM canvas object as argument");this.canvas=e,this.context=e.getContext("2d"),this.width=e.width,this.height=e.height,this.center={x:this.width/2,y:this.height/2},this.paused=!1}return o(t,[{key:"init",value:function(){this.world=new s.default({width:this.width,height:this.height,backgroundColor:"#ffffff",floorColor:"#99CC99",gridCellSize:24,gridLineWidth:.3,gridLineColor:"#99CC99"}),this.world.addBall(this.center.x,100,32,"#000000")}},{key:"reset",value:function(){this.world.reset(),this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"resume",value:function(){this.paused=!1}},{key:"changePhysics",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;l.default.G=t,l.default.k=e}},{key:"update",value:function(){this.world.update()}},{key:"draw",value:function(){this.world.draw(this.context)}},{key:"start",value:function(){function t(){e.paused||(e.update(),e.draw()),requestAnimationFrame(t)}var e=this;this.animation=requestAnimationFrame(t)}}]),t}();e.default=c},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=n(4),a=function(t){return t&&t.__esModule?t:{default:t}}(o),s=function(){function t(e){var n=e.width,r=e.height,o=e.backgroundColor,a=e.floorColor,s=e.gridCellSize,u=e.gridLineWidth,l=e.gridLineColor;i(this,t),this.width=n||640,this.height=r||480,this.gridCellSize=s,this.gridLineWidth=u,this.colors={background:o||"#000000",floor:a||"#cccccc",grid:l},this.init()}return r(t,[{key:"calculateFloorPosition",value:function(){this.floorHeight=this.height/100*10,this.floorHeight+=this.floorHeight%this.gridCellSize,this.floorY=this.height-this.floorHeight}},{key:"init",value:function(){this.calculateFloorPosition()}},{key:"drawBackground",value:function(t){t.fillStyle=this.colors.background,t.fillRect(0,0,this.width,this.height)}},{key:"drawLine",value:function(t,e,n,i,r){t.strokeStyle=this.colors.grid,t.lineWidth=this.gridLineWidth,t.beginPath(),t.moveTo(e,n),t.lineTo(i,r),t.closePath(),t.stroke()}},{key:"drawGrid",value:function(t,e){for(var n=0;n<=this.width;n+=this.gridCellSize)this.drawLine(t,n,0,n,this.height);for(var i=0;i<=this.height;i+=this.gridCellSize)this.drawLine(t,0,i,this.width,i)}},{key:"drawFloor",value:function(t){t.fillStyle=this.colors.floor,t.fillRect(0,this.floorY,this.width,this.floorHeight)}},{key:"addBall",value:function(t,e,n,i){this.ball=new a.default(t,e,n,i)}},{key:"checkBallCollision",value:function(){this.ball.y+this.ball.radius>=this.floorY&&(this.ball.y=this.floorY-this.ball.radius,this.ball.reverse())}},{key:"update",value:function(){this.ball&&(this.ball.update(),this.checkBallCollision())}},{key:"reset",value:function(){this.ball&&this.ball.reset()}},{key:"draw",value:function(t){this.drawBackground(t),this.drawGrid(t),this.drawFloor(t),this.ball&&this.ball.draw(t)}}]),t}();e.default=s},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=n(0),a=function(t){return t&&t.__esModule?t:{default:t}}(o),s=function(){function t(e,n,r,o){i(this,t),this.radius=r||30,this.color=o||"#000000",this.x=e||0,this.y=n||0,this.initialY=n||0,this.speed=0}return r(t,[{key:"update",value:function(){this.speed+=a.default.G,this.y+=this.speed}},{key:"reverse",value:function(){this.speed=-this.speed,this.speed-=Math.sign(this.speed)*a.default.k}},{key:"reset",value:function(){this.y=this.initialY,this.speed=0}},{key:"draw",value:function(t){t.fillStyle=this.color,t.beginPath(),t.arc(this.x,this.y,this.radius,this.radius,2*Math.PI,!0),t.closePath(),t.fill()}}]),t}();e.default=s},function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0};r.transform=void 0;n(8)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){e=t.exports=n(7)(void 0),e.push([t.i,'* {\n  box-sizing: border-box; }\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; }\n\n#main {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n#canvas-container {\n  width: 100%;\n  height: 100%; }\n\n#controls {\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 5px;\n  padding: 15px; }\n  #controls .input-container {\n    padding: 4px 2px; }\n  #controls #buttons {\n    padding-top: 6px; }\n    #controls #buttons button {\n      padding: 10px 4px;\n      border-radius: 5px;\n      outline: none; }\n    #controls #buttons button + button {\n      margin-left: 4px; }\n',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=i(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function i(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=p[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(c(i.parts[o],e))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(c(i.parts[o],e));p[i.id]={id:i.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],a=e.base?o[0]+e.base:o[0],s=o[1],u=o[2],l=o[3],c={css:s,media:u,sourceMap:l};i[a]?i[a].parts.push(c):n.push(i[a]={id:a,parts:[c]})}return n}function o(t,e){var n=b(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=m[m.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),m.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=b(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,r)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),o(t,e),e}function u(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),o(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function c(t,e){var n,i,r,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var l=y++;n=g||(g=s(e)),i=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(e),i=h.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),i=d.bind(null,n),r=function(){a(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}function f(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=k(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function d(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function h(t,e,n){var i=n.css,r=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=w(i)),r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var p={},v=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),b=function(t){var e={};return function(n){if(void 0===e[n]){var i=t.call(this,n);if(i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[n]=i}return e[n]}}(function(t){return document.querySelector(t)}),g=null,y=0,m=[],w=n(9);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return i(n,e),function(t){for(var o=[],a=0;a<n.length;a++){var s=n[a],u=p[s.id];u.refs--,o.push(u)}if(t){i(r(t,e),e)}for(var a=0;a<o.length;a++){var u=o[a];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete p[u.id]}}}};var k=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var o;return o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}}]);