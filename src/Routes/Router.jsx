import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Errorpage from "../pages/Error/Errorpage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../components/BookDetails/BookDetails";

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
            },
            {
                path: "about",
                Component: About
            },
            {
                path: "book-details/:id",
                loader: () => fetch('BooksData.json'),
                Component: BookDetails
            }
        ]
    },
    
]);