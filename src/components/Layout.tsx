import React from 'react'
import { Outlet } from 'react-router'
import Navigation from './Navigation.js';
const Layout = () => {
  return (
    <div>
        <header><Navigation/></header>
        <main>

            <Outlet/>
        </main>
        <footer>Footer</footer>

    </div>
  )
}

export default Layout;