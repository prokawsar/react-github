(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},27:function(e,t,a){e.exports=a(66)},57:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),l=a(3),i=a(4),s=a(6),u=a(5),p=a(7),h=a(12),m=a.n(h),d=a(2),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={url:"/archive/",zip:".zip"},a.copyToClipboard=function(e){var t=document.createElement("textarea");t.innerText=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),d.toast.success("URL copied to clipboard!")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(d.Card,null,r.a.createElement(d.CardBody,null,r.a.createElement(d.CardTitle,null,r.a.createElement("a",{title:"View on Github",href:this.props.dLink,target:"_blank",rel:"noopener noreferrer"}," ",this.props.name," ",r.a.createElement("span",null,r.a.createElement(d.Fa,{icon:"github",title:"View on Github"}))),r.a.createElement("span",{className:"pull-left"},r.a.createElement(d.Fa,{style:{color:"#0062cc"},title:"Copy Clone link",icon:"file",onClick:function(){return e.copyToClipboard(e.props.clone_url)}})),r.a.createElement(d.Button,{title:"Download as zip",size:"sm",color:"primary pull-right",href:this.props.dLink+this.state.url+this.props.branch+this.state.zip},r.a.createElement(d.Fa,{title:"Download as zip",icon:"download"}))),r.a.createElement(d.CardText,null,this.props.description),r.a.createElement(d.CardText,null,r.a.createElement("span",{className:"pull-left"},"Language: ",this.props.lang," ")),r.a.createElement(d.CardText,null,r.a.createElement("span",{className:"pull-right"},"Forks: ",this.props.forks," ")))))}}]),t}(n.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data?this.props.data:null;return e&&r.a.createElement("div",null,r.a.createElement("img",{className:"gitAvatar",src:e.avatar_url}),r.a.createElement("div",null,r.a.createElement("strong",null,e.name)))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({userName:e.target.value})},a.onKeyDown=function(e){13===e.keyCode&&!1===e.shiftKey&&(e.preventDefault(),a.handleSubmit())},a.handleSubmit=function(e){if(console.log("Submitted"),""!==a.state.userName){a.setState({searchButton:"Searching..."});var t=[];t.push(m.a.get("https://api.github.com/users/"+a.state.userName+"/repos")),t.push(m.a.get("https://api.github.com/users/"+a.state.userName)),Promise.all(t).then(function(e){a.setState({reposData:e[0].data,userData:e[1].data,searchButton:"Search"}),console.log(a.state)}).catch(function(e){e.response&&404===e.response.status&&(d.toast.warn("Username not found"),a.setState({reposData:[],userData:[],searchButton:"Search"}))})}else d.toast.warn("Please enter a username")},a.state={userName:"",reposData:[],userData:[],searchButton:"Search"},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.Input,{label:"Type any Github Username",onKeyDown:this.onKeyDown,onChange:this.handleChange,group:!0,type:"text"}),r.a.createElement(d.Button,{color:"danger",onClick:this.handleSubmit},this.state.searchButton," ",r.a.createElement(d.Fa,{icon:"search"})),r.a.createElement(f,{data:this.state.userData}),r.a.createElement(E,{data:this.state.reposData}),r.a.createElement(d.ToastContainer,{hideProgressBar:!0,newestOnTop:!0,autoClose:3e3}))}}]),t}(n.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data.map(function(e){return r.a.createElement(b,{id:e.id,key:e.id,name:e.name,description:e.description,lang:e.language,forks:e.forks_count,clone_url:e.clone_url,branch:e.default_branch,dLink:e.html_url})});return r.a.createElement("div",null,e)}}]),t}(n.Component),v=a(22),y=a.n(v),j=a(67),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:y.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"App-title"},r.a.createElement(j.a,{to:"/react-github/"},r.a.createElement("span",{style:{color:"white"},className:"pull-left"},"Home")),"Welcome to Github App",r.a.createElement(j.a,{to:"/react-github/jobs/"},r.a.createElement("span",{style:{color:"white"},className:"pull-right"},"Jobs"))))}}]),t}(n.Component),w=a(23),C=a.n(w),k=a(24),N=a.n(k),S=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.Card,null,r.a.createElement(d.CardBody,null,r.a.createElement(d.CardTitle,{className:"pull-left"},r.a.createElement("a",{href:this.props.url,title:"View on Github",target:"_blank",rel:"noopener noreferrer"}," ",this.props.title," ",r.a.createElement("span",null,r.a.createElement(d.Fa,{icon:"github",title:"View on Github"}))),r.a.createElement(d.CardText,null,r.a.createElement("span",{style:{color:"purple"},className:"pull-left"},this.props.company))),r.a.createElement(d.CardText,null,r.a.createElement("span",{className:"pull-right font-weight-bold"},r.a.createElement(d.Fa,{icon:"location"}),this.props.type)),r.a.createElement(d.CardText,null,r.a.createElement("span",{className:"pull-right"},r.a.createElement(d.Fa,{icon:"location"}),this.props.location)),r.a.createElement(d.CardText,null,r.a.createElement("span",{className:"pull-right"},"Posted: ",r.a.createElement(N.a,{fromNow:!0},this.props.created," "))))))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({search:e.target.value})},a.onKeyDown=function(e){13===e.keyCode&&!1===e.shiftKey&&(e.preventDefault(),a.handleSubmit())},a.handleSubmit=function(e){if(console.log("Submitted"),""!==a.state.search||""!==a.state.location){a.setState({searchButton:"Searching..."});m.a.get("https://jobs.github.com/positions.json?description="+a.state.search,{adapter:C.a,headers:{"Access-Control-Allow-Origin":"https://jobs.github.com"}}).then(function(e){a.setState({jobsData:e.data,searchButton:"Search Job"})}).catch(function(e){e.response&&404===e.response.status&&(d.toast.warn("Jobs not found"),a.setState({jobsData:[],searchButton:"Search"}))})}else d.toast.warn("Please enter any query")},a.state={search:"",location:"",jobsData:[],searchButton:"Search Job"},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.Input,{label:"Type any language name",onKeyDown:this.onKeyDown,onChange:this.handleChange,group:!0,type:"text"}),r.a.createElement(d.Button,{color:"danger",onClick:this.handleSubmit},this.state.searchButton," ",r.a.createElement(d.Fa,{icon:"search"})),r.a.createElement(T,{data:this.state.jobsData}),r.a.createElement(d.ToastContainer,{hideProgressBar:!0,newestOnTop:!0,autoClose:3e3}))}}]),t}(n.Component),T=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data.map(function(e){return r.a.createElement(S,{id:e.id,key:e.id,title:e.title,company:e.company,location:e.location,created:e.created_at,type:e.type,url:e.url,description:e.description})});return r.a.createElement("div",null,e)}}]),t}(n.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D,null))}}]),t}(n.Component),x=(a(57),a(69)),A=a(68),_=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(x.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"}),r.a.createElement("div",{className:"col-md-8"},r.a.createElement(A.a,{exact:!0,path:"/react-github/",component:g}),r.a.createElement(A.a,{exact:!0,path:"/react-github/jobs/",component:B}))))))}}]),t}(n.Component),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(60),a(62),a(64);c.a.render(r.a.createElement(_,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-github",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-github","/service-worker.js");F?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):K(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):K(e)})}}()}},[[27,2,1]]]);
//# sourceMappingURL=main.16a14a3a.chunk.js.map