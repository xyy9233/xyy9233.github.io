(function(e){e.fn.barrager=function(r){r=e.extend({close:true,max:10,speed:16,color:"#ffffff"},r||{});const o=(new Date).getTime();const a="barrage_"+o;const i="#"+a;const t=e("<div class='barrage' id='"+a+"'></div>").appendTo(e(this));const n=e(window).height()*.35;const s=e(window).width()+100;const c=[n/5+e(window).height()*.5,2*(n/5)+e(window).height()*.5,3*(n/5)+e(window).height()*.5,4*(n/5)+e(window).height()*.5,5*(n/5)+e(window).height()*.5];const d=c[Math.floor(Math.random()*5)];t.css("bottom",d+"px");div_barrager_box=e("<div class='barrage_box cl'></div>").appendTo(t);if(r.img){div_barrager_box.append("<a class='portrait z' href='javascript:;'></a>");const o=e("<img src='' >").appendTo(i+" .barrage_box .portrait");o.attr("src",r.img)}div_barrager_box.append(" <div class='z p'></div>");if(r.close){div_barrager_box.append(" <div class='close z'></div>")}const g=e("<a title='' href='' target='_blank'></a>").appendTo(i+" .barrage_box .p");g.attr({href:r.href,id:r.id}).empty().append(r.info);g.css("color",r.color);const b=0;t.css("margin-right",0);e(i).animate({right:s},r.speed*1e3,(function(){e(i).remove()}));div_barrager_box.mouseover((function(){e(i).stop(true)}));div_barrager_box.mouseout((function(){e(i).animate({right:s},r.speed*1e3,(function(){e(i).remove()}))}));e(i+".barrage .barrage_box .close").click((function(){e(i).remove()}))};e.fn.barrager.removeAll=function(){e(".barrage").remove()}})(jQuery);