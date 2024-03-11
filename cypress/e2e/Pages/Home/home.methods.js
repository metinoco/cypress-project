import { homeElements } from "./home.elements";

export class homeMethods {
    static clickOnPhonesOption (){
        homeElements.categoriesMenu.phones.click();
    }
    static clickOnLaptopsOption (){
        homeElements.categoriesMenu.laptops.click();
    }
    static clickOnMonitorsOption (){
        homeElements.categoriesMenu.monitors.click();
    }

    static clickOnProductLink (productName) {
        homeElements.product(productName).click();
    }

    static verifyProductDisplayed(productName){
        homeElements.product(productName).should('be.visible');
    }
    static verifyHomePageIsShown() {
        cy.url().should('include', 'index.html');
    }
}