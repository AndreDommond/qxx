*******************************



[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers\/(\$RCAnonymousID%)?([\u4E00-\u9FA5A-Za-z0-9-_]+)) url script-response-body https://raw.githubusercontent.com/AndreDommond/qxx/master/fluidpro.js



[mitm] 

hostname = api.revenuecat.com

*******************************/
 var objc = JSON.parse($response.body);
objc = {
        "request_date": "2022-12-07T09:56:55Z",
        "request_date_ms": 1670407015963,
        "subscriber": {
            "entitlements": {
                "premium": {
                    "expires_date": "2099-12-10T09:56:49Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "premium_iap_id",
                    "purchase_date": "2022-09-22T02:19:32Z"
                }
            },
            "first_seen": "2022-09-22T02:12:43Z",
            "last_seen": "2022-09-22T02:12:43Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:B7E133A5-62CC-4D3B-9F77-FC0D0B325B05",
            "original_application_version": "946",
            "original_purchase_date": "2022-09-22T02:12:43Z",
            "other_purchases": {},
            "subscriptions": {
                "premium_iap_id": {
                    "auto_resume_date": null,
                    "billing_issues_detected_at": null,
                    "expires_date": "2099-12-10T09:56:49Z",
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
console('body');
$done({ "body": JSON.stringify(objc) });
            
