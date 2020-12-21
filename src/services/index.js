// exporte suas funções

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
  console.log(provider)
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      let token = result.credential.accessToken;
    }
    let user = result.user;
});
}

// let firebaseConfig = {
//   apiKey: "AIzaSyAWEtnYVF1bcBNyNYgXr7bsfWqPuXpteNA",
//   authDomain: "rede-social-2b9a9.firebaseapp.com",
//   projectId: "rede-social-2b9a9",
//   storageBucket: "rede-social-2b9a9.appspot.com",
//   messagingSenderId: "342530130105",
//   appId: "1:342530130105:web:f7312549eb1abd76091b68"
// };
// firebase.initializeApp(firebaseConfig);