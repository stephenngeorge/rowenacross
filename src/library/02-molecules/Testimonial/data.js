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

const data = {
  // add props here that your component will expect in the format:
  // PropName: prop value
  homepage: {
    testimonialAttribution: "C, Bristol - after hearing some of Ro's teaching",
    testimonialText: "I would like to thank you for helping me to stand up and be courageous when I needed to take God's path rather than continue to try and walk my own."
  },
  contactPage: {
    testimonialAttribution: "C, London",
    testimonialText: "thank you so much for a wonderful day on Saturday. It was wonderful from start to finish. God really used it to remind me of my primary call as an intercessor. Such a blessing"
  }
}

export {
  data
}