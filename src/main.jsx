import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { Provider } from "react-redux";
import articleStore from "./redux/stores/articlesStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={articleStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
