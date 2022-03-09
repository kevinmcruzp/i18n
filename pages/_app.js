import '../styles/globals.css'

import { I18nextProvider } from "react-i18next"
import i18next from "i18next"

import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";

import es from "./translations/es/global.json"
import en from "./translations/en/global.json"
import pt from "./translations/pt/global.json"


i18next
  .use(ChainedBackend)
  .init({
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
      },
      pt: {
        global: pt
      }
    },

    // backend: {
    //   backends: [
    //     LocalStorageBackend,
    //     HttpBackend
    //   ],
    //   backendOptions: [{
    //     expirationTime: 7 * 24 * 60 * 60 * 1000
    //   }, {
    //     loadPath: '/locales/{{lng}}/{{ns}}.json',
    //   }
    //   ]
    // }
  })

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18next}>
      <Component {...pageProps} />
    </I18nextProvider>
  )
}

export default MyApp
