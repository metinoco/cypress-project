import { commonPageMethods } from "../Common-page/common-page.methods";
import { ProductDetailsElements } from "./product-details.elements"

export class ProductDetailsMethods {
    static clickOnAddToCartButton (){
        ProductDetailsElements.buttons.addToCart.click();
    }

    static verifyProductDetailsPageDisplayed () {
        ProductDetailsElements.buttons.addToCart.should('be.visible');
    }

    static verifyProductAddedMessage () {
        commonPageMethods.verifyAlert('Product added');
    }
}