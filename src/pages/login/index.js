export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <form id=formLogin>
        <h2>Acesse sua conta</h2>
        <p>
          <label class="title" for="User" >Usuário</label>
          <input class="input" type="e-mail" placeholder="Informe e-mail cadastrado" required>
        </p>
        <p>
          <label class="title" for="password">Senha  </label>
          <input class="input" type="password" placeholder="Informe sua senha" required>
        </p>
        <button>Entrar</button>
        <script src="https://www.gstatic.com/firebasejs/ui/4.7.1/firebase-ui-auth.js"></script>
        <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.7.1/firebase-ui-auth.css" />
      </form>
  `;
  return rootElement;
};
