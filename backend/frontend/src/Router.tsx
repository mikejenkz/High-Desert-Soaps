
import App from "./App";
import Home from "./Home";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { RotateRight } from "@mui/icons-material";
import ForgotPassword from "./ForgotPassword";
import React from "react";

const router = createBrowserRouter ([
    {
        path: "/",
        element: < App />,
        children: [   
    {
            index: true,
            element: <Home/>
    },

    {
            path: 'sign-in',
            element: <SignIn/>
        },
        {
            path: 'sign-up',
            element: <SignUp/>
        },
        {
            path: 'forgot-password',
            element: <ForgotPassword/>
        }
    ]

    }
]);

export default router;