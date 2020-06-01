import React from 'react';
import { Provider } from 'react-redux'

import Root from './views/Root'
import store from './store/configure'

let App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
