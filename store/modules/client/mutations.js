const SET_HEADER = (state, payload) => {
  state.headerSliders = payload.slider
  state.headerMenus = payload.menu
  state.headerLanguages = payload.languages
}
const SET_FOOTER = (state, payload) => {
  state.footer = payload
}
const SET_HOME = (state, payload) => {
  state.strategy = payload.strategy
  state.sliders = payload.slider
  state.map = payload.map
  state.statistics = payload.statistics
}
const SET_ABOUT_US = (state, { data, images, image_path }) => {
  console.log(data, images, image_path)
  state.aboutSmallTitle = data.small_title
  state.aboutBigTitle = data.big_title
  state.aboutImagePath = image_path
  state.aboutContent = data.content
  state.aboutImages = images
}

export default {
  SET_HEADER,
  SET_FOOTER,
  SET_HOME,
  SET_ABOUT_US,
}
