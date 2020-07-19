import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { history } from 'lib/navigation';
import { Routes } from 'pages';
import { configureStore } from 'store';

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
