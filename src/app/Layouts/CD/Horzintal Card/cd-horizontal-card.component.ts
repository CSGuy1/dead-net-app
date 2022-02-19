import { Component, Input } from "@angular/core";

@Component({
    selector: 'cd-horizontal-card',
    templateUrl: 'cd-horizontal-card.component.html',
    styleUrls: ['cd-horizontal-card.component.css']
})

export class CDHorizontalCardComponent {
    @Input() img: string;
    @Input() title: string;
    @Input() price: string;
    @Input() description: string;

    constructor() {
        this.img = "";
        this.title = "MISSING TITLE";
        this.price = "$";
        this.description = "MISSING DESCRIPTION";
    }
}