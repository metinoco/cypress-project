import { thankYouForYourPurchaseElements } from "./thank-you-for-your-purchase.elements";

export class thankYouForYourPurchaseMethods {
    static clickOnOkButton (){
        thankYouForYourPurchaseElements.buttons.ok.click();
    }

    static verifyGreenCheckMarkIsDisplayed (){
        thankYouForYourPurchaseElements.icons.greenCheckMark.should('exist');
    }
}