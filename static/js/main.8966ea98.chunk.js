(this["webpackJsonpshopping-list-react-app-complete"]=this["webpackJsonpshopping-list-react-app-complete"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),l=a.n(r),i=(a(91),a(28)),c=a(29),s=a(23),m=a(34),d=a(33),p=(a(92),a(137)),u=a(155),h=a(157),g=Object(p.a)((function(e){return{input:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingBottom:e.spacing(.75)},textField:{marginTop:e.spacing(.25)}}})),f=function(e){var t=e.formChange,a=e.formSubmit,r=e.formField,l=e.changeAutocomplete,i=e.closeAutocomplete,c=e.autocompleteIsOpen,s=e.checkFormField,m=e.groceriesTemplate,d=g();return o.a.createElement(n.Fragment,null,o.a.createElement("form",{noValidate:!0,onSubmit:a},o.a.createElement(h.a,{id:"autocomplete-selector",freeSolo:!0,autoComplete:!0,autoHighlight:!0,clearOnEscape:!0,autoSelect:!0,variant:"outlined",className:d.input,inputValue:r,open:c,onOpen:s,onClose:i,onChange:l,options:m.map((function(e){return e.name})),renderInput:function(e){return o.a.createElement(u.a,Object.assign({},e,{onChange:t,freeSolo:!0,value:r,label:"Add item",fullWidth:!0,autoFocus:!0,margin:"normal",id:"searchfield",className:d.textField}))}})))},v=a(15),E=a(104),b=a(144),y=a(48),w=a(145),C=a(103),k=a(76),O=a(158),I=a(146),x=a(105),S=Object(p.a)((function(e){return{listItem:{padding:0},listItemText:{marginTop:0,marginBottom:0,height:e.spacing(8),display:"flex",flexDirection:"column",paddingLeft:e.spacing(2),justifyContent:"center"},listItemTextPrimary:{fontSize:e.spacing(1.85),color:e.palette.text.primary},listItemTextSecondary:{fontSize:e.spacing(1.6),color:e.palette.text.secondary},completedButton:{color:e.palette.primary.main},modal:{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:e.spacing(2),marginRight:e.spacing(2)},paper:{backgroundColor:e.palette.background.paper,borderRadius:e.spacing(.5),boxShadow:e.shadows[5],padding:e.spacing(2),width:"100%",maxWidth:500}}})),j=function(e){var t=e.index,a=e.item,r=e.modalClose,l=e.modalOpen,i=e.deleteItem,c=e.completeItem,s=e.itemNotes,m=e.onAddNote,d=Object(n.useState)(!1),p=Object(v.a)(d,2),h=p[0],g=p[1],f=S();return o.a.createElement(E.a,{component:"li",className:f.listItem,button:!0,key:t},o.a.createElement(b.a,{disableTypography:!0,onClick:function(){g(!0),l(a)},className:f.listItemText},o.a.createElement(y.a,{className:f.listItemTextPrimary},a.name),o.a.createElement(y.a,{className:f.listItemTextSecondary},a.note)),o.a.createElement(w.a,{onClick:i.bind(void 0,a,"items")},o.a.createElement(C.a,{"aria-label":"trash"},o.a.createElement(k.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))),o.a.createElement(w.a,{onClick:c.bind(void 0,a)},o.a.createElement(C.a,{"aria-label":"item acquired"},o.a.createElement(k.a,{className:f.completedButton},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o.a.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}))))),o.a.createElement(O.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:f.modal,open:h,onClose:function(){g(!1),r(a)},closeAfterTransition:!0,BackdropComponent:I.a,BackdropProps:{timeout:500}},o.a.createElement(x.a,{in:h},o.a.createElement("div",{className:f.paper},o.a.createElement(y.a,{variant:"h5",paragraph:!0,color:"textPrimary"},a.name),o.a.createElement("form",null,o.a.createElement(u.a,{id:"standard-adornment-weight",multiline:!0,type:"text",variant:"filled",rows:"2",fullWidth:!0,value:s,placeholder:"Enter note",onChange:m,"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"add note"}}))))))},N=a(143),T=Object(p.a)((function(e){return{list:{paddingTop:0,paddingBottom:0}}})),z=function(e){var t=e.modalClose,a=e.modalItemName,n=e.modalOpen,r=e.deleteItem,l=e.completeItem,i=e.modalIsOpen,c=e.itemNotes,s=e.onAddNote,m=e.groceryItems,d=e.category,p=T(),u=function(e,t){var a=e.name.toUpperCase(),n=t.name.toUpperCase(),o=0;return a>n?o=1:a<n&&(o=-1),o},h=function(){var e=m.map((function(e){return e}));return"Order Entered"===d?e:"Alphabetical"===d?e.sort(u):void 0}().map((function(e,m){return o.a.createElement(j,{key:m,item:e,modalClose:t,modalItemName:a,modalOpen:n,deleteItem:r,completeItem:l,modalIsOpen:i,itemNotes:c,onAddNote:s})}));return o.a.createElement(N.a,{"aria-label":"grocery list category",className:p.list},h)},F=a(72),A={stores:[{storeName:"Alphabetical"},{storeName:"Order Entered"},{storeName:"Fresh Thyme",storeCategories:[{storeOrder:1,category:"Produce",items:["Apple","Apples","Banana","Bananas","Grapes","Clementines","Orange","Oranges"]},{storeOrder:2,category:"Bulk Foods",items:["Oatmeal","Almonds"]},{storeOrder:3,category:"Fridge",items:["Orange Juice","Milk","Almond Milk","Sausages","Tofu"]},{storeOrder:4,category:"Uncategorized Items",items:[]}]},{storeName:"Kroger Frandor",storeCategories:[{storeOrder:1,category:"Produce",items:["Apple","Apples","Banana","Bananas","Grapes"]},{storeOrder:2,category:"Uncategorized Items",items:[]}]}]},L=Object(p.a)((function(e){return{categoryTitle:{borderTop:"1px solid #dadce0",lineHeight:"2em",marginLeft:e.spacing(2),marginRight:e.spacing(2),paddingTop:e.spacing(2.25),paddingBottom:e.spacing(2.2),textAlign:"left",fontWeight:"700",fontSize:e.spacing(1.8125),textTransform:"uppercase",color:e.palette.text.secondary},list:{paddingTop:0,paddingBottom:0},"@global":{"li > p:nth-of-type(1)":{borderTop:"0px"}}}})),M=function(e){var t=e.category,a=e.modalItemName,r=e.itemNotes,l=e.groceryItems,i=e.completeItem,c=e.deleteItem,s=e.onAddNote,m=e.modalClose,d=e.modalOpen,p=e.modalIsOpen,u=L(),h=function(e,t){var a,n=Object(F.a)(e);try{for(n.s();!(a=n.n()).done;)for(var o=a.value,r=0;r<o.items.length;r++)if(o.items[r]&&t&&o.items[r].toLowerCase()===t.name.toLowerCase()){var l=[];return l.push({storeOrder:o.storeOrder,category:o.category,name:t.name}),l}}catch(i){n.e(i)}finally{n.f()}},g=function(e,t){for(var a=e[0].storeOrder,n=0;n<t.length;n++)if(t[n].storeOrder===a)return t[n].storeOrder},f=function(){var e=A.stores.findIndex((function(e,a){return e.storeName===t})),a=A.stores[e],n=l.map((function(e){return e})),o=function e(t){var a,n,o;if("object"!==typeof t||null===t)return t;for(o in a=Array.isArray(t)?[]:{},t)n=t[o],a[o]="items"===o?a[o]=[]:"object"===typeof n&&null!==n&&"items"!==o?e(n):n;return a}(a);for(var r in n){var i=h(a.storeCategories,n[r]);if(void 0!==i){var c=g(i,a.storeCategories);for(var s in o.storeCategories)o.storeCategories[s].storeOrder===c&&o.storeCategories[s].items.push(n[r])}else{var m=o.storeCategories.find((function(e){return"Uncategorized Items"===e.category}));n[r].activatedSnackbarOnce||(n[r].activatedSnackbarOnce=!0),m.items.push(n[r])}}return o}().storeCategories.map((function(e,t){return o.a.createElement(n.Fragment,{key:t},e.items.length>0?o.a.createElement(y.a,{key:t,className:u.categoryTitle},e.category):null,e.items.map((function(e,t){return o.a.createElement(j,{key:t,item:e,modalClose:m,modalItemName:a,modalOpen:d,deleteItem:c,completeItem:i,modalIsOpen:p,itemNotes:r,onAddNote:s})})))}));return o.a.createElement(N.a,{"aria-label":"grocery list category",className:u.list},f)},B=a(147),H=a(160);function D(e){return o.a.createElement(B.a,Object.assign({},e,{direction:"up"}))}var R=function(){var e,t=o.a.useState(!0),a=Object(v.a)(t,2),n=a[0],r=a[1],l=o.a.useState(void 0),i=Object(v.a)(l,2),c=i[0],s=i[1];return o.a.createElement("div",null,o.a.createElement(H.a,{open:n,onEnter:(e=D,function(){s((function(){return e})),r(n)}),onClose:function(e,t){if("clickaway"===t)return r(!1);r(!1)},TransitionComponent:c,autoHideDuration:4e3,message:"Added item is uncategorized."}))},P=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).fireUncategorizedSnackbar=function(){n.setState({snackbarIsOpen:!0}),setTimeout((function(){n.setState({snackbarIsOpen:!1})}),4500)},n.state={snackbarIsOpen:!1},n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.props.items[this.props.items.length-1];e.modalIsOpen===this.props.modalIsOpen&&void 0!==a&&e.items!==this.props.items&&!0===a.activatedSnackbarOnce&&this.fireUncategorizedSnackbar()}},{key:"render",value:function(){var e=Object.assign({},this.props),t=this.props,a=t.category,r=t.groceryItems,l=this.state.snackbarIsOpen;return o.a.createElement(n.Fragment,null,r.length>0?"Order Entered"===a||"Alphabetical"===a?o.a.createElement(z,e):o.a.createElement(M,e):null,l?o.a.createElement(R,null):null)}}]),a}(n.Component),W=(a(97),a(148)),V=a(74),U=a(149),G=Object(p.a)((function(e){return{delOrRecoverMenu:{marginRight:e.spacing(-1)},menuItem:{color:e.palette.text.secondary,display:"flex",paddingTop:e.spacing(1.5),paddingBottom:e.spacing(1.5),fontSize:e.spacing(1.75)}}})),J=function(e){var t=e.deleteallcompleted,a=e.recoverallcompleted,r=G(),l=o.a.useState(null),i=Object(v.a)(l,2),c=i[0],s=i[1],m=function(){s(null)};return o.a.createElement(n.Fragment,null,o.a.createElement(W.a,{"aria-label":"Menu",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:o.a.createElement(C.a,{disableFocusRipple:!0,size:"medium",color:"default","aria-haspopup":"true","aria-controls":"delete-recover-menu","aria-label":"menu to delete or recover all items",onClick:function(e){s(e.currentTarget)},className:r.delOrRecoverMenu},o.a.createElement(k.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -1 19 21",width:"19px",height:"19px"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}))))}),o.a.createElement(V.a,{id:"delete-recover-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:m},o.a.createElement(U.a,{className:r.menuItem,onClick:function(){m(),a()}},"Uncheck all items"),o.a.createElement(U.a,{className:r.menuItem,onClick:function(){m(),t()}},"Delete all checked items")))},q=a(161),K=a(156),Y=a(150),$=a(151),Q=Object(p.a)((function(e){return{root:{width:"100%"},panel:{boxShadow:"none",background:e.palette.background.default},boxDisplay:{display:"flex",height:e.spacing(8)},summary:{padding:"0 16px 0 0",flexGrow:1},details:{padding:"0",textDecoration:"line-through",textDecorationColor:e.palette.text.secondary,width:"100%"},heading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,marginLeft:e.spacing(3)},list:{width:"100%"},listItem:{paddingRight:"0"}}})),X=function(e){var t,a=e.completedItems,n=e.deleteItem,r=e.recoverItem,l=e.deleteallcompleted,i=e.recoverallcompleted,c=Q(),s=o.a.useState(!1),m=Object(v.a)(s,2),d=m[0],p=m[1],u=a.map((function(e,t){return o.a.createElement(E.a,{component:"li",button:!0,key:t,className:c.listItem},o.a.createElement(b.a,{secondary:e.name}),o.a.createElement(w.a,{onClick:n.bind(void 0,e,"completedItems")},o.a.createElement(C.a,{"aria-label":"trash item"},o.a.createElement(k.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))),o.a.createElement(w.a,{onClick:r.bind(void 0,e)},o.a.createElement(C.a,{"area-label":"recover item"},o.a.createElement(k.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}))))))}));return 0===a.length?null:o.a.createElement("div",{className:c.root},o.a.createElement(q.a,{className:c.panel,expanded:"panel1"===d,onChange:(t="panel1",function(e,a){p(!!a&&t)})},o.a.createElement(K.a,{className:c.boxDisplay},o.a.createElement(Y.a,{expandIcon:o.a.createElement(k.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),"aria-controls":"panel1bh-content",id:"panel1bh-header",className:c.summary},o.a.createElement(y.a,{className:c.heading},a.length," checked off")),o.a.createElement(J,{deleteallcompleted:l,recoverallcompleted:i})),o.a.createElement($.a,{className:c.details},o.a.createElement(N.a,{"aria-label":"completed items",className:c.list},u))))},Z=Object(p.a)((function(e){return{icon:{color:e.palette.primary.dark,backgroundColor:e.palette.primary.light,borderRadius:100,padding:e.spacing(5.5),fontSize:e.spacing(18)},textDark:{display:"block",marginTop:e.spacing(4),color:e.palette.text.primary,maxWidth:e.spacing(35),fontSize:e.spacing(2),fontWeight:600},textLight:{display:"block",color:e.palette.text.secondary,maxWidth:e.spacing(35),fontSize:e.spacing(1.7)}}})),_=function(){var e=Z();return o.a.createElement(n.Fragment,null,o.a.createElement(K.a,{p:6,display:"flex",flexDirection:"column",alignItems:"center"},o.a.createElement(k.a,{className:e.icon},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),o.a.createElement(y.a,null,o.a.createElement("span",{className:e.textDark},"Your list is empty"),o.a.createElement("br",null),o.a.createElement("span",{className:e.textLight},"Start adding things you need to make sure nothing is left. ","Pick your store to modify the layout of categories."))))},ee=a(140),te=a(152),ae=Object(p.a)((function(e){return{paper:{background:e.palette.background.paper}}})),ne=function(e){var t=ae();return o.a.createElement(n.Fragment,null,o.a.createElement(ee.a,{elevation:4,square:!0,className:t.paper},o.a.createElement(te.a,{maxWidth:"sm"},o.a.createElement(K.a,{display:"flex",alignItems:"center",height:64},e.children))))},oe=(a(98),function(){return o.a.createElement(K.a,{fontSize:20,flexGrow:1,textAlign:"left",color:"text.primary"},o.a.createElement("h1",{class:"App-title"},"My Shopping List"))}),re=Object(p.a)((function(e){return{menuItem:{color:e.palette.text.secondary,display:"flex",paddingTop:e.spacing(1.5),paddingBottom:e.spacing(1.5)},menuSVG:{flexBasis:"20%",paddingRight:e.spacing(1.5),color:e.palette.text.secondary},menuTypography:{fontSize:e.spacing(1.75)}}})),le=function(e){var t=e.handleClose,a=e.category,r=e.onCategoryChange,l=re(),i=A.stores.map((function(e,n){return o.a.createElement(U.a,{className:l.menuItem,key:n,onClick:function(){r(e.storeName),t()}},o.a.createElement(k.a,{className:l.menuSVG,fontSize:"small"},a===e.storeName?o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"false",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})):o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",style:{display:"none"},height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}))),o.a.createElement(y.a,{className:l.menuTypography},e.storeName))}));return o.a.createElement(n.Fragment,null,i)},ie=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClick=function(e){n.setState({anchorEl:e.currentTarget})},n.handleClose=function(){n.setState({anchorEl:null})},n.state={anchorEl:null},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.category,t=this.props.onCategoryChange,a=this.state.anchorEl;return o.a.createElement(n.Fragment,null,o.a.createElement(C.a,{disableFocusRipple:!0,size:"medium","aria-label":"pick category","aria-haspopup":"true","aria-controls":"category-menu",onClick:this.handleClick,color:"primary"},o.a.createElement(k.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))),o.a.createElement(V.a,{id:"category-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:this.handleClose,value:e},o.a.createElement(K.a,{width:200},o.a.createElement(le,{onCategoryChange:t,category:e,handleClose:this.handleClose}))))}}]),a}(n.Component),ce=a(153),se=a(73);var me={lightTheme:Object(se.a)({typography:{fontFamily:["'Telex'","sans-serif"].join(",")},palette:{type:"light",primary:{main:"#0040cb",light:"#e7e9fa",dark:"#002bb3",contrastText:"#fff"},secondary:{main:"#cb0040",light:"#fce2e7",dark:"#a3003c",contrastText:"#fff"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.70)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},background:{default:"#fafafa"}},spacing:8}),darkTheme:Object(se.a)({typography:{fontFamily:["'Telex'","sans-serif"].join(",")},palette:{type:"dark",primary:{main:"#c3c8f3",light:"#e6e8fa",dark:"#8a94d4",contrastText:"#fff"},secondary:{main:"#f7b6c3",light:"#fce2e7",dark:"#f1879c"},background:{paper:"#1C2A35",default:"#17242C"}},spacing:8})},de=o.a.createContext((function(e){})),pe=function(e){var t=Object(n.useState)(window.localStorage.getItem("theme")||"lightTheme"),a=Object(v.a)(t,2),r=a[0],l=a[1];Object(n.useEffect)((function(){window.localStorage.setItem("theme",r)}),[r]);var i=function(e){return me[e]}(r);return o.a.createElement(de.Provider,{value:l},o.a.createElement(ce.a,{theme:Object(se.a)(i)},e.children))},ue=function(){var e=Object(n.useState)(localStorage.getItem("theme")||"LightTheme"),t=Object(v.a)(e,2),a=t[0],r=t[1],l=Object(n.useContext)(de),i=function(){r("lightTheme"===a?"darkTheme":"lightTheme")};return o.a.useEffect((function(){l(a)})),o.a.createElement(de.Consumer,null,(function(){return o.a.createElement(C.a,{disableFocusRipple:!0,size:"medium",color:"primary.main","aria-label":"toggle between dark and light modes",onClick:i},o.a.createElement(k.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"}))))}))},he=a(159),ge=(a(99),Object(p.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,borderRadius:e.spacing(.5),boxShadow:e.shadows[5],padding:e.spacing(2),width:"100%",maxWidth:375},modalTitle:{marginTop:0},listItem:{height:e.spacing(5.5)}}}))),fe=function(e){var t=e.items,a=e.faveCheckChildElement,r=e.favoriteItems,l=ge(),i=o.a.useState(!1),c=Object(v.a)(i,2),s=c[0],m=c[1],d=r.map((function(e,t){return o.a.createElement(E.a,{dense:!0,divider:!0,key:t,className:l.listItem},o.a.createElement(b.a,{primary:e.name}),o.a.createElement(w.a,null,o.a.createElement(he.a,{checked:e.isChecked,key:e.id,value:e.name,onClick:a,inputProps:{"aria-label":"uncontrolled-checkbox"}})))}));return o.a.createElement(n.Fragment,null,o.a.createElement(n.Fragment,null,o.a.createElement(C.a,{disableFocusRipple:!0,size:"medium",color:"default","aria-label":"select favorite items",onClick:function(e){var a=new Set(t.map((function(e){return e.name.toLowerCase()})));r.forEach((function(e){return e.isChecked&&!a.has(e.name.toLowerCase())?e.isChecked=!1:!e.isChecked&&a.has(e.name.toLowerCase())?e.isChecked=!0:void 0})),m(!0)}},o.a.createElement(k.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))),o.a.createElement(n.Fragment,null,o.a.createElement(O.a,{"aria-labelledby":"favorite items","aria-describedby":"pick your top favorite items",className:l.modal,open:s,onClose:function(e,t){if("backdropClick"===t)return m(!1);m(!1)},closeAfterTransition:!0,BackdropComponent:I.a,BackdropProps:{timeout:500}},o.a.createElement(x.a,{in:s},o.a.createElement("div",{className:l.paper+" Modal-dimensions"},o.a.createElement("h2",{id:"transition-modal-title",className:l.modalTitle},"Top 10 Favorite Items"),o.a.createElement(N.a,{dense:!0,disablePadding:!0},d))))))},ve=function(e){return o.a.createElement("div",{style:{left:"0",position:"fixed",width:"100vw",top:"0",zIndex:"100"}},e.children)},Ee=a(5),be=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(c.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.props.classes;return this.state.hasError?o.a.createElement(n.Fragment,null,o.a.createElement(K.a,{className:e.background,height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},o.a.createElement(k.a,{className:e.icon},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})),"            "),o.a.createElement(y.a,{variant:"h1",className:e.textDark},"Ooops, something broke in the app!"))):this.props.children}}]),a}(n.Component),ye=Object(Ee.a)((function(e){return{background:{background:e.palette.background.default},icon:{color:e.palette.secondary.main,fontSize:e.spacing(25)},textDark:{marginTop:e.spacing(3),color:e.palette.secondary.main,fontSize:e.spacing(3),fontWeight:600}}}))(be),we=(a(100),Object(p.a)((function(e){return{background:{width:"100%",height:"100%",background:e.palette.primary.dark,position:"absolute"}}}))),Ce=function(){var e=we();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:e.background},o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"bear"},o.a.createElement("div",{class:"head"},o.a.createElement("div",{class:"head-copy"}),o.a.createElement("div",{class:"left-ear"},o.a.createElement("div",{class:"inner-ear"})),o.a.createElement("div",{class:"right-ear"},o.a.createElement("div",{class:"inner-ear"})),o.a.createElement("div",{class:"left-eye"},o.a.createElement("div",{class:"left-pupil"})),o.a.createElement("div",{class:"right-eye"},o.a.createElement("div",{class:"right-pupil"})),o.a.createElement("div",{class:"snout"},o.a.createElement("div",{class:"nose"}),o.a.createElement("div",{class:"upper-lip"}),o.a.createElement("div",{class:"lip-left"}),o.a.createElement("div",{class:"lip-right"}))),o.a.createElement("div",{class:"torso"},o.a.createElement("div",{class:"right-arm"},o.a.createElement("div",{class:"claws"})),o.a.createElement("div",{class:"left-arm"},o.a.createElement("div",{class:"claws"}))),o.a.createElement("div",{class:"legs"},o.a.createElement("div",{class:"right-leg"},o.a.createElement("div",{class:"toes"})),o.a.createElement("div",{class:"left-leg"},o.a.createElement("div",{class:"toes"})))),o.a.createElement("div",{class:"plumes"},o.a.createElement("div",{class:"plume-1"}),o.a.createElement("div",{class:"plume-2"}),o.a.createElement("div",{class:"plume-3"}),o.a.createElement("div",{class:"plume-4"}),o.a.createElement("div",{class:"plume-5"})),o.a.createElement("div",{class:"shopping-cart"},o.a.createElement("div",{class:"handle"}),o.a.createElement("div",{class:"back"}),o.a.createElement("div",{class:"body-top"}),o.a.createElement("div",{class:"body-front"}),o.a.createElement("div",{class:"body-bottom"}),o.a.createElement("div",{class:"body-vertical-stripes"}),o.a.createElement("div",{class:"body-horizontal-stripes"}),o.a.createElement("div",{class:"body-to-base"}),o.a.createElement("div",{class:"base-curve"}),o.a.createElement("div",{class:"base-bottom"}),o.a.createElement("div",{class:"wheels"},o.a.createElement("div",{class:"back-wheel"},o.a.createElement("div",{class:"wheel-inner"})),o.a.createElement("div",{class:"front-wheel"},o.a.createElement("div",{class:"wheel-inner"})))),o.a.createElement("div",{class:"fumes"},o.a.createElement("div",{class:"fume-1"}),o.a.createElement("div",{class:"fume-2"}),o.a.createElement("div",{class:"fume-3"}),o.a.createElement("div",{class:"fume-4"}),o.a.createElement("div",{class:"fume-5"}),o.a.createElement("div",{class:"fume-6"})),o.a.createElement("div",{class:"text"},"Get ready to zoom along while I fetch your lists!"))))},ke=Object(p.a)((function(e){return{message:{color:e.palette.text.secondary,fontSize:e.spacing(2),marginTop:e.spacing(8)}}})),Oe=function(){var e=ke();return o.a.createElement("h1",{className:e.message},"Reloading lists...")},Ie=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).addToList=function(e){fetch("http://localhost:3000/additem",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e})}).then((function(e){return e.json()})).then((function(e){return n.setState({items:e.items})}))},n.onFormChange=function(e){n.setState({formField:e.target.value})},n.onChangeAutocomplete=function(e,t,a){if("blur"===a)return n.setState({formField:""}),void n.setState({autocompleteIsOpen:!1});null!==t&&(n.addToList(t),n.setState({formField:""}))},n.onCloseAutocomplete=function(e,t){"escape"!==t&&"select-option"!==t||n.setState({autocompleteIsOpen:!1})},n.autocompleteCheckFormField=function(e){""===n.state.formField?n.setState({autocompleteIsOpen:!1}):n.setState({autocompleteIsOpen:!0})},n.onAddNote=function(e){n.setState({itemNotes:e.target.value})},n.onFormSubmit=function(e){e.preventDefault(),""!==n.state.formField&&(n.addToList(n.state.formField.charAt(0).toUpperCase(0)+n.state.formField.slice(1)),n.setState({formField:""}))},n.faveCheckChildElement=function(e){var t=n.state.favoriteItems,a=new Set(n.state.items.map((function(e){return e.name.toLowerCase()})));t.forEach((function(t){t.name===e.target.value&&(t.isChecked=e.target.checked)})),t.forEach((function(e){var t=e.name.toLowerCase();e.isChecked&&!a.has(t)?n.addToList(e.name):!e.isChecked&&a.has(t)&&n.onDeleteItem(e,"items")}))},n.onCompleteItem=function(e){fetch("http://localhost:3000/completeitem",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({item:e})}).then((function(e){return e.json()})).then((function(e){n.setState({items:e.items,completedItems:e.completedItems})}))},n.onDeleteItem=function(e,t){fetch("http://localhost:3000/deleteitem",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({item:e,listName:t})}).then((function(e){return e.json()})).then((function(e){"items"===e.listName?n.setState({items:e.updatedList}):n.setState({completedItems:e.updatedList})}))},n.onRecoverItem=function(e){fetch("http://localhost:3000/recoveritem",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({item:e})}).then((function(e){return e.json()})).then((function(e){return n.setState({items:e.items,completedItems:e.completedItems})}))},n.onDeleteAllCompleted=function(){fetch("http://localhost:3000/deleteallcompleted",{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return n.setState({completedItems:e.completeditems})}))},n.onRecoverAllCompleted=function(){fetch("http://localhost:3000/recoverallcompleted",{method:"PUT",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return n.setState({items:e.items,completedItems:e.completedItems})}))},n.modalOpen=function(e){n.setState({itemNotes:e.note})},n.modalClose=function(e){fetch("http://localhost:3000/addnote",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.id,note:n.state.itemNotes})}).then((function(e){return e.json()})).then((function(e){return n.setState({items:e.items})}))},n.onCategoryChange=function(e){n.setState({category:e}),window.localStorage.setItem("category","".concat(e))},n.state={appIsLoading:window.sessionStorage.getItem("loadStatus")||"first load",items:[],completedItems:[],favoriteItems:[],groceriesTemplate:[],formField:"",category:"Fresh Thyme",itemNotes:"",autocompleteIsOpen:!1},n.onCompleteItem=n.onCompleteItem.bind(Object(s.a)(n)),n.onDeleteItem=n.onDeleteItem.bind(Object(s.a)(n)),n.onRecoverItem=n.onRecoverItem.bind(Object(s.a)(n)),n.addToList=n.addToList.bind(Object(s.a)(n)),n.modalClose=n.modalClose.bind(Object(s.a)(n)),n.modalOpen=n.modalOpen.bind(Object(s.a)(n)),n.onCloseAutocomplete=n.onCloseAutocomplete.bind(Object(s.a)(n)),n.autocompleteCheckFormField=n.autocompleteCheckFormField.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3000/").then((function(e){return e.json()})).then((function(t){return e.setState({items:t.items,completedItems:t.completedItems,favoriteItems:t.favoriteItems,groceriesTemplate:t.groceriesTemplate,category:window.localStorage.getItem("category")||"Order Entered",appIsLoading:null})})),window.sessionStorage.setItem("loadStatus","reloading")}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.autocompleteIsOpen,n=t.category,r=t.favoriteItems,l=t.formField,i=t.items,c=t.completedItems,s=t.itemNotes,m=t.groceriesTemplate,d=t.appIsLoading;return o.a.createElement("div",{className:e.app},o.a.createElement(ye,null,"first load"===d?o.a.createElement(Ce,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(ve,null,o.a.createElement(ne,null,o.a.createElement(oe,null),o.a.createElement(ue,null),o.a.createElement(ie,{category:n,onCategoryChange:this.onCategoryChange}),o.a.createElement(fe,{items:i,favoriteItems:r,faveCheckChildElement:this.faveCheckChildElement}))),o.a.createElement(K.a,{className:"Padding-box"},o.a.createElement(K.a,{className:"".concat(e.groceriesContainer," Groceries-container")},o.a.createElement(f,{formChange:this.onFormChange,formSubmit:this.onFormSubmit,formField:l,groceriesTemplate:m,autocompleteSelectValue:this.onAutocompleteSelectValue,closeAutocomplete:this.onCloseAutocomplete,checkFormField:this.autocompleteCheckFormField,autocompleteIsOpen:a,changeAutocomplete:this.onChangeAutocomplete}),o.a.createElement(P,{category:n,itemNotes:s,modalClose:this.modalClose,modalOpen:this.modalOpen,onAddNote:this.onAddNote,groceryItems:i,completeItem:this.onCompleteItem,deleteItem:this.onDeleteItem,items:i})),o.a.createElement(K.a,{className:"Completed-container"},0===i.length&&0===c.length&&"reloading"!==d&&o.a.createElement(_,null),"reloading"===d&&o.a.createElement(Oe,null),o.a.createElement(X,{completedItems:c,deleteItem:this.onDeleteItem,recoverItem:this.onRecoverItem,deleteallcompleted:this.onDeleteAllCompleted,recoverallcompleted:this.onRecoverAllCompleted}))))))}}]),a}(n.Component),xe=Object(Ee.a)((function(e){return{app:{background:e.palette.background.default,textAlign:"center",height:"100%"},groceriesContainer:{background:e.palette.background.paper,borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:e.palette.divider}}}))(Ie),Se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function je(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Ne=a(154);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(pe,null,o.a.createElement(Ne.a,null),o.a.createElement(xe,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/shopping-list-react-app-complete",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/shopping-list-react-app-complete","/service-worker.js");Se?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):je(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):je(t,e)}))}}()},86:function(e,t,a){e.exports=a(101)},91:function(e,t,a){},92:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.8966ea98.chunk.js.map