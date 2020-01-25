/**
 * ----------
 * ICONSBLOCK
 * ----------
 * 
 * Icons Block components render a block of 
 * Icon atoms in a row. Icons Block accepts an 
 * Icons prop which is an array of objects, in which 
 * each object should be of shape:
 * {
 * ..altText: string,
 * ..icon: string <filepath>,
 * ..linkUrl: string,
 * ..size: string ["xs", "sm", "md", "lg", "xl"]
 * }
 * 
 * @see 01-atoms/Icon
 * 
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"

import { Icon } from '../../01-atoms'

const IconsBlock = ({
  additionalClasses,
  animationThreshold,
  icons
}) => {
  // animate icons
  useEffect(() => {
    const animateIcons = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const icons = Array.from(document.querySelectorAll('.icons-block .icon'))
          icons.forEach((icon, i) => {
            icon.style.animationDelay = `${i * 200}ms`
            icon.classList.add("icon-in")
          })
        }
      })
    }

    let target = document.querySelector(".icons-block")
    let options = { threshold: animationThreshold }
    let observer = new IntersectionObserver(animateIcons, options)
    if (target !== null) observer.observe(target)

    return () => observer.unobserve(target)
  }, [animationThreshold])

  const classes = ["icons-block", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>
      { icons.map(icon => <Icon key={ icon.icon } {...icon} />) }
    </div>
  )
}

IconsBlock.propTypes = {
  additionalClasses: PropTypes.array,
  animationThreshold: PropTypes.number, // <-- between 0 - 1
  icons: PropTypes.array.isRequired
}

IconsBlock.defaultProps = {
  additionalClasses: [],
  animationThreshold: 0
}

export default IconsBlock
