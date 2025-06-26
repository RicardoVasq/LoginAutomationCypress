class LoginPage {
  visit() { cy.visit('/practice-test-login/'); }

  get usernameField() { return cy.get('#username');}

  get passwordField() { return cy.get('#password'); }

  get submitButton() { return cy.get('#submit');}

  get successMessage() { return cy.contains('Logged In Successfully');}

  get errorMessage() { return cy.contains('Your username or password is invalid!'); }
  
  get errorMessage() { return cy.get('#error');}

  fillUsername(username) { this.usernameField.type(username); }

  fillPassword(password) { this.passwordField.type(password); }

  clickSubmit() { this.submitButton.click();}

  loginUser(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickSubmit();
  }

  assertLoginSuccess() { this.successMessage.should('be.visible');}

  assertLoginFailure(expectedText = 'Your username or password is invalid!') {
    this.errorMessage.should('be.visible').and('contain.text', expectedText);
  }
}

export default LoginPage;
