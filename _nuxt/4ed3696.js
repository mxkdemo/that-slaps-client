(window.webpackJsonp=window.webpackJsonp||[]).push([[16,6],{542:function(e,n,t){var content=t(546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(20).default)("540ec7b8",content,!0,{sourceMap:!1})},545:function(e,n,t){"use strict";t(542)},546:function(e,n,t){var r=t(19)(!1);r.push([e.i,".solo-overlay[data-v-2e1b0f7d]{width:-webkit-fill-available;height:500px;position:absolute;background-color:rgba(53,53,53,.5);top:0;left:0;cursor:pointer;display:flex;flex-direction:column;justify-content:center}.solo-opacity[data-v-2e1b0f7d]{transition-property:opacity;transition-duration:.1s;transition-delay:.1s;transition-timing-function:linear;opacity:.95}",""]),e.exports=r},547:function(e,n,t){"use strict";t.r(n);var r={props:{articles:{type:Array,required:!0,default:function(){return[]}},topHeader:{type:String,required:!1,default:null}},computed:{api_url:function(){return""}},data:function(){return{}}},l=(t(545),t(63)),o=t(81),d=t.n(o),c=t(659),m=t(660),v=t(585),f=t(661),k=t(211),h=t(534),component=Object(l.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-carousel",{attrs:{height:"500","hide-delimiter-background":"",continuous:"",cycle:"","show-arrows":!1,interval:"7000"}},[e.topHeader?t("div",{staticClass:"top-picks"},[e._v(e._s(e.topHeader.toUpperCase()))]):e._e(),e._v(" "),e._l(e.articles,(function(n,i){return t("v-carousel-item",{key:i},[t("v-parallax",{staticClass:"pa-0 ma-0",attrs:{dark:"",height:"500",src:e.api_url+(n.featuredImage?n.featuredImage.url:n.image.url),ea:""},scopedSlots:e._u([{key:"placeholder",fn:function(){return[t("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[t("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},[t("div",{staticClass:"text-h2 solo-overlay carousel-text",on:{click:function(t){return t.stopPropagation(),e.$router.push("../"+n.slug)}}},[t("div",{staticClass:"carousel-category"},[e._v("\n              "+e._s(n.category.name.toUpperCase())+"\n              "),t("v-divider",{staticClass:"hr-carousel",staticStyle:{width:"225px","margin-bottom":"20px"},attrs:{color:"white"}})],1),e._v(" "),t("div",{staticClass:"article-header-font"},[e._v("\n              "+e._s(n.title)+"\n          ")])])])],1)}))],2)}),[],!1,null,"2e1b0f7d",null);n.default=component.exports;d()(component,{VCarousel:c.a,VCarouselItem:m.a,VDivider:v.a,VParallax:f.a,VProgressCircular:k.a,VRow:h.a})},551:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Articles"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"category"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"category"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"name"},value:{kind:"Variable",name:{kind:"Name",value:"category"}}}]}},{kind:"ObjectField",name:{kind:"Name",value:"topPick"},value:{kind:"BooleanValue",value:!0}}]}},{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"StringValue",value:"published_at:desc",block:!1}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"4"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"category"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"formats"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"featuredImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:332}};t.loc.source={body:'query Articles($category: String!) {\n  articles( where: { category: { name: $category },topPick: true },sort: "published_at:desc", limit: 4  ) {\n    id\n    title\n    description\n    category {\n    \tname \n    }\n    tags {\n      name\n    }\n    slug\n    image {\n      url\n      formats\n    }\n    featuredImage {\n        url\n    }\n  }\n}',name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var l={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),l[e.name.value]=n}})),e.exports=t,e.exports.Articles=function(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=l[n]||new Set,d=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){d.has(e)||(d.add(e),(l[e]||new Set).forEach((function(e){c.add(e)})))}))}return d.forEach((function(n){var r=o(e,n);r&&t.definitions.push(r)})),t}(t,"Articles")},568:function(e,n,t){"use strict";t.r(n);var r=t(551),l={apollo:{articles:{prefetch:!0,deep:!0,query:t.n(r).a,variables:function(){return{category:this.$route.params.slug}}}},data:function(){return{articles:[]}}},o=t(63),component=Object(o.a)(l,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.articles&&e.articles.length>0?t("Carousel",{attrs:{articles:e.articles,topHeader:"top picks"}}):e._e()}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Carousel:t(547).default})}}]);