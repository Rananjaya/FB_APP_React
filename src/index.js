import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from "./Pages/Login/login";
// import Dashboard from "./Pages/Dashboard/dashboard";
import 'semantic-ui-css/semantic.min.css'
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/DashBoard/Dashbord"
import FourZeroFour from "./Pages/404/404";

const routes = (
    <BrowserRouter>
      <Switch>
        <Route path="/Dashbord" component={Dashboard} />
        <Route path="/Dashbord" component={Dashboard} />
        <Redirect from="/" to="/Dashbord" />
        <Route component={FourZeroFour} />
      </Switch>
    </BrowserRouter>
  );
  ReactDOM.render(routes,document.getElementById('root'));


serviceWorker.unregister();
