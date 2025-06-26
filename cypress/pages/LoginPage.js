class LoginPage {
  visit() {
    cy.visit('/practice-test-login/');
  }

  get usernameField() {
    return cy.get('#username');
  }

  get passwordField() {
    return cy.get('#password');
  }

  get submitButton() {
    return cy.get('#submit');
  }

  get successMessage() {
    return cy.contains('Logged In Successfully');
  }

  get errorMessage() {
    return cy.contains('Your username or password is invalid!');
  }

  fillUsername(username) {
    this.usernameField.type(username);
  }

  fillPassword(password) {
    this.passwordField.type(password);
  }

  clickSubmit() {
    this.submitButton.click();
  }

  loginUser(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickSubmit();
  }

  assertLoginSuccess() {
    this.successMessage.should('be.visible');
  }

  assertLoginFailure() {
    this.errorMessage.should('be.visible');
  }
}

export default LoginPage;
