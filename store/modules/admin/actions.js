const defaultURL = "http://10.192.3.37:3001/api/admin/";
//
const staticURL = "http://10.192.3.37:3001/api/admin/";

import { cloneDeep } from "lodash";
// import auth from "../../index";
import axios from "axios";

// console.log("AUTH STORE =>", auth);
// console.log("AUTH STORE =>", $auth.$state);

// import auth from "@nuxtjs/auth";
// axios.defaults.headers.common = { Authorization: "bearer " + getToken() };

// import { auth } from "@nuxtjs/auth-next";

// const FetchDatesFromBackEnd = async ({ commit, getters }, { dynamicURL }) => {
//   try {
//     // console.log("fuck", getters.getAuthToken);
//     // let token = getters.getAuthToken;
//     let dates = await axios.get(
//       `${defaultURL}${dynamicURL}`
//       // {
//       //   // headers: {
//       //   //   Authorization: getters.getAuthToken,
//       //   // },
//       // }
//     );
//     // console.log(dates);
//     /*----------------*/
//     // commit("SetDatesFromBackend", dates.data);
//     /*----------------*/

//     console.log("STATE ACTION URL", dynamicURL);
//     // commit("SetDatesFromBackend", dates);
//     console.log("DATES", dates.data);
//     console.log("GET", getters.setDates);
//   } catch (err) {
//     console.log(err);
//   }
// };

const FetchDatesFromBackEnd = async ({ commit, getters }, { dynamicURL }) => {
  try {
    // console.log("fuck", getters.getAuthToken);
    // let token = getters.getAuthToken;
    let dates = await axios.get(
      `${defaultURL}${dynamicURL}`
      // {
      //   // headers: {
      //   //   Authorization: getters.getAuthToken,
      //   // },
      // }
    );
    // console.log(dates);
    /*----------------*/
    // commit("SetDatesFromBackend", dates.data);
    /*----------------*/

    console.log("STATE ACTION URL", dynamicURL);
    commit("SetDatesFromBackend", dates.data.data);
    console.log("DATESSSS from Back", dates.data.data);
    console.log("GET!", getters.GetDatesFromBackend);
  } catch (err) {
    console.log(err);
  }
};

const createSingleEmptyArray = async ({ commit, getters }) => {
  let FullArray = getters.GetDatesFromBackend;
  let FullObj = _.cloneDeep(FullArray[0]);

  try {
    console.log("SAS11", FullObj);

    let clearObject = (objToClear) => {
      Object.keys(objToClear).forEach((param) => {
        if (typeof objToClear[param] == "object") {
          clearObject(objToClear[param]);
        } else if (param == "lang_id") {
          return;
        } else {
          objToClear[param] = "";
        }
      });
      return objToClear;
    };

    FullObj = clearObject(FullObj);

    console.log("FullObj", FullObj);

    // for (let q in FullObj.translations) {
    //   for (let i in FullObj) {
    //     if (i == "translations") {
    //       for (let o in FullObj[i][q]) {
    //         if (o == "text" || o == "title") {
    //           for (let p in FullObj[i][0][o]) {
    //             FullObj[i][0][o][p] = "";
    //           }
    //         } else {
    //           FullObj[i][0][o] = "";
    //         }
    //         console.log("OOO", o);
    //       }
    //     } else {
    //       FullObj[i] = "";
    //     }

    //     console.log("SAS", i);
    //   }
    // }

    commit("SetSingleEmptyArray", FullObj);
    console.log("SAS2", FullObj);

    console.log("Store1", FullArray);
    console.log("Store2", FullObj);
  } catch (err) {
    // console.log(err, "createSingleEmptyArray");
  }
  console.log("GetSingleFullArray", getters.GetSingleFullArray);
};

const createArrayForEdit = async ({ commit, getters }, { selectedItem }) => {
  await commit("SetSingleFullArray", selectedItem);
  console.log("GetSingleFullArray", getters.GetSingleFullArray);
};

const takeEditLink = async ({ commit, getters }, { editLink }) => {
  await commit("SetEditLink", editLink);
  console.log("GetEditLink", editLink);
};

/**########################################################**/
/**########################################################**/
/**########################################################**/

const fetchDates = async ({ commit }, { changingURL, Token }) => {
  try {
    let Dates = await axios
      .get(`${staticURL}${changingURL}`, {
        headers: { authorization: Token },
      })
      .then((result) => {
        console.log("Result", result.data.data);
        return result.data.data;
      });

    console.log("DatesAction", Dates);
    commit("setDates", Dates);
  } catch (Error) {
    console.log("fetchDates", Error);
  }
};

const addFullObject = ({ commit }, { selectedObject }) => {
  try {
    commit("setObject", selectedObject);
  } catch (Error) {
    console.log("addFullObject", Error);
  }
};

// arr.forEch((param) => {if(param == "a"){console.log("A")}})

const addEmptyObject = ({ commit, getters }) => {
  try {
    let fullObject = _.cloneDeep(getters.getDates[0]);
    // let fullObject = _.cloneDeep(selectedObject);

    let clearObject = (objToClear) => {
      Object.keys(objToClear).forEach((param) => {
        if (typeof objToClear[param] == "object") {
          clearObject(objToClear[param]);
        } else if (param == "lang_id") {
          return;
        } else {
          objToClear[param] = "";
        }
      });
      return objToClear;
    };

    let emptyObject = clearObject(fullObject);

    commit("setObject", emptyObject);
  } catch (Error) {
    console.log("addEmptyObject", Error);
  }
};

const selectItemLinks = async ({ commit }, { Item }) => {
  await commit("setEditingLink", Item.editingLink);
  console.log("setEditingLink", Item.editingLink);
  await commit("setCreatingLink", Item.creatingLink);
  console.log("setCreatingLink", Item.creatingLink);
  await commit("setCreatingLink", Item.creatingLink);
  console.log("setCreatingLink", Item.creatingLink);
};

const selectLinks = async ({ commit }, { Link }) => {
  await commit("setLink", Link);
  console.log("selectLinks", Link);
};

const sendDates = async ({}, { changingURL, Dates, Token }) => {
  try {
    console.log("Dates", Dates);
    console.log("changingURL", changingURL);
    await axios.post(
      `${staticURL}${changingURL}`,
      Dates,
      {
        headers: { authorization: Token },
      }

      // {
      //   Authorization: this.$auth.strategy.token.get(),
      // }
    );

    console.log("sendDates IsWork");
  } catch (Error) {
    console.log("Error", Error);
  }
};

export default {
  FetchDatesFromBackEnd,
  createSingleEmptyArray,
  createArrayForEdit,
  takeEditLink,

  /**########################################################**/
  /**########################################################**/
  /**########################################################**/

  fetchDates,
  addFullObject,
  addEmptyObject,
  selectLinks,
  selectItemLinks,
  sendDates,
};
