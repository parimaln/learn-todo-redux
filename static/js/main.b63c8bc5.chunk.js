(this["webpackJsonpcoding-task"]=this["webpackJsonpcoding-task"]||[]).push([[0],{138:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(13),r=n.n(a),i=(n(138),n(6)),s=n(109),d=n(59),l=d.c,u=n(49),j=n.n(u),b=n(64),h=n(60);function f(){return p.apply(this,arguments)}function p(){return(p=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=Object(h.b)("todo/fetchTodo",Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),x=Object(h.c)({name:"todo",initialState:{todos:[],status:"idle"},reducers:{increment:function(e,t){e.todos.unshift({title:t.payload,completed:!1,id:Date.now(),userId:11})},decrement:function(e,t){e.todos.forEach((function(n,o){var c;(null===(c=t.payload)||void 0===c?void 0:c.find((function(e){return e===n.id})))&&e.todos.splice(o,1)}))}},extraReducers:function(e){e.addCase(O.pending,(function(e){e.status="loading"})).addCase(O.fulfilled,(function(e,t){e.status="idle",e.todos=t.payload}))}}),m=x.actions,g=m.increment,v=m.decrement,w=function(e){return e.app.todos.filter((function(e){return!e.completed}))},y=function(e){return e.app.status},k=x.reducer,C=[{field:"id",headerName:"ID",width:150},{width:500,field:"title",headerName:"Title",editable:!0}],S=n(103),I=n(47),T=n(200),E=n(201),z=n(202),A=n(203),N=n(92),W=n(204),B=n(158),D=n(157),J=n(196),M=n(197),F=n(14),L=Object(S.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function R(){var e=L(),t=l(y),n=l(w),a=Object(d.b)(),r=Object(o.useState)(""),u=Object(i.a)(r,2),j=u[0],b=u[1],h=c.a.useState(!1),f=Object(i.a)(h,2),p=f[0],x=f[1],m=Object(o.useState)(),k=Object(i.a)(m,2),S=k[0],R=k[1];function U(){x(!1)}c.a.useEffect((function(){a(O())}),[]);return Object(F.jsxs)("div",{children:[Object(F.jsxs)("div",{style:{height:500,width:"100%"},children:[Object(F.jsxs)("div",{style:{margin:"20px"},children:[Object(F.jsx)(I.a,{startIcon:Object(F.jsx)(J.a,{}),disableElevation:!0,onClick:function(){x(!0)},variant:"contained",color:"primary",children:"Add todo"}),Object(F.jsx)(I.a,{startIcon:Object(F.jsx)(M.a,{}),style:{marginLeft:"20px"},disableElevation:!0,onClick:function(){a(v(S))},disabled:!S||0===S.length,variant:"contained",color:"secondary",children:S&&S.length>1?"Complete ".concat(S.length," Todos"):"Complete Todo"})]}),Object(F.jsx)(s.a,{onSelectionModelChange:function(e){R(e)},rows:n,columns:C,pageSize:10,checkboxSelection:!0,disableSelectionOnClick:!0})]}),Object(F.jsxs)(T.a,{open:p,onClose:U,"aria-labelledby":"form-dialog-title",children:[Object(F.jsx)(E.a,{id:"form-dialog-title",children:"Add Todo"}),Object(F.jsxs)(z.a,{children:[Object(F.jsx)(A.a,{children:"Enter your life goal"}),Object(F.jsx)(N.a,{onChange:function(e){b(e.target.value)},autoFocus:!0,margin:"dense",id:"name",label:"Todo",type:"text",fullWidth:!0})]}),Object(F.jsxs)(W.a,{children:[Object(F.jsx)(I.a,{onClick:U,color:"primary",children:"Cancel"}),Object(F.jsx)(I.a,{onClick:function(){a(g(j)),x(!1),b("")},color:"primary",children:"Add"})]})]}),Object(F.jsx)(B.a,{className:e.backdrop,open:"loading"===t,children:Object(F.jsx)(D.a,{color:"inherit"})})]})}var U=function(){return Object(F.jsx)("div",{children:Object(F.jsxs)("header",{children:[Object(F.jsx)(R,{}),Object(F.jsx)("p",{children:"Use buttons to add or delete Todos"})]})})},$=Object(h.a)({reducer:{app:k}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(d.a,{store:$,children:Object(F.jsx)(U,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[147,1,2]]]);
//# sourceMappingURL=main.b63c8bc5.chunk.js.map