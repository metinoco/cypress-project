import { CartMethods } from "../Pages/Cart/cart.methods";
import { commonPageData } from "../Pages/Common-page/common-page.data";
import { commonPageMethods } from "../Pages/Common-page/common-page.methods";
import { homeMethods } from "../Pages/Home/home.methods";
import { LoginData } from "../Pages/Login/login.data";
import { LoginMethods } from "../Pages/Login/login.methods";
import { PlaceOrderData } from "../Pages/Place-Order/place-order.data";
import { PlaceOrderMethods } from "../Pages/Place-Order/place-order.methods";
import { ProductDetailsMethods } from "../Pages/Product-details/product-details.methods";
import { ThankYouForYourPurchaseMethods } from "../Pages/thank-for-you-purchase/thank-you-for-your-purchase-methods";
import { Logger } from "../util/logger";

const user = LoginData.validCredentials;
const product = 'ASUS Full HD';

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

    it('Agregar producto al carrito', () => {

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

        Logger.stepNumber(4);
        Logger.step('Hacer clic en un producto específico');
        homeMethods.clickOnProductLink(product);

        Logger.stepNumber(5);
        Logger.verification('Verificar que se muestra la página de detalles del producto');
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(6);
        Logger.step('Hacer clic en el botón "Add to cart');
        ProductDetailsMethods.clickOnAddToCartButton();

        Logger.stepNumber(7);
        Logger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito');
        ProductDetailsMethods.verifyProductAddedMessage();
        commonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product);
    });

    it.only('Realizar una compra', () => {

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

        Logger.stepNumber(4);
        Logger.step('Hacer clic en un producto específico');
        homeMethods.clickOnProductLink(product);

        Logger.stepNumber(5);
        Logger.verification('Verificar que se muestra la página de detalles del producto');
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(6);
        Logger.step('Hacer clic en el botón "Add to cart');
        ProductDetailsMethods.clickOnAddToCartButton();

        Logger.stepNumber(7);
        Logger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito');
        ProductDetailsMethods.verifyProductAddedMessage();
        commonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product);

        Logger.stepNumber(8);
        Logger.step('Hacer clic en la opción "Cart" de la barra de navegación');
        commonPageMethods.clickOnCartOption();

        Logger.stepNumber(9);
        Logger.step('Verificar que se muestra la página del carrito de compras');
        CartMethods.verifyCartPageIsShown();

        Logger.stepNumber(10);
        Logger.step('Hacer clic en el botón "Place Order"');
        CartMethods.clickOnPlaceOrderButton();

        Logger.stepNumber(11);
        Logger.step('Completar los campos obligatorios en la página de información de envío');
        PlaceOrderMethods.insertOrderInformation(PlaceOrderData.testData)

        Logger.stepNumber(12);
        Logger.step('Hacer clic en el botón "Purchase"');
        PlaceOrderMethods.clickOnPurchaseButton();

        Logger.stepNumber(13);
        Logger.step('Verificar que se muestra un mensaje de confirmación y se redirige al usuario a la página de inicio');
        ThankYouForYourPurchaseMethods.verifyGreenCheckMarkIsDisplayed();
        ThankYouForYourPurchaseMethods.clickOnOkButton();
        homeMethods.verifyHomePageIsShown();
    });
})