import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';




const root = createRoot(document.querySelector('#root'));
root.render(<HashRouter>
  <Provider store={store}>
    <App />
  </Provider>
</HashRouter>);
