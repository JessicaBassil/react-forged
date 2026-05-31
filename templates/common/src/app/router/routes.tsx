import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home/home-page";
import NotFoundPage from "@/pages/not-found/not-found-page";
import RootLayout from "./layouts/root-layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);
