import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";

import { getUser } from "./actions/user.action";

/* Redux in project */
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducers from "./reducers";

/* dev tools */
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getUser());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
