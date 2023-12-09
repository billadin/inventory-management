import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();

    if(error.status === 404) {
        return (
          <>
            <Helmet>
              <title>Error </title>
            </Helmet>
            <main className="grid min-h-[100vh] place-items-center px-8">
              <div className="text-center">
                <p className="text-9xl font-semibold text-primary">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-6 text-lg leading-7">
                  Sorry, we couldn't find the page you were looking for
                </p>
                <div className="mt-10">
                  <Link to={"/"} className="btn btn-primary text-white">
                    Go back to home
                  </Link>
                </div>
              </div>
            </main>
          </>
        );
    }



  return (
    <>
    <Helmet>
      <title>Error </title>
    </Helmet>
    <main className='grid min-h-[100vh] place-items-center px-8'>
        <h4 className='text-center font-bold text-4xl'>There was an error...</h4>
    </main>
    </>
  )
}

export default Error