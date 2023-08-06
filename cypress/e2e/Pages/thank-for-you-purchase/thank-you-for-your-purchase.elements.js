export class thankYouForYourPurchaseElements {
    static get buttons () {
            return {
                get ok (){
                    return cy.contains('button', 'OK');
                },
            };
    }

    static get icons () {
        return {
            greenCheckMark (){
                return cy.get('.sa-sucess');
            }
        }
    }
}