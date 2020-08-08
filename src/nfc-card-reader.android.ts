import { Common } from './nfc-card-reader.common';
import * as application from "tns-core-modules/application";
let Nfc = require("nativescript-nfc").Nfc;
declare var com: any;

export class NfcCardReader extends Common {

    private cardNumber: string = "";
    private expiryDate: string = "";

 async readCard() {

        var a = false;
        var tag
        let nfc = new Nfc();
        var promise
        nfc.available().then((avail) => {})
        nfc.enabled().then( (on) => {

           nfc.setOnTagDiscoveredListener(() => {
                const activity = application.android.foregroundActivity || application.android.startActivity;
                let intent = activity.getIntent();
                tag = intent.getParcelableExtra(android.nfc.NfcAdapter.EXTRA_TAG) as android.nfc.Tag;
                let CardHelper = com.github.devnied.emvnfccard.parser.CardHelper;
                let cardHelper = new CardHelper();
                let provider = cardHelper.getProvider();
                try{
                    provider.setmTagCom(tag);
                    cardHelper.parseCard();
                    this.cardNumber = cardHelper.getCardNumber()
                    this.expiryDate = cardHelper.getExiryDate();
                }
                catch{

                }

            })

        })
     await new Promise((resolve, reject) => setTimeout(resolve, 3000));
        tag=null;
    }



    getCardNumber(): string {

        return this.cardNumber
    }


    getExpiryDate(): string {

        return this.expiryDate
    }

    closeListener(){
        let nfc = new Nfc();
        setTimeout(()=>{
            nfc.setOnTagDiscoveredListener(null).then()
        },1000)

    }


}
