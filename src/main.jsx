import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/Statistics';
import DonateDetails from './Components/DonateDetails/DonateDetails';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch('/public/Data.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('/public/Data.json')
      },
      {
        path: "/donateDetails/:id",
        element: <DonateDetails></DonateDetails>,
        loader: () => fetch('/public/Data.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
