*******************************



[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(\$RCAnonymousID%)?(\w)*$) url script-response-body https://raw.githubusercontent.com/AndreDommond/qxx/master/fluidpro.js

^https:\/\/api\.revenuecat\.com\/v1\/subscribers.+ url script-response-body https://raw.githubusercontent.com/AndreDommond/qxx/master/fluidpro.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var obj =JSON.parse($response.body);
obj = {
  "request_date_ms" : 1663813730272,
  "request_date" : "2022-09-22T02:28:50Z",
  "subscriber" : {
    "last_seen" : "2022-09-22T02:12:43Z",
    "first_seen" : "2022-09-22T02:12:43Z",
    "original_application_version" : "1",
    "other_purchases" : {},
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "premium_iap_id" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "trial",
        "expires_date" : "2099-12-12T09:03:34Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : "2022-09-22T02:21:43Z",
        "original_purchase_date" : "2022-09-22T02:19:33Z",
        "purchase_date" : "2022-09-22T02:19:32Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
        "pro" : {
        "expires_date" : "2099-12-12T09:03:34Z",
        "purchase_date" : "2022-09-22T02:19:32Z",
        "product_identifier" : "premium_iap_id",
        "grace_period_expires_date" : null
      }
    },
    "original_purchase_date" : "2022-09-10T12:59:20Z",
    "original_app_user_id" : "$RCAnonymousID:AndreDommond",
    "non_subscriptions" : {}
  }
};
$done({ "body": JSON.stringify(obj) });