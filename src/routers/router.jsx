import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx';
import Home from '../Home/Home.jsx'; 
import Shop from '../shop/Shop.jsx';
import About from "../components/About.jsx";
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    children: [
      {
        index: true, 
        element: <Home />, 
      },
      {
        path:"/shop",
        element:<Shop />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      },
      {
        path: '/protected',
        element: <PrivateRoute><Shop /></PrivateRoute>
      }
    ],
  },
]);
export default router;
