(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(e,t,n){"use strict";n.r(t);var r=n(29),a=n(28),i=n.n(a),o=n(14),c=(n(47),n(44));n(45);window.memory=o.s;var s=n(64),l=n(65),u=function(e){var t,n=e.canvas,r=e.universe,a=e.isSnapshot,i=void 0!==a&&a,u=e.gl,d=(t=c(u?{gl:u,attributes:{preserveDrawingBuffer:i}}:{canvas:n,attributes:{preserveDrawingBuffer:i}})).texture(),f=r.width(),v=r.height(),p=r.cells(),m=new Uint8Array(o.s.buffer,p,f*v*4),h=t.texture({width:f,height:v,data:m}),y=t({blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1},equation:{rgb:"add",alpha:"add"},color:[0,0,0,0]},frag:s,uniforms:{t:function(e){return e.tick},dataTexture:function(){return p=r.cells(),m=new Uint8Array(o.s.buffer,p,f*v*4),h({width:f,height:v,data:m})},resolution:function(e){return[e.viewportWidth,e.viewportHeight]},dpi:2,isSnapshot:i,backBuffer:d},vert:l,attributes:{position:[[-1,4],[-1,-1],[4,-1]]},count:3});return{regl:t,draw:function(){t.poll(),y()}}},d=n(10),f=n.n(d),v=n(11),p=n.n(v),m=new(function(){function e(){f()(this,e),this.fps=document.getElementById("fps"),this.frames=[],this.lastFrameTimeStamp=performance.now()}return p()(e,[{key:"render",value:function(){var e=performance.now(),t=e-this.lastFrameTimeStamp;this.lastFrameTimeStamp=e;var n=1/t*1e3;this.frames.push(n),this.frames.length>30&&this.frames.shift();for(var r=1/0,a=-1/0,i=0,o=0;o<this.frames.length;o++)i+=this.frames[o],r=Math.min(this.frames[o],r),a=Math.max(this.frames[o],a);var c=i/this.frames.length;this.fps.textContent="FPS:".concat(Math.round(c).toString().padStart(3))}}]),e}()),h=n(66),y=n.n(h),x=document.getElementById("sand-canvas");var g=function(e,t){return Math.sqrt(Math.pow(e.clientX-t.clientX,2)+Math.pow(e.clientY-t.clientY,2),2)},w=function(e){var t=function(e){return Math.sqrt(Math.pow(e.clientX,2)+Math.pow(e.clientY,2),2)}(e);return{clientX:e.clientX/t,clientY:e.clientY/t}},b=function(e,t){return{clientX:e.clientX*t,clientY:e.clientY*t}},E=function(e,t){return{clientX:e.clientX+t.clientX,clientY:e.clientY+t.clientY}},k=function(e,t){return{clientX:e.clientX-t.clientX,clientY:e.clientY-t.clientY}},_=!1,S=null,C=null;function D(e){clearInterval(C),C=window.setInterval((function(){return R(e)}),100);var t={clientX:e.clientX,clientY:e.clientY};if(_){var n=0;if(R(t),S&&window.UI.state.selectedElement!=r.d.Fish&&window.UI.state.selectedElement!=r.d.GoldFish)for(;g(t,S)>2/3;){var a=g(t,S);if(t=E(t,b(w(k(S,e)),Math.min(2/3,a))),++n>1e3)break;R(t)}S=e}}x.addEventListener("mousedown",(function(e){e.preventDefault(),be.push_undo(),_=!0,clearInterval(C),C=window.setInterval((function(){return R(e)}),100),R(e),S=e})),document.body.addEventListener("mouseup",(function(e){clearInterval(C),_&&(e.preventDefault(),S=null,_=!1)})),x.addEventListener("mousemove",(function(e){clearInterval(C),D(e)})),x.addEventListener("mouseleave",(function(e){clearInterval(C),S=null})),x.addEventListener("touchstart",(function(e){e.cancelable&&e.preventDefault();Array.from(e.touches);be.push_undo(),_=!0,S=e,z(e)})),x.addEventListener("touchend",(function(e){e.cancelable&&e.preventDefault(),S=null,_=!1,clearInterval(C)})),x.addEventListener("touchmove",(function(e){window.paused||e.cancelable&&e.preventDefault(),clearInterval(C),z(e)}));var z=function(e){var t=Array.from(e.touches);1==t.length?D(t[0]):t.forEach(R)};var R=function(e){if(_){var t=function(e){var t=x.getBoundingClientRect();t={left:t.left+28,top:t.top+28,width:t.width-56,height:t.height-56};var n=x.width/(xe*Math.ceil(window.devicePixelRatio))/t.width,r=x.height/(xe*Math.ceil(window.devicePixelRatio))/t.height,a=(e.clientX-t.left)*n,i=(e.clientY-t.top)*r;return[Math.min(Math.floor(a),ge-1),Math.min(Math.floor(i),we-1)]}(e),n=y()(t,2),r=n[0],a=n[1];if(!(window.UI.state.selectedElement<0)){be.paint(r,a,4,window.UI.state.selectedElement)}}},M=(n(70),n(71)),I=n.n(M),L=n(73),A=n.n(L);function N(e){return new Promise((function(t){return setTimeout(t,e)}))}function T(e,t){return W.apply(this,arguments)}function W(){return(W=A()(I.a.mark((function e(t,n){var a,i,o,c,s,l,u;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:if(!(a<=1.5*t+2)){e.next=15;break}i=6;case 3:if(!(i>=1)){e.next=12;break}return o=a-4*i,universe.paint(t/2,n/2,o+5,r.d.Empty),universe.paint(t/2,n/2,o,i),e.next=9,N(16);case 9:i-=1,e.next=3;break;case 12:a+=16,e.next=1;break;case 15:c=0;case 16:if(!(c<=t-2)){e.next=23;break}return universe.paint(t/2,n/2,c-4,r.d.Empty),e.next=20,N(8);case 20:c+=2,e.next=16;break;case 23:s=0;case 24:if(!(s<=180)){e.next=34;break}return l=(t/2+10)*Math.cos(s*(Math.PI/180)),u=(n/2+10)*Math.sin(s*(Math.PI/180)),universe.paint(t/2+l,n/2+u,20,r.d.Empty),universe.paint(t/2-l,n/2-u,20,r.d.Empty),e.next=31,N(8);case 31:s+=2,e.next=24;break;case 34:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U,q=n(2),P=n.n(q),j=n(75),O=n.n(j),Y=n(12),F=n(27),B=function(){return P.a.createElement("div",{className:"welcome-scrim"},P.a.createElement("div",{className:"Info window"},P.a.createElement("div",{className:"title-bar"},P.a.createElement("div",{className:"title-bar-text"},"Information"),P.a.createElement("div",{className:"title-bar-controls"},P.a.createElement(Y.b,{to:"/"},P.a.createElement("button",{"aria-label":"Minimize"})),P.a.createElement("button",{"aria-label":"Maximize"}),P.a.createElement(Y.b,{to:"/"},P.a.createElement("button",{"aria-label":"Close"}," ")))),P.a.createElement("div",{className:"window-body "})))},G=n(23),X=n.n(G),H=n(25),K=n.n(H),J=n(24),Q=n.n(J),V=n(26),Z=n.n(V),$=function(e){var t=e.close,n=e.children;return P.a.createElement("div",{className:"welcome-scrim"},P.a.createElement("div",{id:"welcome"},n,P.a.createElement(Y.b,{to:"/",className:"x",onClick:t},P.a.createElement("button",null," x"))))},ee=n(88),te=n.n(ee),ne=n(89),re=n.n(ne),ae=n(90),ie=n.n(ae);console.log(r.e),console.log(r.d);var oe=(U={},ie()(U,r.d.Empty,"🜂"),ie()(U,r.d.Rule1,"🝊"),ie()(U,r.d.Rule2,"☉"),ie()(U,r.d.Rule3,"☽"),ie()(U,r.d.Rule4,"🜛"),ie()(U,r.d.Rule5,"🜝"),ie()(U,r.d.Rule6,"🜏"),U),ce=[{key:r.e.Horizontal,symbol:"🜕"},{key:r.e.Quad,symbol:"🜨"}],se=[{key:r.d.Empty,symbol:oe[r.d.Empty]},{key:r.d.Wild,symbol:"*"},{key:r.d.Rule1,symbol:oe[r.d.Rule1]},{key:r.d.Rule2,symbol:oe[r.d.Rule2]},{key:r.d.Rule3,symbol:oe[r.d.Rule3]},{key:r.d.Rule4,symbol:oe[r.d.Rule4]},{key:r.d.Rule5,symbol:oe[r.d.Rule5]},{key:r.d.Rule6,symbol:oe[r.d.Rule6]}];function le(e,t){return 3*t+e}var ue=function(e){function t(e){return f()(this,t),X()(this,K()(t).call(this,e))}return Z()(t,e),p()(t,[{key:"gridSquare",value:function(e,t,n,a){var i=this,o=this.props,c=o.grid,s=o.options,l=o.selectedElement,u=n&&a,d=c[le(e,t)];u&&(d=l);var f=s.find((function(e){return e.key==d})).symbol,v=function(n){if(!u){var o=i.props,c=o.grid,s=o.options,l=s.findIndex((function(e){return e.key==d}));l=(l+s.length+n)%s.length,a&&l==s.findIndex((function(e){return e.key===r.d.Wild}))&&(l=(l+s.length+n)%s.length);var f=s[l];c[le(e,t)]=f.key,(0,i.props.setGrid)(c)}};return P.a.createElement("g",{key:"".concat(e,"-").concat(t),transform:"translate(".concat(51*e,",").concat(51*t,")"),className:u?"disabled":"",onContextMenu:function(e){e.preventDefault(),v(-1)},onClick:function(){return v(1)},onDrop:function(n){if(!u){var r=n.dataTransfer.getData("text"),a=parseInt(r,10);if(se.find((function(e){return e.key==a})))c[le(e,t)]=a,(0,i.props.setGrid)(c)}},onDragOver:function(e){return e.preventDefault()}},P.a.createElement("foreignObject",{x:2,y:2,width:50,height:50},P.a.createElement("button",{className:"mat-box",draggable:"true",style:{width:48,height:48,filter:"saturate(0.8)",color:"*"==f?"#888":"black",backgroundColor:"*"==f?"#b0b0b055":window.pallette[d],borderColor:"*"==f?"#b0b0b055":window.pallette[d],backgroundImage:'url("assets/paper.png")',backgroundSize:"100px 100px",borderWidth:3,fontSize:"30px",borderStyle:" outset",lineHeight:0,verticalAlign:"middle"},onDragStart:function(e){e.dataTransfer.setData("text/plain",d)}},u||"?"==f?oe[l]:f)))}},{key:"render",value:function(){var e=this.props.isSelector;return P.a.createElement("g",null,[this.gridSquare(0,0,e),this.gridSquare(0,1,e),this.gridSquare(0,2,e),this.gridSquare(1,0,e),this.gridSquare(1,1,e,!0),this.gridSquare(1,2,e),this.gridSquare(2,0,e),this.gridSquare(2,1,e),this.gridSquare(2,2,e)])}}]),t}(P.a.Component),de=[{p:0,symbol:"×"},{p:1,symbol:" "}],fe=function(e){function t(e){var n;return f()(this,t),(n=X()(this,K()(t).call(this,e))).state={selectedElement:e.selectedElement,clause_index:e.clause_index,clause:t.getRule(e.selectedElement,e.clause_index)},window.Editor=Q()(n),n}return Z()(t,e),p()(t,[{key:"setRule",value:function(){var e=this.state.clause,t=e.selector,n=e.effector,a=e.symmetry,o=e.probability,c=te()(r.c,i()(t)),s=te()(r.b,i()(n)),l=new r.a(o.p,ce[a].key,c,s);window.u.set_clause(l,this.props.selectedElement,this.props.clause_index)}},{key:"incSymmetry",value:function(e){var t=this.state.clause,n=t.symmetry;t.symmetry=(ce.length+n+e)%ce.length,this.setState({clause:t},this.setRule)}},{key:"incProbability",value:function(e){var t=this.state.clause,n=t.probability,r=de.indexOf(n);r=(de.length+r+e)%de.length,console.log(de[r]),t.probability=de[r],this.setState({clause:t},this.setRule)}},{key:"render",value:function(){var e=this,t=this.props.selectedElement,n=this.state.clause,r=n.selector,a=n.effector,i=n.symmetry,o=n.probability;return P.a.createElement("div",{className:"MatrixMenu"},P.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"160px"},P.a.createElement("g",{transform:"translate(178,0)",className:"symmetry"},P.a.createElement("text",{x:"0",y:30,style:{fontSize:"30px",opacity:0==o.p?.2:1},onContextMenu:function(t){t.preventDefault(),e.incSymmetry(-1)},onClick:function(){return e.incSymmetry(1)}},ce[i].symbol),P.a.createElement("image",{x:"-10",y:"65",href:"assets/gold_arrow.png",height:"28",width:"23",style:{opacity:"×"==o.p?"0.7":"1.0"}}),P.a.createElement("text",{x:"0",y:"80",style:{fontSize:"45px",fill:"#d03f41"},onContextMenu:function(t){t.preventDefault(),e.incProbability(-1)},onClick:function(){return e.incProbability(1)}},o.symbol)),P.a.createElement("g",{className:re()({disabled:0==o.p},"clause")},P.a.createElement("g",{transform:"translate(-2,0)"},r&&P.a.createElement(ue,{selectedElement:t,options:se,grid:r,isSelector:!0,setGrid:function(t){var n=e.state.clause;n.selector=t,e.setState({clause:n},e.setRule)}})),P.a.createElement("g",{transform:"translate(202,0)"},a&&P.a.createElement(ue,{selectedElement:t,options:se,grid:a,setGrid:function(t){var n=e.state.clause;n.effector=t,e.setState({clause:n},e.setRule)}})))))}}],[{key:"getRule",value:function(e,t){console.log(e,t);var n=window.u.clause(e,t),r=Array.from(new Uint8Array(memory.buffer,n.selector.grid(),9)),a=Array.from(new Uint8Array(memory.buffer,n.effector.grid(),9)),i=n.symmetry(),o=n.probability();return{selector:r,effector:a,symmetry:i,probability:de.find((function(e){return e.p==o}))}}},{key:"getDerivedStateFromProps",value:function(e,n){var r=e.selectedElement,a=e.clause_index;return r!=n.selectedElement&&r<=6?{selectedElement:r,clause:t.getRule(r,a)}:null}}]),t}(P.a.Component);window.species=r.d;var ve=function(){var e=document.createElement("canvas"),t=Object.values(r.d).filter((function(e){return!isNaN(parseFloat(e))})),n=Math.max.apply(Math,i()(t))+1,a=r.f.new(n,1);e.width=n,e.height=3,a.reset(),t.forEach((function(e){return a.paint(e,0,2,e)})),a.paint(r.d.Empty,0,2,r.d.Empty),(0,u({universe:a,canvas:e,isSnapshot:!0}).draw)();var o=e.getContext("webgl"),c=new Uint8Array(4*n);o.readPixels(0,0,n,1,o.RGBA,o.UNSIGNED_BYTE,c);var s={};return t.forEach((function(e){var t=4*e,n="rgba(".concat(c[t],",").concat(c[t+1],", ").concat(c[t+2],", 0.9)");s[e]=n})),s}();window.pallette=ve;var pe=Object.keys(r.d).filter((function(e){return e.length>2&&"Wild"!=e}));function me(e,t){var n=new r.c(r.d.Wild,r.d.Wild,r.d.Wild,r.d.Wild,e,r.d.Wild,r.d.Wild,r.d.Wild,r.d.Wild),a=new r.b(r.d.Wild,r.d.Wild,r.d.Wild,r.d.Wild,e,r.d.Wild,r.d.Wild,r.d.Wild,r.d.Wild),i=new r.a(de[1].p,ce[0].key,n,a);be.set_clause(i,e,t)}var he=function(e){function t(e){var n;return f()(this,t),(n=X()(this,K()(t).call(this,e))).state={submissionMenuOpen:!1,paused:!1,ff:!1,submitting:!1,size:1,dataURL:null,currentSubmission:null,selectedElement:r.d.Rule2},window.UI=Q()(n),n}return Z()(t,e),p()(t,[{key:"componentDidUpdate",value:function(e){}},{key:"togglePause",value:function(){window.paused=!this.state.paused,this.setState({paused:!this.state.paused})}},{key:"toggleFF",value:function(){window.ff=!this.state.ff,this.setState({ff:!this.state.ff})}},{key:"play",value:function(){window.paused=!1,this.setState({paused:!1})}},{key:"pause",value:function(){window.paused=!0,this.setState({paused:!0})}},{key:"setSize",value:function(e,t){e.preventDefault(),this.setState({size:t})}},{key:"reset",value:function(){this.play(),this.setState({currentSubmission:null}),Ce()}},{key:"closeMenu",value:function(){this.play(),this.setState({dataURL:null})}},{key:"upload",value:function(){console.log("saving");var e=new Uint8Array(o.s.buffer,be.cells(),ge*we*4),t=document.createElement("canvas"),n=t.getContext("2d"),r=n.createImageData(ge,we);t.height=we,t.width=ge;for(var a=0;a<ge*we*4;a++)r.data[a]=a%4==3?255:e[a];n.putImageData(r,0,0);var i=t.toDataURL("image/png");JSON.stringify(i)}},{key:"currentDateString",value:function(){var e=new Date;return"".concat(e.getMonth(),"-").concat(e.getDate())}},{key:"load",value:function(){console.log("loading")}},{key:"render",value:function(){var e=this,t=this.state,n=(t.ff,t.selectedElement),a=t.currentSubmission;t.paused,a&&a.id&&"#".concat(a.id);return P.a.createElement("div",{className:"window fade ",id:"HUD"},P.a.createElement("div",{className:"title-bar"}," ",P.a.createElement("div",{className:"title-bar-text"},"Alchemi Online"),P.a.createElement("div",{className:"title-bar-controls"},P.a.createElement("button",{onClick:function(){e.reset()}},"×"))),P.a.createElement("div",{className:"window-body hud-body"},P.a.createElement("div",{id:"hud-buttons",style:{backgroundColor:ve[n].replace("0.9","0.2")}},pe.map((function(t){return function(e,t,n){var a=r.d[e],i=ve[a],o=a==t,c=e;return oe[a]&&(c=oe[a]),P.a.createElement("button",{className:o?"selected ".concat(e):e,key:e,draggable:!0,onClick:function(){n(a)},onDragStart:function(e){e.dataTransfer.setData("text/plain",a)},onDrop:function(e){var t=e.dataTransfer.getData("text");parseInt(t,10)==a&&n(a)},onDragOver:function(e){return e.preventDefault()},style:{background:"inherit",backgroundColor:i,borderColor:i,filter:o||"saturate(0.8) "}},"  ",c,"  ")}(t,n,(function(t){return e.setState({selectedElement:t})}))})),P.a.createElement("hr",{className:"chain-hr2"}),P.a.createElement(P.a.Fragment,null,P.a.createElement(fe,{selectedElement:n,clause_index:0}),P.a.createElement(fe,{selectedElement:n,clause_index:1}),P.a.createElement(fe,{selectedElement:n,clause_index:2}),P.a.createElement("div",{className:"hint"},"drag and drop tiles to construct rules"),P.a.createElement("button",{onClick:function(){var t=n;me(n,0),me(n,1),me(n,2),e.setState({selectedElement:(n+1)%pe.length},(function(){return e.setState({selectedElement:t})}))},id:"clear-button"}," ","reset")),P.a.createElement("hr",{className:"chain-hr2"}),this.state.dataURL&&P.a.createElement($,{close:function(){return e.closeMenu()}},P.a.createElement("img",{src:this.state.dataURL,className:"submissionImg"}),P.a.createElement("div",{style:{display:"flex"}})))))}}]),t}(P.a.Component);function ye(){return P.a.createElement(Y.a,null,P.a.createElement(F.a,{path:"/",component:he}),P.a.createElement(F.a,{exact:!0,path:"/info/",component:B}))}n.d(t,"canvas",(function(){return Ee})),n.d(t,"width",(function(){return ge})),n.d(t,"height",(function(){return we})),n.d(t,"ratio",(function(){return xe})),n.d(t,"universe",(function(){return be})),n.d(t,"reset",(function(){return Ce}));var xe=8,ge=100,we=100;Math.min(ge,we);console.log(ge,we);var be=r.f.new(ge,we);window.u=be,window.universe=be,O.a.render(P.a.createElement(ye,null),document.getElementById("ui")),T(ge,we);var Ee=document.getElementById("sand-canvas");Ee.width=ge*xe*Math.ceil(window.devicePixelRatio),Ee.height=we*xe*Math.ceil(window.devicePixelRatio);var ke=document.getElementById("HUD"),_e=function(){var e=window.innerWidth,t=(window.innerHeight,""),n="";t="height: ".concat(Math.min(window.innerHeight-80-34,window.innerWidth-481),"px; margin:10px; margin-right: ").concat(401,"px; margin-left:auto;"),n="width: ".concat(361,"px; margin: 10px;"),e<600&&(n="margin: 40px 10px; margin-top:".concat(e+10,"px; margin-bottom: ").concat(34,"px ;padding-bottom: 40px"),t="width:".concat(e-80,"; height: ").concat(e-80,"px; top: 10px; margin:auto; margin-top:10px ; ")),ke.style=n,Ee.style=t};_e(),window.addEventListener("deviceorientation",_e,!0),window.addEventListener("resize",_e);var Se=u({canvas:Ee,universe:be});function Ce(){console.log("reseting"),T(ge,we)}!function e(){for(var t=performance.now(),n=window.ff?100:1,r=0;r<n;r++){if(window.paused||(m.render(),be.tick()),performance.now()-t>16)break}window.t=0,Se.draw(),requestAnimationFrame(e)}(),window.UI.load()},14:function(e,t,n){"use strict";var r=n.w[e.i];e.exports=r;n(29);r.M()},29:function(e,t,n){"use strict";(function(e){n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return v})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return y})),n.d(t,"f",(function(){return x})),n.d(t,"g",(function(){return g})),n.d(t,"h",(function(){return w}));var r=n(14);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}var c=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();var s=null;function l(e,t){return c.decode((null!==s&&s.buffer===r.s.buffer||(s=new Uint8Array(r.s.buffer)),s).subarray(e,e+t))}function u(e,t){if(!(e instanceof t))throw new Error("expected instance of ".concat(t.name));return e.ptr}var d,f=Object.freeze({Wild:11,11:"Wild",Empty:0,0:"Empty",Rule1:1,1:"Rule1",Rule2:2,2:"Rule2",Rule3:3,3:"Rule3",Rule4:4,4:"Rule4",Rule5:5,5:"Rule5",Rule6:6,6:"Rule6"}),v=Object.freeze({Horizontal:0,0:"Horizontal",Quad:1,1:"Quad"}),p=function(){function e(t,n,i,o){a(this,e),u(i,y);var c=i.ptr;i.ptr=0,u(o,m);var s=o.ptr;o.ptr=0;var l=r.o(t,n,c,s);return e.__wrap(l)}return o(e,[{key:"free",value:function(){var e=this.ptr;this.ptr=0,r.b(e)}},{key:"probability",get:function(){return r.e(this.ptr)},set:function(e){r.k(this.ptr,e)}},{key:"symmetry",get:function(){return r.g(this.ptr)>>>0},set:function(e){r.m(this.ptr,e)}},{key:"selector",get:function(){var e=r.f(this.ptr);return y.__wrap(e)},set:function(e){u(e,y);var t=e.ptr;e.ptr=0,r.l(this.ptr,t)}},{key:"effector",get:function(){var e=r.d(this.ptr);return m.__wrap(e)},set:function(e){u(e,m);var t=e.ptr;e.ptr=0,r.j(this.ptr,t)}}],[{key:"__wrap",value:function(t){var n=Object.create(e.prototype);return n.ptr=t,n}}]),o(e,[{key:"symmetry",value:function(){return r.g(this.ptr)>>>0}},{key:"probability",value:function(){return r.e(this.ptr)}}],[{key:"new_null",value:function(){var t=r.p();return e.__wrap(t)}}]),e}(),m=function(){function e(t,n,i,o,c,s,l,u,d){a(this,e);var f=r.r(t,n,i,o,c,s,l,u,d);return e.__wrap(f)}return o(e,[{key:"free",value:function(){var e=this.ptr;this.ptr=0,r.c(e)}}],[{key:"__wrap",value:function(t){var n=Object.create(e.prototype);return n.ptr=t,n}}]),o(e,[{key:"grid",value:function(){return r.q(this.ptr)}}]),e}(),h=function(){function e(t,n,i){a(this,e),u(t,p);var o=t.ptr;t.ptr=0,u(n,p);var c=n.ptr;n.ptr=0,u(i,p);var s=i.ptr;i.ptr=0;var l=r.u(o,c,s);return e.__wrap(l)}return o(e,[{key:"free",value:function(){var e=this.ptr;this.ptr=0,r.h(e)}}],[{key:"__wrap",value:function(t){var n=Object.create(e.prototype);return n.ptr=t,n}}]),o(e,[{key:"clause",value:function(e){var t=r.t(this.ptr,e);return p.__wrap(t)}},{key:"set_clause",value:function(e,t){u(e,p),r.v(this.ptr,e.ptr,t)}}]),e}(),y=function(){function e(t,n,i,o,c,s,l,u,d){a(this,e);var f=r.r(t,n,i,o,c,s,l,u,d);return e.__wrap(f)}return o(e,[{key:"free",value:function(){var e=this.ptr;this.ptr=0,r.i(e)}}],[{key:"__wrap",value:function(t){var n=Object.create(e.prototype);return n.ptr=t,n}}]),o(e,[{key:"grid",value:function(){return r.q(this.ptr)}}]),e}(),x=function(){function e(){a(this,e)}return o(e,[{key:"free",value:function(){var e=this.ptr;this.ptr=0,r.n(e)}},{key:"reset",value:function(){r.F(this.ptr)}},{key:"tick",value:function(){r.K(this.ptr)}},{key:"rule",value:function(e){var t=r.G(this.ptr,e);return h.__wrap(t)}},{key:"clause",value:function(e,t){var n=r.x(this.ptr,e,t);return p.__wrap(n)}},{key:"set_rule",value:function(e,t){u(e,h),r.I(this.ptr,e.ptr,t)}},{key:"set_clause",value:function(e,t,n){u(e,p),r.H(this.ptr,e.ptr,t,n)}},{key:"width",value:function(){return r.L(this.ptr)}},{key:"height",value:function(){return r.z(this.ptr)}},{key:"cells",value:function(){return r.w(this.ptr)}},{key:"paint",value:function(e,t,n,a){r.C(this.ptr,e,t,n,a)}},{key:"push_undo",value:function(){r.E(this.ptr)}},{key:"pop_undo",value:function(){r.D(this.ptr)}},{key:"flush_undos",value:function(){r.y(this.ptr)}},{key:"set_time",value:function(e){r.J(this.ptr,e)}},{key:"inc_time",value:function(){r.A(this.ptr)}}],[{key:"__wrap",value:function(t){var n=Object.create(e.prototype);return n.ptr=t,n}},{key:"new",value:function(t,n){var a=r.B(t,n);return e.__wrap(a)}}]),e}(),g="function"==typeof Math.random?Math.random:(d="Math.random",function(){throw new Error("".concat(d," is not defined"))}),w=function(e,t){throw new Error(l(e,t))}}).call(this,n(46)(e))},52:function(e,t){},54:function(e,t){},64:function(e,t){e.exports="precision highp float;\n#define GLSLIFY 1\nuniform float t;\nuniform float skyTime;\n\nuniform float dpi;\nuniform vec2 resolution;\nuniform bool isSnapshot;\nuniform sampler2D backBuffer;\nuniform sampler2D dataTexture;\n\nvarying vec2 uv;\nconst float PI2 = 2. * 3.14159265358979323846;\n\n// clang-format off\nvec3 hsv2rgb(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_0(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_0(vec4 x) {\n     return mod289_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_0(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_0 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_0;\n  vec3 i1 = min( g_0.xyz, l.zxy );\n  vec3 i2 = max( g_0.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_0(i);\n  vec4 p = permute_0( permute_0( permute_0(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289_1(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute_1(vec3 x) {\n  return mod289_1(((x*34.0)+1.0)*x);\n}\n\nfloat snoise_1(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289_1(i); // Avoid truncation effects in permutation\n  vec3 p = permute_1( permute_1( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\n// clang-format on\n\nvoid main() {\n  vec2 guv = uv;\n  vec3 color;\n  vec2 grid = floor(guv * (resolution / (dpi * 2.)));\n\n  grid = floor(guv * (resolution / dpi));\n\n  float noise = snoise_0(vec3(grid, t * 0.05));\n  float slownoise = snoise_0(vec3(grid, t * 0.01));\n\n  vec2 textCoord = (guv * vec2(0.5, -0.5)) + vec2(0.5);\n\n  vec4 data = texture2D(dataTexture, textCoord);\n  vec4 last = texture2D(backBuffer, vec2(textCoord.x, 1.0 - textCoord.y));\n\n  int type = int((data.r * 255.) + 0.1);\n  float energy = data.g;\n  float age = data.b;\n\n  float hue = 0.0;\n  float saturation =  0.3 + (energy*1.9) + (age *0.2) ;\n  float lightness = 0.7 - energy * .1;\n  float a = 1.0;\n  float brightness = 0.0;\n\n  if (type == 0) { // Air\n    hue = 0.7;\n    saturation = 0.0;\n    \n    a = 0.0 ;\n    if (isSnapshot) {\n    lightness = 0.9;\n\n      a = 1.0;\n    }\n  } else if (type == 1) { // wall\n    hue = 0.1;\n    saturation *= 0.3;\n    lightness *= 0.5 ;\n    lightness += slownoise*0.4;\n  } else if (type == 2) { // Sand\n    hue = 0.1;\n    lightness += 0.1;\n  } else if (type == 3) { // plant\n    hue = 0.4;\n    saturation += 0.2;\n    lightness-=0.7*energy;\n  } else if (type == 4) { // water\n    hue = 0.58;\n    // saturation -= 0.05;\n    lightness -= noise * 0.1;\n    // a = 0.9;\n    if (isSnapshot) {\n      a = 1.0;\n    }\n  } else if (type == 5) { // fire\n    hue = 0.05 + (noise * -0.1);\n    saturation += 0.2;\n\n   lightness = 0.65+ energy * 1.7;\n\n    //  * (noise + 0.5);\n    if (isSnapshot) {\n      hue += -0.1;\n    }\n\n  } else if (type == 6) { // purple\n    hue = 0.8;\n    lightness += 0.2;\n    hue += energy * 0.2;\n  }\n  if (isSnapshot == false) {\n    lightness *= (0.975 + snoise_1(floor(guv * resolution / dpi)) * 0.15);\n  }\n  saturation = min(saturation, 1.0);\n  lightness = min(lightness, 1.0);\n  color = hsv2rgb(vec3(hue, saturation, lightness));\n\n// if(a<0.3){\n//   vec2 cg = floor(grid /(dpi*8.));\n//   float check = mod(cg.x+mod(cg.y,2.0),2.);\n\n//   color = check * vec3(0.2);\n//   if(check>0.8){\n//       // color= vec3(1.0,0.0,0.); \n//       // a+= 0.9;\n//   }\n//   }\n\n  gl_FragColor = vec4(color, a);\n}"},65:function(e,t){e.exports='\n// boring "pass-through" vertex shader\nprecision mediump float;\n#define GLSLIFY 1\nattribute vec2 position;\nvarying vec2 uv;\nvoid main() {\n  uv = position;\n  gl_Position = vec4(position, 0, 1);\n}'},70:function(e,t){var n=window.setTimeout((function(){window.UI.state.tutorialProgress>3&&document.body.classList.add("faded")}),3e4),r=function(e){window.clearTimeout(n),document.body.classList.remove("faded"),n=window.setTimeout((function(){window.UI.state.tutorialProgress>3&&document.body.classList.add("faded")}),3e4)};document.body.addEventListener("mousemove",r),document.body.addEventListener("touchstart",r)}}]);
//# sourceMappingURL=2.e8c9f55359d3183611b4.js.map