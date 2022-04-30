//
const staticURL = 'http://10.192.3.37:3001/api/admin/'

import { cloneDeep } from 'lodash'
// import auth from "../../index";
import axios from 'axios'

/**########################################################**/
/**########################################################**/
/**########################################################**/

const takeToken = async ({ commit }, { Token }) => {
  commit('setToken', Token)
}

const fetchDates = async ({ commit, getters }, { changingURL }) => {
  try {
    let Dates = await axios
      .get(`${staticURL}${changingURL}`, {
        headers: { authorization: getters.getToken },
      })
      .then((result) => {
        console.log('Result', result.data.data)
        return result.data.data
      })

    console.log('DatesAction', Dates)
    commit('setDates', Dates)
  } catch (Error) {
    console.log('fetchDates', Error)
  }
}

const addFullObject = ({ commit }, { selectedObject }) => {
  try {
    commit('setObject', selectedObject)
  } catch (Error) {
    console.log('addFullObject', Error)
  }
}

// arr.forEch((param) => {if(param == "a"){console.log("A")}})

const addEmptyObject = ({ commit, getters }) => {
  try {
    let fullObject = _.cloneDeep(getters.getDates[0])
    // let fullObject = _.cloneDeep(selectedObject);

    let clearObject = (objToClear) => {
      Object.keys(objToClear).forEach((param) => {
        if (typeof objToClear[param] == 'object') {
          clearObject(objToClear[param])
        } else if (param == 'lang_id') {
          return
        } else {
          objToClear[param] = ''
        }
      })
      return objToClear
    }

    let emptyObject = clearObject(fullObject)

    commit('setObject', emptyObject)
  } catch (Error) {
    console.log('addEmptyObject', Error)
  }
}

const selectItemLinks = async ({ commit }, { Item }) => {
  await commit('setEditingLink', Item.editingLink)
  // console.log("setEditingLink", Item.editingLink);
  await commit('setCreatingLink', Item.creatingLink)
  // console.log("setCreatingLink", Item.creatingLink);
  await commit('setCreatingLink', Item.creatingLink)
  // console.log("setCreatingLink", Item.creatingLink);
}

const selectLinks = async ({ commit }, { Link }) => {
  await commit('setLink', Link)
  console.log('selectLinks', Link)
}

const sendDates = async ({ getters }, { changingURL, Dates }) => {
  try {
    console.log('Dates', Dates)
    console.log('changingURL', changingURL)
    await axios.post(
      `${staticURL}${changingURL}`,
      Dates,
      {
        headers: { authorization: getters.getToken },
      }

      // {
      //   Authorization: this.$auth.strategy.token.get(),
      // }
    )

    console.log('sendDates IsWork')
  } catch (Error) {
    console.log('Error', Error)
  }
}

export default {
  /**########################################################**/
  /**########################################################**/
  /**########################################################**/
  takeToken,
  //
  fetchDates,
  addFullObject,
  addEmptyObject,
  selectLinks,
  selectItemLinks,
  sendDates,
}
