import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import Search from "./pages/Search";
import Chat from "./pages/Chat";
import Sell from "./pages/Sell";
import ProductPage from "./pages/ProductPage";
import AddProduct from "./pages/AddProduct";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LoginPage /> },
    { path: "/home", element: <HomePage /> },
    { path: "/UserProfile", element: <UserProfile /> },
    { path: "/Search", element: <Search /> },
    { path: "/Chat", element: <Chat /> },
    { path: "/Sell", element: <Sell /> },
    { path: "/ProductPage", element: <ProductPage />},
    { path: "/AddProduct", element: <AddProduct />},
  ]);

  return (
    <div>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
    </div>
  );
}

export default App;
