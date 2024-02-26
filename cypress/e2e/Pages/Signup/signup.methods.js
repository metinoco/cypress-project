import { commonPageMethods } from "../Common-page/common-page.methods";
import { signupElements } from "./signup.elements";

export class signupMethods {
    static insertUsername (username) {
        signupElements.textboxes.username.invoke('val', username);
    }

    static insertPassword (password) {
        signupElements.textboxes.password.invoke('val', password);
    }

    static clickOnSignupButton () {
        signupElements.buttons.signUp.click();
    }

    static signUp(username, password) {
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnSignupButton();
    }

    static verifySignupSuccesfullMessageDisplayed () {
        commonPageMethods.verifyAlert("Sign up successful.")
    }

    static verifyThatThisUserAlreadyExistMessageIsDisplayed () {
        commonPageMethods.verifyAlert("This user already exist.")
    }
}