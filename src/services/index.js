// exporte suas funções

// ----- LOGIN -----

export const handleSignUp = (email, password, firstName, lastName) => {
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      const userName = `${firstName} ${lastName}`
      user.user.updateProfile({ displayName: userName })
      alert("Usuário criado com sucesso!")
    })
    .catch((error) => {
      let errorMessage = error.message;
      alert(`${errorMessage}`)
    });
};


export const handleGoogleSignUp = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithRedirect(provider);
};

export const handleSignIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      alert(`Bem-vindo ${firebase.auth().currentUser.displayName}!`)
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

<<<<<<< HEAD
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
=======

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
    users_like: userLike,
  })
 
}

export const removeLike =(id, userId) =>{
  console.log(id,userId)
  const userLike = firebase.firestore.FieldValue.arrayRemove(userId);
  console.log(userLike)
  const postLike = firebase.firestore().collection("post").doc(id);
  return postLike.update({
    users_like: userLike,
  })

}

export const dislikePost = (id, userID) => {
  const userDislike = firebase.firestore.FieldValue.arrayUnion(userID);
  const postDislike = firebase.firestore().collection("post").doc(id);
   return postDislike.update({
    users_dislike: userDislike,
  })
}

export const removeDislike =(id, userId) =>{
  const userDislike = firebase.firestore.FieldValue.arrayRemove(userId);
  const postDislike = firebase.firestore().collection("post").doc(id);
  return postDislike.update({
    users_dislike: userDislike,
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
>>>>>>> 0317ad87be80c9d2532262f886a110b9f207e98a
