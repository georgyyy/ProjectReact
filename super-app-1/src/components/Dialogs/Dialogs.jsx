import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Messages";

const Dialogs = (props) => {
    let MessageRef = React.createRef();
    let addMessage = () => {
        let action = {type: 'ADD-NEW-MESSAGE'};
        props.dispatch(action);
    }

    let onMessageChange = () => {
        let message = MessageRef.current.value;
        let action = {type: 'UPDATE-NEW-MESSAGE', newtext: message};
        props.dispatch(action);
    }

    let DialogsElements = props.DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let MessageElements = props.MessagesData.map(message => <Messages message={message.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={classes.messages}>
                {MessageElements}
                <div>
                    <textarea onChange={onMessageChange} ref={MessageRef} value={props.NewMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;