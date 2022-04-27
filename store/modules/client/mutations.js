const SET_HOME = (state, payload) => {
  state.headers = payload.header
  state.topics = payload.topics
  state.facilities = payload.faciliti
  state.sliders = payload.slider
  state.agens = payload.agens
  state.statistics = payload.statistics
  state.footer = payload.footer
}
const SET_ABOUT_US = (state, payload) => {
  state.aboutSmallTitle = payload.small_title
  state.aboutBigTitle = payload.big_title
  state.aboutImagePath = payload.aboutImagePath
  state.aboutContent = payload.content
}

export default {
  SET_HOME,
  SET_ABOUT_US,
}
