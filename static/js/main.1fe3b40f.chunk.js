(this.webpackJsonpmyofficial=this.webpackJsonpmyofficial||[]).push([[0],[,,,,function(e,a,t){},,,,,,,,function(e,a,t){e.exports=t.p+"static/media/author-image.4ce99283.jpg"},function(e,a,t){e.exports=t.p+"static/media/left-image.75a11cf9.jpg"},function(e,a,t){e.exports=t.p+"static/media/right-image.e6d82ef9.jpg"},,,,function(e,a,t){e.exports=t(28)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),i=t(11),c=t.n(i),s=(t(23),t(3)),r=t.n(s),m=(t(24),t(25),t(4),t(26),t(27),t(12)),o=t.n(m),u=t(13),d=t.n(u),p=t(14),E=t.n(p),h=function(e){var a=e.hrefLink,t=e.btnName;return l.a.createElement("div",{className:"white-button"},l.a.createElement("a",{href:a},t))},g=t(5),f=t(6),v=t(8),N=t(9),b=function(e){Object(N.a)(t,e);var a=Object(v.a)(t);function t(e){var n;return Object(g.a)(this,t),(n=a.call(this,e)).state={name:"",email:"",subject:"",message:""},n}return Object(f.a)(t,[{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),fetch("http://localhost:3000/send",{method:"POST",body:JSON.stringify(this.state),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){"success"===e.status?(alert("Message Sent"),a.resetForm()):"fail"===e.status&&alert("Message failed to send")}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",subject:"",message:""})}},{key:"render",value:function(){return l.a.createElement("div",{className:"contact-row"},l.a.createElement("div",{className:"right-content"},l.a.createElement("div",{className:"container"},l.a.createElement("form",{id:"contact",onSubmit:this.handleSubmit.bind(this),method:"POST"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("fieldset",null,l.a.createElement("input",{name:"name",type:"text",className:"form-control",id:"name",placeholder:"Name",required:"",value:this.state.name,onChange:this.onNameChange.bind(this)}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("fieldset",null,l.a.createElement("input",{name:"email",type:"text",className:"form-control",id:"email",placeholder:"Email",required:"",value:this.state.email,onChange:this.onEmailChange.bind(this)}))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("fieldset",null,l.a.createElement("input",{name:"subject",type:"text",className:"form-control",id:"subject",placeholder:"Subject",required:"",value:this.state.subject,onChange:this.onSubjectChange.bind(this)}))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("fieldset",null,l.a.createElement("textarea",{name:"message",rows:"6",className:"form-control",id:"message",placeholder:"Message",required:"",value:this.state.message,onChange:this.onMessageChange.bind(this)}))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("fieldset",null,l.a.createElement("button",{type:"submit",id:"form-submit",className:"button"},"Send Message"))))))))}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onSubjectChange",value:function(e){this.setState({subject:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),t}(l.a.Component),y=function(e){Object(N.a)(t,e);var a=Object(v.a)(t);function t(e){var n;return Object(g.a)(this,t),(n=a.call(this,e)).handleOptionChange=function(e){n.setState({selectedOption:e.target.value},(function(){return console.log(n.state.selectedOption)}))},n.state={selectedOption:"All"},n}return Object(f.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{className:"isotope-toolbar"},l.a.createElement("label",null,l.a.createElement("input",{type:"radio","data-type":"*",value:"All",checked:"All"===this.state.selectedOption,onChange:this.handleOptionChange,name:"isotope-filter"}),l.a.createElement("span",null,"all")),l.a.createElement("label",null,l.a.createElement("input",{type:"radio","data-type":"people",value:"people",checked:"people"===this.state.selectedOption,onChange:this.handleOptionChange,name:"isotope-filter"}),l.a.createElement("span",null,"people")),l.a.createElement("label",null,l.a.createElement("input",{type:"radio","data-type":"nature",value:"nature",checked:"nature"===this.state.selectedOption,onChange:this.handleOptionChange,name:"isotope-filter"}),l.a.createElement("span",null,"nature")),l.a.createElement("label",null,l.a.createElement("input",{type:"radio","data-type":"animals",value:"animals",checked:"animals"===this.state.selectedOption,onChange:this.handleOptionChange,name:"isotope-filter"}),l.a.createElement("span",null,"animals")))}}]),t}(n.Component),k=[{id:1,dataType:"nature",image:"https://source.unsplash.com/random/1",title:"First Title",description:"free to use our template"},{id:2,dataType:"people",image:"https://source.unsplash.com/random/2",title:"Second Title",description:"free to use our template"},{id:3,dataType:"animal",image:"https://source.unsplash.com/random/3",title:"Third Title",description:"free to use our template"},{id:4,dataType:"people",image:"https://source.unsplash.com/random/4",title:"Fourth Title",description:"free to use our template"},{id:5,dataType:"nature",image:"https://source.unsplash.com/random/5",title:"Fifth Title",description:"free to use our template"},{id:6,dataType:"animal",image:"https://source.unsplash.com/random/6",title:"Sixth Title",description:"free to use our template"},{id:7,dataType:"people",image:"https://source.unsplash.com/random/7",title:"Seventh Title",description:"free to use our template"},{id:8,dataType:"nature",image:"https://source.unsplash.com/random/8",title:"Eighth Title",description:"free to use our template"}],w=t(2),C=function(e){var a=e.id,t=e.dataType,n=e.image,i=e.title,c=e.description;return l.a.createElement("div",{className:"isotope-item","data-type":t},l.a.createElement("figure",{className:"snip1321"},l.a.createElement("div",{className:"left-image"},l.a.createElement("img",{src:n,alt:a})),l.a.createElement("figcaption",null,l.a.createElement("a",{href:"/#","data-lightbox":"image-1","data-title":"Caption"},l.a.createElement("i",null,l.a.createElement(w.d,null))),l.a.createElement("h4",null,i),l.a.createElement("span",null,c))))},j=function(e){var a=e.workData;return a.map((function(e,t){return l.a.createElement(C,{key:t,id:a[t].id,dataType:a[t].dataType,image:a[t].image,title:a[t].title,description:a[t].description})}))},S=t(7),x=t(15),O=t(16),T=t(17);var q=function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"page-wraper"},l.a.createElement("div",{className:"responsive-nav"},l.a.createElement("i",{className:"fa fa-bars",id:"menu-toggle"}),l.a.createElement("div",{id:"menu",className:"menu"},l.a.createElement("i",{className:"fa fa-times",id:"menu-close"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"image"},l.a.createElement(r.a,{href:"#page-wraper"},l.a.createElement("img",{src:o.a,alt:""}))),l.a.createElement("div",{className:"author-content"},l.a.createElement("h2",{className:"myname"},"J\xf3zsef Sid\xf3"),l.a.createElement("span",null,"Junior Web Developer")),l.a.createElement("nav",{className:"main-nav",role:"navigation"},l.a.createElement("ul",{className:"main-menu"},l.a.createElement("li",null,l.a.createElement(r.a,{href:"#aboutme"},"About Me")),l.a.createElement("li",null,l.a.createElement(r.a,{href:"#goodat"},"What I'm good at")),l.a.createElement("li",null,l.a.createElement(r.a,{href:"#mywork"},"My Work")),l.a.createElement("li",null,l.a.createElement(r.a,{href:"#contact"},"Contact Me")))),l.a.createElement("div",{className:"social-network"},l.a.createElement("ul",{className:"soial-icons"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/ifj.sido.jozsef"},l.a.createElement(w.b,null))),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},l.a.createElement(w.f,null))),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},l.a.createElement(S.a,null))),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},l.a.createElement(w.e,null))),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},l.a.createElement(x.a,null))),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},l.a.createElement(w.c,null))))),l.a.createElement("div",{className:"copyright-text"},l.a.createElement("p",null,"Designed in 2020"))))),l.a.createElement("section",{className:"section about-me","data-section":"section1"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section-heading"},l.a.createElement("h2",{id:"aboutme"},"About Me"),l.a.createElement("div",{className:"line-dec"}),l.a.createElement("span",null,l.a.createElement("p",null,"I've got high numeric, analytical and problem-solving skills. Also, I have great experience in pursuing excel and photoshop-related projects which required advanced knowledge. Good written English grammar. I learn fast and am eager to acquire new skills. I like working both individually and as a team player and I can imagine myself as an experienced website developer working at a friendly company along with other team members in helping each other's work."),l.a.createElement("p",null,"I've started learning and developing in React in the last couple of months and got familiarised with Bootstrap, Mailchimp and Saas in order to build much more nicer, more responsive and more advanced websites."))),l.a.createElement("div",{className:"left-image-post"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"left-image"},l.a.createElement("img",{src:d.a,alt:""}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"right-text"},l.a.createElement("h4",null,"Hobbies and Interests"),l.a.createElement("p",null,"Irure et minim amet duis eu nulla ea culpa fugiat eu dolore. Ea dolor exercitation ex incididunt non deserunt pariatur consequat nisi consequat irure eu reprehenderit nulla. Sit cupidatat elit occaecat adipisicing laboris nisi elit qui. Incididunt sunt esse aliquip consequat ex officia pariatur laborum est magna excepteur in. Sit quis cillum ad sit do tempor sunt culpa laborum sint tempor irure."),l.a.createElement(h,{hrefLink:"/#",btnName:"Read More"}))))),l.a.createElement("div",{className:"right-image-post"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"left-text"},l.a.createElement("h4",null,"Sport and Social Activities"),l.a.createElement("p",null,"Laboris ex cillum nostrud dolor ipsum. Culpa cillum quis officia sit ea esse irure ea nostrud officia aliquip. Aute magna veniam velit id officia ut aliqua nisi deserunt exercitation. Officia elit voluptate officia occaecat ea occaecat magna. Nostrud minim est consequat ut fugiat id. Laboris ipsum consectetur dolore adipisicing laborum sit est do veniam laborum dolor anim ut."),l.a.createElement(h,{hrefLink:"/#",btnName:"Read More"}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"right-image"},l.a.createElement("img",{src:E.a,alt:""}))))))),l.a.createElement("section",{className:"section my-services","data-section":"section2"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section-heading"},l.a.createElement("h2",{id:"goodat"},"What I\u2019m good at?"),l.a.createElement("div",{className:"line-dec"}),l.a.createElement("span",null,"Curabitur leo felis, rutrum vitae varius eu, malesuada a tortor. Vestibulum congue leo et tellus aliquam, eu viverra nulla semper. Nullam eu faucibus diam. Donec eget massa ante.")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"service-item"},l.a.createElement("div",{className:"big-icons"},l.a.createElement(S.b,null)),l.a.createElement("h4",null,"Microsoft Office"),l.a.createElement("p",null,"Phasellus non convallis dolor. Integer tempor hendrerit arcu at bibendum. Sed ac ante non metus vehicula congue quis eget eros."))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"service-item"},l.a.createElement("div",{className:"big-icons"},l.a.createElement(w.a,null)),l.a.createElement("h4",null,"Adobe Family"),l.a.createElement("p",null,"Proin lacus massa, eleifend sed fermentum in, dignissim vel metus. Nunc accumsan leo nec felis porttitor, ultricies faucibus purus mollis."))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"service-item"},l.a.createElement("div",{className:"big-icons"},l.a.createElement(O.a,null)),l.a.createElement("h4",null,"English-Hungarian Transaltion"),l.a.createElement("p",null,"Integer suscipit condimentum aliquet. Nam quis risus metus. Nullam faucibus quam eget arcu pretium tincidunt. Nam libero dui."))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"service-item"},l.a.createElement("div",{className:"big-icons"},l.a.createElement(T.a,null)),l.a.createElement("h4",null,"Web Development"),l.a.createElement("p",null,"Vivamus et dui a massa venenatis fringilla. Proin lacus massa, eleifend sed fermentum in, dignissim vel metus. Nunc accumsan leo nec felis porttitor.")))))),l.a.createElement("section",{className:"section my-work","data-section":"section3"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section-heading"},l.a.createElement("h2",{id:"mywork"},"My Work"),l.a.createElement("div",{className:"line-dec"}),l.a.createElement("span",null,"Aenean sollicitudin ex mauris, lobortis lobortis diam euismod sit amet. Duis ac elit vulputate, lobortis arcu quis, vehicula mauris.")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"isotope-wrapper"},l.a.createElement(y,null),l.a.createElement("div",{className:"isotope-box"},l.a.createElement(j,{workData:k})))))),l.a.createElement("section",{className:"section contact-me","data-section":"section4"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section-heading"},l.a.createElement("h2",{id:"contact"},"Contact Me"),l.a.createElement("div",{className:"line-dec"}),l.a.createElement("span",null,"Fusce eget nibh nec justo interdum condimentum. Morbi justo ex, efficitur at ante ac, tincidunt maximus ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.")),l.a.createElement(b,null)))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(q,null)),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.1fe3b40f.chunk.js.map