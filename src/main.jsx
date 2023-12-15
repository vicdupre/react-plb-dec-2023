import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { Provider } from "react-redux";
import rootStore from "./redux/stores/rootStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
