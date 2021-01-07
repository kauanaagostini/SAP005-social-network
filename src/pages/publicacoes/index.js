
import { deletePost, getPosts, handleSignOut, likePost } from "../../services/index.js";
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
                    <textarea class="text-post" ${post.id}>${post.data().text}</textarea> 
                </div>
            </section>
            <section id="container-date">
                <p id="text-date">${post.data().date} </p>
            </section> 
            <section id="container-edit"> 
              <div class="item-edit">
                <img src="../../img/like.png" alt="like" class="btn-like" data-id=${post.id}>
                <p id="number-of-likes" class= "number-of-likes" data-id=${post.id}>${post.data().likes}</p>
              </div>
              <div class="item-edit">
                  <p class="edit-post"data-id=${post.id}>EDITAR</p>
                  <p class="delete-post" data-id=${post.id}>DELETAR</p>
              </div>     
            </section>
        `

        document.getElementById("text").innerHTML += postTemplate;

        document.querySelectorAll('.btn-like').forEach((event) =>
            event.addEventListener('click', (event) => {
                let btnLike = event.target.parentNode.querySelector('.btn-like')
                console.log(btnLike.dataset.id)
                likePost(btnLike.dataset.id)
                getPosts()
                onNavigate('/publicacoes');
            })

        );

 
        // document.querySelectorAll('.edit-post').forEach((event) =>
        //     event.addEventListener('click', (event) => {
        //         const btnEdit = event.target.parentNode.querySelector(".edit-post")
        //         document.querySelectorAll(".text-post").forEach((event) => {
        //             const textArea = event.parentNode.querySelector(".text-post")
        //             editPost(textArea.value, btnEdit.dataset.id)
        //             console.log(textArea.value, btnEdit.dataset.id)
        //         })
        //     })
        // )

      
        document.querySelectorAll('.delete-post').forEach((event) =>
            event.addEventListener('click', (event) => {
                let btnDelete = event.target.parentNode.querySelector('.delete-post')
                console.log(btnDelete.dataset.id)
                deletePost(btnDelete.dataset.id)
                getPosts()
                onNavigate('/publicacoes');
            })
        )
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
            <img src="../../img/user.png" alt="Logo do Site">
            <h2 class="user-item" id="hello-user"> </h2>
        </section>
        <section id="option-container">
            <h3 ><a href="publicar" class="option-item" id="posts-view">Publicar</a></h3>
            <h3 ><a href="publicacoes" class="option-item" id="posts-view">Publicações</a></h3>
        </section>
        <section id=recent-container>
            <h4>Publicações</h4>
        </section>
        <section>
            <div id=text></div>
        </section>
        
    </main>
      
    `;

    const userName = rootElement.querySelector('#hello-user')

    firebase.auth().onAuthStateChanged((user) => {
        if (user != null) {
            userName.innerHTML = `Olá, ${user.displayName}!`;
        } else {
            alert("Usuário não logado!")
        }
    })

    const btnExit = rootElement.querySelector('#exit');
    btnExit.addEventListener('click', (event) => {
        event.preventDefault();
        handleSignOut();
        onNavigate('/login');
    });

    return rootElement;
};
