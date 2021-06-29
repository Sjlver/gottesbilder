(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{3515:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return R}});var n=r(5893),i=r(7294),s=r(9008);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?l(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=r(4662);function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m(e);if(t){var i=m(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return f(this,r)}}var b=function(e){u(r,e);var t=w(r);function r(){return o(this,r),t.apply(this,arguments)}return c(r,[{key:"render",value:function(){return"front"==this.props.card.side?(0,n.jsxs)("div",{className:"grid grid-cols-1 grid-rows-1 items-stretch shadow-lg rounded-xl m-1 p-1 bg-white",onClick:this.props.onClick,children:[(0,n.jsx)("img",{className:"row-start-1 col-start-1 rounded-lg",src:this.photo(),alt:""}),(0,n.jsx)("div",{className:"\n              row-start-1 col-start-1 grid items-center rounded-lg bg-white\n              ".concat("photo"==this.props.card.state?"hidden":"","\n            "),children:(0,n.jsx)("div",{className:"text-center",children:p._[this.props.card.name].front})})]}):"back"==this.props.card.side?(0,n.jsx)("div",{className:"shadow-lg rounded-xl m-1 p-1 bg-white",onClick:this.props.onClick,children:(0,n.jsx)("img",{className:"rounded-lg",src:"/gottesbilder/farbtropfen.png",alt:""})}):(0,n.jsx)("div",{className:"invisible",onClick:this.props.onClick,children:(0,n.jsx)("img",{className:"rounded-lg",src:"/gottesbilder/farbtropfen.png",alt:""})})}},{key:"photo",value:function(){return"/gottesbilder/cards/".concat(p._[this.props.card.name].photo)}}]),r}(i.Component);function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m(e);if(t){var i=m(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return f(this,r)}}var v=function(e){u(r,e);var t=g(r);function r(e){var n;return o(this,r),(n=t.call(this,e)).state=n.newGame(),n.match=n.match.bind(l(n)),n.mismatch=n.mismatch.bind(l(n)),n}return c(r,[{key:"newGame",value:function(){return{cards:k(),phase:"openFirst",timeout:null,firstCard:null,secondCard:null}}},{key:"render",value:function(){var e=this,t=(0,n.jsx)("div",{className:"row-start-1 col-start-1 hidden"});if("match"==this.state.phase){var r=p._[this.state.cards[this.state.firstCard].name];t=(0,n.jsxs)("div",{className:"row-start-1 col-start-1 grid items-center bg-white",children:[(0,n.jsxs)("div",{className:"grid grid-cols-2 grid-rows-1 items-center",children:[(0,n.jsx)(b,{card:this.state.cards[this.state.firstCard],onClick:function(){}}),(0,n.jsx)(b,{card:this.state.cards[this.state.secondCard],onClick:function(){}})]}),(0,n.jsxs)("figure",{className:"m-1 p-4",children:[(0,n.jsx)("blockquote",{className:"mb-1",cite:r.link,children:(0,n.jsx)("p",{children:r.verse})}),(0,n.jsx)("figcaption",{className:"text-right",children:(0,n.jsx)("cite",{className:"font-medium text-blue-400",children:(0,n.jsxs)("a",{href:r.link,target:"_blank",children:[r.reference,", ",r.translation]})})})]}),(0,n.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded",onClick:this.match,children:"Weiterspielen"})]})}var i=(0,n.jsx)("div",{className:"row-start-1 col-start-1 hidden"});return"end"==this.state.phase&&(i=(0,n.jsx)("div",{className:"row-start-1 col-start-1 grid items-center bg-white",children:(0,n.jsxs)("div",{className:"space-y-8",children:[(0,n.jsx)("p",{className:"text-center text-lg",children:"Du hast es geschafft!"}),(0,n.jsx)("p",{className:"text-center",children:(0,n.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded",onClick:function(){return e.setState(e.newGame())},children:"Noch ein Spiel spielen"})})]})})),(0,n.jsxs)("div",{className:"grid grid-cols-1 grid-rows-1 items-stretch",children:[(0,n.jsx)("div",{className:"row-start-1 col-start-1 grid grid-cols-3",children:this.state.cards.map((function(t,r){return(0,n.jsx)(b,{card:t,onClick:function(){return e.cardClick(r)}},r)}))}),t,i]})}},{key:"cardClick",value:function(e){if("openFirst"==this.state.phase){if("back"==this.state.cards[e].side){var t=this.state.cards.slice();t[e].side="front",this.setState({cards:t,firstCard:e,phase:"openSecond"})}}else if("openSecond"==this.state.phase){if("back"==this.state.cards[e].side){var r=this.state.cards.slice();r[e].side="front";var n=this.state.firstCard,i=e,s=this.state.cards[n].name==this.state.cards[i].name?"match":"mismatch",o=this.state.timeout;"mismatch"==s&&(o=setTimeout(this.mismatch,3e3)),this.setState({cards:r,phase:s,timeout:o,firstCard:n,secondCard:i})}}else"mismatch"==this.state.phase?this.mismatch():this.state.phase}},{key:"mismatch",value:function(){if("mismatch"==this.state.phase){null!==this.state.timeout&&clearTimeout(this.state.timeout);var e=this.state.cards.map((function(e){return e.side="front"==e.side?"back":e.side,e}));this.setState({cards:e,phase:"openFirst",timeout:null})}}},{key:"match",value:function(){if("match"==this.state.phase){var e=this.state.cards.slice();e[this.state.firstCard].side="found",e[this.state.secondCard].side="found";var t=e.some((function(e){return"found"!=e.side}))?"openFirst":"end";this.setState({cards:e,phase:t,firstCard:null,secondCard:null})}}}]),r}(i.Component);function k(){for(var e=Object.keys(p._),t=0;t<6;++t){var r=t+Math.floor(Math.random()*(e.length-t)),n=[e[r],e[t]];e[t]=n[0],e[r]=n[1]}for(var i=[],s=0;s<6;++s)i.push({name:e[s],state:"photo",side:"back"}),i.push({name:e[s],state:"verse",side:"back"});for(var o=0;o<12;++o){var a=o+Math.floor(Math.random()*(i.length-o)),c=[i[a],i[o]];i[o]=c[0],i[a]=c[1]}return i}var j=r(6156),x=r(1163),y=r(1664);function B(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m(e);if(t){var i=m(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return f(this,r)}}var G=function(e){u(r,e);var t=B(r);function r(e){var n;return o(this,r),n=t.call(this,e),(0,j.Z)(l(n),"CONFIRMATION_TIMEOUT",5e3),n.state={confirming:!1},n.click=n.click.bind(l(n)),n}return c(r,[{key:"render",value:function(){return this.state.confirming?(0,n.jsxs)("div",{children:[(0,n.jsx)(y.default,{href:"/",children:(0,n.jsx)("a",{className:"text-blue-400",onClick:this.click,children:"\xab Spiel beenden und zur\xfcck"})})," ","zum Menu"]}):(0,n.jsxs)("div",{children:[(0,n.jsx)(y.default,{href:"/",children:(0,n.jsx)("a",{className:"text-blue-400",onClick:this.click,children:"\xab Zur\xfcck"})})," ","zum Menu"]})}},{key:"click",value:function(e){var t=this;e.preventDefault(),this.state.confirming?this.props.router.back():(this.setState({confirming:!0}),setTimeout((function(){return t.setState({confirming:!1})}),this.CONFIRMATION_TIMEOUT))}}]),r}(i.Component),N=(0,x.withRouter)(G);function R(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(s.default,{children:[(0,n.jsx)("title",{children:"Gottesbilder"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)("main",{className:"bg-center bg-cover",style:{backgroundImage:"url(/gottesbilder/index_background_licht.jpg)"},children:(0,n.jsxs)("div",{className:"max-w-md h-screen mx-auto bg-white bg-opacity-90 flex flex-col justify-center px-1",children:[(0,n.jsx)(v,{}),(0,n.jsxs)("div",{className:"my-8 font-medium text-lg",children:[(0,n.jsx)("hr",{}),(0,n.jsx)(N,{})]})]})})]})}},4662:function(e,t,r){"use strict";r.d(t,{_:function(){return n}});var n={adler:{photo:"adler.jpg",front:"Gott ist wie ein Adler",verse:"Ein Adler scheucht die Jungen aus dem Nest, damit sie selber fliegen lernen. Doch wachsam schwebt er \xfcber ihnen, und wenn eins m\xfcde wird und f\xe4llt, dann breitet er die Fl\xfcgel unter ihm und f\xe4ngt es auf und tr\xe4gt es fort.",translation:"Gute Nachricht Bibel",link:"https://www.bibleserver.com/GNB/5.Mose32,11",reference:"5. Mose 32,11",credits:{author:"Frank Fichtmueller",url:"https://www.shutterstock.com/g/Frank%20Fichtmueller"}},arzt:{photo:"arzt.jpg",front:"Gott ist wie ein Arzt",verse:"Ich, der HERR, bin dein Arzt.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/2.Mose15,26",reference:"2. Mose 15,26",credits:{author:"fizkes",url:"https://www.shutterstock.com/g/fizkes"}},behueter:{photo:"behueter.jpg",front:"Gott ist mein Beh\xfcter",verse:"Der HERR ist dein H\xfcter, der HERR ist dein Schatten zu deiner Rechten.\xa0Bei Tage wird dich die Sonne nicht stechen noch der Mond des Nachts.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm121,5-6",reference:"Psalm 121,5-6",credits:{author:"BlueOrange Studio",url:"https://www.shutterstock.com/g/BlueOrange%20Studio"}},burg:{photo:"burg.jpg",front:"Gott ist wie eine Burg",verse:"So wird der HERR eine Burg f\xfcr den Bedr\xfcckten, eine Burg in der Zeit der Not.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm9,10",reference:"Psalm 9,10",credits:{author:"canadastock",url:"https://www.shutterstock.com/g/canadastock"}},fels:{photo:"fels.jpg",front:"Gott ist wie ein Fels",verse:"Der HERR lebt. Gepriesen ist mein Fels, erhaben ist Gott, der Fels meines Heils.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/2.Samuel22,47",reference:"2. Samuel 22,47",credits:{author:"Christoph Wagner",url:null}},feuer:{photo:"feuer.jpg",front:"Gott ist wie ein Feuer",verse:"Der HERR aber ging vor ihnen her, am Tag in einer Wolkens\xe4ule, um sie den Weg zu f\xfchren, und bei Nacht in einer Feuers\xe4ule, um ihnen zu leuchten, so dass sie Tag und Nacht gehen konnten.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/2.Mose13,21",reference:"2. Mose 13,21",credits:{author:"Silvia Rohrbach",url:null}},fluegel:{photo:"fluegel.jpg",front:"Gott ist wie Fl\xfcgel",verse:"Sei mir gn\xe4dig, Gott, sei mir gn\xe4dig, denn bei dir suche ich Zuflucht. Im Schatten deiner Fl\xfcgel suche ich Zuflucht, bis das Verderben vor\xfcber ist.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm57,2",reference:"Psalm 57,2",credits:{author:"lakeemotion",url:"https://www.shutterstock.com/g/lakeemotion"}},freund:{photo:"freund.jpg",front:"Gott ist wie eine Freundin",verse:"Der HERR aber redete mit Mose von Angesicht zu Angesicht, wie ein Mann mit seinem Freunde redet.",translation:"Lutherbibel 2017",link:"https://www.bibleserver.com/LUT/2.Mose33,11",reference:"2. Mose 33,11",credits:{author:"Dean Drobot",url:null}},gaertner:{photo:"gaertner.jpg",front:"Gott ist wie eine G\xe4rtnerin",verse:"Dann pflanzte der HERR, Gott, einen Garten in Eden im Osten, und dort hinein setzte er den Menschen, den er gebildet hatte.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/1.Mose2,8",reference:"1. Mose 2,8",credits:{author:"Halfpoint",url:"https://www.shutterstock.com/g/Halfpoint"}},hand:{photo:"hand.jpg",front:"Gott ist wie eine Hand",verse:"Hinten und vorne h\xe4ltst du mich umschlossen, und deine Hand hast du auf mich gelegt.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm139,5",reference:"Psalm1 39,5",credits:{author:"Goldziitfotografie",url:"https://www.shutterstock.com/g/deboraherne22"}},hebamme:{photo:"hebamme.jpg",front:"Gott ist wie eine Hebamme",verse:"Du bist es, der mich aus dem Mutterschoss zog, der mich sicher barg an der Brust meiner Mutter.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm22,10",reference:"Psalm 22,10",credits:{author:"Natalia Deriabina",url:"https://www.shutterstock.com/g/Natalia%20Deriabina"}},henne:{photo:"henne.jpg",front:"Gott ist wie eine Henne",verse:"Wie oft habe ich deine Kinder um mich sammeln wollen, wie eine Henne ihre K\xfcken unter ihre Fl\xfcgel sammelt, und ihr habt nicht gewollt.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Matth%C3%A4us23,37",reference:"Matth\xe4us 23,37",credits:{author:"Beatrice Sirinuntananon",url:"https://www.shutterstock.com/g/beatricesiri"}},hirt:{photo:"hirt.jpg",front:"Gott ist wie ein Hirt",verse:"Der HERR ist mein Hirt, mir mangelt nichts,\xa0er weidet mich auf gr\xfcnen Auen. Zur Ruhe am Wasser f\xfchrt er mich.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm23,1-2",reference:"Psalm 23,1-2",credits:{author:"Lindasj22",url:"https://www.shutterstock.com/g/Lindasj22"}},licht:{photo:"licht.jpg",front:"Gott ist wie ein Licht",verse:"Der HERR ist mein Licht und meine Rettung, vor wem sollte ich mich f\xfcrchten?",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm27,1",reference:"Psalm 27,1",credits:{author:"Piotr Krzeslak",url:"https://www.shutterstock.com/g/kwasny221"}},liebe:{photo:"liebe.jpg",front:"Gott ist wie die Liebe",verse:"Wer nicht liebt, hat Gott nicht erkannt, denn Gott ist Liebe.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/1.Johannes4,8",reference:"1.Johannes 4,8",credits:{author:"SewCream",url:"https://www.shutterstock.com/g/ThitareeS"}},loewe:{photo:"loewe.jpg",front:"Gott ist wie ein L\xf6we",verse:"Denn ich bin wie ein L\xf6we f\xfcr Efraim und wie ein junger L\xf6we f\xfcr das Haus Juda.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Hosea5,14",reference:"Hosea 5,14",credits:{author:"2021 Photography",url:"https://www.shutterstock.com/g/Andrew+Paul+Deer"}},mutter:{photo:"mutter.jpg",front:"Gott ist wie eine Mutter",verse:"Wie einen, den seine Mutter tr\xf6stet, so werde ich euch tr\xf6sten, und getr\xf6stet werdet ihr in Jerusalem.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Jesaja66,13",reference:"Jesaja 66,13",credits:{author:"fizkes",url:"https://www.shutterstock.com/g/fizkes"}},quelle:{photo:"quelle.jpg",front:"Gott ist wie eine Quelle",verse:"Denn bei dir ist die Quelle des Lebens, in deinem Licht schauen wir das Licht.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm36,10",reference:"Psalm 36,10",credits:{author:"Michaela Komi",url:"https://www.shutterstock.com/g/MichaelaKlenkova"}},retter:{photo:"retter.jpg",front:"Gott ist wie ein Retter",verse:"Und Maria sprach: Meine Seele erhebt den Herrn, und mein Geist jubelt \xfcber Gott, meinen Retter.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Lukas1,46-47",reference:"Lukas 1,46-47",credits:{author:"Evannovostro",url:"https://www.shutterstock.com/g/Evannovostro"}},richter:{photo:"richter.jpg",front:"Gott ist wie eine Richterin",verse:"Die Himmel sollen seine Gerechtigkeit verk\xfcnden, Gott selbst ist Richter.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm50,6",reference:"Psalm 50,6",credits:{author:"r.classen",url:"https://www.shutterstock.com/g/rclassenlayouts"}},schoepfer:{photo:"schoepfer.jpg",front:"Gott ist der Sch\xf6pfer",verse:"Wohl dem, dessen Hilfe der Gott Jakobs ist, der seine Hoffnung auf den HERRN setzt, seinen Gott, der Himmel und Erde gemacht hat und das Meer und alles, was in ihnen ist, der Treue bewahrt auf ewig.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm146,5-6",reference:"Psalm 146,5-6",credits:{author:"Danute Gudauskiene",url:"https://www.shutterstock.com/g/Danute+Gudauskiene"}},sonne:{photo:"sonne.jpg",front:"Gott ist wie die Sonne",verse:"Ja, Gott, der Herr, ist die Sonne, die uns Licht und Leben gibt.",translation:"Gute Nachricht Bibel",link:"https://www.bibleserver.com/GNB/Psalm84",reference:"Psalm 84",credits:{author:"Katharina Wagner",url:null}},toepfer:{photo:"toepfer.jpg",front:"Gott ist wie eine T\xf6pferin",verse:"Seht, wie der Ton in der Hand des T\xf6pfers, so seid ihr in meiner Hand, Haus Israel.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Jeremia18,6",reference:"Jeremia 18,6",credits:{author:"LEGRAN",url:"https://www.shutterstock.com/g/LEGRAN"}},vater:{photo:"vater.jpg",front:"Gott ist wie ein Vater",verse:"Wie ein Vater sich der Kinder erbarmt, so erbarmt der HERR sich derer, die ihn f\xfcrchten.",translation:"Z\xfcrcher Bibel",link:"https://www.bibleserver.com/ZB/Psalm103,13",reference:"Psalm 103,13",credits:{author:"fizkes",url:"https://www.shutterstock.com/g/fizkes"}},zelt:{photo:"zelt.jpg",front:"Gott ist wie ein Zelt",verse:"Denn er deckt mich in seiner H\xfctte zur b\xf6sen Zeit, er birgt mich im Schutz seines Zeltes und erh\xf6ht mich auf einen Felsen.",translation:"Lutherbibel 2017",link:"https://www.bibleserver.com/LUT/Psalm27,5",reference:"Psalm 27,5",credits:{author:"Evgeny Atamanenko",url:"https://www.shutterstock.com/g/evgenyataman"}}}},3790:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return r(3515)}])},1163:function(e,t,r){e.exports=r(2441)}},function(e){e.O(0,[996,774,888,179],(function(){return t=3790,e(e.s=t);var t}));var t=e.O();_N_E=t}]);