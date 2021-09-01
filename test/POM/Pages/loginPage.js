class LoginPage {
  get inputUsername() {
    return $("#username");
  }
  get inputPassword() {
    return $("#password");
  }
  get btnSubmit() {
    return $('button[type="submit"]');
  }
}

export default LoginPage;
