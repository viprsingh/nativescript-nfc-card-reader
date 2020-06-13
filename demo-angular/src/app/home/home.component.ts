import { Component, OnInit, Provider } from "@angular/core";
import * as application from "tns-core-modules/application";
import { NfcTagData } from "nativescript-nfc";
var Nfc = require("nativescript-nfc").Nfc;
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
        var nfc = new Nfc();
        nfc.available().then((avail) => {
            console.log(avail ? "Yes" : "No");
        });

        nfc.enabled().then((on) => {
            console.log(on ? "Yes" : "No");
        });

        nfc.setOnTagDiscoveredListener(() => {
            let CardHelper = com.github.devnied.emvnfccard.parser.CardHelper;
            let cardHelper = new CardHelper();
            let provider = cardHelper.getProvider();
            const activity = application.android.foregroundActivity || application.android.startActivity;
            let intent = activity.getIntent();
            let tag = intent.getParcelableExtra(android.nfc.NfcAdapter.EXTRA_TAG) as android.nfc.Tag;
            provider.setmTagCom(tag);
            cardHelper.parseCard();
            console.log(cardHelper.getCardNumber());
            console.log(cardHelper.getExpiryDate());
        }).then(() => {
            console.log("OnTagDiscovered listener added");
        });
    }
}
