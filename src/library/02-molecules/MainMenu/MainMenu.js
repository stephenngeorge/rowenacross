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

import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const MainMenu = ({
  additionalClasses,
  colorTheme,
  menuItems
}) => {
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

  const classes = [
    "main-menu",
    `main-menu--${colorTheme}`,
    ...additionalClasses
  ]
  return validateMenu(colorTheme).length > 0 ? null : (
    <nav className={`${classes.join(" ")}`}>
      {
        menuItems.length > 0 &&
        menuItems.map(item => <Link key={ item.label } to={ item.path }>{ item.label }</Link>)
      }
    </nav>
  )
}

MainMenu.propTypes = {
  additionalClasses: PropTypes.array,
  colorTheme: PropTypes.string,
  menuItems: PropTypes.array.isRequired
}

MainMenu.defaultProps = {
  additionalClasses: [],
  colorTheme: "light"
}

export default MainMenu
