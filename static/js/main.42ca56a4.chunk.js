(this["webpackJsonpreact-movie-2021"]=this["webpackJsonpreact-movie-2021"]||[]).push([[0],{37:function(e,t,c){},58:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(31),i=c.n(a),o=c(8),r=c(9),l=c(11),j=c(10),m=c(12),h=c(2),b=(c(37),c(0));var d=function(e){return console.log(e),Object(b.jsxs)("section",{className:"about_container",children:[Object(b.jsxs)("div",{className:"about_name",children:[Object(b.jsx)("h2",{children:"Cate Blanchett"}),Object(b.jsx)("h2",{children:"\ucf00\uc774\ud2b8 \ube14\ub780\uccc7"}),Object(b.jsx)("img",{src:"https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_UY317_CR3,0,214,317_AL_.jpg",alt:"CateBlanchett"}),Object(b.jsxs)("p",{className:"about_txt",children:["\uc624\uc2a4\ud2b8\ub808\uc77c\ub9ac\uc544 \ucd9c\uc2e0 \ubc30\uc6b0, \uc5f0\ucd9c\uac00",Object(b.jsx)("br",{}),"1969\ub144 5\uc6d4 14\uc77c"]}),Object(b.jsxs)("em",{children:["Filmos \uba54\ub274\uc5d0\uc11c ",Object(b.jsx)("br",{}),"\uadf8\ub140\uc758 \ud544\ubaa8\uadf8\ub798\ud53c\ub97c \ub9cc\ub098\ubcf4\uc138\uc694"]})]}),Object(b.jsx)("div",{className:"about_picture"})]})},v=c(14),u=c.n(v),p=c(16),O=c(17),x=c.n(O),f=(c(58),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var e=this.props,t=e.year,c=e.title;return Object(b.jsx)(m.b,{to:{pathname:"/movie?movieCd=".concat(t),state:{year:t,title:c}},children:Object(b.jsx)("article",{className:"movies_info",children:Object(b.jsxs)("div",{className:"movies_text",children:[Object(b.jsx)("h4",{className:"movies_title",children:c}),Object(b.jsx)("p",{className:"movies_year",children:t.slice(0,4)})]})})})}}]),c}(s.a.Component)),N=(c(64),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(p.a)(u.a.mark((function t(){var c,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleInfo.json?key=8259f2a744e900c0fd98e8dc5b791507&peopleCd=10075724");case 2:c=t.sent,n=c.data.peopleInfoResult.peopleInfo.filmos,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(r.a)(c,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,c=e.movies;return Object(b.jsx)("section",{className:"movie_container",children:t?Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("span",{className:"loader_txt",children:"Loading..."})}):Object(b.jsx)("div",{className:"movies",children:Object(b.jsx)("ul",{className:"movies_list",children:c.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(f,{id:e.movieCd,title:e.movieNm,year:e.movieCd})},e.movieCd)}))})})})}}]),c}(s.a.Component));c(65);var _=function(){return Object(b.jsxs)("section",{className:"home_container",children:[Object(b.jsxs)("article",{className:"home_txt_container",children:[Object(b.jsx)("h1",{children:"\ucf00\uc774\ud2b8 \ube14\ub780\uccc7 \ud544\ubaa8\uadf8\ub798\ud53c"}),Object(b.jsx)("h2",{children:"Cate Blanchett Filmos Page"}),Object(b.jsxs)("p",{children:["\uc548\ub155\ud558\uc138\uc694. ",Object(b.jsx)("br",{}),"\ubc30\uc6b0 \ucf00\uc774\ud2b8 \ube14\ub780\uccc7\uc758 \ud544\ubaa8\uadf8\ub798\ud53c\ub97c  ",Object(b.jsx)("br",{}),"\uc0b4\ud3b4\ubcf4\uc2e4 \uc218 \uc788\ub294 \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4."]}),Object(b.jsx)("a",{href:"https://github.com/kenna-hwa/react-movie-app",className:"home_txt_github",children:"\ud83d\udc49 GitHub Repository"})]}),Object(b.jsxs)("article",{className:"my_about_container",children:[Object(b.jsx)("h2",{children:" Copyright 2021. Juhwa Hwang all rights reserved."}),Object(b.jsx)("p",{children:"\ub9cc\ub4e0 \uc0ac\ub78c\uc5d0 \ub300\ud574 \uad81\uae08\ud558\uc2e0\uac00\uc694?"}),Object(b.jsx)("a",{href:"https://www.instagram.com/peacehwa/",className:"instagram",children:"\u26ac Instagram"}),Object(b.jsx)("a",{href:"https://github.com/kenna-hwa",className:"github",children:"\u26ac GitHub"}),Object(b.jsx)("a",{href:"https://kenna-hwa.github.io/portfolio_kenna/",className:"portfolio",children:"\u26ac Portfolio"})]})]})};c(66);var g=function(){return Object(b.jsxs)("section",{className:"nav",children:[Object(b.jsx)(m.b,{to:"/",className:"nav_home",children:"Home"}),Object(b.jsx)(m.b,{to:"/about",className:"nav_about",children:"About"}),Object(b.jsx)(m.b,{to:"/movielist",className:"nav_movielist",children:"Filmos"})]})};c(67);var k=function(e){var t=e.code,c=e.title,n=e.titleEn,s=e.time,a=e.opendate,i=e.movieType;return Object(b.jsxs)("section",{className:"movieinfo_container",children:[Object(b.jsxs)("div",{className:"movieinfo_title_box",children:[Object(b.jsxs)("h2",{children:[" ",c," "]}),Object(b.jsxs)("p",{children:[" ",n," "]})]}),Object(b.jsxs)("div",{className:"movieinfo_info_box",children:[Object(b.jsxs)("p",{children:["\uc0c1\uc601\uc2dc\uac04 : ",s," \ubd84"]}),Object(b.jsxs)("p",{children:["\uac1c\ubd09\uc77c\uc790 : ",a]}),Object(b.jsxs)("p",{children:["\ud0c0\uc785 : ",i]})]}),Object(b.jsx)("div",{className:"movieinfo_img_box",children:Object(b.jsx)("img",{src:"http://kenna.dothome.co.kr/hidden/images/reactmovie/"+t+".jpg",alt:n})})]})},y=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).getPosters=Object(p.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=8259f2a744e900c0fd98e8dc5b791507&movieCd=".concat(n.props.location.state.year));case 2:t=e.sent,c=t.data.movieInfoResult.movieInfo,n.setState({movie:c});case 5:case"end":return e.stop()}}),e)}))),n.state={movie:{}},n}return Object(r.a)(c,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,c=e.history;void 0===t.state?c.push("/movielist"):this.getPosters()}},{key:"render",value:function(){var e=this.props.location,t=this.state.movie;return e.state?(console.log(t.movieNmEn),Object(b.jsx)("div",{children:t?Object(b.jsx)(k,{code:t.movieCd,title:t.movieNm,titleEn:t.movieNmEn,time:t.showTm,opendate:t.openDt,movieType:t.typeNm,director:t.directors}):null})):null}}]),c}(s.a.Component),w=(c(68),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("section",{className:"main_container",children:[Object(b.jsx)("h1",{className:"main_title",children:"Cate Blanchett"}),Object(b.jsxs)(m.a,{children:[Object(b.jsx)(g,{}),Object(b.jsx)(h.a,{path:"/",exact:!0,component:_}),Object(b.jsx)(h.a,{path:"/movielist",exact:!0,component:N}),Object(b.jsx)(h.a,{path:"/about",exact:!0,component:d}),Object(b.jsx)(h.a,{path:"/movie?movieCd=:id",exact:!0,component:y})]})]})}}]),c}(s.a.Component));i.a.render(Object(b.jsx)(w,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.42ca56a4.chunk.js.map