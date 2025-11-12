import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

function clearContent() {
  const content = document.querySelector('#content');
  content.innerHTML = '';
}

function setActiveTab(tabName) {
  document.querySelectorAll('nav button').forEach(btn => {
    btn.classList.toggle('active', btn.id === tabName);
  });
}

function renderTab(tabName) {
  const content = document.querySelector('#content');
  clearContent();
  setActiveTab(tabName);

  switch (tabName) {
    case 'home':
      content.appendChild(loadHome());
      break;
    case 'menu':
      content.appendChild(loadMenu());
      break;
    case 'contact':
      content.appendChild(loadContact());
      break;
  }
}

// При загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  renderTab('home'); // открываем домашнюю вкладку по умолчанию

  document.querySelector('#home').addEventListener('click', () => renderTab('home'));
  document.querySelector('#menu').addEventListener('click', () => renderTab('menu'));
  document.querySelector('#contact').addEventListener('click', () => renderTab('contact'));
});
