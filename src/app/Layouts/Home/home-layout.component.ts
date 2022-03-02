import { Component, OnInit } from "@angular/core";
import { mock_news_list } from "src/app/Horizontal Card/mock_news_list";
import { NewsItemModel } from "src/app/Horizontal Card/news-item.model";
import { HomeLayoutService } from "src/app/Vertical Card/home-layout.service";
import { ProductItemModel } from "src/app/Vertical Card/product-item.model";
import { features_list } from "./Features/features_list";
import { HomeFeaturesModel } from "./Features/home-features.model";

@Component({
    selector: 'dead-home',
    templateUrl: "home-layout.component.html",
    styleUrls: ["home-layout.component.css"]
})

export class HomeLayoutComponent implements OnInit{
    products: ProductItemModel[] = [];
    newsItems: NewsItemModel[] = [];
    features: HomeFeaturesModel[] = [];

    constructor(private homeProducts:HomeLayoutService) {
        for (var news of mock_news_list) {
            console.log(news);
            this.newsItems.push(news);
        }
        for (var feature of features_list) {
            console.log(feature);
            this.features.push(feature);
        }
    }

    ngOnInit(): void {
        this.homeProducts.getHomeNewMusic().subscribe(data => {
            console.log("Fetching New Music data for home");
            for(var product of data) {
                console.log(product);
                this.products.push(product);
            }
        })
    }
}