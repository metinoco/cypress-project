import { commonPageData } from "./common-page.data";
import { commonPageElements } from "./common-page.elements";

export class commonPageMethods {
    static navigateToDemoBlaze () {
        cy.visit(commonPageData.url);
    }

    static clickOnHomeOption () {
        commonPageElements.topMenu.home.click();    
    }

    static clickOnContactOption () {
        commonPageElements.topMenu.contact.click();    
    }

    static clickOnAboutUsOption () {
        commonPageElements.topMenu.aboutUs.click();    
    }

    static clickOnCartOption () {
        commonPageElements.topMenu.cart.click();    
    }

    static clickOnLoginOption () {
        commonPageElements.topMenu.login.click();    
    }

    static clickOnSignupOption () {
        commonPageElements.topMenu.signUp.click();    
    }
}