/**
 * ----------
 * PAGE
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

import { MainMenu } from '../../02-molecules'
import { data as MainMenuData } from '../../02-molecules/MainMenu/data'

const Page = ({
  additionalClasses,
  children
}) => {
  const classes = ["page", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>
      <header>
        <MainMenu { ...MainMenuData } />
      </header>

      <main>
        { children }
      </main>
    </div>
  )
}

Page.propTypes = {
  additionalClasses: PropTypes.array
}

Page.defaultProps = {
  additionalClasses: []
}

export default Page
