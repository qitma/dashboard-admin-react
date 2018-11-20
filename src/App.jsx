import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/css/pagination-custom.css";
import "assets/css/material-dashboard-react.css?v=1.5.0";

import indexRoutes from "routes/index.jsx";

const hist = createBrowserHistory();

// eslint-disable-next-line no-unused-vars
function App({ ...props }) {
  return (
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
