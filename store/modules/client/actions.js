import request from '@/api/apiRequest'

const fetchHeader = async ({ commit }, { url, $nuxt }) => {
  try {
    const { data } = await request(url)
    const [obj] = data
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
    const { images } = getAboutUs
    const { image_path } = getAboutUs
    commit('SET_ABOUT_US', { data, images, image_path })
  } catch (e) {
    if (e && e.response && e.response.status === 404) {
      return $nuxt.error({ statusCode: 404, message: e.message })
    }
  }
}
const fetchGallery = async ({ commit }, { url, $nuxt }) => {
  try {
    const { data } = await request(url)
    const { images } = data
    const { videos } = data
    console.log(images, videos)
    commit('SET_GALLERY', { images, videos })
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
  fetchGallery,
}
