import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',

            }
        ]
    }
])


export default router;