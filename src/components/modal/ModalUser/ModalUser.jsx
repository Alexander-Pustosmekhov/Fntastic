import s from './ModalUser.module.css';

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
        <p className={s.title}>About User</p>
        <div className={s.avatar}></div>
        <p>LO4D.com</p>
        <p>#3212</p>
        <a href="Alexander-Pustosmekhov.github.io/Fntastic/">
          more information
        </a>
      </div>
    </div>
  );
}
