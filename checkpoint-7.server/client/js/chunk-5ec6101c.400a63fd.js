(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ec6101c"],{"2c58":function(e,t,c){},"78a7":function(e,t,c){"use strict";c.r(t);var s=c("7a23");const b=Object(s["I"])("data-v-dffbee9e");Object(s["u"])("data-v-dffbee9e");const a={class:"home flex-grow-1 d-flex flex-column"},l={border:"2",class:"mt-5"},d={class:"font-weight-bold"},n=Object(s["h"])("td",null,"Title",-1),u=Object(s["h"])("td",null,"Found By",-1),o=Object(s["h"])("td",null,"Last Updated",-1);Object(s["s"])();const r=b((e,t,c,b,r,f)=>{const i=Object(s["y"])("bug-component");return Object(s["r"])(),Object(s["e"])("div",a,[Object(s["h"])("table",l,[Object(s["h"])("tr",d,[Object(s["h"])("td",{onClick:t[1]||(t[1]=e=>b.filter())}," Status "),n,u,o]),(Object(s["r"])(!0),Object(s["e"])(s["a"],null,Object(s["x"])(b.state.bugs,e=>(Object(s["r"])(),Object(s["e"])(i,{key:e._id,bug:e},null,8,["bug"]))),128))])])});var f=c("af90"),i=c("83fc"),j={name:"Home",setup(){const e=Object(s["v"])({bugs:Object(s["c"])(()=>i["a"].bugs),filtered:"Resolved"});return Object(s["p"])(()=>{f["a"].getBugs()}),{state:e,async filter(){"Resolved"===e.filtered?(await f["a"].getBugs(),i["a"].bugs=i["a"].bugs.filter(e=>!1===e.closed),e.filtered="Unresolved"):"Unresolved"===e.filtered&&(await f["a"].getBugs(),i["a"].bugs=i["a"].bugs.filter(e=>!0===e.closed),e.filtered="Resolved")}}}};c("99b2");j.render=r,j.__scopeId="data-v-dffbee9e";t["default"]=j},"99b2":function(e,t,c){"use strict";c("2c58")}}]);