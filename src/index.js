import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth from './components/auth'
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter} from 'react-router-dom';

export const TokenContext = createContext(null);

function Router(){

  const TOKEN = "a53382b391321ba72afc15cee5ab712239382438"



  return (
    <React.StrictMode>
      <TokenContext.Provider value={TOKEN}>
        <BrowserRouter>
          <Route exact path="/" component={Auth}/>
          <Route exact path="/movies" component={App}/>
        </BrowserRouter>
      </TokenContext.Provider>
  </React.StrictMode>
  )
}

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
