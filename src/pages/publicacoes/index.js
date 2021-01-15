import { getPosts, handleSignOut } from '../../services/index.js';
import { addPost } from '../../components/post.js';
import { onNavigate } from '../../utils/history.js';

export const publicacoes = () => {
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

            <section id=recent-container>
                <h4>Publicações</h4>
            </section>
            
            <section>
                <div id=text></div>
            </section>  
        </main>
      
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

  const btnExit = rootElement.querySelector('#exit');
  btnExit.addEventListener('click', (event) => {
    event.preventDefault();
    handleSignOut();
    onNavigate('/login');
  });

  const postSection = rootElement.querySelector('#text');

  getPosts().then((snap) => {
    snap.forEach((post) => {
      postSection.appendChild(addPost(post));
    });
  });

  return rootElement;
};
