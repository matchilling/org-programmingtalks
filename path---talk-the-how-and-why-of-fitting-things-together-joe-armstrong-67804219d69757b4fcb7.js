webpackJsonp([0xba99492c9fa7],{3214:function(e,t){e.exports={data:{talkJson:{description:"Erlang Factory SF Bay Area 2013\nMore info and slides on the website: http://www.erlang-factory.com/conference/SFBay2013/talks\n\nSoftware is difficult because the parts don't fit together. Why is this? Can we do anything about this? And what's this got to do with Erlang? Come to my talk and you'll find out!",meta:{duration:"PT46M40S"},presenter:{name:null},slug:"the-how-and-why-of-fitting-things-together-joe-armstrong",source:{id:"ed7A7r6DBsM",provider:"youtube"},tag:["Erlang","Erlang Factory","Joe Armstrong","Keynote"],title:"The How and Why of Fitting Things Together - Joe Armstrong"},allTalkJson:{edges:[{node:{description:"In this keynote speech from JaxConf 2012, Rich Hickey, creator of Clojure and founder of Datomic gives an awesome analysis of the changing way we think about values (not the philosphoical kind) in light of the increasing complexity of information technology and the advent of Big Data. The broad subject of the talk makes it worth watching for almost anyone in the programming world, and was one of the highlights of the JaxConf lineup.",meta:{duration:"PT31M44S"},presenter:{name:"Rich Hickey"},source:{id:"-6BsiVyC1kM",provider:"youtube"},slug:"the-value-of-values",tag:["JaxConf 2012","Keynote"],thumbnails:{default:{url:"https://i.ytimg.com/vi/-6BsiVyC1kM/default.jpg",height:90,width:120}},title:"The Value of Values"}},{node:{description:'We know how to write bad code: litter our programs with casts, macros, pointers, naked new and deletes, and complicated control structures. Alternatively (or additionally), we could obscure every design decision in a mess of deeply nested abstractions using the latest object-oriented programming and generic programming tricks. Then, for good measure, we might complicate our algorithms with interesting special cases. Such code is incomprehensible, unmaintainable, usually inefficient, and not uncommon.\n\nBut how do we write good code? What principles, techniques, and idioms can we exploit to make it easier to produce quality code? In this presentation, I make an argument for type-rich interfaces, compact data structures, integrated resource management and error handling, and highly-structured algorithmic code. I illustrate my ideas and guidelines with a few idiomatic code examples.\n\nI use C++11 freely. Examples include auto, general constant expressions, uniform initialization, type aliases, type safe threading, and user-defined literals. C++11 features are only just starting to appear in production compilers, so some of my suggestions are conjecture. Developing a "modern style," however, is essential if we don\'t want to maintain newly-written 1970s and 1980s style code in 2020.\n\nThis presentation reflects my thoughts on what "Modern C++" should mean in the 2010s: a language for programming based on light-weight abstraction with direct and efficient mapping to hardware, suitable for infrastructure code.',meta:{duration:"PT1H29M48S"},presenter:{name:"Bjarne Stroustrup"},source:{id:"0iWb_qi2-uI",provider:"youtube"},slug:"keynote-goingnative-2012",tag:["C++","GoingNative","Keynote"],thumbnails:{default:{url:"https://i.ytimg.com/vi/0iWb_qi2-uI/default.jpg",height:90,width:120}},title:"Keynote GoingNative 2012 C++"}},{node:{description:"Erlang is ideally suited building scalable, fault tolerant systems with minimal investment. It can be used for any conceivable application - not just telecom. It has a multi-decade track record of success. So why does it remain a niche technology?\n\nTo answer this question, Garrett turned to science. He conducted a detailed survey across a wide spectrum of programmers, architects, and managers to gather data on this question. In this talk, Garrett will present his findings and reflect on what they could mean for Erlang and its community.\n\nErlang adoption is important. It makes your job easier when Erlang is supported by your company and customers. It's easier to grow teams when there are more Erlang programmers. The language itself will improve as it is applied across more domains. If you're interested in this topic - and want data rather than personal opinions - join Garrett in this important discussion.\n\nTalk objectives:\n\n- To present data to better understand how Erlang is used and, more importantly, how and why Erlang is not used.\n\nTarget audience:\n\n- Anyone interested in supporting and promoting Erlang adoption, either within their company or within the broader programming community.",meta:{duration:"PT51M55S"},presenter:{name:null},source:{id:"3MvKLOecT1I",provider:"youtube"},slug:"garrett-smith-why-the-cool-kids-dont-use-erlang",tag:["Erlang","Erlang User Conference","Garrett Smith"],thumbnails:{default:{url:"https://i.ytimg.com/vi/3MvKLOecT1I/default.jpg",height:90,width:120}},title:"Garrett Smith - Why The Cool Kids Don't Use Erlang"}},{node:{description:"Hartmut Kaisers Keynote from Meeting C++ 2014\n\nSlides:\nhttp://meetingcpp.com/index.php/tv14/items/26.html",meta:{duration:"PT1H27M36S"},presenter:{name:null},source:{id:"4OCUEgSNIAY",provider:"youtube"},slug:"plain-threads-are-the-goto-of-todays-computing-hartmut-kaiser-keynote-meeting-c-2014",tag:["Software (Industry)","C (Programming Language)","C++","Meeting C++","Keynote","Parallelism","Concurrency","Threading","Thread","HPX","Meeting C++ 2014"],thumbnails:{default:{url:"https://i.ytimg.com/vi/4OCUEgSNIAY/default.jpg",height:90,width:120}},title:"Plain Threads are the GOTO of todays computing - Hartmut Kaiser - Keynote Meeting C++ 2014"}},{node:{description:"Everything is changing. Everything is new. Frameworks, platforms and trends are displaced on a weekly basis. Skills are churning.\n\nAnd yet... Beneath this seemingly turbulent flow there is a slow current, strong and steady, changing relatively little over the decades. Concepts with a long history appear in new forms and fads and technologies. Principles are revisited. Ideas once lost to the mainstream are found again.\n\nIn this keynote we revisit the present through the past, looking at the enduring principles that shape programming languages, architecture, development practice and development process, the ideas that cycle round, each time becoming perhaps a little better defined, a little more mature, and look to see what else might be on the horizon.",meta:{duration:"PT50M23S"},presenter:{name:"Kevlin Henney"},source:{id:"AbgsfeGvg3E",provider:"youtube"},slug:"old-is-the-new-new",tag:["GOTO Conference","Keynote","Architecture","Languages"],thumbnails:{default:{url:"https://i.ytimg.com/vi/AbgsfeGvg3E/default.jpg",height:90,width:120}},title:"Old Is the New New"}},{node:{description:"Systems get bigger, technologies reach further, practices mature, advice changes... or at least some of it does. Some guidance remains unaffected by the passing of paradigms, the evolution of technology or the scaling of development: break your software into small, cohesive parts defined by clear interfaces and sound implementations, all the while striving for simplicity. The excuses for not doing so are as predictable as they are problematic. But if you want to create legacy code, make sure code is arbitrarily partitioned into large, incoherent parts characterised by unwieldy interfaces and incomprehensible implementations.\nWhile there are many definitions of what a legacy system is, common to almost all perceptions of a legacy system is the concept of size — specifically, lots of it. The phrase 'small legacy system' can be considered an oxymoron. This talk sets out to re-assess and reassert the importance of thinking and implementing small as an essential property of software systems — yes, even the large ones.",meta:{duration:"PT1H7M3S"},presenter:{name:"Kevlin Henney"},source:{id:"B3b4tremI5o",provider:"youtube"},slug:"small-is-beautiful",tag:["GOTO Conference","Keynote","GOTO Copenhagen","Scaling","Legacy System","Simplicity"],thumbnails:{default:{url:"https://i.ytimg.com/vi/B3b4tremI5o/default.jpg",height:90,width:120}},title:"Small Is Beautiful"}},{node:{description:'Aaron Swartz keynote - "How we stopped SOPA"  at F2C:Freedom to Connect 2012, Washington DC on May 21 2012.\n\nhttp://freedom-to-connect.net/',meta:{duration:"PT22M52S"},presenter:{name:"Aaron Swartz"},source:{id:"Fgh2dFngFsg",provider:"youtube"},slug:"f2c2012-aaron-swartz-keynote-how-we-stopped-sopa",tag:["SOPA","freedom to connect","internet freedom","Keynote"],thumbnails:{default:{url:"https://i.ytimg.com/vi/Fgh2dFngFsg/default.jpg",height:90,width:120}},title:'"How we stopped SOPA"'}},{node:{description:"This presentation was recorded at GOTO Copenhagen 2015\nhttp://gotocph.com\n\nErik Meijer - Founder at Applied Duality, Inc.\n\nABSTRACT\nErik challenges the basic ideas on Scrum & Agile and how developers should be developing code for the future. In the next decade every business will be digitized and effectively become a software company. Leveraging software, and, in general, computational [...]\nDownload slides and read the full abstract here:\nhttp://gotocon.com/cph-2015/presentation/Keynote:%20One%20Hacker%20Way\n\nhttps://twitter.com/gotocph\nhttps://www.facebook.com/GOTOConference\nhttp://gotocon.com",meta:{duration:"PT55M37S"},presenter:{name:"Erik Meijer"},source:{id:"FvMuPtuvP5w",provider:"youtube"},slug:"one-hacker-way",tag:["GOTO 2015","Keynote","Scrum","Agile"],thumbnails:{default:{url:"https://i.ytimg.com/vi/FvMuPtuvP5w/default.jpg",height:90,width:120}},title:"One Hacker Way"}},{node:{description:"Erlang Factory SF Bay Area 2013\nMore info and slides on the website: http://www.erlang-factory.com/conference/SFBay2013/talks\n\nWe all know that Erlang is great for building complicated distributed systems, but did you know that building a website in Erlang is as easy as using Ruby on Rails? In this talk I'll introduce you to Chicago Boss, the web framework that takes care of all the hard parts of Erlang/OTP for you, letting the developer focus on building a great website. I'll explain why Erlang is an excellent choice for delivering web content, give a high-level overview of the Chicago Boss architecture, and explicate the philosophy behind some of CB's controversial design decisions. In the process we'll cover CB's high-performance template system, its custom compiler chain and language-integrated query syntax, its unique approaches to e-mail and i18n, and everything in between. Some practical code examples will be included at the end. All levels of expertise are welcome.",meta:{duration:"PT45M59S"},presenter:{name:null},source:{id:"LGGo6bIuj8w",provider:"youtube"},slug:"chicago-boss-a-web-framework-built-for-comfort-and-speed-evan-miller",tag:["Erlang","Erlang Factory","Chicago Boss","Evan Miller","Ruby on Rails","Web Framework"],thumbnails:{default:{url:"https://i.ytimg.com/vi/LGGo6bIuj8w/default.jpg",height:90,width:120}},title:"Chicago Boss: A Web Framework Built for Comfort (and Speed) - Evan Miller"}},{node:{description:"Deployment Options: How To Ship New Code Without Taking Your System Down\n\nErlang is quite famous for long-running interruption-free installations. But how is this achieved in practice while still evolving the software?\n\nWe will look at different deployment options, from simple to advanced:\n\n1. Deployment by restart\n\n2. Hot code reloading\n\n3. Release handling\n\nSee hot code reloading in action and learn how to avoid common traps & pitfalls.\n\nTalk objectives: By the end of this talk you shall be able to decide: Which strategy is right for me? What do I have to consider?\n\nTarget audience: General familiarity with Erlang is assumed.",meta:{duration:"PT32M47S"},presenter:{name:null},source:{id:"NfCLCmRi4_Y",provider:"youtube"},slug:"martin-rehfeld-how-to-ship-new-code-without-taking-your-system-down-berlin-erlang-factory-lite",tag:["Erlang","Martin Rehfeld","Deployment Options"],thumbnails:{default:{url:"https://i.ytimg.com/vi/NfCLCmRi4_Y/default.jpg",height:90,width:120}},title:"Martin Rehfeld - How To Ship New Code Without Taking Your System Down -  Berlin Erlang Factory Lite"}}]}},pathContext:{slug:"the-how-and-why-of-fitting-things-together-joe-armstrong",tags:["Erlang","Erlang Factory","Joe Armstrong","Keynote"]}}}});
//# sourceMappingURL=path---talk-the-how-and-why-of-fitting-things-together-joe-armstrong-67804219d69757b4fcb7.js.map