import { CartElements } from "./cart.element";

export class CartMethods {
    static clickOnDeleteLink (productName){
        CartElements.links.delete(productName).click();
    }

    static verifyProductAdded(productName) {
        CartElements.links.delete(productName).should('be.visible');
    }
}