import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CensusForm from "./pages/CensusForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CensusForm} />
      </Switch>
    </Router>
  );
}

export default App;
