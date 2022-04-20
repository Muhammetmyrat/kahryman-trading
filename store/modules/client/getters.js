const imgURL = (state) => {
  return state.imgURL
}
const images = (state) => {
  return state.headers?.iamges
}
const menus = (state) => {
  return state.headers?.menus
}
const topicTitle = (state) => {
  return state.facilities?.topic_title
}
const smallTitle = (state) => {
  return state.facilities?.small_title
}
const bigTitle = (state) => {
  return state.facilities?.big_title
}
const facilitiesText = (state) => {
  return state.facilities?.text
}
const itemsFirstLeftImg = (state) => {
  const { image_path } = state.facilities?.images && state.facilities?.images[0]
  return image_path
}
const itemsFirstRightImages = (state) => {
  const itemsFirstRightImg = []
  for (let i = 1; i <= 2; i++) {
    itemsFirstRightImg.push(state.facilities?.images[i])
  }
  return itemsFirstRightImg
}
const itemsLastImages = (state) => {
  const itemsLastImage = []
  for (let i = 3; i <= 5; i++) {
    itemsLastImage.push(state.facilities?.images[i])
  }
  return itemsLastImage
}
const sliders = (state) => {
  return state.sliders
}
const agenciesTitle = (state) => {
  return state.agens?.title
}
const agenciesText = (state) => {
  return state.agens?.content
}
const statistics = (state) => {
  return state.statistics
}

export default {
  imgURL,
  images,
  menus,
  topicTitle,
  smallTitle,
  bigTitle,
  facilitiesText,
  itemsFirstLeftImg,
  itemsFirstRightImages,
  itemsLastImages,
  sliders,
  agenciesTitle,
  agenciesText,
  statistics,
}
