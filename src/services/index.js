// ----- LOGIN -----

export const handleSignUp = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

export const handleGoogleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const handleSignIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

export const handleSignOut = () => {
  firebase
    .auth()
    .signOut();
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
