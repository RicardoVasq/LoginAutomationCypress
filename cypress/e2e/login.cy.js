import LoginPage from '../pages/LoginPage';

describe('Login con Page Object Model', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('Login exitoso con credenciales válidas', () => {
    loginPage.loginUser('student', 'Password123');
    loginPage.assertLoginSuccess();
  });
});

describe('Login tests negativos', () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    cy.visit('/practice-test-login/')
  })

  it('Debería mostrar error con usuario incorrecto', () => {
    loginPage.loginUser('usuario_incorrecto', 'password_valido')
    loginPage.assertLoginFailure('Your username is invalid!')
  })

  it('Debería mostrar error con contraseña incorrecta', () => {
    loginPage.loginUser('tomsmith', 'password_incorrecto')
    loginPage.assertLoginFailure('Your username is invalid!')
  })

})
