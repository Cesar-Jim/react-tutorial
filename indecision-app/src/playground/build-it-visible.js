class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility App</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>These are the details</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// ******************************* BASIC EXAMPLE (NO REACT COMPONENT)
// let details = false;

// const onToggle = () => {
//   details = !details;
//   console.log('clicked!');

//   visibilityApp();
// };

// const visibilityApp = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onToggle}>
//         {details ? 'Hide details' : 'Show details'}
//       </button>
//       {details && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById('app'));
// };

// visibilityApp();
