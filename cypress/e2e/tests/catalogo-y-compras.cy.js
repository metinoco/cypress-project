import { commonPageData } from "../Pages/Common-page/common-page.data";
import { commonPageMethods } from "../Pages/Common-page/common-page.methods";
import { homeMethods } from "../Pages/Home/home.methods";
import { LoginData } from "../Pages/Login/login.data";
import { LoginMethods } from "../Pages/Login/login.methods";
import { Logger } from "../util/logger";

const user = LoginData.validCredentials;

describe(commonPageData.testSuites.catalogoYCompras, () => {
    it('Navegación por categorías', () => {

        Logger.stepNumber(1);
        Logger.step('Iniciar sesión como usuario registrado.');
        Logger.subStep('Navegar a la aplicación');
        commonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Dar click en el link de Login');
        commonPageMethods.clickOnLoginOption();
        LoginMethods.login(user.username, user.password);

        Logger.stepNumber(2);
        Logger.step('Navegar a la página de inicio');
        commonPageMethods.clickOnHomeOption();

        Logger.stepNumber(3);
        Logger.step('Seleccionar una categoría de productos en el menú de navegación');
        homeMethods.clickOnMonitorsOption();
        Logger.verification('Verificar que se muestra la lista de productos correspondiente a la categoríaseleccionada');
        homeMethods.verifyProductDisplayed('Apple monitor 24');
        homeMethods.verifyProductDisplayed('ASUS Full HD');
    });
});