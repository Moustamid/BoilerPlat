import React from 'react';
import reactDOM from 'react-dom';
//-redux :
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Reducers from './reducers';
import reduxThunk from 'redux-thunk';
//-Stules :
import { ThemeProvider } from 'styled-components';
import Theme from './styles/theme';
import { GlobalStyles } from './styles/globalStyles';
//-components
import App from './components/App';

// SECTION:
const store = createStore(Reducers, {}, applyMiddleware(reduxThunk));

// SECTION:
reactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root')
);

//! createStore takes :
/*
 * redusers
 * initial state "usfull in case of SSR"
 * Middlewares
 */
