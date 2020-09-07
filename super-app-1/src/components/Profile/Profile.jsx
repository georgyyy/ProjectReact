import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostsElements } from "../../index";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts PostsElements={PostsElements}/>
        </div>
    )
}

export default Profile;