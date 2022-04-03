import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {
    const state = props.dialogsPage;
    const dialogsElements = state.dialogsData.map((d) => (<DialogItem key={d.id} id={d.id} name={d.name}/>));
    const messagesElements = state.messagesData.map((m) => (<Message key={m.id} message={m.message}/>));
    const newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage();
    }
    const onNewMessageChange = (e) => {
        const body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (props.isAuth === false) {
        return <Navigate to={'/login'} />
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea className={s.textarea} value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message' />
                    </div>
                    <div>
                        <button className={s.sendMessageButton} onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;