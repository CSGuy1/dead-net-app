import { Component, Input } from "@angular/core";

@Component({
    selector: "dead-card-horizontal",
    templateUrl: "horizontal.card.component.html",
    styleUrls: ["horizontal.card.component.css"]
})

export class HorizontalCardComponent{
    @Input() cardDate: string;
    @Input() cardDescription: string;

    constructor() {
        this.cardDate = "Month Day, Year";
        this.cardDescription = "MISSING DESCRIPTION";
    }
}