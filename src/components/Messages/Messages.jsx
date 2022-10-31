import s from './Messages.module.css';
import messages from '../../db/messages.json';

export default function Messages() {
  return (
    <ul>
      {messages.map(message => {
        return (
          <li className={s.Message} key={message.author}>
            <div className={s.messageAvatar}>{message.author.slice(0, 1)}</div>
            <div>
              <div className={s.messageWrapper}>
                <p className={s.messageAuthor}>{message.author}</p>
                <p className={s.messageData}>{message.data}</p>
              </div>
              <p>
                {message.message}
                {message.stateEdited && (
                  <span className={s.messageEdited}>(edited)</span>
                )}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
