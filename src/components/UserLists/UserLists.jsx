import s from './UserLists.module.css';
import bots from '../../db/bots.json';
import members from '../../db/members.json';
import offline from '../../db/offline.json';
import { useState } from 'react';

export default function UserLists() {
  const [showUserData, setShowUserData] = useState(false);

  const handleClick = () => {
    if (showUserData) setShowUserData(false);
    if (!showUserData) setShowUserData(true);
  };

  return (
    <ul className={s.UserLists}>
      <li>
        <p className={s.botTitle}>B.O.T. - {bots.length}</p>
        <ul className={s.botList}>
          {bots.map(bot => {
            return (
              <li className={s.botItem} key={bot.name} onClick={handleClick}>
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
                {showUserData && (
                  <div className={s.contactInformation}>QWE</div>
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
              <li className={s.memberItem} key={member.name}>
                <div className={s.memberAvatar}>
                  {member.avatar}
                  <div
                    className={
                      member.online ? s.memberOnlineTrue : s.memberOnlineFalse
                    }
                  ></div>
                </div>
                <p className={s.memberName}>{member.name}</p>
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
              <li className={s.offlineItem} key={offline.name}>
                <div className={s.offlineAvatar}>{user.avatar}</div>
                <p className={s.offlineName}>{user.name}</p>
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
}
