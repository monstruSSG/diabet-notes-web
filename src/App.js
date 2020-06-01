import React from 'react';
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'

import Root from './views/Root'
import store from './store/configure'
import MuiTheme from './utils/GlobalMuiTheme'

let App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={MuiTheme}>
        <Root />
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
