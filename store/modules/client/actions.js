import request from '@/api/apiRequest'

const fetchHeader = async ({ commit }, { url, $nuxt }) => {
  try {
    const { data } = await request(url)
    commit('SET_HEADER', data)
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
    const { header_slider } = getAboutUs
    commit('SET_ABOUT_US', { header_slider, data, images, image_path })
  } catch (e) {
    if (e && e.response && e.response.status === 404) {
      return $nuxt.error({ statusCode: 404, message: e.message })
    }
  }
}
const fetchGallery = async ({ commit }, { url, $nuxt }) => {
  try {
    const { data, header_slider } = await request(url)
    commit('SET_GALLERY', { data, header_slider })
  } catch (e) {
    if (e && e.response && e.response.status === 404) {
      return $nuxt.error({ statusCode: 404, message: e.message })
    }
  }
}
const fetchContact = async ({ commit }, { url, $nuxt }) => {
  try {
    const { data, header_slider } = await request(url)
    commit('SET_CONTACT', { data, header_slider })
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
  fetchContact,
}
