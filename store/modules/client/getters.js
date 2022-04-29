const imgURL = (state) => {
  return state.imgURL
}
const headerSliders = (state) => {
  return state.headerSliders
}
const menus = (state) => {
  let menus = [
    { id: 0, path: '/' },
    { id: 1, path: '/about-us' },
    { id: 2, path: '/product' },
    { id: 3, path: '/gallery' },
    { id: 4, path: '/contact-us' },
  ]
  menus[0]['name'] = state.headerMenus[0]?.name
  menus[1]['name'] = state.headerMenus[1]?.name
  menus[2]['name'] = state.headerMenus[2]?.name
  menus[3]['name'] = state.headerMenus[3]?.name
  menus[4]['name'] = state.headerMenus[4]?.name
  return menus
}
const languages = (state) => {
  return state.headerLanguages
}
const topicTitle = (state) => {
  return state.strategy?.topic_title
}
const smallTitle = (state) => {
  return state.strategy?.small_title
}
const bigTitle = (state) => {
  return state.strategy?.big_title
}
const facilitiesText = (state) => {
  return state.strategy?.text
}
const itemsFirstLeftImg = (state) => {
  return (
    state.strategy &&
    state.strategy.images &&
    state.strategy.images[0] &&
    state.strategy.images[0].image_path
  )
}
const itemsFirstRightImages = (state) => {
  const itemsFirstRightImg = []
  for (let i = 1; i <= 2; i++) {
    itemsFirstRightImg.push(
      state.strategy && state.strategy.images && state.strategy.images[i]
    )
  }
  return itemsFirstRightImg
}
const itemsLastImages = (state) => {
  const itemsLastImage = []
  for (let i = 3; i <= 5; i++) {
    itemsLastImage.push(
      state.strategy && state.strategy.images && state.strategy.images[i]
    )
  }
  return itemsLastImage
}
const sliders = (state) => {
  return state.sliders
}
const agenciesTitle = (state) => {
  return state.map?.title
}
const agenciesText = (state) => {
  return state.map?.content
}
const statistics = (state) => {
  return state.statistics
}
const footerText = (state) => {
  return state.footer?.text
}
const copyRight = (state) => {
  return state.footer?.bottum_title
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
  return state.aboutImagePath && state.aboutImagePath.image_path
}
const itemsFirstLeftImgAbout = (state) => {
  return (
    state.aboutImages && state.aboutImages[0] && state.aboutImages[0].image_path
  )
}
const itemsFirstRightImagesAbout = (state) => {
  const itemsFirstRightImg = []
  for (let i = 1; i <= 2; i++) {
    itemsFirstRightImg.push(state.aboutImages && state.aboutImages[i])
  }
  return itemsFirstRightImg
}
const itemsLastImagesAbout = (state) => {
  const itemsLastImage = []
  for (let i = 3; i <= 5; i++) {
    itemsLastImage.push(state.aboutImages && state.aboutImages[i])
  }
  return itemsLastImage
}
const gallerys = (state) => {
  return state.gallerys
}
const contactTitle = (state) => {
  return state.contact?.title
}
const contactTitleAddress = (state) => {
  return state.contact?.title_address
}
const contactName = (state) => {
  return state.contact?.name
}
const contactCompanyName = (state) => {
  return state.contact?.company_name
}
const contactMail = (state) => {
  return state.contact?.mail
}
const contactSubject = (state) => {
  return state.contact?.subject
}
const contactMessage = (state) => {
  return state.contact?.message
}
const contactButtonText = (state) => {
  return state.contact?.button_text
}

export default {
  imgURL,
  headerSliders,
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
  itemsFirstLeftImgAbout,
  itemsFirstRightImagesAbout,
  itemsLastImagesAbout,
  gallerys,
  contactTitle,
  contactTitleAddress,
  contactName,
  contactCompanyName,
  contactMail,
  contactSubject,
  contactMessage,
  contactButtonText,
}
