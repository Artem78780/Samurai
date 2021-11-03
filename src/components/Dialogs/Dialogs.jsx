import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";


const DialogItem = (props) => {

  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}> {props.name}</NavLink>
    </div>
  )
}


const Message = (props) => {
  return (
    <div className={s.messageItem + " " + s.active}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: 'Аня' },
    { id: 2, name: 'Денис' },
    { id: 3, name: 'Богдан' },
    { id: 4, name: 'Іван' },
    { id: 5, name: 'Сергій' }
  ]
  let messagesData = [
    { id: 1, message: 'Привіт' },
    { id: 2, message: 'Як справи?' },
    { id: 3, message: 'Що робиш?' }
  ]



  let dialogsElements = dialogsData
    .map(dialog => <DialogItem name={dialog.name} 
    id={dialog.id}/>
  );
  let messagesElement = messagesData
    .map(message =>  <Message message={message.message}/>
  )



  return (
    <div className={s.dialogs}>
      <div className={s.dilogItem}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
       {messagesElement}
      </div>
    </div>
  );
};
export default Dialogs;
