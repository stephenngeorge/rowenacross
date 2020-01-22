/**
 * ----------
 * PAGE
 * ----------
 * 
 * Page components are layout components that wrap 
 * the app's content in a header & footer. The children 
 * of <Page> are rendered in a <main> tag.
 * 
 * @see 02-molecules/Footer
 * @see 02-molecules/MainMenu
 */

import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import PropTypes from "prop-types"

import { Footer, MainMenu } from '../../02-molecules'
import { data as MainMenuData } from '../../02-molecules/MainMenu/data'

const Page = ({
  additionalClasses,
  children
}) => {
  let location = useLocation()

  // add padding to the bottom of the page 
  // to compensate for the height of the footer
  useEffect(() => {
    const addPadding = () => {
      let page = document.querySelector('.page')
      let footer = document.querySelector('.footer')
      if (page !== null && page !== undefined && footer !== null && footer !== undefined) {
        let footerHeight = footer.clientHeight
        page.style.paddingBottom = `${footerHeight}px`
      }
    }
    // call function on page load and every resize event
    addPadding()
    window.addEventListener("resize", addPadding)
    // clean up event listeners
    return () => window.removeEventListener("resize", addPadding)
  }, [])

  const classes = [
    "page",
    location.pathname === "/" ? "" : "page--padding-top",
    ...additionalClasses
  ]
  return (
    <div className={`${classes.join(" ")}`}>
      <header>
        <MainMenu { ...MainMenuData } />
      </header>

      <main>
        { children }
      </main>

      <Footer>
        <p>Designed and built by Stephen Pal-George.</p>
        <p>Built with <a href="https://github.com/stephenngeorge/loris-react/blob/master/README.md">loris-react</a></p>
      </Footer>
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
