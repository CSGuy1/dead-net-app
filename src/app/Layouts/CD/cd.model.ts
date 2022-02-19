export class CDModel {
    img: string;
    title: string;
    price: string;
    description: string;

    constructor(img: string, title: string, price: string, description: string) {
        this.img = img;
        this.title = title;
        this.price = price;
        this.description = description;
    }
}