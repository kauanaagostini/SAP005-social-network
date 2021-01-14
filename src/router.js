import { Login } from './pages/login/index.js';
import { onNavigate } from './utils/history.js';
import { createAccount } from './pages/createAccount/index.js';
import { publicar } from './pages/publicar/index.js';
import { publicacoes } from './pages/publicacoes/index.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/': Login,
    '/createAccount': createAccount,
    '/publicar': publicar,
    '/publicacoes': publicacoes,
  };

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
  document
    .getElementById('login')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/');
    });

  document
    .getElementById('createAccount')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/createAccount');
    });

  document
    .getElementById('publicar')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/publicar');
    });

  document
    .getElementById('publicacoes')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/publicacoes');
    });

  routeRender();
});
