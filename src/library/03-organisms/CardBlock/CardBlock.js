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
    let options = { threshold: window.innerWidth < 767 ? .1 : .4 }
    let observer = new IntersectionObserver(animateCards, options)
    let target = document.querySelector('.card-block')
    if (target !== null) observer.observe(target)

    return () => observer.unobserve(target)
  }, [window.innerWidth])

  const classes = ["card-block", ...additionalClasses]
  return (
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
