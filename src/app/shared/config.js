"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_settings_1 = require("tns-core-modules/application-settings");
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.apiUrl = "https://panafri.com/api/app/";
    Config.fcmUrl = "https://fcm.googleapis.com/fcm/send";
    Config.appKey = "";
    Config.authHeader = "";
    Config.fcmAuth = "key=AAAA7ZOX9WA:APA91bG8KLLsn6CsdPbHCfkNR6pTHwo3-Y5razr3mFt5qEkNLSzdF3-vvnvE_0a5yYzN37qTC1i9XSCtX3qGNrHrh7HOJ0lv0iRhir9A17SwUKZFvy6SF0dWmIVImgoMoB1S1q3hqCJR";
    Config.token = application_settings_1.getString("token");
    Config.deviceToken = application_settings_1.getString("deviceToken");
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOEVBQWlGO0FBRWpGO0lBQUE7SUFRRSxDQUFDO0lBUFEsYUFBTSxHQUFHLDhCQUE4QixDQUFDO0lBQ3hDLGFBQU0sR0FBRyxxQ0FBcUMsQ0FBQztJQUMvQyxhQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ1osaUJBQVUsR0FBRyxFQUFFLENBQUM7SUFDaEIsY0FBTyxHQUFDLDhKQUE4SixDQUFDO0lBQ3ZLLFlBQUssR0FBRyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLGtCQUFXLEdBQUUsZ0NBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUM5QyxhQUFDO0NBQUEsQUFSSCxJQVFHO0FBUlUsd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTdHJpbmcsc2V0U3RyaW5nLGNsZWFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZyB7XHJcbiAgICBzdGF0aWMgYXBpVXJsID0gXCJodHRwczovL3BhbmFmcmkuY29tL2FwaS9hcHAvXCI7XHJcbiAgICBzdGF0aWMgZmNtVXJsID0gXCJodHRwczovL2ZjbS5nb29nbGVhcGlzLmNvbS9mY20vc2VuZFwiO1xyXG4gICAgc3RhdGljIGFwcEtleSA9IFwiXCI7XHJcbiAgICBzdGF0aWMgYXV0aEhlYWRlciA9IFwiXCI7XHJcbiAgICBzdGF0aWMgZmNtQXV0aD1cImtleT1BQUFBN1pPWDlXQTpBUEE5MWJHOEtMTHNuNkNzZFBiSENma05SNnBUSHdvMy1ZNXJhenIzbUZ0NXFFa05MU3pkRjMtdnZudkVfMGE1eVl6TjM3cVRDMWk5WFNDdFgzcUdOckhyaDdIT0owbHYwaVJoaXI5QTE3U3dVS1pGdnk2U0YwZFdtSVZJbWdvTW9CMVMxcTNocUNKUlwiO1xyXG4gICAgc3RhdGljIHRva2VuID0gZ2V0U3RyaW5nKFwidG9rZW5cIik7XHJcbiAgICBzdGF0aWMgZGV2aWNlVG9rZW49IGdldFN0cmluZyhcImRldmljZVRva2VuXCIpXHJcbiAgfSJdfQ==