import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item.model";

@Injectable({
    providedIn: 'root',
})

export class HomeLayoutService {
    private baseUrl:string = "https://dead-net-app-default-rtdb.firebaseio.com/";
    private newMusicEndpoint:string = "products.json";

    constructor(private http:HttpClient) {

    }

    public getHomeNewMusic(){
        return this.http.get<ProductItemModel []>(this.baseUrl + this.newMusicEndpoint);
    }

    public getNewMusicIndex(index:number){
        return this.http.get<ProductItemModel>(this.baseUrl + 'products/' + index + '.json')
    }
}