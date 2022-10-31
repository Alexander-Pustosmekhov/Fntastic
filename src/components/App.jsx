import Navigation from './Navigation';
import Workspace from './Workspace';
import Header from './Header';
import ChoiceWorkspace from './ChoiceWorkspace';
import Messages from './Messages';

export default function App() {
  return (
    <>
      <Header />
      <Navigation>
        <ChoiceWorkspace />
        <Workspace>
          <Messages />
        </Workspace>
      </Navigation>
    </>
  );
}
