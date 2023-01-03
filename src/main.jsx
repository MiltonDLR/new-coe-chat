import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './auth/container/auth.container';
import ErrorPage from './error-page';
import './index.css';
import Profile from './profile/container/profile.container';
import Contacts from './contacts/container/contacts.container';
import Conversations from './conversations/container/conversations.container';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Auth />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/profile/:idContact',
        element: <Profile />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/contacts/:idContact',
        element: <Contacts />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/conversations',
        element: <Conversations />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
