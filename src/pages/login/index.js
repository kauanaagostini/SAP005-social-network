import { handleGoogleSignUp, handleSignIn } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <form id="formLogin">
      <section>
        <h2>Acesse sua conta</h2>
      </section>
      <p class="inputInformationLogin">
        <input class="input" id="email" type="email" placeholder="E-mail cadastrado" required>
        <input class="input" id="password" type="password" placeholder="Senha" required>
      </p>
      <button id="btnLogin">Entrar</button>
      <div class="other">
        <div class="empty"> </div>
        <div> OU </div>
        <div class="empty"> </div>
      </div>
      <button id="btnGoogle">
          <span>
              <img id="imgGoogle" src="../../img/google-symbol-1.png">
          </span>
          <span>Entrar com Google</span>
      </button>
      <p>Ainda não possui cadastro, <a id="register" href="/createAccount">registre-se.</a></p>
    </form>
    <footer id="footer">
      <div id="kat">
        <p id="copy">&copy; Desenvolvido por KAT - Redações</p>
      </div>
      <div id="devs">
        <p><a id="ale" href="http://github.com/ale-alves/" target="_blank">Alessandra Alves</a></p>
        <p><a id="kau" href="http://github.com/kauanaagostini/" target="_blank">Kauana Agostini</a></p>
        <p><a id="tha" href="http://github.com/alencartha/" target="_blank">Thaís Alencar</a></p>
      </div>
    </footer>
  `;

  const btnGoogle = rootElement.querySelector('#btnGoogle');
  const btnLogin = rootElement.querySelector('#btnLogin');

  btnLogin.addEventListener('click', () => {
    const email = rootElement.querySelector('#email').value;
    const password = rootElement.querySelector('#password').value;
    handleSignIn(email, password);
    onNavigate('/publicacoes');
  });

  btnGoogle.addEventListener('click', () => {
    handleGoogleSignUp();
    onNavigate('/publicacoes');
  });

  return rootElement;
};
