import { commonPageData } from "../Pages/Common-page/common-page.data";
import { Logger } from "../util/logger";
import { commonPageMethods } from "../Pages/Common-page/common-page.methods";
import { signupMethods } from "../Pages/Signup/signup.methods";
import { LoginData } from "../Pages/Login/login.data";
const user = commonPageMethods.generateRandomString();
const password = commonPageMethods.generateRandomString();
const existingUser = LoginData.validCredentials.username;



describe(commonPageData.testSuites.registro, () => {
    it('Registro de usuario válido', () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        commonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación')
        commonPageMethods.clickOnSignupOption();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información válida')
        signupMethods.insertUsername(user);
        signupMethods.insertPassword(password);

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario')
        signupMethods.clickOnSignupButton();
        Logger.verification('Verificar que se muestre el mensaje "Sign up succesfull."')
        signupMethods.verifySignupSuccesfullMessageDisplayed();

    });

    it('Registro de usuario inválido', () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        commonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación')
        commonPageMethods.clickOnSignupOption();

        Logger.stepNumber(3)
        Logger.step('Completar algunos campos con información inválida')
        signupMethods.insertUsername(existingUser);
        signupMethods.insertPassword(password);

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario')
        signupMethods.clickOnSignupButton();
        Logger.verification('Verificar que se muestra un mensaje de error indicando los campos inválidos.')
        signupMethods.verifyThatThisUserAlreadyExistMessageIsDisplayed();

    });

});