/**
 * ----------
 * HERO
 * ----------
 * 
 * Hero components render a large image with an 
 * overlapping TitleGradient atom.
 * 
 * @see 01-atoms/CoverImage
 * @see 01-atoms/TitleGradient
 * 
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"

import { CoverImage, TitleGradient } from '../../01-atoms'

const Hero = ({
  additionalClasses,
  heroHeight,
  imageAlt,
  imageSrc,
  titleTag,
  titleText
}) => {
  // set the height of the hero section by
  // the value of the height prop
  useEffect(() => {
    const setHeight = () => {
      const hero = document.querySelector(".hero")
  
      if (hero !== null && hero !== undefined) {
        hero.style.height = `${heroHeight}vh`
      }
    }

    setHeight()
  }, [heroHeight])

  const classes = ["hero", ...additionalClasses]
  return (
    <section className={`${classes.join(" ")}`}>
      <CoverImage imageAlt={ imageAlt } imageSrc={ imageSrc } />
      <TitleGradient titleTag={ titleTag } titleText={ titleText } shadows={ false } />
    </section>
  )
}

Hero.propTypes = {
  additionalClasses: PropTypes.array,
  heroHeight: PropTypes.number, // <-- number of vh. Fullscreen would be 100
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  titleTag: PropTypes.number,
  titleText: PropTypes.string.isRequired
}

Hero.defaultProps = {
  additionalClasses: [],
  heroHeight: 70,
  image: "Hero image",
  titleTag: 1
}

export default Hero
