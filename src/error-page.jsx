import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError()

    return (
        <div className="w-full flex h-[100vh] flex-col items-center justify-center ">
            <h1 className="text-5xl text-center">Oops!</h1>
            <p className="text-center text-xl mt-10">
                Sorry, an unexpected error has occurred.
            </p>
            <p className="text-center text-xl text-slate-500 mt-6">
                <i>{error.statusText || error.message}</i>
            </p>
            <NavLink
                to={'/'}
                className="mt-6 text-blue-700 hover:text-blue-500
      active:text-blue-300"
            >
                Return to Home page
            </NavLink>
        </div>
    )
}
