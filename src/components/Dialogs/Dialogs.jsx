import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";


const DialogItem = (props) =>{

    let path = "/dialogs/" + props.id;

    return(
        <div className={s.dialog + " " + s.active}>
          <NavLink to={path}> {props.name }</NavLink>
        </div>
    )
}


const Message = (props)=>{
    return (
        <div className={s.messageItem + " " + s.active}>{props.text}</div>
    )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>
        <DialogItem  name='Аня' id = '1'/>
        <DialogItem  name='Денис' id = '2'/>
        <DialogItem  name='Богдан' id = '3'/>
        <DialogItem  name='Іван' id = '4'/>
        <DialogItem  name='Сергій' id = '5'/>

      </div>
      <div className={s.messages}>
        <Message  text='Привіт!'/>
        <Message  text='Як справи?'/>
        <Message  text='Що робиш?'/>
      </div>
    </div>
  );
};
export default Dialogs;
