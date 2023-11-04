import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import SingUp from '../../Pages/SingUp/SingUp';
import Profile from '../../Pages/Profile/Profile';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Assignments from '../../Pages/Assignments/Assignments';
import MyAssignments from '../../Pages/MyAssignments/MyAssignments';
import CreateAssignments from '../../Pages/CreateAssignments/CreateAssignments';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<div className='flex justify-center items-center h-[80vh]'>
        <div>
            <h3 className='text-center'>Sorry This page not found</h3>
        </div>
      </div>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/profile",
            element:<Profile></Profile>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/singUp",
            element:<SingUp></SingUp>
        },
        // {
        //     path:"/checkout/:id",
        //     element:<CheckOut></CheckOut>,
        //     loader:({params})=> fetch(`https://car-doctor-server-md.vercel.app/services/${params.id}`)
        // },
        {
            path:"/assignments",
            element:<PrivateRoute><Assignments></Assignments></PrivateRoute>,
            loader: ()=>fetch('/features.json')
        },
        {
            path:"/myAssignments",
            element:<PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>,
            loader: ()=>fetch('/features.json')
        },
        {
            path:"/createAssignments",
            element:<PrivateRoute><CreateAssignments></CreateAssignments></PrivateRoute>,
        },
      ]
    },
  ]);

export default router;