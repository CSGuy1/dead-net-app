import { Component, Input } from "@angular/core";

@Component({
    selector: 'dead-features',
    templateUrl: 'features-section.component.html',
    styleUrls: ['features-section.component.css']
})

export class HomeFeaturesComponent {
    @Input() img: string;
    @Input() date: string;

    constructor() {
        this.img = "";
        this.date = "MISSING DATE!";
    }
}