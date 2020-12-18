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
      <p>Ainda não possui cadastro, Clique aqui e <a href="createAccount">registre-se.</a></p>
    </form>
  `;
  return rootElement;
};

// <script src="https://www.gstatic.com/firebasejs/ui/4.7.1/firebase-ui-auth.js"></script>
// <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.7.1/firebase-ui-auth.css" />