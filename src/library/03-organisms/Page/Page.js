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
import PropTypes from "prop-types"

import { Footer, MainMenu } from '../../02-molecules'
import { data as MainMenuData } from '../../02-molecules/MainMenu/data'

const Page = ({
  additionalClasses,
  children
}) => {
  useEffect(() => {
    const addPadding = () => {
      let page = document.querySelector('.page')
      let footer = document.querySelector('.footer')
      if (page !== null && page !== undefined && footer !== null && footer !== undefined) {
        let footerHeight = footer.clientHeight
        page.style.paddingBottom = `${footerHeight}px`
      }
    }
    
    addPadding()
    window.addEventListener("resize", addPadding)

    return () => window.removeEventListener("resize", addPadding)
  }, [])

  const classes = ["page", ...additionalClasses]
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
