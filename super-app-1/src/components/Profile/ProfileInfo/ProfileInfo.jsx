import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={classes.content}>
            <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt=""/>
            <div>
                ava + description
            </div>
        </div>

    )
}

export default ProfileInfo;