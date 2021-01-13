// exporte suas funções

import { onNavigate } from "../utils/history.js";

// ----- LOGIN -----

export const handleSignUp = (email, password, firstName, lastName) => {
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      const userName = `${firstName} ${lastName}`
      user.user.updateProfile({ displayName: userName })
      alert("Usuário criado com sucesso!")
      onNavigate('/publicacoes');
    })
    .catch((error) => {
      let errorMessage = error.message;
      alert(`${errorMessage}`)
    });
};

export const handleGoogleSignIn = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then(user => {
      alert(`Bem-vindo ${firebase.auth().currentUser.displayName}!`)
      onNavigate("/publicacoes")
    })
    .catch((error) => {
      let errorMessage = error.message;
      alert(`${errorMessage}`)
    }); 
};

export const handleSignIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      alert(`Bem-vindo ${firebase.auth().currentUser.displayName}!`)
      onNavigate("/publicacoes")
    })
    .catch((error) => {
      let errorMessage = error.message;
      alert(`${errorMessage}`)
    });
};

export const handleSignOut = () => {
  firebase
    .auth()
    .signOut()
};

export const validatePassword = (password, samePassword) => {
  if (password != samePassword) {
    alert("senhas divergentes")
    return false
  } else {
    return true
  }
};

export const validateEmptyInput = (firstName, lastName) => {
  if (firstName.length < 1 || lastName.length < 1) {
    alert("Os campos Nome e Sobrenome são de preenchimentos obrigatórios")
    return false
  } else {
    return true
  }
}


// ----- POSTS -----

export const createPost = (post) => {
    const user = firebase.auth().currentUser;
    const date = new Date();
    firebase
      .firestore()
      .collection("post")
      .add({
        name: user.displayName,
        user_id: user.uid,
        text: post,
        date: date.toLocaleString(),
        time: date.getTime(),
        users_like: [],
        users_dislike: [],
        comentarios: [],

      })
      .then(function () {
        console.log("Post enviado com sucesso!");
      })
      .catch(function () {
        console.error("Ocorreu um erro");
      });
  };


export const getPosts = () => {
  const post = firebase
    .firestore()
    .collection('post')
    .orderBy("date", "desc")
  return post.get()
};

export const likePost = (id, userID) => {
  const userLike = firebase.firestore.FieldValue.arrayUnion(userID);
  const userRemoveDislike = firebase.firestore.FieldValue.arrayRemove(userID);
  const postLike = firebase.firestore().collection("post").doc(id);
  postLike.update({
    users_like: userLike,
    users_dislike: userRemoveDislike,
  })
}

export const dislikePost = (id, userID) => {
  const userDislike = firebase.firestore.FieldValue.arrayUnion(userID);
  const userRemoveLike = firebase.firestore.FieldValue.arrayRemove(userID);
  const postDislike = firebase.firestore().collection("post").doc(id);
  postDislike.update({
    users_dislike: userDislike,
    users_like: userRemoveLike,
  })
}

export const editPost = (text, id) => firebase
  .firestore()
  .collection("post")
  .doc(id)
  .update({
    text: text,
  });


export const deletePost = (id) => {
  let postDelete = firebase.firestore().collection("post").doc(id);
  postDelete.delete()
}


