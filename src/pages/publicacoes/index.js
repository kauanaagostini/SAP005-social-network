import{getPosts} from "../../services/index.js"
import {likePost} from "../../services/index.js";


export const publicacoes = () => {

    console.log(getPosts());
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
            <h2 class="user-item" >Olá, User!</h2>
        </section>
        <section id="option-container">
            <h3 ><a href="#" class="option-item">Publicar</a></h3>
            <h3 ><a href="#" class="option-item">Publicações</a></h3>
        </section>
        <h4>Publicações</h4>
        <h5>Mais recentes</h5>
        <section id="post-container">
            <div class="post-item">
            <img src="../../img/user.png">
            <p>Nome</p>
            </div>
        </section>
        <section id="container-edit"> 
            <div class="item-edit">
                <img src="../../img/like.png" alt="like" id="like">
                <p id="number-of-likes"> 0 </p>
            </div>
            <div class="item-edit">
                <p id="edit-post">EDITAR</p>
                <p id="delete-post">DELETAR</p>
            </div>     
        </section>
    </main>
      
    `;

    // let likeIcon = rootElement.querySelector("like");

    // likeIcon.addEventListener('click', (event) =>{
    //     let numberOfLikes = rootElement.querySelector("number-of-likes");
    //     numberOfLikes = likePost (numberOfLikes);
    // });

    return rootElement;
  };
  