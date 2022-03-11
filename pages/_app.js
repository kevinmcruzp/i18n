import '../styles/globals.css'

import { I18nextProvider } from "react-i18next"
import i18next from "i18next"

import { useEffect } from 'react'


import es from "./translations/es/global.json"
import en from "./translations/en/global.json"
import pt from "./translations/pt/global.json"

function changeLanguage() {
  if (typeof window !== 'undefined') {
    let lang = localStorage.getItem("language")
    return lang;
  }
}

function getBrowserLanguage() {
  if (typeof window !== 'undefined') {
    let browserLang = navigator.language

    let browserLanguage = browserLang.split("-")

    return browserLanguage[0];
  }
}


i18next.init({
  interpolation: { escapeValue: false },
  lng: changeLanguage(),
  //Lenguaje default
  fallbackLng: getBrowserLanguage() !== "es" &&
    getBrowserLanguage() !== "pt" &&
    getBrowserLanguage() !== "en"
    ? "pt" : getBrowserLanguage(),

  //Indicar los lenguajes y rutas en las que se encuentran
  resources: {
    en: {
      global: en
    },
    es: {
      global: es
    },
    pt: {
      global: pt
    }
  },


})

function MyApp({ Component, pageProps }) {

  return (
    <I18nextProvider i18n={i18next}>
      <Component {...pageProps} />
    </I18nextProvider>
  )
}

export default MyApp
