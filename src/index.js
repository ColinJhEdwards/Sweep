import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
//redux stuff
import { createStore, applyMiddleware, compose } from "redux";
//file that contains combined reducers
import rootReducer from "./reducers";
import { Provider } from "react-redux";
// thunk is needed for async await functions
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";

// this variable is how we add thunk to the store since you can only have 2 arguments
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
