import { Outlet } from 'react-router-dom'
import {Header} from './header-layout/header'
import { Footer } from './footer-layout/footer'
 
export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
