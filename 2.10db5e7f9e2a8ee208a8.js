(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(e,t,n){"use strict";n.r(t);var r=n(22),i=n(12);n(36);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=n(33);n(34);window.memory=i.n;var c=n(53),s=n(54),l=function(e){var t,n=e.canvas,r=e.universe,o=e.isSnapshot,l=void 0!==o&&o,u=e.gl;t=a(u?{gl:u,attributes:{preserveDrawingBuffer:l}}:{canvas:n,attributes:{preserveDrawingBuffer:l}});var f=r.width(),d=r.height(),p=r.cells(),m=new Uint8Array(i.n.buffer,p,f*d*4),h=t.texture({width:f,height:d,data:m}),v=t({blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1},equation:{rgb:"add",alpha:"add"},color:[0,0,0,0]},frag:c,uniforms:{t:function(e){return e.tick},skyTime:function(){return window.skyTime||0},dataTexture:function(){return p=r.cells(),m=new Uint8Array(i.n.buffer,p,f*d*4),h({width:f,height:d,data:m})},resolution:function(e){return[e.viewportWidth,e.viewportHeight]},dpi:4,isSnapshot:l},vert:s,attributes:{position:[[-1,4],[-1,-1],[4,-1]]},count:3});return{regl:t,draw:function(){t.poll(),v()}}};function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f,d=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.fps=document.getElementById("fps"),this.frames=[],this.lastFrameTimeStamp=performance.now()}var t,n,r;return t=e,(n=[{key:"render",value:function(){var e=performance.now(),t=e-this.lastFrameTimeStamp;this.lastFrameTimeStamp=e;var n=1/t*1e3;this.frames.push(n),this.frames.length>30&&this.frames.shift();for(var r=1/0,i=-1/0,o=0,a=0;a<this.frames.length;a++)o+=this.frames[a],r=Math.min(this.frames[a],r),i=Math.max(this.frames[a],i);var c=o/this.frames.length;this.fps.textContent="FPS:".concat(Math.round(c))}}])&&u(t.prototype,n),r&&u(t,r),e}());function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=document.getElementById("sand-canvas"),v=0;var y=function(e,t){return Math.sqrt(Math.pow(e.clientX-t.clientX,2)+Math.pow(e.clientY-t.clientY,2),2)},g=function(e){var t=function(e){return Math.sqrt(Math.pow(e.clientX,2)+Math.pow(e.clientY,2),2)}(e);return{clientX:e.clientX/t,clientY:e.clientY/t}},w=function(e,t){return{clientX:e.clientX*t,clientY:e.clientY*t}},b=function(e,t){return{clientX:e.clientX+t.clientX,clientY:e.clientY+t.clientY}},x=function(e,t){return{clientX:e.clientX-t.clientX,clientY:e.clientY-t.clientY}},E=!1,k=null,_=null;function S(e){clearInterval(_),_=window.setInterval((function(){return I(e)}),100);var t={clientX:e.clientX,clientY:e.clientY};if(E){var n=j[window.UI.state.selectedElement]||2,i=0;if(I(t),k&&window.UI.state.selectedElement!=r.f.Fish&&window.UI.state.selectedElement!=r.f.GoldFish)for(;y(t,k)>n/3;){var o=y(t,k);if(t=b(t,w(g(x(k,e)),Math.min(n/3,o))),++i>1e3)break;I(t)}k=e}}h.addEventListener("mousedown",(function(e){e.preventDefault(),he.push_undo(),E=!0,clearInterval(_),_=window.setInterval((function(){return I(e)}),100),I(e),k=e})),document.body.addEventListener("mouseup",(function(e){clearInterval(_),E&&(e.preventDefault(),k=null,E=!1)})),h.addEventListener("mousemove",(function(e){clearInterval(_),S(e)})),h.addEventListener("mouseleave",(function(e){clearInterval(_),k=null})),h.addEventListener("touchstart",(function(e){e.cancelable&&e.preventDefault();Array.from(e.touches);he.push_undo(),E=!0,k=e,O(e)})),h.addEventListener("touchend",(function(e){e.cancelable&&e.preventDefault(),k=null,E=!1,clearInterval(_)})),h.addEventListener("touchmove",(function(e){window.paused||e.cancelable&&e.preventDefault(),clearInterval(_),O(e)}));var O=function(e){var t=Array.from(e.touches);1==t.length?S(t[0]):t.forEach(I)},j=(m(f={},r.f.Water,13),m(f,r.f.Sand,8),m(f,r.f.Empty,7),m(f,r.f.Algae,2),m(f,r.f.Fish,2),m(f,r.f.GoldFish,2),m(f,r.f.Daphnia,2),m(f,r.f.Zoop,2),m(f,r.f.Grass,2),m(f,r.f.Bacteria,2),f);var I=function(e){if(E&&(window.UI.state.selectedElement!=r.f.Fish&&window.UI.state.selectedElement!=r.f.GoldFish||Date.now()-v>1e3&&(v=Date.now(),1))){var t=p(function(e){var t=h.getBoundingClientRect(),n=h.width/(ye*Math.ceil(window.devicePixelRatio))/t.width,r=h.height/(ye*Math.ceil(window.devicePixelRatio))/t.height,i=(e.clientX-t.left)*n,o=(e.clientY-t.top)*r;return[Math.min(Math.floor(i),ge-1),Math.min(Math.floor(o),we-1)]}(e),2),n=t[0],i=t[1];if(!(window.UI.state.selectedElement<0)){var o=j[window.UI.state.selectedElement]||3;he.paint(n,i,o,window.UI.state.selectedElement)}}},C=(n(55),n(2)),z=n.n(C),A=n(57),D=n.n(A),M=n(10),P=n(21),N=function(){return z.a.createElement("div",{className:"welcome-scrim"},z.a.createElement("div",{className:"Info window"},z.a.createElement("div",{className:"title-bar"},z.a.createElement("div",{className:"title-bar-text"},"Information"),z.a.createElement("div",{className:"title-bar-controls"},z.a.createElement(M.b,{to:"/"},z.a.createElement("button",{"aria-label":"Minimize"})),z.a.createElement("button",{"aria-label":"Maximize"}),z.a.createElement(M.b,{to:"/"},z.a.createElement("button",{"aria-label":"Close"}," ")))),z.a.createElement("div",{className:"window-body "})))},R=function(e){var t=e.close,n=e.children;return z.a.createElement("div",{className:"welcome-scrim"},z.a.createElement("div",{id:"welcome"},n,z.a.createElement(M.b,{to:"/",className:"x",onClick:t},z.a.createElement("button",null," x"))))};function L(e,t,n){return(L=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&W(i,n.prototype),i}).apply(null,arguments)}function T(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t,n){return t&&q(e.prototype,t),n&&q(e,n),e}function G(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?Y(e):t}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}console.log(r.g),console.log(r.e),console.log(r.b);var K=[{key:r.g.None,symbol:"ⵔ"},{key:r.g.Horizontal,symbol:"🜕"},{key:r.g.Vertical,symbol:"🜔"},{key:r.g.Quad,symbol:"🜨"}],J=[{key:r.e.Empty,symbol:"×"},{key:r.e.Anything,symbol:" "}],Q=[{key:r.b.Empty,symbol:"×"},{key:r.b.Nop,symbol:" "},{key:r.b.Me,symbol:"☉"}];function V(e,t){return 3*t+e}var Z=function(e){function t(e){return U(this,t),G(this,X(t).call(this,e))}return H(t,e),B(t,[{key:"gridSquare",value:function(e,t,n){var r=this,i=this.props,o=i.grid,a=i.options,c=o[V(e,t)],s=a[c].symbol;return z.a.createElement("g",{key:"".concat(e,"-").concat(t),transform:"translate(".concat(55*e+15,",").concat(55*t+15,")"),className:n?"disabled":"",onClick:function(){n||(o[V(e,t)]=(c+1)%r.props.options.length,(0,r.props.setGrid)(o))}},z.a.createElement("rect",{x:0,y:0,width:"50",height:"50",className:"mat-box",style:{fill:" "==s?"#c0c0c0":"",strokeWidth:1}}),z.a.createElement("text",{x:25,y:30,style:{fontSize:"30px"}},n?"☉":s))}},{key:"render",value:function(){var e=this.props.isSelector;return z.a.createElement("g",null,[this.gridSquare(0,0),this.gridSquare(0,1),this.gridSquare(0,2),this.gridSquare(1,0),this.gridSquare(1,1,e),this.gridSquare(1,2),this.gridSquare(2,0),this.gridSquare(2,1),this.gridSquare(2,2)])}}]),t}(z.a.Component),$=function(e){function t(e){var n;return U(this,t),(n=G(this,X(t).call(this,e))).state={selectedElement:e.selectedElement,rule:t.getRule(e.selectedElement)},window.Editor=Y(n),n}return H(t,e),B(t,[{key:"setRule",value:function(){var e=this.state.rule,t=e.selector,n=e.effector,i=e.symmetry,o=L(r.d,T(t.map((function(e){return J[e].key})))),a=L(r.a,T(n.map((function(e){return Q[e].key})))),c=new r.c(K[i].key,o,a);window.u.set_rule(c,this.props.selectedElement)}},{key:"render",value:function(){var e=this,t=this.state.rule,n=t.selector,r=t.effector,i=t.symmetry;return z.a.createElement("div",{className:"MatrixMenu"},z.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-10 0 410 200",width:"100%"},z.a.createElement("circle",{cx:12,cy:94,r:"16",className:"mat-circle",style:{strokeWidth:1,fill:"rgba(255,255,255,0.9)"}}),z.a.createElement("text",{x:"12",y:"98",style:{fontSize:"30px"},onClick:function(){var t=e.state.rule;console.log(i,K.length),t.symmetry=(i+1)%K.length,console.log(t.symmetry),e.setState({rule:t},e.setRule)}},K[i].symbol),z.a.createElement("g",{transform:"translate(20,0)"},n&&z.a.createElement(Z,{options:J,grid:n,isSelector:!0,setGrid:function(t){var n=e.state.rule;n.selector=t,e.setState({rule:n},e.setRule)}})),z.a.createElement("g",{transform:"translate(195,80)"},z.a.createElement("polygon",{fill:"white",stroke:"black",points:"15,0, 25,15 15,30, 15,20, 8,20, 8,10, 15,10 "})),z.a.createElement("g",{transform:"translate(210,0)"},r&&z.a.createElement(Z,{options:Q,grid:r,setGrid:function(t){var n=e.state.rule;n.effector=t,e.setState({rule:n},e.setRule)}}))))}}],[{key:"getRule",value:function(e){var t=window.u.rule(e);return{selector:Array.from(new Uint8Array(memory.buffer,t.selector.grid(),9)),effector:Array.from(new Uint8Array(memory.buffer,t.effector.grid(),9)),symmetry:t.symmetry()}}},{key:"getDerivedStateFromProps",value:function(e,n){var r=e.selectedElement;return r!=n.selectedElement&&r<3?{selectedElement:r,rule:t.getRule(r)}:null}}]),t}(z.a.Component);function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function re(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ie(e,t){return(ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(n,!0).forEach((function(t){ce(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}window.species=r.f;var se=function(){var e=document.createElement("canvas"),t=Object.values(r.f).filter((function(e){return!isNaN(parseFloat(e))})),n=Math.max.apply(Math,o(t))+1,i=r.h.new(n,1);e.width=n,e.height=3,i.reset(),t.forEach((function(e){return i.paint(e,0,2,e)})),i.paint(t.Empty,0,2,t.Empty),(0,l({universe:i,canvas:e,isSnapshot:!0}).draw)();var a=e.getContext("webgl"),c=new Uint8Array(4*n);a.readPixels(0,0,n,1,a.RGBA,a.UNSIGNED_BYTE,c);var s={};return t.forEach((function(e){var t=4*e,n="rgba(".concat(c[t],",").concat(c[t+1],", ").concat(c[t+2],", 1.0)");s[e]=n})),s}();window.pallette=se;var le=function(e){var t=e.onClick,n=e.className,r=e.style,i=e.children;return z.a.createElement("button",{onClick:t,className:n,style:ae({},r)},i)},ue=function(e){function t(e){var n,i,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,n=!(o=ne(t).call(this,e))||"object"!==ee(o)&&"function"!=typeof o?re(i):o;localStorage.getItem("tutorialProgress");return n.state={submissionMenuOpen:!1,paused:!1,ff:!1,submitting:!1,size:1,dataURL:null,currentSubmission:null,selectedElement:r.f.Rule1},window.UI=re(n),window.setTimeout((function(){}),1e4),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ie(e,t)}(t,e),n=t,(o=[{key:"componentDidUpdate",value:function(e){}},{key:"togglePause",value:function(){window.paused=!this.state.paused,this.setState({paused:!this.state.paused})}},{key:"toggleFF",value:function(){window.ff=!this.state.ff,this.setState({ff:!this.state.ff})}},{key:"play",value:function(){window.paused=!1,this.setState({paused:!1})}},{key:"pause",value:function(){window.paused=!0,this.setState({paused:!0})}},{key:"setSize",value:function(e,t){e.preventDefault(),this.setState({size:t})}},{key:"reset",value:function(){this.play(),this.setState({currentSubmission:null}),Se()}},{key:"closeMenu",value:function(){this.play(),this.setState({dataURL:null})}},{key:"upload",value:function(){console.log("saving");var e=new Uint8Array(i.n.buffer,he.cells(),ge*we*4),t=document.createElement("canvas"),n=t.getContext("2d"),r=n.createImageData(ge,we);t.height=we,t.width=ge;for(var o=0;o<ge*we*4;o++)r.data[o]=o%4==3?255:e[o];n.putImageData(r,0,0);var a=t.toDataURL("image/png"),c=JSON.stringify(a);try{localStorage.setItem("cell_data",c),localStorage.setItem("time",window.t)}catch(e){console.log("store failed")}}},{key:"currentDateString",value:function(){var e=new Date;return"".concat(e.getMonth(),"-").concat(e.getDate())}},{key:"load",value:function(){var e=this;console.log("loading");var t=JSON.parse(localStorage.getItem("cell_data"));if(!t)return console.log("no save"),void window.setInterval((function(){return e.upload()}),1e4);var n=document.createElement("canvas");n.width=ge,n.height=we;var r=n.getContext("2d"),o=new Image;o.src=t,o.onload=function(){r.drawImage(o,0,0);for(var t=r.getImageData(0,0,n.width,n.height),a=new Uint8Array(i.n.buffer,he.cells(),ge*we*4),c=0;c<ge*we*4;c++)a[c]=t.data[c];window.setInterval((function(){return e.upload()}),1e4)}}},{key:"render",value:function(){var e=this,t=this.state,n=(t.ff,t.selectedElement),i=t.currentSubmission,o=t.paused,a=(i&&i.id&&"#".concat(i.id),Object.keys(r.f).filter((function(e){return e.length>2})));return z.a.createElement("div",{className:"window fade ultima",id:"HUD"},z.a.createElement("div",{className:"window-body hud-body"},z.a.createElement("div",{id:"hud-buttons"},z.a.createElement(le,{onClick:function(){return e.togglePause()},className:o?"selected":""},o?z.a.createElement("svg",{className:"bsvg",height:"20",width:"20",id:"d",viewBox:"-50 -50 400 400"},z.a.createElement("polygon",{id:"play",points:"0,0 , 300,150 0,300"})):z.a.createElement("svg",{className:"bsvg",height:"20",width:"20",id:"d",viewBox:"-50 -50 400 400"},z.a.createElement("polygon",{id:"bar2",points:"0,0 110,0 110,300 0,300"}),z.a.createElement("polygon",{id:"bar1",points:"190,0 300,0 300,300 190,300"}))),z.a.createElement(le,{onClick:function(){return e.reset()}},"↻"),a.map((function(t){return function(e,t,n){var i=r.f[e],o=se[i],a=i==t,c=e;return"Empty"==e&&(c="×"),"Rule1"==e&&(c="☉"),"Rule2"==e&&(c="☽"),"Rule3"==e&&(c="🝆"),z.a.createElement("button",{className:a?"selected ".concat(e):e,key:e,onClick:function(){n(i)},style:{background:"inherit",backgroundColor:o,borderColor:o,filter:a||"saturate(0.4) "}},"  ",c,"  ")}(t,n,(function(t){return e.setState({selectedElement:t})}))})),z.a.createElement("img",{style:{width:"100%"},src:"http://community.fortunecity.ws/tinpan/motorhead/13/images/barb_wire.gif"}),z.a.createElement($,{selectedElement:n}),this.state.dataURL&&z.a.createElement(R,{close:function(){return e.closeMenu()}},z.a.createElement("img",{src:this.state.dataURL,className:"submissionImg"}),z.a.createElement("div",{style:{display:"flex"}})),z.a.createElement("img",{style:{width:"100%"},src:"http://community.fortunecity.ws/tinpan/motorhead/13/images/barb_wire.gif"}),z.a.createElement("img",{style:{width:"27%",objectFit:"contain"},src:"https://web.archive.org/web/20091022135502im_/http://geocities.com/witchzcat/bookflip.gif"}),z.a.createElement("img",{style:{width:"24%",objectFit:"contain"},src:"https://web.archive.org/web/20091027090546/http://geocities.com/traditionalwitchcraft/pentagramanimation.gif"}),z.a.createElement("img",{style:{width:"14%",objectFit:"contain"},src:"https://web.archive.org/web/20090729083846/http://www.geocities.com/silver_alchemy/torch2.gif"}),z.a.createElement("img",{style:{width:"34%",objectFit:"contain"},src:"https://web.archive.org/web/20090902061527/http://geocities.com/sunsetstrip/hall/6613/talkskull.gig.gif"}))))}}])&&te(n.prototype,o),a&&te(n,a),t}(z.a.Component);function fe(){return z.a.createElement(M.a,null,z.a.createElement(P.a,{path:"/",component:ue}),z.a.createElement(P.a,{exact:!0,path:"/info/",component:N}))}n.d(t,"canvas",(function(){return be})),n.d(t,"width",(function(){return ge})),n.d(t,"height",(function(){return we})),n.d(t,"ratio",(function(){return ye})),n.d(t,"universe",(function(){return he})),n.d(t,"reset",(function(){return Se}));var de=150,pe=75,me=144,he=r.h.new(de,de);function ve(){he.paint(pe,pe,me+2,r.f.Rule1),he.paint(pe,pe,me-2,r.f.Empty)}window.u=he,window.universe=he,D.a.render(z.a.createElement(fe,null),document.getElementById("ui")),ve();var ye=2,ge=de,we=de,be=document.getElementById("sand-canvas");be.height=de*ye*Math.ceil(window.devicePixelRatio),be.width=de*ye*Math.ceil(window.devicePixelRatio);var xe=document.getElementById("HUD"),Ee=function(){var e=window.innerWidth,t="",n="";if(e-150>window.innerHeight-50){t="height: ".concat(window.innerHeight,"px; margin:3px"),window.innerHeight;var r=e-window.innerHeight-12;n="width: ".concat(r,"px; margin: 2px;")}else e,t="width: ".concat(e,"px; ");xe.style=n,be.style=t};Ee(),window.addEventListener("deviceorientation",Ee,!0),window.addEventListener("resize",Ee);var ke=l({canvas:be,universe:he}),_e=parseInt(localStorage.getItem("time"),10)||0;function Se(){console.log("reseting"),localStorage.setItem("cell_data",null),he.reset(),ve()}!function e(){for(var t=performance.now(),n=window.ff?100:1,r=0;r<n;r++){if(window.paused||(d.render(),he.tick()),performance.now()-t>16)break}window.t=_e,ke.draw(),requestAnimationFrame(e)}(),window.UI.load()},12:function(e,t,n){"use strict";var r=n.w[e.i];e.exports=r;n(22);r.D()},22:function(e,t,n){"use strict";(function(e){n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return p})),n.d(t,"e",(function(){return m})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return g})),n.d(t,"h",(function(){return w})),n.d(t,"i",(function(){return b})),n.d(t,"j",(function(){return x}));var r=n(12);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}var c=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();var s=null;function l(e,t){return c.decode((null!==s&&s.buffer===r.n.buffer||(s=new Uint8Array(r.n.buffer)),s).subarray(e,e+t))}function u(e,t){if(!(e instanceof t))throw new Error("expected instance of ".concat(t.name));return e.ptr}var f,d=Object.freeze({Empty:10,10:"Empty",Rule1:0,0:"Rule1",Rule2:1,1:"Rule2",Rule3:2,2:"Rule3"}),p=Object.freeze({None:0,0:"None",Horizontal:1,1:"Horizontal",Vertical:2,2:"Vertical",Quad:3,3:"Quad"}),m=Object.freeze({Empty:0,0:"Empty",Anything:1,1:"Anything",Full:2,2:"Full"}),h=Object.freeze({Empty:0,0:"Empty",Nop:1,1:"Nop",Me:2,2:"Me"}),v=function(){function e(t,n,o,a,c,s,l,u,f){i(this,e);var d=r.m(t,n,o,a,c,s,l,u,f);return e.__wrap(d)}return a(e,[{key:"free",value:function(){var e=this.ptr;this.ptr=0,r.b(e)}}],[{key:"__wrap",value:function(t){var n=Object.create(e.prototype);return n.ptr=t,n}}]),a(e,[{key:"grid",value:function(){return r.l(this.ptr)}}]),e}(),y=function(){function e(t,n,o){i(this,e),u(n,g);var a=n.ptr;n.ptr=0,u(o,v);var c=o.ptr;o.ptr=0;var s=r.o(t,a,c);return e.__wrap(s)}return a(e,[{key:"free",value:function(){var e=this.ptr;this.ptr=0,r.f(e)}},{key:"symmetry",get:function(){return r.e(this.ptr)>>>0},set:function(e){r.j(this.ptr,e)}},{key:"selector",get:function(){var e=r.d(this.ptr);return g.__wrap(e)},set:function(e){u(e,g);var t=e.ptr;e.ptr=0,r.i(this.ptr,t)}},{key:"effector",get:function(){var e=r.c(this.ptr);return v.__wrap(e)},set:function(e){u(e,v);var t=e.ptr;e.ptr=0,r.h(this.ptr,t)}}],[{key:"__wrap",value:function(t){var n=Object.create(e.prototype);return n.ptr=t,n}}]),a(e,[{key:"symmetry",value:function(){return r.e(this.ptr)>>>0}}]),e}(),g=function(){function e(t,n,o,a,c,s,l,u,f){i(this,e);var d=r.m(t,n,o,a,c,s,l,u,f);return e.__wrap(d)}return a(e,[{key:"free",value:function(){var e=this.ptr;this.ptr=0,r.g(e)}}],[{key:"__wrap",value:function(t){var n=Object.create(e.prototype);return n.ptr=t,n}}]),a(e,[{key:"grid",value:function(){return r.l(this.ptr)}}]),e}(),w=function(){function e(){i(this,e)}return a(e,[{key:"free",value:function(){var e=this.ptr;this.ptr=0,r.k(e)}},{key:"reset",value:function(){r.x(this.ptr)}},{key:"tick",value:function(){r.B(this.ptr)}},{key:"rule",value:function(e){var t=r.y(this.ptr,e);return y.__wrap(t)}},{key:"set_rule",value:function(e,t){u(e,y),r.z(this.ptr,e.ptr,t)}},{key:"width",value:function(){return r.C(this.ptr)}},{key:"height",value:function(){return r.r(this.ptr)}},{key:"cells",value:function(){return r.p(this.ptr)}},{key:"paint",value:function(e,t,n,i){r.u(this.ptr,e,t,n,i)}},{key:"push_undo",value:function(){r.w(this.ptr)}},{key:"pop_undo",value:function(){r.v(this.ptr)}},{key:"flush_undos",value:function(){r.q(this.ptr)}},{key:"set_time",value:function(e){r.A(this.ptr,e)}},{key:"inc_time",value:function(){r.s(this.ptr)}}],[{key:"__wrap",value:function(t){var n=Object.create(e.prototype);return n.ptr=t,n}},{key:"new",value:function(t,n){var i=r.t(t,n);return e.__wrap(i)}}]),e}(),b="function"==typeof Math.random?Math.random:(f="Math.random",function(){throw new Error("".concat(f," is not defined"))}),x=function(e,t){throw new Error(l(e,t))}}).call(this,n(35)(e))},41:function(e,t){},43:function(e,t){},53:function(e,t){e.exports="precision highp float;\n#define GLSLIFY 1\nuniform float t;\nuniform float skyTime;\n\nuniform float dpi;\nuniform vec2 resolution;\nuniform bool isSnapshot;\nuniform sampler2D backBuffer;\nuniform sampler2D dataTexture;\n\nvarying vec2 uv;\nconst float PI2 = 2. * 3.14159265358979323846;\n\n// clang-format off\nvec3 hsv2rgb(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_0(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_0(vec4 x) {\n     return mod289_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_0(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_0 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_0;\n  vec3 i1 = min( g_0.xyz, l.zxy );\n  vec3 i2 = max( g_0.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_0(i);\n  vec4 p = permute_0( permute_0( permute_0(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289_1(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute_1(vec3 x) {\n  return mod289_1(((x*34.0)+1.0)*x);\n}\n\nfloat snoise_1(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289_1(i); // Avoid truncation effects in permutation\n  vec3 p = permute_1( permute_1( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\n// clang-format on\n\nvoid main() {\n  vec2 guv = uv;\n  vec3 color;\n  vec2 grid = floor(guv * (resolution / (dpi * 2.)));\n\n  grid = floor(guv * (resolution / dpi));\n\n  float noise = snoise_0(vec3(grid, t * 0.05));\n  vec2 noise_2d = vec2(floor(0.5 + noise),\n                       floor(0.5 + snoise_0(vec3(grid, (t + 20.) * 0.05))));\n\n  vec2 textCoord = (guv * vec2(0.5, -0.5)) + vec2(0.5);\n  vec2 sampleCoord = textCoord + (noise_2d / (resolution / 2.));\n\n  vec4 data = texture2D(dataTexture, textCoord);\n\n  int type = int((data.r * 255.) + 0.1);\n  float energy = data.g;\n  float age = data.b;\n\n  float hue = 0.0;\n  float saturation = 0.6;\n  float lightness = 0.3 + energy * 0.5;\n  float a = 1.0;\n  float brightness = 0.0;\n\n  if (type == 10) { // Air\n\n    hue = 0.0;\n    saturation = 0.1;\n    lightness = 0.1;\n    a = 0.0;\n    if (isSnapshot) {\n      saturation = 0.05;\n      lightness = 1.01;\n      a = 1.0;\n    }\n\n  } else if (type == 11) { // Glass\n    hue = 0.1;\n    saturation = 0.2;\n    lightness = 1.0;\n  } else if (type == 2) { // Sand\n    hue = 0.1;\n    saturation = 0.4 + (age * 0.3);\n    lightness = 1.0 - energy * 0.5;\n\n  } else if (type == 1) { // Water\n    hue = 0.58;\n    saturation = 0.6;\n    lightness = 0.5 + energy * 0.25 + noise * 0.1;\n    a = 0.4;\n    if (isSnapshot) {\n      a = 1.0;\n    }\n  } else if (type == 0) { // Plant\n    hue = 0.4;\n    saturation = 0.4;\n\n  } else if (type == 6) { // Zoop\n    hue = 0.9;\n    lightness += 0.7;\n  } else if (type == 7) { // Fish\n    hue = 0.0;\n    lightness += 0.4;\n  } else if (type == 8) { // Bacteria\n    hue = 0.66;\n    saturation += 0.2;\n    lightness += 0.2;\n    a = 0.4;\n    if (isSnapshot) {\n      // lightness += 0.8;\n      saturation -= 0.2;\n\n      a = 1.0;\n    }\n  } else if (type == 9) { // ???\n    hue = 0.6;\n    saturation = 0.4;\n    lightness = 0.7 + data.g * 0.5;\n  } else if (type == 10) { // Waste\n    hue = 0.9;\n    lightness -= 0.2;\n    saturation = 0.4;\n    a = 0.8;\n  } else if (type == 11) { // Grass\n    hue = 0.4;\n    saturation = 0.4;\n  } else if (type == 12) { // Stone\n    hue = -0.4 + (data.g * 0.5);\n    saturation = 0.1;\n  } else if (type == 13) { // Wood\n    hue = (data.g * 0.1);\n    saturation = 0.3;\n    lightness = 0.3 + data.g * 0.3;\n  } else if (type == 14) { // Egg\n    hue = 0.9;\n    saturation = age / 3.;\n    lightness = 1.0;\n    a = 0.8;\n  } else if (type == 15) { // Tail\n    hue += fract(age * 1.9 * 255. / 8.) * 0.2;\n    lightness += 0.4;\n    saturation -= (fract(age * 1.9 * 255. / 8.) - 0.1) * 0.7;\n\n    // saturation += fract(age * 255.*6.);\n  } else if (type == 16) { // bubble\n\n    hue = 0.0;\n    saturation = 0.1;\n    lightness = 0.1;\n    a = 0.0;\n    if (isSnapshot) {\n      saturation = 0.05;\n      lightness = 1.01;\n      a = 1.0;\n    }\n  } else if (type == 17) { // biofilm\n    hue = 0.48;\n    saturation = 0.6;\n    lightness = 0.5 + energy * 0.25 + noise * 0.1;\n    a = 0.4;\n    if (isSnapshot) {\n      a = 1.0;\n    }\n  } else if (type == 18) { // goldfish\n    hue = 0.1;\n    lightness += 0.3;\n    saturation = 0.9;\n  } else if (type == 19) { // goldfishtail\n    hue = 0.1;\n    hue += fract(age * 1.9 * 255. / 9.) * 0.1;\n    lightness += 0.6;\n    saturation = 0.9;\n    saturation -= (fract(age * 1.9 * 255. / 7.) - 0.1) * 0.6;\n  } else if (type == 20) { // plastic\n    hue = 0.1;\n    lightness += 0.5;\n    saturation = 0.1;\n  }\n  lightness *= 0.85 + cos(skyTime * PI2) * 0.2;\n\n  if (isSnapshot == false) {\n    lightness *= (0.975 + snoise_1(floor(guv * resolution / dpi)) * 0.025);\n  }\n  saturation = min(saturation, 1.0);\n  lightness = min(lightness, 1.0);\n  color = hsv2rgb(vec3(hue, saturation, lightness));\n\n  gl_FragColor = vec4(color, a);\n  // gl_FragColor = getColor(uv);\n}"},54:function(e,t){e.exports='\n// boring "pass-through" vertex shader\nprecision mediump float;\n#define GLSLIFY 1\nattribute vec2 position;\nvarying vec2 uv;\nvoid main() {\n  uv = position;\n  gl_Position = vec4(position, 0, 1);\n}'},55:function(e,t){var n=document.getElementById("background"),r=window.setTimeout((function(){window.UI.state.tutorialProgress>3&&document.body.classList.add("faded")}),3e4),i=function(e){window.clearTimeout(r),document.body.classList.remove("faded"),r=window.setTimeout((function(){window.UI.state.tutorialProgress>3&&document.body.classList.add("faded")}),3e4)};document.body.addEventListener("mousemove",i),document.body.addEventListener("touchstart",i),n.addEventListener("touchmove",(function(e){window.paused||e.cancelable&&e.preventDefault()}))}}]);
//# sourceMappingURL=2.10db5e7f9e2a8ee208a8.js.map