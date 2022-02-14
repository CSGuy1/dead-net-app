import { Component } from "@angular/core";
import { NewReleasesModel } from "./new-releases.model";
import { new_release_list } from "./new_releases_list";

@Component({
    selector: 'dead-new-releases',
    templateUrl: "New-Releases-layout.component.html",
    styleUrls: ["New-Releases-layout.component.css"],
})

export class NewReleasesLayoutComponent {
    releases: NewReleasesModel[] = [];

    constructor() {
        for (var release of new_release_list) {
            this.releases.push(release)
        }
    }
}