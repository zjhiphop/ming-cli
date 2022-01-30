import { reactive } from 'vue'

// TODO: The following store is only used for small level and client side rendering project
// Please use "Pinia" when the project is bigger or need SSR to avoid security issues.
// More details please access: https://pinia.vuejs.org/introduction.html
const store = {
  debug: true,

  store: reactive({
    isMobile: false,
    isPc: true,
    isTablet: false,
    fontLoaded: false
  }),

  async setScreen(screen) {
    store.store.isMobile = screen.isMobile
    store.store.isPc = screen.isPc
    store.store.isTablet = screen.isTablet
  }
}

// Provide a way to handle screen size changed case via JS for better development experience,
// But when it's in production mode, this is no needed, because the user will only has one dimension
function initMediaQuery() {
  // TODO: put the global break point config to global settings
  /*
     You could try to put the configuration inside .env file like following:

    // .env
    VITE_SCREEN_LG=1440px
    VITE_SCREEN_MD=768px
    VITE_SCREEN_SM=594px

    // store.js
    let { VITE_SCREEN_LG as lg, VITE_SCREEN_MD as md, VITE_SCREEN_SM as sm } = import.meta.env

  */
  let { lg, md, sm } = {
    lg: '1440px',
    md: '768px',
    sm: '594px'
  }

  let smScreen = window.matchMedia(
    `(min-width: ${sm}) and (max-width: ${parseInt(md, 10) - 1}px)`
  )
  let mdScreen = window.matchMedia(
    `(min-width: ${md}) and (max-width: ${parseInt(lg, 10) - 1}px)`
  )
  let lgScreen = window.matchMedia(`(min-width: ${lg})`)

  window.onresize = () => {
    store.setScreen({
      isMobile: smScreen.matches,
      isTablet: mdScreen.matches,
      isPc: lgScreen.matches
    })
  }

  return store.setScreen({
    isMobile: smScreen.matches,
    isTablet: mdScreen.matches,
    isPc: lgScreen.matches
  })
}

initMediaQuery()

// TODO: if your application need to load local fonts,
// try to use this function to load the font files which located in "public" directory
// If you're using webfont from web link, please try to use "webfont-loader" package to load.
// Anyway, download the font file to local will make the assets loading under control better.
function loadFonts() {
  const fonts = [
    'Larsseit' // TODO: replace with the font file used in project
  ]

  let promises = []

  fonts.forEach((fontName) => {
    promises.push(
      new FontFace(fontName, `url('/fonts/${fontName}.woff')`)
        .load()
        .then((face) => {
          console.log('font loaded!')
          document.fonts.add(face)
        })
        .catch((err) => console.error(err))
    )
  })

  Promise.all(promises).then(() => (store.store.fontLoaded = true))
}

loadFonts()

export default store
