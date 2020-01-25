// this is a basic data file for housing all the props data
// that you will pass into this component. By default, loris has
// setup a "data" object for you. You should import it in the file 
// where you consume this component and then pass it to the relevant 
// component like this: {...data}
//
// you can also add and export as many other objects from this file
// as you like, this is a pattern we encourage. So if you had an instance
// of this component on the homepage, setup and export a "homepage" object
// and then an "aboutpage" object etc (or use whatever naming convention
// you like!)

import {
  RO_AT_KEMPTON,
  RO_AT_UCB,
  RO_CLOSE_UP,
  RO_CURTAIN,
  RO_WITH_MARTIN_SMITH
} from '../../../assets'

const data = {
  // add props here that your component will expect in the format:
  // PropName: prop value
  homepage: {
    images: [
      {
        alt: "Ro at Kempton Park",
        src: RO_AT_KEMPTON
      },
      {
        alt: "Ro close up",
        src: RO_CLOSE_UP
      },
      {
        alt: "Ro behind a curtain",
        src: RO_CURTAIN
      }
    ]
  },
  contactPage: {
    images: [
      {
        alt: "Ro at UCB",
        src: RO_AT_UCB
      },
      {
        alt: "Ro close up",
        src: RO_CLOSE_UP
      },
      {
        alt: "Ro with Martin Smith",
        src: RO_WITH_MARTIN_SMITH
      }
    ]
  }
}

export {
  data
}