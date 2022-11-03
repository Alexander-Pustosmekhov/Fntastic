import s from './UserLists.module.css';
import bots from '../../db/bots.json';
import members from '../../db/members.json';
import offline from '../../db/offline.json';
import { useState } from 'react';

export default function UserLists() {
  const [showUserData, setShowUserData] = useState(false);
  const [userDataId, setUserDataId] = useState(null);

  const handleClick = e => {
    const currentUser = e.currentTarget.getAttribute('dataId');
    const userRef = document.querySelector(`li[dataid="${currentUser}"]`);
    if (!userRef.classList.contains('.active')) {
      userRef.classList.add('.active');
      setShowUserData(true);
      setUserDataId(currentUser);
    } else {
      userRef.classList.remove('.active');
      setShowUserData(false);
      setUserDataId(null);
    }
  };

  return (
    <ul className={s.UserLists}>
      <li>
        <p className={s.botTitle}>B.O.T. - {bots.length}</p>
        <ul className={s.botList}>
          {bots.map(bot => {
            return (
              <li
                className={s.botItem}
                dataid={bot.id}
                key={bot.name}
                onClick={handleClick}
              >
                <div className={s.botAvatar}>
                  {bot.avatar}
                  <div className={s.botOnline}></div>
                </div>
                <div>
                  <p className={s.botName}>
                    {bot.name} <span className={s.bot}>BOT</span>
                  </p>
                  <p className={s.botMessage}>{bot.message}</p>
                </div>
                {showUserData && Number(userDataId) === bot.id && (
                  <div className={s.contactInformation}>current</div>
                )}
              </li>
            );
          })}
        </ul>
      </li>
      <li>
        <p className={s.memberTitle}>The members - {members.length}</p>
        <ul>
          {members.map(member => {
            return (
              <li
                className={s.memberItem}
                dataid={member.id}
                key={member.name}
                onClick={handleClick}
              >
                <div className={s.memberAvatar}>
                  {member.avatar}
                  <div
                    className={
                      member.online ? s.memberOnlineTrue : s.memberOnlineFalse
                    }
                  ></div>
                </div>
                <p className={s.memberName}>{member.name}</p>
                {showUserData && Number(userDataId) === member.id && (
                  <div className={s.contactInformation}>current</div>
                )}
              </li>
            );
          })}
        </ul>
      </li>
      <li>
        <p className={s.offlineTitle}>Offline - {offline.length}</p>
        <ul>
          {offline.map(user => {
            return (
              <li
                className={s.offlineItem}
                dataid={user.id}
                key={offline.name}
                onClick={handleClick}
              >
                <div className={s.offlineAvatar}>{user.avatar}</div>
                <p className={s.offlineName}>{user.name}</p>
                {showUserData && Number(userDataId) === user.id && (
                  <div className={s.contactInformation}>current</div>
                )}
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
}
