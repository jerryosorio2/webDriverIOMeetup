import App from "../POM/App";
import LoginActions from "../POM/Actions/loginActions";
import WelcomeActions from "../POM/Actions/welcomeActions";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await App.open("login");
    await LoginActions.login("tomsmith", "SuperSecretPassword!");
    await WelcomeActions.verifyWelcome();
  });
});
