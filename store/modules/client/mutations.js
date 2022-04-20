const SET_HOME = (state, payload) => {
  state.headers = payload.header
  state.topics = payload.topics
  state.facilities = payload.faciliti
  state.sliders = payload.slider
  state.agens = payload.agens
  state.statistics = payload.statistics
  state.footer = payload.footer
}

export default {
  SET_HOME,
}
