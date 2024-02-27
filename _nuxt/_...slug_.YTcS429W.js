import{d as S,ap as A,aq as f,b as i,c as d,n as c,E as t,aj as x,j as L,t as $,f as m,e as b,g as C,F as H,ah as R,ai as h,ak as _,ab as j,ao as le,w as O,aL as ce,l as de,am as ue,an as ee,ac as M,D as U,aM as E,at as q,y as D,aN as pe,aO as ge,r as T,H as me,aP as ye,aQ as be,u as fe,aR as ve,k as he,v as ke,aS as te,aT as xe,aU as _e,aw as ae,aV as ne,aW as we,aX as $e,s as se,aY as Ce}from"./entry.BeOF1QR8.js";import Se from"./ContentRenderer.7oBr3aWp.js";import"./ContentRendererMarkdown.vue.BBif5tU5.js";import"./MDCRenderer.6T6VPF4X.js";const Ae={wrapper:{base:"flex items-center align-center text-center w-full",horizontal:"flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},Ue={class:"flex flex-col lg:flex-row items-start gap-6"},Oe={class:"flex-1"},je=S({inheritAttrs:!1,__name:"PageHeader",props:{headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const r={wrapper:"relative border-b border-gray-200 dark:border-gray-800 py-8",container:"flex flex-col lg:flex-row lg:items-center lg:justify-between",headline:"mb-3 text-sm/6 font-semibold text-primary flex items-center gap-1.5",title:"text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",icon:{wrapper:"flex",base:"w-10 h-10 flex-shrink-0 text-primary"},links:"flex flex-wrap items-center gap-1.5 mt-4 lg:mt-0"},l=e,{ui:s,attrs:a}=A("page.header",f(l,"ui"),r,f(l,"class"),!0);return(o,n)=>{var g;const p=j,y=le;return i(),d("div",_({class:t(s).wrapper},t(a)),[e.headline||o.$slots.headline?(i(),d("div",{key:0,class:c(t(s).headline)},[x(o.$slots,"headline",{},()=>[L($(e.headline),1)])],2)):m("",!0),b("div",Ue,[e.icon||o.$slots.icon?(i(),d("div",{key:0,class:c(t(s).icon.wrapper)},[x(o.$slots,"icon",{},()=>[C(p,{name:e.icon,class:c(t(s).icon.base)},null,8,["name","class"])])],2)):m("",!0),b("div",Oe,[b("div",{class:c(t(s).container)},[b("h1",{class:c(t(s).title)},[x(o.$slots,"title",{},()=>[L($(e.title),1)])],2),(g=e.links)!=null&&g.length||o.$slots.links?(i(),d("div",{key:0,class:c(t(s).links)},[x(o.$slots,"links",{},()=>[(i(!0),d(H,null,R(e.links,(v,u)=>(i(),h(y,_({key:u},{...v,target:v.target||"_blank",color:v.color||"white"},{onClick:v.click}),null,16,["onClick"]))),128))])],2)):m("",!0)],2),e.description||o.$slots.description?(i(),d("p",{key:0,class:c(t(s).description)},[x(o.$slots,"description",{},()=>[L($(e.description),1)])],2)):m("",!0),x(o.$slots,"default")])])],16)}}}),ze=S({inheritAttrs:!1,__name:"ContentSurroundLink",props:{link:{type:Object,required:!0},icon:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const r={wrapper:"block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group",icon:{wrapper:"inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50",base:"w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary"},title:"font-medium text-gray-900 dark:text-white text-[15px] mb-1",description:"text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"},l=e,{ui:s,attrs:a}=A("docs.surround.link",f(l,"ui"),r,f(l,"class"),!0);return(o,n)=>{const p=j,y=ce;return i(),h(y,_({to:e.link._path,class:t(s).wrapper},t(a)),{default:O(()=>[e.icon||e.link.icon?(i(),d("div",{key:0,class:c(t(s).icon.wrapper)},[C(p,{name:e.icon||e.link.icon,class:c(t(s).icon.base)},null,8,["name","class"])],2)):m("",!0),b("p",{class:c(t(s).title)},$(e.link.title),3),b("p",{class:c(t(s).description)},$(e.link.description),3)]),_:1},16,["to","class"])}}}),Ie={key:1,class:"hidden sm:block"},Le=S({inheritAttrs:!1,__name:"ContentSurround",props:{surround:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const r={wrapper:"grid gap-8 sm:grid-cols-2",icon:{prev:"i-heroicons-arrow-left-20-solid",next:"i-heroicons-arrow-right-20-solid"},link:{}},l=e,{ui:s,attrs:a}=A("docs.surround",f(l,"ui"),r,f(l,"class"),!0),[o,n]=l.surround||[];return(p,y)=>{const g=ze;return i(),d("div",_({class:t(s).wrapper},t(a)),[t(o)?(i(),h(g,{key:0,link:t(o),ui:t(s).link,icon:t(s).icon.prev},null,8,["link","ui","icon"])):(i(),d("span",Ie," ")),t(n)?(i(),h(g,{key:2,link:t(n),ui:t(s).link,icon:t(s).icon.next,class:"text-right"},null,8,["link","ui","icon"])):m("",!0)],16)}}}),Pe=S({inheritAttrs:!1,__name:"PageBody",props:{prose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const r={wrapper:"mt-8 pb-24",prose:"prose prose-primary dark:prose-invert max-w-none"},l=e,{ui:s,attrs:a}=A("page.body",f(l,"ui"),r,f(l,"class"),!0);return(o,n)=>(i(),d("div",_({class:[t(s).wrapper,e.prose&&t(s).prose]},t(a)),[x(o.$slots,"default")],16))}}),B=ue(ee.ui.strategy,ee.ui.divider,Ae),Be=S({components:{UIcon:j,UAvatar:M},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>B.default.size,validator(e){return Object.keys(B.border.size.horizontal).includes(e)||Object.keys(B.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:r,attrs:l}=A("divider",f(e,"ui"),B),s=U(()=>E(q(r.value.wrapper.base,r.value.wrapper[e.orientation]),e.class)),a=U(()=>q(r.value.container.base,r.value.container[e.orientation])),o=U(()=>q(r.value.border.base,r.value.border[e.orientation],r.value.border.size[e.orientation][e.size],r.value.border.type[e.type]));return{ui:r,attrs:l,wrapperClass:s,containerClass:a,borderClass:o}}});function Te(e,r,l,s,a,o){const n=j,p=M;return i(),d("div",_({class:e.wrapperClass},e.attrs),[b("div",{class:c(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(i(),d(H,{key:0},[b("div",{class:c(e.containerClass)},[x(e.$slots,"default",{},()=>[e.label?(i(),d("span",{key:0,class:c(e.ui.label)},$(e.label),3)):e.icon?(i(),h(n,{key:1,name:e.icon,class:c(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(i(),h(p,_({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):m("",!0)])],2),b("div",{class:c(e.borderClass)},null,2)],64)):m("",!0)],16)}const He=de(Be,[["render",Te]]),Ne=S({inheritAttrs:!1,__name:"PageLinks",props:{title:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const r=D(),l=U(()=>({wrapper:"space-y-3",title:"text-sm/6 font-semibold flex items-center gap-1.5",container:"space-y-3 lg:space-y-1.5",base:"flex items-center gap-1.5",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{base:"w-5 h-5 flex-shrink-0"},avatar:{base:"self-center",size:"2xs"},externalIcon:{name:r.ui.icons.external,base:"w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"},label:"text-sm/6 font-medium relative"})),s=e,{ui:a,attrs:o}=A("page.links",f(s,"ui"),l,f(s,"class"),!0);return(n,p)=>{const y=j,g=M,v=ge;return i(),d("div",_({class:t(a).wrapper},t(o)),[e.title||n.$slots.title?(i(),d("p",{key:0,class:c(t(a).title)},[x(n.$slots,"title",{},()=>[L($(e.title),1)])],2)):m("",!0),b("div",{class:c(t(a).container)},[x(n.$slots,"default",{},()=>[(i(!0),d(H,null,R(e.links,(u,k)=>(i(),h(v,_({key:k},t(pe)(u),{class:t(a).base,"active-class":t(a).active,"inactive-class":t(a).inactive,onClick:u.click}),{default:O(()=>[u.icon?(i(),h(y,{key:0,name:u.icon,class:c(t(E)(t(a).icon.base,u.iconClass))},null,8,["name","class"])):m("",!0),u.avatar?(i(),h(g,_({key:1},{size:t(a).avatar.size,...u.avatar},{class:t(E)(t(a).avatar.base,u.avatarClass)}),null,16,["class"])):m("",!0),b("span",{class:c(t(a).label)},[L($(u.label)+" ",1),u.target==="_blank"?(i(),h(y,{key:0,name:t(a).externalIcon.name,class:c(t(a).externalIcon.base)},null,8,["name","class"])):m("",!0)],2)]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))])],2)],16)}}}),qe=()=>{const e=T(),r=T([]),l=T([]),s=o=>{o.forEach(n=>{const p=n.target.id;n.isIntersecting?r.value=[...r.value,p]:r.value=r.value.filter(y=>y!==p)})},a=o=>{o.forEach(n=>{e.value&&e.value.observe(n)})};return me(r,(o,n)=>{o.length===0?l.value=n:l.value=o}),ye(()=>e.value=new IntersectionObserver(s)),be(()=>{var o;return(o=e.value)==null?void 0:o.disconnect()}),{visibleHeadings:r,activeHeadings:l,updateHeadings:a}},Ee=["href","onClick"],re=S({inheritAttrs:!1,__name:"ContentTocLinks",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["move"],setup(e,{emit:r}){const l={wrapper:"space-y-1",base:"block text-sm/6 truncate",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",depth:"ml-3"},s=e,a=r,o=fe(),n=he(),{activeHeadings:p,updateHeadings:y}=qe(),{ui:g,attrs:v}=A("docs.toc.links",f(s,"ui"),l,f(s,"class"),!0);n.hooks.hookOnce("page:finish",()=>{y([...document.querySelectorAll("h2"),...document.querySelectorAll("h3")])});const u=k=>{const z=encodeURIComponent(k);o.push(`#${z}`),a("move",k)};return(k,z)=>{var P;const N=re;return(P=e.links)!=null&&P.length?(i(),d("ul",_({key:0,class:t(g).wrapper},t(v)),[(i(!0),d(H,null,R(e.links,w=>(i(),d("li",{key:w.text,class:c([t(g).wrapper,w.depth===3&&t(g).depth])},[b("a",{href:`#${w.id}`,class:c([t(g).base,t(p).includes(w.id)?t(g).active:t(g).inactive]),onClick:ve(V=>u(w.id),["prevent"])},$(w.text),11,Ee),w.children?(i(),h(N,{key:0,links:w.children},null,8,["links"])):m("",!0)],2))),128))],16)):m("",!0)}}}),Re=S({inheritAttrs:!1,__name:"ContentToc",props:{title:{type:String,default:"Table of Contents"},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const r=D(),l=U(()=>({wrapper:"sticky top-[--header-height] bg-background/75 backdrop-blur -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))]",container:{base:"py-3 lg:py-8 border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3",empty:"lg:py-8 space-y-3"},button:{base:"flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group",label:"font-semibold text-sm/6 truncate",trailingIcon:{name:r.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90"}},links:{}})),s=e,{ui:a,attrs:o}=A("docs.toc",f(s,"ui"),l,f(s,"class"),!0),n=T(!1);return(p,y)=>{var u,k;const g=j,v=re;return i(),d("nav",_({class:t(a).wrapper},t(o)),[b("div",{class:c([(u=e.links)!=null&&u.length?t(a).container.base:t(a).container.empty])},[x(p.$slots,"top"),(k=e.links)!=null&&k.length?(i(),d("button",{key:0,class:c(t(a).button.base),tabindex:"-1",onClick:y[0]||(y[0]=z=>n.value=!t(n))},[b("span",{class:c(t(a).button.label)},$(e.title),3),C(g,{name:t(a).button.trailingIcon.name,class:c(["lg:!hidden",[t(a).button.trailingIcon.base,t(n)?t(a).button.trailingIcon.active:t(a).button.trailingIcon.inactive]])},null,8,["name","class"])],2)):m("",!0),C(v,{links:e.links,ui:t(a).links,class:c([t(n)?"lg:block":"hidden lg:block"])},null,8,["links","ui","class"]),x(p.$slots,"bottom")],2)],16)}}}),Me={key:1},Ke=S({__name:"[...slug]",async setup(e){let r,l;const s=ke(),{toc:a,seo:o}=D(),{data:n}=([r,l]=te(()=>ne(s.path,()=>se(s.path).findOne(),"$aROEKgqrzL")),r=await r,l(),r);if(!n.value)throw xe({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:p}=([r,l]=te(()=>ne(`${s.path}-surround`,()=>se().where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(Ce(s.path)))),r=await r,l(),r);_e({title:n.value.title,ogTitle:`${n.value.title} - ${o==null?void 0:o.siteName}`,description:n.value.description,ogDescription:n.value.description});const y=U(()=>we(n.value)),g=U(()=>{var v,u,k;return[((v=a==null?void 0:a.bottom)==null?void 0:v.edit)&&{icon:"i-heroicons-pencil-square",label:"Edit this page",to:`${a.bottom.edit}/${(u=n==null?void 0:n.value)==null?void 0:u._file}`,target:"_blank"},...((k=a==null?void 0:a.bottom)==null?void 0:k.links)||[]].filter(Boolean)});return(v,u)=>{const k=je,z=Se,N=Le,P=Pe,w=He,V=Ne,oe=Re,ie=$e;return i(),h(ie,null,ae({default:O(()=>[C(k,{title:t(n).title,description:t(n).description,links:t(n).links,headline:t(y)},null,8,["title","description","links","headline"]),C(P,{prose:""},{default:O(()=>{var I;return[t(n).body?(i(),h(z,{key:0,value:t(n)},null,8,["value"])):m("",!0),(I=t(p))!=null&&I.length?(i(),d("hr",Me)):m("",!0),C(N,{surround:t(p)},null,8,["surround"])]}),_:1})]),_:2},[t(n).toc!==!1?{name:"right",fn:O(()=>{var I,F,J,K;return[C(oe,{title:(I=t(a))==null?void 0:I.title,links:(J=(F=t(n).body)==null?void 0:F.toc)==null?void 0:J.links},ae({_:2},[(K=t(a))!=null&&K.bottom?{name:"bottom",fn:O(()=>{var Q,W,X,Y,G,Z;return[b("div",{class:c(["hidden lg:block space-y-6",{"!mt-6":(X=(W=(Q=t(n).body)==null?void 0:Q.toc)==null?void 0:W.links)==null?void 0:X.length}])},[(Z=(G=(Y=t(n).body)==null?void 0:Y.toc)==null?void 0:G.links)!=null&&Z.length?(i(),h(w,{key:0,type:"dashed"})):m("",!0),C(V,{title:t(a).bottom.title,links:t(g)},null,8,["title","links"])],2)]}),key:"0"}:void 0]),1032,["title","links"])]}),key:"0"}:void 0]),1024)}}});export{Ke as default};
