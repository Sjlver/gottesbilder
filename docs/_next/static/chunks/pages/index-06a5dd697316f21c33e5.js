(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,r){var n=r(3646),i=r(6860),s=r(379),o=r(8206);e.exports=function(e){return n(e)||i(e)||s(e)||o()}},3367:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var i=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=i},7845:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(i.default.useContext(s.AmpStateContext))};var n,i=(n=r(7294))&&n.__esModule?n:{default:n},s=r(3367);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,i=void 0!==n&&n,s=e.hasQuery,o=void 0!==s&&s;return r||i&&o}},7947:function(e,t,r){"use strict";var n=r(9713);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var s,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(7294)),a=(s=r(617))&&s.__esModule?s:{default:s},c=r(3367),l=r(4287),u=r(7845);function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(i){var s=!0,o=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){o=!0;var a=i.key.slice(i.key.indexOf("$")+1);e.has(a)?s=!1:e.add(a)}switch(i.type){case"title":case"base":t.has(i.type)?s=!1:t.add(i.type);break;case"meta":for(var c=0,l=p.length;c<l;c++){var u=p[c];if(i.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?s=!1:r.add(u);else{var h=i.props[u],d=n[u]||new Set;"name"===u&&o||!d.has(h)?(d.add(h),n[u]=d):s=!1}}}return s}}()).reverse().map((function(e,r){var s=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var a=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,o.default.cloneElement(e,a)}return o.default.cloneElement(e,{key:s})}))}function b(e){var t=e.children,r=(0,o.useContext)(c.AmpStateContext),n=(0,o.useContext)(l.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)}b.rewind=function(){};var w=b;t.default=w},617:function(e,t,r){"use strict";var n=r(319),i=r(4575),s=r(3913),o=(r(1506),r(2205)),a=r(8585),c=r(9754);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var i=c(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return a(this,r)}}t.__esModule=!0,t.default=void 0;var u=r(7294),h=function(e){o(r,e);var t=l(r);function r(e){var s;return i(this,r),(s=t.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(n(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=h},3481:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(5893),i=r(9008);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?c(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=r(7294),m={adler:{photo:"adler.jpg",front:"Gott ist wie ein Adler",verse:"Ein Adler scheucht die Jungen aus dem Nest, damit sie selber fliegen lernen. Doch wachsam schwebt er \xfcber ihnen, und wenn eins m\xfcde wird und f\xe4llt, dann breitet er die Fl\xfcgel unter ihm und f\xe4ngt es auf und tr\xe4gt es fort.",translation:"Gute Nachricht Bibel",link:"https://www.bibleserver.com/GNB/5.Mose32,11",reference:"5. Mose 32,11"},arzt:{photo:"arzt.jpg",front:"Gott ist wie ein Arzt",verse:"Ich, der HERR, bin dein Arzt.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/2.Mose15,26",reference:"2. Mose 15,26"},behueter:{photo:"behueter.jpg",front:"Gott ist mein Beh\xfcter",verse:"Der HERR ist dein H\xfcter, der HERR ist dein Schatten zu deiner Rechten.\xa0Bei Tage wird dich die Sonne nicht stechen noch der Mond des Nachts.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm121,5-6",reference:"Psalm 121,5-6"},burg:{photo:"burg.jpg",front:"Gott ist wie eine Burg",verse:"So wird der HERR eine Burg f\xfcr den Bedr\xfcckten, eine Burg in der Zeit der Not.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm9,10",reference:"Psalm 9,10"},fels:{photo:"fels.jpg",front:"Gott ist wie ein Fels",verse:"Der HERR lebt. Gepriesen ist mein Fels, erhaben ist Gott, der Fels meines Heils.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/2.Samuel22,47",reference:"2. Samuel 22,47"},feuer:{photo:"feuer.jpg",front:"Gott ist wie ein Feuer",verse:"Der HERR aber ging vor ihnen her, am Tag in einer Wolkens\xe4ule, um sie den Weg zu f\xfchren, und bei Nacht in einer Feuers\xe4ule, um ihnen zu leuchten, so dass sie Tag und Nacht gehen konnten.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/2.Mose13,21",reference:"2. Mose 13,21"},fluegel:{photo:"fluegel.jpg",front:"Gott ist wie Fl\xfcgel",verse:"Sei mir gn\xe4dig, Gott, sei mir gn\xe4dig, denn bei dir suche ich Zuflucht. Im Schatten deiner Fl\xfcgel suche ich Zuflucht, bis das Verderben vor\xfcber ist.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm57,2",reference:"Psalm 57,2"},freund:{photo:"freund.jpg",front:"Gott ist wie eine Freundin",verse:"Der HERR aber redete mit Mose von Angesicht zu Angesicht, wie ein Mann mit seinem Freunde redet.",translation:"Lutherbibel 2017",link:"https://www.bibleserver.com/LUT/2.Mose33,11",reference:"2. Mose 33,11"},gaertner:{photo:"gaertner.jpg",front:"Gott ist wie eine G\xe4rtnerin",verse:"Dann pflanzte der HERR, Gott, einen Garten in Eden im Osten, und dort hinein setzte er den Menschen, den er gebildet hatte.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/1.Mose2,8",reference:"1. Mose 2,8"},hand:{photo:"hand.jpg",front:"Gott ist wie eine Hand",verse:"Hinten und vorne h\xe4ltst du mich umschlossen, und deine Hand hast du auf mich gelegt.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm139,5",reference:"Psalm1 39,5"},hebamme:{photo:"hebamme.jpg",front:"Gott ist wie eine Hebamme",verse:"Du bist es, der mich aus dem Mutterschoss zog, der mich sicher barg an der Brust meiner Mutter.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm22,10",reference:"Psalm 22,10"},henne:{photo:"henne.jpg",front:"Gott ist wie eine Henne",verse:"Wie oft habe ich deine Kinder um mich sammeln wollen, wie eine Henne ihre K\xfcken unter ihre Fl\xfcgel sammelt, und ihr habt nicht gewollt.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Matth%C3%A4us23,37",reference:"Matth\xe4us 23,37"},hirt:{photo:"hirt.jpg",front:"Gott ist wie ein Hirt",verse:"Ein Psalm Davids. Der HERR ist mein Hirt, mir mangelt nichts,\xa0er weidet mich auf gr\xfcnen Auen. Zur Ruhe am Wasser f\xfchrt er mich.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm23,1-2",reference:"Psalm 23,1-2"},licht:{photo:"licht.jpg",front:"Gott ist wie ein Licht",verse:"Der HERR ist mein Licht und meine Rettung, vor wem sollte ich mich f\xfcrchten?",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm27,1",reference:"Psalm 27,1"},liebe:{photo:"liebe.jpg",front:"Gott ist wie die Liebe",verse:"Wer nicht liebt, hat Gott nicht erkannt, denn Gott ist Liebe.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/1.Johannes4,8",reference:"1.Johannes 4,8"},loewe:{photo:"loewe.jpg",front:"Gott ist wie ein L\xf6we",verse:"Denn ich bin wie ein L\xf6we f\xfcr Efraim und wie ein junger L\xf6we f\xfcr das Haus Juda.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Hosea5,14",reference:"Hosea 5,14"},mutter:{photo:"mutter.jpg",front:"Gott ist wie eine Mutter",verse:"Wie einen, den seine Mutter tr\xf6stet, so werde ich euch tr\xf6sten, und getr\xf6stet werdet ihr in Jerusalem.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Jesaja66,13",reference:"Jesaja 66,13"},quelle:{photo:"quelle.jpg",front:"Gott ist wie eine Quelle",verse:"Denn bei dir ist die Quelle des Lebens, in deinem Licht schauen wir das Licht.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm36,10",reference:"Psalm 36,10"},retter:{photo:"retter.jpg",front:"Gott ist wie ein Retter",verse:"Und Maria sprach: Meine Seele erhebt den Herrn, und mein Geist jubelt \xfcber Gott, meinen Retter.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Lukas1,46-47",reference:"Lukas 1,46-47"},richter:{photo:"richter.jpg",front:"Gott ist wie eine Richterin",verse:"Die Himmel sollen seine Gerechtigkeit verk\xfcnden, Gott selbst ist Richter.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm50,6",reference:"Psalm 50,6"},schoepfer:{photo:"schoepfer.jpg",front:"Gott ist der Sch\xf6pfer",verse:"Wohl dem, dessen Hilfe der Gott Jakobs ist, der seine Hoffnung auf den HERRN setzt, seinen Gott, der Himmel und Erde gemacht hat und das Meer und alles, was in ihnen ist, der Treue bewahrt auf ewig.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm146,5-6",reference:"Psalm 146,5-6"},sonne:{photo:"sonne.jpg",front:"Gott ist wie die Sonne",verse:"Ja, Gott, der Herr, ist die Sonne, die uns Licht und Leben gibt.",translation:"Gute Nachricht Bibel",link:"https://www.bibleserver.com/GNB/Psalm84",reference:"Psalm 84"},toepfer:{photo:"toepfer.jpg",front:"Gott ist wie eine T\xf6pferin",verse:"Seht, wie der Ton in der Hand des T\xf6pfers, so seid ihr in meiner Hand, Haus Israel.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Jeremia18,6",reference:"Jeremia 18,6"},vater:{photo:"vater.jpg",front:"Gott ist wie ein Vater",verse:"Wie ein Vater sich der Kinder erbarmt, so erbarmt der HERR sich derer, die ihn f\xfcrchten.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm103,13",reference:"Psalm 103,13"},zelt:{photo:"zelt.jpg",front:"Gott ist wie ein Zelt",verse:"Denn er deckt mich in seiner H\xfctte zur b\xf6sen Zeit, er birgt mich im Schutz seines Zeltes und erh\xf6ht mich auf einen Felsen.",translation:"Lutherbibel 2017",link:"https://www.bibleserver.com/LUT/Psalm27,5",reference:"Psalm 27,5"}};function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f(e);if(t){var i=f(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return d(this,r)}}var w=function(e){u(r,e);var t=b(r);function r(){return s(this,r),t.apply(this,arguments)}return a(r,[{key:"render",value:function(){return"front"==this.props.card.side?(0,n.jsxs)("div",{className:"grid grid-cols-1 grid-rows-1 items-stretch shadow-lg rounded-xl m-1 p-1 bg-white",onClick:this.props.onClick,children:[(0,n.jsx)("img",{className:"row-start-1 col-start-1 rounded-lg",src:this.photo(),alt:""}),(0,n.jsx)("div",{className:"\n                            row-start-1 col-start-1 grid items-center rounded-lg bg-white\n                            ".concat("photo"==this.props.card.state?"hidden":"","\n                    "),children:(0,n.jsx)("div",{className:"text-center",children:m[this.props.card.name].front})})]}):"back"==this.props.card.side?(0,n.jsx)("div",{className:"shadow-lg rounded-xl m-1 p-1 bg-white",onClick:this.props.onClick,children:(0,n.jsx)("img",{className:"rounded-lg",src:"/gottesbilder/farbtropfen.png",alt:""})}):(0,n.jsx)("div",{className:"invisible",onClick:this.props.onClick,children:(0,n.jsx)("img",{className:"rounded-lg",src:"/gottesbilder/farbtropfen.png",alt:""})})}},{key:"photo",value:function(){return"/gottesbilder/cards/".concat(m[this.props.card.name].photo)}}]),r}(p.Component);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f(e);if(t){var i=f(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return d(this,r)}}var g=function(e){u(r,e);var t=v(r);function r(e){var n;return s(this,r),(n=t.call(this,e)).state={cards:y(),phase:"openFirst",timeout:null,firstCard:null,secondCard:null},n.match=n.match.bind(c(n)),n.mismatch=n.mismatch.bind(c(n)),n}return a(r,[{key:"render",value:function(){var e=this;console.log("Rendering game. Phase is ".concat(this.state.phase,"."));var t=(0,n.jsx)("div",{className:"row-start-1 col-start-1 hidden"});if("match"==this.state.phase){var r=m[this.state.cards[this.state.firstCard].name];t=(0,n.jsxs)("div",{className:"row-start-1 col-start-1 grid items-center bg-white",children:[(0,n.jsxs)("div",{className:"grid grid-cols-2 grid-rows-1 items-center",children:[(0,n.jsx)(w,{card:this.state.cards[this.state.firstCard],onClick:function(){}}),(0,n.jsx)(w,{card:this.state.cards[this.state.secondCard],onClick:function(){}})]}),(0,n.jsxs)("figure",{className:"m-1 p-4",children:[(0,n.jsx)("blockquote",{className:"mb-1",cite:r.link,children:(0,n.jsx)("p",{children:r.verse})}),(0,n.jsx)("figcaption",{className:"text-right",children:(0,n.jsx)("cite",{className:"font-medium text-blue-400",children:(0,n.jsxs)("a",{href:r.link,target:"_blank",children:[r.reference,", ",r.translation]})})})]}),(0,n.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded",onClick:this.match,children:"Weiterspielen"})]})}var i=(0,n.jsx)("div",{className:"row-start-1 col-start-1 hidden"});return"end"==this.state.phase&&(i=(0,n.jsx)("div",{className:"row-start-1 col-start-1 grid items-center bg-white",children:(0,n.jsx)("div",{className:"text-center",children:"Du hast es geschafft!"})})),(0,n.jsxs)("div",{className:"grid grid-cols-1 grid-rows-1 items-stretch",children:[(0,n.jsx)("div",{className:"row-start-1 col-start-1 grid grid-cols-3",children:this.state.cards.map((function(t,r){return(0,n.jsx)(w,{card:t,onClick:function(){return e.cardClick(r)}},r)}))}),t,i]})}},{key:"cardClick",value:function(e){if("openFirst"==this.state.phase){if("back"==this.state.cards[e].side){var t=this.state.cards.slice();t[e].side="front",this.setState({cards:t,firstCard:e,phase:"openSecond"})}}else if("openSecond"==this.state.phase){if("back"==this.state.cards[e].side){var r=this.state.cards.slice();r[e].side="front";var n=this.state.firstCard,i=e,s=this.state.cards[n].name==this.state.cards[i].name?"match":"mismatch",o=this.state.timeout;"mismatch"==s&&(o=setTimeout(this.mismatch,3e3)),this.setState({cards:r,phase:s,timeout:o,firstCard:n,secondCard:i})}}else"mismatch"==this.state.phase?this.mismatch():this.state.phase;console.log("Clicked card #".concat(e))}},{key:"mismatch",value:function(){if("mismatch"==this.state.phase){null!==this.state.timeout&&clearTimeout(this.state.timeout);var e=this.state.cards.map((function(e){return e.side="front"==e.side?"back":e.side,e}));this.setState({cards:e,phase:"openFirst",timeout:null})}}},{key:"match",value:function(){if("match"==this.state.phase){console.log("Hello from match.");var e=this.state.cards.slice();e[this.state.firstCard].side="found",e[this.state.secondCard].side="found";var t=e.some((function(e){return"found"!=e.side}))?"openFirst":"end";this.setState({cards:e,phase:t,firstCard:null,secondCard:null})}}}]),r}(p.Component);function y(){for(var e=Object.keys(m),t=0;t<6;++t){var r=t+Math.floor(Math.random()*(e.length-t)),n=[e[r],e[t]];e[t]=n[0],e[r]=n[1]}for(var i=[],s=0;s<6;++s)i.push({name:e[s],state:"photo",side:"back"}),i.push({name:e[s],state:"verse",side:"back"});for(var o=0;o<12;++o){var a=o+Math.floor(Math.random()*(i.length-o)),c=[i[a],i[o]];i[o]=c[0],i[a]=c[1]}return i}function j(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.default,{children:[(0,n.jsx)("title",{children:"Gottesbilder"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{children:[(0,n.jsx)("h1",{className:"text-2xl font-bold text-center my-8",children:"Gottesbilder"}),(0,n.jsx)(g,{})]})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3481)}])},9008:function(e,t,r){e.exports=r(7947)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);