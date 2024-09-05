import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'
import {Landing, Login, SignUp, Home, AddProject, ProjectDetail, Profile, Contact, AboutUs} from "./pages/index.js"
import store from './store/store.js'
import { Provider } from 'react-redux'
import AuthLayout from "./components/AuthLayout.jsx"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "",
            element: <Landing />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <SignUp />
                </AuthLayout>
            ),
        },
        {
            path: "/about-us",
            element: (
                <AuthLayout authentication={false}>
                    <AboutUs />
                </AuthLayout>
            ),
        },
        {
            path: "/home",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Home />
                </AuthLayout>
            ),
        },
        {
            path: "/profile",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Profile />
                </AuthLayout>
            ),
        },
        {
            path: "/contact",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Contact />
                </AuthLayout>
            ),
        },
        {
            path: "/add-project",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddProject />
                </AuthLayout>
            ),
        },
        {
            path: "/project-detail",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <ProjectDetail />
                </AuthLayout>
            ),
        },
        
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
        <ToastContainer/>
      </React.StrictMode>,
    </Provider>
  
)
