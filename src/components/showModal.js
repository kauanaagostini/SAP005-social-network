const showModal = {
  error(message) {
    const errorTemplate = document.querySelector('#errorModal');
    const errorMessage = document.createElement('section');
    errorMessage.setAttribute('id', 'errorMessage');
    errorTemplate.classList.add('itemActive');
    errorTemplate.appendChild(errorMessage);
    errorMessage.innerHTML = `
            <h1> Atenção! </h1>
            <p> ${message} </p>
            <button type='button' class='btnClose'> Ok </button>
        `;

    const btnClose = errorTemplate.querySelector('.btnClose');
    btnClose.addEventListener('click', () => {
      errorTemplate.classList.remove('itemActive');
      errorMessage.innerHTML = '';
    });
  },
};

export default showModal;
