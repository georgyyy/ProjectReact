import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import Messages from "./components/Dialogs/Message/Messages";
import Post from "./components/Profile/MyPosts/Post/Post";

let DialogsData = [
    {name: "Георгий", id: "1"},
    {name: "Наталья", id: "2"},
    {name: "Владимир", id: "3"},
    {name: "Константин", id: "4"},
    {name: "Елизавета", id: "5"},
    {name: "Александр", id: "6"},
]
let MessagesData = [
    {message: "Hi", id: 1},
    {message: "BUBUBUB", id: 2},
    {message: "WOWWWW", id: 3},
    {message: "SHAKALAKA", id: 4},
]
let DialogsElements = DialogsData.map (dialog => <DialogItem name={dialog.name} id={dialog.id} />);

let MessageElements = MessagesData.map(message => <Messages message={message.message}/>);

let PostsData = [
    {message: "It's my first post", LikesCount: "20 likes"},
    {message: "It's my second post", LikesCount: "21 likes"},
    {message: "It's my third post", LikesCount: "0 likes"},
]

let PostsElements = PostsData.map(p => <Post message={p.message} LikesCount={p.LikesCount} />);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export {DialogsElements,MessageElements,PostsElements};

