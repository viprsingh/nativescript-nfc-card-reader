import { Component, OnInit } from "@angular/core";
import * as application from "tns-core-modules/application";
declare var android: any;
declare var com: any;

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        let context = application.android.context;
        console.log(context);
        const mainActivity = com.pro100svitlo.nfccardread.MainActivity;
        const nfcIntent = new android.content.Intent(context, mainActivity.class);
        console.log(nfcIntent);
        let act = application.android.startActivity;
        act.startActivity(nfcIntent);
    }
}
