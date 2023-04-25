import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from "./components/Home";
import Register from './components/Register';
import Login from './components/Login'

function App() {
  const router  = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
