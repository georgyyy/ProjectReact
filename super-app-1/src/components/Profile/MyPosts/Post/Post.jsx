import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://d2halst20r4hcy.cloudfront.net/17c/aeedd/1dfe/4ab5/a260/936bd2231ae8/original/229545.jpg" alt=""/>
            {props.message}
            <div>{props.LikesCount}</div>
        </div>
            )
    }

export default Post;