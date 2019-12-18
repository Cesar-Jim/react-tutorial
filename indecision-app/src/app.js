console.log('App.js is running!');

// JSX - JavaScript XML

// CHALLENGE ZONE ************************************************************************************
const app = {
  title: 'Progolazo',
  subtitle: 'The best soccer app',
  options: ['One', 'Two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options:' : 'No options :('}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
// END OF CHALLENGE ZONE ************************************************************************************

let count = 0;
const addOne = () => {
  console.log('plusOne');
};

const minusOne = () => {
  console.log('minusOne');
};

const reset = () => {
  console.log('reset');
};

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);

console.log(templateTwo);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
