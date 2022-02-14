export class NewReleasesModel {
    img: string;
    description: string;
    price: string;

    constructor(img: string, description: string, price: string) {
        this.img = img;
        this.description = description;
        this.price = price;
    }
}