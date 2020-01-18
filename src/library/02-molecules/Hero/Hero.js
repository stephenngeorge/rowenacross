/**
 * ----------
 * HERO
 * ----------
 * 
 * Comment block, describe your component here
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
      <TitleGradient titleTag={ titleTag } titleText={ titleText } />
    </section>
  )
}

Hero.propTypes = {
  additionalClasses: PropTypes.array,
  heroHeight: PropTypes.number,
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
