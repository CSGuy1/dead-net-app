import { Component, Input } from "@angular/core";

@Component({
    selector: "dead-card-vertical",
    templateUrl: "./vertical.card.component.html",
    styleUrls: ["./vertical.card.component.css"]
})

export class VerticalCardComponent {
    @Input() img: string;
    @Input() description: string;

    constructor() {
        this.img = "";
        this.description = "MISSING DESCRIPTION";
    }
}