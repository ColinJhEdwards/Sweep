import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Route path={"/"}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
