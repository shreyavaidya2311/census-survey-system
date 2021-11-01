import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import CensusForm from "./pages/CensusForm";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={CensusForm} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
