import s from './ChoiceWorkspace.module.css';

export default function Navigation() {
  return (
    <div className={s.ChoiceWorkspace}>
      <ul className={s.buttonWrapper}>
        <li className={s.buttonItem}>
          <button type="button" className={s.button}>
            &#128054;
          </button>
        </li>
        <li className={s.buttonItem}>
          <button type="button" className={s.button}>
            &#128524;
          </button>
          <div className={s.messageCounter}>1</div>
        </li>
        <li className={s.buttonItem}>
          <button type="button" className={s.button}>
            &#127918;
          </button>
        </li>
        <li className={s.buttonItem}>
          <button type="button" className={s.button}>
            +
          </button>
        </li>
        <li className={s.buttonItem}>
          <button type="button" className={s.button}>
            &#128269;
          </button>
        </li>
      </ul>
    </div>
  );
}
