import{handleSignUp} from "../../services/index.js"
import { onNavigate } from "../../utils/history.js";
// import {onNavigate} from "../../utils/history.js"

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
                <label class="title" for="User">Insira seu e-mail</label>
                <input class="input" id="email" type="e-mail" placeholder="E-mail">
            </p>
            <p class="inputInformationCreate">
                <label class="title" for="password">Nova senha</label>
                <input class="input" id="password" type="password" placeholder="Senha">
            </p>
            <p class="inputInformationCreate">
                <label class="title" for="password">Repita a senha</label>
                <input class="input" id="samePassword" type="password" placeholder="Repita sua senha">
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