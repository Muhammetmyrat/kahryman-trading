import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = () => ({
  /**########################################################**/
  /**########################################################**/
  /**########################################################**/
  Token: '',
  //
  Dates: '',
  object: '',
  fullObject: '',
  emptyObject: '',
  link: '',
  editingLink: '',
  creatingLink: '',
})

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
