import { useState } from 'react';
import s from './ModalAddWorkspace.module.css';

export default function ModalAddWorkspace(props) {
  const [nameWorkspace, setNameWorkspace] = useState('');

  const handleChange = e => {
    setNameWorkspace(e.target.value);
  };

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
        <form>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter workspace name"
            value={nameWorkspace}
          />
          <p className={s.text}>
            {nameWorkspace
              ? `Add "${nameWorkspace}" workspace.`
              : 'Enter workspace name'}
          </p>
          <button type="button" className={s.button}>
            +
          </button>
        </form>
      </div>
    </div>
  );
}
