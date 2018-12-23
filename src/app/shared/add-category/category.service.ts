import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Category } from "./category.model";
import { Config } from "../config";

@Injectable()
export class CategoryService {
    constructor(private http: Http) { }
    token= ""
    category(category: Category) {
        console.log(category)
         this.token = "Bearer" + category.token

        let headers = new Headers({ "Authorization": this.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(
            Config.apiUrl + "category",
            JSON.stringify({

                name: category.name,
                image: category.image,
                type: category.type,
            }),
            { headers: this.getCommonHeaders() }
        ).pipe(
            map(response => response.json()),
            map(data => {
                return data
            }),
            catchError(this.handleErrors)
        );
    }

    edit(category: Category) {
        console.log(category)
         this.token = "Bearer" + category.token

        let headers = new Headers({ "Authorization": this.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(
            Config.apiUrl + "edit/category",
            JSON.stringify({
                id: category.id,
                name: category.name,
                image: category.image,
                type: category.type,
            }),
            { headers: this.getCommonHeaders() }
        ).pipe(
            map(response => response.json()),
            map(data => {
                return data
            }),
            catchError(this.handleErrors)
        );
    }

    delete(category: Category) {
        console.log(category)
         this.token = "Bearer" + category.token

        let headers = new Headers({ "Authorization": this.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(
            Config.apiUrl + "delete/category",
            JSON.stringify({
                id: category.id,
            }),
            { headers: this.getCommonHeaders() }
        ).pipe(
            map(response => response.json()),
            map(data => {
                return data
            }),
            catchError(this.handleErrors)
        );
    }

    getCommonHeaders() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", this.token);
        return headers;
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}