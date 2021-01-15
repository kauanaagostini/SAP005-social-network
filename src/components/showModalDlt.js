export const modalDlt = () => {
    const deleteTemplate = document.querySelector('#errorModal');
    const deleteMessage = document.createElement('section');
    deleteMessage.setAttribute('id', 'deleteMessage');
    deleteTemplate.classList.add('itemActive');
    deleteTemplate.appendChild(deleteMessage);
    deleteMessage.innerHTML = `
          <h1> Deseja mesmo excluir a publicação? </h1>
          <button type='button'id='btn-yes'> Sim </button>
          <button type='button' id='btn-no'> Não </button>
      `;
  
    const btnYes = deleteTemplate.querySelector('#btn-yes');
    btnYes.addEventListener('click', () => {
      deleteTemplate.classList.remove('itemActive');
      deleteMessage.style.display = 'none';
      deleteMessage.innerHTML = '';
      confirm = 'oi';
    });
  
    const btnNo = deleteTemplate.querySelector('#btn-no');
    btnNo.addEventListener('click', () => {
      deleteTemplate.classList.remove('itemActive');
      deleteMessage.style.display = 'none';
      deleteMessage.innerHTML = '';
    });
  };