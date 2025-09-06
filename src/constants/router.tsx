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
import { Admin } from '../pages/admin/admin'
import { Education } from '../pages/admin/admin-inner/education'
import { Users } from '../pages/admin/admin-inner/users'
import { News as AdminNews } from '../pages/admin/admin-inner/news'
import { Teachers } from '../pages/admin/admin-inner/teachers'
import { Owners } from '../pages/admin/admin-inner/owners'
import { FacultiesPage } from '../pages/admin/admin-inner/faculties'

import { Layout } from '../layout/layout'

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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
      {path: ROUTES.ADMIN, element: <Admin /> , children: [
        {
          path: ROUTES.EDUCATION, element: <Education />
        },
        {
          path: ROUTES.OWNERS, element: <Owners />
        }
        ,
        {
          path: ROUTES.USERS, element: <Users />
        },
        {
          path: ROUTES.ADMIN_NEWS, element: <AdminNews />
        },
        {
          path: ROUTES.TEACHERS, element: <Teachers />
        },
        {
          path: ROUTES.FACULTIES, element: <FacultiesPage />
        }
      ]},
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      { path: ROUTES.REGISTER, element: <RegisterPage /> },
])

export default function AppRouter() {
  return <RouterProvider router={Router} />
}
