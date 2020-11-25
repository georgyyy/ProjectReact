import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import { AddNewPostActionCreater, UpdatePostTextActionCreater } from "../../../redux/state";


const MyPosts = (props) => {

    let NewPostElement = React.createRef();

    let addPost= () => {
        props.dispatch(AddNewPostActionCreater());
    }

    let PostsElements = props.PostsData.map(p => <Post message={p.message} LikesCount={p.LikesCount}/>);

    let onPostChange = () => {
        let text = NewPostElement.current.value;
        let action=UpdatePostTextActionCreater(text);
        props.dispatch(action);
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostChange} ref={NewPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {PostsElements}
            </div>
        </div>
    )
}

export default MyPosts;