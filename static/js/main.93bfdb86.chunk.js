(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],[,,,,,function(t,e,n){t.exports={form:"Form_form__1_l_t",inputContainer:"Form_inputContainer__31hzw",input:"Form_input__7b0GX",subtitle:"Form_subtitle__2lfck",button:"Form_button__H3Grq"}},function(t,e,n){t.exports={list:"ContactListItem_list__30JaR",item:"ContactListItem_item__3b0c0",name:"ContactListItem_name__3UPlu",button:"ContactListItem_button__14sWU",data:"ContactListItem_data__1G1U_"}},,,,,function(t,e,n){t.exports={label:"Filter_label__33Ibq",title:"Filter_title__1qEnJ",input:"Filter_input__2Qxyb"}},,,,function(t,e,n){t.exports={section:"Section_section__MTuc3",container:"Section_container__2Frc8"}},function(t,e,n){t.exports={title:"App_title__2eymL",subtitle:"App_subtitle__1fSnu"}},,function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},function(t,e,n){t.exports={list:"ContactsList_list__uzGLF"}},,,,,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a,c=n(0),s=n.n(c),i=n(9),r=n.n(i),o=n(4),u=n(3),l=n(2),b=n(7),m=n(20),j=Object(u.b)("contact/addContact"),d=Object(u.b)("contact/deleteContact"),_=n(18),p=Object(u.c)(_,(a={},Object(b.a)(a,j,(function(t,e){e.type;var n=e.payload;return t.some((function(t){return t.name.includes(n.name)}))?t:[n].concat(Object(m.a)(t))})),Object(b.a)(a,d,(function(t,e){e.type;var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),O=Object(u.b)("contact/filterContact"),f=Object(u.c)("",Object(b.a)({},O,(function(t,e){return e.payload}))),x=Object(l.b)({items:p,filter:f}),h=Object(u.a)({reducer:{contacts:x}}),C=(n(29),n(17)),N=n(33),v=n(5),y=n.n(v),F=n(1),g=function(t){t.onSubmit;var e=Object(c.useState)(""),n=Object(C.a)(e,2),a=n[0],s=n[1],i=Object(c.useState)(""),r=Object(C.a)(i,2),u=r[0],l=r[1],b=Object(o.b)(),m=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":s(a);break;case"number":l(a);break;default:return}},d=function(){s(""),l("")};return Object(F.jsxs)("form",{onSubmit:function(t){var e;t.preventDefault(),e={id:Object(N.a)(),name:a,number:u},b(j(e)),d()},className:y.a.form,children:[Object(F.jsxs)("label",{className:y.a.inputContainer,children:[Object(F.jsx)("span",{className:y.a.subtitle,children:"Name"}),Object(F.jsx)("input",{className:y.a.input,type:"text",name:"name",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:m})]}),Object(F.jsxs)("label",{className:y.a.inputContainer,children:[Object(F.jsx)("span",{className:y.a.subtitle,children:"Number"}),Object(F.jsx)("input",{className:y.a.input,type:"tel",name:"number",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:m})]}),Object(F.jsx)("button",{className:y.a.button,type:"submit"})]})},L=n(15),S=n.n(L),k=function(t){var e=t.children;return Object(F.jsx)("section",{className:S.a.section,children:Object(F.jsx)("div",{className:S.a.container,children:e})})},w=function(t){return t.contacts.filter},A=function(t){var e=function(t){return t.contacts.items}(t),n=w(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},I=n(6),z=n.n(I),J=function(t){var e=t.onDelete,n=t.name,a=t.number;return Object(F.jsxs)("li",{className:z.a.item,children:[Object(F.jsx)("button",{className:z.a.button,type:"button",onClick:e}),Object(F.jsxs)("div",{className:z.a.data,children:[Object(F.jsxs)("span",{className:z.a.name,children:[n,":"]}),Object(F.jsx)("span",{className:z.a.number,children:a})]})]})},q=n(19),G=n.n(q),D=function(){var t=Object(o.c)(A),e=Object(o.b)();return Object(F.jsx)("ul",{className:G.a.list,children:t.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(F.jsx)(J,{name:a,number:c,onDelete:function(){return e(d(n))}},n)}))})},E=n(11),M=n.n(E),U=function(){var t=Object(o.c)(w),e=Object(o.b)();return Object(F.jsxs)("label",{className:M.a.label,children:[Object(F.jsx)("span",{className:M.a.title,children:"Find contacts by name:"}),Object(F.jsx)("input",{className:M.a.input,type:"text",value:t,onChange:function(t){var n=t.target.value;return e(O(n))}})]})},Z=n(16),B=n.n(Z),H=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(k,{children:[Object(F.jsx)("h1",{className:B.a.title,children:"Phonebook"}),Object(F.jsx)(g,{})]}),Object(F.jsxs)(k,{children:[Object(F.jsx)("h2",{className:B.a.subtitle,children:"Contacts"}),Object(F.jsx)(U,{}),Object(F.jsx)(D,{})]})]})};r.a.render(Object(F.jsx)(s.a.StrictMode,{children:Object(F.jsx)(o.a,{store:h,children:Object(F.jsx)(H,{})})}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.93bfdb86.chunk.js.map