import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Header from './components/layout/Header';
import Todos from './components/todos/Todos';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header heading="TODOS" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/todos" component={Todos} />


          </Switch>
        </div>
      </div>
      </Router>
  );
}
}

export default App;
