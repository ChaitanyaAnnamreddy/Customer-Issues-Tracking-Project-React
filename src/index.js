import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import { store } from './app/store'
  import { Provider } from 'react-redux'

import Dashboard from './features/dashboard/Dashboard';
import Login from './features/user/Login';
import AddTicket from './features/dashboard/AddTicket';
import ListTickets from './features/dashboard/ListTickets';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path  :"",  
          element: <Login></Login>,
        },
        {
          path: "/dashboard",  
           element: <Dashboard></Dashboard>,
           children:
           [
            {
              path: "/dashboard/addTicket",  
              element: <AddTicket></AddTicket>,
            },
            {
              path: "/dashboard",  
              element: <ListTickets></ListTickets>,
            },
            {
              path: "/dashboard/listTickets",  
              element: <ListTickets></ListTickets>,
            }
           ]
        }
      ]
    },
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <Provider store={store}> 
    <RouterProvider router={router} />
    </Provider>
);


