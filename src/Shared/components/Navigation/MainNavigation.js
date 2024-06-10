import React, { useState } from "react"
import { Link } from "react-router-dom"

import { MainHeader } from "./MainHeader"
import { NavLinks } from "./NavLinks"
import { SideDrawer } from "./SideDrawer"
import "./MainNavigation.css"

export const MainNavigation = (props) => {
  const [drawerOpenState, setdrawerOpenState] = useState(false)
  const OpenDrawer = () => {
    setdrawerOpenState(true)
  }
  const closeDrawer = () => {
    setdrawerOpenState(false)
  }
  return (
    <React.Fragment>
      {drawerOpenState && (
        <SideDrawer>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={OpenDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  )
}
