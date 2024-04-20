import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

//Pages......................................
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import ChatBox from "../pages/chatbox/ChatBox";
import ChatGPT from "../pages/chatGPT/ChatGPT"


//Components..................................
import Nav from "../components/nav/nav";
import LeftBar from "../components/leftbar/LeftBar";
import RightBar from "../components/rightbar/RightBar";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Box from "../pages/chatbox/Box";
import Init from "../pages/chatbox/Init"


export default function LayOut() {

    //Structure de l'application..............
    const Structure = () => {
        return (
            <>
                <Nav />
                <main>
                    <LeftBar />
                    <div className="container">
                        <Outlet />
                    </div>
                    <RightBar />
                </main>
            </>
        )
    }


    //Structure des Routers............

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Structure />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/profile/:id',
                    element: <Profile />
                },
            ],
            errorElement: <ErrorPage />,
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <Signup />
        },
        {
            path: '/chatbox',
            element: <ChatBox />,
            children: [
                {
                    path: 'chatbox/:chatboxId',
                    element: <Box />
                },
                {
                    path: '/chatbox',
                    element: <Init />
                }
            ]
        },

        {
            path: '/chatgpt',
            element: <ChatGPT />
        }
    ])
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}