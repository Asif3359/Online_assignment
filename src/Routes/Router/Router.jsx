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
import ViewAssignment from '../../Pages/ViewAssignment/ViewAssignment';
import UpdateAssignment from '../../Pages/UpdateAssignment/UpdateAssignment';

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
            element:<Assignments></Assignments>,
        },
        {
            path:"/myAss",
            element:<PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>,
            loader: ()=>fetch('http://localhost:5000/assignment')
        },
        {
            path:"/create",
            element:<PrivateRoute><CreateAssignments></CreateAssignments></PrivateRoute>,
        },
        {
            path:"/view/:id",
            element:<PrivateRoute><ViewAssignment></ViewAssignment></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/assignment/${params.id}`)
        },
        {
            path:"/update/:id",
            element:<PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
        },
      ]
    },
  ]);

export default router;