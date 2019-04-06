import '@babel/polyfill';

const rootElement = document.querySelector('#root');

const spanChild = document.createElement('span');
spanChild.textContent = 'Hello world!';

rootElement.appendChild(spanChild);
