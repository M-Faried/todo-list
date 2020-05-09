(this["webpackJsonptraversy-react-todo"]=this["webpackJsonptraversy-react-todo"]||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(18),l=a.n(r),c=a(4),i=a(5),s=a(7),d=a(6),u=a(12),m=a(9);function p(){return n.a.createElement("header",{style:h},n.a.createElement("h1",null,"Todo List"),n.a.createElement(u.b,{to:"/simple-todo-list",style:f},"Home")," ","|"," ",n.a.createElement(u.b,{to:"/simple-todo-list/about",style:f},"About"))}var h={backgroundColor:"rgba(0, 0, 0, 0.3)",color:"white",textAlign:"center",padding:"10px",marginBottom:"50px",borderRadius:"15px"},f={color:"white"},b=a(35),g=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={title:""},e.onTitleChange=function(t){e.setState({title:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.state.title&&(e.props.addTodo(e.state.title),e.setState({title:""}))},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex",maxWidth:"100%"}},n.a.createElement("input",{type:"text",name:"title",className:"form-input",placeholder:"Add Todo...",value:this.state.title,onChange:this.onTitleChange}),n.a.createElement("button",{type:"submit",className:"form-btn"},n.a.createElement("i",{className:"fas fa-plus-circle"})))}}]),a}(o.Component),v=(a(31),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).getTitleStyle=function(){return{textDecoration:e.props.todo.completed?"line-through":"none"}},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title,o=e.completed;return n.a.createElement("div",{className:"todo-item"},n.a.createElement("label",{className:"checkBoxContainer",style:{display:"inline"}},n.a.createElement("span",{style:this.getTitleStyle()}," ",a),n.a.createElement("input",{type:"checkbox",checked:o,onChange:this.props.toggleChecked.bind(this,t)}),n.a.createElement("span",{className:"checkmark"})),n.a.createElement("button",{onClick:this.props.deleteTodo.bind(this,t),className:"delete-btn"},n.a.createElement("i",{className:"fas fa-backspace"})))}}]),a}(o.Component)),y=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return n.a.createElement(v,{key:t.id,todo:t,toggleChecked:e.props.toggleChecked,deleteTodo:e.props.deleteTodo})}))}}]),a}(o.Component);function E(){return n.a.createElement("div",{style:k})}var k={backgroundColor:"rgba(0, 0, 0, 0.3)",width:"100%",height:"45px",borderBottomRightRadius:"15px",borderBottomLeftRadius:"15px"},O="react-todo-list-data",x=[{id:b.a(),title:"Take out the trash",completed:!1},{id:b.a(),title:"Doing Dishes",completed:!1},{id:b.a(),title:"Reading the next chapter",completed:!1}],C=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={todos:[]},e.updateSavedData=function(e){localStorage.setItem(O,JSON.stringify(e))},e.addTodo=function(t){var a=e.state.todos;a.unshift({id:b.a(),title:t,completed:!1}),e.setState({todos:a}),e.updateSavedData(a)},e.toggleChecked=function(t){var a=e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e})).sort((function(e,t){return e.completed-t.completed}));e.setState({todos:a}),e.updateSavedData(a)},e.deleteTodo=function(t){var a=e.state.todos.filter((function(e){return e.id!==t}));e.setState({todos:a}),e.updateSavedData(a)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem(O));e?(e.sort((function(e,t){return e.completed-t.completed})),this.setState({todos:e})):this.setState({todos:x})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(g,{addTodo:this.addTodo}),n.a.createElement(y,{todos:this.state.todos,toggleChecked:this.toggleChecked,deleteTodo:this.deleteTodo}),n.a.createElement(E,null))}}]),a}(o.Component);function S(){return n.a.createElement("div",{style:j},n.a.createElement("h1",null,"About"),n.a.createElement("p",null,"This is a demo application developed using React font end framework. It uses local storage for saving TODOs"),n.a.createElement("p",{style:{textAlign:"center"}},n.a.createElement("a",{href:"mailto:m.a.faried@gmail.com",target:"_blank",style:{color:"white",textDecoration:"underline"}},"Contact Developer: m.a.faried@gmail.com")))}var j={backgroundColor:"rgba(0, 0, 0, 0.3)",color:"white",borderRadius:"15px",minHeight:"300px",padding:"20px"},T=(a(32),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement(u.a,null,n.a.createElement(p,null),n.a.createElement(m.a,{from:"/",to:"/simple-todo-list"}),n.a.createElement(m.b,{exact:!0,path:"/simple-todo-list",component:C}),n.a.createElement(m.b,{path:"/simple-todo-list/about",component:S}))))}}]),a}(o.Component));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(T,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.f7329413.chunk.js.map