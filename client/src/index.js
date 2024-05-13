import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Newnotes from './views/NewNotes/Newnotes';
import Home from './views/Home/Home';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path:"/new",
    element: <Newnotes />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);