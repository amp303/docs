import{d as r,D as n,bs as c,bi as h,m as o,bt as d,b as l,c as u,E as f}from"./entry.BeOF1QR8.js";const g=["src","alt","width","height"],p=r({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,a=n(()=>{var i;if((i=t.src)!=null&&i.startsWith("/")&&!t.src.startsWith("//")){const s=c(h(o().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return d(s,t.src)}return t.src});return(i,s)=>(l(),u("img",{src:f(a),alt:e.alt,width:e.width,height:e.height},null,8,g))}});export{p as default};
