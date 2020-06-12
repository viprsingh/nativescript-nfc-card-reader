import { Component, OnInit } from "@angular/core";
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
        let CardHelper = com.github.devnied.emvnfccard.parser.CardHelper;
        let cardHelper = new CardHelper();
        console.log(cardHelper.getCardNumber());
        console.log(cardHelper.getExpiryDate());
    }
}
