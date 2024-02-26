import { commonPageData } from "../Pages/Common-page/common-page.data";
import { Logger } from "../util/logger";
import { commonPageMethods } from "../Pages/Common-page/common-page.methods";
import { signupMethods } from "../Pages/Signup/signup.methods";



describe(commonPageData.testSuites.registroYAutenticación, () => {
    it('Registro de usuario válido', () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        commonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación')
        commonPageMethods.clickOnSignupOption();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información válida')
        signupMethods.insertUsername('Monshy');
        signupMethods.insertPassword('123456!');

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario')
        signupMethods.clickOnSignupButton();
        Logger.verification('Verificar que se muestre el mensaje "Sign up succesfull."')
        signupMethods.verifySignupSuccesfullMessageDisplayed();

    });

});