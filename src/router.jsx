import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Title from "./pages/Title";
import Home from "./pages/Home";
import People, { loader } from "./pages/People";
import CreatePerson, { action } from "./pages/CreatePerson";
import Person from "./pages/Person";

const routes = {
  home: "/",
  title: "/title",
};

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: routes.title,
        element: <Title />,
      },
      {
        path: "people",
        element: <People />,
        action: action,
        loader: loader,
        children: [
          {
            path: "add",
            element: <CreatePerson />,
          },
        ],
      },
      {
        path: "people/:id",
        element: <Person />,
      },
    ],
  },
]);

export { routes };
export default router;
