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
    console.log(mensagem.value);
  });

    return rootElement;
  };