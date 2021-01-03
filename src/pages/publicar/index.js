import { createPost, handleSignOut} from "../../services/index.js";
import { onNavigate } from "../../utils/history.js";

export const publicar = () => {
  // Coloque sua página
  const rootElement = document.createElement("div");
  rootElement.innerHTML = `
    <header id="header">
      <a href="#" id="logo">
        <img src="../../img/logo.png" alt="Logo do Site">
      </a>
      <input id="exit" type="image" src="../../img/exit.png" alt="Logout" />
    </header> 
    <main>
      <section id="user-container">
        <img src="../../img/user.png" alt="Logo do Site" class="user-item">
        <h2 class="user-item" id="hello-user">Olá, ${firebase.auth().currentUser.displayName}</h2>
      </section>
      <section id="option-container">
        <h3 ><a href="publicar" class="option-item">Publicar</a></h3>
        <h3 ><a href="publicacoes" class="option-item">Publicações</a></h3>
      </section>
      <section class="page-section">
        <label class="title" for="title">Publicar</label>
        <textarea id="post-user" cols="50" rows="20" placeholder="Escreva aqui..."></textarea>
      </section>
      <section id="container-button">
        <button id="postar">Enviar</button>
      </section>  
  `;
  //console.log(firebase.auth().currentUser.displayName)
  const post = rootElement.querySelector("#postar");
  let mensagem = rootElement.querySelector("#post-user");

  post.addEventListener("click", (event) => {
    createPost(mensagem.value);
    onNavigate("/publicacoes");
  });

  const btnExit = rootElement.querySelector("#exit");
  btnExit.addEventListener("click", (event) => {
      event.preventDefault();
      handleSignOut()
      onNavigate("/login")
  })


  return rootElement;
};
