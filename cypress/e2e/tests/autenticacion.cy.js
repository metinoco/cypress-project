import { commonPageData } from "../Pages/Common-page/common-page.data";
import { commonPageMethods } from "../Pages/Common-page/common-page.methods";
import { LoginData } from "../Pages/Login/login.data";
import { LoginMethods } from "../Pages/Login/login.methods";
import { Logger } from "../util/logger";

describe(commonPageData.testSuites.autenticacion, () => {
    it('Inicio de sesión válido', () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio');
        commonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Log in" en la barra de navegación');
        commonPageMethods.clickOnLoginOption();

        Logger.stepNumber(3)
        Logger.step('Ingresar un nombre de usuario y contraseña válidos');
        LoginMethods.insertUsername(LoginData.validCredentials.username);
        LoginMethods.insertPassword(LoginData.validCredentials.password);

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Log in" para iniciar sesión');
        LoginMethods.clickOnLoginButton();
        Logger.verification('Verificar que se redirige al usuario a la página de inicio.')
        commonPageMethods.verifySignedUser(LoginData.validCredentials.username)

        Logger.postCondition('Log out')
        commonPageMethods.logOut();
    });

    it('Inicio de sesión inválido', () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio');
        commonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Log in" en la barra de navegación');
        commonPageMethods.clickOnLoginOption();

        Logger.stepNumber(3)
        Logger.step('Ingresar un nombre de usuario y/o contraseña inválidos');
        LoginMethods.insertUsername(LoginData.validCredentials.username);
        LoginMethods.insertPassword('contrasenainvalida');

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Log in" para iniciar sesión');
        LoginMethods.clickOnLoginButton();
        Logger.verification('Verificar que se muestra un mensaje de error indicando que el inicio de sesión ha fallado.');
        LoginMethods.verifyWrongPasswordMessage();
    });
});