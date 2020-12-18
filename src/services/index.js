// exporte suas funções

const post=[];

export const createPost = (mensagem) => {
  post.push(mensagem);
};

export const getPosts =()=>{
  return post;
}
