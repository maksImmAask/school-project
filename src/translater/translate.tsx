import { useTranslation } from "react-i18next";

export const Translater = () => {
  const { t, i18n } = useTranslation();

  function change(e: React.ChangeEvent<HTMLSelectElement>) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div>
      <select onChange={change} value={i18n.language}>
        <option value="en">англ</option>
        <option value="ru">русс</option>
      </select>
      <h1>{t("hello")}</h1>
    </div>
  );
};
