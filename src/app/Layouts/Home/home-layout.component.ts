import { Component, OnInit } from "@angular/core";
import { NewsItemModel } from "src/app/Horizontal Card/news-item.model";
import { HomeLayoutService } from "src/app/Layouts/Home/home-layout.service";
import { ProductItemModel } from "src/app/Vertical Card/product-item.model";
import { HomeFeaturesModel } from "./Features/home-features.model";

@Component({
    selector: 'dead-home',
    templateUrl: "home-layout.component.html",
    styleUrls: ["home-layout.component.css"]
})

export class HomeLayoutComponent implements OnInit {
    products: ProductItemModel[] = [];
    newsItems: NewsItemModel[] = [];
    features: HomeFeaturesModel[] = [];

    constructor(private homeProducts: HomeLayoutService) {
    }

    ngOnInit(): void {
        this.homeProducts.getHomeNewMusic().subscribe(data => {
            console.log("Fetching New Music data for home");
            for (var product of data) {
                console.log(product);
                this.products.push(product);
            }
        })

        this.homeProducts.getHomeNews().subscribe(data => {
            console.log("Fetching News data for home");
            for (var news of data) {
                console.log(news);
                this.newsItems.push(news);
            }
        })

        this.homeProducts.getHomeFeatures().subscribe(data => {
            console.log("Fetching the features data for home");
            for (var feature of data) {
                console.log(feature);
                this.features.push(feature);
            }
        })
    }
}