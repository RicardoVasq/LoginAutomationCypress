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
