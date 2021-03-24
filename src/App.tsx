import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Notes from "./views/Notes";
import Todos from "./views/Todos";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/notes" component={Notes} />
        <Route path="/todos" component={Todos} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
