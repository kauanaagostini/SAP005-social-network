import { likePost, removeLike,  editPost,  dislikePost, removeDislike, deletePost} from "../services/index.js"

export const addPost = (post) => {
    const { name, text, date, users_like, users_dislike} = post.data()
    const { id } = post
    let arrayLikes = users_like;
    let arrayDislikes =  users_dislike;
    const postTemplate = document.createElement("section")
    postTemplate.classList.add("post-container")
    postTemplate.setAttribute("data-id", post.id)
    postTemplate.innerHTML =

        `
        <section id="post-infos">
            <div class="post-item">
                <img src="../../img/user.png">
                <p>${name}</p>
            </div>
            <div class="text-container">
                <textarea disabled class="text-post"${id}>${text}</textarea> 
                <input type="button" value="Salvar" class="btn-save-edit" id="btn-save-edit${id}">
            </div>
       </section>

        <section id="container-date">
            <p id="text-date">${date} </p>
        </section> 

        <section id="container-edit"> 
          <div class="item-edit">
            <img src="../../img/Like/like-black.png" alt="like" id="btn-like-${id}" class="btn-like">
            <p id="number-of-likes" class= "number-of-likes">${arrayLikes.length}</p>
            <img src="../../img/Dislike/dislike-red1.png" alt="dislike" class="btn-dislike" id="btn-dislike-${id}">
            <p id="number-of-dislikes" class= "number-of-likes">${arrayDislikes.length}</p>
          </div>
          <div class="item-edit">
              <img src="../../img/Edit/edit-black.png" id="btn-edit-${id}" class="btn-edit-post">
              <img src="../../img/Trash/trash.png" class="btn-delete-post" id="btn-delete-post${id}">
          </div>     
        </section>

    `
    const showEditsForCurrentUser = () => {
        const userPost = post.data().user_id
        const currentUser = firebase.auth().currentUser.uid
        const btnDelete = postTemplate.querySelector(".btn-delete-post")
        const btnEdit = postTemplate.querySelector(".btn-edit-post")
        if (userPost === currentUser) {
            btnDelete.style.display = 'block';
            btnEdit.style.display = 'block';
        }
    }

    showEditsForCurrentUser()

    postTemplate.querySelector(`#btn-like-${id}`).addEventListener('click', (event) => {
        const currentUserLike = firebase.auth().currentUser.uid;
        const verifyUserLike = arrayLikes.find(element => element === currentUserLike)
        if (!verifyUserLike) {
            likePost(id, currentUserLike)
                .then(() => {
                    console.log("deu bom");
                    const numberOfLikesElement = postTemplate.querySelector("#number-of-likes")
                    const numberOfLikes = Number(numberOfLikesElement.textContent)
                    numberOfLikesElement.textContent = numberOfLikes + 1
                    arrayLikes.push(currentUserLike)
                })
                .catch((error) => {
                    alert(error);
                });

        } else {
            removeLike(id, currentUserLike)
                .then(() => {
                    console.log("deu bom");
                    const numberOfLikesElement = postTemplate.querySelector("#number-of-likes")
                    const numberOfLikes = Number(numberOfLikesElement.textContent)
                    numberOfLikesElement.textContent = numberOfLikes - 1
                    arrayLikes = arrayLikes.filter((element => element != currentUserLike))

                })
                .catch((error) => {
                    alert(error);
                });

        }

    })

    postTemplate.querySelector(`#btn-dislike-${id}`).addEventListener('click', (event) => {
        const currentUserDislike = firebase.auth().currentUser.uid;
        const verifyUserDislike = arrayDislikes.find(element => element === currentUserDislike)
        if (!verifyUserDislike) {
            dislikePost(id, currentUserDislike)
                .then(() => {
                    console.log("deu bom");
                    const numberOfDislikesElement = postTemplate.querySelector("#number-of-dislikes")
                    const numberOfDislikes = Number(numberOfDislikesElement.textContent)
                    numberOfDislikesElement.textContent = numberOfDislikes + 1
                    arrayDislikes.push(currentUserDislike)
                })
                .catch((error) => {
                    alert(error);
                });

        } else {
            removeDislike(id, currentUserDislike)
                .then(() => {
                    console.log("deu bom");
                    const numberOfDislikesElement = postTemplate.querySelector("#number-of-dislikes")
                    const numberOfDislikes = Number(numberOfDislikesElement.textContent)
                    numberOfDislikesElement.textContent = numberOfDislikes - 1
                    arrayDislikes = arrayDislikes.filter((element => element != currentUserDislike))

                })
                .catch((error) => {
                    alert(error);
                });

        }

    })

    postTemplate.querySelector(`#btn-edit-${id}`).addEventListener('click', (event) => {
        const textArea = postTemplate.querySelector(".text-post")
        textArea.removeAttribute('disabled')
        const btnSaveEdit = postTemplate.querySelector(".btn-save-edit")
        btnSaveEdit.style.display = 'block';
        saveEdit()
    })


    const saveEdit = () => {
        postTemplate.querySelector(`#btn-save-edit${id}`).addEventListener('click', (event) => {
            const textAreaUpdate = postTemplate.querySelector(".text-post")
            const btnSaveEdit = postTemplate.querySelector(".btn-save-edit")
            btnSaveEdit.style.display = 'block';
            editPost(textAreaUpdate.value, id)
                .then(() => {
                    console.log("deu bom");
                    textAreaUpdate.setAttribute('disabled', 'disabled')
                    btnSaveEdit.style.display = 'none';
                })
                .catch((error) => {
                    alert(error);
                });
        })
    }


    postTemplate.querySelector(`#btn-delete-post${id}`).addEventListener('click', (event) => {
        if (confirm("Tem certeza que deseja excluir a publicação?")) {
            deletePost(id)
                .then(() => {
                    console.log("apagou");
                    postTemplate.style.display = 'none';
                })
                .catch((error) => {
                    alert(error);
                });
        }
    })

    return postTemplate;
}
