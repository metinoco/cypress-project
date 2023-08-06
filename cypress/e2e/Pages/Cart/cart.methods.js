import { CartElements } from "./cart.element";

export class CartMethods {
    static clickOnDeleteLink (productName){
        CartElements.links.delete(productName).click();
    }
}