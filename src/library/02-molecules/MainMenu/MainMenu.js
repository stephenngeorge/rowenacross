/**
 * ----------
 * MAINMENU
 * ----------
 * 
 * Main Menu components display a list of links
 * in a flex container. Main Menu is distinct from
 * other menu components as its styles and behaviours
 * react to different areas of the homepage and scroll
 * events.
 * 
 * Main Menu accepts a menuItems prop, which is an array
 * of objects in which each object should be of shape:
 * {
 * ..label: string,
 * ..path: string (url)
 * }
 */

import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import PropTypes from "prop-types"

import * as errorTypes from '../../../utils/errorTypes'

const MainMenu = ({
  additionalClasses,
  menuItems
}) => {
  // dynamically set the default menu theme based on the
  // current page. On the homepage, menu should be light,
  // on other pages, it should be dark.
  const location = useLocation()
  const defaultTheme = location.pathname === "/" ? "light" : "dark"

  // function to bring the menu in and out of view.
  const toggleMenu = () => {
    const menuItems = document.querySelector('.main-menu__items')

    if (menuItems !== null && menuItems !== undefined) {
      menuItems.classList.toggle("menu-items-onscreen")
    }
  }

  const [colorTheme, setColorTheme] = useState(defaultTheme)
  // switch the colour theme between "light" and "dark".
  // This functionality is only required on the homepage.
  useEffect(() => {
    const switchTheme = () => {
      if (location.pathname === "/") {
        window.scrollY > window.innerHeight / 4 ? setColorTheme("dark") : setColorTheme("light")
      }
      else {
        setColorTheme("dark")
      }
    }
    // call function on page load and then on every scroll event
    switchTheme()
    window.addEventListener("scroll", switchTheme)
    // clean up event listener
    return () => window.removeEventListener("scroll", switchTheme)
  }, [colorTheme, location])

  // determine if the menu should display in full mode (for larger breakpoints)
  // or using the 'menu--collapsed' class (smaller breakpoints). In case of the
  // latter, attach a click event listener to toggle the view of the menu items.
  useEffect(() => {
    const setMenuLayout = () => {
      const mainMenu = document.querySelector(".main-menu")
  
      if (mainMenu !== null && mainMenu !== undefined) {
        window.innerWidth <= 767 ? mainMenu.classList.add('menu--collapsed') : mainMenu.classList.remove('menu--collapsed')
        if (mainMenu.classList.contains('menu--collapsed')) {
          document.querySelector('.menu--collapsed .main-menu__items').addEventListener("click", toggleMenu)
        }
      }
    }
    // call function on page load and then on every scroll event
    setMenuLayout()
    window.addEventListener("resize", setMenuLayout)
    // clean up event listener
    return () => window.removeEventListener("resize", setMenuLayout)
  }, [])

  // validation checks the colorTheme prop is one of the
  // allowed values.
  const validateMenu = colorTheme => {
    let errors = []

    if (["light", "dark"].indexOf(colorTheme) < 0) {
      errors.push({
        type: errorTypes.VALUE_OUT_OF_RANGE,
        source: "MainMenu > props.colorTheme",
        message: "colorTheme prop must be one of 'light' or 'dark'"
      })
    }

    for (let error of errors) {
      console.warn(`${error.type}\n${error.source}: ${error.message}`)
    }

    return errors
  }

  const classes = [
    "main-menu",
    `main-menu--${colorTheme}`,
    window.innerWidth <= 767 ? "menu--collapsed" : "",
    ...additionalClasses
  ]

  return validateMenu(colorTheme).length > 0 ? null : (
    <nav className={`${classes.join(" ")}`}>
      <button onClick={ toggleMenu }>
        <div className="menu-icon">
          <div className="menu-icon--top"></div>
          <div className="menu-icon--middle"></div>
          <div className="menu-icon--bottom"></div>
        </div>
      </button>
      <div className="main-menu__items">
        {
          menuItems.length > 0 &&
          menuItems.map(item => <Link onClick={() => window.scrollTo(0, 0)} key={ item.label } to={ item.path }>{ item.label }</Link>)
        }
      </div>
    </nav>
  )
}

MainMenu.propTypes = {
  additionalClasses: PropTypes.array,
  menuItems: PropTypes.array.isRequired
}

MainMenu.defaultProps = {
  additionalClasses: []
}

export default MainMenu
