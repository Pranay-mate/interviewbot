(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{123:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(10),c=a.n(l),i=(a(94),a(73)),r=a(45),o=a(46),d=a(52),h=a(51),u=(a(95),a(165)),j=a(169),b=a(170),m=a(171),p=a(130),O=a(176),x=a(173),g=a(177),v=a(172),f=a(131),y=a(175),C=(a(96),a(81)),w=a.n(C),S=a(132),N=a(128),k=a(129),I=a(174),D=(a(97),a(5)),L=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){!function(e,t){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://widget.kommunicate.io/v2/kommunicate.app",document.getElementsByTagName("head")[0].appendChild(a),window.kommunicate=t,t._globals={appId:"1ca0fc96e6521e302ac5d7d7167e7a62a",popupWidget:!0,automaticChatOpenOnNavigation:!0}}(document,window.kommunicate||{})}},{key:"render",value:function(){return Object(D.jsx)("div",{className:"form-container"})}}]),a}(n.Component),B=a(41),W=a(80),P=a.n(W),E=(a(99),a(74)),F=a.n(E),M=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={showChatBox:"hide"},e.handleChange=function(t){t.preventDefault();var a=t.target,n=a.name,s=a.value;e.setState(Object(i.a)({},n,s)),console.log(s),console.log(e.state)},e.handleOnSubmit=function(t){console.log(e.state),console.log(t);F.a.post("https://protected-citadel-70366.herokuapp.com/",e.state).then((function(t){e.setState({res:t}),console.log(t),"undefined"!=typeof t.data&&"failed"!=t.data?(e.setState({showChatBox:"show"}),B.b.success("Hey! "+t.data.Name+" your interview has been sheduled")):B.b.error("Error! Please submit all the details.")})).catch((function(t){e.setState({errorMessage:t.message}),console.error("There was an error!",t),B.b.error("Error! Please submit all the details.")})),console.log("")},e.resetForm=function(t){e.setState({Name:""}),e.loader()},e.loader=function(){e.setState({isLoading:!0}),setInterval((function(){window.location.reload(),e.setState({isLoading:!1})}),1e3)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return Object(D.jsxs)("div",{className:"form-container form_blade",children:[Object(D.jsxs)(u.a,{className:"paper",children:[Object(D.jsxs)(j.a,{container:!0,spacing:2,children:[Object(D.jsx)(j.a,{item:!0,xs:12,md:10,children:Object(D.jsx)("h3",{children:"Please provide us the following details for interview based on your skills!"})}),Object(D.jsx)(j.a,{item:!0,xs:12,md:2,className:"ResetButton",children:Object(D.jsx)(b.a,{variant:"contained",color:"primary",startIcon:Object(D.jsx)(P.a,{}),onClick:function(){return e.resetForm(e.state)},children:"Reset  "})})]}),Object(D.jsx)(m.a,{InputLabelProps:{shrink:!0},name:"Name",variant:"outlined",label:"Name",fullWidth:!0,margin:"dense",value:this.state.Name,onChange:this.handleChange}),Object(D.jsxs)(N.a,{className:"Language",fullWidth:!0,children:[Object(D.jsx)(k.a,{id:"demo-simple-select-helper-label",children:"Language"}),Object(D.jsxs)(S.a,{labelId:"demo-simple-select-helper-label",id:"Language",name:"lang",value:this.state.lang,onChange:this.handleChange,children:[Object(D.jsx)(I.a,{value:"python",children:"Python"}),Object(D.jsx)(I.a,{value:"java",children:"Java"}),Object(D.jsx)(I.a,{value:"cpp",children:"Cpp"})]}),Object(D.jsx)(f.a,{children:"Which language you are the most comfortable with?"})]}),Object(D.jsxs)(N.a,{className:"Database",fullWidth:!0,children:[Object(D.jsx)(k.a,{id:"demo-simple-select-helper-label",children:"Database"}),Object(D.jsxs)(S.a,{labelId:"demo-simple-select-helper-label",id:"Database",name:"db",value:this.state.db,onChange:this.handleChange,children:[Object(D.jsx)(I.a,{value:"sql",children:"SQL"}),Object(D.jsx)(I.a,{value:"Nosql",children:"NO SQL"})]}),Object(D.jsx)(f.a,{children:"Which databases do you prefer?"})]}),Object(D.jsxs)(N.a,{className:"DataStructure",fullWidth:!0,children:[Object(D.jsx)(k.a,{id:"demo-simple-select-helper-label",children:"Data Structure"}),Object(D.jsxs)(S.a,{labelId:"demo-simple-select-helper-label",id:"DataStructure",name:"dslevel",value:this.state.dslevel,onChange:this.handleChange,children:[Object(D.jsx)(I.a,{value:"beginner",children:"Beginner"}),Object(D.jsx)(I.a,{value:"intermediate",children:"Intermediate"}),Object(D.jsx)(I.a,{value:"expert",children:"Expert"})]}),Object(D.jsx)(f.a,{children:"Rate yourself in the area of Data Structures:"})]}),Object(D.jsxs)(N.a,{component:"fieldset",children:[Object(D.jsx)(p.a,{component:"legend",children:"Shell Scripting"}),Object(D.jsxs)(O.a,{row:!0,"aria-label":"shellScript",name:"shell",value:this.state.shell,onChange:this.handleChange,children:[Object(D.jsx)(y.a,{value:"yes",control:Object(D.jsx)(x.a,{}),label:"Yes"}),Object(D.jsx)(y.a,{value:"no",control:Object(D.jsx)(x.a,{}),label:"No"})]}),Object(D.jsx)(b.a,{startIcon:Object(D.jsx)(w.a,{}),className:"buttonSubmit",color:"primary",variant:"contained",size:"medium",type:"submit",onClick:function(){return e.handleOnSubmit(e.state)},fullWidth:!0,children:"Submit"})]})]}),"show"===this.state.showChatBox?Object(D.jsx)(L,{}):null,Object(D.jsx)(B.a,{}),Object(D.jsx)(g.a,{className:"",open:this.state.isLoading,style:{"z-index":"1201"},children:Object(D.jsx)(v.a,{color:"inherit"})})]})}}]),a}(n.Component),T=M;a(123);var J=function(){return Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)("header",{className:"header",children:"Interview Bot"}),Object(D.jsx)(T,{})]})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,179)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),l(e),c(e)}))};c.a.render(Object(D.jsx)(s.a.StrictMode,{children:Object(D.jsx)(J,{})}),document.getElementById("root")),R()},94:function(e,t,a){},95:function(e,t,a){}},[[124,1,2]]]);
//# sourceMappingURL=main.5cc4f532.chunk.js.map