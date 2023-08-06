/// <reference types="Cypress" />
import { CartMethods } from "./Pages/Cart/cart.methods"
import { LoginMethods } from "./Pages/Login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    const usuario = 'random01'
    const contrasena = 'random01'
    cy.visit('https://demoblaze.com/')
    cy.wait(20000);
    // cy.get('a[data-target="#logInModal"]').click()
    // LoginMethods.login (usuario, contrasena)
    // cy.get('a#nameofuser').should('contain.text', usuario)
    CartMethods.clickOnDeleteLink('Nokia lumia 1520')
    cy.wait(20000);
  })
})