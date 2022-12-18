*******************************



[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers\/(\$RCAnonymousID%)?([\u4E00-\u9FA5A-Za-z0-9-_]+)) url script-response-body https://raw.githubusercontent.com/AndreDommond/qxx/master/fluidpro.js



[mitm] 

hostname = api.revenuecat.com

*******************************/
var objc = JSON.parse($response.body);
objc.subscriber['entitlements'] = '{"premium": {
                    "expires_date": "2999-12-10T09:56:49Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "premium_iap_id",
                    "purchase_date": "2022-09-22T02:19:32Z"} }';
objc.subscriber['subscriptions'] = '{"premium_iap_id": {
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
                }}';
$done({ "body": JSON.stringify(objc) });
            
