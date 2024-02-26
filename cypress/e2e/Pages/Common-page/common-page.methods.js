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

    static generateRandomString(length = 10) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    static verifySignedUser (username) {
        commonPageElements.signedUser.should('have.text', `Welcome ${username}`)
    }
    
}