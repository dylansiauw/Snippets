if("undefined"==typeof jQuery)throw new Error("jQuery is not loaded");$.fn.zabuto_calendar=function(a){var e=$.extend({},$.fn.zabuto_calendar_defaults(),a),t=$.fn.zabuto_calendar_language(e.language);return e=$.extend({},e,t),this.each(function(){function a(){var a=parseInt(y.data("initYear")),e=parseInt(y.data("initMonth"))-1,r=new Date(a,e,1,0,0,0,0);y.data("initDate",r);var d=y.data("cellBorder")===!0?" table-bordered":"";$tableObj=$('<table class="table'+d+'"></table>'),$tableObj=t(y,$tableObj,r.getFullYear(),r.getMonth()),$legendObj=n(y);var o=$('<div class="zabuto_calendar" id="'+y.attr("id")+'"></div>');o.append($tableObj),o.append($legendObj),y.append(o)}function t(a,e,t,n){var d=new Date(t,n,1,0,0,0,0);return a.data("currDate",d),e.empty(),e=r(a,e,t,n),e=o(a,e),e=i(a,e,t,n),s(a,t,n),e}function n(a){var e=$('<div class="legend" id="'+a.attr("id")+'_legend"></div>'),t=a.data("legendList");return"object"==typeof t&&t.length>0&&$(t).each(function(a,t){if("object"==typeof t&&"type"in t){var n="";switch("label"in t&&(n=t.label),t.type){case"text":if(""!==n){var r="";if("badge"in t){if("undefined"==typeof t.classname)var d="badge-event";else var d=t.classname;r='<span class="badge '+d+'">'+t.badge+"</span> "}e.append('<span class="legend-'+t.type+'">'+r+n+"</span>")}break;case"block":if(""!==n&&(n="<span>"+n+"</span>"),"undefined"==typeof t.classname)var o="event";else var o="event-styled "+t.classname;e.append('<span class="legend-'+t.type+'"><ul class="legend"><li class="'+o+'"></li></u>'+n+"</span>");break;case"list":if("list"in t&&"object"==typeof t.list&&t.list.length>0){var i=$('<ul class="legend"></u>');$(t.list).each(function(a,e){i.append('<li class="'+e+'"></li>')}),e.append(i)}break;case"spacer":e.append('<span class="legend-'+t.type+'"> </span>')}}}),e}function r(a,e,n,r){var d=a.data("navIcons"),o=$('<span><span class="fa fa-chevron-left text-transparent"></span></span>'),i=$('<span><span class="fa fa-chevron-right text-transparent"></span></span>');"object"==typeof d&&("prev"in d&&o.html(d.prev),"next"in d&&i.html(d.next));var l=a.data("showPrevious");("number"==typeof l||l===!1)&&(l=g(a.data("showPrevious"),!0));var s=$('<div class="calendar-month-navigation"></div>');s.attr("id",a.attr("id")+"_nav-prev"),s.data("navigation","prev"),l!==!1&&(prevMonth=r-1,prevYear=n,-1==prevMonth&&(prevYear-=1,prevMonth=11),s.data("to",{year:prevYear,month:prevMonth+1}),s.append(o),"function"==typeof a.data("actionNavFunction")&&s.click(a.data("actionNavFunction")),s.click(function(){t(a,e,prevYear,prevMonth)}));var c=a.data("showNext");("number"==typeof c||c===!1)&&(c=g(a.data("showNext"),!1));var u=$('<div class="calendar-month-navigation"></div>');u.attr("id",a.attr("id")+"_nav-next"),u.data("navigation","next"),c!==!1&&(nextMonth=r+1,nextYear=n,12==nextMonth&&(nextYear+=1,nextMonth=0),u.data("to",{year:nextYear,month:nextMonth+1}),u.append(i),"function"==typeof a.data("actionNavFunction")&&u.click(a.data("actionNavFunction")),u.click(function(){t(a,e,nextYear,nextMonth)}));var p=a.data("monthLabels"),v=$("<th></th>").append(s),b=$("<th></th>").append(u),f=$("<span>"+p[r]+" "+n+"</span>");f.dblclick(function(){var n=a.data("initDate");t(a,e,n.getFullYear(),n.getMonth())});var h=$('<th colspan="5"></th>');h.append(f);var m=$('<tr class="calendar-month-header"></tr>');return m.append(v,h,b),e.append(m),e}function o(a,e){if(a.data("showDays")===!0){var t=a.data("weekStartsOn"),n=a.data("dowLabels");if(0===t){var r=$.extend([],n),d=new Array(r.pop());n=d.concat(r)}var o=$('<tr class="calendar-dow-header"></tr>');$(n).each(function(a,e){o.append("<th>"+e+"</th>")}),e.append(o)}return e}function i(a,e,t,n){var r=(a.data("ajaxSettings"),f(t,n)),d=b(t,n),o=v(t,n,1),i=v(t,n,d),l=1,s=a.data("weekStartsOn");0===s&&(6==i&&r++,6!=o||0!=i&&1!=i&&5!=i||r--,o++,7==o&&(o=0));for(var c=0;r>c;c++){for(var h=$('<tr class="calendar-dow"></tr>'),m=0;7>m;m++){if(o>m||l>d)h.append("<td></td>");else{var g=a.attr("id")+"_"+p(t,n,l),y=g+"_day",_=$('<div id="'+y+'" class="day" >'+l+"</div>");_.data("day",l),a.data("showToday")===!0&&u(t,n,l)&&_.html('<span class="badge badge-today">'+l+"</span>");var w=$('<td id="'+g+'"></td>');w.append(_),w.data("date",p(t,n,l)),w.data("hasEvent",!1),"function"==typeof a.data("actionFunction")&&(w.addClass("dow-clickable"),w.click(function(){a.data("selectedDate",$(this).data("date"))}),w.click(a.data("actionFunction"))),h.append(w),l++}6==m&&(o=0)}e.append(h)}return e}function l(a,e,t,n){var r=$('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'),d=$('<h4 class="modal-title" id="'+a+'_modal_title">'+e+"</h4>"),o=$('<div class="modal-header"></div>');o.append(r),o.append(d);var i=$('<div class="modal-body" id="'+a+'_modal_body">'+t+"</div>"),l=$('<div class="modal-footer" id="'+a+'_modal_footer"></div>');if("undefined"!=typeof n){var s=$("<div>"+n+"</div>");l.append(s)}var c=$('<div class="modal-content"></div>');c.append(o),c.append(i),c.append(l);var u=$('<div class="modal-dialog"></div>');u.append(c);var p=$('<div class="modal fade" id="'+a+'_modal" tabindex="-1" role="dialog" aria-labelledby="'+a+'_modal_title" aria-hidden="true"></div>');return p.append(u),p.data("dateId",a),p.attr("dateId",a),p}function s(a,e,t){var n=a.data("ajaxSettings");if(a.data("events",!1),n===!1)return!0;if("object"!=typeof n||"undefined"==typeof n.url)return alert("Invalid calendar event settings"),!1;var r={year:e,month:t+1};$.ajax({type:"GET",url:n.url,data:r,dataType:"json"}).done(function(e){var t=[];$.each(e,function(a){t.push(e[a])}),a.data("events",t),c(a)})}function c(a){var e=a.data("ajaxSettings"),t=a.data("events");t!==!1&&$(t).each(function(t,n){var r=a.attr("id")+"_"+n.date,d=$("#"+r),o=$("#"+r+"_day");if(d.data("hasEvent",!0),"undefined"!=typeof n.title&&d.attr("title",n.title),"undefined"==typeof n.classname?d.addClass("event"):(d.addClass("event-styled"),o.addClass(n.classname)),"undefined"!=typeof n.badge&&n.badge!==!1){var i=n.badge===!0?"":" badge-"+n.badge,s=o.data("day");o.html('<span class="badge badge-event'+i+'">'+s+"</span>")}if("undefined"!=typeof n.body&&"modal"in e&&e.modal===!0){d.addClass("event-clickable");var c=l(r,n.title,n.body,n.footer);$("body").append(c),$("#"+r).click(function(){$("#"+r+"_modal").modal()})}})}function u(a,e,t){var n=new Date,r=new Date(a,e,t);return r.toDateString()==n.toDateString()}function p(a,e,t){return d=10>t?"0"+t:t,m=e+1,m=m<10?"0"+m:m,a+"-"+m+"-"+d}function v(a,e,t){var n=new Date(a,e,t,0,0,0,0),r=n.getDay();return 0==r?r=6:r--,r}function b(a,e){for(var t=28;h(a,e+1,t+1);)t++;return t}function f(a,e){var t=b(a,e),n=v(a,e,1),r=v(a,e,t),d=t,o=n-r;return o>0&&(d+=o),Math.ceil(d/7)}function h(a,e,t){return e>0&&13>e&&a>0&&32768>a&&t>0&&t<=new Date(a,e,0).getDate()}function g(a,e){a===!1&&(a=0);var t,n=y.data("currDate"),r=y.data("initDate");if(t=12*(r.getFullYear()-n.getFullYear()),t-=n.getMonth()+1,t+=r.getMonth(),e===!0){if(t<parseInt(a)-1)return!0}else if(t>=0-parseInt(a))return!0;return!1}var y=$(this);y.attr("id","zabuto_calendar_"+Math.floor(99999*Math.random()).toString(36)),y.data("initYear",e.year),y.data("initMonth",e.month),y.data("monthLabels",e.month_labels),y.data("weekStartsOn",e.weekstartson),y.data("navIcons",e.nav_icon),y.data("dowLabels",e.dow_labels),y.data("showToday",e.today),y.data("showDays",e.show_days),y.data("showPrevious",e.show_previous),y.data("showNext",e.show_next),y.data("cellBorder",e.cell_border),y.data("ajaxSettings",e.ajax),y.data("legendList",e.legend),y.data("actionFunction",e.action),y.data("actionNavFunction",e.action_nav),a()}),this},$.fn.zabuto_calendar_defaults=function(){var a=new Date,e=a.getFullYear(),t=a.getMonth()+1,n={language:!1,year:e,month:t,show_previous:!0,show_next:!0,cell_border:!1,today:!1,show_days:!0,weekstartson:1,nav_icon:!1,ajax:!1,legend:!1,action:!1,action_nav:!1};return n},$.fn.zabuto_calendar_language=function(a){switch(("undefined"==typeof a||a===!1)&&(a="en"),a.toLowerCase()){case"de":return{month_labels:["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],dow_labels:["Mo","Di","Mi","Do","Fr","Sa","So"]};case"en":return{month_labels:["January","February","March","April","May","June","July","August","September","October","November","December"],dow_labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]};case"es":return{month_labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],dow_labels:["Lu","Ma","Mi","Ju","Vi","S\xe1","Do"]};case"fr":return{month_labels:["Janvier","F\xe9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\xfbt","Septembre","Octobre","Novembre","D\xe9cembre"],dow_labels:["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"]};case"it":return{month_labels:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],dow_labels:["Lun","Mar","Mer","Gio","Ven","Sab","Dom"]};case"nl":return{month_labels:["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"],dow_labels:["Ma","Di","Wo","Do","Vr","Za","Zo"]}}};