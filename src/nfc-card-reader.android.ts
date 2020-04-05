import { Common } from './nfc-card-reader.common';

export class NfcCardReader extends Common {

    private cardNumber: string;
    private expiryDate: string;

    public NfcCardReader() {
        let com: any;
        const provider = com.pro100svitlo.creditCardNfcReader.utils.Provider;
        const parser = com.pro100svitlo.creditCardNfcReader.EmvParser;

        // Parse card
        const cardProvider = new provider();
        const contactLess: boolean = true;

        // Create Parser
        const cardParser = new parser(cardProvider, contactLess);

        // Read card
        const card = cardParser.readEmvCard();

        this.cardNumber = card.getCardNumber();
        this.expiryDate = card.getExpiryDate();
    }

    getCardNumber(): string {
        return this.cardNumber;
    }

    getExpiryDate(): string {
        return this.expiryDate;
    }

}
