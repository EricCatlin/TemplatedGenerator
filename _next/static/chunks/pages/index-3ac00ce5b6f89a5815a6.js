_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"8oxB":function(e,t){var n,r,c=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var s,l=[],u=!1,f=-1;function h(){u&&s&&(u=!1,s.length?l=s.concat(l):f=-1,l.length&&d())}function d(){if(!u){var e=a(h);u=!0;for(var t=l.length;t;){for(s=l,l=[];++f<t;)s&&s[f].run();f=-1,t=l.length}s=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=v,c.addListener=v,c.once=v,c.off=v,c.removeListener=v,c.removeAllListeners=v,c.emit=v,c.prependListener=v,c.prependOnceListener=v,c.listeners=function(e){return[]},c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},E4MH:function(e,t,n){(function(t){e.exports={exportPathMap:function(){return{"/":{page:"/"}}},assetPrefix:t.env.NEXT_PUBLIC_REPO,github:"https://github.com/PanatdaCatlin/"}}).call(this,n("8oxB"))},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("nKUr"),c=n("YFqc"),o=n.n(c),i=(n("q1tI"),n("oTOh")),a=n("E4MH");function s(e){return Object(r.jsxs)("div",{className:"view-wrapper",children:[Object(r.jsx)(i.a,{title:"Workflow Enhancement Tools",home:!0}),Object(r.jsx)("div",{className:"column pt",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"row thin p elevated rounded",children:[Object(r.jsx)(o.a,{href:"/city-tool",children:Object(r.jsxs)("div",{className:"column p elevated rounded outlined hoverable clickable",children:[Object(r.jsx)("span",{className:"big-text p",children:"City Service Generator"}),Object(r.jsx)("hr",{className:"wide"}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("img",{src:"".concat(a.github).concat(a.assetPrefix,"city.svg"),style:{height:"200px"}})})]})}),Object(r.jsx)(o.a,{href:"/template-generator",children:Object(r.jsxs)("div",{className:"column p elevated rounded outlined hoverable clickable",children:[Object(r.jsx)("span",{className:"big-text p",children:"Template Generator"}),Object(r.jsx)("hr",{className:"wide"}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("img",{src:"".concat(a.github).concat(a.assetPrefix,"braces.svg"),style:{height:"200px"}})})]})})]})})})]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var o=c(n("q1tI")),i=n("elyg"),a=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),c=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,i.resolveHref)(c,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,i.resolveHref)(c,e.as):a||o}}),[c,e.href,e.as]),h=f.href,d=f.as,p=e.children,v=e.replace,m=e.shallow,b=e.scroll,g=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var j=o.Children.only(p),x=j&&"object"===typeof j&&j.ref,w=(0,s.useIntersection)({rootMargin:"200px"}),y=r(w,2),O=y[0],T=y[1],N=o.default.useCallback((function(e){O(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,O]);(0,o.useEffect)((function(){var e=T&&t&&(0,i.isLocalURL)(h),r="undefined"!==typeof g?g:n&&n.locale,c=l[h+"%"+d+(r?"%"+r:"")];e&&!c&&u(n,h,d,{locale:r})}),[d,h,T,g,t,n]);var E={ref:N,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,o,a,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:o,locale:s,scroll:a}).then((function(e){e&&a&&document.body.focus()})))}(e,n,h,d,v,m,b,g)},onMouseEnter:function(e){(0,i.isLocalURL)(h)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),u(n,h,d,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var L="undefined"!==typeof g?g:n&&n.locale,_=(0,i.getDomainLocale)(d,L,n&&n.locales,n&&n.domainLocales);E.href=_||(0,i.addBasePath)((0,i.addLocale)(d,L,n&&n.defaultLocale))}return o.default.cloneElement(j,E)};t.default=f},oTOh:function(e,t,n){"use strict";var r=n("nKUr"),c=(n("q1tI"),n("YFqc")),o=n.n(c),i=n("E4MH");t.a=function(e){var t=e.title,n=e.home;return Object(r.jsxs)("nav",{className:"row flex-start",style:{backgroundColor:"#232323",height:"100px"},children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)(o.a,{href:"/",children:Object(r.jsx)("img",{style:{height:"100px",width:"150px"},src:"".concat(i.github).concat(i.assetPrefix,"PNWLogo.png")})}),!n&&Object(r.jsx)(o.a,{href:"/",children:Object(r.jsx)("a",{className:"big-text",style:{color:"white",alignSelf:"center"},children:"<Home"})})]}),Object(r.jsx)("div",{className:"row wide",children:Object(r.jsx)("h1",{style:{color:"white",alignSelf:"center"},children:t})}),Object(r.jsx)(o.a,{href:"https://github.com/PanatdaCatlin/TemplatedGenerator",children:Object(r.jsx)("img",{src:"".concat(i.github).concat(i.assetPrefix,"github-corner-right.svg"),style:{height:"auto",width:"118px"}})})]})}},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),c=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],h=u[1],d=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(c))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){a||f||(0,i.default)((function(){return h(!0)}))}),[f]),[d,f]};var o=n("q1tI"),i=c(n("0G5g")),a="undefined"!==typeof IntersectionObserver;var s=new Map},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1]]]);