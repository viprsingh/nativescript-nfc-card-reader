import { NfcCardReader } from 'nativescript-nfc-card-reader';
console.log(new NfcCardReader().getCardNumber());
console.log(new NfcCardReader().getExpiryDate());
import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { }
