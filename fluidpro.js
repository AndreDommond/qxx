*******************************



[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers\/(\$RCAnonymousID%)?([\u4E00-\u9FA5A-Za-z0-9-_]+)) url script-response-body https://raw.githubusercontent.com/AndreDommond/qxx/master/fluidpro.js



[mitm] 

hostname = api.revenuecat.com

*******************************/
var objc = JSON.parse($response.body);
objc = {
  "request_date": "2022-12-18T19:38:02Z",
  "request_date_ms": 1671392282633,
  "subscriber": {
    "entitlements": {
     "premium": {
                    "expires_date": "2999-12-10T09:56:49Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "premium_iap_id",
                    "purchase_date": "2022-09-22T02:19:32Z"}
                    },
    "first_seen": "2022-12-18T19:31:37Z",
    "last_seen": "2022-12-18T19:31:37Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:2a1dc2162d994c7a8321962de36be41b",
    "original_application_version": "4000",
    "original_purchase_date": "2022-12-10T13:59:27Z",
    "other_purchases": {},
    "subscriptions": {
                "premium_iap_id": {
                    "auto_resume_date": null,
                    "billing_issues_detected_at": null,
                    "expires_date": "2999-12-10T09:56:49Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-09-22T02:12:43Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "trial",
                    "purchase_date": "2022-09-22T02:12:43Z",
                    "refunded_at": null,
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
  }
};
console("HHH");
$done({ "body": JSON.stringify(objc) });
            
