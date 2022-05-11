import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
  module.hot.accept();
}

// functional component way to do it;
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     // success callback function
//     (position) => console.log(position),
//     // failure callback function
//     (err) => console.log(err)
//   );

//   return <div>Latitude: </div>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      // success callback function
      (position) => console.log(position),
      // failure callback function
      (err) => console.log(err)
    );
    return <div>Lattitude: {this.state.lat} </div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
