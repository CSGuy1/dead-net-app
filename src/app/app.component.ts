import { Component } from '@angular/core';
import { NewsItemModel } from './Horizontal Card/news-item.model';
import { mock_product_list } from './Vertical Card/mock_product_list';
import { mock_news_list } from './Horizontal Card/mock_news_list';
import { ProductItemModel } from './Vertical Card/product-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dead-net-app-1';
  products: ProductItemModel [] = [];
  newsItems: NewsItemModel [] =[];

  constructor() {
    for (var product of mock_product_list){
      console.log(product);
      this.products.push(product);
    }

    for (var news of mock_news_list){
      console.log(news);
      this.newsItems.push(news);
    }
  }
}
