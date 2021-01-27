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


//# sourceMappingURL=forum.js.map

