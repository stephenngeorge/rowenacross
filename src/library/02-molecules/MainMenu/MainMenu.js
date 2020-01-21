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

const MainMenu = ({
  additionalClasses,
  menuItems
}) => {
  const location = useLocation()
  const defaultTheme = location.pathname === "/" ? "light" : "dark"

  const [colorTheme, setColorTheme] = useState(defaultTheme)
  useEffect(() => {
    const switchTheme = () => {
      if (location.pathname === "/") {
        window.scrollY > window.innerHeight / 4 ? setColorTheme("dark") : setColorTheme("light")
      }
      else {
        setColorTheme("dark")
      }
    }

    switchTheme()
    window.addEventListener("scroll", switchTheme)
    
    return () => window.removeEventListener("scroll", switchTheme)
  }, [colorTheme, location])

  useEffect(() => {
    const setMenuLayout = () => {
      const mainMenu = document.querySelector(".main-menu")
  
      if (mainMenu !== null && mainMenu !== undefined) {
        window.innerWidth <= 767 ? mainMenu.classList.add('menu--collapsed') : mainMenu.classList.remove('menu--collapsed')
      }
    }

    setMenuLayout()
    window.addEventListener("resize", setMenuLayout)

    return () => window.removeEventListener("resize", setMenuLayout)
  }, [])

  const validateMenu = colorTheme => {
    let errors = []

    if (["light", "dark"].indexOf(colorTheme) < 0) {
      errors.push({
        type: "VALUE OUT OF RANGE",
        source: "MainMenu > props.colorTheme",
        message: "colorTheme prop must be one of 'light' or 'dark'"
      })
    }

    for (let error of errors) {
      console.warn(`${error.type}\n${error.source}: ${error.message}`)
    }

    return errors
  }

  const toggleMenu = () => {
    const menuItems = document.querySelector('.main-menu__items')

    if (menuItems !== null && menuItems !== undefined) {
      menuItems.classList.toggle("menu-items-onscreen")
    }
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
          menuItems.map(item => <Link key={ item.label } to={ item.path }>{ item.label }</Link>)
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
