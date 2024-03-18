import { Logger } from "../../util/logger";
import { commonPageMethods } from "../Common-page/common-page.methods";
import { LoginMethods } from "../Login/login.methods";
import { CartElements } from "./cart.element";

export class CartMethods {
    static clickOnDeleteLink(productName) {
        CartElements.links.delete(productName).click();
    }

    static verifyProductAdded(productName) {
        CartElements.links.delete(productName).should('be.visible');
    }

    static verifyCartPageIsShown() {
        cy.url().should('include', 'cart.html');
    }

    static clickOnPlaceOrderButton() {
        CartElements.buttons.placeOrder.click();
    }

    static deleteProducts () {
        cy.intercept('POST', 'https://api.demoblaze.com/deleteitem').as('deleteItem')
        cy.get('a[onclick*="deleteItem"]').each(link=>{
            link.click();
            cy.wait('@deleteItem')
        })
    }

    static emptyCart (username, password) {
        Logger.subStep('Navegando a Demoblaze')
        commonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click en Logout')
        commonPageMethods.logOut();
        Logger.subStep('Click en Home option')
        commonPageMethods.clickOnHomeOption();
        Logger.subStep('Click en Log in')
        commonPageMethods.clickOnLoginOption();
        Logger.subStep(`Login con estas credenciales ${username} y ${password}`)
        LoginMethods.login(username, password);
        Logger.subStep('Click en el carrito')
        commonPageMethods.clickOnCartOption();
        Logger.subStep('Borrando productos del carrito')
        this.deleteProducts();
    }
}