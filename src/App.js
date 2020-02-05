import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import { Testae } from './components/testae';

import { createAppStore } from './redux';
const { store } = createAppStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <Testae />
      </Provider>
    </>
  );
}

export default App;
