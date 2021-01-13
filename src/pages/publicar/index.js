import { createPost, handleSignOut, postImage } from "../../services/index.js";
import { onNavigate } from "../../utils/history.js";


export const publicar = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
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
        <img src='' width='100%' class='imgPreview'>
        <textarea id="post-user" cols="50" rows="20" placeholder="Escreva aqui..."></textarea>
      </section>
      <input type="image" class="btnImage" src="img/att-photo.png" value="ENVIAR" alt="button for image" />
          <input type='file' class='photo' id='photo' accept='image/png, image/jpeg, image/jpg'/> 
        </label>
      <section id="container-button">
        <button id="postar">Enviar</button>
      </section>  
     </section>   
  `;

  const post = rootElement.querySelector('#postar');
  const mensagem = rootElement.querySelector('#post-user');
  const userName = rootElement.querySelector('#hello-user');

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      userName.innerHTML = `Olá, ${user.displayName}!`;
    } else {
      alert("Usuário não logado!")
    }
  })


  const photo = rootElement.querySelector('.photo');
  const preview = rootElement.querySelector('.imgPreview');
 
  photo.addEventListener('change', (event) => {
    const file = event.target.files[0];
    preview.src = URL.createObjectURL(file);
    postImage(photo, validarUrl);
  });

  post.addEventListener('click', () => {
    if (mensagem.value === '') {
      alert("Digite a mensagem!")
    } else {
      createPost(mensagem.value);
      onNavigate('/publicacoes');
    }
  });

  const btnExit = rootElement.querySelector('#exit');
  btnExit.addEventListener('click', (event) => {
    event.preventDefault();
    handleSignOut();
    onNavigate('/login');
  });

  return rootElement;

};
