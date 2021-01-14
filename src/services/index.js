import showModal from '../components/showModal.js';
import { onNavigate } from '../utils/history.js';

// ----- LOGIN -----

export const handleSignUp = (email, password, firstName, lastName) => {
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      const userName = `${firstName} ${lastName}`;
      user.user.updateProfile({ displayName: userName });
      const message = 'Usuário criado com sucesso!';
      showModal.error(message);
      onNavigate('/publicacoes');
    })
    .catch((error) => {
      const errorMessage = error.message;
      showModal.error(errorMessage);
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
      showModal.error(errorMessage);
    });
};

export const handleSignIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      onNavigate('/publicacoes');
    })
    .catch((error) => {
      const errorMessage = error.message;
      showModal.error(errorMessage);
    });
};

export const handleSignOut = () => {
  firebase
    .auth()
    .signOut();
};

export const validatePassword = (password, samePassword) => {
  if (password !== samePassword) {
    const errorMessage = 'As senhas digitadas são divergentes';
    showModal.error(errorMessage);
    return false;
  }
  return true;
};

export const validateEmptyInput = (firstName, lastName) => {
  if (firstName.length < 1 || lastName.length < 1) {
    const errorMessage = 'Os campos Nome e Sobrenome são de preenchimentos obrigatórios';
    showModal.error(errorMessage);
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
      usersLike: [],
      usersDislike: [],

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
    usersLike: userLike,
  });
};

export const removeLike = (id, userId) => {
  const userLike = firebase.firestore.FieldValue.arrayRemove(userId);
  const postLike = firebase.firestore().collection('post').doc(id);
  return postLike.update({
    usersLike: userLike,
  });
};

export const dislikePost = (id, userID) => {
  const userDislike = firebase.firestore.FieldValue.arrayUnion(userID);
  const postDislike = firebase.firestore().collection('post').doc(id);
  return postDislike.update({
    usersDislike: userDislike,
  });
};

export const removeDislike = (id, userId) => {
  const userDislike = firebase.firestore.FieldValue.arrayRemove(userId);
  const postDislike = firebase.firestore().collection('post').doc(id);
  return postDislike.update({
    usersDislike: userDislike,
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
