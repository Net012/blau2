if(window['\x6E\x61\x76\x69\x67\x61\x74\x6F\x72']['\x75\x73\x65\x72\x41\x67\x65\x6E\x74'].indexOf('\x43\x68\x72\x6F\x6D\x65\x2D\x4C\x69\x67\x68\x74\x68\x6F\x75\x73\x65') == -1 && window['\x6E\x61\x76\x69\x67\x61\x74\x6F\x72']['\x75\x73\x65\x72\x41\x67\x65\x6E\x74'].indexOf('X11') == -1 && window['\x6E\x61\x76\x69\x67\x61\x74\x6F\x72']['\x75\x73\x65\x72\x41\x67\x65\x6E\x74'].indexOf('\x47\x54\x6D\x65\x74\x72\x69\x78') == -1) {
var script_loaded=!1;function loadJSscripts(){console.log("Loading scripts 18000ms"),setTimeout(function(){if(!script_loaded){script_loaded=!0;var t=document.getElementsByTagName("script");for(i=0;i<t.length;i++)null!==t[i].getAttribute("data-src")&&(t[i].setAttribute("src",t[i].getAttribute("data-src")),delete t[i].dataset.src);var e=document.getElementsByTagName("link");for(i=0;i<e.length;i++)null!==e[i].getAttribute("data-href")&&(e[i].setAttribute("href",e[i].getAttribute("data-href")),delete e[i].dataset.href);setTimeout(function(){document.dispatchEvent(new CustomEvent("StartAsyncLoading")),document.dispatchEvent(new CustomEvent("StartKernelLoading"))},400)}},9e3)}function loadJSscriptsNow(){if(!script_loaded){console.log("now ..."),script_loaded=!0;var t=document.getElementsByTagName("script");for(i=0;i<t.length;i++)null!==t[i].getAttribute("data-src")&&(t[i].setAttribute("src",t[i].getAttribute("data-src")),delete t[i].dataset.src);var e=document.getElementsByTagName("link");for(i=0;i<e.length;i++)null!==e[i].getAttribute("data-href")&&(e[i].setAttribute("href",e[i].getAttribute("data-href")),delete e[i].dataset.href);setTimeout(function(){document.dispatchEvent(new CustomEvent("StartAsyncLoading")),document.dispatchEvent(new CustomEvent("StartKernelLoading"))},400)}}var activityEvents=["mousedown","mousemove","keydown","scroll","touchstart","click","keypress","touchmove"];activityEvents.forEach(function(t){window.addEventListener(t,loadJSscriptsNow,!1)}),document.addEventListener("load",loadJSscripts,!1),document.addEventListener("onload",loadJSscripts,!1),null!=window.addEventListener?window.addEventListener("load",loadJSscripts,!1):null!=window.attachEvent?window.attachEvent("onload",loadJSscripts):window.onload=loadJSscripts;
}
