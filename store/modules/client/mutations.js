const SET_HEADER = (state, payload) => {
  state.headerMenus = payload?.menu
  state.headerLanguages = payload?.languages
}
const SET_FOOTER = (state, payload) => {
  state.footer = payload
}
const SET_HOME = (state, payload) => {
  state.headerSliders = payload?.header_slider
  state.strategy = payload?.strategy
  state.sliders = payload?.slider
  state.map = payload?.map
  state.statistics = payload?.statistics
}
const SET_ABOUT_US = (state, { header_slider, data, images, image_path }) => {
  state.headerSliders = header_slider
  state.aboutSmallTitle = data?.small_title
  state.aboutBigTitle = data?.big_title
  state.aboutImagePath = image_path
  state.aboutContent = data?.content
  state.aboutImages = images
}
const SET_GALLERY = (state, { data, header_slider }) => {
  state.headerSliders = header_slider
  state.gallerys = data
}
const SET_CONTACT = (state, { data, header_slider }) => {
  state.headerSliders = header_slider
  state.contact = data
}

export default {
  SET_HEADER,
  SET_FOOTER,
  SET_HOME,
  SET_ABOUT_US,
  SET_GALLERY,
  SET_CONTACT,
}
