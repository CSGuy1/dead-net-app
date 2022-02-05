export class NewsItemModel {
    cardDate: string;
    cardDescription: string;

    constructor(date: string, description: string) {
        this.cardDate = date;
        this.cardDescription = description;
    }
}