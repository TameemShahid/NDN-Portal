(this["webpackJsonpndn-portal"]=this["webpackJsonpndn-portal"]||[]).push([[0],{241:function(e,t,n){},478:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),i=n(37),a=n.n(i),s=n(12),r=n(481),l=n(482),d=n(160),j=n(487),b=n(483),u=n(3),h=function(e){var t=e.loginInput,n=e.setLoginInput,o=e.handleLogin,c=e.viewBuilder,i=(e.SetViewBuilder,e.ViewTopo),a=e.ViewLogin;return!1===c&&!1===i&&!0===a?Object(u.jsx)("div",{style:{display:"flex",alignItems:"center",width:"100%",height:"100vh"},children:Object(u.jsx)(r.a,{children:Object(u.jsxs)("div",{style:{border:"2px solid black",padding:"5px"},children:[Object(u.jsx)(l.a,{className:"justify-content-center",children:Object(u.jsx)("h1",{style:{fontFamily:"Roboto"},children:"Login"})}),Object(u.jsx)(l.a,{className:"justify-content-center",children:Object(u.jsx)(d.a,{xs:"auto",children:Object(u.jsxs)(j.a,{className:"justify-content-center",children:[Object(u.jsxs)(j.a.Group,{controlId:"formBasicEmail",children:[Object(u.jsx)(j.a.Label,{children:"Username"}),Object(u.jsx)(j.a.Control,{"data-testid":"login-form-username",type:"text",placeholder:"Enter Username",value:t.username,onChange:function(e){n({username:e.target.value,password:t.password})}}),Object(u.jsx)(j.a.Text,{className:"text-muted",children:"Never share your username or password with anyone else."})]}),Object(u.jsxs)(j.a.Group,{controlId:"formBasicPassword",children:[Object(u.jsx)(j.a.Label,{children:"Password"}),Object(u.jsx)(j.a.Control,{"data-testid":"login-form-password",type:"password",placeholder:"Password",value:t.password,onChange:function(e){n({username:t.username,password:e.target.value})}})]}),Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)(b.a,{variant:"primary",onClick:function(){o()},children:"Submit"})})]})})})]})})}):null},O=n(75),x=n(488),p=n(485),g=n(161),m=function(e){var t=e.data,n=e.addNode,c=e.addLink,i=e.linkInput,a=e.setLinkInput,j=e.createTopology,h=e.myConfig,m=e.onClickLink,w=e.onClickNode,k=(e.ViewTopo,e.viewBuilder),f=e.username,y=Object(o.useState)(!1),v=Object(s.a)(y,2),C=v[0],S=v[1],I=Object(o.useState)(!0),N=Object(s.a)(I,2),L=N[0],T=N[1];return!0===k?Object(u.jsxs)(r.a,{children:[L?Object(u.jsxs)(x.a,{variant:"success",onClose:function(){return T(!1)},dismissible:!0,transition:!0,children:["Welcome back ",f,"!"]}):null,Object(u.jsx)("h1",{style:{fontFamily:"Roboto",paddingTop:"20px"},children:"TOPOLOGY"}),Object(u.jsxs)(l.a,{style:C?{}:{height:"85vh"},children:[Object(u.jsxs)(d.a,{children:[Object(u.jsx)(b.a,{variant:"secondary",block:!0,onClick:function(){return S(!0)},"data-testid":"create-topology-button",children:"Create Topology"})," "]}),Object(u.jsxs)(d.a,{children:[Object(u.jsx)(b.a,{variant:"secondary",block:!0,onClick:j,"data-testid":"view-topology-button",children:"View Topology"})," "]})]}),Object(u.jsx)("br",{}),Object(u.jsxs)(l.a,{className:C?"":"d-none",children:[Object(u.jsxs)(d.a,{className:"justify-content-right",children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(b.a,{variant:"secondary",onClick:n,block:!0,children:"Add Node"})," ",Object(u.jsx)("br",{}),Object(u.jsx)(p.a,{className:"",children:Object(u.jsx)(g.a,{"aria-label":"Source Node","aria-describedby":"basic-addon1",value:i.sourceInput,placeholder:"Source Node",onChange:function(e){a({sourceInput:e.target.value,destinationInput:i.destinationInput})}})}),Object(u.jsx)(p.a,{className:"mb-1",children:Object(u.jsx)(g.a,{"aria-label":"Destination Node","aria-describedby":"basic-addon1",value:i.destinationInput,placeholder:"Destination Node",onChange:function(e){a({destinationInput:e.target.value,sourceInput:i.sourceInput})}})}),Object(u.jsx)(b.a,{variant:"secondary",onClick:c,block:!0,children:"Add Link"})," ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(b.a,{variant:"secondary",onClick:j,block:!0,children:"Submit"})," "]}),Object(u.jsx)(d.a,{children:Object(u.jsx)("div",{style:{border:"2px solid black",width:"100%",height:"80vh",backgroundColor:"white"},children:Object(u.jsx)(O.Graph,{id:"graph-id",data:t,config:h,onClickNode:w,onClickLink:m})})})]})]}):null},w=n(52),k=n.n(w),f=n(163),y=n.n(f),v=n(486),C=function(e){var t=e.data,n=e.myConfig,c=e.onClickLink,i=e.ViewTopo,a=Object(o.useState)(""),j=Object(s.a)(a,2),h=(j[0],j[1],Object(o.useState)("")),x=Object(s.a)(h,2),p=(x[0],x[1]),g=Object(o.useState)(!0),m=Object(s.a)(g,2),w=m[0],f=m[1],C=Object(o.useState)(""),S=Object(s.a)(C,2),I=S[0],N=(S[1],Object(o.useState)(!1)),L=Object(s.a)(N,2),T=L[0],V=L[1],B=Object(o.useState)(""),F=Object(s.a)(B,2),P=F[0],H=F[1],D=Object(o.useState)(!1),E=Object(s.a)(D,2),G=E[0],R=E[1],A=Object(o.useState)(!1),M=Object(s.a)(A,2),U=M[0],W=M[1];return i?Object(u.jsxs)(r.a,{style:{height:"100vh"},children:[Object(u.jsx)(v.a,{show:U,onHide:function(){return W(!1)},backdrop:"static",keyboard:!1,children:Object(u.jsx)(v.a.Body,{children:"Performing operation, please wait awhile..."})}),Object(u.jsxs)(v.a,{show:G,onHide:function(){return R(!1)},children:[Object(u.jsx)(v.a.Header,{closeButton:!0,children:Object(u.jsx)(v.a.Title,{children:P})}),Object(u.jsx)(v.a.Body,{children:Object(u.jsx)(r.a,{children:Object(u.jsx)(b.a,{variant:"primary",children:"Command!"})})}),Object(u.jsx)(v.a.Footer,{children:Object(u.jsx)(b.a,{variant:"primary",onClick:function(){R(!1),p("Output of command!")},children:"Click Me!"})})]}),Object(u.jsx)("h1",{style:{fontFamily:"Roboto"},children:"Topology Viewer"}),Object(u.jsx)("div",{style:{border:"2px solid white",width:"100%",height:"51vh",backgroundColor:"white"},children:Object(u.jsx)(l.a,{children:Object(u.jsx)(d.a,{children:Object(u.jsx)("div",{style:{border:"2px solid black",width:"100%",height:"50vh",backgroundColor:"white"},children:Object(u.jsx)(O.Graph,{id:"graph-id",data:t,config:n,onClickNode:function(e){H(e.toString()),R(!0)},onClickLink:c})})})})}),Object(u.jsxs)(r.a,{children:[Object(u.jsxs)(l.a,{className:"mt-1",class:"text-center",children:[Object(u.jsxs)(d.a,{children:[Object(u.jsx)(b.a,{variant:"secondary",onClick:function(){f(!0),V(!1)},block:!0,children:"Terminal"})," "]}),Object(u.jsxs)(d.a,{children:[Object(u.jsx)(b.a,{variant:"secondary",onClick:function(){W(!0),k.a.get("http://localhost:3001/start"),setTimeout((function(){W(!1)}),1e4)},block:!0,children:"Start NDN Stack"})," "]}),Object(u.jsxs)(d.a,{children:[Object(u.jsx)(b.a,{variant:"secondary",onClick:function(){W(!0),k.a.get("http://localhost:3001/stop"),setTimeout((function(){W(!1)}),2e3)},block:!0,children:"Stop NDN Stack"})," "]})]}),T?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(l.a,{className:"pt-3",children:[Object(u.jsx)(d.a,{style:{border:"3px solid white"},children:Object(u.jsxs)("strong",{children:[I," Entry"]})}),Object(u.jsx)(d.a,{style:{border:"3px solid white"},children:Object(u.jsxs)("strong",{children:[I," Data"]})})]}),Object(u.jsxs)(l.a,{children:[Object(u.jsx)(d.a,{style:{border:"3px solid white",height:"150px"},children:"/switch1/video1/v1"}),Object(u.jsx)(d.a,{style:{border:"3px solid white",height:"150px"},children:"Cached content at Node 1"})]})]}):null]}),w?Object(u.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"5px"},children:Object(u.jsx)(y.a,{color:"green",backgroundColor:"black",barColor:"black",style:{marginTop:"5px",border:"1px solid white",fontWeight:"bold",fontSize:"1em",height:"500px"},startState:"maximised",commands:{"open-google":function(){return window.open("https://www.google.com/","_blank")},popup:function(){return alert("Terminal in React")},showmsg:function(){return"Hello World!"}},descriptions:{"open-google":"opens google.com",showmsg:"shows a message",alert:"alert",popup:"alert"},msg:"You can write anything here. Example - Hello! My name is Foo and I like Bar."})}):null]}):null},S=(n(241),function(e){var t=e.ViewTitlePage,n=e.ViewLoginForm;return t?Object(u.jsxs)("div",{className:"TitlePage",children:[Object(u.jsx)("div",{id:"particles-js"}),Object(u.jsx)("div",{class:"bg",children:Object(u.jsx)("h4",{"data-testid":"portal-name",children:"ITTILAH PORTAL"})}),Object(u.jsx)("div",{class:"container",children:Object(u.jsx)("button",{class:"btn",onClick:function(){n()},children:"Login"})})]}):null});n(168);var I=function(){var e=Object(o.useState)({nodes:[{id:"node0"},{id:"node1"}],links:[{source:"node0",target:"node1"}]}),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(o.useState)(!1),a=Object(s.a)(i,2),r=a[0],l=a[1],d=Object(o.useState)(!0),j=Object(s.a)(d,2),b=j[0],O=j[1],x=Object(o.useState)(!1),p=Object(s.a)(x,2),g=p[0],w=p[1],f={nodeHighlightBehavior:!0,node:{color:"#42F3FB",size:120,highlightStrokeColor:"blue"},link:{highlightColor:"lightblue"}},y=function(e){console.log(e)},v=function(e,t){window.alert("Clicked link between ".concat(e," and ").concat(t))},I=Object(o.useState)(n.nodes.length),N=Object(s.a)(I,2),L=N[0],T=N[1],V=Object(o.useState)({sourceInput:"",destinationInput:""}),B=Object(s.a)(V,2),F=B[0],P=B[1],H=Object(o.useState)({username:"",password:""}),D=Object(s.a)(H,2),E=D[0],G=D[1],R=Object(o.useState)({x:20,y:20}),A=Object(s.a)(R,2),M=A[0],U=A[1],W=Object(o.useState)(!1),Y=Object(s.a)(W,2),z=Y[0],J=Y[1];return Object(u.jsxs)("div",{style:{backgroundColor:"#000",color:"white",overflowY:"scroll"},children:[Object(u.jsx)(S,{ViewTitlePage:b,ViewLoginForm:function(){O(!1),w(!0)}}),Object(u.jsx)(h,{loginInput:E,setLoginInput:G,handleLogin:function(){k.a.post("http://localhost:3001/persons",E).then((function(e){if(200===e.status)J(!0);else if(204===e.status)throw Error("User name or Password incorrect!")})).catch((function(e){window.alert(e)}))},viewBuilder:z,setViewBuilder:J,ViewTopo:r,ViewLogin:g}),Object(u.jsx)(m,{data:n,addNode:function(){T(L+1);var e=n.nodes.concat({id:"node".concat(L),x:M.x,y:M.y});c({nodes:e,links:n.links}),U({x:M.x+5,y:M.y+10})},addLink:function(){var e=n.nodes.find((function(e){return e.id===F.sourceInput})),t=n.nodes.find((function(e){return e.id===F.destinationInput})),o=n.links.find((function(e){return e.source===F.sourceInput&&e.target===F.destinationInput}));if(e&&t)if(o)window.alert("Link already exist!");else{var i=n.links.concat({source:F.sourceInput,target:F.destinationInput});c({nodes:n.nodes,links:i})}else{var a=e?"Second":"First";window.alert("".concat(a," node does not exist"))}},linkInput:F,setLinkInput:P,createTopology:function(){k.a.post("http://localhost:3001/topology",n).then((function(){console.log("Data send to backend"),J(!1),l(!0)})).catch((function(e){window.alert(e)}))},myConfig:f,onClickLink:v,onClickNode:y,ViewTopo:r,viewBuilder:z,username:E.username}),Object(u.jsx)(C,{data:n,myConfig:f,onClickLink:v,onClickNode:y,ViewTopo:r})]})};n(476);a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root"))}},[[478,1,2]]]);
//# sourceMappingURL=main.d05d0250.chunk.js.map