(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(10),l=a.n(c),i=(a(102),a(76)),r=a(38),o=a(39),d=a(41),h=a(40),j=(a(103),a(175)),u=a(179),b=a(180),m=a(181),p=a(141),O=a(186),x=a(183),g=a(187),f=a(182),v=a(142),y=a(185),w=(a(104),a(84)),C=a.n(w),N=a(143),S=a(139),k=a(140),I=a(184),D=(a(105),a(5)),L=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){!function(e,t){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://widget.kommunicate.io/v2/kommunicate.app",document.getElementsByTagName("head")[0].appendChild(a),window.kommunicate=t,t._globals={appId:"1ca0fc96e6521e302ac5d7d7167e7a62a",popupWidget:!0,automaticChatOpenOnNavigation:!0}}(document,window.kommunicate||{})}},{key:"render",value:function(){return Object(D.jsx)("div",{className:"form-container"})}}]),a}(n.Component),B=a(48),P=a(83),W=a.n(P),E=(a(107),a(77)),F=a.n(E),M=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={showChatBox:"hide"},e.handleChange=function(t){t.preventDefault();var a=t.target,n=a.name,s=a.value;e.setState(Object(i.a)({},n,s)),console.log(s),console.log(e.state)},e.handleOnSubmit=function(t){console.log(e.state),console.log(t);F.a.post("https://protected-citadel-70366.herokuapp.com/",e.state).then((function(t){e.setState({res:t}),console.log(t),"undefined"!=typeof t.data&&"failed"!=t.data?(e.setState({showChatBox:"show"}),B.b.success("Hey! "+t.data.Name+" your interview has been sheduled")):B.b.error("Error! Please submit all the details.")})).catch((function(t){e.setState({errorMessage:t.message}),console.error("There was an error!",t),B.b.error("Error! Please submit all the details.")})),console.log("")},e.resetForm=function(t){e.setState({Name:""}),e.loader()},e.loader=function(){e.setState({isLoading:!0}),setInterval((function(){window.location.reload(),e.setState({isLoading:!1})}),1e3)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return Object(D.jsxs)("div",{className:"form-container form_blade",children:[Object(D.jsxs)(j.a,{className:"paper",children:[Object(D.jsxs)(u.a,{container:!0,spacing:2,children:[Object(D.jsx)(u.a,{item:!0,xs:12,md:10,children:Object(D.jsx)("h3",{children:"Please provide us the following details for interview based on your skills!"})}),Object(D.jsx)(u.a,{item:!0,xs:12,md:2,className:"ResetButton",children:Object(D.jsx)(b.a,{variant:"contained",color:"primary",startIcon:Object(D.jsx)(W.a,{}),onClick:function(){return e.resetForm(e.state)},children:"Reset  "})})]}),Object(D.jsx)(m.a,{InputLabelProps:{shrink:!0},name:"Name",variant:"outlined",label:"Name",fullWidth:!0,margin:"dense",value:this.state.Name,onChange:this.handleChange}),Object(D.jsxs)(S.a,{className:"Language",fullWidth:!0,children:[Object(D.jsx)(k.a,{id:"demo-simple-select-helper-label",children:"Language"}),Object(D.jsxs)(N.a,{labelId:"demo-simple-select-helper-label",id:"Language",name:"lang",value:this.state.lang,onChange:this.handleChange,children:[Object(D.jsx)(I.a,{value:"python",children:"Python"}),Object(D.jsx)(I.a,{value:"java",children:"Java"}),Object(D.jsx)(I.a,{value:"cpp",children:"Cpp"})]}),Object(D.jsx)(v.a,{children:"Which language you are the most comfortable with?"})]}),Object(D.jsxs)(S.a,{className:"Database",fullWidth:!0,children:[Object(D.jsx)(k.a,{id:"demo-simple-select-helper-label",children:"Database"}),Object(D.jsxs)(N.a,{labelId:"demo-simple-select-helper-label",id:"Database",name:"db",value:this.state.db,onChange:this.handleChange,children:[Object(D.jsx)(I.a,{value:"sql",children:"SQL"}),Object(D.jsx)(I.a,{value:"Nosql",children:"NO SQL"})]}),Object(D.jsx)(v.a,{children:"Which databases do you prefer?"})]}),Object(D.jsxs)(S.a,{className:"DataStructure",fullWidth:!0,children:[Object(D.jsx)(k.a,{id:"demo-simple-select-helper-label",children:"Data Structure"}),Object(D.jsxs)(N.a,{labelId:"demo-simple-select-helper-label",id:"DataStructure",name:"dslevel",value:this.state.dslevel,onChange:this.handleChange,children:[Object(D.jsx)(I.a,{value:"beginner",children:"Beginner"}),Object(D.jsx)(I.a,{value:"intermediate",children:"Intermediate"}),Object(D.jsx)(I.a,{value:"expert",children:"Expert"})]}),Object(D.jsx)(v.a,{children:"Rate yourself in the area of Data Structures:"})]}),Object(D.jsxs)(S.a,{component:"fieldset",children:[Object(D.jsx)(p.a,{component:"legend",children:"Shell Scripting"}),Object(D.jsxs)(O.a,{row:!0,"aria-label":"shellScript",name:"shell",value:this.state.shell,onChange:this.handleChange,children:[Object(D.jsx)(y.a,{value:"yes",control:Object(D.jsx)(x.a,{}),label:"Yes"}),Object(D.jsx)(y.a,{value:"no",control:Object(D.jsx)(x.a,{}),label:"No"})]}),Object(D.jsx)(b.a,{startIcon:Object(D.jsx)(C.a,{}),className:"buttonSubmit",color:"primary",variant:"contained",size:"medium",type:"submit",onClick:function(){return e.handleOnSubmit(e.state)},fullWidth:!0,children:"Submit"})]})]}),"show"===this.state.showChatBox?Object(D.jsx)(L,{}):null,Object(D.jsx)(B.a,{}),Object(D.jsx)(g.a,{className:"",open:this.state.isLoading,style:{"z-index":"1201"},children:Object(D.jsx)(f.a,{color:"inherit"})})]})}}]),a}(n.Component),R=M,T=(a(130),a(131),a(132),a(86)),q=a.n(T),A=a(87),J=a.n(A),_=a(85),z=a.n(_),Q=a(88),H=a.n(Q),Y=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return Object(D.jsx)("div",{class:"ui equal width center aligned padded grid footer",style:{height:"auto",backgroundColor:"black",color:"#878787"},children:Object(D.jsxs)(u.a,{container:!0,spacing:3,children:[Object(D.jsx)(u.a,{item:!0,xs:3,md:3,className:"company-logo",children:"Interview Bot"}),Object(D.jsx)(u.a,{item:!0,xs:5,md:6,className:"copyright",children:Object(D.jsxs)("span",{className:"copyright-span",children:[Object(D.jsx)("i",{class:"copyright icon"}),"2021, All Rights Reserved by Pranay Mate"]})}),Object(D.jsxs)(u.a,{item:!0,xs:4,md:3,className:"icons",children:[Object(D.jsx)("a",{href:"https://pranay-mate.github.io/portfolio/",children:Object(D.jsx)(z.a,{})}),Object(D.jsx)("a",{href:"https://www.linkedin.com/in/pranay-mate-arvind/",children:Object(D.jsx)(q.a,{})}),Object(D.jsx)("a",{href:"https://www.instagram.com/pranay_mate/",children:Object(D.jsx)(J.a,{})}),Object(D.jsx)("a",{href:"mailto:matepranay11@gmail.com",children:Object(D.jsx)(H.a,{})})]})]})})}}]),a}(n.Component);var G=function(){return Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)("header",{className:"header",children:"Interview Bot"}),Object(D.jsx)(R,{}),Object(D.jsx)(Y,{})]})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,189)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),c(e),l(e)}))};l.a.render(Object(D.jsx)(s.a.StrictMode,{children:Object(D.jsx)(G,{})}),document.getElementById("root")),K()}},[[135,1,2]]]);
//# sourceMappingURL=main.7b7fa808.chunk.js.map