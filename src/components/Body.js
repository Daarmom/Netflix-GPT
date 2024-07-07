import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Browse from './Browse';
import Login from './Login';
import MoviePage from './MoviePage';


const Body = () => {
    const NotFound = () => <h1>404 Not Found</h1>;
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>,
            errorElement: <NotFound />
        },
        {
            path: '/browse',
            element: <Browse/>,
            errorElement: <NotFound />
        },
        {
            path: '/movie/:id',
            element: <MoviePage/>,
            errorElement: <NotFound />
        }
    ]);

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;