const { hash } = window.location;
const message = atob(hash.slice(1));

const form = document.querySelector('form');
const messageInput = document.querySelector('#message-input');
const createBtn = document.querySelector('.btn');
const linkInput = document.querySelector('#link-input');
const messageCard = document.getElementById('message-card');
const linkCard = document.getElementById('link-card');
const messageShow = document.getElementById('message-show');
const messageDisplay = messageShow.querySelector('h1');

if (message) {
  messageCard.classList.add('hide');
  messageShow.classList.remove('hide');
  linkCard.classList.add('hide');
  messageDisplay.textContent = message;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const encrypted = btoa(messageInput.value);
  linkInput.value = `${window.location}#${encrypted}`;
  messageCard.classList.add('hide');
  linkCard.classList.remove('hide');
  linkInput.select();
});
