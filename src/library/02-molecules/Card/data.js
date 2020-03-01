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
    bodyText: "Rowena has been commissioned as an Archbishop's Evangelist. Her passion is for taking the Good News to the broken and the lost and to set people on fire for God.",
    linkText: "Find out more",
    linkUrl: "https://archbishops-evangelists.uk/",
    linkVariation: "external",
    titleLevel: 3,
    titleText: "Evangelist"
  },
  cardBlockTwo: {
    bodyText: "Rowena is a passionate speaker and preacher. She has spoken in many contexts, from the local church, to large evangelist events and radio appearances.",
    linkText: "Listen to talks",
    linkUrl: "/talks",
    linkVariation: "internal",
    titleLevel: 3,
    titleText: "Speaker"
  },
  cardBlockThree: {
    bodyText: "Rowena has written many devotionals and biblical reflections as she herself has grown in her love of Scripture. As well as offering practical theological insight, these writings also serve as powerful culturally commentary.",
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