function isMobileBrowser(){
var result=false;
var sUserAgent= navigator.userAgent.toLowerCase();
var bIsIpad= sUserAgent.match(/ipad/i) == "ipad";
var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os";
var bIsMidp= sUserAgent.match(/midp/i) == "midp";
var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb";
var bIsAndroid= sUserAgent.match(/android/i) == "android";
var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce";
var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";
if(bIsIpad||(window.screen.height>=768&&window.screen.width>=1024)){
result=false;
}
else if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
result=true;
}
else
{
result=false;
}
return result;
}

if(isMobileBrowser()){
var currentHref=location.href;
currentHref=currentHref.replace("www.","m.");
location.href=currentHref;
}

function mark(id) {
switch (id) {
case "top":
/*960*90 原生多图*/
document.write('');
break;
case "style":
/* 内容标题下 */
//document.writeln("<style>table{margin-left: -1%;margin-bottom:0;margin-top: -3%;}table tr{border-top:none;}</style><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">");
document.write("<style>table{width:910px;max-height:300px;}table tr{border-top:none;}</style><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">");
//document.writeln('<div style="text-align: center; display: block;"><p style="font-weight: 700;font-size:16px;">更多福利SESE小说，你懂的!(记得自备纸巾)请复制"<span style="color: #b90000;">黑今中文</span>"搜索公众号关注，方便下次阅读!</p></div>');
document.write("<tr> ");
document.write('<td><\/td>');
document.write('<td><\/td>');
document.write('<td><\/td>');
document.write("<\/tr>");
document.write("<\/table>");
break;
case "listpage":
/*目录中间*/
break;
case "zhong":
/* 内容中间 */
mark("listpage");
break;
case "page":
/*翻页上*/
mark("listpage");
break;
case "page1":
/* 翻页下*/
document.write('');
break;
case "info1":
/*info1 300 */
document.write('');
break;
case "info2":
/* info2 *300 */
document.write('');
break;
case "info3":
/*info3底部 300*/
document.write('');
break;
case "ipage":
/* info底部bd*/
mark("page1");
break;
case "list1":
/* 各分类 */
mark("listpage");
break;
case "sklp":
/* 书库列表翻页 */
mark("listpage");
break;
case "shuku":
/*书库筛选中间 */
mark("listpage");
break;
case "skrgiht2":
/*书库右250 */
document.write("");
break;
case "footer":
/* 全站悬浮 两轮以秒计*/
document.write('');
break;
case "tongji":
/* 全站 统计 */
!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JTbWL8aH1CUFcLF1",ck:"JTbWL8aH1CUFcLF1"});

/*bdtongji*/
var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "https://hm.baidu.com/hm.js?98da08f555bc712b9043854d71e3fd2e";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hm, s);
})();
(function(){
var bp = document.createElement('script');
var curProtocol = window.location.protocol.split(':')[0];
if (curProtocol === 'https') {
bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
}
else {
bp.src = 'http://push.zhanzhang.baidu.com/push.js';
}
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(bp, s);
})();
break;
}
}
