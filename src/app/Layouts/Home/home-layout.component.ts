import { Component } from "@angular/core";
import { mock_news_list } from "src/app/Horizontal Card/mock_news_list";
import { NewsItemModel } from "src/app/Horizontal Card/news-item.model";
import { mock_product_list } from "src/app/Vertical Card/mock_product_list";
import { ProductItemModel } from "src/app/Vertical Card/product-item.model";
import { features_list } from "./Features/features_list";
import { HomeFeaturesModel } from "./Features/home-features.model";

@Component({
    selector: 'dead-home',
    templateUrl: "home-layout.component.html",
    styleUrls: ["home-layout.component.css"]
})

export class HomeLayoutComponent {
    products: ProductItemModel[] = [];
    newsItems: NewsItemModel[] = [];
    features: HomeFeaturesModel[] = [];

    constructor() {
        for (var product of mock_product_list) {
            console.log(product);
            this.products.push(product);
        }
        for (var news of mock_news_list) {
            console.log(news);
            this.newsItems.push(news);
        }
        for (var feature of features_list) {
            console.log(feature);
            this.features.push(feature);
        }
    }
}