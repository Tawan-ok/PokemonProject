import React, { lazy, Suspense } from 'react'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import CircleLoading from './components/circleLoading/CircleLoading'
import { Layout } from './layout'

const HomePage = lazy(() => import('./pages/homePage/HomePage'))
const ExamplePage = lazy(() => import('./pages/examplePage/ExamplePage'))
const RedditDetailPage = lazy(() => import('./pages/examplePage/RedditDetailPage'))
const NotFoundPage = lazy(() => import('./pages/notFoundPage/NotFoundPage'))
const PokemonDetailPage = lazy(() => import('./pages/pokemonDetailPage/PokemonDetailPage'))
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<CircleLoading />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: '/example',
        element: (
          <Suspense fallback={<CircleLoading />}>
            <ExamplePage />
          </Suspense>
        ),
      },
      {
        path: '/example/:name',
        element: (
          <Suspense fallback={<CircleLoading />}>
            <RedditDetailPage />
          </Suspense>
        ),
      },
      {
        path: '/pokemon/:name', // Add this route for Pokemon details
        element: (
          <Suspense fallback={<CircleLoading />}>
            <PokemonDetailPage />
          </Suspense>
        ),
      },
      {
        path: '404page',
        element: (
          <Suspense fallback={<CircleLoading />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <Navigate to="/404page" replace />,
      },
    ],
  },
])

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
