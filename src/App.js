import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import LoginPage from "./views/LoginPage/LoginPage";
import HomePage from "./views/HomePage/HomePage";
import UserProfile from "./views/Profile/UserProfile";
import Search from "./views/Profile/UserProfile";
import Chat from "./views/Chat/Chat";
import Sell from "./views/Sell/Sell";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LoginPage /> },
    {path:'/admin', element:<div></div>, children:[
      { path: "/home", element: <HomePage /> },
    { path: "/profile", element: <UserProfile /> },
    {path:'/search/:product'},
    { path: "/search", element: <Search /> },
    {path:'/chat/:chatId'},
    { path: "/chat", element: <Chat /> },
    { path: "/sell", element: <Sell /> }
    ]}
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
