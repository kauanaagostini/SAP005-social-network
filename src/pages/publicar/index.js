import { createPost, handleSignOut } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';
import showModal from '../../components/showModal.js';

export const publicar = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <header id="header">
      <img id="logo" src="../../img/Logo/logo-temporario-red.png" alt="Logo do Site">
      <section id="option-container">
          <h3 ><a href="publicar" class="option-item" id="posts-view">Publicar</a></h3>
          <h3 ><a href="publicacoes" class="option-item" id="posts-view">Publicações</a></h3>
      </section>
      <input id="exit" type="image" src="../../img/Logout/logout-red.png" alt="Logout" />
    </header> 
    <main>
      <section id="user-container">
        <img id="photoUser" class="user-item">
        <h2 class="user-item" id="hello-user"> </h2>
      </section>
      <section class="page-section">
        <label class="title" for="title">Publicar</label>
        <textarea id="post-user" cols="50" rows="20" placeholder="Escreva aqui..."></textarea>
      </section>
      <section id="container-button">
        <button id="postar">Enviar</button>
      </section>  
     </section>   
  `;

  const userName = rootElement.querySelector('#hello-user');
  const photoPerfil = rootElement.querySelector('#photoUser');
  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      userName.innerHTML = `Olá, ${user.displayName}!`;
      photoPerfil.src = user.photoURL;
    } else {
      onNavigate('/');
    }
  });

  const post = rootElement.querySelector('#postar');
  const mensagem = rootElement.querySelector('#post-user');

  post.addEventListener('click', () => {
    if (mensagem.value === '') {
      const errorMessage = 'Digite a mensagem!';
      showModal(errorMessage);
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
