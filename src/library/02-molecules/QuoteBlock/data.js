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

import { BIBLE_BACKGROUND } from '../../../assets'

const data = {
  // add props here that your component will expect in the format:
  // PropName: prop value
  homepage: {
    imageAlt: "close up, blurred photo of an open Bible",
    imageSrc: BIBLE_BACKGROUND,
    quotation: "But my life is worth nothing to me unless I use it for finishing the work assigned me by the Lord Jesus—the work of telling others the Good News about the wonderful grace of God.",
    quoteSource: "Acts 20:24"
  },
  devotionalsPage: {
    imageAlt: "close up, blurred photo of an open Bible",
    imageSrc: BIBLE_BACKGROUND,
    quotation: "For the word of the Lord is right and true; he is faithful in all he does.",
    quoteSource: "Psalm 33:4"
  }
}

export {
  data
}