import Navigation from './Navigation';
import Workspace from './Workspace';
import Header from './Header';
import ChoiceWorkspace from './ChoiceWorkspace';
import Messages from './Messages';
import s from './App.module.css';

export default function App() {
  return (
    <div className={s.generalWrapper}>
      <Header />
      <Navigation>
        <ChoiceWorkspace />
        <Workspace>
          <Messages />
        </Workspace>
      </Navigation>
    </div>
  );
}
