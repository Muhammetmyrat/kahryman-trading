import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = () => ({
  imgURL: 'http://10.192.1.52:3000/api',
})

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
