export const showModal = {
    error(message) {
        let errorTemplate = document.querySelector('#errorModal');
        let errorMessage = document.createElement('section');
        errorMessage.setAttribute('id', "errorMessage")
        errorTemplate.classList.add('itemActive');
        errorTemplate.appendChild(errorMessage)
        errorMessage.innerHTML =  `
            <h1> Atenção! </h1>
            <p> ${message} </p>
            <button type='button' class='btnClose'> Ok </button>
        `
        
        const btnClose = errorTemplate.querySelector('.btnClose')
        btnClose.addEventListener('click', () => {
            errorTemplate.classList.remove('itemActive')
            errorMessage.innerHTML= "";
        })
    }
}

