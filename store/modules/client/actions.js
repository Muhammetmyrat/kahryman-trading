import request from '@/api/apiRequest'

const fetchHome = async ({ commit }, { url, $nuxt }) => {
  try {
    const getHome = await request(url)
    console.log(getHome)
    commit('SET_HOME', getHome)
  } catch (e) {
    if (e && e.response && e.response.status === 404) {
      return $nuxt.error({ statusCode: 404, message: e.message })
    }
  }
}

export default {
  fetchHome,
}
