import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Errorpage from "../pages/Error/Errorpage";
import Home from "../pages/Home/Home";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                index: true,
                loader: () => fetch('BooksData.json'),
                path: "/",
                Component: Home
            }
        ]
    },
    
]);