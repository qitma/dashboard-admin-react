import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/css/pagination-custom.css";
import "assets/css/material-dashboard-react.css?v=1.5.0";
import "./DummyData/DummyUsers";
import { store } from "./store";
import { Provider } from "react-redux";

import indexRoutes from "routes/index.jsx";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
