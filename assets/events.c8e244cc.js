import{d as h,a as D,w as m,_ as y,o as l,b as w,e as i,f as p,u as s,F as T,r as v,n as _,t as S,C as f,g as b,p as C,h as E,i as x,P as O,c as F}from"./App.vue_vue_type_script_setup_true_lang.4b91e294.js";const d=[{date:new Date(2022,8,1),title:"Start of School Year"},{date:new Date(2022,8,12),title:"Subcom Recruitment Start"},{date:new Date(2022,8,21),title:"Subcom Recruitment Deadline"},{date:new Date(2022,8,26),title:"Subcom Interview"},{date:new Date(2022,9,11),title:"START OF Online Article Quiz Competition"},{date:new Date(2022,9,14),title:"(POSTPONED) Orientation Day"},{date:new Date(2022,9,21),title:"END OF Online Article Quiz Competition"},{date:new Date(2022,10,8),title:"START OF 1st Scientia Submissions Competition"},{date:new Date(2022,10,21),title:"END OF 1st Scientia Submissions Competition"},{date:new Date(2023,0,30),title:"Junior Inter-class Science Competition"},{date:new Date(2023,1,1),title:"(TENTATIVE) Dr Fire Demonstration & Talk"},{date:new Date(2023,1,21),title:"START OF 2nd Scientia Submissions Competition"},{date:new Date(2023,2,13),title:"END OF 2nd Scientia Submissions Competition"},{date:new Date(2023,2,27),title:"Senior Inter-class Science Competition (Application deadline)"},{date:new Date(2023,4,2),title:"Senior Inter-class Science Competition"},{date:new Date(2023,6,3),title:"Committee Recruitment Start"},{date:new Date(2023,6,17),title:"Committee Recruitment Deadline"}],I=c=>(C("data-v-b427a042"),c=c(),E(),c),N=b(" Roadmap of Events "),R=I(()=>i("h4",null," NOTE: Most of the events here are still tentative, as the school year has only just started. Events may be added, removed, or changed in due course. Do not use this as an absolute guide to our year plan just yet. ",-1)),A={class:"c-svg-container"},k=["height"],V=["y2"],B=["y2"],P=["y"],j=["cy"],z=h({__name:"Events",setup(c){const n=[],u=Date.now();let a=0;for(let t=0;t<d.length;t++){const o=d[t],e=t===0?0:Math.log2(o.date.getTime()-d[t-1].date.getTime())*10-205;u<=o.date.getTime()&&!a&&(a=n[t-1].totalSpacing+e*(1-(o.date.getTime()-u)/(o.date.getTime()-d[t-1].date.getTime()))),n.push({...o,lastSpacing:e,totalSpacing:t===0?25:n[t-1].totalSpacing+e})}const r=n[n.length-1].totalSpacing;return a||(a=r),(t,o)=>(l(),D(y,null,{default:m(()=>[w(f,null,{header:m(()=>[N]),default:m(()=>[R,i("div",A,[(l(),p("svg",{class:"c-svg-el",height:s(r)+50},[i("line",{x1:"20",x2:"20",y1:"25",y2:s(r),class:"c-central-line"},null,8,V),i("line",{x1:"20",x2:"20",y1:"25",y2:s(a),class:"c-central-line--time-spacing"},null,8,B),(l(),p(T,null,v(n,(e,g)=>i("g",{key:g},[(l(),p("foreignObject",{x:"0",y:e.totalSpacing-50,width:"100%",height:"100"},[i("div",{class:"c-event-text",style:_({color:s(a)>=e.totalSpacing?"#87bfe6":"var(--colour-accent)"})},S(e.date.toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"}))+": "+S(e.title),5)],8,P)),i("circle",{cx:"20",cy:e.totalSpacing,r:"8",class:"c-event-point",style:_({stroke:s(a)>=e.totalSpacing?"#37afe6":"var(--colour-accent)"})},null,12,j)])),64))],8,k))])]),_:1})]),_:1}))}});const L=x(z,[["__scopeId","data-v-b427a042"]]);O.content.cards=[];F(L).mount("#app");
