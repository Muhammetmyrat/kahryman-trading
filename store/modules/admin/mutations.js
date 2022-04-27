const SetDatesFromBackend = (state, data) => {
  // if (data.image == undefined) {
  //   state.Dates = data.data.sort((item1, item2) => {
  //     return item1.id - item2.id;
  //   });
  // } else {
  // let DatesFromBackend = data.data;
  // let DatesFromBackend = data;
  // newArr.map((item) => {
  //   item.image_path = data.image[0].image_path;
  // });
  //  console.log("newArr", newArr);
  //data.data.image_path = data.image[0].image_path;
  state.DatesFromBackend = data;
  // }
};
const SetSingleEmptyArray = (state, data) => {
  state.EmptyArray = data;
};

const SetSingleFullArray = (state, data) => {
  state.FullArray = data;
};

const SetEditLink = (state, data) => {
  state.editLink = data;
};

/**########################################################**/
/**########################################################**/
/**########################################################**/

const setDates = (state, data) => {
  console.log("setDates", data);
  state.Dates = data;
};

const setObject = (state, data) => {
  state.object = data;
};

// const setFullObject = (state, data) => {
//   state.fullObject = data;
//   state.object = data;
// };

// const setEmptyObject = (state, data) => {
//   state.emptyObject = data;
//   state.object = data;
// };

const setLink = (state, data) => {
  state.link = data;
};

const setEditingLink = (state, data) => {
  state.editingLink = data;
};

const setCreatingLink = (state, data) => {
  state.creatingLink = data;
};

export default {
  SetDatesFromBackend,
  SetSingleEmptyArray,
  SetSingleFullArray,
  SetEditLink,

  /**########################################################**/
  /**########################################################**/
  /**########################################################**/

  setDates,
  setObject,
  // setFullObject,
  // setEmptyObject,
  setLink,
  setEditingLink,
  setCreatingLink,
};
