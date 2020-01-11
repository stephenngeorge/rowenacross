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
  cardBlockOne: {
    bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sollicitudin commodo. Fusce tincidunt leo dictum, tempor mauris vel, eleifend metus. Praesent quam odio, fringilla vitae ligula in, euismod fringilla tortor.",
    linkText: "Find out more",
    linkUrl: "/about",
    linkVariation: "internal",
    titleLevel: 3,
    titleText: "Evangelist"
  },
  cardBlockTwo: {
    bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sollicitudin commodo. Fusce tincidunt leo dictum, tempor mauris vel, eleifend metus. Praesent quam odio, fringilla vitae ligula in, euismod fringilla tortor.",
    linkText: "Listen to talks",
    linkUrl: "/talks",
    linkVariation: "internal",
    titleLevel: 3,
    titleText: "Speaker"
  },
  cardBlockThree: {
    bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sollicitudin commodo. Fusce tincidunt leo dictum, tempor mauris vel, eleifend metus. Praesent quam odio, fringilla vitae ligula in, euismod fringilla tortor.",
    linkText: "Read devotionals",
    linkUrl: "/devotionals",
    linkVariation: "internal",
    titleLevel: 3,
    titleText: "Writer"
  }
}

export {
  data
}