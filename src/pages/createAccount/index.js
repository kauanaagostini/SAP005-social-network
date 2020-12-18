export const createAccount = () => {
    // Coloque sua página
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
        <form id="formCreateAccount">
            <section>
                <h2>Novo por aqui</h2>
                <h2>Cadastre-se</h2>
                <h3>É rápido e fácil!</h3>
            </section>
            <p class="inputInformationCreate">
                <label class="title" for="User" >Insira seu e-mail</label>
                <input class="input" type="e-mail" placeholder="E-mail" required />
            </p>
            <p class="inputInformationCreate">
                <label class="title" for="password">Nova senha</label>
                <input class="input" type="password" placeholder="Senha" required />
            </p>
            <p class="inputInformationCreate">
                <label class="title" for="password">Repita a senha</label>
                <input class="input" type="password" placeholder="Repita sua senha" required />
            </p>
            <button id="btnCreateAccount">Cadastre-se</button>
        </form>
    `;
    return rootElement;
  };