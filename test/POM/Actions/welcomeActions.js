import WelcomePage from "../Pages/welcomePage";

class WelcomeActions extends WelcomePage {
  async verifyWelcome() {
    await this.flashAlert.waitForExist();
    await expect(this.flashAlert).toHaveTextContaining(
      "You logged into a secure area!"
    );
  }
}

export default new WelcomeActions();
