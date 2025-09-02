import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from './routes'

import Home from '../pages/home/home'
import { About } from '../pages/about/about'
import { Study } from '../pages/study/study'
import { Rules } from '../pages/rules/rules'
import { News } from '../pages/news/news'
import { Helper } from '../pages/helper/helper'
import { NotFoundPage } from '../pages/not-found/not-found'
import { NewPage } from '../pages/new-page/new-page'
import { LoginPage } from '../pages/auth/login'
import { RegisterPage } from '../pages/auth/register'

import { Layout } from '../layout/layout'

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      { path: ROUTES.REGISTER, element: <RegisterPage /> },
      { index: true, element: <Home /> },
      { path: ROUTES.NEW_PAGE, element: <NewPage /> },
      { path: ROUTES.ABOUT, element: <About /> },
      { path: ROUTES.STUDY, element: <Study /> },
      { path: ROUTES.RULES, element: <Rules /> },
      { path: ROUTES.NEWS, element: <News /> },
      { path: ROUTES.HELPER, element: <Helper /> },
      { path: ROUTES.NOT_FOUND, element: <NotFoundPage /> },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={Router} />
}
