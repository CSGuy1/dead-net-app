import { Component } from "@angular/core";
import { CDModel } from "./cd.model";
import { cd_list } from "./cd_list";

@Component({
    selector: "dead-cd",
    templateUrl: "cd-layout.component.html",
    styleUrls: ["cd-layout.component.css"]
})

export class CDLayoutComponent {
    cds: CDModel[] = [];

    constructor() {
        for (var cd of cd_list) {
            this.cds.push(cd);
        }
    }
}