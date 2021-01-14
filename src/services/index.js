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

// <<<<<<< HEAD 

export const postImage = (photo, callback) => {
  const file = photo.files[0];
  const storageRef = firebase.storage().ref('imagens/' + file.name);

  storageRef.put(file).then(() => {
    storageRef.getDownloadURL().then((url) => {
      console.log(url);
      callback(url);
    });
  });
};

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
        usersLike: [],
        usersDislike: [],

      })
      .then(() => {
        return Promise.resolve(true);
      })
      .catch((error) => {
        return Promise.reject(error);
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
  const postLike = firebase.firestore().collection("post").doc(id);
  return postLike.update({
    usersLike: userLike,
  })
 
}

export const removeLike =(id, userId) =>{
  const userLike = firebase.firestore.FieldValue.arrayRemove(userId);
  const postLike = firebase.firestore().collection("post").doc(id);
  return postLike.update({
    usersLike: userLike,
  })

}

export const dislikePost = (id, userID) => {
  const userDislike = firebase.firestore.FieldValue.arrayUnion(userID);
  const postDislike = firebase.firestore().collection("post").doc(id);
   return postDislike.update({
    usersDislike: userDislike,
  })
}

export const removeDislike =(id, userId) =>{
  const userDislike = firebase.firestore.FieldValue.arrayRemove(userId);
  const postDislike = firebase.firestore().collection("post").doc(id);
  return postDislike.update({
    usersDislike: userDislike,
  })

}

export const editPost = (text, id) => {
const postUpdate = firebase.firestore().collection("post").doc(id)
  return postUpdate.update({
    text: text,
  })
}
  


export const deletePost = (id) => {
  let postDelete = firebase.firestore().collection("post").doc(id);
  return postDelete.delete()
}
