import { Common } from './nfc-card-reader.common';
import * as application from "tns-core-modules/application";
let Nfc = require("nativescript-nfc").Nfc;
declare var com: any;

export class NfcCardReader extends Common {

    private cardNumber: string;
    private expiryDate: string;

    public NfcCardReader() {
        let nfc = new Nfc();
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
            this.cardNumber = cardHelper.getCardNumber();
            this.expiryDate = cardHelper.getExpiryDate();
        }).then(() => {
            console.log("OnTagDiscovered listener added");
        });
    }

    getCardNumber(): string {
        return this.cardNumber;
    }

    getExpiryDate(): string {
        return this.expiryDate;
    }

}
