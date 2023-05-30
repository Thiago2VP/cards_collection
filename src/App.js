import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MyRoutes from './routes';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <MyRoutes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
