oto[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/AndreDommond/qxx/master/noto.js

[mitm] 

hostname = api.revenuecat.com

*******************************/
_0x55b28d = {
    "request_date": "2022-10-14T06:24:23Z",
    "request_date_ms": 1665728663210,
    "subscriber": {
        "entitlements": {
            "pro": {
                "expires_date": "",
                "grace_period_expires_date": null,
                "product_identifier": "com.lkzhao.editor.full",
                "purchase_date": "2022-10-14T06:23:53Z"
            }
        },
        "first_seen": "2022-10-14T06:20:43Z",
        "last_seen": "2022-10-14T06:20:43Z",
        "management_url": "https://apps.apple.com/account/subscriptions",
        "non_subscriptions": {},
        "original_app_user_id": "$RCAnonymousID:4024fefebf014458bef29f2e013c5124",
        "original_application_version": "251",
        "original_purchase_date": "2022-10-14T06:18:56Z",
        "other_purchases": {},
        "subscriptions": {
            "com.lkzhao.editor.full": {
                "billing_issues_detected_at": null,
                "expires_date": "",
                "grace_period_expires_date": null,
                "is_sandbox": false,
                "original_purchase_date": "2022-10-14T06:23:55Z",
                "ownership_type": "PURCHASED",
                "period_type": "pro",
                "purchase_date": "2022-10-14T06:23:53Z",
                "store": "app_store",
                "unsubscribe_detected_at": null
            }
        }
    }
};
$done({ "body": JSON.stringify(_0x55b28d) });
