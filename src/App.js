import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { GlobalStyles } from "./components/GlobalStyles";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch location={location} key={location.key}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
