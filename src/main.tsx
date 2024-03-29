import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Layout } from "./layout/Layout";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>
);
