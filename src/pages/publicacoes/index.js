import{ getPosts} from "../../services/index.js";



export const publicacoes = () => {

getPosts()
    // Coloque sua página
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
    <header id="header">
        <a href="#" id="logo">
            <img src="../../img/logo.png" alt="Logo do Site">
        </a>
        <a href="#" id="exit">
            <img src="../../img/exit.png" alt="Logout">
        </a>
    </header> 
    <main>
        <section id="user-container">
            <img src="../../img/user.png" alt="Logo do Site" class="user-item">
            <h2 class="user-item" id="hello-user">Olá, User!</h2>
        </section>
        <section id="option-container">
            <h3 ><a href="#" class="option-item" id="posts-view">Publicar</a></h3>
            <h3 ><a href="#" class="option-item" id="posts-view">Publicações</a></h3>
        </section>
        <h4>Publicações</h4>
        <h5>Mais recentes</h5>
        <section>
            <div id=text></div>
        </section>
        
    </main>
      
    `;

     

    return rootElement;
  };
  
