webpackJsonp([0xa4dcd0763e76],{3002:function(e,t){e.exports={data:{talkJson:{description:'Rich Hickey\'s second, "philosophical" talk at the first Clojure Conj, in Durham, North Carolina on October 23rd, 2010. \n\nMany thanks to Matt Courtney, who graciously provided the equipment and expertise that made this recording possible.',meta:{duration:"PT39M49S"},presenter:{name:"Rich Hickey"},slug:"hammock-driven-development",source:{id:"f84n5oFoZBc",provider:"youtube"},tag:["Clojure","Inspiring"],title:"Hammock Driven Development"},allTalkJson:{edges:[{node:{description:'Games are a modern art form, and like other artists, game designers need to experience their work as they create it. This talk will explore the benefits of making games "at runtime". Through both abstract discussion and concrete demonstration, we will see why Clojure is uniquely suited to the task.\n\nZach is an independent programmer and tutor in the Pittsburgh area. He made Nightcode, a Clojure IDE for beginners, and is working to make Clojure games a reality with the play-clj library and Nightmod, a game creation tool. Previously, he was a programmer at the National Security Agency in Maryland.',meta:{duration:"PT37M34S"},presenter:{name:"Zach Oakes"},source:{id:"0GzzFeS5cMc",provider:"youtube"},slug:"making-games-at-runtime-with-clojure",tag:["Clojure","Game Programmer"],thumbnails:{default:{url:"https://i.ytimg.com/vi/0GzzFeS5cMc/default.jpg",height:90,width:120}},title:"Making Games at Runtime with Clojure"}},{node:{description:"People keep implementing map, filter and other fundamental algorithms in different contexts - eagerly over collections, over lazy sequences, in parallel, over enumerables/iterables, over observables, over channels/streams etc. In addition to duplication of effort, this yields bloated APIs, and, when implemented in the classic way, often involves the creation of expensive intermediate objects/values that\ncan be difficult to optimize away.\nMost problematic is that this approach keeps us from composing core algorithms in a context-independent way which would facilitate reuse and engender greater flexibility.\nThis talk will describe transducers, a new library feature for Clojure (but of interest to other languages) that emphasizes composable, context-free, intermediate-free notions like 'mapping' and 'filtering' and their concrete reuse across all of the contexts above.",meta:{duration:"PT45M1S"},presenter:{name:"Rich Hickey"},source:{id:"6mTbuzafcII",provider:"youtube"},slug:"transducers",tag:["Clojure"],thumbnails:{default:{url:"https://i.ytimg.com/vi/6mTbuzafcII/default.jpg",height:90,width:120}},title:"Transducers"}},{node:{description:"\"The most dangerous thought you can have as a creative person is to think you know what you're doing.\"\nPresented at Dropbox's DBX conference on July 9, 2013.\nAll of the slides are available at: http://worrydream.com/dbx/\n\nFor his recent DBX Conference talk, Victor took attendees back to the year 1973, donning the uniform of an IBM systems engineer of the times, delivering his presentation on an overhead projector. The '60s and early '70s were a fertile time for CS ideas, reminds Victor, but even more importantly, it was a time of unfettered thinking, unconstrained by programming dogma, authority, and tradition. 'The most dangerous thought that you can have as a creative person is to think that you know what you're doing,' explains Victor. 'Because once you think you know what you're doing you stop looking around for other ways of doing things and you stop being able to see other ways of doing things. You become blind.' He concludes, 'I think you have to say: \"We don't know what programming is. We don't know what computing is. We don't even know what a computer is.\" And once you truly understand that, and once you truly believe that, then you're free, and you can think anything.'\"",meta:{duration:"PT32M56S"},presenter:{name:"Bret Victor"},source:{id:"8pTEmbeENF4",provider:"youtube"},slug:"the-future-of-programming",tag:["Inspiring","Funny","DBX conference 2013"],thumbnails:{default:{url:"https://i.ytimg.com/vi/8pTEmbeENF4/default.jpg",height:90,width:120}},title:"The Future of Programming"}},{node:{description:"In this talk, we hear from David Nolen from the New York Times about core.async, the new library for asynchronous programming in Clojure and ClojureScript. He'll be talking about Clojure, Communicating Sequential Processes & Responsive Design. This talk was recorded at the NY Clojure Users Group meetup at Two Sigma Investments.\n\nAs clients diversify on all fronts, how do we program flexible user interfaces without getting mired in software bloat and rampant complexity? Communicating Sequential Processes gives us the tools we need to design modular user interface components - we'll see how with Clojure, ClojureScript and core.async.",meta:{duration:"PT55M32S"},presenter:{name:"David Nolen"},source:{id:"AhxcGGeh5ho",provider:"youtube"},slug:"coreasync-for-asynchronous-programming",tag:["Clojure","Asynchronous Programming"],thumbnails:{default:{url:"https://i.ytimg.com/vi/AhxcGGeh5ho/default.jpg",height:90,width:120}},title:"Clojure Library Core.async for Asynchronous Programming"}},{node:{description:"The Model-View-Controller (MVC) approach to user interfaces was first proposed by Trygve Reenskaug in a 1979 Xerox PARC note. As Object Oriented methodologies gained popularity, MVC too gained traction as a natural and logical way to construct user interfaces despite obvious shortcomings. Even though OO researchers moved forward with alternative approaches likes Morphic and constraint based systems, MVC today maintains a stranglehold on mainstream developer approaches to UI.\n\nCan functional programming take the good lessons from MVC while advancing the state of the art? Functional Reactive Programming and its derivatives primarily solve complexities around events - what of component modularity and abstraction?\n\nWe'll examine how a new library for ClojureScript called Om, a simple functional layer over Facebook's React, makes some traditional hard problems in MVC based UIs simple without abandoning the abstractions OO programmers find so useful. These concepts are easily portable to other systems provided the presence of persistent data structures.",meta:{duration:"PT27M2S"},presenter:{name:"David Nolen"},source:{id:"DMtwq3QtddY",provider:"youtube"},slug:"the-functional-final-frontier",tag:["Clojure","Functional Programming"],thumbnails:{default:{url:"https://i.ytimg.com/vi/DMtwq3QtddY/default.jpg",height:90,width:120}},title:"The Functional Final Frontier"}},{node:{description:"This persuasive talk shows how essential and easy it is to gain a basic understanding of computer science learning principles. Our world increasingly driven by technology and software, so we all need to know the creative, problem-solving power of computer science. This is especially important to students who will lead the way in our shared future. Learn how you can take the next step at http://code.org.",meta:{duration:"PT10M33S"},presenter:{name:"Hadi Partovi"},source:{id:"FpMNs7H24X0",provider:"youtube"},slug:"computer-science-is-for-everyone",tag:["TEDtalks","Education","Inspiring"],thumbnails:{default:{url:"https://i.ytimg.com/vi/FpMNs7H24X0/default.jpg",height:90,width:120}},title:"Computer science is for everyone"}},{node:{description:"Treo creator Jeff Hawkins urges us to take a new look at the brain -- to see it not as a fast processor, but as a memory system that stores and plays back experiences to help us predict, intelligently, what will happen next.",meta:{duration:"PT22M10S"},presenter:{name:"Jeff Hawkins"},source:{id:"G6CVj5IQkzk",provider:"youtube"},slug:"how-brain-science-will-change-computing",tag:["TEDTalks","Brain Science","Neuroscience","Artificial Intelligence (AI)","Inspiring"],thumbnails:{default:{url:"https://i.ytimg.com/vi/G6CVj5IQkzk/default.jpg",height:90,width:120}},title:"How brain science will change computing"}},{node:{description:"More than 55 years ago John McCarthy had an insanely great idea called Lisp. Lisp marked the beginning of functional programming, interpreters, high-level metaprogramming, garbage collection, and much more. Yet after such auspicious beginnings the idea of Lisp has since faded and many of its innovations have been adopted by much more popular programming languages. Until recently Lisp even appeared doomed to fade into obscurity but several things have conspired to make Lisp somewhat cool again - one of these is Clojure, a fun modern Lisp targeting the Java Virtual Machine.\n\nHowever the Web doesn't speak JVM bytecodes. It speaks JavaScript - thus the cornucopia of languages that now compile to JavaScript. The most well known include GWT, CoffeeScript, and more recently Dart and TypeScript. However none of these represent a real break from the status quo.\n\nJohn McCarthy's insanely great idea still has a lot to offer the Web and we'll see how with ClojureScript, an implementation of Clojure that targets JavaScript.",meta:{duration:"PT32M3S"},presenter:{name:"David Nolen"},source:{id:"MTawgp3SKy8",provider:"youtube"},slug:"clojurescript-lisps-revenge",tag:["Clojure","Lisp","GOTO Conference"],thumbnails:{default:{url:"https://i.ytimg.com/vi/MTawgp3SKy8/default.jpg",height:90,width:120}},title:"ClojureScript: Lisp's Revenge"}},{node:{description:"Rationale and high level design of Om Next.\n\nAbout the speaker: David Nolen is a software engineer for Cognitect. He enjoys making music, writing JavaScript, writing ClojureScript, and exploring new approaches to user interface programming.",meta:{duration:"PT39M23S"},presenter:{name:"David Nolen"},source:{id:"MDZpSIngwm4",provider:"youtube"},slug:"om-next-david-nolen",tag:["Clojure"],thumbnails:{default:{url:"https://i.ytimg.com/vi/MDZpSIngwm4/default.jpg",height:90,width:120}},title:"Om Next"}},{node:{description:"Alan Kay talks about alternative approaches to teach Computer Science in schools.",meta:{duration:"PT1H10M32S"},presenter:{name:"Alan Kay"},source:{id:"N9c7_8Gp7gI",provider:"youtube"},slug:"rethinking-computer-science-education",tag:["Educational","CrossRoads 2015","Inspiring"],thumbnails:{default:{url:"https://i.ytimg.com/vi/N9c7_8Gp7gI/default.jpg",height:90,width:120}},title:"Rethinking Computer Science Education"}}]}},pathContext:{slug:"hammock-driven-development",tags:["Clojure","Inspiring"]}}}});
//# sourceMappingURL=path---talk-hammock-driven-development-a5ff1397ff6b0eb35850.js.map