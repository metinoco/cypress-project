import { ThankYouForYourPurchaseElements } from "./thank-you-for-your-purchase-elements";

export class ThankYouForYourPurchaseMethods {
    static clickOnOkButton() {
        cy.wait(1000)
        ThankYouForYourPurchaseElements.buttons.ok.click();
    }

    static verifyGreenCheckMarkIsDisplayed() {
        cy.wait(2000);
        ThankYouForYourPurchaseElements.icons.greenCheckMark.should("exist");
    }
}