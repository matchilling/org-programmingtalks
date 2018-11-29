webpackJsonp([43808994113676],{3159:function(e,t){e.exports={data:{talkJson:{description:"The web browser is the world's most ubiquitous user interface. Sadly, this means we're all basically stuck in an abusive relationship with JavaScript. Obviously not a desirable position to find ourselves in, we've tried breaking out of the JS trap in a variety of ways: JS dialects (solving no design flaws but at least looking prettier) and JS as a compilation target (resulting, mostly, in unappealingly large output to support the emulated runtimes).\nSo when I found myself having to build a system with real deliverable size constraints, my only options seemed to be JS itself, or TypeScript, which doesn't add much to JS but at least provides a modicum of type checking. After a few months of fighting TypeScript, though, I'd had enough. Happily, my frustration coincided with the advent of PureScript.\nAt first glance, PureScript looks and feels like Haskell, but there's hardly any extraneous machinery. The PureScript compiler generates very concise JS, and the language itself is designed with the platform's constraints in mind. Yet it offers things like higher kinded polymorphism, type classes and similar deep Haskell magic. More appealingly, it comes with a growing number of libraries for coping with the browser as a platform: functional DOM manipulation, reactive programming, and more.\nIt turned out to be a delight, getting out of my tangled mess of JavaScript and rebuilding it all in PureScript, and I'd like to show you how and why. \n\nby Bodil Stokke (@bodil) - Future Ad Labs\n\nBodil is a compulsive conference speaker in the fields of functional programming and internets technologies, and is a co-organiser of multiple developer conferences in Scandinavia and the UK, mostly because she's still learning how to stop. She is a prolific contributor to the Free Software community, and has recently taken up designing new programming languages as a hobby. In her spare time, she works as a developer for Future Ad Labs, a London based startup that wants to make advertising a productive member of society. Her favourite pony is Pinkie Pie.",meta:{duration:"PT44M31S"},presenter:{name:null},slug:"purescript-maybe-this-time-we-get-javascript-right-by-bodil-stokke",source:{id:"yIlDBPiMb0o",provider:"youtube"},tag:["JavaScript","PureScript","Haskell","TypeScript","Document Object Model (API)"],title:'"PureScript (Maybe This Time We Get JavaScript Right)" by Bodil Stokke'},allTalkJson:{edges:[{node:{description:"Haskell is a beautiful functional language, written by smart computer scientists, and having clever and elegant functional constructs. It clearly separates pure and impure parts of the program.\nGame programming on the other hand is a very hands-on discipline, trying to wring out the most of the machine's performance, and aiming for one thing, in disregard of all else: a pleasant, challenging experience for the player.\nI aim to bring intersect those worlds and describe the process, and the specifics, of writing a Haskell game. Functional reactive programming, bindings to graphical libraries, etc, will all have a role to play.\n\nby Elise Huard (@elise_huard)\n\nElise Huard is a software consultant who's been crafting and bashing together software for about 15 years now. Her skill set comprises talking to people, Haskell, Clojure, R, javascript, ruby, C, scaling, and a good few bits and bobs beside.\nShe's spoken at a fair number of conferences, most of them Ruby, some of them javascript, some of them\npolyglot.\nShe's based in Berlin, Germany. She enjoys reading sci-fi, traveling, cooking, tinkering, and spending time with her husband and baby daughter.",meta:{duration:"PT29M37S"},presenter:{name:null},source:{id:"1MNTerD8IuI",provider:"youtube"},slug:"writing-a-game-in-haskell-by-elise-huard",tag:["Haskell","game programming","Functional Programming (Programming Language Paradigm)"],thumbnails:{default:{url:"https://i.ytimg.com/vi/1MNTerD8IuI/default.jpg",height:90,width:120}},title:'"Writing a game in Haskell" by Elise Huard'}},{node:{description:"NodeBots have been around for several years now, but with every presentation, there is always someone who asks, \"But... JavaScript?! Why on earth would you make robots with JavaScript?\"\n\nIt's a fair question, and one worthy of more than a hand-wavy answer about how it's cool... or something.\n\nIn this talk, let's discuss why, of all the languages on the planet, JavaScript is the perfect starting point for a future of robotics.\n\nAs a roboticist-turned-web-developer, I will provide some deep insights not only into the world of robotics, but also into JavaScript and its server-side cousin, Node.js. We'll talk about what JavaScript-enabled robots can already do, what they can't do yet, and what they might be able to do with a bit of elbow grease.\n\nAnd, if the demo deities are with us, we may even have a robot assistant on hand.\n\nRaquel Vélez\nNPM, INC.\n@rockbot\n\nRaquel Vélez is a Senior Software Developer at npm, Inc. in Oakland, CA. She has previously worked at institutions such as Caltech, NASA JPL, the MIT Lincoln Laboratory, and various universities in Europe. In her off time, you can find her baking, teaching NodeBots not to fall off of tables, and speaking. Also, hanging out with her hilarious husband and two cats dressed in dog suits.",meta:{duration:"PT36M27S"},presenter:{name:"Raquel Velez"},source:{id:"3v75aX5-gSA",provider:"youtube"},slug:"no-really-robots-and-javascript",tag:["JavaScript","Robot","Node.js"],thumbnails:{default:{url:"https://i.ytimg.com/vi/3v75aX5-gSA/default.jpg",height:90,width:120}},title:'"No, Really... Robots and JavaScript?!"'}},{node:{description:"JavaScript programmers like to use words like, “event-loop”, “non-blocking”, “callback”, “asynchronous”, “single-threaded” and “concurrency”.\n\nWe say things like “don’t block the event loop”, “make sure your code runs at 60 frames-per-second”, “well of course, it won’t work, that function is an asynchronous callback!”\n\nIf you’re anything like me, you nod and agree, as if it’s all obvious, even though you don’t actually know what the words mean; and yet, finding good explanations of how JavaScript actually works isn’t all that easy, so let’s learn!\n\nWith some handy visualisations, and fun hacks, let’s get an intuitive understanding of what happens when JavaScript runs.\n\nTranscript: http://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html\n\nLicense: For reuse of this video under a more permissive license please get in touch with us. The speakers retain the copyright for their performances.",meta:{duration:"PT26M53S"},presenter:{name:"Philip Roberts"},source:{id:"8aGhZQkoFbQ",provider:"youtube"},slug:"what-the-heck-is-the-event-loop-anyway",tag:["JavaScript","JSConf EU 2014"],thumbnails:{default:{url:"https://i.ytimg.com/vi/8aGhZQkoFbQ/default.jpg",height:90,width:120}},title:"What the heck is the event loop anyway?"}},{node:{description:"Boston Haskell, February 18, 2015\nNikhil builds an Enigma machine. First in Cryptol, then in hardware by way of Haskell.\nSlides and code available here:  https://github.com/rsnikhil/Enigma_Cryptol_Bluespec_BSV.git",meta:{duration:"PT59M41S"},presenter:{name:null},source:{id:"9-u2n4GgcVw",provider:"youtube"},slug:"rishiyur-s-nikhil-enigmatic-haskell-haskellish-enigma",tag:["Haskell"],thumbnails:{default:{url:"https://i.ytimg.com/vi/9-u2n4GgcVw/default.jpg",height:90,width:120}},title:"Rishiyur S. Nikhil - Enigmatic Haskell, Haskellish Enigma"}},{node:{description:"This talk speculates about the next language after JavaScript, and what to do in the mean time about some of the new features in ES6.\nThere will be an emphasis on simplicity and quality. The web is cluttered and full of errors. The talk will also touches on why you should subscribe to HBO.",meta:{duration:"PT54M13S"},presenter:{name:"Douglas Crockford"},source:{id:"99Zacm7SsWQ",provider:"youtube"},slug:"the-post-javascript-apocalypse",tag:["NDC Conferences","JavaScript","Web"],thumbnails:{default:{url:"https://i.ytimg.com/vi/99Zacm7SsWQ/default.jpg",height:90,width:120}},title:"The Post JavaScript Apocalypse"}},{node:{description:'How do we resolve the question, "is this better than that?" This talk discusses ideas for improving how we handle conflict in the programming community through the lens of evaluating whether Node.js is better than other technologies like Ruby.',meta:{duration:"PT41M43S"},presenter:{name:"Brian Ford"},source:{id:"C5fa1LZYodQ",provider:"youtube"},slug:"is-nodejs-better",tag:["JSConf US 2012","Node.js","Ruby On Rails","JavaScript"],thumbnails:{default:{url:"https://i.ytimg.com/vi/C5fa1LZYodQ/default.jpg",height:90,width:120}},title:"Is Node.js Better?"}},{node:{description:"Jafar Husain discusses interesting features that can be used today in JS6, such as Object.observe, async functions and async generators, while also giving a peek at what's being explored for JS7 to make async programming easier.",meta:{duration:"PT1H11M54S"},presenter:{name:null},source:{id:"DqMFX91ToLw",provider:"youtube"},slug:"netflix-javascript-talks-version-7-the-evolution-of-javascript",tag:["netflix","JavaScript","reactive programming","Web Development (Interest)","netflix ui engineering"],thumbnails:{default:{url:"https://i.ytimg.com/vi/DqMFX91ToLw/default.jpg",height:90,width:120}},title:"Netflix JavaScript Talks - Version 7: The Evolution of JavaScript"}},{node:{description:"Kenneth Foner's Comonad talk at the Boston Haskell meetup, September 17, 2014.\nCode and slides: https://github.com/kwf/ComonadSheet",meta:{duration:"PT58M33S"},presenter:{name:null},source:{id:"F7F-BzOB670",provider:"youtube"},slug:"kenneth-foner-getting-a-quick-fix-on-comonads",tag:["Haskell"],thumbnails:{default:{url:"https://i.ytimg.com/vi/F7F-BzOB670/default.jpg",height:90,width:120}},title:"Kenneth Foner - Getting a Quick Fix on Comonads"}},{node:{description:"Jafar Husain shares how Netflix uses the Reactive Extensions (Rx) library to build responsive user experiences that strive to be event-driven, scalable and resilient. Learn the power of the Observable and how Netflix has simplified code through the ability to filter, aggregate, compose and project data streams.\n\nThis talk discusses how Netflix uses Rx to:\n- Declaratively build complex events out of simple events (ex. drag and drop)\n- Coordinate and sequence multiple Ajax requests\n- Reactively update the UI in response to data changes\n- Eliminate memory leaks caused by neglecting to unsubscribe from events\n- Gracefully propagate and handle asynchronous exceptions\n\nSlides: http://www.slideboom.com/presentations/1002549/Async-Javascript-at-Netflix-2014-03-19?pk=58d9-8985-be37-25f7-dc90-fe60-a9e2-03ab\n",meta:{duration:"PT28M39S"},presenter:{name:null},source:{id:"FAZJsxcykPs",provider:"youtube"},slug:"netflix-javascript-talks-async-javascript-with-reactive-extensions",tag:["JavaScript","netflix","netflix ui engineering","Functional Programming (Programming Language Paradigm)","User Experience Design (Industry)","Web Development (Interest)","Reactive Programming"],thumbnails:{default:{url:"https://i.ytimg.com/vi/FAZJsxcykPs/default.jpg",height:90,width:120}},title:"Netflix JavaScript Talks - Async JavaScript with Reactive Extensions"}},{node:{description:"New web developers have trouble distinguishing jQuery from JavaScript. We frequently point developers to three.js for doing 3D on the web, but what is raw WebGL and what tools do we have for debugging 3D web applications?",meta:{duration:"PT55M21S"},presenter:{name:"Nick Desaulniers"},source:{id:"H4c8t6myAWU",provider:"youtube"},slug:"mozilla-raw-webgl",tag:["HTML5","HTML5DevConf 2014","JavaScript","Node.js","Web Browser"],thumbnails:{default:{url:"https://i.ytimg.com/vi/H4c8t6myAWU/default.jpg",height:90,width:120}},title:"Mozilla Raw WebGL"}}]}},pathContext:{slug:"purescript-maybe-this-time-we-get-javascript-right-by-bodil-stokke",tags:["JavaScript","PureScript","Haskell","TypeScript","Document Object Model (API)"]}}}});
//# sourceMappingURL=path---talk-purescript-maybe-this-time-we-get-javascript-right-by-bodil-stokke-ce57934c65e12f857f16.js.map