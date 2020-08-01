import { Component, OnInit, Provider } from "@angular/core";
import { NfcCardReader } from "../../../../src";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {

    }
    clickCard(){
        let nfcCardReader = new NfcCardReader();
        console.log(nfcCardReader.getCardNumber());
        console.log(nfcCardReader.getExpiryDate());
    }
}
