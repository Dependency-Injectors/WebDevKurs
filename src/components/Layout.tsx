import React from 'react'
import { Outlet } from 'react-router'
const Layout = () => {
  return (
    <div>
        <header>Header</header>
        <main>
            <Outlet/>
        </main>
        <footer>Footer</footer>

    </div>
  )
}

export default Layout;