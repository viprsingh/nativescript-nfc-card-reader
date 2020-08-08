import { Common } from './nfc-card-reader.common';
export declare class NfcCardReader extends Common {s
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here
  constructor();
  readCard()
  getCardNumber(): string;
  getExpiryDate(): string;
  closeListener()
}
