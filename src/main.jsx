import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { Provider } from "react-redux";
import rootStore, { rootPersitor } from "./redux/stores/rootStore.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <PersistGate persistor={rootPersitor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
