import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`
  return (
    <>
      <NavLink 
        to={path} 
        activeClassName={s.active}
        className={s.dialog}
      >
        <img src="https://w7.pngwing.com/pngs/555/90/png-transparent-computer-icons-name-tag-miscellaneous-monochrome-silhouette.png" alt="" />
        <span>{props.name}</span>
      </NavLink>
    </>
  )
}

const MessageItem = (props) => {
  return (
    <div className={s.message}>
      {props.message}
    </div>
  )
}

const SendMessage = props => {
  const valueMassage = React.createRef();
  const [textMessage, setTextMessage] = React.useState('');

  const changeValueMessage = () => {
    const value = valueMassage.current.value;
    setTextMessage(value);
  }
  const sendMessage = () => {
    const action = {
      type: 'SEND-MESSAGE',
      value: textMessage,
    }
    props.dispatch(action);
    setTextMessage('');
  }
  return (
    <div className={s.send}>
      <textarea onChange={changeValueMessage} ref={valueMassage} value={textMessage} ></textarea>
      <button onClick={sendMessage}>Отправить</button>
    </div>
  )
}

export const Dialogs = props => {
  const { dialogs, messages } = props.state;
  return (
    <div className={`${s.content} container`}>
      <div className={s.dialogs}>
        {
          dialogs.map( 
            dialog => (
              <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
            )
          )
        }
      </div>
      <div className={s.columnRight}>
        <div className={s.messages}>
          {
            messages.map(
              message => (
                <MessageItem key={message.id} message={message.message}/>
              )
            )
          }
        </div>
          <SendMessage dispatch={props.dispatch} />
        </div>
      </div>
  )
}