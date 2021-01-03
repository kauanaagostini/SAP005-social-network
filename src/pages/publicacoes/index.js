import { getPosts, handleSignOut, likePost, deletePost} from "../../services/index.js";
import { onNavigate } from "../../utils/history.js";



export const publicacoes = () => {

    const addPost = (post) => {
        const postTemplate =
            `
            <section class="post-container" data-id=${post.id}>
                <div class="post-item">
                    <img src="../../img/user.png">
                    <p>${post.data().name}</p>
                </div>
                <div id="text-container">
                    <p id="text-post">${post.data().text} </p>  
                </div>
              <div id="container-date">
                <p id="date">${post.data().date} </p>
              </div> 
            </section>
            <section id="container-edit"> 
              <div class="item-edit">
                <img src="../../img/like.png" alt="like" class="btn-like" data-id=${post.id}>
                <p id="number-of-likes" data-id=${post.id}>${post.data().likes} </p>
              </div>
              <div class="item-edit">
                  <p id="edit-post"data-id=${post.id}>EDITAR</p>
                  <p id="delete-post" data-id=${post.id}>DELETAR</p>
              </div>     
            </section>
        `
        document.getElementById("text").innerHTML += postTemplate;

        const btnLike = document.querySelector(".btn-like")
        btnLike.addEventListener("click", ()=>{
            likePost(btnLike.dataset.id)
            console.log(btnLike.dataset.id)
        })

        const btnDelete = document.querySelector("#delete-post")
        btnDelete.addEventListener("click", (event)=>{
            event.preventDefault();
            deletePost(btnDelete.dataset.id)
        })
    }
    
   
    getPosts().then(snap => {
        snap.forEach(post => {
            addPost(post)
        });
    })

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
            <h2 class="user-item" id="hello-user">Olá, ${firebase.auth().currentUser.displayName}!</h2>
        </section>
        <section id="option-container">
            <h3 ><a href="publicar" class="option-item" id="posts-view">Publicar</a></h3>
            <h3 ><a href="publicacoes" class="option-item" id="posts-view">Publicações</a></h3>
        </section>
        <h4>Publicações</h4>
        <h5>Mais recentes</h5>
        <section>
            <div id=text></div>
        </section>
        
    </main>
      
    `;
    const btnExit = rootElement.querySelector("#exit");
    btnExit.addEventListener("click", (event) => {
        event.preventDefault();
        handleSignOut()
        onNavigate("/login")
    })
  
    return rootElement;
};



