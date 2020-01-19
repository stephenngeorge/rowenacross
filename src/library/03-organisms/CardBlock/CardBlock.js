/**
 * ----------
 * CARDBLOCK
 * ----------
 * 
 * Card Block components render a number of Card atoms
 * on a light background.
 * 
 * Children must be <Card />.
 * @see 01-atoms/Card
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"

import * as errorTypes from '../../../utils/errorTypes'

const CardBlock = ({
  additionalClasses,
  children
}) => {
  useEffect(() => {
    // setup card animation with intersection observer
    const animateCards = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          Array.from(document.querySelectorAll('.card-block .card')).forEach((card, i) => {
            card.classList.remove('slide-left-fade-out--medium')
            card.style.animationDelay = `${i * 200}ms`
            card.classList.add('slide-right-fade-in--medium')
          })
        }
      })
    }

    // configure intersection observer
    let options = { threshold: .4 }
    let observer = new IntersectionObserver(animateCards, options)
    let target = document.querySelector('.card-block')
    observer.observe(target)

    return () => observer.unobserve(target)
  }, [])

  const validateChildren = children => {
    let errors = []

    if (Array.isArray(children)) {
      const invalidElements = children.filter(element => element.type.name !== "Card")
      if (invalidElements.length > 0) {
        errors.push({
          type: errorTypes.INVALID_CHILD,
          source: "CardBlock > props.children",
          message: "CardBlock components only accept Card components as children"
        })
      }
    }
    else if (!!children && children.type.name !== "Card") {
      errors.push({
        type: errorTypes.INVALID_CHILD,
        source: "CardBlock > props.children",
        message: "CardBlock components only accept Card components as children"
      })
    }

    for (let error of errors) {
      console.warn(`${error.type}\n${error.source}: ${error.message}`)
    }

    return errors
  }

  const classes = ["card-block", ...additionalClasses]
  return validateChildren(children).length > 0 ? null : (
    <section className={`${classes.join(" ")}`}>
      <div className="card-block__cards-container">
        { children }
      </div>
    </section>
  )
}

CardBlock.propTypes = {
  additionalClasses: PropTypes.array
}

CardBlock.defaultProps = {
  additionalClasses: []
}

export default CardBlock
