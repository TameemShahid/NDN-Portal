(this["webpackJsonpndn-portal"]=this["webpackJsonpndn-portal"]||[]).push([[0],{212:function(e,t,n){},449:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(46),s=n.n(c),r=n(10),i=n(27),l=n.n(i),d=n(15),u=n(452),j=n(453),b=n(168),h=n(458),x=n(454),p=n(1),O=function(e){var t=e.setAuthorized;Object(a.useEffect)((function(){document.title="Login"}),[]);var n=Object(d.g)(),o=Object(a.useState)({username:"",password:""}),c=Object(r.a)(o,2),s=c[0],i=c[1];return Object(p.jsx)("div",{style:{display:"flex",alignItems:"center",width:"100%",height:"100vh"},children:Object(p.jsx)(u.a,{children:Object(p.jsxs)("div",{style:{border:"2px solid black",padding:"5px"},children:[Object(p.jsx)(j.a,{className:"justify-content-center",children:Object(p.jsx)("h1",{style:{fontFamily:"Roboto"},children:"Login"})}),Object(p.jsx)(j.a,{className:"justify-content-center",children:Object(p.jsx)(b.a,{xs:"auto",children:Object(p.jsxs)(h.a,{className:"justify-content-center",children:[Object(p.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(h.a.Label,{children:"Username"}),Object(p.jsx)(h.a.Control,{"data-testid":"login-form-username",type:"text",value:s.username,onChange:function(e){i({username:e.target.value,password:s.password})}}),Object(p.jsx)(h.a.Text,{className:"text-muted",children:"Never share your username or password with anyone else."})]}),Object(p.jsxs)(h.a.Group,{controlId:"formBasicPassword",children:[Object(p.jsx)(h.a.Label,{children:"Password"}),Object(p.jsx)(h.a.Control,{"data-testid":"login-form-password",type:"password",value:s.password,onChange:function(e){i({username:s.username,password:e.target.value})}})]}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(x.a,{variant:"primary",onClick:function(){!function(e){l.a.post("http://localhost:3001/persons",s).then((function(n){if(200===n.status)t(!0),e.push("/build");else if(204===n.status)throw Error("User name or Password incorrect!")})).catch((function(e){window.alert(e)}))}(n)},children:"Submit"})})]})})})]})})})},g=n(28),m=n(32),f=n(22),y=n.n(f),v=n(56),k=n(457),w=n(455),C=n(169),N=function(e){var t=e.name,n=e.title,a=e.placeHolder,o=e.inputValue,c=e.changeHandler,s=e.maxLength;return Object(p.jsxs)(w.a,{className:"mb-3",children:[Object(p.jsx)(w.a.Text,{style:{borderBottomRightRadius:"0",borderTopRightRadius:"0",width:"80px",justifyContent:"center"},children:n}),Object(p.jsx)(C.a,{name:t,placeholder:a,value:o,onChange:c,maxLength:s})]})},S=function(e){var t=e.title,n=e.config,a=e.fields,o=e.showModal,c=e.setShowModal,s=e.submitHandler,r=a.map((function(e,t){return Object(p.jsx)(N,{name:e.name,title:e.title,placeHolder:e.placeHolder,inputValue:e.inputValue,changeHandler:e.changeHandler,maxLength:e.maxLength},t)}));return Object(p.jsxs)(k.a,{show:o,onHide:function(){return c(!1)},backdrop:"static",keyboard:!1,children:[Object(p.jsx)(k.a.Header,{closeButton:!0,children:Object(p.jsx)(k.a.Title,{children:t})}),Object(p.jsx)(k.a.Body,{children:r}),Object(p.jsxs)(k.a.Footer,{children:[Object(p.jsx)(x.a,{variant:"secondary",onClick:function(){return c(!1)},children:"Close"}),Object(p.jsx)(x.a,{variant:"primary",onClick:function(){s(),console.log(n),c(!1)},children:t})]})]})},T=n(67),H=n(89),D=function(e){var t=e.addNode,n=e.setNodeConfig,a=e.setShowNodeModal,o=e.createSdnTopology,c={"SDN Controller":5,"Simple Node":1,"Intermediate Node":2,"Advanced Node":4,"Custom Node":1};return Object(p.jsx)("div",{style:{border:"2px solid white",paddingTop:"15px",paddingBottom:"5px",justifyContent:"space-around",borderRadius:"0px 0px 5px 5px"},className:"d-flex",children:function(){var e=[],s=function(s){e.push(Object(p.jsxs)("div",{className:"text-center",children:[Object(p.jsx)(x.a,{variant:"secondary",onClick:function(){"Custom Node"===s?(n({memory:"",cache:"",radius:"",angle:"",cpu:""}),a(!0)):"SDN Controller"===s?o():t(c[s],s)},children:Object(p.jsx)(H.a,{icon:"SDN Controller"==s?T.a:T.c})})," ",Object(p.jsx)("br",{}),s]},s))};for(var r in c)s(r);return e}()})},L=n(460),M=function(e){var t=e.title,n=e.message,a=e.show,o=e.setShow;return Object(p.jsx)("div",{children:Object(p.jsxs)(L.a,{show:a,onClose:function(){return o(!1)},children:[Object(p.jsx)(L.a.Header,{children:Object(p.jsx)("strong",{className:"me-auto block",children:t})}),Object(p.jsx)(L.a.Body,{className:"text-left text-white bg-dark",children:n})]})})},B=n(170),R=function(e){var t,n=e.setNodeOptions,o=e.setNodeClicked,c=e.setShowOption,s=e.topoData,i=e.graphConfig,l=e.onClickLink,d=e.onClickNode,u=Object(a.useState)(100),j=Object(r.a)(u,2),b=j[0],h=j[1];return Object(p.jsxs)("div",{style:{width:"100%"},children:[Object(p.jsx)(B.Graph,(t={id:"graph-id",data:s,onClickNode:d,config:i},Object(g.a)(t,"onClickNode",d),Object(g.a)(t,"onDoubleClickNode",(function(e,t){n(!0),o(e)})),Object(g.a)(t,"onRightClickNode",(function(e,t){e.preventDefault(),c(!0),o(t)})),Object(g.a)(t,"onClickLink",l),Object(g.a)(t,"onNodePositionChange",(function(e,t,n){console.log("Node ".concat(e," moved to new position x= ").concat(t," y= ").concat(n))})),Object(g.a)(t,"onZoomChange",(function(e,t){console.log("Zoomed : ".concat(e,", ").concat(t)),h(Math.floor(100*t))})),t)),Object(p.jsxs)("h5",{style:{color:"black"},children:["Current Zoom: ",b,"%"]})]})},A=[{nodes:[{id:"node1",x:188,y:499},{id:"node2",x:471,y:428}],links:[{source:"node1",target:"node2"},{source:"node2",target:"node1"}]}],I=n(459),U=function(e){var t=e.message,n=e.variant;return e.showAlert?Object(p.jsx)(I.a,{className:"text-center",variant:n,children:t+". "}):null},F=function(e){var t=e.topoData,n=e.setTopoData,o=e.graphConfig,c=e.createTopology,s=Object(a.useState)(""),i=Object(r.a)(s,2),h=i[0],O=i[1],f=Object(a.useState)("Choose File"),k=Object(r.a)(f,2),w=k[0],C=k[1],N=Object(a.useState)("success"),B=Object(r.a)(N,2),I=B[0],F=B[1],P=Object(a.useState)(""),_=Object(r.a)(P,2),E=_[0],z=_[1],V=Object(a.useState)(!1),G=Object(r.a)(V,2),K=G[0],Z=G[1],J=Object(a.useState)(),W=Object(r.a)(J,2),Y=W[0],Q=W[1];Object(a.useEffect)((function(){document.title="Topology Builder"}),[E]);var X=Object(d.g)(),q=Object(a.useState)(!1),$=Object(r.a)(q,2),ee=$[0],te=$[1],ne=Object(a.useState)({memory:"",cache:"",radius:"",angle:"",cpu:"",name:""}),ae=Object(r.a)(ne,2),oe=ae[0],ce=ae[1],se=Object(a.useState)(t.nodes.length+2),re=Object(r.a)(se,2),ie=(re[0],re[1]),le=Object(a.useState)({x:200*Math.random(),y:200*Math.random()}),de=Object(r.a)(le,2),ue=de[0],je=de[1],be=function(){var e=Object(v.a)(y.a.mark((function e(a){var o,c,s,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),(o=new FormData).append("file",h),F("success"),e.prev=4,e.next=7,l.a.post("http://localhost:3001/upload",o,{headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"true"}});case 7:c=e.sent,s=c.data,r=s.fileName,s.filePath,console.log(r,w),z("File Uploaded"),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(4),F("danger"),console.log(e.t0),500===e.t0.response.status?(console.log("There was a problem with the server"),z(e.t0.response.data.msg)):(z(e.t0.response.data.msg),console.log(e.t0.response.data.msg));case 18:console.log(A[0].nodes),n({nodes:A[0].nodes,links:A[0].links}),ie(t.nodes.length+2),Z(!0),setTimeout((function(){Z(!1)}),3e3),We(!1);case 24:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}(),he=function(e){var n=e.target.name,a=e.target.value,o=!1;switch(n){case"memory":o=a>0&&a<=1048576;break;case"radius":o=a>=0&&a<=1;break;case"cache":o=a>0&&a<=102400;break;case"angle":o=a>=0&&a<=360;break;case"cpu":o=a>0&&a<=100;break;case"name":var c=t.nodes.filter((function(e){return e.id==a}));console.log(c),0==c.length?o=!0:(console.log(c.length),Q((function(){return"Node with that name already exists"})),setTimeout((function(){Q((function(){return""}))}),5e3)),a.indexOf(" ")>=0&&(Q((function(){return"Node name cannot contain spaces"})),console.log("Contain Spaces"),o=!1)}o?ce(Object(m.a)(Object(m.a)({},oe),{},Object(g.a)({},e.target.name,e.target.value))):(window.alert("Invalid ".concat(n," value, please enter correct value.\n").concat(Y)),ce(Object(m.a)(Object(m.a)({},oe),{},Object(g.a)({},n,""))))};console.log();var xe=[{name:"name",title:"Name",placeHolder:"Enter Custom Node Name",inputValue:oe.name,changeHandler:he,maxLength:10},{name:"memory",title:"Memory",placeHolder:"in KB's",inputValue:oe.memory,changeHandler:he},{name:"cache",title:"Cache",placeHolder:"in KB's",inputValue:oe.cache,changeHandler:he},{name:"radius",title:"Radius",placeHolder:"<0.0-1.0>",inputValue:oe.radius,changeHandler:he},{name:"angle",title:"Angle",placeHolder:"<0-360>",inputValue:oe.angle,changeHandler:he},{name:"cpu",title:"CPU",placeHolder:"<0-100%>",inputValue:oe.cpu,changeHandler:he}],pe=Object(a.useState)({source:"",target:""}),Oe=Object(r.a)(pe,2),ge=Oe[0],me=Oe[1];Object(a.useEffect)((function(){if(""===ge.source&&""!==ge.target)Pe({message:"Set Source Node"}),Ae(!0);else if(""===ge.target&&""!==ge.source)Pe({message:"Set Target Node"}),Ae(!0);else if(ge.source===ge.target&&""!==ge.source&&""!==ge.target)Pe({message:"Source and Target Node cannot be same"}),Ae(!0);else if(""!==ge.source&&""!==ge.target&&ge.source!==ge.target){Pe({message:"Adding Link"});var e=t.links;e.push(ge),n(Object(m.a)(Object(m.a)({},t),{},{links:e})),me({source:"",target:""}),Ae(!1)}}),[ge]);var fe=Object(a.useState)(""),ye=Object(r.a)(fe,2),ve=ye[0],ke=ye[1],we=Object(a.useState)(!1),Ce=Object(r.a)(we,2),Ne=Ce[0],Se=Ce[1],Te=Object(a.useState)(!0),He=Object(r.a)(Te,2),De=He[0],Le=He[1],Me=Object(a.useState)(!1),Be=Object(r.a)(Me,2),Re=Be[0],Ae=Be[1],Ie=Object(a.useState)({duration:0,message:""}),Ue=Object(r.a)(Ie,2),Fe=Ue[0],Pe=Ue[1],_e=["(1) Right click on node to add Link.","(2) Double Click on Node to delete it.","(3) Zoom in & out using mouse scroll.","(4) Left Click for node properties."].map((function(e,t){return Object(p.jsx)("p",{children:e},t)})),Ee=Object(a.useState)(!1),ze=Object(r.a)(Ee,2),Ve=ze[0],Ge=ze[1],Ke=Object(a.useState)(!1),Ze=Object(r.a)(Ke,2),Je=Ze[0],We=Ze[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(U,{message:E,variant:I,showAlert:K}),Object(p.jsxs)(u.a,{className:"text-center",style:{minHeight:"100vh",backgroundColor:"black"},children:[Object(p.jsxs)("h1",{style:{fontFamily:"Roboto"},children:[Object(p.jsxs)("span",{children:[Object(p.jsx)(H.a,{icon:T.b})," "]}),"Build Topology"]}),Object(p.jsx)(j.a,{children:Object(p.jsx)(b.a,{style:{backgroundColor:"white"},children:Object(p.jsx)(R,{setNodeOptions:Ge,setNodeClicked:ke,topoData:t,graphConfig:o,setShowOption:Se,onClickNode:function(e,t){console.log(e,t);var n="Node Configurations: \n \n                CPU: ".concat(t.cpu?100*t.cpu+"%":"20%","\n\n                Memory: ").concat(t.memory?t.memory+"Kb":"1024Kb","\n\n                Cache: ").concat(t.cache?t.cache+"Kb":"512Kb","\n\n                Radius: ").concat(t.radius?t.radius:"0.1","\n\n                Angle: ").concat(t.angle?t.angle+"degree":"0 degree","\n");Pe({message:n}),Ae(!0)}})})}),Object(p.jsx)(j.a,{children:Object(p.jsx)(b.a,{style:{padding:"0px"},children:Object(p.jsx)(D,{addNode:function(e,a){"Custom Node"!==a&&ce({memory:1024*e,cache:512*e,angle:0,radius:0,cpu:10*e}),ie(t.nodes.length+2);var o=t.nodes.concat({id:"node".concat(t.nodes.length+1),x:ue.x,y:ue.y,memory:oe.memory,radius:oe.radius,cache:oe.cache,angle:oe.angle,cpu:oe.cpu/100});n({nodes:o,links:t.links}),je({x:200*Math.random(),y:200*Math.random()})},setNodeConfig:ce,setShowNodeModal:te,createSdnTopology:function(){var e={nodes:[{id:"node1",x:358,y:190},{id:"node2",x:314,y:346},{id:"node3",x:397,y:493},{id:"node4",x:178,y:304},{id:"s",x:211,y:449}],links:[{source:"s",target:"node1"},{source:"s",target:"node2"},{source:"s",target:"node3"},{source:"s",target:"node4"}]};n({nodes:e.nodes,links:e.links}),je({x:200*Math.random(),y:200*Math.random()})}})})}),Object(p.jsxs)(j.a,{style:{marginTop:"30px",display:"flex",alignContent:"center"},children:[Object(p.jsx)(b.a,{children:Object(p.jsx)(x.a,{variant:"light",className:"btn-lg btn-block",onClick:function(){return function(){var e={nodes:[{id:"node1",x:358,y:190},{id:"node2",x:314,y:346},{id:"node3",x:397,y:493},{id:"node4",x:178,y:304},{id:"node5",x:211,y:449}],links:[{source:"node5",target:"node1"},{source:"node5",target:"node2"},{source:"node5",target:"node3"},{source:"node5",target:"node4"}]};n({nodes:e.nodes,links:e.links}),je({x:200*Math.random(),y:200*Math.random()})}()},children:"Star Topology"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(x.a,{variant:"light",className:"btn-lg btn-block",onClick:function(){return function(){var e={nodes:[{id:"node1",x:133,y:192},{id:"node2",x:224,y:131},{id:"node3",x:478,y:359},{id:"node4",x:323,y:463},{id:"node5",x:151,y:104}],links:[{source:"node1",target:"node2"},{source:"node2",target:"node3"},{source:"node3",target:"node4"},{source:"node4",target:"node5"}]};n({nodes:e.nodes,links:e.links}),je({x:200*Math.random(),y:200*Math.random()})}()},children:"Bus Topology"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(x.a,{variant:"light",className:"btn-lg btn-block",onClick:function(){return function(){var e={nodes:[{id:"node3",fx:163,fy:341},{id:"node4",fx:924,fy:363},{id:"node2",fx:207,fy:125},{id:"node1",fx:893,fy:105}],links:[{source:"node1",target:"node4"},{source:"node1",target:"node2"},{source:"node2",target:"node1"},{source:"node2",target:"node3"},{source:"node3",target:"node4"},{source:"node3",target:"node2"},{source:"node4",target:"node1"},{source:"node4",target:"node3"}]};n({nodes:e.nodes,links:e.links}),je({x:200*Math.random(),y:200*Math.random()})}()},children:"Ring Topology"})}),Object(p.jsx)(b.a,{style:{flexGrow:"1.5",borderRight:"3px solid white",marginRight:"30px",marginLeft:"-30px"},children:Object(p.jsx)(x.a,{variant:"light",className:"btn-lg",onClick:function(){return We(!0)},children:"Upload Topology"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(x.a,{variant:"secondary",className:"btn-lg btn-block",onClick:function(){return Le(!0)},children:"Instructions"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(x.a,{variant:"primary",className:"btn-lg btn-block",onClick:function(){return c(X)},children:"Submit"})})]}),Object(p.jsx)(S,{title:"Add Node",config:oe,fields:xe,showModal:ee,setShowModal:te,submitHandler:function(e,a){var o=t.nodes.concat({id:oe.name,x:ue.x,y:ue.y,memory:oe.memory,radius:oe.radius,cache:oe.cache,angle:oe.angle,cpu:oe.cpu/100});n({nodes:o,links:t.links}),je({x:200*Math.random(),y:200*Math.random()})}}),Object(p.jsxs)("div",{style:{position:"fixed",top:"0px",right:"14px"},children:[Object(p.jsx)(M,{title:"Instructions",show:De,setShow:Le,message:_e}),Object(p.jsx)(M,{title:"Notification",show:Re,setShow:Ae,message:Fe.message}),Object(p.jsxs)(L.a,{show:Ne,onClose:function(){return Se(!1)},children:[Object(p.jsx)(L.a.Header,{children:Object(p.jsx)("strong",{className:"me-auto block",children:"Link Options"})}),Object(p.jsxs)(L.a.Body,{className:"text-left text-white bg-dark",children:["Select the node as link source or destination",Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"d-flex",style:{justifyContent:"space-around"},children:[Object(p.jsx)(x.a,{variant:"secondary",onClick:function(){me(Object(m.a)(Object(m.a)({},ge),{},{source:ve})),Se(!1)},children:"Source"}),Object(p.jsx)(x.a,{variant:"secondary",onClick:function(){me(Object(m.a)(Object(m.a)({},ge),{},{target:ve})),Se(!1)},children:"Destination"})]})]})]}),Object(p.jsxs)(L.a,{show:Ve,onClose:function(){return Ge(!1)},children:[Object(p.jsx)(L.a.Header,{children:Object(p.jsx)("strong",{className:"me-auto block",children:"Node Options"})}),Object(p.jsx)(L.a.Body,{className:"text-left text-white bg-dark",children:Object(p.jsx)("div",{className:"d-flex",style:{justifyContent:"space-around"},children:Object(p.jsx)(x.a,{variant:"secondary",onClick:function(){var e=t.links,a=t.nodes;e=e.filter((function(e){return e.source!==ve&&e.target!==ve})),a=a.filter((function(e){return e.id!==ve})),n({nodes:a,links:e}),Ge(!1),console.log("Deleted Node!")},children:"Delete Node"})})})]}),Object(p.jsx)(M,{title:"Upload Topology",show:Je,setShow:We,message:Object(p.jsxs)("form",{onSubmit:be,children:[Object(p.jsx)("input",{type:"file",id:"uploadfile",onChange:function(e){O(e.target.files[0]),console.log(h),C(e.target.files[0].name)}}),Object(p.jsx)("input",{type:"submit",value:"Upload",className:"btn btn-primary btn-block mt-4"})]})})]})]})]})},P=n(62),_=function(e){var t=e.onClickCmd,n=Object(a.useState)([{type:P.b.Output,value:"Write commands here!\nTo see really long outputs toggle terminal off..."},,]),o=Object(r.a)(n,2),c=o[0],s=o[1],i=function(){var e=Object(v.a)(y.a.mark((function e(n){var a,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=[]).push({type:P.b.Input,value:n}),"clear"!==n.toLocaleLowerCase()){e.next=6;break}a=[],e.next=11;break;case 6:if(!n){e.next=11;break}return e.next=9,t(n);case 9:o=e.sent,a.push({type:P.b.Output,value:o});case 11:s(a);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"container",children:Object(p.jsx)(P.c,{name:"Terminal",colorMode:P.a.Dark,lineData:c,onInput:function(e){i(e)}})})},E=n(461),z=function(e){var t=e.topoData,n=e.graphConfig,o=e.onClickLink;Object(a.useEffect)((function(){document.title="Topology Viewer"}),[]);var c=Object(a.useState)(0),s=Object(r.a)(c,2),i=s[0],d=s[1],O=Object(a.useState)("Quick command output appears here..."),g=Object(r.a)(O,2),m=g[0],f=g[1],w=Object(a.useState)(!1),C=Object(r.a)(w,2),N=C[0],S=C[1],T=Object(a.useState)(""),H=Object(r.a)(T,2),D=H[0],L=(H[1],Object(a.useState)(!1)),M=Object(r.a)(L,2),B=M[0],A=M[1],I=Object(a.useState)(""),U=Object(r.a)(I,2),F=U[0],P=U[1],z=Object(a.useState)(!1),V=Object(r.a)(z,2),G=V[0],K=V[1],Z=function(){var e=Object(v.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 0,setTimeout((function(e){if(0===e)return Q(!1),f("No output received!"),"No Output received!"}),5e3),K(!1),Q(!0),e.next=6,l.a.post("http://localhost:3001/command",{command:t});case 6:return n=e.sent,1,e.next=10,f(n.data);case 10:return Q(!1),e.abrupt("return",n.data);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=Object(a.useState)(!0),W=Object(r.a)(J,2),Y=W[0],Q=W[1];return 0===i&&setTimeout((function(){Q(!1),d(1)}),3e4),Object(p.jsxs)(u.a,{style:{minHeight:"100vh"},children:[Object(p.jsxs)(k.a,{show:Y,onHide:function(){return Q(!1)},backdrop:"static",keyboard:!1,children:[Object(p.jsx)(k.a.Body,{children:"Performing operation, please wait awhile..."}),Object(p.jsx)(E.a,{animated:!0,now:100}),Object(p.jsx)(k.a.Footer,{})]}),Object(p.jsxs)(k.a,{show:G,onHide:function(){return K(!1)},children:[Object(p.jsx)(k.a.Header,{closeButton:!0,children:Object(p.jsx)(k.a.Title,{children:F})}),Object(p.jsx)(k.a.Body,{children:Object(p.jsxs)(u.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object(p.jsx)(x.a,{variant:"primary",onClick:function(){return Z("".concat(F," nfdc status report"))},children:"NFD Status"}),Object(p.jsx)(x.a,{variant:"primary",onClick:function(){return Z("net run")},children:"Network Status"}),Object(p.jsx)(x.a,{variant:"primary",onClick:function(){return Z("".concat(F," nlsrc status"))},children:"NLSR Status"})]})}),Object(p.jsx)(k.a.Footer,{children:Object(p.jsx)(x.a,{variant:"secondary",onClick:function(){K(!1)},children:"Close"})})]}),Object(p.jsx)("h1",{style:{fontFamily:"Roboto"},children:"Topology Viewer"}),Object(p.jsx)("div",{style:{border:"2px solid white",width:"100%",height:"51vh",backgroundColor:"white"},children:Object(p.jsx)(j.a,{children:Object(p.jsx)(b.a,{children:Object(p.jsx)("div",{style:{border:"2px solid black",width:"100%",height:"50vh",backgroundColor:"white"},children:Object(p.jsx)(R,{topoData:t,graphConfig:n,onClickNode:function(e){P(e.toString()),console.log(e),K(!0)},onClickLink:o})})})})}),Object(p.jsxs)(u.a,{style:{margin:"10px 0px 10px 0px"},children:[Object(p.jsxs)(j.a,{className:"mt-1",class:"text-center",style:{justifyContent:"center",alignContent:"center"},children:[Object(p.jsxs)(b.a,{className:"border-right border-3 border-white",style:{flexGrow:"2"},children:[Object(p.jsx)(x.a,{variant:"secondary",onClick:function(){S(!N),A(!1)},block:!0,children:"Terminal"})," "]}),Object(p.jsxs)(b.a,{className:"border-right border-3 border-white",style:{flexGrow:"2"},children:[Object(p.jsx)(x.a,{variant:"secondary",onClick:function(){Q(!0),l.a.get("http://localhost:3001/start"),setTimeout((function(){Q(!1)}),2e4)},block:!0,children:"Start NDN Stack"})," "]}),Object(p.jsxs)(b.a,{style:{flexGrow:"2"},children:[Object(p.jsx)(x.a,{variant:"secondary",onClick:function(){Q(!0),l.a.get("http://localhost:3001/stop"),setTimeout((function(){Q(!1)}),2e3)},block:!0,children:"Stop NDN Stack"})," "]})]}),B?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(j.a,{className:"pt-3",children:[Object(p.jsx)(b.a,{style:{border:"3px solid white"},children:Object(p.jsxs)("strong",{children:[D," Entry"]})}),Object(p.jsx)(b.a,{style:{border:"3px solid white"},children:Object(p.jsxs)("strong",{children:[D," Data"]})})]}),Object(p.jsxs)(j.a,{children:[Object(p.jsx)(b.a,{style:{border:"3px solid white",height:"150px"},children:"/switch1/video1/v1"}),Object(p.jsx)(b.a,{style:{border:"3px solid white",height:"150px"},children:"Cached content at Node 1"})]})]}):null]}),N?Object(p.jsx)(_,{onClickCmd:Z}):Object(p.jsx)(h.a,{style:{marginTop:"5px",position:"relative"},children:Object(p.jsx)(h.a.Control,{as:"textarea",rows:7,disabled:!0,value:m})})]})},V=n(43),G=(n(212),function(){return Object(a.useEffect)((function(){document.title="Itillah Portal"}),[]),Object(p.jsxs)("div",{className:"TitlePage",children:[Object(p.jsx)("div",{id:"particles-js"}),Object(p.jsx)("div",{class:"bg",children:Object(p.jsx)("h4",{"data-testid":"portal-name",children:"ITTILAH PORTAL"})}),Object(p.jsxs)(u.a,{children:[Object(p.jsx)(j.a,{style:{marginRight:"15px",borderRight:"3px solid grey"},children:Object(p.jsx)(b.a,{children:Object(p.jsx)(V.b,{class:"btn",to:"/login",style:{textDecoration:"none"},children:"Login"})})}),Object(p.jsx)(j.a,{children:Object(p.jsx)(b.a,{children:Object(p.jsx)(V.b,{class:"btn",to:"/signup",style:{textDecoration:"none"},children:"Sign Up"})})})]})]})}),K=function(e){var t=e.setAuthorized;Object(a.useEffect)((function(){document.title="Sign Up"}),[]);var n=Object(a.useState)({username:"",password:""}),o=Object(r.a)(n,2),c=o[0],s=o[1],i=Object(d.g)();return Object(p.jsx)("div",{style:{display:"flex",alignItems:"center",width:"100%",height:"100vh"},children:Object(p.jsx)(u.a,{children:Object(p.jsxs)("div",{style:{border:"2px solid black",padding:"5px"},children:[Object(p.jsx)(j.a,{className:"justify-content-center",children:Object(p.jsx)("h1",{style:{fontFamily:"Roboto"},children:"Sign Up"})}),Object(p.jsx)(j.a,{className:"justify-content-center",children:Object(p.jsx)(b.a,{xs:"auto",children:Object(p.jsxs)(h.a,{className:"justify-content-center",children:[Object(p.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(h.a.Label,{children:"New Username"}),Object(p.jsx)(h.a.Control,{value:c.username,onChange:function(e){s({username:e.target.value,password:c.password})},"data-testid":"login-form-username",type:"text"}),Object(p.jsx)(h.a.Text,{className:"text-muted",children:"Never share your username or password with anyone else."})]}),Object(p.jsxs)(h.a.Group,{controlId:"formBasicPassword",children:[Object(p.jsx)(h.a.Label,{children:"New Password"}),Object(p.jsx)(h.a.Control,{value:c.password,onChange:function(e){s({username:c.username,password:e.target.value})},"data-testid":"login-form-password",type:"password"})]}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(x.a,{variant:"primary",onClick:function(){!function(){if(""!==c.username&&c.username.length<=10){console.log(c.username,c.password);var e={username:c.username,password:c.password};console.log(e),l.a.post("http://localhost:3001/signup",e).then((function(e){t(!0),i.push("/build")})).catch((function(e){window.alert(e)})),alert("New User Added!")}else alert("Username or Password is not appropriate!")}()},children:"Sign Up"})})]})})})]})})})},Z=n.p+"static/media/router.ebf4888b.svg",J=n(172),W=n.n(J),Y=function(){return Object(p.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},children:Object(p.jsx)(W.a,{params:{particles:{number:{value:50,density:{enable:!0,value_area:1e3}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:1,color:"#03bcf4"},polygon:{nb_sides:4},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:.5},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"attract"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:100,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{background_color:"#000"}}})})};var Q=function(){var e=Object(a.useState)({nodes:[{id:"node1"},{id:"node2"}],links:[{source:"node1",target:"node2"}]}),t=Object(r.a)(e,2),n=t[0],o=t[1],c={nodeHighlightBehavior:!0,width:window.innerWidth,node:{color:"lightgreen",size:700,fontSize:12,highlightFontSize:15,highlightStrokeColor:"blue",svg:Z},link:{highlightColor:"lightblue",color:"blue"}},s=Object(a.useState)(!1),i=Object(r.a)(s,2),u=i[0],j=i[1];return Object(p.jsxs)("div",{style:{backgroundColor:"#000",color:"white",overflowY:"scroll"},children:[Object(p.jsx)(Y,{}),Object(p.jsx)(V.a,{children:Object(p.jsxs)(d.d,{children:[Object(p.jsxs)(d.b,{path:"/view",children:[u?Object(p.jsx)(z,{topoData:n,graphConfig:c}):Object(p.jsx)(d.a,{to:"/login"}),";"]}),Object(p.jsx)(d.b,{path:"/build",children:u?Object(p.jsx)(F,{topoData:n,setTopoData:o,createTopology:function(e){l.a.post("http://localhost:3001/topology",n).then((function(){console.log("Data send to backend"),e.push("/view")})).catch((function(e){window.alert(e)}))},graphConfig:c}):Object(p.jsx)(d.a,{to:"/login"})}),Object(p.jsx)(d.b,{path:"/login",children:Object(p.jsx)(O,{setAuthorized:j})}),Object(p.jsx)(d.b,{path:"/signup",children:Object(p.jsx)(K,{setAuthorized:j})}),Object(p.jsx)(d.b,{path:"/",children:Object(p.jsx)(G,{})})]})})]})};n(447);s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(Q,{})}),document.getElementById("root"))}},[[449,1,2]]]);
//# sourceMappingURL=main.42adc291.chunk.js.map