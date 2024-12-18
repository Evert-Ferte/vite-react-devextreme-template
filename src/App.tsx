import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./utility/routing";

const router = createBrowserRouter(routes);

export default function App() {
    return (
        <RouterProvider router={router} />
    );
}