import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NewsItemModel } from "src/app/Horizontal Card/news-item.model";
import { ProductItemModel } from "../../Vertical Card/product-item.model";
import { HomeFeaturesModel } from "./Features/home-features.model";

@Injectable({
    providedIn: 'root',
})

export class HomeLayoutService {
    private baseUrl: string = "https://dead-net-app-default-rtdb.firebaseio.com/";
    private newMusicEndpoint: string = "products.json";
    private newsEndpoint: string = "news.json";
    private featuresEndpoint: string = "features.json";

    constructor(private http: HttpClient) {

    }

    public getHomeNewMusic() {
        return this.http.get<ProductItemModel[]>(this.baseUrl + this.newMusicEndpoint);
    }

    public getNewMusicIndex(index: number) {
        return this.http.get<ProductItemModel>(this.baseUrl + 'products/' + index + '.json');
    }

    public getHomeNews() {
        return this.http.get<NewsItemModel[]>(this.baseUrl + this.newsEndpoint);
    }

    public getNewsIndex(index: number) {
        return this.http.get<NewsItemModel>(this.baseUrl + 'news/' + index + '.json');
    }

    public getHomeFeatures() {
        return this.http.get<HomeFeaturesModel[]>(this.baseUrl + this.featuresEndpoint);
    }

    private getFeaturesIndex(index: number) {
        return this.http.get<HomeFeaturesModel>(this.baseUrl + 'features/' + index + '.json');
    }
}