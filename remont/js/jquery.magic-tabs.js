!function(g){g.fn.magicTabs=function(r){function i(a,i){function s(){o=[],c=g('<div class="magic-tabs"></div>'),g("> "+r.headingTag,h).each(function(){var a=g(this),i=[],s=!1;a.nextAll().each(function(){var a=g(this);s||a[0].tagName.toLowerCase()===r.headingTag?s=!0:i.push(a.clone())}),o.push({heading:a.clone(),content:i})})}function t(){var a,i,s=g("<ul></ul>").addClass("magic-tabs-tabs"),t=g("<ul></ul>").addClass("magic-tabs-contents");for(a in o){var e=o[a].heading;s.append(g("<li></li>").addClass(r.headClass).html(e.html()));var n,d=g("<li></li>").addClass(r.bodyClass);for(n in o[a].content)o[a].content[n].appendTo(d);d.appendTo(t)}c.append(s),c.append(t),c.insertAfter(h),g("*",h).each(function(){void 0!==g(this).attr("id")&&(g(this).attr("id").match(/^magic_/)||g(this).attr("id","magic_"+g(this).attr("id")))}),g("."+r.bodyClass,c).not(":eq(0)").hide(),g("."+r.bodyClass,c).eq(0).addClass(r.activeClass),g("."+r.headClass,c).eq(0).addClass(r.activeClass),h.hide(),(i=g.Event("created.magic-tabs")).tabs=c,h.trigger(i)}function e(){g("."+r.headClass,c).unbind("click.magic-tabs").bind("click.magic-tabs",function(a){r.hashTrail&&(d=!1,i=g(this).index(),window.location.hash="slide-"+(i+1)),a.preventDefault();var s=g(this),i=g("."+r.bodyClass+":visible",c),a=g("."+r.bodyClass,c).eq(s.index());g("."+r.headClass+"."+r.activeClass,c).removeClass(r.activeClass),g("."+r.bodyClass+"."+r.activeClass,c).removeClass(r.activeClass),s.addClass(r.activeClass),a.addClass(r.activeClass),i.get(0)!==a.get(0)&&(a.show(0,function(a){var i=g.Event("opened.magic-tabs");i.head=s,i.body=g(this),i.index=g(this).index(),h.trigger(i)}),i.hide(0,function(a){var i=g.Event("closed.magic-tabs");i.head=g(this).prev(),i.body=g(this),i.index=g(this).index(),h.trigger(i)})),setTimeout(function(){d=!0},100)}),r.openOnLoad&&!1===l()&&g("."+r.headClass,c).eq(r.openOnLoad-1).trigger("click.magic-tabs")}function n(){var a;!d||(a=l())&&g("."+r.headClass,c).eq(a-1).trigger("click.magic-tabs")}var c,h=g(a),o=[],d=!0,l=function(){var a=window.location.hash;return!!a.match(/^#slide-[0-9]\d*/)&&Number(a.replace("#slide-",""))};this.unbind=function(){h.is(":visible")||(c.remove(),h.show(),g("*",h).each(function(){void 0!==g(this).attr("id")&&g(this).attr("id",g(this).attr("id").replace(/^magic_/,""))}))},this.rebind=function(){h.is(":visible")&&(s(),t(),e())},this.object=function(){return{tabs:c,sections:o}},this.addTab=function(a){var i={head:"",contents:""};new a(i),h.append(g("<"+r.headingTag+"></"+r.headingTag+">").html(i.head)),g("<div>"+i.contents+"</div>").children().each(function(){g(this).appendTo(h)}),this.unbind(),this.rebind()},s(),t(),e(),r.hashTrail&&d&&((a=l())&&g("."+r.headClass,c).eq(a-1).trigger("click.magic-tabs")),g(window).bind("hashchange",n),h.data("magic-tabs",this)}r=g.extend({openOnLoad:1,hashTrail:!1,headingTag:"h2",bodyClass:"body",headClass:"head",activeClass:"active"},r);return g(this).each(function(a){new i(this)})}}(jQuery);