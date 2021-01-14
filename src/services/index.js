// exporte suas funções

import { onNavigate } from '../utils/history.js';

// ----- LOGIN -----

export const handleSignUp = (email, password, firstName, lastName) => {
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      const userName = `${firstName} ${lastName}`;
      user.user.updateProfile({ displayName: userName });
      alert('Usuário criado com sucesso!');
      onNavigate('/publicacoes');
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(`${errorMessage}`);
    });
};

export const handleGoogleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then(() => {
      onNavigate('/publicacoes');
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(`${errorMessage}`);
    });
};

export const handleSignIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      onNavigate('/publicacoes');
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(`${errorMessage}`);
    });
};

export const handleSignOut = () => {
  firebase
    .auth()
    .signOut();
};

export const validatePassword = (password, samePassword) => {
  if (password !== samePassword) {
    alert('senhas divergentes');
    return false;
  }
  return true;
};

export const validateEmptyInput = (firstName, lastName) => {
  if (firstName.length < 1 || lastName.length < 1) {
    alert('Os campos Nome e Sobrenome são de preenchimentos obrigatórios');
    return false;
  }
  return true;
};


// ----- POSTS -----


export const postImage = (photo, callback) => {
  const file = photo.files[0];
  const storageRef = firebase.storage().ref(`imagens/${file.name}`);

  storageRef.put(file).then(() => {
    storageRef.getDownloadURL().then((url) => {
      callback(url);
    });
  });
};

export const createPost = (post) => {
  const user = firebase.auth().currentUser;
  const date = new Date();
  firebase
    .firestore()
    .collection('post')
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
    .then(() => Promise.resolve(true))
    .catch((error) => Promise.reject(error));
};

export const getPosts = () => {
  const post = firebase
    .firestore()
    .collection('post')
    .orderBy('date', 'desc');
  return post.get();
};

export const likePost = (id, userID) => {
  const userLike = firebase.firestore.FieldValue.arrayUnion(userID);
  const postLike = firebase.firestore().collection('post').doc(id);
  return postLike.update({
    users_like: userLike,
  });
};

export const removeLike = (id, userId) => {
  const userLike = firebase.firestore.FieldValue.arrayRemove(userId);
  const postLike = firebase.firestore().collection('post').doc(id);
  return postLike.update({
    users_like: userLike,
  });
};

export const dislikePost = (id, userID) => {
  const userDislike = firebase.firestore.FieldValue.arrayUnion(userID);
  const postDislike = firebase.firestore().collection('post').doc(id);
  return postDislike.update({
    users_dislike: userDislike,
  });
};

export const removeDislike = (id, userId) => {
  const userDislike = firebase.firestore.FieldValue.arrayRemove(userId);
  const postDislike = firebase.firestore().collection('post').doc(id);
  return postDislike.update({
    users_dislike: userDislike,
  });
};

export const editPost = (text, id) => {
  const postUpdate = firebase.firestore().collection('post').doc(id);
  return postUpdate.update({
    text,
  });
};

export const deletePost = (id) => {
  const postDelete = firebase.firestore().collection('post').doc(id);
  return postDelete.delete();
};
