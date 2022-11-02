import s from './ModalHelp.module.css';

export default function ModalSearch(props) {
  return (
    <div className={s.backdrop}>
      <div className={s.modal}>
        <button
          type="button"
          className={s.buttonClose}
          onClick={props.closeModal}
        >
          &#215;
        </button>
        <p className={s.title}>F.A.Q.</p>
        <ul className={s.buttonList}>
          <li>
            <button type="button" className={s.button}>
              What are private messages?
            </button>
          </li>
          <li>
            <button type="button" className={s.button}>
              How to set up notification?
            </button>
          </li>
          <li>
            <button type="button" className={s.button}>
              How to set availability status?
            </button>
          </li>
          <li>
            <button type="button" className={s.button}>
              How to set up reminders?
            </button>
          </li>
          <li>
            <button type="button" className={s.button}>
              How to use emoji?
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
