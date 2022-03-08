import '../styles/globals.css'

import { I18nextProvider } from "react-i18next"
import i18next from "i18next"
import es from "./translations/es/global.json"
import en from "./translations/en/global.json"

i18next.init({
  interpolation: { escapeValue: false },
  
  //Lenguaje default
  lng: "es",

  //Indicar los lenguajes y rutas en las que se encuentran
  resources: {
    es: {
      global: es
    },
    en: {
      global: en
    }
  }
})


function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18next}>
      <Component {...pageProps} />
    </I18nextProvider>
  )
}

export default MyApp
