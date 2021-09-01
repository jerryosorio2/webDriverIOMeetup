import LoginPage from "../Pages/loginPage";

class LoginActions extends LoginPage {
  async login(username, password) {
    await this.inputUsername.setValue(username);
    //await this.inputPassword.setValue(password);
    //await this.btnSubmit.click();
    console.log("hi");
  }
}

export default new LoginActions();
