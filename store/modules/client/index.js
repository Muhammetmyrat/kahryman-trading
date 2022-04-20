import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = () => ({
  imgURL: `${process.env.IMAGE_URL}`,
  headers: null,
  topics: null,
  facilities: null,
  sliders: null,
  agens: null,
  statistics: null,
  footer: null,
})

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
