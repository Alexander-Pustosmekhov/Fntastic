import s from './Navigation.module.css';

export default function Navigation(props) {
  return (
    <div className={s.Navigation}>
      <div className={s.workspaceWraper}>{props.children}</div>
    </div>
  );
}
