(this["webpackJsonpweather-api"]=this["webpackJsonpweather-api"]||[]).push([[0],{39:function(e){e.exports=JSON.parse('{"List":[{"CityCode":"1248991","CityName":"Colombo","Temp":"33.0","Status":"Clouds"},{"CityCode":"1850147","CityName":"Tokyo","Temp":"8.6","Status":"Clear"},{"CityCode":"2644210","CityName":"Liverpool","Temp":"16.5","Status":"Rain"},{"CityCode":"2988507","CityName":"Paris","Temp":"22.4","Status":"Clear"},{"CityCode":"2147714","CityName":"Sydney","Temp":"27.3","Status":"Rain"},{"CityCode":"4930956","CityName":"Boston","Temp":"4.2","Status":"Mist"},{"CityCode":"1796236","CityName":"Shanghai","Temp":"10.1","Status":"Clouds"},{"CityCode":"3143244","CityName":"Oslo","Temp":"-3.9","Status":"Clear"}]}')},64:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);for(var i=n(0),a=n.n(i),c=n(9),s=n.n(c),r=(n(64),n(12)),o=n(33),d=n(38),l=n.n(d),j=n(47),p=n(39),u="c6edeb2f6a08f18722e8044eb241bac6",h=[],m=0;m<p.List.length;m++)h.push(p.List[m].CityCode);"https://api.openweathermap.org/data/2.5/group?id=".concat(h,"&appid=").concat(u,"&units=metric");var b,x,f,y,O,g,C,w,v,S,T,N,k=n.p+"static/media/Cloud.9d53d167.png",z=n(16),D=n(15),L=(n(70),n(108)),I=n(13),M=n(4);var E,J,R,A=function(e){var t=e.city,n=Object(i.useState)([]),a=Object(o.a)(n,2),c=a[0],s=a[1],r="#"+((1<<24)*Math.random()|0).toString(16);function d(){return(d=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat(u,"&units=metric")).then((function(e){return e.json()})).then((function(e){s(e),console.log(c)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){!function(){d.apply(this,arguments)}(),console.log(c),function(e,t,n){var i=new Date,a={value:t,expiry:i.getTime()+n};localStorage.setItem(e,JSON.stringify(a))}("weatherData",c,5e4)}),[]),"undefined"!=typeof c.main&&("Thunderstorm"===c.weather[0].main?(D.a,z.a):"Drizzle"===c.weather[0].main?(D.a,z.c):"Rain"===c.weather[0].main?(D.a,z.d):"Snow"===c.weather[0].main?(D.a,z.h):"Clear"===c.weather[0].main?(D.a,z.i):"Clouds"===c.weather[0].main?(D.a,z.b):(D.a,z.g)),Object(M.jsx)("div",{children:"undefined"!=typeof c.main?Object(M.jsxs)(P,{style:{backgroundColor:r},children:[Object(M.jsxs)(_,{children:[Object(M.jsx)(B,{src:k}),Object(M.jsxs)(H,{children:[Object(M.jsx)(K,{children:c.name}),Object(M.jsx)(Q,{children:new Date(1e3*c.dt).toLocaleTimeString("en-IN")})]}),Object(M.jsxs)(V,{children:[Object(M.jsxs)(U,{children:[c.main.temp," \xb0C"]}),Object(M.jsxs)(Q,{children:["Temp Min: ",c.main.temp_min," \xb0C",Object(M.jsx)("br",{}),"Temp Max: ",c.main.temp_max," \xb0C"]})]})]}),Object(M.jsxs)(q,{children:[Object(M.jsx)(W,{children:Object(M.jsxs)(Q,{children:["Pressure: ",c.main.pressure,"hPa ",Object(M.jsx)("br",{}),"Humidity: ",c.main.humidity," \xb0C ",Object(M.jsx)("br",{}),"Visibility: ",c.visibility," %"]})}),Object(M.jsx)(L.a,{varient:"middle",style:{height:"80%"},orientation:"vertical"}),Object(M.jsx)(F,{children:Object(M.jsxs)(Q,{children:[Object(M.jsx)(D.a,{icon:z.f})," ","\n",c.wind.speed," m/s ",c.wind.deg," Degree"]})}),Object(M.jsx)(L.a,{varient:"middle",style:{height:"80%"},orientation:"vertical"}),Object(M.jsx)(G,{children:Object(M.jsxs)(Q,{children:["Sunrise:"," ",new Date(1e3*c.sys.sunrise).toLocaleTimeString("en-IN")," ",Object(M.jsx)("br",{}),"Sunset:",new Date(1e3*c.sys.sunset).toLocaleTimeString("en-IN")]})})]})]}):Object(M.jsx)(P,{})})},P=I.a.div(b||(b=Object(r.a)(['\n  width: 500px;\n  height: 300px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  font-family: "Roboto";\n  margin: 30px;\n  @media (max-width: 768px) {\n    width: 420px;\n    height: 280px;\n  }\n']))),B=I.a.img(x||(x=Object(r.a)(["\n  width: 18%;\n  height: auto;\n  position: absolute;\n  opacity: 0.5;\n"]))),_=I.a.div(f||(f=Object(r.a)(["\n  width: 100%;\n  height: 60%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"]))),q=I.a.div(y||(y=Object(r.a)(["\n  width: 100%;\n  height: 40%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background-color: #383b47;\n"]))),H=I.a.div(O||(O=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),V=I.a.div(g||(g=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),W=I.a.div(C||(C=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n"]))),F=I.a.div(w||(w=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n"]))),G=I.a.div(v||(v=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n"]))),K=I.a.h3(S||(S=Object(r.a)(["\n  font-size: 28px;\n"]))),Q=I.a.h3(T||(T=Object(r.a)(["\n  font-size: 14px;\n"]))),U=I.a.h3(N||(N=Object(r.a)(["\n  font-size: 40px;\n"]))),X=n(113),Y=n(112),Z=n(114),$=[];var ee=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(M.jsxs)(te,{children:[Object(M.jsxs)(ie,{children:[Object(M.jsx)(D.a,{icon:z.e})," ",Object(M.jsx)("span",{}),Object(M.jsx)("span",{}),"Weather App"]}),Object(M.jsxs)(ne,{children:[Object(M.jsx)(X.a,{onChange:function(e){a(e.target.value)},id:"filled-basic",label:"Enter a city",variant:"filled",style:{backgroundColor:"white",colo:"gray"},size:"small"}),Object(M.jsx)(Z.a,{onClick:function(e){a(""),$.push(n)},variant:"contained",color:"primary",children:"Add City"})]}),Object(M.jsx)(Y.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",xs:6,spacing:3,children:Object(M.jsx)(Y.a,{item:!0,children:function(e){var t={};return e.forEach((function(e){t[e]||(t[e]=!0)})),Object.keys(t)}($).map((function(e){return Object(M.jsx)(A,{city:e},e)}))})})]})},te=I.a.div(E||(E=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  justify-content: space-around;\n  display: grid;\n"]))),ne=I.a.div(J||(J=Object(r.a)(["\n  width: 500px;\n\n  margin-top: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),ie=I.a.h2(R||(R=Object(r.a)(["\n  font-size: 35px;\n  width: 100%;\n  text-align: center;\n"])));var ae=function(){return Object(M.jsx)("div",{className:"App",children:Object(M.jsx)(ee,{})})};s.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(ae,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.77f5d2d2.chunk.js.map