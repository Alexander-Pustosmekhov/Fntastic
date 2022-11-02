import s from './Workspace.module.css';
import UserLists from 'components/UserLists';
import ModalSettings from 'components/modal/ModalSettings';
import ModalUser from 'components/modal/ModalUser';
import ModalHelp from 'components/modal/ModalHelp';
import ModalSupport from 'components/modal/ModalSupport';
import ModalPresents from 'components/modal/ModalPresents';
import ModalGifs from 'components/modal/ModalGifs';
import ModalEmoji from 'components/modal/ModalEmoji';
import { useState } from 'react';
import classNames from 'classnames';

export default function Workspace(props) {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showPresentsModal, setShowPresentsModal] = useState(false);
  const [showGifsModal, setShowGifsModal] = useState(false);
  const [showEmojiModal, setShowEmojiModal] = useState(false);
  const [microphoneOn, setMicrophoneOn] = useState(true);
  const [voiceOn, setVoiceOn] = useState(true);
  const [noticesOn, setNoticesOn] = useState(false);
  const [fixOn, setFixOn] = useState(false);
  const [groupOn, setGroupOn] = useState(false);

  const handleClickSettings = () => {
    if (showSettingsModal) setShowSettingsModal(false);
    if (!showSettingsModal) setShowSettingsModal(true);
  };

  const handleClickUser = () => {
    if (showUserModal) setShowUserModal(false);
    if (!showUserModal) setShowUserModal(true);
  };

  const handleClickHelp = () => {
    if (showHelpModal) setShowHelpModal(false);
    if (!showHelpModal) setShowHelpModal(true);
  };

  const handleClickSupport = () => {
    if (showSupportModal) setShowSupportModal(false);
    if (!showSupportModal) setShowSupportModal(true);
  };

  const handleClickPresents = () => {
    if (showPresentsModal) setShowPresentsModal(false);
    if (!showPresentsModal) setShowPresentsModal(true);
  };

  const handleClickGifs = () => {
    if (showGifsModal) setShowGifsModal(false);
    if (!showGifsModal) setShowGifsModal(true);
  };

  const handleClickEmoji = () => {
    if (showEmojiModal) setShowEmojiModal(false);
    if (!showEmojiModal) setShowEmojiModal(true);
  };

  const handleClickMicrophone = () => {
    if (microphoneOn) setMicrophoneOn(false);
    if (!microphoneOn) setMicrophoneOn(true);
  };

  const handleClickVoice = () => {
    if (voiceOn) setVoiceOn(false);
    if (!voiceOn) setVoiceOn(true);
  };

  const handleClickNotices = () => {
    if (noticesOn) setNoticesOn(false);
    if (!noticesOn) setNoticesOn(true);
  };

  const handleClickFix = () => {
    if (fixOn) setFixOn(false);
    if (!fixOn) setFixOn(true);
  };

  const handleClickGroup = () => {
    if (groupOn) setGroupOn(false);
    if (!groupOn) setGroupOn(true);
  };

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
                <li className={classNames(s.doorbellItem, s.active)}>
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
              <div onClick={handleClickUser}>
                <p className={s.bottomBarName}>LO4D.com</p>
                <p className={s.bottomBarMessage}>#3212</p>
              </div>
            </div>
          </div>
          <ul className={s.bottomBarButtonWrapper}>
            <li className={s.bottomBarButtonItem}>
              <button
                className={s.bottomBarButton}
                type="button"
                onClick={handleClickMicrophone}
              >
                &#127908;
              </button>
              {!microphoneOn && (
                <div className={s.preBottomBarButton}>&#215;</div>
              )}
            </li>
            <li className={s.bottomBarButtonItem}>
              <button
                className={s.bottomBarButton}
                type="button"
                onClick={handleClickVoice}
              >
                &#127911;
              </button>
              {!voiceOn && <div className={s.preBottomBarButton}>&#215;</div>}
            </li>
            <li>
              <button
                className={s.bottomBarButton}
                type="button"
                onClick={handleClickSettings}
              >
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
              <button
                type="button"
                className={s.buttonChatHeader}
                onClick={handleClickNotices}
              >
                &#128276;
                {noticesOn && (
                  <div className={s.preButtonChatHeader}>&#10003;</div>
                )}
              </button>
            </li>
            <li className={s.chatBtnItem}>
              <button
                type="button"
                className={s.buttonChatHeader}
                onClick={handleClickFix}
              >
                &#128204;
                {fixOn && <div className={s.preButtonChatHeader}>&#10003;</div>}
              </button>
            </li>
            <li className={s.chatBtnItem}>
              <button
                type="button"
                className={s.buttonChatHeader}
                onClick={handleClickGroup}
              >
                &#128101;
                {groupOn && (
                  <div className={s.preButtonChatHeader}>&#10003;</div>
                )}
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
              <button
                type="button"
                className={s.buttonChatHeader}
                onClick={handleClickSupport}
              >
                &#64;
              </button>
            </li>
            <li className={s.helpBtnItem}>
              <button
                type="button"
                className={s.buttonChatHeader}
                onClick={handleClickHelp}
              >
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
                      <button
                        type="button"
                        className={s.chatBtn}
                        onClick={handleClickPresents}
                      >
                        &#127873;
                      </button>
                    </li>
                    <li className={s.formBtnItem}>
                      <button
                        type="button"
                        className={s.chatBtn}
                        onClick={handleClickGifs}
                      >
                        GIF
                      </button>
                    </li>
                    <li className={s.formBtnItem}>
                      <button
                        type="button"
                        className={s.chatBtn}
                        onClick={handleClickEmoji}
                      >
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
      {showSettingsModal && <ModalSettings closeModal={handleClickSettings} />}
      {showUserModal && <ModalUser closeModal={handleClickUser} />}
      {showHelpModal && <ModalHelp closeModal={handleClickHelp} />}
      {showSupportModal && <ModalSupport closeModal={handleClickSupport} />}
      {showPresentsModal && <ModalPresents closeModal={handleClickPresents} />}
      {showGifsModal && <ModalGifs closeModal={handleClickGifs} />}
      {showEmojiModal && <ModalEmoji closeModal={handleClickEmoji} />}
    </div>
  );
}
