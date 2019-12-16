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

const user = {
  name: 'Cesar',
  age: 17,
  location: 'Puebla, MX'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
