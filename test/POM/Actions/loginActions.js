import LoginPage from "../Pages/loginPage";

class LoginActions extends LoginPage {
  async login(username, password) {
    await this.inputUsername.waitForExist();
    await this.inputUsername.setValue(username);
    await this.inputPassword.waitForExist();
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
}

export default new LoginActions();
