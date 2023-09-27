import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LoginPage from "./views/LoginPage/LoginPage";
import HomePage from "./views/HomePage/HomePage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LoginPage /> },
    { path: "/home", element: <HomePage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
