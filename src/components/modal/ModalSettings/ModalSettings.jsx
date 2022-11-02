import s from './ModalSettings.module.css';

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
        <p className={s.title}>Settings</p>
        <ul className={s.buttonList}>
          <li>
            <button type="button" className={s.button}>
              Voice
            </button>
          </li>
          <li>
            <button type="button" className={s.button}>
              Sound
            </button>
          </li>
          <li>
            <button type="button" className={s.button}>
              Microphone
            </button>
          </li>
          <li>
            <button type="button" className={s.button}>
              Camera
            </button>
          </li>
          <li>
            <button type="button" className={s.button}>
              Contact setting
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
