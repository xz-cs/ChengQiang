flarum.core=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=88)}([function(t,e,n){"use strict";function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(4),o=function(){function t(t,e){void 0===t&&(t={}),void 0===e&&(e=null),this.data=t,this.freshness=new Date,this.exists=!1,this.store=e}var e=t.prototype;return e.id=function(){return this.data.id},e.attribute=function(t){return this.data.attributes[t]},e.pushData=function(e){for(var n in e)if("object"==typeof e[n])for(var i in this.data[n]=this.data[n]||{},e[n])e[n][i]instanceof t&&(e[n][i]={data:t.getIdentifier(e[n][i])}),this.data[n][i]=e[n][i];else this.data[n]=e[n];this.freshness=new Date},e.pushAttributes=function(t){this.pushData({attributes:t})},e.save=function(e,n){var o=this;void 0===n&&(n={});var r={type:this.data.type,id:this.data.id,attributes:e};if(e.relationships){for(var s in r.relationships={},e.relationships){var a=e.relationships[s];r.relationships[s]={data:a instanceof Array?a.map(t.getIdentifier):t.getIdentifier(a)}}delete e.relationships}var u=this.copyData();this.pushData(r);var c={data:r};return n.meta&&(c.meta=n.meta),app.request(Object(i.a)({method:this.exists?"PATCH":"POST",url:app.forum.attribute("apiUrl")+this.apiEndpoint(),data:c},n)).then((function(t){return o.store.data[t.data.type]=o.store.data[t.data.type]||{},o.store.data[t.data.type][t.data.id]=o,o.store.pushPayload(t)}),(function(t){throw o.pushData(u),m.lazyRedraw(),t}))},e.delete=function(t,e){var n=this;return void 0===e&&(e={}),this.exists?app.request(Object(i.a)({method:"DELETE",url:app.forum.attribute("apiUrl")+this.apiEndpoint(),data:t},e)).then((function(){n.exists=!1,n.store.remove(n)})):m.deferred().resolve().promise},e.apiEndpoint=function(){return"/"+this.data.type+(this.exists?"/"+this.data.id:"")},e.copyData=function(){return JSON.parse(JSON.stringify(this.data))},t.attribute=function(t,e){return function(){var n=this.data.attributes&&this.data.attributes[t];return e?e(n):n}},t.hasOne=function(t){return function(){if(this.data.relationships){var e=this.data.relationships[t];if(e)return app.store.getById(e.data.type,e.data.id)}return!1}},t.hasMany=function(t){return function(){if(this.data.relationships){var e=this.data.relationships[t];if(e)return e.data.map((function(t){return app.store.getById(t.type,t.id)}))}return!1}},t.transformDate=function(t){return t?new Date(t):null},t.getIdentifier=function(t){return{type:t.data.type,id:t.data.id}},t}()},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n(4),o=n(0),r=n(3),s=n(6),a=n(10),u=n(9),c=n(14),l=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.view=function(){var t=Object(i.a)({},this.props);delete t.children,t.className=t.className||"",t.type=t.type||"button",t.title&&!this.props.children&&(t["aria-label"]=t.title),!t.title&&this.props.children&&(t.title=Object(u.a)(this.props.children)),Object(a.a)(t,"icon")&&(t.className+=" hasIcon");var e=Object(a.a)(t,"loading");return(t.disabled||e)&&(t.className+=" disabled"+(e?" loading":""),delete t.onclick),m("button",t,this.getButtonContent())},n.getButtonContent=function(){var t=this.props.icon;return[t&&!0!==t?Object(s.a)(t,{className:"Button-icon"}):"",this.props.children?m("span",{className:"Button-label"},this.props.children):"",this.props.loading?c.a.component({size:"tiny",className:"LoadingIndicator--inline"}):""]},e}(r.a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(4),o=function(){function t(t,e){void 0===t&&(t={}),void 0===e&&(e=null),e&&(t.children=e),this.constructor.initProps(t),this.props=t,this.element=null,this.retain=!1,this.init()}var e=t.prototype;return e.init=function(){},e.onunload=function(){},e.render=function(){var t=this,e=this.retain?{subtree:"retain"}:this.view();e.attrs=e.attrs||{};var n=e.attrs.config;return e.attrs.config=function(){for(var e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];t.element=i[0],t.config.apply(t,i.slice(1)),n&&n.apply(t,i)},e},e.$=function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){var e=$(this.element);return t?e.find(t):e})),e.config=function(){},e.view=function(){throw new Error("Component#view must be implemented by subclass")},t.component=function(t,e){void 0===t&&(t={}),void 0===e&&(e=null);var n=Object(i.a)({},t);e&&(n.children=e),this.initProps(n);var o=function(t){return t.props=n,t.render()};o.$original=this.prototype.view;var r={controller:this.bind(void 0,n),view:o,props:n,component:this};return n.key&&(r.attrs={key:n.key}),r},t.initProps=function(t){},t}()},function(t,e,n){"use strict";function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=function(t,e){this.content=t,this.priority=e},o=function(){function t(){this.items={}}var e=t.prototype;return e.isEmpty=function(){for(var t in this.items)if(this.items.hasOwnProperty(t))return!1;return!0},e.has=function(t){return!!this.items[t]},e.get=function(t){return this.items[t].content},e.add=function(t,e,n){return void 0===n&&(n=0),this.items[t]=new i(e,n),this},e.replace=function(t,e,n){return void 0===e&&(e=null),void 0===n&&(n=null),this.items[t]&&(null!==e&&(this.items[t].content=e),null!==n&&(this.items[t].priority=n)),this},e.remove=function(t){return delete this.items[t],this},e.merge=function(t){for(var e in t.items)t.items.hasOwnProperty(e)&&t.items[e]instanceof i&&(this.items[e]=t.items[e]);return this},e.toArray=function(){var t=[];for(var e in this.items)this.items.hasOwnProperty(e)&&this.items[e]instanceof i&&(this.items[e].content=Object(this.items[e].content),this.items[e].content.itemName=e,t.push(this.items[e]),this.items[e].key=t.length);return t.sort((function(t,e){return t.priority===e.priority?t.key-e.key:t.priority>e.priority?-1:1})).map((function(t){return t.content}))},t}()},function(t,e,n){"use strict";function i(t,e){return void 0===e&&(e={}),e.className="icon "+t+" "+(e.className||""),m("i",e)}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(20),o=n(24);function r(t){return t&&t.component===i.a}function s(t){return t instanceof Array||(t=[t]),function(t){var e,n=[];return t.forEach((function(i,o){(!r(i)||e&&!r(e)&&o!==t.length-1)&&(e=i,n.push(i))})),n}(t).map((function(t){var e=t.component&&t.component.isListItem,n=t.component&&t.component.isActive&&t.component.isActive(t.props),i=t.props?t.props.itemClassName:t.itemClassName;return e&&(t.attrs=t.attrs||{},t.attrs.key=t.attrs.key||t.itemName),e?t:m("li",{className:Object(o.a)([t.itemName?"item-"+t.itemName:"",i,n?"active":""]),key:t.itemName},t)}))}},function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";function i(t){return t instanceof Array?t.map((function(t){return i(t)})).join(""):"object"==typeof t&&null!==t?i(t.children):t}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";function i(t,e){var n=t[e];return delete t[e],n}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";var i=n(4),o=n(0),r=n(1),s=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e}(r.a);Object(i.a)(s.prototype,{nameSingular:r.a.attribute("nameSingular"),namePlural:r.a.attribute("namePlural"),color:r.a.attribute("color"),icon:r.a.attribute("icon"),isHidden:r.a.attribute("isHidden")}),s.ADMINISTRATOR_ID="1",s.GUEST_ID="2",s.MEMBER_ID="3",e.a=s},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(0),o=n(3),r=(n(16),n(2)),s=function(t){function e(){return t.apply(this,arguments)||this}Object(i.a)(e,t);var n=e.prototype;return n.init=function(){this.alert=null},n.view=function(){return this.alert&&(this.alert.props.dismissible=!1),m("div",{className:"Modal modal-dialog "+this.className()},m("div",{className:"Modal-content"},this.isDismissible()?m("div",{className:"Modal-close App-backControl"},r.a.component({icon:"fas fa-times",onclick:this.hide.bind(this),className:"Button Button--icon Button--link"})):"",m("form",{onsubmit:this.onsubmit.bind(this)},m("div",{className:"Modal-header"},m("h3",{className:"App-titleControl App-titleControl--text"},this.title())),alert?m("div",{className:"Modal-alert"},this.alert):"",this.content())))},n.isDismissible=function(){return!0},n.className=function(){},n.title=function(){},n.content=function(){},n.onsubmit=function(){},n.onready=function(){this.$("form").find("input, select, textarea").first().focus().select()},n.onhide=function(){},n.hide=function(){app.modal.close()},n.loaded=function(){this.loading=!1,m.redraw()},n.onerror=function(t){this.alert=t.alert,m.redraw(),422===t.status&&t.response.errors?this.$("form [name="+t.response.errors[0].source.pointer.replace("/data/attributes/","")+"]").select():this.onready()},e}(o.a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(0),o=n(3),r=n(6),s=n(7),a=function(t){function e(){return t.apply(this,arguments)||this}Object(i.a)(e,t),e.initProps=function(e){t.initProps.call(this,e),e.className=e.className||"",e.buttonClassName=e.buttonClassName||"",e.menuClassName=e.menuClassName||"",e.label=e.label||"",e.caretIcon=void 0!==e.caretIcon?e.caretIcon:"fas fa-caret-down"};var n=e.prototype;return n.init=function(){this.showing=!1},n.view=function(){var t=this.props.children?Object(s.a)(this.props.children):[];return m("div",{className:"ButtonGroup Dropdown dropdown "+this.props.className+" itemCount"+t.length+(this.showing?" open":"")},this.getButton(),this.getMenu(t))},n.config=function(t){var e=this;t||(this.$().on("shown.bs.dropdown",(function(){e.showing=!0,e.props.onshow&&e.props.onshow(),m.redraw();var t=e.$(".Dropdown-menu"),n=t.hasClass("Dropdown-menu--right");t.removeClass("Dropdown-menu--top Dropdown-menu--right"),t.toggleClass("Dropdown-menu--top",t.offset().top+t.height()>$(window).scrollTop()+$(window).height()),t.offset().top<0&&t.removeClass("Dropdown-menu--top"),t.toggleClass("Dropdown-menu--right",n||t.offset().left+t.width()>$(window).scrollLeft()+$(window).width())})),this.$().on("hidden.bs.dropdown",(function(){e.showing=!1,e.props.onhide&&e.props.onhide(),m.redraw()})))},n.getButton=function(){return m("button",{className:"Dropdown-toggle "+this.props.buttonClassName,"data-toggle":"dropdown",onclick:this.props.onclick},this.getButtonContent())},n.getButtonContent=function(){return[this.props.icon?Object(r.a)(this.props.icon,{className:"Button-icon"}):"",m("span",{className:"Button-label"},this.props.label),this.props.caretIcon?Object(r.a)(this.props.caretIcon,{className:"Button-caret"}):""]},n.getMenu=function(t){return m("ul",{className:"Dropdown-menu dropdown-menu "+this.props.menuClassName},t)},e}(o.a)},function(t,e,n){"use strict";var i=n(4),o=n(0),r=n(3),s=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",opacity:.25,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"none",position:"absolute"},u=function(){function t(t){void 0===t&&(t={}),this.opts=s({},a,t)}return t.prototype.spin=function(t){var e,n,i,o=this;this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),d(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),t&&t.insertBefore(this.el,t.firstChild||null),"undefined"!=typeof requestAnimationFrame?(e=requestAnimationFrame,n=function(){return performance.now()}):(e=function(t){return setTimeout(t,1e3/o.opts.fps)},n=function(){return Date.now()});var r=0,s=function(){var t,a,u=n();if(void 0===i&&(i=u-1),r+=(t=u-i,a=o.opts.speed,t/1e3*a),i=u,r>1&&(r-=Math.floor(r)),o.el.childNodes.length===o.opts.lines)for(var l=0;l<o.opts.lines;l++){var d=c(l,r,o.opts);o.el.childNodes[l].childNodes[0].style.opacity=d.toString()}o.animateId=o.el?e(s):void 0};return function(t,e){var n=Math.round(e.corners*e.width*500)/1e3+"px",i="none";!0===e.shadow?i="0 2px 4px #000":"string"==typeof e.shadow&&(i=e.shadow);for(var o=function(t){for(var e=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],i=0,o=t.split(",");i<o.length;i++){var r=o[i].match(e);if(null!==r){var s=+r[2],a=+r[5],u=r[4],c=r[7];0!==s||u||(u=c),0!==a||c||(c=u),u===c&&n.push({prefix:r[1]||"",x:s,y:a,xUnits:u,yUnits:c,end:r[8]})}}return n}(i),r=0;r<e.lines;r++){var s=~~(360/e.lines*r+e.rotate),a=d(document.createElement("div"),{position:"absolute",top:-e.width/2+"px",width:e.length+e.width+"px",height:e.width+"px",background:p(e.fadeColor,r),borderRadius:n,transformOrigin:"left",transform:"rotate("+s+"deg) translateX("+e.radius+"px)"}),u=d(document.createElement("div"),{width:"100%",height:"100%",background:p(e.color,r),borderRadius:n,boxShadow:h(o,s),opacity:e.opacity});a.appendChild(u),t.appendChild(a)}}(this.el,this.opts),s(),this},t.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},t}();function c(t,e,n){var i=e-(t+1)/n.lines*n.direction;(i<0||i>1)&&(i+=n.direction);var o=1-i/(n.trail/100);return o<0?n.opacity:o*(1-n.opacity)+n.opacity}function l(t,e){if(void 0!==t.style[e])return e;var n="ms"+e.charAt(0).toUpperCase()+e.slice(1);return void 0!==t.style[n]?n:""}function d(t,e){for(var n in e)t.style[l(t,n)||n]=e[n];return t}function p(t,e){return"string"==typeof t?t:t[e%t.length]}function h(t,e){for(var n=[],i=0,o=t;i<o.length;i++){var r=o[i],s=f(r.x,r.y,e);n.push(r.prefix+s[0]+r.xUnits+" "+s[1]+r.yUnits+r.end)}return n.join(", ")}function f(t,e,n){var i=n*Math.PI/180,o=Math.sin(i),r=Math.cos(i);return[Math.round(1e3*(t*r+e*o))/1e3,Math.round(1e3*(-t*o+e*r))/1e3]}n.d(e,"a",(function(){return g}));var g=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.view=function(){var t=Object(i.a)({},this.props);return t.className="LoadingIndicator "+(t.className||""),delete t.size,m("div",t,m.trust("&nbsp;"))},n.config=function(t){if(!t){var e={zIndex:"auto",color:this.$().css("color")};switch(this.props.size){case"large":Object(i.a)(e,{lines:10,length:8,width:4,radius:8});break;case"tiny":Object(i.a)(e,{lines:8,length:2,width:2,radius:3});break;default:Object(i.a)(e,{lines:8,length:4,width:3,radius:5})}new u(e).spin(this.element)}},e}(r.a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(4);function o(t,e){void 0===e&&(e={}),e.className="Avatar "+(e.className||"");var n="",o="undefined"===e.title||e.title;if(o||delete e.title,t){var r=t.displayName()||"?",s=t.avatarUrl();if(o&&(e.title=e.title||r),s)return m("img",Object(i.a)({},e,{src:s}));n=r.charAt(0).toUpperCase(),e.style={background:t.color()}}return m("span",e,n)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n(4),o=n(0),r=n(3),s=n(2),a=n(7),u=n(10),c=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.view=function(){var t=Object(i.a)({},this.props),e=Object(u.a)(t,"type");t.className="Alert Alert--"+e+" "+(t.className||"");var n=Object(u.a)(t,"children"),o=Object(u.a)(t,"controls")||[],r=Object(u.a)(t,"dismissible"),c=Object(u.a)(t,"ondismiss"),l=[];return(r||void 0===r)&&l.push(m(s.a,{icon:"fas fa-times",className:"Button Button--link Button--icon Alert-dismiss",onclick:c})),m("div",t,m("span",{className:"Alert-body"},n),m("ul",{className:"Alert-controls"},Object(a.a)(o.concat(l))))},e}(r.a)},function(t,e,n){"use strict";function i(t){var e=t&&t.displayName()||app.translator.trans("core.lib.username.deleted_text");return m("span",{className:"username"},e)}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i,o=e.slice(0,-1),r=e.slice(-1)[0],s={};return function(){var t=this,e=!1;return o.forEach((function(n){var i="function"==typeof t[n]?t[n]():t[n];s[n]!==i&&(e=!0,s[n]=i)})),e&&(i=r.apply(this,o.map((function(t){return s[t]})))),i}}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(0),o=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.initProps=function(t){t.active=this.isActive(t),t.config=t.config||m.route},e.prototype.view=function(){var e=t.prototype.view.call(this);return e.tag="a",e},e.isActive=function(t){return void 0!==t.active?t.active:m.route()===t.href},e}(n(2).a)},function(t,e,n){"use strict";var i=n(0),o=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.view=function(){return m("li",{className:"Dropdown-separator"})},e}(n(3).a);o.isListItem=!0,e.a=o},function(t,e,n){"use strict";function i(t){var e=moment(t),n=moment();e.isAfter(n)&&(e=n);return e.diff(moment())<-2592e6?e.year()===moment().year()?e.format("D MMM"):e.format("ll"):e.fromNow()}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n(4),o=n(0),r=n(3),s=n(6),a=n(10),u=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.view=function(){var t=Object(i.a)({},this.props),e=Object(a.a)(t,"type"),n=Object(a.a)(t,"icon");return t.className="Badge "+(e?"Badge--"+e:"")+" "+(t.className||""),t.title=Object(a.a)(t,"label")||"",m("span",t,n?Object(s.a)(n,{className:"Badge-icon"}):m.trust("&nbsp;"))},n.config=function(t){t||this.props.label&&this.$().tooltip({container:"body"})},e}(r.a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(0),o=n(3),r=n(7),s=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.view=function(){return m("fieldset",{className:this.props.className},m("legend",null,this.props.label),m("ul",null,Object(r.a)(this.props.children)))},e}(o.a)},function(t,e,n){"use strict";function i(t){var e;if(t instanceof Array)e=t.filter((function(t){return t}));else for(var n in e=[],t)t[n]&&e.push(n);return e.join(" ")}n.d(e,"a",(function(){return i}))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";function i(t,e,n){return void 0===n&&(n=0),(n>0?"...":"")+t.substring(n,n+e)+(t.length>n+e?"...":"")}function o(t){return t.toLowerCase().replace(/[^a-z0-9]/gi,"-").replace(/-+/g,"-").replace(/-$|^-/g,"")}function r(t){var e=t.replace(/(<\/p>|<br>)/g,"$1 &nbsp;").replace(/<img\b[^>]*>/gi," "),n=$("<div/>").html(e);return n.find(r.removeSelectors.join(",")).remove(),n.text().replace(/\s+/g," ").trim()}function s(t){return t.substr(0,1).toUpperCase()+t.substr(1)}n.r(e),n.d(e,"truncate",(function(){return i})),n.d(e,"slug",(function(){return o})),n.d(e,"getPlainContent",(function(){return r})),n.d(e,"ucfirst",(function(){return s})),r.removeSelectors=["blockquote","script"]},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(0),o=n(13),r=n(6),s=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.initProps=function(e){e.caretIcon=void 0!==e.caretIcon?e.caretIcon:"fas fa-sort",t.initProps.call(this,e),e.className+=" Dropdown--select"},e.prototype.getButtonContent=function(){var t=this.props.children.filter((function(t){return t.props.active}))[0],e=t&&t.props.children||this.props.defaultLabel;return e instanceof Array&&(e=e[0]),[m("span",{className:"Button-label"},e),Object(r.a)(this.props.caretIcon,{className:"Button-caret"})]},e}(o.a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(0),o=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.initProps=function(e){t.initProps.call(this,e),e.group&&(e.icon=e.group.icon(),e.style={backgroundColor:e.group.color()},e.label=void 0===e.label?e.group.nameSingular():e.label,e.type="group--"+e.group.id(),delete e.group)},e}(n(22).a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(26);function o(t,e,n){if(!e&&!n)return t;var o=e instanceof RegExp?e:new RegExp(e,"gi"),r=t,s=0;return n&&(e&&(s=Math.max(0,t.search(o)-n/2)),r=Object(i.truncate)(r,n,s)),r=$("<div/>").text(r).html(),e&&(r=r.replace(o,"<mark>$&</mark>")),m.trust(r)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(0),o=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.initProps=function(e){t.initProps.call(this,e),e.className=(e.className||"")+" Checkbox--switch"},e.prototype.getDisplay=function(){return this.loading?t.prototype.getDisplay.call(this):""},e}(n(38).a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},o=function(){function t(t){this.callback=t,this.ticking=!1}var e=t.prototype;return e.loop=function(){var t=this;this.ticking||(i((function(){t.update(),t.ticking=!1})),this.ticking=!0)},e.update=function(){this.callback(window.pageYOffset)},e.start=function(){this.active||window.addEventListener("scroll",this.active=this.loop.bind(this))},e.stop=function(){window.removeEventListener("scroll",this.active),this.active=null},t}()},function(t,e,n){"use strict";n.r(e),n.d(e,"extend",(function(){return o})),n.d(e,"override",(function(){return r}));var i=n(4);function o(t,e,n){var o=t[e];t[e]=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=o?o.apply(this,e):void 0;return n.apply(this,[r].concat(e)),r},Object(i.a)(t[e],o)}function r(t,e,n){var o=t[e];t[e]=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return n.apply(this,[o.bind(this)].concat(e))},Object(i.a)(t[e],o)}},function(t,e,n){"use strict";function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n(4),o=n(0),r=n(1),s=n(48),a=n(5),u=n(18),c=n(28),l=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e}(r.a);Object(i.a)(l.prototype,{username:r.a.attribute("username"),displayName:r.a.attribute("displayName"),email:r.a.attribute("email"),isEmailConfirmed:r.a.attribute("isEmailConfirmed"),password:r.a.attribute("password"),avatarUrl:r.a.attribute("avatarUrl"),preferences:r.a.attribute("preferences"),groups:r.a.hasMany("groups"),joinTime:r.a.attribute("joinTime",r.a.transformDate),lastSeenAt:r.a.attribute("lastSeenAt",r.a.transformDate),markedAllAsReadAt:r.a.attribute("markedAllAsReadAt",r.a.transformDate),unreadNotificationCount:r.a.attribute("unreadNotificationCount"),newNotificationCount:r.a.attribute("newNotificationCount"),discussionCount:r.a.attribute("discussionCount"),commentCount:r.a.attribute("commentCount"),canEdit:r.a.attribute("canEdit"),canDelete:r.a.attribute("canDelete"),avatarColor:null,color:Object(u.a)("username","avatarUrl","avatarColor",(function(t,e,n){return n?"rgb("+n.join(", ")+")":e?(this.calculateAvatarColor(),""):"#"+Object(s.a)(t)})),isOnline:function(){return this.lastSeenAt()>moment().subtract(5,"minutes").toDate()},badges:function(){var t=new a.a,e=this.groups();return e&&e.forEach((function(e){t.add("group"+e.id(),c.a.component({group:e}))})),t},calculateAvatarColor:function(){var t=new Image,e=this;t.onload=function(){var t=new ColorThief;e.avatarColor=t.getColor(this),e.freshness=new Date,m.redraw()},t.crossOrigin="anonymous",t.src=this.avatarUrl()},savePreferences:function(t){var e=this.preferences();return Object(i.a)(e,t),this.save({preferences:e})}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=function(){function t(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.callbacks=e,this.data={}}var e=t.prototype;return e.retain=function(){var t=this,e=!1;return this.callbacks.forEach((function(n,i){var o=n();o!==t.data[i]&&(t.data[i]=o,e=!0)})),!e&&{subtree:"retain"}},e.check=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.callbacks=this.callbacks.concat(e)},e.invalidate=function(){this.data={}},t}()},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n(4),o=n(0),r=n(1),s=n(18),a=n(5),u=n(22),c=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e}(r.a);Object(i.a)(c.prototype,{title:r.a.attribute("title"),slug:r.a.attribute("slug"),createdAt:r.a.attribute("createdAt",r.a.transformDate),user:r.a.hasOne("user"),firstPost:r.a.hasOne("firstPost"),lastPostedAt:r.a.attribute("lastPostedAt",r.a.transformDate),lastPostedUser:r.a.hasOne("lastPostedUser"),lastPost:r.a.hasOne("lastPost"),lastPostNumber:r.a.attribute("lastPostNumber"),commentCount:r.a.attribute("commentCount"),replyCount:Object(s.a)("commentCount",(function(t){return Math.max(0,t-1)})),posts:r.a.hasMany("posts"),mostRelevantPost:r.a.hasOne("mostRelevantPost"),lastReadAt:r.a.attribute("lastReadAt",r.a.transformDate),lastReadPostNumber:r.a.attribute("lastReadPostNumber"),isUnread:Object(s.a)("unreadCount",(function(t){return!!t})),isRead:Object(s.a)("unreadCount",(function(t){return app.session.user&&!t})),hiddenAt:r.a.attribute("hiddenAt",r.a.transformDate),hiddenUser:r.a.hasOne("hiddenUser"),isHidden:Object(s.a)("hiddenAt",(function(t){return!!t})),canReply:r.a.attribute("canReply"),canRename:r.a.attribute("canRename"),canHide:r.a.attribute("canHide"),canDelete:r.a.attribute("canDelete"),removePost:function(t){var e=this.data.relationships,n=e&&e.posts;n&&n.data.some((function(e,i){if(t===e.id)return n.data.splice(i,1),!0}))},unreadCount:function(){var t=app.session.user;return t&&t.markedAllAsReadAt()<this.lastPostedAt()?Math.max(0,this.lastPostNumber()-(this.lastReadPostNumber()||0)):0},badges:function(){var t=new a.a;return this.isHidden()&&t.add("hidden",m(u.a,{type:"hidden",icon:"fas fa-trash",label:app.translator.trans("core.lib.badge.hidden_tooltip")})),t},postIds:function(){var t=this.data.relationships.posts;return t?t.data.map((function(t){return t.id})):[]}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(21);function o(t){var e=moment(t),n=e.format(),o=e.format("LLLL"),r=Object(i.a)(t);return m("time",{pubdate:!0,datetime:n,title:o,"data-humantime":!0},r)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(0),o=n(3),r=n(14),s=n(6),a=function(t){function e(){return t.apply(this,arguments)||this}Object(i.a)(e,t);var n=e.prototype;return n.init=function(){this.loading=!1},n.view=function(){var t="Checkbox "+(this.props.state?"on":"off")+" "+(this.props.className||"");return this.loading&&(t+=" loading"),this.props.disabled&&(t+=" disabled"),m("label",{className:t},m("input",{type:"checkbox",checked:this.props.state,disabled:this.props.disabled,onchange:m.withAttr("checked",this.onchange.bind(this))}),m("div",{className:"Checkbox-display"},this.getDisplay()),this.props.children)},n.getDisplay=function(){return this.loading?r.a.component({size:"tiny"}):Object(s.a)(this.props.state?"fas fa-check":"fas fa-times")},n.onchange=function(t){this.props.onchange&&this.props.onchange(t,this)},e}(o.a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=function(t,e,n,i){this.status=t,this.responseText=e,this.options=n,this.xhr=i;try{this.response=JSON.parse(e)}catch(t){this.response=null}this.alert=null}},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(0),o=n(3),r=n(2),s=n(19),a=function(t){function e(){return t.apply(this,arguments)||this}Object(i.a)(e,t);var n=e.prototype;return n.view=function(){var t=app,e=t.history,n=t.pane;return m("div",{className:"Navigation ButtonGroup "+(this.props.className||""),onmouseenter:n&&n.show.bind(n),onmouseleave:n&&n.onmouseleave.bind(n)},e.canGoBack()?[this.getBackButton(),this.getPaneButton()]:this.getDrawerButton())},n.config=function(t,e){e.retain=!0},n.getBackButton=function(){var t=app.history,e=t.getPrevious()||{};return s.a.component({className:"Button Navigation-back Button--icon",href:t.backUrl(),icon:"fas fa-chevron-left",title:e.title,config:function(){},onclick:function(e){e.shiftKey||e.ctrlKey||e.metaKey||2===e.which||(e.preventDefault(),t.back())}})},n.getPaneButton=function(){var t=app.pane;return t&&t.active?r.a.component({className:"Button Button--icon Navigation-pin"+(t.pinned?" active":""),onclick:t.togglePinned.bind(t),icon:"fas fa-thumbtack"}):""},n.getDrawerButton=function(){if(!this.props.drawer)return"";var t=app.drawer,e=app.session.user;return r.a.component({className:"Button Button--icon Navigation-drawer"+(e&&e.newNotificationCount()?" new":""),onclick:function(e){e.stopPropagation(),t.show()},icon:"fas fa-bars"})},e}(o.a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(0),o=n(3),r=n(6),s=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.view=function(){var t=this.props,e=t.options,n=t.onchange,i=t.value,o=t.disabled;return m("span",{className:"Select"},m("select",{className:"Select-input FormControl",onchange:n?m.withAttr("value",n.bind(this)):void 0,value:i,disabled:o},Object.keys(e).map((function(t){return m("option",{value:t},e[t])}))),Object(r.a)("fas fa-sort",{className:"Select-caret"}))},e}(o.a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(3);function o(t){var e=t.m,n=function t(n){for(var o=arguments.length,r=new Array(o>1?o-1:0),s=1;s<o;s++)r[s-1]=arguments[s];if(n.prototype&&n.prototype instanceof i.a){var a=r.slice(1);return 1===a.length&&Array.isArray(a[0])&&(a=a[0]),n.component(r[0],a)}var u=e.apply(this,arguments);return u.attrs.bidi&&t.bidi(u,u.attrs.bidi),u.attrs.route&&(u.attrs.href=u.attrs.route,u.attrs.config=t.route,delete u.attrs.route),u};Object.keys(e).forEach((function(t){return n[t]=e[t]})),n.lazyRedraw=function(){n.startComputation(),n.endComputation()},t.m=n}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(0),o=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.view=function(){return m("div",{className:"Placeholder"},m("p",null,this.props.text))},e}(n(3).a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(0),o=n(3),r=n(12),s=function(t){function e(){return t.apply(this,arguments)||this}Object(i.a)(e,t);var n=e.prototype;return n.init=function(){this.showing=!1,this.component=null},n.view=function(){return m("div",{className:"ModalManager modal fade"},this.component&&this.component.render())},n.config=function(t,e){t||(e.retain=!0,this.$().on("hidden.bs.modal",this.clear.bind(this)).on("shown.bs.modal",this.onready.bind(this)))},n.show=function(t){if(!(t instanceof r.a))throw new Error("The ModalManager component can only show Modal components");clearTimeout(this.hideTimeout),this.showing=!0,this.component=t,app.current&&(app.current.retain=!0),m.redraw(!0);var e=!!this.component.isDismissible();this.$().modal({backdrop:e||"static",keyboard:e}).modal("show")},n.close=function(){var t=this;this.showing&&(this.hideTimeout=setTimeout((function(){t.$().modal("hide"),t.showing=!1})))},n.clear=function(){this.component&&this.component.onhide(),this.component=null,app.current.retain=!1,m.lazyRedraw()},n.onready=function(){this.component&&this.component.onready&&this.component.onready(this.$())},e}(o.a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(0),o=n(3),r=n(16),s=function(t){function e(){return t.apply(this,arguments)||this}Object(i.a)(e,t);var n=e.prototype;return n.init=function(){this.components=[]},n.view=function(){return m("div",{className:"AlertManager"},this.components.map((function(t){return m("div",{className:"AlertManager-alert"},t)})))},n.config=function(t,e){e.retain=!0},n.show=function(t){if(!(t instanceof r.a))throw new Error("The AlertManager component can only show Alert components");t.props.ondismiss=this.dismiss.bind(this,t),this.components.push(t),m.redraw()},n.dismiss=function(t){var e=this.components.indexOf(t);-1!==e&&(this.components.splice(e,1),m.redraw())},n.clear=function(){this.components=[],m.redraw()},e}(o.a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(0),o=function(t){function e(){return t.apply(this,arguments)||this}Object(i.a)(e,t);var n=e.prototype;return n.className=function(){return"RequestErrorModal Modal--large"},n.title=function(){return this.props.error.xhr?this.props.error.xhr.status+" "+this.props.error.xhr.statusText:""},n.content=function(){var t;try{t=JSON.stringify(JSON.parse(this.props.error.responseText),null,2)}catch(e){t=this.props.error.responseText}return m("div",{className:"Modal-body"},m("pre",null,this.props.error.options.method," ",this.props.error.options.url,m("br",null),m("br",null),t))},e}(n(12).a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(4),o=(n(34),n(17)),r=n(10),s=function(){function t(){this.translations={},this.locale=null}var e=t.prototype;return e.addTranslations=function(t){Object(i.a)(this.translations,t)},e.trans=function(t,e){var n=this.translations[t];return n?this.apply(n,e||{}):t},e.transChoice=function(t,e,n){var i=this.translations[t];return i?(e=parseInt(e,10),i=this.pluralize(i,e),this.apply(i,n||{})):t},e.apply=function(t,e){if("user"in e){var n=Object(r.a)(e,"user");e.username||(e.username=Object(o.a)(n))}t=t.split(new RegExp("({[a-z0-9_]+}|</?[a-z0-9_]+>)","gi"));var i=[],s=[i];return t.forEach((function(t){var n=t.match(new RegExp("{([a-z0-9_]+)}|<(/?)([a-z0-9_]+)>","i"));if(n){if(n[1])s[0].push(e[n[1]]);else if(n[3])if(n[2])s.shift();else{var i=e[n[3]]||{tag:n[3],children:[]};s[0].push(i),s.unshift(i.children||i)}}else s[0].push(t)})),i.filter((function(t){return t}))},e.pluralize=function(t,e){var n=this,i=new RegExp(/^\w+\: +(.+)$/),o=new RegExp(/^\s*((\{\s*(\-?\d+[\s*,\s*\-?\d+]*)\s*\})|([\[\]])\s*(-Inf|\-?\d+)\s*,\s*(\+?Inf|\-?\d+)\s*([\[\]]))\s?(.+?)$/),r=new RegExp(/^\s*(\{\s*(\-?\d+[\s*,\s*\-?\d+]*)\s*\})|([\[\]])\s*(-Inf|\-?\d+)\s*,\s*(\+?Inf|\-?\d+)\s*([\[\]])/),s=[],a=[];return t.split("|").forEach((function(t){if(o.test(t)){var e=t.match(o);a[e[0]]=e[e.length-1]}else if(i.test(t)){var n=t.match(i);s.push(n[1])}else s.push(t)})),a.forEach((function(t,i){if(r.test(i)){var o=i.match(r);if(o[1]){var s=o[2].split(",");for(var u in s)if(e==s[u])return a[i]}else{var c=n.convertNumber(o[4]),l=n.convertNumber(o[5]);if(("["===o[3]?e>=c:e>c)&&("]"===o[6]?e<=l:e<l))return a[i]}}})),s[this.pluralPosition(e,this.locale)]||s[0]||void 0},e.convertNumber=function(t){return"-Inf"===t?Number.NEGATIVE_INFINITY:"+Inf"===t||"Inf"===t?Number.POSITIVE_INFINITY:parseInt(t,10)},e.pluralPosition=function(t,e){switch("pt_BR"===e&&(e="xbr"),e.length>3&&(e=e.split("_")[0]),e){case"bo":case"dz":case"id":case"ja":case"jv":case"ka":case"km":case"kn":case"ko":case"ms":case"th":case"vi":case"zh":return 0;case"af":case"az":case"bn":case"bg":case"ca":case"da":case"de":case"el":case"en":case"eo":case"es":case"et":case"eu":case"fa":case"fi":case"fo":case"fur":case"fy":case"gl":case"gu":case"ha":case"he":case"hu":case"is":case"it":case"ku":case"lb":case"ml":case"mn":case"mr":case"nah":case"nb":case"ne":case"nl":case"nn":case"no":case"om":case"or":case"pa":case"pap":case"ps":case"pt":case"so":case"sq":case"sv":case"sw":case"ta":case"te":case"tk":case"tr":case"ur":case"zu":return 1==t?0:1;case"am":case"bh":case"fil":case"fr":case"gun":case"hi":case"ln":case"mg":case"nso":case"xbr":case"ti":case"wa":return 0===t||1==t?0:1;case"be":case"bs":case"hr":case"ru":case"sr":case"uk":return t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2;case"cs":case"sk":return 1==t?0:t>=2&&t<=4?1:2;case"ga":return 1==t?0:2==t?1:2;case"lt":return t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2;case"sl":return t%100==1?0:t%100==2?1:t%100==3||t%100==4?2:3;case"mk":return t%10==1?0:1;case"mt":return 1==t?0:0===t||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3;case"lv":return 0===t?0:t%10==1&&t%100!=11?1:2;case"pl":return 1==t?0:t%10>=2&&t%10<=4&&(t%100<12||t%100>14)?1:2;case"cy":return 1==t?0:2==t?1:8==t||11==t?2:3;case"ro":return 1==t?0:0===t||t%100>0&&t%100<20?1:2;case"ar":return 0===t?0:1==t?1:2==t?2:t>=3&&t<=10?3:t>=11&&t<=99?4:5;default:return 0}},t}()},function(t,e,n){"use strict";function i(t){for(var e=0,n=0;n<t.length;n++)e+=t.charCodeAt(n);var i=function(t,e,n){var i,o,r,s=Math.floor(6*t),a=6*t-s,u=n*(1-e),c=n*(1-a*e),l=n*(1-(1-a)*e);switch(s%6){case 0:i=n,o=l,r=u;break;case 1:i=c,o=n,r=u;break;case 2:i=u,o=n,r=l;break;case 3:i=u,o=c,r=n;break;case 4:i=l,o=u,r=n;break;case 5:i=n,o=u,r=c}return{r:Math.floor(255*i),g:Math.floor(255*o),b:Math.floor(255*r)}}(e%360/360,.3,.9);return""+i.r.toString(16)+i.g.toString(16)+i.b.toString(16)}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(4),o=function(){function t(t){this.data={},this.models=t}var e=t.prototype;return e.pushPayload=function(t){t.included&&t.included.map(this.pushObject.bind(this));var e=t.data instanceof Array?t.data.map(this.pushObject.bind(this)):this.pushObject(t.data);return e.payload=t,e},e.pushObject=function(t){if(!this.models[t.type])return null;var e=this.data[t.type]=this.data[t.type]||{};return e[t.id]?e[t.id].pushData(t):e[t.id]=this.createRecord(t.type,t),e[t.id].exists=!0,e[t.id]},e.find=function(t,e,n,o){void 0===n&&(n={}),void 0===o&&(o={});var r=n,s=app.forum.attribute("apiUrl")+"/"+t;return e instanceof Array?s+="?filter[id]="+e.join(","):"object"==typeof e?r=e:e&&(s+="/"+e),app.request(Object(i.a)({method:"GET",url:s,data:r},o)).then(this.pushPayload.bind(this))},e.getById=function(t,e){return this.data[t]&&this.data[t][e]},e.getBy=function(t,e,n){return this.all(t).filter((function(t){return t[e]()===n}))[0]},e.all=function(t){var e=this.data[t];return e?Object.keys(e).map((function(t){return e[t]})):[]},e.remove=function(t){delete this.data[t.data.type][t.id()]},e.createRecord=function(t,e){return void 0===e&&(e={}),e.type=e.type||t,new this.models[t](e,this)},t}()},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(4),o=function(){function t(t,e){this.user=t,this.csrfToken=e}var e=t.prototype;return e.login=function(t,e){return void 0===e&&(e={}),app.request(Object(i.a)({method:"POST",url:app.forum.attribute("baseUrl")+"/login",data:t},e))},e.logout=function(){window.location=app.forum.attribute("baseUrl")+"/logout?token="+this.csrfToken},t}()},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=function(){function t(){var t=this;$("#content").click((function(e){t.isOpen()&&(e.preventDefault(),t.hide())}))}var e=t.prototype;return e.isOpen=function(){return $("#app").hasClass("drawerOpen")},e.hide=function(){$("#app").removeClass("drawerOpen"),this.$backdrop&&this.$backdrop.remove()},e.show=function(){var t=this;$("#app").addClass("drawerOpen"),this.$backdrop=$("<div/>").addClass("drawer-backdrop fade").appendTo("body").click((function(){return t.hide()})),setTimeout((function(){return t.$backdrop.addClass("in")}))},t}()},function(t,e,n){"use strict";function i(t,e){void 0===e&&(e="");var n={};for(var i in t){var o=t[i];o.component&&(o.component.props.routeName=i),n[e+o.path]=o.component}return n}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(0),o=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.apiEndpoint=function(){return"/"},e}(n(1).a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n(4),o=n(0),r=n(1),s=n(18),a=n(26),u=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e}(r.a);Object(i.a)(u.prototype,{number:r.a.attribute("number"),discussion:r.a.hasOne("discussion"),createdAt:r.a.attribute("createdAt",r.a.transformDate),user:r.a.hasOne("user"),contentType:r.a.attribute("contentType"),content:r.a.attribute("content"),contentHtml:r.a.attribute("contentHtml"),contentPlain:Object(s.a)("contentHtml",a.getPlainContent),editedAt:r.a.attribute("editedAt",r.a.transformDate),editedUser:r.a.hasOne("editedUser"),isEdited:Object(s.a)("editedAt",(function(t){return!!t})),hiddenAt:r.a.attribute("hiddenAt",r.a.transformDate),hiddenUser:r.a.hasOne("hiddenUser"),isHidden:Object(s.a)("hiddenAt",(function(t){return!!t})),canEdit:r.a.attribute("canEdit"),canHide:r.a.attribute("canHide"),canDelete:r.a.attribute("canDelete")})},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(4),o=n(0),r=n(1),s=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e}(r.a);Object(i.a)(s.prototype,{contentType:r.a.attribute("contentType"),content:r.a.attribute("content"),createdAt:r.a.attribute("createdAt",r.a.transformDate),isRead:r.a.attribute("isRead"),user:r.a.hasOne("user"),fromUser:r.a.hasOne("fromUser"),subject:r.a.hasOne("subject")})},function(t,e,n){"use strict";var i=n(4),o=n(8),r=n(5),s=n(16),a=n(2),u=n(44),c=n(45),l=n(46),d=n(47),p=n(49),h=n(50),f=n(10),g=n(51),v=n(52),y=n(39),b=n(31),w=n(32),x=n(53),_=n(34),N=n(36),k=n(54),T=n(11),C=n(55);var S=function(t,e){for(var n=-1,i=e.length,o=t.length;++n<i;)t[o+n]=e[n];return t},O=n(67),D="object"==typeof self&&self&&self.Object===Object&&self,j=(O.a||D||Function("return this")()).Symbol,E=Object.prototype,P=E.hasOwnProperty,M=E.toString,A=j?j.toStringTag:void 0;var I=function(t){var e=P.call(t,A),n=t[A];try{t[A]=void 0;var i=!0}catch(t){}var o=M.call(t);return i&&(e?t[A]=n:delete t[A]),o},R=Object.prototype.toString;var L=function(t){return R.call(t)},H=j?j.toStringTag:void 0;var B=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":H&&H in Object(t)?I(t):L(t)};var U=function(t){return null!=t&&"object"==typeof t};var F=function(t){return U(t)&&"[object Arguments]"==B(t)},Y=Object.prototype,q=Y.hasOwnProperty,W=Y.propertyIsEnumerable,z=F(function(){return arguments}())?F:function(t){return U(t)&&q.call(t,"callee")&&!W.call(t,"callee")},G=Array.isArray,V=j?j.isConcatSpreadable:void 0;var Z=function(t){return G(t)||z(t)||!!(V&&t&&t[V])};var K=function t(e,n,i,o,r){var s=-1,a=e.length;for(i||(i=Z),r||(r=[]);++s<a;){var u=e[s];n>0&&i(u)?n>1?t(u,n-1,i,o,r):S(r,u):o||(r[r.length]=u)}return r};var X=function(t){return(null==t?0:t.length)?K(t,1/0):[]};n.d(e,"a",(function(){return J}));var J=function(){function t(){Object(o.a)(this,"forum",null),Object(o.a)(this,"routes",{}),Object(o.a)(this,"initializers",new r.a),Object(o.a)(this,"session",null),Object(o.a)(this,"translator",new d.a),Object(o.a)(this,"store",new p.a({forums:x.a,users:_.a,discussions:N.a,posts:k.a,groups:T.a,notifications:C.a})),Object(o.a)(this,"cache",{}),Object(o.a)(this,"booted",!1),Object(o.a)(this,"requestError",null),Object(o.a)(this,"data",void 0),Object(o.a)(this,"title",""),Object(o.a)(this,"titleCount",0)}var e=t.prototype;return e.load=function(t){this.data=t,this.translator.locale=t.locale},e.boot=function(){var t=this;this.initializers.toArray().forEach((function(e){return e(t)})),this.store.pushPayload({data:this.data.resources}),this.forum=this.store.getById("forums",1),this.session=new h.a(this.store.getById("users",this.data.session.userId),this.data.session.csrfToken),this.mount()},e.bootExtensions=function(t){var e=this;Object.keys(t).forEach((function(n){var i=t[n],o=X(i.extend),r=Array.isArray(o),s=0;for(o=r?o:o[Symbol.iterator]();;){var a;if(r){if(s>=o.length)break;a=o[s++]}else{if((s=o.next()).done)break;a=s.value}a.extend(e,{name:n,exports:i})}}))},e.mount=function(t){void 0===t&&(t=""),this.modal=m.mount(document.getElementById("modal"),m(u.a,null)),this.alerts=m.mount(document.getElementById("alerts"),m(c.a,null)),this.drawer=new g.a,m.route(document.getElementById("content"),t+"/",Object(v.a)(this.routes,t)),new b.a((function(t){var e=$("#app"),n=e.offset().top;e.toggleClass("affix",t>=n).toggleClass("scrolled",t>n)})).start(),$((function(){$("body").addClass("ontouchstart"in window?"touch":"no-touch")}))},e.preloadedApiDocument=function(){if(this.data.apiDocument){var t=this.store.pushPayload(this.data.apiDocument);return this.data.apiDocument=null,t}return null},e.setTitle=function(t){this.title=t,this.updateTitle()},e.setTitleCount=function(t){this.titleCount=t,this.updateTitle()},e.updateTitle=function(){document.title=(this.titleCount?"("+this.titleCount+") ":"")+(this.title?this.title+" - ":"")+this.forum.attribute("title")},e.request=function(t){var e=this,n=Object(i.a)({},t);if(n.background=n.background||!0,Object(w.extend)(n,"config",(function(t,n){return n.setRequestHeader("X-CSRF-Token",e.session.csrfToken)})),"GET"!==n.method&&"POST"!==n.method){var o=n.method;Object(w.extend)(n,"config",(function(t,e){return e.setRequestHeader("X-HTTP-Method-Override",o)})),n.method="POST"}n.deserialize=n.deserialize||function(t){return t},n.errorHandler=n.errorHandler||function(t){throw t};var r=n.extract;n.extract=function(t){var e;e=r?r(t.responseText):t.responseText||null;var i=t.status;if(i<200||i>299)throw new y.a(i,e,n,t);if(t.getResponseHeader){var o=t.getResponseHeader("X-CSRF-Token");o&&(app.session.csrfToken=o)}try{return JSON.parse(e)}catch(i){throw new y.a(500,e,n,t)}},this.requestError&&this.alerts.dismiss(this.requestError.alert);var u=m.deferred();return m.request(n).then((function(t){return u.resolve(t)}),(function(t){var i;switch(e.requestError=t,t.status){case 422:i=t.response.errors.map((function(t){return[t.detail,m("br",null)]})).reduce((function(t,e){return t.concat(e)}),[]).slice(0,-1);break;case 401:case 403:i=app.translator.trans("core.lib.error.permission_denied_message");break;case 404:case 410:i=app.translator.trans("core.lib.error.not_found_message");break;case 429:i=app.translator.trans("core.lib.error.rate_limit_exceeded_message");break;default:i=app.translator.trans("core.lib.error.generic_message")}var o=app.forum.attribute("debug");t.alert=new s.a({type:"error",children:i,controls:o&&[m(a.a,{className:"Button Button--link",onclick:e.showDebug.bind(e,t)},"Debug")]});try{n.errorHandler(t)}catch(t){e.alerts.show(t.alert)}u.reject(t)})),u.promise},e.showDebug=function(t){this.alerts.dismiss(this.requestError.alert),this.modal.show(new l.a({error:t}))},e.route=function(t,e){void 0===e&&(e={});var n=this.routes[t].path.replace(/:([^\/]+)/g,(function(t,n){return Object(f.a)(e,n)})),i=m.route.buildQueryString(e);return("pathname"===m.route.mode?app.forum.attribute("basePath"):"")+n+(i?"?"+i:"")},t}()},function(t,e,n){"use strict";function i(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";function i(t,e){var n=$(window),i=$(t).offset().top-n.scrollTop();e(),n.scrollTop($(t).offset().top-i)}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";e.a={handlers:null,getHandlers:function(t){return this.handlers=this.handlers||{},this.handlers[t]=this.handlers[t]||[],this.handlers[t]},trigger:function(t){for(var e=this,n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];this.getHandlers(t).forEach((function(t){return t.apply(e,i)}))},on:function(t,e){this.getHandlers(t).push(e)},one:function(t,e){this.getHandlers(t).push((function n(){e.apply(this,arguments),this.off(t,n)}))},off:function(t,e){var n=this.getHandlers(t),i=n.indexOf(e);-1!==i&&n.splice(i,1)}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n(4),o=n(0),r=n(13),s=n(2),a=n(6),u=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t),e.initProps=function(e){t.initProps.call(this,e),e.className+=" Dropdown--split",e.menuClassName+=" Dropdown-menu--right"};var n=e.prototype;return n.getButton=function(){var t=this.getFirstChild(),e=Object(i.a)({},t.props);return e.className=(e.className||"")+" SplitDropdown-button Button "+this.props.buttonClassName,[s.a.component(e),m("button",{className:"Dropdown-toggle Button Button--icon "+this.props.buttonClassName,"data-toggle":"dropdown"},Object(a.a)(this.props.icon,{className:"Button-icon"}),Object(a.a)("fas fa-caret-down",{className:"Button-caret"}))]},n.getFirstChild=function(){for(var t=this.props.children;t instanceof Array;)t=t[0];return t},e}(r.a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(6);function o(t){if(t.lastSeenAt()&&t.isOnline())return m("span",{className:"UserOnline"},Object(i.a)("fas fa-circle"))}},function(t,e,n){"use strict";function i(t){var e=moment(t),n=e.format(),i=e.format("LLLL");return m("time",{pubdate:!0,datetime:n},i)}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";function i(t){return t>=1e6?Math.floor(t/1e6)+app.translator.trans("core.lib.number_suffix.mega_text"):t>=1e3?Math.floor(t/1e3)+app.translator.trans("core.lib.number_suffix.kilo_text"):t.toString()}n.d(e,"a",(function(){return i}))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){(function(t){var i;!function(o,r){"use strict";var s=function t(e,n){y.version=function(){return"v0.2.8"};var i={}.hasOwnProperty,o={}.toString;function r(t){return"function"==typeof t}function s(t){return"[object Object]"===o.call(t)}function a(t){return"[object String]"===o.call(t)}var u=Array.isArray||function(t){return"[object Array]"===o.call(t)};function c(){}var l,d,p,h,f={AREA:1,BASE:1,BR:1,COL:1,COMMAND:1,EMBED:1,HR:1,IMG:1,INPUT:1,KEYGEN:1,LINK:1,META:1,PARAM:1,SOURCE:1,TRACK:1,WBR:1};function m(t,e){for(var n,i=[],o=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g;n=o.exec(e);)if(""===n[1]&&n[2])t.tag=n[2];else if("#"===n[1])t.attrs.id=n[2];else if("."===n[1])i.push(n[2]);else if("["===n[3].charAt(0)){var r=n[6];r&&(r=r.replace(/\\(["'])/g,"$1")),"class"===n[4]?i.push(r):t.attrs[n[4]]=r||!0}return i}function g(t,e){var n=e?t.slice(1):t;return 1===n.length&&u(n[0])?n[0]:n}function v(t,e,n){var o="class"in e?"class":"className";for(var r in e)i.call(e,r)&&(r===o&&null!=e[r]&&""!==e[r]?(n.push(e[r]),t[r]=""):t[r]=e[r]);n.length&&(t[o]=n.join(" "))}function y(t,e){for(var n=[],i=1,o=arguments.length;i<o;i++)n[i-1]=arguments[i];if(t&&r(t.view))return rt(t,n);if(!a(t))throw new Error("selector in m(selector, attrs, children) should be a string");var u=null!=e&&s(e)&&!("tag"in e||"view"in e||"subtree"in e),c=u?e:{},l={tag:"div",attrs:{},children:g(n,u)};return v(l.attrs,c,m(l,t)),l}function b(t,e){for(var n=0;n<t.length&&!e(t[n],n++););}function w(t,e){b(t,(function(t,n){return(t=t&&t.attrs)&&null!=t.key&&e(t,n)}))}function x(t,e,n){t.insertBefore(e,t.childNodes[n]||null)}y.deps=function(t){return function(t){l=t.document,d=t.location,h=t.cancelAnimationFrame||t.clearTimeout,p=t.requestAnimationFrame||t.setTimeout}(e=t||window),e},y.deps.factory=y.factory=t,y.deps(e);function _(t,e,n,o){var r=t.length!==e.length;return r||w(t,(function(t,n){var i=e[n];return r=i&&i.attrs&&i.attrs.key!==t.key})),r?function(t,e,n,o){w(t,(function(t,i){e[t=t.key]=e[t]?{action:3,index:i,from:e[t].index,element:n.nodes[e[t].index]||l.createElement("div")}:{action:2,index:i}}));var r=[];for(var s in e)i.call(e,s)&&r.push(e[s]);var a=r.sort(I),u=new Array(n.length);return u.nodes=n.nodes.slice(),b(a,(function(e){var i=e.index;if(1===e.action&&(U(n[i].nodes,n[i]),u.splice(i,1)),2===e.action){var r=l.createElement("div");r.key=t[i].attrs.key,x(o,r,i),u.splice(i,0,{attrs:{key:t[i].attrs.key},nodes:[r]}),u.nodes[i]=r}if(3===e.action){var s=e.element,a=o.childNodes[i];a!==s&&null!==s&&o.insertBefore(s,a||null),u[i]=n[e.from],u.nodes[i]=s}})),u}(t,n,e,o):e}function N(t,e,n){(function(t,e,n){return t.tag!==e.tag||(n.sort().join()!==Object.keys(e.attrs).sort().join()||(t.attrs.id!==e.attrs.id||(t.attrs.key!==e.attrs.key||("all"===y.redraw.strategy()?!e.configContext||!0!==e.configContext.retain:"diff"===y.redraw.strategy()&&(e.configContext&&!1===e.configContext.retain)))))})(t,e,n)&&(e.nodes.length&&U(e.nodes),e.configContext&&r(e.configContext.onunload)&&e.configContext.onunload(),e.controllers&&b(e.controllers,(function(t){t.onunload&&t.onunload({preventDefault:c})})))}var k=0;function T(t,e,n,i,o,r){var s=e.nodes;return i&&i===l.activeElement&&t===e||(t.$trusted?(U(s,e),s=q(n,o,t)):"textarea"===r?n.value=t:i?(i.innerHTML=t,s=[].slice.call(i.childNodes)):((1===s[0].nodeType||s.length>1||s[0].nodeValue.trim&&!s[0].nodeValue.trim())&&(U(e.nodes,e),s=[l.createTextNode(t)]),function(t,e,n,i){try{x(t,e,n),e.nodeValue=i}catch(t){}}(n,s[0],o,t))),(e=new t.constructor(t)).nodes=s,e.$trusted=t.$trusted,e}function C(t,e,n,i,o,r,s){return t.nodes.length?t.valueOf()!==e.valueOf()||o?T(e,t,i,r,n,s):(t.nodes.intact=!0,t):function(t,e,n){var i,o;return t.$trusted?i=q(e,n,t):(i=[l.createTextNode(t)],e.nodeName in f||x(e,i[0],n)),(o="string"==typeof t||"number"==typeof t||"boolean"==typeof t?new t.constructor(t):t).nodes=i,o}(e,i,n)}function S(t){return t.$trusted?t.nodes.length:u(t)?t.length:1}function O(t,e,i,o,r,s,a,c,l){t=function(t){for(var e=0;e<t.length;e++)u(t[e])&&(t=t.concat.apply([],t),e--);return t}(t);var d=e.length===t.length,p=0,h={},f=!1;w(e,(function(t,n){f=!0,h[e[n].attrs.key]={action:1,index:n}})),function(t){var e=0;w(t,(function(){return b(t,(function(t){(t=t&&t.attrs)&&null==t.key&&(t.key="__mithril__"+e++)})),1}))}(t),f&&(e=_(t,e,h,i));for(var m=0,g=0,v=t.length;g<v;g++){var y=A(i,r,e,o,t[g],e[m],s,o+p||p,a,c,l);y!==n&&(d=d&&y.nodes.intact,p+=S(y),e[m++]=y)}return d||function(t,e,n){b(t,(function(t,i){null!=e[i]&&n.push.apply(n,e[i].nodes)})),b(e.nodes,(function(t,i){null!=t.parentNode&&n.indexOf(t)<0&&U([t],[e[i]])})),t.length<e.length&&(e.length=t.length),e.nodes=n}(t,e,[]),e}function D(t,e,n,i,o,r,s){var a={tag:t.tag,attrs:e,children:n,nodes:[i]};return function(t,e,n){n.length&&(t.views=e,t.controllers=n,b(n,(function(t){if(t.onunload&&t.onunload.$old&&(t.onunload=t.onunload.$old),k&&t.onunload){var e=t.onunload;t.onunload=function(){},t.onunload.$old=e}})))}(a,r,s),a.children&&!a.children.nodes&&(a.children.nodes=[]),a}y.startComputation=function(){k++},y.endComputation=function(){k>1?k--:(k=0,y.redraw())};var j=[];var E=!1;function P(t,e,n,i,o,s){var a=function(t,e,n,i){var o;return(o="diff"===y.redraw.strategy()&&t?t.indexOf(e):-1)>-1?n[o]:r(i)?new i:{}}(n.views,e,i,t.controller),u=t&&t.attrs&&t.attrs.key;return"retain"===(t=0===k||E||i&&i.indexOf(a)>-1?t.view(a):{tag:"placeholder"}).subtree||(t.attrs=t.attrs||{},t.attrs.key=u,function(t,e,n,i){null!=i.onunload&&j.map((function(t){return t.handler})).indexOf(i.onunload)<0&&j.push({controller:i,handler:i.onunload}),t.push(n),e.push(i)}(s,o,e,a)),t}function M(t,e,i,o,s,u,c,d){var p=[],h=[];if("retain"===(t=function(t,e,n,i){for(var o=e&&e.controllers;null!=t.view;)t=P(t,t.view.$original||t.view,e,o,i,n);return t}(t,e,p,h)).subtree)return e;if(!t.tag&&h.length)throw new Error("Component template must return a virtual element, not an array, string, etc.");t.attrs=t.attrs||{},e.attrs=e.attrs||{};var f=Object.keys(t.attrs),m=f.length>("key"in t.attrs?1:0);if(N(t,e,f),a(t.tag)){var g,v=0===e.nodes.length;if(c=function(t,e){return t.attrs.xmlns?t.attrs.xmlns:"svg"===t.tag?"http://www.w3.org/2000/svg":"math"===t.tag?"http://www.w3.org/1998/Math/MathML":e}(t,c),v){var y=function(t,e,n,i){return i?B(e,t.tag,t.attrs,{},n):t.attrs}(t,g=function(t,e){return t.attrs.is?null==e?l.createElement(t.tag,t.attrs.is):l.createElementNS(e,t.tag,t.attrs.is):null==e?l.createElement(t.tag):l.createElementNS(e,t.tag)}(t,c),c,m);x(o,g,s),e=D(t,y,function(t,e,i,o,r,s){return null!=t.children&&t.children.length>0?A(e,t.tag,n,n,t.children,i.children,!0,0,t.attrs.contenteditable?e:o,r,s):t.children}(t,g,e,i,c,d),g,0,p,h)}else g=function(t,e,i,o,r,s,a,u){var c=t.nodes[0];return o&&B(c,e.tag,e.attrs,t.attrs,r),t.children=A(c,e.tag,n,n,e.children,t.children,!1,0,e.attrs.contenteditable?c:i,r,a),t.nodes.intact=!0,u.length&&(t.views=s,t.controllers=u),c}(e,t,i,m,c,p,d,h);return"select"===t.tag&&"value"in t.attrs&&B(g,t.tag,{value:t.attrs.value},{},c),v||!0!==u||null==g||x(o,g,s),function(t,e,n,i,o){if(r(e.attrs.config)){var s=o.configContext=o.configContext||{};t.push((function(){return e.attrs.config.call(e,n,!i,s,o)}))}}(d,t,g,v,e),e}}function A(t,e,n,i,a,c,l,d,p,h,f){return"retain"===(a=function(t){try{if("boolean"!=typeof t&&null!=t&&null!=t.toString())return t}catch(t){}return""}(a)).subtree?c:(c=function(t,e,n,i,r){if(null!=e){if(o.call(e)===o.call(t))return e;if(r&&r.nodes){var s=n-i,a=s+(u(t)?t:e.nodes).length;U(r.nodes.slice(s,a),r.slice(s,a))}else e.nodes&&U(e.nodes,e)}return(e=new t.constructor).tag&&(e={}),e.nodes=[],e}(a,c,d,i,n),u(a)?O(a,c,t,d,e,l,p,h,f):null!=a&&s(a)?M(a,c,p,t,d,l,h,f):r(a)?c:C(c,a,d,t,l,p,e))}function I(t,e){return t.action-e.action||t.index-e.index}var $,R={list:1,style:1,form:1,type:1,width:1,height:1};function L(t,e,n,o,a,u){if("config"===e||"key"===e)return!0;if(r(n)&&"on"===e.slice(0,2))t[e]=(c=n,l=t,function(t){t=t||event,y.redraw.strategy("diff"),y.startComputation();try{return c.call(l,t)}finally{ct()}});else if("style"===e&&null!=n&&s(n))!function(t,e,n){for(var o in n===e&&(t.style="",n={}),e)i.call(e,o)&&(null!=n&&n[o]===e[o]||(t.style[o]=e[o]));for(o in n)i.call(n,o)&&(i.call(e,o)||(t.style[o]=""))}(t,n,o);else if(null!=u)"href"===e?t.setAttributeNS("http://www.w3.org/1999/xlink","href",n):t.setAttribute("className"===e?"class":e,n);else if(e in t&&!R[e])try{("input"!==a&&!t.isContentEditable||t[e]!=n)&&(t[e]=n)}catch(i){t.setAttribute(e,n)}else try{t.setAttribute(e,n)}catch(t){}var c,l}function H(t,e,n,i,o,r,s){if(e in o&&i===n&&"object"!=typeof n&&l.activeElement!==t)"value"===e&&"input"===r&&t.value!=n&&(t.value=n);else{o[e]=n;try{return L(t,e,n,i,r,s)}catch(t){if(t.message.indexOf("Invalid argument")<0)throw t}}}function B(t,e,n,o,r){for(var s in n)!i.call(n,s)||H(t,s,n[s],o[s],o,e,r);return o}function U(t,e){for(var n=t.length-1;n>-1;n--)if(t[n]&&t[n].parentNode){try{t[n].parentNode.removeChild(t[n])}catch(t){}(e=[].concat(e))[n]&&F(e[n])}t.length&&(t.length=0)}function F(t){t.configContext&&r(t.configContext.onunload)&&(t.configContext.onunload(),t.configContext.onunload=null),t.controllers&&b(t.controllers,(function(t){r(t.onunload)&&t.onunload({preventDefault:c})})),t.children&&(u(t.children)?b(t.children,F):t.children.tag&&F(t.children))}function Y(t,e){try{t.appendChild(l.createRange().createContextualFragment(e))}catch(n){t.insertAdjacentHTML("beforeend",e),function t(e){if("SCRIPT"===e.tagName)e.parentNode.replaceChild(function(t){for(var e=document.createElement("script"),n=t.attributes,i=0;i<n.length;i++)e.setAttribute(n[i].name,n[i].value);return e.text=t.innerHTML,e}(e),e);else{var n=e.childNodes;if(n&&n.length)for(var i=0;i<n.length;i++)t(n[i])}return e}(t)}}function q(t,e,n){var i=t.childNodes[e];if(i){var o=1!==i.nodeType,r=l.createElement("span");o?(t.insertBefore(r,i||null),r.insertAdjacentHTML("beforebegin",n),t.removeChild(r)):i.insertAdjacentHTML("beforebegin",n)}else Y(t,n);for(var s=[];t.childNodes[e]!==i;)s.push(t.childNodes[e]),e++;return s}var W={appendChild:function(t){$===n&&($=l.createElement("html")),l.documentElement&&l.documentElement!==t?l.replaceChild(t,l.documentElement):l.appendChild(t),this.childNodes=l.childNodes},insertBefore:function(t){this.appendChild(t)},childNodes:[]},z=[],G={};function V(t){var e=z.indexOf(t);return e<0?z.push(t)-1:e}y.render=function(t,e,i){if(!t)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var o,r=[],s=V(t),a=t===l;o=a||t===l.documentElement?W:t,a&&"html"!==e.tag&&(e={tag:"html",attrs:{},children:e}),G[s]===n&&U(o.childNodes),!0===i&&wt(t),G[s]=A(o,null,n,n,e,G[s],!1,0,null,n,r),b(r,(function(t){t()}))},y.trust=function(t){return(t=new String(t)).$trusted=!0,t},y.prop=function(t){return(null!=t&&(s(t)||r(t))||"undefined"!=typeof Promise&&t instanceof Promise)&&r(t.then)?xt(t):function(t){function e(){return arguments.length&&(t=arguments[0]),t}return e.toJSON=function(){return t&&r(t.toJSON)?t.toJSON():t},e}(t)};var Z,K,X,J=[],Q=[],tt=[],et=null,nt=0,it=null,ot=null;function rt(t,e){function n(){return(t.controller||c).apply(this,e)||this}function i(n){for(var i=[n].concat(e),o=1;o<arguments.length;o++)i.push(arguments[o]);return t.view.apply(t,i)}t.controller&&(n.prototype=t.controller.prototype),i.$original=t.view;var o={controller:n,view:i};return e[0]&&null!=e[0].key&&(o.attrs={key:e[0].key}),o}function st(t,e){J.splice(e,1),tt.splice(e,1),Q.splice(e,1),wt(t),z.splice(V(t),1),j=[]}y.component=function(t){for(var e=new Array(arguments.length-1),n=1;n<arguments.length;n++)e[n-1]=arguments[n];return rt(t,e)},y.mount=y.module=function(t,e){if(!t)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var n=J.indexOf(t);n<0&&(n=J.length);var i=!1,o={preventDefault:function(){i=!0,it=ot=null}};return b(j,(function(t){t.handler.call(t.controller,o),t.controller.onunload=null})),i?b(j,(function(t){t.controller.onunload=t.handler})):j=[],tt[n]&&r(tt[n].onunload)&&tt[n].onunload(o),function(t,e,n,i){if(!i){var o;y.redraw.strategy("all"),y.startComputation(),J[n]=e,o=Z=t||(t={controller:c});var r=new(t.controller||c);return o===Z&&(tt[n]=r,Q[n]=t),ct(),null===t&&st(e,n),tt[n]}null==t&&st(e,n),X&&(K=X)}(e,t,n,i)};var at=!1;function ut(){it&&(it(),it=null),b(J,(function(t,e){var n=Q[e];if(tt[e]){var i=[tt[e]];y.render(t,n.view?n.view(tt[e],i):"")}})),ot&&(ot(),ot=null),et=null,nt=new Date,y.redraw.strategy("diff")}function ct(){"none"===y.redraw.strategy()?(k--,y.redraw.strategy("diff")):y.endComputation()}y.redraw=function(t){if(!at){at=!0,t&&(E=!0);try{et&&!t?(p===e.requestAnimationFrame||new Date-nt>16)&&(et>0&&h(et),et=p(ut,16)):(ut(),et=p((function(){et=null}),16))}finally{at=E=!1}}},y.redraw.strategy=y.prop(),y.withAttr=function(t,e,n){return function(i){var o=(i=i||window.event).currentTarget||this,r=n||this,s=t in o?o[t]:o.getAttribute(t);e.call(r,s)}};var lt,dt={pathname:"",hash:"#",search:"?"},pt=c,ht=!1;function ft(t){return t.slice(dt[y.route.mode].length)}function mt(t,e,n){lt={};var o=n.indexOf("?");-1!==o&&(lt=bt(n.substr(o+1,n.length)),n=n.substr(0,o));var r=Object.keys(e),s=r.indexOf(n);if(-1!==s)return y.mount(t,e[r[s]]),!0;for(var a in e)if(i.call(e,a)){if(a===n)return y.mount(t,e[a]),!0;var u=new RegExp("^"+a.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(u.test(n))return n.replace(u,(function(){var n=a.match(/:[^\/]+/g)||[],i=[].slice.call(arguments,1,-2);b(n,(function(t,e){lt[t.replace(/:|\./g,"")]=decodeURIComponent(i[e])})),y.mount(t,e[a])})),!0}}function gt(t){if(!((t=t||event).ctrlKey||t.metaKey||t.shiftKey||2===t.which)){t.preventDefault?t.preventDefault():t.returnValue=!1;var e,n=t.currentTarget||t.srcElement;for(e="pathname"===y.route.mode&&n.search?bt(n.search.slice(1)):{};n&&!/a/i.test(n.nodeName);)n=n.parentNode;k=0,y.route(n[y.route.mode].slice(dt[y.route.mode].length),e)}}function vt(){"hash"!==y.route.mode&&d.hash?d.hash=d.hash:e.scrollTo(0,0)}function yt(t,e){var o={},r=[];for(var a in t)if(i.call(t,a)){var c=e?e+"["+a+"]":a,l=t[a];if(null===l)r.push(encodeURIComponent(c));else if(s(l))r.push(yt(l,c));else if(u(l)){var d=[];o[c]=o[c]||{},b(l,(function(t){o[c][t]||(o[c][t]=!0,d.push(encodeURIComponent(c)+"="+encodeURIComponent(t)))})),r.push(d.join("&"))}else l!==n&&r.push(encodeURIComponent(c)+"="+encodeURIComponent(l))}return r.join("&")}function bt(t){if(""===t||null==t)return{};"?"===t.charAt(0)&&(t=t.slice(1));var e=t.split("&"),n={};return b(e,(function(t){var e=t.split("="),i=decodeURIComponent(e[0]),o=2===e.length?decodeURIComponent(e[1]):null;null!=n[i]?(u(n[i])||(n[i]=[n[i]]),n[i].push(o)):n[i]=o})),n}function wt(t){var e=V(t);U(t.childNodes,G[e]),G[e]=n}function xt(t,e){var n=y.prop(e);return t.then(n),n.then=function(n,i){return xt(t.then(n,i),e)},n.catch=n.then.bind(null,null),n}y.route=function(t,n,o,r){if(0===arguments.length)return K;if(3===arguments.length&&a(n)){pt=function(e){var i=K=ft(e);if(!mt(t,o,i)){if(ht)throw new Error("Ensure the default route matches one of the routes defined in m.route");ht=!0,y.route(n,!0),ht=!1}};var s="hash"===y.route.mode?"onhashchange":"onpopstate";return e[s]=function(){var t=d[y.route.mode];"pathname"===y.route.mode&&(t+=d.search),K!==ft(t)&&pt(t)},it=vt,void e[s]()}if(t.addEventListener||t.attachEvent){var u="pathname"!==y.route.mode?d.pathname:"";return t.href=u+dt[y.route.mode]+r.attrs.href,void(t.addEventListener?(t.removeEventListener("click",gt),t.addEventListener("click",gt)):(t.detachEvent("onclick",gt),t.attachEvent("onclick",gt)))}if(a(t)){X=K;var c,p=n||{},h=(K=t).indexOf("?");for(var f in c=h>-1?bt(K.slice(h+1)):{},p)i.call(p,f)&&(c[f]=p[f]);var m,g=yt(c);m=h>-1?K.slice(0,h):K,g&&(K=m+(-1===m.indexOf("?")?"?":"&")+g);var v=!0===(3===arguments.length?o:n)||X===K;if(e.history.pushState){var b=v?"replaceState":"pushState";it=vt,ot=function(){try{e.history[b](null,l.title,dt[y.route.mode]+K)}catch(t){d[y.route.mode]=K}},pt(dt[y.route.mode]+K)}else d[y.route.mode]=K,pt(dt[y.route.mode]+K);X=null}},y.route.param=function(t){if(!lt)throw new Error("You must call m.route(element, defaultRoute, routes) before calling m.route.param()");return t?lt[t]:lt},y.route.mode="search",y.route.buildQueryString=yt,y.route.parseQueryString=bt,y.deferred=function(){var t=new _t;return t.promise=xt(t.promise),t};function _t(t,e){var n=this,i=0,o=0,a=[];function u(t){i=t||4,a.map((function(t){3===i?t.resolve(o):t.reject(o)}))}function c(t,e,n,i){if((null!=o&&s(o)||r(o))&&r(t))try{var a=0;t.call(o,(function(t){a++||(o=t,e())}),(function(t){a++||(o=t,n())}))}catch(t){y.deferred.onerror(t),o=t,n()}else i()}function l(){var s;try{s=o&&o.then}catch(t){return y.deferred.onerror(t),o=t,i=2,l()}2===i&&y.deferred.onerror(o),c(s,(function(){i=1,l()}),(function(){i=2,l()}),(function(){try{1===i&&r(t)?o=t(o):2===i&&r(e)&&(o=e(o),i=1)}catch(t){return y.deferred.onerror(t),o=t,u()}o===n?(o=TypeError(),u()):c(s,(function(){u(3)}),u,(function(){u(1===i&&3)}))}))}n.promise={},n.resolve=function(t){return i||(o=t,i=1,l()),n},n.reject=function(t){return i||(o=t,i=2,l()),n},n.promise.then=function(t,e){var n=new _t(t,e);return 3===i?n.resolve(o):4===i?n.reject(o):a.push(n),n.promise}}function Nt(t){return t}return y.deferred.onerror=function(t){if("[object Error]"===o.call(t)&&!/ Error/.test(t.constructor.toString()))throw k=0,t},y.sync=function(t){var e=y.deferred(),n=t.length,i=[],o="resolve";function r(t,r){return function(s){return i[t]=s,r||(o="reject"),0==--n&&(e.promise(i),e[o](i)),s}}return t.length>0?b(t,(function(t,e){t.then(r(e,!0),r(e,!1))})):e.resolve([]),e.promise},y.request=function(t){!0!==t.background&&y.startComputation();var o,c,d,p=new _t;return t.dataType&&"jsonp"===t.dataType.toLowerCase()?(o=t.serialize=c=t.deserialize=Nt,d=function(t){return t.responseText}):(o=t.serialize=t.serialize||JSON.stringify,c=t.deserialize=t.deserialize||JSON.parse,d=t.extract||function(t){return t.responseText.length||c!==JSON.parse?t.responseText:null}),t.method=(t.method||"GET").toUpperCase(),t.url=function(t,e){e&&(t=t.replace(/:[a-z]\w+/gi,(function(t){var n=t.slice(1),i=e[n]||t;return delete e[n],i})));return t}(t.url,t.data),function(t,e,n){if("GET"===t.method&&"jsonp"!==t.dataType){var i=t.url.indexOf("?")<0?"?":"&",o=yt(e);t.url+=o?i+o:""}else t.data=n(e)}(t,t.data,o),t.onload=t.onerror=function(e){try{e=e||event;var n=c(d(e.target,t));"load"===e.type?(t.unwrapSuccess&&(n=t.unwrapSuccess(n,e.target)),u(n)&&t.type?b(n,(function(e,i){n[i]=new t.type(e)})):t.type&&(n=new t.type(n)),p.resolve(n)):(t.unwrapError&&(n=t.unwrapError(n,e.target)),p.reject(n))}catch(t){p.reject(t),y.deferred.onerror(t)}finally{!0!==t.background&&y.endComputation()}},function(t){t.dataType&&"jsonp"===t.dataType.toLowerCase()?function(t){var i=t.callbackName||"mithril_callback_"+(new Date).getTime()+"_"+Math.round(1e16*Math.random()).toString(36),o=l.createElement("script");e[i]=function(r){o.parentNode.removeChild(o),t.onload({type:"load",target:{responseText:r}}),e[i]=n},o.onerror=function(){return o.parentNode.removeChild(o),t.onerror({type:"error",target:{status:500,responseText:JSON.stringify({error:"Error making jsonp request"})}}),e[i]=n,!1},o.onload=function(){return!1},o.src=t.url+(t.url.indexOf("?")>0?"&":"?")+(t.callbackKey?t.callbackKey:"callback")+"="+i+"&"+yt(t.data||{}),l.body.appendChild(o)}(t):function(t){var n=new e.XMLHttpRequest;n.open(t.method,t.url,!0,t.user,t.password),n.onreadystatechange=function(){4===n.readyState&&(n.status>=200&&n.status<300?t.onload({type:"load",target:n}):t.onerror({type:"error",target:n}))},t.serialize===JSON.stringify&&t.data&&"GET"!==t.method&&n.setRequestHeader("Content-Type","application/json; charset=utf-8");t.deserialize===JSON.parse&&n.setRequestHeader("Accept","application/json, text/*");if(s(t.headers))for(var o in t.headers)i.call(t.headers,o)&&n.setRequestHeader(o,t.headers[o]);if(r(t.config)){var u=t.config(n,t);null!=u&&(n=u)}var c="GET"!==t.method&&t.data?t.data:"";if(c&&!a(c)&&c.constructor!==e.FormData)throw new Error("Request data should be either be a string or FormData. Check the `serialize` option in `m.request`");n.send(c)}(t)}(t),p.promise=xt(p.promise,t.initialValue),p.promise},y}(o);"undefined"==typeof window&&s.deps({document:"undefined"!=typeof document?document:{},location:"undefined"!=typeof location?location:{},clearTimeout:clearTimeout,setTimeout:setTimeout}),null!=t&&t.exports?t.exports=s:void 0===(i=function(){return s}.call(e,n,e,t))||(t.exports=i)}("undefined"!=typeof window?window:this)}).call(this,n(64)(t))},function(t,e,n){"use strict";var i={};n.r(i),n.d(i,"Model",(function(){return s})),n.d(i,"PostTypes",(function(){return u})),n.d(i,"Routes",(function(){return c}));n(69),n(72),n(73),n(75),n(77),n(78),n(79),n(80),n(81),n(82);var o=n(42),r=n(8),s=function(){function t(t,e){void 0===e&&(e=null),Object(r.a)(this,"type",void 0),Object(r.a)(this,"attributes",[]),Object(r.a)(this,"hasOnes",[]),Object(r.a)(this,"hasManys",[]),this.type=t,this.model=e}var e=t.prototype;return e.attribute=function(t){return this.attributes.push(t),this},e.hasOne=function(t){return this.hasOnes.push(t),this},e.hasMany=function(t){return this.hasManys.push(t),this},e.extend=function(t,e){this.model&&(t.store.models[this.type]=this.model);var n=t.store.models[this.type];this.attributes.forEach((function(t){return n.prototype[t]=n.attribute(t)})),this.hasOnes.forEach((function(t){return n.prototype[t]=n.hasOne(t)})),this.hasManys.forEach((function(t){return n.prototype[t]=n.hasMany(t)}))},t}(),a=n(4),u=function(){function t(){Object(r.a)(this,"postComponents",{})}var e=t.prototype;return e.add=function(t,e){return this.postComponents[t]=e,this},e.extend=function(t,e){Object(a.a)(t.postComponents,this.postComponents)},t}(),c=function(){function t(){Object(r.a)(this,"routes",{})}var e=t.prototype;return e.add=function(t,e,n){return this.routes[t]={path:e,component:n},this},e.extend=function(t,e){Object(a.a)(t.routes,this.routes)},t}();n.d(e,"a",(function(){return i})),Object(o.a)(window)},function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(25))},function(t,e,n){"use strict";var i=n(32),o=n(50),r=n(49),s=n(59),a=n(21);function u(){$("[data-humantime]").each((function(){var t=$(this),e=Object(a.a)(t.attr("datetime"));t.html(e)}))}var c=n(5),l=n(4),d=n(0);var p=n(18),h=n(51),f=n(58),m=n(39),g=n(63),v=n(26),y=n(35),b=n(10),w=n(31),x=n(48),_=n(42),N=n(24),k=n(9),T=n(57),C=n(52),S=n(55),O=n(34),D=n(54),j=n(36),E=n(11),P=n(53),M=n(3),A=n(47),I=n(45),R=n(30),L=n(22),H=n(14),B=n(43),U=n(20),F=n(13),Y=n(60),q=n(46),W=n(23),z=n(41),G=n(40),V=n(16),Z=n(19),K=n(38),X=n(27),J=n(44),Q=n(2),tt=n(12),et=n(28),nt=n(1),it=n(56),ot=n(62),rt=n(15),st=n(6),at=n(37);var ut=n(29),ct=n(17),lt=n(61),dt=n(7);e.a={extend:i,Session:o.a,Store:r.a,"utils/evented":s.a,"utils/liveHumanTimes":function(){setInterval(u,1e4)},"utils/ItemList":c.a,"utils/mixin":function(t){for(var e=function(t){function e(){return t.apply(this,arguments)||this}return Object(d.a)(e,t),e}(t),n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return i.forEach((function(t){Object(l.a)(e.prototype,t)})),e},"utils/humanTime":a.a,"utils/computed":p.a,"utils/Drawer":h.a,"utils/anchorScroll":f.a,"utils/RequestError":m.a,"utils/abbreviateNumber":g.a,"utils/string":v,"utils/SubtreeRetainer":y.a,"utils/extract":b.a,"utils/ScrollListener":w.a,"utils/stringToColor":x.a,"utils/patchMithril":_.a,"utils/classList":N.a,"utils/extractText":k.a,"utils/formatNumber":T.a,"utils/mapRoutes":C.a,"models/Notification":S.a,"models/User":O.a,"models/Post":D.a,"models/Discussion":j.a,"models/Group":E.a,"models/Forum":P.a,Component:M.a,Translator:A.a,"components/AlertManager":I.a,"components/Switch":R.a,"components/Badge":L.a,"components/LoadingIndicator":H.a,"components/Placeholder":B.a,"components/Separator":U.a,"components/Dropdown":F.a,"components/SplitDropdown":Y.a,"components/RequestErrorModal":q.a,"components/FieldSet":W.a,"components/Select":z.a,"components/Navigation":G.a,"components/Alert":V.a,"components/LinkButton":Z.a,"components/Checkbox":K.a,"components/SelectDropdown":X.a,"components/ModalManager":J.a,"components/Button":Q.a,"components/Modal":tt.a,"components/GroupBadge":et.a,Model:nt.a,Application:it.a,"helpers/fullTime":ot.a,"helpers/avatar":rt.a,"helpers/icon":st.a,"helpers/humanTime":at.a,"helpers/punctuateSeries":function(t){if(2===t.length)return app.translator.trans("core.lib.series.two_text",{first:t[0],second:t[1]});if(t.length>=3){var e=t.slice(1,t.length-1).reduce((function(t,e){return t.concat([e,app.translator.trans("core.lib.series.glue_text")])}),[]).slice(0,-1);return app.translator.trans("core.lib.series.three_text",{first:t[0],second:e,third:t[t.length-1]})}return t},"helpers/highlight":ut.a,"helpers/username":ct.a,"helpers/userOnline":lt.a,"helpers/listItems":dt.a}},function(t,e,n){(function(e){t.exports=e.$=n(70)}).call(this,n(25))},function(t,e,n){(function(e){t.exports=e.jQuery=n(71)}).call(this,n(25))},function(t,e,n){var i;
/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */!function(e,n){"use strict";"object"==typeof t.exports?t.exports=e.document?n(e,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return n(t)}:n(e)}("undefined"!=typeof window?window:this,(function(n,o){"use strict";var r=[],s=n.document,a=Object.getPrototypeOf,u=r.slice,c=r.concat,l=r.push,d=r.indexOf,p={},h=p.toString,f=p.hasOwnProperty,m=f.toString,g=m.call(Object),v={},y=function(t){return"function"==typeof t&&"number"!=typeof t.nodeType},b=function(t){return null!=t&&t===t.window},w={type:!0,src:!0,nonce:!0,noModule:!0};function x(t,e,n){var i,o,r=(n=n||s).createElement("script");if(r.text=t,e)for(i in w)(o=e[i]||e.getAttribute&&e.getAttribute(i))&&r.setAttribute(i,o);n.head.appendChild(r).parentNode.removeChild(r)}function _(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?p[h.call(t)]||"object":typeof t}var N=function(t,e){return new N.fn.init(t,e)},k=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function T(t){var e=!!t&&"length"in t&&t.length,n=_(t);return!y(t)&&!b(t)&&("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t)}N.fn=N.prototype={jquery:"3.4.1",constructor:N,length:0,toArray:function(){return u.call(this)},get:function(t){return null==t?u.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=N.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return N.each(this,t)},map:function(t){return this.pushStack(N.map(this,(function(e,n){return t.call(e,n,e)})))},slice:function(){return this.pushStack(u.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(t<0?e:0);return this.pushStack(n>=0&&n<e?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:r.sort,splice:r.splice},N.extend=N.fn.extend=function(){var t,e,n,i,o,r,s=arguments[0]||{},a=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[a]||{},a++),"object"==typeof s||y(s)||(s={}),a===u&&(s=this,a--);a<u;a++)if(null!=(t=arguments[a]))for(e in t)i=t[e],"__proto__"!==e&&s!==i&&(c&&i&&(N.isPlainObject(i)||(o=Array.isArray(i)))?(n=s[e],r=o&&!Array.isArray(n)?[]:o||N.isPlainObject(n)?n:{},o=!1,s[e]=N.extend(c,r,i)):void 0!==i&&(s[e]=i));return s},N.extend({expando:"jQuery"+("3.4.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var e,n;return!(!t||"[object Object]"!==h.call(t))&&(!(e=a(t))||"function"==typeof(n=f.call(e,"constructor")&&e.constructor)&&m.call(n)===g)},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},globalEval:function(t,e){x(t,{nonce:e&&e.nonce})},each:function(t,e){var n,i=0;if(T(t))for(n=t.length;i<n&&!1!==e.call(t[i],i,t[i]);i++);else for(i in t)if(!1===e.call(t[i],i,t[i]))break;return t},trim:function(t){return null==t?"":(t+"").replace(k,"")},makeArray:function(t,e){var n=e||[];return null!=t&&(T(Object(t))?N.merge(n,"string"==typeof t?[t]:t):l.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:d.call(e,t,n)},merge:function(t,e){for(var n=+e.length,i=0,o=t.length;i<n;i++)t[o++]=e[i];return t.length=o,t},grep:function(t,e,n){for(var i=[],o=0,r=t.length,s=!n;o<r;o++)!e(t[o],o)!==s&&i.push(t[o]);return i},map:function(t,e,n){var i,o,r=0,s=[];if(T(t))for(i=t.length;r<i;r++)null!=(o=e(t[r],r,n))&&s.push(o);else for(r in t)null!=(o=e(t[r],r,n))&&s.push(o);return c.apply([],s)},guid:1,support:v}),"function"==typeof Symbol&&(N.fn[Symbol.iterator]=r[Symbol.iterator]),N.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(t,e){p["[object "+e+"]"]=e.toLowerCase()}));var C=
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
function(t){var e,n,i,o,r,s,a,u,c,l,d,p,h,f,m,g,v,y,b,w="sizzle"+1*new Date,x=t.document,_=0,N=0,k=ut(),T=ut(),C=ut(),S=ut(),O=function(t,e){return t===e&&(d=!0),0},D={}.hasOwnProperty,j=[],E=j.pop,P=j.push,M=j.push,A=j.slice,I=function(t,e){for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n;return-1},$="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",R="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",H="\\["+R+"*("+L+")(?:"+R+"*([*^$|!~]?=)"+R+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+R+"*\\]",B=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+H+")*)|.*)\\)|)",U=new RegExp(R+"+","g"),F=new RegExp("^"+R+"+|((?:^|[^\\\\])(?:\\\\.)*)"+R+"+$","g"),Y=new RegExp("^"+R+"*,"+R+"*"),q=new RegExp("^"+R+"*([>+~]|"+R+")"+R+"*"),W=new RegExp(R+"|>"),z=new RegExp(B),G=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+H),PSEUDO:new RegExp("^"+B),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+R+"*(even|odd|(([+-]|)(\\d*)n|)"+R+"*(?:([+-]|)"+R+"*(\\d+)|))"+R+"*\\)|)","i"),bool:new RegExp("^(?:"+$+")$","i"),needsContext:new RegExp("^"+R+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+R+"*((?:-\\d)?\\d*)"+R+"*\\)|)(?=[^-]|$)","i")},Z=/HTML$/i,K=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,J=/^[^{]+\{\s*\[native \w/,Q=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tt=/[+~]/,et=new RegExp("\\\\([\\da-f]{1,6}"+R+"?|("+R+")|.)","ig"),nt=function(t,e,n){var i="0x"+e-65536;return i!=i||n?e:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},it=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ot=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},rt=function(){p()},st=wt((function(t){return!0===t.disabled&&"fieldset"===t.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{M.apply(j=A.call(x.childNodes),x.childNodes),j[x.childNodes.length].nodeType}catch(t){M={apply:j.length?function(t,e){P.apply(t,A.call(e))}:function(t,e){for(var n=t.length,i=0;t[n++]=e[i++];);t.length=n-1}}}function at(t,e,i,o){var r,a,c,l,d,f,v,y=e&&e.ownerDocument,_=e?e.nodeType:9;if(i=i||[],"string"!=typeof t||!t||1!==_&&9!==_&&11!==_)return i;if(!o&&((e?e.ownerDocument||e:x)!==h&&p(e),e=e||h,m)){if(11!==_&&(d=Q.exec(t)))if(r=d[1]){if(9===_){if(!(c=e.getElementById(r)))return i;if(c.id===r)return i.push(c),i}else if(y&&(c=y.getElementById(r))&&b(e,c)&&c.id===r)return i.push(c),i}else{if(d[2])return M.apply(i,e.getElementsByTagName(t)),i;if((r=d[3])&&n.getElementsByClassName&&e.getElementsByClassName)return M.apply(i,e.getElementsByClassName(r)),i}if(n.qsa&&!S[t+" "]&&(!g||!g.test(t))&&(1!==_||"object"!==e.nodeName.toLowerCase())){if(v=t,y=e,1===_&&W.test(t)){for((l=e.getAttribute("id"))?l=l.replace(it,ot):e.setAttribute("id",l=w),a=(f=s(t)).length;a--;)f[a]="#"+l+" "+bt(f[a]);v=f.join(","),y=tt.test(t)&&vt(e.parentNode)||e}try{return M.apply(i,y.querySelectorAll(v)),i}catch(e){S(t,!0)}finally{l===w&&e.removeAttribute("id")}}}return u(t.replace(F,"$1"),e,i,o)}function ut(){var t=[];return function e(n,o){return t.push(n+" ")>i.cacheLength&&delete e[t.shift()],e[n+" "]=o}}function ct(t){return t[w]=!0,t}function lt(t){var e=h.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function dt(t,e){for(var n=t.split("|"),o=n.length;o--;)i.attrHandle[n[o]]=e}function pt(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function ht(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function ft(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function mt(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&st(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function gt(t){return ct((function(e){return e=+e,ct((function(n,i){for(var o,r=t([],n.length,e),s=r.length;s--;)n[o=r[s]]&&(n[o]=!(i[o]=n[o]))}))}))}function vt(t){return t&&void 0!==t.getElementsByTagName&&t}for(e in n=at.support={},r=at.isXML=function(t){var e=t.namespaceURI,n=(t.ownerDocument||t).documentElement;return!Z.test(e||n&&n.nodeName||"HTML")},p=at.setDocument=function(t){var e,o,s=t?t.ownerDocument||t:x;return s!==h&&9===s.nodeType&&s.documentElement?(f=(h=s).documentElement,m=!r(h),x!==h&&(o=h.defaultView)&&o.top!==o&&(o.addEventListener?o.addEventListener("unload",rt,!1):o.attachEvent&&o.attachEvent("onunload",rt)),n.attributes=lt((function(t){return t.className="i",!t.getAttribute("className")})),n.getElementsByTagName=lt((function(t){return t.appendChild(h.createComment("")),!t.getElementsByTagName("*").length})),n.getElementsByClassName=J.test(h.getElementsByClassName),n.getById=lt((function(t){return f.appendChild(t).id=w,!h.getElementsByName||!h.getElementsByName(w).length})),n.getById?(i.filter.ID=function(t){var e=t.replace(et,nt);return function(t){return t.getAttribute("id")===e}},i.find.ID=function(t,e){if(void 0!==e.getElementById&&m){var n=e.getElementById(t);return n?[n]:[]}}):(i.filter.ID=function(t){var e=t.replace(et,nt);return function(t){var n=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}},i.find.ID=function(t,e){if(void 0!==e.getElementById&&m){var n,i,o,r=e.getElementById(t);if(r){if((n=r.getAttributeNode("id"))&&n.value===t)return[r];for(o=e.getElementsByName(t),i=0;r=o[i++];)if((n=r.getAttributeNode("id"))&&n.value===t)return[r]}return[]}}),i.find.TAG=n.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):n.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,i=[],o=0,r=e.getElementsByTagName(t);if("*"===t){for(;n=r[o++];)1===n.nodeType&&i.push(n);return i}return r},i.find.CLASS=n.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&m)return e.getElementsByClassName(t)},v=[],g=[],(n.qsa=J.test(h.querySelectorAll))&&(lt((function(t){f.appendChild(t).innerHTML="<a id='"+w+"'></a><select id='"+w+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+R+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||g.push("\\["+R+"*(?:value|"+$+")"),t.querySelectorAll("[id~="+w+"-]").length||g.push("~="),t.querySelectorAll(":checked").length||g.push(":checked"),t.querySelectorAll("a#"+w+"+*").length||g.push(".#.+[+~]")})),lt((function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=h.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&g.push("name"+R+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),f.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),g.push(",.*:")}))),(n.matchesSelector=J.test(y=f.matches||f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&lt((function(t){n.disconnectedMatch=y.call(t,"*"),y.call(t,"[s!='']:x"),v.push("!=",B)})),g=g.length&&new RegExp(g.join("|")),v=v.length&&new RegExp(v.join("|")),e=J.test(f.compareDocumentPosition),b=e||J.test(f.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode;return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},O=e?function(t,e){if(t===e)return d=!0,0;var i=!t.compareDocumentPosition-!e.compareDocumentPosition;return i||(1&(i=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1)||!n.sortDetached&&e.compareDocumentPosition(t)===i?t===h||t.ownerDocument===x&&b(x,t)?-1:e===h||e.ownerDocument===x&&b(x,e)?1:l?I(l,t)-I(l,e):0:4&i?-1:1)}:function(t,e){if(t===e)return d=!0,0;var n,i=0,o=t.parentNode,r=e.parentNode,s=[t],a=[e];if(!o||!r)return t===h?-1:e===h?1:o?-1:r?1:l?I(l,t)-I(l,e):0;if(o===r)return pt(t,e);for(n=t;n=n.parentNode;)s.unshift(n);for(n=e;n=n.parentNode;)a.unshift(n);for(;s[i]===a[i];)i++;return i?pt(s[i],a[i]):s[i]===x?-1:a[i]===x?1:0},h):h},at.matches=function(t,e){return at(t,null,null,e)},at.matchesSelector=function(t,e){if((t.ownerDocument||t)!==h&&p(t),n.matchesSelector&&m&&!S[e+" "]&&(!v||!v.test(e))&&(!g||!g.test(e)))try{var i=y.call(t,e);if(i||n.disconnectedMatch||t.document&&11!==t.document.nodeType)return i}catch(t){S(e,!0)}return at(e,h,null,[t]).length>0},at.contains=function(t,e){return(t.ownerDocument||t)!==h&&p(t),b(t,e)},at.attr=function(t,e){(t.ownerDocument||t)!==h&&p(t);var o=i.attrHandle[e.toLowerCase()],r=o&&D.call(i.attrHandle,e.toLowerCase())?o(t,e,!m):void 0;return void 0!==r?r:n.attributes||!m?t.getAttribute(e):(r=t.getAttributeNode(e))&&r.specified?r.value:null},at.escape=function(t){return(t+"").replace(it,ot)},at.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},at.uniqueSort=function(t){var e,i=[],o=0,r=0;if(d=!n.detectDuplicates,l=!n.sortStable&&t.slice(0),t.sort(O),d){for(;e=t[r++];)e===t[r]&&(o=i.push(r));for(;o--;)t.splice(i[o],1)}return l=null,t},o=at.getText=function(t){var e,n="",i=0,r=t.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=o(t)}else if(3===r||4===r)return t.nodeValue}else for(;e=t[i++];)n+=o(e);return n},(i=at.selectors={cacheLength:50,createPseudo:ct,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(et,nt),t[3]=(t[3]||t[4]||t[5]||"").replace(et,nt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||at.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&at.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return V.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&z.test(n)&&(e=s(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(et,nt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=k[t+" "];return e||(e=new RegExp("(^|"+R+")"+t+"("+R+"|$)"))&&k(t,(function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")}))},ATTR:function(t,e,n){return function(i){var o=at.attr(i,t);return null==o?"!="===e:!e||(o+="","="===e?o===n:"!="===e?o!==n:"^="===e?n&&0===o.indexOf(n):"*="===e?n&&o.indexOf(n)>-1:"$="===e?n&&o.slice(-n.length)===n:"~="===e?(" "+o.replace(U," ")+" ").indexOf(n)>-1:"|="===e&&(o===n||o.slice(0,n.length+1)===n+"-"))}},CHILD:function(t,e,n,i,o){var r="nth"!==t.slice(0,3),s="last"!==t.slice(-4),a="of-type"===e;return 1===i&&0===o?function(t){return!!t.parentNode}:function(e,n,u){var c,l,d,p,h,f,m=r!==s?"nextSibling":"previousSibling",g=e.parentNode,v=a&&e.nodeName.toLowerCase(),y=!u&&!a,b=!1;if(g){if(r){for(;m;){for(p=e;p=p[m];)if(a?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;f=m="only"===t&&!f&&"nextSibling"}return!0}if(f=[s?g.firstChild:g.lastChild],s&&y){for(b=(h=(c=(l=(d=(p=g)[w]||(p[w]={}))[p.uniqueID]||(d[p.uniqueID]={}))[t]||[])[0]===_&&c[1])&&c[2],p=h&&g.childNodes[h];p=++h&&p&&p[m]||(b=h=0)||f.pop();)if(1===p.nodeType&&++b&&p===e){l[t]=[_,h,b];break}}else if(y&&(b=h=(c=(l=(d=(p=e)[w]||(p[w]={}))[p.uniqueID]||(d[p.uniqueID]={}))[t]||[])[0]===_&&c[1]),!1===b)for(;(p=++h&&p&&p[m]||(b=h=0)||f.pop())&&((a?p.nodeName.toLowerCase()!==v:1!==p.nodeType)||!++b||(y&&((l=(d=p[w]||(p[w]={}))[p.uniqueID]||(d[p.uniqueID]={}))[t]=[_,b]),p!==e)););return(b-=o)===i||b%i==0&&b/i>=0}}},PSEUDO:function(t,e){var n,o=i.pseudos[t]||i.setFilters[t.toLowerCase()]||at.error("unsupported pseudo: "+t);return o[w]?o(e):o.length>1?(n=[t,t,"",e],i.setFilters.hasOwnProperty(t.toLowerCase())?ct((function(t,n){for(var i,r=o(t,e),s=r.length;s--;)t[i=I(t,r[s])]=!(n[i]=r[s])})):function(t){return o(t,0,n)}):o}},pseudos:{not:ct((function(t){var e=[],n=[],i=a(t.replace(F,"$1"));return i[w]?ct((function(t,e,n,o){for(var r,s=i(t,null,o,[]),a=t.length;a--;)(r=s[a])&&(t[a]=!(e[a]=r))})):function(t,o,r){return e[0]=t,i(e,null,r,n),e[0]=null,!n.pop()}})),has:ct((function(t){return function(e){return at(t,e).length>0}})),contains:ct((function(t){return t=t.replace(et,nt),function(e){return(e.textContent||o(e)).indexOf(t)>-1}})),lang:ct((function(t){return G.test(t||"")||at.error("unsupported lang: "+t),t=t.replace(et,nt).toLowerCase(),function(e){var n;do{if(n=m?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(n=n.toLowerCase())===t||0===n.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}})),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===f},focus:function(t){return t===h.activeElement&&(!h.hasFocus||h.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:mt(!1),disabled:mt(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!i.pseudos.empty(t)},header:function(t){return X.test(t.nodeName)},input:function(t){return K.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:gt((function(){return[0]})),last:gt((function(t,e){return[e-1]})),eq:gt((function(t,e,n){return[n<0?n+e:n]})),even:gt((function(t,e){for(var n=0;n<e;n+=2)t.push(n);return t})),odd:gt((function(t,e){for(var n=1;n<e;n+=2)t.push(n);return t})),lt:gt((function(t,e,n){for(var i=n<0?n+e:n>e?e:n;--i>=0;)t.push(i);return t})),gt:gt((function(t,e,n){for(var i=n<0?n+e:n;++i<e;)t.push(i);return t}))}}).pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[e]=ht(e);for(e in{submit:!0,reset:!0})i.pseudos[e]=ft(e);function yt(){}function bt(t){for(var e=0,n=t.length,i="";e<n;e++)i+=t[e].value;return i}function wt(t,e,n){var i=e.dir,o=e.next,r=o||i,s=n&&"parentNode"===r,a=N++;return e.first?function(e,n,o){for(;e=e[i];)if(1===e.nodeType||s)return t(e,n,o);return!1}:function(e,n,u){var c,l,d,p=[_,a];if(u){for(;e=e[i];)if((1===e.nodeType||s)&&t(e,n,u))return!0}else for(;e=e[i];)if(1===e.nodeType||s)if(l=(d=e[w]||(e[w]={}))[e.uniqueID]||(d[e.uniqueID]={}),o&&o===e.nodeName.toLowerCase())e=e[i]||e;else{if((c=l[r])&&c[0]===_&&c[1]===a)return p[2]=c[2];if(l[r]=p,p[2]=t(e,n,u))return!0}return!1}}function xt(t){return t.length>1?function(e,n,i){for(var o=t.length;o--;)if(!t[o](e,n,i))return!1;return!0}:t[0]}function _t(t,e,n,i,o){for(var r,s=[],a=0,u=t.length,c=null!=e;a<u;a++)(r=t[a])&&(n&&!n(r,i,o)||(s.push(r),c&&e.push(a)));return s}function Nt(t,e,n,i,o,r){return i&&!i[w]&&(i=Nt(i)),o&&!o[w]&&(o=Nt(o,r)),ct((function(r,s,a,u){var c,l,d,p=[],h=[],f=s.length,m=r||function(t,e,n){for(var i=0,o=e.length;i<o;i++)at(t,e[i],n);return n}(e||"*",a.nodeType?[a]:a,[]),g=!t||!r&&e?m:_t(m,p,t,a,u),v=n?o||(r?t:f||i)?[]:s:g;if(n&&n(g,v,a,u),i)for(c=_t(v,h),i(c,[],a,u),l=c.length;l--;)(d=c[l])&&(v[h[l]]=!(g[h[l]]=d));if(r){if(o||t){if(o){for(c=[],l=v.length;l--;)(d=v[l])&&c.push(g[l]=d);o(null,v=[],c,u)}for(l=v.length;l--;)(d=v[l])&&(c=o?I(r,d):p[l])>-1&&(r[c]=!(s[c]=d))}}else v=_t(v===s?v.splice(f,v.length):v),o?o(null,s,v,u):M.apply(s,v)}))}function kt(t){for(var e,n,o,r=t.length,s=i.relative[t[0].type],a=s||i.relative[" "],u=s?1:0,l=wt((function(t){return t===e}),a,!0),d=wt((function(t){return I(e,t)>-1}),a,!0),p=[function(t,n,i){var o=!s&&(i||n!==c)||((e=n).nodeType?l(t,n,i):d(t,n,i));return e=null,o}];u<r;u++)if(n=i.relative[t[u].type])p=[wt(xt(p),n)];else{if((n=i.filter[t[u].type].apply(null,t[u].matches))[w]){for(o=++u;o<r&&!i.relative[t[o].type];o++);return Nt(u>1&&xt(p),u>1&&bt(t.slice(0,u-1).concat({value:" "===t[u-2].type?"*":""})).replace(F,"$1"),n,u<o&&kt(t.slice(u,o)),o<r&&kt(t=t.slice(o)),o<r&&bt(t))}p.push(n)}return xt(p)}return yt.prototype=i.filters=i.pseudos,i.setFilters=new yt,s=at.tokenize=function(t,e){var n,o,r,s,a,u,c,l=T[t+" "];if(l)return e?0:l.slice(0);for(a=t,u=[],c=i.preFilter;a;){for(s in n&&!(o=Y.exec(a))||(o&&(a=a.slice(o[0].length)||a),u.push(r=[])),n=!1,(o=q.exec(a))&&(n=o.shift(),r.push({value:n,type:o[0].replace(F," ")}),a=a.slice(n.length)),i.filter)!(o=V[s].exec(a))||c[s]&&!(o=c[s](o))||(n=o.shift(),r.push({value:n,type:s,matches:o}),a=a.slice(n.length));if(!n)break}return e?a.length:a?at.error(t):T(t,u).slice(0)},a=at.compile=function(t,e){var n,o=[],r=[],a=C[t+" "];if(!a){for(e||(e=s(t)),n=e.length;n--;)(a=kt(e[n]))[w]?o.push(a):r.push(a);(a=C(t,function(t,e){var n=e.length>0,o=t.length>0,r=function(r,s,a,u,l){var d,f,g,v=0,y="0",b=r&&[],w=[],x=c,N=r||o&&i.find.TAG("*",l),k=_+=null==x?1:Math.random()||.1,T=N.length;for(l&&(c=s===h||s||l);y!==T&&null!=(d=N[y]);y++){if(o&&d){for(f=0,s||d.ownerDocument===h||(p(d),a=!m);g=t[f++];)if(g(d,s||h,a)){u.push(d);break}l&&(_=k)}n&&((d=!g&&d)&&v--,r&&b.push(d))}if(v+=y,n&&y!==v){for(f=0;g=e[f++];)g(b,w,s,a);if(r){if(v>0)for(;y--;)b[y]||w[y]||(w[y]=E.call(u));w=_t(w)}M.apply(u,w),l&&!r&&w.length>0&&v+e.length>1&&at.uniqueSort(u)}return l&&(_=k,c=x),b};return n?ct(r):r}(r,o))).selector=t}return a},u=at.select=function(t,e,n,o){var r,u,c,l,d,p="function"==typeof t&&t,h=!o&&s(t=p.selector||t);if(n=n||[],1===h.length){if((u=h[0]=h[0].slice(0)).length>2&&"ID"===(c=u[0]).type&&9===e.nodeType&&m&&i.relative[u[1].type]){if(!(e=(i.find.ID(c.matches[0].replace(et,nt),e)||[])[0]))return n;p&&(e=e.parentNode),t=t.slice(u.shift().value.length)}for(r=V.needsContext.test(t)?0:u.length;r--&&(c=u[r],!i.relative[l=c.type]);)if((d=i.find[l])&&(o=d(c.matches[0].replace(et,nt),tt.test(u[0].type)&&vt(e.parentNode)||e))){if(u.splice(r,1),!(t=o.length&&bt(u)))return M.apply(n,o),n;break}}return(p||a(t,h))(o,e,!m,n,!e||tt.test(t)&&vt(e.parentNode)||e),n},n.sortStable=w.split("").sort(O).join("")===w,n.detectDuplicates=!!d,p(),n.sortDetached=lt((function(t){return 1&t.compareDocumentPosition(h.createElement("fieldset"))})),lt((function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")}))||dt("type|href|height|width",(function(t,e,n){if(!n)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)})),n.attributes&&lt((function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")}))||dt("value",(function(t,e,n){if(!n&&"input"===t.nodeName.toLowerCase())return t.defaultValue})),lt((function(t){return null==t.getAttribute("disabled")}))||dt($,(function(t,e,n){var i;if(!n)return!0===t[e]?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null})),at}(n);N.find=C,N.expr=C.selectors,N.expr[":"]=N.expr.pseudos,N.uniqueSort=N.unique=C.uniqueSort,N.text=C.getText,N.isXMLDoc=C.isXML,N.contains=C.contains,N.escapeSelector=C.escape;var S=function(t,e,n){for(var i=[],o=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(o&&N(t).is(n))break;i.push(t)}return i},O=function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n},D=N.expr.match.needsContext;function j(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}var E=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function P(t,e,n){return y(e)?N.grep(t,(function(t,i){return!!e.call(t,i,t)!==n})):e.nodeType?N.grep(t,(function(t){return t===e!==n})):"string"!=typeof e?N.grep(t,(function(t){return d.call(e,t)>-1!==n})):N.filter(e,t,n)}N.filter=function(t,e,n){var i=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===i.nodeType?N.find.matchesSelector(i,t)?[i]:[]:N.find.matches(t,N.grep(e,(function(t){return 1===t.nodeType})))},N.fn.extend({find:function(t){var e,n,i=this.length,o=this;if("string"!=typeof t)return this.pushStack(N(t).filter((function(){for(e=0;e<i;e++)if(N.contains(o[e],this))return!0})));for(n=this.pushStack([]),e=0;e<i;e++)N.find(t,o[e],n);return i>1?N.uniqueSort(n):n},filter:function(t){return this.pushStack(P(this,t||[],!1))},not:function(t){return this.pushStack(P(this,t||[],!0))},is:function(t){return!!P(this,"string"==typeof t&&D.test(t)?N(t):t||[],!1).length}});var M,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(N.fn.init=function(t,e,n){var i,o;if(!t)return this;if(n=n||M,"string"==typeof t){if(!(i="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:A.exec(t))||!i[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);if(i[1]){if(e=e instanceof N?e[0]:e,N.merge(this,N.parseHTML(i[1],e&&e.nodeType?e.ownerDocument||e:s,!0)),E.test(i[1])&&N.isPlainObject(e))for(i in e)y(this[i])?this[i](e[i]):this.attr(i,e[i]);return this}return(o=s.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return t.nodeType?(this[0]=t,this.length=1,this):y(t)?void 0!==n.ready?n.ready(t):t(N):N.makeArray(t,this)}).prototype=N.fn,M=N(s);var I=/^(?:parents|prev(?:Until|All))/,$={children:!0,contents:!0,next:!0,prev:!0};function R(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}N.fn.extend({has:function(t){var e=N(t,this),n=e.length;return this.filter((function(){for(var t=0;t<n;t++)if(N.contains(this,e[t]))return!0}))},closest:function(t,e){var n,i=0,o=this.length,r=[],s="string"!=typeof t&&N(t);if(!D.test(t))for(;i<o;i++)for(n=this[i];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&N.find.matchesSelector(n,t))){r.push(n);break}return this.pushStack(r.length>1?N.uniqueSort(r):r)},index:function(t){return t?"string"==typeof t?d.call(N(t),this[0]):d.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(N.uniqueSort(N.merge(this.get(),N(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),N.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return S(t,"parentNode")},parentsUntil:function(t,e,n){return S(t,"parentNode",n)},next:function(t){return R(t,"nextSibling")},prev:function(t){return R(t,"previousSibling")},nextAll:function(t){return S(t,"nextSibling")},prevAll:function(t){return S(t,"previousSibling")},nextUntil:function(t,e,n){return S(t,"nextSibling",n)},prevUntil:function(t,e,n){return S(t,"previousSibling",n)},siblings:function(t){return O((t.parentNode||{}).firstChild,t)},children:function(t){return O(t.firstChild)},contents:function(t){return void 0!==t.contentDocument?t.contentDocument:(j(t,"template")&&(t=t.content||t),N.merge([],t.childNodes))}},(function(t,e){N.fn[t]=function(n,i){var o=N.map(this,e,n);return"Until"!==t.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=N.filter(i,o)),this.length>1&&($[t]||N.uniqueSort(o),I.test(t)&&o.reverse()),this.pushStack(o)}}));var L=/[^\x20\t\r\n\f]+/g;function H(t){return t}function B(t){throw t}function U(t,e,n,i){var o;try{t&&y(o=t.promise)?o.call(t).done(e).fail(n):t&&y(o=t.then)?o.call(t,e,n):e.apply(void 0,[t].slice(i))}catch(t){n.apply(void 0,[t])}}N.Callbacks=function(t){t="string"==typeof t?function(t){var e={};return N.each(t.match(L)||[],(function(t,n){e[n]=!0})),e}(t):N.extend({},t);var e,n,i,o,r=[],s=[],a=-1,u=function(){for(o=o||t.once,i=e=!0;s.length;a=-1)for(n=s.shift();++a<r.length;)!1===r[a].apply(n[0],n[1])&&t.stopOnFalse&&(a=r.length,n=!1);t.memory||(n=!1),e=!1,o&&(r=n?[]:"")},c={add:function(){return r&&(n&&!e&&(a=r.length-1,s.push(n)),function e(n){N.each(n,(function(n,i){y(i)?t.unique&&c.has(i)||r.push(i):i&&i.length&&"string"!==_(i)&&e(i)}))}(arguments),n&&!e&&u()),this},remove:function(){return N.each(arguments,(function(t,e){for(var n;(n=N.inArray(e,r,n))>-1;)r.splice(n,1),n<=a&&a--})),this},has:function(t){return t?N.inArray(t,r)>-1:r.length>0},empty:function(){return r&&(r=[]),this},disable:function(){return o=s=[],r=n="",this},disabled:function(){return!r},lock:function(){return o=s=[],n||e||(r=n=""),this},locked:function(){return!!o},fireWith:function(t,n){return o||(n=[t,(n=n||[]).slice?n.slice():n],s.push(n),e||u()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!i}};return c},N.extend({Deferred:function(t){var e=[["notify","progress",N.Callbacks("memory"),N.Callbacks("memory"),2],["resolve","done",N.Callbacks("once memory"),N.Callbacks("once memory"),0,"resolved"],["reject","fail",N.Callbacks("once memory"),N.Callbacks("once memory"),1,"rejected"]],i="pending",o={state:function(){return i},always:function(){return r.done(arguments).fail(arguments),this},catch:function(t){return o.then(null,t)},pipe:function(){var t=arguments;return N.Deferred((function(n){N.each(e,(function(e,i){var o=y(t[i[4]])&&t[i[4]];r[i[1]]((function(){var t=o&&o.apply(this,arguments);t&&y(t.promise)?t.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[i[0]+"With"](this,o?[t]:arguments)}))})),t=null})).promise()},then:function(t,i,o){var r=0;function s(t,e,i,o){return function(){var a=this,u=arguments,c=function(){var n,c;if(!(t<r)){if((n=i.apply(a,u))===e.promise())throw new TypeError("Thenable self-resolution");c=n&&("object"==typeof n||"function"==typeof n)&&n.then,y(c)?o?c.call(n,s(r,e,H,o),s(r,e,B,o)):(r++,c.call(n,s(r,e,H,o),s(r,e,B,o),s(r,e,H,e.notifyWith))):(i!==H&&(a=void 0,u=[n]),(o||e.resolveWith)(a,u))}},l=o?c:function(){try{c()}catch(n){N.Deferred.exceptionHook&&N.Deferred.exceptionHook(n,l.stackTrace),t+1>=r&&(i!==B&&(a=void 0,u=[n]),e.rejectWith(a,u))}};t?l():(N.Deferred.getStackHook&&(l.stackTrace=N.Deferred.getStackHook()),n.setTimeout(l))}}return N.Deferred((function(n){e[0][3].add(s(0,n,y(o)?o:H,n.notifyWith)),e[1][3].add(s(0,n,y(t)?t:H)),e[2][3].add(s(0,n,y(i)?i:B))})).promise()},promise:function(t){return null!=t?N.extend(t,o):o}},r={};return N.each(e,(function(t,n){var s=n[2],a=n[5];o[n[1]]=s.add,a&&s.add((function(){i=a}),e[3-t][2].disable,e[3-t][3].disable,e[0][2].lock,e[0][3].lock),s.add(n[3].fire),r[n[0]]=function(){return r[n[0]+"With"](this===r?void 0:this,arguments),this},r[n[0]+"With"]=s.fireWith})),o.promise(r),t&&t.call(r,r),r},when:function(t){var e=arguments.length,n=e,i=Array(n),o=u.call(arguments),r=N.Deferred(),s=function(t){return function(n){i[t]=this,o[t]=arguments.length>1?u.call(arguments):n,--e||r.resolveWith(i,o)}};if(e<=1&&(U(t,r.done(s(n)).resolve,r.reject,!e),"pending"===r.state()||y(o[n]&&o[n].then)))return r.then();for(;n--;)U(o[n],s(n),r.reject);return r.promise()}});var F=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;N.Deferred.exceptionHook=function(t,e){n.console&&n.console.warn&&t&&F.test(t.name)&&n.console.warn("jQuery.Deferred exception: "+t.message,t.stack,e)},N.readyException=function(t){n.setTimeout((function(){throw t}))};var Y=N.Deferred();function q(){s.removeEventListener("DOMContentLoaded",q),n.removeEventListener("load",q),N.ready()}N.fn.ready=function(t){return Y.then(t).catch((function(t){N.readyException(t)})),this},N.extend({isReady:!1,readyWait:1,ready:function(t){(!0===t?--N.readyWait:N.isReady)||(N.isReady=!0,!0!==t&&--N.readyWait>0||Y.resolveWith(s,[N]))}}),N.ready.then=Y.then,"complete"===s.readyState||"loading"!==s.readyState&&!s.documentElement.doScroll?n.setTimeout(N.ready):(s.addEventListener("DOMContentLoaded",q),n.addEventListener("load",q));var W=function(t,e,n,i,o,r,s){var a=0,u=t.length,c=null==n;if("object"===_(n))for(a in o=!0,n)W(t,e,a,n[a],!0,r,s);else if(void 0!==i&&(o=!0,y(i)||(s=!0),c&&(s?(e.call(t,i),e=null):(c=e,e=function(t,e,n){return c.call(N(t),n)})),e))for(;a<u;a++)e(t[a],n,s?i:i.call(t[a],a,e(t[a],n)));return o?t:c?e.call(t):u?e(t[0],n):r},z=/^-ms-/,G=/-([a-z])/g;function V(t,e){return e.toUpperCase()}function Z(t){return t.replace(z,"ms-").replace(G,V)}var K=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType};function X(){this.expando=N.expando+X.uid++}X.uid=1,X.prototype={cache:function(t){var e=t[this.expando];return e||(e={},K(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,n){var i,o=this.cache(t);if("string"==typeof e)o[Z(e)]=n;else for(i in e)o[Z(i)]=e[i];return o},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][Z(e)]},access:function(t,e,n){return void 0===e||e&&"string"==typeof e&&void 0===n?this.get(t,e):(this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,i=t[this.expando];if(void 0!==i){if(void 0!==e){n=(e=Array.isArray(e)?e.map(Z):(e=Z(e))in i?[e]:e.match(L)||[]).length;for(;n--;)delete i[e[n]]}(void 0===e||N.isEmptyObject(i))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!N.isEmptyObject(e)}};var J=new X,Q=new X,tt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,et=/[A-Z]/g;function nt(t,e,n){var i;if(void 0===n&&1===t.nodeType)if(i="data-"+e.replace(et,"-$&").toLowerCase(),"string"==typeof(n=t.getAttribute(i))){try{n=function(t){return"true"===t||"false"!==t&&("null"===t?null:t===+t+""?+t:tt.test(t)?JSON.parse(t):t)}(n)}catch(t){}Q.set(t,e,n)}else n=void 0;return n}N.extend({hasData:function(t){return Q.hasData(t)||J.hasData(t)},data:function(t,e,n){return Q.access(t,e,n)},removeData:function(t,e){Q.remove(t,e)},_data:function(t,e,n){return J.access(t,e,n)},_removeData:function(t,e){J.remove(t,e)}}),N.fn.extend({data:function(t,e){var n,i,o,r=this[0],s=r&&r.attributes;if(void 0===t){if(this.length&&(o=Q.get(r),1===r.nodeType&&!J.get(r,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(i=s[n].name).indexOf("data-")&&(i=Z(i.slice(5)),nt(r,i,o[i]));J.set(r,"hasDataAttrs",!0)}return o}return"object"==typeof t?this.each((function(){Q.set(this,t)})):W(this,(function(e){var n;if(r&&void 0===e)return void 0!==(n=Q.get(r,t))||void 0!==(n=nt(r,t))?n:void 0;this.each((function(){Q.set(this,t,e)}))}),null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each((function(){Q.remove(this,t)}))}}),N.extend({queue:function(t,e,n){var i;if(t)return e=(e||"fx")+"queue",i=J.get(t,e),n&&(!i||Array.isArray(n)?i=J.access(t,e,N.makeArray(n)):i.push(n)),i||[]},dequeue:function(t,e){e=e||"fx";var n=N.queue(t,e),i=n.length,o=n.shift(),r=N._queueHooks(t,e);"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===e&&n.unshift("inprogress"),delete r.stop,o.call(t,(function(){N.dequeue(t,e)}),r)),!i&&r&&r.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return J.get(t,n)||J.access(t,n,{empty:N.Callbacks("once memory").add((function(){J.remove(t,[e+"queue",n])}))})}}),N.fn.extend({queue:function(t,e){var n=2;return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?N.queue(this[0],t):void 0===e?this:this.each((function(){var n=N.queue(this,t,e);N._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&N.dequeue(this,t)}))},dequeue:function(t){return this.each((function(){N.dequeue(this,t)}))},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,i=1,o=N.Deferred(),r=this,s=this.length,a=function(){--i||o.resolveWith(r,[r])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";s--;)(n=J.get(r[s],t+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(e)}});var it=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ot=new RegExp("^(?:([+-])=|)("+it+")([a-z%]*)$","i"),rt=["Top","Right","Bottom","Left"],st=s.documentElement,at=function(t){return N.contains(t.ownerDocument,t)},ut={composed:!0};st.getRootNode&&(at=function(t){return N.contains(t.ownerDocument,t)||t.getRootNode(ut)===t.ownerDocument});var ct=function(t,e){return"none"===(t=e||t).style.display||""===t.style.display&&at(t)&&"none"===N.css(t,"display")},lt=function(t,e,n,i){var o,r,s={};for(r in e)s[r]=t.style[r],t.style[r]=e[r];for(r in o=n.apply(t,i||[]),e)t.style[r]=s[r];return o};function dt(t,e,n,i){var o,r,s=20,a=i?function(){return i.cur()}:function(){return N.css(t,e,"")},u=a(),c=n&&n[3]||(N.cssNumber[e]?"":"px"),l=t.nodeType&&(N.cssNumber[e]||"px"!==c&&+u)&&ot.exec(N.css(t,e));if(l&&l[3]!==c){for(u/=2,c=c||l[3],l=+u||1;s--;)N.style(t,e,l+c),(1-r)*(1-(r=a()/u||.5))<=0&&(s=0),l/=r;l*=2,N.style(t,e,l+c),n=n||[]}return n&&(l=+l||+u||0,o=n[1]?l+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=l,i.end=o)),o}var pt={};function ht(t){var e,n=t.ownerDocument,i=t.nodeName,o=pt[i];return o||(e=n.body.appendChild(n.createElement(i)),o=N.css(e,"display"),e.parentNode.removeChild(e),"none"===o&&(o="block"),pt[i]=o,o)}function ft(t,e){for(var n,i,o=[],r=0,s=t.length;r<s;r++)(i=t[r]).style&&(n=i.style.display,e?("none"===n&&(o[r]=J.get(i,"display")||null,o[r]||(i.style.display="")),""===i.style.display&&ct(i)&&(o[r]=ht(i))):"none"!==n&&(o[r]="none",J.set(i,"display",n)));for(r=0;r<s;r++)null!=o[r]&&(t[r].style.display=o[r]);return t}N.fn.extend({show:function(){return ft(this,!0)},hide:function(){return ft(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each((function(){ct(this)?N(this).show():N(this).hide()}))}});var mt=/^(?:checkbox|radio)$/i,gt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,vt=/^$|^module$|\/(?:java|ecma)script/i,yt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function bt(t,e){var n;return n=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&j(t,e)?N.merge([t],n):n}function wt(t,e){for(var n=0,i=t.length;n<i;n++)J.set(t[n],"globalEval",!e||J.get(e[n],"globalEval"))}yt.optgroup=yt.option,yt.tbody=yt.tfoot=yt.colgroup=yt.caption=yt.thead,yt.th=yt.td;var xt,_t,Nt=/<|&#?\w+;/;function kt(t,e,n,i,o){for(var r,s,a,u,c,l,d=e.createDocumentFragment(),p=[],h=0,f=t.length;h<f;h++)if((r=t[h])||0===r)if("object"===_(r))N.merge(p,r.nodeType?[r]:r);else if(Nt.test(r)){for(s=s||d.appendChild(e.createElement("div")),a=(gt.exec(r)||["",""])[1].toLowerCase(),u=yt[a]||yt._default,s.innerHTML=u[1]+N.htmlPrefilter(r)+u[2],l=u[0];l--;)s=s.lastChild;N.merge(p,s.childNodes),(s=d.firstChild).textContent=""}else p.push(e.createTextNode(r));for(d.textContent="",h=0;r=p[h++];)if(i&&N.inArray(r,i)>-1)o&&o.push(r);else if(c=at(r),s=bt(d.appendChild(r),"script"),c&&wt(s),n)for(l=0;r=s[l++];)vt.test(r.type||"")&&n.push(r);return d}xt=s.createDocumentFragment().appendChild(s.createElement("div")),(_t=s.createElement("input")).setAttribute("type","radio"),_t.setAttribute("checked","checked"),_t.setAttribute("name","t"),xt.appendChild(_t),v.checkClone=xt.cloneNode(!0).cloneNode(!0).lastChild.checked,xt.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!xt.cloneNode(!0).lastChild.defaultValue;var Tt=/^key/,Ct=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,St=/^([^.]*)(?:\.(.+)|)/;function Ot(){return!0}function Dt(){return!1}function jt(t,e){return t===function(){try{return s.activeElement}catch(t){}}()==("focus"===e)}function Et(t,e,n,i,o,r){var s,a;if("object"==typeof e){for(a in"string"!=typeof n&&(i=i||n,n=void 0),e)Et(t,a,n,i,e[a],r);return t}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),!1===o)o=Dt;else if(!o)return t;return 1===r&&(s=o,(o=function(t){return N().off(t),s.apply(this,arguments)}).guid=s.guid||(s.guid=N.guid++)),t.each((function(){N.event.add(this,e,o,i,n)}))}function Pt(t,e,n){n?(J.set(t,e,!1),N.event.add(t,e,{namespace:!1,handler:function(t){var i,o,r=J.get(this,e);if(1&t.isTrigger&&this[e]){if(r.length)(N.event.special[e]||{}).delegateType&&t.stopPropagation();else if(r=u.call(arguments),J.set(this,e,r),i=n(this,e),this[e](),r!==(o=J.get(this,e))||i?J.set(this,e,!1):o={},r!==o)return t.stopImmediatePropagation(),t.preventDefault(),o.value}else r.length&&(J.set(this,e,{value:N.event.trigger(N.extend(r[0],N.Event.prototype),r.slice(1),this)}),t.stopImmediatePropagation())}})):void 0===J.get(t,e)&&N.event.add(t,e,Ot)}N.event={global:{},add:function(t,e,n,i,o){var r,s,a,u,c,l,d,p,h,f,m,g=J.get(t);if(g)for(n.handler&&(n=(r=n).handler,o=r.selector),o&&N.find.matchesSelector(st,o),n.guid||(n.guid=N.guid++),(u=g.events)||(u=g.events={}),(s=g.handle)||(s=g.handle=function(e){return void 0!==N&&N.event.triggered!==e.type?N.event.dispatch.apply(t,arguments):void 0}),c=(e=(e||"").match(L)||[""]).length;c--;)h=m=(a=St.exec(e[c])||[])[1],f=(a[2]||"").split(".").sort(),h&&(d=N.event.special[h]||{},h=(o?d.delegateType:d.bindType)||h,d=N.event.special[h]||{},l=N.extend({type:h,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&N.expr.match.needsContext.test(o),namespace:f.join(".")},r),(p=u[h])||((p=u[h]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(t,i,f,s)||t.addEventListener&&t.addEventListener(h,s)),d.add&&(d.add.call(t,l),l.handler.guid||(l.handler.guid=n.guid)),o?p.splice(p.delegateCount++,0,l):p.push(l),N.event.global[h]=!0)},remove:function(t,e,n,i,o){var r,s,a,u,c,l,d,p,h,f,m,g=J.hasData(t)&&J.get(t);if(g&&(u=g.events)){for(c=(e=(e||"").match(L)||[""]).length;c--;)if(h=m=(a=St.exec(e[c])||[])[1],f=(a[2]||"").split(".").sort(),h){for(d=N.event.special[h]||{},p=u[h=(i?d.delegateType:d.bindType)||h]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=r=p.length;r--;)l=p[r],!o&&m!==l.origType||n&&n.guid!==l.guid||a&&!a.test(l.namespace)||i&&i!==l.selector&&("**"!==i||!l.selector)||(p.splice(r,1),l.selector&&p.delegateCount--,d.remove&&d.remove.call(t,l));s&&!p.length&&(d.teardown&&!1!==d.teardown.call(t,f,g.handle)||N.removeEvent(t,h,g.handle),delete u[h])}else for(h in u)N.event.remove(t,h+e[c],n,i,!0);N.isEmptyObject(u)&&J.remove(t,"handle events")}},dispatch:function(t){var e,n,i,o,r,s,a=N.event.fix(t),u=new Array(arguments.length),c=(J.get(this,"events")||{})[a.type]||[],l=N.event.special[a.type]||{};for(u[0]=a,e=1;e<arguments.length;e++)u[e]=arguments[e];if(a.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,a)){for(s=N.event.handlers.call(this,a,c),e=0;(o=s[e++])&&!a.isPropagationStopped();)for(a.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!1!==r.namespace&&!a.rnamespace.test(r.namespace)||(a.handleObj=r,a.data=r.data,void 0!==(i=((N.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,u))&&!1===(a.result=i)&&(a.preventDefault(),a.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,a),a.result}},handlers:function(t,e){var n,i,o,r,s,a=[],u=e.delegateCount,c=t.target;if(u&&c.nodeType&&!("click"===t.type&&t.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==t.type||!0!==c.disabled)){for(r=[],s={},n=0;n<u;n++)void 0===s[o=(i=e[n]).selector+" "]&&(s[o]=i.needsContext?N(o,this).index(c)>-1:N.find(o,this,null,[c]).length),s[o]&&r.push(i);r.length&&a.push({elem:c,handlers:r})}return c=this,u<e.length&&a.push({elem:c,handlers:e.slice(u)}),a},addProp:function(t,e){Object.defineProperty(N.Event.prototype,t,{enumerable:!0,configurable:!0,get:y(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[N.expando]?t:new N.Event(t)},special:{load:{noBubble:!0},click:{setup:function(t){var e=this||t;return mt.test(e.type)&&e.click&&j(e,"input")&&Pt(e,"click",Ot),!1},trigger:function(t){var e=this||t;return mt.test(e.type)&&e.click&&j(e,"input")&&Pt(e,"click"),!0},_default:function(t){var e=t.target;return mt.test(e.type)&&e.click&&j(e,"input")&&J.get(e,"click")||j(e,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},N.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n)},N.Event=function(t,e){if(!(this instanceof N.Event))return new N.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?Ot:Dt,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&N.extend(this,e),this.timeStamp=t&&t.timeStamp||Date.now(),this[N.expando]=!0},N.Event.prototype={constructor:N.Event,isDefaultPrevented:Dt,isPropagationStopped:Dt,isImmediatePropagationStopped:Dt,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=Ot,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=Ot,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=Ot,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},N.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var e=t.button;return null==t.which&&Tt.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:!t.which&&void 0!==e&&Ct.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},N.event.addProp),N.each({focus:"focusin",blur:"focusout"},(function(t,e){N.event.special[t]={setup:function(){return Pt(this,t,jt),!1},trigger:function(){return Pt(this,t),!0},delegateType:e}})),N.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(t,e){N.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,i=this,o=t.relatedTarget,r=t.handleObj;return o&&(o===i||N.contains(i,o))||(t.type=r.origType,n=r.handler.apply(this,arguments),t.type=e),n}}})),N.fn.extend({on:function(t,e,n,i){return Et(this,t,e,n,i)},one:function(t,e,n,i){return Et(this,t,e,n,i,1)},off:function(t,e,n){var i,o;if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,N(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof t){for(o in t)this.off(o,e,t[o]);return this}return!1!==e&&"function"!=typeof e||(n=e,e=void 0),!1===n&&(n=Dt),this.each((function(){N.event.remove(this,t,n,e)}))}});var Mt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,At=/<script|<style|<link/i,It=/checked\s*(?:[^=]|=\s*.checked.)/i,$t=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Rt(t,e){return j(t,"table")&&j(11!==e.nodeType?e:e.firstChild,"tr")&&N(t).children("tbody")[0]||t}function Lt(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function Ht(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function Bt(t,e){var n,i,o,r,s,a,u,c;if(1===e.nodeType){if(J.hasData(t)&&(r=J.access(t),s=J.set(e,r),c=r.events))for(o in delete s.handle,s.events={},c)for(n=0,i=c[o].length;n<i;n++)N.event.add(e,o,c[o][n]);Q.hasData(t)&&(a=Q.access(t),u=N.extend({},a),Q.set(e,u))}}function Ut(t,e){var n=e.nodeName.toLowerCase();"input"===n&&mt.test(t.type)?e.checked=t.checked:"input"!==n&&"textarea"!==n||(e.defaultValue=t.defaultValue)}function Ft(t,e,n,i){e=c.apply([],e);var o,r,s,a,u,l,d=0,p=t.length,h=p-1,f=e[0],m=y(f);if(m||p>1&&"string"==typeof f&&!v.checkClone&&It.test(f))return t.each((function(o){var r=t.eq(o);m&&(e[0]=f.call(this,o,r.html())),Ft(r,e,n,i)}));if(p&&(r=(o=kt(e,t[0].ownerDocument,!1,t,i)).firstChild,1===o.childNodes.length&&(o=r),r||i)){for(a=(s=N.map(bt(o,"script"),Lt)).length;d<p;d++)u=o,d!==h&&(u=N.clone(u,!0,!0),a&&N.merge(s,bt(u,"script"))),n.call(t[d],u,d);if(a)for(l=s[s.length-1].ownerDocument,N.map(s,Ht),d=0;d<a;d++)u=s[d],vt.test(u.type||"")&&!J.access(u,"globalEval")&&N.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?N._evalUrl&&!u.noModule&&N._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):x(u.textContent.replace($t,""),u,l))}return t}function Yt(t,e,n){for(var i,o=e?N.filter(e,t):t,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||N.cleanData(bt(i)),i.parentNode&&(n&&at(i)&&wt(bt(i,"script")),i.parentNode.removeChild(i));return t}N.extend({htmlPrefilter:function(t){return t.replace(Mt,"<$1></$2>")},clone:function(t,e,n){var i,o,r,s,a=t.cloneNode(!0),u=at(t);if(!(v.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||N.isXMLDoc(t)))for(s=bt(a),i=0,o=(r=bt(t)).length;i<o;i++)Ut(r[i],s[i]);if(e)if(n)for(r=r||bt(t),s=s||bt(a),i=0,o=r.length;i<o;i++)Bt(r[i],s[i]);else Bt(t,a);return(s=bt(a,"script")).length>0&&wt(s,!u&&bt(t,"script")),a},cleanData:function(t){for(var e,n,i,o=N.event.special,r=0;void 0!==(n=t[r]);r++)if(K(n)){if(e=n[J.expando]){if(e.events)for(i in e.events)o[i]?N.event.remove(n,i):N.removeEvent(n,i,e.handle);n[J.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),N.fn.extend({detach:function(t){return Yt(this,t,!0)},remove:function(t){return Yt(this,t)},text:function(t){return W(this,(function(t){return void 0===t?N.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)}))}),null,t,arguments.length)},append:function(){return Ft(this,arguments,(function(t){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Rt(this,t).appendChild(t)}))},prepend:function(){return Ft(this,arguments,(function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=Rt(this,t);e.insertBefore(t,e.firstChild)}}))},before:function(){return Ft(this,arguments,(function(t){this.parentNode&&this.parentNode.insertBefore(t,this)}))},after:function(){return Ft(this,arguments,(function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)}))},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(N.cleanData(bt(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map((function(){return N.clone(this,t,e)}))},html:function(t){return W(this,(function(t){var e=this[0]||{},n=0,i=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!At.test(t)&&!yt[(gt.exec(t)||["",""])[1].toLowerCase()]){t=N.htmlPrefilter(t);try{for(;n<i;n++)1===(e=this[n]||{}).nodeType&&(N.cleanData(bt(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)}),null,t,arguments.length)},replaceWith:function(){var t=[];return Ft(this,arguments,(function(e){var n=this.parentNode;N.inArray(this,t)<0&&(N.cleanData(bt(this)),n&&n.replaceChild(e,this))}),t)}}),N.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(t,e){N.fn[t]=function(t){for(var n,i=[],o=N(t),r=o.length-1,s=0;s<=r;s++)n=s===r?this:this.clone(!0),N(o[s])[e](n),l.apply(i,n.get());return this.pushStack(i)}}));var qt=new RegExp("^("+it+")(?!px)[a-z%]+$","i"),Wt=function(t){var e=t.ownerDocument.defaultView;return e&&e.opener||(e=n),e.getComputedStyle(t)},zt=new RegExp(rt.join("|"),"i");function Gt(t,e,n){var i,o,r,s,a=t.style;return(n=n||Wt(t))&&(""!==(s=n.getPropertyValue(e)||n[e])||at(t)||(s=N.style(t,e)),!v.pixelBoxStyles()&&qt.test(s)&&zt.test(e)&&(i=a.width,o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=o,a.maxWidth=r)),void 0!==s?s+"":s}function Vt(t,e){return{get:function(){if(!t())return(this.get=e).apply(this,arguments);delete this.get}}}!function(){function t(){if(l){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",st.appendChild(c).appendChild(l);var t=n.getComputedStyle(l);i="1%"!==t.top,u=12===e(t.marginLeft),l.style.right="60%",a=36===e(t.right),o=36===e(t.width),l.style.position="absolute",r=12===e(l.offsetWidth/3),st.removeChild(c),l=null}}function e(t){return Math.round(parseFloat(t))}var i,o,r,a,u,c=s.createElement("div"),l=s.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,N.extend(v,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),a},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),r}}))}();var Zt=["Webkit","Moz","ms"],Kt=s.createElement("div").style,Xt={};function Jt(t){var e=N.cssProps[t]||Xt[t];return e||(t in Kt?t:Xt[t]=function(t){for(var e=t[0].toUpperCase()+t.slice(1),n=Zt.length;n--;)if((t=Zt[n]+e)in Kt)return t}(t)||t)}var Qt=/^(none|table(?!-c[ea]).+)/,te=/^--/,ee={position:"absolute",visibility:"hidden",display:"block"},ne={letterSpacing:"0",fontWeight:"400"};function ie(t,e,n){var i=ot.exec(e);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):e}function oe(t,e,n,i,o,r){var s="width"===e?1:0,a=0,u=0;if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(u+=N.css(t,n+rt[s],!0,o)),i?("content"===n&&(u-=N.css(t,"padding"+rt[s],!0,o)),"margin"!==n&&(u-=N.css(t,"border"+rt[s]+"Width",!0,o))):(u+=N.css(t,"padding"+rt[s],!0,o),"padding"!==n?u+=N.css(t,"border"+rt[s]+"Width",!0,o):a+=N.css(t,"border"+rt[s]+"Width",!0,o));return!i&&r>=0&&(u+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-r-u-a-.5))||0),u}function re(t,e,n){var i=Wt(t),o=(!v.boxSizingReliable()||n)&&"border-box"===N.css(t,"boxSizing",!1,i),r=o,s=Gt(t,e,i),a="offset"+e[0].toUpperCase()+e.slice(1);if(qt.test(s)){if(!n)return s;s="auto"}return(!v.boxSizingReliable()&&o||"auto"===s||!parseFloat(s)&&"inline"===N.css(t,"display",!1,i))&&t.getClientRects().length&&(o="border-box"===N.css(t,"boxSizing",!1,i),(r=a in t)&&(s=t[a])),(s=parseFloat(s)||0)+oe(t,e,n||(o?"border":"content"),r,i,s)+"px"}function se(t,e,n,i,o){return new se.prototype.init(t,e,n,i,o)}N.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=Gt(t,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(t,e,n,i){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var o,r,s,a=Z(e),u=te.test(e),c=t.style;if(u||(e=Jt(a)),s=N.cssHooks[e]||N.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(o=s.get(t,!1,i))?o:c[e];"string"===(r=typeof n)&&(o=ot.exec(n))&&o[1]&&(n=dt(t,e,o),r="number"),null!=n&&n==n&&("number"!==r||u||(n+=o&&o[3]||(N.cssNumber[a]?"":"px")),v.clearCloneStyle||""!==n||0!==e.indexOf("background")||(c[e]="inherit"),s&&"set"in s&&void 0===(n=s.set(t,n,i))||(u?c.setProperty(e,n):c[e]=n))}},css:function(t,e,n,i){var o,r,s,a=Z(e);return te.test(e)||(e=Jt(a)),(s=N.cssHooks[e]||N.cssHooks[a])&&"get"in s&&(o=s.get(t,!0,n)),void 0===o&&(o=Gt(t,e,i)),"normal"===o&&e in ne&&(o=ne[e]),""===n||n?(r=parseFloat(o),!0===n||isFinite(r)?r||0:o):o}}),N.each(["height","width"],(function(t,e){N.cssHooks[e]={get:function(t,n,i){if(n)return!Qt.test(N.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?re(t,e,i):lt(t,ee,(function(){return re(t,e,i)}))},set:function(t,n,i){var o,r=Wt(t),s=!v.scrollboxSize()&&"absolute"===r.position,a=(s||i)&&"border-box"===N.css(t,"boxSizing",!1,r),u=i?oe(t,e,i,a,r):0;return a&&s&&(u-=Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-parseFloat(r[e])-oe(t,e,"border",!1,r)-.5)),u&&(o=ot.exec(n))&&"px"!==(o[3]||"px")&&(t.style[e]=n,n=N.css(t,e)),ie(0,n,u)}}})),N.cssHooks.marginLeft=Vt(v.reliableMarginLeft,(function(t,e){if(e)return(parseFloat(Gt(t,"marginLeft"))||t.getBoundingClientRect().left-lt(t,{marginLeft:0},(function(){return t.getBoundingClientRect().left})))+"px"})),N.each({margin:"",padding:"",border:"Width"},(function(t,e){N.cssHooks[t+e]={expand:function(n){for(var i=0,o={},r="string"==typeof n?n.split(" "):[n];i<4;i++)o[t+rt[i]+e]=r[i]||r[i-2]||r[0];return o}},"margin"!==t&&(N.cssHooks[t+e].set=ie)})),N.fn.extend({css:function(t,e){return W(this,(function(t,e,n){var i,o,r={},s=0;if(Array.isArray(e)){for(i=Wt(t),o=e.length;s<o;s++)r[e[s]]=N.css(t,e[s],!1,i);return r}return void 0!==n?N.style(t,e,n):N.css(t,e)}),t,e,arguments.length>1)}}),N.Tween=se,se.prototype={constructor:se,init:function(t,e,n,i,o,r){this.elem=t,this.prop=n,this.easing=o||N.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=r||(N.cssNumber[n]?"":"px")},cur:function(){var t=se.propHooks[this.prop];return t&&t.get?t.get(this):se.propHooks._default.get(this)},run:function(t){var e,n=se.propHooks[this.prop];return this.options.duration?this.pos=e=N.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):se.propHooks._default.set(this),this}},se.prototype.init.prototype=se.prototype,se.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=N.css(t.elem,t.prop,""))&&"auto"!==e?e:0},set:function(t){N.fx.step[t.prop]?N.fx.step[t.prop](t):1!==t.elem.nodeType||!N.cssHooks[t.prop]&&null==t.elem.style[Jt(t.prop)]?t.elem[t.prop]=t.now:N.style(t.elem,t.prop,t.now+t.unit)}}},se.propHooks.scrollTop=se.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},N.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},N.fx=se.prototype.init,N.fx.step={};var ae,ue,ce=/^(?:toggle|show|hide)$/,le=/queueHooks$/;function de(){ue&&(!1===s.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(de):n.setTimeout(de,N.fx.interval),N.fx.tick())}function pe(){return n.setTimeout((function(){ae=void 0})),ae=Date.now()}function he(t,e){var n,i=0,o={height:t};for(e=e?1:0;i<4;i+=2-e)o["margin"+(n=rt[i])]=o["padding"+n]=t;return e&&(o.opacity=o.width=t),o}function fe(t,e,n){for(var i,o=(me.tweeners[e]||[]).concat(me.tweeners["*"]),r=0,s=o.length;r<s;r++)if(i=o[r].call(n,e,t))return i}function me(t,e,n){var i,o,r=0,s=me.prefilters.length,a=N.Deferred().always((function(){delete u.elem})),u=function(){if(o)return!1;for(var e=ae||pe(),n=Math.max(0,c.startTime+c.duration-e),i=1-(n/c.duration||0),r=0,s=c.tweens.length;r<s;r++)c.tweens[r].run(i);return a.notifyWith(t,[c,i,n]),i<1&&s?n:(s||a.notifyWith(t,[c,1,0]),a.resolveWith(t,[c]),!1)},c=a.promise({elem:t,props:N.extend({},e),opts:N.extend(!0,{specialEasing:{},easing:N.easing._default},n),originalProperties:e,originalOptions:n,startTime:ae||pe(),duration:n.duration,tweens:[],createTween:function(e,n){var i=N.Tween(t,c.opts,e,n,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(i),i},stop:function(e){var n=0,i=e?c.tweens.length:0;if(o)return this;for(o=!0;n<i;n++)c.tweens[n].run(1);return e?(a.notifyWith(t,[c,1,0]),a.resolveWith(t,[c,e])):a.rejectWith(t,[c,e]),this}}),l=c.props;for(!function(t,e){var n,i,o,r,s;for(n in t)if(o=e[i=Z(n)],r=t[n],Array.isArray(r)&&(o=r[1],r=t[n]=r[0]),n!==i&&(t[i]=r,delete t[n]),(s=N.cssHooks[i])&&"expand"in s)for(n in r=s.expand(r),delete t[i],r)n in t||(t[n]=r[n],e[n]=o);else e[i]=o}(l,c.opts.specialEasing);r<s;r++)if(i=me.prefilters[r].call(c,t,l,c.opts))return y(i.stop)&&(N._queueHooks(c.elem,c.opts.queue).stop=i.stop.bind(i)),i;return N.map(l,fe,c),y(c.opts.start)&&c.opts.start.call(t,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),N.fx.timer(N.extend(u,{elem:t,anim:c,queue:c.opts.queue})),c}N.Animation=N.extend(me,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return dt(n.elem,t,ot.exec(e),n),n}]},tweener:function(t,e){y(t)?(e=t,t=["*"]):t=t.match(L);for(var n,i=0,o=t.length;i<o;i++)n=t[i],me.tweeners[n]=me.tweeners[n]||[],me.tweeners[n].unshift(e)},prefilters:[function(t,e,n){var i,o,r,s,a,u,c,l,d="width"in e||"height"in e,p=this,h={},f=t.style,m=t.nodeType&&ct(t),g=J.get(t,"fxshow");for(i in n.queue||(null==(s=N._queueHooks(t,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,p.always((function(){p.always((function(){s.unqueued--,N.queue(t,"fx").length||s.empty.fire()}))}))),e)if(o=e[i],ce.test(o)){if(delete e[i],r=r||"toggle"===o,o===(m?"hide":"show")){if("show"!==o||!g||void 0===g[i])continue;m=!0}h[i]=g&&g[i]||N.style(t,i)}if((u=!N.isEmptyObject(e))||!N.isEmptyObject(h))for(i in d&&1===t.nodeType&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],null==(c=g&&g.display)&&(c=J.get(t,"display")),"none"===(l=N.css(t,"display"))&&(c?l=c:(ft([t],!0),c=t.style.display||c,l=N.css(t,"display"),ft([t]))),("inline"===l||"inline-block"===l&&null!=c)&&"none"===N.css(t,"float")&&(u||(p.done((function(){f.display=c})),null==c&&(l=f.display,c="none"===l?"":l)),f.display="inline-block")),n.overflow&&(f.overflow="hidden",p.always((function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}))),u=!1,h)u||(g?"hidden"in g&&(m=g.hidden):g=J.access(t,"fxshow",{display:c}),r&&(g.hidden=!m),m&&ft([t],!0),p.done((function(){for(i in m||ft([t]),J.remove(t,"fxshow"),h)N.style(t,i,h[i])}))),u=fe(m?g[i]:0,i,p),i in g||(g[i]=u.start,m&&(u.end=u.start,u.start=0))}],prefilter:function(t,e){e?me.prefilters.unshift(t):me.prefilters.push(t)}}),N.speed=function(t,e,n){var i=t&&"object"==typeof t?N.extend({},t):{complete:n||!n&&e||y(t)&&t,duration:t,easing:n&&e||e&&!y(e)&&e};return N.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in N.fx.speeds?i.duration=N.fx.speeds[i.duration]:i.duration=N.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){y(i.old)&&i.old.call(this),i.queue&&N.dequeue(this,i.queue)},i},N.fn.extend({fadeTo:function(t,e,n,i){return this.filter(ct).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(t,e,n,i){var o=N.isEmptyObject(t),r=N.speed(e,n,i),s=function(){var e=me(this,N.extend({},t),r);(o||J.get(this,"finish"))&&e.stop(!0)};return s.finish=s,o||!1===r.queue?this.each(s):this.queue(r.queue,s)},stop:function(t,e,n){var i=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&!1!==t&&this.queue(t||"fx",[]),this.each((function(){var e=!0,o=null!=t&&t+"queueHooks",r=N.timers,s=J.get(this);if(o)s[o]&&s[o].stop&&i(s[o]);else for(o in s)s[o]&&s[o].stop&&le.test(o)&&i(s[o]);for(o=r.length;o--;)r[o].elem!==this||null!=t&&r[o].queue!==t||(r[o].anim.stop(n),e=!1,r.splice(o,1));!e&&n||N.dequeue(this,t)}))},finish:function(t){return!1!==t&&(t=t||"fx"),this.each((function(){var e,n=J.get(this),i=n[t+"queue"],o=n[t+"queueHooks"],r=N.timers,s=i?i.length:0;for(n.finish=!0,N.queue(this,t,[]),o&&o.stop&&o.stop.call(this,!0),e=r.length;e--;)r[e].elem===this&&r[e].queue===t&&(r[e].anim.stop(!0),r.splice(e,1));for(e=0;e<s;e++)i[e]&&i[e].finish&&i[e].finish.call(this);delete n.finish}))}}),N.each(["toggle","show","hide"],(function(t,e){var n=N.fn[e];N.fn[e]=function(t,i,o){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(he(e,!0),t,i,o)}})),N.each({slideDown:he("show"),slideUp:he("hide"),slideToggle:he("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(t,e){N.fn[t]=function(t,n,i){return this.animate(e,t,n,i)}})),N.timers=[],N.fx.tick=function(){var t,e=0,n=N.timers;for(ae=Date.now();e<n.length;e++)(t=n[e])()||n[e]!==t||n.splice(e--,1);n.length||N.fx.stop(),ae=void 0},N.fx.timer=function(t){N.timers.push(t),N.fx.start()},N.fx.interval=13,N.fx.start=function(){ue||(ue=!0,de())},N.fx.stop=function(){ue=null},N.fx.speeds={slow:600,fast:200,_default:400},N.fn.delay=function(t,e){return t=N.fx&&N.fx.speeds[t]||t,e=e||"fx",this.queue(e,(function(e,i){var o=n.setTimeout(e,t);i.stop=function(){n.clearTimeout(o)}}))},function(){var t=s.createElement("input"),e=s.createElement("select").appendChild(s.createElement("option"));t.type="checkbox",v.checkOn=""!==t.value,v.optSelected=e.selected,(t=s.createElement("input")).value="t",t.type="radio",v.radioValue="t"===t.value}();var ge,ve=N.expr.attrHandle;N.fn.extend({attr:function(t,e){return W(this,N.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each((function(){N.removeAttr(this,t)}))}}),N.extend({attr:function(t,e,n){var i,o,r=t.nodeType;if(3!==r&&8!==r&&2!==r)return void 0===t.getAttribute?N.prop(t,e,n):(1===r&&N.isXMLDoc(t)||(o=N.attrHooks[e.toLowerCase()]||(N.expr.match.bool.test(e)?ge:void 0)),void 0!==n?null===n?void N.removeAttr(t,e):o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:(t.setAttribute(e,n+""),n):o&&"get"in o&&null!==(i=o.get(t,e))?i:null==(i=N.find.attr(t,e))?void 0:i)},attrHooks:{type:{set:function(t,e){if(!v.radioValue&&"radio"===e&&j(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){var n,i=0,o=e&&e.match(L);if(o&&1===t.nodeType)for(;n=o[i++];)t.removeAttribute(n)}}),ge={set:function(t,e,n){return!1===e?N.removeAttr(t,n):t.setAttribute(n,n),n}},N.each(N.expr.match.bool.source.match(/\w+/g),(function(t,e){var n=ve[e]||N.find.attr;ve[e]=function(t,e,i){var o,r,s=e.toLowerCase();return i||(r=ve[s],ve[s]=o,o=null!=n(t,e,i)?s:null,ve[s]=r),o}}));var ye=/^(?:input|select|textarea|button)$/i,be=/^(?:a|area)$/i;function we(t){return(t.match(L)||[]).join(" ")}function xe(t){return t.getAttribute&&t.getAttribute("class")||""}function _e(t){return Array.isArray(t)?t:"string"==typeof t&&t.match(L)||[]}N.fn.extend({prop:function(t,e){return W(this,N.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each((function(){delete this[N.propFix[t]||t]}))}}),N.extend({prop:function(t,e,n){var i,o,r=t.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&N.isXMLDoc(t)||(e=N.propFix[e]||e,o=N.propHooks[e]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:t[e]=n:o&&"get"in o&&null!==(i=o.get(t,e))?i:t[e]},propHooks:{tabIndex:{get:function(t){var e=N.find.attr(t,"tabindex");return e?parseInt(e,10):ye.test(t.nodeName)||be.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),v.optSelected||(N.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),N.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){N.propFix[this.toLowerCase()]=this})),N.fn.extend({addClass:function(t){var e,n,i,o,r,s,a,u=0;if(y(t))return this.each((function(e){N(this).addClass(t.call(this,e,xe(this)))}));if((e=_e(t)).length)for(;n=this[u++];)if(o=xe(n),i=1===n.nodeType&&" "+we(o)+" "){for(s=0;r=e[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");o!==(a=we(i))&&n.setAttribute("class",a)}return this},removeClass:function(t){var e,n,i,o,r,s,a,u=0;if(y(t))return this.each((function(e){N(this).removeClass(t.call(this,e,xe(this)))}));if(!arguments.length)return this.attr("class","");if((e=_e(t)).length)for(;n=this[u++];)if(o=xe(n),i=1===n.nodeType&&" "+we(o)+" "){for(s=0;r=e[s++];)for(;i.indexOf(" "+r+" ")>-1;)i=i.replace(" "+r+" "," ");o!==(a=we(i))&&n.setAttribute("class",a)}return this},toggleClass:function(t,e){var n=typeof t,i="string"===n||Array.isArray(t);return"boolean"==typeof e&&i?e?this.addClass(t):this.removeClass(t):y(t)?this.each((function(n){N(this).toggleClass(t.call(this,n,xe(this),e),e)})):this.each((function(){var e,o,r,s;if(i)for(o=0,r=N(this),s=_e(t);e=s[o++];)r.hasClass(e)?r.removeClass(e):r.addClass(e);else void 0!==t&&"boolean"!==n||((e=xe(this))&&J.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":J.get(this,"__className__")||""))}))},hasClass:function(t){var e,n,i=0;for(e=" "+t+" ";n=this[i++];)if(1===n.nodeType&&(" "+we(xe(n))+" ").indexOf(e)>-1)return!0;return!1}});var Ne=/\r/g;N.fn.extend({val:function(t){var e,n,i,o=this[0];return arguments.length?(i=y(t),this.each((function(n){var o;1===this.nodeType&&(null==(o=i?t.call(this,n,N(this).val()):t)?o="":"number"==typeof o?o+="":Array.isArray(o)&&(o=N.map(o,(function(t){return null==t?"":t+""}))),(e=N.valHooks[this.type]||N.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,o,"value")||(this.value=o))}))):o?(e=N.valHooks[o.type]||N.valHooks[o.nodeName.toLowerCase()])&&"get"in e&&void 0!==(n=e.get(o,"value"))?n:"string"==typeof(n=o.value)?n.replace(Ne,""):null==n?"":n:void 0}}),N.extend({valHooks:{option:{get:function(t){var e=N.find.attr(t,"value");return null!=e?e:we(N.text(t))}},select:{get:function(t){var e,n,i,o=t.options,r=t.selectedIndex,s="select-one"===t.type,a=s?null:[],u=s?r+1:o.length;for(i=r<0?u:s?r:0;i<u;i++)if(((n=o[i]).selected||i===r)&&!n.disabled&&(!n.parentNode.disabled||!j(n.parentNode,"optgroup"))){if(e=N(n).val(),s)return e;a.push(e)}return a},set:function(t,e){for(var n,i,o=t.options,r=N.makeArray(e),s=o.length;s--;)((i=o[s]).selected=N.inArray(N.valHooks.option.get(i),r)>-1)&&(n=!0);return n||(t.selectedIndex=-1),r}}}}),N.each(["radio","checkbox"],(function(){N.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=N.inArray(N(t).val(),e)>-1}},v.checkOn||(N.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})})),v.focusin="onfocusin"in n;var ke=/^(?:focusinfocus|focusoutblur)$/,Te=function(t){t.stopPropagation()};N.extend(N.event,{trigger:function(t,e,i,o){var r,a,u,c,l,d,p,h,m=[i||s],g=f.call(t,"type")?t.type:t,v=f.call(t,"namespace")?t.namespace.split("."):[];if(a=h=u=i=i||s,3!==i.nodeType&&8!==i.nodeType&&!ke.test(g+N.event.triggered)&&(g.indexOf(".")>-1&&(v=g.split("."),g=v.shift(),v.sort()),l=g.indexOf(":")<0&&"on"+g,(t=t[N.expando]?t:new N.Event(g,"object"==typeof t&&t)).isTrigger=o?2:3,t.namespace=v.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),e=null==e?[t]:N.makeArray(e,[t]),p=N.event.special[g]||{},o||!p.trigger||!1!==p.trigger.apply(i,e))){if(!o&&!p.noBubble&&!b(i)){for(c=p.delegateType||g,ke.test(c+g)||(a=a.parentNode);a;a=a.parentNode)m.push(a),u=a;u===(i.ownerDocument||s)&&m.push(u.defaultView||u.parentWindow||n)}for(r=0;(a=m[r++])&&!t.isPropagationStopped();)h=a,t.type=r>1?c:p.bindType||g,(d=(J.get(a,"events")||{})[t.type]&&J.get(a,"handle"))&&d.apply(a,e),(d=l&&a[l])&&d.apply&&K(a)&&(t.result=d.apply(a,e),!1===t.result&&t.preventDefault());return t.type=g,o||t.isDefaultPrevented()||p._default&&!1!==p._default.apply(m.pop(),e)||!K(i)||l&&y(i[g])&&!b(i)&&((u=i[l])&&(i[l]=null),N.event.triggered=g,t.isPropagationStopped()&&h.addEventListener(g,Te),i[g](),t.isPropagationStopped()&&h.removeEventListener(g,Te),N.event.triggered=void 0,u&&(i[l]=u)),t.result}},simulate:function(t,e,n){var i=N.extend(new N.Event,n,{type:t,isSimulated:!0});N.event.trigger(i,null,e)}}),N.fn.extend({trigger:function(t,e){return this.each((function(){N.event.trigger(t,e,this)}))},triggerHandler:function(t,e){var n=this[0];if(n)return N.event.trigger(t,e,n,!0)}}),v.focusin||N.each({focus:"focusin",blur:"focusout"},(function(t,e){var n=function(t){N.event.simulate(e,t.target,N.event.fix(t))};N.event.special[e]={setup:function(){var i=this.ownerDocument||this,o=J.access(i,e);o||i.addEventListener(t,n,!0),J.access(i,e,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this,o=J.access(i,e)-1;o?J.access(i,e,o):(i.removeEventListener(t,n,!0),J.remove(i,e))}}}));var Ce=n.location,Se=Date.now(),Oe=/\?/;N.parseXML=function(t){var e;if(!t||"string"!=typeof t)return null;try{e=(new n.DOMParser).parseFromString(t,"text/xml")}catch(t){e=void 0}return e&&!e.getElementsByTagName("parsererror").length||N.error("Invalid XML: "+t),e};var De=/\[\]$/,je=/\r?\n/g,Ee=/^(?:submit|button|image|reset|file)$/i,Pe=/^(?:input|select|textarea|keygen)/i;function Me(t,e,n,i){var o;if(Array.isArray(e))N.each(e,(function(e,o){n||De.test(t)?i(t,o):Me(t+"["+("object"==typeof o&&null!=o?e:"")+"]",o,n,i)}));else if(n||"object"!==_(e))i(t,e);else for(o in e)Me(t+"["+o+"]",e[o],n,i)}N.param=function(t,e){var n,i=[],o=function(t,e){var n=y(e)?e():e;i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==n?"":n)};if(null==t)return"";if(Array.isArray(t)||t.jquery&&!N.isPlainObject(t))N.each(t,(function(){o(this.name,this.value)}));else for(n in t)Me(n,t[n],e,o);return i.join("&")},N.fn.extend({serialize:function(){return N.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var t=N.prop(this,"elements");return t?N.makeArray(t):this})).filter((function(){var t=this.type;return this.name&&!N(this).is(":disabled")&&Pe.test(this.nodeName)&&!Ee.test(t)&&(this.checked||!mt.test(t))})).map((function(t,e){var n=N(this).val();return null==n?null:Array.isArray(n)?N.map(n,(function(t){return{name:e.name,value:t.replace(je,"\r\n")}})):{name:e.name,value:n.replace(je,"\r\n")}})).get()}});var Ae=/%20/g,Ie=/#.*$/,$e=/([?&])_=[^&]*/,Re=/^(.*?):[ \t]*([^\r\n]*)$/gm,Le=/^(?:GET|HEAD)$/,He=/^\/\//,Be={},Ue={},Fe="*/".concat("*"),Ye=s.createElement("a");function qe(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var i,o=0,r=e.toLowerCase().match(L)||[];if(y(n))for(;i=r[o++];)"+"===i[0]?(i=i.slice(1)||"*",(t[i]=t[i]||[]).unshift(n)):(t[i]=t[i]||[]).push(n)}}function We(t,e,n,i){var o={},r=t===Ue;function s(a){var u;return o[a]=!0,N.each(t[a]||[],(function(t,a){var c=a(e,n,i);return"string"!=typeof c||r||o[c]?r?!(u=c):void 0:(e.dataTypes.unshift(c),s(c),!1)})),u}return s(e.dataTypes[0])||!o["*"]&&s("*")}function ze(t,e){var n,i,o=N.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((o[n]?t:i||(i={}))[n]=e[n]);return i&&N.extend(!0,t,i),t}Ye.href=Ce.href,N.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ce.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ce.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Fe,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":N.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?ze(ze(t,N.ajaxSettings),e):ze(N.ajaxSettings,t)},ajaxPrefilter:qe(Be),ajaxTransport:qe(Ue),ajax:function(t,e){"object"==typeof t&&(e=t,t=void 0),e=e||{};var i,o,r,a,u,c,l,d,p,h,f=N.ajaxSetup({},e),m=f.context||f,g=f.context&&(m.nodeType||m.jquery)?N(m):N.event,v=N.Deferred(),y=N.Callbacks("once memory"),b=f.statusCode||{},w={},x={},_="canceled",k={readyState:0,getResponseHeader:function(t){var e;if(l){if(!a)for(a={};e=Re.exec(r);)a[e[1].toLowerCase()+" "]=(a[e[1].toLowerCase()+" "]||[]).concat(e[2]);e=a[t.toLowerCase()+" "]}return null==e?null:e.join(", ")},getAllResponseHeaders:function(){return l?r:null},setRequestHeader:function(t,e){return null==l&&(t=x[t.toLowerCase()]=x[t.toLowerCase()]||t,w[t]=e),this},overrideMimeType:function(t){return null==l&&(f.mimeType=t),this},statusCode:function(t){var e;if(t)if(l)k.always(t[k.status]);else for(e in t)b[e]=[b[e],t[e]];return this},abort:function(t){var e=t||_;return i&&i.abort(e),T(0,e),this}};if(v.promise(k),f.url=((t||f.url||Ce.href)+"").replace(He,Ce.protocol+"//"),f.type=e.method||e.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(L)||[""],null==f.crossDomain){c=s.createElement("a");try{c.href=f.url,c.href=c.href,f.crossDomain=Ye.protocol+"//"+Ye.host!=c.protocol+"//"+c.host}catch(t){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=N.param(f.data,f.traditional)),We(Be,f,e,k),l)return k;for(p in(d=N.event&&f.global)&&0==N.active++&&N.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Le.test(f.type),o=f.url.replace(Ie,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(Ae,"+")):(h=f.url.slice(o.length),f.data&&(f.processData||"string"==typeof f.data)&&(o+=(Oe.test(o)?"&":"?")+f.data,delete f.data),!1===f.cache&&(o=o.replace($e,"$1"),h=(Oe.test(o)?"&":"?")+"_="+Se+++h),f.url=o+h),f.ifModified&&(N.lastModified[o]&&k.setRequestHeader("If-Modified-Since",N.lastModified[o]),N.etag[o]&&k.setRequestHeader("If-None-Match",N.etag[o])),(f.data&&f.hasContent&&!1!==f.contentType||e.contentType)&&k.setRequestHeader("Content-Type",f.contentType),k.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Fe+"; q=0.01":""):f.accepts["*"]),f.headers)k.setRequestHeader(p,f.headers[p]);if(f.beforeSend&&(!1===f.beforeSend.call(m,k,f)||l))return k.abort();if(_="abort",y.add(f.complete),k.done(f.success),k.fail(f.error),i=We(Ue,f,e,k)){if(k.readyState=1,d&&g.trigger("ajaxSend",[k,f]),l)return k;f.async&&f.timeout>0&&(u=n.setTimeout((function(){k.abort("timeout")}),f.timeout));try{l=!1,i.send(w,T)}catch(t){if(l)throw t;T(-1,t)}}else T(-1,"No Transport");function T(t,e,s,a){var c,p,h,w,x,_=e;l||(l=!0,u&&n.clearTimeout(u),i=void 0,r=a||"",k.readyState=t>0?4:0,c=t>=200&&t<300||304===t,s&&(w=function(t,e,n){for(var i,o,r,s,a=t.contents,u=t.dataTypes;"*"===u[0];)u.shift(),void 0===i&&(i=t.mimeType||e.getResponseHeader("Content-Type"));if(i)for(o in a)if(a[o]&&a[o].test(i)){u.unshift(o);break}if(u[0]in n)r=u[0];else{for(o in n){if(!u[0]||t.converters[o+" "+u[0]]){r=o;break}s||(s=o)}r=r||s}if(r)return r!==u[0]&&u.unshift(r),n[r]}(f,k,s)),w=function(t,e,n,i){var o,r,s,a,u,c={},l=t.dataTypes.slice();if(l[1])for(s in t.converters)c[s.toLowerCase()]=t.converters[s];for(r=l.shift();r;)if(t.responseFields[r]&&(n[t.responseFields[r]]=e),!u&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),u=r,r=l.shift())if("*"===r)r=u;else if("*"!==u&&u!==r){if(!(s=c[u+" "+r]||c["* "+r]))for(o in c)if((a=o.split(" "))[1]===r&&(s=c[u+" "+a[0]]||c["* "+a[0]])){!0===s?s=c[o]:!0!==c[o]&&(r=a[0],l.unshift(a[1]));break}if(!0!==s)if(s&&t.throws)e=s(e);else try{e=s(e)}catch(t){return{state:"parsererror",error:s?t:"No conversion from "+u+" to "+r}}}return{state:"success",data:e}}(f,w,k,c),c?(f.ifModified&&((x=k.getResponseHeader("Last-Modified"))&&(N.lastModified[o]=x),(x=k.getResponseHeader("etag"))&&(N.etag[o]=x)),204===t||"HEAD"===f.type?_="nocontent":304===t?_="notmodified":(_=w.state,p=w.data,c=!(h=w.error))):(h=_,!t&&_||(_="error",t<0&&(t=0))),k.status=t,k.statusText=(e||_)+"",c?v.resolveWith(m,[p,_,k]):v.rejectWith(m,[k,_,h]),k.statusCode(b),b=void 0,d&&g.trigger(c?"ajaxSuccess":"ajaxError",[k,f,c?p:h]),y.fireWith(m,[k,_]),d&&(g.trigger("ajaxComplete",[k,f]),--N.active||N.event.trigger("ajaxStop")))}return k},getJSON:function(t,e,n){return N.get(t,e,n,"json")},getScript:function(t,e){return N.get(t,void 0,e,"script")}}),N.each(["get","post"],(function(t,e){N[e]=function(t,n,i,o){return y(n)&&(o=o||i,i=n,n=void 0),N.ajax(N.extend({url:t,type:e,dataType:o,data:n,success:i},N.isPlainObject(t)&&t))}})),N._evalUrl=function(t,e){return N.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(t){N.globalEval(t,e)}})},N.fn.extend({wrapAll:function(t){var e;return this[0]&&(y(t)&&(t=t.call(this[0])),e=N(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map((function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t})).append(this)),this},wrapInner:function(t){return y(t)?this.each((function(e){N(this).wrapInner(t.call(this,e))})):this.each((function(){var e=N(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)}))},wrap:function(t){var e=y(t);return this.each((function(n){N(this).wrapAll(e?t.call(this,n):t)}))},unwrap:function(t){return this.parent(t).not("body").each((function(){N(this).replaceWith(this.childNodes)})),this}}),N.expr.pseudos.hidden=function(t){return!N.expr.pseudos.visible(t)},N.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},N.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(t){}};var Ge={0:200,1223:204},Ve=N.ajaxSettings.xhr();v.cors=!!Ve&&"withCredentials"in Ve,v.ajax=Ve=!!Ve,N.ajaxTransport((function(t){var e,i;if(v.cors||Ve&&!t.crossDomain)return{send:function(o,r){var s,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)a[s]=t.xhrFields[s];for(s in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest"),o)a.setRequestHeader(s,o[s]);e=function(t){return function(){e&&(e=i=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===t?a.abort():"error"===t?"number"!=typeof a.status?r(0,"error"):r(a.status,a.statusText):r(Ge[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=e(),i=a.onerror=a.ontimeout=e("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&n.setTimeout((function(){e&&i()}))},e=e("abort");try{a.send(t.hasContent&&t.data||null)}catch(t){if(e)throw t}},abort:function(){e&&e()}}})),N.ajaxPrefilter((function(t){t.crossDomain&&(t.contents.script=!1)})),N.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return N.globalEval(t),t}}}),N.ajaxPrefilter("script",(function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")})),N.ajaxTransport("script",(function(t){var e,n;if(t.crossDomain||t.scriptAttrs)return{send:function(i,o){e=N("<script>").attr(t.scriptAttrs||{}).prop({charset:t.scriptCharset,src:t.url}).on("load error",n=function(t){e.remove(),n=null,t&&o("error"===t.type?404:200,t.type)}),s.head.appendChild(e[0])},abort:function(){n&&n()}}}));var Ze,Ke=[],Xe=/(=)\?(?=&|$)|\?\?/;N.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Ke.pop()||N.expando+"_"+Se++;return this[t]=!0,t}}),N.ajaxPrefilter("json jsonp",(function(t,e,i){var o,r,s,a=!1!==t.jsonp&&(Xe.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Xe.test(t.data)&&"data");if(a||"jsonp"===t.dataTypes[0])return o=t.jsonpCallback=y(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Xe,"$1"+o):!1!==t.jsonp&&(t.url+=(Oe.test(t.url)?"&":"?")+t.jsonp+"="+o),t.converters["script json"]=function(){return s||N.error(o+" was not called"),s[0]},t.dataTypes[0]="json",r=n[o],n[o]=function(){s=arguments},i.always((function(){void 0===r?N(n).removeProp(o):n[o]=r,t[o]&&(t.jsonpCallback=e.jsonpCallback,Ke.push(o)),s&&y(r)&&r(s[0]),s=r=void 0})),"script"})),v.createHTMLDocument=((Ze=s.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ze.childNodes.length),N.parseHTML=function(t,e,n){return"string"!=typeof t?[]:("boolean"==typeof e&&(n=e,e=!1),e||(v.createHTMLDocument?((i=(e=s.implementation.createHTMLDocument("")).createElement("base")).href=s.location.href,e.head.appendChild(i)):e=s),r=!n&&[],(o=E.exec(t))?[e.createElement(o[1])]:(o=kt([t],e,r),r&&r.length&&N(r).remove(),N.merge([],o.childNodes)));var i,o,r},N.fn.load=function(t,e,n){var i,o,r,s=this,a=t.indexOf(" ");return a>-1&&(i=we(t.slice(a)),t=t.slice(0,a)),y(e)?(n=e,e=void 0):e&&"object"==typeof e&&(o="POST"),s.length>0&&N.ajax({url:t,type:o||"GET",dataType:"html",data:e}).done((function(t){r=arguments,s.html(i?N("<div>").append(N.parseHTML(t)).find(i):t)})).always(n&&function(t,e){s.each((function(){n.apply(this,r||[t.responseText,e,t])}))}),this},N.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(t,e){N.fn[e]=function(t){return this.on(e,t)}})),N.expr.pseudos.animated=function(t){return N.grep(N.timers,(function(e){return t===e.elem})).length},N.offset={setOffset:function(t,e,n){var i,o,r,s,a,u,c=N.css(t,"position"),l=N(t),d={};"static"===c&&(t.style.position="relative"),a=l.offset(),r=N.css(t,"top"),u=N.css(t,"left"),("absolute"===c||"fixed"===c)&&(r+u).indexOf("auto")>-1?(s=(i=l.position()).top,o=i.left):(s=parseFloat(r)||0,o=parseFloat(u)||0),y(e)&&(e=e.call(t,n,N.extend({},a))),null!=e.top&&(d.top=e.top-a.top+s),null!=e.left&&(d.left=e.left-a.left+o),"using"in e?e.using.call(t,d):l.css(d)}},N.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each((function(e){N.offset.setOffset(this,t,e)}));var e,n,i=this[0];return i?i.getClientRects().length?(e=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var t,e,n,i=this[0],o={top:0,left:0};if("fixed"===N.css(i,"position"))e=i.getBoundingClientRect();else{for(e=this.offset(),n=i.ownerDocument,t=i.offsetParent||n.documentElement;t&&(t===n.body||t===n.documentElement)&&"static"===N.css(t,"position");)t=t.parentNode;t&&t!==i&&1===t.nodeType&&((o=N(t).offset()).top+=N.css(t,"borderTopWidth",!0),o.left+=N.css(t,"borderLeftWidth",!0))}return{top:e.top-o.top-N.css(i,"marginTop",!0),left:e.left-o.left-N.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var t=this.offsetParent;t&&"static"===N.css(t,"position");)t=t.offsetParent;return t||st}))}}),N.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(t,e){var n="pageYOffset"===e;N.fn[t]=function(i){return W(this,(function(t,i,o){var r;if(b(t)?r=t:9===t.nodeType&&(r=t.defaultView),void 0===o)return r?r[e]:t[i];r?r.scrollTo(n?r.pageXOffset:o,n?o:r.pageYOffset):t[i]=o}),t,i,arguments.length)}})),N.each(["top","left"],(function(t,e){N.cssHooks[e]=Vt(v.pixelPosition,(function(t,n){if(n)return n=Gt(t,e),qt.test(n)?N(t).position()[e]+"px":n}))})),N.each({Height:"height",Width:"width"},(function(t,e){N.each({padding:"inner"+t,content:e,"":"outer"+t},(function(n,i){N.fn[i]=function(o,r){var s=arguments.length&&(n||"boolean"!=typeof o),a=n||(!0===o||!0===r?"margin":"border");return W(this,(function(e,n,o){var r;return b(e)?0===i.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+t],r["scroll"+t],e.body["offset"+t],r["offset"+t],r["client"+t])):void 0===o?N.css(e,n,a):N.style(e,n,o,a)}),e,s?o:void 0,s)}}))})),N.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(t,e){N.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}})),N.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),N.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)}}),N.proxy=function(t,e){var n,i,o;if("string"==typeof e&&(n=t[e],e=t,t=n),y(t))return i=u.call(arguments,2),(o=function(){return t.apply(e||this,i.concat(u.call(arguments)))}).guid=t.guid=t.guid||N.guid++,o},N.holdReady=function(t){t?N.readyWait++:N.ready(!0)},N.isArray=Array.isArray,N.parseJSON=JSON.parse,N.nodeName=j,N.isFunction=y,N.isWindow=b,N.camelCase=Z,N.type=_,N.now=Date.now,N.isNumeric=function(t){var e=N.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},void 0===(i=function(){return N}.apply(e,[]))||(t.exports=i);var Je=n.jQuery,Qe=n.$;return N.noConflict=function(t){return n.$===N&&(n.$=Qe),t&&n.jQuery===N&&(n.jQuery=Je),N},o||(n.jQuery=n.$=N),N}))},function(t,e,n){(function(e){t.exports=e.m=n(65)}).call(this,n(25))},function(t,e,n){(function(e){t.exports=e.moment=n(74)}).call(this,n(25))},function(t,e,n){(function(t){t.exports=function(){"use strict";var e,n;function i(){return e.apply(null,arguments)}function o(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)}function r(t){return null!=t&&"[object Object]"===Object.prototype.toString.call(t)}function s(t){return void 0===t}function a(t){return"number"==typeof t||"[object Number]"===Object.prototype.toString.call(t)}function u(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function c(t,e){var n,i=[];for(n=0;n<t.length;++n)i.push(e(t[n],n));return i}function l(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function d(t,e){for(var n in e)l(e,n)&&(t[n]=e[n]);return l(e,"toString")&&(t.toString=e.toString),l(e,"valueOf")&&(t.valueOf=e.valueOf),t}function p(t,e,n,i){return _e(t,e,n,i,!0).utc()}function h(t){return null==t._pf&&(t._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),t._pf}function f(t){if(null==t._isValid){var e=h(t),i=n.call(e.parsedDateParts,(function(t){return null!=t})),o=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidMonth&&!e.invalidWeekday&&!e.weekdayMismatch&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&i);if(t._strict&&(o=o&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour),null!=Object.isFrozen&&Object.isFrozen(t))return o;t._isValid=o}return t._isValid}function m(t){var e=p(NaN);return null!=t?d(h(e),t):h(e).userInvalidated=!0,e}n=Array.prototype.some?Array.prototype.some:function(t){for(var e=Object(this),n=e.length>>>0,i=0;i<n;i++)if(i in e&&t.call(this,e[i],i,e))return!0;return!1};var g=i.momentProperties=[];function v(t,e){var n,i,o;if(s(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),s(e._i)||(t._i=e._i),s(e._f)||(t._f=e._f),s(e._l)||(t._l=e._l),s(e._strict)||(t._strict=e._strict),s(e._tzm)||(t._tzm=e._tzm),s(e._isUTC)||(t._isUTC=e._isUTC),s(e._offset)||(t._offset=e._offset),s(e._pf)||(t._pf=h(e)),s(e._locale)||(t._locale=e._locale),g.length>0)for(n=0;n<g.length;n++)s(o=e[i=g[n]])||(t[i]=o);return t}var y=!1;function b(t){v(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===y&&(y=!0,i.updateOffset(this),y=!1)}function w(t){return t instanceof b||null!=t&&null!=t._isAMomentObject}function x(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function _(t){var e=+t,n=0;return 0!==e&&isFinite(e)&&(n=x(e)),n}function N(t,e,n){var i,o=Math.min(t.length,e.length),r=Math.abs(t.length-e.length),s=0;for(i=0;i<o;i++)(n&&t[i]!==e[i]||!n&&_(t[i])!==_(e[i]))&&s++;return s+r}function k(t){!1===i.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function T(t,e){var n=!0;return d((function(){if(null!=i.deprecationHandler&&i.deprecationHandler(null,t),n){for(var o,r=[],s=0;s<arguments.length;s++){if(o="","object"==typeof arguments[s]){for(var a in o+="\n["+s+"] ",arguments[0])o+=a+": "+arguments[0][a]+", ";o=o.slice(0,-2)}else o=arguments[s];r.push(o)}k(t+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),n=!1}return e.apply(this,arguments)}),e)}var C,S={};function O(t,e){null!=i.deprecationHandler&&i.deprecationHandler(t,e),S[t]||(k(e),S[t]=!0)}function D(t){return t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}function j(t,e){var n,i=d({},t);for(n in e)l(e,n)&&(r(t[n])&&r(e[n])?(i[n]={},d(i[n],t[n]),d(i[n],e[n])):null!=e[n]?i[n]=e[n]:delete i[n]);for(n in t)l(t,n)&&!l(e,n)&&r(t[n])&&(i[n]=d({},i[n]));return i}function E(t){null!=t&&this.set(t)}i.suppressDeprecationWarnings=!1,i.deprecationHandler=null,C=Object.keys?Object.keys:function(t){var e,n=[];for(e in t)l(t,e)&&n.push(e);return n};var P={};function M(t,e){var n=t.toLowerCase();P[n]=P[n+"s"]=P[e]=t}function A(t){return"string"==typeof t?P[t]||P[t.toLowerCase()]:void 0}function I(t){var e,n,i={};for(n in t)l(t,n)&&(e=A(n))&&(i[e]=t[n]);return i}var $={};function R(t,e){$[t]=e}function L(t,e,n){var i=""+Math.abs(t),o=e-i.length;return(t>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,o)).toString().substr(1)+i}var H=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,B=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,U={},F={};function Y(t,e,n,i){var o=i;"string"==typeof i&&(o=function(){return this[i]()}),t&&(F[t]=o),e&&(F[e[0]]=function(){return L(o.apply(this,arguments),e[1],e[2])}),n&&(F[n]=function(){return this.localeData().ordinal(o.apply(this,arguments),t)})}function q(t,e){return t.isValid()?(e=W(e,t.localeData()),U[e]=U[e]||function(t){var e,n,i,o=t.match(H);for(e=0,n=o.length;e<n;e++)F[o[e]]?o[e]=F[o[e]]:o[e]=(i=o[e]).match(/\[[\s\S]/)?i.replace(/^\[|\]$/g,""):i.replace(/\\/g,"");return function(e){var i,r="";for(i=0;i<n;i++)r+=D(o[i])?o[i].call(e,t):o[i];return r}}(e),U[e](t)):t.localeData().invalidDate()}function W(t,e){var n=5;function i(t){return e.longDateFormat(t)||t}for(B.lastIndex=0;n>=0&&B.test(t);)t=t.replace(B,i),B.lastIndex=0,n-=1;return t}var z=/\d/,G=/\d\d/,V=/\d{3}/,Z=/\d{4}/,K=/[+-]?\d{6}/,X=/\d\d?/,J=/\d\d\d\d?/,Q=/\d\d\d\d\d\d?/,tt=/\d{1,3}/,et=/\d{1,4}/,nt=/[+-]?\d{1,6}/,it=/\d+/,ot=/[+-]?\d+/,rt=/Z|[+-]\d\d:?\d\d/gi,st=/Z|[+-]\d\d(?::?\d\d)?/gi,at=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,ut={};function ct(t,e,n){ut[t]=D(e)?e:function(t,i){return t&&n?n:e}}function lt(t,e){return l(ut,t)?ut[t](e._strict,e._locale):new RegExp(dt(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,(function(t,e,n,i,o){return e||n||i||o}))))}function dt(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var pt={};function ht(t,e){var n,i=e;for("string"==typeof t&&(t=[t]),a(e)&&(i=function(t,n){n[e]=_(t)}),n=0;n<t.length;n++)pt[t[n]]=i}function ft(t,e){ht(t,(function(t,n,i,o){i._w=i._w||{},e(t,i._w,i,o)}))}function mt(t,e,n){null!=e&&l(pt,t)&&pt[t](e,n._a,n,t)}function gt(t){return vt(t)?366:365}function vt(t){return t%4==0&&t%100!=0||t%400==0}Y("Y",0,0,(function(){var t=this.year();return t<=9999?""+t:"+"+t})),Y(0,["YY",2],0,(function(){return this.year()%100})),Y(0,["YYYY",4],0,"year"),Y(0,["YYYYY",5],0,"year"),Y(0,["YYYYYY",6,!0],0,"year"),M("year","y"),R("year",1),ct("Y",ot),ct("YY",X,G),ct("YYYY",et,Z),ct("YYYYY",nt,K),ct("YYYYYY",nt,K),ht(["YYYYY","YYYYYY"],0),ht("YYYY",(function(t,e){e[0]=2===t.length?i.parseTwoDigitYear(t):_(t)})),ht("YY",(function(t,e){e[0]=i.parseTwoDigitYear(t)})),ht("Y",(function(t,e){e[0]=parseInt(t,10)})),i.parseTwoDigitYear=function(t){return _(t)+(_(t)>68?1900:2e3)};var yt,bt=wt("FullYear",!0);function wt(t,e){return function(n){return null!=n?(_t(this,t,n),i.updateOffset(this,e),this):xt(this,t)}}function xt(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function _t(t,e,n){t.isValid()&&!isNaN(n)&&("FullYear"===e&&vt(t.year())&&1===t.month()&&29===t.date()?t._d["set"+(t._isUTC?"UTC":"")+e](n,t.month(),Nt(n,t.month())):t._d["set"+(t._isUTC?"UTC":"")+e](n))}function Nt(t,e){if(isNaN(t)||isNaN(e))return NaN;var n,i=(e%(n=12)+n)%n;return t+=(e-i)/12,1===i?vt(t)?29:28:31-i%7%2}yt=Array.prototype.indexOf?Array.prototype.indexOf:function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1},Y("M",["MM",2],"Mo",(function(){return this.month()+1})),Y("MMM",0,0,(function(t){return this.localeData().monthsShort(this,t)})),Y("MMMM",0,0,(function(t){return this.localeData().months(this,t)})),M("month","M"),R("month",8),ct("M",X),ct("MM",X,G),ct("MMM",(function(t,e){return e.monthsShortRegex(t)})),ct("MMMM",(function(t,e){return e.monthsRegex(t)})),ht(["M","MM"],(function(t,e){e[1]=_(t)-1})),ht(["MMM","MMMM"],(function(t,e,n,i){var o=n._locale.monthsParse(t,i,n._strict);null!=o?e[1]=o:h(n).invalidMonth=t}));var kt=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Tt="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Ct="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function St(t,e,n){var i,o,r,s=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)r=p([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===e?-1!==(o=yt.call(this._shortMonthsParse,s))?o:null:-1!==(o=yt.call(this._longMonthsParse,s))?o:null:"MMM"===e?-1!==(o=yt.call(this._shortMonthsParse,s))||-1!==(o=yt.call(this._longMonthsParse,s))?o:null:-1!==(o=yt.call(this._longMonthsParse,s))||-1!==(o=yt.call(this._shortMonthsParse,s))?o:null}function Ot(t,e){var n;if(!t.isValid())return t;if("string"==typeof e)if(/^\d+$/.test(e))e=_(e);else if(!a(e=t.localeData().monthsParse(e)))return t;return n=Math.min(t.date(),Nt(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t}function Dt(t){return null!=t?(Ot(this,t),i.updateOffset(this,!0),this):xt(this,"Month")}var jt=at,Et=at;function Pt(){function t(t,e){return e.length-t.length}var e,n,i=[],o=[],r=[];for(e=0;e<12;e++)n=p([2e3,e]),i.push(this.monthsShort(n,"")),o.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(i.sort(t),o.sort(t),r.sort(t),e=0;e<12;e++)i[e]=dt(i[e]),o[e]=dt(o[e]);for(e=0;e<24;e++)r[e]=dt(r[e]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function Mt(t,e,n,i,o,r,s){var a=new Date(t,e,n,i,o,r,s);return t<100&&t>=0&&isFinite(a.getFullYear())&&a.setFullYear(t),a}function At(t){var e=new Date(Date.UTC.apply(null,arguments));return t<100&&t>=0&&isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t),e}function It(t,e,n){var i=7+e-n;return-(7+At(t,0,i).getUTCDay()-e)%7+i-1}function $t(t,e,n,i,o){var r,s,a=1+7*(e-1)+(7+n-i)%7+It(t,i,o);return a<=0?s=gt(r=t-1)+a:a>gt(t)?(r=t+1,s=a-gt(t)):(r=t,s=a),{year:r,dayOfYear:s}}function Rt(t,e,n){var i,o,r=It(t.year(),e,n),s=Math.floor((t.dayOfYear()-r-1)/7)+1;return s<1?i=s+Lt(o=t.year()-1,e,n):s>Lt(t.year(),e,n)?(i=s-Lt(t.year(),e,n),o=t.year()+1):(o=t.year(),i=s),{week:i,year:o}}function Lt(t,e,n){var i=It(t,e,n),o=It(t+1,e,n);return(gt(t)-i+o)/7}Y("w",["ww",2],"wo","week"),Y("W",["WW",2],"Wo","isoWeek"),M("week","w"),M("isoWeek","W"),R("week",5),R("isoWeek",5),ct("w",X),ct("ww",X,G),ct("W",X),ct("WW",X,G),ft(["w","ww","W","WW"],(function(t,e,n,i){e[i.substr(0,1)]=_(t)})),Y("d",0,"do","day"),Y("dd",0,0,(function(t){return this.localeData().weekdaysMin(this,t)})),Y("ddd",0,0,(function(t){return this.localeData().weekdaysShort(this,t)})),Y("dddd",0,0,(function(t){return this.localeData().weekdays(this,t)})),Y("e",0,0,"weekday"),Y("E",0,0,"isoWeekday"),M("day","d"),M("weekday","e"),M("isoWeekday","E"),R("day",11),R("weekday",11),R("isoWeekday",11),ct("d",X),ct("e",X),ct("E",X),ct("dd",(function(t,e){return e.weekdaysMinRegex(t)})),ct("ddd",(function(t,e){return e.weekdaysShortRegex(t)})),ct("dddd",(function(t,e){return e.weekdaysRegex(t)})),ft(["dd","ddd","dddd"],(function(t,e,n,i){var o=n._locale.weekdaysParse(t,i,n._strict);null!=o?e.d=o:h(n).invalidWeekday=t})),ft(["d","e","E"],(function(t,e,n,i){e[i]=_(t)}));var Ht="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Bt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Ut="Su_Mo_Tu_We_Th_Fr_Sa".split("_");function Ft(t,e,n){var i,o,r,s=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)r=p([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===e?-1!==(o=yt.call(this._weekdaysParse,s))?o:null:"ddd"===e?-1!==(o=yt.call(this._shortWeekdaysParse,s))?o:null:-1!==(o=yt.call(this._minWeekdaysParse,s))?o:null:"dddd"===e?-1!==(o=yt.call(this._weekdaysParse,s))||-1!==(o=yt.call(this._shortWeekdaysParse,s))||-1!==(o=yt.call(this._minWeekdaysParse,s))?o:null:"ddd"===e?-1!==(o=yt.call(this._shortWeekdaysParse,s))||-1!==(o=yt.call(this._weekdaysParse,s))||-1!==(o=yt.call(this._minWeekdaysParse,s))?o:null:-1!==(o=yt.call(this._minWeekdaysParse,s))||-1!==(o=yt.call(this._weekdaysParse,s))||-1!==(o=yt.call(this._shortWeekdaysParse,s))?o:null}var Yt=at,qt=at,Wt=at;function zt(){function t(t,e){return e.length-t.length}var e,n,i,o,r,s=[],a=[],u=[],c=[];for(e=0;e<7;e++)n=p([2e3,1]).day(e),i=this.weekdaysMin(n,""),o=this.weekdaysShort(n,""),r=this.weekdays(n,""),s.push(i),a.push(o),u.push(r),c.push(i),c.push(o),c.push(r);for(s.sort(t),a.sort(t),u.sort(t),c.sort(t),e=0;e<7;e++)a[e]=dt(a[e]),u[e]=dt(u[e]),c[e]=dt(c[e]);this._weekdaysRegex=new RegExp("^("+c.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Gt(){return this.hours()%12||12}function Vt(t,e){Y(t,0,0,(function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)}))}function Zt(t,e){return e._meridiemParse}Y("H",["HH",2],0,"hour"),Y("h",["hh",2],0,Gt),Y("k",["kk",2],0,(function(){return this.hours()||24})),Y("hmm",0,0,(function(){return""+Gt.apply(this)+L(this.minutes(),2)})),Y("hmmss",0,0,(function(){return""+Gt.apply(this)+L(this.minutes(),2)+L(this.seconds(),2)})),Y("Hmm",0,0,(function(){return""+this.hours()+L(this.minutes(),2)})),Y("Hmmss",0,0,(function(){return""+this.hours()+L(this.minutes(),2)+L(this.seconds(),2)})),Vt("a",!0),Vt("A",!1),M("hour","h"),R("hour",13),ct("a",Zt),ct("A",Zt),ct("H",X),ct("h",X),ct("k",X),ct("HH",X,G),ct("hh",X,G),ct("kk",X,G),ct("hmm",J),ct("hmmss",Q),ct("Hmm",J),ct("Hmmss",Q),ht(["H","HH"],3),ht(["k","kk"],(function(t,e,n){var i=_(t);e[3]=24===i?0:i})),ht(["a","A"],(function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t})),ht(["h","hh"],(function(t,e,n){e[3]=_(t),h(n).bigHour=!0})),ht("hmm",(function(t,e,n){var i=t.length-2;e[3]=_(t.substr(0,i)),e[4]=_(t.substr(i)),h(n).bigHour=!0})),ht("hmmss",(function(t,e,n){var i=t.length-4,o=t.length-2;e[3]=_(t.substr(0,i)),e[4]=_(t.substr(i,2)),e[5]=_(t.substr(o)),h(n).bigHour=!0})),ht("Hmm",(function(t,e,n){var i=t.length-2;e[3]=_(t.substr(0,i)),e[4]=_(t.substr(i))})),ht("Hmmss",(function(t,e,n){var i=t.length-4,o=t.length-2;e[3]=_(t.substr(0,i)),e[4]=_(t.substr(i,2)),e[5]=_(t.substr(o))}));var Kt,Xt=wt("Hours",!0),Jt={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Tt,monthsShort:Ct,week:{dow:0,doy:6},weekdays:Ht,weekdaysMin:Ut,weekdaysShort:Bt,meridiemParse:/[ap]\.?m?\.?/i},Qt={},te={};function ee(t){return t?t.toLowerCase().replace("_","-"):t}function ne(e){var n=null;if(!Qt[e]&&void 0!==t&&t&&t.exports)try{n=Kt._abbr,!function(){var t=new Error("Cannot find module 'undefined'");throw t.code="MODULE_NOT_FOUND",t}(),ie(n)}catch(t){}return Qt[e]}function ie(t,e){var n;return t&&((n=s(e)?re(t):oe(t,e))?Kt=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+t+" not found. Did you forget to load it?")),Kt._abbr}function oe(t,e){if(null!==e){var n,i=Jt;if(e.abbr=t,null!=Qt[t])O("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),i=Qt[t]._config;else if(null!=e.parentLocale)if(null!=Qt[e.parentLocale])i=Qt[e.parentLocale]._config;else{if(null==(n=ne(e.parentLocale)))return te[e.parentLocale]||(te[e.parentLocale]=[]),te[e.parentLocale].push({name:t,config:e}),null;i=n._config}return Qt[t]=new E(j(i,e)),te[t]&&te[t].forEach((function(t){oe(t.name,t.config)})),ie(t),Qt[t]}return delete Qt[t],null}function re(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return Kt;if(!o(t)){if(e=ne(t))return e;t=[t]}return function(t){for(var e,n,i,o,r=0;r<t.length;){for(e=(o=ee(t[r]).split("-")).length,n=(n=ee(t[r+1]))?n.split("-"):null;e>0;){if(i=ne(o.slice(0,e).join("-")))return i;if(n&&n.length>=e&&N(o,n,!0)>=e-1)break;e--}r++}return Kt}(t)}function se(t){var e,n=t._a;return n&&-2===h(t).overflow&&(e=n[1]<0||n[1]>11?1:n[2]<1||n[2]>Nt(n[0],n[1])?2:n[3]<0||n[3]>24||24===n[3]&&(0!==n[4]||0!==n[5]||0!==n[6])?3:n[4]<0||n[4]>59?4:n[5]<0||n[5]>59?5:n[6]<0||n[6]>999?6:-1,h(t)._overflowDayOfYear&&(e<0||e>2)&&(e=2),h(t)._overflowWeeks&&-1===e&&(e=7),h(t)._overflowWeekday&&-1===e&&(e=8),h(t).overflow=e),t}function ae(t,e,n){return null!=t?t:null!=e?e:n}function ue(t){var e,n,o,r,s,a=[];if(!t._d){for(o=function(t){var e=new Date(i.now());return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}(t),t._w&&null==t._a[2]&&null==t._a[1]&&function(t){var e,n,i,o,r,s,a,u;if(null!=(e=t._w).GG||null!=e.W||null!=e.E)r=1,s=4,n=ae(e.GG,t._a[0],Rt(Ne(),1,4).year),i=ae(e.W,1),((o=ae(e.E,1))<1||o>7)&&(u=!0);else{r=t._locale._week.dow,s=t._locale._week.doy;var c=Rt(Ne(),r,s);n=ae(e.gg,t._a[0],c.year),i=ae(e.w,c.week),null!=e.d?((o=e.d)<0||o>6)&&(u=!0):null!=e.e?(o=e.e+r,(e.e<0||e.e>6)&&(u=!0)):o=r}i<1||i>Lt(n,r,s)?h(t)._overflowWeeks=!0:null!=u?h(t)._overflowWeekday=!0:(a=$t(n,i,o,r,s),t._a[0]=a.year,t._dayOfYear=a.dayOfYear)}(t),null!=t._dayOfYear&&(s=ae(t._a[0],o[0]),(t._dayOfYear>gt(s)||0===t._dayOfYear)&&(h(t)._overflowDayOfYear=!0),n=At(s,0,t._dayOfYear),t._a[1]=n.getUTCMonth(),t._a[2]=n.getUTCDate()),e=0;e<3&&null==t._a[e];++e)t._a[e]=a[e]=o[e];for(;e<7;e++)t._a[e]=a[e]=null==t._a[e]?2===e?1:0:t._a[e];24===t._a[3]&&0===t._a[4]&&0===t._a[5]&&0===t._a[6]&&(t._nextDay=!0,t._a[3]=0),t._d=(t._useUTC?At:Mt).apply(null,a),r=t._useUTC?t._d.getUTCDay():t._d.getDay(),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[3]=24),t._w&&void 0!==t._w.d&&t._w.d!==r&&(h(t).weekdayMismatch=!0)}}var ce=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,le=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,de=/Z|[+-]\d\d(?::?\d\d)?/,pe=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],he=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],fe=/^\/?Date\((\-?\d+)/i;function me(t){var e,n,i,o,r,s,a=t._i,u=ce.exec(a)||le.exec(a);if(u){for(h(t).iso=!0,e=0,n=pe.length;e<n;e++)if(pe[e][1].exec(u[1])){o=pe[e][0],i=!1!==pe[e][2];break}if(null==o)return void(t._isValid=!1);if(u[3]){for(e=0,n=he.length;e<n;e++)if(he[e][1].exec(u[3])){r=(u[2]||" ")+he[e][0];break}if(null==r)return void(t._isValid=!1)}if(!i&&null!=r)return void(t._isValid=!1);if(u[4]){if(!de.exec(u[4]))return void(t._isValid=!1);s="Z"}t._f=o+(r||"")+(s||""),we(t)}else t._isValid=!1}var ge=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function ve(t){var e=parseInt(t,10);return e<=49?2e3+e:e<=999?1900+e:e}var ye={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function be(t){var e,n,i,o,r,s,a,u=ge.exec(t._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(u){var c=(e=u[4],n=u[3],i=u[2],o=u[5],r=u[6],s=u[7],a=[ve(e),Ct.indexOf(n),parseInt(i,10),parseInt(o,10),parseInt(r,10)],s&&a.push(parseInt(s,10)),a);if(!function(t,e,n){return!t||Bt.indexOf(t)===new Date(e[0],e[1],e[2]).getDay()||(h(n).weekdayMismatch=!0,n._isValid=!1,!1)}(u[1],c,t))return;t._a=c,t._tzm=function(t,e,n){if(t)return ye[t];if(e)return 0;var i=parseInt(n,10),o=i%100;return(i-o)/100*60+o}(u[8],u[9],u[10]),t._d=At.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),h(t).rfc2822=!0}else t._isValid=!1}function we(t){if(t._f!==i.ISO_8601)if(t._f!==i.RFC_2822){t._a=[],h(t).empty=!0;var e,n,o,r,s,a=""+t._i,u=a.length,c=0;for(o=W(t._f,t._locale).match(H)||[],e=0;e<o.length;e++)r=o[e],(n=(a.match(lt(r,t))||[])[0])&&((s=a.substr(0,a.indexOf(n))).length>0&&h(t).unusedInput.push(s),a=a.slice(a.indexOf(n)+n.length),c+=n.length),F[r]?(n?h(t).empty=!1:h(t).unusedTokens.push(r),mt(r,n,t)):t._strict&&!n&&h(t).unusedTokens.push(r);h(t).charsLeftOver=u-c,a.length>0&&h(t).unusedInput.push(a),t._a[3]<=12&&!0===h(t).bigHour&&t._a[3]>0&&(h(t).bigHour=void 0),h(t).parsedDateParts=t._a.slice(0),h(t).meridiem=t._meridiem,t._a[3]=function(t,e,n){var i;return null==n?e:null!=t.meridiemHour?t.meridiemHour(e,n):null!=t.isPM?((i=t.isPM(n))&&e<12&&(e+=12),i||12!==e||(e=0),e):e}(t._locale,t._a[3],t._meridiem),ue(t),se(t)}else be(t);else me(t)}function xe(t){var e=t._i,n=t._f;return t._locale=t._locale||re(t._l),null===e||void 0===n&&""===e?m({nullInput:!0}):("string"==typeof e&&(t._i=e=t._locale.preparse(e)),w(e)?new b(se(e)):(u(e)?t._d=e:o(n)?function(t){var e,n,i,o,r;if(0===t._f.length)return h(t).invalidFormat=!0,void(t._d=new Date(NaN));for(o=0;o<t._f.length;o++)r=0,e=v({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[o],we(e),f(e)&&(r+=h(e).charsLeftOver,r+=10*h(e).unusedTokens.length,h(e).score=r,(null==i||r<i)&&(i=r,n=e));d(t,n||e)}(t):n?we(t):function(t){var e=t._i;s(e)?t._d=new Date(i.now()):u(e)?t._d=new Date(e.valueOf()):"string"==typeof e?function(t){var e=fe.exec(t._i);null===e?(me(t),!1===t._isValid&&(delete t._isValid,be(t),!1===t._isValid&&(delete t._isValid,i.createFromInputFallback(t)))):t._d=new Date(+e[1])}(t):o(e)?(t._a=c(e.slice(0),(function(t){return parseInt(t,10)})),ue(t)):r(e)?function(t){if(!t._d){var e=I(t._i);t._a=c([e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],(function(t){return t&&parseInt(t,10)})),ue(t)}}(t):a(e)?t._d=new Date(e):i.createFromInputFallback(t)}(t),f(t)||(t._d=null),t))}function _e(t,e,n,i,s){var a,u={};return!0!==n&&!1!==n||(i=n,n=void 0),(r(t)&&function(t){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(t).length;var e;for(e in t)if(t.hasOwnProperty(e))return!1;return!0}(t)||o(t)&&0===t.length)&&(t=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=s,u._l=n,u._i=t,u._f=e,u._strict=i,(a=new b(se(xe(u))))._nextDay&&(a.add(1,"d"),a._nextDay=void 0),a}function Ne(t,e,n,i){return _e(t,e,n,i,!1)}i.createFromInputFallback=T("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",(function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))})),i.ISO_8601=function(){},i.RFC_2822=function(){};var ke=T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var t=Ne.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:m()})),Te=T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var t=Ne.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:m()}));function Ce(t,e){var n,i;if(1===e.length&&o(e[0])&&(e=e[0]),!e.length)return Ne();for(n=e[0],i=1;i<e.length;++i)e[i].isValid()&&!e[i][t](n)||(n=e[i]);return n}var Se=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Oe(t){var e=I(t),n=e.year||0,i=e.quarter||0,o=e.month||0,r=e.week||0,s=e.day||0,a=e.hour||0,u=e.minute||0,c=e.second||0,l=e.millisecond||0;this._isValid=function(t){for(var e in t)if(-1===yt.call(Se,e)||null!=t[e]&&isNaN(t[e]))return!1;for(var n=!1,i=0;i<Se.length;++i)if(t[Se[i]]){if(n)return!1;parseFloat(t[Se[i]])!==_(t[Se[i]])&&(n=!0)}return!0}(e),this._milliseconds=+l+1e3*c+6e4*u+1e3*a*60*60,this._days=+s+7*r,this._months=+o+3*i+12*n,this._data={},this._locale=re(),this._bubble()}function De(t){return t instanceof Oe}function je(t){return t<0?-1*Math.round(-1*t):Math.round(t)}function Ee(t,e){Y(t,0,0,(function(){var t=this.utcOffset(),n="+";return t<0&&(t=-t,n="-"),n+L(~~(t/60),2)+e+L(~~t%60,2)}))}Ee("Z",":"),Ee("ZZ",""),ct("Z",st),ct("ZZ",st),ht(["Z","ZZ"],(function(t,e,n){n._useUTC=!0,n._tzm=Me(st,t)}));var Pe=/([\+\-]|\d\d)/gi;function Me(t,e){var n=(e||"").match(t);if(null===n)return null;var i=((n[n.length-1]||[])+"").match(Pe)||["-",0,0],o=60*i[1]+_(i[2]);return 0===o?0:"+"===i[0]?o:-o}function Ae(t,e){var n,o;return e._isUTC?(n=e.clone(),o=(w(t)||u(t)?t.valueOf():Ne(t).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+o),i.updateOffset(n,!1),n):Ne(t).local()}function Ie(t){return 15*-Math.round(t._d.getTimezoneOffset()/15)}function $e(){return!!this.isValid()&&this._isUTC&&0===this._offset}i.updateOffset=function(){};var Re=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Le=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function He(t,e){var n,i,o,r,s,u,c=t,d=null;return De(t)?c={ms:t._milliseconds,d:t._days,M:t._months}:a(t)?(c={},e?c[e]=t:c.milliseconds=t):(d=Re.exec(t))?(n="-"===d[1]?-1:1,c={y:0,d:_(d[2])*n,h:_(d[3])*n,m:_(d[4])*n,s:_(d[5])*n,ms:_(je(1e3*d[6]))*n}):(d=Le.exec(t))?(n="-"===d[1]?-1:(d[1],1),c={y:Be(d[2],n),M:Be(d[3],n),w:Be(d[4],n),d:Be(d[5],n),h:Be(d[6],n),m:Be(d[7],n),s:Be(d[8],n)}):null==c?c={}:"object"==typeof c&&("from"in c||"to"in c)&&(r=Ne(c.from),s=Ne(c.to),o=r.isValid()&&s.isValid()?(s=Ae(s,r),r.isBefore(s)?u=Ue(r,s):((u=Ue(s,r)).milliseconds=-u.milliseconds,u.months=-u.months),u):{milliseconds:0,months:0},(c={}).ms=o.milliseconds,c.M=o.months),i=new Oe(c),De(t)&&l(t,"_locale")&&(i._locale=t._locale),i}function Be(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e}function Ue(t,e){var n={milliseconds:0,months:0};return n.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function Fe(t,e){return function(n,i){var o;return null===i||isNaN(+i)||(O(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),o=n,n=i,i=o),Ye(this,He(n="string"==typeof n?+n:n,i),t),this}}function Ye(t,e,n,o){var r=e._milliseconds,s=je(e._days),a=je(e._months);t.isValid()&&(o=null==o||o,a&&Ot(t,xt(t,"Month")+a*n),s&&_t(t,"Date",xt(t,"Date")+s*n),r&&t._d.setTime(t._d.valueOf()+r*n),o&&i.updateOffset(t,s||a))}He.fn=Oe.prototype,He.invalid=function(){return He(NaN)};var qe=Fe(1,"add"),We=Fe(-1,"subtract");function ze(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(n,"months");return-(n+(e-i<0?(e-i)/(i-t.clone().add(n-1,"months")):(e-i)/(t.clone().add(n+1,"months")-i)))||0}function Ge(t){var e;return void 0===t?this._locale._abbr:(null!=(e=re(t))&&(this._locale=e),this)}i.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",i.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Ve=T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",(function(t){return void 0===t?this.localeData():this.locale(t)}));function Ze(){return this._locale}function Ke(t,e){Y(0,[t,t.length],0,e)}function Xe(t,e,n,i,o){var r;return null==t?Rt(this,i,o).year:(e>(r=Lt(t,i,o))&&(e=r),Je.call(this,t,e,n,i,o))}function Je(t,e,n,i,o){var r=$t(t,e,n,i,o),s=At(r.year,0,r.dayOfYear);return this.year(s.getUTCFullYear()),this.month(s.getUTCMonth()),this.date(s.getUTCDate()),this}Y(0,["gg",2],0,(function(){return this.weekYear()%100})),Y(0,["GG",2],0,(function(){return this.isoWeekYear()%100})),Ke("gggg","weekYear"),Ke("ggggg","weekYear"),Ke("GGGG","isoWeekYear"),Ke("GGGGG","isoWeekYear"),M("weekYear","gg"),M("isoWeekYear","GG"),R("weekYear",1),R("isoWeekYear",1),ct("G",ot),ct("g",ot),ct("GG",X,G),ct("gg",X,G),ct("GGGG",et,Z),ct("gggg",et,Z),ct("GGGGG",nt,K),ct("ggggg",nt,K),ft(["gggg","ggggg","GGGG","GGGGG"],(function(t,e,n,i){e[i.substr(0,2)]=_(t)})),ft(["gg","GG"],(function(t,e,n,o){e[o]=i.parseTwoDigitYear(t)})),Y("Q",0,"Qo","quarter"),M("quarter","Q"),R("quarter",7),ct("Q",z),ht("Q",(function(t,e){e[1]=3*(_(t)-1)})),Y("D",["DD",2],"Do","date"),M("date","D"),R("date",9),ct("D",X),ct("DD",X,G),ct("Do",(function(t,e){return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient})),ht(["D","DD"],2),ht("Do",(function(t,e){e[2]=_(t.match(X)[0])}));var Qe=wt("Date",!0);Y("DDD",["DDDD",3],"DDDo","dayOfYear"),M("dayOfYear","DDD"),R("dayOfYear",4),ct("DDD",tt),ct("DDDD",V),ht(["DDD","DDDD"],(function(t,e,n){n._dayOfYear=_(t)})),Y("m",["mm",2],0,"minute"),M("minute","m"),R("minute",14),ct("m",X),ct("mm",X,G),ht(["m","mm"],4);var tn=wt("Minutes",!1);Y("s",["ss",2],0,"second"),M("second","s"),R("second",15),ct("s",X),ct("ss",X,G),ht(["s","ss"],5);var en,nn=wt("Seconds",!1);for(Y("S",0,0,(function(){return~~(this.millisecond()/100)})),Y(0,["SS",2],0,(function(){return~~(this.millisecond()/10)})),Y(0,["SSS",3],0,"millisecond"),Y(0,["SSSS",4],0,(function(){return 10*this.millisecond()})),Y(0,["SSSSS",5],0,(function(){return 100*this.millisecond()})),Y(0,["SSSSSS",6],0,(function(){return 1e3*this.millisecond()})),Y(0,["SSSSSSS",7],0,(function(){return 1e4*this.millisecond()})),Y(0,["SSSSSSSS",8],0,(function(){return 1e5*this.millisecond()})),Y(0,["SSSSSSSSS",9],0,(function(){return 1e6*this.millisecond()})),M("millisecond","ms"),R("millisecond",16),ct("S",tt,z),ct("SS",tt,G),ct("SSS",tt,V),en="SSSS";en.length<=9;en+="S")ct(en,it);function on(t,e){e[6]=_(1e3*("0."+t))}for(en="S";en.length<=9;en+="S")ht(en,on);var rn=wt("Milliseconds",!1);Y("z",0,0,"zoneAbbr"),Y("zz",0,0,"zoneName");var sn=b.prototype;function an(t){return t}sn.add=qe,sn.calendar=function(t,e){var n=t||Ne(),o=Ae(n,this).startOf("day"),r=i.calendarFormat(this,o)||"sameElse",s=e&&(D(e[r])?e[r].call(this,n):e[r]);return this.format(s||this.localeData().calendar(r,this,Ne(n)))},sn.clone=function(){return new b(this)},sn.diff=function(t,e,n){var i,o,r;if(!this.isValid())return NaN;if(!(i=Ae(t,this)).isValid())return NaN;switch(o=6e4*(i.utcOffset()-this.utcOffset()),e=A(e)){case"year":r=ze(this,i)/12;break;case"month":r=ze(this,i);break;case"quarter":r=ze(this,i)/3;break;case"second":r=(this-i)/1e3;break;case"minute":r=(this-i)/6e4;break;case"hour":r=(this-i)/36e5;break;case"day":r=(this-i-o)/864e5;break;case"week":r=(this-i-o)/6048e5;break;default:r=this-i}return n?r:x(r)},sn.endOf=function(t){return void 0===(t=A(t))||"millisecond"===t?this:("date"===t&&(t="day"),this.startOf(t).add(1,"isoWeek"===t?"week":t).subtract(1,"ms"))},sn.format=function(t){t||(t=this.isUtc()?i.defaultFormatUtc:i.defaultFormat);var e=q(this,t);return this.localeData().postformat(e)},sn.from=function(t,e){return this.isValid()&&(w(t)&&t.isValid()||Ne(t).isValid())?He({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()},sn.fromNow=function(t){return this.from(Ne(),t)},sn.to=function(t,e){return this.isValid()&&(w(t)&&t.isValid()||Ne(t).isValid())?He({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()},sn.toNow=function(t){return this.to(Ne(),t)},sn.get=function(t){return D(this[t=A(t)])?this[t]():this},sn.invalidAt=function(){return h(this).overflow},sn.isAfter=function(t,e){var n=w(t)?t:Ne(t);return!(!this.isValid()||!n.isValid())&&("millisecond"===(e=A(s(e)?"millisecond":e))?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(e).valueOf())},sn.isBefore=function(t,e){var n=w(t)?t:Ne(t);return!(!this.isValid()||!n.isValid())&&("millisecond"===(e=A(s(e)?"millisecond":e))?this.valueOf()<n.valueOf():this.clone().endOf(e).valueOf()<n.valueOf())},sn.isBetween=function(t,e,n,i){return("("===(i=i||"()")[0]?this.isAfter(t,n):!this.isBefore(t,n))&&(")"===i[1]?this.isBefore(e,n):!this.isAfter(e,n))},sn.isSame=function(t,e){var n,i=w(t)?t:Ne(t);return!(!this.isValid()||!i.isValid())&&("millisecond"===(e=A(e||"millisecond"))?this.valueOf()===i.valueOf():(n=i.valueOf(),this.clone().startOf(e).valueOf()<=n&&n<=this.clone().endOf(e).valueOf()))},sn.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)},sn.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)},sn.isValid=function(){return f(this)},sn.lang=Ve,sn.locale=Ge,sn.localeData=Ze,sn.max=Te,sn.min=ke,sn.parsingFlags=function(){return d({},h(this))},sn.set=function(t,e){if("object"==typeof t)for(var n=function(t){var e=[];for(var n in t)e.push({unit:n,priority:$[n]});return e.sort((function(t,e){return t.priority-e.priority})),e}(t=I(t)),i=0;i<n.length;i++)this[n[i].unit](t[n[i].unit]);else if(D(this[t=A(t)]))return this[t](e);return this},sn.startOf=function(t){switch(t=A(t)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),"isoWeek"===t&&this.isoWeekday(1),"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this},sn.subtract=We,sn.toArray=function(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]},sn.toObject=function(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}},sn.toDate=function(){return new Date(this.valueOf())},sn.toISOString=function(t){if(!this.isValid())return null;var e=!0!==t,n=e?this.clone().utc():this;return n.year()<0||n.year()>9999?q(n,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):D(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",q(n,"Z")):q(n,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},sn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="";this.isLocal()||(t=0===this.utcOffset()?"moment.utc":"moment.parseZone",e="Z");var n="["+t+'("]',i=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",o=e+'[")]';return this.format(n+i+"-MM-DD[T]HH:mm:ss.SSS"+o)},sn.toJSON=function(){return this.isValid()?this.toISOString():null},sn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},sn.unix=function(){return Math.floor(this.valueOf()/1e3)},sn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},sn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},sn.year=bt,sn.isLeapYear=function(){return vt(this.year())},sn.weekYear=function(t){return Xe.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},sn.isoWeekYear=function(t){return Xe.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)},sn.quarter=sn.quarters=function(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)},sn.month=Dt,sn.daysInMonth=function(){return Nt(this.year(),this.month())},sn.week=sn.weeks=function(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")},sn.isoWeek=sn.isoWeeks=function(t){var e=Rt(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")},sn.weeksInYear=function(){var t=this.localeData()._week;return Lt(this.year(),t.dow,t.doy)},sn.isoWeeksInYear=function(){return Lt(this.year(),1,4)},sn.date=Qe,sn.day=sn.days=function(t){if(!this.isValid())return null!=t?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(t=function(t,e){return"string"!=typeof t?t:isNaN(t)?"number"==typeof(t=e.weekdaysParse(t))?t:null:parseInt(t,10)}(t,this.localeData()),this.add(t-e,"d")):e},sn.weekday=function(t){if(!this.isValid())return null!=t?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")},sn.isoWeekday=function(t){if(!this.isValid())return null!=t?this:NaN;if(null!=t){var e=function(t,e){return"string"==typeof t?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}(t,this.localeData());return this.day(this.day()%7?e:e-7)}return this.day()||7},sn.dayOfYear=function(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")},sn.hour=sn.hours=Xt,sn.minute=sn.minutes=tn,sn.second=sn.seconds=nn,sn.millisecond=sn.milliseconds=rn,sn.utcOffset=function(t,e,n){var o,r=this._offset||0;if(!this.isValid())return null!=t?this:NaN;if(null!=t){if("string"==typeof t){if(null===(t=Me(st,t)))return this}else Math.abs(t)<16&&!n&&(t*=60);return!this._isUTC&&e&&(o=Ie(this)),this._offset=t,this._isUTC=!0,null!=o&&this.add(o,"m"),r!==t&&(!e||this._changeInProgress?Ye(this,He(t-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,i.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?r:Ie(this)},sn.utc=function(t){return this.utcOffset(0,t)},sn.local=function(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Ie(this),"m")),this},sn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var t=Me(rt,this._i);null!=t?this.utcOffset(t):this.utcOffset(0,!0)}return this},sn.hasAlignedHourOffset=function(t){return!!this.isValid()&&(t=t?Ne(t).utcOffset():0,(this.utcOffset()-t)%60==0)},sn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},sn.isLocal=function(){return!!this.isValid()&&!this._isUTC},sn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},sn.isUtc=$e,sn.isUTC=$e,sn.zoneAbbr=function(){return this._isUTC?"UTC":""},sn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},sn.dates=T("dates accessor is deprecated. Use date instead.",Qe),sn.months=T("months accessor is deprecated. Use month instead",Dt),sn.years=T("years accessor is deprecated. Use year instead",bt),sn.zone=T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",(function(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()})),sn.isDSTShifted=T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",(function(){if(!s(this._isDSTShifted))return this._isDSTShifted;var t={};if(v(t,this),(t=xe(t))._a){var e=t._isUTC?p(t._a):Ne(t._a);this._isDSTShifted=this.isValid()&&N(t._a,e.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}));var un=E.prototype;function cn(t,e,n,i){var o=re(),r=p().set(i,e);return o[n](r,t)}function ln(t,e,n){if(a(t)&&(e=t,t=void 0),t=t||"",null!=e)return cn(t,e,n,"month");var i,o=[];for(i=0;i<12;i++)o[i]=cn(t,i,n,"month");return o}function dn(t,e,n,i){"boolean"==typeof t?(a(e)&&(n=e,e=void 0),e=e||""):(n=e=t,t=!1,a(e)&&(n=e,e=void 0),e=e||"");var o,r=re(),s=t?r._week.dow:0;if(null!=n)return cn(e,(n+s)%7,i,"day");var u=[];for(o=0;o<7;o++)u[o]=cn(e,(o+s)%7,i,"day");return u}un.calendar=function(t,e,n){var i=this._calendar[t]||this._calendar.sameElse;return D(i)?i.call(e,n):i},un.longDateFormat=function(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.replace(/MMMM|MM|DD|dddd/g,(function(t){return t.slice(1)})),this._longDateFormat[t])},un.invalidDate=function(){return this._invalidDate},un.ordinal=function(t){return this._ordinal.replace("%d",t)},un.preparse=an,un.postformat=an,un.relativeTime=function(t,e,n,i){var o=this._relativeTime[n];return D(o)?o(t,e,n,i):o.replace(/%d/i,t)},un.pastFuture=function(t,e){var n=this._relativeTime[t>0?"future":"past"];return D(n)?n(e):n.replace(/%s/i,e)},un.set=function(t){var e,n;for(n in t)D(e=t[n])?this[n]=e:this["_"+n]=e;this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},un.months=function(t,e){return t?o(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||kt).test(e)?"format":"standalone"][t.month()]:o(this._months)?this._months:this._months.standalone},un.monthsShort=function(t,e){return t?o(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[kt.test(e)?"format":"standalone"][t.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},un.monthsParse=function(t,e,n){var i,o,r;if(this._monthsParseExact)return St.call(this,t,e,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(o=p([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(o,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(o,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(r="^"+this.months(o,"")+"|^"+this.monthsShort(o,""),this._monthsParse[i]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===e&&this._longMonthsParse[i].test(t))return i;if(n&&"MMM"===e&&this._shortMonthsParse[i].test(t))return i;if(!n&&this._monthsParse[i].test(t))return i}},un.monthsRegex=function(t){return this._monthsParseExact?(l(this,"_monthsRegex")||Pt.call(this),t?this._monthsStrictRegex:this._monthsRegex):(l(this,"_monthsRegex")||(this._monthsRegex=Et),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)},un.monthsShortRegex=function(t){return this._monthsParseExact?(l(this,"_monthsRegex")||Pt.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(l(this,"_monthsShortRegex")||(this._monthsShortRegex=jt),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)},un.week=function(t){return Rt(t,this._week.dow,this._week.doy).week},un.firstDayOfYear=function(){return this._week.doy},un.firstDayOfWeek=function(){return this._week.dow},un.weekdays=function(t,e){return t?o(this._weekdays)?this._weekdays[t.day()]:this._weekdays[this._weekdays.isFormat.test(e)?"format":"standalone"][t.day()]:o(this._weekdays)?this._weekdays:this._weekdays.standalone},un.weekdaysMin=function(t){return t?this._weekdaysMin[t.day()]:this._weekdaysMin},un.weekdaysShort=function(t){return t?this._weekdaysShort[t.day()]:this._weekdaysShort},un.weekdaysParse=function(t,e,n){var i,o,r;if(this._weekdaysParseExact)return Ft.call(this,t,e,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(o=p([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(o,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(o,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(o,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[i]||(r="^"+this.weekdays(o,"")+"|^"+this.weekdaysShort(o,"")+"|^"+this.weekdaysMin(o,""),this._weekdaysParse[i]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===e&&this._fullWeekdaysParse[i].test(t))return i;if(n&&"ddd"===e&&this._shortWeekdaysParse[i].test(t))return i;if(n&&"dd"===e&&this._minWeekdaysParse[i].test(t))return i;if(!n&&this._weekdaysParse[i].test(t))return i}},un.weekdaysRegex=function(t){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||zt.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(l(this,"_weekdaysRegex")||(this._weekdaysRegex=Yt),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)},un.weekdaysShortRegex=function(t){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||zt.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(l(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qt),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},un.weekdaysMinRegex=function(t){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||zt.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(l(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Wt),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},un.isPM=function(t){return"p"===(t+"").toLowerCase().charAt(0)},un.meridiem=function(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"},ie("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10;return t+(1===_(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")}}),i.lang=T("moment.lang is deprecated. Use moment.locale instead.",ie),i.langData=T("moment.langData is deprecated. Use moment.localeData instead.",re);var pn=Math.abs;function hn(t,e,n,i){var o=He(e,n);return t._milliseconds+=i*o._milliseconds,t._days+=i*o._days,t._months+=i*o._months,t._bubble()}function fn(t){return t<0?Math.floor(t):Math.ceil(t)}function mn(t){return 4800*t/146097}function gn(t){return 146097*t/4800}function vn(t){return function(){return this.as(t)}}var yn=vn("ms"),bn=vn("s"),wn=vn("m"),xn=vn("h"),_n=vn("d"),Nn=vn("w"),kn=vn("M"),Tn=vn("y");function Cn(t){return function(){return this.isValid()?this._data[t]:NaN}}var Sn=Cn("milliseconds"),On=Cn("seconds"),Dn=Cn("minutes"),jn=Cn("hours"),En=Cn("days"),Pn=Cn("months"),Mn=Cn("years"),An=Math.round,In={ss:44,s:45,m:45,h:22,d:26,M:11};function $n(t,e,n,i,o){return o.relativeTime(e||1,!!n,t,i)}var Rn=Math.abs;function Ln(t){return(t>0)-(t<0)||+t}function Hn(){if(!this.isValid())return this.localeData().invalidDate();var t,e,n=Rn(this._milliseconds)/1e3,i=Rn(this._days),o=Rn(this._months);t=x(n/60),e=x(t/60),n%=60,t%=60;var r=x(o/12),s=o%=12,a=i,u=e,c=t,l=n?n.toFixed(3).replace(/\.?0+$/,""):"",d=this.asSeconds();if(!d)return"P0D";var p=d<0?"-":"",h=Ln(this._months)!==Ln(d)?"-":"",f=Ln(this._days)!==Ln(d)?"-":"",m=Ln(this._milliseconds)!==Ln(d)?"-":"";return p+"P"+(r?h+r+"Y":"")+(s?h+s+"M":"")+(a?f+a+"D":"")+(u||c||l?"T":"")+(u?m+u+"H":"")+(c?m+c+"M":"")+(l?m+l+"S":"")}var Bn=Oe.prototype;return Bn.isValid=function(){return this._isValid},Bn.abs=function(){var t=this._data;return this._milliseconds=pn(this._milliseconds),this._days=pn(this._days),this._months=pn(this._months),t.milliseconds=pn(t.milliseconds),t.seconds=pn(t.seconds),t.minutes=pn(t.minutes),t.hours=pn(t.hours),t.months=pn(t.months),t.years=pn(t.years),this},Bn.add=function(t,e){return hn(this,t,e,1)},Bn.subtract=function(t,e){return hn(this,t,e,-1)},Bn.as=function(t){if(!this.isValid())return NaN;var e,n,i=this._milliseconds;if("month"===(t=A(t))||"year"===t)return e=this._days+i/864e5,n=this._months+mn(e),"month"===t?n:n/12;switch(e=this._days+Math.round(gn(this._months)),t){case"week":return e/7+i/6048e5;case"day":return e+i/864e5;case"hour":return 24*e+i/36e5;case"minute":return 1440*e+i/6e4;case"second":return 86400*e+i/1e3;case"millisecond":return Math.floor(864e5*e)+i;default:throw new Error("Unknown unit "+t)}},Bn.asMilliseconds=yn,Bn.asSeconds=bn,Bn.asMinutes=wn,Bn.asHours=xn,Bn.asDays=_n,Bn.asWeeks=Nn,Bn.asMonths=kn,Bn.asYears=Tn,Bn.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*_(this._months/12):NaN},Bn._bubble=function(){var t,e,n,i,o,r=this._milliseconds,s=this._days,a=this._months,u=this._data;return r>=0&&s>=0&&a>=0||r<=0&&s<=0&&a<=0||(r+=864e5*fn(gn(a)+s),s=0,a=0),u.milliseconds=r%1e3,t=x(r/1e3),u.seconds=t%60,e=x(t/60),u.minutes=e%60,n=x(e/60),u.hours=n%24,s+=x(n/24),o=x(mn(s)),a+=o,s-=fn(gn(o)),i=x(a/12),a%=12,u.days=s,u.months=a,u.years=i,this},Bn.clone=function(){return He(this)},Bn.get=function(t){return t=A(t),this.isValid()?this[t+"s"]():NaN},Bn.milliseconds=Sn,Bn.seconds=On,Bn.minutes=Dn,Bn.hours=jn,Bn.days=En,Bn.weeks=function(){return x(this.days()/7)},Bn.months=Pn,Bn.years=Mn,Bn.humanize=function(t){if(!this.isValid())return this.localeData().invalidDate();var e=this.localeData(),n=function(t,e,n){var i=He(t).abs(),o=An(i.as("s")),r=An(i.as("m")),s=An(i.as("h")),a=An(i.as("d")),u=An(i.as("M")),c=An(i.as("y")),l=o<=In.ss&&["s",o]||o<In.s&&["ss",o]||r<=1&&["m"]||r<In.m&&["mm",r]||s<=1&&["h"]||s<In.h&&["hh",s]||a<=1&&["d"]||a<In.d&&["dd",a]||u<=1&&["M"]||u<In.M&&["MM",u]||c<=1&&["y"]||["yy",c];return l[2]=e,l[3]=+t>0,l[4]=n,$n.apply(null,l)}(this,!t,e);return t&&(n=e.pastFuture(+this,n)),e.postformat(n)},Bn.toISOString=Hn,Bn.toString=Hn,Bn.toJSON=Hn,Bn.locale=Ge,Bn.localeData=Ze,Bn.toIsoString=T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Hn),Bn.lang=Ve,Y("X",0,0,"unix"),Y("x",0,0,"valueOf"),ct("x",ot),ct("X",/[+-]?\d+(\.\d{1,3})?/),ht("X",(function(t,e,n){n._d=new Date(1e3*parseFloat(t,10))})),ht("x",(function(t,e,n){n._d=new Date(_(t))})),i.version="2.22.2",e=Ne,i.fn=sn,i.min=function(){var t=[].slice.call(arguments,0);return Ce("isBefore",t)},i.max=function(){var t=[].slice.call(arguments,0);return Ce("isAfter",t)},i.now=function(){return Date.now?Date.now():+new Date},i.utc=p,i.unix=function(t){return Ne(1e3*t)},i.months=function(t,e){return ln(t,e,"months")},i.isDate=u,i.locale=ie,i.invalid=m,i.duration=He,i.isMoment=w,i.weekdays=function(t,e,n){return dn(t,e,n,"weekdays")},i.parseZone=function(){return Ne.apply(null,arguments).parseZone()},i.localeData=re,i.isDuration=De,i.monthsShort=function(t,e){return ln(t,e,"monthsShort")},i.weekdaysMin=function(t,e,n){return dn(t,e,n,"weekdaysMin")},i.defineLocale=oe,i.updateLocale=function(t,e){if(null!=e){var n,i,o=Jt;null!=(i=ne(t))&&(o=i._config),e=j(o,e),(n=new E(e)).parentLocale=Qt[t],Qt[t]=n,ie(t)}else null!=Qt[t]&&(null!=Qt[t].parentLocale?Qt[t]=Qt[t].parentLocale:null!=Qt[t]&&delete Qt[t]);return Qt[t]},i.locales=function(){return C(Qt)},i.weekdaysShort=function(t,e,n){return dn(t,e,n,"weekdaysShort")},i.normalizeUnits=A,i.relativeTimeRounding=function(t){return void 0===t?An:"function"==typeof t&&(An=t,!0)},i.relativeTimeThreshold=function(t,e){return void 0!==In[t]&&(void 0===e?In[t]:(In[t]=e,"s"===t&&(In.ss=e-1),!0))},i.calendarFormat=function(t,e){var n=t.diff(e,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},i.prototype=sn,i.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"YYYY-[W]WW",MONTH:"YYYY-MM"},i}()}).call(this,n(64)(t))},function(t,e,n){(function(e){e.m||(e.m={}),t.exports=e.m.bidi=n(76)}).call(this,n(25))},function(t,e,n){var i,o,r,s;s=function(t){function e(t,e){var n="select"===t.tag?t.attrs.multi?"multi":"select":t.attrs.type;return t.attrs.onchange="multi"===n?function(){e([].slice.call(this.selectedOptions,(function(t){return t.value})))}:"select"===n?function(t){e(this.selectedOptions[0].value)}:"checkbox"===n?function(t){e(this.checked)}:t.attrs.oninput=function(t){e(this.value)},"select"===t.tag?t.children.forEach((function(t){t.attrs.value!==e()&&t.children[0]!==e()||(t.attrs.selected=!0)})):"checkbox"===n?t.attrs.checked=e():"radio"===n?t.attrs.checked=e()===t.attrs.value:t.attrs.value=e(),t}return e.view=function(t,n,i){return e(n,n.attrs.bidi)},t.attrs&&(t.attrs.bidi=e),t.bidi=e,e},o=[n(65)],void 0===(r="function"==typeof(i=s)?i.apply(e,o):i)||(t.exports=r)},function(t,e){!function(t){"use strict";var e=function(n,i){this.options=t.extend({},e.DEFAULTS,i);var o=this.options.target===e.DEFAULTS.target?t(this.options.target):t(document).find(this.options.target);this.$target=o.on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(n),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function n(n){return this.each((function(){var i=t(this),o=i.data("bs.affix"),r="object"==typeof n&&n;o||i.data("bs.affix",o=new e(this,r)),"string"==typeof n&&o[n]()}))}e.VERSION="3.4.1",e.RESET="affix affix-top affix-bottom",e.DEFAULTS={offset:0,target:window},e.prototype.getState=function(t,e,n,i){var o=this.$target.scrollTop(),r=this.$element.offset(),s=this.$target.height();if(null!=n&&"top"==this.affixed)return o<n&&"top";if("bottom"==this.affixed)return null!=n?!(o+this.unpin<=r.top)&&"bottom":!(o+s<=t-i)&&"bottom";var a=null==this.affixed,u=a?o:r.top;return null!=n&&o<=n?"top":null!=i&&u+(a?s:e)>=t-i&&"bottom"},e.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(e.RESET).addClass("affix");var t=this.$target.scrollTop(),n=this.$element.offset();return this.pinnedOffset=n.top-t},e.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var n=this.$element.height(),i=this.options.offset,o=i.top,r=i.bottom,s=Math.max(t(document).height(),t(document.body).height());"object"!=typeof i&&(r=o=i),"function"==typeof o&&(o=i.top(this.$element)),"function"==typeof r&&(r=i.bottom(this.$element));var a=this.getState(s,n,o,r);if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","");var u="affix"+(a?"-"+a:""),c=t.Event(u+".bs.affix");if(this.$element.trigger(c),c.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(e.RESET).addClass(u).trigger(u.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:s-n-r})}};var i=t.fn.affix;t.fn.affix=n,t.fn.affix.Constructor=e,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",(function(){t('[data-spy="affix"]').each((function(){var e=t(this),i=e.data();i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),n.call(e,i)}))}))}(jQuery)},function(t,e){!function(t){"use strict";var e='[data-toggle="dropdown"]',n=function(e){t(e).on("click.bs.dropdown",this.toggle)};function i(e){var n=e.attr("data-target");n||(n=(n=e.attr("href"))&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var i="#"!==n?t(document).find(n):null;return i&&i.length?i:e.parent()}function o(n){n&&3===n.which||(t(".dropdown-backdrop").remove(),t(e).each((function(){var e=t(this),o=i(e),r={relatedTarget:this};o.hasClass("open")&&(n&&"click"==n.type&&/input|textarea/i.test(n.target.tagName)&&t.contains(o[0],n.target)||(o.trigger(n=t.Event("hide.bs.dropdown",r)),n.isDefaultPrevented()||(e.attr("aria-expanded","false"),o.removeClass("open").trigger(t.Event("hidden.bs.dropdown",r)))))})))}n.VERSION="3.4.1",n.prototype.toggle=function(e){var n=t(this);if(!n.is(".disabled, :disabled")){var r=i(n),s=r.hasClass("open");if(o(),!s){"ontouchstart"in document.documentElement&&!r.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",o);var a={relatedTarget:this};if(r.trigger(e=t.Event("show.bs.dropdown",a)),e.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),r.toggleClass("open").trigger(t.Event("shown.bs.dropdown",a))}return!1}},n.prototype.keydown=function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)){var o=t(this);if(n.preventDefault(),n.stopPropagation(),!o.is(".disabled, :disabled")){var r=i(o),s=r.hasClass("open");if(!s&&27!=n.which||s&&27==n.which)return 27==n.which&&r.find(e).trigger("focus"),o.trigger("click");var a=r.find(".dropdown-menu li:not(.disabled):visible a");if(a.length){var u=a.index(n.target);38==n.which&&u>0&&u--,40==n.which&&u<a.length-1&&u++,~u||(u=0),a.eq(u).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=function(e){return this.each((function(){var i=t(this),o=i.data("bs.dropdown");o||i.data("bs.dropdown",o=new n(this)),"string"==typeof e&&o[e].call(i)}))},t.fn.dropdown.Constructor=n,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",o).on("click.bs.dropdown.data-api",".dropdown form",(function(t){t.stopPropagation()})).on("click.bs.dropdown.data-api",e,n.prototype.toggle).on("keydown.bs.dropdown.data-api",e,n.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",n.prototype.keydown)}(jQuery)},function(t,e){!function(t){"use strict";var e=function(e,n){this.options=n,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy((function(){this.$element.trigger("loaded.bs.modal")}),this))};function n(n,i){return this.each((function(){var o=t(this),r=o.data("bs.modal"),s=t.extend({},e.DEFAULTS,o.data(),"object"==typeof n&&n);r||o.data("bs.modal",r=new e(this,s)),"string"==typeof n?r[n](i):s.show&&r.show(i)}))}e.VERSION="3.4.1",e.TRANSITION_DURATION=300,e.BACKDROP_TRANSITION_DURATION=150,e.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},e.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},e.prototype.show=function(n){var i=this,o=t.Event("show.bs.modal",{relatedTarget:n});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",(function(){i.$element.one("mouseup.dismiss.bs.modal",(function(e){t(e.target).is(i.$element)&&(i.ignoreBackdropClick=!0)}))})),this.backdrop((function(){var o=t.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),o&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus();var r=t.Event("shown.bs.modal",{relatedTarget:n});o?i.$dialog.one("bsTransitionEnd",(function(){i.$element.trigger("focus").trigger(r)})).emulateTransitionEnd(e.TRANSITION_DURATION):i.$element.trigger("focus").trigger(r)})))},e.prototype.hide=function(n){n&&n.preventDefault(),n=t.Event("hide.bs.modal"),this.$element.trigger(n),this.isShown&&!n.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(e.TRANSITION_DURATION):this.hideModal())},e.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy((function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")}),this))},e.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy((function(t){27==t.which&&this.hide()}),this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},e.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},e.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop((function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")}))},e.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},e.prototype.backdrop=function(n){var i=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var r=t.support.transition&&o;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+o).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy((function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())}),this)),r&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!n)return;r?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION):n()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var s=function(){i.removeBackdrop(),n&&n()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",s).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION):s()}else n&&n()},e.prototype.handleUpdate=function(){this.adjustDialog()},e.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},e.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},e.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},e.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var n=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",e+n),t(this.fixedContent).each((function(e,i){var o=i.style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",o).css("padding-right",parseFloat(r)+n+"px")})))},e.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),t(this.fixedContent).each((function(e,n){var i=t(n).data("padding-right");t(n).removeData("padding-right"),n.style.paddingRight=i||""}))},e.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var i=t.fn.modal;t.fn.modal=n,t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=i,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(e){var i=t(this),o=i.attr("href"),r=i.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,""),s=t(document).find(r),a=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(o)&&o},s.data(),i.data());i.is("a")&&e.preventDefault(),s.one("show.bs.modal",(function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",(function(){i.is(":visible")&&i.trigger("focus")}))})),n.call(s,a,this)}))}(jQuery)},function(t,e){!function(t){"use strict";var e=["sanitize","whiteList","sanitizeFn"],n=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],i={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},o=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,r=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function s(e,i){var s=e.nodeName.toLowerCase();if(-1!==t.inArray(s,i))return-1===t.inArray(s,n)||Boolean(e.nodeValue.match(o)||e.nodeValue.match(r));for(var a=t(i).filter((function(t,e){return e instanceof RegExp})),u=0,c=a.length;u<c;u++)if(s.match(a[u]))return!0;return!1}function a(e,n,i){if(0===e.length)return e;if(i&&"function"==typeof i)return i(e);if(!document.implementation||!document.implementation.createHTMLDocument)return e;var o=document.implementation.createHTMLDocument("sanitization");o.body.innerHTML=e;for(var r=t.map(n,(function(t,e){return e})),a=t(o.body).find("*"),u=0,c=a.length;u<c;u++){var l=a[u],d=l.nodeName.toLowerCase();if(-1!==t.inArray(d,r))for(var p=t.map(l.attributes,(function(t){return t})),h=[].concat(n["*"]||[],n[d]||[]),f=0,m=p.length;f<m;f++)s(p[f],h)||l.removeAttribute(p[f].nodeName);else l.parentNode.removeChild(l)}return o.body.innerHTML}var u=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};u.VERSION="3.4.1",u.TRANSITION_DURATION=150,u.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:i},u.prototype.init=function(e,n,i){if(this.enabled=!0,this.type=e,this.$element=t(n),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&t(document).find(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),r=o.length;r--;){var s=o[r];if("click"==s)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",u="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(u+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},u.prototype.getDefaults=function(){return u.DEFAULTS},u.prototype.getOptions=function(n){var i=this.$element.data();for(var o in i)i.hasOwnProperty(o)&&-1!==t.inArray(o,e)&&delete i[o];return(n=t.extend({},this.getDefaults(),i,n)).delay&&"number"==typeof n.delay&&(n.delay={show:n.delay,hide:n.delay}),n.sanitize&&(n.template=a(n.template,n.whiteList,n.sanitizeFn)),n},u.prototype.getDelegateOptions=function(){var e={},n=this.getDefaults();return this._options&&t.each(this._options,(function(t,i){n[t]!=i&&(e[t]=i)})),e},u.prototype.enter=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),e instanceof t.Event&&(n.inState["focusin"==e.type?"focus":"hover"]=!0),n.tip().hasClass("in")||"in"==n.hoverState)n.hoverState="in";else{if(clearTimeout(n.timeout),n.hoverState="in",!n.options.delay||!n.options.delay.show)return n.show();n.timeout=setTimeout((function(){"in"==n.hoverState&&n.show()}),n.options.delay.show)}},u.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},u.prototype.leave=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),e instanceof t.Event&&(n.inState["focusout"==e.type?"focus":"hover"]=!1),!n.isInStateTrue()){if(clearTimeout(n.timeout),n.hoverState="out",!n.options.delay||!n.options.delay.hide)return n.hide();n.timeout=setTimeout((function(){"out"==n.hoverState&&n.hide()}),n.options.delay.hide)}},u.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var n=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!n)return;var i=this,o=this.tip(),r=this.getUID(this.type);this.setContent(),o.attr("id",r),this.$element.attr("aria-describedby",r),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,c=a.test(s);c&&(s=s.replace(a,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(t(document).find(this.options.container)):o.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),d=o[0].offsetWidth,p=o[0].offsetHeight;if(c){var h=s,f=this.getPosition(this.$viewport);s="bottom"==s&&l.bottom+p>f.bottom?"top":"top"==s&&l.top-p<f.top?"bottom":"right"==s&&l.right+d>f.width?"left":"left"==s&&l.left-d<f.left?"right":s,o.removeClass(h).addClass(s)}var m=this.getCalculatedOffset(s,l,d,p);this.applyPlacement(m,s);var g=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};t.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",g).emulateTransitionEnd(u.TRANSITION_DURATION):g()}},u.prototype.applyPlacement=function(e,n){var i=this.tip(),o=i[0].offsetWidth,r=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),e.top+=s,e.left+=a,t.offset.setOffset(i[0],t.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),i.addClass("in");var u=i[0].offsetWidth,c=i[0].offsetHeight;"top"==n&&c!=r&&(e.top=e.top+r-c);var l=this.getViewportAdjustedDelta(n,e,u,c);l.left?e.left+=l.left:e.top+=l.top;var d=/top|bottom/.test(n),p=d?2*l.left-o+u:2*l.top-r+c,h=d?"offsetWidth":"offsetHeight";i.offset(e),this.replaceArrow(p,i[0][h],d)},u.prototype.replaceArrow=function(t,e,n){this.arrow().css(n?"left":"top",50*(1-t/e)+"%").css(n?"top":"left","")},u.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();this.options.html?(this.options.sanitize&&(e=a(e,this.options.whiteList,this.options.sanitizeFn)),t.find(".tooltip-inner").html(e)):t.find(".tooltip-inner").text(e),t.removeClass("fade in top bottom left right")},u.prototype.hide=function(e){var n=this,i=t(this.$tip),o=t.Event("hide.bs."+this.type);function r(){"in"!=n.hoverState&&i.detach(),n.$element&&n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),t.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",r).emulateTransitionEnd(u.TRANSITION_DURATION):r(),this.hoverState=null,this},u.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},u.prototype.hasContent=function(){return this.getTitle()},u.prototype.getPosition=function(e){var n=(e=e||this.$element)[0],i="BODY"==n.tagName,o=n.getBoundingClientRect();null==o.width&&(o=t.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var r=window.SVGElement&&n instanceof window.SVGElement,s=i?{top:0,left:0}:r?null:e.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},u=i?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},o,a,u,s)},u.prototype.getCalculatedOffset=function(t,e,n,i){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-n/2}:"top"==t?{top:e.top-i,left:e.left+e.width/2-n/2}:"left"==t?{top:e.top+e.height/2-i/2,left:e.left-n}:{top:e.top+e.height/2-i/2,left:e.left+e.width}},u.prototype.getViewportAdjustedDelta=function(t,e,n,i){var o={top:0,left:0};if(!this.$viewport)return o;var r=this.options.viewport&&this.options.viewport.padding||0,s=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-r-s.scroll,u=e.top+r-s.scroll+i;a<s.top?o.top=s.top-a:u>s.top+s.height&&(o.top=s.top+s.height-u)}else{var c=e.left-r,l=e.left+r+n;c<s.left?o.left=s.left-c:l>s.right&&(o.left=s.left+s.width-l)}return o},u.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},u.prototype.getUID=function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},u.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},u.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},u.prototype.enable=function(){this.enabled=!0},u.prototype.disable=function(){this.enabled=!1},u.prototype.toggleEnabled=function(){this.enabled=!this.enabled},u.prototype.toggle=function(e){var n=this;e&&((n=t(e.currentTarget).data("bs."+this.type))||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n))),e?(n.inState.click=!n.inState.click,n.isInStateTrue()?n.enter(n):n.leave(n)):n.tip().hasClass("in")?n.leave(n):n.enter(n)},u.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide((function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null}))},u.prototype.sanitizeHtml=function(t){return a(t,this.options.whiteList,this.options.sanitizeFn)};var c=t.fn.tooltip;t.fn.tooltip=function(e){return this.each((function(){var n=t(this),i=n.data("bs.tooltip"),o="object"==typeof e&&e;!i&&/destroy|hide/.test(e)||(i||n.data("bs.tooltip",i=new u(this,o)),"string"==typeof e&&i[e]())}))},t.fn.tooltip.Constructor=u,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=c,this}}(jQuery)},function(t,e){!function(t){"use strict";t.fn.emulateTransitionEnd=function(e){var n=!1,i=this;t(this).one("bsTransitionEnd",(function(){n=!0}));return setTimeout((function(){n||t(i).trigger(t.support.transition.end)}),e),this},t((function(){t.support.transition=function(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}})}))}(jQuery)},function(t,e){!function(t){function e(e){if("string"==typeof e.data&&(e.data={keys:e.data}),e.data&&e.data.keys&&"string"==typeof e.data.keys){var n=e.handler,i=e.data.keys.toLowerCase().split(" ");e.handler=function(e){if(this===e.target||!(t.hotkeys.options.filterInputAcceptingElements&&t.hotkeys.textInputTypes.test(e.target.nodeName)||t.hotkeys.options.filterContentEditable&&t(e.target).attr("contenteditable")||t.hotkeys.options.filterTextInputs&&t.inArray(e.target.type,t.hotkeys.textAcceptingInputTypes)>-1)){var o="keypress"!==e.type&&t.hotkeys.specialKeys[e.which],r=String.fromCharCode(e.which).toLowerCase(),s="",a={};t.each(["alt","ctrl","shift"],(function(t,n){e[n+"Key"]&&o!==n&&(s+=n+"+")})),e.metaKey&&!e.ctrlKey&&"meta"!==o&&(s+="meta+"),e.metaKey&&"meta"!==o&&s.indexOf("alt+ctrl+shift+")>-1&&(s=s.replace("alt+ctrl+shift+","hyper+")),o?a[s+o]=!0:(a[s+r]=!0,a[s+t.hotkeys.shiftNums[r]]=!0,"shift+"===s&&(a[t.hotkeys.shiftNums[r]]=!0));for(var u=0,c=i.length;u<c;u++)if(a[i[u]])return n.apply(this,arguments)}}}}t.hotkeys={version:"0.2.0",specialKeys:{8:"backspace",9:"tab",10:"return",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",59:";",61:"=",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"},textAcceptingInputTypes:["text","password","number","email","url","range","date","month","week","time","datetime","datetime-local","search","color","tel"],textInputTypes:/textarea|input|select/i,options:{filterInputAcceptingElements:!0,filterTextInputs:!0,filterContentEditable:!0}},t.each(["keydown","keyup","keypress"],(function(){t.event.special[this]={add:e}}))}(jQuery||this.jQuery||window.jQuery)},,function(t,e,n){(function(e){t.exports=e.punycode=n(85)}).call(this,n(25))},function(t,e,n){(function(t,i){var o;/*! https://mths.be/punycode v1.4.1 by @mathias */!function(r){e&&e.nodeType,t&&t.nodeType;var s="object"==typeof i&&i;s.global!==s&&s.window!==s&&s.self;var a,u=2147483647,c=/^xn--/,l=/[^\x20-\x7E]/,d=/[\x2E\u3002\uFF0E\uFF61]/g,p={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},h=Math.floor,f=String.fromCharCode;function m(t){throw new RangeError(p[t])}function g(t,e){for(var n=t.length,i=[];n--;)i[n]=e(t[n]);return i}function v(t,e){var n=t.split("@"),i="";return n.length>1&&(i=n[0]+"@",t=n[1]),i+g((t=t.replace(d,".")).split("."),e).join(".")}function y(t){for(var e,n,i=[],o=0,r=t.length;o<r;)(e=t.charCodeAt(o++))>=55296&&e<=56319&&o<r?56320==(64512&(n=t.charCodeAt(o++)))?i.push(((1023&e)<<10)+(1023&n)+65536):(i.push(e),o--):i.push(e);return i}function b(t){return g(t,(function(t){var e="";return t>65535&&(e+=f((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=f(t)})).join("")}function w(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function x(t,e,n){var i=0;for(t=n?h(t/700):t>>1,t+=h(t/e);t>455;i+=36)t=h(t/35);return h(i+36*t/(t+38))}function _(t){var e,n,i,o,r,s,a,c,l,d,p,f=[],g=t.length,v=0,y=128,w=72;for((n=t.lastIndexOf("-"))<0&&(n=0),i=0;i<n;++i)t.charCodeAt(i)>=128&&m("not-basic"),f.push(t.charCodeAt(i));for(o=n>0?n+1:0;o<g;){for(r=v,s=1,a=36;o>=g&&m("invalid-input"),((c=(p=t.charCodeAt(o++))-48<10?p-22:p-65<26?p-65:p-97<26?p-97:36)>=36||c>h((u-v)/s))&&m("overflow"),v+=c*s,!(c<(l=a<=w?1:a>=w+26?26:a-w));a+=36)s>h(u/(d=36-l))&&m("overflow"),s*=d;w=x(v-r,e=f.length+1,0==r),h(v/e)>u-y&&m("overflow"),y+=h(v/e),v%=e,f.splice(v++,0,y)}return b(f)}function N(t){var e,n,i,o,r,s,a,c,l,d,p,g,v,b,_,N=[];for(g=(t=y(t)).length,e=128,n=0,r=72,s=0;s<g;++s)(p=t[s])<128&&N.push(f(p));for(i=o=N.length,o&&N.push("-");i<g;){for(a=u,s=0;s<g;++s)(p=t[s])>=e&&p<a&&(a=p);for(a-e>h((u-n)/(v=i+1))&&m("overflow"),n+=(a-e)*v,e=a,s=0;s<g;++s)if((p=t[s])<e&&++n>u&&m("overflow"),p==e){for(c=n,l=36;!(c<(d=l<=r?1:l>=r+26?26:l-r));l+=36)_=c-d,b=36-d,N.push(f(w(d+_%b,0))),c=h(_/b);N.push(f(w(c,0))),r=x(n,v,i==o),n=0,++i}++n,++e}return N.join("")}a={version:"1.4.1",ucs2:{decode:y,encode:b},decode:_,encode:N,toASCII:function(t){return v(t,(function(t){return l.test(t)?"xn--"+N(t):t}))},toUnicode:function(t){return v(t,(function(t){return c.test(t)?_(t.slice(4).toLowerCase()):t}))}},void 0===(o=function(){return a}.call(e,n,e,t))||(t.exports=o)}()}).call(this,n(64)(t),n(25))},function(t,e,n){(function(e){t.exports=e.ColorThief=n(87)}).call(this,n(25))},function(t,e){
/*!
 * Color Thief v2.0
 * by Lokesh Dhakar - http://www.lokeshdhakar.com
 *
 * Thanks
 * ------
 * Nick Rabinowitz - For creating quantize.js.
 * John Schulz - For clean up and optimization. @JFSIII
 * Nathan Spady - For adding drag and drop support to the demo page.
 *
 * License
 * -------
 * Copyright 2011, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://raw.githubusercontent.com/lokesh/color-thief/master/LICENSE
 *
 */
var n=function(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.width=t.width,this.height=this.canvas.height=t.height,this.context.drawImage(t,0,0,this.width,this.height)};n.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},n.prototype.update=function(t){this.context.putImageData(t,0,0)},n.prototype.getPixelCount=function(){return this.width*this.height},n.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},n.prototype.removeCanvas=function(){this.canvas.parentNode.removeChild(this.canvas)};var i=function(){};
/*!
 * quantize.js Copyright 2008 Nick Rabinowitz.
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 */
/*!
 * Block below copied from Protovis: http://mbostock.github.com/protovis/
 * Copyright 2010 Stanford Visualization Group
 * Licensed under the BSD License: http://www.opensource.org/licenses/bsd-license.php
 */if(i.prototype.getColor=function(t,e){return this.getPalette(t,5,e)[0]},i.prototype.getPalette=function(t,e,i){void 0===e&&(e=10),(void 0===i||1>i)&&(i=10);for(var o,s,a,u,c=new n(t),l=c.getImageData().data,d=c.getPixelCount(),p=[],h=0;d>h;h+=i)s=l[(o=4*h)+0],a=l[o+1],u=l[o+2],l[o+3]>=125&&(s>250&&a>250&&u>250||p.push([s,a,u]));var f=r.quantize(p,e),m=f?f.palette():null;return c.removeCanvas(),m},!o)var o={map:function(t,e){var n={};return e?t.map((function(t,i){return n.index=i,e.call(n,t)})):t.slice()},naturalOrder:function(t,e){return e>t?-1:t>e?1:0},sum:function(t,e){var n={};return t.reduce(e?function(t,i,o){return n.index=o,t+e.call(n,i)}:function(t,e){return t+e},0)},max:function(t,e){return Math.max.apply(null,e?o.map(t,e):t)}};var r=function(){function t(t,e,n){return(t<<2*u)+(e<<u)+n}function e(t){function e(){n.sort(t),i=!0}var n=[],i=!1;return{push:function(t){n.push(t),i=!1},peek:function(t){return i||e(),void 0===t&&(t=n.length-1),n[t]},pop:function(){return i||e(),n.pop()},size:function(){return n.length},map:function(t){return n.map(t)},debug:function(){return i||e(),n}}}function n(t,e,n,i,o,r,s){var a=this;a.r1=t,a.r2=e,a.g1=n,a.g2=i,a.b1=o,a.b2=r,a.histo=s}function i(){this.vboxes=new e((function(t,e){return o.naturalOrder(t.vbox.count()*t.vbox.volume(),e.vbox.count()*e.vbox.volume())}))}function r(e){var n,i,o,r,s=new Array(1<<3*u);return e.forEach((function(e){i=e[0]>>c,o=e[1]>>c,r=e[2]>>c,n=t(i,o,r),s[n]=(s[n]||0)+1})),s}function s(t,e){var i,o,r,s=1e6,a=0,u=1e6,l=0,d=1e6,p=0;return t.forEach((function(t){i=t[0]>>c,o=t[1]>>c,r=t[2]>>c,s>i?s=i:i>a&&(a=i),u>o?u=o:o>l&&(l=o),d>r?d=r:r>p&&(p=r)})),new n(s,a,u,l,d,p,e)}function a(e,n){if(n.count()){var i=n.r2-n.r1+1,r=n.g2-n.g1+1,s=n.b2-n.b1+1,a=o.max([i,r,s]);if(1==n.count())return[n.copy()];var u,c,l,d,p=0,h=[],f=[];if(a==i)for(u=n.r1;u<=n.r2;u++){for(d=0,c=n.g1;c<=n.g2;c++)for(l=n.b1;l<=n.b2;l++)d+=e[t(u,c,l)]||0;p+=d,h[u]=p}else if(a==r)for(u=n.g1;u<=n.g2;u++){for(d=0,c=n.r1;c<=n.r2;c++)for(l=n.b1;l<=n.b2;l++)d+=e[t(c,u,l)]||0;p+=d,h[u]=p}else for(u=n.b1;u<=n.b2;u++){for(d=0,c=n.r1;c<=n.r2;c++)for(l=n.g1;l<=n.g2;l++)d+=e[t(c,l,u)]||0;p+=d,h[u]=p}return h.forEach((function(t,e){f[e]=p-t})),function(t){var e,i,o,r,s,a=t+"1",c=t+"2",l=0;for(u=n[a];u<=n[c];u++)if(h[u]>p/2){for(o=n.copy(),r=n.copy(),e=u-n[a],s=(i=n[c]-u)>=e?Math.min(n[c]-1,~~(u+i/2)):Math.max(n[a],~~(u-1-e/2));!h[s];)s++;for(l=f[s];!l&&h[s-1];)l=f[--s];return o[c]=s,r[a]=o[c]+1,[o,r]}}(a==i?"r":a==r?"g":"b")}}var u=5,c=8-u,l=1e3,d=.75;return n.prototype={volume:function(t){var e=this;return(!e._volume||t)&&(e._volume=(e.r2-e.r1+1)*(e.g2-e.g1+1)*(e.b2-e.b1+1)),e._volume},count:function(e){var n=this,i=n.histo;if(!n._count_set||e){var o,r,s,a=0;for(o=n.r1;o<=n.r2;o++)for(r=n.g1;r<=n.g2;r++)for(s=n.b1;s<=n.b2;s++)index=t(o,r,s),a+=i[index]||0;n._count=a,n._count_set=!0}return n._count},copy:function(){var t=this;return new n(t.r1,t.r2,t.g1,t.g2,t.b1,t.b2,t.histo)},avg:function(e){var n=this,i=n.histo;if(!n._avg||e){var o,r,s,a,c=0,l=1<<8-u,d=0,p=0,h=0;for(r=n.r1;r<=n.r2;r++)for(s=n.g1;s<=n.g2;s++)for(a=n.b1;a<=n.b2;a++)c+=o=i[t(r,s,a)]||0,d+=o*(r+.5)*l,p+=o*(s+.5)*l,h+=o*(a+.5)*l;n._avg=c?[~~(d/c),~~(p/c),~~(h/c)]:[~~(l*(n.r1+n.r2+1)/2),~~(l*(n.g1+n.g2+1)/2),~~(l*(n.b1+n.b2+1)/2)]}return n._avg},contains:function(t){var e=this,n=t[0]>>c;return gval=t[1]>>c,bval=t[2]>>c,n>=e.r1&&n<=e.r2&&gval>=e.g1&&gval<=e.g2&&bval>=e.b1&&bval<=e.b2}},i.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map((function(t){return t.color}))},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,n=0;n<e.size();n++)if(e.peek(n).vbox.contains(t))return e.peek(n).color;return this.nearest(t)},nearest:function(t){for(var e,n,i,o=this.vboxes,r=0;r<o.size();r++)(e>(n=Math.sqrt(Math.pow(t[0]-o.peek(r).color[0],2)+Math.pow(t[1]-o.peek(r).color[1],2)+Math.pow(t[2]-o.peek(r).color[2],2)))||void 0===e)&&(e=n,i=o.peek(r).color);return i},forcebw:function(){var t=this.vboxes;t.sort((function(t,e){return o.naturalOrder(o.sum(t.color),o.sum(e.color))}));var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var n=t.length-1,i=t[n].color;i[0]>251&&i[1]>251&&i[2]>251&&(t[n].color=[255,255,255])}},{quantize:function(t,n){function u(t,e){for(var n,i=1,o=0;l>o;)if((n=t.pop()).count()){var r=a(c,n),s=r[0],u=r[1];if(!s)return;if(t.push(s),u&&(t.push(u),i++),i>=e)return;if(o++>l)return}else t.push(n),o++}if(!t.length||2>n||n>256)return!1;var c=r(t);c.forEach((function(){0}));var p=s(t,c),h=new e((function(t,e){return o.naturalOrder(t.count(),e.count())}));h.push(p),u(h,d*n);for(var f=new e((function(t,e){return o.naturalOrder(t.count()*t.volume(),e.count()*e.volume())}));h.size();)f.push(h.pop());u(f,n-f.size());for(var m=new i;f.size();)m.push(f.pop());return m}}}();t.exports=i},function(t,e,n){"use strict";n.r(e);var i=n(66),o=(n(84),n(86),n(33)),r=n(0),s=n(8),a=n(4),u=function(){function t(t){this.stack=[]}var e=t.prototype;return e.getCurrent=function(){return this.stack[this.stack.length-1]},e.getPrevious=function(){return this.stack[this.stack.length-2]},e.push=function(t,e,n){void 0===n&&(n=m.route());var i=this.stack[this.stack.length-2];i&&i.name===t&&this.stack.pop();var o=this.getCurrent();o&&o.name===t?Object(a.a)(o,{url:n,title:e}):this.stack.push({name:t,url:n,title:e})},e.canGoBack=function(){return this.stack.length>1},e.back=function(){if(!this.canGoBack())return this.home();this.stack.pop(),m.route(this.getCurrent().url)},e.backUrl=function(){return this.stack[this.stack.length-2].url},e.home=function(){this.stack.splice(0),m.route("/")},t}(),c=function(){function t(t){this.pinnedKey="panePinned",this.$element=$(t),this.pinned="true"===localStorage.getItem(this.pinnedKey),this.active=!1,this.showing=!1,this.render()}var e=t.prototype;return e.enable=function(){this.active=!0,this.render()},e.disable=function(){this.active=!1,this.showing=!1,this.render()},e.show=function(){clearTimeout(this.hideTimeout),this.showing=!0,this.render()},e.hide=function(){this.showing=!1,this.render()},e.onmouseleave=function(){this.hideTimeout=setTimeout(this.hide.bind(this),250)},e.togglePinned=function(){this.pinned=!this.pinned,localStorage.setItem(this.pinnedKey,this.pinned?"true":"false"),this.render()},e.render=function(){this.$element.toggleClass("panePinned",this.pinned).toggleClass("hasPane",this.active).toggleClass("paneShowing",this.showing)},t}(),l=n(3),d=n(14),p=n(5),h=n(24),f=n(9),g=function(){function t(){this.callbacks={},this.whenCallback=function(t){return!0}}var e=t.prototype;return e.onUp=function(t){return this.callbacks[38]=function(e){e.preventDefault(),t(e)},this},e.onDown=function(t){return this.callbacks[40]=function(e){e.preventDefault(),t(e)},this},e.onSelect=function(t){return this.callbacks[9]=this.callbacks[13]=function(e){e.preventDefault(),t(e)},this},e.onCancel=function(t){return this.callbacks[27]=function(e){e.stopPropagation(),e.preventDefault(),t(e)},this},e.onRemove=function(t){return this.callbacks[8]=function(e){0===e.target.selectionStart&&0===e.target.selectionEnd&&(t(e),e.preventDefault())},this},e.when=function(t){return this.whenCallback=t,this},e.bindTo=function(t){t.on("keydown",this.navigate.bind(this))},e.navigate=function(t){if(this.whenCallback(t)){var e=this.callbacks[t.which];e&&e(t)}},t}(),v=n(6),y=n(29),b=n(19),w=function(){function t(){this.results={}}var e=t.prototype;return e.search=function(t){var e=this;t=t.toLowerCase(),this.results[t]=[];var n={filter:{q:t},page:{limit:3},include:"mostRelevantPost"};return app.store.find("discussions",n).then((function(n){return e.results[t]=n}))},e.view=function(t){t=t.toLowerCase();var e=this.results[t]||[];return[m("li",{className:"Dropdown-header"},app.translator.trans("core.forum.search.discussions_heading")),m("li",null,b.a.component({icon:"fas fa-search",children:app.translator.trans("core.forum.search.all_discussions_button",{query:t}),href:app.route("index",{q:t})})),e.map((function(e){var n=e.mostRelevantPost();return m("li",{className:"DiscussionSearchResult","data-index":"discussions"+e.id()},m("a",{href:app.route.discussion(e,n&&n.number()),config:m.route},m("div",{className:"DiscussionSearchResult-title"},Object(y.a)(e.title(),t)),n?m("div",{className:"DiscussionSearchResult-excerpt"},Object(y.a)(n.contentPlain(),t,100)):""))}))]},t}(),x=n(15),_=n(17),N=function(){function t(){this.results={}}var e=t.prototype;return e.search=function(t){var e=this;return app.store.find("users",{filter:{q:t},page:{limit:5}}).then((function(n){e.results[t]=n,m.redraw()}))},e.view=function(t){t=t.toLowerCase();var e=(this.results[t]||[]).concat(app.store.all("users").filter((function(e){return[e.username(),e.displayName()].some((function(e){return e.toLowerCase().substr(0,t.length)===t}))}))).filter((function(t,e,n){return n.lastIndexOf(t)===e})).sort((function(t,e){return t.displayName().localeCompare(e.displayName())}));return e.length?[m("li",{className:"Dropdown-header"},app.translator.trans("core.forum.search.users_heading")),e.map((function(e){var n=Object(_.a)(e);return n.children[0]=Object(y.a)(n.children[0],t),m("li",{className:"UserSearchResult","data-index":"users"+e.id()},m("a",{href:app.route.user(e),config:m.route},Object(x.a)(e),n))}))]:""},t}(),k=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){this.value=m.prop(""),this.hasFocus=!1,this.sources=null,this.loadingSources=0,this.searched=[],this.index=0},n.view=function(){var t=this,e=this.getCurrentSearch();return void 0===this.value()&&this.value(e||""),this.sources||(this.sources=this.sourceItems().toArray()),this.sources.length?m("div",{className:"Search "+Object(h.a)({open:this.value()&&this.hasFocus,focused:this.hasFocus,active:!!e,loading:!!this.loadingSources})},m("div",{className:"Search-input"},m("input",{className:"FormControl",type:"search",placeholder:Object(f.a)(app.translator.trans("core.forum.header.search_placeholder")),value:this.value(),oninput:m.withAttr("value",this.value),onfocus:function(){return t.hasFocus=!0},onblur:function(){return t.hasFocus=!1}}),this.loadingSources?d.a.component({size:"tiny",className:"Button Button--icon Button--link"}):e?m("button",{className:"Search-clear Button Button--icon Button--link",onclick:this.clear.bind(this)},Object(v.a)("fas fa-times-circle")):""),m("ul",{className:"Dropdown-menu Search-results"},this.value()&&this.hasFocus?this.sources.map((function(e){return e.view(t.value())})):"")):m("div",null)},n.config=function(t){var e=this;if(this.setIndex(this.getCurrentNumericIndex()),!t){var n=this;this.$(".Search-results").on("mousedown",(function(t){return t.preventDefault()})).on("click",(function(){return e.$("input").blur()})).on("mouseenter","> li:not(.Dropdown-header)",(function(){n.setIndex(n.selectableItems().index(this))}));var i=this.$("input");this.navigator=new g,this.navigator.onUp((function(){return e.setIndex(e.getCurrentNumericIndex()-1,!0)})).onDown((function(){return e.setIndex(e.getCurrentNumericIndex()+1,!0)})).onSelect(this.selectResult.bind(this)).onCancel(this.clear.bind(this)).bindTo(i),i.on("input focus",(function(){var t=this.value.toLowerCase();t&&(clearTimeout(n.searchTimeout),n.searchTimeout=setTimeout((function(){-1===n.searched.indexOf(t)&&(t.length>=3&&n.sources.map((function(e){e.search&&(n.loadingSources++,e.search(t).then((function(){n.loadingSources=Math.max(0,n.loadingSources-1),m.redraw()})))})),n.searched.push(t),m.redraw())}),250))})).on("focus",(function(){$(this).one("mouseup",(function(t){return t.preventDefault()})).select()}))}},n.getCurrentSearch=function(){return app.current&&"function"==typeof app.current.searching&&app.current.searching()},n.selectResult=function(){clearTimeout(this.searchTimeout),this.loadingSources=0,this.value()?m.route(this.getItem(this.index).find("a").attr("href")):this.clear(),this.$("input").blur()},n.clear=function(){this.value(""),this.getCurrentSearch()?app.current.clearSearch():m.redraw()},n.sourceItems=function(){var t=new p.a;return app.forum.attribute("canViewDiscussions")&&t.add("discussions",new w),app.forum.attribute("canViewUserList")&&t.add("users",new N),t},n.selectableItems=function(){return this.$(".Search-results > li:not(.Dropdown-header)")},n.getCurrentNumericIndex=function(){return this.selectableItems().index(this.getItem(this.index))},n.getItem=function(t){var e=this.selectableItems(),n=e.filter('[data-index="'+t+'"]');return n.length||(n=e.eq(t)),n},n.setIndex=function(t,e){var n=this.selectableItems(),i=n.parent(),o=t;t<0?o=n.length-1:t>=n.length&&(o=0);var r=n.removeClass("active").eq(o).addClass("active");if(this.index=r.attr("data-index")||o,e){var s,a=i.scrollTop(),u=i.offset().top,c=u+i.outerHeight(),l=r.offset().top,d=l+r.outerHeight();l<u?s=a-u+l-parseInt(i.css("padding-top"),10):d>c&&(s=a-c+d+parseInt(i.css("padding-bottom"),10)),void 0!==s&&i.stop(!0).animate({scrollTop:s},100)}},e}(l.a),T=n(7),C=n(2),S=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){this.value=m.prop(this.props.value||"")},n.view=function(){return m("div",{className:"TextEditor"},m("textarea",{className:"FormControl Composer-flexible",config:this.configTextarea.bind(this),oninput:m.withAttr("value",this.oninput.bind(this)),placeholder:this.props.placeholder||"",disabled:!!this.props.disabled,value:this.value()}),m("ul",{className:"TextEditor-controls Composer-footer"},Object(T.a)(this.controlItems().toArray()),m("li",{className:"TextEditor-toolbar"},this.toolbarItems().toArray())))},n.configTextarea=function(t,e){var n=this;if(!e){var i=function(){n.onsubmit(),m.redraw()};$(t).bind("keydown","meta+return",i),$(t).bind("keydown","ctrl+return",i)}},n.controlItems=function(){var t=new p.a;return t.add("submit",C.a.component({children:this.props.submitLabel,icon:"fas fa-paper-plane",className:"Button Button--primary",itemClassName:"App-primaryControl",onclick:this.onsubmit.bind(this)})),this.props.preview&&t.add("preview",C.a.component({icon:"far fa-eye",className:"Button Button--icon",onclick:this.props.preview,title:app.translator.trans("core.forum.composer.preview_tooltip"),config:function(t){return $(t).tooltip()}})),t},n.toolbarItems=function(){return new p.a},n.setValue=function(t){this.$("textarea").val(t).trigger("input")},n.setSelectionRange=function(t,e){var n=this.$("textarea");n.length&&(n[0].setSelectionRange(t,e),n.focus())},n.getSelectionRange=function(){var t=this.$("textarea");return t.length?[t[0].selectionStart,t[0].selectionEnd]:[0,0]},n.insertAtCursor=function(t){var e=this.$("textarea")[0],n=this.value(),i=e?e.selectionStart:n.length;if(this.setValue(n.slice(0,i)+t+n.slice(i)),e){var o=i+t.length;this.setSelectionRange(o,o)}e.dispatchEvent(new CustomEvent("input",{bubbles:!0,cancelable:!0}))},n.oninput=function(t){this.value(t),this.props.onchange(this.value()),m.redraw.strategy("none")},n.onsubmit=function(){this.props.onsubmit(this.value())},e}(l.a),O=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){this.loading=!1,this.content=m.prop(this.props.originalContent),this.editor=new S({submitLabel:this.props.submitLabel,placeholder:this.props.placeholder,onchange:this.content,onsubmit:this.onsubmit.bind(this),value:this.content()})},n.view=function(){return this.editor.props.disabled=this.loading,m("div",{className:"ComposerBody "+(this.props.className||"")},Object(x.a)(this.props.user,{className:"ComposerBody-avatar"}),m("div",{className:"ComposerBody-content"},m("ul",{className:"ComposerBody-header"},Object(T.a)(this.headerItems().toArray())),m("div",{className:"ComposerBody-editor"},this.editor.render())),d.a.component({className:"ComposerBody-loading"+(this.loading?" active":"")}))},n.focus=function(){this.$(":input:enabled:visible:first").focus()},n.preventExit=function(){var t=this.content();return t&&t!==this.props.originalContent&&this.props.confirmExit},n.headerItems=function(){return new p.a},n.onsubmit=function(){},n.loaded=function(){this.loading=!1,m.redraw()},e}(l.a),D=n(16);function j(t){app.composer.isFullScreen()&&(app.composer.minimize(),t.stopPropagation())}var E=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){var e=this;t.prototype.init.call(this),this.editor.props.preview=function(t){j(t),m.route(app.route.discussion(e.props.discussion,"reply"))}},e.initProps=function(e){t.initProps.call(this,e),e.placeholder=e.placeholder||Object(f.a)(app.translator.trans("core.forum.composer_reply.body_placeholder")),e.submitLabel=e.submitLabel||app.translator.trans("core.forum.composer_reply.submit_button"),e.confirmExit=e.confirmExit||Object(f.a)(app.translator.trans("core.forum.composer_reply.discard_confirmation"))},n.headerItems=function(){var e=t.prototype.headerItems.call(this),n=this.props.discussion;return e.add("title",m("h3",null,Object(v.a)("fas fa-reply")," ",m("a",{href:app.route.discussion(n),config:function(t,e){e||($(t).on("click",j),m.route.apply(this,arguments))}},n.title()))),e},n.data=function(){return{content:this.content(),relationships:{discussion:this.props.discussion}}},n.onsubmit=function(){var t=this.props.discussion;this.loading=!0,m.redraw();var e=this.data();app.store.createRecord("posts").save(e).then((function(e){if(app.viewingDiscussion(t))app.current.stream.update().then((function(){return app.current.stream.goToNumber(e.number())}));else{var n,i=C.a.component({className:"Button Button--link",children:app.translator.trans("core.forum.composer_reply.view_button"),onclick:function(){m.route(app.route.post(e)),app.alerts.dismiss(n)}});app.alerts.show(n=new D.a({type:"success",children:app.translator.trans("core.forum.composer_reply.posted_message"),controls:[i]}))}app.composer.hide()}),this.loaded.bind(this))},e}(O),P=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){app.previous=app.current,app.current=this,app.drawer.hide(),app.modal.close(),this.bodyClass=""},n.config=function(t,e){var n=this;t||this.bodyClass&&($("#app").addClass(this.bodyClass),e.onunload=function(){return $("#app").removeClass(n.bodyClass)})},e}(l.a),M=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.view=function(){return m("header",{className:"Hero DiscussionHero"},m("div",{className:"container"},m("ul",{className:"DiscussionHero-items"},Object(T.a)(this.items().toArray()))))},n.items=function(){var t=new p.a,e=this.props.discussion,n=e.badges().toArray();return n.length&&t.add("badges",m("ul",{className:"DiscussionHero-badges badges"},Object(T.a)(n)),10),t.add("title",m("h2",{className:"DiscussionHero-title"},e.title())),t},e}(l.a),A=n(31),I=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.view=function(){return m("div",{className:"Post CommentPost LoadingPost"},m("header",{className:"Post-header"},Object(x.a)(null,{className:"PostUser-avatar"}),m("div",{className:"fakeText"})),m("div",{className:"Post-body"},m("div",{className:"fakeText"}),m("div",{className:"fakeText"}),m("div",{className:"fakeText"})))},e}(l.a),R=n(58),L=n(59),H=n(12),B=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.email=m.prop(this.props.email||""),this.success=!1},n.className=function(){return"ForgotPasswordModal Modal--small"},n.title=function(){return app.translator.trans("core.forum.forgot_password.title")},n.content=function(){return this.success?m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",{className:"helpText"},app.translator.trans("core.forum.forgot_password.email_sent_message")),m("div",{className:"Form-group"},m(C.a,{className:"Button Button--primary Button--block",onclick:this.hide.bind(this)},app.translator.trans("core.forum.forgot_password.dismiss_button"))))):m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",{className:"helpText"},app.translator.trans("core.forum.forgot_password.text")),m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"email",type:"email",placeholder:Object(f.a)(app.translator.trans("core.forum.forgot_password.email_placeholder")),value:this.email(),onchange:m.withAttr("value",this.email),disabled:this.loading})),m("div",{className:"Form-group"},C.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading,children:app.translator.trans("core.forum.forgot_password.submit_button")}))))},n.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0,app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/forgot",data:{email:this.email()},errorHandler:this.onerror.bind(this)}).then((function(){e.success=!0,e.alert=null})).catch((function(){})).then(this.loaded.bind(this))},n.onerror=function(e){404===e.status&&(e.alert.props.children=app.translator.trans("core.forum.forgot_password.not_found_message")),t.prototype.onerror.call(this,e)},e}(H.a),U=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.view=function(){return m("div",{className:"LogInButtons"},this.items().toArray())},n.items=function(){return new p.a},e}(l.a),F=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.username=m.prop(this.props.username||""),this.email=m.prop(this.props.email||""),this.password=m.prop(this.props.password||"")},n.className=function(){return"Modal--small SignUpModal"},n.title=function(){return app.translator.trans("core.forum.sign_up.title")},n.content=function(){return[m("div",{className:"Modal-body"},this.body()),m("div",{className:"Modal-footer"},this.footer())]},n.isProvided=function(t){return this.props.provided&&-1!==this.props.provided.indexOf(t)},n.body=function(){return[this.props.token?"":m(U,null),m("div",{className:"Form Form--centered"},this.fields().toArray())]},n.fields=function(){var t=new p.a;return t.add("username",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"username",type:"text",placeholder:Object(f.a)(app.translator.trans("core.forum.sign_up.username_placeholder")),value:this.username(),onchange:m.withAttr("value",this.username),disabled:this.loading||this.isProvided("username")})),30),t.add("email",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"email",type:"email",placeholder:Object(f.a)(app.translator.trans("core.forum.sign_up.email_placeholder")),value:this.email(),onchange:m.withAttr("value",this.email),disabled:this.loading||this.isProvided("email")})),20),this.props.token||t.add("password",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"password",type:"password",placeholder:Object(f.a)(app.translator.trans("core.forum.sign_up.password_placeholder")),value:this.password(),onchange:m.withAttr("value",this.password),disabled:this.loading})),10),t.add("submit",m("div",{className:"Form-group"},m(C.a,{className:"Button Button--primary Button--block",type:"submit",loading:this.loading},app.translator.trans("core.forum.sign_up.submit_button"))),-10),t},n.footer=function(){return[m("p",{className:"SignUpModal-logIn"},app.translator.trans("core.forum.sign_up.log_in_text",{a:m("a",{onclick:this.logIn.bind(this)})}))]},n.logIn=function(){var t={identification:this.email()||this.username(),password:this.password()};app.modal.show(new Y(t))},n.onready=function(){this.props.username&&!this.props.email?this.$("[name=email]").select():this.$("[name=username]").select()},n.onsubmit=function(t){t.preventDefault(),this.loading=!0;var e=this.submitData();app.request({url:app.forum.attribute("baseUrl")+"/register",method:"POST",data:e,errorHandler:this.onerror.bind(this)}).then((function(){return window.location.reload()}),this.loaded.bind(this))},n.submitData=function(){var t={username:this.username(),email:this.email()};return this.props.token?t.token=this.props.token:t.password=this.password(),t},e}(H.a),Y=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.identification=m.prop(this.props.identification||""),this.password=m.prop(this.props.password||""),this.remember=m.prop(!!this.props.remember)},n.className=function(){return"LogInModal Modal--small"},n.title=function(){return app.translator.trans("core.forum.log_in.title")},n.content=function(){return[m("div",{className:"Modal-body"},this.body()),m("div",{className:"Modal-footer"},this.footer())]},n.body=function(){return[m(U,null),m("div",{className:"Form Form--centered"},this.fields().toArray())]},n.fields=function(){var t=new p.a;return t.add("identification",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"identification",type:"text",placeholder:Object(f.a)(app.translator.trans("core.forum.log_in.username_or_email_placeholder")),bidi:this.identification,disabled:this.loading})),30),t.add("password",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"password",type:"password",placeholder:Object(f.a)(app.translator.trans("core.forum.log_in.password_placeholder")),bidi:this.password,disabled:this.loading})),20),t.add("remember",m("div",{className:"Form-group"},m("div",null,m("label",{className:"checkbox"},m("input",{type:"checkbox",bidi:this.remember,disabled:this.loading}),app.translator.trans("core.forum.log_in.remember_me_label")))),10),t.add("submit",m("div",{className:"Form-group"},C.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading,children:app.translator.trans("core.forum.log_in.submit_button")})),-10),t},n.footer=function(){return[m("p",{className:"LogInModal-forgotPassword"},m("a",{onclick:this.forgotPassword.bind(this)},app.translator.trans("core.forum.log_in.forgot_password_link"))),app.forum.attribute("allowSignUp")?m("p",{className:"LogInModal-signUp"},app.translator.trans("core.forum.log_in.sign_up_text",{a:m("a",{onclick:this.signUp.bind(this)})})):""]},n.forgotPassword=function(){var t=this.identification(),e=-1!==t.indexOf("@")?{email:t}:void 0;app.modal.show(new B(e))},n.signUp=function(){var t={password:this.password()},e=this.identification();t[-1!==e.indexOf("@")?"email":"username"]=e,app.modal.show(new F(t))},n.onready=function(){this.$("[name="+(this.identification()?"password":"identification")+"]").select()},n.onsubmit=function(t){t.preventDefault(),this.loading=!0;var e=this.identification(),n=this.password(),i=this.remember();app.session.login({identification:e,password:n,remember:i},{errorHandler:this.onerror.bind(this)}).then((function(){return window.location.reload()}),this.loaded.bind(this))},n.onerror=function(e){401===e.status&&(e.alert.props.children=app.translator.trans("core.forum.log_in.invalid_login_message")),t.prototype.onerror.call(this,e)},e}(H.a),q=n(20),W=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.discussion=this.props.discussion,this.currentTitle=this.props.currentTitle,this.newTitle=m.prop(this.currentTitle)},n.className=function(){return"RenameDiscussionModal Modal--small"},n.title=function(){return app.translator.trans("core.forum.rename_discussion.title")},n.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m("input",{className:"FormControl",bidi:this.newTitle,type:"text"})),m("div",{className:"Form-group"},C.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading,children:app.translator.trans("core.forum.rename_discussion.submit_button")}))))},n.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0;var n=this.newTitle,i=this.currentTitle;if(n&&n!==i)return this.discussion.save({title:n}).then((function(){app.viewingDiscussion(e.discussion)&&app.current.stream.update(),m.redraw(),e.hide()})).catch((function(){e.loading=!1,m.redraw()}));this.hide()},e}(H.a),z={controls:function(t,e){var n=this,i=new p.a;return["user","moderation","destructive"].forEach((function(o){var r=n[o+"Controls"](t,e).toArray();r.length&&(r.forEach((function(t){return i.add(t.itemName,t)})),i.add(o+"Separator",q.a.component()))})),i},userControls:function(t,e){var n=new p.a;return e instanceof tt&&n.add("reply",!app.session.user||t.canReply()?C.a.component({icon:"fas fa-reply",children:app.translator.trans(app.session.user?"core.forum.discussion_controls.reply_button":"core.forum.discussion_controls.log_in_to_reply_button"),onclick:this.replyAction.bind(t,!0,!1)}):C.a.component({icon:"fas fa-reply",children:app.translator.trans("core.forum.discussion_controls.cannot_reply_button"),className:"disabled",title:app.translator.trans("core.forum.discussion_controls.cannot_reply_text")})),n},moderationControls:function(t){var e=new p.a;return t.canRename()&&e.add("rename",C.a.component({icon:"fas fa-pencil-alt",children:app.translator.trans("core.forum.discussion_controls.rename_button"),onclick:this.renameAction.bind(t)})),e},destructiveControls:function(t){var e=new p.a;return t.isHidden()?(t.canHide()&&e.add("restore",C.a.component({icon:"fas fa-reply",children:app.translator.trans("core.forum.discussion_controls.restore_button"),onclick:this.restoreAction.bind(t)})),t.canDelete()&&e.add("delete",C.a.component({icon:"fas fa-times",children:app.translator.trans("core.forum.discussion_controls.delete_forever_button"),onclick:this.deleteAction.bind(t)}))):t.canHide()&&e.add("hide",C.a.component({icon:"far fa-trash-alt",children:app.translator.trans("core.forum.discussion_controls.delete_button"),onclick:this.hideAction.bind(t)})),e},replyAction:function(t,e){var n=m.deferred();if(app.session.user)if(this.canReply()){var i=app.composer.component;app.composingReplyTo(this)&&!e||(i=new E({user:app.session.user,discussion:this}),app.composer.load(i)),app.composer.show(),t&&app.viewingDiscussion(this)&&!app.composer.isFullScreen()&&app.current.stream.goToNumber("reply"),n.resolve(i)}else n.reject();else n.reject(),app.modal.show(new Y);return n.promise},hideAction:function(){return this.pushAttributes({hiddenAt:new Date,hiddenUser:app.session.user}),this.save({isHidden:!0})},restoreAction:function(){return this.pushAttributes({hiddenAt:null,hiddenUser:null}),this.save({isHidden:!1})},deleteAction:function(){var t=this;if(confirm(Object(f.a)(app.translator.trans("core.forum.discussion_controls.delete_confirmation"))))return app.viewingDiscussion(this)&&app.history.back(),this.delete().then((function(){app.cache.discussionList&&(app.cache.discussionList.removeDiscussion(t),m.redraw())}))},renameAction:function(){return app.modal.show(new W({currentTitle:this.title(),discussion:this}))}},G=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.view=function(){var t=this;if(app.composingReplyTo(this.props.discussion))return m("article",{className:"Post CommentPost editing"},m("header",{className:"Post-header"},m("div",{className:"PostUser"},m("h3",null,Object(x.a)(app.session.user,{className:"PostUser-avatar"}),Object(_.a)(app.session.user)))),m("div",{className:"Post-body",config:this.configPreview.bind(this)}));return m("article",{className:"Post ReplyPlaceholder",onclick:function(){z.replyAction.call(t.props.discussion,!0)}},m("header",{className:"Post-header"},Object(x.a)(app.session.user,{className:"PostUser-avatar"})," ",app.translator.trans("core.forum.post_stream.reply_placeholder")))},n.configPreview=function(t,e,n){if(!e){var i,o=setInterval((function(){if(app.composer.component){var e=app.composer.component.content();if(i!==e){i=e;var n=$(window).scrollTop()+$(window).height()>=$(document).height();s9e.TextFormatter.preview(i||"",t),n&&$(window).scrollTop($(document).height())}}}),50);n.onunload=function(){return clearInterval(o)}}},e}(l.a),V=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){this.discussion=this.props.discussion,this.paused=!1,this.scrollListener=new A.a(this.onscroll.bind(this)),this.loadPageTimeouts={},this.pagesLoading=0,this.show(this.props.includedPosts)},n.goToNumber=function(t,e){var n=this;if("reply"===t)return this.goToLast().then((function(){$("html,body").stop(!0).animate({scrollTop:$(document).height()-$(window).height()},"fast",(function(){n.flashItem(n.$(".PostStream-item:last-child"))}))}));this.paused=!0;var i=this.loadNearNumber(t);return m.redraw(!0),i.then((function(){m.redraw(!0),n.scrollToNumber(t,e).done(n.unpause.bind(n))}))},n.goToIndex=function(t,e,n){var i=this;this.paused=!0;var o=this.loadNearIndex(t);return m.redraw(!0),o.then((function(){Object(R.a)(i.$(".PostStream-item:"+(e?"last":"first")),(function(){return m.redraw(!0)})),i.scrollToIndex(t,n,e).done(i.unpause.bind(i))}))},n.goToFirst=function(){return this.goToIndex(0)},n.goToLast=function(){return this.goToIndex(this.count()-1,!0)},n.update=function(){return this.viewingEnd?(this.visibleEnd=this.count(),this.loadRange(this.visibleStart,this.visibleEnd).then((function(){return m.redraw()}))):m.deferred().resolve().promise},n.count=function(){return this.discussion.postIds().length},n.sanitizeIndex=function(t){return Math.max(0,Math.min(this.count(),t))},n.show=function(t){this.visibleStart=t.length?this.discussion.postIds().indexOf(t[0].id()):0,this.visibleEnd=this.visibleStart+t.length},n.reset=function(t,e){this.visibleStart=t||0,this.visibleEnd=this.sanitizeIndex(e||this.constructor.loadCount)},n.posts=function(){return this.discussion.postIds().slice(this.visibleStart,this.visibleEnd).map((function(t){var e=app.store.getById("posts",t);return e&&e.discussion()&&void 0!==e.canEdit()?e:null}))},n.view=function(){var t,e=this;function n(t,e,n){n.fadedIn||$(t).hide().fadeIn(),n.fadedIn=!0}this.visibleEnd=this.sanitizeIndex(this.visibleEnd),this.viewingEnd=this.visibleEnd===this.count();var i=this.posts(),o=this.discussion.postIds(),r=i.map((function(i,r){var s,u={"data-index":e.visibleStart+r};if(i){var c=i.createdAt(),l=app.postComponents[i.contentType()];s=l?l.component({post:i}):"",u.key="post"+i.id(),u.config=n,u["data-time"]=c.toISOString(),u["data-number"]=i.number(),u["data-id"]=i.id(),u["data-type"]=i.contentType(),u["user-id"]=i.user().id();var d=c-t;d>3456e5&&(s=[m("div",{className:"PostStream-timeGap"},m("span",null,app.translator.trans("core.forum.post_stream.time_lapsed_text",{period:moment.duration(d).humanize()}))),s]),t=c}else u.key="post"+o[e.visibleStart+r],s=I.component();return m("div",Object(a.a)({className:"PostStream-item"},u),s)}));return!this.viewingEnd&&i[this.visibleEnd-this.visibleStart-1]&&r.push(m("div",{className:"PostStream-loadMore",key:"loadMore"},m(C.a,{className:"Button",onclick:this.loadNext.bind(this)},app.translator.trans("core.forum.post_stream.load_more_button")))),!this.viewingEnd||app.session.user&&!this.discussion.canReply()||r.push(m("div",{className:"PostStream-item",key:"reply"},G.component({discussion:this.discussion}))),m("div",{className:"PostStream"},r)},n.config=function(t,e){var n=this;t||(setTimeout((function(){return n.scrollListener.start()})),e.onunload=function(){n.scrollListener.stop(),clearTimeout(n.calculatePositionTimeout)})},n.onscroll=function(t){if(!this.paused){var e=this.getMarginTop(),n=$(window).height()-e,i=t+e;if(this.visibleStart>0){var o=this.$(".PostStream-item[data-index="+this.visibleStart+"]");o.length&&o.offset().top>i-300&&this.loadPrevious()}if(this.visibleEnd<this.count()){var r=this.$(".PostStream-item[data-index="+(this.visibleEnd-1)+"]");r.length&&r.offset().top+r.outerHeight(!0)<i+n+300&&this.loadNext()}clearTimeout(this.calculatePositionTimeout),this.calculatePositionTimeout=setTimeout(this.calculatePosition.bind(this),100)}},n.loadNext=function(){var t=this.visibleEnd,e=this.visibleEnd=this.sanitizeIndex(this.visibleEnd+this.constructor.loadCount),n=t-2*this.constructor.loadCount;n>this.visibleStart&&n>=0&&(this.visibleStart=n+this.constructor.loadCount+1,this.loadPageTimeouts[n]&&(clearTimeout(this.loadPageTimeouts[n]),this.loadPageTimeouts[n]=null,this.pagesLoading--)),this.loadPage(t,e)},n.loadPrevious=function(){var t=this.visibleStart,e=this.visibleStart=this.sanitizeIndex(this.visibleStart-this.constructor.loadCount),n=e+2*this.constructor.loadCount;n<this.visibleEnd&&n<=this.count()&&(this.visibleEnd=n,this.loadPageTimeouts[n]&&(clearTimeout(this.loadPageTimeouts[n]),this.loadPageTimeouts[n]=null,this.pagesLoading--)),this.loadPage(e,t,!0)},n.loadPage=function(t,e,n){var i=this,o=function(){if(!(t<i.visibleStart||e>i.visibleEnd)){var o=n?i.visibleEnd-1:i.visibleStart;Object(R.a)('.PostStream-item[data-index="'+o+'"]',(function(){return m.redraw(!0)})),i.unpause()}};o(),this.loadPageTimeouts[t]=setTimeout((function(){i.loadRange(t,e).then((function(){o(),i.pagesLoading--})),i.loadPageTimeouts[t]=null}),this.pagesLoading?1e3:0),this.pagesLoading++},n.loadRange=function(t,e){var n=[],i=[];return this.discussion.postIds().slice(t,e).forEach((function(t){var e=app.store.getById("posts",t);e&&e.discussion()&&void 0!==e.canEdit()?i.push(e):n.push(t)})),n.length?app.store.find("posts",n):m.deferred().resolve(i).promise},n.loadNearNumber=function(t){return this.posts().some((function(e){return e&&Number(e.number())===Number(t)}))?m.deferred().resolve().promise:(this.reset(),app.store.find("posts",{filter:{discussion:this.discussion.id()},page:{near:t}}).then(this.show.bind(this)))},n.loadNearIndex=function(t){if(t>=this.visibleStart&&t<=this.visibleEnd)return m.deferred().resolve().promise;var e=this.sanitizeIndex(t-this.constructor.loadCount/2),n=e+this.constructor.loadCount;return this.reset(e,n),this.loadRange(e,n).then(this.show.bind(this))},n.calculatePosition=function(){var t,e,n=this.getMarginTop(),i=$(window),o=i.height()-n,r=i.scrollTop()+n;this.$(".PostStream-item").each((function(){var n=$(this),i=n.offset().top,s=n.outerHeight(!0);if(i+s>r){if(t||(t=e=n.data("number")),!(i+s<r+o))return!1;n.data("number")&&(e=n.data("number"))}})),t&&this.trigger("positionChanged",t||1,e)},n.getMarginTop=function(){return this.$()&&$("#header").outerHeight()+parseInt(this.$().css("margin-top"),10)},n.scrollToNumber=function(t,e){var n=this.$(".PostStream-item[data-number="+t+"]");return this.scrollToItem(n,e).done(this.flashItem.bind(this,n))},n.scrollToIndex=function(t,e,n){var i=this.$(".PostStream-item[data-index="+t+"]");return this.scrollToItem(i,e,!0,n)},n.scrollToItem=function(t,e,n,i){var o=$("html, body").stop(!0);if(t.length){var r=t.offset().top-this.getMarginTop(),s=t.offset().top+t.height(),a=$(document).scrollTop(),u=a+$(window).height();if(n||r<a||s>u){var c=i?s-$(window).height()+app.composer.computedHeight():t.is(":first-child")?0:r;e?o.scrollTop(c):c!==a&&o.animate({scrollTop:c},"fast")}}return o.promise()},n.flashItem=function(t){t.addClass("flash").one("animationend webkitAnimationEnd",(function(){return t.removeClass("flash")}))},n.unpause=function(){this.paused=!1,this.scrollListener.update(),this.trigger("unpaused")},e}(l.a);V.loadCount=20,Object(a.a)(V.prototype,L.a);var Z=V,K=n(35),X=n(57),J=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){this.handlers={},this.index=0,this.visible=1,this.description="",this.props.stream.on("unpaused",this.handlers.streamWasUnpaused=this.streamWasUnpaused.bind(this)),this.scrollListener=new A.a(this.onscroll.bind(this)),this.subtree=new K.a((function(){return!0}))},n.view=function(){var t=this.subtree.retain(),e=this.count(),n=this.props.stream.discussion.unreadCount(),i=e?Math.min(e-this.index,n)/e:0,o=app.translator.transChoice("core.forum.post_scrubber.viewing_text",e,{index:m("span",{className:"Scrubber-index"},t||Object(X.a)(Math.min(Math.ceil(this.index+this.visible),e))),count:m("span",{className:"Scrubber-count"},Object(X.a)(e))});return m("div",{className:"PostStreamScrubber Dropdown "+(this.disabled()?"disabled ":"")+(this.props.className||"")},m("button",{className:"Button Dropdown-toggle","data-toggle":"dropdown"},o," ",Object(v.a)("fas fa-sort")),m("div",{className:"Dropdown-menu dropdown-menu"},m("div",{className:"Scrubber"},m("a",{className:"Scrubber-first",onclick:this.goToFirst.bind(this)},Object(v.a)("fas fa-angle-double-up")," ",app.translator.trans("core.forum.post_scrubber.original_post_link")),m("div",{className:"Scrubber-scrollbar"},m("div",{className:"Scrubber-before"}),m("div",{className:"Scrubber-handle"},m("div",{className:"Scrubber-bar"}),m("div",{className:"Scrubber-info"},m("strong",null,o),m("span",{className:"Scrubber-description"},t||this.description))),m("div",{className:"Scrubber-after"}),m("div",{className:"Scrubber-unread",config:function(t,e,n){var o=$(t),r={top:100-100*i+"%",height:100*i+"%"};n.oldStyle?o.stop(!0).css(n.oldStyle).animate(r):o.css(r),n.oldStyle=r}},app.translator.trans("core.forum.post_scrubber.unread_text",{count:n}))),m("a",{className:"Scrubber-last",onclick:this.goToLast.bind(this)},Object(v.a)("fas fa-angle-double-down")," ",app.translator.trans("core.forum.post_scrubber.now_link")))))},n.goToFirst=function(){this.props.stream.goToFirst(),this.index=0,this.renderScrollbar(!0)},n.goToLast=function(){this.props.stream.goToLast(),this.index=this.count(),this.renderScrollbar(!0)},n.count=function(){return this.props.stream.count()},n.streamWasUnpaused=function(){this.update(window.pageYOffset),this.renderScrollbar(!0)},n.disabled=function(){return this.visible>=this.count()},n.onscroll=function(t){var e=this.props.stream;!e.paused&&e.$()&&(this.update(t),this.renderScrollbar())},n.update=function(t){var e=this.props.stream,n=e.getMarginTop(),i=t+n,o=$(window).height()-n,r=e.$("> .PostStream-item[data-index]"),s=r.first().data("index")||0,a=0,u="";r.each((function(){var t=$(this),e=t.offset().top,n=t.outerHeight(!0);if(e+n<i)return!0;if(e>i+o)return!1;var r=Math.max(0,i-e),c=Math.min(n,i+o-e)-r;e<=i&&(s=parseFloat(t.data("index"))+r/n),c>0&&(a+=c/n);var l=t.data("time");l&&(u=l)})),this.index=s,this.visible=a,this.description=u?moment(u).format("MMMM YYYY"):""},n.config=function(t,e){t||(e.onunload=this.ondestroy.bind(this),this.scrollListener.start(),$(window).on("resize",this.handlers.onresize=this.onresize.bind(this)).resize(),this.$(".Scrubber-scrollbar").bind("click",this.onclick.bind(this)).css({cursor:"pointer","user-select":"none"}).bind("dragstart mousedown touchstart",(function(t){return t.preventDefault()})),this.dragging=!1,this.mouseStart=0,this.indexStart=0,this.$(".Scrubber-handle").css("cursor","move").bind("mousedown touchstart",this.onmousedown.bind(this)).click((function(t){return t.stopPropagation()})),$(document).on("mousemove touchmove",this.handlers.onmousemove=this.onmousemove.bind(this)).on("mouseup touchend",this.handlers.onmouseup=this.onmouseup.bind(this)))},n.ondestroy=function(){this.scrollListener.stop(),this.props.stream.off("unpaused",this.handlers.streamWasUnpaused),$(window).off("resize",this.handlers.onresize),$(document).off("mousemove touchmove",this.handlers.onmousemove).off("mouseup touchend",this.handlers.onmouseup)},n.renderScrollbar=function(t){var e=this.percentPerPost(),n=this.index,i=this.count(),o=this.visible||1,r=this.$();r.find(".Scrubber-index").text(Object(X.a)(Math.min(Math.ceil(n+o),i))),r.find(".Scrubber-description").text(this.description),r.toggleClass("disabled",this.disabled());var s={};s.before=Math.max(0,e.index*Math.min(n,i-o)),s.handle=Math.min(100-s.before,e.visible*o),s.after=100-s.before-s.handle;var a=t?"animate":"css";for(var u in s){var c=r.find(".Scrubber-"+u);c.stop(!0,!0)[a]({height:s[u]+"%"},"fast"),"animate"===a&&c.css("overflow","visible")}},n.percentPerPost=function(){var t=this.count()||1,e=this.visible||1,n=50/this.$(".Scrubber-scrollbar").outerHeight()*100,i=Math.max(100/t,n/e),o=t===e?0:(100-i*e)/(t-e);return{index:o,visible:i}},n.onresize=function(){this.scrollListener.update();var t=this.$(),e=this.$(".Scrubber-scrollbar");e.css("max-height",$(window).height()-t.offset().top+$(window).scrollTop()-parseInt($("#app").css("padding-bottom"),10)-(t.outerHeight()-e.outerHeight()))},n.onmousedown=function(t){this.mouseStart=t.clientY||t.originalEvent.touches[0].clientY,this.indexStart=this.index,this.dragging=!0,this.props.stream.paused=!0,$("body").css("cursor","move")},n.onmousemove=function(t){if(this.dragging){var e=((t.clientY||t.originalEvent.touches[0].clientY)-this.mouseStart)/this.$(".Scrubber-scrollbar").outerHeight()*100/this.percentPerPost().index||0,n=Math.min(this.indexStart+e,this.count()-1);this.index=Math.max(0,n),this.renderScrollbar()}},n.onmouseup=function(){if(this.dragging){this.mouseStart=0,this.indexStart=0,this.dragging=!1,$("body").css("cursor",""),this.$().removeClass("open");var t=Math.floor(this.index);this.props.stream.goToIndex(t),this.renderScrollbar(!0)}},n.onclick=function(t){var e=this.$(".Scrubber-scrollbar"),n=((t.pageY||t.originalEvent.touches[0].pageY)-e.offset().top+$("body").scrollTop())/e.outerHeight()*100,i=(n-=parseFloat(e.find(".Scrubber-handle")[0].style.height)/2)/this.percentPerPost().index;i=Math.max(0,Math.min(this.count()-1,i)),this.props.stream.goToIndex(Math.floor(i)),this.index=i,this.renderScrollbar(!0),this.$().removeClass("open")},e}(l.a),Q=n(60),tt=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.discussion=null,this.near=null,this.refresh(),app.cache.discussionList&&(app.pane.enable(),app.pane.hide(),app.previous instanceof e&&m.redraw.strategy("diff")),app.history.push("discussion"),this.bodyClass="App--discussion"},n.onunload=function(t){if(this.discussion){var e=m.route.param("id");if(e&&e.split("-")[0]===this.discussion.id()){t.preventDefault();var n=m.route.param("near")||"1";return n!==String(this.near)&&this.stream.goToNumber(n),void(this.near=null)}}app.pane.disable(),app.composingReplyTo(this.discussion)&&!app.composer.component.content()?app.composer.hide():app.composer.minimize()},n.view=function(){var t=this.discussion;return m("div",{className:"DiscussionPage"},app.cache.discussionList?m("div",{className:"DiscussionPage-list",config:this.configPane.bind(this)},$(".App-navigation").is(":visible")?"":app.cache.discussionList.render()):"",m("div",{className:"DiscussionPage-discussion"},t?[M.component({discussion:t}),m("div",{className:"container"},m("nav",{className:"DiscussionPage-nav"},m("ul",null,Object(T.a)(this.sidebarItems().toArray()))),m("div",{className:"DiscussionPage-stream"},this.stream.render()))]:d.a.component({className:"LoadingIndicator--block"})))},n.config=function(){for(var e,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];(e=t.prototype.config).call.apply(e,[this].concat(i)),this.discussion&&app.setTitle(this.discussion.title())},n.refresh=function(){this.near=m.route.param("near")||0,this.discussion=null;var t=app.preloadedApiDocument();if(t)setTimeout(this.show.bind(this,t),0);else{var e=this.requestParams();app.store.find("discussions",m.route.param("id").split("-")[0],e).then(this.show.bind(this))}m.lazyRedraw()},n.requestParams=function(){return{page:{near:this.near}}},n.show=function(t){this.discussion=t,app.history.push("discussion",t.title()),app.setTitleCount(0);var e=[];if(t.payload&&t.payload.included){var n=t.id();e=t.payload.included.filter((function(t){return"posts"===t.type&&t.relationships&&t.relationships.discussion&&t.relationships.discussion.data.id===n})).map((function(t){return app.store.getById("posts",t.id)})).sort((function(t,e){return t.id()-e.id()})).slice(0,20)}this.stream=new Z({discussion:t,includedPosts:e}),this.stream.on("positionChanged",this.positionChanged.bind(this)),this.stream.goToNumber(m.route.param("near")||e[0]&&e[0].number(),!0)},n.configPane=function(t,e,n){if(!e){n.retain=!0;var i=$(t),o=app.pane;i.hover(o.show.bind(o),o.onmouseleave.bind(o));var r=function(t){t.pageX<10&&o.show()};$(document).on("mousemove",r),n.onunload=function(){return $(document).off("mousemove",r)};var s=i.find(".DiscussionListItem.active");if(s.length){var a=i.offset().top,u=a+i.outerHeight(),c=s.offset().top,l=c+s.outerHeight();(c<a||l>u)&&i.scrollTop(i.scrollTop()-a+c)}}},n.sidebarItems=function(){var t=new p.a;return t.add("controls",Q.a.component({children:z.controls(this.discussion,this).toArray(),icon:"fas fa-ellipsis-v",className:"App-primaryControl",buttonClassName:"Button--primary"})),t.add("scrubber",J.component({stream:this.stream,className:"App-titleControl"}),-100),t},n.positionChanged=function(t,e){var n=this.discussion,i=app.route.discussion(n,this.near=t);m.route(i,!0),window.history.replaceState(null,document.title,i),app.history.push("discussion",n.title()),app.session.user&&e>(n.lastReadPostNumber()||0)&&(n.save({lastReadPostNumber:e}),m.redraw())},e}(P),et=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.view=function(){return m("ul",{className:"Header-controls"},Object(T.a)(this.items().toArray()))},n.config=function(t,e){e.retain=!0},n.items=function(){return new p.a},e}(l.a),nt=n(13),it=n(11),ot=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t),e.initProps=function(e){t.initProps.call(this,e),e.className="SessionDropdown",e.buttonClassName="Button Button--user Button--flat",e.menuClassName="Dropdown-menu--right"};var n=e.prototype;return n.view=function(){return this.props.children=this.items().toArray(),t.prototype.view.call(this)},n.getButtonContent=function(){var t=app.session.user;return[Object(x.a)(t)," ",m("span",{className:"Button-label"},Object(_.a)(t))]},n.items=function(){var t=new p.a,e=app.session.user;return t.add("profile",b.a.component({icon:"fas fa-user",children:app.translator.trans("core.forum.header.profile_button"),href:app.route.user(e)}),100),t.add("settings",b.a.component({icon:"fas fa-cog",children:app.translator.trans("core.forum.header.settings_button"),href:app.route("settings")}),50),app.forum.attribute("adminUrl")&&t.add("administration",b.a.component({icon:"fas fa-wrench",children:app.translator.trans("core.forum.header.admin_button"),href:app.forum.attribute("adminUrl"),target:"_blank",config:function(){}}),0),t.add("separator",q.a.component(),-90),t.add("logOut",C.a.component({icon:"fas fa-sign-out-alt",children:app.translator.trans("core.forum.header.log_out_button"),onclick:app.session.logout.bind(app.session)}),-100),t},e}(nt.a),rt=n(27),st=n(36),at=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){this.loading=!1,this.moreResults=!1},n.view=function(){var t=app.cache.notifications||[];return m("div",{className:"NotificationList"},m("div",{className:"NotificationList-header"},m("div",{className:"App-primaryControl"},C.a.component({className:"Button Button--icon Button--link",icon:"fas fa-check",title:app.translator.trans("core.forum.notifications.mark_all_as_read_tooltip"),onclick:this.markAllAsRead.bind(this)})),m("h4",{className:"App-titleControl App-titleControl--text"},app.translator.trans("core.forum.notifications.title"))),m("div",{className:"NotificationList-content"},t.length?t.map((function(t){var e=[],n={};return t.forEach((function(t){var i=t.subject();if(void 0!==i){var o=!1;i instanceof st.a?o=i:i&&i.discussion&&(o=i.discussion());var r=o?o.id():0;n[r]=n[r]||{discussion:o,notifications:[]},n[r].notifications.push(t),-1===e.indexOf(n[r])&&e.push(n[r])}})),e.map((function(t){var e=t.discussion&&t.discussion.badges().toArray();return m("div",{className:"NotificationGroup"},t.discussion?m("a",{className:"NotificationGroup-header",href:app.route.discussion(t.discussion),config:m.route},e&&e.length?m("ul",{className:"NotificationGroup-badges badges"},Object(T.a)(e)):"",t.discussion.title()):m("div",{className:"NotificationGroup-header"},app.forum.attribute("title")),m("ul",{className:"NotificationGroup-content"},t.notifications.map((function(t){var e=app.notificationComponents[t.contentType()];return e?m("li",null,e.component({notification:t})):""}))))}))})):"",this.loading?m(d.a,{className:"LoadingIndicator--block"}):t.length?"":m("div",{className:"NotificationList-empty"},app.translator.trans("core.forum.notifications.empty_text"))))},n.config=function(t,e){var n=this;if(!t){var i=this.$(".NotificationList-content"),o="auto"===i.css("overflow")?i:$(window),r=function(){var t=o.scrollTop(),e=o.height(),r=o===i?0:i.offset().top,s=i[0].scrollHeight;n.moreResults&&!n.loading&&t+e>=r+s&&n.loadMore()};o.on("scroll",r),e.onunload=function(){o.off("scroll",r)}}},n.load=function(){app.session.user.newNotificationCount()&&delete app.cache.notifications,app.cache.notifications||(app.session.user.pushAttributes({newNotificationCount:0}),this.loadMore())},n.loadMore=function(){var t=this;this.loading=!0,m.redraw();var e=app.cache.notifications?{page:{offset:10*app.cache.notifications.length}}:null;return app.store.find("notifications",e).then(this.parseResults.bind(this)).catch((function(){})).then((function(){t.loading=!1,m.redraw()}))},n.parseResults=function(t){return app.cache.notifications=app.cache.notifications||[],t.length&&app.cache.notifications.push(t),this.moreResults=!!t.payload.links.next,t},n.markAllAsRead=function(){app.cache.notifications&&(app.session.user.pushAttributes({unreadNotificationCount:0}),app.cache.notifications.forEach((function(t){t.forEach((function(t){return t.pushAttributes({isRead:!0})}))})),app.request({url:app.forum.attribute("apiUrl")+"/notifications/read",method:"POST"}))},e}(l.a),ut=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t),e.initProps=function(e){e.className=e.className||"NotificationsDropdown",e.buttonClassName=e.buttonClassName||"Button Button--flat",e.menuClassName=e.menuClassName||"Dropdown-menu--right",e.label=e.label||app.translator.trans("core.forum.notifications.tooltip"),e.icon=e.icon||"fas fa-bell",t.initProps.call(this,e)};var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.list=new at},n.getButton=function(){var e=this.getNewCount(),n=t.prototype.getButton.call(this);return n.attrs.title=this.props.label,n.attrs.className+=e?" new":"",n.attrs.onclick=this.onclick.bind(this),n},n.getButtonContent=function(){var t=this.getUnreadCount();return[Object(v.a)(this.props.icon,{className:"Button-icon"}),t?m("span",{className:"NotificationsDropdown-unread"},t):"",m("span",{className:"Button-label"},this.props.label)]},n.getMenu=function(){return m("div",{className:"Dropdown-menu "+this.props.menuClassName,onclick:this.menuClick.bind(this)},this.showing?this.list.render():"")},n.onclick=function(){app.drawer.isOpen()?this.goToRoute():this.list.load()},n.goToRoute=function(){m.route(app.route("notifications"))},n.getUnreadCount=function(){return app.session.user.unreadNotificationCount()},n.getNewCount=function(){return app.session.user.newNotificationCount()},n.menuClick=function(t){(t.shiftKey||t.metaKey||t.ctrlKey||2===t.which)&&t.stopPropagation()},e}(nt.a),ct=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.view=function(){return m("ul",{className:"Header-controls"},Object(T.a)(this.items().toArray()))},n.config=function(t,e){e.retain=!0},n.items=function(){var t=new p.a;if(t.add("search",app.search.render(),30),app.forum.attribute("showLanguageSelector")&&Object.keys(app.data.locales).length>1){var e=[],n=function(t){e.push(C.a.component({active:app.data.locale===t,children:app.data.locales[t],icon:app.data.locale!==t||"fas fa-check",onclick:function(){app.session.user?app.session.user.savePreferences({locale:t}).then((function(){return window.location.reload()})):(document.cookie="locale="+t+"; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT",window.location.reload())}}))};for(var i in app.data.locales)n(i);t.add("locale",rt.a.component({children:e,buttonClassName:"Button Button--link"}),20)}return app.session.user?(t.add("notifications",ut.component(),10),t.add("session",ot.component(),0)):(app.forum.attribute("allowSignUp")&&t.add("signUp",C.a.component({children:app.translator.trans("core.forum.header.sign_up_link"),className:"Button Button--link",onclick:function(){return app.modal.show(new F)}}),10),t.add("logIn",C.a.component({children:app.translator.trans("core.forum.header.log_in_link"),className:"Button Button--link",onclick:function(){return app.modal.show(new Y)}}),0)),t},e}(l.a),lt=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.initProps=function(e){t.initProps.call(this,e),e.className=e.className||"Button Button--icon Button--link"},e}(C.a),dt=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){this.position=e.PositionEnum.HIDDEN,this.height=null,this.active=!1},n.view=function(){var t={normal:this.position===e.PositionEnum.NORMAL,minimized:this.position===e.PositionEnum.MINIMIZED,fullScreen:this.position===e.PositionEnum.FULLSCREEN,active:this.active};t.visible=t.normal||t.minimized||t.fullScreen,this.component&&(this.component.props.disabled=t.minimized);var n=this.position===e.PositionEnum.MINIMIZED?this.show.bind(this):void 0;return m("div",{className:"Composer "+Object(h.a)(t)},m("div",{className:"Composer-handle",config:this.configHandle.bind(this)}),m("ul",{className:"Composer-controls"},Object(T.a)(this.controlItems().toArray())),m("div",{className:"Composer-content",onclick:n},this.component?this.component.render():""))},n.config=function(t,e){var n=this;if(this.updateHeight(),!t){e.retain=!0,this.initializeHeight(),this.$().hide().css("bottom",-this.computedHeight()),this.$().on("focus blur",":input",(function(t){n.active="focusin"===t.type,m.redraw()})),this.$().on("keydown",":input","esc",(function(){return n.close()})),window.onbeforeunload=function(){return n.component&&n.component.preventExit()||void 0};var i={};$(window).on("resize",i.onresize=this.updateHeight.bind(this)).resize(),$(document).on("mousemove",i.onmousemove=this.onmousemove.bind(this)).on("mouseup",i.onmouseup=this.onmouseup.bind(this)),e.onunload=function(){$(window).off("resize",i.onresize),$(document).off("mousemove",i.onmousemove).off("mouseup",i.onmouseup)}}},n.configHandle=function(t,e){if(!e){var n=this;$(t).css("cursor","row-resize").bind("dragstart mousedown",(function(t){return t.preventDefault()})).mousedown((function(t){n.mouseStart=t.clientY,n.heightStart=n.$().height(),n.handle=$(this),$("body").css("cursor","row-resize")}))}},n.onmousemove=function(t){if(this.handle){var e=this.mouseStart-t.clientY;this.changeHeight(this.heightStart+e);var n=$(window).scrollTop(),i=n>0&&n+$(window).height()>=$(document).height();this.updateBodyPadding(i)}},n.onmouseup=function(){this.handle&&(this.handle=null,$("body").css("cursor",""))},n.updateHeight=function(){var t=this.computedHeight(),e=this.$(".Composer-flexible");if(this.$().height(t),e.length){var n=e.offset().top-this.$().offset().top,i=parseInt(e.css("padding-bottom"),10),o=this.$(".Composer-footer").outerHeight(!0);e.height(this.$().outerHeight()-n-i-o)}},n.updateBodyPadding=function(){var t=this.position!==e.PositionEnum.HIDDEN&&this.position!==e.PositionEnum.MINIMIZED&&"absolute"!==this.$().css("position")?this.computedHeight()-parseInt($("#app").css("padding-bottom"),10):0;$("#content").css({paddingBottom:t})},n.isFullScreen=function(){return this.position===e.PositionEnum.FULLSCREEN||"absolute"===this.$().css("position")},n.preventExit=function(){if(this.component){var t=this.component.preventExit();if(t)return!confirm(t)}},n.load=function(t){this.preventExit()||(this.component&&(this.clear(),m.redraw(!0)),this.component=t)},n.clear=function(){this.component=null},n.animateToPosition=function(t){var n=this,i=this.position,o=this.$().stop(!0),r=o.outerHeight(),s=$(window).scrollTop();this.position=t,m.redraw(!0),o.show(),this.updateHeight();var a=o.outerHeight();i===e.PositionEnum.HIDDEN?o.css({bottom:-a,height:a}):o.css({height:r}),o.animate({bottom:0,height:a},"fast",(function(){return n.component.focus()})),this.updateBodyPadding(),$(window).scrollTop(s)},n.showBackdrop=function(){this.$backdrop=$("<div/>").addClass("composer-backdrop").appendTo("body")},n.hideBackdrop=function(){this.$backdrop&&this.$backdrop.remove()},n.show=function(){this.position!==e.PositionEnum.NORMAL&&this.position!==e.PositionEnum.FULLSCREEN&&(this.animateToPosition(e.PositionEnum.NORMAL),this.isFullScreen()&&(this.$().css("top",$(window).scrollTop()),this.showBackdrop(),this.component.focus()))},n.hide=function(){var t=this,n=this.$();n.stop(!0).animate({bottom:-n.height()},"fast",(function(){t.position=e.PositionEnum.HIDDEN,t.clear(),m.redraw(),n.hide(),t.hideBackdrop(),t.updateBodyPadding()}))},n.close=function(){this.preventExit()||this.hide()},n.minimize=function(){this.position!==e.PositionEnum.HIDDEN&&(this.animateToPosition(e.PositionEnum.MINIMIZED),this.$().css("top","auto"),this.hideBackdrop())},n.fullScreen=function(){this.position!==e.PositionEnum.HIDDEN&&(this.position=e.PositionEnum.FULLSCREEN,m.redraw(),this.updateHeight(),this.component.focus())},n.exitFullScreen=function(){this.position===e.PositionEnum.FULLSCREEN&&(this.position=e.PositionEnum.NORMAL,m.redraw(),this.updateHeight(),this.component.focus())},n.controlItems=function(){var t=new p.a;return this.position===e.PositionEnum.FULLSCREEN?t.add("exitFullScreen",lt.component({icon:"fas fa-compress",title:app.translator.trans("core.forum.composer.exit_full_screen_tooltip"),onclick:this.exitFullScreen.bind(this)})):(this.position!==e.PositionEnum.MINIMIZED&&(t.add("minimize",lt.component({icon:"fas fa-minus minimize",title:app.translator.trans("core.forum.composer.minimize_tooltip"),onclick:this.minimize.bind(this),itemClassName:"App-backControl"})),t.add("fullScreen",lt.component({icon:"fas fa-expand",title:app.translator.trans("core.forum.composer.full_screen_tooltip"),onclick:this.fullScreen.bind(this)}))),t.add("close",lt.component({icon:"fas fa-times",title:app.translator.trans("core.forum.composer.close_tooltip"),onclick:this.close.bind(this)}))),t},n.initializeHeight=function(){this.height=localStorage.getItem("composerHeight"),this.height||(this.height=this.defaultHeight())},n.defaultHeight=function(){return this.$().height()},n.minimumHeight=function(){return 200},n.maximumHeight=function(){return $(window).height()-$("#header").outerHeight()},n.computedHeight=function(){return this.position===e.PositionEnum.MINIMIZED?"":this.position===e.PositionEnum.FULLSCREEN?$(window).height():Math.max(this.minimumHeight(),Math.min(this.height,this.maximumHeight()))},n.changeHeight=function(t){this.height=t,this.updateHeight(),localStorage.setItem("composerHeight",this.height)},e}(l.a);dt.PositionEnum={HIDDEN:"hidden",NORMAL:"normal",MINIMIZED:"minimized",FULLSCREEN:"fullScreen"};var pt=dt,ht=n(37),ft=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.view=function(){var t=this,e=this.props.notification,n=this.href();return m("a",{className:"Notification Notification--"+e.contentType()+" "+(e.isRead()?"":"unread"),href:n,config:function(t,e){-1===n.indexOf("://")&&m.route.apply(this,arguments),e||$(t).click(this.markAsRead.bind(this))}},!e.isRead()&&C.a.component({className:"Notification-action Button Button--icon Button--link",icon:"fas fa-check",title:app.translator.trans("core.forum.notifications.mark_as_read_tooltip"),onclick:function(e){e.preventDefault(),e.stopPropagation(),t.markAsRead()}}),Object(x.a)(e.fromUser()),Object(v.a)(this.icon(),{className:"Notification-icon"}),m("span",{className:"Notification-content"},this.content()),Object(ht.a)(e.createdAt()),m("div",{className:"Notification-excerpt"},this.excerpt()))},n.icon=function(){},n.href=function(){},n.content=function(){},n.excerpt=function(){},n.markAsRead=function(){this.props.notification.isRead()||(app.session.user.pushAttributes({unreadNotificationCount:app.session.user.unreadNotificationCount()-1}),this.props.notification.save({isRead:!0}))},e}(l.a),mt=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-pencil-alt"},n.href=function(){var t=this.props.notification;return app.route.discussion(t.subject(),t.content().postNumber)},n.content=function(){return app.translator.trans("core.forum.notifications.discussion_renamed_text",{user:this.props.notification.fromUser()})},e}(ft);function gt(t){app.composer.isFullScreen()&&(app.composer.minimize(),t.stopPropagation())}var vt=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){var e=this;t.prototype.init.call(this),this.editor.props.preview=function(t){gt(t),m.route(app.route.post(e.props.post))}},e.initProps=function(e){t.initProps.call(this,e),e.submitLabel=e.submitLabel||app.translator.trans("core.forum.composer_edit.submit_button"),e.confirmExit=e.confirmExit||app.translator.trans("core.forum.composer_edit.discard_confirmation"),e.originalContent=e.originalContent||e.post.content(),e.user=e.user||e.post.user(),e.post.editedContent=e.originalContent},n.headerItems=function(){var e=t.prototype.headerItems.call(this),n=this.props.post;return e.add("title",m("h3",null,Object(v.a)("fas fa-pencil-alt")," ",m("a",{href:app.route.discussion(n.discussion(),n.number()),config:function(t,e){e||($(t).on("click",gt),m.route.apply(this,arguments))}},app.translator.trans("core.forum.composer_edit.post_link",{number:n.number(),discussion:n.discussion().title()})))),e},n.data=function(){return{content:this.content()}},n.onsubmit=function(){this.loading=!0;var t=this.data();this.props.post.save(t).then((function(){return app.composer.hide()}),this.loaded.bind(this))},e}(O),yt={controls:function(t,e){var n=this,i=new p.a;return["user","moderation","destructive"].forEach((function(o){var r=n[o+"Controls"](t,e).toArray();r.length&&(r.forEach((function(t){return i.add(t.itemName,t)})),i.add(o+"Separator",q.a.component()))})),i},userControls:function(t,e){return new p.a},moderationControls:function(t,e){var n=new p.a;return"comment"===t.contentType()&&t.canEdit()&&(t.isHidden()||n.add("edit",C.a.component({icon:"fas fa-pencil-alt",children:app.translator.trans("core.forum.post_controls.edit_button"),onclick:this.editAction.bind(t)}))),n},destructiveControls:function(t,e){var n=new p.a;return"comment"!==t.contentType()||t.isHidden()?("comment"===t.contentType()&&t.canHide()&&n.add("restore",C.a.component({icon:"fas fa-reply",children:app.translator.trans("core.forum.post_controls.restore_button"),onclick:this.restoreAction.bind(t)})),t.canDelete()&&n.add("delete",C.a.component({icon:"fas fa-times",children:app.translator.trans("core.forum.post_controls.delete_forever_button"),onclick:this.deleteAction.bind(t,e)}))):t.canHide()&&n.add("hide",C.a.component({icon:"far fa-trash-alt",children:app.translator.trans("core.forum.post_controls.delete_button"),onclick:this.hideAction.bind(t)})),n},editAction:function(){var t=m.deferred(),e=new vt({post:this});return app.composer.load(e),app.composer.show(),t.resolve(e),t.promise},hideAction:function(){return this.pushAttributes({hiddenAt:new Date,hiddenUser:app.session.user}),this.save({isHidden:!0}).then((function(){return m.redraw()}))},restoreAction:function(){return this.pushAttributes({hiddenAt:null,hiddenUser:null}),this.save({isHidden:!1}).then((function(){return m.redraw()}))},deleteAction:function(t){var e=this;return t&&(t.loading=!0),this.delete().then((function(){var t=e.discussion();t.removePost(e.id()),t.postIds().length||(app.cache.discussionList&&app.cache.discussionList.removeDiscussion(t),app.viewingDiscussion(t)&&app.history.back())})).catch((function(){})).then((function(){t&&(t.loading=!1),m.redraw()}))}},bt=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){var t=this;this.loading=!1,this.subtree=new K.a((function(){return t.props.post.freshness}),(function(){var e=t.props.post.user();return e&&e.freshness}),(function(){return t.controlsOpen}))},n.view=function(){var t,e=this,n=this.attrs();return n.className=this.classes(n.className).join(" "),m("article",n,this.subtree.retain()||(t=yt.controls(e.props.post,e).toArray(),m("div",null,e.content(),m("aside",{className:"Post-actions"},m("ul",null,Object(T.a)(e.actionItems().toArray()),t.length?m("li",null,m(nt.a,{className:"Post-controls",buttonClassName:"Button Button--icon Button--flat",menuClassName:"Dropdown-menu--right",icon:"fas fa-ellipsis-h",onshow:function(){return e.$(".Post-actions").addClass("open")},onhide:function(){return e.$(".Post-actions").removeClass("open")}},t)):"")),m("footer",{className:"Post-footer"},m("ul",null,Object(T.a)(e.footerItems().toArray()))))))},n.config=function(t){var e=this.$(".Post-actions"),n=this.$(".Post-controls");e.toggleClass("open",n.hasClass("open"))},n.attrs=function(){return{}},n.content=function(){return[]},n.classes=function(t){var e=(t||"").split(" ").concat(["Post"]),n=this.props.post.user();return this.loading&&e.push("Post--loading"),n&&n===app.session.user&&e.push("Post--by-actor"),n&&app.current.discussion&&app.current.discussion.attribute("startUserId")==n.id()&&e.push("Post--by-start-user"),e},n.actionItems=function(){return new p.a},n.footerItems=function(){return new p.a},e}(l.a),wt=n(21),xt=n(28),_t=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){var e=this;t.prototype.init.call(this);var n=this.props.user;this.username=m.prop(n.username()||""),this.email=m.prop(n.email()||""),this.isEmailConfirmed=m.prop(n.isEmailConfirmed()||!1),this.setPassword=m.prop(!1),this.password=m.prop(n.password()||""),this.groups={},app.store.all("groups").filter((function(t){return-1===[it.a.GUEST_ID,it.a.MEMBER_ID].indexOf(t.id())})).forEach((function(t){return e.groups[t.id()]=m.prop(-1!==n.groups().indexOf(t))}))},n.className=function(){return"EditUserModal Modal--small"},n.title=function(){return app.translator.trans("core.forum.edit_user.title")},n.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form"},this.fields().toArray()))},n.fields=function(){var t=this,e=new p.a;return e.add("username",m("div",{className:"Form-group"},m("label",null,app.translator.trans("core.forum.edit_user.username_heading")),m("input",{className:"FormControl",placeholder:Object(f.a)(app.translator.trans("core.forum.edit_user.username_label")),bidi:this.username})),40),app.session.user!==this.props.user&&(e.add("email",m("div",{className:"Form-group"},m("label",null,app.translator.trans("core.forum.edit_user.email_heading")),m("div",null,m("input",{className:"FormControl",placeholder:Object(f.a)(app.translator.trans("core.forum.edit_user.email_label")),bidi:this.email})),this.isEmailConfirmed()?"":m("div",null,C.a.component({className:"Button Button--block",children:app.translator.trans("core.forum.edit_user.activate_button"),loading:this.loading,onclick:this.activate.bind(this)}))),30),e.add("password",m("div",{className:"Form-group"},m("label",null,app.translator.trans("core.forum.edit_user.password_heading")),m("div",null,m("label",{className:"checkbox"},m("input",{type:"checkbox",onchange:function(e){t.setPassword(e.target.checked),m.redraw(!0),e.target.checked&&t.$("[name=password]").select(),m.redraw.strategy("none")}}),app.translator.trans("core.forum.edit_user.set_password_label")),this.setPassword()?m("input",{className:"FormControl",type:"password",name:"password",placeholder:Object(f.a)(app.translator.trans("core.forum.edit_user.password_label")),bidi:this.password}):"")),20)),e.add("groups",m("div",{className:"Form-group EditUserModal-groups"},m("label",null,app.translator.trans("core.forum.edit_user.groups_heading")),m("div",null,Object.keys(this.groups).map((function(t){return app.store.getById("groups",t)})).map((function(e){return m("label",{className:"checkbox"},m("input",{type:"checkbox",bidi:t.groups[e.id()],disabled:"1"===t.props.user.id()&&e.id()===it.a.ADMINISTRATOR_ID}),xt.a.component({group:e,label:""})," ",e.nameSingular())})))),10),e.add("submit",m("div",{className:"Form-group"},C.a.component({className:"Button Button--primary",type:"submit",loading:this.loading,children:app.translator.trans("core.forum.edit_user.submit_button")})),-10),e},n.activate=function(){var t=this;this.loading=!0;var e={username:this.username(),isEmailConfirmed:!0};this.props.user.save(e,{errorHandler:this.onerror.bind(this)}).then((function(){t.isEmailConfirmed(!0),t.loading=!1,m.redraw()})).catch((function(){t.loading=!1,m.redraw()}))},n.data=function(){var t=this,e=Object.keys(this.groups).filter((function(e){return t.groups[e]()})).map((function(t){return app.store.getById("groups",t)})),n={username:this.username(),relationships:{groups:e}};return app.session.user!==this.props.user&&(n.email=this.email()),this.setPassword()&&(n.password=this.password()),n},n.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0,this.props.user.save(this.data(),{errorHandler:this.onerror.bind(this)}).then(this.hide.bind(this)).catch((function(){e.loading=!1,m.redraw()}))},e}(H.a);function Nt(t,e,n){var i=this;if(!e){var o=function(){var e=$(t),n=$("#header"),o=$("#footer"),r=e.find("> ul");$(window).off(".affix"),r.removeClass("affix affix-top affix-bottom").removeData("bs.affix"),e.outerHeight(!0)>$(window).height()-n.outerHeight(!0)||r.affix({offset:{top:function(){return e.offset().top-n.outerHeight(!0)-parseInt(e.css("margin-top"),10)},bottom:function(){return i.bottom=o.outerHeight(!0)}}})};$(window).on("resize",o).resize(),n.onunload=function(){$(window).off("resize",o)}}}var kt=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.user=null,this.bodyClass="App--user"},n.view=function(){return m("div",{className:"UserPage"},this.user?[St.component({user:this.user,className:"Hero UserHero",editable:this.user.canEdit()||this.user===app.session.user,controlsButtonClassName:"Button"}),m("div",{className:"container"},m("div",{className:"sideNavContainer"},m("nav",{className:"sideNav UserPage-nav",config:Nt},m("ul",null,Object(T.a)(this.sidebarItems().toArray()))),m("div",{className:"sideNavOffset UserPage-content"},this.content())))]:[d.a.component({className:"LoadingIndicator--block"})])},n.content=function(){},n.show=function(t){this.user=t,app.setTitle(t.displayName()),m.redraw()},n.loadUser=function(t){var e=this,n=t.toLowerCase();app.preloadedApiDocument(),app.store.all("users").some((function(i){if((i.username().toLowerCase()===n||i.id()===t)&&i.joinTime())return e.show(i),!0})),this.user||app.store.find("users",t).then(this.show.bind(this))},n.sidebarItems=function(){var t=new p.a;return t.add("nav",rt.a.component({children:this.navItems().toArray(),className:"App-titleControl",buttonClassName:"Button"})),t},n.navItems=function(){var t=new p.a,e=this.user;return t.add("posts",b.a.component({href:app.route("user.posts",{username:e.username()}),children:[app.translator.trans("core.forum.user.posts_link"),m("span",{className:"Button-badge"},e.commentCount())],icon:"far fa-comment"}),100),t.add("discussions",b.a.component({href:app.route("user.discussions",{username:e.username()}),children:[app.translator.trans("core.forum.user.discussions_link"),m("span",{className:"Button-badge"},e.discussionCount())],icon:"fas fa-bars"}),90),app.session.user===e&&(t.add("separator",q.a.component(),-90),t.add("settings",b.a.component({href:app.route("settings"),children:app.translator.trans("core.forum.user.settings_link"),icon:"fas fa-cog"}),-100)),t},e}(P),Tt={controls:function(t,e){var n=this,i=new p.a;return["user","moderation","destructive"].forEach((function(o){var r=n[o+"Controls"](t,e).toArray();r.length&&(r.forEach((function(t){return i.add(t.itemName,t)})),i.add(o+"Separator",q.a.component()))})),i},userControls:function(){return new p.a},moderationControls:function(t){var e=new p.a;return t.canEdit()&&e.add("edit",C.a.component({icon:"fas fa-pencil-alt",children:app.translator.trans("core.forum.user_controls.edit_button"),onclick:this.editAction.bind(this,t)})),e},destructiveControls:function(t){var e=new p.a;return"1"!==t.id()&&t.canDelete()&&e.add("delete",C.a.component({icon:"fas fa-times",children:app.translator.trans("core.forum.user_controls.delete_button"),onclick:this.deleteAction.bind(this,t)})),e},deleteAction:function(t){var e=this;confirm(app.translator.trans("core.forum.user_controls.delete_confirmation"))&&t.delete().then((function(){e.showDeletionAlert(t,"success"),app.current instanceof kt&&app.current.user===t?app.history.back():window.location.reload()})).catch((function(){return e.showDeletionAlert(t,"error")}))},showDeletionAlert:function(t,e){var n=t.data.attributes,i=n.username,o=n.email,r={success:"core.forum.user_controls.delete_success_message",error:"core.forum.user_controls.delete_error_message"}[e];app.alerts.show(new D.a({type:e,children:app.translator.trans(r,{username:i,email:o})}))},editAction:function(t){app.modal.show(new _t({user:t}))}},Ct=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){this.loading=!1,this.isDraggedOver=!1},e.initProps=function(e){t.initProps.call(this,e),e.className=e.className||""},n.view=function(){var t=this.props.user;return m("div",{className:"AvatarEditor Dropdown "+this.props.className+(this.loading?" loading":"")+(this.isDraggedOver?" dragover":"")},Object(x.a)(t),m("a",{className:t.avatarUrl()?"Dropdown-toggle":"Dropdown-toggle AvatarEditor--noAvatar",title:app.translator.trans("core.forum.user.avatar_upload_tooltip"),"data-toggle":"dropdown",onclick:this.quickUpload.bind(this),ondragover:this.enableDragover.bind(this),ondragenter:this.enableDragover.bind(this),ondragleave:this.disableDragover.bind(this),ondragend:this.disableDragover.bind(this),ondrop:this.dropUpload.bind(this)},this.loading?d.a.component():t.avatarUrl()?Object(v.a)("fas fa-pencil-alt"):Object(v.a)("fas fa-plus-circle")),m("ul",{className:"Dropdown-menu Menu"},Object(T.a)(this.controlItems().toArray())))},n.controlItems=function(){var t=new p.a;return t.add("upload",C.a.component({icon:"fas fa-upload",children:app.translator.trans("core.forum.user.avatar_upload_button"),onclick:this.openPicker.bind(this)})),t.add("remove",C.a.component({icon:"fas fa-times",children:app.translator.trans("core.forum.user.avatar_remove_button"),onclick:this.remove.bind(this)})),t},n.enableDragover=function(t){t.preventDefault(),t.stopPropagation(),this.isDraggedOver=!0},n.disableDragover=function(t){t.preventDefault(),t.stopPropagation(),this.isDraggedOver=!1},n.dropUpload=function(t){t.preventDefault(),t.stopPropagation(),this.isDraggedOver=!1,this.upload(t.dataTransfer.files[0])},n.quickUpload=function(t){this.props.user.avatarUrl()||(t.preventDefault(),t.stopPropagation(),this.openPicker())},n.openPicker=function(){var t=this;if(!this.loading){this.props.user;$('<input type="file">').appendTo("body").hide().click().on("input",(function(e){t.upload($(e.target)[0].files[0])}))}},n.upload=function(t){if(!this.loading){var e=this.props.user,n=new FormData;n.append("avatar",t),this.loading=!0,m.redraw(),app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/users/"+e.id()+"/avatar",serialize:function(t){return t},data:n}).then(this.success.bind(this),this.failure.bind(this))}},n.remove=function(){var t=this.props.user;this.loading=!0,m.redraw(),app.request({method:"DELETE",url:app.forum.attribute("apiUrl")+"/users/"+t.id()+"/avatar"}).then(this.success.bind(this),this.failure.bind(this))},n.success=function(t){app.store.pushPayload(t),delete this.props.user.avatarColor,this.loading=!1,m.redraw()},n.failure=function(t){this.loading=!1,m.redraw()},e}(l.a),St=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.view=function(){var t=this.props.user,e=Tt.controls(t,this).toArray(),n=t.color(),i=t.badges().toArray();return m("div",{className:"UserCard "+(this.props.className||""),style:n?{backgroundColor:n}:""},m("div",{className:"darkenBackground"},m("div",{className:"container"},e.length?nt.a.component({children:e,className:"UserCard-controls App-primaryControl",menuClassName:"Dropdown-menu--right",buttonClassName:this.props.controlsButtonClassName,label:app.translator.trans("core.forum.user_controls.button"),icon:"fas fa-ellipsis-v"}):"",m("div",{className:"UserCard-profile"},m("h2",{className:"UserCard-identity"},this.props.editable?[Ct.component({user:t,className:"UserCard-avatar"}),Object(_.a)(t)]:m("a",{href:app.route.user(t),config:m.route},m("div",{className:"UserCard-avatar"},Object(x.a)(t)),Object(_.a)(t))),i.length?m("ul",{className:"UserCard-badges badges"},Object(T.a)(i)):"",m("ul",{className:"UserCard-info"},Object(T.a)("UID：\t\t"+t.id()),Object(T.a)(this.infoItems().toArray()))))))},n.infoItems=function(){var t=new p.a,e=this.props.user,n=e.lastSeenAt();if(n){var i=e.isOnline();t.add("lastSeen",m("span",{className:"UserCard-lastSeen"+(i?" online":"")},i?[Object(v.a)("fas fa-circle")," ",app.translator.trans("core.forum.user.online_text")]:[Object(v.a)("far fa-clock")," ",Object(wt.a)(n)]))}return t.add("joined",app.translator.trans("core.forum.user.joined_date_text",{ago:Object(wt.a)(e.joinTime())})),t},e}(l.a),Ot=n(61),Dt=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){this.cardVisible=!1},n.view=function(){var t=this.props.post,e=t.user();if(!e)return m("div",{className:"PostUser"},m("h3",null,Object(x.a)(e,{className:"PostUser-avatar"})," ",Object(_.a)(e)));var n="";return!t.isHidden()&&this.cardVisible&&(n=St.component({user:e,className:"UserCard--popover",controlsButtonClassName:"Button Button--icon Button--flat"})),m("div",{className:"PostUser"},m("h3",null,m("a",{href:app.route.user(e),config:m.route},Object(x.a)(e,{className:"PostUser-avatar"}),Object(Ot.a)(e),Object(_.a)(e))),m("ul",{className:"PostUser-badges badges"},Object(T.a)(e.badges().toArray())),n)},n.config=function(t){var e,n=this;t||this.$().on("mouseover","h3 a, .UserCard",(function(){clearTimeout(e),e=setTimeout(n.showCard.bind(n),500)})).on("mouseout","h3 a, .UserCard",(function(){clearTimeout(e),e=setTimeout(n.hideCard.bind(n),250)}))},n.showCard=function(){var t=this;this.cardVisible=!0,m.redraw(),setTimeout((function(){return t.$(".UserCard").addClass("in")}))},n.hideCard=function(){var t=this;this.$(".UserCard").removeClass("in").one("transitionend webkitTransitionEnd oTransitionEnd",(function(){t.cardVisible=!1,m.redraw()}))},e}(l.a),jt=n(62),Et=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.view=function(){var t=this.props.post,e=t.createdAt(),n=this.getPermalink(t),i="ontouchstart"in document.documentElement;return m("div",{className:"Dropdown PostMeta"},m("a",{className:"Dropdown-toggle",onclick:function(){var t=this;setTimeout((function(){return $(t).parent().find(".PostMeta-permalink").select()})),m.redraw.strategy("none")},"data-toggle":"dropdown"},Object(ht.a)(e)),m("div",{className:"Dropdown-menu dropdown-menu"},m("span",{className:"PostMeta-number"},app.translator.trans("core.forum.post.number_tooltip",{number:t.number()}))," ",m("span",{className:"PostMeta-time"},Object(jt.a)(e))," ",m("span",{className:"PostMeta-ip"},t.data.attributes.ipAddress),i?m("a",{className:"Button PostMeta-permalink",href:n},n):m("input",{className:"FormControl PostMeta-permalink",value:n,onclick:function(t){return t.stopPropagation()}})))},n.getPermalink=function(t){return window.location.origin+app.route.post(t)},e}(l.a),Pt=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){this.shouldUpdateTooltip=!1,this.oldEditedInfo=null},n.view=function(){var t=this.props.post,e=t.editedUser(),n=Object(f.a)(app.translator.trans("core.forum.post.edited_tooltip",{user:e,ago:Object(wt.a)(t.editedAt())}));return n!==this.oldEditedInfo&&(this.shouldUpdateTooltip=!0,this.oldEditedInfo=n),m("span",{className:"PostEdited",title:n},app.translator.trans("core.forum.post.edited_text"))},n.config=function(t){this.shouldUpdateTooltip&&(this.$().tooltip("destroy").tooltip(),this.shouldUpdateTooltip=!1)},e}(l.a),Mt=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){var e=this;t.prototype.init.call(this),this.revealContent=!1,this.postUser=new Dt({post:this.props.post}),this.subtree.check((function(){return e.postUser.cardVisible}),(function(){return e.isEditing()}))},n.content=function(){return t.prototype.content.call(this).concat([m("header",{className:"Post-header"},m("ul",Object(T.a)(this.headerItems().toArray()))),m("div",{className:"Post-body"},this.isEditing()?m("div",{className:"Post-preview",config:this.configPreview.bind(this)}):m.trust(this.props.post.contentHtml()))])},n.config=function(e,n){t.prototype.config.apply(this,arguments);var i=this.isEditing()?"":this.props.post.contentHtml();n.contentHtml!==i&&this.$(".Post-body script").each((function(){eval.call(window,$(this).text())})),n.contentHtml=i},n.isEditing=function(){return app.composer.component instanceof vt&&app.composer.component.props.post===this.props.post},n.attrs=function(){var e=this.props.post,n=t.prototype.attrs.call(this);return n.className=(n.className||"")+" "+Object(h.a)({CommentPost:!0,"Post--hidden":e.isHidden(),"Post--edited":e.isEdited(),revealContent:this.revealContent,editing:this.isEditing()}),n},n.configPreview=function(t,e,n){if(!e){var i,o=function(){var e=app.composer.component.content();i!==e&&(i=e,s9e.TextFormatter.preview(i||"",t))};o();var r=setInterval(o,50);n.onunload=function(){return clearInterval(r)}}},n.toggleContent=function(){this.revealContent=!this.revealContent},n.headerItems=function(){var t=new p.a,e=this.props.post,n={post:e};return t.add("user",this.postUser.render(),100),t.add("meta",Et.component(n)),e.isEdited()&&!e.isHidden()&&t.add("edited",Pt.component(n)),e.isHidden()&&t.add("toggle",C.a.component({className:"Button Button--default Button--more",icon:"fas fa-ellipsis-h",onclick:this.toggleContent.bind(this)})),t},e}(bt),At=n(26),It=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.attrs=function(){var e=t.prototype.attrs.call(this);return e.className=(e.className||"")+" EventPost "+Object(At.ucfirst)(this.props.post.contentType())+"Post",e},n.content=function(){var e=this.props.post.user(),n=Object(_.a)(e),i=Object(a.a)(this.descriptionData(),{user:e,username:e?m("a",{className:"EventPost-user",href:app.route.user(e),config:m.route},n):n});return t.prototype.content.call(this).concat([Object(v.a)(this.icon(),{className:"EventPost-icon"}),m("div",{class:"EventPost-info"},this.description(i))])},n.icon=function(){return""},n.description=function(t){return app.translator.transChoice(this.descriptionKey(),t.count,t)},n.descriptionKey=function(){return""},n.descriptionData=function(){return{}},e}(bt),$t=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-pencil-alt"},n.description=function(t){var e=app.translator.trans("core.forum.post_stream.discussion_renamed_text",t),n=app.translator.trans("core.forum.post_stream.discussion_renamed_old_tooltip",t);return m("span",{title:Object(f.a)(n)},e)},n.descriptionData=function(){var t=this.props.post,e=t.content()[0],n=t.content()[1];return{old:e,new:m("strong",{className:"DiscussionRenamedPost-new"},n)}},e}(It),Rt=n(32),Lt=n(63),Ht=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.view=function(){var t=this.props.discussion,e=this.props.lastPost&&t.replyCount(),n=t[e?"lastPostedUser":"user"](),i=t[e?"lastPostedAt":"createdAt"]();return m("span",null,e?Object(v.a)("fas fa-reply"):""," ",app.translator.trans("core.forum.discussion_list."+(e?"replied":"started")+"_text",{user:n,ago:Object(ht.a)(i)}))},e}(l.a),Bt=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.view=function(){var t=this.props.post,e=t.user(),n=Object(y.a)(t.contentPlain(),this.props.highlight,300);return m("a",{className:"PostPreview",href:app.route.post(t),config:m.route,onclick:this.props.onclick},m("span",{className:"PostPreview-content"},Object(x.a)(e),Object(_.a)(e)," ",m("span",{className:"PostPreview-excerpt"},n)))},e}(l.a);function Ut(t){var e,n,i,o,r=$(t),s=!1,a=!1,u=0,c=function(t,e){void 0===e&&(e={}),e.duration=e.duration||"fast",e.step=function(t){$(this).css("transform","translate("+t+"px, 0)")},r.find(".Slidable-content").animate({"background-position-x":t},e)},l=function(){c(0,{complete:function(){r.removeClass("sliding"),e.hide(),n.hide(),a=!1}})};return r.find(".Slidable-content").on("touchstart",(function(t){e=r.find(".Slidable-underneath--left:not(.disabled)"),n=r.find(".Slidable-underneath--right:not(.disabled)"),i=t.originalEvent.targetTouches[0].clientX,o=t.originalEvent.targetTouches[0].clientY,s=!0,u=0})).on("touchmove",(function(t){var c=t.originalEvent.targetTouches[0].clientX,l=t.originalEvent.targetTouches[0].clientY;if(s&&Math.abs(c-i)>Math.abs(l-o)&&(a=!0),s=!1,a){u=c-i;var d=function(t,e){if(t.length){var n="left"===e?u>0:u<0;n&&t.hasClass("Slidable-underneath--elastic")&&(u-=.5*u),t.toggle(n);var i=Math.max(0,Math.min(1,(Math.abs(u)-25)/50));t.find(".icon").css("transform","scale("+i+")")}else u=Math["left"===e?"min":"max"](0,u)};d(e,"left"),d(n,"right"),$(this).css("transform","translate("+u+"px, 0)"),$(this).css("background-position-x",u+"px"),r.toggleClass("sliding",!!u),t.preventDefault()}})).on("touchend",(function(){var t=function(t){t.click(),t.hasClass("Slidable-underneath--elastic")?l():c((u>0?1:-1)*r.width())};n.length&&u<-50?t(n):e.length&&u>50?t(e):l(),s=!1,a=!1})),{reset:l}}var Ft=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){var t=this;this.subtree=new K.a((function(){return t.props.discussion.freshness}),(function(){var t=app.session.user&&app.session.user.markedAllAsReadAt();return t&&t.getTime()}),(function(){return t.active()}))},n.attrs=function(){return{className:Object(h.a)(["DiscussionListItem",this.active()?"active":"",this.props.discussion.isHidden()?"DiscussionListItem--hidden":""])}},n.view=function(){var t=this.subtree.retain();if(t)return t;var e=this.props.discussion,n=e.user(),i=e.isUnread(),o=e.isRead(),r=!this.showRepliesCount()&&i,s=0,a=z.controls(e,this).toArray(),u=this.attrs();if(this.props.params.q){var c=e.mostRelevantPost();c&&(s=c.number());var l=this.props.params.q;this.highlightRegExp=new RegExp(l+"|"+l.trim().replace(/\s+/g,"|"),"gi")}else s=Math.min(e.lastPostNumber(),(e.lastReadPostNumber()||0)+1);return m("div",u,a.length?nt.a.component({icon:"fas fa-ellipsis-v",children:a,className:"DiscussionListItem-controls",buttonClassName:"Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right"}):"",m("a",{className:"Slidable-underneath Slidable-underneath--left Slidable-underneath--elastic"+(i?"":" disabled"),onclick:this.markAsRead.bind(this)},Object(v.a)("fas fa-check")),m("div",{className:"DiscussionListItem-content Slidable-content"+(i?" unread":"")+(o?" read":"")},m("a",{href:n?app.route.user(n):"#",className:"DiscussionListItem-author",title:Object(f.a)(app.translator.trans("core.forum.discussion_list.started_text",{user:n,ago:Object(wt.a)(e.createdAt())})),config:function(t){$(t).tooltip({placement:"right"}),m.route.apply(this,arguments)}},Object(x.a)(n,{title:""})),m("ul",{className:"DiscussionListItem-badges badges"},Object(T.a)(e.badges().toArray())),m("a",{href:app.route.discussion(e,s),config:m.route,className:"DiscussionListItem-main"},m("h3",{className:"DiscussionListItem-title"},Object(y.a)(e.title(),this.highlightRegExp)),m("ul",{className:"DiscussionListItem-info"},Object(T.a)(this.infoItems().toArray()))),m("span",{className:"DiscussionListItem-count",onclick:this.markAsRead.bind(this),title:r?app.translator.trans("core.forum.discussion_list.mark_as_read_tooltip"):""},Object(Lt.a)(e[r?"unreadCount":"replyCount"]()))))},n.config=function(t){if(!t&&"ontouchstart"in window){var e=Ut(this.$().addClass("Slidable"));this.$(".DiscussionListItem-controls").on("hidden.bs.dropdown",(function(){return e.reset()}))}},n.active=function(){var t=m.route.param("id");return t&&t.split("-")[0]===this.props.discussion.id()},n.showFirstPost=function(){return-1!==["newest","oldest"].indexOf(this.props.params.sort)},n.showRepliesCount=function(){return"replies"===this.props.params.sort},n.markAsRead=function(){var t=this.props.discussion;t.isUnread()&&(t.save({lastReadPostNumber:t.lastPostNumber()}),m.redraw())},n.infoItems=function(){var t=new p.a;if(this.props.params.q){var e=this.props.discussion.mostRelevantPost()||this.props.discussion.firstPost();if(e&&"comment"===e.contentType()){var n=Object(y.a)(e.contentPlain(),this.highlightRegExp,175);t.add("excerpt",n,-100)}}else t.add("terminalPost",Ht.component({discussion:this.props.discussion,lastPost:!this.showFirstPost()}));return t},e}(l.a),Yt=n(43),qt=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){this.loading=!0,this.moreResults=!1,this.discussions=[],this.refresh()},n.view=function(){var t,e=this.props.params;if(this.loading?t=d.a.component():this.moreResults&&(t=C.a.component({children:app.translator.trans("core.forum.discussion_list.load_more_button"),className:"Button",onclick:this.loadMore.bind(this)})),0===this.discussions.length&&!this.loading){var n=app.translator.trans("core.forum.discussion_list.empty_text");return m("div",{className:"DiscussionList"},Yt.a.component({text:n}))}return m("div",{className:"DiscussionList"+(this.props.params.q?" DiscussionList--searchResults":"")},m("ul",{className:"DiscussionList-discussions"},this.discussions.map((function(t){return m("li",{key:t.id(),"data-id":t.id()},Ft.component({discussion:t,params:e}))}))),m("div",{className:"DiscussionList-loadMore"},t))},n.requestParams=function(){var t={include:["user","lastPostedUser"],filter:{}};return t.sort=this.sortMap()[this.props.params.sort],this.props.params.q&&(t.filter.q=this.props.params.q,t.include.push("mostRelevantPost","mostRelevantPost.user")),t},n.sortMap=function(){var t={};return this.props.params.q&&(t.relevance=""),t.latest="-lastPostedAt",t.top="-commentCount",t.newest="-createdAt",t.oldest="createdAt",t},n.refresh=function(t){var e=this;return void 0===t&&(t=!0),t&&(this.loading=!0,this.discussions=[]),this.loadResults().then((function(t){e.discussions=[],e.parseResults(t)}),(function(){e.loading=!1,m.redraw()}))},n.loadResults=function(t){var e=app.preloadedApiDocument();if(e)return m.deferred().resolve(e).promise;var n=this.requestParams();return n.page={offset:t},n.include=n.include.join(","),app.store.find("discussions",n)},n.loadMore=function(){this.loading=!0,this.loadResults(this.discussions.length).then(this.parseResults.bind(this))},n.parseResults=function(t){return[].push.apply(this.discussions,t),this.loading=!1,this.moreResults=!!t.payload.links.next,m.lazyRedraw(),t},n.removeDiscussion=function(t){var e=this.discussions.indexOf(t);-1!==e&&this.discussions.splice(e,1)},n.addDiscussion=function(t){this.discussions.unshift(t)},e}(l.a),Wt=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){this.hidden=localStorage.getItem("welcomeHidden")},n.view=function(){var t=this;if(this.hidden)return m("div",null);return m("header",{className:"Hero WelcomeHero"},m("div",{class:"container"},C.a.component({icon:"fas fa-times",onclick:function(){t.$().slideUp(t.hide.bind(t))},className:"Hero-close Button Button--icon Button--link"}),m("div",{className:"containerNarrow"},m("h2",{className:"Hero-title"},app.forum.attribute("welcomeTitle")),m("div",{className:"Hero-subtitle"},m.trust(app.forum.attribute("welcomeMessage"))))))},n.hide=function(){localStorage.setItem("welcomeHidden","true"),this.hidden=!0},e}(l.a),zt=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.title=m.prop("")},e.initProps=function(e){t.initProps.call(this,e),e.placeholder=e.placeholder||Object(f.a)(app.translator.trans("core.forum.composer_discussion.body_placeholder")),e.submitLabel=e.submitLabel||app.translator.trans("core.forum.composer_discussion.submit_button"),e.confirmExit=e.confirmExit||Object(f.a)(app.translator.trans("core.forum.composer_discussion.discard_confirmation")),e.titlePlaceholder=e.titlePlaceholder||Object(f.a)(app.translator.trans("core.forum.composer_discussion.title_placeholder")),e.className="ComposerBody--discussion"},n.headerItems=function(){var e=t.prototype.headerItems.call(this);return e.add("title",m("h3",null,app.translator.trans("core.forum.composer_discussion.title")),100),e.add("discussionTitle",m("h3",null,m("input",{className:"FormControl",value:this.title(),oninput:m.withAttr("value",this.title),placeholder:this.props.titlePlaceholder,disabled:!!this.props.disabled,onkeydown:this.onkeydown.bind(this)}))),e},n.onkeydown=function(t){13===t.which&&(t.preventDefault(),this.editor.setSelectionRange(0,0)),m.redraw.strategy("none")},n.preventExit=function(){return(this.title()||this.content())&&this.props.confirmExit},n.data=function(){return{title:this.title(),content:this.content()}},n.onsubmit=function(){this.loading=!0;var t=this.data();app.store.createRecord("discussions").save(t).then((function(t){app.composer.hide(),app.cache.discussionList.refresh(),m.route(app.route.discussion(t))}),this.loaded.bind(this))},e}(O),Gt=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),app.previous instanceof tt&&(this.lastDiscussion=app.previous.discussion),app.previous instanceof e&&(app.cache.discussionList=null);var n=this.params();app.cache.discussionList&&Object.keys(n).some((function(t){if(app.cache.discussionList.props.params[t]!==n[t])return app.cache.discussionList=null,!0})),app.cache.discussionList||(app.cache.discussionList=new qt({params:n})),app.history.push("index",app.translator.trans("core.forum.header.back_to_index_tooltip")),this.bodyClass="App--index"},n.onunload=function(){app.cache.scrollTop=$(window).scrollTop()},n.view=function(){return m("div",{className:"IndexPage"},this.hero(),m("div",{className:"container"},m("div",{className:"sideNavContainer"},m("nav",{className:"IndexPage-nav sideNav"},m("ul",null,Object(T.a)(this.sidebarItems().toArray()))),m("div",{className:"IndexPage-results sideNavOffset"},m("div",{className:"IndexPage-toolbar"},m("ul",{className:"IndexPage-toolbar-view"},Object(T.a)(this.viewItems().toArray())),m("ul",{className:"IndexPage-toolbar-action"},Object(T.a)(this.actionItems().toArray()))),app.cache.discussionList.render()))))},n.config=function(e,n){if(t.prototype.config.apply(this,arguments),!e){Object(Rt.extend)(n,"onunload",(function(){return $("#app").css("min-height","")})),app.setTitle(""),app.setTitleCount(0);var i=app.cache.heroHeight,o=app.cache.heroHeight=this.$(".Hero").outerHeight()||0,r=app.cache.scrollTop;$("#app").css("min-height",$(window).height()+o);var s=function(){return $(window).scrollTop(r-i+o)};if(s(),setTimeout(s,1),this.lastDiscussion){var a=this.$('.DiscussionListItem[data-id="'+this.lastDiscussion.id()+'"]');if(a.length){var u=$("#header").outerHeight(),c=$(window).height(),l=a.offset().top,d=l+a.outerHeight();(l<r+u||d>r+c)&&$(window).scrollTop(l-u)}}}},n.hero=function(){return Wt.component()},n.sidebarItems=function(){var t=new p.a,e=app.forum.attribute("canStartDiscussion")||!app.session.user;return t.add("newDiscussion",C.a.component({children:app.translator.trans(e?"core.forum.index.start_discussion_button":"core.forum.index.cannot_start_discussion_button"),icon:"fas fa-edit",className:"Button Button--primary IndexPage-newDiscussion",itemClassName:"App-primaryControl",onclick:this.newDiscussionAction.bind(this),disabled:!e})),t.add("nav",rt.a.component({children:this.navItems(this).toArray(),buttonClassName:"Button",className:"App-titleControl"})),t},n.navItems=function(){var t=new p.a,e=this.stickyParams();return t.add("allDiscussions",b.a.component({href:app.route("index",e),children:app.translator.trans("core.forum.index.all_discussions_link"),icon:"far fa-comments"}),100),t},n.viewItems=function(){var t=this,e=new p.a,n=app.cache.discussionList.sortMap(),i={};for(var o in n)i[o]=app.translator.trans("core.forum.index_sort."+o+"_button");return e.add("sort",nt.a.component({buttonClassName:"Button",label:i[this.params().sort]||Object.keys(n).map((function(t){return i[t]}))[0],children:Object.keys(i).map((function(e){var o=i[e],r=(t.params().sort||Object.keys(n)[0])===e;return C.a.component({children:o,icon:!r||"fas fa-check",onclick:t.changeSort.bind(t,e),active:r})}))})),e},n.actionItems=function(){var t=new p.a;return t.add("refresh",C.a.component({title:app.translator.trans("core.forum.index.refresh_tooltip"),icon:"fas fa-sync",className:"Button Button--icon",onclick:function(){app.cache.discussionList.refresh(),app.session.user&&(app.store.find("users",app.session.user.id()),m.redraw())}})),app.session.user&&t.add("markAllAsRead",C.a.component({title:app.translator.trans("core.forum.index.mark_all_as_read_tooltip"),icon:"fas fa-check",className:"Button Button--icon",onclick:this.markAllAsRead.bind(this)})),t},n.searching=function(){return this.params().q},n.clearSearch=function(){var t=this.params();delete t.q,m.route(app.route(this.props.routeName,t))},n.changeSort=function(t){var e=this.params();t===Object.keys(app.cache.discussionList.sortMap())[0]?delete e.sort:e.sort=t,m.route(app.route(this.props.routeName,e))},n.stickyParams=function(){return{sort:m.route.param("sort"),q:m.route.param("q")}},n.params=function(){var t=this.stickyParams();return t.filter=m.route.param("filter"),t},n.newDiscussionAction=function(){var t=m.deferred();if(app.session.user){var e=new zt({user:app.session.user});app.composer.load(e),app.composer.show(),t.resolve(e)}else t.reject(),app.modal.show(new Y);return t.promise},n.markAllAsRead=function(){confirm(app.translator.trans("core.forum.index.mark_all_as_read_confirmation"))&&app.session.user.save({markedAllAsReadAt:new Date})},e}(P),Vt=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.loading=!0,this.moreResults=!1,this.posts=[],this.loadLimit=20,this.loadUser(m.route.param("username"))},n.content=function(){return 0!==this.posts.length||this.loading?(this.loading?t=d.a.component():this.moreResults&&(t=m("div",{className:"PostsUserPage-loadMore"},C.a.component({children:app.translator.trans("core.forum.user.posts_load_more_button"),className:"Button",onclick:this.loadMore.bind(this)}))),m("div",{className:"PostsUserPage"},m("ul",{className:"PostsUserPage-list"},this.posts.map((function(t){return m("li",null,m("div",{className:"PostsUserPage-discussion"},app.translator.trans("core.forum.user.in_discussion_text",{discussion:m("a",{href:app.route.post(t),config:m.route},t.discussion().title())})),Mt.component({post:t}))}))),m("div",{className:"PostsUserPage-loadMore"},t))):m("div",{className:"PostsUserPage"},m(Yt.a,{text:app.translator.trans("core.forum.user.posts_empty_text")}));var t},n.show=function(e){t.prototype.show.call(this,e),this.refresh()},n.refresh=function(){this.loading=!0,this.posts=[],m.lazyRedraw(),this.loadResults().then(this.parseResults.bind(this))},n.loadResults=function(t){return app.store.find("posts",{filter:{user:this.user.id(),type:"comment"},page:{offset:t,limit:this.loadLimit},sort:"-createdAt"})},n.loadMore=function(){this.loading=!0,this.loadResults(this.posts.length).then(this.parseResults.bind(this))},n.parseResults=function(t){return this.loading=!1,[].push.apply(this.posts,t),this.moreResults=t.length>=this.loadLimit,m.redraw(),t},e}(kt),Zt=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.loadUser(m.route.param("username"))},n.content=function(){return m("div",{className:"DiscussionsUserPage"},qt.component({params:{q:"author:"+this.user.username(),sort:"newest"}}))},e}(kt),Kt=n(30),Xt=n(23),Jt=n(38),Qt=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){var t=this;this.methods=this.notificationMethods().toArray(),this.inputs={},this.types=this.notificationTypes().toArray(),this.types.forEach((function(e){t.methods.forEach((function(n){var i=t.preferenceKey(e.name,n.name),o=t.props.user.preferences()[i];t.inputs[i]=new Jt.a({state:!!o,disabled:void 0===o,onchange:function(){return t.toggle([i])}})}))}))},n.view=function(){var t=this;return m("table",{className:"NotificationGrid"},m("thead",null,m("tr",null,m("td",null),this.methods.map((function(e){return m("th",{className:"NotificationGrid-groupToggle",onclick:t.toggleMethod.bind(t,e.name)},Object(v.a)(e.icon)," ",e.label)})))),m("tbody",null,this.types.map((function(e){return m("tr",null,m("td",{className:"NotificationGrid-groupToggle",onclick:t.toggleType.bind(t,e.name)},Object(v.a)(e.icon)," ",e.label),t.methods.map((function(n){return m("td",{className:"NotificationGrid-checkbox"},t.inputs[t.preferenceKey(e.name,n.name)].render())})))}))))},n.config=function(t){t||(this.$("thead .NotificationGrid-groupToggle").bind("mouseenter mouseleave",(function(t){var e=parseInt($(this).index(),10)+1;$(this).parents("table").find("td:nth-child("+e+")").toggleClass("highlighted","mouseenter"===t.type)})),this.$("tbody .NotificationGrid-groupToggle").bind("mouseenter mouseleave",(function(t){$(this).parent().find("td").toggleClass("highlighted","mouseenter"===t.type)})))},n.toggle=function(t){var e=this,n=this.props.user,i=n.preferences(),o=!i[t[0]];t.forEach((function(t){var n=e.inputs[t];n.loading=!0,i[t]=n.props.state=o})),m.redraw(),n.save({preferences:i}).then((function(){t.forEach((function(t){return e.inputs[t].loading=!1})),m.redraw()}))},n.toggleMethod=function(t){var e=this,n=this.types.map((function(n){return e.preferenceKey(n.name,t)})).filter((function(t){return!e.inputs[t].props.disabled}));this.toggle(n)},n.toggleType=function(t){var e=this,n=this.methods.map((function(n){return e.preferenceKey(t,n.name)})).filter((function(t){return!e.inputs[t].props.disabled}));this.toggle(n)},n.preferenceKey=function(t,e){return"notify_"+t+"_"+e},n.notificationMethods=function(){var t=new p.a;return t.add("alert",{name:"alert",icon:"fas fa-bell",label:app.translator.trans("core.forum.settings.notify_by_web_heading")}),t.add("email",{name:"email",icon:"far fa-envelope",label:app.translator.trans("core.forum.settings.notify_by_email_heading")}),t},n.notificationTypes=function(){var t=new p.a;return t.add("discussionRenamed",{name:"discussionRenamed",icon:"fas fa-pencil-alt",label:app.translator.trans("core.forum.settings.notify_discussion_renamed_label")}),t},e}(l.a),te=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.className=function(){return"ChangePasswordModal Modal--small"},n.title=function(){return app.translator.trans("core.forum.change_password.title")},n.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",{className:"helpText"},app.translator.trans("core.forum.change_password.text")),m("div",{className:"Form-group"},C.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading,children:app.translator.trans("core.forum.change_password.send_button")}))))},n.onsubmit=function(t){t.preventDefault(),this.loading=!0,app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/forgot",data:{email:app.session.user.email()}}).then(this.hide.bind(this),this.loaded.bind(this))},e}(H.a),ee=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.success=!1,this.email=m.prop(app.session.user.email()),this.password=m.prop("")},n.className=function(){return"ChangeEmailModal Modal--small"},n.title=function(){return app.translator.trans("core.forum.change_email.title")},n.content=function(){return this.success?m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",{className:"helpText"},app.translator.trans("core.forum.change_email.confirmation_message",{email:m("strong",null,this.email())})),m("div",{className:"Form-group"},m(C.a,{className:"Button Button--primary Button--block",onclick:this.hide.bind(this)},app.translator.trans("core.forum.change_email.dismiss_button"))))):m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m("input",{type:"email",name:"email",className:"FormControl",placeholder:app.session.user.email(),bidi:this.email,disabled:this.loading})),m("div",{className:"Form-group"},m("input",{type:"password",name:"password",className:"FormControl",placeholder:app.translator.trans("core.forum.change_email.confirm_password_placeholder"),bidi:this.password,disabled:this.loading})),m("div",{className:"Form-group"},C.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading,children:app.translator.trans("core.forum.change_email.submit_button")}))))},n.onsubmit=function(t){var e=this;if(t.preventDefault(),this.email()!==app.session.user.email()){app.session.user.email();this.loading=!0,app.session.user.save({email:this.email()},{errorHandler:this.onerror.bind(this),meta:{password:this.password()}}).then((function(){return e.success=!0})).catch((function(){})).then(this.loaded.bind(this))}else this.hide()},n.onerror=function(e){401===e.status&&(e.alert.props.children=app.translator.trans("core.forum.change_email.incorrect_password_message")),t.prototype.onerror.call(this,e)},e}(H.a),ne=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.show(app.session.user),app.setTitle(app.translator.trans("core.forum.settings.title"))},n.content=function(){return m("div",{className:"SettingsPage"},m("ul",null,Object(T.a)(this.settingsItems().toArray())))},n.settingsItems=function(){var t=new p.a;return t.add("account",Xt.a.component({label:app.translator.trans("core.forum.settings.account_heading"),className:"Settings-account",children:this.accountItems().toArray()})),t.add("notifications",Xt.a.component({label:app.translator.trans("core.forum.settings.notifications_heading"),className:"Settings-notifications",children:this.notificationsItems().toArray()})),t.add("privacy",Xt.a.component({label:app.translator.trans("core.forum.settings.privacy_heading"),className:"Settings-privacy",children:this.privacyItems().toArray()})),t},n.accountItems=function(){var t=new p.a;return t.add("changePassword",C.a.component({children:app.translator.trans("core.forum.settings.change_password_button"),className:"Button",onclick:function(){return app.modal.show(new te)}})),t.add("changeEmail",C.a.component({children:app.translator.trans("core.forum.settings.change_email_button"),className:"Button",onclick:function(){return app.modal.show(new ee)}})),t},n.notificationsItems=function(){var t=new p.a;return t.add("notificationGrid",Qt.component({user:this.user})),t},n.preferenceSaver=function(t){var e=this;return function(n,i){var o;i&&(i.loading=!0),m.redraw(),e.user.savePreferences((o={},o[t]=n,o)).then((function(){i&&(i.loading=!1),m.redraw()}))}},n.privacyItems=function(){var t=this,e=new p.a;return e.add("discloseOnline",Kt.a.component({children:app.translator.trans("core.forum.settings.privacy_disclose_online_label"),state:this.user.preferences().discloseOnline,onchange:function(e,n){t.user.pushAttributes({lastSeenAt:null}),t.preferenceSaver("discloseOnline")(e,n)}})),e},e}(kt),ie=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),app.history.push("notifications"),this.list=new at,this.list.load(),this.bodyClass="App--notifications"},n.view=function(){return m("div",{className:"NotificationsPage"},this.list.render())},e}(P),oe=function(t){t.routes={index:{path:"/all",component:Gt.component()},"index.filter":{path:"/:filter",component:Gt.component()},discussion:{path:"/d/:id",component:tt.component()},"discussion.near":{path:"/d/:id/:near",component:tt.component()},user:{path:"/u/:username",component:Vt.component()},"user.posts":{path:"/u/:username",component:Vt.component()},"user.discussions":{path:"/u/:username/discussions",component:Zt.component()},settings:{path:"/settings",component:ne.component()},notifications:{path:"/notifications",component:ie.component()}},t.route.discussion=function(e,n){var i=e.slug();return t.route(n&&1!==n?"discussion.near":"discussion",{id:e.id()+(i.trim()?"-"+i:""),near:n&&1!==n?n:void 0})},t.route.post=function(e){return t.route.discussion(e.discussion(),e.number())},t.route.user=function(e){return t.route("user",{username:e.username()})}};function re(t){var e=t.session.user;if(e&&!e.isEmailConfirmed()){var n=C.a.component({className:"Button Button--link",children:t.translator.trans("core.forum.user_email_confirmation.resend_button"),onclick:function(){n.props.loading=!0,m.redraw(),t.request({method:"POST",url:t.forum.attribute("apiUrl")+"/users/"+e.id()+"/send-confirmation"}).then((function(){n.props.loading=!1,n.props.children=[Object(v.a)("fas fa-check")," ",t.translator.trans("core.forum.user_email_confirmation.sent_message")],n.props.disabled=!0,m.redraw()})).catch((function(){n.props.loading=!1,m.redraw()}))}}),i=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.view=function(){var e=t.prototype.view.call(this);return e.children=[m("div",{className:"container"},e.children)],e},e}(D.a);m.mount($("<div/>").insertBefore("#content")[0],i.component({dismissible:!1,children:t.translator.trans("core.forum.user_email_confirmation.alert_message",{email:m("strong",null,e.email())}),controls:[n]}))}}var se=n(56),ae=n(40),ue=function(t){function e(){var e;return e=t.call(this)||this,Object(s.a)(Object(o.a)(e),"notificationComponents",{discussionRenamed:mt}),Object(s.a)(Object(o.a)(e),"postComponents",{comment:Mt,discussionRenamed:$t}),Object(s.a)(Object(o.a)(e),"search",new k),Object(s.a)(Object(o.a)(e),"pane",null),Object(s.a)(Object(o.a)(e),"drawer",null),Object(s.a)(Object(o.a)(e),"history",new u),oe(Object(o.a)(e)),e}Object(r.a)(e,t);var n=e.prototype;return n.mount=function(){var e=this.forum.attribute("defaultRoute"),n="index";for(var i in this.routes)this.routes[i].path===e&&(n=i);this.routes[n].path="/",this.history.push(n,this.translator.trans("core.forum.header.back_to_index_tooltip"),"/"),m.mount(document.getElementById("app-navigation"),ae.a.component({className:"App-backControl",drawer:!0})),m.mount(document.getElementById("header-navigation"),ae.a.component()),m.mount(document.getElementById("header-primary"),et.component()),m.mount(document.getElementById("header-secondary"),ct.component()),this.pane=new c(document.getElementById("app")),this.composer=m.mount(document.getElementById("composer"),pt.component()),m.route.mode="pathname",t.prototype.mount.call(this,this.forum.attribute("basePath")),re(this),$("#home-link").click((function(t){t.ctrlKey||t.metaKey||2===t.which||(t.preventDefault(),app.history.home(),app.session.user&&(app.store.find("users",app.session.user.id()),m.redraw()))}))},n.composingReplyTo=function(t){return this.composer.component instanceof E&&this.composer.component.props.discussion===t&&this.composer.position!==pt.PositionEnum.HIDDEN},n.viewingDiscussion=function(t){return this.current instanceof tt&&this.current.discussion===t},n.authenticationComplete=function(t){if(t.loggedIn)window.location.reload();else{var e=new F(t);this.modal.show(e)}},e}(se.a),ce=n(68),le=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.initProps=function(e){e.className=(e.className||"")+" LogInButton",e.onclick=function(){var t=$(window);window.open(app.forum.attribute("baseUrl")+e.path,"logInPopup","width=580,height=400,top="+(t.height()/2-200)+",left="+(t.width()/2-290)+",status=no,scrollbars=yes,resizable=no")},t.initProps.call(this,e)},e}(C.a),de=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.initProps=function(e){t.initProps.call(this,e),e.className=e.className||"Button Button--icon Button--link"},e.prototype.config=function(e,n){t.prototype.config.call(this,e,n),e||this.$().tooltip()},e}(C.a),pe=function(){function t(){}var e=t.prototype;return e.search=function(){},e.view=function(){},t}(),he=Object(a.a)(ce.a,{"utils/PostControls":yt,"utils/KeyboardNavigatable":g,"utils/slidable":Ut,"utils/affixSidebar":Nt,"utils/History":u,"utils/DiscussionControls":z,"utils/alertEmailConfirmation":re,"utils/UserControls":Tt,"utils/Pane":c,"components/DiscussionPage":tt,"components/LogInModal":Y,"components/ComposerBody":O,"components/ForgotPasswordModal":B,"components/Notification":ft,"components/LogInButton":le,"components/DiscussionsUserPage":Zt,"components/Composer":pt,"components/SessionDropdown":ot,"components/HeaderPrimary":et,"components/PostEdited":Pt,"components/PostStream":Z,"components/ChangePasswordModal":te,"components/IndexPage":Gt,"components/Page":P,"components/DiscussionRenamedNotification":mt,"components/DiscussionsSearchSource":w,"components/HeaderSecondary":ct,"components/ComposerButton":lt,"components/DiscussionList":qt,"components/ReplyPlaceholder":G,"components/TextEditor":S,"components/TextEditorButton":de,"components/AvatarEditor":Ct,"components/Post":bt,"components/SettingsPage":ne,"components/TerminalPost":Ht,"components/ChangeEmailModal":ee,"components/NotificationsDropdown":ut,"components/UserPage":kt,"components/PostUser":Dt,"components/UserCard":St,"components/UsersSearchSource":N,"components/NotificationGrid":Qt,"components/PostPreview":Bt,"components/EventPost":It,"components/DiscussionHero":M,"components/PostMeta":Et,"components/EditUserModal":_t,"components/SearchSource":pe,"components/DiscussionRenamedPost":$t,"components/DiscussionComposer":zt,"components/LogInButtons":U,"components/NotificationList":at,"components/WelcomeHero":Wt,"components/SignUpModal":F,"components/CommentPost":Mt,"components/ReplyComposer":E,"components/NotificationsPage":ie,"components/PostStreamScrubber":J,"components/EditPostComposer":vt,"components/RenameDiscussionModal":W,"components/Search":k,"components/DiscussionListItem":Ft,"components/LoadingPost":I,"components/PostsUserPage":Vt,routes:oe,ForumApplication:ue}),fe=new ue;window.app=fe,he.app=fe,n.d(e,"Extend",(function(){return i.a})),n.d(e,"app",(function(){return fe})),n.d(e,"compat",(function(){return he}))}]);
;

(function(){var HINT={};HINT.EMOTICONS_NOT_AFTER=0;HINT.LITEDOWN_DECODE_HTML_ENTITIES=0;HINT.PREG_HAS_PASSTHROUGH=!1;HINT.RULE_AUTO_CLOSE=1;HINT.RULE_AUTO_REOPEN=1;HINT.RULE_BREAK_PARAGRAPH=1;HINT.RULE_CREATE_PARAGRAPHS=1;HINT.RULE_DISABLE_AUTO_BR=1;HINT.RULE_ENABLE_AUTO_BR=1;HINT.RULE_IGNORE_TAGS=1;HINT.RULE_IGNORE_TEXT=1;HINT.RULE_IGNORE_WHITESPACE=1;HINT.RULE_IS_TRANSPARENT=1;HINT.RULE_PREVENT_BR=1;HINT.RULE_SUSPEND_AUTO_BR=1;HINT.RULE_TRIM_FIRST_LINE=1;HINT.attributeDefaultValue=0;HINT.closeAncestor=0;HINT.closeParent=1;HINT.createChild=1;HINT.fosterParent=1;HINT.hash=1;HINT.ignoreAttrs=1;HINT.namespaces=0;HINT.onRender=1;HINT.onUpdate=1;HINT.regexp=1;HINT.regexpLimit=1;HINT.requireAncestor=0;var o82015558=[0,0];var o85888FAE=["","id"];var o8753E5EF={flags:0};var oB565876D={flags:2};var o76C0B167=["","smid"];var o939F1698={flags:514};var o3EA8980D=[16705,4112];var oA80287CC={flags:3089};var o2BCB01A0=[16709,4096];var oAB15F972=[65359,7952];var oBB506619=[63961,7696];var o2D84E093=[65503,7953];var o1BC3EAF4={filterChain:[],required:!1};var o02D8DBB5={filterChain:[],required:!0};var o7871A187=["","","aid","","bvid","","pn"];var oC064A685=["","content0","content1","content2","content3"];var oBFF86ECC={"B":1,"BGCOLOR":1,"C":1,"COLOR":1,"EM":1,"EMAIL":1,"FONT":1,"I":1,"S":1,"SIZE":1,"STRONG":1,"U":1,"URL":1};var oDF43256F=[function(attrValue,attrName){return NumericFilter.filterUint(attrValue)}];var oB256A0CD={"ABASIC":1,"AINFO":1,"ASUCCESS":1,"AWARNING":1,"B":1,"BGCOLOR":1,"C":1,"COLOR":1,"EM":1,"EMAIL":1,"FONT":1,"I":1,"S":1,"SIZE":1,"STRONG":1,"U":1,"URL":1};var o118B31AC=function(tag,tagConfig){return filterAttributes(tag,tagConfig,registeredVars,logger)};var o1B4F5B52=[o118B31AC];var o56E79363=[function(attrValue,attrName){return RegexpFilter.filter(attrValue,/^[-0-9A-Za-z_]+$/)}];var o6377B813=function(attrValue,attrName){return RegexpFilter.filter(attrValue,/^[- +,.0-9A-Za-z_]+$/)};var o75AB9259={filterChain:oDF43256F,required:!1};var o6CB0A318={filterChain:oDF43256F,required:!0};var o7476611B=[function(attrValue,attrName){return UrlFilter.filter(attrValue,registeredVars.urlConfig,logger)}];var o6A44C0D0={filterChain:[function(attrValue,attrName){return RegexpFilter.filter(attrValue,/^[0-9]+$/)}],required:!0};var o74701BFF={closeParent:oB256A0CD,flags:3349};var oE2346708={filterChain:o56E79363,required:!0};var oABCFC4A3={filterChain:[o6377B813],required:!0};var oF307D35C={filterChain:o7476611B,required:!0};var o8285AC6F={allowed:oAB15F972,attributes:{},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:o8753E5EF,tagLimit:5000};var o56B93CA8={allowed:oAB15F972,attributes:{},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:oB565876D,tagLimit:5000};var oBDE83B72={closeParent:oB256A0CD,flags:260,fosterParent:oBFF86ECC};var o04FF54AD={closeParent:oB256A0CD,flags:268,fosterParent:oBFF86ECC};var oF0834108={allowed:o3EA8980D,attributes:{"char":o02D8DBB5},bitNumber:6,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000};var oA1CC494B=[function(tag,tagConfig){return executeAttributePreprocessors(tag,tagConfig)},o118B31AC];var o0D86AA11={filterChain:[function(attrValue,attrName){return RegexpFilter.filter(attrValue,/^(?:#(?:(?:[0-9a-f]{3}){1,2}|(?:[0-9a-f]{4}){1,2})|rgb\(\d{1,3}, *\d{1,3}, *\d{1,3}\)|rgba\(\d{1,3}, *\d{1,3}, *\d{1,3}, *\d*(?:\.\d+)?\)|[a-z]+)$/i)}],required:!0};var oE2D0F11E=[function(tag,tagConfig){return(function(){return!0})(tag,registeredVars.fileRepository)},o118B31AC];var o663EF606={allowed:o3EA8980D,attributes:{"content":oE2346708},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000};var o93FEF580={allowed:o2D84E093,attributes:{},bitNumber:4,filterChain:o1B4F5B52,nestingLimit:10,rules:o04FF54AD,tagLimit:5000};var o6B4E87D8={allowed:oAB15F972,attributes:{},bitNumber:7,filterChain:o1B4F5B52,nestingLimit:10,rules:oBDE83B72,tagLimit:5000};var o5305A0D7={allowed:oAB15F972,attributes:{},bitNumber:4,filterChain:o1B4F5B52,nestingLimit:10,rules:oBDE83B72,tagLimit:5000};var o08923FE8={allowed:o2D84E093,attributes:{"bg":o0D86AA11,"border":o0D86AA11,"font":o0D86AA11,"title":o02D8DBB5},bitNumber:4,filterChain:o1B4F5B52,nestingLimit:10,rules:o04FF54AD,tagLimit:5000};var o56EA6D22={allowed:o3EA8980D,attributePreprocessors:[["content",/^([a-zA-Z]+|#[0-9a-fA-F]+),([a-zA-Z]+|#[0-9a-fA-F]+),([a-zA-Z]+|#[0-9a-fA-F]+),([\s\S]*),([\s\S]*)$/,["","content0","content1","content2","content3","content4"]]],attributes:{"content0":o0D86AA11,"content1":o0D86AA11,"content2":o0D86AA11,"content3":o02D8DBB5,"content4":o02D8DBB5},bitNumber:4,filterChain:oA1CC494B,nestingLimit:10,rules:o74701BFF,tagLimit:5000};var xsl=("<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http:\/\/www.w3.org\/1999\/XSL\/Transform\"><xsl:output method=\"html\" encoding=\"utf-8\" indent=\"no\"\/><xsl:decimal-format decimal-separator=\".\"\/><xsl:param name=\"DISCUSSION_URL\">https:\/\/cssaug.org\/forum\/public\/d\/<\/xsl:param><xsl:param name=\"PROFILE_URL\">https:\/\/cssaug.org\/forum\/public\/u\/<\/xsl:param>$aABASIC\"><div$w$l><div$gaaalert\"><p$gaainner\">$c<\/p><\/div><\/div>$b$aACFUN\"><$s$nacfun\"$i$j640px\"><$s$i$e56.25%\"><iframe$m\"$ulazy\"$qno\"$x\/\/www.acfun.cn\/player\/ac{@acid}\"$i$f\/><\/$s><\/$s>$b$aACGTV\"><$s$nacgtv\"$i$j640px\"><$s$i$e56.25%\"><iframe$m\"$ulazy\"$qno\"$i$f><$v name=\"src\">\/\/<xsl:choose><$p$o@mode='av'\">player.bilibili.com\/player.html?aid=<\/$p><$p$o@mode='ac'\">www.acfun.cn\/player\/ac<\/$p><$p$o@mode='sm'\">embed.nicovideo.jp\/watch\/sm<\/$p><xsl:otherwise>acg.tv\/<\/xsl:otherwise><\/xsl:choose>$d@idhao\"\/><\/$v><\/iframe><\/$s><\/$s>$b$aACUSTOM\"><div$w$l><div$gaaalert\"><p$gaainner\"$i$h>$d@content3\"\/><\/p><\/div><\/div>$b$aAINFO\"><div$w$l><div$gaaalert aainfo\"><p$gaainner\">$c<\/p><\/div><\/div>$b$aASUCCESS\"><div$w$l><div$gaaalert aasuccess\"><p$gaainner\">$c<\/p><\/div><\/div>$b$aAWARNING\"><div$w$l><div$gaaalert aaerror\"><p$gaainner\"><strong>Warning! <\/strong>$c<\/p><\/div><\/div>$b$aB|DEL|DETAILS|EM|H1|H2|H3|H4|H5|H6|I|LI|S|STRONG|SUB|SUMMARY|SUP|TR|U|p\"><xsl:element name=\"{translate(name(),'ABDEGHILMNOPRSTUY','abdeghilmnoprstuy')}\">$c<\/xsl:element>$b$aBCUSTOM\"><div$w$l><div$gaaalert\"><p$gaainner\"$icolor:{@content1};background-color:{@content2};border-color:{@content3}\">$d@content0\"\/><\/p><\/div><\/div>$b$aBERROR\"><div$w$l><div$gbbalert-box bberror\"><$s>ERROR: <\/$s>$c<\/div><\/div>$b$aBGCOLOR\"><$s$ibackground-color:{@bgcolor}\">$c<\/$s>$b$aBILIBILI\"><$s$nbilibili\"$i$j640px\"><$s$i$e56.25%\"><iframe$m\"$ulazy\"$qno\"$x\/\/player.bilibili.com\/player.html?aid={@aid}&amp;bvid={@bvid}&amp;page={@pn}\"$i$f\/><\/$s><\/$s>$b$aBNOTICE\"><div$w$l><div$gbbalert-box bbnotice\"><$s>Notice: <\/$s>$c<\/div><\/div>$b$aBSUCCESS\"><div$w$l><div$g$z><$s>SUCCESS: <\/$s>$c<\/div><\/div>$b$aBWARNING\"><div$w$l><div"+"$gbbalert-box bbwarning\"><$s>WARNING: <\/$s>$c<\/div><\/div>$b$aC\"><code>$c<\/code>$b$aCENTER\"><div$itext-align:center\">$c<\/div>$b$aCERROR\"><div$w$l><div$gbbalert-box bberror\"$i$h><$s>$d@content3\"\/>: <\/$s>$d@content4\"\/><\/div><\/div>$b$aCNOTICE\"><div$w$l><div$gbbalert-box bbnotice\"$i$h><$s>$d@content3\"\/>: <\/$s>$d@content4\"\/><\/div><\/div>$b$aCODE\"><pre data-s9e-livepreview-hash=\"\" data-s9e-livepreview-onupdate=\"if(typeof hljsLoader!=='undefined')hljsLoader.highlightBlocks(this)\"><code><xsl:if$o@lang\"><$v name=\"class\">language-$d@lang\"\/><\/$v><\/xsl:if>$c<\/code><script async=\"\" crossorigin=\"anonymous\" data-hljs-style=\"github-gist\" data-s9e-livepreview-onrender=\"if(typeof hljsLoader!=='undefined')this.parentNode.removeChild(this)\" integrity=\"sha384-8nvilyI853lFtVdVYU+pX+4cv\/6EWFVYP9l52xHJjn2JaUD5ojvrRQyEjB1nuh\/v\" onload=\"hljsLoader.highlightBlocks(this.parentNode)\"$xhttps:\/\/cdn.jsdelivr.net\/gh\/s9e\/hljs-loader@1.0.12\/loader.min.js\"\/><\/pre>$b$aCOLOR\"><$s$icolor:{@color}\">$c<\/$s>$b$aCSUCCESS\"><div$w$l><div$g$z$i$h><$s>$d@content3\"\/>: <\/$s>$d@content4\"\/><\/div><\/div>$b$aCWARNING\"><div$w$l><div$gbbalert-box bbwarning\"$i$h><$s>$d@content3\"\/>: <\/$s>$d@content4\"\/><\/div><\/div>$b$aDERROR\"><div$w$l><div$gbbalert-box bberror\"$i$k><$s>$d@title\"\/>: <\/$s>$c<\/div><\/div>$b$aDNOTICE\"><div$w$l><div$gbbalert-box bbnotice\"$i$k><$s>$d@title\"\/>: <\/$s>$c<\/div><\/div>$b$aDSUCCESS\"><div$w$l><div$g$z$i$k><$s>$d@title\"\/>: <\/$s>$c<\/div><\/div>$b$aDWARNING\"><div$w$l><div$gbbalert-box bbwarning\"$i$k><$s>$d@title\"\/>: <\/$s>$c<\/div><\/div>$b$aE\"><xsl:choose><$p$o.=':)'\">\ud83d\ude42<\/$p><$p$o.=':D'\">\ud83d\ude03<\/$p><$p$o.=':P'\">\ud83d\ude1b<\/$p><$p$o.=':('\">\ud83d\ude41<\/$p><$p$o.=':|'\">\ud83d\ude10<\/$p><$p$o.=';)'\">\ud83d\ude09<\/$p><$p$o.=&quot;:'(&quot;\">\ud83d\ude22<\/$p><$p$o.=':O'\">\ud83d\ude2e<\/$p><$p$o.='&gt;:('\">\ud83d\ude21<\/$p><xsl:otherwise>$d.\"\/><\/xsl:otherwise><\/xsl:choose>$b$aEMAIL\"><a href=\"mailto:{@email}\">$c<\/a>$b$aESC\">$c$b$aFA|FAS\"><i$gfas fa-{@content}\"\/>$b$aFAB\"><i$gfab fa-{@content}\"\/>$b$aFAL\"><i$gfal fa-{@content}\"\/>$b$aFAR\"><i$gfar fa-{@content}\"\/>$b$aFLAGROW_FI"+"LE_FILE\"><div$gButtonGroup\"><div$g$t data-uuid=\"{@uuid}\"><i$gfa fa-download\"\/><\/div><div$gButton\">$d@base_name\"\/><\/div><div$gButton\">$d@size\"\/><\/div><\/div>$b$aFLAGROW_FILE_IMAGE\"><div$gflagrow-download row\"><div$gcard\"><div$gwrapper\"$i$y><div$gheader\"><ul$gmenu-content\"><li><div href=\"#\"$gfa fa-hdd-o\"><$s>$d@size\"\/><\/$s><\/div><\/li><\/ul><\/div><div$gdata\"><div$gcontent\"><h4$gtitle\">$d@base_name\"\/><\/h4><div$g$r data-uuid=\"{@uuid}\"><i$gfa fa-download\"\/><\/div><\/div><\/div><\/div><\/div><\/div>$b$aFONT\"><$s$ifont-family:{@font}\">$c<\/$s>$b$aFP|HE\">$d@char\"\/>$b$aHEIMU\"><$s$gheimu\" title=\"{@heimu}\">$c<\/$s>$b$aHR\"><hr\/>$b$aIFRAME\"><iframe$x{@content}\"$iborder-style:solid;border-width:thin;padding:3px;border-color:#9e005d;width:100%;height:{@iframe}em\"\/>$b$aIMG\"><img$x{@src}\" title=\"{@title}\" alt=\"{@alt}\"><xsl:copy-of select=\"@height|@width\"\/><\/img>$b$aISPOILER\"><$s$gspoiler\" data-s9e-livepreview-ignore-attrs=\"class\" onclick=\"removeAttribute('class')\">$c<\/$s>$b$aLIST\"><xsl:choose><$p$onot(@type)\"><ul>$c<\/ul><\/$p><$p$ostarts-with(@type,'decimal')or starts-with(@type,'lower')or starts-with(@type,'upper')\"><ol$ilist-style-type:{@type}\"><xsl:copy-of select=\"@start\"\/>$c<\/ol><\/$p><xsl:otherwise><ul$ilist-style-type:{@type}\">$c<\/ul><\/xsl:otherwise><\/xsl:choose>$b$aMUSIC163\"><$s$nmusic163\"$i$j640px\"><$s><xsl:choose><$p$o@mode='album'\"><$v name=\"style\">$e56.25%<\/$v><iframe$m\"$ulazy\"$qno\"$x\/\/music.163.com\/outchain\/player?type=1&amp;id={@id}&amp;auto=0&amp;height=450\"$i$f\/><\/$p><$p$o@mode='song'\"><$v name=\"style\">$e24.21875%<\/$v><iframe$m\"$ulazy\"$qno\"$x\/\/music.163.com\/outchain\/player?type=2&amp;id={@id}&amp;auto=0&amp;height=66\"$i$f\/><\/$p><xsl:otherwise><$v name=\"style\">$e56.25%<\/$v><iframe$m\"$ulazy\"$qno\"$x\/\/music.163.com\/outchain\/player?type=0&amp;id={@id}&amp;auto=0&amp;height=450\"$i$f\/><\/xsl:otherwise><\/xsl:choose><\/$s><\/$s>$b$aNICONICO\"><$s$nniconico\"$i$j640px\"><$s$i$e56.25%\"><iframe$m\"$ulazy\"$qno\"$x\/\/embed.nicovideo.jp\/watch\/sm{@smid}\"$i$f\/><\/$s><\/$s>$b$aONEINDEX\"><video preload=\"\" cont"+"rols=\"\" width=\"100%\"><source$x{@src}\" type=\"video\/mp4\"\/><\/video>$b$aPOSTMENTION\"><a href=\"{$DISCUSSION_URL}{@discussionid}\/{@number}\"$gPostMention\" data-id=\"{@id}\">$d@displayname\"\/><\/a>$b$aPROG\"><progress value=\"{@content}\" max=\"100\"\/>$b$aQQ\"><$s$nqq\"$i$j760px\"><$s$i$e59.210526%\"><iframe$m\"$ulazy\"$qno\"$x\/\/v.qq.com\/txp\/iframe\/player.html?vid={@id}&amp;tiny=0&amp;auto=0\"$i$f\/><\/$s><\/$s>$b$aQUOTE\"><blockquote><xsl:if$onot(@author)\"><$v name=\"class\">uncited<\/$v><\/xsl:if><div><xsl:if$o@author\"><cite>$d@author\"\/> wrote:<\/cite><\/xsl:if>$c<\/div><\/blockquote>$b$aRUBY\"><$s><ruby><rb>$c<\/rb><rp>\uff08<\/rp><rt$ifont-size:0.75em\">$d@ruby\"\/><\/rt><rp>\uff09<\/rp><\/ruby><\/$s>$b$aSIZE\"><$s$ifont-size:{@size}px\">$c<\/$s>$b$aSPOILER\"><div$gspoiler\"><div$gspoilerheader\"><input type=\"button\"$imargin:1px;width:145px;height:33px\"$gspoilerbutton Button Button--icon hasIcon\" value=\"\u5c55\u5f00 \/ \u6536\u8d77\u9690\u85cf\u6587\u5b57\" onclick=\"n = this.parentNode.parentNode.lastChild; if(n.style.display == &quot;none&quot;) {{n.style.display = &quot;block&quot;;}} else {{n.style.display = &quot;none&quot;;}} return false;\"\/><\/div><div$gspoilerbody\"$idisplay:none;border-style:solid;border-width:thin;padding:3px;border-color:#9e005d\">$c<\/div><\/div>$b$aTABLE\"><table border=\"\"$iwidth:{@table}%\">$c<\/table>$b$aTD\"><td$iborder-style:solid;border-width:thin;padding:3px;border-color:#9e005d\">$c<\/td>$b$aUPL-FILE\"><div$gButtonGroup\"><div$g$t data-uuid=\"{@uuid}\"><i$gfa fa-download\"\/><\/div><div$gButton\">$d@content\"\/><\/div><div$gButton\">$d@size\"\/><\/div><\/div>$b$aUPL-IMAGE\"><div$gflagrow-download row\"><div$gcard\"><div$gwrapper\"$i$y><div$gheader\"><ul$gmenu-content\"><li><div href=\"#\"$gfa fa-hdd-o\"><$s>$d@size\"\/><\/$s><\/div><\/li><\/ul><\/div><div$gdata\"><div$gcontent\"><h4$gtitle\">$d@content\"\/><\/h4><div$g$r data-uuid=\"{@uuid}\"><i$gfa fa-download\"\/><\/div><\/div><\/div><\/div><\/div><\/div>$b$aUPL-IMAGE-PREVIEW\"><img$x{@url}\" title=\"{@base_name}\"\/>$b$aURL\"><a href=\"{@url}\" rel=\" nofollow ugc\"><xsl:copy-of select=\"@title\"\/>$c<\/a>$b$aUSERMENTION\"><a hre"+"f=\"{$PROFILE_URL}{@username}\"$gUserMention\">@$d@displayname\"\/><\/a>$b$aXIAMI\"><$s$nxiami\"$i$j640px\"><$s$i$e26.5625%\"><iframe$m\"$ulazy\"$qno\"$x\/\/www.xiami.com\/webapp\/embed-player?autoPlay=1&amp;id={@xmid}\"$i$f\/><\/$s><\/$s>$b$abr\"><br\/>$b$ae|i|s\"\/><\/xsl:stylesheet>").replace(/\$[a-z]/g,function(k){return{"$a":"<xsl:template match=\"","$b":"<\/xsl:template>","$c":"<xsl:apply-templates\/>","$d":"<xsl:value-of select=\"","$e":"display:block;overflow:hidden;position:relative;padding-bottom:","$f":"border:0;height:100%;left:0;position:absolute;width:100%\"","$g":" class=\"","$h":"color:{@content0};background-color:{@content1};border-color:{@content2}\"","$i":" style=\"","$j":"display:inline-block;width:100%;max-width:","$k":"color:{@font};background-color:{@bg};border-color:{@border}\"","$l":"aaalertbody\"","$m":" allowfullscreen=\"","$n":" data-s9e-mediaembed=\"","$o":" test=\"","$p":"xsl:when","$q":" scrolling=\"","$r":"flagrow-download-button Button Button--primary Button-icon Button--block\"","$s":"span","$t":"Button hasIcon Button--icon Button--primary flagrow-download-button\"","$u":" loading=\"","$v":"xsl:attribute","$w":" id=\"","$x":" src=\"","$y":"background:url({@url}) center \/ cover no-repeat\"","$z":"bbalert-box bbsuccess\""}[k]});var EmailFilter={filter:function(attrValue){return/^[-\w.+]+@[-\w.]+$/.test(attrValue)?attrValue:!1}};var FalseFilter={filter:function(attrValue){return!1}};var HashmapFilter={filter:function(attrValue,map,strict){if(attrValue in map){return map[attrValue]}
return(strict)?!1:attrValue}};var MapFilter={filter:function(attrValue,map){var i=-1,cnt=map.length;while(++i<cnt){if(map[i][0].test(attrValue)){return map[i][1]}}
return attrValue}};var NetworkFilter={filterIp:function(attrValue){if(/^[\d.]+$/.test(attrValue)){return NetworkFilter.filterIpv4(attrValue)}
if(/^[\da-f:]+$/i.test(attrValue)){return NetworkFilter.filterIpv6(attrValue)}
return!1},filterIpport:function(attrValue){var m,ip;if(m=/^\[([\da-f:]+)(\]:[1-9]\d*)$/i.exec(attrValue)){ip=NetworkFilter.filterIpv6(m[1]);if(ip===!1){return!1}
return'['+ip+m[2]}
if(m=/^([\d.]+)(:[1-9]\d*)$/.exec(attrValue)){ip=NetworkFilter.filterIpv4(m[1]);if(ip===!1){return!1}
return ip+m[2]}
return!1},filterIpv4:function(attrValue){if(!/^\d+\.\d+\.\d+\.\d+$/.test(attrValue)){return!1}
var i=4,p=attrValue.split('.');while(--i>=0){if(p[i][0]==='0'||p[i]>255){return!1}}
return attrValue},filterIpv6:function(attrValue){return/^([\da-f]{0,4}:){2,7}(?:[\da-f]{0,4}|\d+\.\d+\.\d+\.\d+)$/.test(attrValue)?attrValue:!1}};var NumericFilter={filterFloat:function(attrValue){return/^(?:0|-?[1-9]\d*)(?:\.\d+)?(?:e[1-9]\d*)?$/i.test(attrValue)?attrValue:!1},filterInt:function(attrValue){return/^(?:0|-?[1-9]\d*)$/.test(attrValue)?attrValue:!1},filterRange:function(attrValue,min,max,logger){if(!/^(?:0|-?[1-9]\d*)$/.test(attrValue)){return!1}
attrValue=parseInt(attrValue,10);if(attrValue<min){if(logger){logger.warn('Value outside of range, adjusted up to min value',{'attrValue':attrValue,'min':min,'max':max})}
return min}
if(attrValue>max){if(logger){logger.warn('Value outside of range, adjusted down to max value',{'attrValue':attrValue,'min':min,'max':max})}
return max}
return attrValue},filterUint:function(attrValue){return/^(?:0|[1-9]\d*)$/.test(attrValue)?attrValue:!1}};var RegexpFilter={filter:function(attrValue,regexp){return regexp.test(attrValue)?attrValue:!1}};var TimestampFilter={filter:function(attrValue){var m=/^(?=\d)(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/.exec(attrValue);if(m){return 3600*(m[1]||0)+60*(m[2]||0)+(+m[3]||0)}
return NumericFilter.filterUint(attrValue)}};var UrlFilter={filter:function(attrValue,urlConfig,logger){var p=UrlFilter.parseUrl(attrValue.replace(/^\s+/,'').replace(/\s+$/,''));var error=UrlFilter.validateUrl(urlConfig,p);if(error){if(logger){p.attrValue=attrValue;logger.err(error,p)}
return!1}
return UrlFilter.rebuildUrl(urlConfig,p)},parseUrl:function(url){var regexp=/^(?:([a-z][-+.\w]*):)?(?:\/\/(?:([^:\/?#]*)(?::([^\/?#]*)?)?@)?(?:(\[[a-f\d:]+\]|[^:\/?#]+)(?::(\d*))?)?(?![^\/?#]))?([^?#]*)(\?[^#]*)?(#.*)?$/i;var m=regexp.exec(url),parts={},tokens=['scheme','user','pass','host','port','path','query','fragment'];tokens.forEach(function(name,i){parts[name]=(m[i+1]>'')?m[i+1]:''});parts.scheme=parts.scheme.toLowerCase();parts.host=parts.host.replace(/[\u3002\uff0e\uff61]/g,'.').replace(/\.+$/g,'');if(/[^\x00-\x7F]/.test(parts.host)&&typeof punycode!=='undefined'){parts.host=punycode.toASCII(parts.host)}
return parts},rebuildUrl:function(urlConfig,p){var url='';if(p.scheme!==''){url+=p.scheme+':'}
if(p.host!==''){url+='//';if(p.user!==''){url+=rawurlencode(decodeURIComponent(p.user));if(p.pass!==''){url+=':'+rawurlencode(decodeURIComponent(p.pass))}
url+='@'}
url+=p.host;if(p.port!==''){url+=':'+p.port}}else if(p.scheme==='file'){url+='//'}
var path=p.path+p.query+p.fragment;path=path.replace(/%.?[a-f]/g,function(str){return str.toUpperCase()},path);url+=UrlFilter.sanitizeUrl(path);if(!p.scheme){url=url.replace(/^([^\/]*):/,'$1%3A')}
return url},sanitizeUrl:function(url){return url.replace(/[^\u0020-\u007E]+/g,encodeURIComponent).replace(/%(?![0-9A-Fa-f]{2})|[^!#-&*-;=?-Z_a-z~]/g,escape)},validateUrl:function(urlConfig,p){if(p.scheme!==''&&!urlConfig.allowedSchemes.test(p.scheme)){return'URL scheme is not allowed'}
if(p.host!==''){var regexp=/^(?!-)[-a-z0-9]{0,62}[a-z0-9](?:\.(?!-)[-a-z0-9]{0,62}[a-z0-9])*$/i;if(!regexp.test(p.host)){if(!NetworkFilter.filterIpv4(p.host)&&!NetworkFilter.filterIpv6(p.host.replace(/^\[(.*)\]$/,'$1',p.host))){return'URL host is invalid'}}
if((urlConfig.disallowedHosts&&urlConfig.disallowedHosts.test(p.host))||(urlConfig.restrictedHosts&&!urlConfig.restrictedHosts.test(p.host))){return'URL host is not allowed'}}else if(/^(?:(?:f|ht)tps?)$/.test(p.scheme)){return'Missing host'}}};function html_entity_decode(str){var b=document.createElement('b');html_entity_decode=function(str){b.innerHTML=str.replace(/</g,'&lt;');return b.textContent};return html_entity_decode(str)}
function htmlspecialchars_compat(str){var t={'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'};return str.replace(/[<>&"]/g,function(c){return t[c]})}
function htmlspecialchars_noquotes(str){var t={'<':'&lt;','>':'&gt;','&':'&amp;'};return str.replace(/[<>&]/g,function(c){return t[c]})}
function rawurlencode(str){return encodeURIComponent(str).replace(/[!'()*]/g,function(c){return'%'+c.charCodeAt(0).toString(16).toUpperCase()})}
function returnFalse(){return!1}
function returnTrue(){return!0}
function executeAttributePreprocessors(tag,tagConfig){if(typeof tagConfig.attributePreprocessors==='undefined'){return}
tagConfig.attributePreprocessors.forEach(function(ap){var attrName=ap[0],regexp=ap[1],map=ap[2];if(tag.hasAttribute(attrName)){executeAttributePreprocessor(tag,attrName,regexp,map)}})}
function filterAttributes(tag,tagConfig,registeredVars,logger){var attributes={},attrName;for(attrName in tagConfig.attributes){var attrConfig=tagConfig.attributes[attrName],attrValue=!1;if(tag.hasAttribute(attrName)){attrValue=executeAttributeFilterChain(attrConfig.filterChain,attrName,tag.getAttribute(attrName))}
if(attrValue!==!1){attributes[attrName]=attrValue}else if(HINT.attributeDefaultValue&&typeof attrConfig.defaultValue!=='undefined'){attributes[attrName]=attrConfig.defaultValue}else if(attrConfig.required){tag.invalidate()}}
tag.setAttributes(attributes)}
function filterTag(tag){var tagName=tag.getName(),tagConfig=tagsConfig[tagName];logger.setTag(tag);for(var i=0;i<tagConfig.filterChain.length;++i){if(tag.isInvalid()){break}
tagConfig.filterChain[i](tag,tagConfig)}
logger.unsetTag()}
function executeAttributeFilterChain(filterChain,attrName,attrValue){logger.setAttribute(attrName);for(var i=0;i<filterChain.length;++i){attrValue=filterChain[i](attrValue,attrName);if(attrValue===!1){break}}
logger.unsetAttribute();return attrValue}
function executeAttributePreprocessor(tag,attrName,regexp,map){var attrValue=tag.getAttribute(attrName),captures=getNamedCaptures(attrValue,regexp,map),k;for(k in captures){if(k===attrName||!tag.hasAttribute(k)){tag.setAttribute(k,captures[k])}}}
function getNamedCaptures(attrValue,regexp,map){var m=regexp.exec(attrValue);if(!m){return[]}
var values={};map.forEach(function(k,i){if(typeof m[i]==='string'&&m[i]!==''){values[k]=m[i]}});return values}
function Logger(){}Logger.prototype={add:function(type,msg,context){},clear:function(){},setAttribute:function(attrName){},setTag:function(tag){},unsetAttribute:function(){},unsetTag:function(){},debug:function(msg,context){},err:function(msg,context){},info:function(msg,context){},warn:function(msg,context){}};function Tag(type,name,pos,len,priority){this.type=+type;this.name=name;this.pos=+pos;this.len=+len;this.sortPriority=+priority||0;this.attributes={};this.cascade=[];if(isNaN(type+pos+len)){this.invalidate()}}
Tag.START_TAG=1;Tag.END_TAG=2;Tag.SELF_CLOSING_TAG=3;Tag.prototype.attributes;Tag.prototype.cascade;Tag.prototype.endTag;Tag.prototype.invalid=!1;Tag.prototype.len;Tag.prototype.name;Tag.prototype.pos;Tag.prototype.sortPriority;Tag.prototype.startTag;Tag.prototype.type;Tag.prototype.addFlags=function(flags){this.flags|=flags};Tag.prototype.cascadeInvalidationTo=function(tag){this.cascade.push(tag);if(this.invalid){tag.invalidate()}};Tag.prototype.invalidate=function(){if(!this.invalid){this.invalid=!0;this.cascade.forEach(function(tag){tag.invalidate()})}};Tag.prototype.pairWith=function(tag){if(this.canBePaired(this,tag)){this.endTag=tag;tag.startTag=this;this.cascadeInvalidationTo(tag)}else if(this.canBePaired(tag,this)){this.startTag=tag;tag.endTag=this}};Tag.prototype.canBePaired=function(startTag,endTag){return startTag.name===endTag.name&&startTag.type===Tag.START_TAG&&endTag.type===Tag.END_TAG&&startTag.pos<=startTag.pos};Tag.prototype.removeFlags=function(flags){this.flags&=~flags};Tag.prototype.setFlags=function(flags){this.flags=flags};Tag.prototype.getAttributes=function(){var attributes={};for(var attrName in this.attributes){attributes[attrName]=this.attributes[attrName]}
return attributes};Tag.prototype.getEndTag=function(){return this.endTag};Tag.prototype.getFlags=function(){return this.flags};Tag.prototype.getLen=function(){return this.len};Tag.prototype.getName=function(){return this.name};Tag.prototype.getPos=function(){return this.pos};Tag.prototype.getSortPriority=function(){return this.sortPriority};Tag.prototype.getStartTag=function(){return this.startTag};Tag.prototype.getType=function(){return this.type};Tag.prototype.canClose=function(startTag){if(this.invalid||!this.canBePaired(startTag,this)||(this.startTag&&this.startTag!==startTag)||(startTag.endTag&&startTag.endTag!==this)){return!1}
return!0};Tag.prototype.isBrTag=function(){return(this.name==='br')};Tag.prototype.isEndTag=function(){return!!(this.type&Tag.END_TAG)};Tag.prototype.isIgnoreTag=function(){return(this.name==='i')};Tag.prototype.isInvalid=function(){return this.invalid};Tag.prototype.isParagraphBreak=function(){return(this.name==='pb')};Tag.prototype.isSelfClosingTag=function(){return(this.type===Tag.SELF_CLOSING_TAG)};Tag.prototype.isSystemTag=function(){return('br i pb v'.indexOf(this.name)>-1)};Tag.prototype.isStartTag=function(){return!!(this.type&Tag.START_TAG)};Tag.prototype.isVerbatim=function(){return(this.name==='v')};Tag.prototype.getAttribute=function(attrName){return this.attributes[attrName]};Tag.prototype.hasAttribute=function(attrName){return(attrName in this.attributes)};Tag.prototype.removeAttribute=function(attrName){delete this.attributes[attrName]};Tag.prototype.setAttribute=function(attrName,attrValue){this.attributes[attrName]=attrValue};Tag.prototype.setAttributes=function(attributes){this.attributes={};for(var attrName in attributes){this.attributes[attrName]=attributes[attrName]}};var RULE_AUTO_CLOSE=1<<0;var RULE_AUTO_REOPEN=1<<1;var RULE_BREAK_PARAGRAPH=1<<2;var RULE_CREATE_PARAGRAPHS=1<<3;var RULE_DISABLE_AUTO_BR=1<<4;var RULE_ENABLE_AUTO_BR=1<<5;var RULE_IGNORE_TAGS=1<<6;var RULE_IGNORE_TEXT=1<<7;var RULE_IGNORE_WHITESPACE=1<<8;var RULE_IS_TRANSPARENT=1<<9;var RULE_PREVENT_BR=1<<10;var RULE_SUSPEND_AUTO_BR=1<<11;var RULE_TRIM_FIRST_LINE=1<<12;var RULES_AUTO_LINEBREAKS=RULE_DISABLE_AUTO_BR|RULE_ENABLE_AUTO_BR|RULE_SUSPEND_AUTO_BR;var RULES_INHERITANCE=RULE_ENABLE_AUTO_BR;var WHITESPACE=" \n\t";var cntOpen;var cntTotal;var context;var currentFixingCost;var currentTag;var isRich;var logger=new Logger;var maxFixingCost=10000;var namespaces;var openTags;var output;var plugins={"Autoemail":{parser:function(text,matches){var config={attrName:"email",tagName:"EMAIL"};var tagName=config.tagName,attrName=config.attrName;matches.forEach(function(m){var startTag=addStartTag(tagName,m[0][1],0);startTag.setAttribute(attrName,m[0][0]);var endTag=addEndTag(tagName,m[0][1]+m[0][0].length,0);startTag.pairWith(endTag)})},quickMatch:"@",regexp:/\b[-a-z0-9_+.]+@[-a-z0-9.]*[a-z0-9]/ig,regexpLimit:50000},"Autolink":{parser:function(text,matches){var config={attrName:"url",tagName:"URL"};matches.forEach(function(m){linkifyUrl(m[0][1],trimUrl(m[0][0]))});function linkifyUrl(tagPos,url){var endPos=tagPos+url.length,endTag=addEndTag(config.tagName,endPos,0);if(url[3]==='.'){url='http://'+url}
var startTag=addStartTag(config.tagName,tagPos,0,1);startTag.setAttribute(config.attrName,url);startTag.pairWith(endTag);var contentTag=addVerbatim(tagPos,endPos-tagPos,1000);startTag.cascadeInvalidationTo(contentTag)}
function trimUrl(url){return url.replace(/(?:(?![-=)\/_])[\s!-.:-@[-`{-~])+$/,'')}},quickMatch:":",regexp:/\bhttps?:(?:[^\s()\[\]\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65]|\([^\s()]*\)|\[\w*\])+/ig,regexpLimit:50000},"BBCodes":{parser:function(text,matches){var config={bbcodes:{"*":{tagName:"LI"},"ABASIC":[],"ACUSTOM":{contentAttributes:["content"],defaultAttribute:"content"},"AINFO":[],"ASUCCESS":[],"AWARNING":[],"B":[],"BCUSTOM":{contentAttributes:["content"],defaultAttribute:"content"},"BERROR":[],"BGCOLOR":[],"BNOTICE":[],"BSUCCESS":[],"BWARNING":[],"CENTER":[],"CERROR":{contentAttributes:["content"],defaultAttribute:"content"},"CNOTICE":{contentAttributes:["content"],defaultAttribute:"content"},"CODE":{defaultAttribute:"lang"},"COLOR":[],"CSUCCESS":{contentAttributes:["content"],defaultAttribute:"content"},"CWARNING":{contentAttributes:["content"],defaultAttribute:"content"},"DEL":[],"DERROR":{defaultAttribute:"title"},"DETAILS":[],"DNOTICE":{defaultAttribute:"title"},"DSUCCESS":{defaultAttribute:"title"},"DWARNING":{defaultAttribute:"title"},"EMAIL":{contentAttributes:["email"]},"FA":{contentAttributes:["content"],defaultAttribute:"content"},"FAB":{contentAttributes:["content"],defaultAttribute:"content"},"FAL":{contentAttributes:["content"],defaultAttribute:"content"},"FAR":{contentAttributes:["content"],defaultAttribute:"content"},"FAS":{contentAttributes:["content"],defaultAttribute:"content"},"FONT":[],"HEIMU":[],"I":[],"IFRAME":{contentAttributes:["content"]},"IMG":{contentAttributes:["src"],defaultAttribute:"src"},"LIST":{defaultAttribute:"type"},"MEDIA":{contentAttributes:["url"]},"ONEINDEX":{defaultAttribute:"src"},"PROG":{contentAttributes:["content"],defaultAttribute:"content"},"QUOTE":{defaultAttribute:"author"},"RUBY":[],"S":[],"SIZE":[],"SPOILER":[],"SUMMARY":[],"TABLE":[],"TD":[],"TR":[],"U":[],"UPL-FILE":{contentAttributes:["content"],defaultAttribute:"uuid"},"UPL-IMAGE":{contentAttributes:["content"],defaultAttribute:"uuid"},"UPL-IMAGE-PREVIEW":{defaultAttribute:"url"},"URL":{contentAttributes:["url"]}}};var attributes;var bbcodeConfig;var bbcodeName;var bbcodeSuffix;var pos;var startPos;var textLen=text.length;var uppercaseText='';matches.forEach(function(m){bbcodeName=m[1][0].toUpperCase();if(!(bbcodeName in config.bbcodes)){return}
bbcodeConfig=config.bbcodes[bbcodeName];startPos=m[0][1];pos=startPos+m[0][0].length;try
{parseBBCode()}catch(e){}});function addBBCodeEndTag(){return addEndTag(getTagName(),startPos,pos-startPos)}
function addBBCodeSelfClosingTag(){var tag=addSelfClosingTag(getTagName(),startPos,pos-startPos);tag.setAttributes(attributes);return tag}
function addBBCodeStartTag(){var tag=addStartTag(getTagName(),startPos,pos-startPos);tag.setAttributes(attributes);return tag}
function captureEndTag(){if(!uppercaseText){uppercaseText=text.toUpperCase()}
var match='[/'+bbcodeName+bbcodeSuffix+']',endTagPos=uppercaseText.indexOf(match,pos);if(endTagPos<0){return null}
return addEndTag(getTagName(),endTagPos,match.length)}
function getTagName(){return bbcodeConfig.tagName||bbcodeName}
function parseAttributes(){var firstPos=pos,attrName;attributes={};while(pos<textLen){var c=text[pos];if(" \n\t".indexOf(c)>-1){++pos;continue}
if('/]'.indexOf(c)>-1){return}
var spn=/^[-\w]*/.exec(text.substr(pos,100))[0].length;if(spn){attrName=text.substr(pos,spn).toLowerCase();pos+=spn;if(pos>=textLen){throw ''}
if(text[pos]!=='='){continue}}else if(c==='='&&pos===firstPos){attrName=bbcodeConfig.defaultAttribute||bbcodeName.toLowerCase()}else{throw ''}
if(++pos>=textLen){throw ''}
attributes[attrName]=parseAttributeValue()}}
function parseAttributeValue(){if(text[pos]==='"'||text[pos]==="'"){return parseQuotedAttributeValue()}
var match=/(?:[^\s\]]|[ \t](?!\s*(?:[-\w]+=|\/?\])))*/.exec(text.substr(pos)),attrValue=match[0];pos+=attrValue.length;return attrValue}
function parseBBCode(){parseBBCodeSuffix();if(text[startPos+1]==='/'){if(text[pos]===']'&&bbcodeSuffix===''){++pos;addBBCodeEndTag()}
return}
parseAttributes();if(bbcodeConfig.predefinedAttributes){for(var attrName in bbcodeConfig.predefinedAttributes){if(!(attrName in attributes)){attributes[attrName]=bbcodeConfig.predefinedAttributes[attrName]}}}
if(text[pos]===']'){++pos}else{if(text.substr(pos,2)==='/]'){pos+=2;addBBCodeSelfClosingTag()}
return}
var contentAttributes=[];if(bbcodeConfig.contentAttributes){bbcodeConfig.contentAttributes.forEach(function(attrName){if(!(attrName in attributes)){contentAttributes.push(attrName)}})}
var requireEndTag=(bbcodeSuffix||bbcodeConfig.forceLookahead),endTag=(requireEndTag||contentAttributes.length)?captureEndTag():null;if(endTag){contentAttributes.forEach(function(attrName){attributes[attrName]=text.substr(pos,endTag.getPos()-pos)})}else if(requireEndTag){return}
var tag=addBBCodeStartTag();if(endTag){tag.pairWith(endTag)}}
function parseBBCodeSuffix(){bbcodeSuffix='';if(text[pos]===':'){bbcodeSuffix=/^:\d*/.exec(text.substr(pos))[0];pos+=bbcodeSuffix.length}}
function parseQuotedAttributeValue(){var quote=text[pos],valuePos=pos+1;do{pos=text.indexOf(quote,pos+1);if(pos<0){throw ''}
var n=1;while(text[pos-n]==='\\'){++n}}
while(n%2===0);var attrValue=text.substr(valuePos,pos-valuePos);if(attrValue.indexOf('\\')>-1){attrValue=attrValue.replace(/\\([\\'"])/g,'$1')}
++pos;return attrValue}},quickMatch:"[",regexp:/\[\/?(\*|[-\w]+)(?=[\]\s=:\/])/g,regexpLimit:50000},"Emoticons":{parser:function(text,matches){var config={tagName:"E"};matches.forEach(function(m){if(HINT.EMOTICONS_NOT_AFTER&&config.notAfter&&m[0][1]&&config.notAfter.test(text[m[0][1]-1])){return}
addSelfClosingTag(config.tagName,m[0][1],m[0][0].length)})},regexp:/(?::(?:[()DOP|]|'\()|;\)|>:\()/g,regexpLimit:50000},"Escaper":{parser:function(text,matches){var config={tagName:"ESC"};matches.forEach(function(m){addTagPair(config.tagName,m[0][1],1,m[0][1]+m[0][0].length,0)})},quickMatch:"\\",regexp:/\\[-!#()*+.:<>@[\\\]^_`{|}~]/g,regexpLimit:50000},"FancyPants":{parser:function(text,matches){var config={attrName:"char",tagName:"FP"};var attrName=config.attrName,hasSingleQuote=(text.indexOf("'")>=0),hasDoubleQuote=(text.indexOf('"')>=0),tagName=config.tagName;if(typeof config.disableQuotes==='undefined'){parseSingleQuotes();parseSingleQuotePairs();parseDoubleQuotePairs()}
if(typeof config.disableGuillemets==='undefined'){parseGuillemets()}
if(typeof config.disableMathSymbols==='undefined'){parseNotEqualSign();parseSymbolsAfterDigits();parseFractions()}
if(typeof config.disablePunctuation==='undefined'){parseDashesAndEllipses()}
if(typeof config.disableSymbols==='undefined'){parseSymbolsInParentheses()}
function addTag(tagPos,tagLen,chr,prio){var tag=addSelfClosingTag(tagName,tagPos,tagLen,prio||0);tag.setAttribute(attrName,chr);return tag}
function parseDashesAndEllipses(){if(text.indexOf('...')<0&&text.indexOf('--')<0){return}
var chrs={'--':"\u2013",'---':"\u2014",'...':"\u2026"},regexp=/---?|\.\.\./g,m;while(m=regexp.exec(text)){addTag(m.index,m[0].length,chrs[m[0]])}}
function parseDoubleQuotePairs(){if(hasDoubleQuote){parseQuotePairs('"',/(?:^|\W)".+?"(?!\w)/g,"\u201c","\u201d")}}
function parseFractions(){if(text.indexOf('/')<0){return}
var map={'0/3':"\u2189",'1/10':"\u2152",'1/2':"\u00BD",'1/3':"\u2153",'1/4':"\u00BC",'1/5':"\u2155",'1/6':"\u2159",'1/7':"\u2150",'1/8':"\u215B",'1/9':"\u2151",'2/3':"\u2154",'2/5':"\u2156",'3/4':"\u00BE",'3/5':"\u2157",'3/8':"\u215C",'4/5':"\u2158",'5/6':"\u215A",'5/8':"\u215D",'7/8':"\u215E"};var m,regexp=/\b(?:0\/3|1\/(?:[2-9]|10)|2\/[35]|3\/[458]|4\/5|5\/[68]|7\/8)\b/g;while(m=regexp.exec(text)){addTag(m.index,m[0].length,map[m[0]])}}
function parseGuillemets(){if(text.indexOf('<<')<0){return}
var m,regexp=/<<( ?)(?! )[^\n<>]*?[^\n <>]\1>>(?!>)/g;while(m=regexp.exec(text)){var left=addTag(m.index,2,"\u00AB"),right=addTag(m.index+m[0].length-2,2,"\u00BB");left.cascadeInvalidationTo(right)}}
function parseNotEqualSign(){if(text.indexOf('!=')<0&&text.indexOf('=/=')<0){return}
var m,regexp=/\b (?:!|=\/)=(?= \b)/g;while(m=regexp.exec(text)){addTag(m.index+1,m[0].length-1,"\u2260")}}
function parseQuotePairs(q,regexp,leftQuote,rightQuote){var m;while(m=regexp.exec(text)){var left=addTag(m.index+m[0].indexOf(q),1,leftQuote),right=addTag(m.index+m[0].length-1,1,rightQuote);left.cascadeInvalidationTo(right)}}
function parseSingleQuotePairs(){if(hasSingleQuote){parseQuotePairs("'",/(?:^|\W)'.+?'(?!\w)/g,"\u2018","\u2019")}}
function parseSingleQuotes(){if(!hasSingleQuote){return}
var m,regexp=/[a-z]'|(?:^|\s)'(?=[a-z]|[0-9]{2})/gi;while(m=regexp.exec(text)){addTag(m.index+m[0].indexOf("'"),1,"\u2019",10)}}
function parseSymbolsAfterDigits(){if(!hasSingleQuote&&!hasDoubleQuote&&text.indexOf('x')<0){return}
var map={"'s":"\u2019","'":"\u2032","' ":"\u2032","'x":"\u2032",'"':"\u2033",'" ':"\u2033",'"x':"\u2033"};var m,regexp=/[0-9](?:'s|["']? ?x(?= ?[0-9])|["'])/g;while(m=regexp.exec(text)){if(m[0][m[0].length-1]==='x'){addTag(m.index+m[0].length-1,1,"\u00d7")}
var str=m[0].substr(1,2);if(map[str]){addTag(m.index+1,1,map[str])}}}
function parseSymbolsInParentheses(){if(text.indexOf('(')<0){return}
var chrs={'(c)':"\u00A9",'(r)':"\u00AE",'(tm)':"\u2122"},regexp=/\((?:c|r|tm)\)/gi,m;while(m=regexp.exec(text)){addTag(m.index,m[0].length,chrs[m[0].toLowerCase()])}}}},"HTMLEntities":{parser:function(text,matches){var config={attrName:"char",tagName:"HE"};var tagName=config.tagName,attrName=config.attrName;matches.forEach(function(m){var entity=m[0][0],chr=html_entity_decode(entity);if(chr===entity||chr.charCodeAt(0)<32){return}
addSelfClosingTag(tagName,m[0][1],entity.length).setAttribute(attrName,chr)})},quickMatch:"&",regexp:/&(?:[a-z]+|#(?:[0-9]+|x[0-9a-f]+));/ig,regexpLimit:50000},"Litedown":{parser:function(text,matches){var config={decodeHtmlEntities:!1};var decodeHtmlEntities=config.decodeHtmlEntities;var hasEscapedChars=!1;var hasReferences=!1;var linkReferences={};if(text.indexOf('\\')>=0){hasEscapedChars=!0;text=text.replace(/\\[!"'()*<>[\\\]^_`~]/g,function(str){return{'\\!':"\x1B0",'\\"':"\x1B1","\\'":"\x1B2",'\\(':"\x1B3",'\\)':"\x1B4",'\\*':"\x1B5",'\\<':"\x1B6",'\\>':"\x1B7",'\\[':"\x1B8",'\\\\':"\x1B9",'\\]':"\x1BA",'\\^':"\x1BB",'\\_':"\x1BC",'\\`':"\x1BD",'\\~':"\x1BE"}[str]})}
text+="\n\n\x17";function decode(str){if(HINT.LITEDOWN_DECODE_HTML_ENTITIES&&decodeHtmlEntities&&str.indexOf('&')>-1){str=html_entity_decode(str)}
str=str.replace(/\x1A/g,'');if(hasEscapedChars){str=str.replace(/\x1B./g,function(seq){return{"\x1B0":'!',"\x1B1":'"',"\x1B2":"'","\x1B3":'(',"\x1B4":')',"\x1B5":'*',"\x1B6":'<',"\x1B7":'>',"\x1B8":'[',"\x1B9":'\\',"\x1BA":']',"\x1BB":'^',"\x1BC":'_',"\x1BD":'`',"\x1BE":'~'}[seq]})}
return str}
function isAfterWhitespace(pos){return(pos>0&&isWhitespace(text.charAt(pos-1)))}
function isAlnum(chr){return(' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.indexOf(chr)>0)}
function isBeforeWhitespace(pos){return isWhitespace(text[pos+1])}
function isSurroundedByAlnum(pos,len){return(pos>0&&isAlnum(text[pos-1])&&isAlnum(text[pos+len]))}
function isWhitespace(chr){return(" \n\t".indexOf(chr)>-1)}
function markBoundary(pos){text=text.substr(0,pos)+"\x17"+text.substr(pos+1)}
function overwrite(pos,len){if(len>0){text=text.substr(0,pos)+new Array(1+len).join("\x1A")+text.substr(pos+len)}}
function parseInlineMarkup(str,regexp,tagName){if(text.indexOf(str)===-1){return}
var m;while(m=regexp.exec(text)){var match=m[0],matchPos=m.index,matchLen=match.length,endPos=matchPos+matchLen-2;addTagPair(tagName,matchPos,2,endPos,2);overwrite(matchPos,2);overwrite(endPos,2)}}
function parseAbstractScript(tagName,syntaxChar,shortRegexp,longRegexp){var pos=text.indexOf(syntaxChar);if(pos===-1){return}
parseShortForm(pos);parseLongForm(pos);function parseLongForm(pos){pos=text.indexOf(syntaxChar+'(',pos);if(pos===-1){return}
var m,regexp=longRegexp;regexp.lastIndex=pos;while(m=regexp.exec(text)){var match=m[0],matchPos=m.index,matchLen=match.length;addTagPair(tagName,matchPos,2,matchPos+matchLen-1,1);overwrite(matchPos,matchLen)}
if(match){parseLongForm(pos)}}
function parseShortForm(pos){var m,regexp=shortRegexp;regexp.lastIndex=pos;while(m=regexp.exec(text)){var match=m[0],matchPos=m.index,matchLen=match.length,startPos=matchPos,endLen=(match.substr(-1)===syntaxChar)?1:0,endPos=matchPos+matchLen-endLen;addTagPair(tagName,startPos,1,endPos,endLen)}}}
function setLinkAttributes(tag,linkInfo,attrName){var url=linkInfo.replace(/^\s*/,'').replace(/\s*$/,''),title='',pos=url.indexOf(' ');if(pos!==-1){title=url.substr(pos).replace(/^\s*\S/,'').replace(/\S\s*$/,'');url=url.substr(0,pos)}
if(/^<.+>$/.test(url)){url=url.replace(/^<(.+)>$/,'$1').replace(/\\>/g,'>')}
tag.setAttribute(attrName,decode(url));if(title>''){tag.setAttribute('title',decode(title))}}(function(){var setextLines={};function parse(){matchSetextLines();var blocks=[],blocksCnt=0,codeFence,codeIndent=4,codeTag,lineIsEmpty=!0,lists=[],listsCnt=0,newContext=!1,textBoundary=0,breakParagraph,continuation,ignoreLen,indentStr,indentLen,lfPos,listIndex,maxIndent,minIndent,blockDepth,tagPos,tagLen;var matches=[],m,regexp=/^(?:(?=[-*+\d \t>`~#_])((?: {0,3}>(?:(?!!)|!(?![^\n>]*?!<)) ?)+)?([ \t]+)?(\* *\* *\*[* ]*$|- *- *-[- ]*$|_ *_ *_[_ ]*$)?((?:[-*+]|\d+\.)[ \t]+(?=\S))?[ \t]*(#{1,6}[ \t]+|```+[^`\n]*$|~~~+[^~\n]*$)?)?/gm;while(m=regexp.exec(text)){matches.push(m);if(m.index===regexp.lastIndex){++regexp.lastIndex}}
matches.forEach(function(m){var blockMarks=[],matchPos=m.index,matchLen=m[0].length,startPos,startLen,endPos,endLen;ignoreLen=0;blockDepth=0;continuation=!lineIsEmpty;lfPos=text.indexOf("\n",matchPos);lineIsEmpty=(lfPos===matchPos+matchLen&&!m[3]&&!m[4]&&!m[5]);if(!matchLen){++regexp.lastIndex}
breakParagraph=(lineIsEmpty&&continuation);if(m[1]){blockMarks=getBlockMarks(m[1]);blockDepth=blockMarks.length;ignoreLen=m[1].length;if(codeTag&&codeTag.hasAttribute('blockDepth')){blockDepth=Math.min(blockDepth,codeTag.getAttribute('blockDepth'));ignoreLen=computeBlockIgnoreLen(m[1],blockDepth)}
overwrite(matchPos,ignoreLen)}
if(blockDepth<blocksCnt&&!continuation){newContext=!0;do{var startTag=blocks.pop();addEndTag(startTag.getName(),textBoundary,0).pairWith(startTag)}
while(blockDepth<--blocksCnt);}
if(blockDepth>blocksCnt&&!lineIsEmpty){newContext=!0;do{var tagName=(blockMarks[blocksCnt]==='>!')?'SPOILER':'QUOTE';blocks.push(addStartTag(tagName,matchPos,0,-999))}
while(blockDepth>++blocksCnt);}
var indentWidth=0,indentPos=0;if(m[2]&&!codeFence){indentStr=m[2];indentLen=indentStr.length;do{if(indentStr[indentPos]===' '){++indentWidth}else{indentWidth=(indentWidth+4)&~3}}
while(++indentPos<indentLen&&indentWidth<codeIndent);}
if(codeTag&&!codeFence&&indentWidth<codeIndent&&!lineIsEmpty){newContext=!0}
if(newContext){newContext=!1;if(codeTag){if(textBoundary>codeTag.getPos()){overwrite(codeTag.getPos(),textBoundary-codeTag.getPos());codeTag.pairWith(addEndTag('CODE',textBoundary,0,-1))}else{codeTag.invalidate()}
codeTag=null;codeFence=null}
lists.forEach(function(list){closeList(list,textBoundary)});lists=[];listsCnt=0;if(matchPos){markBoundary(matchPos-1)}}
if(indentWidth>=codeIndent){if(codeTag||!continuation){ignoreLen=(m[1]||'').length+indentPos;if(!codeTag){codeTag=addStartTag('CODE',matchPos+ignoreLen,0,-999)}
m={}}}else{var hasListItem=!!m[4];if(!indentWidth&&!continuation&&!hasListItem){listIndex=-1}else if(continuation&&!hasListItem){listIndex=listsCnt-1}else if(!listsCnt){listIndex=(hasListItem)?0:-1}else{listIndex=0;while(listIndex<listsCnt&&indentWidth>lists[listIndex].maxIndent){++listIndex}}
while(listIndex<listsCnt-1){closeList(lists.pop(),textBoundary);--listsCnt}
if(listIndex===listsCnt&&!hasListItem){--listIndex}
if(hasListItem&&listIndex>=0){breakParagraph=!0;tagPos=matchPos+ignoreLen+indentPos;tagLen=m[4].length;var itemTag=addStartTag('LI',tagPos,tagLen);overwrite(tagPos,tagLen);if(listIndex<listsCnt){addEndTag('LI',textBoundary,0).pairWith(lists[listIndex].itemTag);lists[listIndex].itemTag=itemTag;lists[listIndex].itemTags.push(itemTag)}else{++listsCnt;if(listIndex){minIndent=lists[listIndex-1].maxIndent+1;maxIndent=Math.max(minIndent,listIndex*4)}else{minIndent=0;maxIndent=indentWidth}
var listTag=addStartTag('LIST',tagPos,0);if(m[4].indexOf('.')>-1){listTag.setAttribute('type','decimal');var start=+m[4];if(start!==1){listTag.setAttribute('start',start)}}
lists.push({listTag:listTag,itemTag:itemTag,itemTags:[itemTag],minIndent:minIndent,maxIndent:maxIndent,tight:!0})}}
if(listsCnt&&!continuation&&!lineIsEmpty){if(lists[0].itemTags.length>1||!hasListItem){lists.forEach(function(list){list.tight=!1})}}
codeIndent=(listsCnt+1)*4}
if(m[5]){if(m[5][0]==='#'){startLen=m[5].length;startPos=matchPos+matchLen-startLen;endLen=getAtxHeaderEndTagLen(matchPos+matchLen,lfPos);endPos=lfPos-endLen;addTagPair('H'+/#{1,6}/.exec(m[5])[0].length,startPos,startLen,endPos,endLen);markBoundary(startPos);markBoundary(lfPos);if(continuation){breakParagraph=!0}}else if(m[5][0]==='`'||m[5][0]==='~'){tagPos=matchPos+ignoreLen;tagLen=lfPos-tagPos;if(codeTag&&m[5]===codeFence){codeTag.pairWith(addEndTag('CODE',tagPos,tagLen,-1));addIgnoreTag(textBoundary,tagPos-textBoundary);overwrite(codeTag.getPos(),tagPos+tagLen-codeTag.getPos());codeTag=null;codeFence=null}else if(!codeTag){codeTag=addStartTag('CODE',tagPos,tagLen);codeFence=m[5].replace(/[^`~]+/,'');codeTag.setAttribute('blockDepth',blockDepth);addIgnoreTag(tagPos+tagLen,1);var lang=m[5].replace(/^[`~\s]*/,'').replace(/\s+$/,'');if(lang!==''){codeTag.setAttribute('lang',lang)}}}}else if(m[3]&&!listsCnt&&text[matchPos+matchLen]!=="\x17"){addSelfClosingTag('HR',matchPos+ignoreLen,matchLen-ignoreLen);breakParagraph=!0;markBoundary(lfPos)}else if(setextLines[lfPos]&&setextLines[lfPos].blockDepth===blockDepth&&!lineIsEmpty&&!listsCnt&&!codeTag){addTagPair(setextLines[lfPos].tagName,matchPos+ignoreLen,0,setextLines[lfPos].endPos,setextLines[lfPos].endLen);markBoundary(setextLines[lfPos].endPos+setextLines[lfPos].endLen)}
if(breakParagraph){addParagraphBreak(textBoundary);markBoundary(textBoundary)}
if(!lineIsEmpty){textBoundary=lfPos}
if(ignoreLen){addIgnoreTag(matchPos,ignoreLen,1000)}})}
function closeList(list,textBoundary){addEndTag('LIST',textBoundary,0).pairWith(list.listTag);addEndTag('LI',textBoundary,0).pairWith(list.itemTag);if(list.tight){list.itemTags.forEach(function(itemTag){itemTag.removeFlags(RULE_CREATE_PARAGRAPHS)})}}
function computeBlockIgnoreLen(str,maxBlockDepth){var remaining=str;while(--maxBlockDepth>=0){remaining=remaining.replace(/^ *>!? ?/,'')}
return str.length-remaining.length}
function getAtxHeaderEndTagLen(startPos,endPos){var content=text.substr(startPos,endPos-startPos),m=/[ \t]*#*[ \t]*$/.exec(content);return m[0].length}
function getBlockMarks(str){var blockMarks=[],regexp=/>!?/g,m;while(m=regexp.exec(str)){blockMarks.push(m[0])}
return blockMarks}
function matchSetextLines(){if(text.indexOf('-')===-1&&text.indexOf('=')===-1){return}
var m,regexp=/^(?=[-=>])(?:>!? ?)*(?=[-=])(?:-+|=+) *$/gm;while(m=regexp.exec(text)){var match=m[0],matchPos=m.index;var endPos=matchPos-1;while(endPos>0&&text[endPos-1]===' '){--endPos}
setextLines[matchPos-1]={endLen:matchPos+match.length-endPos,endPos:endPos,blockDepth:match.length-match.replace(/>/g,'').length,tagName:(match[0]==='=')?'H1':'H2'}}}
parse()})();(function(){function parse(){if(text.indexOf(']:')<0){return}
var m,regexp=/^\x1A* {0,3}\[([^\x17\]]+)\]: *([^[\s\x17]+ *(?:"[^\x17]*?"|'[^\x17]*?'|\([^\x17)]*\))?) *(?=$|\x17)\n?/gm;while(m=regexp.exec(text)){addIgnoreTag(m.index,m[0].length);var id=m[1].toLowerCase();if(!linkReferences[id]){hasReferences=!0;linkReferences[id]=m[2]}}}
parse()})();(function(){function parse(){var markers=getInlineCodeMarkers(),i=-1,cnt=markers.length;while(++i<(cnt-1)){var pos=markers[i].next,j=i;if(text[markers[i].pos]!=='`'){++markers[i].pos;--markers[i].len}
while(++j<cnt&&markers[j].pos===pos){if(markers[j].len===markers[i].len){addInlineCodeTags(markers[i],markers[j]);i=j;break}
pos=markers[j].next}}}
function addInlineCodeTags(left,right){var startPos=left.pos,startLen=left.len+left.trimAfter,endPos=right.pos-right.trimBefore,endLen=right.len+right.trimBefore;addTagPair('C',startPos,startLen,endPos,endLen);overwrite(startPos,endPos+endLen-startPos)}
function getInlineCodeMarkers(){var pos=text.indexOf('`');if(pos<0){return[]}
var regexp=/(`+)(\s*)[^\x17`]*/g,trimNext=0,markers=[],_text=text.replace(/\x1BD/g,'\\`'),m;regexp.lastIndex=pos;while(m=regexp.exec(_text)){markers.push({pos:m.index,len:m[1].length,trimBefore:trimNext,trimAfter:m[2].length,next:m.index+m[0].length});trimNext=m[0].length-m[0].replace(/\s+$/,'').length}
return markers}
parse()})();(function(){function parse(){var pos=text.indexOf('![');if(pos===-1){return}
if(text.indexOf('](',pos)>0){parseInlineImages()}
if(hasReferences){parseReferenceImages()}}
function addImageTag(startPos,endPos,endLen,linkInfo,alt){var tag=addTagPair('IMG',startPos,2,endPos,endLen);setLinkAttributes(tag,linkInfo,'src');tag.setAttribute('alt',decode(alt));overwrite(startPos,endPos+endLen-startPos)}
function parseInlineImages(){var m,regexp=/!\[(?:[^\x17[\]]|\[[^\x17[\]]*\])*\]\(( *(?:[^\x17\s()]|\([^\x17\s()]*\))*(?=[ )]) *(?:"[^\x17]*?"|'[^\x17]*?'|\([^\x17)]*\))? *)\)/g;while(m=regexp.exec(text)){var linkInfo=m[1],startPos=m.index,endLen=3+linkInfo.length,endPos=startPos+m[0].length-endLen,alt=m[0].substr(2,m[0].length-endLen-2);addImageTag(startPos,endPos,endLen,linkInfo,alt)}}
function parseReferenceImages(){var m,regexp=/!\[((?:[^\x17[\]]|\[[^\x17[\]]*\])*)\](?: ?\[([^\x17[\]]+)\])?/g;while(m=regexp.exec(text)){var startPos=m.index,endPos=startPos+2+m[1].length,endLen=1,alt=m[1],id=alt;if(m[2]>''&&linkReferences[m[2]]){endLen=m[0].length-alt.length-2;id=m[2]}else if(!linkReferences[id]){continue}
addImageTag(startPos,endPos,endLen,linkReferences[id],alt)}}
parse()})();(function(){function parse(){parseInlineMarkup('>!',/>![^\x17]+?!</g,'ISPOILER');parseInlineMarkup('||',/\|\|[^\x17]+?\|\|/g,'ISPOILER')}
parse()})();(function(){function parse(){if(text.indexOf('](')!==-1){parseInlineLinks()}
if(text.indexOf('<')!==-1){parseAutomaticLinks()}
if(hasReferences){parseReferenceLinks()}}
function addLinkTag(startPos,endPos,endLen,linkInfo){var priority=(endLen===1)?1:-1;var tag=addTagPair('URL',startPos,1,endPos,endLen,priority);setLinkAttributes(tag,linkInfo,'url');overwrite(startPos,1);overwrite(endPos,endLen)}
function getLabels(){var labels={},m,regexp=/\[((?:[^\x17[\]]|\[[^\x17[\]]*\])*)\]/g;while(m=regexp.exec(text)){labels[m.index]=m[1].toLowerCase()}
return labels}
function parseAutomaticLinks(){var m,regexp=/<[-+.\w]+([:@])[^\x17\s>]+?(?:>|\x1B7)/g;while(m=regexp.exec(text)){var content=decode(m[0].replace(/\x1B/g,"\\\x1B")).replace(/^<(.+)>$/,'$1'),startPos=m.index,endPos=startPos+m[0].length-1,tagName=(m[1]===':')?'URL':'EMAIL',attrName=tagName.toLowerCase();addTagPair(tagName,startPos,1,endPos,1).setAttribute(attrName,content)}}
function parseInlineLinks(){var m,regexp=/\[(?:[^\x17[\]]|\[[^\x17[\]]*\])*\]\(( *(?:\([^\x17\s()]*\)|[^\x17\s)])*(?=[ )]) *(?:"[^\x17]*?"|'[^\x17]*?'|\([^\x17)]*\))? *)\)/g;while(m=regexp.exec(text)){var linkInfo=m[1],startPos=m.index,endLen=3+linkInfo.length,endPos=startPos+m[0].length-endLen;addLinkTag(startPos,endPos,endLen,linkInfo)}}
function parseReferenceLinks(){var labels=getLabels(),startPos;for(startPos in labels){var id=labels[startPos],labelPos=+startPos+2+id.length,endPos=labelPos-1,endLen=1;if(text[labelPos]===' '){++labelPos}
if(labels[labelPos]>''&&linkReferences[labels[labelPos]]){id=labels[labelPos];endLen=labelPos+2+id.length-endPos}
if(linkReferences[id]){addLinkTag(+startPos,endPos,endLen,linkReferences[id])}}}
parse()})();(function(){function parse(){parseInlineMarkup('~~',/~~[^\x17]+?~~(?!~)/g,'DEL')}
parse()})();(function(){function parse(){parseAbstractScript('SUB','~',/~[^\x17\s!"#$%&\'()*+,\-.\/:;<=>?@[\]^_`{}|~]+~?/g,/~\([^\x17()]+\)/g)}
parse()})();(function(){function parse(){parseAbstractScript('SUP','^',/\^[^\x17\s!"#$%&\'()*+,\-.\/:;<=>?@[\]^_`{}|~]+\^?/g,/\^\([^\x17()]+\)/g)}
parse()})();(function(){var closeEm;var closeStrong;var emPos;var emEndPos;var remaining;var strongPos;var strongEndPos;function parse(){parseEmphasisByCharacter('*',/\*+/g);parseEmphasisByCharacter('_',/_+/g)}
function adjustEndingPositions(){if(closeEm&&closeStrong){if(emPos<strongPos){emEndPos+=2}else{++strongEndPos}}}
function adjustStartingPositions(){if(emPos>=0&&emPos===strongPos){if(closeEm){emPos+=2}else{++strongPos}}}
function closeSpans(){if(closeEm){--remaining;addTagPair('EM',emPos,1,emEndPos,1);emPos=-1}
if(closeStrong){remaining-=2;addTagPair('STRONG',strongPos,2,strongEndPos,2);strongPos=-1}}
function getEmphasisByBlock(regexp,pos){var block=[],blocks=[],breakPos=text.indexOf("\x17",pos),m;regexp.lastIndex=pos;while(m=regexp.exec(text)){var matchPos=m.index,matchLen=m[0].length;if(matchPos>breakPos){blocks.push(block);block=[];breakPos=text.indexOf("\x17",matchPos)}
if(!ignoreEmphasis(matchPos,matchLen)){block.push([matchPos,matchLen])}}
blocks.push(block);return blocks}
function ignoreEmphasis(pos,len){return(text.charAt(pos)==='_'&&len===1&&isSurroundedByAlnum(pos,len))}
function openSpans(pos){if(remaining&1){emPos=pos-remaining}
if(remaining&2){strongPos=pos-remaining}}
function parseEmphasisByCharacter(character,regexp){var pos=text.indexOf(character);if(pos===-1){return}
getEmphasisByBlock(regexp,pos).forEach(processEmphasisBlock)}
function processEmphasisBlock(block){emPos=-1,strongPos=-1;block.forEach(function(pair){processEmphasisMatch(pair[0],pair[1])})}
function processEmphasisMatch(matchPos,matchLen){var canOpen=!isBeforeWhitespace(matchPos+matchLen-1),canClose=!isAfterWhitespace(matchPos),closeLen=(canClose)?Math.min(matchLen,3):0;closeEm=!!(closeLen&1)&&emPos>=0;closeStrong=!!(closeLen&2)&&strongPos>=0;emEndPos=matchPos;strongEndPos=matchPos;remaining=matchLen;adjustStartingPositions();adjustEndingPositions();closeSpans();remaining=(canOpen)?Math.min(remaining,3):0;openSpans(matchPos+matchLen)}
parse()})();(function(){function parse(){var pos=text.indexOf("  \n");while(pos>0){addBrTag(pos+2).cascadeInvalidationTo(addVerbatim(pos+2,1));pos=text.indexOf("  \n",pos+3)}}
parse()})()}},"MediaEmbed":{parser:function(text,matches){var config={tagName:"MEDIA"};matches.forEach(function(m){var tagName=config.tagName,url=m[0][0],pos=m[0][1],len=url.length;addSelfClosingTag(tagName,pos,len,-10).setAttribute('url',url)})},quickMatch:":\/\/",regexp:/\bhttps?:\/\/[^["'\s]+/ig,regexpLimit:50000},"Preg":{parser:function(text,matches){var config={generics:[["USERMENTION",/\B@([a-z0-9_-]+)(?!#)/ig,0,["","username"]],["POSTMENTION",/\B@([a-z0-9_-]+)#(\d+)/ig,0,["","username","id"]],["FLAGROW_FILE_FILE",/\$file\-([a-z0-9-]{36})/g,0,["","uuid"]],["FLAGROW_FILE_IMAGE",/\$image\-([a-z0-9-]{36})/g,0,["","uuid"]]]};config.generics.forEach(function(entry){var tagName=entry[0],regexp=entry[1],passthroughIdx=entry[2],map=entry[3],m;regexp.lastIndex=0;while(m=regexp.exec(text)){var startTagPos=m.index,matchLen=m[0].length,tag;if(HINT.PREG_HAS_PASSTHROUGH&&passthroughIdx&&m[passthroughIdx]!==''){var contentPos=text.indexOf(m[passthroughIdx],startTagPos),contentLen=m[passthroughIdx].length,startTagLen=contentPos-startTagPos,endTagPos=contentPos+contentLen,endTagLen=matchLen-(startTagLen+contentLen);tag=addTagPair(tagName,startTagPos,startTagLen,endTagPos,endTagLen,-100)}else{tag=addSelfClosingTag(tagName,startTagPos,matchLen,-100)}
map.forEach(function(attrName,i){if(attrName&&typeof m[i]!=='undefined'){tag.setAttribute(attrName,m[i])}})}})}}};var pos;var registeredVars={"MediaEmbed.hosts":{"acfun.cn":"acfun","acg.tv":"acgtv","b23.tv":"bilibili","bilibili.com":"bilibili","music.163.com":"music163","nico.ms":"niconico","nicovideo.jp":"niconico","qq.com":"qq","xiami.com":"xiami"},"MediaEmbed.sites":{"acfun":[[[/acfun\.cn\/v\/ac([-0-9]+)/,["","acid"]]],[]],"acgtv":[[[/acg\.tv\/(av|ac|sm)(\d+)(\?p=([-0-9]+))?/,["","mode","idhao","","pn"]]],[]],"bilibili":[[[/bilibili\.com\/video(\/av([-0-9]+))|(\/BV([-0-9A-Z_a-z]+))(\?p=([-0-9]+))?/,o7871A187],[/b23\.tv\/(\/av([-0-9]+))|(\/BV([-0-9A-Z_a-z]+))(\/p([-0-9]+))?/,o7871A187]],[]],"music163":[[[/music\.163\.com\/(#\/)?(song|album|playlist)((\?id=)|(\/))(\d+)/,["","","mode","","","","id"]]],[]],"niconico":[[[/nicovideo\.jp\/watch\/sm([-0-9]+)/,o76C0B167],[/nico\.ms\/sm([-0-9]+)/,o76C0B167]],[]],"qq":[[[/qq\.com\/x\/cover\/\w+\/(\w+)\.html/,o85888FAE],[/qq\.com\/x\/cover\/\w+\.html\?vid=(\w+)/,o85888FAE],[/qq\.com\/cover\/[^\/]+\/\w+\/(\w+)\.html/,o85888FAE],[/qq\.com\/cover\/[^\/]+\/\w+\.html\?vid=(\w+)/,o85888FAE],[/qq\.com\/x\/page\/(\w+)\.html/,o85888FAE],[/qq\.com\/page\/[^\/]+\/[^\/]+\/[^\/]+\/(\w+)\.html/,o85888FAE]],[]],"xiami":[[[/xiami\.com\/song\/([-0-9]+)/,["","xmid"]]],[]]},"urlConfig":{allowedSchemes:/^https?$/i}};var rootContext={allowed:o2D84E093,flags:40};var tagsConfig={"ABASIC":o5305A0D7,"ACFUN":{allowed:o2BCB01A0,attributes:{"acid":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"ACGTV":{allowed:o2BCB01A0,attributes:{"idhao":o1BC3EAF4,"mode":o1BC3EAF4,"pn":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"ACUSTOM":{allowed:o3EA8980D,attributePreprocessors:[["content",/^([a-zA-Z]+|#[0-9a-fA-F]+),([a-zA-Z]+|#[0-9a-fA-F]+),([a-zA-Z]+|#[0-9a-fA-F]+),([\s\S]*)$/,oC064A685]],attributes:{"content0":o0D86AA11,"content1":o0D86AA11,"content2":o0D86AA11,"content3":o02D8DBB5},bitNumber:4,filterChain:oA1CC494B,nestingLimit:10,rules:o74701BFF,tagLimit:5000},"AINFO":o5305A0D7,"ASUCCESS":o5305A0D7,"AWARNING":o5305A0D7,"B":o56B93CA8,"BCUSTOM":{allowed:o3EA8980D,attributePreprocessors:[["content",/^title\=([\s\S]*)\s+font\=([a-zA-Z]+|#[0-9a-fA-F]+)\s+bg\=([a-zA-Z]+|#[0-9a-fA-F]+)\s+border\=([a-zA-Z]+|#[0-9a-fA-F]+)$/,oC064A685]],attributes:{"content0":o02D8DBB5,"content1":o0D86AA11,"content2":o0D86AA11,"content3":o0D86AA11},bitNumber:4,filterChain:oA1CC494B,nestingLimit:10,rules:o74701BFF,tagLimit:5000},"BERROR":o93FEF580,"BGCOLOR":{allowed:oAB15F972,attributes:{"bgcolor":o0D86AA11},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:oB565876D,tagLimit:5000},"BILIBILI":{allowed:o2BCB01A0,attributes:{"aid":o1BC3EAF4,"bvid":o1BC3EAF4,"pn":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"BNOTICE":o93FEF580,"BSUCCESS":o93FEF580,"BWARNING":o93FEF580,"C":{allowed:o82015558,attributes:{},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:{flags:66},tagLimit:5000},"CENTER":o93FEF580,"CERROR":o56EA6D22,"CNOTICE":o56EA6D22,"CODE":{allowed:o82015558,attributes:{"lang":{filterChain:o56E79363,required:!1}},bitNumber:4,filterChain:o1B4F5B52,nestingLimit:10,rules:{closeParent:oB256A0CD,flags:4436,fosterParent:oBFF86ECC},tagLimit:5000},"COLOR":{allowed:oAB15F972,attributes:{"color":o0D86AA11},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:oB565876D,tagLimit:5000},"CSUCCESS":o56EA6D22,"CWARNING":o56EA6D22,"DEL":{allowed:o2D84E093,attributes:{},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:{flags:512},tagLimit:5000},"DERROR":o08923FE8,"DETAILS":{allowed:[65503,7961],attributes:{},bitNumber:8,filterChain:o1B4F5B52,nestingLimit:10,rules:o04FF54AD,tagLimit:5000},"DNOTICE":o08923FE8,"DSUCCESS":o08923FE8,"DWARNING":o08923FE8,"E":{allowed:o3EA8980D,attributes:{},bitNumber:6,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"EM":o56B93CA8,"EMAIL":{allowed:oBB506619,attributes:{"email":{filterChain:[function(attrValue,attrName){return EmailFilter.filter(attrValue)}],required:!0}},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:o939F1698,tagLimit:5000},"ESC":{allowed:o82015558,attributes:{},bitNumber:0,filterChain:o1B4F5B52,nestingLimit:10,rules:{flags:1616},tagLimit:5000},"FA":o663EF606,"FAB":o663EF606,"FAL":o663EF606,"FAR":o663EF606,"FAS":o663EF606,"FLAGROW_FILE_FILE":{allowed:o3EA8980D,attributes:{"base_name":o02D8DBB5,"downloads":o6CB0A318,"size":o02D8DBB5,"uuid":o02D8DBB5},bitNumber:4,filterChain:oE2D0F11E,nestingLimit:10,rules:o74701BFF,tagLimit:5000},"FLAGROW_FILE_IMAGE":{allowed:o3EA8980D,attributes:{"base_name":o02D8DBB5,"downloads":o6CB0A318,"size":o02D8DBB5,"url":oF307D35C,"uuid":o02D8DBB5},bitNumber:4,filterChain:oE2D0F11E,nestingLimit:10,rules:o74701BFF,tagLimit:5000},"FONT":{allowed:oAB15F972,attributes:{"font":oABCFC4A3},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:oB565876D,tagLimit:5000},"FP":oF0834108,"H1":o6B4E87D8,"H2":o6B4E87D8,"H3":o6B4E87D8,"H4":o6B4E87D8,"H5":o6B4E87D8,"H6":o6B4E87D8,"HE":oF0834108,"HEIMU":{allowed:oAB15F972,attributes:{"heimu":o02D8DBB5},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:o8753E5EF,tagLimit:5000},"HR":{allowed:o3EA8980D,attributes:{},bitNumber:4,filterChain:o1B4F5B52,nestingLimit:10,rules:o74701BFF,tagLimit:5000},"I":o56B93CA8,"IFRAME":{allowed:o3EA8980D,attributes:{"content":oF307D35C,"iframe":o6A44C0D0},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"IMG":{allowed:o3EA8980D,attributes:{"alt":o1BC3EAF4,"height":o75AB9259,"src":oF307D35C,"title":o1BC3EAF4,"width":o75AB9259},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"ISPOILER":o8285AC6F,"LI":{allowed:o2D84E093,attributes:{},bitNumber:5,filterChain:o1B4F5B52,nestingLimit:10,rules:{closeParent:{"B":1,"BGCOLOR":1,"C":1,"COLOR":1,"EM":1,"EMAIL":1,"FONT":1,"I":1,"LI":1,"S":1,"SIZE":1,"STRONG":1,"U":1,"URL":1},flags:264,fosterParent:oBFF86ECC},tagLimit:5000},"LIST":{allowed:[65313,7952],attributes:{"start":o75AB9259,"type":{filterChain:[function(attrValue,attrName){return HashmapFilter.filter(attrValue,{"A":"upper-alpha","I":"upper-roman","a":"lower-alpha","i":"lower-roman","1":"decimal"},!1)},o6377B813],required:!1}},bitNumber:4,filterChain:o1B4F5B52,nestingLimit:10,rules:{closeParent:oB256A0CD,createChild:["LI"],flags:3460,fosterParent:oBFF86ECC},tagLimit:5000},"MEDIA":{allowed:[65503,7937],attributes:{},bitNumber:12,filterChain:[function(tag,tagConfig){return(function(tag,hosts,sites,cacheDir){function filterTag(tag,hosts,sites){tag.invalidate();if(tag.hasAttribute('url')){var url=tag.getAttribute('url'),siteId=getSiteIdFromUrl(url,hosts);if(sites[siteId]){var attributes=getAttributes(url,sites[siteId]);if(!empty(attributes)){createTag(siteId.toUpperCase(),tag).setAttributes(attributes)}}}}
function addNamedCaptures(attributes,string,regexps){var matched=!1;regexps.forEach(function(pair){var regexp=pair[0],map=pair[1],m=regexp.exec(string);if(!m){return}
matched=!0;map.forEach(function(name,i){if(m[i]>''&&name>''){attributes[name]=m[i]}})});return matched}
function createTag(tagName,tag){var startPos=tag.getPos(),endTag=tag.getEndTag(),startLen,endPos,endLen;if(endTag){startLen=tag.getLen();endPos=endTag.getPos();endLen=endTag.getLen()}else{startLen=0;endPos=tag.getPos()+tag.getLen();endLen=0}
return addTagPair(tagName,startPos,startLen,endPos,endLen,tag.getSortPriority())}
function empty(attributes){for(var attrName in attributes){return!1}
return!0}
function getAttributes(url,config){var attributes={};addNamedCaptures(attributes,url,config[0]);return attributes}
function getSiteIdFromUrl(url,hosts){var m=/^https?:\/\/([^\/]+)/.exec(url.toLowerCase()),host=m[1]||'';while(host>''){if(hosts[host]){return hosts[host]}
host=host.replace(/^[^.]*./,'')}
return''}
filterTag(tag,hosts,sites)})(tag,registeredVars["MediaEmbed.hosts"],registeredVars["MediaEmbed.sites"],registeredVars.cacheDir)}],nestingLimit:10,rules:{flags:513},tagLimit:5000},"MUSIC163":{allowed:o2BCB01A0,attributes:{"id":o1BC3EAF4,"mode":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"NICONICO":{allowed:o2BCB01A0,attributes:{"smid":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"ONEINDEX":{allowed:o3EA8980D,attributes:{"src":{filterChain:o7476611B,required:!1}},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"POSTMENTION":{allowed:o3EA8980D,attributes:{"discussionid":o6CB0A318,"displayname":o02D8DBB5,"id":o6CB0A318,"number":o6CB0A318,"username":o02D8DBB5},bitNumber:1,filterChain:[function(tag,tagConfig){return(function(tag){return flarum.extensions["flarum-mentions"].filterPostMentions(tag)})(tag)},o118B31AC],nestingLimit:10,rules:oA80287CC,tagLimit:5000},"PROG":{allowed:o3EA8980D,attributes:{"content":o6A44C0D0},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"QQ":{allowed:o2BCB01A0,attributes:{"id":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"QUOTE":{allowed:o2D84E093,attributes:{"author":o1BC3EAF4},bitNumber:4,filterChain:o1B4F5B52,nestingLimit:10,rules:o04FF54AD,tagLimit:5000},"RUBY":{allowed:oAB15F972,attributes:{"ruby":o02D8DBB5},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:o8753E5EF,tagLimit:5000},"S":o56B93CA8,"SIZE":{allowed:oAB15F972,attributes:{"size":{filterChain:[function(attrValue,attrName){return NumericFilter.filterRange(attrValue,8,36,logger)}],required:!0}},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:oB565876D,tagLimit:5000},"SPOILER":{allowed:o2D84E093,attributes:{},bitNumber:8,filterChain:o1B4F5B52,nestingLimit:10,rules:o04FF54AD,tagLimit:5000},"STRONG":o56B93CA8,"SUB":o8285AC6F,"SUMMARY":{allowed:[65487,7952],attributes:{},bitNumber:11,filterChain:o1B4F5B52,nestingLimit:10,rules:{closeParent:oBFF86ECC,flags:256,fosterParent:oBFF86ECC},tagLimit:5000},"SUP":o8285AC6F,"TABLE":{allowed:[65281,7954],attributes:{"table":o6A44C0D0},bitNumber:4,filterChain:o1B4F5B52,nestingLimit:10,rules:{closeParent:oB256A0CD,flags:3460,fosterParent:oBFF86ECC},tagLimit:5000},"TD":{allowed:o2D84E093,attributes:{},bitNumber:10,filterChain:o1B4F5B52,nestingLimit:10,rules:{closeParent:{"B":1,"BGCOLOR":1,"C":1,"COLOR":1,"EM":1,"EMAIL":1,"FONT":1,"I":1,"S":1,"SIZE":1,"STRONG":1,"TD":1,"U":1,"URL":1},flags:264,fosterParent:oBFF86ECC},tagLimit:5000},"TR":{allowed:[65281,7956],attributes:{},bitNumber:9,filterChain:o1B4F5B52,nestingLimit:10,rules:{closeParent:{"B":1,"BGCOLOR":1,"C":1,"COLOR":1,"EM":1,"EMAIL":1,"FONT":1,"I":1,"S":1,"SIZE":1,"STRONG":1,"TD":1,"TR":1,"U":1,"URL":1},flags:3456,fosterParent:oBFF86ECC},tagLimit:5000},"U":o56B93CA8,"UPL-FILE":{allowed:o3EA8980D,attributes:{"content":oABCFC4A3,"size":oABCFC4A3,"uuid":oE2346708},bitNumber:4,filterChain:o1B4F5B52,nestingLimit:10,rules:o74701BFF,tagLimit:5000},"UPL-IMAGE":{allowed:o3EA8980D,attributes:{"content":oABCFC4A3,"size":oABCFC4A3,"url":oF307D35C,"uuid":oE2346708},bitNumber:4,filterChain:o1B4F5B52,nestingLimit:10,rules:o74701BFF,tagLimit:5000},"UPL-IMAGE-PREVIEW":{allowed:o3EA8980D,attributes:{"url":oF307D35C},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"URL":{allowed:oBB506619,attributes:{"title":o1BC3EAF4,"url":oF307D35C},bitNumber:2,filterChain:o1B4F5B52,nestingLimit:10,rules:o939F1698,tagLimit:5000},"USERMENTION":{allowed:o3EA8980D,attributes:{"displayname":o02D8DBB5,"id":o6CB0A318,"username":o02D8DBB5},bitNumber:1,filterChain:[function(tag,tagConfig){return(function(tag){return flarum.extensions["flarum-mentions"].filterUserMentions(tag)})(tag)},o118B31AC],nestingLimit:10,rules:oA80287CC,tagLimit:5000},"XIAMI":{allowed:o2BCB01A0,attributes:{"xmid":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000}};var tagStack;var tagStackIsSorted;var text;var textLen;var uid=0;var wsPos;function disableTag(tagName){if(tagsConfig[tagName]){copyTagConfig(tagName).isDisabled=!0}}
function enableTag(tagName){if(tagsConfig[tagName]){copyTagConfig(tagName).isDisabled=!1}}
function getLogger(){return logger}
function parse(_text){reset(_text);var _uid=uid;executePluginParsers();processTags();finalizeOutput();if(uid!==_uid){throw 'The parser has been reset during execution'}
if(currentFixingCost>maxFixingCost){logger.warn('Fixing cost limit exceeded')}
return output}
function reset(_text){_text=_text.replace(/\r\n?/g,"\n");_text=_text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]+/g,'');logger.clear();cntOpen={};cntTotal={};currentFixingCost=0;currentTag=null;isRich=!1;namespaces={};openTags=[];output='';pos=0;tagStack=[];tagStackIsSorted=!1;text=_text;textLen=text.length;wsPos=0;context=rootContext;context.inParagraph=!1;++uid}
function setTagLimit(tagName,tagLimit){if(tagsConfig[tagName]){copyTagConfig(tagName).tagLimit=tagLimit}}
function setNestingLimit(tagName,nestingLimit){if(tagsConfig[tagName]){copyTagConfig(tagName).nestingLimit=nestingLimit}}
function copyTagConfig(tagName){var tagConfig={},k;for(k in tagsConfig[tagName]){tagConfig[k]=tagsConfig[tagName][k]}
return tagsConfig[tagName]=tagConfig}
function encodeUnicodeSupplementaryCharacters(){output=output.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,encodeUnicodeSupplementaryCharactersCallback)}
function encodeUnicodeSupplementaryCharactersCallback(pair){var cp=(pair.charCodeAt(0)<<10)+pair.charCodeAt(1)-56613888;return'&#'+cp+';'}
function finalizeOutput(){var tmp;outputText(textLen,0,!0);do{tmp=output;output=output.replace(/<([^ />]+)[^>]*><\/\1>/g,'')}
while(output!==tmp);output=output.replace(/<\/i><i>/g,'');output=output.replace(/[\x00-\x08\x0B-\x1F]/g,'');encodeUnicodeSupplementaryCharacters();var tagName=(isRich)?'r':'t';tmp='<'+tagName;if(HINT.namespaces){for(var prefix in namespaces){tmp+=' xmlns:'+prefix+'="urn:s9e:TextFormatter:'+prefix+'"'}}
output=tmp+'>'+output+'</'+tagName+'>'}
function outputTag(tag){isRich=!0;var tagName=tag.getName(),tagPos=tag.getPos(),tagLen=tag.getLen(),tagFlags=tag.getFlags(),skipBefore=0,skipAfter=0;if(HINT.RULE_IGNORE_WHITESPACE&&(tagFlags&RULE_IGNORE_WHITESPACE)){skipBefore=1;skipAfter=(tag.isEndTag())?2:1}
var closeParagraph=!1;if(tag.isStartTag()){if(HINT.RULE_BREAK_PARAGRAPH&&(tagFlags&RULE_BREAK_PARAGRAPH)){closeParagraph=!0}}else{closeParagraph=!0}
outputText(tagPos,skipBefore,closeParagraph);var tagText=(tagLen)?htmlspecialchars_noquotes(text.substr(tagPos,tagLen)):'';if(tag.isStartTag()){if(!HINT.RULE_BREAK_PARAGRAPH||!(tagFlags&RULE_BREAK_PARAGRAPH)){outputParagraphStart(tagPos)}
if(HINT.namespaces){var colonPos=tagName.indexOf(':');if(colonPos>0){namespaces[tagName.substr(0,colonPos)]=0}}
output+='<'+tagName;var attributes=tag.getAttributes(),attributeNames=[];for(var attrName in attributes){attributeNames.push(attrName)}
attributeNames.sort(function(a,b){return(a>b)?1:-1});attributeNames.forEach(function(attrName){output+=' '+attrName+'="'+htmlspecialchars_compat(attributes[attrName].toString()).replace(/\n/g,'&#10;')+'"'});if(tag.isSelfClosingTag()){if(tagLen){output+='>'+tagText+'</'+tagName+'>'}else{output+='/>'}}else if(tagLen){output+='><s>'+tagText+'</s>'}else{output+='>'}}else{if(tagLen){output+='<e>'+tagText+'</e>'}
output+='</'+tagName+'>'}
pos=tagPos+tagLen;wsPos=pos;while(skipAfter&&wsPos<textLen&&text[wsPos]==="\n"){--skipAfter;++wsPos}}
function outputText(catchupPos,maxLines,closeParagraph){if(closeParagraph){if(!(context.flags&RULE_CREATE_PARAGRAPHS)){closeParagraph=!1}else{maxLines=-1}}
if(pos>=catchupPos){if(closeParagraph){outputParagraphEnd()}}
if(wsPos>pos){var skipPos=Math.min(catchupPos,wsPos);output+=text.substr(pos,skipPos-pos);pos=skipPos;if(pos>=catchupPos){if(closeParagraph){outputParagraphEnd()}}}
var catchupLen,catchupText;if(HINT.RULE_IGNORE_TEXT&&context.flags&RULE_IGNORE_TEXT){catchupLen=catchupPos-pos,catchupText=text.substr(pos,catchupLen);if(!/^[ \n\t]*$/.test(catchupText)){catchupText='<i>'+htmlspecialchars_noquotes(catchupText)+'</i>'}
output+=catchupText;pos=catchupPos;if(closeParagraph){outputParagraphEnd()}
return}
var ignorePos=catchupPos,ignoreLen=0;while(maxLines&&--ignorePos>=pos){var c=text[ignorePos];if(c!==' '&&c!=="\n"&&c!=="\t"){break}
if(c==="\n"){--maxLines}
++ignoreLen}
catchupPos-=ignoreLen;if(HINT.RULE_CREATE_PARAGRAPHS&&context.flags&RULE_CREATE_PARAGRAPHS){if(!context.inParagraph){outputWhitespace(catchupPos);if(catchupPos>pos){outputParagraphStart(catchupPos)}}
var pbPos=text.indexOf("\n\n",pos);while(pbPos>-1&&pbPos<catchupPos){outputText(pbPos,0,!0);outputParagraphStart(catchupPos);pbPos=text.indexOf("\n\n",pos)}}
if(catchupPos>pos){catchupText=htmlspecialchars_noquotes(text.substr(pos,catchupPos-pos));if(HINT.RULE_ENABLE_AUTO_BR&&(context.flags&RULES_AUTO_LINEBREAKS)===RULE_ENABLE_AUTO_BR){catchupText=catchupText.replace(/\n/g,"<br/>\n")}
output+=catchupText}
if(closeParagraph){outputParagraphEnd()}
if(ignoreLen){output+=text.substr(catchupPos,ignoreLen)}
pos=catchupPos+ignoreLen}
function outputBrTag(tag){outputText(tag.getPos(),0,!1);output+='<br/>'}
function outputIgnoreTag(tag){var tagPos=tag.getPos(),tagLen=tag.getLen();var ignoreText=text.substr(tagPos,tagLen);outputText(tagPos,0,!1);output+='<i>'+htmlspecialchars_noquotes(ignoreText)+'</i>';isRich=!0;pos=tagPos+tagLen}
function outputParagraphStart(maxPos){if(!HINT.RULE_CREATE_PARAGRAPHS){return}
if(context.inParagraph||!(context.flags&RULE_CREATE_PARAGRAPHS)){return}
outputWhitespace(maxPos);if(pos<textLen){output+='<p>';context.inParagraph=!0}}
function outputParagraphEnd(){if(!context.inParagraph){return}
output+='</p>';context.inParagraph=!1}
function outputVerbatim(tag){var flags=context.flags;context.flags=tag.getFlags();outputText(currentTag.getPos()+currentTag.getLen(),0,!1);context.flags=flags}
function outputWhitespace(maxPos){while(pos<maxPos&&" \n\t".indexOf(text[pos])>-1){output+=text[pos];++pos}}
function disablePlugin(pluginName){if(plugins[pluginName]){plugins[pluginName].isDisabled=!0}}
function enablePlugin(pluginName){if(plugins[pluginName]){plugins[pluginName].isDisabled=!1}}
function executePluginParser(pluginName){var pluginConfig=plugins[pluginName];if(pluginConfig.quickMatch&&text.indexOf(pluginConfig.quickMatch)<0){return}
var matches=[];if(HINT.regexp&&HINT.regexpLimit&&typeof pluginConfig.regexp!=='undefined'&&typeof pluginConfig.regexpLimit!=='undefined'){matches=getMatches(pluginConfig.regexp,pluginConfig.regexpLimit);if(!matches.length){return}}
getPluginParser(pluginName)(text,matches)}
function executePluginParsers(){for(var pluginName in plugins){if(!plugins[pluginName].isDisabled){executePluginParser(pluginName)}}}
function getMatches(regexp,limit){regexp.lastIndex=0;var matches=[],cnt=0,m;while(++cnt<=limit&&(m=regexp.exec(text))){var pos=m.index,match=[[m[0],pos]],i=0;while(++i<m.length){var str=m[i];if(str===undefined){match.push(['',-1])}else{match.push([str,text.indexOf(str,pos)]);pos+=str.length}}
matches.push(match)}
return matches}
function getPluginParser(pluginName){return plugins[pluginName].parser}
function registerParser(pluginName,parser,regexp,limit){if(!plugins[pluginName]){plugins[pluginName]={}}
if(regexp){plugins[pluginName].regexp=regexp;plugins[pluginName].limit=limit||Infinity}
plugins[pluginName].parser=parser}
function closeAncestor(tag){if(!HINT.closeAncestor){return!1}
if(openTags.length){var tagName=tag.getName(),tagConfig=tagsConfig[tagName];if(tagConfig.rules.closeAncestor){var i=openTags.length;while(--i>=0){var ancestor=openTags[i],ancestorName=ancestor.getName();if(tagConfig.rules.closeAncestor[ancestorName]){++currentFixingCost;tagStack.push(tag);addMagicEndTag(ancestor,tag.getPos(),tag.getSortPriority()-1);return!0}}}}
return!1}
function closeParent(tag){if(!HINT.closeParent){return!1}
if(openTags.length){var tagName=tag.getName(),tagConfig=tagsConfig[tagName];if(tagConfig.rules.closeParent){var parent=openTags[openTags.length-1],parentName=parent.getName();if(tagConfig.rules.closeParent[parentName]){++currentFixingCost;tagStack.push(tag);addMagicEndTag(parent,tag.getPos(),tag.getSortPriority()-1);return!0}}}
return!1}
function createChild(tag){if(!HINT.createChild){return}
var tagConfig=tagsConfig[tag.getName()];if(tagConfig.rules.createChild){var priority=-1000,_text=text.substr(pos),tagPos=pos+_text.length-_text.replace(/^[ \n\r\t]+/,'').length;tagConfig.rules.createChild.forEach(function(tagName){addStartTag(tagName,tagPos,0,++priority)})}}
function fosterParent(tag){if(!HINT.fosterParent){return!1}
if(openTags.length){var tagName=tag.getName(),tagConfig=tagsConfig[tagName];if(tagConfig.rules.fosterParent){var parent=openTags[openTags.length-1],parentName=parent.getName();if(tagConfig.rules.fosterParent[parentName]){if(parentName!==tagName&&currentFixingCost<maxFixingCost){addFosterTag(tag,parent)}
tagStack.push(tag);addMagicEndTag(parent,tag.getPos(),tag.getSortPriority()-1);currentFixingCost+=4;return!0}}}
return!1}
function requireAncestor(tag){if(!HINT.requireAncestor){return!1}
var tagName=tag.getName(),tagConfig=tagsConfig[tagName];if(tagConfig.rules.requireAncestor){var i=tagConfig.rules.requireAncestor.length;while(--i>=0){var ancestorName=tagConfig.rules.requireAncestor[i];if(cntOpen[ancestorName]){return!1}}
logger.err('Tag requires an ancestor',{'requireAncestor':tagConfig.rules.requireAncestor.join(', '),'tag':tag});return!0}
return!1}
function addFosterTag(tag,fosterTag){var coords=getMagicStartCoords(tag.getPos()+tag.getLen()),childPos=coords[0],childPrio=coords[1];var childTag=addCopyTag(fosterTag,childPos,0,childPrio);tag.cascadeInvalidationTo(childTag)}
function addMagicEndTag(startTag,tagPos,prio){var tagName=startTag.getName();if(HINT.RULE_IGNORE_WHITESPACE&&((currentTag.getFlags()|startTag.getFlags())&RULE_IGNORE_WHITESPACE)){tagPos=getMagicEndPos(tagPos)}
var endTag=addEndTag(tagName,tagPos,0,prio||0);endTag.pairWith(startTag);return endTag}
function getMagicEndPos(tagPos){while(tagPos>pos&&WHITESPACE.indexOf(text[tagPos-1])>-1){--tagPos}
return tagPos}
function getMagicStartCoords(tagPos){var nextPos,nextPrio,nextTag,prio;if(!tagStack.length){nextPos=textLen+1;nextPrio=0}else{nextTag=tagStack[tagStack.length-1];nextPos=nextTag.getPos();nextPrio=nextTag.getSortPriority()}
while(tagPos<nextPos&&WHITESPACE.indexOf(text[tagPos])>-1){++tagPos}
prio=(tagPos===nextPos)?nextPrio-1:0;return[tagPos,prio]}
function isFollowedByClosingTag(tag){return(!tagStack.length)?!1:tagStack[tagStack.length-1].canClose(tag)}
function processTags(){if(!tagStack.length){return}
for(var tagName in tagsConfig){cntOpen[tagName]=0;cntTotal[tagName]=0}
do{while(tagStack.length){if(!tagStackIsSorted){sortTags()}
currentTag=tagStack.pop();processCurrentTag()}
openTags.forEach(function(startTag){addMagicEndTag(startTag,textLen)})}
while(tagStack.length);}
function processCurrentTag(){if((context.flags&RULE_IGNORE_TAGS)&&!currentTag.canClose(openTags[openTags.length-1])&&!currentTag.isSystemTag()){currentTag.invalidate()}
var tagPos=currentTag.getPos(),tagLen=currentTag.getLen();if(pos>tagPos&&!currentTag.isInvalid()){var startTag=currentTag.getStartTag();if(startTag&&openTags.indexOf(startTag)>=0){addEndTag(startTag.getName(),pos,Math.max(0,tagPos+tagLen-pos)).pairWith(startTag);return}
if(currentTag.isIgnoreTag()){var ignoreLen=tagPos+tagLen-pos;if(ignoreLen>0){addIgnoreTag(pos,ignoreLen);return}}
currentTag.invalidate()}
if(currentTag.isInvalid()){return}
if(currentTag.isIgnoreTag()){outputIgnoreTag(currentTag)}else if(currentTag.isBrTag()){if(!HINT.RULE_PREVENT_BR||!(context.flags&RULE_PREVENT_BR)){outputBrTag(currentTag)}}else if(currentTag.isParagraphBreak()){outputText(currentTag.getPos(),0,!0)}else if(currentTag.isVerbatim()){outputVerbatim(currentTag)}else if(currentTag.isStartTag()){processStartTag(currentTag)}else{processEndTag(currentTag)}}
function processStartTag(tag){var tagName=tag.getName(),tagConfig=tagsConfig[tagName];if(cntTotal[tagName]>=tagConfig.tagLimit){logger.err('Tag limit exceeded',{'tag':tag,'tagName':tagName,'tagLimit':tagConfig.tagLimit});tag.invalidate();return}
filterTag(tag);if(tag.isInvalid()){return}
if(currentFixingCost<maxFixingCost){if(fosterParent(tag)||closeParent(tag)||closeAncestor(tag)){return}}
if(cntOpen[tagName]>=tagConfig.nestingLimit){logger.err('Nesting limit exceeded',{'tag':tag,'tagName':tagName,'nestingLimit':tagConfig.nestingLimit});tag.invalidate();return}
if(!tagIsAllowed(tagName)){var msg='Tag is not allowed in this context',context={'tag':tag,'tagName':tagName};if(tag.getLen()>0){logger.warn(msg,context)}else{logger.debug(msg,context)}
tag.invalidate();return}
if(requireAncestor(tag)){tag.invalidate();return}
if(HINT.RULE_AUTO_CLOSE&&tag.getFlags()&RULE_AUTO_CLOSE&&!tag.isSelfClosingTag()&&!tag.getEndTag()&&!isFollowedByClosingTag(tag)){var newTag=new Tag(Tag.SELF_CLOSING_TAG,tagName,tag.getPos(),tag.getLen());newTag.setAttributes(tag.getAttributes());newTag.setFlags(tag.getFlags());tag=newTag}
if(HINT.RULE_TRIM_FIRST_LINE&&tag.getFlags()&RULE_TRIM_FIRST_LINE&&text[tag.getPos()+tag.getLen()]==="\n"){addIgnoreTag(tag.getPos()+tag.getLen(),1)}
outputTag(tag);pushContext(tag);createChild(tag)}
function processEndTag(tag){var tagName=tag.getName();if(!cntOpen[tagName]){return}
var closeTags=[];var i=openTags.length;while(--i>=0){var openTag=openTags[i];if(tag.canClose(openTag)){break}
closeTags.push(openTag);++currentFixingCost}
if(i<0){logger.debug('Skipping end tag with no start tag',{'tag':tag});return}
var flags=tag.getFlags();closeTags.forEach(function(openTag){flags|=openTag.getFlags()});var ignoreWhitespace=(HINT.RULE_IGNORE_WHITESPACE&&(flags&RULE_IGNORE_WHITESPACE));var keepReopening=HINT.RULE_AUTO_REOPEN&&(currentFixingCost<maxFixingCost),reopenTags=[];closeTags.forEach(function(openTag){var openTagName=openTag.getName();if(keepReopening){if(openTag.getFlags()&RULE_AUTO_REOPEN){reopenTags.push(openTag)}else{keepReopening=!1}}
var tagPos=tag.getPos();if(ignoreWhitespace){tagPos=getMagicEndPos(tagPos)}
var endTag=new Tag(Tag.END_TAG,openTagName,tagPos,0);endTag.setFlags(openTag.getFlags());outputTag(endTag);popContext()});outputTag(tag);popContext();if(closeTags.length&&currentFixingCost<maxFixingCost){var ignorePos=pos;i=tagStack.length;while(--i>=0&&++currentFixingCost<maxFixingCost){var upcomingTag=tagStack[i];if(upcomingTag.getPos()>ignorePos||upcomingTag.isStartTag()){break}
var j=closeTags.length;while(--j>=0&&++currentFixingCost<maxFixingCost){if(upcomingTag.canClose(closeTags[j])){closeTags.splice(j,1);if(reopenTags[j]){reopenTags.splice(j,1)}
ignorePos=Math.max(ignorePos,upcomingTag.getPos()+upcomingTag.getLen());break}}}
if(ignorePos>pos){outputIgnoreTag(new Tag(Tag.SELF_CLOSING_TAG,'i',pos,ignorePos-pos))}}
reopenTags.forEach(function(startTag){var newTag=addCopyTag(startTag,pos,0);var endTag=startTag.getEndTag();if(endTag){newTag.pairWith(endTag)}})}
function popContext(){var tag=openTags.pop();--cntOpen[tag.getName()];context=context.parentContext}
function pushContext(tag){var tagName=tag.getName(),tagFlags=tag.getFlags(),tagConfig=tagsConfig[tagName];++cntTotal[tagName];if(tag.isSelfClosingTag()){return}
var allowed=[];context.allowed.forEach(function(v,k){if(!HINT.RULE_IS_TRANSPARENT||!(tagFlags&RULE_IS_TRANSPARENT)){v=(v&0xFF00)|(v>>8)}
allowed.push(tagConfig.allowed[k]&v)});var flags=tagFlags|(context.flags&RULES_INHERITANCE);if(flags&RULE_DISABLE_AUTO_BR){flags&=~RULE_ENABLE_AUTO_BR}
++cntOpen[tagName];openTags.push(tag);context={parentContext:context};context.allowed=allowed;context.flags=flags}
function tagIsAllowed(tagName){var n=tagsConfig[tagName].bitNumber;return!!(context.allowed[n>>3]&(1<<(n&7)))}
function addStartTag(name,pos,len,prio){return addTag(Tag.START_TAG,name,pos,len,prio||0)}
function addEndTag(name,pos,len,prio){return addTag(Tag.END_TAG,name,pos,len,prio||0)}
function addSelfClosingTag(name,pos,len,prio){return addTag(Tag.SELF_CLOSING_TAG,name,pos,len,prio||0)}
function addBrTag(pos,prio){return addTag(Tag.SELF_CLOSING_TAG,'br',pos,0,prio||0)}
function addIgnoreTag(pos,len,prio){return addTag(Tag.SELF_CLOSING_TAG,'i',pos,Math.min(len,textLen-pos),prio||0)}
function addParagraphBreak(pos,prio){return addTag(Tag.SELF_CLOSING_TAG,'pb',pos,0,prio||0)}
function addCopyTag(tag,pos,len,prio){var copy=addTag(tag.getType(),tag.getName(),pos,len,tag.getSortPriority());copy.setAttributes(tag.getAttributes());return copy}
function addTag(type,name,pos,len,prio){var tag=new Tag(type,name,pos,len,prio||0);if(tagsConfig[name]){tag.setFlags(tagsConfig[name].rules.flags)}
if((!tagsConfig[name]&&!tag.isSystemTag())||isInvalidTextSpan(pos,len)){tag.invalidate()}else if(tagsConfig[name]&&tagsConfig[name].isDisabled){logger.warn('Tag is disabled',{'tag':tag,'tagName':name});tag.invalidate()}else{insertTag(tag)}
return tag}
function isInvalidTextSpan(pos,len){return(len<0||pos<0||pos+len>textLen||/[\uDC00-\uDFFF]/.test(text.substr(pos,1)+text.substr(pos+len,1)))}
function insertTag(tag){if(!tagStackIsSorted){tagStack.push(tag)}else{var i=tagStack.length,key=getSortKey(tag);while(i>0&&key>getSortKey(tagStack[i-1])){tagStack[i]=tagStack[i-1];--i}
tagStack[i]=tag}}
function addTagPair(name,startPos,startLen,endPos,endLen,prio){var endTag=addEndTag(name,endPos,endLen,-prio||0),startTag=addStartTag(name,startPos,startLen,prio||0);startTag.pairWith(endTag);return startTag}
function addVerbatim(pos,len,prio){return addTag(Tag.SELF_CLOSING_TAG,'v',pos,len,prio||0)}
function sortTags(){var arr={},keys=[],i=tagStack.length;while(--i>=0){var tag=tagStack[i],key=getSortKey(tag,i);keys.push(key);arr[key]=tag}
keys.sort();i=keys.length;tagStack=[];while(--i>=0){tagStack.push(arr[keys[i]])}
tagStackIsSorted=!0}
function getSortKey(tag,tagIndex){var prioFlag=(tag.getSortPriority()>=0),prio=tag.getSortPriority();if(!prioFlag){prio+=(1<<30)}
var lenFlag=(tag.getLen()>0),lenOrder;if(lenFlag){lenOrder=textLen-tag.getLen()}else{var order={};order[Tag.END_TAG]=0;order[Tag.SELF_CLOSING_TAG]=1;order[Tag.START_TAG]=2;lenOrder=order[tag.getType()]}
return hex32(tag.getPos())+(+prioFlag)+hex32(prio)+(+lenFlag)+hex32(lenOrder)+hex32(tagIndex||0)}
function hex32(number){var hex=number.toString(16);return"        ".substr(hex.length)+hex}
var MSXML=(typeof DOMParser==='undefined'||typeof XSLTProcessor==='undefined');var xslt={init:function(xsl){var stylesheet=xslt.loadXML(xsl);if(MSXML){var generator=new ActiveXObject('MSXML2.XSLTemplate.6.0');generator.stylesheet=stylesheet;xslt.proc=generator.createProcessor()}else{xslt.proc=new XSLTProcessor;xslt.proc.importStylesheet(stylesheet)}},loadXML:function(xml){var dom;if(MSXML){dom=new ActiveXObject('MSXML2.FreeThreadedDOMDocument.6.0');dom.async=!1;dom.validateOnParse=!1;dom.loadXML(xml)}else{dom=(new DOMParser).parseFromString(xml,'text/xml')}
if(!dom){throw 'Cannot parse '+xml}
return dom},setParameter:function(paramName,paramValue){if(MSXML){xslt.proc.addParameter(paramName,paramValue,'')}else{xslt.proc.setParameter(null,paramName,paramValue)}},transformToFragment:function(xml,targetDoc){if(MSXML){var div=targetDoc.createElement('div'),fragment=targetDoc.createDocumentFragment();xslt.proc.input=xslt.loadXML(xml);xslt.proc.transform();div.innerHTML=xslt.proc.output;while(div.firstChild){fragment.appendChild(div.firstChild)}
return fragment}
return xslt.proc.transformToFragment(xslt.loadXML(xml),targetDoc)}};xslt.init(xsl);var functionCache={};function preview(text,target){var targetDoc=target.ownerDocument;if(!targetDoc){throw 'Target does not have a ownerDocument'}
var resultFragment=xslt.transformToFragment(parse(text).replace(/<[eis]>[^<]*<\/[eis]>/g,''),targetDoc),lastUpdated=target;if(typeof window!=='undefined'&&'chrome' in window){resultFragment.querySelectorAll('script').forEach(function(oldScript){let newScript=document.createElement('script');for(let attribute of oldScript.attributes){newScript.setAttribute(attribute.name,attribute.value)}
newScript.textContent=oldScript.textContent;oldScript.parentNode.replaceChild(newScript,oldScript)})}
if(HINT.hash){computeHashes(resultFragment)}
if(HINT.onRender){executeEvents(resultFragment,'render')}
function computeHashes(fragment){var nodes=fragment.querySelectorAll('[data-s9e-livepreview-hash]'),i=nodes.length;while(--i>=0){nodes[i].setAttribute('data-s9e-livepreview-hash',hash(nodes[i].outerHTML))}}
function executeEvent(node,eventName){var code=node.getAttribute('data-s9e-livepreview-on'+eventName);if(!functionCache[code]){functionCache[code]=new Function(code)}
functionCache[code].call(node)}
function executeEvents(root,eventName){if(root instanceof Element&&root.hasAttribute('data-s9e-livepreview-on'+eventName)){executeEvent(root,eventName)}
var nodes=root.querySelectorAll('[data-s9e-livepreview-on'+eventName+']'),i=nodes.length;while(--i>=0){executeEvent(nodes[i],eventName)}}
function refreshElementContent(oldParent,newParent){var oldNodes=oldParent.childNodes,newNodes=newParent.childNodes,oldCnt=oldNodes.length,newCnt=newNodes.length,oldNode,newNode,left=0,right=0;while(left<oldCnt&&left<newCnt){oldNode=oldNodes[left];newNode=newNodes[left];if(!refreshNode(oldNode,newNode)){break}
++left}
var maxRight=Math.min(oldCnt-left,newCnt-left);while(right<maxRight){oldNode=oldNodes[oldCnt-(right+1)];newNode=newNodes[newCnt-(right+1)];if(!refreshNode(oldNode,newNode)){break}
++right}
var i=oldCnt-right;while(--i>=left){oldParent.removeChild(oldNodes[i]);lastUpdated=oldParent}
var rightBoundary=newCnt-right;if(left>=rightBoundary){return}
var newNodesFragment=targetDoc.createDocumentFragment();i=left;do{newNode=newNodes[i];if(HINT.onUpdate&&newNode instanceof Element){executeEvents(newNode,'update')}
lastUpdated=newNodesFragment.appendChild(newNode)}
while(i<--rightBoundary);if(!right){oldParent.appendChild(newNodesFragment)}else{oldParent.insertBefore(newNodesFragment,oldParent.childNodes[left])}}
function refreshNode(oldNode,newNode){if(oldNode.nodeName!==newNode.nodeName||oldNode.nodeType!==newNode.nodeType){return!1}
if(oldNode instanceof HTMLElement&&newNode instanceof HTMLElement){if(!oldNode.isEqualNode(newNode)&&!elementHashesMatch(oldNode,newNode)){if(HINT.onUpdate&&newNode.hasAttribute('data-s9e-livepreview-onupdate')){executeEvent(newNode,'update')}
syncElementAttributes(oldNode,newNode);refreshElementContent(oldNode,newNode)}}else if(oldNode.nodeType===3||oldNode.nodeType===8){if(oldNode.nodeValue!==newNode.nodeValue){oldNode.nodeValue=newNode.nodeValue;lastUpdated=oldNode}}
return!0}
function elementHashesMatch(oldEl,newEl){if(!HINT.hash){return!1}
const attrName='data-s9e-livepreview-hash';return oldEl.hasAttribute(attrName)&&newEl.hasAttribute(attrName)&&oldEl.getAttribute(attrName)===newEl.getAttribute(attrName)}
function hash(text){var pos=text.length,s1=0,s2=0;while(--pos>=0){s1=(s1+text.charCodeAt(pos))%0xFFFF;s2=(s1+s2)%0xFFFF}
return(s2<<16)|s1}
function syncElementAttributes(oldEl,newEl){var oldAttributes=oldEl.attributes,newAttributes=newEl.attributes,oldCnt=oldAttributes.length,newCnt=newAttributes.length,i=oldCnt,ignoreAttrs=' '+oldEl.getAttribute('data-s9e-livepreview-ignore-attrs')+' ';while(--i>=0){var oldAttr=oldAttributes[i],namespaceURI=oldAttr.namespaceURI,attrName=oldAttr.name;if(HINT.ignoreAttrs&&ignoreAttrs.indexOf(' '+attrName+' ')>-1){continue}
if(!newEl.hasAttributeNS(namespaceURI,attrName)){oldEl.removeAttributeNS(namespaceURI,attrName);lastUpdated=oldEl}}
i=newCnt;while(--i>=0){var newAttr=newAttributes[i],namespaceURI=newAttr.namespaceURI,attrName=newAttr.name,attrValue=newAttr.value;if(HINT.ignoreAttrs&&ignoreAttrs.indexOf(' '+attrName+' ')>-1){continue}
if(attrValue!==oldEl.getAttributeNS(namespaceURI,attrName)){oldEl.setAttributeNS(namespaceURI,attrName,attrValue);lastUpdated=oldEl}}}
refreshElementContent(target,resultFragment);return lastUpdated}
function setParameter(paramName,paramValue){xslt.setParameter(paramName,paramValue)}if(!window.s9e)window.s9e={};window.s9e.TextFormatter={'preview':preview}})();;

var module={};

module.exports=function(t){var o={};function e(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)e.d(r,n,function(o){return t[o]}.bind(null,n));return r},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=11)}([function(t,o){t.exports=flarum.core.compat.extend},function(t,o){t.exports=flarum.core.compat.app},function(t,o){t.exports=flarum.core.compat["models/Post"]},function(t,o){t.exports=flarum.core.compat["models/Discussion"]},function(t,o){t.exports=flarum.core.compat["utils/PostControls"]},,function(t,o){t.exports=flarum.core.compat["components/Post"]},function(t,o){t.exports=flarum.core.compat["components/Badge"]},function(t,o){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,o){t.exports=flarum.core.compat["components/CommentPost"]},function(t,o){t.exports=flarum.core.compat["components/Button"]},function(t,o,e){"use strict";e.r(o);var r=e(0),n=e(1),a=e.n(n),p=e(3),s=e.n(p),i=e(2),u=e.n(i),c=e(7),l=e.n(c),f=e(8),d=e.n(f),v=e(6),b=e.n(v),x=e(9),y=e.n(x),A=e(10),g=e.n(A),h=e(4),_=e.n(h);a.a.initializers.add("flarum-approval",(function(){s.a.prototype.isApproved=s.a.attribute("isApproved"),Object(r.extend)(s.a.prototype,"badges",(function(t){this.isApproved()||t.has("hidden")||t.add("awaitingApproval",m(l.a,{type:"awaitingApproval",icon:"fas fa-gavel",label:a.a.translator.trans("flarum-approval.forum.badge.awaiting_approval_tooltip")}))})),u.a.prototype.isApproved=u.a.attribute("isApproved"),u.a.prototype.canApprove=u.a.attribute("canApprove"),Object(r.extend)(d.a.prototype,"attrs",(function(t){this.props.discussion.isApproved()||(t.className+=" DiscussionListItem--unapproved")})),Object(r.extend)(b.a.prototype,"attrs",(function(t){this.props.post.isApproved()||(t.className+=" Post--unapproved")})),Object(r.extend)(y.a.prototype,"headerItems",(function(t){this.props.post.isApproved()||this.props.post.isHidden()||t.add("unapproved",a.a.translator.trans("flarum-approval.forum.post.awaiting_approval_text"))})),Object(r.override)(b.a.prototype,"flagReason",(function(t,o){return"approval"===o.type()?a.a.translator.trans("flarum-approval.forum.post.awaiting_approval_text"):t(o)})),Object(r.extend)(_.a,"destructiveControls",(function(t,o){!o.isApproved()&&o.canApprove()&&t.add("approve",m(g.a,{icon:"fas fa-check",onclick:_.a.approveAction.bind(o)},a.a.translator.trans("flarum-approval.forum.post_controls.approve_button")),10)})),_.a.approveAction=function(){this.save({isApproved:!0}),1===this.number()&&this.discussion().pushAttributes({isApproved:!0})}}),-10)}]);
;

flarum.extensions['flarum-approval']=module.exports;

var module={};

module.exports=function(e){var d={};function a(u){if(d[u])return d[u].exports;var o=d[u]={i:u,l:!1,exports:{}};return e[u].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=e,a.c=d,a.d=function(e,d,u){a.o(e,d)||Object.defineProperty(e,d,{enumerable:!0,get:u})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,d){if(1&d&&(e=a(e)),8&d)return e;if(4&d&&"object"==typeof e&&e&&e.__esModule)return e;var u=Object.create(null);if(a.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:e}),2&d&&"string"!=typeof e)for(var o in e)a.d(u,o,function(d){return e[d]}.bind(null,o));return u},a.n=function(e){var d=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(d,"a",d),d},a.o=function(e,d){return Object.prototype.hasOwnProperty.call(e,d)},a.p="",a(a.s=10)}([function(e,d){e.exports=flarum.core.compat.extend},function(e){e.exports=JSON.parse('{"😀":["gleeful"],"😃":["glad","smile"],"😄":["happy"],"😁":["blissful","grin"],"😆":["amused","laugh","lol"],"😅":["embarassed"],"🤣":["entertained","rofl"],"😂":["joyful","haha"],"🙂":["pleased"],"🙃":["ecstatic","upside_down"],"😉":["coy","wink"],"😊":["anxious","blush"],"😇":["innocent","halo"],"🥰":["love"],"😍":["lovestruck"],"🤩":["starstruck"],"😘":["flirty"],"😗":["kiss"],"☺️":["relaxed"],"😚":["loving_kiss"],"😙":["happy_kiss"],"😋":["yum","savour"],"😛":["playful","tongue_out"],"😜":["mischievous"],"🤪":["crazy"],"😝":["facetious","lmao"],"🤑":["pretentious","money_mouth"],"🤗":["hugging"],"🤭":["gasp"],"🤫":["shushing"],"🤔":["curious","thinking"],"🤐":["silenced","zipper_mouth"],"🤨":["contempt"],"😐️":["indifferent","neutral"],"😑":["apathetic","expressionless"],"😶":["vacant","no_mouth"],"😏":["cocky","smirk"],"😒":["unamused"],"🙄":["disbelief"],"😬":["grimaced"],"🤥":["lying"],"😌":["relieved"],"😔":["pensive"],"😪":["sleepy"],"🤤":["drooling"],"😴":["exhausted","sleeping"],"😷":["ill","mask"],"🤒":["sick"],"🤕":["injured"],"🤢":["nauseated"],"🤮":["vomiting"],"🤧":["sneezing"],"🥵":["overheating"],"🥶":["freezing"],"🥴":["woozy"],"😵":["dizzy"],"🤯":["shocked","exploding_head"],"🤠":["cowboy"],"🥳":["partying","celebrating"],"😎":["confident"],"🤓":["nerd"],"🧐":["monocle"],"😕":["confused"],"😟":["worried"],"🙁":["cheerless"],"☹️":["sad","frowning"],"😮":["surprised"],"😯":["hushed"],"😲":["astonished"],"😳":["flushed"],"🥺":["pleading"],"😦":["bored"],"😧":["anguished","wtf"],"😨":["fearful"],"😰":["frustrated"],"😥":["hopeful"],"😢":["upset","cry"],"😭":["distressed","sob"],"😱":["frightened","scream"],"😖":["confounded"],"😣":["persevered"],"😞":["disappointed"],"😓":["shamed"],"😩":["weary"],"😫":["tired"],"🥱":["yawn"],"😤":["annoyed","hrmph"],"😡":["enraged","pout"],"😠":["angry"],"🤬":["censored"],"😈":["imp"],"👿":["angry_imp"],"💀":["skull"],"☠️":["crossbones"],"💩":["poop"],"🤡":["clown"],"👹":["ogre"],"👺":["goblin"],"👻":["ghost"],"👽️":["alien"],"👾":["alien_monster","space_invader"],"🤖":["robot"],"😺":["smiling_cat"],"😸":["grinning_cat"],"😹":["joyful_cat"],"😻":["lovestruck_cat"],"😼":["smirking_cat"],"😽":["kissing_cat"],"🙀":["weary_cat"],"😿":["crying_cat"],"😾":["pouting_cat"],"🙈":["see_no_evil"],"🙉":["hear_no_evil"],"🙊":["speak_no_evil"],"💋":["kiss_lips"],"💌":["love_letter"],"💘":["cupid"],"💝":["heart_ribbon"],"💖":["sparkling_heart"],"💗":["heartpulse"],"💓":["heartbeat"],"💞":["revolving_hearts"],"💕":["two_hearts"],"💟":["heart_decoration"],"❣️":["heart_exclamation"],"💔":["broken_heart"],"❤️":["heart"],"🧡":["orange_heart"],"💛":["yellow_heart"],"💚":["green_heart"],"💙":["blue_heart"],"💜":["purple_heart"],"🤎":["brown_heart"],"🖤":["black_heart"],"🤍":["white_heart"],"💯":["100"],"💢":["anger"],"💥":["boom","collision"],"💫":["dizzy_star"],"💦":["sweat_drops"],"💨":["dash"],"🕳️":["hole"],"💣️":["bomb"],"💬":["speech"],"👁‍🗨":["eye_bubble"],"🗨️":["left_speech"],"🗯️":["right_anger_speech"],"💭":["thought"],"💤":["zzz"],"👋":["wave"],"🤚":["raised_backhand"],"🖐️":["splayed_hand"],"✋":["raised_hand"],"🖖":["vulcan"],"👌":["ok_hand"],"🤏":["pinch"],"✌️":["victory"],"🤞":["fingers_crossed"],"🤟":["love_you_gesture"],"🤘":["metal"],"🤙":["call_me"],"👈️":["point_left"],"👉️":["point_right"],"👆️":["backhand_point_up"],"🖕":["middle_finger"],"👇️":["point_down"],"☝️":["point_up"],"👍️":["thumbsup","+1","yes"],"👎️":["thumbsdown","-1","no"],"✊":["fist"],"👊":["punch"],"🤛":["left_facing_fist"],"🤜":["right_facing_fist"],"👏":["clap"],"🙌":["raised_hands"],"👐":["open_hands"],"🤲":["palms_up"],"🤝":["handshake"],"🙏":["pray"],"✍️":["writing_hand"],"💅":["nail_care"],"🤳":["selfie"],"💪":["muscle","right_bicep"],"🦾":["mech_arm"],"🦿":["mech_leg"],"🦵":["leg"],"🦶":["foot"],"👂️":["ear"],"🦻":["hearing_aid"],"👃":["nose"],"🧠":["brain"],"🦷":["tooth"],"🦴":["bone"],"👀":["eyes"],"👁️":["eye"],"👅":["tongue"],"👄":["lips"],"👶":["baby"],"🧒":["child"],"👦":["boy"],"👧":["girl"],"🧑":["adult"],"👱":["blond_person"],"👨":["man"],"🧔":["bearded_person"],"👱‍♂️":["blond_man"],"👨‍🦰":["red_haired_man"],"👨‍🦱":["curly_haired_man"],"👨‍🦳":["white_haired_man"],"👨‍🦲":["bald_man"],"👩":["woman"],"👱‍♀️":["blond_woman"],"👩‍🦰":["red_haired_woman"],"👩‍🦱":["curly_haired_woman"],"👩‍🦳":["white_haired_woman"],"👩‍🦲":["bald_woman"],"🧓":["older_adult"],"👴":["older_man"],"👵":["older_woman"],"🙍":["person_frowning"],"🙍‍♂️":["man_frowning"],"🙍‍♀️":["woman_frowning"],"🙎":["person_pouting"],"🙎‍♂️":["man_pouting"],"🙎‍♀️":["woman_pouting"],"🙅":["person_gesturing_no"],"🙅‍♂️":["man_gesturing_no"],"🙅‍♀️":["woman_gesturing_no"],"🙆":["person_gesturing_ok"],"🙆‍♂️":["man_gesturing_ok"],"🙆‍♀️":["woman_gesturing_ok"],"💁":["person_tipping_hand"],"💁‍♂️":["man_tipping_hand"],"💁‍♀️":["woman_tipping_hand"],"🙋":["person_raising_hand"],"🙋‍♂️":["man_raising_hand"],"🙋‍♀️":["woman_raising_hand"],"🧏":["person_deaf"],"🧏‍♂️":["man_deaf"],"🧏‍♀️":["woman_deaf"],"🙇":["person_bowing"],"🙇‍♂️":["man_bowing"],"🙇‍♀️":["woman_bowing"],"🤦":["person_facepalming"],"🤦‍♂️":["man_facepalming"],"🤦‍♀️":["woman_facepalming"],"🤷":["person_shrugging"],"🤷‍♂️":["man_shrugging"],"🤷‍♀️":["woman_shrugging"],"👨‍⚕️":["man_health_worker"],"👩‍⚕️":["woman_health_worker"],"👨‍🎓":["man_student"],"👩‍🎓":["woman_student"],"👨‍🏫":["man_teacher"],"👩‍🏫":["woman_teacher"],"👨‍⚖️":["man_judge"],"👩‍⚖️":["woman_judge"],"👨‍🌾":["man_farmer"],"👩‍🌾":["woman_farmer"],"👨‍🍳":["man_cook"],"👩‍🍳":["woman_cook"],"👨‍🔧":["man_mechanic"],"👩‍🔧":["woman_mechanic"],"👨‍🏭":["man_factory_worker"],"👩‍🏭":["woman_factory_worker"],"👨‍💼":["man_office_worker"],"👩‍💼":["woman_office_worker"],"👨‍🔬":["man_scientist"],"👩‍🔬":["woman_scientist"],"👨‍💻":["man_technologist"],"👩‍💻":["woman_technologist"],"👨‍🎤":["man_singer"],"👩‍🎤":["woman_singer"],"👨‍🎨":["man_artist"],"👩‍🎨":["woman_artist"],"👨‍✈️":["man_pilot"],"👩‍✈️":["woman_pilot"],"👨‍🚀":["man_astronaut"],"👩‍🚀":["woman_astronaut"],"👨‍🚒":["man_firefighter"],"👩‍🚒":["woman_firefighter"],"👮":["police_officer"],"👮‍♂️":["man_police_officer"],"👮‍♀️":["woman_police_officer"],"🕵️":["detective"],"🕵️‍♂️":["man_detective"],"🕵️‍♀️":["woman_detective"],"💂":["guard"],"💂‍♂️":["man_guard"],"💂‍♀️":["woman_guard"],"👷":["construction_worker"],"👷‍♂️":["man_construction_worker"],"👷‍♀️":["woman_construction_worker"],"🤴":["prince"],"👸":["princess"],"👳":["person_turban"],"👳‍♂️":["man_turban"],"👳‍♀️":["woman_turban"],"👲":["man_chinese_cap"],"🧕":["woman_headscarf"],"🤵":["man_tuxedo"],"👰":["bride_veil"],"🤰":["pregnant_woman"],"🤱":["breast_feeding"],"👼":["baby_angel"],"🎅":["santa"],"🤶":["mrs_claus"],"🦸":["hero","superhero"],"🦸‍♂️":["man_hero"],"🦸‍♀️":["woman_hero"],"🦹":["villain","supervillain"],"🦹‍♂️":["man_villain"],"🦹‍♀️":["woman_villain"],"🧙":["mage"],"🧙‍♂️":["man_mage"],"🧙‍♀️":["woman_mage"],"🧚":["fairy"],"🧚‍♂️":["man_fairy"],"🧚‍♀️":["woman_fairy"],"🧛":["vampire"],"🧛‍♂️":["man_vampire"],"🧛‍♀️":["woman_vampire"],"🧜":["merperson"],"🧜‍♂️":["merman"],"🧜‍♀️":["mermaid"],"🧝":["elf"],"🧝‍♂️":["man_elf"],"🧝‍♀️":["woman_elf"],"🧞":["genie"],"🧞‍♂️":["man_genie"],"🧞‍♀️":["woman_genie"],"🧟":["zombie"],"🧟‍♂️":["man_zombie"],"🧟‍♀️":["woman_zombie"],"💆":["person_getting_massage"],"💆‍♂️":["man_getting_face_massage"],"💆‍♀️":["woman_getting_face_massage"],"💇":["person_getting_haircut"],"💇‍♂️":["man_getting_haircut"],"💇‍♀️":["woman_getting_haircut"],"🚶":["person_walking"],"🚶‍♂️":["man_walking"],"🚶‍♀️":["woman_walking"],"🧍":["person_standing"],"🧍‍♂️":["man_standing"],"🧍‍♀️":["woman_standing"],"🧎":["person_kneeling"],"🧎‍♂️":["man_kneeling"],"🧎‍♀️":["woman_kneeling"],"👨‍🦯":["man_probing_cane"],"👩‍🦯":["woman_probing_cane"],"👨‍🦼":["man_motor_wheelchair"],"👩‍🦼":["woman_motor_wheelchair"],"👨‍🦽":["man_wheelchair"],"👩‍🦽":["woman_wheelchair"],"🏃":["person_running"],"🏃‍♂️":["man_running"],"🏃‍♀️":["woman_running"],"💃":["dancer","woman_dancing"],"🕺":["man_dancing"],"🕴️":["levitate"],"👯":["people_bunny_ears_partying"],"👯‍♂️":["men_bunny_ears_partying"],"👯‍♀️":["women_bunny_ears_partying"],"🧖":["person_steamy_room"],"🧖‍♂️":["man_steamy_room"],"🧖‍♀️":["woman_steamy_room"],"🧗":["person_climbing"],"🧗‍♂️":["man_climbing"],"🧗‍♀️":["woman_climbing"],"🤺":["person_fencing"],"🏇":["horse_racing"],"⛷️":["skier"],"🏂️":["snowboarder"],"🏌️":["person_golfing"],"🏌️‍♂️":["man_golfing"],"🏌️‍♀️":["woman_golfing"],"🏄️":["person_surfing"],"🏄‍♂️":["man_surfing"],"🏄‍♀️":["woman_surfing"],"🚣":["person_rowing_boat"],"🚣‍♂️":["man_rowing_boat"],"🚣‍♀️":["woman_rowing_boat"],"🏊️":["person_swimming"],"🏊‍♂️":["man_swimming"],"🏊‍♀️":["woman_swimming"],"⛹️":["person_bouncing_ball"],"⛹️‍♂️":["man_bouncing_ball"],"⛹️‍♀️":["woman_bouncing_ball"],"🏋️":["person_lifting_weights"],"🏋️‍♂️":["man_lifting_weights"],"🏋️‍♀️":["woman_lifting_weights"],"🚴":["person_biking"],"🚴‍♂️":["man_biking"],"🚴‍♀️":["woman_biking"],"🚵":["person_mountain_biking"],"🚵‍♂️":["man_mountain_biking"],"🚵‍♀️":["woman_mountain_biking"],"🤸":["person_cartwheel"],"🤸‍♂️":["man_cartwheeling"],"🤸‍♀️":["woman_cartwheeling"],"🤼":["people_wrestling"],"🤼‍♂️":["men_wrestling"],"🤼‍♀️":["women_wrestling"],"🤽":["person_water_polo"],"🤽‍♂️":["man_water_polo"],"🤽‍♀️":["woman_water_polo"],"🤾":["person_handball"],"🤾‍♂️":["man_handball"],"🤾‍♀️":["woman_handball"],"🤹":["person_juggling"],"🤹‍♂️":["man_juggling"],"🤹‍♀️":["woman_juggling"],"🧘":["person_lotus_position"],"🧘‍♂️":["man_lotus_position"],"🧘‍♀️":["woman_lotus_position"],"🛀":["bath"],"🛌":["in_bed"],"🧑‍🤝‍🧑":["holding_hands_people"],"👭":["holding_hands_ww"],"👫":["holding_hands_mw","holding_hands_wm"],"👬":["holding_hands_mm"],"💏":["couple"],"👩‍❤️‍💋‍👨":["kiss_mw","kiss_wm"],"👨‍❤️‍💋‍👨":["kiss_mm"],"👩‍❤️‍💋‍👩":["kiss_ww"],"💑":["couple_heart"],"👩‍❤️‍👨":["couple_mw","couple_wm"],"👨‍❤️‍👨":["couple_mm"],"👩‍❤️‍👩":["couple_ww"],"👪️":["family"],"👨‍👩‍👦":["family_mwb"],"👨‍👩‍👧":["family_mwg"],"👨‍👩‍👧‍👦":["family_mwgb"],"👨‍👩‍👦‍👦":["family_mwbb"],"👨‍👩‍👧‍👧":["family_mwgg"],"👨‍👨‍👦":["family_mmb"],"👨‍👨‍👧":["family_mmg"],"👨‍👨‍👧‍👦":["family_mmgb"],"👨‍👨‍👦‍👦":["family_mmbb"],"👨‍👨‍👧‍👧":["family_mmgg"],"👩‍👩‍👦":["family_wwb"],"👩‍👩‍👧":["family_wwg"],"👩‍👩‍👧‍👦":["family_wwgb"],"👩‍👩‍👦‍👦":["family_wwbb"],"👩‍👩‍👧‍👧":["family_wwgg"],"👨‍👦":["family_mb"],"👨‍👦‍👦":["family_mbb"],"👨‍👧":["family_mg"],"👨‍👧‍👦":["family_mgb"],"👨‍👧‍👧":["family_mgg"],"👩‍👦":["family_wb"],"👩‍👦‍👦":["family_wbb"],"👩‍👧":["family_wg"],"👩‍👧‍👦":["family_wgb"],"👩‍👧‍👧":["family_wgg"],"🗣️":["speaking_head"],"👤":["bust_silhouette"],"👥":["busts_silhouette"],"👣":["footprints"],"🏻":["tone_light","tone1"],"🏼":["tone_medium_light","tone2"],"🏽":["tone_medium","tone3"],"🏾":["tone_medium_dark","tone4"],"🏿":["tone_dark","tone5"],"🦰":["red_hair"],"🦱":["curly_hair"],"🦳":["white_hair"],"🦲":["bald"],"🐵":["monkey_face"],"🐒":["monkey"],"🦍":["gorilla"],"🦧":["orangutan"],"🐶":["dog_face"],"🐕️":["dog"],"🦮":["guide_dog"],"🐕‍🦺":["service_dog"],"🐩":["poodle"],"🐺":["wolf_face"],"🦊":["fox_face"],"🦝":["raccoon"],"🐱":["cat_face"],"🐈️":["cat"],"🦁":["lion_face"],"🐯":["tiger_face"],"🐅":["tiger"],"🐆":["leopard"],"🐴":["horse_face"],"🐎":["horse"],"🦄":["unicorn_face"],"🦓":["zebra"],"🦌":["deer"],"🐮":["cow_face"],"🐂":["ox"],"🐃":["water_buffalo"],"🐄":["cow"],"🐷":["pig_face"],"🐖":["pig"],"🐗":["boar"],"🐽":["pig_nose"],"🐏":["ram"],"🐑":["sheep"],"🐐":["goat"],"🐪":["camel"],"🐫":["two_hump_camel"],"🦙":["llama"],"🦒":["giraffe"],"🐘":["elephant"],"🦏":["rhino"],"🦛":["hippo"],"🐭":["mouse_face"],"🐁":["mouse"],"🐀":["rat"],"🐹":["hamster_face"],"🐰":["rabbit_face"],"🐇":["rabbit"],"🐿️":["chipmunk"],"🦔":["hedgehog"],"🦇":["bat"],"🐻":["bear_face"],"🐨":["koala_face"],"🐼":["panda_face"],"🦥":["sloth"],"🦦":["otter"],"🦨":["skunk"],"🦘":["kangaroo"],"🦡":["badger"],"🐾":["feet"],"🦃":["turkey"],"🐔":["chicken"],"🐓":["rooster"],"🐣":["hatching_chick"],"🐤":["baby_chick"],"🐥":["hatched_chick"],"🐦️":["bird"],"🐧":["penguin"],"🕊️":["dove"],"🦅":["eagle"],"🦆":["duck"],"🦢":["swan"],"🦉":["owl"],"🦩":["flamingo"],"🦚":["peacock"],"🦜":["parrot"],"🐸":["frog_face"],"🐊":["crocodile"],"🐢":["turtle"],"🦎":["lizard"],"🐍":["snake"],"🐲":["dragon_face"],"🐉":["dragon"],"🦕":["sauropod"],"🦖":["trex"],"🐳":["spouting_whale"],"🐋":["whale"],"🐬":["dolphin"],"🐟️":["fish"],"🐠":["tropical_fish"],"🐡":["blowfish"],"🦈":["shark"],"🐙":["octopus"],"🐚":["shell"],"🐌":["snail"],"🦋":["butterfly"],"🐛":["bug"],"🐜":["ant"],"🐝":["bee"],"🐞":["beetle"],"🦗":["cricket"],"🕷️":["spider"],"🕸️":["spider_web"],"🦂":["scorpion"],"🦟":["mosquito"],"🦠":["microbe","germ"],"💐":["bouquet"],"🌸":["cherry_blossom"],"💮":["white_flower"],"🏵️":["rosette"],"🌹":["rose"],"🥀":["wilted_rose"],"🌺":["hibiscus"],"🌻":["sunflower"],"🌼":["blossom"],"🌷":["tulip"],"🌱":["seedling"],"🌲":["evergreen_tree"],"🌳":["deciduous_tree"],"🌴":["palm_tree"],"🌵":["cactus"],"🌾":["ear_of_rice"],"🌿":["herb"],"☘️":["shamrock"],"🍀":["four_leaf_clover"],"🍁":["maple_leaf"],"🍂":["fallen_leaf"],"🍃":["leaves"],"🍇":["grapes"],"🍈":["melon"],"🍉":["watermelon"],"🍊":["tangerine"],"🍋":["lemon"],"🍌":["banana"],"🍍":["pineapple"],"🥭":["mango"],"🍎":["apple"],"🍏":["green_apple"],"🍐":["pear"],"🍑":["peach"],"🍒":["cherries"],"🍓":["strawberry"],"🥝":["kiwi"],"🍅":["tomato"],"🥥":["coconut"],"🥑":["avocado"],"🍆":["eggplant"],"🥔":["potato"],"🥕":["carrot"],"🌽":["corn"],"🌶️":["hot_pepper"],"🥒":["cucumber"],"🥬":["leafy_green"],"🥦":["broccoli"],"🧄":["garlic"],"🧅":["onion"],"🍄":["mushroom"],"🥜":["peanuts"],"🌰":["chestnut"],"🍞":["bread"],"🥐":["croissant"],"🥖":["french_bread"],"🥨":["pretzel"],"🥯":["bagel"],"🥞":["pancakes"],"🧇":["waffle"],"🧀":["cheese"],"🍖":["meat_on_bone"],"🍗":["poultry_leg"],"🥩":["cut_of_meat"],"🥓":["bacon"],"🍔":["hamburger"],"🍟":["fries"],"🍕":["pizza"],"🌭":["hotdog"],"🥪":["sandwich"],"🌮":["taco"],"🌯":["burrito"],"🥙":["stuffed_flatbread"],"🧆":["falafel"],"🥚":["egg"],"🍳":["cooking"],"🥘":["shallow_pan_of_food"],"🍲":["stew"],"🥣":["bowl_spoon"],"🥗":["salad"],"🍿":["popcorn"],"🧈":["butter"],"🧂":["salt"],"🥫":["canned_food"],"🍱":["bento"],"🍘":["rice_cracker"],"🍙":["rice_ball"],"🍚":["rice"],"🍛":["curry"],"🍜":["ramen"],"🍝":["spaghetti"],"🍠":["sweet_potato"],"🍢":["oden"],"🍣":["sushi"],"🍤":["fried_shrimp"],"🍥":["fish_cake"],"🥮":["moon_cake"],"🍡":["dango"],"🥟":["dumpling"],"🥠":["fortune_cookie"],"🥡":["takeout_box"],"🦀":["crab"],"🦞":["lobster"],"🦐":["shrimp"],"🦑":["squid"],"🦪":["oyster"],"🍦":["icecream"],"🍧":["shaved_ice"],"🍨":["ice_cream"],"🍩":["doughnut"],"🍪":["cookie"],"🎂":["birthday"],"🍰":["cake"],"🧁":["cupcake"],"🥧":["pie"],"🍫":["chocolate_bar"],"🍬":["candy"],"🍭":["lollipop"],"🍮":["custard"],"🍯":["honey_pot"],"🍼":["baby_bottle"],"🥛":["milk"],"☕️":["coffee"],"🍵":["tea"],"🍶":["sake"],"🍾":["champagne"],"🍷":["wine_glass"],"🍸️":["cocktail"],"🍹":["tropical_drink"],"🍺":["beer"],"🍻":["beers"],"🥂":["champagne_glass"],"🥃":["tumbler_glass"],"🥤":["cup_straw"],"🧃":["beverage_box","juice_box"],"🧉":["mate","yerba_mate"],"🧊":["ice"],"🥢":["chopsticks"],"🍽️":["fork_knife_plate"],"🍴":["utensils"],"🥄":["spoon"],"🔪":["knife"],"🏺":["amphora"],"🌍️":["earth_africa"],"🌎️":["earth_americas"],"🌏️":["earth_asia"],"🌐":["globe"],"🗺️":["map"],"🗾":["japan"],"🧭":["compass"],"🏔️":["snowy_mountain"],"⛰️":["mountain"],"🌋":["volcano"],"🗻":["mount_fuji"],"🏕️":["camping"],"🏖️":["beach"],"🏜️":["desert"],"🏝️":["island"],"🏞️":["park"],"🏟️":["stadium"],"🏛️":["classical_building"],"🏗️":["construction_site"],"🧱":["brick"],"🏘️":["homes"],"🏚️":["house_abandoned"],"🏠️":["house"],"🏡":["house_garden"],"🏢":["office"],"🏣":["ja_post_office"],"🏤":["post_office"],"🏥":["hospital"],"🏦":["bank"],"🏨":["hotel"],"🏩":["love_hotel"],"🏪":["convenience_store"],"🏫":["school"],"🏬":["department_store"],"🏭️":["factory"],"🏯":["japanese_castle"],"🏰":["castle","european_castle"],"💒":["wedding"],"🗼":["tokyo_tower"],"🗽":["statue_of_liberty"],"⛪️":["church"],"🕌":["mosque"],"🛕":["hindu_temple"],"🕍":["synagogue"],"⛩️":["shinto_shrine"],"🕋":["kaaba"],"⛲️":["fountain"],"⛺️":["tent"],"🌁":["foggy"],"🌃":["night_stars"],"🏙️":["cityscape"],"🌄":["sunrise_over_mountains"],"🌅":["sunrise"],"🌆":["dusk"],"🌇":["sunset"],"🌉":["bridge_at_night"],"♨️":["hotsprings"],"🎠":["carousel_horse"],"🎡":["ferris_wheel"],"🎢":["roller_coaster"],"💈":["barber"],"🎪":["circus_tent"],"🚂":["steam_locomotive"],"🚃":["railway_car"],"🚄":["bullettrain_side"],"🚅":["bullettrain"],"🚆":["train"],"🚇️":["metro"],"🚈":["light_rail"],"🚉":["station"],"🚊":["tram"],"🚝":["monorail"],"🚞":["mountain_railway"],"🚋":["tram_car"],"🚌":["bus"],"🚍️":["oncoming_bus"],"🚎":["trolleybus"],"🚐":["minibus"],"🚑️":["ambulance"],"🚒":["fire_engine"],"🚓":["police_car"],"🚔️":["oncoming_police_car"],"🚕":["taxi"],"🚖":["oncoming_taxi"],"🚗":["red_car"],"🚘️":["oncoming_automobile"],"🚙":["blue_car"],"🚚":["truck"],"🚛":["lorry"],"🚜":["tractor"],"🏎️":["race_car"],"🏍️":["motorcycle"],"🛵":["motor_scooter"],"🦽":["wheelchair"],"🦼":["motor_wheelchair"],"🛺":["auto_rickshaw"],"🚲️":["bike"],"🛴":["scooter"],"🛹":["skateboard"],"🚏":["bus_stop"],"🛣️":["motorway"],"🛤️":["railway_track"],"🛢️":["oil_drum"],"⛽️":["fuel_pump"],"🚨":["rotating_light","police_light"],"🚥":["traffic_light"],"🚦":["vertical_traffic_light"],"🛑":["stop_sign","octagonal_sign"],"🚧":["construction"],"⚓️":["anchor"],"⛵️":["sailboat"],"🛶":["canoe"],"🚤":["speedboat"],"🛳️":["cruise_ship"],"⛴️":["ferry"],"🛥️":["motorboat"],"🚢":["ship"],"✈️":["airplane"],"🛩️":["small_airplane"],"🛫":["airplane_departure"],"🛬":["airplane_arriving"],"🪂":["parachute"],"💺":["seat"],"🚁":["helicopter"],"🚟":["suspension_railway"],"🚠":["mountain_cableway"],"🚡":["aerial_tramway"],"🛰️":["satellite"],"🚀":["rocket"],"🛸":["flying_saucer"],"🛎️":["bellhop"],"🧳":["luggage"],"⌛️":["hourglass"],"⏳️":["hourglass_flowing"],"⌚️":["watch"],"⏰":["alarm_clock"],"⏱️":["stopwatch"],"⏲️":["timer"],"🕰️":["clock"],"🕛️":["clock12"],"🕧️":["clock1230"],"🕐️":["clock1"],"🕜️":["clock130"],"🕑️":["clock2"],"🕝️":["clock230"],"🕒️":["clock3"],"🕞️":["clock330"],"🕓️":["clock4"],"🕟️":["clock430"],"🕔️":["clock5"],"🕠️":["clock530"],"🕕️":["clock6"],"🕡️":["clock630"],"🕖️":["clock7"],"🕢️":["clock730"],"🕗️":["clock8"],"🕣️":["clock830"],"🕘️":["clock9"],"🕤️":["clock930"],"🕙️":["clock10"],"🕥️":["clock1030"],"🕚️":["clock11"],"🕦️":["clock1130"],"🌑":["new_moon"],"🌒":["waxing_crescent_moon"],"🌓":["first_quarter_moon"],"🌔":["waxing_gibbous_moon"],"🌕️":["full_moon"],"🌖":["waning_gibbous_moon"],"🌗":["last_quarter_moon"],"🌘":["waning_crescent_moon"],"🌙":["crescent_moon"],"🌚":["new_moon_face"],"🌛":["first_quarter_moon_face"],"🌜️":["last_quarter_moon_face"],"🌡️":["thermometer"],"☀️":["sun"],"🌝":["full_moon_face"],"🌞":["sun_face"],"🪐":["ringed_planet","saturn"],"⭐️":["star"],"🌟":["star2","glowing_star"],"🌠":["star3","shooting_star"],"🌌":["milky_way"],"☁️":["cloud"],"⛅️":["partly_sunny"],"⛈️":["storm"],"🌤️":["overcast"],"🌥️":["cloudy"],"🌦️":["sunshower"],"🌧️":["rain"],"🌨️":["snow"],"🌩️":["lightning"],"🌪️":["tornado"],"🌫️":["fog"],"🌬️":["wind_face"],"🌀":["cyclone"],"🌈":["rainbow"],"🌂":["closed_umbrella"],"☂️":["umbrella"],"☔️":["umbrella_rain"],"⛱️":["beach_umbrella"],"⚡️":["zap","high_voltage"],"❄️":["snowflake"],"☃️":["snowy_snowman"],"⛄️":["snowman"],"☄️":["comet"],"🔥":["fire"],"💧":["droplet"],"🌊":["ocean"],"🎃":["jack_o_lantern"],"🎄":["christmas_tree","xmas_tree"],"🎆":["fireworks"],"🎇":["sparkler"],"🧨":["firecracker"],"✨":["sparkles"],"🎈":["balloon"],"🎉":["tada","party"],"🎊":["confetti_ball"],"🎋":["tanabata_tree"],"🎍":["bamboo","pine_decor"],"🎎":["dolls"],"🎏":["carp_streamer"],"🎐":["wind_chime"],"🎑":["moon_ceremony","rice_scene"],"🧧":["red_envelope"],"🎀":["ribbon"],"🎁":["gift"],"🎗️":["reminder_ribbon"],"🎟️":["tickets","admission"],"🎫":["ticket"],"🎖️":["military_medal"],"🏆️":["trophy"],"🏅":["medal"],"🥇":["first_place"],"🥈":["second_place"],"🥉":["third_place"],"⚽️":["soccer"],"⚾️":["baseball"],"🥎":["softball"],"🏀":["basketball"],"🏐":["volleyball"],"🏈":["football"],"🏉":["rugby"],"🎾":["tennis"],"🥏":["flying_disc"],"🎳":["bowling"],"🏏":["cricket_game"],"🏑":["field_hockey"],"🏒":["hockey"],"🥍":["lacrosse"],"🏓":["ping_pong"],"🏸":["badminton"],"🥊":["boxing_glove"],"🥋":["gi","martial_arts_uniform"],"🥅":["goal"],"⛳️":["golf"],"⛸️":["ice_skate"],"🎣":["fishing_pole"],"🤿":["diving_mask","scuba_mask"],"🎽":["running_shirt"],"🎿":["ski"],"🛷":["sled"],"🥌":["curling_stone"],"🎯":["dart"],"🪀":["yoyo"],"🪁":["kite"],"🎱":["8ball"],"🔮":["crystal_ball"],"🧿":["nazar_amulet"],"🎮️":["video_game"],"🕹️":["joystick"],"🎰":["slot_machine"],"🎲":["game_die"],"🧩":["jigsaw","puzzle_piece"],"🧸":["teddy_bear"],"♠️":["spades"],"♥️":["hearts"],"♦️":["diamonds"],"♣️":["clubs"],"♟️":["chess_pawn"],"🃏":["black_joker"],"🀄️":["mahjong"],"🎴":["flower_cards"],"🎭️":["performing_arts"],"🖼️":["frame_photo"],"🎨":["art","palette"],"🧵":["spool"],"🧶":["yarn"],"👓️":["glasses"],"🕶️":["sunglasses"],"🥽":["goggles"],"🥼":["lab_coat"],"🦺":["safety_vest"],"👔":["necktie","tie"],"👕":["shirt"],"👖":["jeans"],"🧣":["scarf"],"🧤":["gloves"],"🧥":["coat"],"🧦":["socks"],"👗":["dress"],"👘":["kimono"],"🥻":["sari"],"🩱":["one_piece_swimsuit"],"🩲":["briefs"],"🩳":["shorts"],"👙":["bikini"],"👚":["blouse","womans_clothes"],"👛":["purse"],"👜":["handbag"],"👝":["pouch","clutch_bag"],"🛍️":["shopping_bags"],"🎒":["backpack"],"👞":["dress_shoe","mans_shoe"],"👟":["sneaker","athletic_shoe"],"🥾":["hiking_boot"],"🥿":["flat_shoe"],"👠":["high_heel"],"👡":["womans_sandal"],"🩰":["ballet_shoes"],"👢":["womans_boot"],"👑":["crown"],"👒":["womans_hat"],"🎩":["top_hat"],"🎓️":["graduation_cap"],"🧢":["billed_cap"],"⛑️":["helmet_cross"],"📿":["prayer_beads"],"💄":["lipstick"],"💍":["ring"],"💎":["gem"],"🔇":["mute","no_sound"],"🔈️":["speaker","low_sound"],"🔉":["sound"],"🔊":["loud_sound"],"📢":["loudspeaker"],"📣":["megaphone"],"📯":["postal_horn"],"🔔":["bell"],"🔕":["no_bell"],"🎼":["musical_score"],"🎵":["musical_note"],"🎶":["musical_notes"],"🎙️":["studio_microphone"],"🎚️":["level_slider"],"🎛️":["control_knobs"],"🎤":["microphone"],"🎧️":["headphones"],"📻️":["radio"],"🎷":["saxophone"],"🎸":["guitar"],"🎹":["musical_keyboard"],"🎺":["trumpet"],"🎻":["violin"],"🪕":["banjo"],"🥁":["drum"],"📱":["mobile","iphone","android"],"📲":["mobile_calling"],"☎️":["telephone"],"📞":["telephone_receiver"],"📟️":["pager"],"📠":["fax"],"🔋":["battery"],"🔌":["electric_plug"],"💻️":["laptop"],"🖥️":["desktop","computer"],"🖨️":["printer"],"⌨️":["keyboard"],"🖱️":["computer_mouse"],"🖲️":["trackball"],"💽":["minidisc"],"💾":["floppy_disk"],"💿️":["cd","disk"],"📀":["dvd"],"🧮":["abacus"],"🎥":["movie_camera"],"🎞️":["film_frames"],"📽️":["projector"],"🎬️":["clapper"],"📺️":["tv"],"📷️":["camera"],"📸":["camera_flash"],"📹️":["video_camera"],"📼":["vhs"],"🔍️":["mag"],"🔎":["mag_right"],"🕯️":["candle"],"💡":["bulb","light_bulb"],"🔦":["flashlight"],"🏮":["red_lantern"],"🪔":["diya_lamp"],"📔":["decorative_notebook"],"📕":["closed_book"],"📖":["book"],"📗":["green_book"],"📘":["blue_book"],"📙":["orange_book"],"📚️":["books"],"📓":["notebook"],"📒":["ledger"],"📃":["page_curl"],"📜":["scroll"],"📄":["page_facing_up"],"📰":["newspaper"],"🗞️":["rolled_newspaper"],"📑":["bookmark_tabs"],"🔖":["bookmark"],"🏷️":["label"],"💰️":["moneybag"],"💴":["yen"],"💵":["dollar"],"💶":["euro"],"💷":["pound"],"💸":["money_wings"],"💳️":["credit_card"],"🧾":["receipt"],"💹":["ja_chart"],"💱":["currency_exchange"],"💲":["dollar_sign"],"✉️":["envelope"],"📧":["email"],"📨":["incoming_envelope"],"📩":["envelope_arrow"],"📤️":["outbox_tray"],"📥️":["inbox_tray"],"📦️":["package"],"📫️":["mailbox"],"📪️":["mailbox_closed"],"📬️":["mailbox_mail"],"📭️":["mailbox_no_mail"],"📮":["postbox"],"🗳️":["ballot_box"],"✏️":["pencil"],"✒️":["black_nib"],"🖋️":["fountain_pen"],"🖊️":["pen"],"🖌️":["paintbrush"],"🖍️":["crayon"],"📝":["memo"],"💼":["briefcase"],"📁":["file_folder"],"📂":["open_file_folder"],"🗂️":["dividers"],"📅":["date","calendar"],"📆":["torn_calendar"],"🗒️":["notepad_spiral"],"🗓️":["calendar_spiral"],"📇":["card_index"],"📈":["chart_up"],"📉":["chart_down"],"📊":["bar_chart"],"📋️":["clipboard"],"📌":["pushpin"],"📍":["round_pushpin"],"📎":["paperclip"],"🖇️":["paperclips"],"📏":["straight_ruler"],"📐":["triangular_ruler"],"✂️":["scissors"],"🗃️":["card_box"],"🗄️":["file_cabinet"],"🗑️":["trashcan","wastebasket"],"🔒️":["lock"],"🔓️":["unlock"],"🔏":["locked_pen"],"🔐":["locked_key"],"🔑":["key"],"🗝️":["old_key"],"🔨":["hammer"],"🪓":["axe"],"⛏️":["pick"],"⚒️":["hammer_pick"],"🛠️":["tools","hammer_wrench"],"🗡️":["dagger"],"⚔️":["crossed_swords"],"🔫":["gun","pistol"],"🏹":["bow"],"🛡️":["shield"],"🔧":["wrench"],"🔩":["nut_and_bolt"],"⚙️":["gear"],"🗜️":["clamp","compression"],"⚖️":["scales"],"🦯":["probing_cane"],"🔗":["link"],"⛓️":["chains"],"🧰":["toolbox"],"🧲":["magnet"],"⚗️":["alembic"],"🧪":["test_tube"],"🧫":["petri_dish"],"🧬":["dna","double_helix"],"🔬":["microscope"],"🔭":["telescope"],"📡":["satellite_antenna"],"💉":["syringe"],"🩸":["blood_drop"],"💊":["pill"],"🩹":["bandaid","adhesive_bandage"],"🩺":["stethoscope"],"🚪":["door"],"🛏️":["bed"],"🛋️":["couch"],"🪑":["chair"],"🚽":["toilet"],"🚿":["shower"],"🛁":["bathtub"],"🪒":["razor"],"🧴":["lotion"],"🧷":["safety_pin"],"🧹":["broom"],"🧺":["basket"],"🧻":["toilet_paper"],"🧼":["soap"],"🧽":["sponge"],"🧯":["fire_extinguisher"],"🛒":["shopping_cart"],"🚬":["cigarette","smoking"],"⚰️":["coffin"],"⚱️":["urn"],"🗿":["moai"],"🏧":["atm"],"🚮":["litter_bin"],"🚰":["potable_water"],"♿️":["handicapped"],"🚹️":["mens"],"🚺️":["womens"],"🚻":["restroom","bathroom"],"🚼️":["baby_symbol"],"🚾":["wc"],"🛂":["passport_control"],"🛃":["customs"],"🛄":["baggage_claim"],"🛅":["left_luggage"],"⚠️":["warning"],"🚸":["children_crossing"],"⛔️":["no_entry"],"🚫":["no_entry_sign"],"🚳":["no_bicycles"],"🚭️":["no_smoking"],"🚯":["do_not_litter"],"🚱":["non_potable_water"],"🚷":["no_pedestrians"],"📵":["no_mobile_phones"],"🔞":["underage"],"☢️":["radioactive"],"☣️":["biohazard"],"⬆️":["arrow_up"],"↗️":["arrow_upper_right"],"➡️":["arrow_right"],"↘️":["arrow_lower_right"],"⬇️":["arrow_down"],"↙️":["arrow_lower_left"],"⬅️":["arrow_left"],"↖️":["arrow_upper_left"],"↕️":["arrow_up_down"],"↔️":["arrow_left_right"],"↩️":["arrow_left_hook"],"↪️":["arrow_right_hook"],"⤴️":["arrow_heading_up"],"⤵️":["arrow_heading_down"],"🔃":["clockwise"],"🔄":["counter_clockwise"],"🔙":["back"],"🔚":["end"],"🔛":["on"],"🔜":["soon"],"🔝":["top"],"🛐":["place_of_worship"],"⚛️":["atom"],"🕉️":["om_symbol"],"✡️":["star_of_david"],"☸️":["wheel_of_dharma"],"☯️":["yin_yang"],"✝️":["cross"],"☦️":["orthodox_cross"],"☪️":["star_and_crescent"],"☮️":["peace"],"🕎":["menorah"],"🔯":["six_pointed_star"],"♈️":["aries"],"♉️":["taurus"],"♊️":["gemini"],"♋️":["cancer"],"♌️":["leo"],"♍️":["virgo"],"♎️":["libra"],"♏️":["scorpius"],"♐️":["sagittarius"],"♑️":["capricorn"],"♒️":["aquarius"],"♓️":["pisces"],"⛎":["ophiuchus"],"🔀":["shuffle"],"🔁":["repeat"],"🔂":["repeat_single"],"▶️":["play"],"⏩️":["fast_forward"],"⏭️":["next_track"],"⏯️":["play_pause"],"◀️":["reverse"],"⏪️":["rewind"],"⏮️":["previous_track"],"🔼":["up_button"],"⏫":["fast_up_button"],"🔽":["down_button"],"⏬":["fast_down_button"],"⏸️":["pause"],"⏹️":["stop"],"⏺️":["record"],"⏏️":["eject"],"🎦":["cinema"],"🔅":["dim","low_brightness"],"🔆":["bright","high_brightness"],"📶":["signal_strength","antenna_bars"],"📳":["vibration_mode"],"📴":["mobile_phone_off"],"♀️":["female","female_sign"],"♂️":["male","male_sign"],"⚕️":["medical"],"♾️":["infinity"],"♻️":["recycle"],"⚜️":["fleur-de-lis"],"🔱":["trident"],"📛":["name_badge"],"🔰":["ja_beginner"],"⭕️":["o"],"✅":["white_check_mark"],"☑️":["checked_ballot"],"✔️":["check_mark"],"✖️":["multiplication"],"❌":["x","cross_mark"],"❎":["cross_mark_button"],"➕":["plus"],"➖":["minus"],"➗":["division"],"➰":["curly_loop"],"➿":["double_curly_loop"],"〽️":["part_alternation_mark"],"✳️":["eight_spoked_asterisk"],"✴️":["eight_pointed_star"],"❇️":["sparkle"],"‼️":["bangbang","double_exclamation"],"⁉️":["interrobang","exclamation_question"],"❓️":["question"],"❔":["white_question"],"❕":["white_exclamation"],"❗️":["exclamation"],"〰️":["wavy_dash"],"©️":["copyright"],"®️":["registered"],"™️":["tm"],"#️⃣":["hash"],"*️⃣":["asterisk"],"0️⃣":["zero"],"1️⃣":["one"],"2️⃣":["two"],"3️⃣":["three"],"4️⃣":["four"],"5️⃣":["five"],"6️⃣":["six"],"7️⃣":["seven"],"8️⃣":["eight"],"9️⃣":["nine"],"🔟":["ten"],"🔠":["upper_abcd"],"🔡":["abcd"],"🔢":["1234"],"🔣":["symbols"],"🔤":["abc"],"🅰️":["a_blood"],"🆎":["ab_blood"],"🅱️":["b_blood"],"🆑":["cl"],"🆒":["cool"],"🆓":["free"],"ℹ️":["info"],"🆔":["id"],"Ⓜ️":["m"],"🆕":["new"],"🆖":["ng"],"🅾️":["o_blood"],"🆗":["ok"],"🅿️":["p"],"🆘":["sos"],"🆙":["up"],"🆚":["vs"],"🈁":["ja_here","koko"],"🈂️":["ja_service_charge"],"🈷️":["ja_monthly_amount"],"🈶":["ja_not_free_of_carge"],"🈯️":["ja_reserved"],"🉐":["ja_bargain"],"🈹":["ja_discount"],"🈚️":["ja_free_of_charge"],"🈲":["ja_prohibited"],"🉑":["ja_acceptable"],"🈸":["ja_application"],"🈴":["ja_passing_grade"],"🈳":["ja_vacancy"],"㊗️":["ja_congratulations"],"㊙️":["ja_secret"],"🈺":["ja_open_for_business"],"🈵":["ja_no_vacancy"],"🔴":["red_circle"],"🟠":["orange_circle"],"🟡":["yellow_circle"],"🟢":["green_circle"],"🔵":["blue_circle"],"🟣":["purple_circle"],"🟤":["brown_circle"],"⚫️":["black_circle"],"⚪️":["white_circle"],"🟥":["red_square"],"🟧":["orange_square"],"🟨":["yellow_square"],"🟩":["green_square"],"🟦":["blue_square"],"🟪":["purple_square"],"🟫":["brown_square"],"⬛️":["large_black_square"],"⬜️":["large_white_square"],"◼️":["medium_black_square"],"◻️":["medium_white_square"],"◾️":["medium_small_black_square"],"◽️":["medium_small_white_square"],"▪️":["small_black_square"],"▫️":["small_white_square"],"🔶":["large_orange_diamond"],"🔷":["large_blue_diamond"],"🔸":["small_orange_diamond"],"🔹":["small_blue_diamond"],"🔺":["up_red_triangle"],"🔻":["down_red_triangle"],"💠":["diamond_dot"],"🔘":["radio_button"],"🔳":["white_square_button"],"🔲":["black_square_button"],"🏁":["checkered_flag"],"🚩":["triangle_flag"],"🎌":["crossed_flags"],"🏴":["black_flag"],"🏳️":["white_flag"],"🏳️‍🌈":["rainbow_flag"],"🏴‍☠️":["pirate_flag","jolly_roger"],"🇦🇨":["flag_ac"],"🇦🇩":["flag_ad"],"🇦🇪":["flag_ae"],"🇦🇫":["flag_af"],"🇦🇬":["flag_ag"],"🇦🇮":["flag_ai"],"🇦🇱":["flag_al"],"🇦🇲":["flag_am"],"🇦🇴":["flag_ao"],"🇦🇶":["flag_aq"],"🇦🇷":["flag_ar"],"🇦🇸":["flag_as"],"🇦🇹":["flag_at"],"🇦🇺":["flag_au"],"🇦🇼":["flag_aw"],"🇦🇽":["flag_ax"],"🇦🇿":["flag_az"],"🇧🇦":["flag_ba"],"🇧🇧":["flag_bb"],"🇧🇩":["flag_bd"],"🇧🇪":["flag_be"],"🇧🇫":["flag_bf"],"🇧🇬":["flag_bg"],"🇧🇭":["flag_bh"],"🇧🇮":["flag_bi"],"🇧🇯":["flag_bj"],"🇧🇱":["flag_bl"],"🇧🇲":["flag_bm"],"🇧🇳":["flag_bn"],"🇧🇴":["flag_bo"],"🇧🇶":["flag_bq"],"🇧🇷":["flag_br"],"🇧🇸":["flag_bs"],"🇧🇹":["flag_bt"],"🇧🇻":["flag_bv"],"🇧🇼":["flag_bw"],"🇧🇾":["flag_by"],"🇧🇿":["flag_bz"],"🇨🇦":["flag_ca"],"🇨🇨":["flag_cc"],"🇨🇩":["flag_cd"],"🇨🇫":["flag_cf"],"🇨🇬":["flag_cg"],"🇨🇭":["flag_ch"],"🇨🇮":["flag_ci"],"🇨🇰":["flag_ck"],"🇨🇱":["flag_cl"],"🇨🇲":["flag_cm"],"🇨🇳":["flag_cn"],"🇨🇴":["flag_co"],"🇨🇵":["flag_cp"],"🇨🇷":["flag_cr"],"🇨🇺":["flag_cu"],"🇨🇻":["flag_cv"],"🇨🇼":["flag_cw"],"🇨🇽":["flag_cx"],"🇨🇾":["flag_cy"],"🇨🇿":["flag_cz"],"🇩🇪":["flag_de"],"🇩🇬":["flag_dg"],"🇩🇯":["flag_dj"],"🇩🇰":["flag_dk"],"🇩🇲":["flag_dm"],"🇩🇴":["flag_do"],"🇩🇿":["flag_dz"],"🇪🇦":["flag_ea"],"🇪🇨":["flag_ec"],"🇪🇪":["flag_ee"],"🇪🇬":["flag_eg"],"🇪🇭":["flag_eh"],"🇪🇷":["flag_er"],"🇪🇸":["flag_es"],"🇪🇹":["flag_et"],"🇪🇺":["flag_eu"],"🇫🇮":["flag_fi"],"🇫🇯":["flag_fj"],"🇫🇰":["flag_fk"],"🇫🇲":["flag_fm"],"🇫🇴":["flag_fo"],"🇫🇷":["flag_fr"],"🇬🇦":["flag_ga"],"🇬🇧":["flag_gb"],"🇬🇩":["flag_gd"],"🇬🇪":["flag_ge"],"🇬🇫":["flag_gf"],"🇬🇬":["flag_gg"],"🇬🇭":["flag_gh"],"🇬🇮":["flag_gi"],"🇬🇱":["flag_gl"],"🇬🇲":["flag_gm"],"🇬🇳":["flag_gn"],"🇬🇵":["flag_gp"],"🇬🇶":["flag_gq"],"🇬🇷":["flag_gr"],"🇬🇸":["flag_gs"],"🇬🇹":["flag_gt"],"🇬🇺":["flag_gu"],"🇬🇼":["flag_gw"],"🇬🇾":["flag_gy"],"🇭🇰":["flag_hk"],"🇭🇲":["flag_hm"],"🇭🇳":["flag_hn"],"🇭🇷":["flag_hr"],"🇭🇹":["flag_ht"],"🇭🇺":["flag_hu"],"🇮🇨":["flag_ic"],"🇮🇩":["flag_id"],"🇮🇪":["flag_ie"],"🇮🇱":["flag_il"],"🇮🇲":["flag_im"],"🇮🇳":["flag_in"],"🇮🇴":["flag_io"],"🇮🇶":["flag_iq"],"🇮🇷":["flag_ir"],"🇮🇸":["flag_is"],"🇮🇹":["flag_it"],"🇯🇪":["flag_je"],"🇯🇲":["flag_jm"],"🇯🇴":["flag_jo"],"🇯🇵":["flag_jp"],"🇰🇪":["flag_ke"],"🇰🇬":["flag_kg"],"🇰🇭":["flag_kh"],"🇰🇮":["flag_ki"],"🇰🇲":["flag_km"],"🇰🇳":["flag_kn"],"🇰🇵":["flag_kp"],"🇰🇷":["flag_kr"],"🇰🇼":["flag_kw"],"🇰🇾":["flag_ky"],"🇰🇿":["flag_kz"],"🇱🇦":["flag_la"],"🇱🇧":["flag_lb"],"🇱🇨":["flag_lc"],"🇱🇮":["flag_li"],"🇱🇰":["flag_lk"],"🇱🇷":["flag_lr"],"🇱🇸":["flag_ls"],"🇱🇹":["flag_lt"],"🇱🇺":["flag_lu"],"🇱🇻":["flag_lv"],"🇱🇾":["flag_ly"],"🇲🇦":["flag_ma"],"🇲🇨":["flag_mc"],"🇲🇩":["flag_md"],"🇲🇪":["flag_me"],"🇲🇫":["flag_mf"],"🇲🇬":["flag_mg"],"🇲🇭":["flag_mh"],"🇲🇰":["flag_mk"],"🇲🇱":["flag_ml"],"🇲🇲":["flag_mm"],"🇲🇳":["flag_mn"],"🇲🇴":["flag_mo"],"🇲🇵":["flag_mp"],"🇲🇶":["flag_mq"],"🇲🇷":["flag_mr"],"🇲🇸":["flag_ms"],"🇲🇹":["flag_mt"],"🇲🇺":["flag_mu"],"🇲🇻":["flag_mv"],"🇲🇼":["flag_mw"],"🇲🇽":["flag_mx"],"🇲🇾":["flag_my"],"🇲🇿":["flag_mz"],"🇳🇦":["flag_na"],"🇳🇨":["flag_nc"],"🇳🇪":["flag_ne"],"🇳🇫":["flag_nf"],"🇳🇬":["flag_ng"],"🇳🇮":["flag_ni"],"🇳🇱":["flag_nl"],"🇳🇴":["flag_no"],"🇳🇵":["flag_np"],"🇳🇷":["flag_nr"],"🇳🇺":["flag_nu"],"🇳🇿":["flag_nz"],"🇴🇲":["flag_om"],"🇵🇦":["flag_pa"],"🇵🇪":["flag_pe"],"🇵🇫":["flag_pf"],"🇵🇬":["flag_pg"],"🇵🇭":["flag_ph"],"🇵🇰":["flag_pk"],"🇵🇱":["flag_pl"],"🇵🇲":["flag_pm"],"🇵🇳":["flag_pn"],"🇵🇷":["flag_pr"],"🇵🇸":["flag_ps"],"🇵🇹":["flag_pt"],"🇵🇼":["flag_pw"],"🇵🇾":["flag_py"],"🇶🇦":["flag_qa"],"🇷🇪":["flag_re"],"🇷🇴":["flag_ro"],"🇷🇸":["flag_rs"],"🇷🇺":["flag_ru"],"🇷🇼":["flag_rw"],"🇸🇦":["flag_sa"],"🇸🇧":["flag_sb"],"🇸🇨":["flag_sc"],"🇸🇩":["flag_sd"],"🇸🇪":["flag_se"],"🇸🇬":["flag_sg"],"🇸🇭":["flag_sh"],"🇸🇮":["flag_si"],"🇸🇯":["flag_sj"],"🇸🇰":["flag_sk"],"🇸🇱":["flag_sl"],"🇸🇲":["flag_sm"],"🇸🇳":["flag_sn"],"🇸🇴":["flag_so"],"🇸🇷":["flag_sr"],"🇸🇸":["flag_ss"],"🇸🇹":["flag_st"],"🇸🇻":["flag_sv"],"🇸🇽":["flag_sx"],"🇸🇾":["flag_sy"],"🇸🇿":["flag_sz"],"🇹🇦":["flag_ta"],"🇹🇨":["flag_tc"],"🇹🇩":["flag_td"],"🇹🇫":["flag_tf"],"🇹🇬":["flag_tg"],"🇹🇭":["flag_th"],"🇹🇯":["flag_tj"],"🇹🇰":["flag_tk"],"🇹🇱":["flag_tl"],"🇹🇲":["flag_tm"],"🇹🇳":["flag_tn"],"🇹🇴":["flag_to"],"🇹🇷":["flag_tr"],"🇹🇹":["flag_tt"],"🇹🇻":["flag_tv"],"🇹🇼":["flag_tw"],"🇹🇿":["flag_tz"],"🇺🇦":["flag_ua"],"🇺🇬":["flag_ug"],"🇺🇲":["flag_um"],"🇺🇳":["flag_un"],"🇺🇸":["flag_us","usa"],"🇺🇾":["flag_uy"],"🇺🇿":["flag_uz"],"🇻🇦":["flag_va"],"🇻🇨":["flag_vc"],"🇻🇪":["flag_ve"],"🇻🇬":["flag_vg"],"🇻🇮":["flag_vi"],"🇻🇳":["flag_vn"],"🇻🇺":["flag_vu"],"🇼🇫":["flag_wf"],"🇼🇸":["flag_ws"],"🇽🇰":["flag_xk"],"🇾🇪":["flag_ye"],"🇾🇹":["flag_yt"],"🇿🇦":["flag_za"],"🇿🇲":["flag_zm"],"🇿🇼":["flag_zw"],"🏴󠁧󠁢󠁥󠁮󠁧󠁿":["flag_gbeng","england"],"🏴󠁧󠁢󠁳󠁣󠁴󠁿":["flag_gbsct","scotland"],"🏴󠁧󠁢󠁷󠁬󠁳󠁿":["flag_gbwls","wales"]}')},function(e,d){e.exports=flarum.core.compat.app},function(e,d,a){!function(){var d=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],a="undefined"!=typeof window,u=a&&null!=window.mozInnerScreenX;function o(e,o,n){if(!a)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var t=n&&n.debug||!1;if(t){var r=document.querySelector("#input-textarea-caret-position-mirror-div");r&&r.parentNode.removeChild(r)}var i=document.createElement("div");i.id="input-textarea-caret-position-mirror-div",document.body.appendChild(i);var c=i.style,f=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,l="INPUT"===e.nodeName;c.whiteSpace="pre-wrap",l||(c.wordWrap="break-word"),c.position="absolute",t||(c.visibility="hidden"),d.forEach((function(e){l&&"lineHeight"===e?c.lineHeight=f.height:c[e]=f[e]})),u?e.scrollHeight>parseInt(f.height)&&(c.overflowY="scroll"):c.overflow="hidden",i.textContent=e.value.substring(0,o),l&&(i.textContent=i.textContent.replace(/\s/g," "));var _=document.createElement("span");_.textContent=e.value.substring(o)||".",i.appendChild(_);var s={top:_.offsetTop+parseInt(f.borderTopWidth),left:_.offsetLeft+parseInt(f.borderLeftWidth),height:parseInt(f.lineHeight)};return t?_.style.backgroundColor="#aaa":document.body.removeChild(i),s}void 0!==e.exports?e.exports=o:a&&(window.getCaretCoordinates=o)}()},function(e,d){e.exports=flarum.core.compat["components/ComposerBody"]},function(e,d){e.exports=flarum.core.compat["components/TextEditor"]},function(e,d){e.exports=flarum.core.compat["components/TextEditorButton"]},function(e,d){e.exports=flarum.core.compat["utils/KeyboardNavigatable"]},function(e,d){e.exports=flarum.core.compat.Component},function(e,d){e.exports=flarum.core.compat["models/Post"]},function(e,d,a){"use strict";a.r(d);var u=a(2),o=a.n(u),n=a(3),t=a.n(n),r=a(1),i=a(0),c=a(4),f=a.n(c),l=a(5),_=a.n(l),s=a(6),g=a.n(s),p=function(){var e={base:"https://twemoji.maxcdn.com/v/12.1.2/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:function(e){var d="string"==typeof e?parseInt(e,16):e;if(d<65536)return r(d);return r(55296+((d-=65536)>>10),56320+(1023&d))},toCodePoint:p},onerror:function(){this.parentNode&&this.parentNode.replaceChild(i(this.alt,!1),this)},parse:function(d,a){a&&"function"!=typeof a||(a={callback:a});return("string"==typeof d?_:l)(d,{callback:a.callback||c,attributes:"function"==typeof a.attributes?a.attributes:g,base:"string"==typeof a.base?a.base:e.base,ext:a.ext||e.ext,size:a.folder||(u=a.size||e.size,"number"==typeof u?u+"x"+u:u),className:a.className||e.className,onerror:a.onerror||e.onerror});var u},replace:m,test:function(e){a.lastIndex=0;var d=a.test(e);return a.lastIndex=0,d}},d={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},a=/(?:\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffb|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c\udffb|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffb|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb\udffc]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udffd]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69])(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5\udeeb\udeec\udef4-\udefa\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd71\udd73-\udd76\udd7a-\udda2\udda5-\uddaa\uddae-\uddb4\uddb7\uddba\uddbc-\uddca\uddd0\uddde-\uddff\ude70-\ude73\ude78-\ude7a\ude80-\ude82\ude90-\ude95]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,u=/\uFE0F/g,o=String.fromCharCode(8205),n=/[&<>'"]/g,t=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,r=String.fromCharCode;return e;function i(e,d){return document.createTextNode(d?e.replace(u,""):e)}function c(e,d){return"".concat(d.base,d.size,"/",e,d.ext)}function f(e){return p(e.indexOf(o)<0?e.replace(u,""):e)}function l(e,d){for(var u,o,n,r,c,l,_,s,g,m,p,b,h,w=function e(d,a){for(var u,o,n=d.childNodes,r=n.length;r--;)3===(o=(u=n[r]).nodeType)?a.push(u):1!==o||"ownerSVGElement"in u||t.test(u.nodeName.toLowerCase())||e(u,a);return a}(e,[]),k=w.length;k--;){for(n=!1,r=document.createDocumentFragment(),l=(c=w[k]).nodeValue,s=0;_=a.exec(l);){if((g=_.index)!==s&&r.appendChild(i(l.slice(s,g),!0)),b=f(p=_[0]),s=g+p.length,h=d.callback(b,d),b&&h){for(o in(m=new Image).onerror=d.onerror,m.setAttribute("draggable","false"),u=d.attributes(p,b))u.hasOwnProperty(o)&&0!==o.indexOf("on")&&!m.hasAttribute(o)&&m.setAttribute(o,u[o]);m.className=d.className,m.alt=p,m.src=h,n=!0,r.appendChild(m)}m||r.appendChild(i(p,!1)),m=null}n&&(s<l.length&&r.appendChild(i(l.slice(s),!0)),c.parentNode.replaceChild(r,c))}return e}function _(e,d){return m(e,(function(e){var a,u,o=e,t=f(e),r=d.callback(t,d);if(t&&r){for(u in o="<img ".concat('class="',d.className,'" ','draggable="false" ','alt="',e,'"',' src="',r,'"'),a=d.attributes(e,t))a.hasOwnProperty(u)&&0!==u.indexOf("on")&&-1===o.indexOf(" "+u+"=")&&(o=o.concat(" ",u,'="',a[u].replace(n,s),'"'));o=o.concat("/>")}return o}))}function s(e){return d[e]}function g(){return null}function m(e,d){return String(e).replace(a,d)}function p(e,d){for(var a=[],u=0,o=0,n=0;n<e.length;)u=e.charCodeAt(n++),o?(a.push((65536+(o-55296<<10)+(u-56320)).toString(16)),o=0):55296<=u&&u<=56319?o=u:a.push(u.toString(16));return a.join(d||"-")}}(),b=String.fromCharCode(8205),h=/\uFE0F/g;function w(e){return p.convert.toCodePoint(e.indexOf(b)<0?e.replace(h,""):e)}var k=a(7),y=a.n(k);var v=a(8),x=function(e){var d,a;function u(){return e.apply(this,arguments)||this}a=e,(d=u).prototype=Object.create(a.prototype),d.prototype.constructor=d,d.__proto__=a;var o=u.prototype;return o.init=function(){this.active=!1,this.index=0,this.keyWasJustPressed=!1},o.view=function(){return m("ul",{className:"Dropdown-menu EmojiDropdown"},m("li",{className:"Dropdown-header",key:"0"},app.translator.trans("flarum-emoji.forum.composer.type_to_search_text")),this.props.items.map((function(e){return m("li",{key:e.attrs.key},e)})))},o.show=function(e,d){this.$().show().css({left:e+"px",top:d+"px"}),this.active=!0},o.hide=function(){this.$().hide(),this.active=!1},o.navigate=function(e){var d=this;this.keyWasJustPressed=!0,this.setIndex(this.index+e,!0),clearTimeout(this.keyWasJustPressedTimeout),this.keyWasJustPressedTimeout=setTimeout((function(){return d.keyWasJustPressed=!1}),500)},o.complete=function(){this.$("li:not(.Dropdown-header)").eq(this.index).find("button").click()},o.setIndex=function(e,d){if(!this.keyWasJustPressed||d){var a=this.$(),u=a.find("li:not(.Dropdown-header)"),o=e;o<0?o=u.length-1:o>=u.length&&(o=0),this.index=o;var n=u.removeClass("active").eq(o).addClass("active");if(d){var t,r=a.scrollTop(),i=a.offset().top,c=i+a.outerHeight(),f=n.offset().top,l=f+n.outerHeight();f<i?t=r-i+f-parseInt(a.css("padding-top"),10):l>c&&(t=r-c+l+parseInt(a.css("padding-bottom"),10)),void 0!==t&&a.stop(!0).animate({scrollTop:t},100)}}},u}(a.n(v).a);function j(){var e=Object.keys(r);Object(i.extend)(f.a.prototype,"config",(function(d,a){if(!a){var u,o,n=this,i=$('<div class="ComposerBody-emojiDropdownContainer"></div>'),c=new x({items:[]}),f=this.$("textarea").wrap('<div class="ComposerBody-emojiWrapper"></div>');this.navigator=new y.a,this.navigator.when((function(){return c.active})).onUp((function(){return c.navigate(-1)})).onDown((function(){return c.navigate(1)})).onSelect(c.complete.bind(c)).onCancel(c.hide.bind(c)).bindTo(f),f.after(i).on("click keyup input",(function(d){var a=this;if(-1===[9,13,27,40,38,37,39].indexOf(d.which)){var l=this.selectionStart;if(!(this.selectionEnd-l>0)){var _=this.value;u=0;for(var s=l-1;s>=0;s--){var g=_.substr(s,1);if(!/[a-z0-9]|\+|\-|_|\:/.test(g))break;if(":"===g&&(0==s||/\s/.test(_.substr(s-1,1)))){u=s+1;break}}if(c.hide(),c.active=!1,u){o=_.substring(u,l).toLowerCase();var p=function(e){var d=e.emoji,a=e.name,o=e.code;return m("button",{key:d,onclick:function(){return a=u-1+(e=d+" ").length,o=n.content(),n.editor.setValue(o.substring(0,u-1)+e+o.substr(f[0].selectionStart)),n.editor.setSelectionRange(a,a),void c.hide();var e,a,o},onmouseenter:function(){c.setIndex($(this).parent().index()-1)}},m("img",{alt:d,class:"emoji",draggable:"false",src:"//cdn.jsdelivr.net/gh/twitter/twemoji@12/assets/72x72/"+o+".png"}),a)};!function(){var d,n,f=[],l=(d=o,n=new RegExp("\\((["+"+.*?[]{}()^$|\\".replace(/(.)/g,"\\$1")+"])\\)","g"),new RegExp("(.*)"+d.toLowerCase().replace(/(.)/g,"($1)(.*?)").replace(n,"(\\$1)")+"$","i")),_=7,s=function(d){for(var a=0;a<e.length&&_>0;a++){var u=e[a];if(-1===f.indexOf(u)){var o=r[u],n=Array.isArray(o),t=0;for(o=n?o:o[Symbol.iterator]();;){var i;if(n){if(t>=o.length)break;i=o[t++]}else{if((t=o.next()).done)break;i=t.value}if(d(i)){--_,f.push(u);break}}}}};s((function(e){return 0===e.indexOf(o)})),s((function(e){return l.test(e)}));var g=f.map((function(e){return{emoji:e,name:r[e][0],code:w(e)}})).map(p);if(g.length){c.props.items=g,m.render(i[0],c.render()),c.show();var b=t()(a,u),h=c.$().outerWidth(),k=c.$().outerHeight(),y=c.$().offsetParent(),v=b.left,x=b.top+15;x+k>y.height()&&(x=b.top-k-15),v+h>y.width()&&(v=y.width()-h),x=Math.max(-$(a).offset().top,x),v=Math.max(-$(a).offset().left,v),c.show(v,x)}}(),c.setIndex(0),c.$().scrollTop(0),c.active=!0}}}}))}})),Object(i.extend)(_.a.prototype,"toolbarItems",(function(e){var d=this;e.add("emoji",m(g.a,{onclick:function(){return d.insertAtCursor(":")},icon:"far fa-smile"},app.translator.trans("flarum-emoji.forum.composer.emoji_tooltip")))}))}var z=a(9),C=a.n(z);o.a.initializers.add("flarum-emoji",(function(){j(),Object(i.override)(C.a.prototype,"contentHtml",(function(e){var d=e();return this.oldContentHtml!==d&&(this.emojifiedContentHtml=p.parse(d),this.oldContentHtml=d),this.emojifiedContentHtml})),Object(i.override)(s9e.TextFormatter,"preview",(function(e,d,a){e(d,a),p.parse(a)}))}))}]);
;

flarum.extensions['flarum-emoji']=module.exports;

var module={};

module.exports=function(t){var a={};function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=a,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(e,n,function(a){return t[a]}.bind(null,n));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="",o(o.s=23)}([function(t,a){t.exports=flarum.core.compat.app},function(t,a,o){"use strict";function e(t,a){t.prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a}o.d(a,"a",(function(){return e}))},function(t,a){t.exports=flarum.core.compat.extend},function(t,a){t.exports=flarum.core.compat.Model},function(t,a,o){"use strict";function e(){return(e=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])}return t}).apply(this,arguments)}o.d(a,"a",(function(){return e}))},function(t,a){t.exports=flarum.core.compat["components/Button"]},function(t,a){t.exports=flarum.core.compat["components/Post"]},function(t,a){t.exports=flarum.core},function(t,a){t.exports=flarum.core.compat["utils/PostControls"]},,function(t,a){t.exports=flarum.core.compat["components/Page"]},function(t,a){t.exports=flarum.core.compat.Component},function(t,a){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,a){t.exports=flarum.core.compat["helpers/avatar"]},function(t,a){t.exports=flarum.core.compat["helpers/username"]},function(t,a){t.exports=flarum.core.compat["helpers/icon"]},function(t,a){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,a){t.exports=flarum.core.compat["components/Modal"]},function(t,a){t.exports=flarum.core.compat["components/HeaderSecondary"]},function(t,a){t.exports=flarum.core.compat["components/NotificationsDropdown"]},function(t,a){t.exports=flarum.core.compat["utils/ItemList"]},function(t,a){t.exports=flarum.core.compat["utils/humanTime"]},,function(t,a,o){"use strict";o.r(a);var e=o(4),n=o(0),s=o.n(n),r=o(3),l=o.n(r),i=o(1),c=function(t){function a(){return t.apply(this,arguments)||this}return Object(i.a)(a,t),a}(l.a);Object(e.a)(c.prototype,{type:l.a.attribute("type"),reason:l.a.attribute("reason"),reasonDetail:l.a.attribute("reasonDetail"),createdAt:l.a.attribute("createdAt",l.a.transformDate),post:l.a.hasOne("post"),user:l.a.hasOne("user")});var p=c,u=o(10),f=o.n(u),d=o(11),g=o.n(d),h=o(12),b=o.n(h),v=o(13),_=o.n(v),y=o(14),x=o.n(y),N=o(15),F=o.n(N),w=o(16),O=o.n(w),j=function(t){function a(){return t.apply(this,arguments)||this}Object(i.a)(a,t);var o=a.prototype;return o.init=function(){this.loading=!1},o.view=function(){var t=app.cache.flags||[];return m("div",{className:"NotificationList FlagList"},m("div",{className:"NotificationList-header"},m("h4",{className:"App-titleControl App-titleControl--text"},app.translator.trans("flarum-flags.forum.flagged_posts.title"))),m("div",{className:"NotificationList-content"},m("ul",{className:"NotificationGroup-content"},t.length?t.map((function(t){var a=t.post();return m("li",null,m("a",{href:app.route.post(a),className:"Notification Flag",config:function(t,o){m.route.apply(this,arguments),o||$(t).on("click",(function(){return app.cache.flagIndex=a}))}},_()(a.user()),F()("fas fa-flag",{className:"Notification-icon"}),m("span",{className:"Notification-content"},app.translator.trans("flarum-flags.forum.flagged_posts.item_text",{username:x()(a.user()),em:m("em",null),discussion:a.discussion().title()})),O()(t.createdAt()),m("div",{className:"Notification-excerpt"},a.contentPlain())))})):this.loading?b.a.component({className:"LoadingIndicator--block"}):m("div",{className:"NotificationList-empty"},app.translator.trans("flarum-flags.forum.flagged_posts.empty_text")))))},o.load=function(){var t=this;app.cache.flags&&!app.session.user.attribute("newFlagCount")||(this.loading=!0,m.redraw(),app.store.find("flags").then((function(t){app.session.user.pushAttributes({newFlagCount:0}),app.cache.flags=t.sort((function(t,a){return a.createdAt()-t.createdAt()}))})).catch((function(){})).then((function(){t.loading=!1,m.redraw()})))},a}(g.a),P=function(t){function a(){return t.apply(this,arguments)||this}Object(i.a)(a,t);var o=a.prototype;return o.init=function(){t.prototype.init.call(this),app.history.push("flags"),this.list=new j,this.list.load(),this.bodyClass="App--flags"},o.view=function(){return m("div",{className:"FlagsPage"},this.list.render())},a}(f.a),k=o(2),A=o(8),D=o.n(A),C=o(5),M=o.n(C),B=o(17),L=function(t){function a(){return t.apply(this,arguments)||this}Object(i.a)(a,t);var o=a.prototype;return o.init=function(){t.prototype.init.call(this),this.success=!1,this.reason=m.prop(""),this.reasonDetail=m.prop("")},o.className=function(){return"FlagPostModal Modal--medium"},o.title=function(){return app.translator.trans("flarum-flags.forum.flag_post.title")},o.content=function(){if(this.success)return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",{className:"helpText"},app.translator.trans("flarum-flags.forum.flag_post.confirmation_message")),m("div",{className:"Form-group"},m(M.a,{className:"Button Button--primary Button--block",onclick:this.hide.bind(this)},app.translator.trans("flarum-flags.forum.flag_post.dismiss_button")))));var t=app.forum.attribute("guidelinesUrl");return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m("div",null,m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"off_topic"===this.reason(),value:"off_topic",onclick:m.withAttr("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_off_topic_label")),app.translator.trans("flarum-flags.forum.flag_post.reason_off_topic_text"),"off_topic"===this.reason()?m("textarea",{className:"FormControl",placeholder:app.translator.trans("flarum-flags.forum.flag_post.reason_details_placeholder"),value:this.reasonDetail(),oninput:m.withAttr("value",this.reasonDetail)}):""),m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"inappropriate"===this.reason(),value:"inappropriate",onclick:m.withAttr("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_inappropriate_label")),app.translator.trans("flarum-flags.forum.flag_post.reason_inappropriate_text",{a:t?m("a",{href:t,target:"_blank"}):void 0}),"inappropriate"===this.reason()?m("textarea",{className:"FormControl",placeholder:app.translator.trans("flarum-flags.forum.flag_post.reason_details_placeholder"),value:this.reasonDetail(),oninput:m.withAttr("value",this.reasonDetail)}):""),m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"spam"===this.reason(),value:"spam",onclick:m.withAttr("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_spam_label")),app.translator.trans("flarum-flags.forum.flag_post.reason_spam_text"),"spam"===this.reason()?m("textarea",{className:"FormControl",placeholder:app.translator.trans("flarum-flags.forum.flag_post.reason_details_placeholder"),value:this.reasonDetail(),oninput:m.withAttr("value",this.reasonDetail)}):""),m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"other"===this.reason(),value:"other",onclick:m.withAttr("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_other_label")),"other"===this.reason()?m("textarea",{className:"FormControl",value:this.reasonDetail(),oninput:m.withAttr("value",this.reasonDetail)}):""))),m("div",{className:"Form-group"},m(M.a,{className:"Button Button--primary Button--block",type:"submit",loading:this.loading,disabled:!this.reason()},app.translator.trans("flarum-flags.forum.flag_post.submit_button")))))},o.onsubmit=function(t){var a=this;t.preventDefault(),this.loading=!0,app.store.createRecord("flags").save({reason:"other"===this.reason()?null:this.reason(),reasonDetail:this.reasonDetail(),relationships:{user:app.session.user,post:this.props.post}},{errorHandler:this.onerror.bind(this)}).then((function(){return a.success=!0})).catch((function(){})).then(this.loaded.bind(this))},a}(o.n(B).a),T=function(){Object(k.extend)(D.a,"userControls",(function(t,a){!a.isHidden()&&"comment"===a.contentType()&&a.canFlag()&&t.add("flag",m(M.a,{icon:"fas fa-flag",onclick:function(){return s.a.modal.show(new L({post:a}))}},s.a.translator.trans("flarum-flags.forum.post_controls.flag_button")))}))},I=o(18),S=o.n(I),E=o(19),H=function(t){function a(){return t.apply(this,arguments)||this}Object(i.a)(a,t),a.initProps=function(a){a.label=a.label||app.translator.trans("flarum-flags.forum.flagged_posts.tooltip"),a.icon=a.icon||"fas fa-flag",t.initProps.call(this,a)};var o=a.prototype;return o.init=function(){t.prototype.init.call(this),this.list=new j},o.goToRoute=function(){m.route(app.route("flags"))},o.getUnreadCount=function(){return app.cache.flags?app.cache.flags.length:app.forum.attribute("flagCount")},o.getNewCount=function(){return app.session.user.attribute("newFlagCount")},a}(o.n(E).a),R=function(){Object(k.extend)(S.a.prototype,"items",(function(t){s.a.forum.attribute("canViewFlags")&&t.add("flags",m(H,null),15)}))},U=o(6),G=o.n(U),q=o(20),z=o.n(q),V=o(21),J=o.n(V),K=function(){Object(k.extend)(G.a.prototype,"attrs",(function(t){this.props.post.flags().length&&(t.className+=" Post--flagged")})),G.a.prototype.dismissFlag=function(t){var a=this.props.post;return delete a.data.relationships.flags,this.subtree.invalidate(),s.a.cache.flags&&s.a.cache.flags.some((function(t,o){if(t.post()===a){if(s.a.cache.flags.splice(o,1),s.a.cache.flagIndex===a){var e=s.a.cache.flags[o];if(e||(e=s.a.cache.flags[0]),e){var n=e.post();s.a.cache.flagIndex=n,m.route(s.a.route.post(n))}}return!0}})),s.a.request({url:s.a.forum.attribute("apiUrl")+a.apiEndpoint()+"/flags",method:"DELETE",data:t})},G.a.prototype.flagActionItems=function(){var t=this,a=new z.a,o=D.a.destructiveControls(this.props.post);return Object.keys(o.items).forEach((function(a){var e=o.get(a).props;e.className="Button",Object(k.extend)(e,"onclick",(function(){return t.dismissFlag()}))})),a.add("controls",m("div",{className:"ButtonGroup"},o.toArray())),a.add("dismiss",m(M.a,{className:"Button",icon:"far fa-eye-slash",onclick:this.dismissFlag.bind(this)},s.a.translator.trans("flarum-flags.forum.post.dismiss_flag_button")),-100),a},Object(k.extend)(G.a.prototype,"content",(function(t){var a=this,o=this.props.post,e=o.flags();e.length&&(o.isHidden()&&(this.revealContent=!0),t.unshift(m("div",{className:"Post-flagged"},m("div",{className:"Post-flagged-flags"},e.map((function(t){return m("div",{className:"Post-flagged-flag"},a.flagReason(t))}))),m("div",{className:"Post-flagged-actions"},this.flagActionItems().toArray()))))})),G.a.prototype.flagReason=function(t){if("user"===t.type()){var a=t.user(),o=t.reason(),e=t.reasonDetail(),n=J()(t.createdAt());return[s.a.translator.trans(o?"flarum-flags.forum.post.flagged_by_with_reason_text":"flarum-flags.forum.post.flagged_by_text",{time:n,user:a,reason:o}),e?m("span",{className:"Post-flagged-detail"},e):""]}}},Q={"flags/addFlagsToPosts":K,"flags/addFlagControl":T,"flags/addFlagsDropdown":R,"flags/models/Flag":p,"flags/components/FlagList":j,"flags/components/FlagPostModal":L,"flags/components/FlagsPage":P,"flags/components/FlagsDropdown":H},W=o(7);s.a.initializers.add("flarum-flags",(function(){s.a.store.models.posts.prototype.flags=l.a.hasMany("flags"),s.a.store.models.posts.prototype.canFlag=l.a.attribute("canFlag"),s.a.store.models.flags=p,s.a.routes.flags={path:"/flags",component:m(P,null)},T(),R(),K()})),Object(e.a)(W.compat,Q)}]);
;

flarum.extensions['flarum-flags']=module.exports;

var module={};

module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=15)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["helpers/username"]},function(t,e){t.exports=flarum.core.compat["models/Post"]},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["components/NotificationGrid"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["helpers/punctuateSeries"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["components/Notification"]},function(t,e){t.exports=flarum.core.compat["utils/string"]},,function(t,e,o){"use strict";o.r(e);var n=o(1),r=o(0),s=o.n(r),i=o(4),a=o.n(i),u=o(5),c=o.n(u),l=o(6),p=o.n(l),f=o(7),d=o.n(f),k=o(2),h=o.n(k),y=o(8),b=o.n(y),x=o(3),v=o.n(x),_=o(9),g=o.n(_);function j(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var O=o(10),M=o.n(O),P=o(11),L=o.n(P),N=function(t){function e(){return t.apply(this,arguments)||this}j(e,t);var o=e.prototype;return o.className=function(){return"PostLikesModal Modal--small"},o.title=function(){return app.translator.trans("flarum-likes.forum.post_likes.title")},o.content=function(){return m("div",{className:"Modal-body"},m("ul",{className:"PostLikesModal-list"},this.props.post.likes().map((function(t){return m("li",null,m("a",{href:app.route.user(t),config:m.route},L()(t)," "," ",v()(t)))}))))},e}(M.a),S=o(12),C=o.n(S),B=o(13),w=function(t){function e(){return t.apply(this,arguments)||this}j(e,t);var o=e.prototype;return o.icon=function(){return"far fa-thumbs-up"},o.href=function(){return app.route.post(this.props.notification.subject())},o.content=function(){var t=this.props.notification.fromUser();return app.translator.transChoice("flarum-likes.forum.notifications.post_liked_text",1,{user:t})},o.excerpt=function(){return Object(B.truncate)(this.props.notification.subject().contentPlain(),200)},e}(C.a);s.a.initializers.add("flarum-likes",(function(){s.a.notificationComponents.postLiked=w,a.a.prototype.canLike=c.a.attribute("canLike"),a.a.prototype.likes=c.a.hasMany("likes"),Object(n.extend)(h.a.prototype,"actionItems",(function(t){var e=this.props.post;if(!e.isHidden()&&e.canLike()){var o=e.likes(),n=s.a.session.user&&o&&o.some((function(t){return t===s.a.session.user}));t.add("like",d.a.component({children:s.a.translator.trans(n?"flarum-likes.forum.post.unlike_link":"flarum-likes.forum.post.like_link"),className:"Button Button--link",onclick:function(){n=!n,e.save({isLiked:n});var t=e.data.relationships.likes.data;t.some((function(e,o){if(e.id===s.a.session.user.id())return t.splice(o,1),!0})),n&&t.unshift({type:"users",id:s.a.session.user.id()})}}))}})),Object(n.extend)(h.a.prototype,"footerItems",(function(t){var e=this.props.post,o=e.likes();if(o&&o.length){var n=o.length>4,r=o.sort((function(t){return t===s.a.session.user?-1:1})).slice(0,n?3:4).map((function(t){return m("a",{href:s.a.route.user(t),config:m.route},t===s.a.session.user?s.a.translator.trans("flarum-likes.forum.post.you_text"):v()(t))}));if(n){var i=o.length-r.length;r.push(m("a",{href:"#",onclick:function(t){t.preventDefault(),s.a.modal.show(new N({post:e}))}},s.a.translator.transChoice("flarum-likes.forum.post.others_link",i,{count:i})))}t.add("liked",m("div",{className:"Post-likedBy"},g()("far fa-thumbs-up"),s.a.translator.transChoice("flarum-likes.forum.post.liked_by"+(o[0]===s.a.session.user?"_self":"")+"_text",r.length,{count:r.length,users:b()(r)})))}})),Object(n.extend)(p.a.prototype,"notificationTypes",(function(t){t.add("postLiked",{name:"postLiked",icon:"far fa-thumbs-up",label:s.a.translator.trans("flarum-likes.forum.settings.notify_post_liked_label")})}))}))}]);
;

flarum.extensions['flarum-likes']=module.exports;

var module={};

module.exports=function(o){var t={};function n(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return o[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=o,n.c=t,n.d=function(o,t,e){n.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:e})},n.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,t){if(1&t&&(o=n(o)),8&t)return o;if(4&t&&"object"==typeof o&&o&&o.__esModule)return o;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var r in o)n.d(e,r,function(t){return o[t]}.bind(null,r));return e},n.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(t,"a",t),t},n.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},n.p="",n(n.s=12)}([function(o,t){o.exports=flarum.core.compat.extend},function(o,t){o.exports=flarum.core.compat.app},function(o,t){o.exports=flarum.core.compat["models/Discussion"]},function(o,t){o.exports=flarum.core.compat.Model},function(o,t){o.exports=flarum.core.compat["utils/DiscussionControls"]},function(o,t){o.exports=flarum.core.compat["components/NotificationGrid"]},function(o,t){o.exports=flarum.core.compat["components/EventPost"]},function(o,t){o.exports=flarum.core.compat["components/Notification"]},function(o,t){o.exports=flarum.core.compat["components/Badge"]},function(o,t){o.exports=flarum.core.compat["components/DiscussionPage"]},function(o,t){o.exports=flarum.core.compat["components/Button"]},,function(o,t,n){"use strict";n.r(t);var e=n(0),r=n(1),c=n.n(r),i=n(3),s=n.n(i),a=n(2),u=n.n(a),p=n(5),f=n.n(p);function l(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}var d=n(6),k=function(o){function t(){return o.apply(this,arguments)||this}l(t,o);var n=t.prototype;return n.icon=function(){return this.props.post.content().locked?"fas fa-lock":"fas fa-unlock"},n.descriptionKey=function(){return this.props.post.content().locked?"flarum-lock.forum.post_stream.discussion_locked_text":"flarum-lock.forum.post_stream.discussion_unlocked_text"},t}(n.n(d).a),b=n(7),y=function(o){function t(){return o.apply(this,arguments)||this}l(t,o);var n=t.prototype;return n.icon=function(){return"fas fa-lock"},n.href=function(){var o=this.props.notification;return app.route.discussion(o.subject(),o.content().postNumber)},n.content=function(){return app.translator.trans("flarum-lock.forum.notifications.discussion_locked_text",{user:this.props.notification.fromUser()})},t}(n.n(b).a),_=n(8),x=n.n(_);var h=n(4),v=n.n(h),L=n(9),j=n.n(L),g=n(10),O=n.n(g);c.a.initializers.add("flarum-lock",(function(){c.a.postComponents.discussionLocked=k,c.a.notificationComponents.discussionLocked=y,u.a.prototype.isLocked=s.a.attribute("isLocked"),u.a.prototype.canLock=s.a.attribute("canLock"),Object(e.extend)(u.a.prototype,"badges",(function(o){this.isLocked()&&o.add("locked",x.a.component({type:"locked",label:app.translator.trans("flarum-lock.forum.badge.locked_tooltip"),icon:"fas fa-lock"}))})),Object(e.extend)(v.a,"moderationControls",(function(o,t){t.canLock()&&o.add("lock",O.a.component({children:app.translator.trans(t.isLocked()?"flarum-lock.forum.discussion_controls.unlock_button":"flarum-lock.forum.discussion_controls.lock_button"),icon:"fas fa-lock",onclick:this.lockAction.bind(t)}))})),v.a.lockAction=function(){this.save({isLocked:!this.isLocked()}).then((function(){app.current instanceof j.a&&app.current.stream.update(),m.redraw()}))},Object(e.extend)(f.a.prototype,"notificationTypes",(function(o){o.add("discussionLocked",{name:"discussionLocked",icon:"fas fa-lock",label:c.a.translator.trans("flarum-lock.forum.settings.notify_discussion_locked_label")})}))}))}]);
;

flarum.extensions['flarum-lock']=module.exports;

var module={};

module.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/TextEditor"]},function(e,t){e.exports=flarum.core.compat.Component},function(e,t,n){var i,r,l;"undefined"!=typeof self&&self,r=[],void 0===(l="function"==typeof(i=function(){var e=/mac|iphone|ipad|ipod/i.test(navigator.platform)?"metaKey":"ctrlKey",t=/^["'`*_[({<>})\]]$/,n=/[*_]/,i=/^[ \t]*(?:(?:[-+*]|\d+\.)[ \t]+(?:\[[ x]][ \t]+)?|>[ \t]*)*(?::[ \t]*)?/,r=/(?:[-+*]|\d+\.)[ \t]+(?:\[[ x]][ \t]+)?$/,l=/[-+*\[\]x\d.]/g,o=/[^ \t]/g,s=/(\d+)\.(?=[ \t]+$)/,a=/(?:(?:^[ \t]+)?(?:[-+*]|\d+\.|[>:])(?:[ \t]+\[[ x]])?[ \t]*|^[ \t]+)$/,c=/^(?!$)/gm,u={"`":/^``$/m,"~":/^~~$/m},f={"[":"]","(":")","{":"}","<":">"},h={"]":"[",")":"(","}":"{",">":"<"};function d(e){this._useTab=!0,this._useInline=!0,this._indent="    ",this._reOutdent=/^[ ]{4}/gm,this._reKey=p(!0,!0),this._handleKey=this._handleKey.bind(this),this.setElement(e)}function p(e,t){return new RegExp("^(?:Enter"+(e?"|Tab":"")+"|[io"+(t?"\"'`*_([{<>}\\])":"")+"])$")}function g(e,t,n,i){if(e.value=t,e.selectionStart=n,e.selectionEnd=3<arguments.length?i:n,"InputEvent"in window)try{var r=new InputEvent("input");e.dispatchEvent(r)}catch(i){}}return d.prototype={constructor:d,getElement:function(){return this._elem},setElement:function(e){this._elem&&this._elem.removeEventListener("keydown",this._handleKey),(this._elem=e).addEventListener("keydown",this._handleKey)},getValue:function(){return this._elem.value},setValue:function(e){this._elem.value=e},getIndent:function(){return this._indent},setIndent:function(e){this._indent="number"==typeof e?new Array(e+1).join(" "):(e+"").replace(/[^ \t]/g," "),this._reOutdent=new RegExp("^"+this._indent,"mg")},isTabUsed:function(){return this._useTab},useTab:function(){this._useTab=!0,this._reKey=p(!0,this._useInline)},ignoreTab:function(){this._useTab=!1,this._reKey=p(!1,this._useInline)},isInlineEnabled:function(){return this._useInline},enableInline:function(){this._useInline=!0,this._reKey=p(this._useTab,!0)},disableInline:function(){this._useInline=!1,this._reKey=p(this._useTab,!1)},destroy:function(){this._elem.removeEventListener("keydown",this._handleKey),this._elem=this._reKey=this._handleKey=this._indent=this._reOutdent=null},_handleKey:function(d){if(!d.defaultPrevented&&this._reKey.test(d.key)){var p=d.target.value.substring(0,d.target.selectionStart),m=d.target.value.substring(d.target.selectionStart,d.target.selectionEnd),v=d.target.value.substring(d.target.selectionEnd);if("Enter"!==d.key||d.ctrlKey||d.altKey||d.metaKey)if("Tab"===d.key&&!d.shiftKey||"i"===d.key&&d[e])!function(e,t,n,i,r){var l=t.length,o=t.lastIndexOf("\n")+1;o<l&&(n=t.substring(o)+n,t=t.substring(0,o)),(o<l||!n)&&(l+=r.length),n?n=n.replace(c,r):t+=r,g(e,t+n+i,l,n?o+n.length:l)}(this._elem,p,m,v,this._indent);else if("Tab"===d.key&&d.shiftKey||"o"===d.key&&d[e])!function(e,t,n,i,r,l){var o=t.length,s=t.lastIndexOf("\n")+1;s<o&&(n=t.substring(s)+n,t=t.substring(0,s),n.substring(0,r.length)===r&&(o-=r.length)),g(e,t+(n=n.replace(l,""))+i,o,s+n.length)}(this._elem,p,m,v,this._indent,this._reOutdent);else{if(!t.test(d.key))return;y=this._elem,x=p,b=m,_=v,E=d.key,b||E in f||_.charAt(0)!==E?b||"'"!==E&&!(E in h)?!b&&E in u&&u[E].test(x)?g(y,x+E+"language\n"+E+E+E+("\n"!==_.charAt(0)?"\n":"")+_,x.length+1,x.length+9):g(y,x+(h[E]||E)+b+(f[E]||E)+_,x.length+1,x.length+1+b.length):g(y,x+E+_,x.length+1):g(y,x+(n.test(E)?E+E:"")+_,x.length+1)}else!function(e,t,n,c,u){var f,h,d,p,m,v,y=n?null:(h=(f=t).lastIndexOf("\n")+1,{line:d=f.substring(h),offset:h,prefix:(p=i.exec(d))&&p[0]});!n&&y.prefix?u||y.prefix!==y.line?!u&&(v=y.prefix,r.test(v))?t+="\n"+y.prefix.replace(s,(function(e,t){return parseInt(t)+1+"."})):t+="\n"+(m=u,y.prefix.replace(m?o:l," ")):t=t.substring(0,y.offset)+y.prefix.replace(a,""):t+="\n",g(e,t+c,t.length)}(this._elem,p,m,v,d.shiftKey);d.preventDefault()}var y,x,b,_,E}},d})?i.apply(t,r):i)||(e.exports=l)},function(e,t){e.exports=flarum.core.compat["helpers/icon"]},function(e,t){
/*! https://mths.be/startswith v0.2.0 by @mathias */
String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){return t=!t||t<0?0:+t,this.substring(t,t+e.length)===e}}),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(void 0===t||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e})},function(e,t,n){"use strict";n.r(t);var i=n(0),r=n(1),l=n.n(r),o=n(3),s=n.n(o);n(5);function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var c=n(2),u=n.n(c),f=navigator.userAgent.match(/Macintosh/)?"Meta":"Control",h=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.config=function(e){e||document.getElementById(this.props.for).addEventListener("keydown",this.shortcut.bind(this))},n.view=function(){return m("div",{id:"MarkdownToolbar","data-for":this.props.for,style:{display:"inline-block"}},this.props.children)},n.shortcut=function(e){if(e.metaKey&&"Meta"===f||e.ctrlKey&&"Control"===f){var t=this.element.querySelector('[data-hotkey="'+e.key+'"]');t&&(t.click(),e.preventDefault())}},t}(u.a),d=n(4),p=n.n(d);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var v=null;function y(e){return e.trim().split("\n").length>1}function x(e,t){return Array(t+1).join(e)}function b(e,t){for(var n=t;e[n]&&null!=e[n-1]&&!e[n-1].match(/\s/);)n--;return n}function _(e,t,n){for(var i=t,r=n?/\n/:/\s/;e[i]&&!e[i].match(r);)i++;return i}function E(e){var t,n,i=e.value.slice(0,e.selectionStart),r=e.value.slice(e.selectionEnd),l=i.match(/\n*$/),o=r.match(/^\n*/),s=l?l[0].length:0,a=o?o[0].length:0;return i.match(/\S/)&&s<2&&(t=x("\n",2-s)),r.match(/\S/)&&a<2&&(n=x("\n",2-a)),null==t&&(t=""),null==n&&(n=""),{newlinesToAppend:t,newlinesToPrepend:n}}var S=function(e,t){var n=t.prefix,i=t.suffix,r=t.blockPrefix,l=t.blockSuffix,o=t.replaceNext,s=t.prefixSpace,a=t.scanFor,c=t.surroundWithNewlines,u=e.selectionStart,f=e.selectionEnd,h=e.value.slice(e.selectionStart,e.selectionEnd),d=y(h)&&r.length>0?r+"\n":n,p=y(h)&&l.length>0?"\n"+l:i;if(s){var g=e.value[e.selectionStart-1];0===e.selectionStart||null==g||g.match(/\s/)||(d=" "+d)}h=function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(e.selectionStart===e.selectionEnd)e.selectionStart=b(e.value,e.selectionStart),e.selectionEnd=_(e.value,e.selectionEnd,i);else{var r=e.selectionStart-t.length,l=e.selectionEnd+n.length,o=e.value.slice(r,e.selectionStart)===t,s=e.value.slice(e.selectionEnd,l)===n;o&&s&&(e.selectionStart=r,e.selectionEnd=l)}return e.value.slice(e.selectionStart,e.selectionEnd)}(e,d,p,t.multiline);var m=e.selectionStart,v=e.selectionEnd,x=o.length>0&&p.indexOf(o)>-1&&h.length>0;if(c){var S=E(e);d=S.newlinesToAppend+n,p+=S.newlinesToPrepend}if(h.startsWith(d)&&h.endsWith(p)){var k=h.slice(d.length,h.length-p.length);if(u===f){var w=u-d.length;w=Math.max(w,m),m=v=w=Math.min(w,m+k.length)}else v=m+k.length;return{text:k,selectionStart:m,selectionEnd:v}}if(x)return a.length>0&&h.match(a)?{text:d+(p=p.replace(o,h)),selectionStart:m=v=m+d.length,selectionEnd:v}:{text:d+h+p,selectionStart:m=m+d.length+h.length+p.indexOf(o),selectionEnd:v=m+o.length};var T=d+h+p;m=u+d.length,v=f+d.length;var O=h.match(/^\s*|\s*$/g);if(t.trimFirst&&O){var I=O[0]||"",K=O[1]||"";T=I+d+h.trim()+p+K,m+=I.length,v-=K.length}return{text:T,selectionStart:m,selectionEnd:v}},k=function(e,t){var n,i=e.value.slice(e.selectionStart,e.selectionEnd);n=t.orderedList?function(e){var t,n,i,r,l=/^\d+\.\s+/,o=e.selectionStart===e.selectionEnd,s=e.value.slice(e.selectionStart,e.selectionEnd),a=s,c=s.split("\n");if(o){var u=e.value.slice(0,e.selectionStart).split(/\n/);i=e.selectionStart-u[u.length-1].length,r=_(e.value,e.selectionStart,!0),a=e.value.slice(i,r)}var f=a.split("\n");if(f.every((function(e){return l.test(e)}))){if(s=(c=f.map((function(e){return e.replace(l,"")}))).join("\n"),o&&i&&r){var h=f[0].length-c[0].length;n=t=e.selectionStart-h,e.selectionStart=i,e.selectionEnd=r}}else{s=(c=function(){var e,t,n,i=[];for(n=e=0,t=c.length;e<t;n=++e){var r=c[n];i.push(n+1+". "+r)}return i}()).join("\n");var d=E(e),p=d.newlinesToAppend,g=d.newlinesToPrepend;t=(n=e.selectionStart+p.length)+s.length,o&&(n=t),s=p+s+g}return{text:s,selectionStart:n,selectionEnd:t}}(e):t.multiline&&y(i)?function(e,t){var n=t.prefix,i=t.suffix,r=t.surroundWithNewlines,l=e.value.slice(e.selectionStart,e.selectionEnd),o=e.selectionStart,s=e.selectionEnd,a=l.split("\n");if(a.every((function(e){return e.startsWith(n)&&e.endsWith(i)})))s=o+(l=a.map((function(e){return e.slice(n.length,e.length-i.length)})).join("\n")).length;else if(l=a.map((function(e){return n+e+i})).join("\n"),r){var c=E(e),u=c.newlinesToAppend,f=c.newlinesToPrepend;s=(o+=u.length)+l.length,l=u+l+f}return{text:l,selectionStart:o,selectionEnd:s}}(e,t):S(e,t),function(e,t){var n=t.text,i=t.selectionStart,r=t.selectionEnd,l=e.selectionStart,o=e.value.slice(0,l),s=e.value.slice(e.selectionEnd);if(null===v||!0===v){e.contentEditable="true";try{v=document.execCommand("insertText",!1,n)}catch(e){v=!1}e.contentEditable="false"}if(v&&!e.value.slice(0,e.selectionStart).endsWith(n)&&(v=!1),!v){try{document.execCommand("ms-beginUndoUnit")}catch(e){}e.value=o+n+s;try{document.execCommand("ms-endUndoUnit")}catch(e){}var a=document.createEvent("Event");a.initEvent("input",!0,!0),e.dispatchEvent(a)}null!=i&&null!=r?e.setSelectionRange(i,r):e.setSelectionRange(l,e.selectionEnd)}(e,n)},w=navigator.userAgent.match(/Macintosh/)?"⌘":"ctrl",T=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.config=function(e){e||this.$().tooltip()},n.view=function(){return m("button",{className:"Button Button--icon Button--link",title:this.title(),"data-hotkey":this.props.hotkey,onclick:this.click.bind(this),onkeydown:this.keydown.bind(this)},p()(this.props.icon))},n.keydown=function(e){" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),this.click())},n.click=function(){return e=this.element,t=this.props.style,n=e.parentElement,i=g({},{prefix:"",suffix:"",blockPrefix:"",blockSuffix:"",multiline:!1,replaceNext:"",prefixSpace:!1,scanFor:"",surroundWithNewlines:!1,orderedList:!1,trimFirst:!1},t),void((r=document.getElementById(n.dataset.for))&&(r.focus(),k(r,i)));var e,t,n,i,r},n.title=function(){var e=this.props.title;return this.props.hotkey&&(e+=" <"+w+"-"+this.props.hotkey+">"),e},t}(u.a);
/*!
 * Includes modified code from GitHub Markdown Toolbar Element
 * https://github.com/github/markdown-toolbar-element/
 *
 * Original Copyright GitHub, Inc.
 * Released under the MIT license
 * https://github.com/github/markdown-toolbar-element/blob/master/LICENSE
 */
app.initializers.add("flarum-markdown",(function(e){var t=1;Object(i.extend)(l.a.prototype,"init",(function(){this.textareaId="textarea"+t++})),Object(i.extend)(l.a.prototype,"view",(function(e){e.children[0].attrs.id=this.textareaId})),Object(i.extend)(l.a.prototype,"configTextarea",(function(e,t,n,i){if(!n){var r=new s.a(t);r.disableInline(),r.ignoreTab(),i.onunload=function(){r.destroy()}}})),Object(i.extend)(l.a.prototype,"toolbarItems",(function(t){var n=function(t){return e.translator.trans("flarum-markdown.forum.composer."+t+"_tooltip")};t.add("markdown",m(h,{for:this.textareaId},
m(T,{title:n("header"),icon:"fas fa-heading",style:{prefix:"## "}}),
m(T,{title:n("bold"),icon:"fas fa-bold",style:{prefix:"[b]",suffix:"[/b]",trimFirst:!0},hotkey:"b"}),
m(T,{title:n("italic"),icon:"fas fa-italic",style:{prefix:"[i]",suffix:"[/i]",trimFirst:!0},hotkey:"i"}),

//# Custom button
m(T,{title:n("underline"),icon:"fas fa-underline",style:{prefix:"[u]",suffix:"[/u]",trimFirst:!0},hotkey:"u"}),
m(T,{title:n("strikethrough"),icon:"fas fa-strikethrough",style:{prefix:"[s]",suffix:"[/s]",trimFirst:!0},hotkey:"s"}),
m(T,{title:n("font_size"),icon:"fas fa-font",style:{prefix:"[size=]",suffix:"[/size]",trimFirst:!0,hotkey:"a"}}),
m(T,{title:n("font_family"),icon:"fab fa-fonticons-fi",style:{prefix:"[font=]",suffix:"[/font]",trimFirst:!0 }}),
m(T,{title:n("font_color"),icon:"fas fa-palette",style:{prefix:"[color=]",suffix:"[/color]",trimFirst:!0,hotkey:"c"}}),
m(T,{title:n("bg_color"),icon:"fas fa-paint-brush",style:{prefix:"[bgcolor=]",suffix:"[/bgcolor]",trimFirst:!0 }}),

m(T,{title:n("center"),icon:"fas fa-align-center",style:{prefix: '[center]', suffix: '[/center]'}}),

m(T,{title:n("ruby"),icon:"fas fa-chevron-up",style:{prefix: '[ruby=]', suffix: '[/ruby]'}}),

//m(T,{title:n("space_half"),icon:"far fa-square",style:{suffix:"&nbsp;"}}),
//m(T,{title:n("space_full"),icon:"fas fa-stop",style:{suffix:"&emsp;"}}),

m(T,{title:n("link"),icon:"fas fa-link",style:{prefix:"[",suffix:"](url)",replaceNext:"url",scanFor:"https?://"}}),
m(T,{title:n("image"),icon:"fas fa-image",style:{prefix:"![",suffix:"](src)",replaceNext:"src",scanFor:"https?://"}}),

//#
// m(T,{title:n("quote"),icon:"fas fa-quote-left",style:{prefix:"> ",multiline:!0,surroundWithNewlines:!0,hotkey:"q"}}),
m(T,{title:n("quote_auth"),icon:"fas fa-quote-left",style:{prefix:"[quote=]",suffix:"[/quote]",surroundWithNewlines:!0}}),

m(T,{title:n("table"),icon:"fas fa-table",style:{prefix: '[table=50][tr][td]', suffix: '[/td][/tr][/table]'}}),

m(T,{title:n("unordered_list"),icon:"fas fa-list-ul",style:{prefix:"- ",multiline:!0,surroundWithNewlines:!0}}),
m(T,{title:n("ordered_list"),icon:"fas fa-list-ol",style:{prefix:"1. ",multiline:!0,orderedList:!0}}),

m(T,{title:n("spoiler"),icon:"fas fa-eye-slash",style:{prefix: '[spoiler]', suffix: '[/spoiler]'}}),

m(T,{title:n("heimu"),icon:"fas fa-stop",style:{prefix: '[heimu=]', suffix: '[/heimu]'}}),

m(T,{title:n("code"),icon:"fas fa-code",style:{prefix:"`",suffix:"`",blockPrefix:"```",blockSuffix:"```"}}),
//# Custom button
m(T,{title:n("codebox"),icon:"fas fa-file-code",style:{prefix:"```",suffix:"\n```",trimFirst:!0},hotkey:"d"}),

//# Custom button

),100)}))}))}]);




;

flarum.extensions['flarum-markdown']=module.exports;

var module={};

module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=28)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["utils/string"]},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["helpers/username"]},function(t,e){t.exports=flarum.core.compat["components/PostPreview"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["components/Notification"]},function(t,e){t.exports=flarum.core.compat["utils/extract"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.core.compat["components/NotificationGrid"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["models/Post"]},function(t,e){t.exports=flarum.core.compat["helpers/punctuateSeries"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e,n){!function(){var e=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n="undefined"!=typeof window,o=n&&null!=window.mozInnerScreenX;function r(t,r,i){if(!n)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var s=i&&i.debug||!1;if(s){var a=document.querySelector("#input-textarea-caret-position-mirror-div");a&&a.parentNode.removeChild(a)}var u=document.createElement("div");u.id="input-textarea-caret-position-mirror-div",document.body.appendChild(u);var c=u.style,p=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,f="INPUT"===t.nodeName;c.whiteSpace="pre-wrap",f||(c.wordWrap="break-word"),c.position="absolute",s||(c.visibility="visible"),e.forEach((function(t){f&&"lineHeight"===t?c.lineHeight=p.height:c[t]=p[t]})),o?t.scrollHeight>parseInt(p.height)&&(c.overflowY="scroll"):c.overflow="hidden",u.textContent=t.value.substring(0,r),f&&(u.textContent=u.textContent.replace(/\s/g," "));var l=document.createElement("span");l.textContent=t.value.substring(r)||".",u.appendChild(l);var d={top:l.offsetTop+parseInt(p.borderTopWidth),left:l.offsetLeft+parseInt(p.borderLeftWidth),height:parseInt(p.lineHeight)};return s?l.style.backgroundColor="#aaa":document.body.removeChild(u),d}void 0!==t.exports?t.exports=r:n&&(window.getCaretCoordinates=r)}()},function(t,e){t.exports=flarum.core.compat["components/ComposerBody"]},function(t,e){t.exports=flarum.core.compat["components/TextEditor"]},function(t,e){t.exports=flarum.core.compat["components/TextEditorButton"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["utils/KeyboardNavigatable"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/UserPage"]},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["components/PostsUserPage"]},function(t,e,n){"use strict";n.r(e),n.d(e,"filterUserMentions",(function(){return dt})),n.d(e,"filterPostMentions",(function(){return mt}));var o=n(0),r=n(1),i=n.n(r),s=n(10),a=n.n(s),u=n(2),c=n(3),p=n.n(c),f=n(5),l=n.n(f),d=n(11),h=n.n(d);var v=n(12),g=n.n(v),b=n(13),y=n.n(b),w=n(14),x=n.n(w),C=n(4),P=n.n(C),T=n(15),S=n.n(T);var _=n(6),j=n.n(_),B=n(16),M=n.n(B);function O(t,e,n){var o=t.user(),r="@"+(o?o.username():t.number())+"#"+t.id()+" ";e.content()||(e.props.originalContent=r);var i=e.editor.getSelectionRange()[0],s=e.editor.value().slice(0,i),a=0==s.length?0:3-s.match(/(\n{0,2})$/)[0].length;e.editor.insertAtCursor(Array(a).join("\n")+(n?"> "+r+n.trim().replace(/\n/g,"\n> ")+"\n\n":r))}function k(t,e){var n=app.composer.component;n&&n.props.post&&n.props.post.discussion()===t.discussion()?O(t,n,e):M.a.replyAction.call(t.discussion()).then((function(n){return O(t,n,e)}))}function A(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var I=n(8),W=n.n(I),H=function(t){function e(){return t.apply(this,arguments)||this}A(e,t);var n=e.prototype;return n.view=function(){var e=this,n=W()(this.props,"post"),o=W()(this.props,"content");return this.props.className="Button PostQuoteButton",this.props.icon="fas fa-quote-left",this.props.children=app.translator.trans("flarum-mentions.forum.post.quote_button"),this.props.onclick=function(){e.hide(),k(n,o)},this.props.onmousedown=function(t){return t.stopPropagation()},t.prototype.view.call(this)},n.config=function(t){t||$(document).on("mousedown",this.hide.bind(this))},n.show=function(t,e){var n=this.$().show(),o=n.offsetParent().offset();n.css("left",t-o.left).css("top",e-o.top)},n.showStart=function(t,e){var n=this.$();this.show(t,$(window).scrollTop()+e-n.outerHeight()-5)},n.showEnd=function(t,e){var n=this.$();this.show(t-n.outerWidth(),$(window).scrollTop()+e+5)},n.hide=function(){this.$().hide()},e}(j.a);function N(){Object(o.extend)(p.a.prototype,"config",(function(t,e){var n=this.props.post;if(!(e||n.isHidden()||app.session.user&&!n.discussion().canReply())){var o=this.$(".Post-body"),r=$('<div class="Post-quoteButtonContainer"></div>'),i=function(t){setTimeout((function(){var e=function(t){var e=window.getSelection();if(e.rangeCount){var n=e.getRangeAt(0),o=n.commonAncestorContainer;if(t[0]===o||$.contains(t[0],o)){var r=$("<div>").append(n.cloneContents());return r.find("img.emoji").replaceWith((function(){return this.alt})),r.find("img").replaceWith((function(){return"![]("+this.src+")"})),r.find("a").replaceWith((function(){return"["+this.innerText+"]("+this.href+")"})),r.text()}}return""}(o);if(e){var i=new H({post:n,content:e});m.render(r[0],i.render());var s=window.getSelection().getRangeAt(0).getClientRects(),a=s[0];if(t.clientY<a.bottom&&t.clientX-a.right<a.left-t.clientX)i.showStart(a.left,a.top);else{var u=s[s.length-1];i.showEnd(u.right,u.bottom)}}}),1)};this.$().after(r).on("mouseup",i),"ontouchstart"in window&&document.addEventListener("selectionchange",i,!1)}}))}var E=n(17),D=n.n(E),L=n(18),R=n.n(L),z=n(19),U=n.n(z),q=n(20),J=n.n(q),X=n(21),Y=n.n(X),V=n(22),F=n.n(V),G=n(23),K=n.n(G),Q=n(24),Z=function(t){function e(){return t.apply(this,arguments)||this}A(e,t);var n=e.prototype;return n.init=function(){this.active=!1,this.index=0,this.keyWasJustPressed=!1},n.view=function(){return m("ul",{className:"Dropdown-menu MentionsDropdown"},this.props.items.map((function(t){return m("li",null,t)})))},n.show=function(t,e){this.$().show().css({left:t+"px",top:e+"px"}),this.active=!0},n.hide=function(){this.$().hide(),this.active=!1},n.navigate=function(t){var e=this;this.keyWasJustPressed=!0,this.setIndex(this.index+t,!0),clearTimeout(this.keyWasJustPressedTimeout),this.keyWasJustPressedTimeout=setTimeout((function(){return e.keyWasJustPressed=!1}),500)},n.complete=function(){this.$("li").eq(this.index).find("button").click()},n.setIndex=function(t,e){if(!this.keyWasJustPressed||e){var n=this.$(),o=n.find("li"),r=t;r<0?r=o.length-1:r>=o.length&&(r=0),this.index=r;var i=o.removeClass("active").eq(r).addClass("active");if(e){var s,a=n.scrollTop(),u=n.offset().top,c=u+n.outerHeight(),p=i.offset().top,f=p+i.outerHeight();p<u?s=a-u+p-parseInt(n.css("padding-top"),10):f>c&&(s=a-c+f+parseInt(n.css("padding-bottom"),10)),void 0!==s&&n.stop(!0).animate({scrollTop:s},100)}}},e}(n.n(Q).a);function tt(){Object(o.extend)(R.a.prototype,"config",(function(t,e){if(!e){var n,o,r,i=this,s=$('<div class="ComposerBody-mentionsDropdownContainer"></div>'),a=new Z({items:[]}),c=this.$("textarea").wrap('<div class="ComposerBody-mentionsWrapper"></div>'),p=[];this.navigator=new K.a,this.navigator.when((function(){return a.active})).onUp((function(){return a.navigate(-1)})).onDown((function(){return a.navigate(1)})).onSelect(a.complete.bind(a)).onCancel(a.hide.bind(a)).bindTo(c),c.after(s).on("click keyup input",(function(t){var e=this;if(-1===[9,13,27,40,38,37,39].indexOf(t.which)){var f=this.selectionStart;if(!(this.selectionEnd-f>0)){var l=this.value;n=0;for(var d=f-1;d>=f-30;d--){if("@"===l.substr(d,1)){n=d+1;break}}if(a.hide(),a.active=!1,n){o=l.substring(n,f).toLowerCase();var h=function(t,e,r,s){void 0===s&&(s="");var u=P()(t);return o&&(u.children[0]=F()(u.children[0],o)),m("button",{className:"PostPreview "+s,onclick:function(){return function(t){var e=t+" ",o=n-1+e.length,r=i.content();i.editor.setValue(r.substring(0,n-1)+e+r.substr(c[0].selectionStart)),i.editor.setSelectionRange(o,o),a.hide()}(e)},onmouseenter:function(){a.setIndex($(this).parent().index())}},m("span",{className:"PostPreview-content"},Y()(t),u," "," ",r))},v=function(t){return[t.username(),t.displayName()].some((function(t){return t.toLowerCase().substr(0,o.length)===o}))},g=function(){var t=[];o&&app.store.all("users").forEach((function(e){v(e)&&t.push(h(e,"@"+e.username(),"","MentionsDropdown-user"))}));var r=i.props.post,c=r&&r.discussion()||i.props.discussion;if(c&&c.posts().filter((function(t){return t&&"comment"===t.contentType()&&(!r||t.number()<r.number())})).sort((function(t,e){return e.createdAt()-t.createdAt()})).filter((function(t){var e=t.user();return e&&v(e)})).splice(0,5).forEach((function(e){var n=e.user();t.push(h(n,"@"+n.username()+"#"+e.id(),[app.translator.trans("flarum-mentions.forum.composer.reply_to_post_text",{number:e.number()})," — ",Object(u.truncate)(e.contentPlain(),200)],"MentionsDropdown-post"))})),t.length){a.props.items=t,m.render(s[0],a.render()),a.show();var p=D()(e,n),f=a.$().outerWidth(),l=a.$().outerHeight(),d=a.$().offsetParent(),g=p.left,b=p.top-e.scrollTop+15;b+l>d.height()&&(b=p.top-e.scrollTop-l-15),g+f>d.width()&&(g=d.width()-f),a.show(g,b)}else a.active=!1,a.hide()};a.active=!0,g(),a.setIndex(0),a.$().scrollTop(0),clearTimeout(r),o&&(r=setTimeout((function(){var t=o.toLowerCase();-1===p.indexOf(t)&&(app.store.find("users",{filter:{q:o},page:{limit:5}}).then((function(){a.active&&g()})),p.push(t))}),250))}}}}))}})),Object(o.extend)(U.a.prototype,"toolbarItems",(function(t){var e=this;t.add("mention",m(J.a,{onclick:function(){return e.insertAtCursor("@")},icon:"fas fa-at"},app.translator.trans("flarum-mentions.forum.composer.mention_tooltip")))}))}var et=n(7),nt=n.n(et),ot=function(t){function e(){return t.apply(this,arguments)||this}A(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-reply"},n.href=function(){var t=this.props.notification,e=t.subject(),n=t.content();return app.route.discussion(e.discussion(),n&&n.replyNumber)},n.content=function(){var t=this.props.notification.fromUser();return app.translator.transChoice("flarum-mentions.forum.notifications.post_mentioned_text",1,{user:t})},n.excerpt=function(){return Object(u.truncate)(this.props.notification.subject().contentPlain(),200)},e}(nt.a),rt=function(t){function e(){return t.apply(this,arguments)||this}A(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-at"},n.href=function(){var t=this.props.notification.subject();return app.route.discussion(t.discussion(),t.number())},n.content=function(){var t=this.props.notification.fromUser();return app.translator.trans("flarum-mentions.forum.notifications.user_mentioned_text",{user:t})},n.excerpt=function(){return Object(u.truncate)(this.props.notification.subject().contentPlain(),200)},e}(nt.a),it=n(25),st=n.n(it),at=n(26),ut=n.n(at),ct=n(27),pt=function(t){function e(){return t.apply(this,arguments)||this}return A(e,t),e.prototype.loadResults=function(t){return app.store.find("posts",{filter:{type:"comment",mentioned:this.user.id()},page:{offset:t,limit:this.loadLimit},sort:"-createdAt"})},e}(n.n(ct).a),ft=n(9),lt=n.n(ft);function dt(t){var e=app.store.getBy("users","username",t.getAttribute("username"));if(e)return t.setAttribute("id",e.id()),t.setAttribute("displayname",lt()(P()(e))),!0}function mt(t){var e=app.store.getById("posts",t.getAttribute("id"));if(e)return t.setAttribute("discussionid",e.discussion().id()),t.setAttribute("number",e.number()),t.setAttribute("displayname",lt()(P()(e.user()))),!0}i.a.initializers.add("flarum-mentions",(function(){Object(o.extend)(p.a.prototype,"config",(function(){var t=this.props.post.contentHtml();if(t!==this.oldPostContentHtml&&!this.isEditing()){this.oldPostContentHtml=t;var e=this.props.post,n=this.$();this.$(".UserMention, .PostMention").each((function(){m.route.call(this,this,!1,{},{attrs:{href:this.getAttribute("href")}})})),this.$(".PostMention").each((function(){var t,o=$(this),r=o.data("id"),i=$('<ul class="Dropdown-menu PostMention-preview fade"/>');n.append(i);var s=function(){return $('.PostStream-item[data-id="'+r+'"]')},a=function(){var t=s(),a=!1;if(t.length){var u=t.offset().top,c=window.pageYOffset;u>c&&u+t.height()<c+$(window).height()&&(t.addClass("pulsate"),a=!0)}if(!a){var p=function(){var t=i.outerHeight(!0),e=0;o.offset().top-t<$(window).scrollTop()+$("#header").outerHeight()?e+=o.outerHeight(!0):e-=t,i.show().css("top",o.offset().top-n.offset().top+e).css("left",o.offsetParent().offset().left-n.offset().left).css("max-width",o.offsetParent().width())},f=function(t){var n=t.discussion();m.render(i[0],[n!==e.discussion()?m("li",null,m("span",{className:"PostMention-preview-discussion"},n.title())):"",m("li",null,l.a.component({post:t}))]),p()},d=app.store.getById("posts",r);d&&d.discussion()?f(d):(m.render(i[0],h.a.component()),app.store.find("posts",r).then(f),p()),setTimeout((function(){return i.off("transitionend").addClass("in")}))}},u=function(){s().removeClass("pulsate"),i.hasClass("in")&&i.removeClass("in").one("transitionend",(function(){return i.hide()}))};o.on("touchstart",(function(t){return t.preventDefault()})),o.add(i).hover((function(){clearTimeout(t),t=setTimeout(a,250)}),(function(){clearTimeout(t),s().removeClass("pulsate"),t=setTimeout(u,250)})).on("touchend",(function(t){a(),t.stopPropagation()})),$(document).on("touchend",u)}))}})),y.a.prototype.mentionedBy=g.a.hasMany("mentionedBy"),Object(o.extend)(p.a.prototype,"footerItems",(function(t){var e=this,n=this.props.post,o=n.mentionedBy();if(o&&o.length){if(1===o.length&&o[0].number()===n.number()+1)return;var r=function(){e.$(".Post-mentionedBy-preview").removeClass("in").one("transitionend",(function(){$(this).hide()}))},i=[],s=o.sort((function(t){return t.user()===app.session.user?-1:0})).filter((function(t){var e=t.user();if(-1===i.indexOf(e))return i.push(e),!0})),a=s.length>4,u=s.slice(0,a?3:4).map((function(t){var e=t.user();return m("a",{href:app.route.post(t),config:m.route,onclick:r,"data-number":t.number()},app.session.user===e?app.translator.trans("flarum-mentions.forum.post.you_text"):P()(e))}));if(a){var c=s.length-u.length;u.push(app.translator.transChoice("flarum-mentions.forum.post.others_text",c,{count:c}))}t.add("replies",m("div",{className:"Post-mentionedBy",config:function(t,e){if(!e){var n,i=$(t),s=$('<ul class="Dropdown-menu Post-mentionedBy-preview fade"/>');i.append(s),i.children().hover((function(){clearTimeout(n),n=setTimeout((function(){!s.hasClass("in")&&s.is(":visible")||(m.render(s[0],o.map((function(t){return m("li",{"data-number":t.number()},l.a.component({post:t,onclick:r}))}))),s.show(),setTimeout((function(){return s.off("transitionend").addClass("in")})))}),500)}),(function(){clearTimeout(n),n=setTimeout(r,250)})),i.find(".Post-mentionedBy-summary a").hover((function(){s.find('[data-number="'+$(this).data("number")+'"]').addClass("active")}),(function(){s.find("[data-number]").removeClass("active")}))}}},m("span",{className:"Post-mentionedBy-summary"},S()("fas fa-reply"),app.translator.transChoice("flarum-mentions.forum.post.mentioned_by"+(s[0].user()===app.session.user?"_self":"")+"_text",u.length,{count:u.length,users:x()(u)}))))}})),Object(o.extend)(p.a.prototype,"actionItems",(function(t){var e=this.props.post;e.isHidden()||app.session.user&&!e.discussion().canReply()||t.add("reply",j.a.component({className:"Button Button--link",children:app.translator.trans("flarum-mentions.forum.post.reply_link"),onclick:function(){return k(e)}}))})),N(),tt(),i.a.notificationComponents.postMentioned=ot,i.a.notificationComponents.userMentioned=rt,Object(o.extend)(a.a.prototype,"notificationTypes",(function(t){t.add("postMentioned",{name:"postMentioned",icon:"fas fa-reply",label:i.a.translator.trans("flarum-mentions.forum.settings.notify_post_mentioned_label")}),t.add("userMentioned",{name:"userMentioned",icon:"fas fa-at",label:i.a.translator.trans("flarum-mentions.forum.settings.notify_user_mentioned_label")})})),i.a.routes["user.mentions"]={path:"/u/:username/mentions",component:pt.component()},Object(o.extend)(st.a.prototype,"navItems",(function(t){var e=this.user;t.add("mentions",ut.a.component({href:i.a.route("user.mentions",{username:e.username()}),name:"mentions",children:[i.a.translator.trans("flarum-mentions.forum.user.mentions_link")],icon:"fas fa-at"}),80)})),u.getPlainContent.removeSelectors.push("a.PostMention")}))}]);
;

flarum.extensions['flarum-mentions']=module.exports;

var module={};

module.exports=function(t){var o={};function n(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=o,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)n.d(e,r,function(o){return t[o]}.bind(null,r));return e},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=13)}([function(t,o){t.exports=flarum.core.compat.extend},function(t,o){t.exports=flarum.core.compat.app},function(t,o){t.exports=flarum.core.compat["models/Discussion"]},function(t,o){t.exports=flarum.core.compat.Model},function(t,o){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,o){t.exports=flarum.core.compat["components/EventPost"]},function(t,o){t.exports=flarum.core.compat["components/Badge"]},function(t,o){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,o){t.exports=flarum.core.compat["components/Button"]},function(t,o){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,o){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,o){t.exports=flarum.core.compat["utils/string"]},,function(t,o,n){"use strict";n.r(o);var e=n(1),r=n.n(e),c=n(3),i=n.n(c),s=n(2),a=n.n(s);var u=n(5),p=function(t){var o,n;function e(){return t.apply(this,arguments)||this}n=t,(o=e).prototype=Object.create(n.prototype),o.prototype.constructor=o,o.__proto__=n;var r=e.prototype;return r.icon=function(){return"fas fa-thumbtack"},r.descriptionKey=function(){return this.props.post.content().sticky?"flarum-sticky.forum.post_stream.discussion_stickied_text":"flarum-sticky.forum.post_stream.discussion_unstickied_text"},e}(n.n(u).a),f=n(0),l=n(6),d=n.n(l);var y=n(4),k=n.n(y),b=n(7),x=n.n(b),_=n(8),v=n.n(_);var h=n(9),S=n.n(h),j=n(10),O=n.n(j),P=n(11);r.a.initializers.add("flarum-sticky",(function(){r.a.postComponents.discussionStickied=p,a.a.prototype.isSticky=i.a.attribute("isSticky"),a.a.prototype.canSticky=i.a.attribute("canSticky"),Object(f.extend)(a.a.prototype,"badges",(function(t){this.isSticky()&&t.add("sticky",d.a.component({type:"sticky",label:app.translator.trans("flarum-sticky.forum.badge.sticky_tooltip"),icon:"fas fa-thumbtack"}),10)})),Object(f.extend)(k.a,"moderationControls",(function(t,o){o.canSticky()&&t.add("sticky",v.a.component({children:app.translator.trans(o.isSticky()?"flarum-sticky.forum.discussion_controls.unsticky_button":"flarum-sticky.forum.discussion_controls.sticky_button"),icon:"fas fa-thumbtack",onclick:this.stickyAction.bind(o)}))})),k.a.stickyAction=function(){this.save({isSticky:!this.isSticky()}).then((function(){app.current instanceof x.a&&app.current.stream.update(),m.redraw()}))},Object(f.extend)(S.a.prototype,"requestParams",(function(t){t.include.push("firstPost")})),Object(f.extend)(O.a.prototype,"infoItems",(function(t){var o=this.props.discussion;if(o.isSticky()&&!this.props.params.q&&!o.lastReadPostNumber()){var n=o.firstPost();if(n){var e=Object(P.truncate)(n.contentPlain(),175);t.add("excerpt",e,-100)}}}))}))}]);
;

flarum.extensions['flarum-sticky']=module.exports;

var module={};

module.exports=function(o){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return o[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=o,n.c=t,n.d=function(o,t,r){n.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:r})},n.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,t){if(1&t&&(o=n(o)),8&t)return o;if(4&t&&"object"==typeof o&&o&&o.__esModule)return o;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var s in o)n.d(r,s,function(t){return o[t]}.bind(null,s));return r},n.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(t,"a",t),t},n.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},n.p="",n(n.s=22)}([function(o,t){o.exports=flarum.core.compat.extend},function(o,t){o.exports=flarum.core.compat["helpers/icon"]},function(o,t){o.exports=flarum.core.compat["models/Discussion"]},function(o,t){o.exports=flarum.core.compat["components/Button"]},function(o,t){o.exports=flarum.core.compat.app},function(o,t){o.exports=flarum.core.compat["components/Badge"]},function(o,t){o.exports=flarum.core.compat["components/DiscussionPage"]},function(o,t){o.exports=flarum.core.compat.Model},function(o,t){o.exports=flarum.core.compat["components/NotificationGrid"]},function(o,t){o.exports=flarum.core.compat["utils/DiscussionControls"]},function(o,t){o.exports=flarum.core.compat["components/Dropdown"]},function(o,t){o.exports=flarum.core.compat["utils/extractText"]},function(o,t){o.exports=flarum.core.compat.Component},function(o,t){o.exports=flarum.core.compat["components/LinkButton"]},function(o,t){o.exports=flarum.core.compat["components/IndexPage"]},function(o,t){o.exports=flarum.core.compat["components/DiscussionList"]},function(o,t){o.exports=flarum.core.compat["components/SettingsPage"]},function(o,t){o.exports=flarum.core.compat["components/Switch"]},function(o,t){o.exports=flarum.core.compat["components/Notification"]},function(o,t){o.exports=flarum.core.compat["components/FieldSet"]},function(o,t){o.exports=flarum.core.compat["utils/ItemList"]},function(o,t){o.exports=flarum.core.compat["helpers/username"]},function(o,t,n){"use strict";n.r(t);var r=n(0),s=n(4),e=n.n(s),i=n(7),a=n.n(i),c=n(2),u=n.n(c),p=n(8),l=n.n(p),f=n(5),b=n.n(f);var d=n(3),_=n.n(d),g=n(6),w=n.n(g),y=n(9),h=n.n(y);function x(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}var v=n(10),S=n.n(v),j=n(1),O=n.n(j),P=n(11),M=n.n(P),N=n(12),k=function(o){function t(){return o.apply(this,arguments)||this}return x(t,o),t.prototype.view=function(){return m("button",{className:"SubscriptionMenuItem hasIcon",onclick:this.props.onclick},this.props.active?O()("fas fa-check",{className:"Button-icon"}):"",m("span",{className:"SubscriptionMenuItem-label"},O()(this.props.icon,{className:"Button-icon"}),m("strong",null,this.props.label),m("span",{className:"SubscriptionMenuItem-description"},this.props.description)))},t}(n.n(N).a),B=function(o){function t(){return o.apply(this,arguments)||this}x(t,o);var n=t.prototype;return n.init=function(){this.options=[{subscription:!1,icon:"far fa-star",label:app.translator.trans("flarum-subscriptions.forum.sub_controls.not_following_button"),description:app.translator.trans("flarum-subscriptions.forum.sub_controls.not_following_text")},{subscription:"follow",icon:"fas fa-star",label:app.translator.trans("flarum-subscriptions.forum.sub_controls.following_button"),description:app.translator.trans("flarum-subscriptions.forum.sub_controls.following_text")},{subscription:"ignore",icon:"far fa-eye-slash",label:app.translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_button"),description:app.translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_text")}]},n.view=function(){var o=this,t=this.props.discussion,n=t.subscription(),r=app.translator.trans("flarum-subscriptions.forum.sub_controls.follow_button"),s="far fa-star",e="SubscriptionMenu-button--"+n;switch(n){case"follow":r=app.translator.trans("flarum-subscriptions.forum.sub_controls.following_button"),s="fas fa-star";break;case"ignore":r=app.translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_button"),s="far fa-eye-slash"}var i=app.session.user.preferences(),a=i.notify_newPost_email,c=i.notify_newPost_alert,u=M()(app.translator.trans(a?"flarum-subscriptions.forum.sub_controls.notify_email_tooltip":"flarum-subscriptions.forum.sub_controls.notify_alert_tooltip")),p={className:"Button SubscriptionMenu-button "+e,icon:s,children:r,onclick:this.saveSubscription.bind(this,t,-1===["follow","ignore"].indexOf(n)&&"follow"),title:u};return p.config=(a||c)&&!1===n?function(o){$(o).tooltip({container:".SubscriptionMenu",placement:"bottom",delay:250,title:u})}:function(o){return $(o).tooltip("destroy")},m("div",{className:"Dropdown ButtonGroup SubscriptionMenu"},_.a.component(p),m("button",{className:"Dropdown-toggle Button Button--icon "+e,"data-toggle":"dropdown"},O()("fas fa-caret-down",{className:"Button-icon"})),m("ul",{className:"Dropdown-menu dropdown-menu Dropdown-menu--right"},this.options.map((function(r){return r.onclick=o.saveSubscription.bind(o,t,r.subscription),r.active=n===r.subscription,m("li",null,k.component(r))}))))},n.saveSubscription=function(o,t){o.save({subscription:t}),this.$(".SubscriptionMenu-button").tooltip("hide")},t}(S.a);var D=n(13),I=n.n(D),C=n(14),T=n.n(C),q=n(15),A=n.n(q);var L=n(16),R=n.n(L),G=(n(19),n(17)),z=n.n(G),F=(n(20),n(18)),U=n.n(F),E=(n(21),function(o){function t(){return o.apply(this,arguments)||this}x(t,o);var n=t.prototype;return n.icon=function(){return"fas fa-star"},n.href=function(){var o=this.props.notification,t=o.subject(),n=o.content()||{};return app.route.discussion(t,n.postNumber)},n.content=function(){return app.translator.trans("flarum-subscriptions.forum.notifications.new_post_text",{user:this.props.notification.fromUser()})},t}(U.a));e.a.initializers.add("subscriptions",(function(){e.a.notificationComponents.newPost=E,u.a.prototype.subscription=a.a.attribute("subscription"),Object(r.extend)(u.a.prototype,"badges",(function(o){var t;switch(this.subscription()){case"follow":t=b.a.component({label:app.translator.trans("flarum-subscriptions.forum.badge.following_tooltip"),icon:"fas fa-star",type:"following"});break;case"ignore":t=b.a.component({label:app.translator.trans("flarum-subscriptions.forum.badge.ignoring_tooltip"),icon:"far fa-eye-slash",type:"ignoring"})}t&&o.add("subscription",t)})),Object(r.extend)(h.a,"userControls",(function(o,t,n){if(app.session.user&&!(n instanceof w.a)){var r={none:{label:app.translator.trans("flarum-subscriptions.forum.discussion_controls.follow_button"),icon:"fas fa-star",save:"follow"},follow:{label:app.translator.trans("flarum-subscriptions.forum.discussion_controls.unfollow_button"),icon:"far fa-star",save:!1},ignore:{label:app.translator.trans("flarum-subscriptions.forum.discussion_controls.unignore_button"),icon:"fas fa-eye",save:!1}},s=t.subscription()||"none";o.add("subscription",_.a.component({children:r[s].label,icon:r[s].icon,onclick:t.save.bind(t,{subscription:r[s].save})}))}})),Object(r.extend)(w.a.prototype,"sidebarItems",(function(o){if(app.session.user){var t=this.discussion;o.add("subscription",B.component({discussion:t}))}})),Object(r.extend)(T.a.prototype,"navItems",(function(o){if(app.session.user){var t=this.stickyParams();t.filter="following",o.add("following",I.a.component({href:app.route("index.filter",t),children:app.translator.trans("flarum-subscriptions.forum.index.following_link"),icon:"fas fa-star"}),50)}})),Object(r.extend)(A.a.prototype,"requestParams",(function(o){"following"===this.props.params.filter&&(o.filter.q=(o.filter.q||"")+" is:following")})),Object(r.extend)(R.a.prototype,"notificationsItems",(function(o){o.add("followAfterReply",z.a.component({children:app.translator.trans("flarum-subscriptions.forum.settings.follow_after_reply_label"),state:this.user.preferences().followAfterReply,onchange:this.preferenceSaver("followAfterReply")}))})),Object(r.extend)(l.a.prototype,"notificationTypes",(function(o){o.add("newPost",{name:"newPost",icon:"fas fa-star",label:e.a.translator.trans("flarum-subscriptions.forum.settings.notify_new_post_label")})}))}))}]);
;

flarum.extensions['flarum-subscriptions']=module.exports;

var module={};

module.exports=function(t){var e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(s,r,function(e){return t[e]}.bind(null,r));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["components/Notification"]},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["models/User"]},function(t,e){t.exports=flarum.core.compat["utils/UserControls"]},function(t,e){t.exports=flarum.core.compat["components/Badge"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},,function(t,e,n){"use strict";n.r(e);var s=n(1),r=n(0),a=n.n(r),o=n(6),u=n.n(o),i=n(2),p=n.n(i),l=n(7),c=n.n(l),d=n(4),f=n.n(d),h=n(5),y=n.n(h);function b(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var v=n(8),_=function(t){function e(){return t.apply(this,arguments)||this}b(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this);var e=this.props.user.suspendedUntil(),n=null;new Date>e&&(e=null),e&&(n=9999===e.getFullYear()?"indefinitely":"limited"),this.status=m.prop(n),this.daysRemaining=m.prop("limited"===n&&1-moment().diff(e,"days"))},n.className=function(){return"SuspendUserModal Modal--small"},n.title=function(){return app.translator.trans("flarum-suspend.forum.suspend_user.title",{user:this.props.user})},n.content=function(){var t=this;return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("div",{className:"Form-group"},m("label",null,app.translator.trans("flarum-suspend.forum.suspend_user.status_heading")),m("div",null,m("label",{className:"checkbox"},m("input",{type:"radio",name:"status",checked:!this.status(),value:"",onclick:m.withAttr("value",this.status)}),app.translator.trans("flarum-suspend.forum.suspend_user.not_suspended_label")),m("label",{className:"checkbox"},m("input",{type:"radio",name:"status",checked:"indefinitely"===this.status(),value:"indefinitely",onclick:m.withAttr("value",this.status)}),app.translator.trans("flarum-suspend.forum.suspend_user.indefinitely_label")),m("label",{className:"checkbox SuspendUserModal-days"},m("input",{type:"radio",name:"status",checked:"limited"===this.status(),value:"limited",onclick:function(e){t.status(e.target.value),m.redraw(!0),t.$(".SuspendUserModal-days-input input").select(),m.redraw.strategy("none")}}),app.translator.trans("flarum-suspend.forum.suspend_user.limited_time_label"),"limited"===this.status()?m("div",{className:"SuspendUserModal-days-input"},m("input",{type:"number",min:"0",value:this.daysRemaining(),oninput:m.withAttr("value",this.daysRemaining),className:"FormControl"}),app.translator.trans("flarum-suspend.forum.suspend_user.limited_time_days_text")):""))),m("div",{className:"Form-group"},m(p.a,{className:"Button Button--primary",loading:this.loading,type:"submit"},app.translator.trans("flarum-suspend.forum.suspend_user.submit_button")))))},n.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0;var n=null;switch(this.status()){case"indefinitely":n=new Date("2038-01-01");break;case"limited":n=moment().add(this.daysRemaining(),"days").toDate()}this.props.user.save({suspendedUntil:n}).then((function(){return e.hide()}),this.loaded.bind(this))},e}(n.n(v).a),x=n(3),g=n.n(x),U=function(t){function e(){return t.apply(this,arguments)||this}b(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-ban"},n.href=function(){return app.route.user(this.props.notification.subject())},n.content=function(){var t=this.props.notification,e=t.content(),n=moment(e.date).from(t.createdAt(),!0);return app.translator.trans("flarum-suspend.forum.notifications.user_suspended_text",{user:t.fromUser(),timeReadable:n})},e}(g.a),S=function(t){function e(){return t.apply(this,arguments)||this}b(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-ban"},n.href=function(){return app.route.user(this.props.notification.subject())},n.content=function(){var t=this.props.notification;return app.translator.trans("flarum-suspend.forum.notifications.user_unsuspended_text",{user:t.fromUser()})},e}(g.a);a.a.initializers.add("flarum-suspend",(function(){a.a.notificationComponents.userSuspended=U,a.a.notificationComponents.userUnsuspended=S,y.a.prototype.canSuspend=f.a.attribute("canSuspend"),y.a.prototype.suspendedUntil=f.a.attribute("suspendedUntil",f.a.transformDate),Object(s.extend)(u.a,"moderationControls",(function(t,e){e.canSuspend()&&t.add("suspend",p.a.component({children:a.a.translator.trans("flarum-suspend.forum.user_controls.suspend_button"),icon:"fas fa-ban",onclick:function(){return a.a.modal.show(new _({user:e}))}}))})),Object(s.extend)(y.a.prototype,"badges",(function(t){var e=this.suspendedUntil();new Date<e&&t.add("suspended",c.a.component({icon:"fas fa-ban",type:"suspended",label:a.a.translator.trans("flarum-suspend.forum.user_badge.suspended_tooltip")}))}))}))}]);
;

flarum.extensions['flarum-suspend']=module.exports;

var module={};

module.exports=function(t){var e={};function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=48)}([function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat.extend},function(t,e,n){"use strict";function a(t){return t.slice(0).sort((function(t,e){var n=t.position(),a=e.position();if(null===n&&null===a)return e.discussionCount()-t.discussionCount();if(null===a)return-1;if(null===n)return 1;var s=t.parent(),o=e.parent();return s===o?n-a:s&&o?s.position()-o.position():s?s===e?1:s.position()-a:o?o===t?-1:n-o.position():0}))}n.d(e,"a",(function(){return a}))},function(t,e,n){"use strict";function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return a}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(12),s=n.n(a);function o(t,e,n){void 0===e&&(e={}),void 0===n&&(n={});var a=t&&t.icon(),o=n.useColor,r=void 0===o||o;return e.className=s()([e.className,"icon",a?t.icon():"TagIcon"]),t?(e.style=e.style||{},a?e.style.color=r?t.color():"":e.style.backgroundColor=t.color()):e.className+=" untagged",a?m("i",e):m("span",e)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(11),s=n.n(a),o=n(4);function r(t,e){void 0===e&&(e={}),e.style=e.style||{},e.className="TagLabel "+(e.className||"");var n=s()(e,"link"),a=t?t.name():app.translator.trans("flarum-tags.lib.deleted_tag_text");if(t){var r=t.color();r&&(e.style.backgroundColor=e.style.color=r,e.className+=" colored"),n&&(e.title=t.description()||"",e.href=app.route("tag",{tags:t.slug()}),e.config=m.route)}else e.className+=" untagged";return m(n?"a":"span",e,m("span",{className:"TagLabel-text"},t&&t.icon()&&Object(o.a)(t,{},{useColor:!1})," ",a))}},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(11),s=n.n(a),o=n(5),r=n(2);function i(t,e){void 0===e&&(e={});var n=[],a=s()(e,"link");return e.className="TagsLabel "+(e.className||""),t?Object(r.a)(t).forEach((function(e){(e||1===t.length)&&n.push(Object(o.a)(e,{link:a}))})):n.push(Object(o.a)()),m("span",e,n)}},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return a}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n(3),s=n(0),o=n.n(s),r=n(16),i=n.n(r),c=n(17),u=n.n(c),l=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e}(i()(o.a,{name:o.a.attribute("name"),slug:o.a.attribute("slug"),description:o.a.attribute("description"),color:o.a.attribute("color"),backgroundUrl:o.a.attribute("backgroundUrl"),backgroundMode:o.a.attribute("backgroundMode"),icon:o.a.attribute("icon"),position:o.a.attribute("position"),parent:o.a.hasOne("parent"),defaultSort:o.a.attribute("defaultSort"),isChild:o.a.attribute("isChild"),isHidden:o.a.attribute("isHidden"),discussionCount:o.a.attribute("discussionCount"),lastPostedAt:o.a.attribute("lastPostedAt",o.a.transformDate),lastPostedDiscussion:o.a.hasOne("lastPostedDiscussion"),isRestricted:o.a.attribute("isRestricted"),canStartDiscussion:o.a.attribute("canStartDiscussion"),canAddToDiscussion:o.a.attribute("canAddToDiscussion"),isPrimary:u()("position","parent",(function(t,e){return null!==t&&!1===e}))}))},function(t,e){t.exports=flarum.core.compat["utils/extract"]},function(t,e){t.exports=flarum.core.compat["utils/classList"]},,function(t,e){t.exports=flarum.core.compat["components/DiscussionComposer"]},function(t,e){},function(t,e){t.exports=flarum.core.compat["utils/mixin"]},function(t,e){t.exports=flarum.core.compat["utils/computed"]},function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e,n){"use strict";var a=n(2),s=n(10),o=n(7),r=n(4),i=n(5);e.a={"tags/utils/sortTags":a.a,"tags/models/Tag":s.a,"tags/helpers/tagsLabel":o.a,"tags/helpers/tagIcon":r.a,"tags/helpers/tagLabel":i.a}},function(t,e){t.exports=flarum.core},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["models/Discussion"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionHero"]},function(t,e,n){"use strict";var a=n(9),s=n(0),o=n.n(s),r=n(24),i=n.n(r),c=n(6),u=n.n(c),l=n(10),p=n(3),d=n(18),f=n.n(d),g=n(28),h=n.n(g),b=n(29),v=n.n(b),y=n(5),x=n(2),T=function(t){function e(){return t.apply(this,arguments)||this}Object(p.a)(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.tags=Object(x.a)(app.store.all("tags").filter((function(t){return!t.parent()}))),app.history.push("tags",app.translator.trans("flarum-tags.forum.header.back_to_tags_tooltip"))},n.view=function(){var t=this.tags.filter((function(t){return null!==t.position()})),e=this.tags.filter((function(t){return null===t.position()}));return m("div",{className:"TagsPage"},u.a.prototype.hero(),m("div",{className:"container"},m("nav",{className:"TagsPage-nav IndexPage-nav sideNav",config:u.a.prototype.affixSidebar},m("ul",null,h()(u.a.prototype.sidebarItems().toArray()))),m("div",{className:"TagsPage-content sideNavOffset"},m("ul",{className:"TagTiles"},t.map((function(t){var e=t.lastPostedDiscussion(),n=Object(x.a)(app.store.all("tags").filter((function(e){return e.parent()===t})));return m("li",{className:"TagTile "+(t.color()?"colored":""),style:{backgroundColor:t.color()}},m("a",{className:"TagTile-info",href:app.route.tag(t),config:m.route},m("h3",{className:"TagTile-name"},t.name()),m("p",{className:"TagTile-description"},t.description()),n?m("div",{className:"TagTile-children"},n.map((function(t){return[m("a",{href:app.route.tag(t),config:function(t,e){e||($(t).on("click",(function(t){return t.stopPropagation()})),m.route.apply(this,arguments))}},t.name())," "]}))):""),e?m("a",{className:"TagTile-lastPostedDiscussion",href:app.route.discussion(e,e.lastPostNumber()),config:m.route},m("span",{className:"TagTile-lastPostedDiscussion-title"},e.title()),v()(e.lastPostedAt())):m("span",{className:"TagTile-lastPostedDiscussion"}))}))),e.length?m("div",{className:"TagCloud"},e.map((function(t){return[Object(y.a)(t,{link:!0})," "]}))):"")))},n.config=function(){for(var e,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];(e=t.prototype.config).call.apply(e,[this].concat(a)),app.setTitle(app.translator.trans("flarum-tags.forum.all_tags.meta_title_text")),app.setTitleCount(0)},e}(f.a),O=n(30),N=n.n(O),_=n(7),j=function(t){function e(){return t.apply(this,arguments)||this}Object(p.a)(e,t),e.initProps=function(e){t.initProps.call(this,e);var n=e.post.content()[0],a=e.post.content()[1];function s(t,e){return t.filter((function(t){return-1===e.indexOf(t)})).map((function(t){return app.store.getById("tags",t)}))}e.tagsAdded=s(a,n),e.tagsRemoved=s(n,a)};var n=e.prototype;return n.icon=function(){return"fas fa-tag"},n.descriptionKey=function(){return this.props.tagsAdded.length?this.props.tagsRemoved.length?"flarum-tags.forum.post_stream.added_and_removed_tags_text":"flarum-tags.forum.post_stream.added_tags_text":"flarum-tags.forum.post_stream.removed_tags_text"},n.descriptionData=function(){var t={};return this.props.tagsAdded.length&&(t.tagsAdded=app.translator.transChoice("flarum-tags.forum.post_stream.tags_text",this.props.tagsAdded.length,{tags:Object(_.a)(this.props.tagsAdded,{link:!0}),count:this.props.tagsAdded.length})),this.props.tagsRemoved.length&&(t.tagsRemoved=app.translator.transChoice("flarum-tags.forum.post_stream.tags_text",this.props.tagsRemoved.length,{tags:Object(_.a)(this.props.tagsRemoved,{link:!0}),count:this.props.tagsRemoved.length})),t},e}(N.a),P=n(1),C=n(31),D=n.n(C),I=n(22),k=n.n(I),w=n(4),S=function(t){function e(){return t.apply(this,arguments)||this}return Object(p.a)(e,t),e.prototype.view=function(){var t=this.props.tag,e=this.constructor.isActive(this.props),n=t&&t.description();return m("a",{className:"TagLinkButton hasIcon "+(t.isChild()?"child":""),href:this.props.href,config:m.route,style:e&&t?{color:t.color()}:"",title:n||""},Object(w.a)(t,{className:"Button-icon"}),this.props.children)},e.initProps=function(t){var e=t.tag;t.params.tags=e?e.slug():"untagged",t.href=app.route("tag",t.params),t.children=e?e.name():app.translator.trans("flarum-tags.forum.index.untagged_link")},e}(k.a),A=function(){Object(P.extend)(u.a.prototype,"navItems",(function(t){if(t.add("tags",k.a.component({icon:"fas fa-th-large",children:app.translator.trans("flarum-tags.forum.index.tags_link"),href:app.route("tags")}),-10),!(app.current instanceof T)){t.add("separator",D.a.component(),-12);var e=this.stickyParams(),n=app.store.all("tags"),a=this.currentTag(),s=function(n){var s=a===n;!s&&a&&(s=a.parent()===n),t.add("tag"+n.id(),S.component({tag:n,params:e,active:s}),-14)};Object(x.a)(n).filter((function(t){return null!==t.position()&&(!t.isChild()||a&&(t.parent()===a||t.parent()===a.parent()))})).forEach(s);var o=n.filter((function(t){return null===t.position()})).sort((function(t,e){return e.discussionCount()-t.discussionCount()}));o.splice(0,3).forEach(s),o.length&&t.add("moreTags",k.a.component({children:app.translator.trans("flarum-tags.forum.index.more_link"),href:app.route("tags")}),-16)}}))},L=n(32),M=n.n(L),H=n(33),B=function(t){function e(){return t.apply(this,arguments)||this}return Object(p.a)(e,t),e.prototype.view=function(){var t=this.props.tag,e=t.color();return m("header",{className:"Hero TagHero"+(e?" TagHero--colored":""),style:e?{color:"#fff",backgroundColor:e}:""},m("div",{className:"container"},m("div",{className:"containerNarrow"},m("h2",{className:"Hero-title"},t.icon()&&Object(w.a)(t,{},{useColor:!1})," ",t.name()),m("div",{className:"Hero-subtitle"},t.description()))))},e}(n.n(H).a),R=function(){u.a.prototype.currentTag=function(){var t=this.params().tags;if(t)return app.store.getBy("tags","slug",t)},Object(P.override)(u.a.prototype,"hero",(function(t){var e=this.currentTag();return e?B.component({tag:e}):t()})),Object(P.extend)(u.a.prototype,"view",(function(t){var e=this.currentTag();e&&(t.attrs.className+=" IndexPage--tag"+e.id())})),Object(P.extend)(u.a.prototype,"config",(function(){var t=this.currentTag();t&&app.setTitle(t.name())})),Object(P.extend)(u.a.prototype,"sidebarItems",(function(t){var e=this.currentTag();if(e){var n=e.color(),a=e.canStartDiscussion();n&&(t.get("newDiscussion").props.style={backgroundColor:n}),t.get("newDiscussion").props.disabled=!a,t.get("newDiscussion").props.children=app.translator.trans(a?"core.forum.index.start_discussion_button":"core.forum.index.cannot_start_discussion_button")}})),Object(P.extend)(u.a.prototype,"params",(function(t){t.tags=m.route.param("tags")})),Object(P.extend)(M.a.prototype,"requestParams",(function(t){t.include.push("tags"),this.props.params.tags&&(t.filter.q=(t.filter.q||"")+" tag:"+this.props.params.tags)}))},E=n(34),q=n.n(E),K=n(23),F=n.n(K),U=n(25),z=n.n(U),G=function(){Object(P.extend)(q.a.prototype,"infoItems",(function(t){var e=this.props.discussion.tags();e&&e.length&&t.add("tags",Object(_.a)(e),10)})),Object(P.extend)(F.a.prototype,"params",(function(t){t.include.push("tags")})),Object(P.extend)(z.a.prototype,"view",(function(t){var e=Object(x.a)(this.props.discussion.tags());if(e&&e.length){var n=e[0].color();n&&(t.attrs.style={backgroundColor:n},t.attrs.className+=" DiscussionHero--colored")}})),Object(P.extend)(z.a.prototype,"items",(function(t){var e=this.props.discussion.tags();e&&e.length&&t.add("tags",Object(_.a)(e,{link:!0}),5)}))},J=n(35),Q=n.n(J),V=n(8),W=n.n(V),X=n(19),Y=n.n(X),Z=n(36),tt=n.n(Z),et=n(12),nt=n.n(et),at=n(37),st=n.n(at),ot=n(38),rt=n.n(ot),it=function(t){function e(){return t.apply(this,arguments)||this}Object(p.a)(e,t);var n=e.prototype;return n.init=function(){var e=this;t.prototype.init.call(this),this.tags=app.store.all("tags"),this.props.discussion?this.tags=this.tags.filter((function(t){return t.canAddToDiscussion()||-1!==e.props.discussion.tags().indexOf(t)})):this.tags=this.tags.filter((function(t){return t.canStartDiscussion()})),this.tags=Object(x.a)(this.tags),this.selected=[],this.filter=m.prop(""),this.index=this.tags[0].id(),this.focused=!1,this.props.selectedTags?this.props.selectedTags.map(this.addTag.bind(this)):this.props.discussion&&this.props.discussion.tags().map(this.addTag.bind(this)),this.minPrimary=app.forum.attribute("minPrimaryTags"),this.maxPrimary=app.forum.attribute("maxPrimaryTags"),this.minSecondary=app.forum.attribute("minSecondaryTags"),this.maxSecondary=app.forum.attribute("maxSecondaryTags"),this.navigator=new rt.a,this.navigator.onUp((function(){return e.setIndex(e.getCurrentNumericIndex()-1,!0)})).onDown((function(){return e.setIndex(e.getCurrentNumericIndex()+1,!0)})).onSelect(this.select.bind(this)).onRemove((function(){return e.selected.splice(e.selected.length-1,1)}))},n.primaryCount=function(){return this.selected.filter((function(t){return t.isPrimary()})).length},n.secondaryCount=function(){return this.selected.filter((function(t){return!t.isPrimary()})).length},n.addTag=function(t){if(t.canStartDiscussion()){var e=t.parent();if(e)-1===this.selected.indexOf(e)&&this.selected.push(e);this.selected.push(t)}},n.removeTag=function(t){var e=this.selected.indexOf(t);-1!==e&&(this.selected.splice(e,1),this.selected.filter((function(e){return e.parent()===t})).forEach(this.removeTag.bind(this)))},n.className=function(){return"TagDiscussionModal"},n.title=function(){return this.props.discussion?app.translator.trans("flarum-tags.forum.choose_tags.edit_title",{title:m("em",null,this.props.discussion.title())}):app.translator.trans("flarum-tags.forum.choose_tags.title")},n.getInstruction=function(t,e){if(t<this.minPrimary){var n=this.minPrimary-t;return app.translator.transChoice("flarum-tags.forum.choose_tags.choose_primary_placeholder",n,{count:n})}if(e<this.minSecondary){var a=this.minSecondary-e;return app.translator.transChoice("flarum-tags.forum.choose_tags.choose_secondary_placeholder",a,{count:a})}return""},n.content=function(){var t=this,e=this.tags,n=this.filter().toLowerCase(),a=this.primaryCount(),s=this.secondaryCount();return e=e.filter((function(e){var n=e.parent();return!1===n||-1!==t.selected.indexOf(n)})),a>=this.maxPrimary&&(e=e.filter((function(e){return!e.isPrimary()||-1!==t.selected.indexOf(e)}))),s>=this.maxSecondary&&(e=e.filter((function(e){return e.isPrimary()||-1!==t.selected.indexOf(e)}))),n&&(e=e.filter((function(t){return t.name().substr(0,n.length).toLowerCase()===n}))),-1===e.indexOf(this.index)&&(this.index=e[0]),[m("div",{className:"Modal-body"},m("div",{className:"TagDiscussionModal-form"},m("div",{className:"TagDiscussionModal-form-input"},m("div",{className:"TagsInput FormControl "+(this.focused?"focus":"")},m("span",{className:"TagsInput-selected"},this.selected.map((function(e){return m("span",{className:"TagsInput-tag",onclick:function(){t.removeTag(e),t.onready()}},Object(y.a)(e))}))),m("input",{className:"FormControl",placeholder:st()(this.getInstruction(a,s)),value:this.filter(),oninput:m.withAttr("value",this.filter),onkeydown:this.navigator.navigate.bind(this.navigator),onfocus:function(){return t.focused=!0},onblur:function(){return t.focused=!1}}))),m("div",{className:"TagDiscussionModal-form-submit App-primaryControl"},W.a.component({type:"submit",className:"Button Button--primary",disabled:a<this.minPrimary||s<this.minSecondary,icon:"fas fa-check",children:app.translator.trans("flarum-tags.forum.choose_tags.submit_button")})))),m("div",{className:"Modal-footer"},m("ul",{className:"TagDiscussionModal-list SelectTagList"},e.filter((function(e){return n||!e.parent()||-1!==t.selected.indexOf(e.parent())})).map((function(e){return m("li",{"data-index":e.id(),className:nt()({pinned:null!==e.position(),child:!!e.parent(),colored:!!e.color(),selected:-1!==t.selected.indexOf(e),active:t.index===e}),style:{color:e.color()},onmouseover:function(){return t.index=e},onclick:t.toggleTag.bind(t,e)},Object(w.a)(e),m("span",{className:"SelectTagListItem-name"},tt()(e.name(),n)),e.description()?m("span",{className:"SelectTagListItem-description"},e.description()):"")}))))]},n.toggleTag=function(t){-1!==this.selected.indexOf(t)?this.removeTag(t):this.addTag(t),this.filter()&&(this.filter(""),this.index=this.tags[0]),this.onready()},n.select=function(t){t.metaKey||t.ctrlKey||-1!==this.selected.indexOf(this.index)?this.selected.length&&this.$("form").submit():this.getItem(this.index)[0].dispatchEvent(new Event("click"))},n.selectableItems=function(){return this.$(".TagDiscussionModal-list > li")},n.getCurrentNumericIndex=function(){return this.selectableItems().index(this.getItem(this.index))},n.getItem=function(t){return this.selectableItems().filter('[data-index="'+t.id()+'"]')},n.setIndex=function(t,e){var n=this.selectableItems(),a=n.parent();t<0?t=n.length-1:t>=n.length&&(t=0);var s=n.eq(t);if(this.index=app.store.getById("tags",s.attr("data-index")),m.redraw(),e){var o,r=a.scrollTop(),i=a.offset().top,c=i+a.outerHeight(),u=s.offset().top,l=u+s.outerHeight();u<i?o=r-i+u-parseInt(a.css("padding-top"),10):l>c&&(o=r-c+l+parseInt(a.css("padding-bottom"),10)),void 0!==o&&a.stop(!0).animate({scrollTop:o},100)}},n.onsubmit=function(t){t.preventDefault();var e=this.props.discussion,n=this.selected;e&&e.save({relationships:{tags:n}}).then((function(){app.current instanceof F.a&&app.current.stream.update(),m.redraw()})),this.props.onsubmit&&this.props.onsubmit(n),app.modal.close(),m.redraw.strategy("none")},e}(Y.a),ct=function(){Object(P.extend)(Q.a,"moderationControls",(function(t,e){e.canTag()&&t.add("tags",W.a.component({children:app.translator.trans("flarum-tags.forum.discussion_controls.edit_tags_button"),icon:"fas fa-tag",onclick:function(){return app.modal.show(new it({discussion:e}))}}))}))},ut=n(14),lt=n.n(ut),pt=function(){Object(P.extend)(u.a.prototype,"newDiscussionAction",(function(t){var e=app.store.getBy("tags","slug",this.params().tags);if(e){var n=e.parent(),a=n?[n,e]:[e];t.then((function(t){return t.tags=a}))}})),lt.a.prototype.tags=[],lt.a.prototype.chooseTags=function(){var t=this;app.modal.show(new it({selectedTags:this.tags.slice(0),onsubmit:function(e){t.tags=e,t.$("textarea").focus()}}))},Object(P.extend)(lt.a.prototype,"headerItems",(function(t){t.add("tags",m("a",{className:"DiscussionComposer-changeTags",onclick:this.chooseTags.bind(this)},this.tags.length?Object(_.a)(this.tags):m("span",{className:"TagLabel untagged"},app.translator.trans("flarum-tags.forum.composer_discussion.choose_tags_link"))),10)})),Object(P.override)(lt.a.prototype,"onsubmit",(function(t){var e=this,n=this.tags,a=n.filter((function(t){return null!==t.position()&&!t.isChild()})),s=n.filter((function(t){return null===t.position()}));!n.length||a.length<app.forum.attribute("minPrimaryTags")||s.length<app.forum.attribute("minSecondaryTags")?app.modal.show(new it({selectedTags:n,onsubmit:function(n){e.tags=n,t()}})):t()})),Object(P.extend)(lt.a.prototype,"data",(function(t){t.relationships=t.relationships||{},t.relationships.tags=this.tags}))},dt=n(20),mt=Object(a.a)(dt.a,{"tags/addTagFilter":R,"tags/addTagControl":ct,"tags/components/TagHero":B,"tags/components/TagDiscussionModal":it,"tags/components/TagsPage":T,"tags/components/DiscussionTaggedPost":j,"tags/components/TagLinkButton":S,"tags/addTagList":A,"tags/addTagLabels":G,"tags/addTagComposer":pt}),ft=n(21);app.initializers.add("flarum-tags",(function(t){t.routes.tags={path:"/tags",component:T.component()},t.routes.tag={path:"/t/:tags",component:u.a.component()},t.route.tag=function(e){return t.route("tag",{tags:e.slug()})},t.postComponents.discussionTagged=j,t.store.models.tags=l.a,i.a.prototype.tags=o.a.hasMany("tags"),i.a.prototype.canTag=o.a.attribute("canTag"),A(),R(),G(),ct(),pt()})),Object(a.a)(ft.compat,mt)},,function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,e){t.exports=flarum.core.compat["components/EventPost"]},function(t,e){t.exports=flarum.core.compat["components/Separator"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.core.compat["utils/KeyboardNavigatable"]},,,,,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(15);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n(26)}]);
;

flarum.extensions['flarum-tags']=module.exports;

var module={};

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/LogInModal */ "flarum/components/LogInModal");
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/SignUpModal */ "flarum/components/SignUpModal");
/* harmony import */ var flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__);





function showPassword() {
  var x = document.getElementsByName("password")[0];
  var y = document.getElementById("therealsujitk-show-password");

  if (typeof x == "undefined" || typeof y == "undefined") {
    if (typeof y != "undefined") {
      var z = y.parentElement;

      if (z.tagName.toLowerCase() == "label") {
        z.style.display = "none";
      }
    }

    return;
  }

  if (y.checked == true) {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('therealsujitk/flarum-ext-show-password', function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'fields', function (fields) {
    fields.add('therealsujitk-show-password', m('label.checkbox', [m('input', {
      type: 'checkbox',
      id: 'therealsujitk-show-password',
      config: function config() {
        showPassword();
      },
      onclick: function onclick() {
        showPassword();
      }
    }), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('therealsujitk.forum.show_password_label')]), 20);
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'fields', function (fields) {
    fields.add('therealsujitk-show-password', m('label.checkbox[style = padding-bottom: 7px]', [m('input', {
      type: 'checkbox',
      id: 'therealsujitk-show-password',
      config: function config() {
        showPassword();
      },
      onclick: function onclick() {
        showPassword();
      }
    }), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('therealsujitk.forum.show_password_label')]), 10);
  });
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/LogInModal":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LogInModal']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LogInModal'];

/***/ }),

/***/ "flarum/components/SignUpModal":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/SignUpModal']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SignUpModal'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ })

/******/ });
;

flarum.extensions['therealsujitk-show-password']=module.exports;

var module={};

module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=13)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.extend},,,function(e,t){e.exports=flarum.core.compat["components/CommentPost"]},,,,,,,function(e,t){e.exports=flarum.core.compat["utils/PostControls"]},,function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(0),u=r.n(o),f=(r(11),r(4)),a=r.n(f);u.a.initializers.add("fof-filter",(function(){Object(n.override)(a.a.prototype,"flagReason",(function(e,t){return t.type()===u.a.translator.trans("fof-filter.forum.flagger_name")[0]?u.a.translator.trans("fof-filter.forum.flagger_name"):e(t)}))}),-20)}]);
;

flarum.extensions['fof-filter']=module.exports;

var module={};

module.exports=function(t){var o={};function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)e.d(n,r,function(o){return t[o]}.bind(null,r));return n},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=17)}([function(t,o){t.exports=flarum.core.compat.extend},,function(t,o,e){"use strict";function n(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o}e.d(o,"a",function(){return n})},function(t,o){t.exports=flarum.core.compat.Component},,,function(t,o){t.exports=flarum.core.compat["components/TextEditor"]},,function(t,o){t.exports=flarum.core.compat["helpers/icon"]},function(t,o){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,o){t.exports=flarum.core.compat["components/Post"]},,,,,,,function(t,o,e){"use strict";e.r(o);var n=e(0),r=e(6),i=e.n(r),a=e(2),s=e(3),u=e.n(s),p=e(8),l=e.n(p),c=e(9),f=e.n(c),d=function(t){function o(){return t.apply(this,arguments)||this}Object(a.a)(o,t);var e=o.prototype;return e.init=function(){this.textAreaObj=null,this.loading=!1},e.view=function(){return m("div",{className:"Button hasIcon flagrow-upload-button Button--icon"},[this.loading?f.a.component({className:"Button-icon"}):l()("far fa-file",{className:"Button-icon"}),m("span",{className:"Button-label"},this.loading?app.translator.trans("flagrow-upload.forum.states.loading"):app.translator.trans("flagrow-upload.forum.buttons.attach")),m("form#flagrow-upload-form",[m("input",{type:"file",multiple:!0,onchange:this.process.bind(this)})])])},e.process=function(t){var o=$(t.target)[0].files;this.loading=!0,m.redraw(),this.uploadFiles(o,this.success,this.failure)},e.uploadFiles=function(t,o,e){for(var n=new FormData,r=0;r<t.length;r++)n.append("files[]",t[r]);return app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/flagrow/upload",serialize:function(t){return t},data:n}).then(this.success.bind(this),this.failure.bind(this))},e.failure=function(t){},e.success=function(t){var o=this;t.forEach(function(t){o.textAreaObj.insertAtCursor(t+"\n")}),void 0!==this.textAreaObj.props.preview&&this.textAreaObj.props.preview(),setTimeout(function(){document.getElementById("flagrow-upload-form").reset(),o.loading=!1},1e3)},o}(u.a),h=function(){function t(t){this.initialized||(this.uploadButton=t,this.textarea=$("#composer .Composer"),$(this.textarea).on("dragover",this.in.bind(this)),$(this.textarea).on("dragleave",this.out.bind(this)),$(this.textarea).on("dragend",this.out.bind(this)),$(this.textarea).on("drop",this.dropping.bind(this)),this.isDropping=this.over=!1,this.initialized=!0)}var o=t.prototype;return o.in=function(t){t.preventDefault(),this.over||(this.textarea.toggleClass("flagrow-upload-dragging",!0),this.over=!0)},o.out=function(t){t.preventDefault(),this.over&&(this.textarea.toggleClass("flagrow-upload-dragging",!1),this.over=!1)},o.dropping=function(t){var o=this;t.preventDefault(),this.isDropping||(this.isDropping=!0,this.textarea.addClass("flagrow-dropping"),m.redraw(),this.uploadButton.uploadFiles(t.originalEvent.dataTransfer.files).then(function(){o.textarea.removeClass("flagrow-dropping"),o.isDropping=!1}))},t}(),g=function(){function t(t){this.initialized||(this.uploadButton=t,document.addEventListener("paste",this.paste.bind(this)))}return t.prototype.paste=function(t){if(t.clipboardData&&t.clipboardData.items){for(var o=t.clipboardData.items,e=[],n=0;n<o.length;n++)-1!==o[n].type.indexOf("image")&&e.push(o[n].getAsFile());e.length>0&&(m.redraw(),this.uploadButton.uploadFiles(e))}},t}(),b=e(10),v=e.n(b),x=function(){Object(n.extend)(v.a.prototype,"config",function(t){var o=this;t||this.$(".flagrow-download-button[data-uuid]").unbind("click").on("click",function(t){t.preventDefault(),t.stopPropagation();var e=app.forum.attribute("apiUrl")+"/flagrow/download";e+="/"+$(t.currentTarget).attr("data-uuid"),e+="/"+o.props.post.id(),e+="/"+app.session.csrfToken,window.open(e)})})};app.initializers.add("flagrow-upload",function(t){var o,e,r;Object(n.extend)(i.a.prototype,"controlItems",function(e){t.forum.attribute("canUpload")&&((o=new d).textAreaObj=this,e.add("flagrow-upload",o,0),$(".Button-label",".item-flagrow-upload > div").hide(),$(".item-flagrow-upload > div").hover(function(){$(".Button-label",this).show(),$(this).removeClass("Button--icon")},function(){$(".Button-label",this).hide(),$(this).addClass("Button--icon")}))}),Object(n.extend)(i.a.prototype,"configTextarea",function(){t.forum.attribute("canUpload")&&(e||(e=new h(o)),r||(r=new g(o)))}),x()})}]);
;

flarum.extensions['flagrow-upload']=module.exports;

var module={};

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/components/SearchGIFModal.js":
/*!************************************************!*\
  !*** ./src/forum/components/SearchGIFModal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchGIFModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);


var giphyLimit = '40';
var query = '';
var lastResult = 0;

function getGiphyURL(textarea, giphyAPI) {
  var url;
  if (query === '') url = 'https://api.giphy.com/v1/gifs/trending?api_key=' + giphyAPI + '&limit=' + giphyLimit + '&offset=' + lastResult.toString(10);else url = 'https://api.giphy.com/v1/gifs/search?api_key=' + giphyAPI + '&q=' + query + '&limit=' + giphyLimit + '&offset=' + lastResult.toString(10);
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (content) {
    var resultsLeft = document.getElementById('LeftResults');
    var resultsRight = document.getElementById('RightResults');
    var flag = 0;

    var _loop = function _loop() {
      var imgL = document.createElement('img');
      var imgR = document.createElement('img');
      document.getElementsByClassName('temp-text')[0].textContent = '';
      document.getElementById('LoadMore').style.visibility = 'hidden';
      document.getElementById('LoadMoreSpan').textContent = app.translator.trans('therealsujitk.forum.gifs.loadmore');

      if (typeof content.data[0] === 'undefined') {
        document.getElementsByClassName('temp-text')[0].textContent = app.translator.trans('therealsujitk.forum.gifs.noresults');
        ++flag;
        return "break";
      }

      if (typeof content.data[i] === 'undefined') {
        ++flag;
        return "break";
      }

      imgL.src = content.data[i].images.downsized.url;
      imgL.alt = content.data[i].title;
      imgL.style = 'min-width: 97.5%; width: 97.5%; border-radius: 5px; margin: 1.25%; margin-left: 0%; margin-right: 0.3125%; vertical-align: top; cursor: pointer;';
      resultsLeft.insertAdjacentElement("beforeend", imgL);

      imgL.onclick = function () {
        var embed = '![Giphy - ' + imgL.alt + ']' + '(' + imgL.src + ')';
        app.modal.close();
        textarea.insertAtCursor(embed);
      };

      if (typeof content.data[i + 1] === 'undefined') {
        ++flag;
        return "break";
      }

      imgR.src = content.data[i + 1].images.downsized.url;
      imgR.alt = content.data[i + 1].title;
      imgR.style = 'min-width: 97.5%; width: 97.5%; border-radius: 5px; margin: 1.25%; margin-left: 0.3125%; margin-right: 0%; vertical-align: top; cursor: pointer;';
      resultsRight.insertAdjacentElement("beforeend", imgR);

      imgR.onclick = function () {
        var embed = '![Giphy - ' + imgR.alt + ']' + '(' + imgR.src + ')';
        app.modal.close();
        textarea.insertAtCursor(embed);
      };
    };

    for (var i = 0; i < parseInt(giphyLimit); i += 2) {
      var _ret = _loop();

      if (_ret === "break") break;
    }

    if (flag === 0) {
      document.getElementById('LoadMore').style.visibility = 'visible';
    }
  });
}

var SearchGIFModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SearchGIFModal, _Modal);

  function SearchGIFModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = SearchGIFModal.prototype;

  _proto.className = function className() {
    return '';
  };

  _proto.title = function title() {
    return app.translator.trans('therealsujitk.forum.gifs.title');
  };

  _proto.content = function content() {
    var _this = this;

    return m('.Modal-body', {
      config: function config(content, isInitialized) {
        if (!isInitialized) {
          document.getElementsByClassName('temp-text')[0].textContent = app.translator.trans('therealsujitk.forum.gifs.loading');
          var textarea = _this.props.textArea;
          var giphyAPI = app.forum.attribute('therealsujitk-gifs.giphy_api_key');
          query = document.getElementById('GIFSearchBar').value.trim();
          getGiphyURL(textarea, giphyAPI);
        }
      }
    }, m('span[style = position: absolute; left: 50%; top: 200px; transform: translate(-50%, -50%);]', {
      id: 'flarum-loading',
      "class": 'temp-text'
    }), m('div', [m('table[style = vertical-align: top; width: 100%;]', [m('td', [m('form[style = margin-right: 1.25%;]', {
      "class": 'Search-input',
      onsubmit: function onsubmit() {
        return false;
      },
      onkeyup: function onkeyup() {
        if (event.keyCode === 13) {
          lastResult = 0;
          document.getElementById('LeftResults').innerHTML = '';
          document.getElementById('RightResults').innerHTML = '';
          document.getElementById('LeftResults').scrollTop = 0;
          document.getElementsByClassName('temp-text')[0].textContent = app.translator.trans('therealsujitk.forum.gifs.loading');
          document.getElementById('LoadMore').style.visibility = 'hidden';
          var textarea = _this.props.textArea;
          var giphyAPI = app.forum.attribute('therealsujitk-gifs.giphy_api_key');
          query = document.getElementById('GIFSearchBar').value.trim();
          getGiphyURL(textarea, giphyAPI);
        }
      }
    }, [m('input[style = width: 100%;]', {
      id: 'GIFSearchBar',
      "class": 'FormControl',
      type: 'search',
      autocomplete: 'off',
      placeholder: app.translator.trans('therealsujitk.forum.gifs.searchbar')
    })])]), m('td', [m('button[style = margin-left: 1.25%; width: 100%;]', {
      "class": 'Button Button--primary hasIcon',
      itemclassname: 'App-primaryControl',
      type: 'button',
      title: app.translator.trans('therealsujitk.forum.gifs.search'),
      onclick: function onclick() {
        lastResult = 0;
        document.getElementById('LeftResults').innerHTML = '';
        document.getElementById('RightResults').innerHTML = '';
        document.getElementById('LeftResults').scrollTop = 0;
        document.getElementsByClassName('temp-text')[0].textContent = app.translator.trans('therealsujitk.forum.gifs.loading');
        document.getElementById('LoadMore').style.visibility = 'hidden';
        var textarea = _this.props.textArea;
        var giphyAPI = app.forum.attribute('therealsujitk-gifs.giphy_api_key');
        query = document.getElementById('GIFSearchBar').value.trim();
        getGiphyURL(textarea, giphyAPI);
      }
    }, [m('span', {
      "class": 'Button-label'
    }, app.translator.trans('therealsujitk.forum.gifs.search'))])])])]), m('div[style = margin-top: 10px; margin-bottom: 10px; min-height: 45vh; height: 45vh; overflow: auto;]', [m('table', {
      width: '100%'
    }, [m('td', {
      id: 'LeftResults',
      width: '50%'
    }), m('td', {
      id: 'RightResults',
      width: '50%'
    })]), m('button[style = position: relative; left: 50%; transform: translate(-50%, 0%); margin-top: 10px; visibility: hidden;]', {
      id: 'LoadMore',
      "class": 'Button',
      type: 'button',
      title: app.translator.trans('therealsujitk.forum.gifs.loadmore'),
      onclick: function onclick() {
        lastResult += parseInt(giphyLimit);
        document.getElementById('LoadMoreSpan').textContent = app.translator.trans('therealsujitk.forum.gifs.loading');
        var textarea = _this.props.textArea;
        var giphyAPI = app.forum.attribute('therealsujitk-gifs.giphy_api_key');
        getGiphyURL(textarea, giphyAPI);
      }
    }, [m('span', {
      id: 'LoadMoreSpan',
      "class": 'Button-label'
    }, app.translator.trans('therealsujitk.forum.gifs.loadmore'))])]), m('div[style = padding-top: 10px; padding-bottom: 30px;]', [m('img[style = float: right;]', {
      src: app.forum.attribute('baseUrl') + '/assets/extensions/therealsujitk-gifs/powered_by_giphy.svg'
    })]));
  };

  return SearchGIFModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/TextEditor */ "flarum/components/TextEditor");
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SearchGIFModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SearchGIFModal */ "./src/forum/components/SearchGIFModal.js");





flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('therealsujitk/flarum-ext-gifs', function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'toolbarItems', function (items) {
    var _this = this;

    items.add('therealsujitk-gifs', m('button', {
      type: 'buton',
      "class": 'Button Button--icon Button--link hasIcon',
      title: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('therealsujitk.forum.gifs.title'),
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _components_SearchGIFModal__WEBPACK_IMPORTED_MODULE_4__["default"]({
          textArea: _this
        }));
      }
    }, [m('svg', {
      "class": 'fas fa-this-icon-does-not-exist',
      xmlns: 'http://www.w3.org/2000/svg',
      xlink: 'http://www.w3.org/1999/xlink',
      width: '16pt',
      height: '7pt',
      viewBox: '0 0 16 7',
      version: '1.1'
    }, [m('g', {
      id: 'surface1'
    }, [m('path[fill = currentColor]', {
      d: 'M 0.78125 7.042969 C 0.496094 6.933594 0.265625 6.738281 0.132812 6.480469 L 0 6.234375 L 0 0.875 L 0.132812 0.625 C 0.277344 0.355469 0.558594 0.128906 0.847656 0.0429688 C 0.957031 0.015625 1.71875 0 2.917969 0.0078125 L 4.808594 0.0234375 L 5.050781 0.15625 C 5.21875 0.246094 5.332031 0.355469 5.425781 0.511719 C 5.597656 0.800781 5.648438 0.992188 5.648438 1.410156 L 5.648438 1.753906 L 1.65625 1.753906 L 1.65625 5.355469 L 3.96875 5.355469 L 3.96875 3.554688 L 5.648438 3.554688 L 5.648438 4.800781 C 5.648438 5.484375 5.628906 6.117188 5.605469 6.207031 C 5.523438 6.527344 5.308594 6.808594 5.050781 6.953125 L 4.808594 7.085938 L 2.878906 7.09375 C 1.339844 7.105469 0.917969 7.09375 0.78125 7.042969 Z M 0.78125 7.042969 '
    }), m('path[fill = currentColor]', {
      d: 'M 7.371094 3.554688 L 7.371094 0 L 9.050781 0 L 9.050781 7.109375 L 7.371094 7.109375 Z M 7.371094 3.554688 '
    }), m('path[fill = currentColor]', {
      d: 'M 10.773438 3.554688 L 10.773438 0 L 15.855469 0 L 15.855469 1.753906 L 12.453125 1.753906 L 12.453125 2.988281 L 14.722656 2.988281 L 14.722656 4.742188 L 12.453125 4.742188 L 12.453125 7.109375 L 10.773438 7.109375 Z M 10.773438 3.554688 '
    })])]), m('span', {
      "class": 'Button-label'
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('therealsujitk.forum.gifs.label'))]), 10);
  });
});

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/TextEditor":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditor']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/TextEditor'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ })

/******/ });
;

flarum.extensions['therealsujitk-gifs']=module.exports;

var module={};

module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}([function(e,t){e.exports=flarum.core.compat.Model},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/Button"]},function(e,t){e.exports=flarum.core.compat["utils/mixin"]},function(e,t){e.exports=flarum.core.compat["components/CommentPost"]},function(e,t){e.exports=flarum.core.compat["components/Modal"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionComposer"]},,function(e,t){e.exports=flarum.core.compat["components/Badge"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionList"]},function(e,t){e.exports=flarum.core.compat["models/Discussion"]},function(e,t){e.exports=flarum.core.compat["components/Switch"]},function(e,t,n){
/* flatpickr v4.6.3, @license MIT */
e.exports=function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */var e=function(){return(e=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},t=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],n={_disable:[],_enable:[],allowInput:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:"object"==typeof window&&-1===window.navigator.userAgent.indexOf("MSIE"),ariaDateFormat:"F j, Y",clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enable:[],enableSeconds:!1,enableTime:!1,errorHandler:function(e){return"undefined"!=typeof console&&console.warn(e)},getWeek:function(e){var t=new Date(e.getTime());t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);var n=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-n.getTime())/864e5-3+(n.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},o={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(e){var t=e%100;if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},a=function(e){return("0"+e).slice(-2)},i=function(e){return!0===e?1:0};function r(e,t,n){var o;return void 0===n&&(n=!1),function(){var a=this,i=arguments;null!==o&&clearTimeout(o),o=window.setTimeout((function(){o=null,n||e.apply(a,i)}),t),n&&!o&&e.apply(a,i)}}var l=function(e){return e instanceof Array?e:[e]};function s(e,t,n){if(!0===n)return e.classList.add(t);e.classList.remove(t)}function c(e,t,n){var o=window.document.createElement(e);return t=t||"",n=n||"",o.className=t,void 0!==n&&(o.textContent=n),o}function u(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function d(e,t){var n=c("div","numInputWrapper"),o=c("input","numInput "+e),a=c("span","arrowUp"),i=c("span","arrowDown");if(-1===navigator.userAgent.indexOf("MSIE 9.0")?o.type="number":(o.type="text",o.pattern="\\d*"),void 0!==t)for(var r in t)o.setAttribute(r,t[r]);return n.appendChild(o),n.appendChild(a),n.appendChild(i),n}var p=function(){},f=function(e,t,n){return n.months[t?"shorthand":"longhand"][e]},m={D:p,F:function(e,t,n){e.setMonth(n.months.longhand.indexOf(t))},G:function(e,t){e.setHours(parseFloat(t))},H:function(e,t){e.setHours(parseFloat(t))},J:function(e,t){e.setDate(parseFloat(t))},K:function(e,t,n){e.setHours(e.getHours()%12+12*i(new RegExp(n.amPM[1],"i").test(t)))},M:function(e,t,n){e.setMonth(n.months.shorthand.indexOf(t))},S:function(e,t){e.setSeconds(parseFloat(t))},U:function(e,t){return new Date(1e3*parseFloat(t))},W:function(e,t,n){var o=parseInt(t),a=new Date(e.getFullYear(),0,2+7*(o-1),0,0,0,0);return a.setDate(a.getDate()-a.getDay()+n.firstDayOfWeek),a},Y:function(e,t){e.setFullYear(parseFloat(t))},Z:function(e,t){return new Date(t)},d:function(e,t){e.setDate(parseFloat(t))},h:function(e,t){e.setHours(parseFloat(t))},i:function(e,t){e.setMinutes(parseFloat(t))},j:function(e,t){e.setDate(parseFloat(t))},l:p,m:function(e,t){e.setMonth(parseFloat(t)-1)},n:function(e,t){e.setMonth(parseFloat(t)-1)},s:function(e,t){e.setSeconds(parseFloat(t))},u:function(e,t){return new Date(parseFloat(t))},w:p,y:function(e,t){e.setFullYear(2e3+parseFloat(t))}},h={D:"(\\w+)",F:"(\\w+)",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"(\\w+)",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"(\\w+)",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},g={Z:function(e){return e.toISOString()},D:function(e,t,n){return t.weekdays.shorthand[g.w(e,t,n)]},F:function(e,t,n){return f(g.n(e,t,n)-1,!1,t)},G:function(e,t,n){return a(g.h(e,t,n))},H:function(e){return a(e.getHours())},J:function(e,t){return void 0!==t.ordinal?e.getDate()+t.ordinal(e.getDate()):e.getDate()},K:function(e,t){return t.amPM[i(e.getHours()>11)]},M:function(e,t){return f(e.getMonth(),!0,t)},S:function(e){return a(e.getSeconds())},U:function(e){return e.getTime()/1e3},W:function(e,t,n){return n.getWeek(e)},Y:function(e){return e.getFullYear()},d:function(e){return a(e.getDate())},h:function(e){return e.getHours()%12?e.getHours()%12:12},i:function(e){return a(e.getMinutes())},j:function(e){return e.getDate()},l:function(e,t){return t.weekdays.longhand[e.getDay()]},m:function(e){return a(e.getMonth()+1)},n:function(e){return e.getMonth()+1},s:function(e){return e.getSeconds()},u:function(e){return e.getTime()},w:function(e){return e.getDay()},y:function(e){return String(e.getFullYear()).substring(2)}},v=function(e){var t=e.config,a=void 0===t?n:t,i=e.l10n,r=void 0===i?o:i;return function(e,t,n){var o=n||r;return void 0!==a.formatDate?a.formatDate(e,t,o):t.split("").map((function(t,n,i){return g[t]&&"\\"!==i[n-1]?g[t](e,o,a):"\\"!==t?t:""})).join("")}},D=function(e){var t=e.config,a=void 0===t?n:t,i=e.l10n,r=void 0===i?o:i;return function(e,t,o,i){if(0===e||e){var l,s=i||r,c=e;if(e instanceof Date)l=new Date(e.getTime());else if("string"!=typeof e&&void 0!==e.toFixed)l=new Date(e);else if("string"==typeof e){var u=t||(a||n).dateFormat,d=String(e).trim();if("today"===d)l=new Date,o=!0;else if(/Z$/.test(d)||/GMT$/.test(d))l=new Date(e);else if(a&&a.parseDate)l=a.parseDate(e,u);else{l=a&&a.noCalendar?new Date((new Date).setHours(0,0,0,0)):new Date((new Date).getFullYear(),0,1,0,0,0,0);for(var p=void 0,f=[],g=0,v=0,D="";g<u.length;g++){var b=u[g],y="\\"===b,w="\\"===u[g-1]||y;if(h[b]&&!w){D+=h[b];var M=new RegExp(D).exec(e);M&&(p=!0)&&f["Y"!==b?"push":"unshift"]({fn:m[b],val:M[++v]})}else y||(D+=".");f.forEach((function(e){var t=e.fn,n=e.val;return l=t(l,n,s)||l}))}l=p?l:void 0}}if(l instanceof Date&&!isNaN(l.getTime()))return!0===o&&l.setHours(0,0,0,0),l;a.errorHandler(new Error("Invalid date provided: "+c))}}};function b(e,t,n){return void 0===n&&(n=!0),!1!==n?new Date(e.getTime()).setHours(0,0,0,0)-new Date(t.getTime()).setHours(0,0,0,0):e.getTime()-t.getTime()}var y=864e5;function w(p,m){var g={config:e({},n,C.defaultConfig),l10n:o};function w(e){return e.bind(g)}function M(){var e=g.config;!1===e.weekNumbers&&1===e.showMonths||!0!==e.noCalendar&&window.requestAnimationFrame((function(){if(void 0!==g.calendarContainer&&(g.calendarContainer.style.visibility="hidden",g.calendarContainer.style.display="block"),void 0!==g.daysContainer){var t=(g.days.offsetWidth+1)*e.showMonths;g.daysContainer.style.width=t+"px",g.calendarContainer.style.width=t+(void 0!==g.weekWrapper?g.weekWrapper.offsetWidth:0)+"px",g.calendarContainer.style.removeProperty("visibility"),g.calendarContainer.style.removeProperty("display")}}))}function x(e){0===g.selectedDates.length&&ne(),void 0!==e&&"blur"!==e.type&&function(e){e.preventDefault();var t="keydown"===e.type,n=e.target;void 0!==g.amPM&&e.target===g.amPM&&(g.amPM.textContent=g.l10n.amPM[i(g.amPM.textContent===g.l10n.amPM[0])]);var o=parseFloat(n.getAttribute("min")),r=parseFloat(n.getAttribute("max")),l=parseFloat(n.getAttribute("step")),s=parseInt(n.value,10),c=e.delta||(t?38===e.which?1:-1:0),u=s+l*c;if(void 0!==n.value&&2===n.value.length){var d=n===g.hourElement,p=n===g.minuteElement;u<o?(u=r+u+i(!d)+(i(d)&&i(!g.amPM)),p&&A(void 0,-1,g.hourElement)):u>r&&(u=n===g.hourElement?u-r-i(!g.amPM):o,p&&A(void 0,1,g.hourElement)),g.amPM&&d&&(1===l?u+s===23:Math.abs(u-s)>l)&&(g.amPM.textContent=g.l10n.amPM[i(g.amPM.textContent===g.l10n.amPM[0])]),n.value=a(u)}}(e);var t=g._input.value;E(),ve(),g._input.value!==t&&g._debouncedChange()}function E(){if(void 0!==g.hourElement&&void 0!==g.minuteElement){var e,t,n=(parseInt(g.hourElement.value.slice(-2),10)||0)%24,o=(parseInt(g.minuteElement.value,10)||0)%60,a=void 0!==g.secondElement?(parseInt(g.secondElement.value,10)||0)%60:0;void 0!==g.amPM&&(e=n,t=g.amPM.textContent,n=e%12+12*i(t===g.l10n.amPM[1]));var r=void 0!==g.config.minTime||g.config.minDate&&g.minDateHasTime&&g.latestSelectedDateObj&&0===b(g.latestSelectedDateObj,g.config.minDate,!0);if(void 0!==g.config.maxTime||g.config.maxDate&&g.maxDateHasTime&&g.latestSelectedDateObj&&0===b(g.latestSelectedDateObj,g.config.maxDate,!0)){var l=void 0!==g.config.maxTime?g.config.maxTime:g.config.maxDate;(n=Math.min(n,l.getHours()))===l.getHours()&&(o=Math.min(o,l.getMinutes())),o===l.getMinutes()&&(a=Math.min(a,l.getSeconds()))}if(r){var s=void 0!==g.config.minTime?g.config.minTime:g.config.minDate;(n=Math.max(n,s.getHours()))===s.getHours()&&(o=Math.max(o,s.getMinutes())),o===s.getMinutes()&&(a=Math.max(a,s.getSeconds()))}k(n,o,a)}}function P(e){var t=e||g.latestSelectedDateObj;t&&k(t.getHours(),t.getMinutes(),t.getSeconds())}function T(){var e=g.config.defaultHour,t=g.config.defaultMinute,n=g.config.defaultSeconds;if(void 0!==g.config.minDate){var o=g.config.minDate.getHours(),a=g.config.minDate.getMinutes();(e=Math.max(e,o))===o&&(t=Math.max(a,t)),e===o&&t===a&&(n=g.config.minDate.getSeconds())}if(void 0!==g.config.maxDate){var i=g.config.maxDate.getHours(),r=g.config.maxDate.getMinutes();(e=Math.min(e,i))===i&&(t=Math.min(r,t)),e===i&&t===r&&(n=g.config.maxDate.getSeconds())}k(e,t,n)}function k(e,t,n){void 0!==g.latestSelectedDateObj&&g.latestSelectedDateObj.setHours(e%24,t,n||0,0),g.hourElement&&g.minuteElement&&!g.isMobile&&(g.hourElement.value=a(g.config.time_24hr?e:(12+e)%12+12*i(e%12==0)),g.minuteElement.value=a(t),void 0!==g.amPM&&(g.amPM.textContent=g.l10n.amPM[i(e>=12)]),void 0!==g.secondElement&&(g.secondElement.value=a(n)))}function O(e){var t=parseInt(e.target.value)+(e.delta||0);(t/1e3>1||"Enter"===e.key&&!/[^\d]/.test(t.toString()))&&G(t)}function _(e,t,n,o){return t instanceof Array?t.forEach((function(t){return _(e,t,n,o)})):e instanceof Array?e.forEach((function(e){return _(e,t,n,o)})):(e.addEventListener(t,n,o),void g._handlers.push({element:e,event:t,handler:n,options:o}))}function I(e){return function(t){1===t.which&&e(t)}}function N(){pe("onChange")}function S(e,t){var n=void 0!==e?g.parseDate(e):g.latestSelectedDateObj||(g.config.minDate&&g.config.minDate>g.now?g.config.minDate:g.config.maxDate&&g.config.maxDate<g.now?g.config.maxDate:g.now),o=g.currentYear,a=g.currentMonth;try{void 0!==n&&(g.currentYear=n.getFullYear(),g.currentMonth=n.getMonth())}catch(e){e.message="Invalid date supplied: "+n,g.config.errorHandler(e)}t&&g.currentYear!==o&&(pe("onYearChange"),W()),!t||g.currentYear===o&&g.currentMonth===a||pe("onMonthChange"),g.redraw()}function F(e){~e.target.className.indexOf("arrow")&&A(e,e.target.classList.contains("arrowUp")?1:-1)}function A(e,t,n){var o=e&&e.target,a=n||o&&o.parentNode&&o.parentNode.firstChild,i=fe("increment");i.delta=t,a&&a.dispatchEvent(i)}function j(e,t,n,o){var a=Z(t,!0),i=c("span","flatpickr-day "+e,t.getDate().toString());return i.dateObj=t,i.$i=o,i.setAttribute("aria-label",g.formatDate(t,g.config.ariaDateFormat)),-1===e.indexOf("hidden")&&0===b(t,g.now)&&(g.todayDateElem=i,i.classList.add("today"),i.setAttribute("aria-current","date")),a?(i.tabIndex=-1,me(t)&&(i.classList.add("selected"),g.selectedDateElem=i,"range"===g.config.mode&&(s(i,"startRange",g.selectedDates[0]&&0===b(t,g.selectedDates[0],!0)),s(i,"endRange",g.selectedDates[1]&&0===b(t,g.selectedDates[1],!0)),"nextMonthDay"===e&&i.classList.add("inRange")))):i.classList.add("flatpickr-disabled"),"range"===g.config.mode&&function(e){return!("range"!==g.config.mode||g.selectedDates.length<2)&&b(e,g.selectedDates[0])>=0&&b(e,g.selectedDates[1])<=0}(t)&&!me(t)&&i.classList.add("inRange"),g.weekNumbers&&1===g.config.showMonths&&"prevMonthDay"!==e&&n%7==1&&g.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+g.config.getWeek(t)+"</span>"),pe("onDayCreate",i),i}function Y(e){e.focus(),"range"===g.config.mode&&ee(e)}function H(e){for(var t=e>0?0:g.config.showMonths-1,n=e>0?g.config.showMonths:-1,o=t;o!=n;o+=e)for(var a=g.daysContainer.children[o],i=e>0?0:a.children.length-1,r=e>0?a.children.length:-1,l=i;l!=r;l+=e){var s=a.children[l];if(-1===s.className.indexOf("hidden")&&Z(s.dateObj))return s}}function L(e,t){var n=Q(document.activeElement||document.body),o=void 0!==e?e:n?document.activeElement:void 0!==g.selectedDateElem&&Q(g.selectedDateElem)?g.selectedDateElem:void 0!==g.todayDateElem&&Q(g.todayDateElem)?g.todayDateElem:H(t>0?1:-1);return void 0===o?g._input.focus():n?void function(e,t){for(var n=-1===e.className.indexOf("Month")?e.dateObj.getMonth():g.currentMonth,o=t>0?g.config.showMonths:-1,a=t>0?1:-1,i=n-g.currentMonth;i!=o;i+=a)for(var r=g.daysContainer.children[i],l=n-g.currentMonth===i?e.$i+t:t<0?r.children.length-1:0,s=r.children.length,c=l;c>=0&&c<s&&c!=(t>0?s:-1);c+=a){var u=r.children[c];if(-1===u.className.indexOf("hidden")&&Z(u.dateObj)&&Math.abs(e.$i-c)>=Math.abs(t))return Y(u)}g.changeMonth(a),L(H(a),0)}(o,t):Y(o)}function B(e,t){for(var n=(new Date(e,t,1).getDay()-g.l10n.firstDayOfWeek+7)%7,o=g.utils.getDaysInMonth((t-1+12)%12),a=g.utils.getDaysInMonth(t),i=window.document.createDocumentFragment(),r=g.config.showMonths>1,l=r?"prevMonthDay hidden":"prevMonthDay",s=r?"nextMonthDay hidden":"nextMonthDay",u=o+1-n,d=0;u<=o;u++,d++)i.appendChild(j(l,new Date(e,t-1,u),u,d));for(u=1;u<=a;u++,d++)i.appendChild(j("",new Date(e,t,u),u,d));for(var p=a+1;p<=42-n&&(1===g.config.showMonths||d%7!=0);p++,d++)i.appendChild(j(s,new Date(e,t+1,p%a),p,d));var f=c("div","dayContainer");return f.appendChild(i),f}function q(){if(void 0!==g.daysContainer){u(g.daysContainer),g.weekNumbers&&u(g.weekNumbers);for(var e=document.createDocumentFragment(),t=0;t<g.config.showMonths;t++){var n=new Date(g.currentYear,g.currentMonth,1);n.setMonth(g.currentMonth+t),e.appendChild(B(n.getFullYear(),n.getMonth()))}g.daysContainer.appendChild(e),g.days=g.daysContainer.firstChild,"range"===g.config.mode&&1===g.selectedDates.length&&ee()}}function W(){if(!(g.config.showMonths>1||"dropdown"!==g.config.monthSelectorType)){var e=function(e){return!(void 0!==g.config.minDate&&g.currentYear===g.config.minDate.getFullYear()&&e<g.config.minDate.getMonth()||void 0!==g.config.maxDate&&g.currentYear===g.config.maxDate.getFullYear()&&e>g.config.maxDate.getMonth())};g.monthsDropdownContainer.tabIndex=-1,g.monthsDropdownContainer.innerHTML="";for(var t=0;t<12;t++)if(e(t)){var n=c("option","flatpickr-monthDropdown-month");n.value=new Date(g.currentYear,t).getMonth().toString(),n.textContent=f(t,g.config.shorthandCurrentMonth,g.l10n),n.tabIndex=-1,g.currentMonth===t&&(n.selected=!0),g.monthsDropdownContainer.appendChild(n)}}}function R(){var e,t=c("div","flatpickr-month"),n=window.document.createDocumentFragment();g.config.showMonths>1||"static"===g.config.monthSelectorType?e=c("span","cur-month"):(g.monthsDropdownContainer=c("select","flatpickr-monthDropdown-months"),_(g.monthsDropdownContainer,"change",(function(e){var t=e.target,n=parseInt(t.value,10);g.changeMonth(n-g.currentMonth),pe("onMonthChange")})),W(),e=g.monthsDropdownContainer);var o=d("cur-year",{tabindex:"-1"}),a=o.getElementsByTagName("input")[0];a.setAttribute("aria-label",g.l10n.yearAriaLabel),g.config.minDate&&a.setAttribute("min",g.config.minDate.getFullYear().toString()),g.config.maxDate&&(a.setAttribute("max",g.config.maxDate.getFullYear().toString()),a.disabled=!!g.config.minDate&&g.config.minDate.getFullYear()===g.config.maxDate.getFullYear());var i=c("div","flatpickr-current-month");return i.appendChild(e),i.appendChild(o),n.appendChild(i),t.appendChild(n),{container:t,yearElement:a,monthElement:e}}function V(){u(g.monthNav),g.monthNav.appendChild(g.prevMonthNav),g.config.showMonths&&(g.yearElements=[],g.monthElements=[]);for(var e=g.config.showMonths;e--;){var t=R();g.yearElements.push(t.yearElement),g.monthElements.push(t.monthElement),g.monthNav.appendChild(t.container)}g.monthNav.appendChild(g.nextMonthNav)}function J(){g.weekdayContainer?u(g.weekdayContainer):g.weekdayContainer=c("div","flatpickr-weekdays");for(var e=g.config.showMonths;e--;){var t=c("div","flatpickr-weekdaycontainer");g.weekdayContainer.appendChild(t)}return K(),g.weekdayContainer}function K(){if(g.weekdayContainer){var e=g.l10n.firstDayOfWeek,t=g.l10n.weekdays.shorthand.slice();e>0&&e<t.length&&(t=t.splice(e,t.length).concat(t.splice(0,e)));for(var n=g.config.showMonths;n--;)g.weekdayContainer.children[n].innerHTML="\n      <span class='flatpickr-weekday'>\n        "+t.join("</span><span class='flatpickr-weekday'>")+"\n      </span>\n      "}}function U(e,t){void 0===t&&(t=!0);var n=t?e:e-g.currentMonth;n<0&&!0===g._hidePrevMonthArrow||n>0&&!0===g._hideNextMonthArrow||(g.currentMonth+=n,(g.currentMonth<0||g.currentMonth>11)&&(g.currentYear+=g.currentMonth>11?1:-1,g.currentMonth=(g.currentMonth+12)%12,pe("onYearChange"),W()),q(),pe("onMonthChange"),he())}function $(e){return!(!g.config.appendTo||!g.config.appendTo.contains(e))||g.calendarContainer.contains(e)}function z(e){if(g.isOpen&&!g.config.inline){var t="function"==typeof(r=e).composedPath?r.composedPath()[0]:r.target,n=$(t),o=t===g.input||t===g.altInput||g.element.contains(t)||e.path&&e.path.indexOf&&(~e.path.indexOf(g.input)||~e.path.indexOf(g.altInput)),a="blur"===e.type?o&&e.relatedTarget&&!$(e.relatedTarget):!o&&!n&&!$(e.relatedTarget),i=!g.config.ignoredFocusElements.some((function(e){return e.contains(t)}));a&&i&&(void 0!==g.timeContainer&&void 0!==g.minuteElement&&void 0!==g.hourElement&&x(),g.close(),"range"===g.config.mode&&1===g.selectedDates.length&&(g.clear(!1),g.redraw()))}var r}function G(e){if(!(!e||g.config.minDate&&e<g.config.minDate.getFullYear()||g.config.maxDate&&e>g.config.maxDate.getFullYear())){var t=e,n=g.currentYear!==t;g.currentYear=t||g.currentYear,g.config.maxDate&&g.currentYear===g.config.maxDate.getFullYear()?g.currentMonth=Math.min(g.config.maxDate.getMonth(),g.currentMonth):g.config.minDate&&g.currentYear===g.config.minDate.getFullYear()&&(g.currentMonth=Math.max(g.config.minDate.getMonth(),g.currentMonth)),n&&(g.redraw(),pe("onYearChange"),W())}}function Z(e,t){void 0===t&&(t=!0);var n=g.parseDate(e,void 0,t);if(g.config.minDate&&n&&b(n,g.config.minDate,void 0!==t?t:!g.minDateHasTime)<0||g.config.maxDate&&n&&b(n,g.config.maxDate,void 0!==t?t:!g.maxDateHasTime)>0)return!1;if(0===g.config.enable.length&&0===g.config.disable.length)return!0;if(void 0===n)return!1;for(var o=g.config.enable.length>0,a=o?g.config.enable:g.config.disable,i=0,r=void 0;i<a.length;i++){if("function"==typeof(r=a[i])&&r(n))return o;if(r instanceof Date&&void 0!==n&&r.getTime()===n.getTime())return o;if("string"==typeof r&&void 0!==n){var l=g.parseDate(r,void 0,!0);return l&&l.getTime()===n.getTime()?o:!o}if("object"==typeof r&&void 0!==n&&r.from&&r.to&&n.getTime()>=r.from.getTime()&&n.getTime()<=r.to.getTime())return o}return!o}function Q(e){return void 0!==g.daysContainer&&-1===e.className.indexOf("hidden")&&g.daysContainer.contains(e)}function X(e){var t=e.target===g._input,n=g.config.allowInput,o=g.isOpen&&(!n||!t),a=g.config.inline&&t&&!n;if(13===e.keyCode&&t){if(n)return g.setDate(g._input.value,!0,e.target===g.altInput?g.config.altFormat:g.config.dateFormat),e.target.blur();g.open()}else if($(e.target)||o||a){var i=!!g.timeContainer&&g.timeContainer.contains(e.target);switch(e.keyCode){case 13:i?(e.preventDefault(),x(),le()):se(e);break;case 27:e.preventDefault(),le();break;case 8:case 46:t&&!g.config.allowInput&&(e.preventDefault(),g.clear());break;case 37:case 39:if(i||t)g.hourElement&&g.hourElement.focus();else if(e.preventDefault(),void 0!==g.daysContainer&&(!1===n||document.activeElement&&Q(document.activeElement))){var r=39===e.keyCode?1:-1;e.ctrlKey?(e.stopPropagation(),U(r),L(H(1),0)):L(void 0,r)}break;case 38:case 40:e.preventDefault();var l=40===e.keyCode?1:-1;g.daysContainer&&void 0!==e.target.$i||e.target===g.input||e.target===g.altInput?e.ctrlKey?(e.stopPropagation(),G(g.currentYear-l),L(H(1),0)):i||L(void 0,7*l):e.target===g.currentYearElement?G(g.currentYear-l):g.config.enableTime&&(!i&&g.hourElement&&g.hourElement.focus(),x(e),g._debouncedChange());break;case 9:if(i){var s=[g.hourElement,g.minuteElement,g.secondElement,g.amPM].concat(g.pluginElements).filter((function(e){return e})),c=s.indexOf(e.target);if(-1!==c){var u=s[c+(e.shiftKey?-1:1)];e.preventDefault(),(u||g._input).focus()}}else!g.config.noCalendar&&g.daysContainer&&g.daysContainer.contains(e.target)&&e.shiftKey&&(e.preventDefault(),g._input.focus())}}if(void 0!==g.amPM&&e.target===g.amPM)switch(e.key){case g.l10n.amPM[0].charAt(0):case g.l10n.amPM[0].charAt(0).toLowerCase():g.amPM.textContent=g.l10n.amPM[0],E(),ve();break;case g.l10n.amPM[1].charAt(0):case g.l10n.amPM[1].charAt(0).toLowerCase():g.amPM.textContent=g.l10n.amPM[1],E(),ve()}(t||$(e.target))&&pe("onKeyDown",e)}function ee(e){if(1===g.selectedDates.length&&(!e||e.classList.contains("flatpickr-day")&&!e.classList.contains("flatpickr-disabled"))){for(var t=e?e.dateObj.getTime():g.days.firstElementChild.dateObj.getTime(),n=g.parseDate(g.selectedDates[0],void 0,!0).getTime(),o=Math.min(t,g.selectedDates[0].getTime()),a=Math.max(t,g.selectedDates[0].getTime()),i=!1,r=0,l=0,s=o;s<a;s+=y)Z(new Date(s),!0)||(i=i||s>o&&s<a,s<n&&(!r||s>r)?r=s:s>n&&(!l||s<l)&&(l=s));for(var c=0;c<g.config.showMonths;c++)for(var u=g.daysContainer.children[c],d=function(o,a){var s,c,d,p=u.children[o],f=p.dateObj.getTime(),m=r>0&&f<r||l>0&&f>l;return m?(p.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach((function(e){p.classList.remove(e)})),"continue"):i&&!m?"continue":(["startRange","inRange","endRange","notAllowed"].forEach((function(e){p.classList.remove(e)})),void(void 0!==e&&(e.classList.add(t<=g.selectedDates[0].getTime()?"startRange":"endRange"),n<t&&f===n?p.classList.add("startRange"):n>t&&f===n&&p.classList.add("endRange"),f>=r&&(0===l||f<=l)&&(c=n,d=t,(s=f)>Math.min(c,d)&&s<Math.max(c,d))&&p.classList.add("inRange"))))},p=0,f=u.children.length;p<f;p++)d(p)}}function te(){!g.isOpen||g.config.static||g.config.inline||ie()}function ne(){g.setDate(void 0!==g.config.minDate?new Date(g.config.minDate.getTime()):new Date,!0),T(),ve()}function oe(e){return function(t){var n=g.config["_"+e+"Date"]=g.parseDate(t,g.config.dateFormat),o=g.config["_"+("min"===e?"max":"min")+"Date"];void 0!==n&&(g["min"===e?"minDateHasTime":"maxDateHasTime"]=n.getHours()>0||n.getMinutes()>0||n.getSeconds()>0),g.selectedDates&&(g.selectedDates=g.selectedDates.filter((function(e){return Z(e)})),g.selectedDates.length||"min"!==e||P(n),ve()),g.daysContainer&&(re(),void 0!==n?g.currentYearElement[e]=n.getFullYear().toString():g.currentYearElement.removeAttribute(e),g.currentYearElement.disabled=!!o&&void 0!==n&&o.getFullYear()===n.getFullYear())}}function ae(){"object"!=typeof g.config.locale&&void 0===C.l10ns[g.config.locale]&&g.config.errorHandler(new Error("flatpickr: invalid locale "+g.config.locale)),g.l10n=e({},C.l10ns.default,"object"==typeof g.config.locale?g.config.locale:"default"!==g.config.locale?C.l10ns[g.config.locale]:void 0),h.K="("+g.l10n.amPM[0]+"|"+g.l10n.amPM[1]+"|"+g.l10n.amPM[0].toLowerCase()+"|"+g.l10n.amPM[1].toLowerCase()+")",void 0===e({},m,JSON.parse(JSON.stringify(p.dataset||{}))).time_24hr&&void 0===C.defaultConfig.time_24hr&&(g.config.time_24hr=g.l10n.time_24hr),g.formatDate=v(g),g.parseDate=D({config:g.config,l10n:g.l10n})}function ie(e){if(void 0!==g.calendarContainer){pe("onPreCalendarPosition");var t=e||g._positionElement,n=Array.prototype.reduce.call(g.calendarContainer.children,(function(e,t){return e+t.offsetHeight}),0),o=g.calendarContainer.offsetWidth,a=g.config.position.split(" "),i=a[0],r=a.length>1?a[1]:null,l=t.getBoundingClientRect(),c=window.innerHeight-l.bottom,u="above"===i||"below"!==i&&c<n&&l.top>n,d=window.pageYOffset+l.top+(u?-n-2:t.offsetHeight+2);if(s(g.calendarContainer,"arrowTop",!u),s(g.calendarContainer,"arrowBottom",u),!g.config.inline){var p=window.pageXOffset+l.left-(null!=r&&"center"===r?(o-l.width)/2:0),f=window.document.body.offsetWidth-(window.pageXOffset+l.right),m=p+o>window.document.body.offsetWidth,h=f+o>window.document.body.offsetWidth;if(s(g.calendarContainer,"rightMost",m),!g.config.static)if(g.calendarContainer.style.top=d+"px",m)if(h){var v=document.styleSheets[0];if(void 0===v)return;var D=window.document.body.offsetWidth,b=Math.max(0,D/2-o/2),y=v.cssRules.length,w="{left:"+l.left+"px;right:auto;}";s(g.calendarContainer,"rightMost",!1),s(g.calendarContainer,"centerMost",!0),v.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after"+w,y),g.calendarContainer.style.left=b+"px",g.calendarContainer.style.right="auto"}else g.calendarContainer.style.left="auto",g.calendarContainer.style.right=f+"px";else g.calendarContainer.style.left=p+"px",g.calendarContainer.style.right="auto"}}}function re(){g.config.noCalendar||g.isMobile||(he(),q())}function le(){g._input.focus(),-1!==window.navigator.userAgent.indexOf("MSIE")||void 0!==navigator.msMaxTouchPoints?setTimeout(g.close,0):g.close()}function se(e){e.preventDefault(),e.stopPropagation();var t=function e(t,n){return n(t)?t:t.parentNode?e(t.parentNode,n):void 0}(e.target,(function(e){return e.classList&&e.classList.contains("flatpickr-day")&&!e.classList.contains("flatpickr-disabled")&&!e.classList.contains("notAllowed")}));if(void 0!==t){var n=t,o=g.latestSelectedDateObj=new Date(n.dateObj.getTime()),a=(o.getMonth()<g.currentMonth||o.getMonth()>g.currentMonth+g.config.showMonths-1)&&"range"!==g.config.mode;if(g.selectedDateElem=n,"single"===g.config.mode)g.selectedDates=[o];else if("multiple"===g.config.mode){var i=me(o);i?g.selectedDates.splice(parseInt(i),1):g.selectedDates.push(o)}else"range"===g.config.mode&&(2===g.selectedDates.length&&g.clear(!1,!1),g.latestSelectedDateObj=o,g.selectedDates.push(o),0!==b(o,g.selectedDates[0],!0)&&g.selectedDates.sort((function(e,t){return e.getTime()-t.getTime()})));if(E(),a){var r=g.currentYear!==o.getFullYear();g.currentYear=o.getFullYear(),g.currentMonth=o.getMonth(),r&&(pe("onYearChange"),W()),pe("onMonthChange")}if(he(),q(),ve(),g.config.enableTime&&setTimeout((function(){return g.showTimeInput=!0}),50),a||"range"===g.config.mode||1!==g.config.showMonths?void 0!==g.selectedDateElem&&void 0===g.hourElement&&g.selectedDateElem&&g.selectedDateElem.focus():Y(n),void 0!==g.hourElement&&void 0!==g.hourElement&&g.hourElement.focus(),g.config.closeOnSelect){var l="single"===g.config.mode&&!g.config.enableTime,s="range"===g.config.mode&&2===g.selectedDates.length&&!g.config.enableTime;(l||s)&&le()}N()}}g.parseDate=D({config:g.config,l10n:g.l10n}),g._handlers=[],g.pluginElements=[],g.loadedPlugins=[],g._bind=_,g._setHoursFromDate=P,g._positionCalendar=ie,g.changeMonth=U,g.changeYear=G,g.clear=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0),g.input.value="",void 0!==g.altInput&&(g.altInput.value=""),void 0!==g.mobileInput&&(g.mobileInput.value=""),g.selectedDates=[],g.latestSelectedDateObj=void 0,!0===t&&(g.currentYear=g._initialDate.getFullYear(),g.currentMonth=g._initialDate.getMonth()),g.showTimeInput=!1,!0===g.config.enableTime&&T(),g.redraw(),e&&pe("onChange")},g.close=function(){g.isOpen=!1,g.isMobile||(void 0!==g.calendarContainer&&g.calendarContainer.classList.remove("open"),void 0!==g._input&&g._input.classList.remove("active")),pe("onClose")},g._createElement=c,g.destroy=function(){void 0!==g.config&&pe("onDestroy");for(var e=g._handlers.length;e--;){var t=g._handlers[e];t.element.removeEventListener(t.event,t.handler,t.options)}if(g._handlers=[],g.mobileInput)g.mobileInput.parentNode&&g.mobileInput.parentNode.removeChild(g.mobileInput),g.mobileInput=void 0;else if(g.calendarContainer&&g.calendarContainer.parentNode)if(g.config.static&&g.calendarContainer.parentNode){var n=g.calendarContainer.parentNode;if(n.lastChild&&n.removeChild(n.lastChild),n.parentNode){for(;n.firstChild;)n.parentNode.insertBefore(n.firstChild,n);n.parentNode.removeChild(n)}}else g.calendarContainer.parentNode.removeChild(g.calendarContainer);g.altInput&&(g.input.type="text",g.altInput.parentNode&&g.altInput.parentNode.removeChild(g.altInput),delete g.altInput),g.input&&(g.input.type=g.input._type,g.input.classList.remove("flatpickr-input"),g.input.removeAttribute("readonly"),g.input.value=""),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach((function(e){try{delete g[e]}catch(e){}}))},g.isEnabled=Z,g.jumpToDate=S,g.open=function(e,t){if(void 0===t&&(t=g._positionElement),!0===g.isMobile)return e&&(e.preventDefault(),e.target&&e.target.blur()),void 0!==g.mobileInput&&(g.mobileInput.focus(),g.mobileInput.click()),void pe("onOpen");if(!g._input.disabled&&!g.config.inline){var n=g.isOpen;g.isOpen=!0,n||(g.calendarContainer.classList.add("open"),g._input.classList.add("active"),pe("onOpen"),ie(t)),!0===g.config.enableTime&&!0===g.config.noCalendar&&(0===g.selectedDates.length&&ne(),!1!==g.config.allowInput||void 0!==e&&g.timeContainer.contains(e.relatedTarget)||setTimeout((function(){return g.hourElement.select()}),50))}},g.redraw=re,g.set=function(e,n){if(null!==e&&"object"==typeof e)for(var o in Object.assign(g.config,e),e)void 0!==ce[o]&&ce[o].forEach((function(e){return e()}));else g.config[e]=n,void 0!==ce[e]?ce[e].forEach((function(e){return e()})):t.indexOf(e)>-1&&(g.config[e]=l(n));g.redraw(),ve(!1)},g.setDate=function(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=g.config.dateFormat),0!==e&&!e||e instanceof Array&&0===e.length)return g.clear(t);ue(e,n),g.showTimeInput=g.selectedDates.length>0,g.latestSelectedDateObj=g.selectedDates[g.selectedDates.length-1],g.redraw(),S(),P(),0===g.selectedDates.length&&g.clear(!1),ve(t),t&&pe("onChange")},g.toggle=function(e){if(!0===g.isOpen)return g.close();g.open(e)};var ce={locale:[ae,K],showMonths:[V,M,J],minDate:[S],maxDate:[S]};function ue(e,t){var n=[];if(e instanceof Array)n=e.map((function(e){return g.parseDate(e,t)}));else if(e instanceof Date||"number"==typeof e)n=[g.parseDate(e,t)];else if("string"==typeof e)switch(g.config.mode){case"single":case"time":n=[g.parseDate(e,t)];break;case"multiple":n=e.split(g.config.conjunction).map((function(e){return g.parseDate(e,t)}));break;case"range":n=e.split(g.l10n.rangeSeparator).map((function(e){return g.parseDate(e,t)}))}else g.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(e)));g.selectedDates=n.filter((function(e){return e instanceof Date&&Z(e,!1)})),"range"===g.config.mode&&g.selectedDates.sort((function(e,t){return e.getTime()-t.getTime()}))}function de(e){return e.slice().map((function(e){return"string"==typeof e||"number"==typeof e||e instanceof Date?g.parseDate(e,void 0,!0):e&&"object"==typeof e&&e.from&&e.to?{from:g.parseDate(e.from,void 0),to:g.parseDate(e.to,void 0)}:e})).filter((function(e){return e}))}function pe(e,t){if(void 0!==g.config){var n=g.config[e];if(void 0!==n&&n.length>0)for(var o=0;n[o]&&o<n.length;o++)n[o](g.selectedDates,g.input.value,g,t);"onChange"===e&&(g.input.dispatchEvent(fe("change")),g.input.dispatchEvent(fe("input")))}}function fe(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}function me(e){for(var t=0;t<g.selectedDates.length;t++)if(0===b(g.selectedDates[t],e))return""+t;return!1}function he(){g.config.noCalendar||g.isMobile||!g.monthNav||(g.yearElements.forEach((function(e,t){var n=new Date(g.currentYear,g.currentMonth,1);n.setMonth(g.currentMonth+t),g.config.showMonths>1||"static"===g.config.monthSelectorType?g.monthElements[t].textContent=f(n.getMonth(),g.config.shorthandCurrentMonth,g.l10n)+" ":g.monthsDropdownContainer.value=n.getMonth().toString(),e.value=n.getFullYear().toString()})),g._hidePrevMonthArrow=void 0!==g.config.minDate&&(g.currentYear===g.config.minDate.getFullYear()?g.currentMonth<=g.config.minDate.getMonth():g.currentYear<g.config.minDate.getFullYear()),g._hideNextMonthArrow=void 0!==g.config.maxDate&&(g.currentYear===g.config.maxDate.getFullYear()?g.currentMonth+1>g.config.maxDate.getMonth():g.currentYear>g.config.maxDate.getFullYear()))}function ge(e){return g.selectedDates.map((function(t){return g.formatDate(t,e)})).filter((function(e,t,n){return"range"!==g.config.mode||g.config.enableTime||n.indexOf(e)===t})).join("range"!==g.config.mode?g.config.conjunction:g.l10n.rangeSeparator)}function ve(e){void 0===e&&(e=!0),void 0!==g.mobileInput&&g.mobileFormatStr&&(g.mobileInput.value=void 0!==g.latestSelectedDateObj?g.formatDate(g.latestSelectedDateObj,g.mobileFormatStr):""),g.input.value=ge(g.config.dateFormat),void 0!==g.altInput&&(g.altInput.value=ge(g.config.altFormat)),!1!==e&&pe("onValueUpdate")}function De(e){var t=g.prevMonthNav.contains(e.target),n=g.nextMonthNav.contains(e.target);t||n?U(t?-1:1):g.yearElements.indexOf(e.target)>=0?e.target.select():e.target.classList.contains("arrowUp")?g.changeYear(g.currentYear+1):e.target.classList.contains("arrowDown")&&g.changeYear(g.currentYear-1)}return function(){g.element=g.input=p,g.isOpen=!1,function(){var o=["wrap","weekNumbers","allowInput","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],a=e({},m,JSON.parse(JSON.stringify(p.dataset||{}))),i={};g.config.parseDate=a.parseDate,g.config.formatDate=a.formatDate,Object.defineProperty(g.config,"enable",{get:function(){return g.config._enable},set:function(e){g.config._enable=de(e)}}),Object.defineProperty(g.config,"disable",{get:function(){return g.config._disable},set:function(e){g.config._disable=de(e)}});var r="time"===a.mode;if(!a.dateFormat&&(a.enableTime||r)){var s=C.defaultConfig.dateFormat||n.dateFormat;i.dateFormat=a.noCalendar||r?"H:i"+(a.enableSeconds?":S":""):s+" H:i"+(a.enableSeconds?":S":"")}if(a.altInput&&(a.enableTime||r)&&!a.altFormat){var c=C.defaultConfig.altFormat||n.altFormat;i.altFormat=a.noCalendar||r?"h:i"+(a.enableSeconds?":S K":" K"):c+" h:i"+(a.enableSeconds?":S":"")+" K"}a.altInputClass||(g.config.altInputClass=g.input.className+" "+g.config.altInputClass),Object.defineProperty(g.config,"minDate",{get:function(){return g.config._minDate},set:oe("min")}),Object.defineProperty(g.config,"maxDate",{get:function(){return g.config._maxDate},set:oe("max")});var u=function(e){return function(t){g.config["min"===e?"_minTime":"_maxTime"]=g.parseDate(t,"H:i:S")}};Object.defineProperty(g.config,"minTime",{get:function(){return g.config._minTime},set:u("min")}),Object.defineProperty(g.config,"maxTime",{get:function(){return g.config._maxTime},set:u("max")}),"time"===a.mode&&(g.config.noCalendar=!0,g.config.enableTime=!0),Object.assign(g.config,i,a);for(var d=0;d<o.length;d++)g.config[o[d]]=!0===g.config[o[d]]||"true"===g.config[o[d]];for(t.filter((function(e){return void 0!==g.config[e]})).forEach((function(e){g.config[e]=l(g.config[e]||[]).map(w)})),g.isMobile=!g.config.disableMobile&&!g.config.inline&&"single"===g.config.mode&&!g.config.disable.length&&!g.config.enable.length&&!g.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),d=0;d<g.config.plugins.length;d++){var f=g.config.plugins[d](g)||{};for(var h in f)t.indexOf(h)>-1?g.config[h]=l(f[h]).map(w).concat(g.config[h]):void 0===a[h]&&(g.config[h]=f[h])}pe("onParseConfig")}(),ae(),g.input=g.config.wrap?p.querySelector("[data-input]"):p,g.input?(g.input._type=g.input.type,g.input.type="text",g.input.classList.add("flatpickr-input"),g._input=g.input,g.config.altInput&&(g.altInput=c(g.input.nodeName,g.config.altInputClass),g._input=g.altInput,g.altInput.placeholder=g.input.placeholder,g.altInput.disabled=g.input.disabled,g.altInput.required=g.input.required,g.altInput.tabIndex=g.input.tabIndex,g.altInput.type="text",g.input.setAttribute("type","hidden"),!g.config.static&&g.input.parentNode&&g.input.parentNode.insertBefore(g.altInput,g.input.nextSibling)),g.config.allowInput||g._input.setAttribute("readonly","readonly"),g._positionElement=g.config.positionElement||g._input):g.config.errorHandler(new Error("Invalid input element specified")),function(){g.selectedDates=[],g.now=g.parseDate(g.config.now)||new Date;var e=g.config.defaultDate||("INPUT"!==g.input.nodeName&&"TEXTAREA"!==g.input.nodeName||!g.input.placeholder||g.input.value!==g.input.placeholder?g.input.value:null);e&&ue(e,g.config.dateFormat),g._initialDate=g.selectedDates.length>0?g.selectedDates[0]:g.config.minDate&&g.config.minDate.getTime()>g.now.getTime()?g.config.minDate:g.config.maxDate&&g.config.maxDate.getTime()<g.now.getTime()?g.config.maxDate:g.now,g.currentYear=g._initialDate.getFullYear(),g.currentMonth=g._initialDate.getMonth(),g.selectedDates.length>0&&(g.latestSelectedDateObj=g.selectedDates[0]),void 0!==g.config.minTime&&(g.config.minTime=g.parseDate(g.config.minTime,"H:i")),void 0!==g.config.maxTime&&(g.config.maxTime=g.parseDate(g.config.maxTime,"H:i")),g.minDateHasTime=!!g.config.minDate&&(g.config.minDate.getHours()>0||g.config.minDate.getMinutes()>0||g.config.minDate.getSeconds()>0),g.maxDateHasTime=!!g.config.maxDate&&(g.config.maxDate.getHours()>0||g.config.maxDate.getMinutes()>0||g.config.maxDate.getSeconds()>0),Object.defineProperty(g,"showTimeInput",{get:function(){return g._showTimeInput},set:function(e){g._showTimeInput=e,g.calendarContainer&&s(g.calendarContainer,"showTimeInput",e),g.isOpen&&ie()}})}(),g.utils={getDaysInMonth:function(e,t){return void 0===e&&(e=g.currentMonth),void 0===t&&(t=g.currentYear),1===e&&(t%4==0&&t%100!=0||t%400==0)?29:g.l10n.daysInMonth[e]}},g.isMobile||function(){var e=window.document.createDocumentFragment();if(g.calendarContainer=c("div","flatpickr-calendar"),g.calendarContainer.tabIndex=-1,!g.config.noCalendar){if(e.appendChild((g.monthNav=c("div","flatpickr-months"),g.yearElements=[],g.monthElements=[],g.prevMonthNav=c("span","flatpickr-prev-month"),g.prevMonthNav.innerHTML=g.config.prevArrow,g.nextMonthNav=c("span","flatpickr-next-month"),g.nextMonthNav.innerHTML=g.config.nextArrow,V(),Object.defineProperty(g,"_hidePrevMonthArrow",{get:function(){return g.__hidePrevMonthArrow},set:function(e){g.__hidePrevMonthArrow!==e&&(s(g.prevMonthNav,"flatpickr-disabled",e),g.__hidePrevMonthArrow=e)}}),Object.defineProperty(g,"_hideNextMonthArrow",{get:function(){return g.__hideNextMonthArrow},set:function(e){g.__hideNextMonthArrow!==e&&(s(g.nextMonthNav,"flatpickr-disabled",e),g.__hideNextMonthArrow=e)}}),g.currentYearElement=g.yearElements[0],he(),g.monthNav)),g.innerContainer=c("div","flatpickr-innerContainer"),g.config.weekNumbers){var t=function(){g.calendarContainer.classList.add("hasWeeks");var e=c("div","flatpickr-weekwrapper");e.appendChild(c("span","flatpickr-weekday",g.l10n.weekAbbreviation));var t=c("div","flatpickr-weeks");return e.appendChild(t),{weekWrapper:e,weekNumbers:t}}(),n=t.weekWrapper,o=t.weekNumbers;g.innerContainer.appendChild(n),g.weekNumbers=o,g.weekWrapper=n}g.rContainer=c("div","flatpickr-rContainer"),g.rContainer.appendChild(J()),g.daysContainer||(g.daysContainer=c("div","flatpickr-days"),g.daysContainer.tabIndex=-1),q(),g.rContainer.appendChild(g.daysContainer),g.innerContainer.appendChild(g.rContainer),e.appendChild(g.innerContainer)}g.config.enableTime&&e.appendChild(function(){g.calendarContainer.classList.add("hasTime"),g.config.noCalendar&&g.calendarContainer.classList.add("noCalendar"),g.timeContainer=c("div","flatpickr-time"),g.timeContainer.tabIndex=-1;var e=c("span","flatpickr-time-separator",":"),t=d("flatpickr-hour",{"aria-label":g.l10n.hourAriaLabel});g.hourElement=t.getElementsByTagName("input")[0];var n=d("flatpickr-minute",{"aria-label":g.l10n.minuteAriaLabel});if(g.minuteElement=n.getElementsByTagName("input")[0],g.hourElement.tabIndex=g.minuteElement.tabIndex=-1,g.hourElement.value=a(g.latestSelectedDateObj?g.latestSelectedDateObj.getHours():g.config.time_24hr?g.config.defaultHour:function(e){switch(e%24){case 0:case 12:return 12;default:return e%12}}(g.config.defaultHour)),g.minuteElement.value=a(g.latestSelectedDateObj?g.latestSelectedDateObj.getMinutes():g.config.defaultMinute),g.hourElement.setAttribute("step",g.config.hourIncrement.toString()),g.minuteElement.setAttribute("step",g.config.minuteIncrement.toString()),g.hourElement.setAttribute("min",g.config.time_24hr?"0":"1"),g.hourElement.setAttribute("max",g.config.time_24hr?"23":"12"),g.minuteElement.setAttribute("min","0"),g.minuteElement.setAttribute("max","59"),g.timeContainer.appendChild(t),g.timeContainer.appendChild(e),g.timeContainer.appendChild(n),g.config.time_24hr&&g.timeContainer.classList.add("time24hr"),g.config.enableSeconds){g.timeContainer.classList.add("hasSeconds");var o=d("flatpickr-second");g.secondElement=o.getElementsByTagName("input")[0],g.secondElement.value=a(g.latestSelectedDateObj?g.latestSelectedDateObj.getSeconds():g.config.defaultSeconds),g.secondElement.setAttribute("step",g.minuteElement.getAttribute("step")),g.secondElement.setAttribute("min","0"),g.secondElement.setAttribute("max","59"),g.timeContainer.appendChild(c("span","flatpickr-time-separator",":")),g.timeContainer.appendChild(o)}return g.config.time_24hr||(g.amPM=c("span","flatpickr-am-pm",g.l10n.amPM[i((g.latestSelectedDateObj?g.hourElement.value:g.config.defaultHour)>11)]),g.amPM.title=g.l10n.toggleTitle,g.amPM.tabIndex=-1,g.timeContainer.appendChild(g.amPM)),g.timeContainer}()),s(g.calendarContainer,"rangeMode","range"===g.config.mode),s(g.calendarContainer,"animate",!0===g.config.animate),s(g.calendarContainer,"multiMonth",g.config.showMonths>1),g.calendarContainer.appendChild(e);var r=void 0!==g.config.appendTo&&void 0!==g.config.appendTo.nodeType;if((g.config.inline||g.config.static)&&(g.calendarContainer.classList.add(g.config.inline?"inline":"static"),g.config.inline&&(!r&&g.element.parentNode?g.element.parentNode.insertBefore(g.calendarContainer,g._input.nextSibling):void 0!==g.config.appendTo&&g.config.appendTo.appendChild(g.calendarContainer)),g.config.static)){var l=c("div","flatpickr-wrapper");g.element.parentNode&&g.element.parentNode.insertBefore(l,g.element),l.appendChild(g.element),g.altInput&&l.appendChild(g.altInput),l.appendChild(g.calendarContainer)}g.config.static||g.config.inline||(void 0!==g.config.appendTo?g.config.appendTo:window.document.body).appendChild(g.calendarContainer)}(),function(){if(g.config.wrap&&["open","close","toggle","clear"].forEach((function(e){Array.prototype.forEach.call(g.element.querySelectorAll("[data-"+e+"]"),(function(t){return _(t,"click",g[e])}))})),g.isMobile)!function(){var e=g.config.enableTime?g.config.noCalendar?"time":"datetime-local":"date";g.mobileInput=c("input",g.input.className+" flatpickr-mobile"),g.mobileInput.step=g.input.getAttribute("step")||"any",g.mobileInput.tabIndex=1,g.mobileInput.type=e,g.mobileInput.disabled=g.input.disabled,g.mobileInput.required=g.input.required,g.mobileInput.placeholder=g.input.placeholder,g.mobileFormatStr="datetime-local"===e?"Y-m-d\\TH:i:S":"date"===e?"Y-m-d":"H:i:S",g.selectedDates.length>0&&(g.mobileInput.defaultValue=g.mobileInput.value=g.formatDate(g.selectedDates[0],g.mobileFormatStr)),g.config.minDate&&(g.mobileInput.min=g.formatDate(g.config.minDate,"Y-m-d")),g.config.maxDate&&(g.mobileInput.max=g.formatDate(g.config.maxDate,"Y-m-d")),g.input.type="hidden",void 0!==g.altInput&&(g.altInput.type="hidden");try{g.input.parentNode&&g.input.parentNode.insertBefore(g.mobileInput,g.input.nextSibling)}catch(e){}_(g.mobileInput,"change",(function(e){g.setDate(e.target.value,!1,g.mobileFormatStr),pe("onChange"),pe("onClose")}))}();else{var e=r(te,50);g._debouncedChange=r(N,300),g.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&_(g.daysContainer,"mouseover",(function(e){"range"===g.config.mode&&ee(e.target)})),_(window.document.body,"keydown",X),g.config.inline||g.config.static||_(window,"resize",e),void 0!==window.ontouchstart?_(window.document,"touchstart",z):_(window.document,"mousedown",I(z)),_(window.document,"focus",z,{capture:!0}),!0===g.config.clickOpens&&(_(g._input,"focus",g.open),_(g._input,"mousedown",I(g.open))),void 0!==g.daysContainer&&(_(g.monthNav,"mousedown",I(De)),_(g.monthNav,["keyup","increment"],O),_(g.daysContainer,"mousedown",I(se))),void 0!==g.timeContainer&&void 0!==g.minuteElement&&void 0!==g.hourElement&&(_(g.timeContainer,["increment"],x),_(g.timeContainer,"blur",x,{capture:!0}),_(g.timeContainer,"mousedown",I(F)),_([g.hourElement,g.minuteElement],["focus","click"],(function(e){return e.target.select()})),void 0!==g.secondElement&&_(g.secondElement,"focus",(function(){return g.secondElement&&g.secondElement.select()})),void 0!==g.amPM&&_(g.amPM,"mousedown",I((function(e){x(e),N()}))))}}(),(g.selectedDates.length||g.config.noCalendar)&&(g.config.enableTime&&P(g.config.noCalendar?g.latestSelectedDateObj||g.config.minDate:void 0),ve(!1)),M(),g.showTimeInput=g.selectedDates.length>0||g.config.noCalendar;var o=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!g.isMobile&&o&&ie(),pe("onReady")}(),g}function M(e,t){for(var n=Array.prototype.slice.call(e).filter((function(e){return e instanceof HTMLElement})),o=[],a=0;a<n.length;a++){var i=n[a];try{if(null!==i.getAttribute("data-fp-omit"))continue;void 0!==i._flatpickr&&(i._flatpickr.destroy(),i._flatpickr=void 0),i._flatpickr=w(i,t||{}),o.push(i._flatpickr)}catch(e){console.error(e)}}return 1===o.length?o[0]:o}"function"!=typeof Object.assign&&(Object.assign=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(!e)throw TypeError("Cannot convert undefined or null to object");for(var o=function(t){t&&Object.keys(t).forEach((function(n){return e[n]=t[n]}))},a=0,i=t;a<i.length;a++){var r=i[a];o(r)}return e}),"undefined"!=typeof HTMLElement&&"undefined"!=typeof HTMLCollection&&"undefined"!=typeof NodeList&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(e){return M(this,e)},HTMLElement.prototype.flatpickr=function(e){return M([this],e)});var C=function(e,t){return"string"==typeof e?M(window.document.querySelectorAll(e),t):e instanceof Node?M([e],t):M(e,t)};return C.defaultConfig={},C.l10ns={en:e({},o),default:e({},o)},C.localize=function(t){C.l10ns.default=e({},C.l10ns.default,t)},C.setDefaults=function(t){C.defaultConfig=e({},C.defaultConfig,t)},C.parseDate=D({}),C.formatDate=v({}),C.compareDates=b,"undefined"!=typeof jQuery&&void 0!==jQuery.fn&&(jQuery.fn.flatpickr=function(e){return M(this,e)}),Date.prototype.fp_incr=function(e){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+("string"==typeof e?parseInt(e,10):e))},"undefined"!=typeof window&&(window.flatpickr=C),C}()},function(e,t){e.exports=flarum.core.compat.Component},function(e,t){e.exports=flarum.core.compat["components/LogInModal"]},function(e,t){e.exports=flarum.core.compat["helpers/avatar"]},function(e,t){e.exports=flarum.core.compat["helpers/username"]},function(e,t){e.exports=flarum.core.compat["utils/PostControls"]},function(e,t,n){"use strict";n.r(t);var o=n(1),a=n(0),i=n.n(a),r=n(4),l=n.n(r);function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var c=n(3),u=n.n(c);var d=function(e){s(n,e);var t;t=n;function n(){return e.apply(this,arguments)||this}return n.prototype.apiEndpoint=function(){return"/fof/polls"+(this.exists?"/"+this.data.id:"")},n}(u()(i.a,{question:i.a.attribute("question"),hasEnded:i.a.attribute("hasEnded"),endDate:i.a.attribute("endDate"),publicPoll:i.a.attribute("publicPoll"),options:i.a.hasMany("options"),votes:i.a.hasMany("votes")}));var p=function(e){s(n,e);var t;t=n;function n(){return e.apply(this,arguments)||this}return n.prototype.apiEndpoint=function(){return"/fof/polls/answers"+(this.exists?"/"+this.data.id:"")},n}(u()(i.a,{answer:i.a.attribute("answer"),poll:i.a.hasOne("polls"),votes:i.a.hasMany("votes")}));var f=function(e){s(n,e);var t;t=n;function n(){return e.apply(this,arguments)||this}return n.prototype.apiEndpoint=function(){return"/fof/polls/"+this.pollId()+"/vote"},n}(u()(i.a,{poll:i.a.hasOne("poll"),option:i.a.hasOne("option"),user:i.a.hasOne("user"),pollId:i.a.attribute("pollId"),optionId:i.a.attribute("optionId")})),h=n(8),g=n.n(h),v=n(9),D=n.n(v),b=n(10),y=n.n(b),w=n(6),M=n.n(w),C=n(2),x=n.n(C),E=n(5),P=n.n(E),T=n(11),k=n.n(T),O=n(12),_=n.n(O);var I=function(e){s(n,e);var t;t=n;function n(){return e.apply(this,arguments)||this}var o=n.prototype;return o.init=function(){if(e.prototype.init.call(this),this.options=[m.prop(""),m.prop("")],this.question=m.prop(""),this.endDate=m.prop(),this.publicPoll=m.prop(!1),this.props.poll){var t=this.props.poll;this.options=t.relationships.options.map((function(e){return m.prop(e)})),this.question(t.question),this.endDate(!t.endDate||isNaN(t.endDate.getTime())?null:t.endDate),this.publicPoll(t.publicPoll)}},o.title=function(){return app.translator.trans("fof-polls.forum.modal.add_title")},o.className=function(){return"PollDiscussionModal Modal--small"},o.configDatePicker=function(e,t){var n=this;t||_()(e,{enableTime:!0,minDate:this.endDate()||"today",dateFormat:"Y-m-d H:i",defaultDate:this.endDate(),wrap:!0,onChange:function(e){return n.endDate(e[0])}})},o.content=function(){return[m("div",{className:"Modal-body"},m("div",{className:"PollDiscussionModal-form"},m("div",{className:"Form-group"},m("label",{className:"label"},app.translator.trans("fof-polls.forum.modal.question_placeholder")),m("input",{type:"text",name:"question",className:"FormControl",bidi:this.question})),m("div",{className:"PollModal--answers Form-group"},m("label",{className:"label PollModal--answers-title"},m("span",null,app.translator.trans("fof-polls.forum.modal.options_label")),x.a.component({className:"Button PollModal--button small",icon:"fas fa-plus",onclick:this.addOption.bind(this)})),this.displayOptions()),m("div",{className:"Form-group"},m("label",{className:"label"},app.translator.trans("fof-polls.forum.modal.date_placeholder")),m("div",{className:"PollModal--date",config:this.configDatePicker.bind(this)},m("input",{style:"opacity: 1; color: inherit",className:"FormControl","data-input":!0}),x.a.component({className:"Button PollModal--button",icon:"fas fa-times","data-clear":!0}))),m("div",{className:"Form-group"},k.a.component({state:this.publicPoll()||!1,children:app.translator.trans("fof-polls.forum.modal.public_poll_label"),onchange:this.publicPoll})),m("div",{className:"Form-group"},x.a.component({type:"submit",className:"Button Button--primary PollModal-SubmitButton",children:app.translator.trans("fof-polls.forum.modal.submit"),loading:this.loading}))))]},o.displayOptions=function(){var e=this;return Object.keys(this.options).map((function(t,n){return m("div",{className:""===e.options[n+1]?"Form-group hide":"Form-group"},m("fieldset",{className:"Poll-answer-input"},m("input",{className:"FormControl",type:"text",name:"answer"+(n+1),bidi:e.options[n],placeholder:app.translator.trans("fof-polls.forum.modal.option_placeholder")+" #"+(n+1)})),n>=2?x.a.component({type:"button",className:"Button Button--warning PollModal--button",icon:"fas fa-minus",onclick:n>=2?e.removeOption.bind(e,n):""}):"")}))},o.addOption=function(){var e=app.data["fof-polls.options.max"],t=e&&parseInt(e)||11;this.options.length<t?this.options.push(m.prop("")):alert(app.translator.trans("fof-polls.forum.modal.max"))},o.removeOption=function(e){this.options.splice(e,1)},o.onsubmit=function(e){e.preventDefault();var t={question:this.question(),endDate:this.endDate(),publicPoll:this.publicPoll()},n=this.options.map((function(e){return e()})).filter(Boolean);""!==this.question()?n.length<2?alert(app.translator.trans("fof-polls.forum.modal.min")):(t.relationships={options:n},this.props.onsubmit(t),app.modal.close()):alert(app.translator.trans("fof-polls.forum.modal.include_question"))},n}(P.a);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var S=n(13),F=n.n(S),A=n(14),j=n.n(A),Y=n(15),H=n.n(Y),L=n(16),B=n.n(L);var q=function(e){s(n,e);var t;t=n;function n(){return e.apply(this,arguments)||this}var o=n.prototype;return o.className=function(){return"Modal--small"},o.title=function(){return app.translator.trans("fof-polls.forum.votes_modal.title")},o.content=function(){var e=this;return m("div",{className:"Modal-body"},m("ul",{className:"VotesModal-list"},this.props.poll.options().map((function(t){var n=e.props.poll.votes().filter((function(e){return t.id()===e.option().id()})).map((function(e){return e.user()}));return m("div",null,m("h2",null,t.answer()+":"),n.length?n.map((function(e){var t=e&&{href:app.route.user(e),config:m.route};return m("li",null,m("a",t,H()(e)," ",B()(e)))})):m("h4",{style:"color: #000"},app.translator.trans("fof-polls.forum.modal.no_voters")))}))))},n}(P.a);var W=function(e){s(n,e);var t;t=n;function n(){return e.apply(this,arguments)||this}var o=n.prototype;return o.init=function(){this.poll=this.props.poll,this.vote=m.prop(),this.voted=m.prop(!1),this.updateData()},o.view=function(){var e=this;return m("div",null,m("h3",null,this.poll.question()),this.options.map((function(t){var n=e.voted(),o=e.vote()&&e.vote().option().id()===t.id(),a=e.votes.filter((function(e){return e.option().id()===t.id()})).length,i=Math.round(a/e.poll.votes().length*100),r=o?{title:n&&app.translator.transChoice("fof-polls.forum.tooltip.votes",a,{count:String(a)}).join(""),config:function(e){$(e).tooltip({placement:"right"})}}:{},l=o?{checked:!0}:{};return m("div",{className:"PollOption "+(n&&"PollVoted")},m("div",N({},r,{className:"PollBar","data-selected":o}),(!e.poll.hasEnded()&&app.session.user&&app.session.user.canVotePolls()||!app.session.user)&&m("label",{className:"checkbox"},m("input",N({onchange:e.changeVote.bind(e,t),type:"checkbox"},l)),m("span",{className:"checkmark"})),m("div",{style:n&&"--width: "+i+"%",className:"PollOption-active"}),m("label",{style:e.poll.hasEnded()?"":"margin-left: 25px",className:"PollAnswer"},m("span",null,t.answer())),n&&m("label",null,m("span",{className:100!==i?"PollPercent PollPercent--option":"PollPercent"},i,"%"))))})),m("div",{style:"clear: both;"}),this.poll.publicPoll()?x.a.component({className:"Button Button--primary PublicPollButton",children:app.translator.trans("fof-polls.forum.public_poll"),onclick:function(){return e.showVoters()}}):"",app.session.user&&!app.session.user.canVotePolls()?m("div",{className:"helpText PollInfoText"},app.translator.trans("fof-polls.forum.no_permission")):this.poll.hasEnded()?m("div",{className:"helpText PollInfoText"},app.translator.trans("fof-polls.forum.poll_ended")):null!==this.poll.endDate()?m("div",{className:"helpText PollInfoText"},m("i",{class:"icon fa fa-clock-o"}),app.translator.trans("fof-polls.forum.days_remaining",{time:moment(this.poll.endDate()).fromNow()})):"")},o.updateData=function(){this.poll=app.store.getById("polls",this.poll.id()),this.options=this.poll.options()||[],this.votes=this.poll.votes()||[],this.vote(app.session.user?this.votes.find((function(e){return e.user()&&e.user().id()===app.session.user.id()})):null),this.voted(!!this.vote())},o.onError=function(e,t){e.target.checked=!1,app.alerts.show(t.alert)},o.changeVote=function(e,t){var n=this;if(!app.session.user)return app.modal.show(new j.a),void(t.target.checked=!1);this.vote()&&e.id()===this.vote().option().id()&&(e=null),this.vote()||(this.vote(app.store.createRecord("poll_votes")),this.vote().pollId(this.poll.id())),m.startComputation(),app.request({method:"PATCH",url:app.forum.attribute("apiUrl")+"/fof/polls/"+this.poll.id()+"/vote",errorHandler:this.onError.bind(this,t),data:{data:{optionId:e?e.id():null}}}).then((function(t){app.store.pushPayload(t),e||app.store.remove(n.vote()),n.updateData(),e||(m.redraw.strategy("all"),m.redraw(),m.redraw.strategy("diff")),m.endComputation()}))},o.showVoters=function(){app.modal.show(new q({poll:this.poll}))},n}(F.a),R=n(17),V=n.n(R);var J=function(e){s(n,e);var t;t=n;function n(){return e.apply(this,arguments)||this}var o=n.prototype;return o.init=function(){this.poll=this.props.poll,this.options=this.poll.options(),this.optionAnswers=this.options.map((function(e){return m.prop(e.answer())})),this.question=m.prop(this.poll.question()),this.endDate=m.prop(this.poll.endDate()),this.publicPoll=m.prop(this.poll.publicPoll())},o.title=function(){return app.translator.trans("fof-polls.forum.modal.edit_title")},o.displayOptions=function(){var e=this;return this.options.map((function(t,n){return m("div",{className:"Form-group"},m("fieldset",{className:"Poll-answer-input"},m("input",{className:"FormControl",type:"text",name:"answer"+(n+1),bidi:e.optionAnswers[n],placeholder:app.translator.trans("fof-polls.forum.modal.option_placeholder")+" #"+(n+1)})),n>=2?x.a.component({type:"button",className:"Button PollModal--button",icon:"fas fa-minus",onclick:n>=2?e.removeOption.bind(e,n):""}):"")}))},o.addOption=function(){var e=app.data["fof-polls.options.max"],t=e&&parseInt(e)||11;this.options.length<t?(this.options.push(app.store.createRecord("poll_options")),this.optionAnswers.push(m.prop(""))):alert(app.translator.trans("fof-polls.forum.modal.max"))},o.removeOption=function(e){this.options.splice(e,1),this.optionAnswers.splice(e,1)},o.onsubmit=function(e){var t=this;if(e.preventDefault(),!this.loading){this.loading=!0;var n=this.options.map((function(e,n){return e.data.attributes||(e.data.attributes={}),e.data.attributes.answer=t.optionAnswers[n](),e.data}));return this.poll.save({question:this.question(),endDate:this.endDate()||!1,publicPoll:this.publicPoll(),options:n}).then((function(){document.location.reload()})).catch((function(e){t.loaded(),t.onerror(e)}))}},n}(I);app.initializers.add("fof/polls",(function(){app.store.models.polls=d,app.store.models.poll_options=p,app.store.models.poll_votes=f,app.store.models.discussions.prototype.poll=i.a.hasOne("poll"),app.store.models.users.prototype.canEditPolls=i.a.attribute("canEditPolls"),app.store.models.users.prototype.canStartPolls=i.a.attribute("canStartPolls"),app.store.models.users.prototype.canSelfEditPolls=i.a.attribute("canSelfEditPolls"),app.store.models.users.prototype.canVotePolls=i.a.attribute("canVotePolls"),Object(o.extend)(D.a.prototype,"requestParams",(function(e){e.include.push("poll")})),Object(o.extend)(y.a.prototype,"badges",(function(e){this.poll()&&e.add("poll",g.a.component({type:"poll",label:app.translator.trans("fof-polls.forum.tooltip.badge"),icon:"fa fa-signal"}),5)})),Object(o.extend)(V.a,"moderationControls",(function(e,t){var n=t.discussion().poll(),o=app.session.user;n&&(o&&o.canEditPolls()||t.user().canSelfEditPolls()&&t.user().id()===o.id())&&1===t.number()&&(n.hasEnded()||e.add("fof-polls-edit",x.a.component({icon:"fas fa-check-square",children:app.translator.trans("fof-polls.forum.moderation.edit"),onclick:function(){return app.modal.show(new J({poll:n}))}})),e.add("fof-polls-remove",x.a.component({icon:"fas fa-trash",children:app.translator.trans("fof-polls.forum.moderation.delete"),onclick:function(){confirm(app.translator.trans("fof-polls.forum.moderation.delete_confirm"))&&n.delete().then((function(){m.redraw.strategy("all"),m.redraw(),m.redraw.strategy("diff")}))}})))})),M.a.prototype.addPoll=function(){var e=this;app.modal.show(new I({poll:this.poll,onsubmit:function(t){return e.poll=t}}))},Object(o.extend)(M.a.prototype,"headerItems",(function(e){app.session.user.canStartPolls()&&e.add("polls",m("a",{className:"DiscussionComposer-poll",onclick:this.addPoll.bind(this)},m("span",{className:"PollLabel "+(this.poll?"":"none")},app.translator.trans("fof-polls.forum.composer_discussion."+(this.poll?"edit":"add")+"_poll"))),1)})),Object(o.extend)(M.a.prototype,"data",(function(e){this.poll&&(e.poll=this.poll)})),Object(o.extend)(l.a.prototype,"content",(function(e){var t=this.props.post.discussion();t.poll()&&1===this.props.post.number()&&e.push(W.component({poll:t.poll()}))})),Object(o.extend)(l.a.prototype,"config",(function(e,t,n){var a=this;t||app.pusher&&app.pusher.then((function(e){e.main.bind("newPollVote",(function(e){var t=parseInt(e.user_id);if(t!=app.session.user.id()){var n=app.store.getById("polls",a.props.post.discussion().poll().id());if(parseInt(n.id())===parseInt(e.poll_id)){m.startComputation();var o={};Object.keys(e).map((function(t){o[t]=m.prop(e[t])})),o.option=m.prop(app.store.getById("poll_options",e.option_id)),o.user=m.prop(app.store.getById("users",e.user_id));var i=n.votes();i.some((function(e,n){parseInt(e.user().id())===t&&i.splice(n,1)})),i.push(o),n.votes=m.prop(i),m.redraw.strategy("all"),m.endComputation()}}})),Object(o.extend)(n,"onunload",(function(){return e.main.unbind("newPollVote")}))}))}))}))}]);
;

flarum.extensions['fof-polls']=module.exports;

var module={};

module.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=18)}([function(t,n){t.exports=flarum.core.compat.app},function(t,n){t.exports=flarum.core.compat.Model},function(t,n,e){"use strict";function r(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}e.d(n,"a",(function(){return r}))},function(t,n,e){"use strict";function r(t){return t.slice(0).sort((function(t,n){var e=t.position(),r=n.position();return e>r?1:e<r?-1:0}))}e.d(n,"a",(function(){return r}))},function(t,n){t.exports=flarum.core.compat.extend},function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(2),o=e(1),i=e.n(o),a=e(6),u=function(t){function n(){return t.apply(this,arguments)||this}return Object(r.a)(n,t),n}(e.n(a)()(i.a,{title:i.a.attribute("title"),type:i.a.attribute("type"),url:i.a.attribute("url"),position:i.a.attribute("position"),isInternal:i.a.attribute("isInternal"),isNewtab:i.a.attribute("isNewtab"),isChild:i.a.attribute("isChild"),parent:i.a.hasOne("parent")}))},function(t,n){t.exports=flarum.core.compat["utils/mixin"]},,function(t,n){t.exports=flarum.core.compat["components/HeaderPrimary"]},function(t,n){t.exports=flarum.core.compat["components/LinkButton"]},function(t,n){t.exports=flarum.core.compat["components/SplitDropdown"]},function(t,n){t.exports=flarum.core.compat["utils/ItemList"]},function(t,n){t.exports=flarum.core.compat["helpers/icon"]},,,,,,function(t,n,e){"use strict";e.r(n);var r=e(4),o=e(8),i=e.n(o),a=e(5),u=e(2),s=e(0),c=e.n(s),p=e(9),l=function(t){function n(){return t.apply(this,arguments)||this}return Object(u.a)(n,t),n.prototype.view=function(){var t=this.props.link,n="LinksButton "+(this.props.className||"Button Button--link");if(t.isInternal()){var e=m.route(),r=t.url().replace(c.a.forum.attribute("baseUrl"),"");""===r&&(r="/"),0!==e.indexOf(r)||"/"!==e&&"/"===r||(n+=" active")}return m("a",{className:n,target:t.isNewtab()?"_blank":"",config:t.isInternal()?m.route:"",href:t.url(),title:t.title()},t.title())},n}(e.n(p).a),f=e(10),d=e.n(f),b=e(11),h=e.n(b),y=e(12),v=e.n(y),k=e(3),x=function(t){function n(){return t.apply(this,arguments)||this}Object(u.a)(n,t),n.initProps=function(n){t.initProps.call(this,n),n.className+=" LinkDropdown",n.buttonClassName+=" Button--link"};var e=n.prototype;return e.view=function(){return this.props.children=this.items().toArray(),t.prototype.view.call(this)},e.getButton=function(){var t=this.getFirstChild();return t.props.className=(t.props.className||"")+" SplitDropdown-button Button "+this.props.buttonClassName,[t,m("button",{className:"Dropdown-toggle Button Button--icon "+this.props.buttonClassName,"data-toggle":"dropdown"},v()("fas fa-caret-down",{className:"Button-caret"}))]},e.items=function(){var t=new h.a,n=this.props.link;return t.add("link"+n.id(),l.component({link:n})),Object(k.a)(app.store.all("links")).filter((function(t){return t.parent()===n})).forEach((function(e){return t.add("link"+n.id()+"-"+e.id(),l.component({link:e,className:" "}))})),t},n}(d.a);app.initializers.add("fof-links",(function(){app.store.models.links=a.a,Object(r.extend)(i.a.prototype,"items",(function(t){var n=app.store.all("links").filter((function(t){return!t.isChild()}));Object(k.a)(n).map((function(n){var e=!!app.store.all("links").filter((function(t){return t.parent()==n})).length;t.add("link"+n.id(),e?x.component({link:n}):l.component({link:n}))}))}))}))}]);
;

flarum.extensions['fof-links']=module.exports;

var module={};

module.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=9)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/AvatarEditor"]},function(t,e,i){t.exports=i(7)},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e,i){
/*!
 * Cropper.js v1.5.7
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2020-05-23T05:23:00.081Z
 */
t.exports=function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var h="undefined"!=typeof window&&void 0!==window.document,c=h?window:{},l=!(!h||!c.document.documentElement)&&"ontouchstart"in c.document.documentElement,p=!!h&&"PointerEvent"in c,d="".concat("cropper","-crop"),u="".concat("cropper","-disabled"),f="".concat("cropper","-hidden"),m="".concat("cropper","-hide"),g="".concat("cropper","-invisible"),v="".concat("cropper","-modal"),w="".concat("cropper","-move"),y="".concat("cropper","Action"),b="".concat("cropper","Preview"),x=l?"touchstart":"mousedown",M=l?"touchmove":"mousemove",C=l?"touchend touchcancel":"mouseup",D=p?"pointerdown":x,O=p?"pointermove":M,k=p?"pointerup pointercancel":C,E=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,L=/^data:/,B=/^data:image\/jpeg;base64,/,T=/^img|canvas$/i,N={viewMode:0,dragMode:"crop",initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},j=Number.isNaN||c.isNaN;function R(t){return"number"==typeof t&&!j(t)}var W=function(t){return t>0&&t<1/0};function z(t){return void 0===t}function H(e){return"object"===t(e)&&null!==e}var S=Object.prototype.hasOwnProperty;function Y(t){if(!H(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&S.call(i,"isPrototypeOf")}catch(t){return!1}}function P(t){return"function"==typeof t}var X=Array.prototype.slice;function A(t){return Array.from?Array.from(t):X.call(t)}function I(t,e){return t&&P(e)&&(Array.isArray(t)||R(t.length)?A(t).forEach((function(i,n){e.call(t,i,n,t)})):H(t)&&Object.keys(t).forEach((function(i){e.call(t,t[i],i,t)}))),t}var _=Object.assign||function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];return H(t)&&i.length>0&&i.forEach((function(e){H(e)&&Object.keys(e).forEach((function(i){t[i]=e[i]}))})),t},U=/\.\d*(?:0|9){12}\d*$/;function q(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return U.test(t)?Math.round(t*e)/e:t}var F=/^width|height|left|top|marginLeft|marginTop$/;function G(t,e){var i=t.style;I(e,(function(t,e){F.test(e)&&R(t)&&(t="".concat(t,"px")),i[e]=t}))}function $(t,e){if(e)if(R(t.length))I(t,(function(t){$(t,e)}));else if(t.classList)t.classList.add(e);else{var i=t.className.trim();i?i.indexOf(e)<0&&(t.className="".concat(i," ").concat(e)):t.className=e}}function Q(t,e){e&&(R(t.length)?I(t,(function(t){Q(t,e)})):t.classList?t.classList.remove(e):t.className.indexOf(e)>=0&&(t.className=t.className.replace(e,"")))}function K(t,e,i){e&&(R(t.length)?I(t,(function(t){K(t,e,i)})):i?$(t,e):Q(t,e))}var Z=/([a-z\d])([A-Z])/g;function V(t){return t.replace(Z,"$1-$2").toLowerCase()}function J(t,e){return H(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(V(e)))}function tt(t,e,i){H(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-".concat(V(e)),i)}var et=/\s\s*/,it=function(){var t=!1;if(h){var e=!1,i=function(){},n=Object.defineProperty({},"once",{get:function(){return t=!0,e},set:function(t){e=t}});c.addEventListener("test",i,n),c.removeEventListener("test",i,n)}return t}();function nt(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=i;e.trim().split(et).forEach((function(e){if(!it){var r=t.listeners;r&&r[e]&&r[e][i]&&(a=r[e][i],delete r[e][i],0===Object.keys(r[e]).length&&delete r[e],0===Object.keys(r).length&&delete t.listeners)}t.removeEventListener(e,a,n)}))}function at(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=i;e.trim().split(et).forEach((function(e){if(n.once&&!it){var r=t.listeners,o=void 0===r?{}:r;a=function(){delete o[e][i],t.removeEventListener(e,a,n);for(var r=arguments.length,s=new Array(r),h=0;h<r;h++)s[h]=arguments[h];i.apply(t,s)},o[e]||(o[e]={}),o[e][i]&&t.removeEventListener(e,o[e][i],n),o[e][i]=a,t.listeners=o}t.addEventListener(e,a,n)}))}function rt(t,e,i){var n;return P(Event)&&P(CustomEvent)?n=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(n)}function ot(t){var e=t.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}var st=c.location,ht=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function ct(t){var e=t.match(ht);return null!==e&&(e[1]!==st.protocol||e[2]!==st.hostname||e[3]!==st.port)}function lt(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function pt(t){var e=t.rotate,i=t.scaleX,n=t.scaleY,a=t.translateX,r=t.translateY,o=[];R(a)&&0!==a&&o.push("translateX(".concat(a,"px)")),R(r)&&0!==r&&o.push("translateY(".concat(r,"px)")),R(e)&&0!==e&&o.push("rotate(".concat(e,"deg)")),R(i)&&1!==i&&o.push("scaleX(".concat(i,")")),R(n)&&1!==n&&o.push("scaleY(".concat(n,")"));var s=o.length?o.join(" "):"none";return{WebkitTransform:s,msTransform:s,transform:s}}function dt(t,e){var i=t.pageX,n=t.pageY,a={endX:i,endY:n};return e?a:r({startX:i,startY:n},a)}function ut(t){var e=t.aspectRatio,i=t.height,n=t.width,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contain",r=W(n),o=W(i);if(r&&o){var s=i*e;"contain"===a&&s>n||"cover"===a&&s<n?i=n/e:n=i*e}else r?i=n/e:o&&(n=i*e);return{width:n,height:i}}function ft(t,e,i,n){var a=e.aspectRatio,r=e.naturalWidth,s=e.naturalHeight,h=e.rotate,c=void 0===h?0:h,l=e.scaleX,p=void 0===l?1:l,d=e.scaleY,u=void 0===d?1:d,f=i.aspectRatio,m=i.naturalWidth,g=i.naturalHeight,v=n.fillColor,w=void 0===v?"transparent":v,y=n.imageSmoothingEnabled,b=void 0===y||y,x=n.imageSmoothingQuality,M=void 0===x?"low":x,C=n.maxWidth,D=void 0===C?1/0:C,O=n.maxHeight,k=void 0===O?1/0:O,E=n.minWidth,L=void 0===E?0:E,B=n.minHeight,T=void 0===B?0:B,N=document.createElement("canvas"),j=N.getContext("2d"),R=ut({aspectRatio:f,width:D,height:k}),W=ut({aspectRatio:f,width:L,height:T},"cover"),z=Math.min(R.width,Math.max(W.width,m)),H=Math.min(R.height,Math.max(W.height,g)),S=ut({aspectRatio:a,width:D,height:k}),Y=ut({aspectRatio:a,width:L,height:T},"cover"),P=Math.min(S.width,Math.max(Y.width,r)),X=Math.min(S.height,Math.max(Y.height,s)),A=[-P/2,-X/2,P,X];return N.width=q(z),N.height=q(H),j.fillStyle=w,j.fillRect(0,0,z,H),j.save(),j.translate(z/2,H/2),j.rotate(c*Math.PI/180),j.scale(p,u),j.imageSmoothingEnabled=b,j.imageSmoothingQuality=M,j.drawImage.apply(j,[t].concat(o(A.map((function(t){return Math.floor(q(t))}))))),j.restore(),N}var mt=String.fromCharCode,gt=/^data:.*,/;function vt(t){var e,i=new DataView(t);try{var n,a,r;if(255===i.getUint8(0)&&216===i.getUint8(1))for(var o=i.byteLength,s=2;s+1<o;){if(255===i.getUint8(s)&&225===i.getUint8(s+1)){a=s;break}s+=1}if(a){var h=a+10;if("Exif"===function(t,e,i){var n="";i+=e;for(var a=e;a<i;a+=1)n+=mt(t.getUint8(a));return n}(i,a+4,4)){var c=i.getUint16(h);if(((n=18761===c)||19789===c)&&42===i.getUint16(h+2,n)){var l=i.getUint32(h+4,n);l>=8&&(r=h+l)}}}if(r){var p,d,u=i.getUint16(r,n);for(d=0;d<u;d+=1)if(p=r+12*d+2,274===i.getUint16(p,n)){p+=8,e=i.getUint16(p,n),i.setUint16(p,1,n);break}}}catch(t){e=1}return e}var wt={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,n=this.cropper;$(n,f),Q(t,f);var a={width:Math.max(i.offsetWidth,Number(e.minContainerWidth)||200),height:Math.max(i.offsetHeight,Number(e.minContainerHeight)||100)};this.containerData=a,G(n,{width:a.width,height:a.height}),$(t,f),Q(n,f)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,n=Math.abs(e.rotate)%180==90,a=n?e.naturalHeight:e.naturalWidth,r=n?e.naturalWidth:e.naturalHeight,o=a/r,s=t.width,h=t.height;t.height*o>t.width?3===i?s=t.height*o:h=t.width/o:3===i?h=t.width/o:s=t.height*o;var c={aspectRatio:o,naturalWidth:a,naturalHeight:r,width:s,height:h};c.left=(t.width-s)/2,c.top=(t.height-h)/2,c.oldLeft=c.left,c.oldTop=c.top,this.canvasData=c,this.limited=1===i||2===i,this.limitCanvas(!0,!0),this.initialImageData=_({},e),this.initialCanvasData=_({},c)},limitCanvas:function(t,e){var i=this.options,n=this.containerData,a=this.canvasData,r=this.cropBoxData,o=i.viewMode,s=a.aspectRatio,h=this.cropped&&r;if(t){var c=Number(i.minCanvasWidth)||0,l=Number(i.minCanvasHeight)||0;o>1?(c=Math.max(c,n.width),l=Math.max(l,n.height),3===o&&(l*s>c?c=l*s:l=c/s)):o>0&&(c?c=Math.max(c,h?r.width:0):l?l=Math.max(l,h?r.height:0):h&&(c=r.width,(l=r.height)*s>c?c=l*s:l=c/s));var p=ut({aspectRatio:s,width:c,height:l});c=p.width,l=p.height,a.minWidth=c,a.minHeight=l,a.maxWidth=1/0,a.maxHeight=1/0}if(e)if(o>(h?0:1)){var d=n.width-a.width,u=n.height-a.height;a.minLeft=Math.min(0,d),a.minTop=Math.min(0,u),a.maxLeft=Math.max(0,d),a.maxTop=Math.max(0,u),h&&this.limited&&(a.minLeft=Math.min(r.left,r.left+(r.width-a.width)),a.minTop=Math.min(r.top,r.top+(r.height-a.height)),a.maxLeft=r.left,a.maxTop=r.top,2===o&&(a.width>=n.width&&(a.minLeft=Math.min(0,d),a.maxLeft=Math.max(0,d)),a.height>=n.height&&(a.minTop=Math.min(0,u),a.maxTop=Math.max(0,u))))}else a.minLeft=-a.width,a.minTop=-a.height,a.maxLeft=n.width,a.maxTop=n.height},renderCanvas:function(t,e){var i=this.canvasData,n=this.imageData;if(e){var a=function(t){var e=t.width,i=t.height,n=t.degree;if(90==(n=Math.abs(n)%180))return{width:i,height:e};var a=n%90*Math.PI/180,r=Math.sin(a),o=Math.cos(a),s=e*o+i*r,h=e*r+i*o;return n>90?{width:h,height:s}:{width:s,height:h}}({width:n.naturalWidth*Math.abs(n.scaleX||1),height:n.naturalHeight*Math.abs(n.scaleY||1),degree:n.rotate||0}),r=a.width,o=a.height,s=i.width*(r/i.naturalWidth),h=i.height*(o/i.naturalHeight);i.left-=(s-i.width)/2,i.top-=(h-i.height)/2,i.width=s,i.height=h,i.aspectRatio=r/o,i.naturalWidth=r,i.naturalHeight=o,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,G(this.canvas,_({width:i.width,height:i.height},pt({translateX:i.left,translateY:i.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,n=i.naturalWidth*(e.width/e.naturalWidth),a=i.naturalHeight*(e.height/e.naturalHeight);_(i,{width:n,height:a,left:(e.width-n)/2,top:(e.height-a)/2}),G(this.image,_({width:i.width,height:i.height},pt(_({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,n=Number(t.autoCropArea)||.8,a={width:e.width,height:e.height};i&&(e.height*i>e.width?a.height=a.width/i:a.width=a.height*i),this.cropBoxData=a,this.limitCropBox(!0,!0),a.width=Math.min(Math.max(a.width,a.minWidth),a.maxWidth),a.height=Math.min(Math.max(a.height,a.minHeight),a.maxHeight),a.width=Math.max(a.minWidth,a.width*n),a.height=Math.max(a.minHeight,a.height*n),a.left=e.left+(e.width-a.width)/2,a.top=e.top+(e.height-a.height)/2,a.oldLeft=a.left,a.oldTop=a.top,this.initialCropBoxData=_({},a)},limitCropBox:function(t,e){var i=this.options,n=this.containerData,a=this.canvasData,r=this.cropBoxData,o=this.limited,s=i.aspectRatio;if(t){var h=Number(i.minCropBoxWidth)||0,c=Number(i.minCropBoxHeight)||0,l=o?Math.min(n.width,a.width,a.width+a.left,n.width-a.left):n.width,p=o?Math.min(n.height,a.height,a.height+a.top,n.height-a.top):n.height;h=Math.min(h,n.width),c=Math.min(c,n.height),s&&(h&&c?c*s>h?c=h/s:h=c*s:h?c=h/s:c&&(h=c*s),p*s>l?p=l/s:l=p*s),r.minWidth=Math.min(h,l),r.minHeight=Math.min(c,p),r.maxWidth=l,r.maxHeight=p}e&&(o?(r.minLeft=Math.max(0,a.left),r.minTop=Math.max(0,a.top),r.maxLeft=Math.min(n.width,a.left+a.width)-r.width,r.maxTop=Math.min(n.height,a.top+a.height)-r.height):(r.minLeft=0,r.minTop=0,r.maxLeft=n.width-r.width,r.maxTop=n.height-r.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&tt(this.face,y,i.width>=e.width&&i.height>=e.height?"move":"all"),G(this.cropBox,_({width:i.width,height:i.height},pt({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),rt(this.element,"crop",this.getData())}},yt={initPreview:function(){var t=this.element,e=this.crossOrigin,i=this.options.preview,n=e?this.crossOriginUrl:this.url,a=t.alt||"The image to preview",r=document.createElement("img");if(e&&(r.crossOrigin=e),r.src=n,r.alt=a,this.viewBox.appendChild(r),this.viewBoxImage=r,i){var o=i;"string"==typeof i?o=t.ownerDocument.querySelectorAll(i):i.querySelector&&(o=[i]),this.previews=o,I(o,(function(t){var i=document.createElement("img");tt(t,b,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),e&&(i.crossOrigin=e),i.src=n,i.alt=a,i.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(i)}))}},resetPreview:function(){I(this.previews,(function(t){var e=J(t,b);G(t,{width:e.width,height:e.height}),t.innerHTML=e.html,function(t,e){if(H(t[e]))try{delete t[e]}catch(i){t[e]=void 0}else if(t.dataset)try{delete t.dataset[e]}catch(i){t.dataset[e]=void 0}else t.removeAttribute("data-".concat(V(e)))}(t,b)}))},preview:function(){var t=this.imageData,e=this.canvasData,i=this.cropBoxData,n=i.width,a=i.height,r=t.width,o=t.height,s=i.left-e.left-t.left,h=i.top-e.top-t.top;this.cropped&&!this.disabled&&(G(this.viewBoxImage,_({width:r,height:o},pt(_({translateX:-s,translateY:-h},t)))),I(this.previews,(function(e){var i=J(e,b),c=i.width,l=i.height,p=c,d=l,u=1;n&&(d=a*(u=c/n)),a&&d>l&&(p=n*(u=l/a),d=l),G(e,{width:p,height:d}),G(e.getElementsByTagName("img")[0],_({width:r*u,height:o*u},pt(_({translateX:-s*u,translateY:-h*u},t))))})))}},bt={bind:function(){var t=this.element,e=this.options,i=this.cropper;P(e.cropstart)&&at(t,"cropstart",e.cropstart),P(e.cropmove)&&at(t,"cropmove",e.cropmove),P(e.cropend)&&at(t,"cropend",e.cropend),P(e.crop)&&at(t,"crop",e.crop),P(e.zoom)&&at(t,"zoom",e.zoom),at(i,D,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&at(i,"wheel",this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&at(i,"dblclick",this.onDblclick=this.dblclick.bind(this)),at(t.ownerDocument,O,this.onCropMove=this.cropMove.bind(this)),at(t.ownerDocument,k,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&at(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;P(e.cropstart)&&nt(t,"cropstart",e.cropstart),P(e.cropmove)&&nt(t,"cropmove",e.cropmove),P(e.cropend)&&nt(t,"cropend",e.cropend),P(e.crop)&&nt(t,"crop",e.crop),P(e.zoom)&&nt(t,"zoom",e.zoom),nt(i,D,this.onCropStart),e.zoomable&&e.zoomOnWheel&&nt(i,"wheel",this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&nt(i,"dblclick",this.onDblclick),nt(t.ownerDocument,O,this.onCropMove),nt(t.ownerDocument,k,this.onCropEnd),e.responsive&&nt(window,"resize",this.onResize)}},xt={resize:function(){if(!this.disabled){var t,e,i=this.options,n=this.container,a=this.containerData,r=n.offsetWidth/a.width;1===r&&n.offsetHeight===a.height||(i.restore&&(t=this.getCanvasData(),e=this.getCropBoxData()),this.render(),i.restore&&(this.setCanvasData(I(t,(function(e,i){t[i]=e*r}))),this.setCropBoxData(I(e,(function(t,i){e[i]=t*r})))))}},dblclick:function(){var t,e;this.disabled||"none"===this.options.dragMode||this.setDragMode((t=this.dragBox,e=d,(t.classList?t.classList.contains(e):t.className.indexOf(e)>-1)?"move":"crop"))},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,n=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout((function(){e.wheeling=!1}),50),t.deltaY?n=t.deltaY>0?1:-1:t.wheelDelta?n=-t.wheelDelta/120:t.detail&&(n=t.detail>0?1:-1),this.zoom(-n*i,t)))},cropStart:function(t){var e=t.buttons,i=t.button;if(!(this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(R(e)&&1!==e||R(i)&&0!==i||t.ctrlKey))){var n,a=this.options,r=this.pointers;t.changedTouches?I(t.changedTouches,(function(t){r[t.identifier]=dt(t)})):r[t.pointerId||0]=dt(t),n=Object.keys(r).length>1&&a.zoomable&&a.zoomOnTouch?"zoom":J(t.target,y),E.test(n)&&!1!==rt(this.element,"cropstart",{originalEvent:t,action:n})&&(t.preventDefault(),this.action=n,this.cropping=!1,"crop"===n&&(this.cropping=!0,$(this.dragBox,v)))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var i=this.pointers;t.preventDefault(),!1!==rt(this.element,"cropmove",{originalEvent:t,action:e})&&(t.changedTouches?I(t.changedTouches,(function(t){_(i[t.identifier]||{},dt(t,!0))})):_(i[t.pointerId||0]||{},dt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,i=this.pointers;t.changedTouches?I(t.changedTouches,(function(t){delete i[t.identifier]})):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,K(this.dragBox,v,this.cropped&&this.options.modal)),rt(this.element,"cropend",{originalEvent:t,action:e}))}}},Mt={change:function(t){var e,i=this.options,n=this.canvasData,a=this.containerData,o=this.cropBoxData,s=this.pointers,h=this.action,c=i.aspectRatio,l=o.left,p=o.top,d=o.width,u=o.height,m=l+d,g=p+u,v=0,w=0,y=a.width,b=a.height,x=!0;!c&&t.shiftKey&&(c=d&&u?d/u:1),this.limited&&(v=o.minLeft,w=o.minTop,y=v+Math.min(a.width,n.width,n.left+n.width),b=w+Math.min(a.height,n.height,n.top+n.height));var M=s[Object.keys(s)[0]],C={x:M.endX-M.startX,y:M.endY-M.startY},D=function(t){switch(t){case"e":m+C.x>y&&(C.x=y-m);break;case"w":l+C.x<v&&(C.x=v-l);break;case"n":p+C.y<w&&(C.y=w-p);break;case"s":g+C.y>b&&(C.y=b-g)}};switch(h){case"all":l+=C.x,p+=C.y;break;case"e":if(C.x>=0&&(m>=y||c&&(p<=w||g>=b))){x=!1;break}D("e"),(d+=C.x)<0&&(h="w",l-=d=-d),c&&(u=d/c,p+=(o.height-u)/2);break;case"n":if(C.y<=0&&(p<=w||c&&(l<=v||m>=y))){x=!1;break}D("n"),u-=C.y,p+=C.y,u<0&&(h="s",p-=u=-u),c&&(d=u*c,l+=(o.width-d)/2);break;case"w":if(C.x<=0&&(l<=v||c&&(p<=w||g>=b))){x=!1;break}D("w"),d-=C.x,l+=C.x,d<0&&(h="e",l-=d=-d),c&&(u=d/c,p+=(o.height-u)/2);break;case"s":if(C.y>=0&&(g>=b||c&&(l<=v||m>=y))){x=!1;break}D("s"),(u+=C.y)<0&&(h="n",p-=u=-u),c&&(d=u*c,l+=(o.width-d)/2);break;case"ne":if(c){if(C.y<=0&&(p<=w||m>=y)){x=!1;break}D("n"),u-=C.y,p+=C.y,d=u*c}else D("n"),D("e"),C.x>=0?m<y?d+=C.x:C.y<=0&&p<=w&&(x=!1):d+=C.x,C.y<=0?p>w&&(u-=C.y,p+=C.y):(u-=C.y,p+=C.y);d<0&&u<0?(h="sw",p-=u=-u,l-=d=-d):d<0?(h="nw",l-=d=-d):u<0&&(h="se",p-=u=-u);break;case"nw":if(c){if(C.y<=0&&(p<=w||l<=v)){x=!1;break}D("n"),u-=C.y,p+=C.y,d=u*c,l+=o.width-d}else D("n"),D("w"),C.x<=0?l>v?(d-=C.x,l+=C.x):C.y<=0&&p<=w&&(x=!1):(d-=C.x,l+=C.x),C.y<=0?p>w&&(u-=C.y,p+=C.y):(u-=C.y,p+=C.y);d<0&&u<0?(h="se",p-=u=-u,l-=d=-d):d<0?(h="ne",l-=d=-d):u<0&&(h="sw",p-=u=-u);break;case"sw":if(c){if(C.x<=0&&(l<=v||g>=b)){x=!1;break}D("w"),d-=C.x,l+=C.x,u=d/c}else D("s"),D("w"),C.x<=0?l>v?(d-=C.x,l+=C.x):C.y>=0&&g>=b&&(x=!1):(d-=C.x,l+=C.x),C.y>=0?g<b&&(u+=C.y):u+=C.y;d<0&&u<0?(h="ne",p-=u=-u,l-=d=-d):d<0?(h="se",l-=d=-d):u<0&&(h="nw",p-=u=-u);break;case"se":if(c){if(C.x>=0&&(m>=y||g>=b)){x=!1;break}D("e"),u=(d+=C.x)/c}else D("s"),D("e"),C.x>=0?m<y?d+=C.x:C.y>=0&&g>=b&&(x=!1):d+=C.x,C.y>=0?g<b&&(u+=C.y):u+=C.y;d<0&&u<0?(h="nw",p-=u=-u,l-=d=-d):d<0?(h="sw",l-=d=-d):u<0&&(h="ne",p-=u=-u);break;case"move":this.move(C.x,C.y),x=!1;break;case"zoom":this.zoom(function(t){var e=r({},t),i=[];return I(t,(function(t,n){delete e[n],I(e,(function(e){var n=Math.abs(t.startX-e.startX),a=Math.abs(t.startY-e.startY),r=Math.abs(t.endX-e.endX),o=Math.abs(t.endY-e.endY),s=Math.sqrt(n*n+a*a),h=(Math.sqrt(r*r+o*o)-s)/s;i.push(h)}))})),i.sort((function(t,e){return Math.abs(t)<Math.abs(e)})),i[0]}(s),t),x=!1;break;case"crop":if(!C.x||!C.y){x=!1;break}e=ot(this.cropper),l=M.startX-e.left,p=M.startY-e.top,d=o.minWidth,u=o.minHeight,C.x>0?h=C.y>0?"se":"ne":C.x<0&&(l-=d,h=C.y>0?"sw":"nw"),C.y<0&&(p-=u),this.cropped||(Q(this.cropBox,f),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}x&&(o.width=d,o.height=u,o.left=l,o.top=p,this.action=h,this.renderCropBox()),I(s,(function(t){t.startX=t.endX,t.startY=t.endY}))}},Ct={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&$(this.dragBox,v),Q(this.cropBox,f),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=_({},this.initialImageData),this.canvasData=_({},this.initialCanvasData),this.cropBoxData=_({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(_(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),Q(this.dragBox,v),$(this.cropBox,f)),this},replace:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),e?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,I(this.previews,(function(e){e.getElementsByTagName("img")[0].src=t})))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,Q(this.cropper,u)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,$(this.cropper,u)),this},destroy:function(){var t=this.element;return t.cropper?(t.cropper=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,n=i.left,a=i.top;return this.moveTo(z(t)?t:n+Number(t),z(e)?e:a+Number(e))},moveTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,n=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(R(t)&&(i.left=t,n=!0),R(e)&&(i.top=e,n=!0),n&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(i.width*t/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var n=this.options,a=this.canvasData,r=a.width,o=a.height,s=a.naturalWidth,h=a.naturalHeight;if((t=Number(t))>=0&&this.ready&&!this.disabled&&n.zoomable){var c=s*t,l=h*t;if(!1===rt(this.element,"zoom",{ratio:t,oldRatio:r/s,originalEvent:i}))return this;if(i){var p=this.pointers,d=ot(this.cropper),u=p&&Object.keys(p).length?function(t){var e=0,i=0,n=0;return I(t,(function(t){var a=t.startX,r=t.startY;e+=a,i+=r,n+=1})),{pageX:e/=n,pageY:i/=n}}(p):{pageX:i.pageX,pageY:i.pageY};a.left-=(c-r)*((u.pageX-d.left-a.left)/r),a.top-=(l-o)*((u.pageY-d.top-a.top)/o)}else Y(e)&&R(e.x)&&R(e.y)?(a.left-=(c-r)*((e.x-a.left)/r),a.top-=(l-o)*((e.y-a.top)/o)):(a.left-=(c-r)/2,a.top-=(l-o)/2);a.width=c,a.height=l,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return R(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,R(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(R(e)?e:1,t)},scale:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.imageData,n=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(R(t)&&(i.scaleX=t,n=!0),R(e)&&(i.scaleY=e,n=!0),n&&this.renderCanvas(!0,!0)),this},getData:function(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.options,n=this.imageData,a=this.canvasData,r=this.cropBoxData;if(this.ready&&this.cropped){t={x:r.left-a.left,y:r.top-a.top,width:r.width,height:r.height};var o=n.width/n.naturalWidth;if(I(t,(function(e,i){t[i]=e/o})),e){var s=Math.round(t.y+t.height),h=Math.round(t.x+t.width);t.x=Math.round(t.x),t.y=Math.round(t.y),t.width=h-t.x,t.height=s-t.y}}else t={x:0,y:0,width:0,height:0};return i.rotatable&&(t.rotate=n.rotate||0),i.scalable&&(t.scaleX=n.scaleX||1,t.scaleY=n.scaleY||1),t},setData:function(t){var e=this.options,i=this.imageData,n=this.canvasData,a={};if(this.ready&&!this.disabled&&Y(t)){var r=!1;e.rotatable&&R(t.rotate)&&t.rotate!==i.rotate&&(i.rotate=t.rotate,r=!0),e.scalable&&(R(t.scaleX)&&t.scaleX!==i.scaleX&&(i.scaleX=t.scaleX,r=!0),R(t.scaleY)&&t.scaleY!==i.scaleY&&(i.scaleY=t.scaleY,r=!0)),r&&this.renderCanvas(!0,!0);var o=i.width/i.naturalWidth;R(t.x)&&(a.left=t.x*o+n.left),R(t.y)&&(a.top=t.y*o+n.top),R(t.width)&&(a.width=t.width*o),R(t.height)&&(a.height=t.height*o),this.setCropBoxData(a)}return this},getContainerData:function(){return this.ready?_({},this.containerData):{}},getImageData:function(){return this.sized?_({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,e={};return this.ready&&I(["left","top","width","height","naturalWidth","naturalHeight"],(function(i){e[i]=t[i]})),e},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&Y(t)&&(R(t.left)&&(e.left=t.left),R(t.top)&&(e.top=t.top),R(t.width)?(e.width=t.width,e.height=t.width/i):R(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,e=this.cropBoxData;return this.ready&&this.cropped&&(t={left:e.left,top:e.top,width:e.width,height:e.height}),t||{}},setCropBoxData:function(t){var e,i,n=this.cropBoxData,a=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&Y(t)&&(R(t.left)&&(n.left=t.left),R(t.top)&&(n.top=t.top),R(t.width)&&t.width!==n.width&&(e=!0,n.width=t.width),R(t.height)&&t.height!==n.height&&(i=!0,n.height=t.height),a&&(e?n.height=n.width/a:i&&(n.width=n.height*a)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e=this.canvasData,i=ft(this.image,this.imageData,e,t);if(!this.cropped)return i;var n=this.getData(),a=n.x,r=n.y,s=n.width,h=n.height,c=i.width/Math.floor(e.naturalWidth);1!==c&&(a*=c,r*=c,s*=c,h*=c);var l=s/h,p=ut({aspectRatio:l,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),d=ut({aspectRatio:l,width:t.minWidth||0,height:t.minHeight||0},"cover"),u=ut({aspectRatio:l,width:t.width||(1!==c?i.width:s),height:t.height||(1!==c?i.height:h)}),f=u.width,m=u.height;f=Math.min(p.width,Math.max(d.width,f)),m=Math.min(p.height,Math.max(d.height,m));var g=document.createElement("canvas"),v=g.getContext("2d");g.width=q(f),g.height=q(m),v.fillStyle=t.fillColor||"transparent",v.fillRect(0,0,f,m);var w=t.imageSmoothingEnabled,y=void 0===w||w,b=t.imageSmoothingQuality;v.imageSmoothingEnabled=y,b&&(v.imageSmoothingQuality=b);var x,M,C,D,O,k,E=i.width,L=i.height,B=a,T=r;B<=-s||B>E?(B=0,x=0,C=0,O=0):B<=0?(C=-B,B=0,O=x=Math.min(E,s+B)):B<=E&&(C=0,O=x=Math.min(s,E-B)),x<=0||T<=-h||T>L?(T=0,M=0,D=0,k=0):T<=0?(D=-T,T=0,k=M=Math.min(L,h+T)):T<=L&&(D=0,k=M=Math.min(h,L-T));var N=[B,T,x,M];if(O>0&&k>0){var j=f/s;N.push(C*j,D*j,O*j,k*j)}return v.drawImage.apply(v,[i].concat(o(N.map((function(t){return Math.floor(q(t))}))))),g},setAspectRatio:function(t){var e=this.options;return this.disabled||z(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,i=this.dragBox,n=this.face;if(this.ready&&!this.disabled){var a="crop"===t,r=e.movable&&"move"===t;t=a||r?t:"none",e.dragMode=t,tt(i,y,t),K(i,d,a),K(i,w,r),e.cropBoxMovable||(tt(n,y,t),K(n,d,a),K(n,w,r))}return this}},Dt=c.Cropper,Ot=function(){function t(i){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e(this,t),!i||!T.test(i.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=i,this.options=_({},N,Y(n)&&n),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}var n,a,r;return n=t,r=[{key:"noConflict",value:function(){return window.Cropper=Dt,t}},{key:"setDefaults",value:function(t){_(N,Y(t)&&t)}}],(a=[{key:"init",value:function(){var t,e=this.element,i=e.tagName.toLowerCase();if(!e.cropper){if(e.cropper=this,"img"===i){if(this.isImg=!0,t=e.getAttribute("src")||"",this.originalUrl=t,!t)return;t=e.src}else"canvas"===i&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e=this;if(t){this.url=t,this.imageData={};var i=this.element,n=this.options;if(n.rotatable||n.scalable||(n.checkOrientation=!1),n.checkOrientation&&window.ArrayBuffer)if(L.test(t))B.test(t)?this.read((a=t.replace(gt,""),r=atob(a),o=new ArrayBuffer(r.length),I(s=new Uint8Array(o),(function(t,e){s[e]=r.charCodeAt(e)})),o)):this.clone();else{var a,r,o,s,h=new XMLHttpRequest,c=this.clone.bind(this);this.reloading=!0,this.xhr=h,h.onabort=c,h.onerror=c,h.ontimeout=c,h.onprogress=function(){"image/jpeg"!==h.getResponseHeader("content-type")&&h.abort()},h.onload=function(){e.read(h.response)},h.onloadend=function(){e.reloading=!1,e.xhr=null},n.checkCrossOrigin&&ct(t)&&i.crossOrigin&&(t=lt(t)),h.open("GET",t),h.responseType="arraybuffer",h.withCredentials="use-credentials"===i.crossOrigin,h.send()}else this.clone()}}},{key:"read",value:function(t){var e=this.options,i=this.imageData,n=vt(t),a=0,r=1,o=1;if(n>1){this.url=function(t,e){for(var i=[],n=new Uint8Array(t);n.length>0;)i.push(mt.apply(null,A(n.subarray(0,8192)))),n=n.subarray(8192);return"data:".concat(e,";base64,").concat(btoa(i.join("")))}(t,"image/jpeg");var s=function(t){var e=0,i=1,n=1;switch(t){case 2:i=-1;break;case 3:e=-180;break;case 4:n=-1;break;case 5:e=90,n=-1;break;case 6:e=90;break;case 7:e=90,i=-1;break;case 8:e=-90}return{rotate:e,scaleX:i,scaleY:n}}(n);a=s.rotate,r=s.scaleX,o=s.scaleY}e.rotatable&&(i.rotate=a),e.scalable&&(i.scaleX=r,i.scaleY=o),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=t.crossOrigin,n=e;this.options.checkCrossOrigin&&ct(e)&&(i||(i="anonymous"),n=lt(e)),this.crossOrigin=i,this.crossOriginUrl=n;var a=document.createElement("img");i&&(a.crossOrigin=i),a.src=n||e,a.alt=t.alt||"The image to crop",this.image=a,a.onload=this.start.bind(this),a.onerror=this.stop.bind(this),$(a,m),t.parentNode.insertBefore(a,t.nextSibling)}},{key:"start",value:function(){var t=this,e=this.image;e.onload=null,e.onerror=null,this.sizing=!0;var i=c.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(c.navigator.userAgent),n=function(e,i){_(t.imageData,{naturalWidth:e,naturalHeight:i,aspectRatio:e/i}),t.sizing=!1,t.sized=!0,t.build()};if(!e.naturalWidth||i){var a=document.createElement("img"),r=document.body||document.documentElement;this.sizingImage=a,a.onload=function(){n(a.width,a.height),i||r.removeChild(a)},a.src=e.src,i||(a.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",r.appendChild(a))}else n(e.naturalWidth,e.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,e=this.options,i=this.image,n=t.parentNode,a=document.createElement("div");a.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';var r=a.querySelector(".".concat("cropper","-container")),o=r.querySelector(".".concat("cropper","-canvas")),s=r.querySelector(".".concat("cropper","-drag-box")),h=r.querySelector(".".concat("cropper","-crop-box")),c=h.querySelector(".".concat("cropper","-face"));this.container=n,this.cropper=r,this.canvas=o,this.dragBox=s,this.cropBox=h,this.viewBox=r.querySelector(".".concat("cropper","-view-box")),this.face=c,o.appendChild(i),$(t,f),n.insertBefore(r,t.nextSibling),this.isImg||Q(i,m),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,$(h,f),e.guides||$(h.getElementsByClassName("".concat("cropper","-dashed")),f),e.center||$(h.getElementsByClassName("".concat("cropper","-center")),f),e.background&&$(r,"".concat("cropper","-bg")),e.highlight||$(c,g),e.cropBoxMovable&&($(c,w),tt(c,y,"all")),e.cropBoxResizable||($(h.getElementsByClassName("".concat("cropper","-line")),f),$(h.getElementsByClassName("".concat("cropper","-point")),f)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),P(e.ready)&&at(t,"ready",e.ready,{once:!0}),rt(t,"ready")}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),Q(this.element,f))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}])&&i(n.prototype,a),r&&i(n,r),t}();return _(Ot.prototype,wt,yt,bt,xt,Mt,Ct),Ot}()},function(t,e,i){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),a=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,r=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=i(8),a)n.regeneratorRuntime=r;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var i=Object.prototype,n=i.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",h="object"==typeof t,c=e.regeneratorRuntime;if(c)h&&(t.exports=c);else{(c=e.regeneratorRuntime=h?t.exports:{}).wrap=m;var l={},p={};p[r]=function(){return this};var d=Object.getPrototypeOf,u=d&&d(d(k([])));u&&u!==i&&n.call(u,r)&&(p=u);var f=y.prototype=v.prototype=Object.create(p);w.prototype=f.constructor=y,y.constructor=w,y[s]=w.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(f),t},c.awrap=function(t){return{__await:t}},b(x.prototype),x.prototype[o]=function(){return this},c.AsyncIterator=x,c.async=function(t,e,i,n){var a=new x(m(t,e,i,n));return c.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(f),f[s]="Generator",f[r]=function(){return this},f.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){for(;e.length;){var n=e.pop();if(n in t)return i.value=n,i.done=!1,i}return i.done=!0,i}},c.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(D),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,n){return o.type="throw",o.arg=t,e.next=i,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a],o=r.completion;if("root"===r.tryLoc)return i("end");if(r.tryLoc<=this.prev){var s=n.call(r,"catchLoc"),h=n.call(r,"finallyLoc");if(s&&h){if(this.prev<r.catchLoc)return i(r.catchLoc,!0);if(this.prev<r.finallyLoc)return i(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return i(r.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return i(r.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,l):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),D(i),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var a=n.arg;D(i)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:k(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=void 0),l}}}function m(t,e,i,n){var a=e&&e.prototype instanceof v?e:v,r=Object.create(a.prototype),o=new O(n||[]);return r._invoke=function(t,e,i){var n="suspendedStart";return function(a,r){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw r;return E()}for(i.method=a,i.arg=r;;){var o=i.delegate;if(o){var s=M(o,i);if(s){if(s===l)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===n)throw n="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n="executing";var h=g(t,e,i);if("normal"===h.type){if(n=i.done?"completed":"suspendedYield",h.arg===l)continue;return{value:h.arg,done:i.done}}"throw"===h.type&&(n="completed",i.method="throw",i.arg=h.arg)}}}(t,i,o),r}function g(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}function v(){}function w(){}function y(){}function b(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function x(t){var e;this._invoke=function(i,a){function r(){return new Promise((function(e,r){!function e(i,a,r,o){var s=g(t[i],t,a);if("throw"!==s.type){var h=s.arg,c=h.value;return c&&"object"==typeof c&&n.call(c,"__await")?Promise.resolve(c.__await).then((function(t){e("next",t,r,o)}),(function(t){e("throw",t,r,o)})):Promise.resolve(c).then((function(t){h.value=t,r(h)}),(function(t){return e("throw",t,r,o)}))}o(s.arg)}(i,a,e,r)}))}return e=e?e.then(r,r):r()}}function M(t,e){var i=t.iterator[e.method];if(void 0===i){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,M(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=g(i,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function k(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function e(){for(;++i<t.length;)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:E}}function E(){return{value:void 0,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(t,e,i){"use strict";i.r(e);var n=i(0),a=i(1),r=i.n(a),o=i(2),s=i.n(o);function h(t,e,i,n,a,r,o){try{var s=t[r](o),h=s.value}catch(t){return void i(t)}s.done?e(h):Promise.resolve(h).then(n,a)}var c=i(3),l=i.n(c),p=i(4),d=i.n(p),u=i(5),f=i.n(u),g=i(6),v=i.n(g),w=function(t){var e,i;function n(){return t.apply(this,arguments)||this}i=t,(e=n).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i;var a=n.prototype;return a.className=function(){return"FofProfileImageCropModal Modal--small"},a.title=function(){return app.translator.trans("core.forum.user.avatar_upload_button")},a.config=function(t){var e=this;if(!t){var i=new FileReader;i.addEventListener("load",(function(){e.image=i.result,m.lazyRedraw()})),i.readAsDataURL(this.props.file)}},a.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Image-container"},!this.ready&&f.a.component({size:"tiny"}),this.image&&m("img",{src:this.image,config:this.loadPicker.bind(this)})),m("br",null),d.a.component({className:"Button Button--primary",loading:this.loading,onclick:this.upload.bind(this),children:app.translator.trans("core.forum.edit_user.submit_button")}))},a.loadPicker=function(t,e){var i=this;e||setTimeout((function(){i.ready=!0,i.cropper=new v.a(t,{aspectRatio:1,viewMode:1,guides:!1,background:!1,responsive:!0}),m.lazyRedraw()}),500)},a.upload=function(){var t,e=(t=s.a.mark((function t(){var e,i,n,a,r,o,h,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.cropper){t.next=2;break}return t.abrupt("return");case 2:if(this.loading=!0,!(e=this.cropper.getCroppedCanvas()).toBlob){t.next=9;break}return t.next=7,new Promise((function(t){return e.toBlob(t)})).then((function(t){return i=t}));case 7:t.next=15;break;case 9:for(n=e&&e.toDataURL(this.props.file.type),a=n.split(","),r=atob(a[1]),o=r.length,h=new Uint8Array(o);o--;)h[o]=r.charCodeAt(o);i=h;case 15:c=new File([i],this.props.file.name,{type:this.props.file.type}),this.props.upload(c);case 17:case"end":return t.stop()}}),t,this)})),function(){var e=this,i=arguments;return new Promise((function(n,a){var r=t.apply(e,i);function o(t){h(r,n,a,o,s,"next",t)}function s(t){h(r,n,a,o,s,"throw",t)}o(void 0)}))});return function(){return e.apply(this,arguments)}}(),n}(l.a);app.initializers.add("fof/profile-image-crop",(function(){Object(n.override)(r.a.prototype,"upload",(function(t,e){if(!e||!window.FileReader)return t();this.loading||app.modal.show(new w({file:e,upload:t}))})),Object(n.extend)(r.a.prototype,"success",(function(){app.modal&&app.modal.component instanceof w&&app.modal.close()})),Object(n.extend)(r.a.prototype,"failure",(function(t,e){app.modal&&app.modal.component instanceof w&&(app.modal.component.loading=!1,app.modal.component.onerror(e))}))}))}]);
;

flarum.extensions['fof-profile-image-crop']=module.exports;

var module={};

module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/DiscussionList"]},function(e,t){e.exports=flarum.core.compat["components/IndexPage"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionPage"]},function(e,t){e.exports=flarum.core.compat["components/Button"]},,,function(e,t,n){"use strict";n.r(t);var o=n(1),s=n(0),r=n.n(s),i=n(2),u=n.n(i),a=n(4),c=n.n(a),d=n(3),p=n.n(d),f=n(5),l=n.n(f);r.a.initializers.add("flarum-pusher",(function(){var e=m.deferred();$.getScript("//cdn.jsdelivr.net/npm/pusher-js@3.0.0/dist/pusher.min.js",(function(){var t=new Pusher(r.a.forum.attribute("pusherKey"),{authEndpoint:r.a.forum.attribute("apiUrl")+"/pusher/auth",cluster:r.a.forum.attribute("pusherCluster"),auth:{headers:{"X-CSRF-Token":r.a.session.csrfToken}}});e.resolve({main:t.subscribe("public"),user:r.a.session.user?t.subscribe("private-user"+r.a.session.user.id()):null})})),r.a.pusher=e.promise,r.a.pushedUpdates=[],Object(o.extend)(u.a.prototype,"config",(function(e,t,n){var s=this;t||r.a.pusher.then((function(e){e.main.bind("newPost",(function(e){var t=s.props.params;if(!t.q&&!t.sort&&!t.filter){if(t.tags){var n=r.a.store.getBy("tags","slug",t.tags);if(-1===e.tagIds.indexOf(n.id()))return}var o=String(e.discussionId);r.a.current.discussion&&o===r.a.current.discussion.id()||-1!==r.a.pushedUpdates.indexOf(o)||(r.a.pushedUpdates.push(o),r.a.current instanceof p.a&&r.a.setTitleCount(r.a.pushedUpdates.length),m.redraw())}})),Object(o.extend)(n,"onunload",(function(){return e.main.unbind("newPost")}))}))})),Object(o.extend)(u.a.prototype,"view",(function(e){var t=this;if(r.a.pushedUpdates){var n=r.a.pushedUpdates.length;n&&e.children.unshift(l.a.component({className:"Button Button--block DiscussionList-update",onclick:function(){t.refresh(!1).then((function(){t.loadingUpdated=!1,r.a.pushedUpdates=[],r.a.setTitleCount(0),m.redraw()})),t.loadingUpdated=!0},loading:this.loadingUpdated,children:r.a.translator.transChoice("flarum-pusher.forum.discussion_list.show_updates_text",n,{count:n})}))}})),Object(o.extend)(u.a.prototype,"addDiscussion",(function(e,t){var n=r.a.pushedUpdates.indexOf(t.id());-1!==n&&r.a.pushedUpdates.splice(n,1),r.a.current instanceof p.a&&r.a.setTitleCount(r.a.pushedUpdates.length),m.redraw()})),Object(o.extend)(c.a.prototype,"config",(function(e,t,n){var s=this;t||r.a.pusher.then((function(e){e.main.bind("newPost",(function(e){var t=String(e.discussionId);if(s.discussion&&s.discussion.id()===t&&s.stream){var n=s.discussion.commentCount();r.a.store.find("discussions",s.discussion.id()).then((function(){s.stream.update(),document.hasFocus()||(r.a.setTitleCount(Math.max(0,s.discussion.commentCount()-n)),$(window).one("focus",(function(){return r.a.setTitleCount(0)})))}))}})),Object(o.extend)(n,"onunload",(function(){return e.main.unbind("newPost")}))}))})),Object(o.extend)(p.a.prototype,"actionItems",(function(e){e.remove("refresh")})),r.a.pusher.then((function(e){e.user&&e.user.bind("notification",(function(){r.a.session.user.pushAttributes({unreadNotificationCount:r.a.session.user.unreadNotificationCount()+1,newNotificationCount:r.a.session.user.newNotificationCount()+1}),delete r.a.cache.notifications,m.redraw()}))}))}))}]);
;

flarum.extensions['flarum-pusher']=module.exports;

var module={};

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js":
/*!******************************************************************!*\
  !*** ./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
(function (window, document, $, undefined) {
  "use strict";

  window.console = window.console || {
    info: function (stuff) {}
  };

  // If there's no jQuery, fancyBox can't work
  // =========================================

  if (!$) {
    return;
  }

  // Check if fancyBox is already initialized
  // ========================================

  if ($.fn.fancybox) {
    console.info("fancyBox already initialized");

    return;
  }

  // Private default settings
  // ========================

  var defaults = {
    // Close existing modals
    // Set this to false if you do not need to stack multiple instances
    closeExisting: false,

    // Enable infinite gallery navigation
    loop: false,

    // Horizontal space between slides
    gutter: 50,

    // Enable keyboard navigation
    keyboard: true,

    // Should allow caption to overlap the content
    preventCaptionOverlap: true,

    // Should display navigation arrows at the screen edges
    arrows: true,

    // Should display counter at the top left corner
    infobar: true,

    // Should display close button (using `btnTpl.smallBtn` template) over the content
    // Can be true, false, "auto"
    // If "auto" - will be automatically enabled for "html", "inline" or "ajax" items
    smallBtn: "auto",

    // Should display toolbar (buttons at the top)
    // Can be true, false, "auto"
    // If "auto" - will be automatically hidden if "smallBtn" is enabled
    toolbar: "auto",

    // What buttons should appear in the top right corner.
    // Buttons will be created using templates from `btnTpl` option
    // and they will be placed into toolbar (class="fancybox-toolbar"` element)
    buttons: [
      "zoom",
      //"share",
      "slideShow",
      //"fullScreen",
      //"download",
      "thumbs",
      "close"
    ],

    // Detect "idle" time in seconds
    idleTime: 3,

    // Disable right-click and use simple image protection for images
    protect: false,

    // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
    modal: false,

    image: {
      // Wait for images to load before displaying
      //   true  - wait for image to load and then display;
      //   false - display thumbnail and load the full-sized image over top,
      //           requires predefined image dimensions (`data-width` and `data-height` attributes)
      preload: false
    },

    ajax: {
      // Object containing settings for ajax request
      settings: {
        // This helps to indicate that request comes from the modal
        // Feel free to change naming
        data: {
          fancybox: true
        }
      }
    },

    iframe: {
      // Iframe template
      tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',

      // Preload iframe before displaying it
      // This allows to calculate iframe content width and height
      // (note: Due to "Same Origin Policy", you can't get cross domain data).
      preload: true,

      // Custom CSS styling for iframe wrapping element
      // You can use this to set custom iframe dimensions
      css: {},

      // Iframe tag attributes
      attr: {
        scrolling: "auto"
      }
    },

    // For HTML5 video only
    video: {
      tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' +
        '<source src="{{src}}" type="{{format}}" />' +
        'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
        "</video>",
      format: "", // custom video format
      autoStart: true
    },

    // Default content type if cannot be detected automatically
    defaultType: "image",

    // Open/close animation type
    // Possible values:
    //   false            - disable
    //   "zoom"           - zoom images from/to thumbnail
    //   "fade"
    //   "zoom-in-out"
    //
    animationEffect: "zoom",

    // Duration in ms for open/close animation
    animationDuration: 366,

    // Should image change opacity while zooming
    // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
    zoomOpacity: "auto",

    // Transition effect between slides
    //
    // Possible values:
    //   false            - disable
    //   "fade'
    //   "slide'
    //   "circular'
    //   "tube'
    //   "zoom-in-out'
    //   "rotate'
    //
    transitionEffect: "fade",

    // Duration in ms for transition animation
    transitionDuration: 366,

    // Custom CSS class for slide element
    slideClass: "",

    // Custom CSS class for layout
    baseClass: "",

    // Base template for layout
    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg"></div>' +
      '<div class="fancybox-inner">' +
      '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
      '<div class="fancybox-toolbar">{{buttons}}</div>' +
      '<div class="fancybox-navigation">{{arrows}}</div>' +
      '<div class="fancybox-stage"></div>' +
      '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' +
      "</div>" +
      "</div>",

    // Loading indicator template
    spinnerTpl: '<div class="fancybox-loading"></div>',

    // Error message template
    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',

    btnTpl: {
      download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' +
        "</a>",

      zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' +
        "</button>",

      close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
        "</button>",

      // Arrows
      arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
        "</button>",

      arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
        "</button>",

      // This small close button will be appended to your html/inline/ajax content by default,
      // if "smallBtn" option is not set to false
      smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' +
        "</button>"
    },

    // Container is injected into this element
    parentEl: "body",

    // Hide browser vertical scrollbars; use at your own risk
    hideScrollbar: true,

    // Focus handling
    // ==============

    // Try to focus on the first focusable element after opening
    autoFocus: true,

    // Put focus back to active element after closing
    backFocus: true,

    // Do not let user to focus on element outside modal content
    trapFocus: true,

    // Module specific options
    // =======================

    fullScreen: {
      autoStart: false
    },

    // Set `touch: false` to disable panning/swiping
    touch: {
      vertical: true, // Allow to drag content vertically
      momentum: true // Continue movement after releasing mouse/touch when panning
    },

    // Hash value when initializing manually,
    // set `false` to disable hash change
    hash: null,

    // Customize or add new media types
    // Example:
    /*
      media : {
        youtube : {
          params : {
            autoplay : 0
          }
        }
      }
    */
    media: {},

    slideShow: {
      autoStart: false,
      speed: 3000
    },

    thumbs: {
      autoStart: false, // Display thumbnails on opening
      hideOnClose: true, // Hide thumbnail grid when closing animation starts
      parentEl: ".fancybox-container", // Container is injected into this element
      axis: "y" // Vertical (y) or horizontal (x) scrolling
    },

    // Use mousewheel to navigate gallery
    // If 'auto' - enabled for images only
    wheel: "auto",

    // Callbacks
    //==========

    // See Documentation/API/Events for more information
    // Example:
    /*
      afterShow: function( instance, current ) {
        console.info( 'Clicked element:' );
        console.info( current.opts.$orig );
      }
    */

    onInit: $.noop, // When instance has been initialized

    beforeLoad: $.noop, // Before the content of a slide is being loaded
    afterLoad: $.noop, // When the content of a slide is done loading

    beforeShow: $.noop, // Before open animation starts
    afterShow: $.noop, // When content is done loading and animating

    beforeClose: $.noop, // Before the instance attempts to close. Return false to cancel the close.
    afterClose: $.noop, // After instance has been closed

    onActivate: $.noop, // When instance is brought to front
    onDeactivate: $.noop, // When other instance has been activated

    // Interaction
    // ===========

    // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
    // each option can be string or method that returns value.
    //
    // Possible values:
    //   "close"           - close instance
    //   "next"            - move to next gallery item
    //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
    //   "toggleControls"  - show/hide controls
    //   "zoom"            - zoom image (if loaded)
    //   false             - do nothing

    // Clicked on the content
    clickContent: function (current, event) {
      return current.type === "image" ? "zoom" : false;
    },

    // Clicked on the slide
    clickSlide: "close",

    // Clicked on the background (backdrop) element;
    // if you have not changed the layout, then most likely you need to use `clickSlide` option
    clickOutside: "close",

    // Same as previous two, but for double click
    dblclickContent: false,
    dblclickSlide: false,
    dblclickOutside: false,

    // Custom options when mobile device is detected
    // =============================================

    mobile: {
      preventCaptionOverlap: false,
      idleTime: false,
      clickContent: function (current, event) {
        return current.type === "image" ? "toggleControls" : false;
      },
      clickSlide: function (current, event) {
        return current.type === "image" ? "toggleControls" : "close";
      },
      dblclickContent: function (current, event) {
        return current.type === "image" ? "zoom" : false;
      },
      dblclickSlide: function (current, event) {
        return current.type === "image" ? "zoom" : false;
      }
    },

    // Internationalization
    // ====================

    lang: "en",
    i18n: {
      en: {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
        PLAY_START: "Start slideshow",
        PLAY_STOP: "Pause slideshow",
        FULL_SCREEN: "Full screen",
        THUMBS: "Thumbnails",
        DOWNLOAD: "Download",
        SHARE: "Share",
        ZOOM: "Zoom"
      },
      de: {
        CLOSE: "Schlie&szlig;en",
        NEXT: "Weiter",
        PREV: "Zur&uuml;ck",
        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
        PLAY_START: "Diaschau starten",
        PLAY_STOP: "Diaschau beenden",
        FULL_SCREEN: "Vollbild",
        THUMBS: "Vorschaubilder",
        DOWNLOAD: "Herunterladen",
        SHARE: "Teilen",
        ZOOM: "Vergr&ouml;&szlig;ern"
      }
    }
  };

  // Few useful variables and methods
  // ================================

  var $W = $(window);
  var $D = $(document);

  var called = 0;

  // Check if an object is a jQuery object and not a native JavaScript object
  // ========================================================================
  var isQuery = function (obj) {
    return obj && obj.hasOwnProperty && obj instanceof $;
  };

  // Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
  // ===============================================================================
  var requestAFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      // if all else fails, use setTimeout
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  var cancelAFrame = (function () {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      function (id) {
        window.clearTimeout(id);
      }
    );
  })();

  // Detect the supported transition-end event property name
  // =======================================================
  var transitionEnd = (function () {
    var el = document.createElement("fakeelement"),
      t;

    var transitions = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }

    return "transitionend";
  })();

  // Force redraw on an element.
  // This helps in cases where the browser doesn't redraw an updated element properly
  // ================================================================================
  var forceRedraw = function ($el) {
    return $el && $el.length && $el[0].offsetHeight;
  };

  // Exclude array (`buttons`) options from deep merging
  // ===================================================
  var mergeOpts = function (opts1, opts2) {
    var rez = $.extend(true, {}, opts1, opts2);

    $.each(opts2, function (key, value) {
      if ($.isArray(value)) {
        rez[key] = value;
      }
    });

    return rez;
  };

  // How much of an element is visible in viewport
  // =============================================

  var inViewport = function (elem) {
    var elemCenter, rez;

    if (!elem || elem.ownerDocument !== document) {
      return false;
    }

    $(".fancybox-container").css("pointer-events", "none");

    elemCenter = {
      x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
      y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };

    rez = document.elementFromPoint(elemCenter.x, elemCenter.y) === elem;

    $(".fancybox-container").css("pointer-events", "");

    return rez;
  };

  // Class definition
  // ================

  var FancyBox = function (content, opts, index) {
    var self = this;

    self.opts = mergeOpts({
      index: index
    }, $.fancybox.defaults);

    if ($.isPlainObject(opts)) {
      self.opts = mergeOpts(self.opts, opts);
    }

    if ($.fancybox.isMobile) {
      self.opts = mergeOpts(self.opts, self.opts.mobile);
    }

    self.id = self.opts.id || ++called;

    self.currIndex = parseInt(self.opts.index, 10) || 0;
    self.prevIndex = null;

    self.prevPos = null;
    self.currPos = 0;

    self.firstRun = true;

    // All group items
    self.group = [];

    // Existing slides (for current, next and previous gallery items)
    self.slides = {};

    // Create group elements
    self.addContent(content);

    if (!self.group.length) {
      return;
    }

    self.init();
  };

  $.extend(FancyBox.prototype, {
    // Create DOM structure
    // ====================

    init: function () {
      var self = this,
        firstItem = self.group[self.currIndex],
        firstItemOpts = firstItem.opts,
        $container,
        buttonStr;

      if (firstItemOpts.closeExisting) {
        $.fancybox.close(true);
      }

      // Hide scrollbars
      // ===============

      $("body").addClass("fancybox-active");

      if (
        !$.fancybox.getInstance() &&
        firstItemOpts.hideScrollbar !== false &&
        !$.fancybox.isMobile &&
        document.body.scrollHeight > window.innerHeight
      ) {
        $("head").append(
          '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
          (window.innerWidth - document.documentElement.clientWidth) +
          "px;}</style>"
        );

        $("body").addClass("compensate-for-scrollbar");
      }

      // Build html markup and set references
      // ====================================

      // Build html code for buttons and insert into main template
      buttonStr = "";

      $.each(firstItemOpts.buttons, function (index, value) {
        buttonStr += firstItemOpts.btnTpl[value] || "";
      });

      // Create markup from base template, it will be initially hidden to
      // avoid unnecessary work like painting while initializing is not complete
      $container = $(
          self.translate(
            self,
            firstItemOpts.baseTpl
            .replace("{{buttons}}", buttonStr)
            .replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight)
          )
        )
        .attr("id", "fancybox-container-" + self.id)
        .addClass(firstItemOpts.baseClass)
        .data("FancyBox", self)
        .appendTo(firstItemOpts.parentEl);

      // Create object holding references to jQuery wrapped nodes
      self.$refs = {
        container: $container
      };

      ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (item) {
        self.$refs[item] = $container.find(".fancybox-" + item);
      });

      self.trigger("onInit");

      // Enable events, deactive previous instances
      self.activate();

      // Build slides, load and reveal content
      self.jumpTo(self.currIndex);
    },

    // Simple i18n support - replaces object keys found in template
    // with corresponding values
    // ============================================================

    translate: function (obj, str) {
      var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;

      return str.replace(/\{\{(\w+)\}\}/g, function (match, n) {
        return arr[n] === undefined ? match : arr[n];
      });
    },

    // Populate current group with fresh content
    // Check if each object has valid type and content
    // ===============================================

    addContent: function (content) {
      var self = this,
        items = $.makeArray(content),
        thumbs;

      $.each(items, function (i, item) {
        var obj = {},
          opts = {},
          $item,
          type,
          found,
          src,
          srcParts;

        // Step 1 - Make sure we have an object
        // ====================================

        if ($.isPlainObject(item)) {
          // We probably have manual usage here, something like
          // $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )

          obj = item;
          opts = item.opts || item;
        } else if ($.type(item) === "object" && $(item).length) {
          // Here we probably have jQuery collection returned by some selector
          $item = $(item);

          // Support attributes like `data-options='{"touch" : false}'` and `data-touch='false'`
          opts = $item.data() || {};
          opts = $.extend(true, {}, opts, opts.options);

          // Here we store clicked element
          opts.$orig = $item;

          obj.src = self.opts.src || opts.src || $item.attr("href");

          // Assume that simple syntax is used, for example:
          //   `$.fancybox.open( $("#test"), {} );`
          if (!obj.type && !obj.src) {
            obj.type = "inline";
            obj.src = item;
          }
        } else {
          // Assume we have a simple html code, for example:
          //   $.fancybox.open( '<div><h1>Hi!</h1></div>' );
          obj = {
            type: "html",
            src: item + ""
          };
        }

        // Each gallery object has full collection of options
        obj.opts = $.extend(true, {}, self.opts, opts);

        // Do not merge buttons array
        if ($.isArray(opts.buttons)) {
          obj.opts.buttons = opts.buttons;
        }

        if ($.fancybox.isMobile && obj.opts.mobile) {
          obj.opts = mergeOpts(obj.opts, obj.opts.mobile);
        }

        // Step 2 - Make sure we have content type, if not - try to guess
        // ==============================================================

        type = obj.type || obj.opts.type;
        src = obj.src || "";

        if (!type && src) {
          if ((found = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))) {
            type = "video";

            if (!obj.opts.video.format) {
              obj.opts.video.format = "video/" + (found[1] === "ogv" ? "ogg" : found[1]);
            }
          } else if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
            type = "image";
          } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
            type = "iframe";
            obj = $.extend(true, obj, {
              contentType: "pdf",
              opts: {
                iframe: {
                  preload: false
                }
              }
            });
          } else if (src.charAt(0) === "#") {
            type = "inline";
          }
        }

        if (type) {
          obj.type = type;
        } else {
          self.trigger("objectNeedsType", obj);
        }

        if (!obj.contentType) {
          obj.contentType = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1 ? "html" : obj.type;
        }

        // Step 3 - Some adjustments
        // =========================

        obj.index = self.group.length;

        if (obj.opts.smallBtn == "auto") {
          obj.opts.smallBtn = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1;
        }

        if (obj.opts.toolbar === "auto") {
          obj.opts.toolbar = !obj.opts.smallBtn;
        }

        // Find thumbnail image, check if exists and if is in the viewport
        obj.$thumb = obj.opts.$thumb || null;

        if (obj.opts.$trigger && obj.index === self.opts.index) {
          obj.$thumb = obj.opts.$trigger.find("img:first");

          if (obj.$thumb.length) {
            obj.opts.$orig = obj.opts.$trigger;
          }
        }

        if (!(obj.$thumb && obj.$thumb.length) && obj.opts.$orig) {
          obj.$thumb = obj.opts.$orig.find("img:first");
        }

        if (obj.$thumb && !obj.$thumb.length) {
          obj.$thumb = null;
        }

        obj.thumb = obj.opts.thumb || (obj.$thumb ? obj.$thumb[0].src : null);

        // "caption" is a "special" option, it can be used to customize caption per gallery item
        if ($.type(obj.opts.caption) === "function") {
          obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
        }

        if ($.type(self.opts.caption) === "function") {
          obj.opts.caption = self.opts.caption.apply(item, [self, obj]);
        }

        // Make sure we have caption as a string or jQuery object
        if (!(obj.opts.caption instanceof $)) {
          obj.opts.caption = obj.opts.caption === undefined ? "" : obj.opts.caption + "";
        }

        // Check if url contains "filter" used to filter the content
        // Example: "ajax.html #something"
        if (obj.type === "ajax") {
          srcParts = src.split(/\s+/, 2);

          if (srcParts.length > 1) {
            obj.src = srcParts.shift();

            obj.opts.filter = srcParts.shift();
          }
        }

        // Hide all buttons and disable interactivity for modal items
        if (obj.opts.modal) {
          obj.opts = $.extend(true, obj.opts, {
            trapFocus: true,
            // Remove buttons
            infobar: 0,
            toolbar: 0,

            smallBtn: 0,

            // Disable keyboard navigation
            keyboard: 0,

            // Disable some modules
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,

            // Disable click event handlers
            clickContent: false,
            clickSlide: false,
            clickOutside: false,
            dblclickContent: false,
            dblclickSlide: false,
            dblclickOutside: false
          });
        }

        // Step 4 - Add processed object to group
        // ======================================

        self.group.push(obj);
      });

      // Update controls if gallery is already opened
      if (Object.keys(self.slides).length) {
        self.updateControls();

        // Update thumbnails, if needed
        thumbs = self.Thumbs;

        if (thumbs && thumbs.isActive) {
          thumbs.create();

          thumbs.focus();
        }
      }
    },

    // Attach an event handler functions for:
    //   - navigation buttons
    //   - browser scrolling, resizing;
    //   - focusing
    //   - keyboard
    //   - detecting inactivity
    // ======================================

    addEvents: function () {
      var self = this;

      self.removeEvents();

      // Make navigation elements clickable
      // ==================================

      self.$refs.container
        .on("click.fb-close", "[data-fancybox-close]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          self.close(e);
        })
        .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          self.previous();
        })
        .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          self.next();
        })
        .on("click.fb", "[data-fancybox-zoom]", function (e) {
          // Click handler for zoom button
          self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
        });

      // Handle page scrolling and browser resizing
      // ==========================================

      $W.on("orientationchange.fb resize.fb", function (e) {
        if (e && e.originalEvent && e.originalEvent.type === "resize") {
          if (self.requestId) {
            cancelAFrame(self.requestId);
          }

          self.requestId = requestAFrame(function () {
            self.update(e);
          });
        } else {
          if (self.current && self.current.type === "iframe") {
            self.$refs.stage.hide();
          }

          setTimeout(
            function () {
              self.$refs.stage.show();

              self.update(e);
            },
            $.fancybox.isMobile ? 600 : 250
          );
        }
      });

      $D.on("keydown.fb", function (e) {
        var instance = $.fancybox ? $.fancybox.getInstance() : null,
          current = instance.current,
          keycode = e.keyCode || e.which;

        // Trap keyboard focus inside of the modal
        // =======================================

        if (keycode == 9) {
          if (current.opts.trapFocus) {
            self.focus(e);
          }

          return;
        }

        // Enable keyboard navigation
        // ==========================

        if (!current.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || $(e.target).is("input,textarea,video,audio,select")) {
          return;
        }

        // Backspace and Esc keys
        if (keycode === 8 || keycode === 27) {
          e.preventDefault();

          self.close(e);

          return;
        }

        // Left arrow and Up arrow
        if (keycode === 37 || keycode === 38) {
          e.preventDefault();

          self.previous();

          return;
        }

        // Righ arrow and Down arrow
        if (keycode === 39 || keycode === 40) {
          e.preventDefault();

          self.next();

          return;
        }

        self.trigger("afterKeydown", e, keycode);
      });

      // Hide controls after some inactivity period
      if (self.group[self.currIndex].opts.idleTime) {
        self.idleSecondsCounter = 0;

        $D.on(
          "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
          function (e) {
            self.idleSecondsCounter = 0;

            if (self.isIdle) {
              self.showControls();
            }

            self.isIdle = false;
          }
        );

        self.idleInterval = window.setInterval(function () {
          self.idleSecondsCounter++;

          if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime && !self.isDragging) {
            self.isIdle = true;
            self.idleSecondsCounter = 0;

            self.hideControls();
          }
        }, 1000);
      }
    },

    // Remove events added by the core
    // ===============================

    removeEvents: function () {
      var self = this;

      $W.off("orientationchange.fb resize.fb");
      $D.off("keydown.fb .fb-idle");

      this.$refs.container.off(".fb-close .fb-prev .fb-next");

      if (self.idleInterval) {
        window.clearInterval(self.idleInterval);

        self.idleInterval = null;
      }
    },

    // Change to previous gallery item
    // ===============================

    previous: function (duration) {
      return this.jumpTo(this.currPos - 1, duration);
    },

    // Change to next gallery item
    // ===========================

    next: function (duration) {
      return this.jumpTo(this.currPos + 1, duration);
    },

    // Switch to selected gallery item
    // ===============================

    jumpTo: function (pos, duration) {
      var self = this,
        groupLen = self.group.length,
        firstRun,
        isMoved,
        loop,
        current,
        previous,
        slidePos,
        stagePos,
        prop,
        diff;

      if (self.isDragging || self.isClosing || (self.isAnimating && self.firstRun)) {
        return;
      }

      // Should loop?
      pos = parseInt(pos, 10);
      loop = self.current ? self.current.opts.loop : self.opts.loop;

      if (!loop && (pos < 0 || pos >= groupLen)) {
        return false;
      }

      // Check if opening for the first time; this helps to speed things up
      firstRun = self.firstRun = !Object.keys(self.slides).length;

      // Create slides
      previous = self.current;

      self.prevIndex = self.currIndex;
      self.prevPos = self.currPos;

      current = self.createSlide(pos);

      if (groupLen > 1) {
        if (loop || current.index < groupLen - 1) {
          self.createSlide(pos + 1);
        }

        if (loop || current.index > 0) {
          self.createSlide(pos - 1);
        }
      }

      self.current = current;
      self.currIndex = current.index;
      self.currPos = current.pos;

      self.trigger("beforeShow", firstRun);

      self.updateControls();

      // Validate duration length
      current.forcedDuration = undefined;

      if ($.isNumeric(duration)) {
        current.forcedDuration = duration;
      } else {
        duration = current.opts[firstRun ? "animationDuration" : "transitionDuration"];
      }

      duration = parseInt(duration, 10);

      // Check if user has swiped the slides or if still animating
      isMoved = self.isMoved(current);

      // Make sure current slide is visible
      current.$slide.addClass("fancybox-slide--current");

      // Fresh start - reveal container, current slide and start loading content
      if (firstRun) {
        if (current.opts.animationEffect && duration) {
          self.$refs.container.css("transition-duration", duration + "ms");
        }

        self.$refs.container.addClass("fancybox-is-open").trigger("focus");

        // Attempt to load content into slide
        // This will later call `afterLoad` -> `revealContent`
        self.loadSlide(current);

        self.preload("image");

        return;
      }

      // Get actual slide/stage positions (before cleaning up)
      slidePos = $.fancybox.getTranslate(previous.$slide);
      stagePos = $.fancybox.getTranslate(self.$refs.stage);

      // Clean up all slides
      $.each(self.slides, function (index, slide) {
        $.fancybox.stop(slide.$slide, true);
      });

      if (previous.pos !== current.pos) {
        previous.isComplete = false;
      }

      previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");

      // If slides are out of place, then animate them to correct position
      if (isMoved) {
        // Calculate horizontal swipe distance
        diff = slidePos.left - (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);

        $.each(self.slides, function (index, slide) {
          slide.$slide.removeClass("fancybox-animated").removeClass(function (index, className) {
            return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
          });

          // Make sure that each slide is in equal distance
          // This is mostly needed for freshly added slides, because they are not yet positioned
          var leftPos = slide.pos * slidePos.width + slide.pos * slide.opts.gutter;

          $.fancybox.setTranslate(slide.$slide, {
            top: 0,
            left: leftPos - stagePos.left + diff
          });

          if (slide.pos !== current.pos) {
            slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next" : "previous"));
          }

          // Redraw to make sure that transition will start
          forceRedraw(slide.$slide);

          // Animate the slide
          $.fancybox.animate(
            slide.$slide, {
              top: 0,
              left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
            },
            duration,
            function () {
              slide.$slide
                .css({
                  transform: "",
                  opacity: ""
                })
                .removeClass("fancybox-slide--next fancybox-slide--previous");

              if (slide.pos === self.currPos) {
                self.complete();
              }
            }
          );
        });
      } else if (duration && current.opts.transitionEffect) {
        // Set transition effect for previously active slide
        prop = "fancybox-animated fancybox-fx-" + current.opts.transitionEffect;

        previous.$slide.addClass("fancybox-slide--" + (previous.pos > current.pos ? "next" : "previous"));

        $.fancybox.animate(
          previous.$slide,
          prop,
          duration,
          function () {
            previous.$slide.removeClass(prop).removeClass("fancybox-slide--next fancybox-slide--previous");
          },
          false
        );
      }

      if (current.isLoaded) {
        self.revealContent(current);
      } else {
        self.loadSlide(current);
      }

      self.preload("image");
    },

    // Create new "slide" element
    // These are gallery items  that are actually added to DOM
    // =======================================================

    createSlide: function (pos) {
      var self = this,
        $slide,
        index;

      index = pos % self.group.length;
      index = index < 0 ? self.group.length + index : index;

      if (!self.slides[pos] && self.group[index]) {
        $slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);

        self.slides[pos] = $.extend(true, {}, self.group[index], {
          pos: pos,
          $slide: $slide,
          isLoaded: false
        });

        self.updateSlide(self.slides[pos]);
      }

      return self.slides[pos];
    },

    // Scale image to the actual size of the image;
    // x and y values should be relative to the slide
    // ==============================================

    scaleToActual: function (x, y, duration) {
      var self = this,
        current = self.current,
        $content = current.$content,
        canvasWidth = $.fancybox.getTranslate(current.$slide).width,
        canvasHeight = $.fancybox.getTranslate(current.$slide).height,
        newImgWidth = current.width,
        newImgHeight = current.height,
        imgPos,
        posX,
        posY,
        scaleX,
        scaleY;

      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
        return;
      }

      self.isAnimating = true;

      $.fancybox.stop($content);

      x = x === undefined ? canvasWidth * 0.5 : x;
      y = y === undefined ? canvasHeight * 0.5 : y;

      imgPos = $.fancybox.getTranslate($content);

      imgPos.top -= $.fancybox.getTranslate(current.$slide).top;
      imgPos.left -= $.fancybox.getTranslate(current.$slide).left;

      scaleX = newImgWidth / imgPos.width;
      scaleY = newImgHeight / imgPos.height;

      // Get center position for original image
      posX = canvasWidth * 0.5 - newImgWidth * 0.5;
      posY = canvasHeight * 0.5 - newImgHeight * 0.5;

      // Make sure image does not move away from edges
      if (newImgWidth > canvasWidth) {
        posX = imgPos.left * scaleX - (x * scaleX - x);

        if (posX > 0) {
          posX = 0;
        }

        if (posX < canvasWidth - newImgWidth) {
          posX = canvasWidth - newImgWidth;
        }
      }

      if (newImgHeight > canvasHeight) {
        posY = imgPos.top * scaleY - (y * scaleY - y);

        if (posY > 0) {
          posY = 0;
        }

        if (posY < canvasHeight - newImgHeight) {
          posY = canvasHeight - newImgHeight;
        }
      }

      self.updateCursor(newImgWidth, newImgHeight);

      $.fancybox.animate(
        $content, {
          top: posY,
          left: posX,
          scaleX: scaleX,
          scaleY: scaleY
        },
        duration || 366,
        function () {
          self.isAnimating = false;
        }
      );

      // Stop slideshow
      if (self.SlideShow && self.SlideShow.isActive) {
        self.SlideShow.stop();
      }
    },

    // Scale image to fit inside parent element
    // ========================================

    scaleToFit: function (duration) {
      var self = this,
        current = self.current,
        $content = current.$content,
        end;

      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
        return;
      }

      self.isAnimating = true;

      $.fancybox.stop($content);

      end = self.getFitPos(current);

      self.updateCursor(end.width, end.height);

      $.fancybox.animate(
        $content, {
          top: end.top,
          left: end.left,
          scaleX: end.width / $content.width(),
          scaleY: end.height / $content.height()
        },
        duration || 366,
        function () {
          self.isAnimating = false;
        }
      );
    },

    // Calculate image size to fit inside viewport
    // ===========================================

    getFitPos: function (slide) {
      var self = this,
        $content = slide.$content,
        $slide = slide.$slide,
        width = slide.width || slide.opts.width,
        height = slide.height || slide.opts.height,
        maxWidth,
        maxHeight,
        minRatio,
        aspectRatio,
        rez = {};

      if (!slide.isLoaded || !$content || !$content.length) {
        return false;
      }

      maxWidth = $.fancybox.getTranslate(self.$refs.stage).width;
      maxHeight = $.fancybox.getTranslate(self.$refs.stage).height;

      maxWidth -=
        parseFloat($slide.css("paddingLeft")) +
        parseFloat($slide.css("paddingRight")) +
        parseFloat($content.css("marginLeft")) +
        parseFloat($content.css("marginRight"));

      maxHeight -=
        parseFloat($slide.css("paddingTop")) +
        parseFloat($slide.css("paddingBottom")) +
        parseFloat($content.css("marginTop")) +
        parseFloat($content.css("marginBottom"));

      if (!width || !height) {
        width = maxWidth;
        height = maxHeight;
      }

      minRatio = Math.min(1, maxWidth / width, maxHeight / height);

      width = minRatio * width;
      height = minRatio * height;

      // Adjust width/height to precisely fit into container
      if (width > maxWidth - 0.5) {
        width = maxWidth;
      }

      if (height > maxHeight - 0.5) {
        height = maxHeight;
      }

      if (slide.type === "image") {
        rez.top = Math.floor((maxHeight - height) * 0.5) + parseFloat($slide.css("paddingTop"));
        rez.left = Math.floor((maxWidth - width) * 0.5) + parseFloat($slide.css("paddingLeft"));
      } else if (slide.contentType === "video") {
        // Force aspect ratio for the video
        // "I say the whole world must learn of our peaceful ways… by force!"
        aspectRatio = slide.opts.width && slide.opts.height ? width / height : slide.opts.ratio || 16 / 9;

        if (height > width / aspectRatio) {
          height = width / aspectRatio;
        } else if (width > height * aspectRatio) {
          width = height * aspectRatio;
        }
      }

      rez.width = width;
      rez.height = height;

      return rez;
    },

    // Update content size and position for all slides
    // ==============================================

    update: function (e) {
      var self = this;

      $.each(self.slides, function (key, slide) {
        self.updateSlide(slide, e);
      });
    },

    // Update slide content position and size
    // ======================================

    updateSlide: function (slide, e) {
      var self = this,
        $content = slide && slide.$content,
        width = slide.width || slide.opts.width,
        height = slide.height || slide.opts.height,
        $slide = slide.$slide;

      // First, prevent caption overlap, if needed
      self.adjustCaption(slide);

      // Then resize content to fit inside the slide
      if ($content && (width || height || slide.contentType === "video") && !slide.hasError) {
        $.fancybox.stop($content);

        $.fancybox.setTranslate($content, self.getFitPos(slide));

        if (slide.pos === self.currPos) {
          self.isAnimating = false;

          self.updateCursor();
        }
      }

      // Then some adjustments
      self.adjustLayout(slide);

      if ($slide.length) {
        $slide.trigger("refresh");

        if (slide.pos === self.currPos) {
          self.$refs.toolbar
            .add(self.$refs.navigation.find(".fancybox-button--arrow_right"))
            .toggleClass("compensate-for-scrollbar", $slide.get(0).scrollHeight > $slide.get(0).clientHeight);
        }
      }

      self.trigger("onUpdate", slide, e);
    },

    // Horizontally center slide
    // =========================

    centerSlide: function (duration) {
      var self = this,
        current = self.current,
        $slide = current.$slide;

      if (self.isClosing || !current) {
        return;
      }

      $slide.siblings().css({
        transform: "",
        opacity: ""
      });

      $slide
        .parent()
        .children()
        .removeClass("fancybox-slide--previous fancybox-slide--next");

      $.fancybox.animate(
        $slide, {
          top: 0,
          left: 0,
          opacity: 1
        },
        duration === undefined ? 0 : duration,
        function () {
          // Clean up
          $slide.css({
            transform: "",
            opacity: ""
          });

          if (!current.isComplete) {
            self.complete();
          }
        },
        false
      );
    },

    // Check if current slide is moved (swiped)
    // ========================================

    isMoved: function (slide) {
      var current = slide || this.current,
        slidePos,
        stagePos;

      if (!current) {
        return false;
      }

      stagePos = $.fancybox.getTranslate(this.$refs.stage);
      slidePos = $.fancybox.getTranslate(current.$slide);

      return (
        !current.$slide.hasClass("fancybox-animated") &&
        (Math.abs(slidePos.top - stagePos.top) > 0.5 || Math.abs(slidePos.left - stagePos.left) > 0.5)
      );
    },

    // Update cursor style depending if content can be zoomed
    // ======================================================

    updateCursor: function (nextWidth, nextHeight) {
      var self = this,
        current = self.current,
        $container = self.$refs.container,
        canPan,
        isZoomable;

      if (!current || self.isClosing || !self.Guestures) {
        return;
      }

      $container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");

      canPan = self.canPan(nextWidth, nextHeight);

      isZoomable = canPan ? true : self.isZoomable();

      $container.toggleClass("fancybox-is-zoomable", isZoomable);

      $("[data-fancybox-zoom]").prop("disabled", !isZoomable);

      if (canPan) {
        $container.addClass("fancybox-can-pan");
      } else if (
        isZoomable &&
        (current.opts.clickContent === "zoom" || ($.isFunction(current.opts.clickContent) && current.opts.clickContent(current) == "zoom"))
      ) {
        $container.addClass("fancybox-can-zoomIn");
      } else if (current.opts.touch && (current.opts.touch.vertical || self.group.length > 1) && current.contentType !== "video") {
        $container.addClass("fancybox-can-swipe");
      }
    },

    // Check if current slide is zoomable
    // ==================================

    isZoomable: function () {
      var self = this,
        current = self.current,
        fitPos;

      // Assume that slide is zoomable if:
      //   - image is still loading
      //   - actual size of the image is smaller than available area
      if (current && !self.isClosing && current.type === "image" && !current.hasError) {
        if (!current.isLoaded) {
          return true;
        }

        fitPos = self.getFitPos(current);

        if (fitPos && (current.width > fitPos.width || current.height > fitPos.height)) {
          return true;
        }
      }

      return false;
    },

    // Check if current image dimensions are smaller than actual
    // =========================================================

    isScaledDown: function (nextWidth, nextHeight) {
      var self = this,
        rez = false,
        current = self.current,
        $content = current.$content;

      if (nextWidth !== undefined && nextHeight !== undefined) {
        rez = nextWidth < current.width && nextHeight < current.height;
      } else if ($content) {
        rez = $.fancybox.getTranslate($content);
        rez = rez.width < current.width && rez.height < current.height;
      }

      return rez;
    },

    // Check if image dimensions exceed parent element
    // ===============================================

    canPan: function (nextWidth, nextHeight) {
      var self = this,
        current = self.current,
        pos = null,
        rez = false;

      if (current.type === "image" && (current.isComplete || (nextWidth && nextHeight)) && !current.hasError) {
        rez = self.getFitPos(current);

        if (nextWidth !== undefined && nextHeight !== undefined) {
          pos = {
            width: nextWidth,
            height: nextHeight
          };
        } else if (current.isComplete) {
          pos = $.fancybox.getTranslate(current.$content);
        }

        if (pos && rez) {
          rez = Math.abs(pos.width - rez.width) > 1.5 || Math.abs(pos.height - rez.height) > 1.5;
        }
      }

      return rez;
    },

    // Load content into the slide
    // ===========================

    loadSlide: function (slide) {
      var self = this,
        type,
        $slide,
        ajaxLoad;

      if (slide.isLoading || slide.isLoaded) {
        return;
      }

      slide.isLoading = true;

      if (self.trigger("beforeLoad", slide) === false) {
        slide.isLoading = false;

        return false;
      }

      type = slide.type;
      $slide = slide.$slide;

      $slide
        .off("refresh")
        .trigger("onReset")
        .addClass(slide.opts.slideClass);

      // Create content depending on the type
      switch (type) {
        case "image":
          self.setImage(slide);

          break;

        case "iframe":
          self.setIframe(slide);

          break;

        case "html":
          self.setContent(slide, slide.src || slide.content);

          break;

        case "video":
          self.setContent(
            slide,
            slide.opts.video.tpl
            .replace(/\{\{src\}\}/gi, slide.src)
            .replace("{{format}}", slide.opts.videoFormat || slide.opts.video.format || "")
            .replace("{{poster}}", slide.thumb || "")
          );

          break;

        case "inline":
          if ($(slide.src).length) {
            self.setContent(slide, $(slide.src));
          } else {
            self.setError(slide);
          }

          break;

        case "ajax":
          self.showLoading(slide);

          ajaxLoad = $.ajax(
            $.extend({}, slide.opts.ajax.settings, {
              url: slide.src,
              success: function (data, textStatus) {
                if (textStatus === "success") {
                  self.setContent(slide, data);
                }
              },
              error: function (jqXHR, textStatus) {
                if (jqXHR && textStatus !== "abort") {
                  self.setError(slide);
                }
              }
            })
          );

          $slide.one("onReset", function () {
            ajaxLoad.abort();
          });

          break;

        default:
          self.setError(slide);

          break;
      }

      return true;
    },

    // Use thumbnail image, if possible
    // ================================

    setImage: function (slide) {
      var self = this,
        ghost;

      // Check if need to show loading icon
      setTimeout(function () {
        var $img = slide.$image;

        if (!self.isClosing && slide.isLoading && (!$img || !$img.length || !$img[0].complete) && !slide.hasError) {
          self.showLoading(slide);
        }
      }, 50);

      //Check if image has srcset
      self.checkSrcset(slide);

      // This will be wrapper containing both ghost and actual image
      slide.$content = $('<div class="fancybox-content"></div>')
        .addClass("fancybox-is-hidden")
        .appendTo(slide.$slide.addClass("fancybox-slide--image"));

      // If we have a thumbnail, we can display it while actual image is loading
      // Users will not stare at black screen and actual image will appear gradually
      if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && slide.thumb) {
        slide.width = slide.opts.width;
        slide.height = slide.opts.height;

        ghost = document.createElement("img");

        ghost.onerror = function () {
          $(this).remove();

          slide.$ghost = null;
        };

        ghost.onload = function () {
          self.afterLoad(slide);
        };

        slide.$ghost = $(ghost)
          .addClass("fancybox-image")
          .appendTo(slide.$content)
          .attr("src", slide.thumb);
      }

      // Start loading actual image
      self.setBigImage(slide);
    },

    // Check if image has srcset and get the source
    // ============================================
    checkSrcset: function (slide) {
      var srcset = slide.opts.srcset || slide.opts.image.srcset,
        found,
        temp,
        pxRatio,
        windowWidth;

      // If we have "srcset", then we need to find first matching "src" value.
      // This is necessary, because when you set an src attribute, the browser will preload the image
      // before any javascript or even CSS is applied.
      if (srcset) {
        pxRatio = window.devicePixelRatio || 1;
        windowWidth = window.innerWidth * pxRatio;

        temp = srcset.split(",").map(function (el) {
          var ret = {};

          el.trim()
            .split(/\s+/)
            .forEach(function (el, i) {
              var value = parseInt(el.substring(0, el.length - 1), 10);

              if (i === 0) {
                return (ret.url = el);
              }

              if (value) {
                ret.value = value;
                ret.postfix = el[el.length - 1];
              }
            });

          return ret;
        });

        // Sort by value
        temp.sort(function (a, b) {
          return a.value - b.value;
        });

        // Ok, now we have an array of all srcset values
        for (var j = 0; j < temp.length; j++) {
          var el = temp[j];

          if ((el.postfix === "w" && el.value >= windowWidth) || (el.postfix === "x" && el.value >= pxRatio)) {
            found = el;
            break;
          }
        }

        // If not found, take the last one
        if (!found && temp.length) {
          found = temp[temp.length - 1];
        }

        if (found) {
          slide.src = found.url;

          // If we have default width/height values, we can calculate height for matching source
          if (slide.width && slide.height && found.postfix == "w") {
            slide.height = (slide.width / slide.height) * found.value;
            slide.width = found.value;
          }

          slide.opts.srcset = srcset;
        }
      }
    },

    // Create full-size image
    // ======================

    setBigImage: function (slide) {
      var self = this,
        img = document.createElement("img"),
        $img = $(img);

      slide.$image = $img
        .one("error", function () {
          self.setError(slide);
        })
        .one("load", function () {
          var sizes;

          if (!slide.$ghost) {
            self.resolveImageSlideSize(slide, this.naturalWidth, this.naturalHeight);

            self.afterLoad(slide);
          }

          if (self.isClosing) {
            return;
          }

          if (slide.opts.srcset) {
            sizes = slide.opts.sizes;

            if (!sizes || sizes === "auto") {
              sizes =
                (slide.width / slide.height > 1 && $W.width() / $W.height() > 1 ? "100" : Math.round((slide.width / slide.height) * 100)) +
                "vw";
            }

            $img.attr("sizes", sizes).attr("srcset", slide.opts.srcset);
          }

          // Hide temporary image after some delay
          if (slide.$ghost) {
            setTimeout(function () {
              if (slide.$ghost && !self.isClosing) {
                slide.$ghost.hide();
              }
            }, Math.min(300, Math.max(1000, slide.height / 1600)));
          }

          self.hideLoading(slide);
        })
        .addClass("fancybox-image")
        .attr("src", slide.src)
        .appendTo(slide.$content);

      if ((img.complete || img.readyState == "complete") && $img.naturalWidth && $img.naturalHeight) {
        $img.trigger("load");
      } else if (img.error) {
        $img.trigger("error");
      }
    },

    // Computes the slide size from image size and maxWidth/maxHeight
    // ==============================================================

    resolveImageSlideSize: function (slide, imgWidth, imgHeight) {
      var maxWidth = parseInt(slide.opts.width, 10),
        maxHeight = parseInt(slide.opts.height, 10);

      // Sets the default values from the image
      slide.width = imgWidth;
      slide.height = imgHeight;

      if (maxWidth > 0) {
        slide.width = maxWidth;
        slide.height = Math.floor((maxWidth * imgHeight) / imgWidth);
      }

      if (maxHeight > 0) {
        slide.width = Math.floor((maxHeight * imgWidth) / imgHeight);
        slide.height = maxHeight;
      }
    },

    // Create iframe wrapper, iframe and bindings
    // ==========================================

    setIframe: function (slide) {
      var self = this,
        opts = slide.opts.iframe,
        $slide = slide.$slide,
        $iframe;

      slide.$content = $('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden" : "") + '"></div>')
        .css(opts.css)
        .appendTo($slide);

      $slide.addClass("fancybox-slide--" + slide.contentType);

      slide.$iframe = $iframe = $(opts.tpl.replace(/\{rnd\}/g, new Date().getTime()))
        .attr(opts.attr)
        .appendTo(slide.$content);

      if (opts.preload) {
        self.showLoading(slide);

        // Unfortunately, it is not always possible to determine if iframe is successfully loaded
        // (due to browser security policy)

        $iframe.on("load.fb error.fb", function (e) {
          this.isReady = 1;

          slide.$slide.trigger("refresh");

          self.afterLoad(slide);
        });

        // Recalculate iframe content size
        // ===============================

        $slide.on("refresh.fb", function () {
          var $content = slide.$content,
            frameWidth = opts.css.width,
            frameHeight = opts.css.height,
            $contents,
            $body;

          if ($iframe[0].isReady !== 1) {
            return;
          }

          try {
            $contents = $iframe.contents();
            $body = $contents.find("body");
          } catch (ignore) {}

          // Calculate content dimensions, if it is accessible
          if ($body && $body.length && $body.children().length) {
            // Avoid scrolling to top (if multiple instances)
            $slide.css("overflow", "visible");

            $content.css({
              width: "100%",
              "max-width": "100%",
              height: "9999px"
            });

            if (frameWidth === undefined) {
              frameWidth = Math.ceil(Math.max($body[0].clientWidth, $body.outerWidth(true)));
            }

            $content.css("width", frameWidth ? frameWidth : "").css("max-width", "");

            if (frameHeight === undefined) {
              frameHeight = Math.ceil(Math.max($body[0].clientHeight, $body.outerHeight(true)));
            }

            $content.css("height", frameHeight ? frameHeight : "");

            $slide.css("overflow", "auto");
          }

          $content.removeClass("fancybox-is-hidden");
        });
      } else {
        self.afterLoad(slide);
      }

      $iframe.attr("src", slide.src);

      // Remove iframe if closing or changing gallery item
      $slide.one("onReset", function () {
        // This helps IE not to throw errors when closing
        try {
          $(this)
            .find("iframe")
            .hide()
            .unbind()
            .attr("src", "//about:blank");
        } catch (ignore) {}

        $(this)
          .off("refresh.fb")
          .empty();

        slide.isLoaded = false;
        slide.isRevealed = false;
      });
    },

    // Wrap and append content to the slide
    // ======================================

    setContent: function (slide, content) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      self.hideLoading(slide);

      if (slide.$content) {
        $.fancybox.stop(slide.$content);
      }

      slide.$slide.empty();

      // If content is a jQuery object, then it will be moved to the slide.
      // The placeholder is created so we will know where to put it back.
      if (isQuery(content) && content.parent().length) {
        // Make sure content is not already moved to fancyBox
        if (content.hasClass("fancybox-content") || content.parent().hasClass("fancybox-content")) {
          content.parents(".fancybox-slide").trigger("onReset");
        }

        // Create temporary element marking original place of the content
        slide.$placeholder = $("<div>")
          .hide()
          .insertAfter(content);

        // Make sure content is visible
        content.css("display", "inline-block");
      } else if (!slide.hasError) {
        // If content is just a plain text, try to convert it to html
        if ($.type(content) === "string") {
          content = $("<div>")
            .append($.trim(content))
            .contents();
        }

        // If "filter" option is provided, then filter content
        if (slide.opts.filter) {
          content = $("<div>")
            .html(content)
            .find(slide.opts.filter);
        }
      }

      slide.$slide.one("onReset", function () {
        // Pause all html5 video/audio
        $(this)
          .find("video,audio")
          .trigger("pause");

        // Put content back
        if (slide.$placeholder) {
          slide.$placeholder.after(content.removeClass("fancybox-content").hide()).remove();

          slide.$placeholder = null;
        }

        // Remove custom close button
        if (slide.$smallBtn) {
          slide.$smallBtn.remove();

          slide.$smallBtn = null;
        }

        // Remove content and mark slide as not loaded
        if (!slide.hasError) {
          $(this).empty();

          slide.isLoaded = false;
          slide.isRevealed = false;
        }
      });

      $(content).appendTo(slide.$slide);

      if ($(content).is("video,audio")) {
        $(content).addClass("fancybox-video");

        $(content).wrap("<div></div>");

        slide.contentType = "video";

        slide.opts.width = slide.opts.width || $(content).attr("width");
        slide.opts.height = slide.opts.height || $(content).attr("height");
      }

      slide.$content = slide.$slide
        .children()
        .filter("div,form,main,video,audio,article,.fancybox-content")
        .first();

      slide.$content.siblings().hide();

      // Re-check if there is a valid content
      // (in some cases, ajax response can contain various elements or plain text)
      if (!slide.$content.length) {
        slide.$content = slide.$slide
          .wrapInner("<div></div>")
          .children()
          .first();
      }

      slide.$content.addClass("fancybox-content");

      slide.$slide.addClass("fancybox-slide--" + slide.contentType);

      self.afterLoad(slide);
    },

    // Display error message
    // =====================

    setError: function (slide) {
      slide.hasError = true;

      slide.$slide
        .trigger("onReset")
        .removeClass("fancybox-slide--" + slide.contentType)
        .addClass("fancybox-slide--error");

      slide.contentType = "html";

      this.setContent(slide, this.translate(slide, slide.opts.errorTpl));

      if (slide.pos === this.currPos) {
        this.isAnimating = false;
      }
    },

    // Show loading icon inside the slide
    // ==================================

    showLoading: function (slide) {
      var self = this;

      slide = slide || self.current;

      if (slide && !slide.$spinner) {
        slide.$spinner = $(self.translate(self, self.opts.spinnerTpl))
          .appendTo(slide.$slide)
          .hide()
          .fadeIn("fast");
      }
    },

    // Remove loading icon from the slide
    // ==================================

    hideLoading: function (slide) {
      var self = this;

      slide = slide || self.current;

      if (slide && slide.$spinner) {
        slide.$spinner.stop().remove();

        delete slide.$spinner;
      }
    },

    // Adjustments after slide content has been loaded
    // ===============================================

    afterLoad: function (slide) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      slide.isLoading = false;
      slide.isLoaded = true;

      self.trigger("afterLoad", slide);

      self.hideLoading(slide);

      // Add small close button
      if (slide.opts.smallBtn && (!slide.$smallBtn || !slide.$smallBtn.length)) {
        slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content);
      }

      // Disable right click
      if (slide.opts.protect && slide.$content && !slide.hasError) {
        slide.$content.on("contextmenu.fb", function (e) {
          if (e.button == 2) {
            e.preventDefault();
          }

          return true;
        });

        // Add fake element on top of the image
        // This makes a bit harder for user to select image
        if (slide.type === "image") {
          $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
        }
      }

      self.adjustCaption(slide);

      self.adjustLayout(slide);

      if (slide.pos === self.currPos) {
        self.updateCursor();
      }

      self.revealContent(slide);
    },

    // Prevent caption overlap,
    // fix css inconsistency across browsers
    // =====================================

    adjustCaption: function (slide) {
      var self = this,
        current = slide || self.current,
        caption = current.opts.caption,
        preventOverlap = current.opts.preventCaptionOverlap,
        $caption = self.$refs.caption,
        $clone,
        captionH = false;

      $caption.toggleClass("fancybox-caption--separate", preventOverlap);

      if (preventOverlap && caption && caption.length) {
        if (current.pos !== self.currPos) {
          $clone = $caption.clone().appendTo($caption.parent());

          $clone
            .children()
            .eq(0)
            .empty()
            .html(caption);

          captionH = $clone.outerHeight(true);

          $clone.empty().remove();
        } else if (self.$caption) {
          captionH = self.$caption.outerHeight(true);
        }

        current.$slide.css("padding-bottom", captionH || "");
      }
    },

    // Simple hack to fix inconsistency across browsers, described here (affects Edge, too):
    // https://bugzilla.mozilla.org/show_bug.cgi?id=748518
    // ====================================================================================

    adjustLayout: function (slide) {
      var self = this,
        current = slide || self.current,
        scrollHeight,
        marginBottom,
        inlinePadding,
        actualPadding;

      if (current.isLoaded && current.opts.disableLayoutFix !== true) {
        current.$content.css("margin-bottom", "");

        // If we would always set margin-bottom for the content,
        // then it would potentially break vertical align
        if (current.$content.outerHeight() > current.$slide.height() + 0.5) {
          inlinePadding = current.$slide[0].style["padding-bottom"];
          actualPadding = current.$slide.css("padding-bottom");

          if (parseFloat(actualPadding) > 0) {
            scrollHeight = current.$slide[0].scrollHeight;

            current.$slide.css("padding-bottom", 0);

            if (Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1) {
              marginBottom = actualPadding;
            }

            current.$slide.css("padding-bottom", inlinePadding);
          }
        }

        current.$content.css("margin-bottom", marginBottom);
      }
    },

    // Make content visible
    // This method is called right after content has been loaded or
    // user navigates gallery and transition should start
    // ============================================================

    revealContent: function (slide) {
      var self = this,
        $slide = slide.$slide,
        end = false,
        start = false,
        isMoved = self.isMoved(slide),
        isRevealed = slide.isRevealed,
        effect,
        effectClassName,
        duration,
        opacity;

      slide.isRevealed = true;

      effect = slide.opts[self.firstRun ? "animationEffect" : "transitionEffect"];
      duration = slide.opts[self.firstRun ? "animationDuration" : "transitionDuration"];

      duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);

      if (isMoved || slide.pos !== self.currPos || !duration) {
        effect = false;
      }

      // Check if can zoom
      if (effect === "zoom") {
        if (slide.pos === self.currPos && duration && slide.type === "image" && !slide.hasError && (start = self.getThumbPos(slide))) {
          end = self.getFitPos(slide);
        } else {
          effect = "fade";
        }
      }

      // Zoom animation
      // ==============
      if (effect === "zoom") {
        self.isAnimating = true;

        end.scaleX = end.width / start.width;
        end.scaleY = end.height / start.height;

        // Check if we need to animate opacity
        opacity = slide.opts.zoomOpacity;

        if (opacity == "auto") {
          opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
        }

        if (opacity) {
          start.opacity = 0.1;
          end.opacity = 1;
        }

        // Draw image at start position
        $.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);

        forceRedraw(slide.$content);

        // Start animation
        $.fancybox.animate(slide.$content, end, duration, function () {
          self.isAnimating = false;

          self.complete();
        });

        return;
      }

      self.updateSlide(slide);

      // Simply show content if no effect
      // ================================
      if (!effect) {
        slide.$content.removeClass("fancybox-is-hidden");

        if (!isRevealed && isMoved && slide.type === "image" && !slide.hasError) {
          slide.$content.hide().fadeIn("fast");
        }

        if (slide.pos === self.currPos) {
          self.complete();
        }

        return;
      }

      // Prepare for CSS transiton
      // =========================
      $.fancybox.stop($slide);

      //effectClassName = "fancybox-animated fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-fx-" + effect;
      effectClassName = "fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + effect;

      $slide.addClass(effectClassName).removeClass("fancybox-slide--current"); //.addClass(effectClassName);

      slide.$content.removeClass("fancybox-is-hidden");

      // Force reflow
      forceRedraw($slide);

      if (slide.type !== "image") {
        slide.$content.hide().show(0);
      }

      $.fancybox.animate(
        $slide,
        "fancybox-slide--current",
        duration,
        function () {
          $slide.removeClass(effectClassName).css({
            transform: "",
            opacity: ""
          });

          if (slide.pos === self.currPos) {
            self.complete();
          }
        },
        true
      );
    },

    // Check if we can and have to zoom from thumbnail
    //================================================

    getThumbPos: function (slide) {
      var rez = false,
        $thumb = slide.$thumb,
        thumbPos,
        btw,
        brw,
        bbw,
        blw;

      if (!$thumb || !inViewport($thumb[0])) {
        return false;
      }

      thumbPos = $.fancybox.getTranslate($thumb);

      btw = parseFloat($thumb.css("border-top-width") || 0);
      brw = parseFloat($thumb.css("border-right-width") || 0);
      bbw = parseFloat($thumb.css("border-bottom-width") || 0);
      blw = parseFloat($thumb.css("border-left-width") || 0);

      rez = {
        top: thumbPos.top + btw,
        left: thumbPos.left + blw,
        width: thumbPos.width - brw - blw,
        height: thumbPos.height - btw - bbw,
        scaleX: 1,
        scaleY: 1
      };

      return thumbPos.width > 0 && thumbPos.height > 0 ? rez : false;
    },

    // Final adjustments after current gallery item is moved to position
    // and it`s content is loaded
    // ==================================================================

    complete: function () {
      var self = this,
        current = self.current,
        slides = {},
        $el;

      if (self.isMoved() || !current.isLoaded) {
        return;
      }

      if (!current.isComplete) {
        current.isComplete = true;

        current.$slide.siblings().trigger("onReset");

        self.preload("inline");

        // Trigger any CSS transiton inside the slide
        forceRedraw(current.$slide);

        current.$slide.addClass("fancybox-slide--complete");

        // Remove unnecessary slides
        $.each(self.slides, function (key, slide) {
          if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
            slides[slide.pos] = slide;
          } else if (slide) {
            $.fancybox.stop(slide.$slide);

            slide.$slide.off().remove();
          }
        });

        self.slides = slides;
      }

      self.isAnimating = false;

      self.updateCursor();

      self.trigger("afterShow");

      // Autoplay first html5 video/audio
      if (!!current.opts.video.autoStart) {
        current.$slide
          .find("video,audio")
          .filter(":visible:first")
          .trigger("play")
          .one("ended", function () {
            if (Document.exitFullscreen) {
              Document.exitFullscreen();
            } else if (this.webkitExitFullscreen) {
              this.webkitExitFullscreen();
            }

            self.next();
          });
      }

      // Try to focus on the first focusable element
      if (current.opts.autoFocus && current.contentType === "html") {
        // Look for the first input with autofocus attribute
        $el = current.$content.find("input[autofocus]:enabled:visible:first");

        if ($el.length) {
          $el.trigger("focus");
        } else {
          self.focus(null, true);
        }
      }

      // Avoid jumping
      current.$slide.scrollTop(0).scrollLeft(0);
    },

    // Preload next and previous slides
    // ================================

    preload: function (type) {
      var self = this,
        prev,
        next;

      if (self.group.length < 2) {
        return;
      }

      next = self.slides[self.currPos + 1];
      prev = self.slides[self.currPos - 1];

      if (prev && prev.type === type) {
        self.loadSlide(prev);
      }

      if (next && next.type === type) {
        self.loadSlide(next);
      }
    },

    // Try to find and focus on the first focusable element
    // ====================================================

    focus: function (e, firstRun) {
      var self = this,
        focusableStr = [
          "a[href]",
          "area[href]",
          'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
          "select:not([disabled]):not([aria-hidden])",
          "textarea:not([disabled]):not([aria-hidden])",
          "button:not([disabled]):not([aria-hidden])",
          "iframe",
          "object",
          "embed",
          "video",
          "audio",
          "[contenteditable]",
          '[tabindex]:not([tabindex^="-"])'
        ].join(","),
        focusableItems,
        focusedItemIndex;

      if (self.isClosing) {
        return;
      }

      if (e || !self.current || !self.current.isComplete) {
        // Focus on any element inside fancybox
        focusableItems = self.$refs.container.find("*:visible");
      } else {
        // Focus inside current slide
        focusableItems = self.current.$slide.find("*:visible" + (firstRun ? ":not(.fancybox-close-small)" : ""));
      }

      focusableItems = focusableItems.filter(focusableStr).filter(function () {
        return $(this).css("visibility") !== "hidden" && !$(this).hasClass("disabled");
      });

      if (focusableItems.length) {
        focusedItemIndex = focusableItems.index(document.activeElement);

        if (e && e.shiftKey) {
          // Back tab
          if (focusedItemIndex < 0 || focusedItemIndex == 0) {
            e.preventDefault();

            focusableItems.eq(focusableItems.length - 1).trigger("focus");
          }
        } else {
          // Outside or Forward tab
          if (focusedItemIndex < 0 || focusedItemIndex == focusableItems.length - 1) {
            if (e) {
              e.preventDefault();
            }

            focusableItems.eq(0).trigger("focus");
          }
        }
      } else {
        self.$refs.container.trigger("focus");
      }
    },

    // Activates current instance - brings container to the front and enables keyboard,
    // notifies other instances about deactivating
    // =================================================================================

    activate: function () {
      var self = this;

      // Deactivate all instances
      $(".fancybox-container").each(function () {
        var instance = $(this).data("FancyBox");

        // Skip self and closing instances
        if (instance && instance.id !== self.id && !instance.isClosing) {
          instance.trigger("onDeactivate");

          instance.removeEvents();

          instance.isVisible = false;
        }
      });

      self.isVisible = true;

      if (self.current || self.isIdle) {
        self.update();

        self.updateControls();
      }

      self.trigger("onActivate");

      self.addEvents();
    },

    // Start closing procedure
    // This will start "zoom-out" animation if needed and clean everything up afterwards
    // =================================================================================

    close: function (e, d) {
      var self = this,
        current = self.current,
        effect,
        duration,
        $content,
        domRect,
        opacity,
        start,
        end;

      var done = function () {
        self.cleanUp(e);
      };

      if (self.isClosing) {
        return false;
      }

      self.isClosing = true;

      // If beforeClose callback prevents closing, make sure content is centered
      if (self.trigger("beforeClose", e) === false) {
        self.isClosing = false;

        requestAFrame(function () {
          self.update();
        });

        return false;
      }

      // Remove all events
      // If there are multiple instances, they will be set again by "activate" method
      self.removeEvents();

      $content = current.$content;
      effect = current.opts.animationEffect;
      duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;

      current.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");

      if (e !== true) {
        $.fancybox.stop(current.$slide);
      } else {
        effect = false;
      }

      // Remove other slides
      current.$slide
        .siblings()
        .trigger("onReset")
        .remove();

      // Trigger animations
      if (duration) {
        self.$refs.container
          .removeClass("fancybox-is-open")
          .addClass("fancybox-is-closing")
          .css("transition-duration", duration + "ms");
      }

      // Clean up
      self.hideLoading(current);

      self.hideControls(true);

      self.updateCursor();

      // Check if possible to zoom-out
      if (
        effect === "zoom" &&
        !($content && duration && current.type === "image" && !self.isMoved() && !current.hasError && (end = self.getThumbPos(current)))
      ) {
        effect = "fade";
      }

      if (effect === "zoom") {
        $.fancybox.stop($content);

        domRect = $.fancybox.getTranslate($content);

        start = {
          top: domRect.top,
          left: domRect.left,
          scaleX: domRect.width / end.width,
          scaleY: domRect.height / end.height,
          width: end.width,
          height: end.height
        };

        // Check if we need to animate opacity
        opacity = current.opts.zoomOpacity;

        if (opacity == "auto") {
          opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
        }

        if (opacity) {
          end.opacity = 0;
        }

        $.fancybox.setTranslate($content, start);

        forceRedraw($content);

        $.fancybox.animate($content, end, duration, done);

        return true;
      }

      if (effect && duration) {
        $.fancybox.animate(
          current.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),
          "fancybox-animated fancybox-fx-" + effect,
          duration,
          done
        );
      } else {
        // If skip animation
        if (e === true) {
          setTimeout(done, duration);
        } else {
          done();
        }
      }

      return true;
    },

    // Final adjustments after removing the instance
    // =============================================

    cleanUp: function (e) {
      var self = this,
        instance,
        $focus = self.current.opts.$orig,
        x,
        y;

      self.current.$slide.trigger("onReset");

      self.$refs.container.empty().remove();

      self.trigger("afterClose", e);

      // Place back focus
      if (!!self.current.opts.backFocus) {
        if (!$focus || !$focus.length || !$focus.is(":visible")) {
          $focus = self.$trigger;
        }

        if ($focus && $focus.length) {
          x = window.scrollX;
          y = window.scrollY;

          $focus.trigger("focus");

          $("html, body")
            .scrollTop(y)
            .scrollLeft(x);
        }
      }

      self.current = null;

      // Check if there are other instances
      instance = $.fancybox.getInstance();

      if (instance) {
        instance.activate();
      } else {
        $("body").removeClass("fancybox-active compensate-for-scrollbar");

        $("#fancybox-style-noscroll").remove();
      }
    },

    // Call callback and trigger an event
    // ==================================

    trigger: function (name, slide) {
      var args = Array.prototype.slice.call(arguments, 1),
        self = this,
        obj = slide && slide.opts ? slide : self.current,
        rez;

      if (obj) {
        args.unshift(obj);
      } else {
        obj = self;
      }

      args.unshift(self);

      if ($.isFunction(obj.opts[name])) {
        rez = obj.opts[name].apply(obj, args);
      }

      if (rez === false) {
        return rez;
      }

      if (name === "afterClose" || !self.$refs) {
        $D.trigger(name + ".fb", args);
      } else {
        self.$refs.container.trigger(name + ".fb", args);
      }
    },

    // Update infobar values, navigation button states and reveal caption
    // ==================================================================

    updateControls: function () {
      var self = this,
        current = self.current,
        index = current.index,
        $container = self.$refs.container,
        $caption = self.$refs.caption,
        caption = current.opts.caption;

      // Recalculate content dimensions
      current.$slide.trigger("refresh");

      // Set caption
      if (caption && caption.length) {
        self.$caption = $caption;

        $caption
          .children()
          .eq(0)
          .html(caption);
      } else {
        self.$caption = null;
      }

      if (!self.hasHiddenControls && !self.isIdle) {
        self.showControls();
      }

      // Update info and navigation elements
      $container.find("[data-fancybox-count]").html(self.group.length);
      $container.find("[data-fancybox-index]").html(index + 1);

      $container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop && index <= 0);
      $container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop && index >= self.group.length - 1);

      if (current.type === "image") {
        // Re-enable buttons; update download button source
        $container
          .find("[data-fancybox-zoom]")
          .show()
          .end()
          .find("[data-fancybox-download]")
          .attr("href", current.opts.image.src || current.src)
          .show();
      } else if (current.opts.toolbar) {
        $container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
      }

      // Make sure focus is not on disabled button/element
      if ($(document.activeElement).is(":hidden,[disabled]")) {
        self.$refs.container.trigger("focus");
      }
    },

    // Hide toolbar and caption
    // ========================

    hideControls: function (andCaption) {
      var self = this,
        arr = ["infobar", "toolbar", "nav"];

      if (andCaption || !self.current.opts.preventCaptionOverlap) {
        arr.push("caption");
      }

      this.$refs.container.removeClass(
        arr
        .map(function (i) {
          return "fancybox-show-" + i;
        })
        .join(" ")
      );

      this.hasHiddenControls = true;
    },

    showControls: function () {
      var self = this,
        opts = self.current ? self.current.opts : self.opts,
        $container = self.$refs.container;

      self.hasHiddenControls = false;
      self.idleSecondsCounter = 0;

      $container
        .toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons))
        .toggleClass("fancybox-show-infobar", !!(opts.infobar && self.group.length > 1))
        .toggleClass("fancybox-show-caption", !!self.$caption)
        .toggleClass("fancybox-show-nav", !!(opts.arrows && self.group.length > 1))
        .toggleClass("fancybox-is-modal", !!opts.modal);
    },

    // Toggle toolbar and caption
    // ==========================

    toggleControls: function () {
      if (this.hasHiddenControls) {
        this.showControls();
      } else {
        this.hideControls();
      }
    }
  });

  $.fancybox = {
    version: "3.5.7",
    defaults: defaults,

    // Get current instance and execute a command.
    //
    // Examples of usage:
    //
    //   $instance = $.fancybox.getInstance();
    //   $.fancybox.getInstance().jumpTo( 1 );
    //   $.fancybox.getInstance( 'jumpTo', 1 );
    //   $.fancybox.getInstance( function() {
    //       console.info( this.currIndex );
    //   });
    // ======================================================

    getInstance: function (command) {
      var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
        args = Array.prototype.slice.call(arguments, 1);

      if (instance instanceof FancyBox) {
        if ($.type(command) === "string") {
          instance[command].apply(instance, args);
        } else if ($.type(command) === "function") {
          command.apply(instance, args);
        }

        return instance;
      }

      return false;
    },

    // Create new instance
    // ===================

    open: function (items, opts, index) {
      return new FancyBox(items, opts, index);
    },

    // Close current or all instances
    // ==============================

    close: function (all) {
      var instance = this.getInstance();

      if (instance) {
        instance.close();

        // Try to find and close next instance
        if (all === true) {
          this.close(all);
        }
      }
    },

    // Close all instances and unbind all events
    // =========================================

    destroy: function () {
      this.close(true);

      $D.add("body").off("click.fb-start", "**");
    },

    // Try to detect mobile devices
    // ============================

    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),

    // Detect if 'translate3d' support is available
    // ============================================

    use3d: (function () {
      var div = document.createElement("div");

      return (
        window.getComputedStyle &&
        window.getComputedStyle(div) &&
        window.getComputedStyle(div).getPropertyValue("transform") &&
        !(document.documentMode && document.documentMode < 11)
      );
    })(),

    // Helper function to get current visual state of an element
    // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
    // =====================================================================

    getTranslate: function ($el) {
      var domRect;

      if (!$el || !$el.length) {
        return false;
      }

      domRect = $el[0].getBoundingClientRect();

      return {
        top: domRect.top || 0,
        left: domRect.left || 0,
        width: domRect.width,
        height: domRect.height,
        opacity: parseFloat($el.css("opacity"))
      };
    },

    // Shortcut for setting "translate3d" properties for element
    // Can set be used to set opacity, too
    // ========================================================

    setTranslate: function ($el, props) {
      var str = "",
        css = {};

      if (!$el || !props) {
        return;
      }

      if (props.left !== undefined || props.top !== undefined) {
        str =
          (props.left === undefined ? $el.position().left : props.left) +
          "px, " +
          (props.top === undefined ? $el.position().top : props.top) +
          "px";

        if (this.use3d) {
          str = "translate3d(" + str + ", 0px)";
        } else {
          str = "translate(" + str + ")";
        }
      }

      if (props.scaleX !== undefined && props.scaleY !== undefined) {
        str += " scale(" + props.scaleX + ", " + props.scaleY + ")";
      } else if (props.scaleX !== undefined) {
        str += " scaleX(" + props.scaleX + ")";
      }

      if (str.length) {
        css.transform = str;
      }

      if (props.opacity !== undefined) {
        css.opacity = props.opacity;
      }

      if (props.width !== undefined) {
        css.width = props.width;
      }

      if (props.height !== undefined) {
        css.height = props.height;
      }

      return $el.css(css);
    },

    // Simple CSS transition handler
    // =============================

    animate: function ($el, to, duration, callback, leaveAnimationName) {
      var self = this,
        from;

      if ($.isFunction(duration)) {
        callback = duration;
        duration = null;
      }

      self.stop($el);

      from = self.getTranslate($el);

      $el.on(transitionEnd, function (e) {
        // Skip events from child elements and z-index change
        if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == "z-index")) {
          return;
        }

        self.stop($el);

        if ($.isNumeric(duration)) {
          $el.css("transition-duration", "");
        }

        if ($.isPlainObject(to)) {
          if (to.scaleX !== undefined && to.scaleY !== undefined) {
            self.setTranslate($el, {
              top: to.top,
              left: to.left,
              width: from.width * to.scaleX,
              height: from.height * to.scaleY,
              scaleX: 1,
              scaleY: 1
            });
          }
        } else if (leaveAnimationName !== true) {
          $el.removeClass(to);
        }

        if ($.isFunction(callback)) {
          callback(e);
        }
      });

      if ($.isNumeric(duration)) {
        $el.css("transition-duration", duration + "ms");
      }

      // Start animation by changing CSS properties or class name
      if ($.isPlainObject(to)) {
        if (to.scaleX !== undefined && to.scaleY !== undefined) {
          delete to.width;
          delete to.height;

          if ($el.parent().hasClass("fancybox-slide--image")) {
            $el.parent().addClass("fancybox-is-scaling");
          }
        }

        $.fancybox.setTranslate($el, to);
      } else {
        $el.addClass(to);
      }

      // Make sure that `transitionend` callback gets fired
      $el.data(
        "timer",
        setTimeout(function () {
          $el.trigger(transitionEnd);
        }, duration + 33)
      );
    },

    stop: function ($el, callCallback) {
      if ($el && $el.length) {
        clearTimeout($el.data("timer"));

        if (callCallback) {
          $el.trigger(transitionEnd);
        }

        $el.off(transitionEnd).css("transition-duration", "");

        $el.parent().removeClass("fancybox-is-scaling");
      }
    }
  };

  // Default click handler for "fancyboxed" links
  // ============================================

  function _run(e, opts) {
    var items = [],
      index = 0,
      $target,
      value,
      instance;

    // Avoid opening multiple times
    if (e && e.isDefaultPrevented()) {
      return;
    }

    e.preventDefault();

    opts = opts || {};

    if (e && e.data) {
      opts = mergeOpts(e.data.options, opts);
    }

    $target = opts.$target || $(e.currentTarget).trigger("blur");
    instance = $.fancybox.getInstance();

    if (instance && instance.$trigger && instance.$trigger.is($target)) {
      return;
    }

    if (opts.selector) {
      items = $(opts.selector);
    } else {
      // Get all related items and find index for clicked one
      value = $target.attr("data-fancybox") || "";

      if (value) {
        items = e.data ? e.data.items : [];
        items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
      } else {
        items = [$target];
      }
    }

    index = $(items).index($target);

    // Sometimes current item can not be found
    if (index < 0) {
      index = 0;
    }

    instance = $.fancybox.open(items, opts, index);

    // Save last active element
    instance.$trigger = $target;
  }

  // Create a jQuery plugin
  // ======================

  $.fn.fancybox = function (options) {
    var selector;

    options = options || {};
    selector = options.selector || false;

    if (selector) {
      // Use body element instead of document so it executes first
      $("body")
        .off("click.fb-start", selector)
        .on("click.fb-start", selector, {
          options: options
        }, _run);
    } else {
      this.off("click.fb-start").on(
        "click.fb-start", {
          items: this,
          options: options
        },
        _run
      );
    }

    return this;
  };

  // Self initializing plugin for all elements having `data-fancybox` attribute
  // ==========================================================================

  $D.on("click.fb-start", "[data-fancybox]", _run);

  // Enable "trigger elements"
  // =========================

  $D.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
    $('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]')
      .eq($(this).attr("data-fancybox-index") || 0)
      .trigger("click.fb-start", {
        $trigger: $(this)
      });
  });

  // Track focus event for better accessibility styling
  // ==================================================
  (function () {
    var buttonStr = ".fancybox-button",
      focusStr = "fancybox-focus",
      $pressed = null;

    $D.on("mousedown mouseup focus blur", buttonStr, function (e) {
      switch (e.type) {
        case "mousedown":
          $pressed = $(this);
          break;
        case "mouseup":
          $pressed = null;
          break;
        case "focusin":
          $(buttonStr).removeClass(focusStr);

          if (!$(this).is($pressed) && !$(this).is("[disabled]")) {
            $(this).addClass(focusStr);
          }
          break;
        case "focusout":
          $(buttonStr).removeClass(focusStr);
          break;
      }
    });
  })();
})(window, document, jQuery);
// ==========================================================================
//
// Media
// Adds additional media type support
//
// ==========================================================================
(function ($) {
  "use strict";

  // Object containing properties for each media type
  var defaults = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {
        autoplay: 1,
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: "transparent",
        enablejsapi: 1,
        html5: 1
      },
      paramPlace: 8,
      type: "iframe",
      url: "https://www.youtube-nocookie.com/embed/$4",
      thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
    },

    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {
        autoplay: 1,
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1
      },
      paramPlace: 3,
      type: "iframe",
      url: "//player.vimeo.com/video/$2"
    },

    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: "image",
      url: "//$1/p/$2/media/?size=l"
    },

    // Examples:
    // http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
    // https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
    // https://www.google.com/maps/@52.2111123,2.9237542,6.61z?hl=en
    // https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
    gmap_place: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: "iframe",
      url: function (rez) {
        return (
          "//maps.google." +
          rez[2] +
          "/?ll=" +
          (rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : "") : rez[12] + "").replace(/\?/, "&") +
          "&output=" +
          (rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
        );
      }
    },

    // Examples:
    // https://www.google.com/maps/search/Empire+State+Building/
    // https://www.google.com/maps/search/?api=1&query=centurylink+field
    // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
    gmap_search: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
      type: "iframe",
      url: function (rez) {
        return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
      }
    }
  };

  // Formats matching url to final form
  var format = function (url, rez, params) {
    if (!url) {
      return;
    }

    params = params || "";

    if ($.type(params) === "object") {
      params = $.param(params, true);
    }

    $.each(rez, function (key, value) {
      url = url.replace("$" + key, value || "");
    });

    if (params.length) {
      url += (url.indexOf("?") > 0 ? "&" : "?") + params;
    }

    return url;
  };

  $(document).on("objectNeedsType.fb", function (e, instance, item) {
    var url = item.src || "",
      type = false,
      media,
      thumb,
      rez,
      params,
      urlParams,
      paramObj,
      provider;

    media = $.extend(true, {}, defaults, item.opts.media);

    // Look for any matching media type
    $.each(media, function (providerName, providerOpts) {
      rez = url.match(providerOpts.matcher);

      if (!rez) {
        return;
      }

      type = providerOpts.type;
      provider = providerName;
      paramObj = {};

      if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
        urlParams = rez[providerOpts.paramPlace];

        if (urlParams[0] == "?") {
          urlParams = urlParams.substring(1);
        }

        urlParams = urlParams.split("&");

        for (var m = 0; m < urlParams.length; ++m) {
          var p = urlParams[m].split("=", 2);

          if (p.length == 2) {
            paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
          }
        }
      }

      params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);

      url =
        $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);

      thumb =
        $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);

      if (providerName === "youtube") {
        url = url.replace(/&t=((\d+)m)?(\d+)s/, function (match, p1, m, s) {
          return "&start=" + ((m ? parseInt(m, 10) * 60 : 0) + parseInt(s, 10));
        });
      } else if (providerName === "vimeo") {
        url = url.replace("&%23", "#");
      }

      return false;
    });

    // If it is found, then change content type and update the url

    if (type) {
      if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
        item.opts.thumb = thumb;
      }

      if (type === "iframe") {
        item.opts = $.extend(true, item.opts, {
          iframe: {
            preload: false,
            attr: {
              scrolling: "no"
            }
          }
        });
      }

      $.extend(item, {
        type: type,
        src: url,
        origSrc: item.src,
        contentSource: provider,
        contentType: type === "image" ? "image" : provider == "gmap_place" || provider == "gmap_search" ? "map" : "video"
      });
    } else if (url) {
      item.type = item.opts.defaultType;
    }
  });

  // Load YouTube/Video API on request to detect when video finished playing
  var VideoAPILoader = {
    youtube: {
      src: "https://www.youtube.com/iframe_api",
      class: "YT",
      loading: false,
      loaded: false
    },

    vimeo: {
      src: "https://player.vimeo.com/api/player.js",
      class: "Vimeo",
      loading: false,
      loaded: false
    },

    load: function (vendor) {
      var _this = this,
        script;

      if (this[vendor].loaded) {
        setTimeout(function () {
          _this.done(vendor);
        });
        return;
      }

      if (this[vendor].loading) {
        return;
      }

      this[vendor].loading = true;

      script = document.createElement("script");
      script.type = "text/javascript";
      script.src = this[vendor].src;

      if (vendor === "youtube") {
        window.onYouTubeIframeAPIReady = function () {
          _this[vendor].loaded = true;
          _this.done(vendor);
        };
      } else {
        script.onload = function () {
          _this[vendor].loaded = true;
          _this.done(vendor);
        };
      }

      document.body.appendChild(script);
    },
    done: function (vendor) {
      var instance, $el, player;

      if (vendor === "youtube") {
        delete window.onYouTubeIframeAPIReady;
      }

      instance = $.fancybox.getInstance();

      if (instance) {
        $el = instance.current.$content.find("iframe");

        if (vendor === "youtube" && YT !== undefined && YT) {
          player = new YT.Player($el.attr("id"), {
            events: {
              onStateChange: function (e) {
                if (e.data == 0) {
                  instance.next();
                }
              }
            }
          });
        } else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
          player = new Vimeo.Player($el);

          player.on("ended", function () {
            instance.next();
          });
        }
      }
    }
  };

  $(document).on({
    "afterShow.fb": function (e, instance, current) {
      if (instance.group.length > 1 && (current.contentSource === "youtube" || current.contentSource === "vimeo")) {
        VideoAPILoader.load(current.contentSource);
      }
    }
  });
})(jQuery);
// ==========================================================================
//
// Guestures
// Adds touch guestures, handles click and tap events
//
// ==========================================================================
(function (window, document, $) {
  "use strict";

  var requestAFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      // if all else fails, use setTimeout
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  var cancelAFrame = (function () {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      function (id) {
        window.clearTimeout(id);
      }
    );
  })();

  var getPointerXY = function (e) {
    var result = [];

    e = e.originalEvent || e || window.e;
    e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];

    for (var key in e) {
      if (e[key].pageX) {
        result.push({
          x: e[key].pageX,
          y: e[key].pageY
        });
      } else if (e[key].clientX) {
        result.push({
          x: e[key].clientX,
          y: e[key].clientY
        });
      }
    }

    return result;
  };

  var distance = function (point2, point1, what) {
    if (!point1 || !point2) {
      return 0;
    }

    if (what === "x") {
      return point2.x - point1.x;
    } else if (what === "y") {
      return point2.y - point1.y;
    }

    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  };

  var isClickable = function ($el) {
    if (
      $el.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') ||
      $.isFunction($el.get(0).onclick) ||
      $el.data("selectable")
    ) {
      return true;
    }

    // Check for attributes like data-fancybox-next or data-fancybox-close
    for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
      if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
        return true;
      }
    }

    return false;
  };

  var hasScrollbars = function (el) {
    var overflowY = window.getComputedStyle(el)["overflow-y"],
      overflowX = window.getComputedStyle(el)["overflow-x"],
      vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight,
      horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;

    return vertical || horizontal;
  };

  var isScrollable = function ($el) {
    var rez = false;

    while (true) {
      rez = hasScrollbars($el.get(0));

      if (rez) {
        break;
      }

      $el = $el.parent();

      if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
        break;
      }
    }

    return rez;
  };

  var Guestures = function (instance) {
    var self = this;

    self.instance = instance;

    self.$bg = instance.$refs.bg;
    self.$stage = instance.$refs.stage;
    self.$container = instance.$refs.container;

    self.destroy();

    self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"));
  };

  Guestures.prototype.destroy = function () {
    var self = this;

    self.$container.off(".fb.touch");

    $(document).off(".fb.touch");

    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }

    if (self.tapped) {
      clearTimeout(self.tapped);
      self.tapped = null;
    }
  };

  Guestures.prototype.ontouchstart = function (e) {
    var self = this,
      $target = $(e.target),
      instance = self.instance,
      current = instance.current,
      $slide = current.$slide,
      $content = current.$content,
      isTouchDevice = e.type == "touchstart";

    // Do not respond to both (touch and mouse) events
    if (isTouchDevice) {
      self.$container.off("mousedown.fb.touch");
    }

    // Ignore right click
    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }

    // Ignore taping on links, buttons, input elements
    if (!$slide.length || !$target.length || isClickable($target) || isClickable($target.parent())) {
      return;
    }
    // Ignore clicks on the scrollbar
    if (!$target.is("img") && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
      return;
    }

    // Ignore clicks while zooming or closing
    if (!current || instance.isAnimating || current.$slide.hasClass("fancybox-animated")) {
      e.stopPropagation();
      e.preventDefault();

      return;
    }

    self.realPoints = self.startPoints = getPointerXY(e);

    if (!self.startPoints.length) {
      return;
    }

    // Allow other scripts to catch touch event if "touch" is set to false
    if (current.touch) {
      e.stopPropagation();
    }

    self.startEvent = e;

    self.canTap = true;
    self.$target = $target;
    self.$content = $content;
    self.opts = current.opts.touch;

    self.isPanning = false;
    self.isSwiping = false;
    self.isZooming = false;
    self.isScrolling = false;
    self.canPan = instance.canPan();

    self.startTime = new Date().getTime();
    self.distanceX = self.distanceY = self.distance = 0;

    self.canvasWidth = Math.round($slide[0].clientWidth);
    self.canvasHeight = Math.round($slide[0].clientHeight);

    self.contentLastPos = null;
    self.contentStartPos = $.fancybox.getTranslate(self.$content) || {
      top: 0,
      left: 0
    };
    self.sliderStartPos = $.fancybox.getTranslate($slide);

    // Since position will be absolute, but we need to make it relative to the stage
    self.stagePos = $.fancybox.getTranslate(instance.$refs.stage);

    self.sliderStartPos.top -= self.stagePos.top;
    self.sliderStartPos.left -= self.stagePos.left;

    self.contentStartPos.top -= self.stagePos.top;
    self.contentStartPos.left -= self.stagePos.left;

    $(document)
      .off(".fb.touch")
      .on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", $.proxy(self, "ontouchend"))
      .on(isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch", $.proxy(self, "ontouchmove"));

    if ($.fancybox.isMobile) {
      document.addEventListener("scroll", self.onscroll, true);
    }

    // Skip if clicked outside the sliding area
    if (!(self.opts || self.canPan) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
      if ($target.is(".fancybox-image")) {
        e.preventDefault();
      }

      if (!($.fancybox.isMobile && $target.parents(".fancybox-caption").length)) {
        return;
      }
    }

    self.isScrollable = isScrollable($target) || isScrollable($target.parent());

    // Check if element is scrollable and try to prevent default behavior (scrolling)
    if (!($.fancybox.isMobile && self.isScrollable)) {
      e.preventDefault();
    }

    // One finger or mouse click - swipe or pan an image
    if (self.startPoints.length === 1 || current.hasError) {
      if (self.canPan) {
        $.fancybox.stop(self.$content);

        self.isPanning = true;
      } else {
        self.isSwiping = true;
      }

      self.$container.addClass("fancybox-is-grabbing");
    }

    // Two fingers - zoom image
    if (self.startPoints.length === 2 && current.type === "image" && (current.isLoaded || current.$ghost)) {
      self.canTap = false;
      self.isSwiping = false;
      self.isPanning = false;

      self.isZooming = true;

      $.fancybox.stop(self.$content);

      self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
      self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();

      self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
      self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;

      self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
    }
  };

  Guestures.prototype.onscroll = function (e) {
    var self = this;

    self.isScrolling = true;

    document.removeEventListener("scroll", self.onscroll, true);
  };

  Guestures.prototype.ontouchmove = function (e) {
    var self = this;

    // Make sure user has not released over iframe or disabled element
    if (e.originalEvent.buttons !== undefined && e.originalEvent.buttons === 0) {
      self.ontouchend(e);
      return;
    }

    if (self.isScrolling) {
      self.canTap = false;
      return;
    }

    self.newPoints = getPointerXY(e);

    if (!(self.opts || self.canPan) || !self.newPoints.length || !self.newPoints.length) {
      return;
    }

    if (!(self.isSwiping && self.isSwiping === true)) {
      e.preventDefault();
    }

    self.distanceX = distance(self.newPoints[0], self.startPoints[0], "x");
    self.distanceY = distance(self.newPoints[0], self.startPoints[0], "y");

    self.distance = distance(self.newPoints[0], self.startPoints[0]);

    // Skip false ontouchmove events (Chrome)
    if (self.distance > 0) {
      if (self.isSwiping) {
        self.onSwipe(e);
      } else if (self.isPanning) {
        self.onPan();
      } else if (self.isZooming) {
        self.onZoom();
      }
    }
  };

  Guestures.prototype.onSwipe = function (e) {
    var self = this,
      instance = self.instance,
      swiping = self.isSwiping,
      left = self.sliderStartPos.left || 0,
      angle;

    // If direction is not yet determined
    if (swiping === true) {
      // We need at least 10px distance to correctly calculate an angle
      if (Math.abs(self.distance) > 10) {
        self.canTap = false;

        if (instance.group.length < 2 && self.opts.vertical) {
          self.isSwiping = "y";
        } else if (instance.isDragging || self.opts.vertical === false || (self.opts.vertical === "auto" && $(window).width() > 800)) {
          self.isSwiping = "x";
        } else {
          angle = Math.abs((Math.atan2(self.distanceY, self.distanceX) * 180) / Math.PI);

          self.isSwiping = angle > 45 && angle < 135 ? "y" : "x";
        }

        if (self.isSwiping === "y" && $.fancybox.isMobile && self.isScrollable) {
          self.isScrolling = true;

          return;
        }

        instance.isDragging = self.isSwiping;

        // Reset points to avoid jumping, because we dropped first swipes to calculate the angle
        self.startPoints = self.newPoints;

        $.each(instance.slides, function (index, slide) {
          var slidePos, stagePos;

          $.fancybox.stop(slide.$slide);

          slidePos = $.fancybox.getTranslate(slide.$slide);
          stagePos = $.fancybox.getTranslate(instance.$refs.stage);

          slide.$slide
            .css({
              transform: "",
              opacity: "",
              "transition-duration": ""
            })
            .removeClass("fancybox-animated")
            .removeClass(function (index, className) {
              return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
            });

          if (slide.pos === instance.current.pos) {
            self.sliderStartPos.top = slidePos.top - stagePos.top;
            self.sliderStartPos.left = slidePos.left - stagePos.left;
          }

          $.fancybox.setTranslate(slide.$slide, {
            top: slidePos.top - stagePos.top,
            left: slidePos.left - stagePos.left
          });
        });

        // Stop slideshow
        if (instance.SlideShow && instance.SlideShow.isActive) {
          instance.SlideShow.stop();
        }
      }

      return;
    }

    // Sticky edges
    if (swiping == "x") {
      if (
        self.distanceX > 0 &&
        (self.instance.group.length < 2 || (self.instance.current.index === 0 && !self.instance.current.opts.loop))
      ) {
        left = left + Math.pow(self.distanceX, 0.8);
      } else if (
        self.distanceX < 0 &&
        (self.instance.group.length < 2 ||
          (self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop))
      ) {
        left = left - Math.pow(-self.distanceX, 0.8);
      } else {
        left = left + self.distanceX;
      }
    }

    self.sliderLastPos = {
      top: swiping == "x" ? 0 : self.sliderStartPos.top + self.distanceY,
      left: left
    };

    if (self.requestId) {
      cancelAFrame(self.requestId);

      self.requestId = null;
    }

    self.requestId = requestAFrame(function () {
      if (self.sliderLastPos) {
        $.each(self.instance.slides, function (index, slide) {
          var pos = slide.pos - self.instance.currPos;

          $.fancybox.setTranslate(slide.$slide, {
            top: self.sliderLastPos.top,
            left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
          });
        });

        self.$container.addClass("fancybox-is-sliding");
      }
    });
  };

  Guestures.prototype.onPan = function () {
    var self = this;

    // Prevent accidental movement (sometimes, when tapping casually, finger can move a bit)
    if (distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
      self.startPoints = self.newPoints;
      return;
    }

    self.canTap = false;

    self.contentLastPos = self.limitMovement();

    if (self.requestId) {
      cancelAFrame(self.requestId);
    }

    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  // Make panning sticky to the edges
  Guestures.prototype.limitMovement = function () {
    var self = this;

    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;

    var distanceX = self.distanceX;
    var distanceY = self.distanceY;

    var contentStartPos = self.contentStartPos;

    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;

    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;

    var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;

    if (currentWidth > canvasWidth) {
      newOffsetX = currentOffsetX + distanceX;
    } else {
      newOffsetX = currentOffsetX;
    }

    newOffsetY = currentOffsetY + distanceY;

    // Slow down proportionally to traveled distance
    minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
    minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);

    maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
    maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5);

    //   ->
    if (distanceX > 0 && newOffsetX > minTranslateX) {
      newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
    }

    //    <-
    if (distanceX < 0 && newOffsetX < maxTranslateX) {
      newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
    }

    //   \/
    if (distanceY > 0 && newOffsetY > minTranslateY) {
      newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
    }

    //   /\
    if (distanceY < 0 && newOffsetY < maxTranslateY) {
      newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
    }

    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };

  Guestures.prototype.limitPosition = function (newOffsetX, newOffsetY, newWidth, newHeight) {
    var self = this;

    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;

    if (newWidth > canvasWidth) {
      newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
      newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
    } else {
      // Center horizontally
      newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
    }

    if (newHeight > canvasHeight) {
      newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
      newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
    } else {
      // Center vertically
      newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
    }

    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };

  Guestures.prototype.onZoom = function () {
    var self = this;

    // Calculate current distance between points to get pinch ratio and new width and height
    var contentStartPos = self.contentStartPos;

    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;

    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;

    var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);

    var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;

    var newWidth = Math.floor(currentWidth * pinchRatio);
    var newHeight = Math.floor(currentHeight * pinchRatio);

    // This is the translation due to pinch-zooming
    var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
    var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;

    // Point between the two touches
    var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
    var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();

    // And this is the translation due to translation of the centerpoint
    // between the two fingers
    var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
    var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;

    // The new offset is the old/current one plus the total translation
    var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
    var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);

    var newPos = {
      top: newOffsetY,
      left: newOffsetX,
      scaleX: pinchRatio,
      scaleY: pinchRatio
    };

    self.canTap = false;

    self.newWidth = newWidth;
    self.newHeight = newHeight;

    self.contentLastPos = newPos;

    if (self.requestId) {
      cancelAFrame(self.requestId);
    }

    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  Guestures.prototype.ontouchend = function (e) {
    var self = this;

    var swiping = self.isSwiping;
    var panning = self.isPanning;
    var zooming = self.isZooming;
    var scrolling = self.isScrolling;

    self.endPoints = getPointerXY(e);
    self.dMs = Math.max(new Date().getTime() - self.startTime, 1);

    self.$container.removeClass("fancybox-is-grabbing");

    $(document).off(".fb.touch");

    document.removeEventListener("scroll", self.onscroll, true);

    if (self.requestId) {
      cancelAFrame(self.requestId);

      self.requestId = null;
    }

    self.isSwiping = false;
    self.isPanning = false;
    self.isZooming = false;
    self.isScrolling = false;

    self.instance.isDragging = false;

    if (self.canTap) {
      return self.onTap(e);
    }

    self.speed = 100;

    // Speed in px/ms
    self.velocityX = (self.distanceX / self.dMs) * 0.5;
    self.velocityY = (self.distanceY / self.dMs) * 0.5;

    if (panning) {
      self.endPanning();
    } else if (zooming) {
      self.endZooming();
    } else {
      self.endSwiping(swiping, scrolling);
    }

    return;
  };

  Guestures.prototype.endSwiping = function (swiping, scrolling) {
    var self = this,
      ret = false,
      len = self.instance.group.length,
      distanceX = Math.abs(self.distanceX),
      canAdvance = swiping == "x" && len > 1 && ((self.dMs > 130 && distanceX > 10) || distanceX > 50),
      speedX = 300;

    self.sliderLastPos = null;

    // Close if swiped vertically / navigate if horizontally
    if (swiping == "y" && !scrolling && Math.abs(self.distanceY) > 50) {
      // Continue vertical movement
      $.fancybox.animate(
        self.instance.current.$slide, {
          top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
          opacity: 0
        },
        200
      );
      ret = self.instance.close(true, 250);
    } else if (canAdvance && self.distanceX > 0) {
      ret = self.instance.previous(speedX);
    } else if (canAdvance && self.distanceX < 0) {
      ret = self.instance.next(speedX);
    }

    if (ret === false && (swiping == "x" || swiping == "y")) {
      self.instance.centerSlide(200);
    }

    self.$container.removeClass("fancybox-is-sliding");
  };

  // Limit panning from edges
  // ========================
  Guestures.prototype.endPanning = function () {
    var self = this,
      newOffsetX,
      newOffsetY,
      newPos;

    if (!self.contentLastPos) {
      return;
    }

    if (self.opts.momentum === false || self.dMs > 350) {
      newOffsetX = self.contentLastPos.left;
      newOffsetY = self.contentLastPos.top;
    } else {
      // Continue movement
      newOffsetX = self.contentLastPos.left + self.velocityX * 500;
      newOffsetY = self.contentLastPos.top + self.velocityY * 500;
    }

    newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);

    newPos.width = self.contentStartPos.width;
    newPos.height = self.contentStartPos.height;

    $.fancybox.animate(self.$content, newPos, 366);
  };

  Guestures.prototype.endZooming = function () {
    var self = this;

    var current = self.instance.current;

    var newOffsetX, newOffsetY, newPos, reset;

    var newWidth = self.newWidth;
    var newHeight = self.newHeight;

    if (!self.contentLastPos) {
      return;
    }

    newOffsetX = self.contentLastPos.left;
    newOffsetY = self.contentLastPos.top;

    reset = {
      top: newOffsetY,
      left: newOffsetX,
      width: newWidth,
      height: newHeight,
      scaleX: 1,
      scaleY: 1
    };

    // Reset scalex/scaleY values; this helps for perfomance and does not break animation
    $.fancybox.setTranslate(self.$content, reset);

    if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
      self.instance.scaleToFit(150);
    } else if (newWidth > current.width || newHeight > current.height) {
      self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
    } else {
      newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);

      $.fancybox.animate(self.$content, newPos, 150);
    }
  };

  Guestures.prototype.onTap = function (e) {
    var self = this;
    var $target = $(e.target);

    var instance = self.instance;
    var current = instance.current;

    var endPoints = (e && getPointerXY(e)) || self.startPoints;

    var tapX = endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left : 0;
    var tapY = endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top : 0;

    var where;

    var process = function (prefix) {
      var action = current.opts[prefix];

      if ($.isFunction(action)) {
        action = action.apply(instance, [current, e]);
      }

      if (!action) {
        return;
      }

      switch (action) {
        case "close":
          instance.close(self.startEvent);

          break;

        case "toggleControls":
          instance.toggleControls();

          break;

        case "next":
          instance.next();

          break;

        case "nextOrClose":
          if (instance.group.length > 1) {
            instance.next();
          } else {
            instance.close(self.startEvent);
          }

          break;

        case "zoom":
          if (current.type == "image" && (current.isLoaded || current.$ghost)) {
            if (instance.canPan()) {
              instance.scaleToFit();
            } else if (instance.isScaledDown()) {
              instance.scaleToActual(tapX, tapY);
            } else if (instance.group.length < 2) {
              instance.close(self.startEvent);
            }
          }

          break;
      }
    };

    // Ignore right click
    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }

    // Skip if clicked on the scrollbar
    if (!$target.is("img") && tapX > $target[0].clientWidth + $target.offset().left) {
      return;
    }

    // Check where is clicked
    if ($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) {
      where = "Outside";
    } else if ($target.is(".fancybox-slide")) {
      where = "Slide";
    } else if (
      instance.current.$content &&
      instance.current.$content
      .find($target)
      .addBack()
      .filter($target).length
    ) {
      where = "Content";
    } else {
      return;
    }

    // Check if this is a double tap
    if (self.tapped) {
      // Stop previously created single tap
      clearTimeout(self.tapped);
      self.tapped = null;

      // Skip if distance between taps is too big
      if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
        return this;
      }

      // OK, now we assume that this is a double-tap
      process("dblclick" + where);
    } else {
      // Single tap will be processed if user has not clicked second time within 300ms
      // or there is no need to wait for double-tap
      self.tapX = tapX;
      self.tapY = tapY;

      if (current.opts["dblclick" + where] && current.opts["dblclick" + where] !== current.opts["click" + where]) {
        self.tapped = setTimeout(function () {
          self.tapped = null;

          if (!instance.isAnimating) {
            process("click" + where);
          }
        }, 500);
      } else {
        process("click" + where);
      }
    }

    return this;
  };

  $(document)
    .on("onActivate.fb", function (e, instance) {
      if (instance && !instance.Guestures) {
        instance.Guestures = new Guestures(instance);
      }
    })
    .on("beforeClose.fb", function (e, instance) {
      if (instance && instance.Guestures) {
        instance.Guestures.destroy();
      }
    });
})(window, document, jQuery);
// ==========================================================================
//
// SlideShow
// Enables slideshow functionality
//
// Example of usage:
// $.fancybox.getInstance().SlideShow.start()
//
// ==========================================================================
(function (document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' +
        "</button>"
    },
    slideShow: {
      autoStart: false,
      speed: 3000,
      progress: true
    }
  });

  var SlideShow = function (instance) {
    this.instance = instance;
    this.init();
  };

  $.extend(SlideShow.prototype, {
    timer: null,
    isActive: false,
    $button: null,

    init: function () {
      var self = this,
        instance = self.instance,
        opts = instance.group[instance.currIndex].opts.slideShow;

      self.$button = instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        self.toggle();
      });

      if (instance.group.length < 2 || !opts) {
        self.$button.hide();
      } else if (opts.progress) {
        self.$progress = $('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner);
      }
    },

    set: function (force) {
      var self = this,
        instance = self.instance,
        current = instance.current;

      // Check if reached last element
      if (current && (force === true || current.opts.loop || instance.currIndex < instance.group.length - 1)) {
        if (self.isActive && current.contentType !== "video") {
          if (self.$progress) {
            $.fancybox.animate(self.$progress.show(), {
              scaleX: 1
            }, current.opts.slideShow.speed);
          }

          self.timer = setTimeout(function () {
            if (!instance.current.opts.loop && instance.current.index == instance.group.length - 1) {
              instance.jumpTo(0);
            } else {
              instance.next();
            }
          }, current.opts.slideShow.speed);
        }
      } else {
        self.stop();
        instance.idleSecondsCounter = 0;
        instance.showControls();
      }
    },

    clear: function () {
      var self = this;

      clearTimeout(self.timer);

      self.timer = null;

      if (self.$progress) {
        self.$progress.removeAttr("style").hide();
      }
    },

    start: function () {
      var self = this,
        current = self.instance.current;

      if (current) {
        self.$button
          .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_STOP)
          .removeClass("fancybox-button--play")
          .addClass("fancybox-button--pause");

        self.isActive = true;

        if (current.isComplete) {
          self.set(true);
        }

        self.instance.trigger("onSlideShowChange", true);
      }
    },

    stop: function () {
      var self = this,
        current = self.instance.current;

      self.clear();

      self.$button
        .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_START)
        .removeClass("fancybox-button--pause")
        .addClass("fancybox-button--play");

      self.isActive = false;

      self.instance.trigger("onSlideShowChange", false);

      if (self.$progress) {
        self.$progress.removeAttr("style").hide();
      }
    },

    toggle: function () {
      var self = this;

      if (self.isActive) {
        self.stop();
      } else {
        self.start();
      }
    }
  });

  $(document).on({
    "onInit.fb": function (e, instance) {
      if (instance && !instance.SlideShow) {
        instance.SlideShow = new SlideShow(instance);
      }
    },

    "beforeShow.fb": function (e, instance, current, firstRun) {
      var SlideShow = instance && instance.SlideShow;

      if (firstRun) {
        if (SlideShow && current.opts.slideShow.autoStart) {
          SlideShow.start();
        }
      } else if (SlideShow && SlideShow.isActive) {
        SlideShow.clear();
      }
    },

    "afterShow.fb": function (e, instance, current) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow && SlideShow.isActive) {
        SlideShow.set();
      }
    },

    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
      var SlideShow = instance && instance.SlideShow;

      // "P" or Spacebar
      if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is("button,a,input")) {
        keypress.preventDefault();

        SlideShow.toggle();
      }
    },

    "beforeClose.fb onDeactivate.fb": function (e, instance) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow) {
        SlideShow.stop();
      }
    }
  });

  // Page Visibility API to pause slideshow when window is not active
  $(document).on("visibilitychange", function () {
    var instance = $.fancybox.getInstance(),
      SlideShow = instance && instance.SlideShow;

    if (SlideShow && SlideShow.isActive) {
      if (document.hidden) {
        SlideShow.clear();
      } else {
        SlideShow.set();
      }
    }
  });
})(document, jQuery);
// ==========================================================================
//
// FullScreen
// Adds fullscreen functionality
//
// ==========================================================================
(function (document, $) {
  "use strict";

  // Collection of methods supported by user browser
  var fn = (function () {
    var fnMap = [
      ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
      // new WebKit
      [
        "webkitRequestFullscreen",
        "webkitExitFullscreen",
        "webkitFullscreenElement",
        "webkitFullscreenEnabled",
        "webkitfullscreenchange",
        "webkitfullscreenerror"
      ],
      // old WebKit (Safari 5.1)
      [
        "webkitRequestFullScreen",
        "webkitCancelFullScreen",
        "webkitCurrentFullScreenElement",
        "webkitCancelFullScreen",
        "webkitfullscreenchange",
        "webkitfullscreenerror"
      ],
      [
        "mozRequestFullScreen",
        "mozCancelFullScreen",
        "mozFullScreenElement",
        "mozFullScreenEnabled",
        "mozfullscreenchange",
        "mozfullscreenerror"
      ],
      ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
    ];

    var ret = {};

    for (var i = 0; i < fnMap.length; i++) {
      var val = fnMap[i];

      if (val && val[1] in document) {
        for (var j = 0; j < val.length; j++) {
          ret[fnMap[0][j]] = val[j];
        }

        return ret;
      }
    }

    return false;
  })();

  if (fn) {
    var FullScreen = {
      request: function (elem) {
        elem = elem || document.documentElement;

        elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
      },
      exit: function () {
        document[fn.exitFullscreen]();
      },
      toggle: function (elem) {
        elem = elem || document.documentElement;

        if (this.isFullscreen()) {
          this.exit();
        } else {
          this.request(elem);
        }
      },
      isFullscreen: function () {
        return Boolean(document[fn.fullscreenElement]);
      },
      enabled: function () {
        return Boolean(document[fn.fullscreenEnabled]);
      }
    };

    $.extend(true, $.fancybox.defaults, {
      btnTpl: {
        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' +
          "</button>"
      },
      fullScreen: {
        autoStart: false
      }
    });

    $(document).on(fn.fullscreenchange, function () {
      var isFullscreen = FullScreen.isFullscreen(),
        instance = $.fancybox.getInstance();

      if (instance) {
        // If image is zooming, then force to stop and reposition properly
        if (instance.current && instance.current.type === "image" && instance.isAnimating) {
          instance.isAnimating = false;

          instance.update(true, true, 0);

          if (!instance.isComplete) {
            instance.complete();
          }
        }

        instance.trigger("onFullscreenChange", isFullscreen);

        instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);

        instance.$refs.toolbar
          .find("[data-fancybox-fullscreen]")
          .toggleClass("fancybox-button--fsenter", !isFullscreen)
          .toggleClass("fancybox-button--fsexit", isFullscreen);
      }
    });
  }

  $(document).on({
    "onInit.fb": function (e, instance) {
      var $container;

      if (!fn) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();

        return;
      }

      if (instance && instance.group[instance.currIndex].opts.fullScreen) {
        $container = instance.$refs.container;

        $container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          FullScreen.toggle();
        });

        if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
          FullScreen.request();
        }

        // Expose API
        instance.FullScreen = FullScreen;
      } else if (instance) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
      }
    },

    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
      // "F"
      if (instance && instance.FullScreen && keycode === 70) {
        keypress.preventDefault();

        instance.FullScreen.toggle();
      }
    },

    "beforeClose.fb": function (e, instance) {
      if (instance && instance.FullScreen && instance.$refs.container.hasClass("fancybox-is-fullscreen")) {
        FullScreen.exit();
      }
    }
  });
})(document, jQuery);
// ==========================================================================
//
// Thumbs
// Displays thumbnails in a grid
//
// ==========================================================================
(function (document, $) {
  "use strict";

  var CLASS = "fancybox-thumbs",
    CLASS_ACTIVE = CLASS + "-active";

  // Make sure there are default values
  $.fancybox.defaults = $.extend(
    true, {
      btnTpl: {
        thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' +
          "</button>"
      },
      thumbs: {
        autoStart: false, // Display thumbnails on opening
        hideOnClose: true, // Hide thumbnail grid when closing animation starts
        parentEl: ".fancybox-container", // Container is injected into this element
        axis: "y" // Vertical (y) or horizontal (x) scrolling
      }
    },
    $.fancybox.defaults
  );

  var FancyThumbs = function (instance) {
    this.init(instance);
  };

  $.extend(FancyThumbs.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: false,
    isActive: false,

    init: function (instance) {
      var self = this,
        group = instance.group,
        enabled = 0;

      self.instance = instance;
      self.opts = group[instance.currIndex].opts.thumbs;

      instance.Thumbs = self;

      self.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]");

      // Enable thumbs if at least two group items have thumbnails
      for (var i = 0, len = group.length; i < len; i++) {
        if (group[i].thumb) {
          enabled++;
        }

        if (enabled > 1) {
          break;
        }
      }

      if (enabled > 1 && !!self.opts) {
        self.$button.removeAttr("style").on("click", function () {
          self.toggle();
        });

        self.isActive = true;
      } else {
        self.$button.hide();
      }
    },

    create: function () {
      var self = this,
        instance = self.instance,
        parentEl = self.opts.parentEl,
        list = [],
        src;

      if (!self.$grid) {
        // Create main element
        self.$grid = $('<div class="' + CLASS + " " + CLASS + "-" + self.opts.axis + '"></div>').appendTo(
          instance.$refs.container
          .find(parentEl)
          .addBack()
          .filter(parentEl)
        );

        // Add "click" event that performs gallery navigation
        self.$grid.on("click", "a", function () {
          instance.jumpTo($(this).attr("data-index"));
        });
      }

      // Build the list
      if (!self.$list) {
        self.$list = $('<div class="' + CLASS + '__list">').appendTo(self.$grid);
      }

      $.each(instance.group, function (i, item) {
        src = item.thumb;

        if (!src && item.type === "image") {
          src = item.src;
        }

        list.push(
          '<a href="javascript:;" tabindex="0" data-index="' +
          i +
          '"' +
          (src && src.length ? ' style="background-image:url(' + src + ')"' : 'class="fancybox-thumbs-missing"') +
          "></a>"
        );
      });

      self.$list[0].innerHTML = list.join("");

      if (self.opts.axis === "x") {
        // Set fixed width for list element to enable horizontal scrolling
        self.$list.width(
          parseInt(self.$grid.css("padding-right"), 10) +
          instance.group.length *
          self.$list
          .children()
          .eq(0)
          .outerWidth(true)
        );
      }
    },

    focus: function (duration) {
      var self = this,
        $list = self.$list,
        $grid = self.$grid,
        thumb,
        thumbPos;

      if (!self.instance.current) {
        return;
      }

      thumb = $list
        .children()
        .removeClass(CLASS_ACTIVE)
        .filter('[data-index="' + self.instance.current.index + '"]')
        .addClass(CLASS_ACTIVE);

      thumbPos = thumb.position();

      // Check if need to scroll to make current thumb visible
      if (self.opts.axis === "y" && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
        $list.stop().animate({
            scrollTop: $list.scrollTop() + thumbPos.top
          },
          duration
        );
      } else if (
        self.opts.axis === "x" &&
        (thumbPos.left < $grid.scrollLeft() || thumbPos.left > $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))
      ) {
        $list
          .parent()
          .stop()
          .animate({
              scrollLeft: thumbPos.left
            },
            duration
          );
      }
    },

    update: function () {
      var that = this;
      that.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);

      if (that.isVisible) {
        if (!that.$grid) {
          that.create();
        }

        that.instance.trigger("onThumbsShow");

        that.focus(0);
      } else if (that.$grid) {
        that.instance.trigger("onThumbsHide");
      }

      // Update content position
      that.instance.update();
    },

    hide: function () {
      this.isVisible = false;
      this.update();
    },

    show: function () {
      this.isVisible = true;
      this.update();
    },

    toggle: function () {
      this.isVisible = !this.isVisible;
      this.update();
    }
  });

  $(document).on({
    "onInit.fb": function (e, instance) {
      var Thumbs;

      if (instance && !instance.Thumbs) {
        Thumbs = new FancyThumbs(instance);

        if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
          Thumbs.show();
        }
      }
    },

    "beforeShow.fb": function (e, instance, item, firstRun) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible) {
        Thumbs.focus(firstRun ? 0 : 250);
      }
    },

    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
      var Thumbs = instance && instance.Thumbs;

      // "G"
      if (Thumbs && Thumbs.isActive && keycode === 71) {
        keypress.preventDefault();

        Thumbs.toggle();
      }
    },

    "beforeClose.fb": function (e, instance) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
        Thumbs.$grid.hide();
      }
    }
  });
})(document, jQuery);
//// ==========================================================================
//
// Share
// Displays simple form for sharing current url
//
// ==========================================================================
(function (document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' +
        "</button>"
    },
    share: {
      url: function (instance, item) {
        return (
          (!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location
        );
      },
      tpl: '<div class="fancybox-share">' +
        "<h1>{{SHARE}}</h1>" +
        "<p>" +
        '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' +
        "<span>Facebook</span>" +
        "</a>" +
        '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' +
        "<span>Twitter</span>" +
        "</a>" +
        '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' +
        "<span>Pinterest</span>" +
        "</a>" +
        "</p>" +
        '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' +
        "</div>"
    }
  });

  function escapeHtml(string) {
    var entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };

    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
      return entityMap[s];
    });
  }

  $(document).on("click", "[data-fancybox-share]", function () {
    var instance = $.fancybox.getInstance(),
      current = instance.current || null,
      url,
      tpl;

    if (!current) {
      return;
    }

    if ($.type(current.opts.share.url) === "function") {
      url = current.opts.share.url.apply(current, [instance, current]);
    }

    tpl = current.opts.share.tpl
      .replace(/\{\{media\}\}/g, current.type === "image" ? encodeURIComponent(current.src) : "")
      .replace(/\{\{url\}\}/g, encodeURIComponent(url))
      .replace(/\{\{url_raw\}\}/g, escapeHtml(url))
      .replace(/\{\{descr\}\}/g, instance.$caption ? encodeURIComponent(instance.$caption.text()) : "");

    $.fancybox.open({
      src: instance.translate(instance, tpl),
      type: "html",
      opts: {
        touch: false,
        animationEffect: false,
        afterLoad: function (shareInstance, shareCurrent) {
          // Close self if parent instance is closing
          instance.$refs.container.one("beforeClose.fb", function () {
            shareInstance.close(null, 0);
          });

          // Opening links in a popup window
          shareCurrent.$content.find(".fancybox-share__button").click(function () {
            window.open(this.href, "Share", "width=550, height=450");
            return false;
          });
        },
        mobile: {
          autoFocus: false
        }
      }
    });
  });
})(document, jQuery);
// ==========================================================================
//
// Hash
// Enables linking to each modal
//
// ==========================================================================
(function (window, document, $) {
  "use strict";

  // Simple $.escapeSelector polyfill (for jQuery prior v3)
  if (!$.escapeSelector) {
    $.escapeSelector = function (sel) {
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      var fcssescape = function (ch, asCodePoint) {
        if (asCodePoint) {
          // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
          if (ch === "\0") {
            return "\uFFFD";
          }

          // Control characters and (dependent upon position) numbers get escaped as code points
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }

        // Other potentially-special ASCII characters get backslash-escaped
        return "\\" + ch;
      };

      return (sel + "").replace(rcssescape, fcssescape);
    };
  }

  // Get info about gallery name and current index from url
  function parseUrl() {
    var hash = window.location.hash.substr(1),
      rez = hash.split("-"),
      index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1,
      gallery = rez.join("-");

    return {
      hash: hash,
      /* Index is starting from 1 */
      index: index < 1 ? 1 : index,
      gallery: gallery
    };
  }

  // Trigger click evnt on links to open new fancyBox instance
  function triggerFromUrl(url) {
    if (url.gallery !== "") {
      // If we can find element matching 'data-fancybox' atribute,
      // then triggering click event should start fancyBox
      $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']")
        .eq(url.index - 1)
        .focus()
        .trigger("click.fb-start");
    }
  }

  // Get gallery name from current instance
  function getGalleryID(instance) {
    var opts, ret;

    if (!instance) {
      return false;
    }

    opts = instance.current ? instance.current.opts : instance.opts;
    ret = opts.hash || (opts.$orig ? opts.$orig.data("fancybox") || opts.$orig.data("fancybox-trigger") : "");

    return ret === "" ? false : ret;
  }

  // Start when DOM becomes ready
  $(function () {
    // Check if user has disabled this module
    if ($.fancybox.defaults.hash === false) {
      return;
    }

    // Update hash when opening/closing fancyBox
    $(document).on({
      "onInit.fb": function (e, instance) {
        var url, gallery;

        if (instance.group[instance.currIndex].opts.hash === false) {
          return;
        }

        url = parseUrl();
        gallery = getGalleryID(instance);

        // Make sure gallery start index matches index from hash
        if (gallery && url.gallery && gallery == url.gallery) {
          instance.currIndex = url.index - 1;
        }
      },

      "beforeShow.fb": function (e, instance, current, firstRun) {
        var gallery;

        if (!current || current.opts.hash === false) {
          return;
        }

        // Check if need to update window hash
        gallery = getGalleryID(instance);

        if (!gallery) {
          return;
        }

        // Variable containing last hash value set by fancyBox
        // It will be used to determine if fancyBox needs to close after hash change is detected
        instance.currentHash = gallery + (instance.group.length > 1 ? "-" + (current.index + 1) : "");

        // If current hash is the same (this instance most likely is opened by hashchange), then do nothing
        if (window.location.hash === "#" + instance.currentHash) {
          return;
        }

        if (firstRun && !instance.origHash) {
          instance.origHash = window.location.hash;
        }

        if (instance.hashTimer) {
          clearTimeout(instance.hashTimer);
        }

        // Update hash
        instance.hashTimer = setTimeout(function () {
          if ("replaceState" in window.history) {
            window.history[firstRun ? "pushState" : "replaceState"]({},
              document.title,
              window.location.pathname + window.location.search + "#" + instance.currentHash
            );

            if (firstRun) {
              instance.hasCreatedHistory = true;
            }
          } else {
            window.location.hash = instance.currentHash;
          }

          instance.hashTimer = null;
        }, 300);
      },

      "beforeClose.fb": function (e, instance, current) {
        if (!current || current.opts.hash === false) {
          return;
        }

        clearTimeout(instance.hashTimer);

        // Goto previous history entry
        if (instance.currentHash && instance.hasCreatedHistory) {
          window.history.back();
        } else if (instance.currentHash) {
          if ("replaceState" in window.history) {
            window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (instance.origHash || ""));
          } else {
            window.location.hash = instance.origHash;
          }
        }

        instance.currentHash = null;
      }
    });

    // Check if need to start/close after url has changed
    $(window).on("hashchange.fb", function () {
      var url = parseUrl(),
        fb = null;

      // Find last fancyBox instance that has "hash"
      $.each(
        $(".fancybox-container")
        .get()
        .reverse(),
        function (index, value) {
          var tmp = $(value).data("FancyBox");

          if (tmp && tmp.currentHash) {
            fb = tmp;
            return false;
          }
        }
      );

      if (fb) {
        // Now, compare hash values
        if (fb.currentHash !== url.gallery + "-" + url.index && !(url.index === 1 && fb.currentHash == url.gallery)) {
          fb.currentHash = null;

          fb.close();
        }
      } else if (url.gallery !== "") {
        triggerFromUrl(url);
      }
    });

    // Check current hash and trigger click event on matching element to start fancyBox, if needed
    setTimeout(function () {
      if (!$.fancybox.getInstance()) {
        triggerFromUrl(parseUrl());
      }
    }, 50);
  });
})(window, document, jQuery);
// ==========================================================================
//
// Wheel
// Basic mouse weheel support for gallery navigation
//
// ==========================================================================
(function (document, $) {
  "use strict";

  var prevTime = new Date().getTime();

  $(document).on({
    "onInit.fb": function (e, instance, current) {
      instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
        var current = instance.current,
          currTime = new Date().getTime();

        if (instance.group.length < 2 || current.opts.wheel === false || (current.opts.wheel === "auto" && current.type !== "image")) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        if (current.$slide.hasClass("fancybox-animated")) {
          return;
        }

        e = e.originalEvent || e;

        if (currTime - prevTime < 250) {
          return;
        }

        prevTime = currTime;

        instance[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]();
      });
    }
  });
})(document, jQuery);

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_ModalManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/ModalManager */ "flarum/components/ModalManager");
/* harmony import */ var flarum_components_ModalManager__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ModalManager__WEBPACK_IMPORTED_MODULE_3__);
/*  
 *  FancyBox Extension for Flarum
 *  Copyright (C) 2019 Eleanor Hawk
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 */





function categorizeImages(element) {
  $(element).find('p > img:not([class])').each(function (i, e) {
    if ($(e).parent().contents().length === 1) $(e).addClass('block-image');else $(e).addClass('inline-image');
  });
  $(element).find('p a:not(.block-image-link,.inline-image-link,.block-image-self-link) > img:not([class])').each(function (i, e) {
    var link = $(e).parent();

    if (link.contents().length === 1 && link.parent().contents().length === 1) {
      $(e).addClass('block-image');

      if ($(e).attr('src') !== link.attr('href')) {
        link.addClass('block-image-link');
      } else {
        link.addClass('block-image-self-link');
        return;
      }
    } else {
      $(e).addClass('inline-image');
      link.addClass('inline-image-link');
    }

    var iconWrapper = document.createElement('div');
    iconWrapper.className = 'extlink-badge';
    var icon = document.createElement('i');
    icon.className = 'fas fa-external-link-alt';
    iconWrapper.appendChild(icon);
    link.append(iconWrapper);
  });
}

app.initializers.add('fancybox', function (app) {
  $.fancybox.defaults.toolbar = false;
  $.fancybox.defaults.lang = app.translator.locale;
  $.fancybox.defaults.i18n[app.translator.locale] = {
    NEXT: app.translator.trans('fancybox.forum.next'),
    PREV: app.translator.trans('fancybox.forum.prev'),
    ERROR: app.translator.trans('fancybox.forum.error')
  };
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'config', function (x, isInitialized, context) {
    var _this = this;

    categorizeImages(this.element);
    $(this.element).find('.block-image-self-link').click(function (e) {
      return e.preventDefault();
    });

    if (!this.isEditing() && !('fancybox_gallery' in this)) {
      var images = $(this.element).find('img.inline-image,img.block-image').not('a.block-image-link *, a.inline-image-link *');
      var gallery = images.map(function (i, e) {
        return {
          src: e.getAttribute('src'),
          type: 'image'
        };
      });
      this.fancybox_gallery = gallery.length ? gallery : false;

      if (this.fancybox_gallery) {
        images.each(function (i, e) {
          var index = i;
          e.style.cursor = 'pointer';
          $(e).off('click.fancybox');
          $(e).on('click.fancybox', function (event) {
            $.fancybox.open(_this.fancybox_gallery, {}, index);
          });
        });
      }
    } else if (this.isEditing() && 'fancybox_gallery' in this) {
      delete this.fancybox_gallery;
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_ModalManager__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'show', function (x) {
    $.fancybox.close();
  });

  if (s9e && s9e.TextFormatter) {
    Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(s9e.TextFormatter, 'preview', function (x, preview, element) {
      if (element.matches('.Post *')) categorizeImages(element);
    });
  }
});

/***/ }),

/***/ "flarum/components/CommentPost":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/CommentPost']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/CommentPost'];

/***/ }),

/***/ "flarum/components/ModalManager":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/ModalManager']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/ModalManager'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ })

/******/ });
;

flarum.extensions['site-custom']=module.exports;

//# sourceMappingURL=https://cssaug.org/forum/public/assets/forum-b3ac46c0.js.map