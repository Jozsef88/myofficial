(this.webpackJsonpmyofficial=this.webpackJsonpmyofficial||[]).push([[0],[,,,,function(e,t,a){},,,,,function(e,t,a){e.exports=a.p+"static/media/portfolio-08.992a43b7.jpg"},,,,function(e,t,a){e.exports=a.p+"static/media/author-image.3ef8bcf9.jpg"},function(e,t,a){e.exports=a.p+"static/media/left-image.53be3cef.jpg"},function(e,t,a){e.exports=a.p+"static/media/right-image.e6d82ef9.jpg"},function(e,t,a){e.exports=a.p+"static/media/portfolio-01.fdcd6853.jpg"},function(e,t,a){e.exports=a.p+"static/media/portfolio-02.d623614d.jpg"},function(e,t,a){e.exports=a.p+"static/media/portfolio-03.4ffda183.jpg"},function(e,t,a){e.exports=a.p+"static/media/portfolio-04.b41243b0.jpg"},function(e,t,a){e.exports=a.p+"static/media/portfolio-05.4ff05a34.jpg"},function(e,t,a){e.exports=a.p+"static/media/portfolio-06.b9a8e189.jpg"},function(e,t,a){e.exports=a.p+"static/media/portfolio-07.1995b2d6.jpg"},,function(e,t,a){e.exports=a(32)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(12),s=a.n(i),r=(a(29),a(10)),o=a(3),c=a.n(o),m=(a(30),a(31),a(4),a(13)),d=a.n(m),u=a(14),p=a.n(u),h=a(15),g=a.n(h),f=function(e,t,a){return l.a.createElement("div",{className:"white-button",onClick:function(){return t(!e)}},a)},E=a(5),v=a(6),b=a(7),y=a(8),N=function(e){Object(y.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",subject:"",message:""},n}return Object(v.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("http://localhost:3000/send",{method:"POST",body:JSON.stringify(this.state),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){"success"===e.status?(alert("Message Sent"),t.resetForm()):"fail"===e.status&&alert("Message failed to send")}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",subject:"",message:""})}},{key:"render",value:function(){return l.a.createElement("div",{className:"contact-row"},l.a.createElement("div",{className:"right-content"},l.a.createElement("div",{className:"container"},l.a.createElement("form",{id:"contact",onSubmit:this.handleSubmit.bind(this),method:"POST"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("fieldset",null,l.a.createElement("input",{name:"name",type:"text",className:"form-control",id:"name",placeholder:"Name",required:"",value:this.state.name,onChange:this.onNameChange.bind(this)}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("fieldset",null,l.a.createElement("input",{name:"email",type:"text",className:"form-control",id:"email",placeholder:"Email",required:"",value:this.state.email,onChange:this.onEmailChange.bind(this)}))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("fieldset",null,l.a.createElement("input",{name:"subject",type:"text",className:"form-control",id:"subject",placeholder:"Subject",required:"",value:this.state.subject,onChange:this.onSubjectChange.bind(this)}))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("fieldset",null,l.a.createElement("textarea",{name:"message",rows:"6",className:"form-control",id:"message",placeholder:"Message",required:"",value:this.state.message,onChange:this.onMessageChange.bind(this)}))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("fieldset",null,l.a.createElement("button",{type:"submit",id:"form-submit",className:"button"},"Send Message"))))))))}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onSubjectChange",value:function(e){this.setState({subject:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),a}(l.a.Component),w=a(2),S=function(e){var t=e.id,a=e.dataType,n=e.image,i=e.title,s=e.description,r=e.url,o=e.selected;return l.a.createElement("div",{className:"isotope-item","data-type":a,style:o===a||"All"===o?{}:{display:"none"}},l.a.createElement("figure",{className:"snip1321"},l.a.createElement("div",{className:"left-image"},l.a.createElement("img",{src:n,alt:t})),l.a.createElement("figcaption",null,l.a.createElement("a",{href:r,"data-lightbox":"image-1","data-title":"Caption",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",null,l.a.createElement(w.e,null))),l.a.createElement("h4",null,i),l.a.createElement("span",null,s))))},k=function(e){var t=e.workData,a=e.selected;return t.map((function(e,n){return l.a.createElement(S,{key:n,id:t[n].id,dataType:t[n].dataType,image:t[n].image,title:t[n].title,description:t[n].description,url:t[n].url,selected:a})}))},j=a(16),C=a.n(j),I=a(17),x=a.n(I),O=a(18),M=a.n(O),T=a(19),L=a.n(T),A=a(20),R=a.n(A),q=a(21),H=a.n(q),z=a(22),D=a.n(z),P=a(9),B=a.n(P),J=[{id:1,dataType:"React",image:C.a,title:"Glowing Squares",description:"Randomized glowing numbers, clickable.",url:"https://jozsef88.github.io/Glowing-Squares/"},{id:2,dataType:"CSS",image:x.a,title:"Wheel of Fortune",description:"This had been made upon request for a business.",url:"https://jozsef88.github.io/WheelOfFortune/"},{id:3,dataType:"CSS",image:M.a,title:"3D Image",description:"Hover on the sides and the corners of the picture!",url:"https://jozsef88.github.io/3dImage/"},{id:4,dataType:"CSS",image:L.a,title:"Earth & Moon Spinning Animation",description:"Only CSS had been used. An early-stage work.",url:"https://jozsef88.github.io/Moon2/"},{id:5,dataType:"HTML",image:R.a,title:"Parcheesi",description:"CSS keeps it altogether, however it's more HTML code.",url:"https://jozsef88.github.io/parcheesi/"},{id:6,dataType:"CSS",image:H.a,title:"Burger Bar Prototype",description:"An animated menu icon. Hover and click. It opens, closes and spins around.",url:"https://jozsef88.github.io/animatedSpinningBurgerBar/"},{id:7,dataType:"React",image:D.a,title:"LJ Lettings Ltd.",description:"A complete website with chat support",url:"https://ljlettings.co.uk/"},{id:8,dataType:"React",image:B.a,title:"Database Manager System",description:"It needed some backend with NodeJS",url:B.a}],W=function(e){Object(y.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).handleOptionChange=function(e){n.setState({selectedOption:e.target.value},(function(){return console.log(n.state.selectedOption)}))},n.state={selectedOption:"All"},n}return Object(v.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{className:"isotope-toolbar"},l.a.createElement("label",null,l.a.createElement("input",{type:"radio","data-type":"All",value:"All",checked:"All"===this.state.selectedOption,onChange:this.handleOptionChange,name:"isotope-filter"}),l.a.createElement("span",null,"all")),l.a.createElement("label",null,l.a.createElement("input",{type:"radio","data-type":"React",value:"React",checked:"React"===this.state.selectedOption,onChange:this.handleOptionChange,name:"isotope-filter"}),l.a.createElement("span",null,"React")),l.a.createElement("label",null,l.a.createElement("input",{type:"radio","data-type":"HTML",value:"HTML",checked:"HTML"===this.state.selectedOption,onChange:this.handleOptionChange,name:"isotope-filter"}),l.a.createElement("span",null,"HTML")),l.a.createElement("label",null,l.a.createElement("input",{type:"radio","data-type":"CSS",value:"CSS",checked:"CSS"===this.state.selectedOption,onChange:this.handleOptionChange,name:"isotope-filter"}),l.a.createElement("span",null,"CSS")),l.a.createElement("div",{className:"isotope-box"},l.a.createElement(k,{workData:J,selected:this.state.selectedOption})))}}]),a}(n.Component),F=a(23);var G=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),a=t[0],i=t[1],s=Object(n.useState)(!0),o=Object(r.a)(s,2),m=o[0],u=o[1];return l.a.createElement("div",null,l.a.createElement("div",{id:"page-wraper"},l.a.createElement("div",{className:"responsive-nav"},l.a.createElement("i",{className:"fa fa-bars",id:"menu-toggle"}),l.a.createElement("div",{id:"menu",className:"menu"},l.a.createElement("i",{className:"fa fa-times",id:"menu-close"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"image"},l.a.createElement(c.a,{href:"#page-wraper"},l.a.createElement("img",{src:d.a,alt:""}))),l.a.createElement("div",{className:"author-content"},l.a.createElement("h2",{className:"myname"},"J\xf3zsef Sid\xf3"),l.a.createElement("span",null,"Junior Web Developer")),l.a.createElement("nav",{className:"main-nav",role:"navigation"},l.a.createElement("ul",{className:"main-menu"},l.a.createElement("li",null,l.a.createElement(c.a,{href:"#aboutme"},"About Me")),l.a.createElement("li",null,l.a.createElement(c.a,{href:"#goodat"},"What I'm good at")),l.a.createElement("li",null,l.a.createElement(c.a,{href:"#mywork"},"My Work")),l.a.createElement("li",null,l.a.createElement(c.a,{href:"#contact"},"Contact Me")))),l.a.createElement("div",{className:"social-network"},l.a.createElement("ul",{className:"soial-icons"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/j%C3%B3zsef-sid%C3%B3-b047bb17a/"},l.a.createElement(w.c,null))),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:jozsef.sido@gmail.com"},l.a.createElement(w.d,null))))),l.a.createElement("div",{className:"copyright-text"},l.a.createElement("p",null,"Designed in 2020 - 2023"))))),l.a.createElement("section",{className:"section about-me","data-section":"section1"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section-heading"},l.a.createElement("h2",{id:"aboutme"},"About Me"),l.a.createElement("div",{className:"line-dec"}),l.a.createElement("span",null,l.a.createElement("p",null,"I've got high numeric, analytical and problem-solving skills. Also, I have great experience in pursuing excel and photoshop-related projects which required advanced knowledge. Good written English grammar. I learn fast and am eager to acquire new skills. I like working both individually and as a team player and I can imagine myself as an experienced website developer working at a friendly company along with other team members in helping each other's work."),l.a.createElement("p",null,"I've started learning and developing in React in the last couple of months and got familiarised with Bootstrap, Mailchimp and Saas in order to build much more nicer, more responsive and more advanced websites."))),l.a.createElement("div",{className:"left-image-post"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"left-image"},l.a.createElement("img",{src:p.a,alt:""}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"right-text"},l.a.createElement("h4",null,"Hobbies and Interests"),l.a.createElement("p",null,"I'm a self-taught React Developer with a few years experience. In my sparetime I learn programming and try to acquire different programming skills as this is not just work for me, it is my hobby, too."),l.a.createElement("p",{style:a?{display:"none"}:{}},"I love creating something new. I find it exciting to learn the latest techniques to be better and better. I imagine myself as a lead developer in a few years time to deliver the best to the company I work for."),f(a,i,a?"more":"less"))))),l.a.createElement("div",{className:"right-image-post"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"left-text"},l.a.createElement("h4",null,"Sport and Social Activities"),l.a.createElement("p",null,"I love swimming, it can be extremely relaxing. Swimming offers many different strokes, so it doesn\u2019t feel like you\u2019re stuck doing the same thing over and over again."),l.a.createElement("p",{style:m?{display:"none"}:{}},"It\u2019s a life skill which everyone should have. Not only is it good for your health, but you never know when you\u2019ll need your ability to swim."),f(m,u,m?"more":"less"))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"right-image"},l.a.createElement("img",{src:g.a,alt:""}))))))),l.a.createElement("section",{className:"section my-services","data-section":"section2"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section-heading"},l.a.createElement("h2",{id:"goodat"},"What I\u2019m good at?"),l.a.createElement("div",{className:"line-dec"}),l.a.createElement("p",null,"I am always learning and challenging myself! Whether I am learning a new programming language, trying out a new framework, or trying to solve a problem with a new algorithm, I am always stretching my mind. I've learned so much by overcoming the challenges that come with coding. Not only does coding make me a better problem solver but it also teaches me patience, perseverance, and discipline. Coding pushes me outside of my comfort zone in a good way!"),l.a.createElement("p",null,"However, my mindset completely shifted when I started approaching the problems and bugs I found while coding from a curious perspective. Instead of talking down on myself and saying things like why aren't I smart enough, why can't I figure this out, maybe this isn't for me, I decided to ask myself better questions. I found myself going to StackOverFlow, Google, forums and Udemy \u2014 and every single time, I would be able to solve that nasty bug or memory leak or whatever I thought was impossible! It's kind of like being a detective \u2014 going to multiple sources, collecting information, and putting the pieces together. The feeling when you finally figure it out is so rewarding!")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"service-item"},l.a.createElement("div",{className:"big-icons"},l.a.createElement(F.a,null)),l.a.createElement("h4",null,"Web Development"),l.a.createElement("p",null,"HTML, CSS and React JS that I've been learning for the last several years."),l.a.createElement("p",null,"HTML5 - CSS3, Sass - Javascript - React.js - Node.js - Express.js - Socket.io - SQL - Knex - SEO - Bootstrap - Github"))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"service-item"},l.a.createElement("div",{className:"big-icons"},l.a.createElement(w.a,null)),l.a.createElement("h4",null,"Adobe Family"),l.a.createElement("p",null,"I'm good at Photoshop, Design marketing material (brochures, logo, company profile and business cards in Photoshop.) Illustrator is essential to make vector-graphic designs. I am fully familiar of all of these."))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"service-item"},l.a.createElement("div",{className:"big-icons"},l.a.createElement(w.b,null)),l.a.createElement("h4",null,"PostrgeSQL - NoSQL"),l.a.createElement("p",null,"I've been using database with the help of PostgreSQL in my latest projects, and just getting familiarised with Firebase, too."))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"service-item"},l.a.createElement("div",{className:"big-icons"},l.a.createElement(w.f,null)),l.a.createElement("h4",null,"Video Editing"),l.a.createElement("p",null,"Premiere Pro is in my fingertips. Cutting, filtering out parts of the screen, making subtitles, color-correcting are so easy for me.")))))),l.a.createElement("section",{className:"section my-work","data-section":"section3"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section-heading"},l.a.createElement("h2",{id:"mywork"},"My Work"),l.a.createElement("div",{className:"line-dec"}),l.a.createElement("span",null,"Some works below had been made in the very early stages of learning React and some of them are just for the purpose of exercise.")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"isotope-wrapper"},l.a.createElement(W,null))))),l.a.createElement("section",{className:"section contact-me","data-section":"section4"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section-heading"},l.a.createElement("h2",{id:"contact"},"Contact Me"),l.a.createElement("div",{className:"line-dec"}),l.a.createElement("span",null,"Fusce eget nibh nec justo interdum condimentum. Morbi justo ex, efficitur at ante ac, tincidunt maximus ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.")),l.a.createElement(N,null)))))};s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(G,null)),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.f96abffc.chunk.js.map