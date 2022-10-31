import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.Header}>
      <p className={s.logo}>DISCORD</p>
      <ul className={s.headerBtnWrapper}>
        <li className={s.buttonItem}>
          <button type="button" className={s.buttonHeader}>
            &#8208;
          </button>
        </li>
        <li className={s.buttonItem}>
          <button type="button" className={s.buttonHeader}>
            &#10720;
          </button>
        </li>
        <li className={s.buttonItem}>
          <button
            type="button"
            className="btn-close btn-close-white"
            aria-label="Закрыть"
          ></button>
        </li>
      </ul>
    </header>
  );
}
