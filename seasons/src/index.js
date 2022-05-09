import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    // success callback function
    (position) => console.log(position),
    // failure callback function
    (err) => console.log(err)
  );

  return <div>Hi there!</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
