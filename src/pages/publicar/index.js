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
  const submitPost= rootElement.querySelector('#postar');
  let text = rootElement.querySelector('#post-user');
  

  submitPost.addEventListener('click', (event) => {
    createPost(text.value);
    onNavigate('/publicacoes');
  });

    return rootElement;
  };

