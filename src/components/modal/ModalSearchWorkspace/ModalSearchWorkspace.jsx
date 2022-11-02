import { useState } from 'react';
import s from './ModalSearchWorkspace.module.css';

export default function ModalSearchWorkspace(props) {
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
            placeholder="Search"
            value={nameWorkspace}
          />
          <button type="submit" className={s.button}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
