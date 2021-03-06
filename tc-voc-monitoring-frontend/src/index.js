import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import './style/index.css';
import './style/sensing.css';
import './style/analysis.css';
// import 'bootstrap/dist/css/bootstrap.css'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Sensing from './components/sensing/sensing';
import Analysis from './components/anlysis/analysis';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/analysis/:class2" component={Analysis} />
          <Route path="/" component={Sensing}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
