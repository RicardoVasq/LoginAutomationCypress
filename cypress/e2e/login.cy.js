import LoginPage from '../pages/LoginPage';

describe('Login con Page Object Model', function() {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.fixture('loginData').as('data');
    loginPage.visit();
  });

  it('Login exitoso con credenciales válidas', function() {
    loginPage.loginUser(this.data.validUser.username, this.data.validUser.password);
    loginPage.assertLoginSuccess();
  });
});

describe('Login tests negativos', () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    cy.fixture('loginData').as('data');
    cloginPage.visit();
  })

  it('Debería mostrar error con usuario incorrecto', function() {
    loginPage.loginUser(this.data.invalidUser.username, this.data.invalidUser.password)
    loginPage.assertLoginFailure('Your username is invalid!')
  })

  it('Debería mostrar error con contraseña incorrecta', function() {
    loginPage.loginUser(this.data.invalidPassword.username, this.data.invalidPassword.password)
    loginPage.assertLoginFailure('Your password is invalid!')
  })

})
