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
        var intent = new android.content.Intent();
        intent.setClassName("com.pro100svitlo.nfccardread", "com.pro100svitlo.nfccardread.MainActivity");
        intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
        console.log(intent);
        console.log(com.pro100svitlo.nfccardread.MainActivity.class);
        let act = application.android.startActivity;
        act.startActivity(intent);
    }
}
