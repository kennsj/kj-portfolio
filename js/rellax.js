(function(g,f){"function"===typeof define&&define.amd?define([],f):"object"===typeof module&&module.exports?module.exports=f():g.Rellax=f()})(this,function(){var g=function(f,m){var d=Object.create(g.prototype),k=0,p=0,l=0,q=0,e=[],t=!1,z=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(b){setTimeout(b,1E3/60)},A=window.transformProp||function(){var b=document.createElement("div");
if(null===b.style.transform){var a=["Webkit","Moz","ms"],c;for(c in a)if(void 0!==b.style[a[c]+"Transform"])return a[c]+"Transform"}return"transform"}();d.options={speed:-2,center:!1,round:!0,vertical:!0,horizontal:!1,callback:function(){}};m&&Object.keys(m).forEach(function(b){d.options[b]=m[b]});f||(f=".rellax");var u="string"===typeof f?document.querySelectorAll(f):[f];if(0<u.length)d.elems=u;else throw Error("The elements you're trying to select don't exist.");var n=function(){for(var b=0;b<e.length;b++)d.elems[b].style.cssText=
e[b].style;e=[];p=window.innerHeight;q=window.innerWidth;v();for(b=0;b<d.elems.length;b++){var a=d.elems[b],c=a.getAttribute("data-rellax-percentage"),r=a.getAttribute("data-rellax-speed"),f=a.getAttribute("data-rellax-zindex")||0,h=d.options.vertical?c||d.options.center?window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop:0:0,g=d.options.horizontal?c||d.options.center?window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0:0,k=h+a.getBoundingClientRect().top,
l=a.clientHeight||a.offsetHeight||a.scrollHeight,m=g+a.getBoundingClientRect().left,n=a.clientWidth||a.offsetWidth||a.scrollWidth;h=c?c:(h-k+p)/(l+p);c=c?c:(g-m+q)/(n+q);d.options.center&&(h=c=.5);r=r?r:d.options.speed;h=w(c,h,r);a=a.style.cssText;c="";0<=a.indexOf("transform")&&(c=a.indexOf("transform"),c=a.slice(c),c=(g=c.indexOf(";"))?" "+c.slice(11,g).replace(/\s/g,""):" "+c.slice(11).replace(/\s/g,""));e.push({baseX:h.x,baseY:h.y,top:k,left:m,height:l,width:n,speed:r,style:a,transform:c,zindex:f})}x()},
v=function(){var b=k,a=l;k=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;l=void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft;return b!=k&&d.options.vertical||a!=l&&d.options.horizontal?!0:!1},w=function(b,a,c){var e={};b=100*c*(1-b);a=100*c*(1-a);e.x=d.options.round?Math.round(b):Math.round(100*b)/100;e.y=d.options.round?Math.round(a):Math.round(100*
a)/100;return e},y=function(){v()&&!1===t&&x();z(y)},x=function(){for(var b,a=0;a<d.elems.length;a++){b=w((l-e[a].left+q)/(e[a].width+q),(k-e[a].top+p)/(e[a].height+p),e[a].speed);var c=b.y-e[a].baseY,f=b.x-e[a].baseX;d.elems[a].style[A]="translate3d("+(d.options.horizontal?f:"0")+"px,"+(d.options.vertical?c:"0")+"px,"+e[a].zindex+"px) "+e[a].transform}d.options.callback(b)};d.destroy=function(){for(var b=0;b<d.elems.length;b++)d.elems[b].style.cssText=e[b].style;t=!0};n();window.addEventListener("resize",
function(){n()});y();d.refresh=n;return d};return g});