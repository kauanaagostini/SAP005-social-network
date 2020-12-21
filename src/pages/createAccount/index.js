import{handleSignUp} from "../../services/index.js"

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
                <input class="input" id="firstName" type="text" placeholder="Nome" required>
                <input class="input" id="lastName" type="text" placeholder="Sobrenome" required>
                <input class="input" id="birth" type="date" placeholder="Data de Nascimento" required>
                <input class="input" id="email" type="email" placeholder="E-mail" required>
                <input class="input" id="password" type="password" placeholder="Senha" required>
                <input class="input" id="samePassword" type="password" placeholder="Repita sua senha" required>
            </p>
            <button id="btnCreateAccount">Cadastre-se</button>
        </form>
    `;
    const btnCreateAccount = rootElement.querySelector("#btnCreateAccount")
    
    btnCreateAccount.addEventListener("click", (event) => {
        event.preventDefault()
        const email = rootElement.querySelector("#email").value
        const password = rootElement.querySelector("#password").value
        handleSignUp(email, password);
    })
    
    return rootElement;
  };