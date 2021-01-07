// exporte suas funções

export const getPosts = () => {
  const post = firebase
    .firestore()
    .collection('post')
    .orderBy("date", "desc")
    // .onSnapshot((snapshot) => {
    //   snapshot.docChanges().forEach((change) => {
    //     if (change.type === 'added') {
    //        addPost(post)
    //     }
    //     if (change.type === "modified") {
    //       addPost(change.doc.data())
    //     }
    //     if (change.type === "removed") {
    //       addPost(change.doc.data())
    //     }
    //   });
    // });
  return post.get();
};


// export const getPosts = () => {
//   const post = firebase
//     .firestore()
//     .collection('post')
//     .orderBy("date", "desc")
//     return post.get()
// };

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
      likes: 0,
      comentarios: []
    })
    .then(function() {
      console.log("Post enviado com sucesso!");
    })
    .catch(function() {
      console.error("Ocorreu um erro");
    });
};


export const likePost = (id) => {
  let postLike = firebase.firestore().collection("post").doc(id);
  postLike.update({
    likes: firebase.firestore.FieldValue.increment(1)
  })

}

// export const editPost = (text, id) => firebase
//   .firestore()
//   .collection("post")
//   .doc(id)
//   .update({
//     text: text,
//   });


export const deletePost = (id) => {
  let postDelete = firebase.firestore().collection("post").doc(id);
  postDelete.delete()
}


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
    .then(() => {
      alert(`Usuário deslogado com sucesso. \nObrigada por acessar nossa aplicação!`);
    });
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