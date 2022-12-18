*******************************



[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers\/(\$RCAnonymousID%)?([\u4E00-\u9FA5A-Za-z0-9-_]+)) url script-response-body https://raw.githubusercontent.com/AndreDommond/qxx/master/fluidpro.js



[mitm] 

hostname = api.revenuecat.com

*******************************/
objc = {
    "request_date": "2022-10-14T06:24:23Z",
    "request_date_ms": 1665728663210,
    "subscriber": {
        "entitlements": {
            "premium": {
                "expires_date": "2999-99-99T09:56:49Z",
                "grace_period_expires_date": null,
                "product_identifier": "premium_iap_id",
                "purchase_date": "2022-10-14T06:23:53Z"
            }
        },
        "first_seen": "2022-10-14T06:20:43Z",
        "last_seen": "2022-10-14T06:20:43Z",
        "management_url": "https://apps.apple.com/account/subscriptions",
        "non_subscriptions": {},
        "original_app_user_id": "$RCAnonymousID:4024fefebf014458bef29f2e013c5124",
        "original_application_version": "4000",
        "original_purchase_date": "2022-10-14T06:18:56Z",
        "other_purchases": {},
        "subscriptions": {
            "premium_iap_id": {
                "billing_issues_detected_at": null,
                "expires_date": "2999-99-99T09:56:49Z",
                "grace_period_expires_date": null,
                "is_sandbox": false,
                "original_purchase_date": "2022-10-14T06:23:55Z",
                "ownership_type": "PURCHASED",
                "period_type": "trial",
                "purchase_date": "2022-10-14T06:23:53Z",
                "store": "app_store",
                "unsubscribe_detected_at": null
            }
        }
    }
};
$done({ "body": JSON.stringify(objc) });
            
