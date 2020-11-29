const rootElement = document.getElementById('app');

const myElement = document.createElement('h1');
myElement.className = "orange";
myElement.innerText = 'Olá meu mundo laranja';

rootElement.appendChild(myElement);
