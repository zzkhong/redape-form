import React from 'react';
import { Provider } from 'react-redux';
import Routes from 'Routes';
import store from 'common/store';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
