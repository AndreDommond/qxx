*******************************



[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers\/(\$RCAnonymousID%)?([\u4E00-\u9FA5A-Za-z0-9-_]+)) url script-response-header https://raw.githubusercontent.com/AndreDommond/qxx/master/hhhh.js

[mitm] 

hostname = api.revenuecat.com

*******************************/
var modifiedHeaders = $request.headers;
modifiedHeaders.X-RevenueCat-ETag = "";
$done({ headers: modifiedHeaders });