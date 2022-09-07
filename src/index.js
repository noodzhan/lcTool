import Vue from 'vue';
import App from './App.vue';

//1、外部依赖使用
let script = document.createElement('script');
script.type = 'text/javascript';

let code = `(function(){function createCustomEvent(){if(typeof window.CustomEvent==="function")return false;function CustomEvent(event,params){params=params||{bubbles:false,cancelable:false,detail:undefined};var evt=document.createEvent("CustomEvent");evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return evt}CustomEvent.prototype=window.Event.prototype;window.CustomEvent=CustomEvent}function listen(){createCustomEvent();function ajaxEventTrigger(event){var ajaxEvent=new CustomEvent(event,{detail:this});window.dispatchEvent(ajaxEvent)}var oldXHR=window.XMLHttpRequest;function newXHR(){var realXHR=new oldXHR();realXHR.addEventListener("abort",function(){ajaxEventTrigger.call(this,"ajaxAbort")},false);realXHR.addEventListener("error",function(){ajaxEventTrigger.call(this,"ajaxError")},false);realXHR.addEventListener("load",function(){ajaxEventTrigger.call(this,"ajaxLoad")},false);realXHR.addEventListener("loadstart",function(){ajaxEventTrigger.call(this,"ajaxLoadStart")},false);realXHR.addEventListener("progress",function(){ajaxEventTrigger.call(this,"ajaxProgress")},false);realXHR.addEventListener("timeout",function(){ajaxEventTrigger.call(this,"ajaxTimeout")},false);realXHR.addEventListener("loadend",function(){ajaxEventTrigger.call(this,"ajaxLoadEnd")},false);realXHR.addEventListener("readystatechange",function(){ajaxEventTrigger.call(this,"ajaxReadyStateChange")},false);let send=realXHR.send;realXHR.send=function(...arg){send.apply(realXHR,arg);realXHR.body=arg[0];ajaxEventTrigger.call(realXHR,"ajaxSend")};let open=realXHR.open;realXHR.open=function(...arg){open.apply(realXHR,arg);realXHR.method=arg[0];realXHR.orignUrl=arg[1];realXHR.async=arg[2];ajaxEventTrigger.call(realXHR,"ajaxOpen")};let setRequestHeader=realXHR.setRequestHeader;realXHR.requestHeader={};realXHR.setRequestHeader=function(name,value){realXHR.requestHeader[name]=value;setRequestHeader.call(realXHR,name,value)};return realXHR}window.XMLHttpRequest=newXHR}listen()})();`;
try {
  //IE浏览器认为script是特殊元素,不能再访问子节点;报错;
  script.appendChild(document.createTextNode(code));
} catch (ex) {
  script.text = code;
}
document.getElementsByTagName('head')[0].appendChild(script);
document.body.append(script);

//2、vue实例化
let div = document.createElement('div');
div.setAttribute('id', 'noodb');
document.body.append(div);
new Vue({
  render: (h) => h(App)
}).$mount('#noodb');
