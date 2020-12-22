// exporte suas funções

// export const createPost = (post) => {
//   firebase
//     .firestore()
//     .collection('post')
//     .add({
//       text: post
//     });
// };



export const likePost =(likes) =>{
  likePost = likePost +1;
}


const post=[];

export const createPost = (mensagem) => {
  post.push(mensagem);
};

export const getPosts =()=>{
  return post;
}

export const handleSignUp = (email, password) => {
  firebase.auth()
  .createUserWithEmailAndPassword(email, password)
  .then(user =>{
    console.log(user)
    alert("Usuário criado com sucesso!")
  })
  .catch((error) => {
    let errorMessage = error.message;
    alert(`${errorMessage}`)
  });
};

export const handleGoogleSignUp = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/plus.login');
  firebase.auth().signInWithRedirect(provider);
  alert(`Bem-vindo ${firebase.auth().currentUser.displayName}`)
};

export const handleSignIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) =>{
    alert(`Bem-vindo ${firebase.auth().currentUser.email}!`)
  })
  .catch((error) => {
    let errorMessage = error.message;
    alert(`${errorMessage}`)
  });
};

export const handleSingOut = () => {
  firebase.auth().signOut()
  .then(()=>{
    alert("Obrigada por acessar nossa rede!")
  })
  .catch((error) => {
    let errorMessage = error.message;
    alert(`${errorMessage}`)
  });
};

