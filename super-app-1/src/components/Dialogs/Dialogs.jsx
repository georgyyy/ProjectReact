import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.DialogElements}
            </div>
            <div className={classes.messages}>
                {props.MessageElements}
            </div>
        </div>
    )
}

export default Dialogs;