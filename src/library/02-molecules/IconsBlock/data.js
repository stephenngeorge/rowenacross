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
import { FACEBOOK_ICON, EMAIL_ICON, INSTAGRAM_ICON } from '../../../assets'

const data = {
  // add props here that your component will expect in the format:
  // PropName: prop value
  homepage: {
    animationThreshold: 1,
    icons: [
      {
        altText: "Facebook logo",
        icon: FACEBOOK_ICON,
        linkUrl: "https://facebook.com",
        size: "sm"
      },
      {
        altText: "Emaili Icon",
        icon: EMAIL_ICON,
        linkUrl: "https://google.co.uk",
        size: "sm"
      },
      {
        altText: "Instagram Icon",
        icon: INSTAGRAM_ICON,
        linkUrl: "https://instagram.com",
        size: "sm"
      }
    ]
  },
  contactPage: {
    icons: [
      {
        altText: "Facebook logo",
        icon: FACEBOOK_ICON,
        linkUrl: "https://facebook.com",
        size: "md"
      },
      {
        altText: "Emaili Icon",
        icon: EMAIL_ICON,
        linkUrl: "https://google.co.uk",
        size: "md"
      },
      {
        altText: "Instagram Icon",
        icon: INSTAGRAM_ICON,
        linkUrl: "https://instagram.com",
        size: "md"
      }
    ]
  }
}

export {
  data
}