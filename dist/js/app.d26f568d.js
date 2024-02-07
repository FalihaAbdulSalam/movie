(function(e){function t(t){for(var o,i,s=t[0],c=t[1],u=t[2],v=0,f=[];v<s.length;v++)i=s[v],n[i]&&f.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},n={app:0},a=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/simple-vuejs-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"02f4":function(e,t,r){},"034f":function(e,t,r){"use strict";var o=r("04f5"),n=r.n(o);n.a},"04f5":function(e,t,r){},"532e":function(e,t,r){"use strict";var o=r("02f4"),n=r.n(o);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],i=(r("034f"),r("2877")),s={},c=Object(i["a"])(s,n,a,!1,null,null,null),u=c.exports,l=r("8c4f"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Welcome to movies!")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],attrs:{type:"text",placeholder:"Search by movie name"},domProps:{value:e.searchQuery},on:{keyup:e.searchMovies,input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),e.searchResults.length?r("div",{staticClass:"row"},e._l(e.searchResults,function(t){return r("div",{key:t.id,staticClass:"col-md-3 p-4"},[r("router-link",{attrs:{to:{name:"movieDetails",params:{id:t.id}}}},[r("div",{staticClass:"card"},[r("img",{staticClass:"card-img-top",attrs:{src:t.poster,alt:"Movie Poster"}}),r("div",{staticClass:"card-body"},[r("h6",{staticClass:"card-title"},[e._v(e._s(t.title))]),r("button",{staticClass:"btn btn-primary",on:{click:function(r){e.toggleFavorite(t)}}},[t.isFavorite?r("span",[e._v("Remove from favorites")]):r("span",[e._v("Add to favorites")])])])])])],1)})):r("p",[e._v("No movies found.")])])},f=[],d=(r("6762"),r("2fdb"),r("ac6a"),r("bc3a")),m=r.n(d),p={name:"home",data:function(){return{movies:[],searchQuery:"",searchResults:[]}},mounted:function(){var e=this;m()({method:"GET",url:"assets/json/movies.json"}).then(function(t){e.movies=JSON.parse(JSON.stringify(t.data)),e.searchResults=e.movies,e.movies.forEach(function(e){var t=localStorage.getItem("movie_".concat(e.id,"_is_favorite"));e.isFavorite=!!t&&JSON.parse(t)})},function(e){console.error(e)})},methods:{searchMovies:function(){var e=this;this.searchResults=this.movies.filter(function(t){return t.title.toLowerCase().includes(e.searchQuery.toLowerCase())})},toggleFavorite:function(e){e.isFavorite=!e.isFavorite,localStorage.setItem("movie_".concat(e.id,"_is_favorite"),e.isFavorite)}}},h=p,_=Object(i["a"])(h,v,f,!1,null,null,null),g=_.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v(e._s(e.movie.title))]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("img",{attrs:{src:e.movie.poster,alt:"Movie Poster"}})]),r("div",{staticClass:"col-md-8"},[r("p",[r("strong",[e._v("Genre:")]),e._v(" "+e._s(e.movie.genres.join(", ")))]),r("p",[r("strong",[e._v("Plot:")]),e._v(" "+e._s(e.movie.overview))]),r("p",[r("strong",[e._v("Release Date:")]),e._v(" "+e._s(e.formatDate(e.movie.release_date)))])])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 text-center"},[r("router-link",{staticClass:"btn btn-secondary mt-3",attrs:{to:"/"}},[e._v("Back to Home")])],1)])])},y=[],w=(r("7514"),{name:"MovieDetails",data:function(){return{movie:{}}},created:function(){this.fetchMovie()},methods:{fetchMovie:function(){var e=this;m()({method:"GET",url:"assets/json/movies.json"}).then(function(t){var r=t.data,o=e.$route.params.id;e.movie=r.find(function(e){return e.id===o})}).catch(function(e){console.error(e)})},formatDate:function(e){var t={year:"numeric",month:"long",day:"numeric"};return new Date(1e3*e).toLocaleDateString("en-US",t)}}}),j=w,C=(r("532e"),Object(i["a"])(j,b,y,!1,null,null,null)),O=C.exports;o["a"].use(l["a"]);var S=new l["a"]({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:g},{path:"/movie/:id",name:"movieDetails",component:O}]}),x=S,M=r("9f7b");r("f9e3"),r("2dd8");o["a"].config.productionTip=!1,o["a"].use(M["a"]),new o["a"]({router:x,render:function(e){return e(u)}}).$mount("#app")}});
//# sourceMappingURL=app.d26f568d.js.map