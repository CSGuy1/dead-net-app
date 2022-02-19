import { Component, Input } from "@angular/core";

@Component({
    selector: 'new-releases-vertical',
    templateUrl: 'new-releases-vertical.component.html',
    styleUrls: ['new-releases-vertical.component.css']
})

export class NewReleasesVerticalCardComponent {
    @Input() img: string;
    @Input() description: string;
    @Input() price: string;

    constructor() {
        this.img = "";
        this.description = "MISSING DESCRIPTION!"
        this.price = "$XXXX"
    }
}