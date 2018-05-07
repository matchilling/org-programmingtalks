webpackJsonp([80138645898090],{3152:function(e,a){e.exports={data:{talkJson:{description:'Meetup: http://www.meetup.com/papers-we-love/events/220021234/\nPaper: https://www.cs.utah.edu/plt/publications/macromod.pdf\nSlides: http://bit.ly/1KNwpjC\nAudio: https://www.mixcloud.com/paperswelove/sam-tobin-hochstadt-on-composable-and-compilable-macros/\n--------------------------------------------------------------------------------------------------------------------------------------------------\nSponsored by Two Sigma (@twosigma), The Ladders (@TheLaddersDev), and LispNYC (@lispnyc)\n--------------------------------------------------------------------------------------------------------------------------------------------------\n\nDescription\n---------------\n"Composable and Compilable Macros" introduces the Racket module system, which addresses the following problem: When you have macros that run programs at compile-time, how does this interact with separate compilation and ahead-of-time compilation. The paper introduces "phases", which enable Racket to behave the same regardless of when and how you compile your program. It also introduces the idea of writing different modules in different languages, which is now used for systems like Typed Racket.\n\nA few related papers:\n\n- Syntactic Abstraction in Scheme, Dybvig Hieb & Bruggeman, Lisp andSymbolic Computation 1993\n\n- Macros that Work Together, Flatt, Findler, Culpepper, & Darais, JFP 2012- Submodules in Racket, Flatt GPCE 2013\n\n- Implicit phasing for R6RS libraries,  Ghuloum & Dybvig, ICFP 2007\n\n- Extending the scope of syntactic abstraction, Waddell & Dybvig, POPL 1999 \n\nBio\n----\nSam Tobin-Hochstadt (@samth) is an Assistant Professor in the School of Informatics and Computing at Indiana University. He has worked on dynamic languages, type systems, module systems, and metaprogramming, including creating the Typed Racket system and popularizing the phrase “scripts to programs.” He is a member of the ECMA TC39 working group responsible for standardizing JavaScript, where he co-designed the module system for ES6, the next version of JavaScript. He received his PhD in 2010 from Northeastern University under Matthias Felleisen.',meta:{duration:"PT54M49S"},presenter:{name:null},slug:"sam-tobin-hochstadt-on-composable-and-compilable-macros",source:{id:"pK2E63mhRxI",provider:"youtube"},tag:["Computer Programming (Conference Subject)","Programming Languages","Macros","Racket","Modules","Scheme","Papers We Love","ICFP"],title:"Sam Tobin-Hochstadt on Composable and Compilable Macros"},allTalkJson:{edges:[{node:{description:"This presentation was recorded at GOTO Berlin 2015\nhttp://gotober.com\n\nKevin Goldsmith - Vice President, Engineering at Spotify\n\nABSTRACT\nThe software industry used to be all about building monoliths: monolithic applications and services, with bing-bang product releasees. All that has now changed [...]\nDownload slides and read the full abstract here:\nhttp://gotocon.com/berlin-2015/presentation/Microservices%20@%20Spotify\n\nhttps://twitter.com/gotober\nhttps://www.facebook.com/GOTOConference\nhttp://gotocon.com",meta:{duration:"PT49M8S"},presenter:{name:"Kevin Goldsmith"},source:{id:"7LGPeBgNFuU",provider:"youtube"},slug:"microservices-spotify-kevin-goldsmith",tag:["GOTO Conference","Berlin","Microservices","Spotify","Programming Languages"],thumbnails:{default:{url:"https://i.ytimg.com/vi/7LGPeBgNFuU/default.jpg",height:90,width:120}},title:"Microservices at Spotify"}},{node:{description:"Meetup: http://www.meetup.com/papers-we-love/events/214400572/\nPaper: http://www.cs.cmu.edu/~crary/819-f09/Hoare69.pdf\nSlides: https://speakerdeck.com/paperswelove/jean-yang-on-an-axiomatic-basis-for-computer-programming\nAudio: http://www.mixcloud.com/paperswelove/jean-yang-on-an-axiomatic-basis-for-computer-programming/\n---------------------------------------------------------------------------------------------\nSponsored by The Ladders (@TheLaddersDev)\n---------------------------------------------------------------------------------------------\n\nDescription\n---------------\nOur lives now run on software. Bugs are becoming not just annoyances for software developers, but sources of potentially catastrophic failures. A careless programmer mistake could leak our social security numbers or crash our cars. While testing provides some assurance, it is difficult to test all possibilities in complex systems--and practically impossible in concurrent systems. For the critical systems in our lives, we should demand mathematical guarantees that the software behaves the way the programmer expected.\n\nA single paper influenced much of the work towards providing these mathematical guarantees. C.A.R. Hoare’s seminal 1969 paper “An Axiomatic Basis for Computer Programming” introduces a method of reasoning about program correctness now known as Hoare logic. In this paper, Hoare provides a technique that 1) allows programmers to express program properties and 2) allows these properties to be automatically checked. These ideas have influenced decades of research in automated reasoning about software correctness.\n\nIn this talk, I will describe the main ideas in Hoare logic, as well as the impact of these ideas. I will talk about my personal experience using Hoare logic to verify memory guarantees in an operating system. I will also discuss takeaway lessons for working programmers.\n\nBio\n----\nJean Yang (@jeanqasaur) is a final-year PhD student at MIT. For her PhD thesis she has created Jeeves, a programming language for automatically enforcing information flow policies for security and privacy. You may be more familiar with one of her other projects, Haskell Ryan Gosling.",meta:{duration:"PT1H4M32S"},presenter:{name:null},source:{id:"GQi-6-d5ooQ",provider:"youtube"},slug:"jean-yang-on-an-axiomatic-basis-for-computer-programming",tag:["Computer Programming (Conference Subject)","Mathematics (Field Of Study)","Software Engineering (Industry)","Program Correctness","Ryan Gosling","Hoare Logic","Type Checking","Computer (Industry)","Programming Language"],thumbnails:{default:{url:"https://i.ytimg.com/vi/GQi-6-d5ooQ/default.jpg",height:90,width:120}},title:"Jean Yang on An Axiomatic Basis for Computer Programming"}},{node:{description:"Meetup: http://www.meetup.com/papers-we-love/events/220902753/\nPaper: http://www.cs.cmu.edu/~crary/819-f09/Strachey67.pdf\nSlides: http://bit.ly/1BnBb08\nAudio: http://bit.ly/1HAdXci\n\n---------------------------------------------------------------------------------------------\nSponsored by Two Sigma (@twosigma) and The Ladders (@TheLaddersDev)\n---------------------------------------------------------------------------------------------\n\nDescription\n---------------\nStrachey's lectures on \"Fundamental Concepts in Programming Languages\" provided an extremely broad survey of core issues in programming language design that provided much of the terminology we use today, including definitions of the kinds of polymorphism and the kinds of expressions we see in programming languages. Published as a paper many years later, Strachey's lectures provide an especially readable overview of programming languages concepts.\n\nBio\n----\nJohn Myles White (@johnmyleswhite) is a Julia hacker who loves thinking about the ways in which the design of technical programming languages influences the way in which we think about statistics and machine learning. He's written two books about machine learning for O'Reilly and works at Facebook.",meta:{duration:"PT1H16M39S"},presenter:{name:null},source:{id:"cO41uoi5cZs",provider:"youtube"},slug:"john-myles-white-on-fundamental-concepts-in-programming-languages",tag:["programming languages","paperswelove","Papers We Love","computer science","john myles white","julia","semantics","foundations of computing"],thumbnails:{default:{url:"https://i.ytimg.com/vi/cO41uoi5cZs/default.jpg",height:90,width:120}},title:"John Myles White on Fundamental Concepts in Programming Languages"}},{node:{description:"HackHands.com interviews Jafar Husain (Technical Lead at Netflix) about Reactive Programming concepts and it's usage on Netflix.com.\n\nAbout the Interviewee:\nJafar Husain is a highly skilled software developer with twelve-years of experience designing and developing enterprise software for prestigious corporations and organizations. Jafar Husain currently works for Netflix.",meta:{duration:"PT9M18S"},presenter:{name:null},source:{id:"dwP1TNXE6fc",provider:"youtube"},slug:"reactive-programming-overview-jafar-husain-from-netflix",tag:["Reactive Programming","Software","Netflix (Business Operation)","Computer Programming (Conference Subject)","Database (Software Genre)","nosql","reactive extensions","Reactive.io","Technology"],thumbnails:{default:{url:"https://i.ytimg.com/vi/dwP1TNXE6fc/default.jpg",height:90,width:120}},title:"Reactive Programming Overview (Jafar Husain from Netflix)"}},{node:{description:"Racket is the best programming language that embraces the premise that there is no best programming language. In other words, Racket is designed to support the creation of programming languages which can then be used to build programs. Using Racket, we have built program languages ranging from large, general-purpose languages matching particular programming paradigms to small, specialized programming languages designed for just a single file in some larger program.\n\nIn this talk, I will bring across how it feels to program in such a language, discuss some of the technical support Racket has to make such programming practical, and show how Racket’s standard libraries have embraced this perspective, enabling us to include lots of batteries.\n\nRobby is an associate professor of computer science at Northwestern University and received his PhD from Rice University in 2002. He is the author or two textbooks, one on introductory programming and one on operational semantics. Robby is one of the core developers of Racket and has helped shape the design the language since its inception in 1994.\n\nFor more on Lambda Jam, visit http://www.lambdajam.com",meta:{duration:"PT51M43S"},presenter:{name:null},source:{id:"hFlIl0Zo234",provider:"youtube"},slug:"lambda-jam-2015-robby-findler-racket-a-programming-language-programming-language",tag:["Robby Findler","Lambda Jam 2015","Racket","Programming Languages","Functional Programming"],thumbnails:{default:{url:"https://i.ytimg.com/vi/hFlIl0Zo234/default.jpg",height:90,width:120}},title:"Lambda Jam 2015 - Robby Findler - Racket: A Programming-Language Programming Language"}},{node:{description:"http://www.cppcon.org\n--\nThe standard library containers are often both misused and underused. Instead of creating new containers, applications are often structured with incidental data structures composed of objects referencing other object. This talk looks at some of the ways the standard containers can be better utilized and how creating (or using non-standard library) containers can greatly simplify code. The goal is no incidental data structures. \n--\nSean Parent is a principal scientist and software architect for Adobe’s mobile digital imaging group. Sean has been at Adobe since 1993 when he joined as a senior engineer working on Photoshop and later managed Adobe’s Software Technology Lab. In 2009 Sean spent a year at Google working on Chrome OS before returning to Adobe. From 1988 through 1993 Sean worked at Apple, where he was part of the system software team that developed the technologies allowing Apple’s successful transition to PowerPC.\n--\nVideos Filmed & Edited by Bash Films: http://www.BashFilms.com",meta:{duration:"PT1H4M"},presenter:{name:null},source:{id:"sWgDk-o-6ZE",provider:"youtube"},slug:"cppcon-2015-sean-parent-better-code-data-structures",tag:["CppCon 2015","Sean Parent","C++","Computer Programming (Conference Subject)","Data Structure (Literature Subject)","Bash Films","Conference Video","Video Services"],thumbnails:{default:{url:"https://i.ytimg.com/vi/sWgDk-o-6ZE/default.jpg",height:90,width:120}},title:'CppCon 2015: Sean Parent "Better Code: Data Structures"'}}]}},pathContext:{slug:"sam-tobin-hochstadt-on-composable-and-compilable-macros",tags:["Computer Programming (Conference Subject)","Programming Languages","Macros","Racket","Modules","Scheme","Papers We Love","ICFP"]}}}});
//# sourceMappingURL=path---talk-sam-tobin-hochstadt-on-composable-and-compilable-macros-325bed5a307bf4f8e411.js.map