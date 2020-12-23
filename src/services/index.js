// exporte suas funções


 export const createPost = (post) => {
   firebase
     .firestore()
     .collection('post')
     .add({
        name: firebase.auth().currentUser.displayName,
        text: post,
        likes:0,
        comentarios:[]
     })
 };

export const getPosts =()=>{
  const post = firebase.firestore().collection('post')
  return post.get();
};

export const likes = (id, likes) => {
  firebase
    .firestore()
    .collection('post')
    .doc(id)
    .update({
      likes: likes + 1,
    });
};

export const handleSignUp = (email, password, firstName, lastName) => {
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user =>{
      const userName = `${firstName} ${lastName}`
      user.user.updateProfile({displayName: userName})
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

export const handleSignOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      onNavigate('/login');
    });
};

export const validatePassword = (password, samePassword) => {
  if (password != samePassword){
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