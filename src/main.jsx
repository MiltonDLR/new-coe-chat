import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Auth from './auth/container/auth.container'
import ErrorPage from './error-page'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Auth />,
        errorElement: <ErrorPage />,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)