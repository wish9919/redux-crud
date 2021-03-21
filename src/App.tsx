import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Notes from "./views/Notes";
import Todos from "./views/Todos";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/notes">Notes</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/notes" component={Notes} />
        <Route path="/todos" component={Todos} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
