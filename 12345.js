/***************************************
**************************************
[rewrite_local]
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/AndreDommond/qxx/master/12345.js
[mitm]
hostname=app.bilibili.com, grpc.biliapi.net,*.biliapi.net,app.bilibili.com,api.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com,dataflow.biliapi.com,124.239.240.*,101.89.57.66, 218.94.210.66,240e:b1:9801:206:11:0:0:*
***************************************/
var $request_headers = $request.headers;
$request_headers.Cookie = "buvid3=CD3B1ACD-C97E-4B52-BEE4-E240B39B0B52167623infoc; rpdid=|(k|k)RJJmm)0J'uYYm)~)J)k; b_nut=100; _uuid=C9864937-5ACF-4E99-86ED-6EE72AFF1059685336infoc; buvid4=AB728D4B-1D61-B957-737D-3453E528EA5E85591-122121921-BnxHijm4xdN0LRiB/Kz/NQ%3D%3D; buvid_fp=45dd61407650d44140af63dcbca23ca6; fingerprint3=e23fedd16bdda8df63919d37cda6e99b; fingerprint=8a422eb990d3556837500e2e9645baf4; Buvid=Y4412E4462D655134E27B92E551DCAD7F1E8; SESSDATA=cce250ef%2C1686925968%2Cbf9d2ac1; DedeUserID=3493083748502332; DedeUserID__ckMd5=4ceeee513f1cd199; bili_jct=88c4610a22f142553640f54cc82c697b; sid=50osw4fl";
$request_headers.x-bili-device-bin = "CAEQqJnbIRokWTQ0MTJFNDQ2MkQ2NTUxMzRFMjdCOTJFNTUxRENBRDdGMUU4IgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoOaVBob25lIDEzIG1pbmlSBDE1LjJqBTcuNy4wckAxQjg2MzNDNEQ0NjBDQjI3RTI1Q0QyMjYwNTQ4NkM2QzIwMjIwMTE0MjA1OTMyM0VBNDY1QTQ4RDk1NzQyM0JGeKbur8XlLw==";
$request_headers.Authorization = "identify_v1 37ced28f3b8d8bcddda35c0796dd4ec1";
$request_headers.User-Agent = "bili-universal/70700200 os/ios model/iPhone 13 mini mobi_app/iphone osVer/15.2 network/1";
$request_headers.buvid = "Y4412E4462D655134E27B92E551DCAD7F1E8";
$request_headers.x-bili-metadata-bin = "CiA1MmYxODVlOTY3YzI3YjAxMjFlNTgxMjRiM2Y2YzljMRIGaXBob25lGgVwaG9uZSComdshKgVhcHBsZTIkWTQ0MTJFNDQ2MkQ2NTUxMzRFMjdCOTJFNTUxRENBRDdGMUU4OgNpb3M=";
$request_headers.x-bili-locale-bin = "";
$request_headers.x-bili-network-bin = "";
$request_headers.x-bili-fawkes-req-bin = "";
$request_headers.x-bili-trace-id = "";
$request_headers.x-bili-exps-bin = "";
$done({ "headers": $request_headers });
