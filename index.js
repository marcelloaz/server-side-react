const rootElement = document.getElementById('app');

// const myElement = document.createElement('h1');
// myElement.className = "orange";
// myElement.innerText = 'Olá meu mundo laranja';

const myReactElement = React.createElement('h1', 
     { className = 'orange'},
     'Olá meu mundo laranja.');

// rootElement.appendChild(myElement);

ReactDOM.render(
    myReactElement,
    document.getElementById('app')
);
