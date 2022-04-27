const imgURL = (state) => {
  return state.imgURL
}
const images = (state) => {
  return state.headers?.iamges
}
const menus = (state) => {
  let menus = [
    { id: 0, path: '/' },
    { id: 1, path: '/about-us' },
    { id: 2, path: '/product' },
    { id: 3, path: '/gallery' },
    { id: 4, path: '/contact-us' },
  ]
  menus[0]['name'] = state.headers?.menu[0]?.name
  menus[1]['name'] = state.headers?.menu[1]?.name
  menus[2]['name'] = state.headers?.menu[2]?.name
  menus[3]['name'] = state.headers?.menu[3]?.name
  menus[4]['name'] = state.headers?.menu[4]?.name
  return menus
}
const languages = (state) => {
  return state.headers?.languages
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
const footerText = (state) => {
  return state.footer?.text
}
const copyRight = (state) => {
  return state.footer?.right
}
const address = (state) => {
  return state.footer?.address
}
const phoneNumbers = (state) => {
  return state.footer?.phone_numbers
}
const mails = (state) => {
  return state.footer?.mails
}
const aboutSmallTitle = (state) => {
  return state.aboutSmallTitle
}
const aboutBigTitle = (state) => {
  return state.aboutBigTitle
}
const aboutContent = (state) => {
  return state.aboutContent
}
const aboutImagePath = (state) => {
  return state.aboutImagePath
}

export default {
  imgURL,
  images,
  menus,
  languages,
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
  footerText,
  copyRight,
  address,
  phoneNumbers,
  mails,
  aboutSmallTitle,
  aboutBigTitle,
  aboutContent,
  aboutImagePath,
}
