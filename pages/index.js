//Hook de i18n
import { useTranslation } from "react-i18next"

import { useState } from "react"

export default function Home() {
  //t = template
  const [t, i18n] = useTranslation("global")

  const [language, setLanguage] = useState();

  if (typeof window !== 'undefined' && language !== undefined) {
    localStorage.setItem("language", language)
  }

  function changeLang(lang) {
    i18n.changeLanguage(lang)
    setLanguage(lang)
  }

  return (
    <>
      <button onClick={() => changeLang("en")}>Ingles</button>
      <button onClick={() => changeLang("es")}>Español</button>
      <button onClick={() => changeLang("pt")}>Portugues</button>

      <ul>
        <li> {t("header.hello-world")}</li>
        <li> {t("header.title")}</li>
      </ul>

    </>
  )
}
