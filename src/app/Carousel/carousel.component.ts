import { Component, Input } from "@angular/core";

@Component({
    selector: "dead-carousel",
    templateUrl: "./carousel.component.html",
    styleUrls: ["./carousel.component.css"]
})

export class CarouselComponent{
    @Input() img: string;

    constructor(){
        this.img = "";
    }
}