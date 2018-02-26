import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import rootReducer from './rootReducer'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Header from './Header/Header';
import Episodes from './Episodes/Episodes';
import Description from './Description/Description';
import Cast from './Cast/Cast';
import Shows from './Shows/Shows';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Header />
          <Route path="/" component={Shows}>
            <IndexRoute component={Description} />
            <Route path="/episodes" component={Episodes} />
            <Route path="/cast" component={Cast} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
