import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we are in development and in isolation,
// call mount immedietly
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing_dev_root');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount
export { mount };
