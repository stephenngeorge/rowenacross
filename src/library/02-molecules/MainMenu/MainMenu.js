/**
 * ----------
 * MAINMENU
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const MainMenu = ({
  additionalClasses
}) => {
  const classes = ["main-menu", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>

    </div>
  )
}

MainMenu.propTypes = {
  additionalClasses: PropTypes.array
}

MainMenu.defaultProps = {
  additionalClasses: []
}

export default MainMenu
