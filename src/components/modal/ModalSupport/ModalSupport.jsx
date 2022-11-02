import s from './ModalSupport.module.css';

export default function ModalSupport(props) {
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
        <p className={s.title}>Feedback</p>
        <form className={s.form}>
          <p className={s.text}>
            Write to us if you did not find the answer to your question.
          </p>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Your email"
          />
          <input className={s.textArea} placeholder="Your message" />
          <button type="submit" className={s.button}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
