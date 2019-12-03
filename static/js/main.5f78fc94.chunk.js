(this["webpackJsonpjs-flashcards"]=this["webpackJsonpjs-flashcards"]||[]).push([[0],{17:function(e,a,t){e.exports=t(33)},32:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var s=t(2),r=t.n(s),n=t(15),o=t.n(n),c=t(6),l=t(7),u=t(9),i=t(8),d=t(10),h=t(11),m=t.n(h);m.a.initializeApp({apiKey:"AIzaSyCXg8rPkO-zeDhBDF5yCSiDtN10n4mlkgg",authDomain:"js-flashcard-app.firebaseapp.com",databaseURL:"https://js-flashcard-app.firebaseio.com",projectId:"js-flashcard-app",storageBucket:"js-flashcard-app.appspot.com",messagingSenderId:"845847141861",appId:"1:845847141861:web:e13a76cc35d2a594bbe30c"});var p=m.a.database().ref(),f=m.a.database(),v=p,C=function(e){function a(){var e,t;Object(c.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(t=Object(u.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).handleQuestionChange=function(e){var a=e.target.value;t.props.sendUserQuestionToFirebaseProp(a)},t.handleAnswerChange=function(e){var a=e.target.value;t.props.sendUserAnswerToFirebaseProp(a)},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"inputFlex"},r.a.createElement("div",{className:"userInputs"},r.a.createElement("p",null,"Enter your custom card question:"),r.a.createElement("label",{htmlFor:"userQuestionInput",className:"visuallyHidden"},"Enter your custom flashcard question."),r.a.createElement("input",{type:"text",id:"userQuestionInput",className:"userInput",placeholder:"Enter a question",onChange:this.handleQuestionChange,value:this.props.currentUserQ,maxLength:"100"})),r.a.createElement("div",{className:"userInputs"},r.a.createElement("p",null,"Enter your custom card answer:"),r.a.createElement("label",{htmlFor:"userAnswerInput",className:"visuallyHidden"},"Enter your custom flashcard answer."),r.a.createElement("input",{type:"text",id:"userAnswerInput",className:"userInput",placeholder:"Enter the answer",onChange:this.handleAnswerChange,value:this.props.currentUserA,maxLength:"100"}))),r.a.createElement("div",{className:"submissionButton"},r.a.createElement("button",{onClick:this.props.pushUsersInputProp,className:"userSubmission"},"Submit Card")))}}]),a}(s.Component),b=(t(32),function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(u.a)(this,Object(i.a)(a).call(this))).getRandomCard=function(){var a=Math.floor(Math.random()*e.state.flashcard.length);e.setState({counter:a})},e.sendUserQuestionToFirebase=function(a){e.setState({userQuestion:a})},e.sendUserAnswerToFirebase=function(a){e.setState({userAnswer:a})},e.handleClick=function(a){a.preventDefault(),e.getRandomCard();var t=e.state.counter,s=e.state.flashcard[t].question,r=e.state.flashcard[t].answer;e.setState({currentQuestion:s,currentAnswer:r})},e.addUserCardComponent=function(a){a.preventDefault(),e.setState({showUserCard:!0})},e.pushUsersInput=function(a){a.preventDefault(),""==e.state.userQuesiton||""==e.state.userAnswer?e.setState({errorMessage:!0}):(f.ref("card".concat(e.state.flashcard.length+1)).update({question:e.state.userQuestion,answer:e.state.userAnswer}),e.setState({userQuestion:"",userAnswer:""}))},e.hideIntroCardComponent=function(a){a.preventDefault(),e.setState({showIntroCard:!1})},e.state={flashcard:[],counter:0,currentQuestion:"",currentAnswer:"",userQuestion:"",userAnswer:"",showUserCard:!1,showIntroCard:!0,errorMessage:!1},e}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.on("value",(function(a){var t=[],s=a.val();for(var r in s)t.push(s[r]);e.setState({flashcard:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"flexParent wrapper"},r.a.createElement("main",null,r.a.createElement("h1",{className:"title"},"flashCards.js"),r.a.createElement("div",{className:"gameWindow"},this.state.showIntroCard?r.a.createElement("div",{className:"introCard"},r.a.createElement("h1",null,"Welcome to flashCards.js!"),r.a.createElement("p",null,"flashCards.js is a JavaScript flashcard game designed to help you learn and remember JavaScript concepts."),r.a.createElement("p",null,"Click ",r.a.createElement("span",{className:"introSpan"},'"Next Card"')," to randomly generate a JS flashcard or click",r.a.createElement("span",{className:"introSpan"},' "Create your own" ')," to add a custom flaschard to the database!"),r.a.createElement("button",{className:"letsBegin",onClick:this.hideIntroCardComponent},"Let's begin!")):null,r.a.createElement("div",{className:"flashcard",tabIndex:"0"},r.a.createElement("div",{className:"flashcardInner"},r.a.createElement("div",{className:"frontCard"},this.state.currentQuestion),r.a.createElement("div",{className:"backCard"},this.state.currentAnswer))),r.a.createElement("div",{className:"userButtons"},r.a.createElement("button",{className:"usersButtons",onClick:this.handleClick},"Next card"),r.a.createElement("button",{className:"usersButtons",onClick:this.addUserCardComponent},"Create your own")),r.a.createElement("div",{className:"userCustomCard"},this.state.showUserCard?r.a.createElement(C,{flashcardLength:this.state.flashcard.length,sendUserQuestionToFirebaseProp:this.sendUserQuestionToFirebase,sendUserAnswerToFirebaseProp:this.sendUserAnswerToFirebase,pushUsersInputProp:this.pushUsersInput,ifUserHasError:this.ifUserHasError,currentUserQ:this.state.userQuestion,currentUserA:this.state.userAnswer}):null),this.state.errorMessage?r.a.createElement("span",{className:"errorMessage"},"Please ensure both question and answer are filled!"):null)))}}]),a}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.5f78fc94.chunk.js.map