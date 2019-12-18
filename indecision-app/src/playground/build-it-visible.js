let details = false;

const onToggle = () => {
  details = !details;
  console.log('clicked!');

  visibilityApp();
};

const visibilityApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggle}>
        {details ? 'Hide details' : 'Show details'}
      </button>
      {details && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, document.getElementById('app'));
};

visibilityApp();
