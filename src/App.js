import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import LoginPage from "./views/LoginPage/LoginPage";
import HomePage from "./views/HomePage/HomePage";
import UserProfile from "./views/Profile/UserProfile";
import Search from "./views/Profile/UserProfile";
import Chat from "./views/Chat/Chat";
import Sell from "./views/Sell/Sell";
import Admin from './context/Admin/Admin';

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LoginPage /> },
    {path:'/admin', element:<Admin/>, children:[
      { path: "/admin/home", element: <HomePage /> },
    { path: "/admin/profile", element: <UserProfile /> },
    {path:'/admin/search/:product'},
    { path: "/admin/search", element: <Search /> },
    {path:'/admin/chat/:chatId'},
    { path: "/admin/chat", element: <Chat /> },
    { path: "/admin/sell", element: <Sell /> }
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
