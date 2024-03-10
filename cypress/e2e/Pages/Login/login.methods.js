import { Logger } from "../../util/logger";
import { commonPageMethods } from "../Common-page/common-page.methods";
import { LoginElements } from "./login.elements";

export class LoginMethods {
    static insertUsername (username){
        LoginElements.textboxes.username.invoke('val', username)
    }

    static insertPassword (password){
        LoginElements.textboxes.password.invoke('val', password)
    }

    static clickOnLoginButton (){
        LoginElements.buttons.login.click()
    }

    static login (username, password) {
        Logger.subStep('Insert username')
        this.insertUsername(username)
        Logger.subStep('Insert password')
        this.insertPassword(password)
        Logger.subStep('Click on login button')
        this.clickOnLoginButton()
    }

    static verifyWrongPasswordMessage() {
        commonPageMethods.verifyAlert ('Wrong password.')
    }
}