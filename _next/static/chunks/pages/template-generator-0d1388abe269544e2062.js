_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"2qu3":function(e,t,r){"use strict";var n=r("lSNA"),a=r("lwsE"),o=r("W8MJ");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var u,d=(u=r("q1tI"))&&u.__esModule?u:{default:u},p=r("8L3h"),f=r("jwwS");var b=[],m=[],y=!1;function h(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function j(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var a=h(e[n]);a.loading?t.loading=!0:(t.loaded[n]=a.loaded,t.error=a.error),r.push(a.promise),a.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function O(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function v(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:O,webpack:null,modules:null},t),n=null;function a(){if(!n){var t=new x(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!y&&"function"===typeof r.webpack){var o=r.webpack();m.push((function(e){var t,r=i(o);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return a()}}catch(l){r.e(l)}finally{r.f()}}))}var l=function(e,t){a();var o=d.default.useContext(f.LoadableContext),l=(0,p.useSubscription)(n);return d.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),o&&Array.isArray(r.modules)&&r.modules.forEach((function(e){o(e)})),d.default.useMemo((function(){return l.loading||l.error?d.default.createElement(r.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:n.retry}):l.loaded?r.render(l.loaded,e):null}),[e,l])};return l.preload=function(){return a()},l.displayName="LoadableComponent",d.default.forwardRef(l)}var x=function(){function e(t,r){a(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=c(c({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function g(e){return v(h,e)}function w(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return w(e,t)}))}g.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return v(j,e)},g.preloadAll=function(){return new Promise((function(e,t){w(b).then(e,t)}))},g.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return y=!0,t()};w(m,e).then(r,r)}))},window.__NEXT_PRELOADREADY=g.preloadReady;var k=g;t.default=k},Bdpc:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/template-generator",function(){return r("OM+u")}])},JfgW:function(e,t,r){"use strict";(function(e){r.d(t,"e",(function(){return y})),r.d(t,"a",(function(){return m})),r.d(t,"c",(function(){return b})),r.d(t,"f",(function(){return f})),r.d(t,"b",(function(){return p})),r.d(t,"d",(function(){return d}));var n,a,o=r("rePB");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=null!==(n=null===(a=e)||void 0===a?void 0:a.localStorage)&&void 0!==n?n:{getItem:function(){return null}},s=i.getItem("Presets"),u={KeyMapStates:{Default:{keyMap:{City:["Seattle","Tacoma"],Service:["Carpet Cleaning","Window Repair"],Currency:["$$$"]}}},TemplateStates:{Default:{template:"The best {{Service}} in {{City}} for your {{Currency}}"}}},d=null!==s?JSON.parse(s):JSON.parse(JSON.stringify(u)),p={keyMap:JSON.parse(JSON.stringify(d.KeyMapStates.Default.keyMap)),name:"Default"},f={template:JSON.parse(JSON.stringify(d.TemplateStates.Default.template)),name:"Default"};function b(e,t){var r=t.type,n=t.value;switch(r){case"preset/template/add":var a=n.newTemplateName,o=n.templateDispatch;e.TemplateStates[a]={template:"",name:a},o({type:"template/load-from-preset",value:{presetStore:e,name:a}});break;case"preset/template/update":var l=n.template,s=n.name;e.TemplateStates[s].template=l;break;case"preset/key/update":var d=n.keyMap,p=n.name;e.KeyMapStates[p].keyMap=d;break;case"preset/key/add":var f=n.newKeyMapName,b=n.keyMapDispatch;e.KeyMapStates[f]={keyMap:{},name:f},b({type:"key/load-from-preset",value:{presetStore:e,name:f}});break;case"preset/key/delete":delete e.KeyMapStates[n];break;case"preset/template/delete":delete e.TemplateStates[n];break;case"preset/key/load-from-file":e.KeyMapStates=n;break;case"preset/template/load-from-file":e.TemplateStates=n;break;case"preset/reset":var m=n.keyMapDispatch,y=n.templateDispatch;m({type:"key/load-from-preset",value:{presetStore:e=JSON.parse(JSON.stringify(u)),name:"Default"}}),y({type:"template/load-from-preset",value:{presetStore:e,name:"Default"}});break;default:console.log("Unhanlded action",{state:e,action:t})}return i.setItem("Presets",JSON.stringify(e)),c({},e)}function m(e,t){var r=t.type,n=t.value;switch(r){case"key/add":if(!e.keyMap[n])return e.keyMap[n]=[],c({},e);break;case"key/update":return Object.assign(e.keyMap,n),c({},e);case"key/delete":return delete e.keyMap[n],c({},e);case"key/load-from-preset":if(n.presetStore.KeyMapStates[n.name])return e.name=n.name,e.keyMap=JSON.parse(JSON.stringify(n.presetStore.KeyMapStates[n.name].keyMap)),c({},e);break;default:console.log("Unhanlded action",{state:e,action:t})}return e}function y(e,t){var r=t.type,n=t.value;switch(r){case"template/update":e.template=n;break;case"template/load-from-preset":console.log({value:n}),n.presetStore.TemplateStates[n.name]&&(e.name=n.name,e.template=JSON.parse(JSON.stringify(n.presetStore.TemplateStates[n.name].template)));default:console.log("Unhanlded action",{state:e,action:t})}return c({},e)}}).call(this,r("yLpj"))},"OM+u":function(e,t,r){"use strict";r.r(t);var n=r("nKUr"),a=r("rePB"),o=r("q1tI"),l=r("Vvt1"),c=r.n(l),i=r("oTOh");function s(e,t){var r=new Blob([JSON.stringify(t)],{type:"text/json"});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveBlob(r,e);else{var n=window.document.createElement("a");n.href=window.URL.createObjectURL(r),n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)}}function u(e,t){var r=new FileReader;r.onloadend=function(e){t(JSON.parse(r.result))},r.readAsText(e)}function d(e){var t=e.text,r=e.help;return Object(n.jsxs)("div",{className:"row lightgrey rounded",children:[Object(n.jsx)("div",{className:"row flex-grow",children:Object(n.jsx)("h2",{children:t})}),r&&Object(n.jsx)("div",{onClick:r,style:{marginRight:"10px"},className:"column clickable hoverable",children:"(tutorial)"})]})}r("oEMv");var p=r("197s"),f=r.n(p),b=c()((function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"QttU"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["QttU"]},modules:["reactour"]}}),m=[{selector:".keymap-table",content:"The Keys and Values in this list will replace the {{Keys}} in the Template"},{selector:".keyentry-create",content:"Add new keys to the set by entering a value and clicking Add"},{selector:".keymap-list",content:"Switch between sets of Keys and Values by selecting a Set in this list"},{selector:".keymap-files",content:"Download a File of all your current KeyMaps, or load a set of KeyMaps using the FilePicker"}],y=function(e){var t=e.presetStore,r=e.presetDispatch,l=e.keyMapStore,c=e.keyMapDispatch,i=Object(o.useState)(""),p=i[0],y=i[1],h=Object(o.useState)(""),j=h[0],O=h[1],v=Object(o.useState)(null),x=v[0],g=v[1],w=Object(o.useState)(null),k=w[0],S=w[1],N=Object(o.useRef)(),M=Object(o.useState)(""),C=M[0],P=M[1],_=Object(o.useState)(!1),D=_[0],T=_[1],R=function(){c({type:"key/add",value:p}),y("")},E=Object(o.useMemo)((function(){return JSON.stringify(l.keyMap)!==JSON.stringify(t.KeyMapStates[l.name].keyMap)}),[l,t]),K=Object(o.useState)(!1),A=K[0],L=K[1];return Object(n.jsxs)("div",{className:"keymap-container column padded elevated rounded bordered",style:{flexGrow:1},children:[Object(n.jsx)(d,{text:"KeyMap",help:function(){return L(!0)}}),Object(n.jsxs)("div",{className:"row flex-grow",children:[Object(n.jsxs)("div",{className:"column keymap-list padded flex-start tall",children:[Object(n.jsx)("div",{className:"wide row white flex-start ",children:Object(n.jsx)("input",{className:"wide",type:"text",placeholder:"Filter",value:j,onChange:function(e){var t=e.target.value;return O(t)}})}),Object(n.jsx)("div",{className:" column flex-start bordered elevated ",style:{overflowY:"auto",maxHeight:"300px",minWidth:"150px"},children:Object.keys(t.KeyMapStates).filter((function(e){return!j||e.toLowerCase().indexOf(j.toLowerCase())>=0})).map((function(e){return Object(n.jsxs)("div",{className:"row flex-space-between bordered-b ".concat(l.name===e?"lightgrey":""),children:[Object(n.jsx)("div",{className:"flex-grow",onClick:function(r){r.target.value;c({type:"key/load-from-preset",value:{presetStore:t,name:e}})},style:{padding:"3px"},children:e},e),e!==l.name&&Object(n.jsxs)(n.Fragment,{children:[x!==e&&Object(n.jsx)("div",{className:"column",onClick:function(){return g(e)},children:"X"}),x===e&&Object(n.jsxs)("div",{className:"row flex-space-between",style:{width:"35px",marginRight:"5px"},children:[Object(n.jsx)("div",{className:"column",onClick:function(){return g(null)},children:"\u274c"}),Object(n.jsx)("div",{className:"column",onClick:function(){return r({type:"preset/key/delete",value:e})},children:"\u2705 "})]})]})]})}))}),Object(n.jsxs)("div",{className:"row keymap-create",children:[Object(n.jsx)("input",{type:"text",value:C,placeholder:"...new keymap name",onChange:function(e){var t=e.target.value;return P(t)},onKeyPress:function(e){"Enter"===e.code&&(r({type:"preset/key/add",value:{keyMapStore:l,newKeyMapName:C,keyMapDispatch:c}}),P(""))}}),Object(n.jsx)("input",{type:"button",value:"Add",disabled:!C||0===C.length||t.KeyMapStates[C],onClick:function(){r({type:"preset/key/add",value:{keyMapStore:l,newKeyMapName:C,keyMapDispatch:c}}),P("")}})]}),Object(n.jsxs)("div",{className:"keymap-files row flex-space-between pt",children:[!D&&Object(n.jsx)("input",{type:"button",value:"Upload File",onClick:function(){return T(!0)}}),D&&Object(n.jsx)("input",{ref:N,type:"file",accept:"text/json",onChange:function(e){u(N.current.files[0],(function(e){return r({type:"preset/key/load-from-file",value:e})})),T(!1)}}),Object(n.jsx)("input",{type:"button",value:"Export",onClick:function(){return s("keyMap.json",t.KeyMapStates)}})]})]}),Object(n.jsxs)("table",{className:"keymap-table table padded wide  ",children:[Object(n.jsx)("thead",{className:"lightgrey",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{className:"bordered-r bordered-b",children:"Keys"}),Object(n.jsx)("th",{className:"bordered-b",children:"Values"})]})}),Object(n.jsxs)("tbody",{children:[Object.keys(l.keyMap).map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"bordered-r bordered-b",children:Object(n.jsxs)("div",{className:"row flex-space-between",children:[Object(n.jsx)("div",{className:"column",children:"{{ ".concat(e," }}")}),Object(n.jsx)("div",{className:"column",children:Object(n.jsxs)(n.Fragment,{children:[k!==e&&Object(n.jsx)("div",{className:"column",onClick:function(){return S(e)},children:"X"}),k===e&&Object(n.jsxs)("div",{className:"row flex-space-between",style:{width:"35px",marginRight:"5px"},children:[Object(n.jsx)("div",{className:"column",onClick:function(){return S(null)},children:"\u274c"}),Object(n.jsx)("div",{className:"column",onClick:function(){return c({type:"key/delete",value:e})},children:"\u2705 "})]})]})})]})}),Object(n.jsx)("td",{className:"row flex-grow bordered-b",children:Object(n.jsx)(f.a,{className:"row flex-grow flex-end",value:l.keyMap[e],onChange:function(t){return c({type:"key/update",value:Object(a.a)({},e,t)})},onlyUnique:!0})})]},e)})),Object(n.jsx)("tr",{children:Object(n.jsxs)("td",{className:"row keyentry-create",children:[Object(n.jsx)("input",{type:"text",className:"flexGrow ",value:p,onChange:function(e){var t=e.target.value;return y(t)},onKeyPress:function(e){return"Enter"===e.code&&R()},placeholder:"New Key"}),Object(n.jsx)("input",{type:"button",value:"Add",disabled:!p||l.keyMap[p],onClick:function(){return R()}})]})})]})]})]}),Object(n.jsx)("div",{className:"row flex-end ",children:E&&Object(n.jsx)("input",{style:{marginRight:"20px"},type:"button",value:"Update",onClick:function(){return r({type:"preset/key/update",value:l})}})}),Object(n.jsx)(b,{steps:m,isOpen:A,onRequestClose:function(){return L(!1)}})]})},h=r("wx14"),j=r("zLVn"),O=o.useLayoutEffect,v=function(e){var t=Object(o.useRef)(e);return O((function(){t.current=e})),t},x=function(e,t){"function"!==typeof e?e.current=t:e(t)},g=function(e,t){var r=Object(o.useRef)();return Object(o.useCallback)((function(n){e.current=n,r.current&&x(r.current,null),r.current=t,t&&x(t,n)}),[t])},w={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},k=function(e){Object.keys(w).forEach((function(t){e.style.setProperty(t,w[t],"important")}))},S=null;var N=function(){},M=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width"],C=!!document.documentElement.currentStyle,P=function(e,t){var r=e.cacheMeasurements,n=e.maxRows,a=e.minRows,l=e.onChange,c=void 0===l?N:l,i=e.onHeightChange,s=void 0===i?N:i,u=Object(j.a)(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]);var d=void 0!==u.value,p=Object(o.useRef)(null),f=g(p,t),b=Object(o.useRef)(0),m=Object(o.useRef)(),y=function(){var e=p.current,t=r&&m.current?m.current:function(e){var t=window.getComputedStyle(e);if(null===t)return null;var r,n=(r=t,M.reduce((function(e,t){return e[t]=r[t],e}),{})),a=n.boxSizing;return""===a?null:(C&&"border-box"===a&&(n.width=parseFloat(n.width)+parseFloat(n.borderRightWidth)+parseFloat(n.borderLeftWidth)+parseFloat(n.paddingRight)+parseFloat(n.paddingLeft)+"px"),{sizingStyle:n,paddingSize:parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),borderSize:parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth)})}(e);if(t){m.current=t;var o=function(e,t,r,n){void 0===r&&(r=1),void 0===n&&(n=1/0),S||((S=document.createElement("textarea")).setAttribute("tab-index","-1"),S.setAttribute("aria-hidden","true"),k(S)),null===S.parentNode&&document.body.appendChild(S);var a=e.paddingSize,o=e.borderSize,l=e.sizingStyle,c=l.boxSizing;Object.keys(l).forEach((function(e){var t=e;S.style[t]=l[t]})),k(S),S.value=t;var i=function(e,t){var r=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?r+t.borderSize:r-t.paddingSize}(S,e);S.value="x";var s=S.scrollHeight-a,u=s*r;"border-box"===c&&(u=u+a+o),i=Math.max(u,i);var d=s*n;return"border-box"===c&&(d=d+a+o),[i=Math.min(d,i),s]}(t,e.value||e.placeholder||"x",a,n),l=o[0],c=o[1];b.current!==l&&(b.current=l,e.style.setProperty("height",l+"px","important"),s(l,{rowHeight:c}))}};return Object(o.useLayoutEffect)(y),function(e){var t=v(e);Object(o.useEffect)((function(){var e=function(e){t.current(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[])}(y),Object(o.createElement)("textarea",Object(h.a)({},u,{onChange:function(e){d||y(),c(e)},ref:f}))},_=Object(o.forwardRef)(P),D=c()((function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"QttU"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["QttU"]},modules:["reactour"]}}),T=[{selector:".template-text",content:"The Keys and Values in this list will replace the {{Keys}} in the Template"},{selector:".template-list",content:"Switch between sets of Keys and Values by selecting a Set in this list"},{selector:".template-files",content:"Download a File of all your current KeyMaps, or load a set of KeyMaps using the FilePicker"}],R=function(e){var t=e.presetStore,r=e.presetDispatch,a=e.templateStore,l=e.templateDispatch,c=Object(o.useState)(""),i=c[0],p=c[1],f=Object(o.useState)(""),b=f[0],m=f[1],y=Object(o.useState)(null),h=y[0],j=y[1],O=Object(o.useRef)(),v=Object(o.useMemo)((function(){return a.template!==t.TemplateStates[a.name].template}),[a,t]),x=Object(o.useState)(!1),g=x[0],w=x[1],k=Object(o.useState)(!1),S=k[0],N=k[1];return Object(n.jsxs)("div",{className:"template-container column  padded rounded elevated bordered",style:{flexGrow:5},children:[Object(n.jsx)(d,{text:"Template",help:function(){return N(!0)}}),Object(n.jsxs)("div",{className:"row flex-grow padded-half",children:[Object(n.jsxs)("div",{className:"template-list column padded flex-start",children:[Object(n.jsx)("div",{className:"wide row white flex-start ",children:Object(n.jsx)("input",{className:"wide",type:"text",placeholder:"Filter",value:b,onChange:function(e){var t=e.target.value;return m(t)}})}),Object(n.jsxs)("div",{className:"column flex-start bordered elevated ",style:{overflowY:"auto",maxHeight:"300px",minWidth:"150px"},children:[Object.keys(t.TemplateStates).filter((function(e){return!b||e.toLowerCase().indexOf(b.toLowerCase())>=0})).map((function(e){return Object(n.jsxs)("div",{className:"row flex-space-between bordered-b ".concat(a.name===e?"lightgrey":""),children:[Object(n.jsx)("div",{className:"flex-grow",onClick:function(r){r.target.value;l({type:"template/load-from-preset",value:{presetStore:t,name:e}})},style:{padding:"3px"},children:e},e),e!==a.name&&Object(n.jsxs)(n.Fragment,{children:[h!==e&&Object(n.jsx)("div",{className:"column",onClick:function(){return j(e)},children:"X"}),h===e&&Object(n.jsxs)("div",{className:"row flex-space-between",style:{width:"35px",marginRight:"5px"},children:[Object(n.jsx)("div",{className:"column",onClick:function(){return j(null)},children:"\u274c"}),Object(n.jsx)("div",{className:"column",onClick:function(){return r({type:"preset/template/delete",value:e})},children:"\u2705 "})]})]})]})})),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("input",{type:"text",placeholder:"...new template name",value:i,onChange:function(e){var t=e.target.value;return p(t)},onKeyPress:function(e){"Enter"===e.code&&(r({type:"preset/template/add",value:{templateStore:a,newTemplateName:i,templateDispatch:l}}),p(""))}}),Object(n.jsx)("input",{type:"button",value:"Add",disabled:!i||0===i.length||t.TemplateStates[i],onClick:function(){r({type:"preset/template/add",value:{templateStore:a,newTemplateName:i,templateDispatch:l}}),p("")}})]})]}),Object(n.jsxs)("div",{className:"template-files row wide flex-space-between pt",children:[!g&&Object(n.jsx)("input",{type:"button",value:"Upload File",onClick:function(){return w(!0)}}),g&&Object(n.jsx)("input",{ref:O,type:"file",accept:"text/json",onChange:function(e){u(O.current.files[0],(function(e){return r({type:"preset/template/load-from-file",value:e})})),w(!1)}}),Object(n.jsx)("input",{type:"button",value:"Export",onClick:function(){return s("templates.json",t.TemplateStates)}})]})]}),Object(n.jsx)(_,{type:"textarea",minRows:5,className:"padded rounded elevated flex-grow template-text",value:a.template,onChange:function(e){var t=e.target.value;return l({type:"template/update",value:t})},placeholder:"...Paste your template here..."})]}),Object(n.jsx)("div",{className:"row flex-end",children:v&&Object(n.jsx)("input",{style:{marginRight:"20px"},type:"button",value:"Update",onClick:function(){return r({type:"preset/template/update",value:a})}})}),Object(n.jsx)(D,{steps:T,isOpen:S,onRequestClose:function(){return N(!1)}})]})};function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=c()((function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"QttU"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["QttU"]},modules:["reactour"]}}),L=[{selector:".output-container",content:"This area combines your selected KeyMap with your selected Template"},{selector:".dimension-selectors",content:"Select the current Value for each Key, the output will recompute the new output"}],F=function(e){var t=e.templateStore,r=e.keyMapStore,l=Object(o.useState)(!1),c=l[0],i=l[1],s=Object(o.useState)(!1),u=s[0],p=s[1],f=Object(o.useRef)(null),b=Object(o.useState)({}),m=b[0],y=b[1];Object(o.useEffect)((function(){var e=Object.keys(r.keyMap).reduce((function(e,t){return m[t]&&r.keyMap[t].includes(m[t])?e[t]=m[t]:e[t]=r.keyMap[t][0]||"",e}),{});y(e)}),[r]);var h=Object(o.useMemo)((function(){var e=t.template;return Object.keys(r.keyMap).forEach((function(t){var n=r.keyMap[t];t&&n&&e&&e.replaceAll&&(e=e.replaceAll("{{".concat(t,"}}"),m[t]))})),e}),[t,r,m]);return Object(n.jsxs)("div",{className:"output-container wide column  padded rounded elevated bordered",children:[Object(n.jsx)(d,{text:"Output",help:function(){return i(!0)}}),Object(n.jsxs)("div",{className:"row flex-grow padded-half",children:[Object(n.jsx)("div",{className:"column dimension-selectors",children:Object.keys(r.keyMap).map((function(e){return Object(n.jsxs)("div",{className:"column outlined",style:{marginTop:"15px"},children:[Object(n.jsx)("div",{className:"row big-text bordered-b half-padded",children:e}),Object(n.jsx)("div",{style:{maxHeight:"300px",maxWidth:"300px",overflowY:"auto"},children:r.keyMap[e].map((function(t){return Object(n.jsx)("div",{onClick:function(){return y(K(K({},m),{},Object(a.a)({},e,t)))},className:"row ".concat(m[e]===t?"lightgrey":""),children:t})}))})]})}))}),Object(n.jsxs)("div",{className:"column flex-grow",children:[Object(n.jsx)("div",{className:"row flex-start half-padded big-text",children:Object(n.jsx)("button",{onClick:function(){f.current.select(),document.execCommand("copy"),p(!0),setTimeout((function(){return p(!1)}),1e3)},children:u?"Coppied!":"Copy"})}),Object(n.jsx)(_,{type:"textarea",ref:f,minRows:5,className:"padded rounded elevated flex-grow",value:h,placeholder:"Your text will appear here once entered"})]})]}),Object(n.jsx)(A,{steps:L,isOpen:c,onRequestClose:function(){return i(!1)}})]})},J=r("bKtQ"),z=r("JfgW");function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=c()((function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"QttU"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["QttU"]},modules:["reactour"]}}),q=[{selector:".inputs",content:"Create templated outputs by pairing a Key-Map with a Template."},{selector:".template-container",content:"Inside the Template, use {{ }} to wrap Keys. The Output will replace your {{ }} with the values provided for that Key"},{selector:".keymap-container",content:"Add and Remove Keys which will match and replace {{ }} areas of the Template"}];t.default=function(){var e=Object(o.useState)(!1),t=e[0],r=e[1],a=Object(o.useState)(!1),l=a[0],c=a[1],s=Object(o.useReducer)(z.e,z.f),u=s[0],d=s[1],p=Object(o.useReducer)(z.a,z.b),f=p[0],b=p[1],m=Object(o.useReducer)(z.c,z.d),h=m[0],j=m[1];return Object(n.jsxs)("div",{className:"view-wrapper",children:[Object(n.jsx)(i.a,{title:"City Service Content Generator"}),Object(n.jsx)(J.a,{text:"Live Template Constructor",dark:!0,help:function(){return r(!0)}}),Object(n.jsx)("div",{className:"row flex-end",children:Object(n.jsx)("input",{type:"text",style:{color:"white",backgroundColor:"red",fontSize:"30px",textAlign:"center"},className:"half-padded rounded",value:l?"Confirm Reset":"Reset",onClick:function(){l?(j({type:"preset/reset",value:{keyMapDispatch:b,templateDispatch:d}}),c(!1)):c(!0)}})}),Object(n.jsxs)("div",{className:"inputs row padded flex-wrap",children:[Object(n.jsx)(y,W({},{presetStore:h,presetDispatch:j,keyMapStore:f,keyMapDispatch:b})),Object(n.jsx)(R,W({},{presetStore:h,presetDispatch:j,templateStore:u,templateDispatch:d}))]}),Object(n.jsx)("div",{className:"inputs row padded flex-start",children:Object(n.jsx)(F,W({},{templateStore:u,keyMapStore:f}))}),Object(n.jsx)(I,{steps:q,isOpen:t,onRequestClose:function(){return r(!1)}})]})}},Vvt1:function(e,t,r){e.exports=r("a6RD")},a6RD:function(e,t,r){"use strict";var n=r("lSNA");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=i,t.default=function(e,t){var r=l.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=o(o({},n),e));if(n=o(o({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=l.default.Map;var a={},c=e.modules();Object.keys(c).forEach((function(e){var t=c[e];"function"!==typeof t.then?a[e]=t:a[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=a}n.loadableGenerated&&delete(n=o(o({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,i(r,n);delete n.ssr}return r(n)};c(r("q1tI"));var l=c(r("2qu3"));function c(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}},jwwS:function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=a},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}}},[["Bdpc",1,0,2,3,5]]]);