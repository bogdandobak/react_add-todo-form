(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{133:function(e,t,a){e.exports=a(147)},138:function(e,t,a){},145:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(45),o=a.n(i),s=a(120),l=a(72),c=a(73),u=a(97),d=a(91),m=a(104),h=(a(138),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),p=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],b=a(5),g=a.n(b),y=a(160),f=a(161),v=r.a.memo((function(e){var t=e.user;return r.a.createElement(r.a.Fragment,null,t.name)}));v.propTypes={user:g.a.shape({name:g.a.string.isRequired}).isRequired};var S=r.a.memo((function(e){var t=e.todo;return r.a.createElement(f.a,{link:!0,header:t.title,meta:t.completed.toString(),description:r.a.createElement(v,{user:t.user})})}));S.propTypes={todo:g.a.shape({title:g.a.string.isRequired,completed:g.a.bool.isRequired,user:g.a.shape({name:g.a.string.isRequired}).isRequired}).isRequired};var w=r.a.memo((function(e){var t=e.todos;return r.a.createElement(y.a,null,t.map((function(e){return r.a.createElement(y.a.Item,{key:e.id},r.a.createElement(S,{todo:e}))})))}));w.propTypes={todos:g.a.arrayOf(g.a.shape({id:g.a.number.isRequired}))},w.defaultProps={todos:[]};var E=a(68),k=(a(145),a(159)),C=a(162),z=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={title:"",userId:0,isTitle:!1,isUser:!1},e.handleChange=function(t){var a,n=t.currentTarget,r=n.name,i=n.value;e.setState((a={},Object(E.a)(a,r,i),Object(E.a)(a,"isTitle",!0),a))},e.handleUser=function(t){var a=t.target.value;e.setState({userId:+a,isUser:!0})},e.handleSubmit=function(t){t.preventDefault();var a=e.props.handleTodo,n=e.state,r=n.title,i=n.userId;r&&i&&(e.setState({title:"",userId:0,isUser:!1,isTitle:!1}),a(r,i))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.userId,a=e.title,n=e.isUser,i=e.isTitle,o=this.props.users;return r.a.createElement(k.a,{onSubmit:this.handleSubmit,error:!0},!i&&r.a.createElement(C.a,{error:!0,header:"Action Forbidden",content:"Please enter the title!"}),!n&&r.a.createElement(C.a,{error:!0,header:"Action Forbidden",content:"Please choose a user!"}),r.a.createElement(k.a.Group,{widths:"equal"},r.a.createElement(k.a.Input,{label:"Title",placeholder:"Title",name:"title",value:a,onChange:this.handleChange,maxLength:"15"}),r.a.createElement("div",{className:"select"},r.a.createElement("select",{name:"userId",value:t,onChange:this.handleUser},r.a.createElement("option",null,"Choose a user"),o.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))))),r.a.createElement(k.a.Button,null,"Submit"))}}]),a}(r.a.Component);z.defaultProps={users:null};var P=p.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{user:h.find((function(t){return t.id===e.userId}))})}));function T(e){return h.find((function(t){return t.id===e}))}var j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={todosData:P},e.handleTodo=function(t,a){e.setState((function(e){var n={userId:a,title:t,completed:!1,id:e.todosData.length+1,user:T(a)};return{todosData:[].concat(Object(s.a)(e.todosData),[n])}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.todosData;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Add todo"),r.a.createElement(z,{handleTodo:this.handleTodo,users:h}),r.a.createElement(w,{todos:e}))}}]),a}(r.a.Component);a(146);o.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.40736576.chunk.js.map