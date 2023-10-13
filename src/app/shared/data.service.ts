import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, map, Observable } from "rxjs";

import { RestaurantInfo, RestaurantModel } from "./models/restaurant-model";


@Injectable({
    providedIn: 'root'
})
export class DataService {

    public server_outlets: any
    
    constructor(
        private httpClient: HttpClient
    ) {}

    getData(): Observable<RestaurantModel> {
        return this.httpClient.get<RestaurantModel>(
            'http://127.0.0.1:8000/api/outlets')
    }

    getOutletsData() {
        // this.getData().subscribe(res => {
        //   this.server_outlets = res
        //   console.log(res)
        // });
        // return this.getData().pipe(
        //     // tap((server_outlets: RestaurantModel) => console.log(server_outlets)),
        //     map((server_outlets: RestaurantModel) => {
        //         return new RestaurantInfo(
        //             server_outlets.id,
        //             server_outlets.outlet,
        //             server_outlets.label,
        //             server_outlets.foodTypeShortLabel,
        //             server_outlets.foodTypeId,
        //             server_outlets.img,
        //             server_outlets.logo,
        //             server_outlets.hours
        //         )
        //     })
        // )
      }

}