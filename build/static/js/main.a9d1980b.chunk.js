(this["webpackJsonpassignment-project"]=this["webpackJsonpassignment-project"]||[]).push([[0],{13:function(e,t,a){e.exports=a(29)},18:function(e,t,a){},19:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),i=(a(18),a(19),a(5)),o=a(1),u=a(2),s=a(3),m=a(4),f=a(20),h=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={fileData:"",textData:""},n}return Object(u.a)(a,[{key:"change",value:function(e){var t=this;e.preventDefault();var a=document.querySelector(".css-file").files[0],n=new FileReader,r="";n.onload=function(e){r=e.target.result,t.setState({fileData:r})},n.readAsText(a)}},{key:"textChange",value:function(e){this.setState(Object(i.a)({},this.state,{textData:e.target.value}))}},{key:"finalRender",value:function(){var e=this.state.textData||this.state.fileData;try{e=f(e,{indent:"  ",openbrace:"separate-line",autosemicolon:!0}),console.log(e)}catch(t){document.querySelector(".css-formatter-final").innerHTML="this ".concat(t)}document.querySelector(".css-formatter-final").innerHTML=e}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"CSS TOOLS"),r.a.createElement("p",null,"Submit your code below: ")," ",r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement("input",{className:"css-file",type:"file",required:!0}),r.a.createElement("button",{type:"submit",onClick:function(t){return e.change(t)}},"Submit")),r.a.createElement("textarea",{className:"text",wrap:"true",onChange:function(t){return e.textChange(t)}}),r.a.createElement("div",{className:"res"},r.a.createElement("p",null,"YOUR INPUT Data:",r.a.createElement("br",null),this.state.textData),r.a.createElement("p",null,"Your File Data ",r.a.createElement("br",null)," ",this.state.fileData)),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(t){return e.finalRender(t)}},"Format"),r.a.createElement("pre",{className:"css-formatter-final",style:{textAlign:"left"}}))}}]),a}(r.a.Component),d=a(21),E=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={fileData:"",textData:""},n}return Object(u.a)(a,[{key:"change",value:function(e){var t=this;e.preventDefault();var a=document.querySelector(".html-file").files[0];console.log(a);var n=new FileReader,r="";n.onload=function(e){r=e.target.result,t.setState({fileData:r})},n.readAsText(a)}},{key:"textChange",value:function(e){this.setState(Object(i.a)({},this.state,{textData:e.target.value}))}},{key:"finalRender",value:function(){var e=this.state.textData||this.state.fileData;try{e=d.render(e),console.log(e)}catch(t){document.querySelector(".html-formatter-final").innerHTML="this ".concat(t)}document.querySelector(".html-formatter-final").innerHTML=e.replace(/</gi,"&lt;").replace(/>/gi,"&gt;")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"HTML TOOLS"),r.a.createElement("p",null,"Submit your code below :")," ",r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement("input",{className:"html-file",type:"file",required:!0}),r.a.createElement("button",{type:"submit",onClick:function(t){return e.change(t)}},"Submit")),r.a.createElement("textarea",{className:"text",wrap:"true",onChange:function(t){return e.textChange(t)}}),r.a.createElement("div",{className:"res"},r.a.createElement("p",null,"YOUR INPUT Data:",r.a.createElement("br",null),this.state.textData),r.a.createElement("p",null,"Your File Data :  ",r.a.createElement("br",null)," ",this.state.fileData)),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(t){return e.finalRender(t)}},"Format"),r.a.createElement("pre",{className:"html-formatter-final",style:{textAlign:"start"}}))}}]),a}(r.a.Component),v=a(23),b=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={fileData:"",textData:""},n}return Object(u.a)(a,[{key:"change",value:function(e){var t=this;e.preventDefault();var a=document.querySelector(".js-file").files[0],n=new FileReader,r="";n.onload=function(e){r=e.target.result,t.setState({fileData:r})},n.readAsText(a)}},{key:"textChange",value:function(e){this.setState(Object(i.a)({},this.state,{textData:e.target.value}))}},{key:"finalRender",value:function(){var e=this.state.textData||this.state.fileData;try{e=v(e),console.log(e)}catch(t){document.querySelector(".js-formatter-final").innerHTML="this ".concat(t)}document.querySelector(".js-formatter-final").innerHTML=e}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"JS TOOLS"),r.a.createElement("p",null,"Submit your code below :")," ",r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement("input",{className:"js-file",type:"file",required:!0}),r.a.createElement("button",{type:"submit",onClick:function(t){return e.change(t)}},"Submit")),r.a.createElement("textarea",{className:"text",wrap:"true",onChange:function(t){return e.textChange(t)}}),r.a.createElement("div",{className:"res"},r.a.createElement("p",null,"YOUR INPUT Data:",r.a.createElement("br",null),this.state.textData),r.a.createElement("p",null,"Your File Data : ",r.a.createElement("br",null)," ",this.state.fileData)),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(t){return e.finalRender(t)}},"Format"),r.a.createElement("pre",{style:{textAlign:"start"},className:"js-formatter-final"}))}}]),a}(r.a.Component),p=a(25),y=a(28),g=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={textData:""},n}return Object(u.a)(a,[{key:"change",value:function(){var e=this,t=document.querySelector(".file").files[0],a=new FileReader,n="";a.onload=function(t){n=t.target.result,e.setState({fileData:n})},a.readAsText(t)}},{key:"textChange",value:function(e){this.setState({textData:e.target.value})}},{key:"finalRender",value:function(e,t){var a=this.state.textData;try{if("encode"===t){var n=y.encode(a);a=p.encode(n)}else{var r=p.decode(a);a=y.decode(r)}console.log(a)}catch(l){document.querySelector(".encoder-decoder-final").innerHTML="this ".concat(l)}document.querySelector(".encoder-decoder-final").innerHTML=a}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Base64 Encoder Decoder "),r.a.createElement("p",null,"Submit your code below")," ",r.a.createElement("br",null),r.a.createElement("textarea",{className:"text",wrap:"true",onChange:function(t){return e.textChange(t)}}),r.a.createElement("div",{className:"res"},r.a.createElement("p",null,"YOUR INPUT Data:",r.a.createElement("br",null),this.state.textData),r.a.createElement("p",null,"Your File Data ",r.a.createElement("br",null)," ",this.state.fileData)),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(t){return e.finalRender(t,"encode")}},"encode"),r.a.createElement("button",{onClick:function(t){return e.finalRender(t,"decode")}},"decode"),r.a.createElement("pre",{className:"encoder-decoder-final"}))}}]),a}(r.a.Component);var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Assignment Project For Aspire Tech By",r.a.createElement("br",null)," ",r.a.createElement("a",{href:"https://www.twitter.com/_khansofficial"},"Mahdi Khan"),r.a.createElement("br",null)," (work in Progress)"),r.a.createElement(h,null),r.a.createElement(E,null),r.a.createElement(b,null),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.hydrate(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.a9d1980b.chunk.js.map