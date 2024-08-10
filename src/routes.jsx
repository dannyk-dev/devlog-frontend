import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Home from "./routes/Home";
import PostArticle from "./routes/PostArticle";

export const AppRoutes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/posts/:id",
        element: <PostArticle />,
        errorElement: <ErrorPage />,
      },
      {
        path: "login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: "register",
        element: <Register />,
        errorElement: <ErrorPage />,
      },
    ],
  },
];
