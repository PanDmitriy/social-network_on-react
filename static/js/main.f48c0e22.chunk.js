(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],[,,,,,,function(e,s,t){e.exports={nav:"Navbar_nav__2imOE",items:"Navbar_items__2UnO7",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE"}},,,,function(e,s,t){e.exports={content:"Dialogs_content__1VIii",dialogs:"Dialogs_dialogs__2xRSA",dialog:"Dialogs_dialog__lk_cw",active:"Dialogs_active__2sQhs"}},,function(e,s,t){e.exports={item:"Post_item__2EmvQ",header:"Post_header__QZ0aZ",message:"Post_message__2FEw-",footer:"Post_footer__3ywD1"}},function(e,s,t){e.exports={content:"UserCard_content__3e0wo",img:"UserCard_img__1r9Dw",name:"UserCard_name__3ZT9n"}},,,function(e,s,t){e.exports={added:"Posts_added__3JPVy",posts:"Posts_posts__tkALa"}},,,,,function(e,s,t){e.exports={content:"Profile_content__2wLDD",avatar:"Profile_avatar__aV4u5"}},function(e,s,t){e.exports={header:"Header_header__1VCKf"}},,function(e,s,t){e.exports={footer:"Footer_footer__1w0lV"}},function(e,s,t){e.exports={content:"Main_content__tLZOv"}},,,,,function(e,s,t){},function(e,s,t){},,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){e.exports={container:"Settings_container__1dFSD"}},function(e,s,t){"use strict";t.r(s);var a=t(1),n=t.n(a),i=t(20),c=t.n(i),o=(t(30),t(31),t(12)),r=t.n(o),d=t(0),l=function(e){var s=e.message,t=e.like;return Object(d.jsxs)("div",{className:r.a.item,children:[Object(d.jsx)("div",{className:r.a.header,children:Object(d.jsx)("img",{src:"https://w7.pngwing.com/pngs/410/341/png-transparent-business-management-document-computer-icons-menlove-law-ambulance-text-service-people.png",alt:""})}),Object(d.jsx)("div",{className:r.a.message,children:s}),Object(d.jsx)("div",{className:r.a.footer,children:Object(d.jsxs)("span",{children:["Like - ",t]})})]})},m=t(16),j=t.n(m),u=function(e){var s=e.postsData;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:j.a.added,children:["New post",Object(d.jsxs)("div",{children:[Object(d.jsx)("textarea",{}),Object(d.jsx)("button",{children:"Create"})]})]}),Object(d.jsx)("div",{className:j.a.posts,children:s.map((function(e){return Object(d.jsx)(l,{message:e.message,like:e.likesCount},e.id)}))})]})},b=t(21),g=t.n(b),x=function(e){return Object(d.jsxs)("div",{className:"".concat(g.a.content," container"),children:[Object(d.jsx)("img",{src:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",alt:""}),Object(d.jsx)(u,{postsData:e.posts})]})},p=t(22),h=t.n(p),_=function(){return Object(d.jsxs)("header",{className:h.a.header,children:[Object(d.jsx)("h3",{children:"Bubliki"}),Object(d.jsx)("img",{src:"https://www.banksandlloyd.com/wp-content/uploads/2018/10/value-connecting-icon.png",alt:""})]})},O=t(6),v=t.n(O),f=t(8),N=function(){return Object(d.jsx)("div",{className:v.a.nav,children:Object(d.jsxs)("nav",{className:v.a.items,children:[Object(d.jsx)(f.b,{to:"/profile",className:v.a.item,activeClassName:v.a.activeLink,children:"Profile"}),Object(d.jsx)(f.b,{to:"/dialogs",className:v.a.item,activeClassName:v.a.activeLink,children:"Message"}),Object(d.jsx)(f.b,{to:"/news",className:v.a.item,activeClassName:v.a.activeLink,children:"News"}),Object(d.jsx)(f.b,{to:"/music",className:v.a.item,activeClassName:v.a.activeLink,children:"Music"}),Object(d.jsx)(f.b,{to:"/settings",className:v.a.item,activeClassName:v.a.activeLink,children:"Settings"})]})})},w=t(24),k=t.n(w),C=function(){return Object(d.jsx)("footer",{className:k.a.footer,children:"Footer"})},D=t(13),P=t.n(D),L=function(){return Object(d.jsxs)("div",{className:P.a.content,children:[Object(d.jsx)("div",{className:P.a.img,children:Object(d.jsx)("img",{src:"https://www.vippng.com/png/full/68-689427_spiritual-coaching-coincides-with-the-discover-discipleship-ad.png",alt:"Foto profile"})}),Object(d.jsx)("div",{className:P.a.name,children:" Dmitriy "})]})},y=t(10),F=t.n(y),S=function(e){var s="/dialogs/".concat(e.id);return Object(d.jsx)(f.b,{to:s,activeClassName:F.a.active,className:F.a.dialog,children:e.name})},B=function(e){return Object(d.jsx)("div",{className:F.a.message,children:e.message})},H=function(e){var s=e.dialogsData,t=e.messagesData;return Object(d.jsxs)("div",{className:"".concat(F.a.content," container"),children:[Object(d.jsx)("div",{className:F.a.dialogs,children:s.map((function(e){return Object(d.jsx)(S,{name:e.name,id:e.id},e.id)}))}),Object(d.jsx)("div",{className:F.a.messanges,children:t.map((function(e){return Object(d.jsx)(B,{message:e.message},e.id)}))})]})},I=(t(38),function(){return Object(d.jsx)("div",{className:"container",children:"News"})}),M=(t(39),function(){return Object(d.jsx)("div",{className:"container",children:"Music"})}),V=(t(40),function(){return Object(d.jsx)("div",{className:"container",children:"Settings"})}),E=t(2),J=t(25),Q=t.n(J),T=function(){return Object(d.jsxs)("div",{className:"".concat(Q.a.content," container"),children:[Object(d.jsx)("h2",{children:"Welcome!"}),Object(d.jsxs)("h4",{children:["in social network ",Object(d.jsx)("em",{children:"Bubliki"}),"."]}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sit distinctio aperiam voluptates porro dolore iste alias aliquid non adipisci, quidem ipsum ea impedit natus!"})]})};var U=function(e){return Object(d.jsx)(f.a,{children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(_,{}),Object(d.jsx)(L,{}),Object(d.jsx)(N,{}),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)(E.c,{children:[Object(d.jsx)(E.a,{exact:!0,path:"/",children:Object(d.jsx)(T,{})}),Object(d.jsx)(E.a,{path:"/profile",render:function(){return Object(d.jsx)(x,{posts:e.state.profilePage.posts})}}),Object(d.jsx)(E.a,{path:"/dialogs",render:function(){return Object(d.jsx)(H,{dialogsData:e.state.messagePage.dialogs,messagesData:e.state.messagePage.messages})}}),Object(d.jsx)(E.a,{path:"/news",children:Object(d.jsx)(I,{})}),Object(d.jsx)(E.a,{path:"/music",children:Object(d.jsx)(M,{})}),Object(d.jsx)(E.a,{path:"/settings",children:Object(d.jsx)(V,{})})]})}),Object(d.jsx)(C,{})]})})},Z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(s){var t=s.getCLS,a=s.getFID,n=s.getFCP,i=s.getLCP,c=s.getTTFB;t(e),a(e),n(e),i(e),c(e)}))},A={profilePage:{posts:[{id:1,message:"Hi everyone!",likesCount:2},{id:2,message:"I is my first post",likesCount:13},{id:3,message:"Subscribe and read my posts.",likesCount:18},{id:4,message:"Has subscribe me, friend?",likesCount:15}]},messagePage:{dialogs:[{id:1,name:"Dmitriy"},{id:2,name:"Ivan"},{id:3,name:"Vova"},{id:4,name:"Daniil"},{id:5,name:"Jula"},{id:6,name:"Petr"},{id:7,name:"Timo"}],messages:[{id:1,message:"Hi!"},{id:2,message:"Hello!"},{id:3,message:"How are you?"},{id:4,message:"I am funny. Are you too?"},{id:5,message:"Yes."},{id:6,message:"Goodbay!"},{id:7,message:"Bay!"}]}};c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(U,{state:A})}),document.getElementById("root")),Z()}],[[41,1,2]]]);
//# sourceMappingURL=main.f48c0e22.chunk.js.map