import '@shelex/cypress-allure-plugin';
import './commands'

//Salta los errores que se presenten en el test
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})