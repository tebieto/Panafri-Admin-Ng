"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var application_settings_1 = require("tns-core-modules/application-settings");
var config_1 = require("../config");
var requests_model_1 = require("./requests.model");
var RequestsService = /** @class */ (function () {
    function RequestsService(http) {
        this.http = http;
        this.baseUrl = config_1.Config.apiUrl + "requests";
    }
    RequestsService.prototype.load = function (params) {
        // Kinvey-specific syntax to sort the groceries by last modified time. Don’t worry about the details here.
        var headers = new http_1.Headers({ "Authorization": "Bearer " + application_settings_1.getString("token") });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.baseUrl, options).pipe(operators_1.map(function (res) { return res.json(); }), operators_1.map(function (data) {
            var requestList = [];
            data.forEach(function (request) {
                requestList.push(new requests_model_1.Requests(request.id, request.type, request.sender, request.receiver, request.status, request.delivery, request.location, request.seler_status, request.buyer_status, request.created_at, request.updated_at));
            });
            return data;
        }), operators_1.catchError(this.handleErrors));
    };
    RequestsService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Kinvey " + config_1.Config.token);
        return headers;
    };
    RequestsService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return rxjs_1.Observable.throw(error);
    };
    RequestsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], RequestsService);
    return RequestsService;
}());
exports.RequestsService = RequestsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXlGO0FBQ3pGLDZCQUFrQztBQUNsQyw0Q0FBc0Q7QUFDdEQsOEVBQWlGO0FBRWpGLG9DQUFtQztBQUNuQyxtREFBNEM7QUFHNUM7SUFHSSx5QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFGOUIsWUFBTyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO0lBRUgsQ0FBQztJQUVuQyw4QkFBSSxHQUFKLFVBQUssTUFBTTtRQUNQLDBHQUEwRztRQUUxRyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGVBQWUsRUFBRSxTQUFTLEdBQUcsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFFdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUMzQyxlQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLEVBQ3RCLGVBQUcsQ0FBQyxVQUFBLElBQUk7WUFFSixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87Z0JBQ2pCLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBUSxDQUN6QixPQUFPLENBQUMsRUFBRSxFQUNWLE9BQU8sQ0FBQyxJQUFJLEVBQ1osT0FBTyxDQUFDLE1BQU0sRUFDZCxPQUFPLENBQUMsUUFBUSxFQUNoQixPQUFPLENBQUMsTUFBTSxFQUNkLE9BQU8sQ0FBQyxRQUFRLEVBQ2hCLE9BQU8sQ0FBQyxRQUFRLEVBQ2hCLE9BQU8sQ0FBQyxZQUFZLEVBQ3BCLE9BQU8sQ0FBQyxZQUFZLEVBQ3BCLE9BQU8sQ0FBQyxVQUFVLEVBQ2xCLE9BQU8sQ0FBQyxVQUFVLENBQ2pCLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUMsRUFDRixzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEMsQ0FBQztJQUNOLENBQUM7SUFHRCwwQ0FBZ0IsR0FBaEI7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxzQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsaUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQWhEUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBSWlCLFdBQUk7T0FIckIsZUFBZSxDQWlEM0I7SUFBRCxzQkFBQztDQUFBLEFBakRELElBaURDO0FBakRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucywgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZyxzZXRTdHJpbmcsY2xlYXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IFJlcXVlc3RzIH0gZnJvbSBcIi4vcmVxdWVzdHMubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlcXVlc3RzU2VydmljZSB7XHJcbiAgICBiYXNlVXJsID0gQ29uZmlnLmFwaVVybCArIFwicmVxdWVzdHNcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIGxvYWQocGFyYW1zKSB7XHJcbiAgICAgICAgLy8gS2ludmV5LXNwZWNpZmljIHN5bnRheCB0byBzb3J0IHRoZSBncm9jZXJpZXMgYnkgbGFzdCBtb2RpZmllZCB0aW1lLiBEb27igJl0IHdvcnJ5IGFib3V0IHRoZSBkZXRhaWxzIGhlcmUuXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7IFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIGdldFN0cmluZyhcInRva2VuXCIpIH0pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwsb3B0aW9ucykucGlwZShcclxuICAgICAgICAgICAgbWFwKHJlcyA9PiByZXMuanNvbigpKSxcclxuICAgICAgICAgICAgbWFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVxdWVzdExpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgocmVxdWVzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RMaXN0LnB1c2gobmV3IFJlcXVlc3RzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LmlkLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC50eXBlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZW5kZXIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnJlY2VpdmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5kZWxpdmVyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5sb2NhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZWxlcl9zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuYnV5ZXJfc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LmNyZWF0ZWRfYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3QudXBkYXRlZF9hdCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGdldENvbW1vbkhlYWRlcnMoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJLaW52ZXkgXCIgKyBDb25maWcudG9rZW4pO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICB9XHJcbn0iXX0=