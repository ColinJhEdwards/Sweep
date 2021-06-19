import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { GlobalStyles } from "./components/GlobalStyles";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Switch location={location} key={location.key}>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
