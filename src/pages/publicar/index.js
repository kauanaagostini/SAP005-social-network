import {createPost} from "../../services/index.js"
import {onNavigate} from "../../utils/history.js"

export const publicar = () => {
    // Coloque sua página
    const rootElement = document.createElement('div');
    rootElement.innerHTML = 
    `
    <section class="page-section">
      <input type="text" id="post-user">
      <button id="postar">Enviar</button>
    </section>  
  `
  const post= rootElement.querySelector('#postar');
  let mensagem = rootElement.querySelector('#post-user');
  

  post.addEventListener('click', (event) => {
    createPost(mensagem.value);
    onNavigate('/publicacoes');
  });

    return rootElement;
  };

