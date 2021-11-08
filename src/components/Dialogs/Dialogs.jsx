import React from "react";

import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElements = props.state.dialogsData
    .map(dialog => <DialogItem name={dialog.name}
      id={dialog.id} />
    );
  let messagesElement = props.state.messagesData
    .map(message => <Message message={message.message} />
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
