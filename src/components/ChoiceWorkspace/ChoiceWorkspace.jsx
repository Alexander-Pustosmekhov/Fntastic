import { useState } from 'react';
import classNames from 'classnames';
import ModalAddWorkspace from 'components/modal/ModalAddWorkspace';
import ModalSearchWorkspace from 'components/modal/ModalSearchWorkspace';
import s from './ChoiceWorkspace.module.css';

export default function Navigation() {
  const [showModalAddWorkspace, setShowModalAddWorkspace] = useState(false);
  const [showModalSearchWorkspace, setShowModalSearchWorkspace] =
    useState(false);

  const handleClickAddWorkspace = () => {
    if (showModalAddWorkspace) setShowModalAddWorkspace(false);
    if (!showModalAddWorkspace) setShowModalAddWorkspace(true);
  };

  const handleClickSearch = () => {
    if (showModalSearchWorkspace) setShowModalSearchWorkspace(false);
    if (!showModalSearchWorkspace) setShowModalSearchWorkspace(true);
  };

  // const handleClickChoiceWorkspace = () => {};

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
          <button type="button" className={classNames(s.button, s.active)}>
            &#127918;
          </button>
        </li>
        <li className={s.buttonItem}>
          <button
            type="button"
            className={s.button}
            onClick={handleClickAddWorkspace}
          >
            +
          </button>
        </li>
        <li className={s.buttonItem}>
          <button
            type="button"
            className={s.button}
            onClick={handleClickSearch}
          >
            &#128269;
          </button>
        </li>
      </ul>
      {showModalAddWorkspace && (
        <ModalAddWorkspace closeModal={handleClickAddWorkspace} />
      )}
      {showModalSearchWorkspace && (
        <ModalSearchWorkspace closeModal={handleClickSearch} />
      )}
    </div>
  );
}
