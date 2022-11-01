import s from './Workspace.module.css';
import UserLists from 'components/UserLists';

export default function Workspace(props) {
  return (
    <div className={s.Workspace}>
      <div className={s.chatList}>
        <div>
          <div className={s.chatSelector}>
            <select
              className="form-select"
              aria-label="Пример выбора по умолчанию"
              defaultValue="Game Center"
            >
              <option value="GC">Game Center</option>
              <option value="Ws1">Workspace 1</option>
              <option value="Ws2">Workspace 2</option>
            </select>
          </div>
          <ul className={s.chatListBar}>
            <li className={s.chatItem}>
              <p className={s.chatListTitle}>DOORBELL</p>
              <ul className={s.doorbellList}>
                <li className={s.doorbellItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>welcome</p>
                </li>
              </ul>
            </li>
            <li className={s.chatItem}>
              <p className={s.chatListTitle}>INFO</p>
              <ul className={s.infoList}>
                <li className={s.infoItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>rules</p>
                </li>
                <li className={s.infoItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>hello-goodbye</p>
                </li>
                <li className={s.infoItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>announcements</p>
                </li>
                <li className={s.infoItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>portal</p>
                </li>
                <li className={s.infoItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>feedback</p>
                </li>
              </ul>
            </li>
            <li className={s.chatItem}>
              <p className={s.chatListTitle}>LOUNGES</p>
              <ul className={s.loungesList}>
                <li className={s.loungesItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>zone-1</p>
                </li>
                <li className={s.loungesItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>zone-2</p>
                </li>
                <li className={s.loungesItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>gamerz</p>
                </li>
                <li className={s.loungesItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>school-help</p>
                </li>
                <li className={s.loungesItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>sports</p>
                </li>
                <li className={s.loungesItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>self-promo</p>
                </li>
                <li className={s.loungesItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>squad-up</p>
                </li>
              </ul>
            </li>
            <li className={s.chatItem}>
              <p className={s.chatListTitle}>ACTIVITIES</p>
              <ul className={s.loungesList}>
                <li className={s.loungesItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>zone-1</p>
                </li>
                <li className={s.loungesItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>zone-2</p>
                </li>
                <li className={s.loungesItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>gamerz</p>
                </li>
                <li className={s.loungesItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>school-help</p>
                </li>
                <li className={s.loungesItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>sports</p>
                </li>
                <li className={s.loungesItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>self-promo</p>
                </li>
                <li className={s.loungesItem}>
                  <span className={s.preText}>#</span>
                  <p className={s.chatName}>squad-up</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={s.bottomBar}>
          <div className={s.bottomBarUser}>
            <div className={s.bottomBarAvatar}>
              L<div className={s.bottomBarOnline}></div>
            </div>
            <div>
              <div>
                <p className={s.bottomBarName}>LO4D.com</p>
                <p className={s.bottomBarMessage}>#3212</p>
              </div>
            </div>
          </div>
          <ul className={s.bottomBarButtonWrapper}>
            <li>
              <button className={s.bottomBarButton} type="button">
                &#127908;
              </button>
            </li>
            <li>
              <button className={s.bottomBarButton} type="button">
                &#127911;
              </button>
            </li>
            <li>
              <button className={s.bottomBarButton} type="button">
                &#9881;
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.chat}>
        <div className={s.chatHeader}>
          <span className={s.chatPreText}>#</span>
          <p className={s.chatText}>welcome</p>
          <ul className={s.chatBtnList}>
            <li className={s.chatBtnItem}>
              <button type="button" className={s.buttonChatHeader}>
                &#128276;
              </button>
            </li>
            <li className={s.chatBtnItem}>
              <button type="button" className={s.buttonChatHeader}>
                &#128204;
              </button>
            </li>
            <li className={s.chatBtnItem}>
              <button type="button" className={s.buttonChatHeader}>
                &#128101;
              </button>
            </li>
          </ul>
          <form className={s.form}>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Search"
            />
          </form>
          <ul className={s.helpBtnList}>
            <li className={s.helpBtnItem}>
              <button type="button" className={s.buttonChatHeader}>
                &#64;
              </button>
            </li>
            <li className={s.helpBtnItem}>
              <button type="button" className={s.buttonChatHeader}>
                &#63;
              </button>
            </li>
          </ul>
        </div>
        <div className={s.chatWrapper}>
          <div className={s.chatWindow}>
            <div className={s.chatMessages}>
              <ul className={s.discordFeaturesList}>
                <li className={s.discordFeature}>
                  <div className={s.discordFeatureImg}>&#33;</div>
                  <p className={s.discordFeatureText}>
                    <span className={s.txtAccent}>Learn about Discord</span> at
                    your own pace by exploring the floating guest indicators.
                  </p>
                </li>
                <li className={s.discordFeature}>
                  <div className={s.discordFeatureImg}>&#128100;</div>
                  <p className={s.discordFeatureText}>
                    <span className={s.txtAccent}>Invite your friends</span> to
                    this server by clicking on a <a href="1">share button</a>{' '}
                    when you're ready.
                  </p>
                </li>
                <li className={s.discordFeature}>
                  <div className={s.discordFeatureImg}>&#128241;</div>
                  <p className={s.discordFeatureText}>
                    <span className={s.txtAccent}>Stay connected</span> to your
                    server from <a href="1">your smartphone</a> and even use
                    Discord while concole gaming.
                  </p>
                </li>
                <li className={s.discordFeature}>
                  <div className={s.discordFeatureImg}>&#129436;</div>
                  <p className={s.discordFeatureText}>
                    <span className={s.txtAccent}>Reach us</span> via{' '}
                    <a href="1">our help desk</a> or on Twitter{' '}
                    <a href="1">@discordapp</a> if you have any questions or
                    need help.
                  </p>
                </li>
              </ul>
              {props.children}
            </div>
            <div>
              <form className={s.formChat}>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Message #welcome"
                />
                <div className={s.formBtnWrapper}>
                  <ul className={s.formBtnList}>
                    <li className={s.formBtnItem}>
                      <button type="button" className={s.chatBtn}>
                        &#127873;
                      </button>
                    </li>
                    <li className={s.formBtnItem}>
                      <button type="button" className={s.chatBtn}>
                        GIF
                      </button>
                    </li>
                    <li className={s.formBtnItem}>
                      <button type="button" className={s.chatBtn}>
                        &#128512;
                      </button>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <div className={s.members}>
            <UserLists />
          </div>
        </div>
      </div>
    </div>
  );
}
