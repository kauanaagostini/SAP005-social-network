import{handleGoogleSignUp} from "../../services/index.js"

export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <form id="formLogin">
      <section>
        <h2>Acesse sua conta</h2>
      </section>
      <p class="inputInformationLogin">
        <label class="title" for="User" >Usuário</label>
        <input class="input" type="e-mail" placeholder="Informe e-mail cadastrado" required />
      </p>
      <p class="inputInformationLogin">
        <label class="title" for="password">Senha  </label>
        <input class="input" type="password" placeholder="Informe sua senha" required />
      </p>
      <button id="btnLogin">Entrar</button>
      <p>OU</p>
      <button id="btnGoogle">
          <span>
              <img id="imgGoogle" src="../../img/google-symbol-1.png">
          </span>
          <span>Entrar com o Google</span>
      </button>
      <p>Ainda não possui cadastro, <a href="createAccount">registre-se</a>.</p>
    </form>
  `;

  const btnGoogle = rootElement.querySelector("#btnGoogle")

  btnGoogle.addEventListener("click", (event) => {
    event.preventDefault()
    handleGoogleSignUp()
})

  return rootElement;
};
