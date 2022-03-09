import { Injectable } from "@angular/core";
import { NewsItemModel } from "src/app/Horizontal Card/news-item.model";
import { ProductItemModel } from "../../Vertical Card/product-item.model";
import { HomeFeaturesModel } from "./Features/home-features.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root',
})

export class HomeLayoutService {
    constructor(private db: AngularFireDatabase) {

    }

    public getHomeNewMusic() {
        return this.db.list<ProductItemModel>("products").valueChanges();
    }

    public getNewMusicIndex(index: number) {
    }

    public getHomeNews() {
        return this.db.list<NewsItemModel>("news").valueChanges();
    }

    public getNewsIndex(index: number) {
    }

    public getHomeFeatures() {
        return this.db.list<HomeFeaturesModel>("features").valueChanges();
    }

    private getFeaturesIndex(index: number) {
    }
}