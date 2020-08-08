import { Component, OnInit, Provider } from "@angular/core";
import { NfcCardReader } from "../../../../src";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {


    private cardNumber: string="";
    private cardExpiry:string="";
    public itemDesc:string=""
    public itemValue:number=0;
    public addItem:boolean=false;
    itemObject:{"description":string,"value":number}[]=[];
    totalAmount:number=0;
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {

    }
    clickCard(){
        this.cardExpiry=""
        this.cardNumber=""
        let nfcCardReader = new NfcCardReader();
        nfcCardReader.readCard()
            .then(()=>{
                    this.cardNumber = nfcCardReader.getCardNumber()
                    this.cardExpiry = (new Date(nfcCardReader.getExpiryDate()).getMonth() + 1).toString();
                    nfcCardReader.closeListener();
            })

    }

    onAddItem(){

        this.addItem=true;
    }

    addItemToObject(item){
        console.log(item, this.itemDesc)
    }

    totalValue(){
        this.totalAmount = 0;
        this.itemObject.forEach((x)=>{
            this.totalAmount += x.value
        })
    }

}
