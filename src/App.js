import React from 'react';
import { Provider } from 'react-redux';

import { Home } from './pages/Home';

import { createAppStore } from './redux';
const { store } = createAppStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
