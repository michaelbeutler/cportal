import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";

import configureStore from "../../configureStore";
import Login from "../Login";
import CustomerDashboard from "../CustomerDashboard";
import './App.scss';

function App() {
  return (
    <div className="app">
      <Provider store={configureStore()}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <CustomerDashboard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              404
          </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
