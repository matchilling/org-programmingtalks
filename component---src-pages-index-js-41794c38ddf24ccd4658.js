(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g}),n.d(t,"query",function(){return y});n(144),n(32),n(160);var a=n(7),r=n.n(a),o=(n(79),n(53),n(195),n(89),n(201),n(203),n(150)),i=n(0),s=n.n(i),l=n(145),c=n.n(l),u=n(163),p=n(162),h=n(148),f=n(151),d=(n(205),n(156)),m=["Programming Language","Bash Films","psf","Video Conferencing","programming","Event Video Recording","video services","videoconference","Conference Video Recording"],g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n=Object.keys(p).map(function(e){return{name:e,path:"/speaker/"+c.a.slugify(e)}}),a=(e=this.props.data.allTalkJson.edges,Array.from(e.reduce(function(e,t){if(!Array.isArray(t.node.tag))return arr;for(var n=0;n<t.node.tag.length;n++){var a=t.node.tag[n];e.has(a)?e.set(a,e.get(a)+1):e.set(a,1)}return e},new Map)).sort(function(e,t){return t[1]-e[1]})).filter(function(e){return!(-1<m.indexOf(e[0]))}).slice(0,15).map(function(e){return{name:e[0],path:"/tag/"+c.a.slugify(e[0])}}),r=(t=this.props.data.allTalkJson.edges,t[Math.floor(Math.random()*t.length)]).node;return s.a.createElement(d.a,null,s.a.createElement(u.a,{videoId:r.source.id,style:!0}),s.a.createElement("div",{className:"row content"},s.a.createElement("div",{className:"popular"},s.a.createElement("h3",{className:"title"},"Popular speakers"),s.a.createElement(h.a,{className:"tags",list:n}),s.a.createElement("h3",{className:"title"},"Popular tags"),s.a.createElement(h.a,{className:"tags",list:a})),s.a.createElement(f.a,{list:Object(o.normalizeResult)(this.props.data.allTalkJson).map(function(e){return Object.assign({tags:e.tag.map(function(e){return{name:e,path:"/tag/"+c.a.slugify(e)}}),path:"/talk/"+e.slug,presenter:{name:e.presenter.name,path:"/speaker/"+c.a.slugify(e.presenter.name)}},e)})})))},t}(s.a.Component),y="2106176136"},145:function(e,t,n){n(73),n(157),n(34),e.exports={slugify:function(e){return e?e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""):""},truncate:function(e,t){return e?e.split(" ").splice(0,t).join(" "):""}}},146:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},147:function(e,t,n){"use strict";n(144);var a=n(7),r=n.n(a),o=n(143),i=n.n(o),s=n(159),l=n.n(s),c=n(4),u=n.n(c),p=n(0),h=n.n(p),f=n(148),d=(n(153),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return h.a.createElement("div",{className:"talk-info"},this.props.path?h.a.createElement("h2",{className:"talk-title"},h.a.createElement(i.a,{to:this.props.path},this.props.title)):h.a.createElement("h2",{className:"talk-title"},this.props.title),(this.props.presenter||this.props.duration||this.props.tags.length)&&h.a.createElement("div",{className:"talk-meta"},this.props.presenter.name&&h.a.createElement("div",{className:"talk-presenter"},this.props.presenter.path&&h.a.createElement(i.a,{to:this.props.presenter.path},this.props.presenter.name),!this.props.presenter.path&&h.a.createElement("span",null,this.props.presenter.name)),this.props.duration&&h.a.createElement("div",{className:"talk-duration"},l.a.duration(this.props.duration).humanize()),h.a.createElement(f.a,{className:"talk-tag-list",list:this.props.tags})),(this.props.thumbnails||this.props.description)&&h.a.createElement("div",{className:"talk-description"},this.props.thumbnails&&this.props.thumbnails.default.url&&h.a.createElement("img",{alt:this.props.title,height:this.props.thumbnails.default.height/1.5,src:this.props.thumbnails.default.url,width:this.props.thumbnails.default.width/1.5}),this.props.description&&this.props.description))},t}(h.a.Component));d.propTypes={description:u.a.string,duration:u.a.string,id:u.a.string,key:u.a.string,presenter:u.a.object,tags:u.a.array,thumbnails:u.a.object,title:u.a.string},t.a=d},148:function(e,t,n){"use strict";n(144);var a=n(7),r=n.n(a),o=n(143),i=n.n(o),s=n(4),l=n.n(s),c=n(0),u=n.n(c),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return u.a.createElement("ul",{className:this.props.className},this.props.list.map(function(t,n){return u.a.createElement("li",{key:n,className:e.props.className+"-item"},t.path?u.a.createElement(i.a,{to:t.path},t.name):t.name)}))},t}(u.a.Component);p.defaultProps={className:"tag-list"},p.propTypes={className:l.a.string,list:l.a.array.isRequired},t.a=p},150:function(e,t){e.exports={normalizeResult:function(e){return e&&e.hasOwnProperty("edges")&&Array.isArray(e.edges)?e.edges.map(function(e){return e.node}):[]}}},151:function(e,t,n){"use strict";n(144);var a=n(7),r=n.n(a),o=n(4),i=n.n(o),s=n(0),l=n.n(s),c=n(147),u=n(145),p=n.n(u),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return this.props.list.length<=0?null:l.a.createElement("div",{className:"talk-list-wrapper"},this.props.title&&l.a.createElement(this.props.titleElement,{className:"talk-list-title"},this.props.title),l.a.createElement("div",{className:"talk-list"},this.props.list.map(function(e,t){return l.a.createElement("div",{className:"talk-list-item",key:t},l.a.createElement(c.a,{description:p.a.truncate(e.description,50)+" ...",duration:e.hasOwnProperty("meta")&&e.meta.hasOwnProperty("duration")?e.meta.duration:null,path:e.path,presenter:{name:e.hasOwnProperty("presenter")&&e.presenter.hasOwnProperty("name")?e.presenter.name:"",path:e.hasOwnProperty("presenter")&&e.presenter.hasOwnProperty("path")?e.presenter.path:""},tags:e.tags,thumbnails:e.thumbnails,title:e.title}))})))},t}(l.a.Component);h.defaultProps={titleElement:"h3"},h.propTypes={list:i.a.array.isRequired,title:i.a.string,titleElement:i.a.string},t.a=h},152:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(51),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},153:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){"use strict";var a=n(149),r=n.n(a),o=n(4),i=n.n(o),s=n(0),l=n.n(s),c=n(143),u=n.n(c),p=(n(154),function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"row"},l.a.createElement(u.a,{to:"/",title:"programming talks"},l.a.createElement("h1",{className:"logo"},"programmingtalks.org"))))}),h=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,"Contributing"),l.a.createElement("p",null,"Have you seen an awesome talk which is currently missing on this website? Drop me an email at"," ",l.a.createElement("a",{href:"mailto:m@matchilling.com"},"m@matchilling.com"),", send a tweet"," ",l.a.createElement("a",{href:"https://twitter.com/MatChilling"},"@matchilling")," or create a pull request on"," ",l.a.createElement("a",{href:"https://github.com/matchilling/org-programmingtalks"},"github.com/matchilling/org-programmingtalks"),".")))},f=(n(155),function(e){var t=e.children;return l.a.createElement("div",null,l.a.createElement(r.a,{title:"Programming Talks",meta:[{name:"description",content:"An unopinionated, curated list of the best programming talks out there."}]}),l.a.createElement(p,null),t,l.a.createElement(h,null))});f.propTypes={children:i.a.array};t.a=f},158:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return d}),n.d(t,"StaticQueryContext",function(){return h}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(143),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(146),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var p=n(33);n.d(t,"parsePath",function(){return p.a});var h=r.a.createContext({}),f=function(e){return r.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},160:function(e,t,n){var a=n(26),r=n(35);n(161)("keys",function(){return function(e){return r(a(e))}})},161:function(e,t,n){var a=n(12),r=n(18),o=n(24);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],i={};i[e]=t(n),a(a.S+a.F*o(function(){n(1)}),"Object",i)}},162:function(e){e.exports={"Alan Kay":{bio:"Alan Curtis Kay (born May 17, 1940) is an American computer scientist. He has been elected a Fellow of the American Academy of Arts and Sciences, the National Academy of Engineering, and the Royal Society of Arts. He is best known for his pioneering work on object-oriented programming and windowing graphical user interface design.\n\nHe is the president of the Viewpoints Research Institute, and an adjunct professor of computer science at the University of California, Los Angeles. He is also on the advisory board of TTI/Vanguard. Until mid-2005, he was a senior fellow at HP Labs, a visiting professor at Kyoto University, and an adjunct professor at the Massachusetts Institute of Technology (MIT).\n\nKay is also a former professional jazz guitarist, composer, and theatrical designer, and an amateur classical pipe organist.",slug:"alan-kay"},"David Nolen":{bio:"David Nolen is a software engineer for Cognitect. He enjoys making music, writing JavaScript, writing ClojureScript, and exploring new approaches to user interface programming.",slug:"david-nolen"},"Dan North":{bio:"Dan has been coaching, coding and consulting for over 25 years, with a focus on applying systems thinking and simple technology to solve complex business problems. He uses techniques from Lean operations, Theory of Constraints and Agile software development to help organisations anticipate and respond to the challenges of changing business needs.\n\nDan is the originator of Behaviour-Driven Development, an agile approach to software development that encourages teams to deliver the software that matters by emphasising the interactions between stakeholders. He also proposed Deliberate Discovery, which challenges assumptions around software planning and estimation. He argues that there are no best practices and that everything we do is subject to opportunity cost.",slug:"dan-north"},"Hadi Partovi":{bio:"Hadi Partovi is an entrepreneur and investor, and CEO of the education non-profit Code.org.\n\nIn 2013 Hadi and his twin brother Ali launched the education nonprofit Code.org which Hadi continues to lead full-time as CEO. Code.org has established computer science classes in 15% of US classrooms, created the most popular curriculum platform for K-12 computer science, and launched the global Hour of Code movement that has reached over 100 million students.",slug:"hadi-partovi"},"Rich Hickey":{bio:"Rich Hickey is the creator of the Clojure language. Before Clojure, he developed dotLisp, a similar project based on the .NET Framework, and three earlier attempts to provide interoperability between Lisp and Java: a Java foreign language interface for Common Lisp (jfli), A Foreign Object Interface for Lisp (FOIL), and a Lisp-friendly interface to Java Servlets (Lisplets).",github:"richhickey",twitter:"richhickey",slug:"rich-hickey"},"Sam Newman":{bio:'Sam Newman is a technologist at ThoughtWorks, where he currently splits his time between encouraging and sharing Innovation globally and working as the architect for internal systems. Sam is the author of "Building Microservices" from O\'Reilly. He has worked with a variety of companies in multiple domains around the world, often with one foot in the developer world, and another in the IT operations space. If you asked him what he does, he’d say ‘I work with people to build better software systems’. He has written articles, presented at conferences, and sporadically commits to open source projects. While Java used to be his bread and butter, he also spends time with Ruby, Python, Javascript, and Clojure, Infrastructure Automation and Cloud systems.',slug:"Sam-newman"},"Kevlin Henney":{bio:"Kevlin Henney is an author, presenter, and consultant on software development. He has written on the subject of computer programming and development practice for many magazines and sites, including Better Software, The Register, C/C++ Users Journal, Application Development Advisor, JavaSpektrum, C++ Report, Java Report, EXE, and Overload.",slug:"Kevlin Henney"},"Leslie Lamport":{bio:"Leslie B. Lamport is an American computer scientist. Lamport is best known for his seminal work in distributed systems and as the initial developer of the document preparation system LaTeX.",slug:"leslie-lamport"},'"Uncle Bob" - Robert Cecil Martin':{bio:"Robert Cecil Martin is an American software engineer and author. He is a co-author of the Agile Manifesto. He now runs a consulting firm called Uncle Bob Consulting LLC and Clean Coders which hosts videos based on his experiences and books.",twitter:"unclebobmartin",github:"unclebob",slug:"uncle-bob-robert-cecil-martin"},"Steve Jobs":{bio:"Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American entrepreneur, business magnate, inventor, and industrial designer. He was the chairman, chief executive officer (CEO), and a co-founder of Apple Inc., CEO and majority shareholder of Pixar, a member of The Walt Disney Company's board of directors following its acquisition of Pixar, and the founder, chairman, and CEO of NeXT. Jobs and Apple co-founder Steve Wozniak are widely recognized as pioneers of the microcomputer revolution of the 1970s and 1980s.",slug:"Steve-jobs"},"Sheryl Sandberg":{bio:"Sheryl Kara Sandberg is an American technology executive, activist, and author. She is the chief operating officer of Facebook and founder of Leanin.org.",slug:"sheryl-sandberg"}}},163:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(4),i=n.n(o),s=n(0),l=n.n(s),c=n(166),u=(n(164),function(e){function t(){var t;return(t=e.call(this)||this).state={width:854,height:450,playerVars:{autoplay:0,controls:1,rel:0,showinfo:1}},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions.bind(this))},n.updateDimensions=function(){854<=window.innerWidth?this.setState({height:450,width:854}):this.setState({height:225,width:window.outerWidth})},n.render=function(){return l.a.createElement("div",{className:"row player"},l.a.createElement(c.a,{videoId:this.props.videoId,id:this.props.id,className:this.props.className,opts:this.state,onReady:this.props.onReady,onPlay:this.props.onPlay,onPause:this.props.onPause,onEnd:this.props.onEnd,onError:this.props.onError,onStateChange:this.props.onStateChange,onPlaybackRateChange:this.props.onPlaybackRateChange,onPlaybackQualityChange:this.props.onPlaybackQualityChange}))},t}(l.a.Component));u.defaultProps={className:null,id:"player",opts:{},onEnd:function(){},onError:function(){},onPause:function(){},onPlay:function(){},onPlaybackQualityChange:function(){},onPlaybackRateChange:function(){},onReady:function(){},onStateChange:function(){},videoId:null},u.propTypes={className:i.a.string,id:i.a.string,opts:i.a.object,onReady:i.a.func,onPlay:i.a.func,onPause:i.a.func,onEnd:i.a.func,onError:i.a.func,onStateChange:i.a.func,onPlaybackRateChange:i.a.func,onPlaybackQualityChange:i.a.func,videoId:i.a.string},t.a=u},164:function(e,t,n){},167:function(e,t,n){var a=n(36)("meta"),r=n(11),o=n(27),i=n(25).f,s=0,l=Object.isExtensible||function(){return!0},c=!n(24)(function(){return l(Object.preventExtensions({}))}),u=function(e){i(e,a,{value:{i:"O"+ ++s,w:{}}})},p=e.exports={KEY:a,NEED:!1,fastKey:function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,a)){if(!l(e))return"F";if(!t)return"E";u(e)}return e[a].i},getWeak:function(e,t){if(!o(e,a)){if(!l(e))return!0;if(!t)return!1;u(e)}return e[a].w},onFreeze:function(e){return c&&p.NEED&&l(e)&&!o(e,a)&&u(e),e}}},168:function(e,t,n){var a=n(11);e.exports=function(e,t){if(!a(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},195:function(e,t,n){"use strict";var a=n(196),r=n(168);e.exports=n(197)("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var t=a.getEntry(r(this,"Map"),e);return t&&t.v},set:function(e,t){return a.def(r(this,"Map"),0===e?0:e,t)}},a,!0)},196:function(e,t,n){"use strict";var a=n(25).f,r=n(88),o=n(77),i=n(17),s=n(75),l=n(76),c=n(54),u=n(87),p=n(86),h=n(16),f=n(167).fastKey,d=n(168),m=h?"_s":"size",g=function(e,t){var n,a=f(t);if("F"!==a)return e._i[a];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,c){var u=e(function(e,a){s(e,u,t,"_i"),e._t=t,e._i=r(null),e._f=void 0,e._l=void 0,e[m]=0,null!=a&&l(a,n,e[c],e)});return o(u.prototype,{clear:function(){for(var e=d(this,t),n=e._i,a=e._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete n[a.i];e._f=e._l=void 0,e[m]=0},delete:function(e){var n=d(this,t),a=g(n,e);if(a){var r=a.n,o=a.p;delete n._i[a.i],a.r=!0,o&&(o.n=r),r&&(r.p=o),n._f==a&&(n._f=r),n._l==a&&(n._l=o),n[m]--}return!!a},forEach:function(e){d(this,t);for(var n,a=i(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(a(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!g(d(this,t),e)}}),h&&a(u.prototype,"size",{get:function(){return d(this,t)[m]}}),u},def:function(e,t,n){var a,r,o=g(e,t);return o?o.v=n:(e._l=o={i:r=f(t,!0),k:t,v:n,p:a=e._l,n:void 0,r:!1},e._f||(e._f=o),a&&(a.n=o),e[m]++,"F"!==r&&(e._i[r]=o)),e},getEntry:g,setStrong:function(e,t,n){c(e,t,function(e,n){this._t=d(e,t),this._k=n,this._l=void 0},function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?u(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,u(1))},n?"entries":"values",!n,!0),p(t)}}},197:function(e,t,n){"use strict";var a=n(6),r=n(12),o=n(19),i=n(77),s=n(167),l=n(76),c=n(75),u=n(11),p=n(24),h=n(78),f=n(38),d=n(198);e.exports=function(e,t,n,m,g,y){var v=a[e],b=v,w=g?"set":"add",k=b&&b.prototype,E={},j=function(e){var t=k[e];o(k,e,"delete"==e?function(e){return!(y&&!u(e))&&t.call(this,0===e?0:e)}:"has"==e?function(e){return!(y&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return y&&!u(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,n){return t.call(this,0===e?0:e,n),this})};if("function"==typeof b&&(y||k.forEach&&!p(function(){(new b).entries().next()}))){var P=new b,C=P[w](y?{}:-0,1)!=P,N=p(function(){P.has(1)}),L=h(function(e){new b(e)}),F=!y&&p(function(){for(var e=new b,t=5;t--;)e[w](t,t);return!e.has(-0)});L||((b=t(function(t,n){c(t,b,e);var a=d(new v,t,b);return null!=n&&l(n,g,a[w],a),a})).prototype=k,k.constructor=b),(N||F)&&(j("delete"),j("has"),g&&j("get")),(F||C)&&j(w),y&&k.clear&&delete k.clear}else b=m.getConstructor(t,e,g,w),i(b.prototype,n),s.NEED=!0;return f(b,e),E[e]=b,r(r.G+r.W+r.F*(b!=v),E),y||m.setStrong(b,e,g),b}},198:function(e,t,n){var a=n(11),r=n(199).set;e.exports=function(e,t,n){var o,i=t.constructor;return i!==n&&"function"==typeof i&&(o=i.prototype)!==n.prototype&&a(o)&&r&&r(e,o),e}},199:function(e,t,n){var a=n(11),r=n(5),o=function(e,t){if(r(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(17)(Function.call,n(200).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return o(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:o}},200:function(e,t,n){var a=n(82),r=n(52),o=n(37),i=n(81),s=n(27),l=n(80),c=Object.getOwnPropertyDescriptor;t.f=n(16)?c:function(e,t){if(e=o(e),t=i(t,!0),l)try{return c(e,t)}catch(n){}if(s(e,t))return r(!a.f.call(e,t),e[t])}},201:function(e,t,n){"use strict";var a=n(17),r=n(12),o=n(26),i=n(83),s=n(84),l=n(14),c=n(202),u=n(85);r(r.S+r.F*!n(78)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,r,p,h=o(e),f="function"==typeof this?this:Array,d=arguments.length,m=d>1?arguments[1]:void 0,g=void 0!==m,y=0,v=u(h);if(g&&(m=a(m,d>2?arguments[2]:void 0,2)),null==v||f==Array&&s(v))for(n=new f(t=l(h.length));t>y;y++)c(n,y,g?m(h[y],y):h[y]);else for(p=v.call(h),n=new f;!(r=p.next()).done;y++)c(n,y,g?i(p,m,[r.value,y],!0):r.value);return n.length=y,n}})},202:function(e,t,n){"use strict";var a=n(25),r=n(52);e.exports=function(e,t,n){t in e?a.f(e,t,r(0,n)):e[t]=n}},203:function(e,t,n){"use strict";var a=n(12),r=n(28),o=n(26),i=n(24),s=[].sort,l=[1,2,3];a(a.P+a.F*(i(function(){l.sort(void 0)})||!i(function(){l.sort(null)})||!n(204)(s)),"Array",{sort:function(e){return void 0===e?s.call(o(this)):s.call(o(this),r(e))}})},204:function(e,t,n){"use strict";var a=n(24);e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}},205:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-41794c38ddf24ccd4658.js.map