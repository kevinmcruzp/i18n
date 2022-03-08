//Hook de i18n
import { useTranslation } from "react-i18next"

export default function Home() {

  //t = text
  const [t,i18n] = useTranslation("global")

  return (
    <>
      <button onClick={() => i18n.changeLanguage("es")}>Español</button>
      <button>Portuguese</button>
      <button onClick={() => i18n.changeLanguage("en")}>Ingles</button>

      <ul>
        <li> {t("header.hello-world")}</li>
      </ul>

    </>
  )
}
