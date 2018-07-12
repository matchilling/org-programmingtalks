webpackJsonp([0xa217a4dacbff],{2419:function(e,t){e.exports={data:{allTalkJson:{edges:[{node:{description:"In this keynote speech from JaxConf 2012, Rich Hickey, creator of Clojure and founder of Datomic gives an awesome analysis of the changing way we think about values (not the philosphoical kind) in light of the increasing complexity of information technology and the advent of Big Data. The broad subject of the talk makes it worth watching for almost anyone in the programming world, and was one of the highlights of the JaxConf lineup.",meta:{duration:"PT31M44S"},presenter:{name:"Rich Hickey"},source:{id:"-6BsiVyC1kM",provider:"youtube"},slug:"the-value-of-values",tag:["JaxConf 2012","Keynote"],thumbnails:{default:{url:"https://i.ytimg.com/vi/-6BsiVyC1kM/default.jpg",height:90,width:120}},title:"The Value of Values"}},{node:{description:'We know how to write bad code: litter our programs with casts, macros, pointers, naked new and deletes, and complicated control structures. Alternatively (or additionally), we could obscure every design decision in a mess of deeply nested abstractions using the latest object-oriented programming and generic programming tricks. Then, for good measure, we might complicate our algorithms with interesting special cases. Such code is incomprehensible, unmaintainable, usually inefficient, and not uncommon.\n\nBut how do we write good code? What principles, techniques, and idioms can we exploit to make it easier to produce quality code? In this presentation, I make an argument for type-rich interfaces, compact data structures, integrated resource management and error handling, and highly-structured algorithmic code. I illustrate my ideas and guidelines with a few idiomatic code examples.\n\nI use C++11 freely. Examples include auto, general constant expressions, uniform initialization, type aliases, type safe threading, and user-defined literals. C++11 features are only just starting to appear in production compilers, so some of my suggestions are conjecture. Developing a "modern style," however, is essential if we don\'t want to maintain newly-written 1970s and 1980s style code in 2020.\n\nThis presentation reflects my thoughts on what "Modern C++" should mean in the 2010s: a language for programming based on light-weight abstraction with direct and efficient mapping to hardware, suitable for infrastructure code.',meta:{duration:"PT1H29M48S"},presenter:{name:"Bjarne Stroustrup"},source:{id:"0iWb_qi2-uI",provider:"youtube"},slug:"keynote-goingnative-2012",tag:["C++","GoingNative","Keynote"],thumbnails:{default:{url:"https://i.ytimg.com/vi/0iWb_qi2-uI/default.jpg",height:90,width:120}},title:"Keynote GoingNative 2012 C++"}},{node:{description:"Hartmut Kaisers Keynote from Meeting C++ 2014\n\nSlides:\nhttp://meetingcpp.com/index.php/tv14/items/26.html",meta:{duration:"PT1H27M36S"},presenter:{name:null},source:{id:"4OCUEgSNIAY",provider:"youtube"},slug:"plain-threads-are-the-goto-of-todays-computing-hartmut-kaiser-keynote-meeting-c-2014",tag:["Software (Industry)","C (Programming Language)","C++","Meeting C++","Keynote","Parallelism","Concurrency","Threading","Thread","HPX","Meeting C++ 2014"],thumbnails:{default:{url:"https://i.ytimg.com/vi/4OCUEgSNIAY/default.jpg",height:90,width:120}},title:"Plain Threads are the GOTO of todays computing - Hartmut Kaiser - Keynote Meeting C++ 2014"}},{node:{description:"Systems get bigger, technologies reach further, practices mature, advice changes... or at least some of it does. Some guidance remains unaffected by the passing of paradigms, the evolution of technology or the scaling of development: break your software into small, cohesive parts defined by clear interfaces and sound implementations, all the while striving for simplicity. The excuses for not doing so are as predictable as they are problematic. But if you want to create legacy code, make sure code is arbitrarily partitioned into large, incoherent parts characterised by unwieldy interfaces and incomprehensible implementations.\nWhile there are many definitions of what a legacy system is, common to almost all perceptions of a legacy system is the concept of size — specifically, lots of it. The phrase 'small legacy system' can be considered an oxymoron. This talk sets out to re-assess and reassert the importance of thinking and implementing small as an essential property of software systems — yes, even the large ones.",meta:{duration:"PT1H7M3S"},presenter:{name:"Kevlin Henney"},source:{id:"B3b4tremI5o",provider:"youtube"},slug:"small-is-beautiful",tag:["GOTO Conference","Keynote","GOTO Copenhagen","Scaling","Legacy System","Simplicity"],thumbnails:{default:{url:"https://i.ytimg.com/vi/B3b4tremI5o/default.jpg",height:90,width:120}},title:"Small Is Beautiful"}},{node:{description:'Aaron Swartz keynote - "How we stopped SOPA"  at F2C:Freedom to Connect 2012, Washington DC on May 21 2012.\n\nhttp://freedom-to-connect.net/',meta:{duration:"PT22M52S"},presenter:{name:"Aaron Swartz"},source:{id:"Fgh2dFngFsg",provider:"youtube"},slug:"f2c2012-aaron-swartz-keynote-how-we-stopped-sopa",tag:["SOPA","freedom to connect","internet freedom","Keynote"],thumbnails:{default:{url:"https://i.ytimg.com/vi/Fgh2dFngFsg/default.jpg",height:90,width:120}},title:'"How we stopped SOPA"'}},{node:{description:"This presentation was recorded at GOTO Copenhagen 2015\nhttp://gotocph.com\n\nErik Meijer - Founder at Applied Duality, Inc.\n\nABSTRACT\nErik challenges the basic ideas on Scrum & Agile and how developers should be developing code for the future. In the next decade every business will be digitized and effectively become a software company. Leveraging software, and, in general, computational [...]\nDownload slides and read the full abstract here:\nhttp://gotocon.com/cph-2015/presentation/Keynote:%20One%20Hacker%20Way\n\nhttps://twitter.com/gotocph\nhttps://www.facebook.com/GOTOConference\nhttp://gotocon.com",meta:{duration:"PT55M37S"},presenter:{name:"Erik Meijer"},source:{id:"FvMuPtuvP5w",provider:"youtube"},slug:"one-hacker-way",tag:["GOTO 2015","Keynote","Scrum","Agile"],thumbnails:{default:{url:"https://i.ytimg.com/vi/FvMuPtuvP5w/default.jpg",height:90,width:120}},title:"One Hacker Way"}},{node:{description:"Our increasingly complex needs have led us to build increasing complex software. We’ve done this in an incremental fashion, building code on top of code. We write understandable snippets of code built on programming languages we know well and then bundle them into program structures to perform complex tasks. This incremental process may seem to have low risk at the snippet level, but it leads to program structures that can be hundreds of millions of lines of code that is intractable to change, redesign, and understanding, nor in the end is it easy to design. It also leads to code with potentially unwanted emergent properties. Today, we know how to create programs that can create programming languages. So why not write software that closely follows the problem, without a programming language, then let other programs create the programming language to support it? If we apply this rethinking to the design process, both problems and solutions can be thought of in terms of relational str",meta:{duration:"PT1H7M19S"},presenter:{name:"Alan Kay"},source:{id:"QboI_1WJUlM",provider:"youtube"},slug:"rethinking-design-risk-and-software",tag:["Inspiring","Keynote","COFES 2012"],thumbnails:{default:{url:"https://i.ytimg.com/vi/QboI_1WJUlM/default.jpg",height:90,width:120}},title:"Rethinking Design, Risk, and Software"}},{node:{description:"In the 45+ years since Scott Meyers wrote his first program, he’s played many roles: programmer, user, educator, researcher, consultant. Different roles beget different perspectives on software development, and so many perspectives over so much time have led Scott to strong views about the things that really matter. In this presentation, he’ll share what he believes is especially important in software and software development, and he’ll try to convince you to embrace the same ideas he does.",meta:{duration:"PT1H6M37S"},presenter:{name:"Scott Meyers"},source:{id:"RT46MpK39rQ",provider:"youtube"},slug:"things-that-matter",tag:["DConf 2017","Software Development","Keynote","C++"],thumbnails:{default:{url:"https://i.ytimg.com/vi/RT46MpK39rQ/default.jpg",height:90,width:120}},title:"Things that Matter"}},{node:{description:"Towards the end of last year I attended a workshop with my colleagues in ThoughtWorks to discuss the nature of “event-driven” applications. Over the last few years we've been building lots of systems that make a lot of use of events, and they've been often praised, and often damned. Our North American office organized a summit, and ThoughtWorks senior developers from all over the world showed up to share ideas.\nThe biggest outcome of the summit was recognizing that when people talk about “events”, they actually mean some quite different things. So we spent a lot of time trying to tease out what some useful patterns might be. This note is a brief summary of the main ones we identified.",meta:{duration:"PT50M6S"},presenter:{name:"Martin Fowler"},source:{id:"STKCRSUsyP0",provider:"youtube"},slug:"the-many-meanings-of-event-driven-architecture",tag:["GOTO Conference","Chicago","Keynote"],thumbnails:{default:{url:"https://i.ytimg.com/vi/STKCRSUsyP0/default.jpg",height:90,width:120}},title:"The Many Meanings of Event-Driven Architecture"}},{node:{description:"http://bit.ly/gAAXPd\n\nThis is the Apple Special Event 2011 which took place on 2nd March 2011\n\nThe iPad 2 is amazing!\n\nhttp://equimedia.blogspot.com/",meta:{duration:"PT1H13M37S"},presenter:{name:"Steve Jobs"},source:{id:"TGxEQhdi1AQ",provider:"youtube"},slug:"apple-ipad-2-keynote-special-event-march-2011",tag:["Apple","Keynote"],thumbnails:{default:{url:"https://i.ytimg.com/vi/TGxEQhdi1AQ/default.jpg",height:90,width:120}},title:"Apple iPad 2 Keynote"}},{node:{description:"Drawing from some of the most pivotal points in his life, Steve Jobs, chief executive officer and co-founder of Apple Computer and of Pixar Animation Studios, urged graduates to pursue their dreams and see the opportunities in life's setbacks.",meta:{duration:"PT15M5S"},presenter:{name:"Steve Jobs"},source:{id:"UF8uR6Z6KLc",provider:"youtube"},slug:"steve-jobs-stanford-commencement-address",tag:["Stanford University","Educational","Keynote","Inspiring","Commencement Speech"],thumbnails:{default:{url:"https://i.ytimg.com/vi/UF8uR6Z6KLc/default.jpg",height:90,width:120}},title:"Steve Jobs' 2005 Stanford Commencement Address"}},{node:{description:"Here we see Steve Jobs & the almost bankrupt at the time Apple Computer making a temporary deal with Bill Gates & Microsoft. The crowd was not too happy about it.",meta:{duration:"PT12M6S"},presenter:{name:"Steve Jobs"},source:{id:"WxOp5mBY9IY",provider:"youtube"},slug:"macworld-boston-1997-the-microsoft-deal",tag:["Apple","Macworld","Keynote","Microsoft"],thumbnails:{default:{url:"https://i.ytimg.com/vi/WxOp5mBY9IY/default.jpg",height:90,width:120}},title:"Macworld Boston 1997-The Microsoft Deal"}},{node:{description:"Ths talk explains what DevOps is, and defines a style of practice that comes from the lived experience of many DevOps professionals. It is a collaborative space, where all practitioners of the style can come together to create a reference for how to build up their own DevOps Kung fu, and teach others how to improve theirs.\nFor more info, see https://github.com/chef/devops-kungfu",meta:{duration:"PT1H16M8S"},presenter:{name:"Adam Jacob"},source:{id:"_DEToXsgrPc",provider:"youtube"},slug:"chef-style-devops-kungfu",tag:["Keynote","ChefConf 2015"],thumbnails:{default:{url:"https://i.ytimg.com/vi/_DEToXsgrPc/default.jpg",height:90,width:120}},title:"Chef Style DevOps Kungfu"}},{node:{description:'Dave Thomas was one of the creators of the Agile Manifesto. A year ago, he told us that Agile is Dead. How could this be? Why had he deserted us? And what are we to do? It turns out that while the "Agile" industry is busy debasing the meaning of the word, the underlying values are still strong. In this talk, Dave will draw a distinction, and show us how to reclaim agility for ourselves. As usual, he\'ll probably end up making some friends, and making some enemies. Which will you be?',meta:{duration:"PT40M39S"},presenter:{name:"Dave Thomas"},source:{id:"a-BOSpxYJ9M",provider:"youtube"},slug:"agile-is-dead-pragmatic",tag:["Keynote","Agile","GOTO 2015"],thumbnails:{default:{url:"https://i.ytimg.com/vi/a-BOSpxYJ9M/default.jpg",height:90,width:120}},title:"Agile is Dead"}},{node:{description:"Erlang Factory SF Bay Area 2013\nMore info and slides on the website: http://www.erlang-factory.com/conference/SFBay2013/talks\n\nSoftware is difficult because the parts don't fit together. Why is this? Can we do anything about this? And what's this got to do with Erlang? Come to my talk and you'll find out!",meta:{duration:"PT46M40S"},presenter:{name:null},source:{id:"ed7A7r6DBsM",provider:"youtube"},slug:"the-how-and-why-of-fitting-things-together-joe-armstrong",tag:["Erlang","Erlang Factory","Joe Armstrong","Keynote"],thumbnails:{default:{url:"https://i.ytimg.com/vi/ed7A7r6DBsM/default.jpg",height:90,width:120}},title:"The How and Why of Fitting Things Together - Joe Armstrong"}},{node:{description:"For an industry steeped in a mythos of innovation and invention, the path towards reliable software is often obstructed by a web of fixed ideas. Fixed ideas, by actively obscuring alternatives, lead us to inaccurately the weigh the risks and benefits associated with our choices whether they be of an engineering, managerial or business nature. Alan Kay famously quipped that a difference in perspective is worth 80 IQ points but in this talk we'll see that it's worth considerably more than that.",meta:{duration:"PT39M37S"},presenter:{name:"David Nolen"},source:{id:"lzXHMy4ewtM",provider:"youtube"},slug:"idee-fixe",tag:["GOTO Conference","Chicago","Keynote","Innovation"],thumbnails:{default:{url:"https://i.ytimg.com/vi/lzXHMy4ewtM/default.jpg",height:90,width:120}},title:"Idée Fixe"}},{node:{description:"Rich Hickey, the author of Clojure and designer of Datomic, is a software developer with over 20 years of experience in various domains. Rich has worked on scheduling systems, broadcast automation, audio analysis and fingerprinting, database design, yield management, exit poll systems, and machine listening, in a variety of languages.",meta:{duration:"PT36M54S"},presenter:{name:"Rich Hickey"},source:{id:"rI8tNMsozo0",provider:"youtube"},slug:"simplicity-matters",tag:["railsconf","Ruby on Rails","Simplicity","Ruby","Keynote"],thumbnails:{default:{url:"https://i.ytimg.com/vi/rI8tNMsozo0/default.jpg",height:90,width:120}},title:"Simplicity Matters"}},{node:{description:"Andy Hunt, co-founder of The Pragmatic Programmers, LLC and a well known programmer, author, and publisher, starts the conference with his take on open source and where we're going.",meta:{duration:"PT24M42S"},presenter:{name:"Andy Hunt"},source:{id:"u0_klUqeQVs",provider:"youtube"},slug:"open-source-agile-and-your-brain",tag:["All Things Open Conference 2013","Pragmatic Programmers","Keynote"],thumbnails:{default:{url:"https://i.ytimg.com/vi/u0_klUqeQVs/default.jpg",height:90,width:120}},title:"Open Source, Agile, and Your Brain"}},{node:{description:"Everything is changing. Everything is new. Frameworks, platforms and trends are displaced on a weekly basis. Skills are churning.\n\nAnd yet... Beneath this seemingly turbulent flow there is a slow current, strong and steady, changing relatively little over the decades. Concepts with a long history appear in new forms and fads and technologies. Principles are revisited. Ideas once lost to the mainstream are found again.\n\nIn this keynote we revisit the present through the past, looking at the enduring principles that shape programming languages, architecture, development practice and development process, the ideas that cycle round, each time becoming perhaps a little better defined, a little more mature, and look to see what else might be on the horizon.",meta:{duration:"PT50M23S"},presenter:{name:"Kevlin Henney"},source:{id:"AbgsfeGvg3E",provider:"youtube"},slug:"old-is-the-new-new",tag:["GOTO Conference","Keynote","Architecture","Languages"],thumbnails:{default:{url:"https://i.ytimg.com/vi/AbgsfeGvg3E/default.jpg",height:90,width:120}},title:"Old Is the New New"}}]}},pathContext:{slug:"keynote",tag:"Keynote"}}}});
//# sourceMappingURL=path---tag-keynote-3f5a542cae91cea23e78.js.map