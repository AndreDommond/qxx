/******************************



[rewrite_local]

^https?:\/\/gentle\.coding\.net\/p\/ppcat\/d\/ppcat\/git\/raw\/master\/app_ios_store url script-response-body https://raw.githubusercontent.com/AndreDommond/qxx/master/pppro.js

^https?:\/\/gentle\.coding\.net\/p\/ppcat\/d\/ppcat\/git\/raw\/master\/users_ios url script-response-body https://raw.githubusercontent.com/AndreDommond/qxx/master/pppro.js

*******************************/
var obj =JSON.parse($response.body);
obj = {
   "msg" : {
     "user_not_login" : "用户未登录"
   },
   "data" : {
     "account_type" : "1"
   },
   "code" : 1000
 };
$done({ "body": JSON.stringify(obj) });
