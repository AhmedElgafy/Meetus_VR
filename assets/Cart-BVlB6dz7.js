import{r as x,j as e,S as j}from"./index-BYF6Ch0l.js";class u extends x.Component{constructor(t){super(t),console.log("i am here")}render(){return e.jsx(e.Fragment,{children:e.jsx(j.Consumer,{children:t=>{const r=t.cartItems,d={name:"",price:0,image:"",id:0,qty:0};let{name:a,price:n,image:c,id:i,qty:l}=d;r&&r.length&&({name:a,price:n,image:c,id:i,qty:l}=r[0]);const{cartVisibility:o,toggleCartVisibility:m,removeFromCart:h}=t,s={name:a,image:c,price:n,qty:l,id:i};return e.jsx("div",{className:"cart",style:{display:o?"block":"none"},children:e.jsxs("div",{className:"cart-header",children:[e.jsx("div",{style:{alignSelf:"end"},children:e.jsx("img",{style:{cursor:"pointer"},onClick:()=>o&&m(),src:"Group 1440.svg",alt:""})}),e.jsx("h1",{style:{alignSelf:"center"},children:"My Cart"}),e.jsx("h3",{children:"Cart Summary"}),r&&r.length?e.jsxs("div",{className:"cart-card",children:[e.jsx("div",{className:"productImage",children:e.jsx("img",{src:s.image,alt:""})}),e.jsxs("div",{className:"productInfo",children:[e.jsx("h4",{children:s.name}),e.jsxs("h6",{children:["Quantity: ",s.qty]}),e.jsxs("h4",{children:[s.price.toLocaleString("en-US")," LE"]})]}),e.jsx("button",{style:{cursor:"pointer"},className:"rm-btn",onClick:()=>{console.log("hi"),h(s.id)},children:"Remove"})]}):e.jsx("p",{children:"There is no product added"}),e.jsxs("h2",{className:"Total",children:["Total:"," ",(s.price*s.qty).toLocaleString("en-US")," LE"]}),e.jsxs("div",{className:"ending-btns",children:[e.jsx("button",{className:"review-btn",children:"Review Cart"}),e.jsx("button",{className:"complete-btn",children:"Complete Checkout"})]})]})})}})})}}export{u as default};