/**
 * ----------
 * IMAGEBLOCK
 * ----------
 * 
 * Image Block components show three images in a row,
 * which collapses to a slider on smaller breakpoints.
 * Image Blocks take an images props, an array of objects
 * in which each image should be of shape:
 * 
 * {
 * ..alt: string,
 * ..src: string (filepath)
 * }
 * 
 * @see 01-atoms/CoverImage
 * 
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"

import { CoverImage } from '../../01-atoms'

const ImageBlock = ({
  additionalClasses,
  images
}) => {
  // animate images
  useEffect(() => {
    const animateImages = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let images = Array.from(document.querySelectorAll('.image-block .images__panel'))
          images.forEach((image, i) => {
            image.style.animationDelay = `${i * 200}ms`
            image.classList.add('slide-up-fade-in--medium')
          })
        }
      })
    }

    let target = document.querySelector(".image-block")
    let options = { threshold: .4 }
    let observer = new IntersectionObserver(animateImages, options)
    observer.observe(target)

    return () => observer.unobserve(target)
  }, [])
  const classes = ["image-block", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>
      <div className="image-block__images">
        {
          (images.length > 0 && images.length <= 3) &&
          images.map(image => {
            return (
              <div key={ image.alt } className="images__panel">
                <CoverImage imageAlt={ image.alt } imageSrc={ image.src } />
              </div>
            ) 
          })
        }
      </div>
    </div>
  )
}

ImageBlock.propTypes = {
  additionalClasses: PropTypes.array,
  images: PropTypes.array.isRequired
}

ImageBlock.defaultProps = {
  additionalClasses: []
}

export default ImageBlock
