import * as React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import SingleUser from "./SingleUser";
import Organization from "./Organization";
import NewUsers from "./NewUsers";
import Final from "./Final";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/single-user">Example: SingleUser</Link>
            </li>
            <li>
              <Link to="/organization">Part 1, Organization</Link>
            </li>
            <li>
              <Link to="/new-users">Part 2: New Users</Link>
            </li>
            <li>
              <Link to="/final">Part 3: Final</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/single-user">
            <SingleUser />
          </Route>
          <Route path="/organization">
            <Organization />
          </Route>
          <Route path="/new-users">
            <NewUsers />
          </Route>
          <Route path="/final">
            <Final />
          </Route>
          <Route path="/">
            <div className="App" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
