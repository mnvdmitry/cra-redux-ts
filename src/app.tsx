import React from 'react';
import { Router } from 'react-router-dom';

import { history } from 'lib/navigation';
import { Routes } from 'pages';

function App() {
  return (
    <React.Suspense fallback={<></>}>
      <Router history={history}>
        <Routes />
      </Router>
    </React.Suspense>
  );
}

export default App;
