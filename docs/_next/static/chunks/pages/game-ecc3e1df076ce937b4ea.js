(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{1566:function(t,e,r){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var r=0;r<e.length;r++){var s=e[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function i(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function l(t){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){return!e||"object"!==l(e)&&"function"!==typeof e?c(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.r(e),r.d(e,{default:function(){return N}});var h=r(6156),f=r(5893),m=r(7294),p=r(9008),b=r(4662);function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,s=d(t);if(e){var n=d(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return u(this,r)}}var g=function(t){o(r,t);var e=v(r);function r(){return s(this,r),e.apply(this,arguments)}return i(r,[{key:"render",value:function(){return"front"==this.props.card.side?(0,f.jsxs)("div",{className:"grid grid-cols-1 grid-rows-1 items-stretch shadow-lg rounded-xl m-1 p-1 bg-white",onClick:this.props.onClick,children:[(0,f.jsx)("img",{className:"row-start-1 col-start-1 rounded-lg",src:this.photo(),alt:""}),(0,f.jsx)("div",{className:"\n                            row-start-1 col-start-1 grid items-center rounded-lg bg-white\n                            ".concat("photo"==this.props.card.state?"hidden":"","\n                    "),children:(0,f.jsx)("div",{className:"text-center",children:b._[this.props.card.name].front})})]}):"back"==this.props.card.side?(0,f.jsx)("div",{className:"shadow-lg rounded-xl m-1 p-1 bg-white",onClick:this.props.onClick,children:(0,f.jsx)("img",{className:"rounded-lg",src:"/gottesbilder/farbtropfen.png",alt:""})}):(0,f.jsx)("div",{className:"invisible",onClick:this.props.onClick,children:(0,f.jsx)("img",{className:"rounded-lg",src:"/gottesbilder/farbtropfen.png",alt:""})})}},{key:"photo",value:function(){return"/gottesbilder/cards/".concat(b._[this.props.card.name].photo)}}]),r}(m.Component);function x(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,s=d(t);if(e){var n=d(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return u(this,r)}}var y=function(t){o(r,t);var e=x(r);function r(t){var n;return s(this,r),(n=e.call(this,t)).state={cards:j(),phase:"openFirst",timeout:null,firstCard:null,secondCard:null},n.match=n.match.bind(c(n)),n.mismatch=n.mismatch.bind(c(n)),n}return i(r,[{key:"render",value:function(){var t=this,e=(0,f.jsx)("div",{className:"row-start-1 col-start-1 hidden"});if("match"==this.state.phase){var r=b._[this.state.cards[this.state.firstCard].name];e=(0,f.jsxs)("div",{className:"row-start-1 col-start-1 grid items-center bg-white",children:[(0,f.jsxs)("div",{className:"grid grid-cols-2 grid-rows-1 items-center",children:[(0,f.jsx)(g,{card:this.state.cards[this.state.firstCard],onClick:function(){}}),(0,f.jsx)(g,{card:this.state.cards[this.state.secondCard],onClick:function(){}})]}),(0,f.jsxs)("figure",{className:"m-1 p-4",children:[(0,f.jsx)("blockquote",{className:"mb-1",cite:r.link,children:(0,f.jsx)("p",{children:r.verse})}),(0,f.jsx)("figcaption",{className:"text-right",children:(0,f.jsx)("cite",{className:"font-medium text-blue-400",children:(0,f.jsxs)("a",{href:r.link,target:"_blank",children:[r.reference,", ",r.translation]})})})]}),(0,f.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded",onClick:this.match,children:"Weiterspielen"})]})}var s=(0,f.jsx)("div",{className:"row-start-1 col-start-1 hidden"});return"end"==this.state.phase&&(s=(0,f.jsx)("div",{className:"row-start-1 col-start-1 grid items-center bg-white",children:(0,f.jsxs)("div",{className:"space-y-8",children:[(0,f.jsx)("p",{className:"text-center text-lg",children:"Du hast es geschafft!"}),(0,f.jsx)("p",{className:"text-center",children:(0,f.jsx)("a",{href:"/gottesbilder/game",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded",children:"Nochmal"})})]})})),(0,f.jsxs)("div",{className:"grid grid-cols-1 grid-rows-1 items-stretch",children:[(0,f.jsx)("div",{className:"row-start-1 col-start-1 grid grid-cols-3",children:this.state.cards.map((function(e,r){return(0,f.jsx)(g,{card:e,onClick:function(){return t.cardClick(r)}},r)}))}),e,s]})}},{key:"cardClick",value:function(t){if("openFirst"==this.state.phase){if("back"==this.state.cards[t].side){var e=this.state.cards.slice();e[t].side="front",this.setState({cards:e,firstCard:t,phase:"openSecond"})}}else if("openSecond"==this.state.phase){if("back"==this.state.cards[t].side){var r=this.state.cards.slice();r[t].side="front";var s=this.state.firstCard,n=t,i=this.state.cards[s].name==this.state.cards[n].name?"match":"mismatch",c=this.state.timeout;"mismatch"==i&&(c=setTimeout(this.mismatch,3e3)),this.setState({cards:r,phase:i,timeout:c,firstCard:s,secondCard:n})}}else"mismatch"==this.state.phase?this.mismatch():this.state.phase}},{key:"mismatch",value:function(){if("mismatch"==this.state.phase){null!==this.state.timeout&&clearTimeout(this.state.timeout);var t=this.state.cards.map((function(t){return t.side="front"==t.side?"back":t.side,t}));this.setState({cards:t,phase:"openFirst",timeout:null})}}},{key:"match",value:function(){if("match"==this.state.phase){var t=this.state.cards.slice();t[this.state.firstCard].side="found",t[this.state.secondCard].side="found";var e=t.some((function(t){return"found"!=t.side}))?"openFirst":"end";this.setState({cards:t,phase:e,firstCard:null,secondCard:null})}}}]),r}(m.Component);function j(){for(var t=Object.keys(b._),e=0;e<6;++e){var r=e+Math.floor(Math.random()*(t.length-e)),s=[t[r],t[e]];t[e]=s[0],t[r]=s[1]}for(var n=[],i=0;i<6;++i)n.push({name:t[i],state:"photo",side:"back"}),n.push({name:t[i],state:"verse",side:"back"});for(var c=0;c<12;++c){var a=c+Math.floor(Math.random()*(n.length-c)),o=[n[a],n[c]];n[c]=o[0],n[a]=o[1]}return n}function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,s=d(t);if(e){var n=d(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return u(this,r)}}function N(){return(0,f.jsxs)("div",{children:[(0,f.jsxs)(p.default,{children:[(0,f.jsx)("title",{children:"Gottesbilder"}),(0,f.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,f.jsx)("main",{className:"bg-center bg-cover",style:{backgroundImage:"url(/gottesbilder/index_background_licht.jpg)"},children:(0,f.jsxs)("div",{className:"max-w-screen-sm h-screen mx-auto bg-white bg-opacity-90 flex flex-col justify-center px-1",children:[(0,f.jsx)(y,{}),(0,f.jsxs)("div",{className:"my-8 font-medium text-lg",children:[(0,f.jsx)("hr",{}),(0,f.jsx)(w,{})]})]})})]})}var w=function(t){o(r,t);var e=k(r);function r(t){var n;return s(this,r),n=e.call(this,t),(0,h.Z)(c(n),"CONFIRMATION_TIMEOUT",5e3),n.state={confirming:!1},n.click=n.click.bind(c(n)),n}return i(r,[{key:"render",value:function(){return this.state.confirming?(0,f.jsxs)("div",{children:[(0,f.jsx)("a",{href:"/gottesbilder",className:"text-blue-400",children:"\xab Spiel beenden und zur\xfcck"})," zum Menu"]}):(0,f.jsxs)("div",{children:[(0,f.jsx)("a",{href:"/gottesbilder",className:"text-blue-400",onClick:this.click,children:"\xab Zur\xfcck"})," zum Menu"]})}},{key:"click",value:function(t){var e=this;t.preventDefault(),this.setState({confirming:!0}),setTimeout((function(){return e.setState({confirming:!1})}),this.CONFIRMATION_TIMEOUT)}}]),r}(m.Component)},3790:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return r(1566)}])}},function(t){t.O(0,[74,774,888,179],(function(){return e=3790,t(t.s=e);var e}));var e=t.O();_N_E=e}]);