import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                {props.PostsElements}
            </div>
        </div>
    )
}

export default MyPosts;