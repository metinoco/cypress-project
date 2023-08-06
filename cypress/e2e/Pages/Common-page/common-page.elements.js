export class commonPageElements {
    static get topMenu () {
        return {
            get home () {
                return cy.contains('a', 'Home');
            },

            get contact (){
                return cy.contains('a', 'Contact');
            },

            get aboutUs (){
                return cy.contains('a', 'About us');
            },

            get cart (){
                return cy.contains('a', 'Cart');
            },

            get login (){
                return cy.contains('a', 'Log in');
            },

            get signUp (){
                return cy.contains('a', 'Sign Up');
            },
        }
    }
}