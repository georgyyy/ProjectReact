import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div className={classes.content}>
            <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt=""/>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>

    )
}

export default Profile;