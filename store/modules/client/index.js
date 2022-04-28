import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = () => ({
  imgURL: `${process.env.IMAGE_URL}`,
  headerSliders: null,
  headerMenus: null,
  headerLanguages: null,
  footer: null,
  strategy: null,
  sliders: null,
  map: null,
  statistics: null,
  aboutSmallTitle: null,
  aboutBigTitle: null,
  aboutContent: null,
  aboutImagePath: null,
  aboutImages: null,
  galleryImages: null,
  galleryVideos: null,
})

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
