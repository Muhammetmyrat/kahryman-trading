import request from '@/api/apiRequest'

const fetchHeader = async ({ commit }, { url, $nuxt }) => {
  try {
    const { data } = await request(url)
    const [obj] = data
    console.log('getHeader', obj)
    commit('SET_HEADER', obj)
  } catch (e) {
    if (e && e.response && e.response.status === 404) {
      return $nuxt.error({ statusCode: 404, message: e.message })
    }
  }
}

const fetchFooter = async ({ commit }, { url, $nuxt }) => {
  try {
    const { data } = await request(url)
    console.log('getFooter', data)
    commit('SET_FOOTER', data)
  } catch (e) {
    if (e && e.response && e.response.status === 404) {
      return $nuxt.error({ statusCode: 404, message: e.message })
    }
  }
}

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
const fetchAboutUs = async ({ commit }, { url, $nuxt }) => {
  try {
    const getAboutUs = await request(url)
    const { data } = getAboutUs
    commit('SET_ABOUT_US', data)
  } catch (e) {
    if (e && e.response && e.response.status === 404) {
      return $nuxt.error({ statusCode: 404, message: e.message })
    }
  }
}

export default {
  fetchHeader,
  fetchFooter,
  fetchHome,
  fetchAboutUs,
}
