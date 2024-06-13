import css from "./Error.module.css";

export default function Error({ children }) {
  return (
    <p className={css.text}>
      <b>Download error. Check your internet connection and reload the page!</b>
    </p>
  );
}