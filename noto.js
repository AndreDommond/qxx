oto[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/AndreDommond/qxx/master/noto.js

[mitm] 

hostname = api.revenuecat.com

*******************************/
_0x55b28d = {
    "request_date": "2022-12-18T20:43:04Z",
    "request_date_ms": 1671396184695,
    "subscriber": {
      "entitlements": {
        "pro": {
          "expires_date": "2099-99-16T08:43:03Z",
          "grace_period_expires_date": null,
          "product_identifier": "com.lkzhao.editor.pro.ios.monthly",
          "purchase_date": "2022-12-13T08:43:03Z"
        }
      },
      "first_seen": "2022-11-18T10:53:33Z",
      "last_seen": "2022-12-18T07:25:30Z",
      "management_url": null,
      "non_subscriptions": {},
      "original_app_user_id": "$RCAnonymousID:98d02b0928ee4dd198f23a4e1f9bd977",
      "original_application_version": "125",
      "original_purchase_date": "2020-05-19T04:59:05Z",
      "other_purchases": {},
      "subscriptions": {
        "com.lkzhao.editor.pro.ios.monthly": {
          "auto_resume_date": null,
          "billing_issues_detected_at": null,
          "expires_date": "2099-99-16T08:43:03Z",
          "grace_period_expires_date": null,
          "is_sandbox": false,
          "original_purchase_date": "2022-12-13T08:43:05Z",
          "ownership_type": "PURCHASED",
          "period_type": "trial",
          "purchase_date": "2022-12-13T08:43:03Z",
          "refunded_at": null,
          "store": "app_store",
          "unsubscribe_detected_at": "2022-12-14T07:08:07Z"
        },
        "com.lkzhao.editor.pro.ios.yearly": {
          "auto_resume_date": null,
          "billing_issues_detected_at": null,
          "expires_date": "2099-11-25T16:25:42Z",
          "grace_period_expires_date": null,
          "is_sandbox": false,
          "original_purchase_date": "2022-11-18T16:25:43Z",
          "ownership_type": "PURCHASED",
          "period_type": "trial",
          "purchase_date": "2022-11-18T16:25:42Z",
          "refunded_at": null,
          "store": "app_store",
          "unsubscribe_detected_at": "2022-11-19T16:09:49Z"
        }
      }
    }
  };
$done({ "body": JSON.stringify(_0x55b28d) });
