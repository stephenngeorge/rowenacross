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
  title: "Ro's sermons",
  width: "100%",
  height: "360",
  options: {
    scrolling: "no",
    frameBorder: "no",
    allow: "autoplay",
  },
  src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/996879895&color=%23c64b8c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
}

export {
  data
}