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
  .catch((error) => {
    var errorMessage = error.message;
    alert(`${errorMessage}`)
    console.log("deuerrado!");
  });
};

export const handleGoogleSignUp = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider)
}


