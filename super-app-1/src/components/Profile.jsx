import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return(
        <div className={classes.content}>
            <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt=""/>
            <div>
                ava + description
            </div>
            <div>
            <div>
                My posts
                <div>
                    New post
                    <div className={classes.posts}>
                        <div className={classes.item}>
                            post1
                        </div>
                        <div className={classes.item}>
                            post2
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Profile;