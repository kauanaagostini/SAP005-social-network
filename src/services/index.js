// exporte suas funções

 export const createPost = (post) => {
   firebase
     .firestore()
     .collection('post')
     .add({
        text: post,
        likes:0,
        comentarios:[]
     });
 };


export const getPosts =()=>{
  const post = firebase.firestore().collection('post')
  post.get().then(snap=>{
    snap.forEach(doc=>{
      console.log(doc.data())
    });
      
    });
  return post;
}

export const handleSignUp = (email, password) => {
  firebase.auth()
  .createUserWithEmailAndPassword(email, password)
  .then(user =>{
    console.log("usuario", user)
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
}


