/**########################################################**/
/**########################################################**/
/**########################################################**/

const setToken = (state, data) => {
  console.log('setToken', data)
  state.Token = data
}

const setDates = (state, data) => {
  console.log('setDates', data)
  state.Dates = data
}

const setObject = (state, data) => {
  state.object = data
}

const setLink = (state, data) => {
  state.link = data
}

const setEditingLink = (state, data) => {
  state.editingLink = data
}

const setCreatingLink = (state, data) => {
  state.creatingLink = data
}

export default {
  /**########################################################**/
  /**########################################################**/
  /**########################################################**/
  setToken,
  //
  setDates,
  setObject,
  // setFullObject,
  // setEmptyObject,
  setLink,
  setEditingLink,
  setCreatingLink,
}
