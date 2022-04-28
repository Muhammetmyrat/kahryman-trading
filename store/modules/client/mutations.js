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
const SET_ABOUT_US = (state, payload) => {
  state.aboutSmallTitle = payload.small_title
  state.aboutBigTitle = payload.big_title
  state.aboutImagePath = payload.aboutImagePath
  state.aboutContent = payload.content
}

export default {
  SET_HEADER,
  SET_FOOTER,
  SET_HOME,
  SET_ABOUT_US,
}
