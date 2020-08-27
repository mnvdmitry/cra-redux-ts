import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore } from 'store';
import { Routes } from 'pages';
import { history } from 'lib/navigation';

import 'styles/common.css';

function App() {
  let store = configureStore();

  return (
    <React.Suspense fallback={<></>}>
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    </React.Suspense>
  );
}

export default App;
