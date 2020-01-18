/**
 * ----------
 * IMAGEANDTEXT
 * ----------
 * 
 * Image And Text components display a large image
 * alongside some text content. Although designed to
 * display text, the content area could, in theory,
 * accept any other component as a child.
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"

import { CoverImage } from '../../01-atoms'

const ImageAndText = ({
  additionalClasses,
  backgroundColor,
  children,
  imageAlt,
  imagePos,
  imageSrc
}) => {
  useEffect(() => {
    const setHeight = () => {
      const image = document.querySelector(".image-and-text > .cover-image")
      const contents = document.querySelector(".image-and-text__contents")
  
      if (
        image !== null && image !== undefined
        && contents !== null && contents !== undefined
      ) {
        if (window.innerWidth < 991 && window.innerWidth > 767) {
          image.style.height = "320px"
          image.style.marginTop = "-18%"
        }
        else if (window.innerWidth <= 767) {
          image.style.height = "300px"
          image.style.marginTop = 0
        }
        else {
          let contentsHeight = contents.clientHeight
          image.style.height = `${contentsHeight * 1.25}px`
          image.style.marginTop = `-${contentsHeight * .25}px`
        }
      }
    }

    setHeight()
    window.addEventListener("resize", setHeight)

    return () => window.removeEventListener("resize", setHeight)
  }, [])

  const classes = [
    "image-and-text",
    `bg--${backgroundColor}`,
    ...additionalClasses
  ]
  return (
    <section className={`${classes.join(" ")}`}>
      <div className="image-and-text__contents">
        { children }
      </div>
      <CoverImage imageAlt={ imageAlt } imageSrc={ imageSrc } objectPos={ imagePos } parentScope=".image-and-text" />
    </section>
  )
}

ImageAndText.propTypes = {
  additionalClasses: PropTypes.array,
  backgroundColor: PropTypes.string,
  imageAlt: PropTypes.string,
  imagePos: PropTypes.object,
  imageSrc: PropTypes.string.isRequired
}

ImageAndText.defaultProps = {
  additionalClasses: [],
  backgroundColor: "light",
  imageAlt: "image next to text"
}

export default ImageAndText
