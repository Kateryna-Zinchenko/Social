import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name='Katya' id='1'/>
                <DialogItem name='Sasha' id='2'/>
                <DialogItem name='Nastya' id='3'/>

            </div>
            <div className={s.messages}>

                <Message message='Hi'/>
                <Message message='Wow'/>
                <Message message='Yay'/>

            </div>
        </div>
    )
}

export default Dialogs;