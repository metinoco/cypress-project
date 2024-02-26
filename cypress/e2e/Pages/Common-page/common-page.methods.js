import { commonPageData } from "./common-page.data";
import { commonPageElements } from "./common-page.elements";

export class commonPageMethods {
    static navigateToDemoBlaze () {
        cy.clearCookies();
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

    static verifyAlert (expectedMessage) {
        cy.on('window:alert', (str) =>{
            expect(str).to.equal(expectedMessage)
        })
    }
}