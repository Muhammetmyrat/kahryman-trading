const GetDatesFromBackend = (state) => {
  return state.DatesFromBackend;
};
const GetSingleEmptyArray = (state) => {
  console.log("State GETTER EMPTY", state.EmptyArray);
  return state.EmptyArray;
};
const GetSingleFullArray = (state) => {
  console.log("State GETTER FULL", state.FullArray);
  return state.FullArray;
};
const GetEditLink = (state) => {
  console.log("State GETTER FULL", state.FullArray);
  return state.editLink;
};

/**########################################################**/
/**########################################################**/
/**########################################################**/

const getDates = (state) => {
  console.log("getDates", state.Dates);
  return state.Dates;
};
const getObject = (state) => {
  console.log("getObject", state.object);
  return state.object;
};
// const getFullObject = (state) => {
//   console.log("getFullObject", state.fullObject);
//   return state.fullObject;
// };
// const getEmptyObject = (state) => {
//   console.log("getEmptyObject", state.emptyObject);
//   return state.emptyObject;
// };

const getLink = (state) => {
  console.log("getLink", state.link);
  return state.link;
};

const getEditingLink = (state) => {
  console.log("getEditingLink", state.editingLink);
  return state.editingLink;
};
const getCreatingLink = (state) => {
  console.log("getCreatingLink", state.creatingLink);
  return state.creatingLink;
};

export default {
  GetDatesFromBackend,
  GetSingleEmptyArray,
  GetSingleFullArray,
  GetEditLink,

  /**########################################################**/
  /**########################################################**/
  /**########################################################**/

  getDates,
  getObject,
  // getFullObject,
  // getEmptyObject,
  getLink,
  getEditingLink,
  getCreatingLink,
};
