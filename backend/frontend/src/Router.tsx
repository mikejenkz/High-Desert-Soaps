
import App from "./App";
import Home from "./Home";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { RotateRight } from "@mui/icons-material";
import ForgotPassword from "./ForgotPassword";
import React from "react";
import ShoppingCart from "./ShoppingCart";
import Products from "./modules/views/Products";
import Payment from "./Payment";
import Checkout from "./modules/views/Checkout";
import Admin from "./modules/views/Admin";

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
        },
        {
            path: 'shopping-cart',
            element: <ShoppingCart/>

        },
        {
            path: 'products',
            element: <Products/>
        },
        {
            path: 'payments',
            element: <Payment/>
        },
        {
            path: 'checkout',
            element: <Checkout/>
    },
    {
        path: 'adminfunc',
        element: <Admin/>
}

    ]

    }
]);

export default router;